using AddressBook.Core.Models.db;
using AddressBook.Core.Repository;
using AddressBook.Core.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AddressBook.Core.Models.Application;

namespace AddressBook.Core.Services
{
    public class ABService : IABService
    {
        private readonly IABRepository _repo;
        private readonly IMapper _mapper;

        public ABService(IABRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ContactModel>> GetAll(int PageIndex, int PageSize)
        {
            var iEnumerable =  await _repo.GetAll(PageIndex, PageSize);
            var modelList = _mapper.Map<List<ContactModel>>(iEnumerable);
            return modelList;
        }

        public async Task<ContactModel> GetById(int id)
        {
            return _mapper.Map<ContactModel>(await _repo.GetById(id));
        }

        public async Task<int> Create(AddContactModel contactModel)
        {
            var dbContact = new Contact();
            dbContact = _mapper.Map<Contact>(contactModel);
            return await _repo.Create(dbContact);
        }

        public async Task<int> UpdateContact(UpdateContactModel contactModel)
        {
            var contact = await _repo.GetById(contactModel.Id);
            //Todo: Exception Handling
            contact.FullName = contactModel.FullName;
            contact.Email = contactModel.Email;
            contact.PhoneNumber = contactModel.PhoneNumber;
            contact.Address = contactModel.Address;

            return await _repo.UpdateContact(contact);
        }
        public async Task Delete(int id)
        {
            var contact = await _repo.GetById(id);
            if(contact == null)
            {
                // Error Handling
            }
            else
            _repo.Delete(contact);
        }

    }
}
