using AddressBook.Core.Models;
using AddressBook.Core.Models.Application;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace AddressBook.Core.Services
{
    public interface IABService
    {
        Task<IEnumerable<ContactModel>> GetAll(int PageIndex, int PageSize);
        Task<ContactModel> GetById(int id);
        Task<int> Create(AddContactModel contactModel);
        Task<int> UpdateContact(UpdateContactModel contactModel);
        Task Delete(int id);

    }
}
