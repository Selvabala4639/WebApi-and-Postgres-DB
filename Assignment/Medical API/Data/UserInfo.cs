using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Medical_API.Data
{
    [Table("userInfo", Schema = "public")]
    public class UserInfo
    {
    //     UserId :string;
    // UserName :string;
    // UserEmail: string;
    // UserPassword : string;
    // UserPhone: string;
    // UserBalance : number;
    [Key]
    public int UserID { get; set; }
    public string UserName { get; set; }
    public string UserEmail { get; set; }
    public string UserPassword { get; set; }
    public string UserPhone { get; set; }
    public double UserBalance { get; set; }
    }
}