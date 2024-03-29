﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace ProjektiWebAPI.Models
{
    public class MyDatabase : IdentityDbContext
    {
        public MyDatabase(DbContextOptions<MyDatabase> options) : base(options)
        { }

        public DbSet<BookModel>? Books { get; set; }
        public DbSet<UserModel>? Users { get; set; }
        public DbSet<GenreModel>? Genres { get; set; }

        public DbSet<TestimonialsModel>? Testimonials { get; set; }
        public DbSet<UserIdentityModel>? ApplicationUsers { get; set; }
    }
}