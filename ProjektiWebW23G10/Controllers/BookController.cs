using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProjektiWebW23G10.Models;
using System.Globalization;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
    public class BookController : Controller
    {
        Uri baseAddress = new Uri("https://localhost:7132/api");

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


        [HttpPost]
        public async Task<IActionResult> Create(BookModel book)
        {
            try
            {
                var json = JsonConvert.SerializeObject(book);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await _client.PostAsync(_client.BaseAddress + "/Book/Create", content);

                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Create");
                }
                else
                {
                    return View("Error");
                }
            }
            catch (Exception ex)
            {
                return View("Error");
            }
        }
    }
}