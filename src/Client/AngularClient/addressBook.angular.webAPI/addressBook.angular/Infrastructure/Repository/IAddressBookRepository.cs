using AddressBookAngular.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBookAngular.Repository
{
    public interface IAddressBookRepository
    {
        Task Create(ContactModel model);
        Task<IEnumerable<ContactModel>> GetAll(int pageNumber, int pageSize);
        Task<ContactModel> GetById(int id);
        Task Update(ContactModel model);
        Task Delete(int id);
    }
}
