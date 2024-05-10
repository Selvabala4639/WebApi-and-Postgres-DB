using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Medical_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Medical_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderInfoController : ControllerBase
    {
        // private static List<OrderInfo> _OrderInfo = new List<OrderInfo>
        // {
        //     new OrderInfo{OrderID=1,MedicineID=1, UserID=1,MedicineName="Paracetomol",Quantity=2,OrderDate="05/05/2024",TotalPrice=20, OrderStatus="Ordered"},
        //     new OrderInfo{OrderID=2,MedicineID=1, UserID=1,MedicineName="Paracetomol",Quantity=2,OrderDate="05/05/2024",TotalPrice=20, OrderStatus="Ordered"}
        // };
        private readonly ApplicationDBContext _dbContext;
        public OrderInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }
        
        [HttpGet]
        public IActionResult GetOrderList()
        {
            return Ok(_dbContext.orders.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(m => m.OrderID == id);
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
            // You might want to return CreatedAtAction or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, [FromBody] OrderInfo order)
        {
            var orderOld = _dbContext.orders.FirstOrDefault(m => m.OrderID == id);
            if (orderOld == null)
            {
                return NotFound();
            }
            orderOld.MedicineID = order.MedicineID;
            orderOld.OrderID = order.OrderID;
            orderOld.MedicineName = order.MedicineName;
            orderOld.Quantity = order.Quantity;
            orderOld.OrderDate = order.OrderDate;
            orderOld.TotalPrice = order.TotalPrice;
            orderOld.OrderStatus = order.OrderStatus;
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }

        // Deleting an existing medicine
        // DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(m => m.OrderID == id);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}