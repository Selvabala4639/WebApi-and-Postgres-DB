using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Metro_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Metro_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketFairController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TicketFairController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetTicketList()
        {
            return Ok(_dbContext.tickets.ToList());
        }


        //Getting Particular Ticket
        [HttpGet("{id}")]
        public IActionResult GetTicket(int id)
        {
            var ticket = _dbContext.tickets.FirstOrDefault(m => m.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(ticket);
        }


        //Adding new Travel
        [HttpPost]
        public IActionResult AddTicket([FromBody] TicketFair ticket)
        {
            _dbContext.tickets.Add(ticket);
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTicket(int id, [FromBody] TicketFair ticket)
        {
            var ticketOld = _dbContext.tickets.FirstOrDefault(m => m.TicketID == id);
            if (ticketOld ==null)
            {
                return NotFound();
            }
            ticketOld.TicketID = ticket.TicketID;
            ticketOld.FromLocation = ticket.FromLocation;
            ticketOld.ToLocation = ticket.ToLocation;
            ticketOld.TicketPrice = ticket.TicketPrice;
            
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var ticket = _dbContext.tickets.FirstOrDefault(m => m.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }
            _dbContext.tickets.Remove(ticket);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}