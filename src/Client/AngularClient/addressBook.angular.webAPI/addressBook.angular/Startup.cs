using AddressBookAngular.Infrastructure.DbContexts;
using AddressBookAngular.Infrastructure.Models.Db;
using AddressBookAngular.Infrastructure.Services;
using AddressBookAngular.Models;
using AddressBookAngular.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AddressBookAngular
{
    public class Startup
    {
        private const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AddressBookDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ContactModel, Contact>().ReverseMap();
                cfg.CreateMap<AddContactModel, Contact>();
                cfg.CreateMap<UpdateContactModel, Contact>();
            });
            services.AddSingleton(configuration.CreateMapper());
            services.AddScoped<IAddressBookRepository, AddressBookRepository>();
            services.AddScoped<IAddressBookService, AddressBookService>();
            services.AddControllers();
            services.AddControllersWithViews();

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy
                                      .AllowAnyOrigin()
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                      //.WithOrigins("http://localhost:4200")
                                      //.WithMethods("POST", "PUT", "DELETE", "GET");
                                  });
            });

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
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseHttpsRedirection();
            app.UseStaticFiles();

            if (!env.IsDevelopment())
            {
                app.UseStaticFiles();
            }

            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

        }
    }
}
