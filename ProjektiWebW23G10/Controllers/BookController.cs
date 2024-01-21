using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using ProjektiWebW23G10.Data;
using ProjektiWebW23G10.Models;
using System.Globalization;
using System.Text;

namespace ProjektiWebW23G10.Controllers
{
 
    public class BookController : Controller
    {
        readonly Uri baseAddress = new Uri("https://localhost:7132/api");

        private readonly HttpClient _client;
        private readonly IWebHostEnvironment _hostingEnvironment; // Add this
        private readonly ApplicationDbContext _context;

        public BookController(ApplicationDbContext context, IWebHostEnvironment hostingEnvironment)
        {
            _context = context;
            _client = new HttpClient();
            _client.BaseAddress = baseAddress;
            _hostingEnvironment = hostingEnvironment;
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
            // Call the method to get the list of genres
            var genreList = GetGenreList();

            // Create a new BookModel with the GenreList populated
            var bookModel = new BookModel
            {
                GenreList = genreList
            };

            return View(bookModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,Author,ISBN,PublicationDate,Genre,Description,Price,CoverImage")] BookModel book, IFormFile coverImage)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (coverImage != null && coverImage.Length > 0)
                    {
                        book.GenreList = GetGenreList();

                        var uploadsFolder = Path.Combine(_hostingEnvironment.WebRootPath, "Images");
                        var uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(coverImage.FileName);
                        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            await coverImage.CopyToAsync(fileStream);
                        }

                        book.CoverImage = uniqueFileName;
                    }

                    string data = JsonConvert.SerializeObject(book);
                    StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                    HttpResponseMessage response = _client.PostAsync(_client.BaseAddress + "/Book/Post", content).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        TempData["successMessage"] = "Book has been created successfully.";
                        return RedirectToAction("Index");
                    }

                    return RedirectToAction(nameof(Index));
                }

                // Move the line here
                book.GenreList = GetGenreList();

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
                TempData["errorMessage"] = ex.Message;
            }
            return View(book);

        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            try
            {
                BookModel book = new BookModel();

                // Retrieve the book details
                HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Book/Get/" + id).Result;

                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    book = JsonConvert.DeserializeObject<BookModel>(data);
                }

                // Ensure GenreList is populated
                book.GenreList = GetGenreList(); // or whatever method you use to get genres

                return View(book);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(int id, BookModel book, IFormFile CoverImage)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // Refresh GenreList first
                    book.GenreList = GetGenreList();

                    if (CoverImage != null && CoverImage.Length > 0)
                    {
                        var uploadsFolder = Path.Combine(_hostingEnvironment.WebRootPath, "Images");
                        var uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(CoverImage.FileName);
                        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            await CoverImage.CopyToAsync(fileStream);
                        }

                        // Only update the cover image if a new one is provided
                        book.CoverImage = uniqueFileName;
                    }

                    string data = JsonConvert.SerializeObject(book);
                    StringContent content = new StringContent(data, Encoding.UTF8, "application/json");

                    HttpResponseMessage response = _client.PutAsync(_client.BaseAddress + $"/Book/Put/{id}", content).Result;

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

                // If ModelState is not valid, return the view with the populated GenreList
                return View(book);
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
        private static HttpContent CreateHttpContent(object content)
        {
            string jsonContent = JsonConvert.SerializeObject(content);
            return new StringContent(jsonContent, Encoding.UTF8, "application/json");
        }

        private List<SelectListItem> GetGenreList()
        {
            // Fetch the list of genres from the API
            HttpResponseMessage response = _client.GetAsync(_client.BaseAddress + "/Genre/Get").Result;

            if (response.IsSuccessStatusCode)
            {
                string data = response.Content.ReadAsStringAsync().Result;
                var genreList = JsonConvert.DeserializeObject<List<GenreModel>>(data);

                // Log or debug statement to check the fetched data
                Console.WriteLine($"Fetched {genreList.Count} genres.");

                // Convert the list of genres to SelectListItems
                return genreList.Select(genre => new SelectListItem
                {
                    Text = genre.Name,
                    Value = genre.Name
                }).ToList();
            }

            // Return an empty list if something goes wrong
            return new List<SelectListItem>();
        }
    }
}