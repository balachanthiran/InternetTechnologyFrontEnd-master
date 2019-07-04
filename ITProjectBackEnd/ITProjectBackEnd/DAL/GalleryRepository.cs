using System;
using System.Data;
using Dapper;
using System.Data.SqlClient;
using System.Collections.Generic;
using ITProjectBackEnd.Model;

namespace ITProjectBackEnd.DAL
{
    public class GalleryRepository : IGalleryRepository
    {
        private string connectionString;
        public GalleryRepository()
        {
            connectionString = "Server=tcp:studentdb2017.database.windows.net,1433;Initial Catalog=ITDatabase;Persist Security Info=False;User ID=studentdb;Password=Bachelor2017;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30";
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }
        }

        public AboutMe GetAboutMe()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string aboutMeQuery = "SELECT aboutmetext FROM tblaboutme";
                dbConnection.Open();
                AboutMe am = new AboutMe();
                am.AboutMeText = dbConnection.QueryFirstOrDefault<string>(aboutMeQuery);
                return am;
            }
        }

        public List<string> GetGallery()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string galleryQuery = "SELECT imageurl FROM tblimage";
                dbConnection.Open();
                return dbConnection.Query<string>(galleryQuery).AsList();
            }

        }

        public bool InsertImage(string imageURL)
        {
            using (IDbConnection dbConnection = Connection)
            {

                string imageQuery = "INSERT INTO tblimage (imageurl) VALUES(@ImageURL)";
                dbConnection.Open();

                int rowsAffected = dbConnection.Execute(imageQuery, new { ImageURL = imageURL});

                if (rowsAffected > 0) return true;

                return false;

            }

        }
    }
}
