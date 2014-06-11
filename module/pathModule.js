var path = require('path');

exports.folder = function() {
	return path.dirname(module.parent.filename);
};

exports.file = function(){
	return module.parent.filename;
};