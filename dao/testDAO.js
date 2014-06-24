/**
 * Created by ohu on 14. 6. 24.
 */

var db = require('../module/connecter');


//test
exports.test = function() {
    db.execute(querys.test.test1, "", function (data) {
            console.log(data);
            return data;
        }
    );
}