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
       public class UserInfoController : ControllerBase
    {
        // private static List<UserInfo> _UserInfo = new List<UserInfo>
        // {
        //     new UserInfo{UserID = 1, UserName = "Selva", UserEmail="selva@gmail.com", UserPassword="Selva@123", UserPhone="9025976622", UserBalance=10000},
        //     new UserInfo{UserID = 2, UserName = "Bala", UserEmail="bala@gmail.com", UserPassword="Bala@123", UserPhone="9025976622", UserBalance=464000}
        // };

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
            var user = _dbContext.users.FirstOrDefault(m => m.CardNumber == id);
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
            var userOld = _dbContext.users.FirstOrDefault(m => m.CardNumber == id);
            if (userOld ==null)
            {
                return NotFound();
            }
            userOld.CardNumber = user.CardNumber;
            userOld.UserName = user.UserName;
            userOld.UserEmail = user.UserEmail;
            userOld.UserPassword = user.UserPassword;
            userOld.UserPhone = user.UserPhone;
            userOld.UserBalance = user.UserBalance;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}