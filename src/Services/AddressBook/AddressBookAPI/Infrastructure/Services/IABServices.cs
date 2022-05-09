using AddressBook.Infrastructure.db;
using AddressBook.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Infrastructure.Services
{
    public interface IABServices
    {
        Task<IEnumerable<ContactModel>> GetAll(int PageIndex, int PageSize);
        Task<ContactModel> GetById(int id);
        Task<int> Create(AddContactModel contact);
        Task<int> UpdateContact(UpdateContactModel contact);
        Task Delete(int id);
    }
}
