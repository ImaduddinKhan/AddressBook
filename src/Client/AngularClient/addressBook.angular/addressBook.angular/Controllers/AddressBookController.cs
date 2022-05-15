using addressBook.angular.Models;
using addressBook.angular.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace addressBook.angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressBookController : ControllerBase
    {
        public readonly IAddressBookRepository _AddressBookRepository;

        public AddressBookController(IAddressBookRepository addressBookRepository)
        {
            _AddressBookRepository = addressBookRepository;
        }


        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IEnumerable<Contact>> Get()
        {
            return await _AddressBookRepository.GetAll<Contact>();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<Contact> Get(long id)
        {
            var model = await _AddressBookRepository.GetById<Contact>(id);
            if (model == null)
            {
                NotFound();
            }
            return model;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<Contact>> Create(Contact model)
        {
            await _AddressBookRepository.Create(model);
            return CreatedAtAction("Get", new { id = model.Id }, model);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Contact>> Put(long id, Contact model)
        {
            if (id != model.Id)
            {
                NotFound();
            }
            await _AddressBookRepository.Update(model);
            return Ok();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> Delete(long id)
        {
            var getContact = await _AddressBookRepository.GetById<Contact>(id);
            if (getContact == null)
            {
                NotFound();
            }
            await _AddressBookRepository.Delete<Contact>(getContact);
            return getContact;
        }
    }
}
