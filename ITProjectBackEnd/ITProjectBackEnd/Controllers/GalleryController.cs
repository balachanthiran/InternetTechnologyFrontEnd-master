using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ITProjectBackEnd.DAL;

namespace ITProjectBackEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/Gallery")]
    public class GalleryController : Controller
    {
        private GalleryRepository gr;
        public GalleryController()
        {
            gr = new GalleryRepository();
        }
        // GET: api/Gallery
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return gr.GetGallery();
        }

        // GET: api/Gallery/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Gallery
        [HttpPost]
        public void Post([FromBody]string imageURL)
        {
            gr.InsertImage(imageURL);
        }
        
        // PUT: api/Gallery/5
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
