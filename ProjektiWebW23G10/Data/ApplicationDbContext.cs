using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjektiWebW23G10.Models;

namespace ProjektiWebW23G10.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<BookModel>? BookModel { get; set; }
        public DbSet<GenreModel>? GenreModel { get; set; }
        public DbSet<UserModel>? UserModel { get; set; }
        public DbSet<ProjektiWebW23G10.Models.TestimonialsModel>? TestimonialsModel { get; set; }


    }
}