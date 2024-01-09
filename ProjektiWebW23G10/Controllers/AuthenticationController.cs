using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjektiWebW23G10.Data;

namespace ProjektiWebW23G10.Controllers
{
    public class AuthenticationController
    {
        [Authorize(Roles = "Admin")]
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

                return View();
            }
        }
    }
}
