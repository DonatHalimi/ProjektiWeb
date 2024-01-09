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

        // CREATE
        [HttpPost]
        public IActionResult Post(UserModel user)
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

                if (newUserData != null)
                {
                    user.FirstName = newUserData.FirstName;
                    user.LastName = newUserData.LastName;
                    user.Email = newUserData.Email;
                    user.Password = newUserData.Password;
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

        [HttpGet()]
        public List<UserModel> GetList()
        {
            try
            {
                var users = dbContext.Users.ToList();

                if (users.Count != 0)
                {
                    return users;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
