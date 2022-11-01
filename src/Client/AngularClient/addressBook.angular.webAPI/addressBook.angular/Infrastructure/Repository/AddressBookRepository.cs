using AddressBookAngular.Infrastructure.DbContexts;
using AddressBookAngular.Infrastructure.Models;
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

        private IQueryable<Contact> _GetAll(int pageNumber, int pageSize)
        {
            var contacts = _db.Contacts.Skip(pageNumber).Take(pageSize).OrderBy(c => c.FullName);
            return contacts;
        }

        public async Task<IEnumerable<Contact>> GetAll(int pageNumber, int pageSize)
        {
            var contacts = await _GetAll(pageNumber, pageSize).ToListAsync();
            return contacts;
        }

        public async Task<PaginationData<Contact>> GetAllPaginatedContacts(
            string qName = null,
            string orderBy = null,
            bool isDesc = false,
            int pageNumber = 0,
            int pageSize = 1000)
        {
            if (pageSize > 100)
                pageSize = 100;

            var paginationData = new PaginationData<Contact>();
            var query = _db.Contacts.AsQueryable();

            if (!string.IsNullOrWhiteSpace(qName))
                query = query.Where(i => qName == i.FullName);

            paginationData.DataCount = query.Count();

            if (!string.IsNullOrWhiteSpace(orderBy))
            {
                if (orderBy == "name")
                    query = isDesc ? query.OrderByDescending(i => i.FullName) : query.OrderBy(i => i.FullName);

                else if (orderBy == "mobile")
                    query = isDesc ? query.OrderByDescending(i => i.PhoneNumber) : query.OrderBy(i => i.PhoneNumber);
            }

            query = query.Skip(pageNumber * pageSize).Take(pageSize);
            paginationData.Data = await query.ToListAsync();
            return paginationData;
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
