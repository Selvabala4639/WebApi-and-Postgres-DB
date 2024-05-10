using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grocery_API.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
namespace Grocery_API.Controllers
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
        public IActionResult GetUser()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(u => u.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody] UserInfo user)
        {
            var userOld = _dbContext.users.FirstOrDefault(u => u.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.UserID = user.UserID;
            userOld.UserName = user.UserName;
            userOld.UserProfile = user.UserProfile;
            userOld.UserEmail = user.UserEmail;
            userOld.UserPassword = user.UserPassword;
            userOld.UserPhone = user.UserPhone;
            userOld.UserBalance = user.UserBalance;

            _dbContext.SaveChanges();
            return Ok();
        }
    }
}