using AddressBookAngular.Infrastructure.Models.Db;
using AddressBookAngular.Models;
using AddressBookAngular.Repository;
using AutoMapper;
using System.Collections.Generic;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AddressBookAngular.Infrastructure.Services
{
    public class AddressBookService : IAddressBookService
    {

        private readonly IAddressBookRepository _repo;

        private readonly IMapper _mapper;

        public AddressBookService(IAddressBookRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ContactModel>> GetAll(int pageNumber, int pageSize)
        {
            var list = await _repo.GetAll(pageNumber, pageSize);
            var modelList = _mapper.Map<List<ContactModel>>(list);
            return modelList;
        }

        public async Task<ContactModel> GetById(int id)
        {
            return _mapper.Map<ContactModel>(await _repo.GetById(id));
        }

        public async Task<int> Create(AddContactModel model)
        {
            var dbContact = new Contact();
            dbContact = _mapper.Map<Contact>(model);
            return await _repo.CreateContact(dbContact);
        }

        public async Task<int> Update(int id, UpdateContactModel model)
        {
            var contact = await _repo.GetById(model.Id);

            contact.FullName = model.FullName;
            contact.Email = model.Email;
            contact.PhoneNumber = model.PhoneNumber;
            contact.Address = model.Address;

            return await _repo.UpdateContact(contact);
        }

        public async Task Delete(int id)
        {
            var contact = await _repo.GetById(id);
            if (contact == null)
            {
                // Error
            }
            else
                _repo.Delete(contact);
        }

    }
}
