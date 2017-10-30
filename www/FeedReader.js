
var exec = require('cordova/exec');

var PLUGIN_NAME = 'FeedReader';

var FeedReader = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  },
  read: function(url, successFunction, errorFunction)
		{
			options = jQuery.extend({
				url: null,
				data: null,
				cache: true,
				success: null,
				failure: null,
				error: null,
				global: true
			}, options);

			if (options.url) {
				if (jQuery.isFunction(options.failure) && jQuery.type(options.error)==='null') {
				  // Handle legacy failure option
				  options.error = function(xhr, msg, e){
					options.failure(msg, e);
				  }
				} else if (jQuery.type(options.failure) === jQuery.type(options.error) === 'null') {
				  // Default error behavior if failure & error both unspecified
				  options.error = function(xhr, msg, e){
					window.console&&console.log('getFeed failed to load feed', xhr, msg, e);
				  }
				}
				return $.ajax({
					type: 'GET',
					url: options.url,
					data: options.data,
					cache: options.cache,
					dataType: (jQuery.browser.msie) ? "text" : "xml",
					success: function(xml) {
						var feed = new JFeed(xml);
						if (jQuery.isFunction(options.success)) options.success(feed);
					},
					error: options.error,
					global: options.global
				});
			}
		}
};

module.exports = FeedReader;
