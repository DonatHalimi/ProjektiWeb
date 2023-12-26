using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ProjektiWebAPI.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektiWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserIdentityController : ControllerBase
    {
        private readonly UserManager<UserIdentityModel> _userManager;
        private readonly MyDatabase _dbContext;

        public UserIdentityController(UserManager<UserIdentityModel> userManager, MyDatabase dbContext)
        {
            _userManager = userManager;
            _dbContext = dbContext;
        }

        // CREATE
        [HttpPost]
        public async Task<IActionResult> Post(UserIdentityModel user)
        {
            try
            {
                var result = await _userManager.CreateAsync(user, user.PasswordHash);

                if (result.Succeeded)
                {
                    _dbContext.ApplicationUsers.Add(user);
                    _dbContext.SaveChanges();
                    return Ok(user);
                }
                else
                {
                    return BadRequest(result.Errors);
                }
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
                var users = _dbContext.ApplicationUsers.ToList();

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
        public async Task<IActionResult> Put(string id, [FromBody] UserIdentityModel newUserData)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);

                if (user == null)
                {
                    return NotFound($"No user found with the ID {id}");
                }

                // Update user properties
                user.FirstName = newUserData.FirstName;
                user.LastName = newUserData.LastName;
                user.Email = newUserData.Email;

                // Update password if provided
                if (!string.IsNullOrEmpty(newUserData.PasswordHash))
                {
                    var result = await _userManager.ChangePasswordAsync(user, null, newUserData.PasswordHash);

                    if (!result.Succeeded)
                    {
                        return BadRequest(result.Errors);
                    }
                }

                var updateResult = await _userManager.UpdateAsync(user);

                if (updateResult.Succeeded)
                {
                    // Also, update the user in your dbContext
                    _dbContext.ApplicationUsers.Update(user);
                    _dbContext.SaveChanges();

                    return Ok(user);
                }
                else
                {
                    return BadRequest(updateResult.Errors);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);

                if (user == null)
                {
                    return NotFound($"No user found with the ID {id}");
                }

                var result = await _userManager.DeleteAsync(user);

                if (result.Succeeded)
                {
                    _dbContext.ApplicationUsers.Remove(user);
                    _dbContext.SaveChanges();
                    return Ok($"User with the ID {id} has been deleted successfully!");
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // READ BY ID
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(id);

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