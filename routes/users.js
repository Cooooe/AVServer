var express = require('express');
var router = express.Router();
var encry = require('../module/encryption');


/* GET users listing. */
router.get('/join.av', function(req, res) {
    var ip = req._remoteAddress;
    var id = req.param('USER_ID');
    var pass = encry.encrypt(req.param('USER_PASS'));
    var mailYN = req.param('MAIL_YN');
    db.exec(querys.user.join, [id, pass, mailYN, ip], function(data){
        console.log(data);
    });
});

module.exports = router;
