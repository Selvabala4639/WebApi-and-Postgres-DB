using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grocery_API.Data;
using Microsoft.EntityFrameworkCore;

namespace Grocery_API.Controllers
{
    public class ApplicationDBContext : DbContext, IDisposable
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<OrderInfo> orders {get; set;}
        public DbSet<ProductInfo> products {get; set;}
        public DbSet<UserInfo> users {get; set;}
    }
}