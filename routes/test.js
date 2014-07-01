var express = require('express');
var testDAO = require('../dao/testDAO')
var router = express.Router();
router.get('/', function(req, res) {
    res.render('index', '');
});

router.post('/login.do', function(req, res) {
    session.set('test', 'aaa');
});
router.post('/login1.do', function(req, res) {
    //console.log(session.get('test'));
    session.destroy();
    //console.log(session.get('test'));
});
router.post('/login2.do', function(req, res) {
    console.log(session.get('test'));
});

module.exports = router;