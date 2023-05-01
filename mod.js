// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,l,p,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),y&&u&&u.call(r,t,e.set),r};var a=t;function l(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Object.prototype.hasOwnProperty;function y(r,t){return null!=r&&p.call(r,t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&y(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function b(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var d=Math.floor;var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return v&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=m()?function(r){var t,e,n;if(null==r)return j.call(r);e=r[w],t=y(r,w);try{r[w]=void 0}catch(t){return j.call(r)}return n=j.call(r),t?r[w]=e:delete r[w],n}:function(r){return j.call(r)};var g=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};var O=/./;function h(r){return"boolean"==typeof r}var E=Boolean.prototype.toString;var S=m();function T(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function P(r){return h(r)||T(r)}function x(){return new Function("return this;")()}l(P,"isPrimitive",h),l(P,"isObject",T);var I="object"==typeof self?self:null,R="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof A?A:null;var B=function(r){if(arguments.length){if(!h(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return x()}if(I)return I;if(R)return R;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=B.document&&B.document.childNodes,V=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function k(r){return null!==r&&"object"==typeof r}function L(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(C,"REGEXP",G),l(k,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!g(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(k));var M="function"==typeof O||"object"==typeof V||"function"==typeof F?function(r){return L(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?L(r).toLowerCase():t};function U(r){return"function"===M(r)}var Y,X=Object.getPrototypeOf;Y=U(Object.getPrototypeOf)?X:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===_(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var q=Y;var z=Object.prototype;function D(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!g(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),q(r))}(r),!t||!y(r,"constructor")&&y(t,"constructor")&&U(t.constructor)&&"[object Function]"===_(t.constructor)&&y(t,"isPrototypeOf")&&U(t.isPrototypeOf)&&(t===z||function(r){var t;for(t in r)if(!y(r,t))return!1;return!0}(r)))}function H(r){return"number"==typeof r}var J=Number,K=J.prototype.toString;var Q=m();function W(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function Z(r){return H(r)||W(r)}l(Z,"isPrimitive",H),l(Z,"isObject",W);var $=Number.POSITIVE_INFINITY,rr=J.NEGATIVE_INFINITY;function tr(r){return r<$&&r>rr&&d(t=r)===t;var t}function er(r){return H(r)&&tr(r)}function nr(r){return W(r)&&tr(r.valueOf())}function or(r){return er(r)||nr(r)}function ir(r){return er(r)&&r>0}function ur(r){return nr(r)&&r.valueOf()>0}function fr(r){return ir(r)||ur(r)}function cr(r){return er(r)&&r>=0}function ar(r){return nr(r)&&r.valueOf()>=0}function lr(r){return cr(r)||ar(r)}function pr(r){return r!=r}function yr(r,t){return D(t)?y(t,"duration")&&(r.duration=t.duration,!ir(t.duration))?new TypeError(b("0Rd3b","duration",t.duration)):y(t,"period")&&(r.period=t.period,!ir(t.period))?new TypeError(b("0Rd3b","period",t.period)):y(t,"min")&&(r.min=t.min,!H(t.min)||pr(t.min))?new TypeError(b("0Rd8h","min",t.min)):y(t,"max")&&(r.max=t.max,!H(t.max)||pr(t.max))?new TypeError(b("0Rd8h","max",t.max)):y(t,"offset")&&(r.offset=t.offset,!er(t.offset))?new TypeError(b("0Rd8e","offset",t.offset)):y(t,"iter")&&(r.iter=t.iter,!cr(t.iter))?new TypeError(b("0Rd35","iter",t.iter)):null:new TypeError(b("0Rd2h",t))}function sr(r){var t,e,n,o,i,u;if(t={duration:-1,period:10,min:0,max:1,offset:0,iter:1e308},arguments.length&&(o=yr(t,r)))throw o;if(-1===t.duration&&(t.duration=d(t.period/2)),t.duration>=t.period)throw new RangeError(b("0Rd8g","duration",t.duration));return(i=(t.period-t.offset)%t.period)<0&&(i+=t.period),i-=1,u=0,l(e={},"next",f),l(e,"return",c),s&&l(e,s,a),e;function f(){return u+=1,n||u>t.iter?{done:!0}:{value:(i=(i+1)%t.period)<t.duration?t.max:t.min,done:!1}}function c(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function a(){return sr(t)}}l(or,"isPrimitive",er),l(or,"isObject",nr),l(fr,"isPrimitive",ir),l(fr,"isObject",ur),l(lr,"isPrimitive",cr),l(lr,"isObject",ar);export{sr as default};
//# sourceMappingURL=mod.js.map