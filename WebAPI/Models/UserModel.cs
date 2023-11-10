namespace WebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string? FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string? LastName { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string? Email { get; set; }

        [DataType(DataType.Date)]
        public DateTime? Birthdate { get; set; }

        [Required]
        [StringLength(50)]
        public string? Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? PasswordHash { get; set; }

        [Required]
        [StringLength(50)]
        public string? Role { get; set; }
    }
}