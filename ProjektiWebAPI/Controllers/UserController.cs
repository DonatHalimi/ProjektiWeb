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
    public class UserController : ControllerBase
    {
        private readonly MyDatabase dbContext;

        public UserController(MyDatabase db)
        {
            dbContext = db;
        }

        private static bool IsValidBirthdate(DateTime? birthdate)
        {
            return birthdate != null && birthdate <= DateTime.Now;
        }

        // CREATE
        [HttpPost]
        public IActionResult Post(UserModel user)
        {
            try
            {
                if (!IsValidBirthdate(user.Birthdate))
                {
                    return BadRequest("Invalid birthdate. Please make sure it is not in the future.");
                }

                dbContext.Users.Add(user);
                dbContext.SaveChanges();
                return Ok(user);
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
                var users = dbContext.Users.ToList();

                if (users.Count != 0)
                {
                    return Ok(users);
                }
                else
                {
                    return NotFound("No users found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] UserModel newUserData)
        {
            try
            {
                var user = dbContext.Users.Find(id);

                if (user == null)
                {
                    return NotFound($"No user found with the ID {id}");
                }

                if (!IsValidBirthdate(newUserData.Birthdate))
                {
                    return BadRequest("Invalid birthdate. Please make sure it is not in the future.");
                }

                if (newUserData != null)
                {
                    user.FirstName = newUserData.FirstName;
                    user.LastName = newUserData.LastName;
                    user.Email = newUserData.Email;
                    user.Birthdate = newUserData.Birthdate;
                    user.Username = newUserData.Username;
                    user.PasswordHash = newUserData.PasswordHash;
                    user.Role = newUserData.Role;
                }

                dbContext.SaveChanges();

                return Ok(user);
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
                var user = dbContext.Users.Find(id);

                if (user == null)
                {
                    return NotFound($"No user found with the ID {id}");
                }

                dbContext.Users.Remove(user);
                dbContext.SaveChanges();
                return Ok($"User with the ID {id} has been deleted successfully!");
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
                var user = dbContext.Users.Find(id);

                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return NotFound($"No user found with the ID {id}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}
