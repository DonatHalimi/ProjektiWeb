namespace WebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class BookModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string? Title { get; set; }

        [Required]
        [StringLength(50)]
        public string? Author { get; set; }

        [StringLength(20)]
        public string? ISBN { get; set; }

        [Display(Name = "Publication Date")]
        [DataType(DataType.Date)]
        public DateTime? PublicationDate { get; set; }

        [StringLength(50)]
        public string? Genre { get; set; }

        [StringLength(500)]
        public string? Description { get; set; }

        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }

        [Display(Name = "Cover Image URL")]
        [Url]
        public string? CoverImage { get; set; }
    }
}
