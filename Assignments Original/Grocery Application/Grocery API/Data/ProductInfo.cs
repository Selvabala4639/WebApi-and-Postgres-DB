using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Grocery_API.Data
{
    [Table("productInfo",Schema ="public")]
    public class ProductInfo
    {
    //         productID :any;
    // productName: string;
    // productAvailableQuantity :number;
    // productUnitPrice :number;
    // productPurchaseDate : Date;
    // productExpiryDate :Date;
    // productPhoto :string[];
    [Key]
    public int ProductID { get; set; }
    public string ProductName { get; set; }
    public int ProductAvailableQuantity { get; set; }
    public double ProductUnitPrice { get; set; }
    public DateTime ProductPurchaseDate { get; set; }
    public DateTime ProductExpiryDate { get; set; }
    public string[] ProductPhoto { get; set; }
    }
}