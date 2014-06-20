var util = require('util');
var fs = require('fs');
var xml_digester = require("xml-digester");
var digester = xml_digester.XmlDigester({});



//var db = mysql.createConnection({
//	user : 'avsuser',
//	password : 'avs123',
//    database : 'avsuser'
//});


exports.fileRead = function(){
    //var tmp = fs.readFileSync('../sql/test.xml', 'utf8');
    //console.log(tmp);

   //fs.readFile('../sql/test.xml', 'utf8', function(err, data){
   //    if(err){
   //        console.log("err >> " + err);
   //    }else{
   //        console.log("data >> " + data);
   //        digester.digest(data, function(err, result){
   //           if(err){
   //               console.log("ANG >> " + err);
   //           }else{
   //               console.log(result.test);
   //           }
   //        });
   //    }
   //});
    global.querys = {};
    var sqlDir = '../sql';
    fs.readdir(sqlDir, function(err, data){
        if(err) console.log('[ERROR_DIR] >> ' + err)
        else {
            for(var i=0; i<data.length; i++){
                fs.readFile(sqlDir + '/' + data[i], 'utf8', function(err, data){
                    if(err) console.log('[ERROR_FILE] >> ' + err);
                    else{
                        digester.digest(data, function(err, result){
                            if(err) console.log('[ERROR_XML_PARSING] >> ' + err);
                            else{
                                var namespace = result.querys.namespace;
                                querys[namespace] = {};
                                for(var j=0; j<result.querys.query.length; j++){
                                    //querys[namespace][result.querys.query[j].id] = {};
                                    querys[namespace].aaa = result.querys.query[j]._text;

                                }
                            }
                        });
                    }
                });
            }
        }
    });
    console.log(querys);
}
/*

exports._searchdata = function(req , res) {
	var limit = req.param("limit");
	var service = req.param("service");
	var query = util.format( global.searchdata_query , service , limit );

	db.query(query, function (error, result, field) {

		if (error) {
			console.log("오류발생");
			res.writeHead(500);
			res.end();
		} else {
			res.json(result);
		}

	});
};*/
