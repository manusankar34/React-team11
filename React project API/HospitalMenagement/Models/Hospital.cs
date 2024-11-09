﻿using Microsoft.EntityFrameworkCore;

namespace HospitalMenagement.Models
{
    public class Hospital
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? Gender { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
     

    }


}
