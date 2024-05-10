using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Grocery_API.Data;
namespace Grocery_API.Controllers
{
     [Route("api/[controller]")]
     [ApiController]
    public class OrderInfoController :ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbContext.orders.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(o => o.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(order);
        }

        [HttpPost]
        public IActionResult AddOrder([FromBody] OrderInfo order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, [FromBody] OrderInfo order)
        {
            var orderOld = _dbContext.orders.FirstOrDefault(o => o.OrderID == id);
            if (orderOld == null)
            {
                return NotFound();
            }
            orderOld.OrderID = order.OrderID;
            orderOld.UserId = order.UserId;
            orderOld.ProductID = order.ProductID;
            orderOld.ProductName = order.ProductName;
            orderOld.ProductQuantity = order.ProductQuantity;
            orderOld.ProductUnitPrice = order.ProductUnitPrice;
            orderOld.ProductAmount = order.ProductAmount;
            orderOld.PurchaseDate = order.PurchaseDate;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(o => o.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.Remove(order);
            _dbContext.SaveChanges();
            return Ok(order);
        }

    }
}