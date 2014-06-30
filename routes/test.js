var express = require('express');
var testDAO = require('../dao/testDAO')
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', '');
});

router.post('/login.do', function(req, res) {
    req.session.aa = 'test';
    console.log(req.session.aa);
    //testDAO.test(function(data){
    //        console.log(data);
    //        res.send(data);
    //    }
    //);
});
router.post('/login1.do', function(req, res) {
    console.log(req.session.aa);
});

module.exports = router;