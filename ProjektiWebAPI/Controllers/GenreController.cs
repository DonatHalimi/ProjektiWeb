﻿using Microsoft.AspNetCore.Mvc;
using ProjektiWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace ProjektiWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly MyDatabase dbContext;

        public GenreController(MyDatabase db)
        {
            dbContext = db;
        }

        // CREATE
        [HttpPost]
        public IActionResult Post(GenreModel genre)
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
        public IActionResult Get()
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
        public IActionResult Put(int id, [FromBody] GenreModel newGenreData)
        {
            try
            {
                var genre = dbContext.Genres.Find(id);

                if (genre == null)
                {
                    return NotFound($"No genre found with the ID {id}");
                }

                if (newGenreData != null)
                {
                    genre.Name = newGenreData.Name;
                }

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
        public IActionResult Delete(int id)
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
        public IActionResult Get(int id)
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