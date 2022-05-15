using System;

namespace addressBook.angular.Models
{
    public class Contact
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public AddressType AddressType { get; set; }
    }
}
