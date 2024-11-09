namespace HospitalMenagement.Models
{
    public class Billing
    {
        public int Id { get; set; }

        public int? BillPatientID { get; set; }

        public double? Amount { get; set; }

        public int? PaymentStatus { get; set; }
    }
}
