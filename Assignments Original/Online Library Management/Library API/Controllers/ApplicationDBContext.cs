using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library_API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; 
namespace Library_API.Controllers
{
    public class ApplicationDBContext : DbContext, IDisposable
        {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserInfo> users {get; set;}
        public DbSet<BookInfo> books {get;set;}
        public DbSet<BorrowInfo> borrows {get;set;}
    }

    
}