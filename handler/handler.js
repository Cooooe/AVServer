var commonHandler = require("./commonHandler");
handle = function(app){
	commonHandler.handle(app);
}

exports.handle = handle;