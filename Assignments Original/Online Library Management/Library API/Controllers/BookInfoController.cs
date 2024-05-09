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
    public class BookInfoController :ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

         [HttpGet]
        public IActionResult GetBookList()
        {
            return Ok(_dbContext.books.ToList());
        }


        //Getting Particular UserID
        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            var book = _dbContext.books.FirstOrDefault(m => m.BookID == id);
            if (book == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(book);
        }


        //Adding new User
        [HttpPost]
        public IActionResult AddBook([FromBody] BookInfo book)
        {
            _dbContext.books.Add(book);
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, [FromBody] BookInfo book)
        {
            var bookOld = _dbContext.books.FirstOrDefault(m => m.BookID == id);
            if (bookOld ==null)
            {
                return NotFound();
            }
            bookOld.BookID = book.BookID;
            bookOld.BookName = book.BookName;
            bookOld.AuthorName = book.AuthorName;
            bookOld.BookCount = book.BookCount;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}