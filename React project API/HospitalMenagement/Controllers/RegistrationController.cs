using HospitalMenagement.Data;
using HospitalMenagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalMenagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RegistrationController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> Getregistation()
        {
            //return (IActionResult)await _context.Appointments.ToListAsync();

            var registrations = await _context.Registration.ToListAsync();
            return Ok(registrations);
        }

        [HttpPost]
        public async Task<IActionResult> Postregistation(Registration registration)
        {
            _context.Registration.Add(registration);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Getregistation), new { id = registration.Id }, registration);
        }

        [HttpGet("{username}/{password}")]
        public async Task<IActionResult> Login(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return BadRequest("Username and password are required.");
            }

            var user = await _context.Registration
                .FirstOrDefaultAsync(x => x.UserName == username && x.Password == password);

            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok("Success");
        }

    }
}
