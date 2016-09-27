var baseUrl = "http://localhost:8080";

var prepareUrl = function(url){
	if(!url.trim().startsWith("http")){
		return baseUrl + url;
	}
	
	return url;
}

var ajaxSupport = {
	get: function(options){
		options.type = "GET";
		options.contentType="application/json";
		options.url = prepareUrl(options.url);
		return $.ajax(options);
	}
	,post: function(options){
		options.type = "POST";
		options.contentType="application/json";
		options.url = prepareUrl(options.url);
		return $.ajax(options);
	}
	,put: function(options){
		options.type = "PUT";
		options.contentType="application/json";
		options.url = prepareUrl(options.url);
		return $.ajax(options);
	}
	,delete: function(options){
		options.type = "DELETE";
		options.contentType="application/json";
		options.url = prepareUrl(options.url);
		return $.ajax(options);
	}
}

module.exports = ajaxSupport;