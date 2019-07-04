using ITProjectBackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITProjectBackEnd.DAL
{
    interface IGalleryRepository
    {
        bool InsertImage(string imageURL);

        List<string> GetGallery();

        AboutMe GetAboutMe();
    }
}
