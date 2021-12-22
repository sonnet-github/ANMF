using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

using Our.Umbraco.FullTextSearch.Interfaces;
using Our.Umbraco.FullTextSearch.Models;

namespace ANMF.Controllers
{
    public class SearchController : RenderMvcController
    {
        private readonly ISearchService searchService;
        private readonly IFullTextSearchConfig searchConfig;
        private readonly ServiceContext serviceContext;
        
        public SearchController(ISearchService serviceSearch, IFullTextSearchConfig config, ServiceContext contextService)
        {
            searchService = serviceSearch;
            searchConfig = config;
            serviceContext = contextService;
        }  

        public override ActionResult Index(ContentModel model)
        {
            ViewBag.FullTextSearchResult = null;

            if (Request["searchtext"] != null)
            {
                int.TryParse(Request["page"], out int currentPage);
                currentPage = currentPage < 1 ? 1 : currentPage;
                string culture = !string.IsNullOrEmpty(CurrentPage.GetCultureFromDomains()) ? CurrentPage.GetCultureFromDomains().ToLowerInvariant() : string.Empty;

                var search = new Search(Request["searchtext"])
                    .EnableWildcards()
                    .EnableHighlighting()
                    .AddTitleProperty("metaTitle")
                    .AddTitleProperty("nodeName")
                    .AddRootNodeId(GetSiteSearchRootNode())
                    .RemoveAllowedContentType("search")
                    .AddSummaryProperty("metaDescription")
                    .AddSummaryProperty(searchConfig.FullTextContentField)
                    .SetSearchType(SearchType.SimpleOr)
                    .SetFuzzyness(100)
                    .SetSummaryLength(160)
                    .SetPageLength(10)
                    .SetCulture(culture);
                    
                ViewBag.FullTextSearchResult = searchService.Search(search, currentPage);
            }

            return CurrentTemplate(CurrentPage);
        }

        private int GetSiteSearchRootNode()
        {
            var root = Umbraco.ContentAtRoot()
                    .Where(p => p.Url().ToLowerInvariant() == "/") 
                    .FirstOrDefault();
                        
            return root.Id;
        }
    }
}