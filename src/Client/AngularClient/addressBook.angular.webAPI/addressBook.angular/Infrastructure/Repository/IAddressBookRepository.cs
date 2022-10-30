using AddressBookAngular.Infrastructure.Models.Db;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBookAngular.Repository
{
    public interface IAddressBookRepository
    {
        Task<IEnumerable<Contact>> GetAll(int pageNumber, int pageSize);
        Task<Contact> GetById(int id);
        Task<int> CreateContact(Contact model);
        Task<int> UpdateContact(Contact model);
        void Delete(Contact contact);
        Task<int> SaveChanges();
    }
}
