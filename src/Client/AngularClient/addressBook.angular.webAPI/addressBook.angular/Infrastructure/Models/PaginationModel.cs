using System.Collections.Generic;

namespace AddressBookAngular.Infrastructure.Models
{

    public class PaginationData<T>
    {
        public int DataCount { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}
