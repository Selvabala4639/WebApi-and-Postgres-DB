using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Grocery_API.Data
{
    [Table("userInfo",Schema ="public")]
    public class UserInfo
    {
    //     userID :any;
    // userName :string;
    // userProfile : string[];
    // userEmail :string;
    // userPassword :string;
    // userPhone :string
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string[] UserProfile { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string UserPhone { get; set; }
        public double UserBalance { get; set; }
        
    }
}