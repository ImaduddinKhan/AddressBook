using AddressBook.Core.Models.Application;
using AddressBook.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AddressBook.WebClient.MVC.Controllers
{
    public class AddressBookController : Controller
    {
        private readonly IABService _services;

        public AddressBookController(IABService services)
        {
            _services = services;
        }

        // GET: AddressBookController
        public async Task<ActionResult> Index(int PageIndex = 0, int PageSize = 100)
        {
            var listView = await _services.GetAll(PageIndex, PageSize);
            return View(listView);
        }

        // GET: AddressBookController/Details/5
        public async Task<ActionResult> Details(int id)
        {
            var getId = await _services.GetById(id);
            return View(getId);
        }

        // GET: AddressBookController/Create
        public ActionResult Create()
        {
            return View(new AddContactModel());
        }

        // POST: AddressBookController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(AddContactModel ContactModel)
        {
            try
            {
                await _services.Create(ContactModel);
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View(new AddContactModel());
            }
        }

        // GET: AddressBookController/Edit/5
        public async Task<ActionResult> Edit(int id)
        {
            var getId = await _services.GetById(id);
            return View(new UpdateContactModel()
            {
                FullName = getId.FullName,
                PhoneNumber = getId.PhoneNumber,
                Address = getId.Address,
                Email = getId.Email,
                AddressType = getId.AddressType,
                Id = getId.Id,
            });
        }

        // POST: AddressBookController/Edit/5
        [HttpPost]
        public async Task<ActionResult> Edit(UpdateContactModel ContactModel)
        {
            try
            {
                await _services.UpdateContact(ContactModel);
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View(new UpdateContactModel());
            }
        }

        // GET: AddressBookController/Delete/5
        public async Task<ActionResult> Delete(int id)
        {
            var getId = await _services.GetById(id);
            return View(getId);
        }

        // POST: AddressBookController/Delete/5
        [HttpPost]
        public async Task<ActionResult> Delete(int id, ContactModel ContactModel)
        {
            try
            {
                await _services.Delete(id);
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
