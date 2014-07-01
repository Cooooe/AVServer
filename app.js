var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
global.app = app;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*app.use(favicon());*/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* Session Test */
var session_set = require('express-session');
var redis = require("redis");
var client = redis.createClient();
app.use(session_set({
      secret: 'secret'
}));

var query = require('./module/query-parser');
query.parse();

/* Custom Global Variable */
global.avs = require('./module/logger');
global.db = require('./module/connecter');
global.session = require('./module/avsAuth');

// S :: Routing
var routes = require('./routes');
app.use('/', function(req,res, next){
    session.setRequest(req);
    next(routes);
});
// E :: Routing

/// catch 404 and forward to erdror handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
