using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ProjektiWebW23G10.Models
{
    public class BookModel
    {
        public int Id { get; set; }

        [RegularExpression(@"^[A-Z][a-zA-Z\s.,;:'-ë]*$", ErrorMessage = "Description must start with an uppercase letter and can contain letters, spaces, '.', ',', ';', ':', and '-' only.")]
        [StringLength(60, MinimumLength = 2)]
        [Required]
        [DisplayName("Book Name")]
        public string? Title { get; set; } = string.Empty;

        [RegularExpression(@"^[A-Z][a-zA-Z\s.,;:'-]*$", ErrorMessage = "Description must start with an uppercase letter and can contain letters, spaces, '.', ',', ';', ':', and '-' only.")]
        [Required]
        [StringLength(60, MinimumLength = 2)]
        public string? Author { get; set; } = string.Empty;

        [RegularExpression(@"^[0-9]{13}$", ErrorMessage = "Invalid ISBN format. It should be 13 digits.")]
        public string ISBN { get; set; } = string.Empty;

        [Display(Name = "Publication Date")]
        [DataType(DataType.Date)]
        public DateTime? PublicationDate { get; set; }

        [Required]
        [Display(Name = "Genre")]
        public string? Genre { get; set; } = string.Empty;

        [NotMapped]
        [ValidateNever]
        public IEnumerable<SelectListItem> GenreList { get; set; }

        [RegularExpression(@"^[A-Z][a-zA-Z\s.,;:'-ë]*$", ErrorMessage = "Description must start with an uppercase letter and can contain letters, spaces, '.', ',', ';', ':', and '-' only.")]
        [Required(ErrorMessage = "Description is required.")]
        [StringLength(1000, MinimumLength = 10, ErrorMessage = "Description must be between 10 and 1000 characters.")]
        public string? Description { get; set; } = string.Empty;

        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }

        public string? CoverImage { get; set; }
    }
}
