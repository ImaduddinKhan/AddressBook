using AddressBook.Core.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Core.Models.Application
{
    public class ContactModel : AddContactModel
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }

    public class AddContactModel
    {
        [Required]
        public string FullName { get; set; }
        [Required]
        public int PhoneNumber { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Address { get; set; }
        [Required]
        public AddressTypeEnum AddressType { get; set; }
    }

    public class UpdateContactModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public AddressTypeEnum AddressType { get; set; }
    }
}
