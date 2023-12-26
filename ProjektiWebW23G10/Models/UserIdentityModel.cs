using Microsoft.AspNetCore.Identity;

namespace ProjektiWebW23G10.Models
{
    public class UserIdentityModel : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
