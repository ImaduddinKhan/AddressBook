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
        public async Task<IEnumerable<ContactModel>> GetAll(int PageNumber = 0, int PageSize = 10)
        {
            return await _service.GetAll(PageNumber, PageSize);
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
        public async Task<ActionResult<int>> Put(UpdateContactModel model)
        {
            await _service.Update(model);
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
