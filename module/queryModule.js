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
            fs.readdir(sqlDir, function(err, dir){
                if(err){
                    console.log('[ERROR_DIR] >> ' + err)
                }
                else{
                    callback(null, dir);
                }
            });
        },

        //read file
        function(dir, callback){
            for(var i=0; i<dir.length; i++){
                fs.readFile(sqlDir + '/' + dir[i], 'utf8', function (err, file) {
                    if (err){
                        console.log('[ERROR_FILE] >> ' + err);
                    }
                    else{
                        callback(null, file);
                    }
                });
            }
        },

        //digest xml
        function(file, callback){
            digester.digest(file, function (err, result) {
                if (err){
                    console.log('[ERROR_XML_PARSING] >> ' + err);
                }
                else{
                    var namespace = result.querys.namespace;
                    global.querys[namespace] = {};
                    for (var j = 0; j < result.querys.query.length; j++) {
                        global.querys[namespace][result.querys.query[j].id] = result.querys.query[j]._text;
                    }

                    callback(null, global.querys);
                }
            });
        }
        ],

    function(err, result){
        if(err) console.log('err : ', err);
        //console.log('----> final result <----');
        //console.log('result : ',result);
    }
    );
}