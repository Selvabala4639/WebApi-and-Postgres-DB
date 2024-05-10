using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Medical_API.Data;
using Microsoft.EntityFrameworkCore; 

namespace Medical_API.Controllers
{
    public class ApplicationDBContext : DbContext, IDisposable
{
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> users {get; set;} 
    public DbSet<MedicineInfo> medicines {get; set;}
    public DbSet<OrderInfo> orders {get; set;}
    }
}