var express = require('express');
var router = express.Router();
var database = require('../module/dbConnection');

var conn = database.getConnection();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/login.do', function(req, res) {
	console.log(conn);
	/*conn.sql('SELECT i FROM test', function(err, rows){
		console.log('2');
		if(err){
			conn.release();
			throw err;
		}
		console.log(rows);
		res.json(rows);
		conn.release();
	});*/
});

module.exports = router;
