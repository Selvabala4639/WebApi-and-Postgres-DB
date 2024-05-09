using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
 
namespace API.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
    public class UserInfoController :ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUserList()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(m => m.UserID ==id);
            if(user ==null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            return Ok();
        }

        [HttpPut]
        public IActionResult Updatuser(int id, [FromBody] UserInfo user)
        {
            var userOld = _dbContext.users.FirstOrDefault(m => m.UserID ==id);
            if(userOld ==null)
            {
                return NotFound();
            }
            userOld.UserName =user.UserName;
            return Ok();
        }
    }
}