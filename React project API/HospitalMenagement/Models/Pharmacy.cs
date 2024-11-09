namespace HospitalMenagement.Models
{
    public class Pharmacy
    {

        public int Id { get; set; }

        public string? MedicineName { get; set; }

        public int? QuantityInStock { get; set; }

        public Double? Price { get; set; }
    }
}
