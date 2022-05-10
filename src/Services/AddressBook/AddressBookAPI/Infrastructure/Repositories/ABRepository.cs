using AddressBook.Infrastructure.db;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Infrastructure.Repositories
{
    public class ABRepository : IABRepository
    {
        private readonly ABContext _context;

        public ABRepository(ABContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Contact>> GetAll(int PageIndex, int PageSize)
        {
            return await _context.Contacts.Skip(PageIndex).Take(PageSize).ToListAsync();

        }

        public async Task<Contact> GetById(int id)
        {
            return await _context.Contacts.FindAsync(id);
        }

        public async Task<int> Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            return await SaveChanges();
        }

        public async Task<int> UpdateContact(Contact contact)
        {
            Contact.LastUpdatedDate = DateTime.UtcNow;
            return await SaveChanges();
        }

        public void Delete(Contact contact)
        {
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
        }

        public async Task<int> SaveChanges()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
