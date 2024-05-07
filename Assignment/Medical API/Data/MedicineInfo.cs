using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Medical_API.Data
{
    [Table("medicineInfo", Schema = "public")]
    public class MedicineInfo
    {
    //    medicineID: number;
    // medicineName: string;
    // medicinePrice: number;
    // medicineQuantity: number;
    // medicineExpireDate: Date;
        [Key]
        public int MedicineID { get; set; }
        public string MedicineName { get; set; }
        public double MedicinePrice { get; set; }
        public int MedicineQuantity { get; set; }
        public string MedicineExpireDate { get; set; }
    }
}