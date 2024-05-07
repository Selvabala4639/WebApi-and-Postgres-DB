using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Metro_API.Data
{
    [Table("userInfo", Schema = "public")]
    public class UserInfo
    {
    //     cardNumber :string;
    // userName: string;
    // userPhone: string;
    // userEmail: string;
    // userPassword : string;
    // userBalance : number;
        [Key]
        public int CardNumber { get; set; }
        public string UserName { get; set; }
        public string UserPhone { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public double UserBalance { get; set; }
    }
}