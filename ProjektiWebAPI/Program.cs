using Microsoft.EntityFrameworkCore;
using ProjektiWebAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

// Retrieve the connection string from configuration
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Check if the connection string is not null
if (connectionString != null)
{
    // Add DbContext configuration for SQL Server
    builder.Services.AddDbContext<MyDatabase>(options =>
        options.UseSqlServer(connectionString));
}
else
{
    throw new ApplicationException("Database connection string not found in configuration.");
}

var app = builder.Build();


app.UseCors(builder =>
{
    builder.WithOrigins("http://localhost:3000")
           .AllowAnyHeader()
           .AllowAnyMethod()
           .AllowCredentials();
});



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name v1");
    });
}
app.UseCors("AllowLocalhost");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();