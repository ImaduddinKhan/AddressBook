using AddressBookAngular.Infrastructure.Models;
using AddressBookAngular.Infrastructure.Services;
using AddressBookAngular.Models;
using AddressBookAngular.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AddressBookAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressBookController : ControllerBase
    {
        public readonly IAddressBookService _service;

        public AddressBookController(IAddressBookService addressBookService)
        {
            _service = addressBookService;
        }


        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<PaginationData<ContactModel>> GetAll(
            string qName,
            string orderBy,
            bool isDesc,
            int pageNumber = 0,
            int pageSize = 1000)
        {
            return await _service.GetAllPaginatedContacts(qName, orderBy, isDesc, pageNumber, pageSize);
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ContactModel> GetById(int id) => await _service.GetById(id);

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<int>> Post(AddContactModel model)
        {
            await _service.Create(model);
            return Ok();
            //return CreatedAtAction("Get", new { id = model.Id }, model);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<int>> Put(int id, UpdateContactModel model)
        {
            await _service.Update(id, model);
            return Ok();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _service.Delete(id);
        }
    }
}
