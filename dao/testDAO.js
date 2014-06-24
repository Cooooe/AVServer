/**
 * Created by ohu on 14. 6. 24.
 */

var db = require('../module/connecter');


//test
exports.test = function(callback, param) {
    db.execute(querys.test.test1, param, function (data) {
            callback(data);
    });
};