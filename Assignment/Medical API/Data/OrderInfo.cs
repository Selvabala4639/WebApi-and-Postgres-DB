using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Medical_API.Data
{
    [Table("orderInfo", Schema = "public")]
    public class OrderInfo
    {
    //     OrderId : string;
    // MedicineId : string;
    // UserID : string;
    // MedicineName : string;
    // Quantity : number;
    // OrderDate : Date;
    // TotalPrice : number;
    // OrderStatus : string;
    [Key]
    public int OrderID { get; set; }
    public int MedicineID { get; set; }
    public int UserID { get; set; }
    public string MedicineName { get; set; }
    public int Quantity { get; set; }
    public string OrderDate { get; set; }
    public double TotalPrice { get; set; }
    public string OrderStatus { get; set; }
    }
}