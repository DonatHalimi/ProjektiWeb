using System.ComponentModel.DataAnnotations;

namespace ProjektiWebW23G10.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter first name")]
        [StringLength(50)]
        public string? FirstName { get; set; }

        [Required(ErrorMessage = "Please enter last name")]
        [StringLength(50)]
        public string? LastName { get; set; }

        [Required(ErrorMessage = "Please enter email")]
        [EmailAddress]
        [StringLength(100)]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Please enter password")]
        [StringLength(11, MinimumLength = 7)]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Please enter a role")]
        [StringLength(50)]
        public string? Role { get; set; }
    }
}