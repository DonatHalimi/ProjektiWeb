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
    public class UserController : ControllerBase
    {
        private readonly MyDB dbContext;

        public UserController(MyDB db)
        {
            dbContext = db;
        }

        // CREATE
        [HttpPost]
        public IActionResult CreateUser(UserModel user)
        {
            try
            {
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
        public IActionResult GetUsers()
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
        public IActionResult UpdateUser(int id, UserModel newUserData)
        {
            try
            {
                var user = dbContext.Users.Find(id);

                if (user == null)
                {
                    return NotFound($"No user found with the ID {id}");
                }

                user.FirstName = newUserData.FirstName;
                user.LastName = newUserData.LastName;
                user.Email = newUserData.Email;
                user.Birthdate = newUserData.Birthdate;
                user.Username = newUserData.Username;
                user.PasswordHash = newUserData.PasswordHash;
                user.Role = newUserData.Role;

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
        public IActionResult DeleteUser(int id)
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
                return Ok($"User with the ID {id} deleted successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ BY ID
        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
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
