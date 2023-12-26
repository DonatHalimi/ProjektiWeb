using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace ProjektiWebW23G10.Controllers
{
    [Authorize(Roles = "Admin")]
    public class UserIdentityController : Controller
    {
        readonly Uri baseAddress = new Uri("https://localhost:7132/api");

        private readonly HttpClient _client;
        private readonly RoleManager<IdentityRole> _roleManager;  // Add this line
        private readonly UserManager<UserIdentityModel> _userManager;

        public UserIdentityController(RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            _client = new HttpClient();
            _client.BaseAddress = baseAddress;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<UserIdentityModel> userList = new List<UserIdentityModel>();

            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/UserIdentity/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                userList = JsonConvert.DeserializeObject<List<UserIdentityModel>>(data);
            }
            return View(userList);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(UserIdentityModel user)
        {
            try
            {
                string data = JsonConvert.SerializeObject(user);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "/UserIdentity/Post", content).Result;

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
        public IActionResult Edit(string id)
        {
            try
            {
                UserIdentityModel user = new UserIdentityModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/UserIdentity/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserIdentityModel>(data);
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
        public IActionResult Edit(string id, UserIdentityModel user)
        {
            try
            {
                string data = JsonConvert.SerializeObject(user);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");

                HttpResponseMessage response = _client.PutAsync(_client.BaseAddress + "/UserIdentity/Put/" + id, content).Result;

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
        public IActionResult Details(string id)
        {
            try
            {
                UserIdentityModel user = new UserIdentityModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/UserIdentity/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserIdentityModel>(data);
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
        public IActionResult Delete(string id)
        {
            try
            {
                UserIdentityModel user = new UserIdentityModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + $"/UserIdentity/Get/{id}").Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserIdentityModel>(data);
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
        public IActionResult DeleteConfirmed(string id)
        {
            try
            {
                HttpResponseMessage response = _client.DeleteAsync(_client.BaseAddress + "/UserIdentity/Delete/" + id).Result;

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