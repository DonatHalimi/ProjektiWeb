using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private MyDB _db { get; set; }
        public BookController(MyDB db)
        {
            _db = db;
        }

        // CREATE
        [HttpPost]
        public Book CreateBooks(Book books)
        {
            _db.Books.Add(books);
            _db.SaveChanges();
            return books;
        }

        // READ
        [HttpGet]
        public IEnumerable<Book> GetBooks()
        {
            return _db.Books.ToList();
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book newBookData)
        {
            var book = _db.Books.Find(id);

            if (book == null)
            {
                return NotFound();
            }

            book.Title = newBookData.Title;
            book.Author = newBookData.Author;
            book.ISBN = newBookData.ISBN;
            book.PublicationDate = newBookData.PublicationDate;
            book.Genre = newBookData.Genre;
            book.Description = newBookData.Description;
            book.Price = newBookData.Price;
            book.CoverImage = newBookData.CoverImage;

            _db.SaveChanges();

            return Ok(book);
        }

        // DELETE
        [HttpDelete]
        public IActionResult DeleteBook(int id)
        {
            var book = _db.Books.Find(id);

            if (book == null)
            {
                return NotFound("Book not found");
            }

            try
            {
                _db.Books.Remove(book);
                _db.SaveChanges();
                return Ok("Book deleted successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ BY ID
        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            try
            {
                var book = _db.Books.Find(id);

                if (book != null)
                {
                    return Ok(book);
                }
                else
                {
                    return NotFound("Book not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving the book.");
            }
        }
    }
}
