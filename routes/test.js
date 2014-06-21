var express = require('express');
var router = express.Router();

 router.get('/', function(req, res) {

     db.select(querys.test1. users, function(test){
         console.log(">>" + test)
     });
 res.render('index', { title: 'TESTSERVER' });
 });

 router.get('/login.do', function(req, res) {
 });

module.exports = router;
