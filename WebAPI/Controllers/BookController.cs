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
            try
            {
                dbContext.Books.Add(book);
                dbContext.SaveChanges();
                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ
        [HttpGet]
        public IActionResult GetBooks()
        {
            try
            {
                var books = dbContext.Books.ToList();

                if (books.Count != 0)
                {
                    return Ok(books);
                }
                else
                {
                    return NotFound("No books found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, BookModel newBookData)
        {
            try
            {
                var book = dbContext.Books.Find(id);

                if (book == null)
                {
                    return NotFound($"No book found with the ID {id}");
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            try
            {
                var book = dbContext.Books.Find(id);

                if (book == null)
                {
                    return NotFound($"No book found with the ID {id}");
                }

                dbContext.Books.Remove(book);
                dbContext.SaveChanges();
                return Ok($"Book with the ID {id} deleted successfully!");
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
                    return NotFound($"No book found with the ID {id}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}