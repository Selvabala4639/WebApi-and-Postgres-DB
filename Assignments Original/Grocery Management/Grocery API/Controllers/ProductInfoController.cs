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
    public class ProductInfoController : ControllerBase
    {
         private readonly ApplicationDBContext _dbContext;
        public ProductInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext= applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_dbContext.products.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var product = _dbContext.products.FirstOrDefault(o => o.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }
            _dbContext.SaveChanges();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] ProductInfo product)
        {
            _dbContext.products.Add(product);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, [FromBody] ProductInfo product)
        {
            var productOld = _dbContext.products.FirstOrDefault(o => o.ProductID == id);
            if (productOld == null)
            {
                return NotFound();
            }
            productOld.ProductID = product.ProductID;
            productOld.ProductName = product.ProductName;
            productOld.ProductAvailableQuantity = product.ProductAvailableQuantity;
            productOld.ProductUnitPrice = product.ProductUnitPrice;
            productOld.ProductPurchaseDate = product.ProductPurchaseDate;
            productOld.ProductExpiryDate = product.ProductExpiryDate;
            productOld.ProductPhoto = product.ProductPhoto;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var product = _dbContext.products.FirstOrDefault(o => o.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }
            _dbContext.Remove(product);
            _dbContext.SaveChanges();
            return Ok(product);
        }
    }
}