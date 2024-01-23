using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
    [Authorize(Roles = "Admin")]
    public class UserController : Controller
    {
        readonly Uri baseAddress = new Uri("https://localhost:7132/api");

        private readonly HttpClient _client;

        public UserController()
        {
            _client = new HttpClient();
            _client.BaseAddress = baseAddress;
        }

        [HttpGet]
        public IActionResult Index(int pg = 1)
        {
            List<UserModel> userList = new List<UserModel>();

            // Fetch data from the API endpoint
            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/User/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string apiData = response.Content.ReadAsStringAsync().Result; // Rename 'data' to 'apiData'
                userList = JsonConvert.DeserializeObject<List<UserModel>>(apiData);
            }

            const int pageSize = 10;
            if (pg < 1)
                pg = 1;

            int recsCount = userList.Count();

            var pager = new Pager(recsCount, pg, pageSize);

            int recSkip = (pg - 1) * pageSize;
            var paginatedData = userList.Skip(recSkip).Take(pager.PageSize).ToList(); // Rename 'data' to 'paginatedData'

            ViewBag.Pager = pager;

            return View(paginatedData);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(UserModel user)
        {
            try
            {
                string data = JsonConvert.SerializeObject(user);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "/User/Post", content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "User has been created successfully.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
            return View();
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            try
            {
                UserModel user = new UserModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/User/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserModel>(data);
                }
                return View(user);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
        }

        [HttpPost]
        public IActionResult Edit(int id, UserModel user)
        {
            try
            {
                string data = JsonConvert.SerializeObject(user);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");

                HttpResponseMessage response = _client.PutAsync(_client.BaseAddress + "/User/Put/" + id, content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "User details updated successfully.";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["errorMessage"] = "Failed to update user details.";
                    return View(user);
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View(user);
            }
        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            try
            {
                UserModel user = new UserModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/User/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserModel>(data);
                    return View(user);
                }
                else
                {
                    TempData["errorMessage"] = "Failed to retrieve user details.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            try
            {
                UserModel user = new UserModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/User/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserModel>(data);
                    return View(user);
                }
                else
                {
                    TempData["errorMessage"] = "Failed to retrieve user details for deletion.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction("Index");
            }
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            try
            {
                HttpResponseMessage response = _client.DeleteAsync(_client.BaseAddress + "/User/Delete/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "User has been deleted successfully.";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["errorMessage"] = "Failed to delete user details.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction("Index");
            }
        }
    }
}