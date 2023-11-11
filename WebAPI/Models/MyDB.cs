using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public class MyDB : DbContext
    {
        public MyDB(DbContextOptions<MyDB> options) : base(options)
        { }

        public DbSet<BookModel> Books { get; set; }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<GenreModel> Genres { get; set; }

    }
}