using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalMenagement.Models
{
    public class Registration
    {

        public int Id { get; set; }

        public string? PatientName { get; set; }

        public int? Age { get; set; }

        public string? Gender { get; set; }

        public string? ContactNumber { get; set; }

        public string? Address { get; set; }

        public string? UserName { get; set; }

        public string? MailId { get; set; }

        public string? Password { get; set; }
        

    }
}
