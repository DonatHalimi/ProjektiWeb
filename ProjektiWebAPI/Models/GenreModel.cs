namespace ProjektiWebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class GenreModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter genre name")]
        [StringLength(50)]
        public string? Name { get; set; }
    }
}
