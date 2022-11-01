using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AddressBookAngular.Infrastructure.Models.Db;
using Microsoft.AspNetCore.Identity;

namespace AddressBookAngular.Models
{
    public class ContactModel : AddContactModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime LastUpdatedDate { get; set; }
    }

    public class AddContactModel
    {
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public AddressTypeEnum AddressType { get; set; }
    }

    public class UpdateContactModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public AddressTypeEnum AddressType { get; set; }
    }
}
