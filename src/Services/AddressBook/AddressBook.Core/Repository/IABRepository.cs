using AddressBook.Core.Models.db;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Core.Repository
{
    public interface IABRepository
    {
        Task<IEnumerable<Contact>> GetAll(int PageIndex, int PageSize);
        Task<Contact> GetById(int id);
        Task<int> Create(Contact contact);
        Task<int> UpdateContact(Contact contact);
        void Delete(Contact contact);
        Task<int> SaveChanges();
    }
}
