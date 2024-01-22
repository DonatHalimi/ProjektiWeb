using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace ProjektiWebW23G10.Models
{
    public class TestimonialsModel
    {
        public int Id { get; set; }

        
        [StringLength(50, MinimumLength = 2)]
        [Required]
        [DisplayName("Testimonials")]
        public string? Text { get; set; } = string.Empty;


    }
}
