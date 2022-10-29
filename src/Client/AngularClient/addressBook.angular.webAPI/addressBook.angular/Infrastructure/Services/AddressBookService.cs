using AddressBookAngular.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBookAngular.Infrastructure.Services
{
    public class AddressBookService : IAddressBookService
    {
        public Task<IEnumerable<ContactModel>> GetAll(int pageNumber, int pageSize)
        {
            throw new System.NotImplementedException();
        }

        public Task<ContactModel> GetById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task Create(AddContactModel model)
        {
            throw new System.NotImplementedException();
        }

        public Task Update(UpdateContactModel model)
        {
            throw new System.NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new System.NotImplementedException();
        }

    }
}
