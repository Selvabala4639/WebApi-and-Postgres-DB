using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
	using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Library_API.Data
{
    [Table("userInfo", Schema = "public")]
    public class UserInfo
    {
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Department { get; set; }
        public string MobileNumber { get; set; }
        public string MailID { get; set; }
        public string Password { get; set; }
        public double WalletBalance { get; set; }
    }
}