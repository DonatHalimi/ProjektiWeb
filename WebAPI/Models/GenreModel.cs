// GenreModel.cs

using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class GenreModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string? Name { get; set; }
    }
}
