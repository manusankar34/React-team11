namespace HospitalMenagement.Models
{
    public class Doctors
    {

        public int Id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Specialization { get; }

        public string? PhoneNumber { get; set; }
    }
}
