using AddressBookAngular.Infrastructure.DbContexts;
using AddressBookAngular.Infrastructure.Models.Db;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBookAngular.Repository
{
    public class AddressBookRepository : IAddressBookRepository
    {
        private readonly AddressBookDbContext _db;

        public AddressBookRepository(AddressBookDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Contact>> GetAll(int PageNumber, int PageSize)
        {
            return await _db.Contacts.Skip(PageNumber).Take(PageSize).ToListAsync();
        }

        public async Task<Contact> GetById(int id)
        {
            return await _db.Contacts.FindAsync(id);
        }

        public async Task<int> CreateContact(Contact model)
        {
            await _db.Contacts.AddAsync(model);
            return await SaveChanges();
        }

        public async Task<int> UpdateContact(Contact contact)
        {
            Contact.LastUpdatedDate = DateTime.UtcNow;
            return await SaveChanges();
        }

        public void Delete(Contact contact)
        {
            _db.Contacts.Remove(contact);
            _db.SaveChanges();
        }

        public async Task<int> SaveChanges()
        {
            return await _db.SaveChangesAsync();
        }
    }
}
