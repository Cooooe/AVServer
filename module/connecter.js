/**
 * Created by ohu on 14. 6. 20.
 */
var mysql = require('mysql');

var mysqlConf = mysql.createConnection(
    {
        host : '222.111.30.154',
        port : 3306,
        user : 'avsuser',
        password : 'avs123#',
        database : 'avs',
        connectionLimit : 20,
        waitForConnections : false
    }
);

exports.getConn = function(){
    return mysql.createConnection(mysqlConf);
}

//connection.connect(function(err){
//        if(err){
//            console.error(err);
//            throw err;
//        }
//});
