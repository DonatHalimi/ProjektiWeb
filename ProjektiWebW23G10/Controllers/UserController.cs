using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
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
        public IActionResult Index()
        {

            List<UserModel> userList = new List<UserModel>();
            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress +
                "/User/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string data=response.Content.ReadAsStringAsync().Result;
                userList = JsonConvert.DeserializeObject<List<UserModel>>(data);
            }
            return View(userList);
        }


        [HttpGet]
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        public IActionResult Create(UserModel model)
        {
            try
            {
                string data = JsonConvert.SerializeObject(model);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "" +
                    "/User/Post", content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "User Created .";
                    return RedirectToAction("Index");

                }
            }

            catch (Exception ex)
            {
                TempData["errorMessage"] = $"HTTP Request Error: {ex.Message}";
                return View(); 
            }
         
           
            return View();
        }



        [HttpGet]

        public IActionResult Edit(int id) {

            try
            {
                UserModel user = new UserModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress +
                    "/User/Get/" + id).Result;
                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    user = JsonConvert.DeserializeObject<UserModel>(data);
                }
                return View(user);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"]= ex.Message;
                return View(); ;
            }

            
        }

        [HttpPost]
        public IActionResult Edit(UserModel model) {
            try
            {
                string date = JsonConvert.SerializeObject(model);
                StringContent content = new StringContent(date, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PutAsync(_client.BaseAddress +
                    "/User/Put", content).Result;
                if (response.IsSuccessStatusCode)
                {

                    TempData["successMessage"] = "User details updated";
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

        public IActionResult Delete(int id) {
            try
            {
                UserModel user = new UserModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress +
                    "/User/Get" + id).Result;
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


        [HttpPost,ActionName("Delete")]

        public IActionResult DeleteConfirmed(int id) {
            try
            {

                HttpResponseMessage response = _client.DeleteAsync(_client.BaseAddress +
                    "/User/Delete/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "User details deleted";

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


    }
}
