using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Metro_API.Data
{
    [Table("travelHistory", Schema = "public")]
    public class TravelHistory
    {
    //     travelID :String;
    // cardNumber :String;
    // fromLocation :String;
    // toLocation :String;
    // travelDate :string;
    // travelCost :number;
        [Key]
        public int TravelID { get; set; }
        public int CardNumber { get; set; }
        public string FromLocation { get; set; }
        public string ToLocation { get; set; }
        public DateTime TravelDate { get; set; }
        public double TravelCost { get; set; }
    }
}