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
    public class TravelHistoryController : ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;
        public TravelHistoryController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

         [HttpGet]
        public IActionResult GetTravelList()
        {
            return Ok(_dbContext.travels.ToList());
        }


        //Getting Particular UserID
        [HttpGet("{id}")]
        public IActionResult GetTravel(int id)
        {
            var travel = _dbContext.travels.FirstOrDefault(m => m.TravelID == id);
            if (travel == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(travel);
        }


        // [HttpGet("{id}")]
        // public IActionResult GetTravelID(int id)
        // {
        //     var travel = _dbContext.travels.FirstOrDefault(m => m.TravelID ==id);
        //     if(travel == null)
        //     {
        //         return NotFound();
        //     }
        //     else{
        //         return Ok(travel);
        //     }
        // }





        


        //Adding new Travel
        [HttpPost]
        public IActionResult AddTravel([FromBody] TravelHistory travel)
        {
            _dbContext.travels.Add(travel);
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTravel(int id, [FromBody] TravelHistory travel)
        {
            var travelOld = _dbContext.travels.FirstOrDefault(m => m.CardNumber == id);
            if (travelOld ==null)
            {
                return NotFound();
            }
            travelOld.TravelID = travel.TravelID;
            travelOld.CardNumber = travel.CardNumber;
            travelOld.FromLocation = travel.FromLocation;
            travelOld.ToLocation = travel.ToLocation;
            travelOld.TravelDate = travel.TravelDate;
            travelOld.TravelCost = travel.TravelCost;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTravel(int id)
        {
            var travel = _dbContext.travels.FirstOrDefault(m => m.TravelID == id);
            if (travel == null)
            {
                return NotFound();
            }
            _dbContext.travels.Remove(travel);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}