var express = require('express');
var router = express.Router();
var encry = require('../module/encryption');


/* 로그인 */
router.post('/login.av', function(req, res){
    var id = req.param('USER_ID');
    var pass = encry.encrypt(req.param('USER_PASS'));

    db.select(querys.users.login, [id, pass], function(data){
        res.send(data);
    });
});

/* 회원 가입 */
router.post('/join.av', function(req, res) {
    var ip = req._remoteAddress;
    var id = req.param('USER_ID');
    var pass = encry.encrypt(req.param('USER_PASS'));
    var mailYN = req.param('MAIL_YN');
    db.execute(querys.user.join, [id, pass, mailYN, ip], function(data){
        res.send(data);
        /* 성공시 리턴 데이터
        affectedRows: 1
        changedRows: 0
        fieldCount: 0
        flag: true
        insertId: 9
        message: ""
        protocol41: true
        serverStatus: 2
        warningCount: 0
        */
    });
});

module.exports = router;