var express = require('express');
var router = express.Router();

 router.get('/', function(req, res) {
     res.render('index', '');
 });

 router.get('/login.do', function(req, res) {
     console.log(req._remoteAddress);
     db.select(querys.test1.users, ['admin', 'N'], function(data){
         res.send(data);
     });
 });

module.exports = router;