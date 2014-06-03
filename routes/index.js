var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	res.render('index', { title: 'AVSERVER' });
});
router.get('/login.do', function(req, res) {

});

module.exports = router;
