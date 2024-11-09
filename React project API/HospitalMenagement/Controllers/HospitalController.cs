using HospitalMenagement.Data;
using HospitalMenagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalMenagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HospitalController(ApplicationDbContext context)
        {
            this._context = context;
        }

        [HttpGet("doctor")]
        public async Task<IActionResult> GetDoctors()
        {
            var Doctors = await _context.doctorss.ToListAsync();
            return Ok(Doctors);
        }

        [HttpPost("doctor")]
        public async Task<IActionResult> PostDoctors(Doctors doctors)
        {
            _context.doctorss.Add(doctors);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDoctors), new { id = doctors.Id }, doctors);
        }

        [HttpGet("get-billing")]
        public async Task<ActionResult<IEnumerable<Billing>>>GetBilling()
        {
            return await _context.Billing.ToListAsync();
            
        }

        [HttpPost("post-billing")]
        public async Task<IActionResult> PostBilling(Billing billing)
        {
            var data = new Billing()
            {
                BillPatientID = billing.BillPatientID,
                Amount = billing.Amount,
                PaymentStatus = billing.PaymentStatus
            };

            _context.Billing.Add(data);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetBilling), new { id = billing.Id }, billing);
        }

        [HttpGet("get-pharmacy")]
        public async Task<IActionResult> GetPharmacy()
        {
            var pharmacy = await _context.Pharmacy.ToListAsync();
            return Ok(pharmacy);
        }

        [HttpPost("post-pharmacy")]
        public async Task<IActionResult> PostPharmacy(Pharmacy pharmacy)
        {
            _context.Pharmacy.Add(pharmacy);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPharmacy), new { id = pharmacy.Id }, pharmacy);
        }
    }
}


