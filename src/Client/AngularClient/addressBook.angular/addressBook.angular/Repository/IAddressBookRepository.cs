using addressBook.angular.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace addressBook.angular.Repository
{
    public interface IAddressBookRepository
    {
        Task<IEnumerable<T>> GetAll<T>() where T : class;
        Task<T> GetById<T>(long id) where T : class;
        Task Create<T>(T entity) where T : class;
        Task Update<T>(T entity) where T : class;
        Task Delete<T>(T entity) where T : class;
    }
}
