var express = require('express');
var router = express.Router();

 router.get('/', function(req, res) {
     res.render('index', '');
 });

 router.get('/login.do', function(req, res) {
     console.log(req._remoteAddress);
     global.db.execute("SELECT * from USERS", null, function(data){
         res.send(data);
         console.log(data);
     });
 });

module.exports = router;