using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace ProjektiWebW23G10.Models
{
    public class GenreModel
    {
        public int Id { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$", ErrorMessage = "Start with upper case")]
        [StringLength(50, MinimumLength = 2)]
        [Required]
        [DisplayName("Genre Name")]
        public string? Name { get; set; } = string.Empty;

        
    }
}
