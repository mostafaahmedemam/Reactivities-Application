using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class activity
    {
        public Guid Id {get;set;}
        public string Title {get; set;}     
        public DateTime Date {get;set;}
        public string Description {get;set;}
        public string Category {get;set;}
        public string city {get;set;}
        public string  venue {get;set;}


    }
}