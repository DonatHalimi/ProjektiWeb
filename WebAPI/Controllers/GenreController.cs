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
    public class GenreController : ControllerBase
    {
        private readonly MyDB dbContext;

        public GenreController(MyDB db)
        {
            dbContext = db;
        }

        // CREATE
        [HttpPost]
        public IActionResult CreateGenre(GenreModel genre)
        {
            try
            {
                dbContext.Genres.Add(genre);
                dbContext.SaveChanges();
                return Ok(genre);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ
        [HttpGet]
        public IActionResult GetGenres()
        {
            try
            {
                var genres = dbContext.Genres.ToList();

                if (genres.Count != 0)
                {
                    return Ok(genres);
                }
                else
                {
                    return NotFound("No genres found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult UpdateGenre(int id, GenreModel newGenreData)
        {
            try
            {
                var genre = dbContext.Genres.Find(id);

                if (genre == null)
                {
                    return NotFound($"No genre found with the ID {id}");
                }

                genre.Name = newGenreData.Name;

                dbContext.SaveChanges();

                return Ok(genre);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteGenre(int id)
        {
            try
            {
                var genre = dbContext.Genres.Find(id);

                if (genre == null)
                {
                    return NotFound($"No genre found with the ID {id}");
                }

                dbContext.Genres.Remove(genre);
                dbContext.SaveChanges();
                return Ok($"Genre with the ID {id} has been deleted successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ BY ID
        [HttpGet("{id}")]
        public IActionResult GetGenreById(int id)
        {
            try
            {
                var genre = dbContext.Genres.Find(id);

                if (genre != null)
                {
                    return Ok(genre);
                }
                else
                {
                    return NotFound($"No genre found with the ID {id}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}