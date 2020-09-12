<import resource="classpath:/alfresco/extension/templates/webscripts/org/alfresco/slingshot/search/live-search.lib.js">
<import resource="classpath:/alfresco/extension/templates/webscripts/org/alfresco/slingshot/search/escapechars.js">

function main()
{
   if (args.t === null || args.t.length === 0)
   {
      status.setCode(status.STATUS_BAD_REQUEST, "Query terms must be provided");
      return;
   }
   
   var params =
   {
      type: "documents",
      term: escapeRegExp(args.t),
      siteId: args.s,
      rootNode: (args.rootNode !== null) ? args.rootNode : null,
      maxResults: (args.maxResults !== null) ? parseInt(args.maxResults, 10) : DEFAULT_MAX_RESULTS,
      startIndex: (args.startIndex !== null) ? parseInt(args.startIndex, 10) : 0
   };
   
   if (logger.isLoggingEnabled()) {
	 logger.log("live-search-docs.get.js - extension - main - invoked");
   }
   model.data = liveSearch(params);
}

main();