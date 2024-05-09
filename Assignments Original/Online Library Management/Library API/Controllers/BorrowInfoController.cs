using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Library_API.Data;
namespace Library_API.Controllers
{
     [Route("api/[controller]")]
     [ApiController]
    public class BorrowInfoController :ControllerBase
    {
        
         private readonly ApplicationDBContext _dbContext;
        public BorrowInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

         [HttpGet]
        public IActionResult GetBorrowList()
        {
            return Ok(_dbContext.borrows.ToList());
        }


        //Getting Particular UserID
        [HttpGet("{id}")]
        public IActionResult GetBorrow(int id)
        {
            var borrow = _dbContext.borrows.FirstOrDefault(m => m.BorrowID == id);
            if (borrow == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(borrow);
        }


        //Adding new User
        [HttpPost]
        public IActionResult AddBorrow([FromBody] BorrowInfo borrow)
        {
            _dbContext.borrows.Add(borrow);
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBorrow(int id, [FromBody] BorrowInfo borrow)
        {
            var borrowOld = _dbContext.borrows.FirstOrDefault(m => m.BorrowID == id);
            if (borrowOld ==null)
            {
                return NotFound();
            }
            borrowOld.BorrowID = borrow.BorrowID;
            borrowOld.BookID = borrow.BookID;
            borrowOld.UserID = borrow.UserID;
            borrowOld.BorrowDate = borrow.BorrowDate;
            borrowOld.BorrowBookCount = borrow.BorrowBookCount;
            borrowOld.Status = borrow.Status;
            borrowOld.PaidFineAmount = borrow.PaidFineAmount;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}