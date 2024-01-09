using Microsoft.AspNetCore.Mvc;
using ProjektiWebAPI.Models;

namespace ProjektiWebAPI.Controllers
{
    public class AuthenticationController
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

            private static bool isValidUserModel(UserModel userModel)
            {
                if (userModel == null)
                    return false;
                return true;
            }

            // CREATE
            [HttpPost]
            public IActionResult Post(UserModel user)
            {
                try
                {
                    if (!isValidUserModel(user))
                    {
                        return BadRequest("Invalid user model.");
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
        }
    }
}
