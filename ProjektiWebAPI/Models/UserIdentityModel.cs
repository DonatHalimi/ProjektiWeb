using Microsoft.AspNetCore.Identity;

namespace ProjektiWebAPI.Models
{
    public class UserIdentityModel : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}