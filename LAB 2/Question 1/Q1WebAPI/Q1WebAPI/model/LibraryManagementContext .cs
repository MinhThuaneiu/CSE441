  using Microsoft.EntityFrameworkCore;
  using System.Data;

    namespace Q1WebAPI.model
    {
        public class LibraryManagementContext : DbContext
        {
            public LibraryManagementContext(DbContextOptions<LibraryManagementContext> options) : base(options) { }
            public DbSet<Book> Book { get; set; }
           
        }
    }

