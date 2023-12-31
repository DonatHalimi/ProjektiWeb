﻿namespace ProjektiWebAPI.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

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
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Please enter a role")]
        [StringLength(50)]
        public string? Role { get; set; }
    }
}