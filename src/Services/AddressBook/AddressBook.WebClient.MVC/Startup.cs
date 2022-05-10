using AddressBook.Core.Models.Application;
using AddressBook.Core.Models.db;
using AddressBook.Core.Repository;
using AddressBook.Core.Services;
using AddressBook.Infrastructure;
using AddressBook.Infrastructure.DBContext;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.WebClient.MVC
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ABContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultStr")));
            var config = new MapperConfiguration(mc =>
            {
                mc.CreateMap<ContactModel, Contact>().ReverseMap();
                mc.CreateMap<AddContactModel, Contact>();
                mc.CreateMap<UpdateContactModel, Contact>();
            });
            services.AddSingleton(config.CreateMapper());
            services.AddControllersWithViews(); 
            services.AddScoped<IABRepository, ABRepository>();
            services.AddScoped<IABService, ABService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
