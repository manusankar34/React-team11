using HospitalMenagement.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalMenagement.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) 
        {

        }
     



        public DbSet<Hospital> Hospitals { get;  set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<Doctors> doctorss { get; set; }

        public DbSet <Billing> Billing { get; set; }

        public DbSet<Pharmacy> Pharmacy { get; set;}

        public DbSet<Registration> Registration { get; set; }
    }
}
