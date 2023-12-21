using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System.Globalization;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
    [Authorize]
    public class BookController : Controller
    {
        readonly Uri baseAddress = new Uri("https://localhost:7132/api");

        private readonly HttpClient _client;

        public BookController()
        {
            _client = new HttpClient();
            _client.BaseAddress = baseAddress;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<BookModel> bookList = new List<BookModel>();

            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Book/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                bookList = JsonConvert.DeserializeObject<List<BookModel>>(data);
            }
            return View(bookList);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(BookModel book)
        {
            try
            {
                string data = JsonConvert.SerializeObject(book);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "/Book/Post", content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Book has been created successfully.";
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
                BookModel book = new BookModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Book/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    book = JsonConvert.DeserializeObject<BookModel>(data);
                }
                return View(book);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
        }

        // EDIT
        [HttpPost]
        public IActionResult Edit(int id, BookModel book)
        {
            try
            {
                string data = JsonConvert.SerializeObject(book);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");

                HttpResponseMessage response = _client.PutAsync(_client.BaseAddress + "/Book/Put/" + id, content).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Book details updated successfully.";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["errorMessage"] = "Failed to update book details.";
                    return View(book);
                }
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View(book);
            }
        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            try
            {
                BookModel book = new BookModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Book/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    book = JsonConvert.DeserializeObject<BookModel>(data);
                    return View(book);
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

        [HttpGet]
        public IActionResult Delete(int id)
        {
            try
            {
                BookModel book = new BookModel();
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Book/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    book = JsonConvert.DeserializeObject<BookModel>(data);
                    return View(book);
                }
                else
                {
                    TempData["errorMessage"] = "Failed to retrieve book details for deletion.";
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
                HttpResponseMessage response = _client.DeleteAsync(_client.BaseAddress + "/Book/Delete/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    TempData["successMessage"] = "Book has been deleted successfully.";
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