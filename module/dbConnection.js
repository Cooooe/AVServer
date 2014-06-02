var mysql = require('mysql');
var connData = require('../config/database');

function getMysqlPoolConnection(){
	mysql.createPool(connData.getConnData()).getConnection(function(err, connection){
		console.log('connection1');
		if(err){
			console.log('err : ' + err);
			throw err;
		}
		console.log('connection2');
		connection.sql = function(query, callback){
			console.log('connection3');
			connection.query(query, callback);
			connection.release();
		};
		console.log('connection4');
		return connection;
	});
	console.log('connection5');
	return null;
}

module.exports.getConnection = getMysqlPoolConnection;