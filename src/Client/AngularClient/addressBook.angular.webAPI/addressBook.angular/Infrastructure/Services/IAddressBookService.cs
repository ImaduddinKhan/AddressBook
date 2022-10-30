using AddressBookAngular.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBookAngular.Infrastructure.Services
{
    public interface IAddressBookService
    {
        Task<IEnumerable<ContactModel>> GetAll(int pageNumber, int pageSize);
        Task<ContactModel> GetById(int id);
        Task<int> Create(AddContactModel model);
        Task<int> Update(int id, UpdateContactModel model);
        Task Delete(int id);
    }
}
