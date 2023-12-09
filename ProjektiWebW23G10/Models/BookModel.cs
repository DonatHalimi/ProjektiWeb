using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace ProjektiWebW23G10.Models
{
    public class BookModel
    {
        public int Id { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [StringLength(60, MinimumLength = 2)]
        [Required]
        [DisplayName("Book Name")]
        public string? Title { get; set; } = string.Empty;

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Required]
        [StringLength(60, MinimumLength = 2)]
        public string? Author { get; set; } = string.Empty;

        [RegularExpression(@"^[0-9]{13}$", ErrorMessage = "Invalid ISBN format. It should be 13 digits.")]
        public string ISBN { get; set; } = string.Empty;

        [Display(Name = "Publication Date")]
        [DataType(DataType.Date)]
        public DateTime? PublicationDate { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string? Genre { get; set; } = string.Empty;

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Required]
        [StringLength(500, MinimumLength = 10)]
        public string? Description { get; set; } = string.Empty;

        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }

        [Display(Name = "Cover Image URL")]
        [Url]
        public string? CoverImage { get; set; }
    }
}
