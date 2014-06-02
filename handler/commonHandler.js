var routes = require('../routes/index');

handle = function(app){
	app.use('/', routes);
	app.use('/login.do', routes);
}

exports.handle = handle;