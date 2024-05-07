using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Medical_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Medical_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineInfoController : ControllerBase
    {
        // private static List<MedicineInfo> _MedicineInfo = new List<MedicineInfo>
        // {
        //     new MedicineInfo {MedicineID=1, MedicineName="Paracetomol", MedicinePrice=5, MedicineQuantity=10, MedicineExpireDate="2024-11-30"},
        //     new MedicineInfo {MedicineID=2, MedicineName="Dolo", MedicinePrice=5, MedicineQuantity=10, MedicineExpireDate="2024-11-30"}
        // };
        private readonly ApplicationDBContext _dbContext;
        public MedicineInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }
        [HttpGet]
        public IActionResult GetMedicineList()
        {
            return Ok(_dbContext.medicines.ToList());
        }

        //Getting particular medicine
        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
             _dbContext.SaveChanges();

            return Ok(medicine);
        }

        //Adding new Medicine
        [HttpPost]
        public IActionResult AddMedicine([FromBody] MedicineInfo medicine)
        {
            _dbContext.medicines.Add(medicine);
            // You might want to return CreatedAtAction or another appropriate response
             _dbContext.SaveChanges();
            return Ok();
        }


        // Updating an existing medicine
        // PUT: api/Contacts/1
        [HttpPut("{id}")]
        public IActionResult UpdateMedicine(int id, [FromBody] MedicineInfo medicine)
        {
            var medicineOld = _dbContext.medicines.FirstOrDefault(m => m.MedicineID == id);
            if (medicineOld == null)
            {
                return NotFound();
            }
            medicineOld.MedicineName = medicine.MedicineName;
            medicineOld.MedicinePrice = medicine.MedicinePrice;
            medicineOld.MedicineQuantity = medicine.MedicineQuantity;
            medicineOld.MedicineExpireDate = medicine.MedicineExpireDate;
           
            // You might want to return NoContent or another appropriate response
            _dbContext.SaveChanges();
            return Ok();
        }


        // Deleting an existing medicine
        // DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(m => m.MedicineID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }



    
    
}