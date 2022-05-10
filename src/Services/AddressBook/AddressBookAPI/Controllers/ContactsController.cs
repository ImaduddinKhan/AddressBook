using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AddressBook.Core.Services;
using AddressBook.Core.Models.Application;

namespace AddressBook.WebApi.Controllers
{
    [Route("api/v1")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IABService _services;

        public ContactsController(IABService services)
        {
            _services = services;
        }

        [HttpGet]
        public async Task<IEnumerable<ContactModel>> GetAll(int PageIndex = 0, int PageSize = 1) 
            => await _services.GetAll(PageIndex, PageSize);

        [HttpGet("{id}")]
        public async Task<ContactModel> GetById(int id) 
            => await _services.GetById(id);


        [HttpPost]
        public async Task<ActionResult<int>> Post(AddContactModel ContactModel) 
            => await _services.Create(ContactModel);
        //return Ok(CreatedAtAction("GetAll", new { id = contact.Id  }, ContactModel));

        [HttpPut("{id}")]
        public async Task<ActionResult<int>> Update(UpdateContactModel ContactModel)
        {
            await _services.UpdateContact(ContactModel);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task DeleteContact(int id) 
            =>  await _services.Delete(id);
    }
}
