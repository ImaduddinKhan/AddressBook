using AddressBookAngular.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBookAngular.Infrastructure.Services
{
    public interface IAddressBookService
    {
        Task Create(AddContactModel model);
        Task<IEnumerable<ContactModel>> GetAll(int pageNumber, int pageSize);
        Task<ContactModel> GetById(int id);
        Task Update(UpdateContactModel model);
        Task Delete(int id);
    }
}
