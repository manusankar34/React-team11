using HospitalMenagement.Data;
using HospitalMenagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalMenagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context; 

        public PatientsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetPatients()
        {
            //return (IActionResult)await _context.Patients.ToListAsync();
            var Patients = await _context.Patients.ToListAsync();
            return Ok(Patients);
        }

        [HttpPost]
        public async Task<IActionResult> postPatient(Patient patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPatients), new { id = patient.Id }, patient);
        }
    }
}

