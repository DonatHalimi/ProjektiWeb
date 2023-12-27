using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ProjektiWebAPI.Models
{
    public class MyDatabase : DbContext
    {
        public MyDatabase(DbContextOptions<MyDatabase> options) : base(options)
        { }

        public DbSet<BookModel> Books { get; set; }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<GenreModel> Genres { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
    }
}