using AddressBookAngular.Infrastructure.Models.Db;
using Microsoft.EntityFrameworkCore;

namespace AddressBookAngular.Infrastructure.DbContexts
{
    public class AddressBookDbContext : DbContext
    {
        public AddressBookDbContext(DbContextOptions<AddressBookDbContext> options) : base(options)
        {
        }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("AddressBookContacts");
        }
    }
}
