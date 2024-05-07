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
    public class UserInfoController :ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

         [HttpGet]
        public IActionResult GetUserList()
        {
            return Ok(_dbContext.users.ToList());
        }


        //Getting Particular UserID
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(m => m.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(user);
        }


        //Adding new User
        [HttpPost]
        public IActionResult AddUser([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] UserInfo user)
        {
            var userOld = _dbContext.users.FirstOrDefault(m => m.UserID == id);
            if (userOld ==null)
            {
                return NotFound();
            }
            userOld.UserID = user.UserID;
            userOld.UserName = user.UserName;
            userOld.Gender = user.Gender;
            userOld.Department = user.Department;
            userOld.MobileNumber = user.MobileNumber;
            userOld.MailID = user.MailID;
            userOld.Password = user.Password;
            userOld.WalletBalance = user.WalletBalance;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}