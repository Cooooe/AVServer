/*
 * 파일명 : avsAuth.js
 * 파일 내용 : Cookie, Session 사용을 편리하게 하기 위해 제작 된 모듈
 */

isArray = function(val){
    var isArray = null;
    try{
        isArray = val instanceof Array;
    }catch(e){
        isArray = false;
    }
    return isArray;
};

/*
 * 메소드 명 : setSession
 * Param :
 */
exports.setSession = function(key, val){
    if(isArray(key)){
        //key값이 Array일 때
        if(key.length != val.length){
            console.log(key + "  //  " + val);
            return '0000';
        }
        req.session.test = 'test!!';
        console.log(req.session.test);
    }else{

    }
    /*
    type = type.toUpperCase();
    switch (type){
        case 'JSON' :
            console.log('json');
            break;
        case 'ARR' :
        case 'ARRAY' :
            console.log('arr');
            break;
    }
    */
};