var express = require('express');
var router = express.Router();

var test = require('./test');
app.use('/', test);

var user = require('./users');
app.use('/', user);

module.exports = router;
