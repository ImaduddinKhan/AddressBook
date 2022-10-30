using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace AddressBookAngular.Infrastructure.Models.Db
{
    public class Contact
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public static DateTime LastUpdatedDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public AddressTypeEnum AddressType { get; set; }

        public Contact()
        {
            AddressType = AddressTypeEnum.Home;
        }
    }
}
