using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace addressBook.angular.Infrastructure.Models.Db
{
    public class Contact
    {
            [Key]
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public long Id { get; set; }
            public string FullName { get; set; }
            public string PhoneNumber { get; set; }
            public string Email { get; set; }
            public string Address { get; set; }
            public DateTime CreatedDate { get; set; } = DateTime.Now;
            public AddressTypeEnum AddressType { get; set; }
    }
}
