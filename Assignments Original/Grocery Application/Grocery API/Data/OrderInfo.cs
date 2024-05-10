using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Grocery_API.Data
{
    [Table("orderInfo",Schema ="public")]
    public class OrderInfo
    {
    //      orderID :any;
    // userId:any;
    // productID :number;
    // productName: string;
    // productQuantity :number;
    // productUnitPrice :number;
    // productAmount :number;
    // productTotalAmount : number;
    // purchaseDate: Date;
        [Key]
        public int OrderID { get; set; }
        public int UserId { get; set; }
        public int[] ProductID { get; set; }
        public string[] ProductName { get; set; }
        public int[] ProductQuantity { get; set; }
        public double[] ProductUnitPrice { get; set; }
        public double[] ProductAmount { get; set; }
        public double BillAmount{ get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}