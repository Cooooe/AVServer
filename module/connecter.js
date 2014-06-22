/**
 * Created by ohu on 14. 6. 20.
 */
var mysql = require('mysql');
var async = require('async');

var mysqlConf =
    {
        host : '222.111.30.154',
        port : 3306,
        user : 'avsuser',
        password : 'avs123#',
        database : 'avs',
        connectionLimit : 20,
        waitForConnections : false
    };

getConn = function(){
    return mysql.createConnection(mysqlConf);
};


exports.select = function(sql, param, callback){
    var conn = getConn();
    conn.query(sql, param, function(err, result){
        if(err) console.log('[ERROR_SQL_SELECT] >> ' + err);
        else {
            callback(result);
        }
    });
};

exports.excute = function(sql, param, callback){
    var conn = getConn();
    conn.query(sql, param, function(err, result){
       if(err)  console.error('[ERROR_SQL_EXCUTE] >> ' + err)
        else {
           callback(result);
       }
    });
}