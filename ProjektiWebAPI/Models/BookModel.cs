namespace ProjektiWebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class BookModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Author is required")]
        public string Author { get; set; }

        [Required(ErrorMessage = "ISBN is required")]
        // [RegularExpression(@"^[a-zA-Z0-9]*$", ErrorMessage = "ISBN can only contain alphanumeric characters")]
        // [StringLength(13, ErrorMessage = "ISBN must be exactly 13 characters", MinimumLength = 13)]
        public string ISBN { get; set; }

        [Required(ErrorMessage = "Publication Date is required")]
        [Display(Name = "Publication Date")]
        [DataType(DataType.Date)]
        public DateTime? PublicationDate { get; set; }

        [Required(ErrorMessage = "Book genre is required")]
        [StringLength(50)]
        public string? Genre { get; set; }

        [Required(ErrorMessage = "Book description is required")]
        [StringLength(500)]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Book price is required")]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }

        public string? CoverImage { get; set; }
    }
}