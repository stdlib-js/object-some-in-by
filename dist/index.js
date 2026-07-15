"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var o=c(function(w,s){
var l=require('@stdlib/assert-is-object/dist'),m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,f=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r,e,t,v){var a,u,i;if(!l(r))throw new TypeError(n('2Oh3L',r));if(!m(e))throw new TypeError(n('2Oh45',e));if(!f(t))throw new TypeError(n('2Oh3N',t));a=0;for(i in r)if((Object.prototype.hasOwnProperty.call(r,i)||Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(r),i))&&(u=t.call(v,r[i],i,r),u&&(a+=1,a===e)))return!0;return!1}s.exports=p
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
