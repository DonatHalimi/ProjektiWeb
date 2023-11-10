using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly MyDB dbContext;

        public BookController(MyDB db)
        {
            dbContext = db;
        }

        // CREATE
        [HttpPost]
        public IActionResult CreateBook(BookModel book)
        {
            dbContext.Books.Add(book);
            dbContext.SaveChanges();
            return Ok(book);
        }

        // READ
        [HttpGet]
        public IEnumerable<BookModel> GetBooks()
        {
            return dbContext.Books.ToList();
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, BookModel newBookData)
        {
            var book = dbContext.Books.Find(id);

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

            dbContext.SaveChanges();

            return Ok(book);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = dbContext.Books.Find(id);

            if (book == null)
            {
                return NotFound("Book not found");
            }

            try
            {
                dbContext.Books.Remove(book);
                dbContext.SaveChanges();
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
                var book = dbContext.Books.Find(id);

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
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}