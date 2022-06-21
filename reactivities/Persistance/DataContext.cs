using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Domain;
namespace Persistance 
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions options):base(options){

        }
        public DbSet<Activity> Activities { get; set; }
    }
}