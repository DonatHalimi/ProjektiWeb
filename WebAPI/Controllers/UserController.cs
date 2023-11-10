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
            dbContext.Users.Add(user);
            dbContext.SaveChanges();
            return Ok(user);
        }

        // READ
        [HttpGet]
        public IEnumerable<UserModel> GetUsers()
        {
            return dbContext.Users.ToList();
        }

        // UPDATE
        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, UserModel newUserData)
        {
            var user = dbContext.Users.Find(id);

            if (user == null)
            {
                return NotFound();
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

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = dbContext.Users.Find(id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            try
            {
                dbContext.Users.Remove(user);
                dbContext.SaveChanges();
                return Ok("User deleted successfully");
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
                    return NotFound("User not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}