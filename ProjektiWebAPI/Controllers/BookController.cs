using Microsoft.AspNetCore.Mvc;
using ProjektiWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace ProjektiWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly MyDatabase dbContext;

        public BookController(MyDatabase db)
        {
            dbContext = db;
        }

        private static bool isValidPublicationDate(DateTime? publicationDate)
        {
            return publicationDate != null && publicationDate <= DateTime.Now;
        }

        // CREATE
        [HttpPost]
        public IActionResult Post(BookModel book)
        {
            try
            {
                if (!isValidPublicationDate(book.PublicationDate))
                {
                    return BadRequest("Invalid Publication Date. Please make sure it is not in the future.");
                }

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
        public IActionResult Get()
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
        public IActionResult Put(int id, [FromBody] BookModel newBookData)
        {
            try
            {
                var book = dbContext.Books.Find(id);

                if (book == null)
                {
                    return NotFound($"No book found with the ID {id}");
                }

                if (!isValidPublicationDate(newBookData.PublicationDate))
                {
                    return BadRequest("Invalid Publication Date. Please make sure it is not in the future.");
                }

                if (newBookData != null)
                {
                    book.Title = newBookData.Title;
                    book.Author = newBookData.Author;
                    book.ISBN = newBookData.ISBN;
                    book.PublicationDate = newBookData.PublicationDate;
                    book.Genre = newBookData.Genre;
                    book.Description = newBookData.Description;
                    book.Price = newBookData.Price;
                    book.CoverImage = newBookData.CoverImage;
                }

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
        public IActionResult Delete(int id)
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
                return Ok($"Book with the ID {id} has been deleted successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ BY ID
        [HttpGet("{id}")]
        public IActionResult Get(int id)
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