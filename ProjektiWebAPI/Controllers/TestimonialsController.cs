using Microsoft.AspNetCore.Mvc;
using ProjektiWebAPI.Models;

namespace ProjektiWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TestimonialsController : ControllerBase
    {

      
            private readonly MyDatabase dbContext;

            public TestimonialsController(MyDatabase db)
            {
                dbContext = db;
            }

        // CREATE
        [HttpPost]
        public IActionResult Post(TestimonialsModel testimonials)
        {
            try
            {
                dbContext.Testimonials.Add(testimonials);
                dbContext.SaveChanges();
                return Ok(testimonials);
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
                var testimonials = dbContext.Testimonials.ToList();

                if (testimonials.Count != 0)
                {
                    return Ok(testimonials);
                }
                else
                {
                    return NotFound("No testimonials found.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }


        // UPDATE
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] TestimonialsModel newTestimonialsData)
        {
            try
            {
                var testimonials = dbContext.Testimonials.Find(id);

                if (testimonials == null)
                {
                    return NotFound($"No testimonials found with the ID {id}");
                }

                if (newTestimonialsData != null)
                {
                    testimonials.Text = newTestimonialsData.Text;
                }

                dbContext.SaveChanges();

                return Ok(testimonials);
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
                var testimonials = dbContext.Testimonials.Find(id);

                if (testimonials == null)
                {
                    return NotFound($"No testimonials found with the ID {id}");
                }

                dbContext.Testimonials.Remove(testimonials);
                dbContext.SaveChanges();
                return Ok($"Testimonials with the ID {id} has been deleted successfully!");
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
                var testimonials = dbContext.Testimonials.Find(id);

                if (testimonials != null)
                {
                    return Ok(testimonials);
                }
                else
                {
                    return NotFound($"No testimonials found with the ID {id}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

    }
}
