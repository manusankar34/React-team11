namespace HospitalMenagement.Models
{
    public class Appointment
    {

        public int Id { get; set; }
        public int? PatientID { get; set; }
        public int? DoctorID { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public string? Status { get; set; }

        public  string? Contact_number { get; set; }
        public string? PatientName { get; set; }

        public string? DoctorName { get; set; }
    }
}
