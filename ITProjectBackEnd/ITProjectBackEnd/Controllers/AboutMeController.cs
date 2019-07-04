using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ITProjectBackEnd.DAL;
using ITProjectBackEnd.Model;

namespace ITProjectBackEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/AboutMe")]
    public class AboutMeController : Controller
    {
        private GalleryRepository gr;

        public AboutMeController()
        {
            gr = new GalleryRepository();
        }
        // GET: api/AboutMe
        [HttpGet]
        public AboutMe Get()
        {
            return gr.GetAboutMe();
        }

        // GET: api/AboutMe/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/AboutMe
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/AboutMe/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
