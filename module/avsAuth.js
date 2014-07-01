/*
 * 파일명 : avsAuth.js
 * 파일 내용 : Cookie, Session 사용을 편리하게 하기 위해 제작 된 모듈
 */

var req = null;

/*
 * 메소드 명 : setRequest
 * Param : req -> request
 */
exports.setRequest = function(req){
    this.req = req;
}

/*
 * 메소드 명 : setSession
 * Param : req -> request
 *         key -> getSession Key
 *         val -> getSession Val
 */
exports.set = function(key, val){
    this.req.session[key] = val;
    this.req.session.save(function(err){
        if(err) avs.log('error', err);
    });
};

/*
 * 메소드 명 : getSession
 * Param : req -> request
 *         key -> setSession Key
 */
exports.get = function(key){
    //console.log(this.req.session);
    return this.req.session[key];
};

/*
 * 메소드 명 : getSession
 * Param : req -> request
 *         key -> setSession Key
 */
exports.destroy = function(key){
    if(key == undefined) this.req.session.destroy();
    else this.set(key, null);
};