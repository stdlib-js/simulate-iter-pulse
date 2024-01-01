// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,m,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,_=isNaN,x=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,s,f,l,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(c(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function V(r){var e,t,n;if(!A(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=F;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&M.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0;var X="function"==typeof U&&"symbol"==typeof U("foo")&&W(U,"iterator")&&"symbol"==typeof U.iterator?Symbol.iterator:null,Y=Math.floor;var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H="function"==typeof U?U.toStringTag:"";var J=q()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[H],e=W(r,H);try{r[H]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[H]=t:delete r[H],n}:function(r){return D.call(r)};var K=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Q=/./;function rr(r){return"boolean"==typeof r}var er=Boolean,tr=Boolean.prototype.toString;var nr=q();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function or(r){return rr(r)||ir(r)}function ar(){return new Function("return this;")()}Z(or,"isPrimitive",rr),Z(or,"isObject",ir);var ur="object"==typeof self?self:null,cr="object"==typeof window?window:null,sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fr="object"==typeof sr?sr:null,lr="object"==typeof globalThis?globalThis:null;var pr=function(r){if(arguments.length){if(!rr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ar()}if(lr)return lr;if(ur)return ur;if(cr)return cr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=pr.document&&pr.document.childNodes,gr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function vr(r){return null!==r&&"object"==typeof r}function mr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(br,"REGEXP",yr),Z(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!K(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var hr="function"==typeof Q||"object"==typeof gr||"function"==typeof dr?function(r){return mr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?mr(r).toLowerCase():e};function wr(r){return"function"===hr(r)}var jr,Or=Object,Er=Object.getPrototypeOf;jr=wr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=jr;var xr=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!K(r)}(r)&&(e=function(r){return null==r?null:(r=Or(r),_r(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&W(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Tr(r){return"number"==typeof r}var kr=Number,Ir=kr.prototype.toString;var Pr=q();function Ar(r){return"object"==typeof r&&(r instanceof kr||(Pr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Vr(r){return Tr(r)||Ar(r)}Z(Vr,"isPrimitive",Tr),Z(Vr,"isObject",Ar);var Fr=Number.POSITIVE_INFINITY,Nr=kr.NEGATIVE_INFINITY;function $r(r){return r<Fr&&r>Nr&&Y(e=r)===e;var e}function Cr(r){return Tr(r)&&$r(r)}function Rr(r){return Ar(r)&&$r(r.valueOf())}function Br(r){return Cr(r)||Rr(r)}function Gr(r){return Cr(r)&&r>0}function Lr(r){return Rr(r)&&r.valueOf()>0}function Zr(r){return Gr(r)||Lr(r)}function Mr(r){return Cr(r)&&r>=0}function Wr(r){return Rr(r)&&r.valueOf()>=0}function Ur(r){return Mr(r)||Wr(r)}function Xr(r){return r!=r}function Yr(r,e){return Sr(e)?W(e,"duration")&&(r.duration=e.duration,!Gr(e.duration))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",e.duration)):W(e,"period")&&(r.period=e.period,!Gr(e.period))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",e.period)):W(e,"min")&&(r.min=e.min,!Tr(e.min)||Xr(e.min))?new TypeError(V("invalid option. `%s` option must be a number. Option: `%s`.","min",e.min)):W(e,"max")&&(r.max=e.max,!Tr(e.max)||Xr(e.max))?new TypeError(V("invalid option. `%s` option must be a number. Option: `%s`.","max",e.max)):W(e,"offset")&&(r.offset=e.offset,!Cr(e.offset))?new TypeError(V("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):W(e,"iter")&&(r.iter=e.iter,!Mr(e.iter))?new TypeError(V("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e))}function zr(r){var e,t,n,i,o,a;if(e={duration:-1,period:10,min:0,max:1,offset:0,iter:1e308},arguments.length&&(i=Yr(e,r)))throw i;if(-1===e.duration&&(e.duration=Y(e.period/2)),e.duration>=e.period)throw new RangeError(V("invalid option. `%s` option must be less than the period. Option: `%s`.","duration",e.duration));return(o=(e.period-e.offset)%e.period)<0&&(o+=e.period),o-=1,a=0,Z(t={},"next",u),Z(t,"return",c),X&&Z(t,X,s),t;function u(){return a+=1,n||a>e.iter?{done:!0}:{value:(o=(o+1)%e.period)<e.duration?e.max:e.min,done:!1}}function c(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return zr(e)}}Z(Br,"isPrimitive",Cr),Z(Br,"isObject",Rr),Z(Zr,"isPrimitive",Gr),Z(Zr,"isObject",Lr),Z(Ur,"isPrimitive",Mr),Z(Ur,"isObject",Wr);export{zr as default};
//# sourceMappingURL=mod.js.map
