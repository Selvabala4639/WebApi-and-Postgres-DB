using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 
using Metro_API.Data;
namespace Metro_API.Controllers
{
   public class ApplicationDBContext : DbContext, IDisposable
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<UserInfo> users {get; set;}
        public DbSet<TravelHistory> travels {get; set;}
        public DbSet<TicketFair> tickets {get; set;}
    }
}