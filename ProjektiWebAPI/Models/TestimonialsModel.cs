using System.ComponentModel.DataAnnotations;

namespace ProjektiWebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class TestimonialsModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter testimonials text")]
        [StringLength(50)]
        public string? Text { get; set; }
    }
}
