using addressBook.angular.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace addressBook.angular.Repository
{
    public class AddressBookRepository : IAddressBookRepository
    {
        public readonly Context _context;

        public AddressBookRepository(Context context)
        {
            _context = context;
        }

        public async Task Create<T>(T entity) where T : class
        {
            _ = await _context.Set<T>().AddAsync(entity);
            _ = await _context.SaveChangesAsync();
        }

        public async Task Delete<T>(T entity) where T : class
        {
            _context.Set<T>().Remove(entity);
            _ = await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll<T>() where T : class
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetById<T>(long id) where T : class
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task Update<T>(T entity) where T : class
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
