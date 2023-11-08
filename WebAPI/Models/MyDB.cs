using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public class MyDB : DbContext
    {
        public MyDB(DbContextOptions<MyDB> options) : base(options)
        { }

        public DbSet<Book> Books { get; set; }
    }
}