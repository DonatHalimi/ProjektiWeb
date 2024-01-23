using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
    public class TestimonialsController : Controller
    {


        readonly Uri baseAddress = new Uri("https://localhost:7132/api");

        private readonly HttpClient _client;

        public TestimonialsController()
        {
            _client = new HttpClient();
            _client.BaseAddress = baseAddress;
        }


        [HttpGet]
        public IActionResult Index(int pg = 1)
        {
            List<TestimonialsModel> testimonialsList = new List<TestimonialsModel>();

            // Fetch data from the API endpoint
            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Testimonials/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string apiData = response.Content.ReadAsStringAsync().Result; // Rename 'data' to 'apiData'
                testimonialsList = JsonConvert.DeserializeObject<List<TestimonialsModel>>(apiData);
            }

            const int pageSize = 10;
            if (pg < 1)
                pg = 1;

            int recsCount = testimonialsList.Count();

            var pager = new Pager(recsCount, pg, pageSize);

            int recSkip = (pg - 1) * pageSize;
            var paginatedData = testimonialsList.Skip(recSkip).Take(pager.PageSize).ToList(); // Rename 'data' to 'paginatedData'

            ViewBag.Pager = pager;

            return View(paginatedData);
        }


        [Authorize(Roles = "User")]
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [Authorize(Roles = "User")]
        [HttpPost]
        public IActionResult Create(TestimonialsModel testimonials)
        {
            try
            {
                string data = JsonConvert.SerializeObject(testimonials);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "/Testimonials/Post", content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Testimonials has been created successfully.";
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

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Edit(int id)
        {
            try
            {
                TestimonialsModel testimonials = new TestimonialsModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Testimonials/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    testimonials = JsonConvert.DeserializeObject<TestimonialsModel>(data);
                }
                return View(testimonials);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
        }

        [Authorize(Roles = "Admin")]
        // EDIT
        [HttpPost]
        public IActionResult Edit(int id, TestimonialsModel testimonials)
        {
            try
            {
                string data = JsonConvert.SerializeObject(testimonials);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");

                HttpResponseMessage response = _client.PutAsync(_client.BaseAddress + "/Testimonials/Put/" + id, content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Genre details updated successfully.";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["errorMessage"] = "Failed to update genre details.";
                    return View(testimonials);
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View(testimonials);
            }
        }



        [HttpGet]
        public IActionResult Details(int id)
        {
            try
            {
                TestimonialsModel testimonials = new TestimonialsModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Testimonials/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    testimonials = JsonConvert.DeserializeObject<TestimonialsModel>(data);
                    return View(testimonials);
                }
                else
                {
                    TempData["errorMessage"] = "Failed to retrieve book details.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction("Index");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Delete(int id)
        {
            try
            {
                TestimonialsModel testimonials = new TestimonialsModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Testimonials/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    testimonials = JsonConvert.DeserializeObject<TestimonialsModel>(data);
                    return View(testimonials);
                }
                else
                {
                    TempData["errorMessage"] = "Failed to retrieve genre details for deletion.";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return RedirectToAction("Index");
            }
        }
        [Authorize(Roles = "Admin")]
        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            try
            {
                HttpResponseMessage response = _client.DeleteAsync(_client.BaseAddress + "/Testimonials/Delete/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Genre has been deleted successfully.";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["errorMessage"] = "Failed to delete book details.";
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
