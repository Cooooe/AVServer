var express = require('express');
var testDAO = require('../dao/testDAO')
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', '');
});

router.post('/login.do', function(req, res) {
    console.log(req._remoteAddress);
    testDAO.test(function(data){
            console.log(data);
            res.send(data);
        }
    );
//    global.db.execute("SELECT * from USERS", null, function(data){
//        res.send(data);
//        console.log(data);
//    });
});

module.exports = router;