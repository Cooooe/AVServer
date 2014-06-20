var util = require('util');
var fs = require('fs');
var async = require('async');
var xml_digester = require("xml-digester");
var digester = xml_digester.XmlDigester({});

global.querys = {};

exports.fileRead = function(){

    var sqlDir = '../sql';

    async.waterfall([

        //check directory
        function(callback){
            fs.readdir(sqlDir, function(err, data){
                if(err){
                    console.log('[ERROR_DIR] >> ' + err)
                }
                else{
                    console.log("check dir");
                    console.log(data);
                    callback(null, data);
                }
            });
        },

        //read file
        function(data, callback){
            for(var i=0; i<data.length; i++){
                fs.readFile(sqlDir + '/' + data[i], 'utf8', function (err, data) {
                    if (err){
                        console.log('[ERROR_FILE] >> ' + err);
                    }
                    else{
                        console.log("check file ");
                        console.log(data);
                        callback(null, data);
                    }
                });
            }
        },

        //digest xml
        function(data, callback){
            digester.digest(data, function (err, result) {
                if (err){
                    console.log('[ERROR_XML_PARSING] >> ' + err);
                }
                else{
                    console.log("check digest");
                    console.log(result);
                    var namespace = result.querys.namespace;
                    global.querys[namespace] = {};
                    for (var j = 0; j < result.querys.query.length; j++) {
                        global.querys[namespace][result.querys.query[j].id] = result.querys.query[j]._text;
                    }
                    console.log("check querys ");
                    console.log(global.querys);

                    callback(null, global.querys);
                }
            });
        }
        ],

    function(err, result){
        if(err) console.log('err : ', err);
        console.log('----> final result <----');
        console.log('result : ',result);
    }
    );
}