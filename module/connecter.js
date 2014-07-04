/**
 * Created by ohu on 14. 6. 20.
 */
var mysql = require('mysql');
//var async = require('async');

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
    avs.log('info', '[QUERY_SELECT] >> ' + sql);
    conn.query(sql, param, function(err, result){
        if(err) {
            result['flag'] = false;
            avs.log('warn', '[SELECT_QUERY_ERROR] >> ' + err);
            avs.log('info', '[SELECT_QUERY] >> ' + sql + ' [PARAM] >> ' + param);

            callback(err);
        }
        else {
            result['flag'] = true;
            callback(result);
        }
    });
};

exports.execute = function(sql, param, callback){
    var conn = getConn();
    avs.log('info', '[QUERY_SELECT] >> ' + sql);
    conn.query(sql, param, function(err, result){
       if(err) {
           avs.log('warn', '[EXCUTE_QUERY_ERROR] >> ' + err);
           avs.log('info', '[EXCUTE_QUERY] >> ' + sql + ' [PARAM] >> ' + param);
           //console.error('[ERROR_SQL_EXCUTE] >> ' + err);
           err['flag'] = false;
           callback(err);
       }
       else {
           avs.log('info', '[EXCUTE_QUERY] >> ' + sql + ' [PARAM] >> ' + param);
           //result['flag'] = true;
           callback(result);
       }
    });
}

