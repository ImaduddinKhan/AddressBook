using AddressBook.Core.Models.db;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AddressBook.Infrastructure.DBContext
{
    public class ABContext : DbContext
    {
        public ABContext(DbContextOptions<ABContext> options) : base(options)
        {
        }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("ContactsAddressBook");
        }
    }
}
