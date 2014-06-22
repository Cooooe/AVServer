/*
 * 암호화 모듈
 */
var crypto = require('crypto');
var key = 'AVS^2131:7469$';


exports.encrypt = function(text){
    var cipher = crypto.createCipher('aes-256-cbc',key);
    var encipheredContent = cipher.update(text, 'utf8', 'hex');
    encipheredContent += cipher.final('hex');

    return encipheredContent;
};

exports.decrypt = function(text){
    var decipher = crypto.createDecipher('aes-256-cbc',key);
    var decipheredPlaintext = decipher.update(text,'hex','utf8');
    decipheredPlaintext += decipher.final('utf8');

    return decipheredPlaintext;
};