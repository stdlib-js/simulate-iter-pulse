// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):u.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,a,o,p,u,l,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",u=1,l=0;l<e.length;l++)if(c(t=e[l]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,S(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",u+=1}return p}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,n;for(i=[],n=0,t=I.exec(e);t;)(r=e.slice(n,I.lastIndex-t[0].length)).length&&i.push(r),i.push(O(t)),n=I.lastIndex,t=I.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function F(e){return"string"==typeof e}function _(e){var r,i;if(!F(e))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var L=A;function G(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0;var M="function"==typeof B&&"symbol"==typeof B("foo")&&X(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function z(e){return"number"==typeof e}function Y(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function q(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Y(n):Y(n)+e,t&&(e="-"+e)),e}var D=String.prototype.toLowerCase,H=String.prototype.toUpperCase;function J(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!z(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=q(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=q(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===H.call(e.specifier)?H.call(i):D.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function K(e){return"string"==typeof e}var Q=Math.abs,ee=String.prototype.toLowerCase,re=String.prototype.toUpperCase,ie=String.prototype.replace,te=/e\+(\d)$/,ne=/e-(\d)$/,ae=/^(\d+)$/,oe=/^(\d+)e/,se=/\.0$/,ce=/\.0*e/,pe=/(\..*[^0])0*e/;function ue(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!z(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Q(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ie.call(i,pe,"$1e"),i=ie.call(i,ce,"e"),i=ie.call(i,se,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ie.call(i,te,"e+0$1"),i=ie.call(i,ne,"e-0$1"),e.alternate&&(i=ie.call(i,ae,"$1."),i=ie.call(i,oe,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===re.call(e.specifier)?re.call(i):ee.call(i)}function le(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function fe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+le(t):le(t)+e}var ge=String.fromCharCode,de=isNaN,he=Array.isArray;function we(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function be(e){var r,i,t,n,a,o,s,c,p;if(!he(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(K(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=we(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,de(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,de(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=J(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!de(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=de(a)?String(t.arg):ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ue(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=q(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=fe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ye(e){var r,i,t,n;for(i=[],n=0,t=ve.exec(e);t;)(r=e.slice(n,ve.lastIndex-t[0].length)).length&&i.push(r),i.push(me(t)),n=ve.lastIndex,t=ve.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ee(e){return"string"==typeof e}function xe(e){var r,i,t;if(!Ee(e))throw new TypeError(xe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ye(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return be.apply(null,i)}var ke=Math.floor;var Se="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Te(){return Se&&"symbol"==typeof Symbol.toStringTag}var Ve=Object.prototype.toString;var je="function"==typeof B?B.toStringTag:"";var Ie=Te()?function(e){var r,i,t;if(null==e)return Ve.call(e);i=e[je],r=X(e,je);try{e[je]=void 0}catch(r){return Ve.call(e)}return t=Ve.call(e),r?e[je]=i:delete e[je],t}:function(e){return Ve.call(e)};var Oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ie(e)};var $e=/./;function Fe(e){return"boolean"==typeof e}var _e=Boolean,Ae=Boolean.prototype.toString;var Ce=Te();function Re(e){return"object"==typeof e&&(e instanceof _e||(Ce?function(e){try{return Ae.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ie(e)))}function Pe(e){return Fe(e)||Re(e)}function Ze(e){return"number"==typeof e}function Ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function We(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ne(n):Ne(n)+e,t&&(e="-"+e)),e}G(Pe,"isPrimitive",Fe),G(Pe,"isObject",Re);var Le=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase;function Ue(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ze(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=We(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=We(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ge.call(e.specifier)?Ge.call(i):Le.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Xe(e){return"string"==typeof e}var Be=Math.abs,Me=String.prototype.toLowerCase,ze=String.prototype.toUpperCase,Ye=String.prototype.replace,qe=/e\+(\d)$/,De=/e-(\d)$/,He=/^(\d+)$/,Je=/^(\d+)e/,Ke=/\.0$/,Qe=/\.0*e/,er=/(\..*[^0])0*e/;function rr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ze(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Be(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ye.call(i,er,"$1e"),i=Ye.call(i,Qe,"e"),i=Ye.call(i,Ke,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ye.call(i,qe,"e+0$1"),i=Ye.call(i,De,"e-0$1"),e.alternate&&(i=Ye.call(i,He,"$1."),i=Ye.call(i,Je,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ze.call(e.specifier)?ze.call(i):Me.call(i)}function ir(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function tr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ir(t):ir(t)+e}var nr=String.fromCharCode,ar=isNaN,or=Array.isArray;function sr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function cr(e){var r,i,t,n,a,o,s,c,p;if(!or(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Xe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=sr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ar(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ar(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Ue(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ar(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ar(a)?String(t.arg):nr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=rr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=We(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=tr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var pr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ur(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function lr(e){var r,i,t,n;for(i=[],n=0,t=pr.exec(e);t;)(r=e.slice(n,pr.lastIndex-t[0].length)).length&&i.push(r),i.push(ur(t)),n=pr.lastIndex,t=pr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function fr(e){return"string"==typeof e}function gr(e){var r,i;if(!fr(e))throw new TypeError(gr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[lr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return cr.apply(null,r)}function dr(){return new Function("return this;")()}var hr="object"==typeof self?self:null,wr="object"==typeof window?window:null,br="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vr="object"==typeof br?br:null,mr="object"==typeof globalThis?globalThis:null;var yr=function(e){if(arguments.length){if(!Fe(e))throw new TypeError(gr("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return dr()}if(mr)return mr;if(hr)return hr;if(wr)return wr;if(vr)return vr;throw new Error("unexpected error. Unable to resolve global object.")}(),Er=yr.document&&yr.document.childNodes,xr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Sr=/^\s*function\s*([^(]*)/i;function Tr(e){return"number"==typeof e}function Vr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function jr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Vr(n):Vr(n)+e,t&&(e="-"+e)),e}G(kr,"REGEXP",Sr);var Ir=String.prototype.toLowerCase,Or=String.prototype.toUpperCase;function $r(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Tr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=jr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=jr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Or.call(e.specifier)?Or.call(i):Ir.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Fr(e){return"string"==typeof e}var _r=Math.abs,Ar=String.prototype.toLowerCase,Cr=String.prototype.toUpperCase,Rr=String.prototype.replace,Pr=/e\+(\d)$/,Zr=/e-(\d)$/,Nr=/^(\d+)$/,Wr=/^(\d+)e/,Lr=/\.0$/,Gr=/\.0*e/,Ur=/(\..*[^0])0*e/;function Xr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Tr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":_r(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Rr.call(i,Ur,"$1e"),i=Rr.call(i,Gr,"e"),i=Rr.call(i,Lr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Rr.call(i,Pr,"e+0$1"),i=Rr.call(i,Zr,"e-0$1"),e.alternate&&(i=Rr.call(i,Nr,"$1."),i=Rr.call(i,Wr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Cr.call(e.specifier)?Cr.call(i):Ar.call(i)}function Br(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Mr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Br(t):Br(t)+e}var zr=String.fromCharCode,Yr=isNaN,qr=Array.isArray;function Dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Hr(e){var r,i,t,n,a,o,s,c,p;if(!qr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Fr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Dr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Yr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Yr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=$r(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Yr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Yr(a)?String(t.arg):zr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Xr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=jr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Mr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Kr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Qr(e){var r,i,t,n;for(i=[],n=0,t=Jr.exec(e);t;)(r=e.slice(n,Jr.lastIndex-t[0].length)).length&&i.push(r),i.push(Kr(t)),n=Jr.lastIndex,t=Jr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ei(e){return"string"==typeof e}function ri(e){var r,i;if(!ei(e))throw new TypeError(ri("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Qr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Hr.apply(null,r)}function ii(e){return null!==e&&"object"==typeof e}function ti(e){var r,i,t,n;if(("Object"===(i=Ie(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Sr.exec(t.toString()))return r[1]}return ii(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(ii,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(ri("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Oe(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(ii));var ni="function"==typeof $e||"object"==typeof xr||"function"==typeof Er?function(e){return ti(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ti(e).toLowerCase():r};function ai(e){return"function"===ni(e)}var oi,si=Object,ci=Object.getPrototypeOf;oi=ai(Object.getPrototypeOf)?ci:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Ie(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var pi=oi;var ui=Object.prototype;function li(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Oe(e)}(e)&&(r=function(e){return null==e?null:(e=si(e),pi(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&ai(r.constructor)&&"[object Function]"===Ie(r.constructor)&&X(r,"isPrototypeOf")&&ai(r.isPrototypeOf)&&(r===ui||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function fi(e){return"number"==typeof e}var gi=Number,di=gi.prototype.toString;var hi=Te();function wi(e){return"object"==typeof e&&(e instanceof gi||(hi?function(e){try{return di.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ie(e)))}function bi(e){return fi(e)||wi(e)}G(bi,"isPrimitive",fi),G(bi,"isObject",wi);var vi=Number.POSITIVE_INFINITY,mi=gi.NEGATIVE_INFINITY;function yi(e){return e<vi&&e>mi&&ke(r=e)===r;var r}function Ei(e){return fi(e)&&yi(e)}function xi(e){return wi(e)&&yi(e.valueOf())}function ki(e){return Ei(e)||xi(e)}function Si(e){return Ei(e)&&e>0}function Ti(e){return xi(e)&&e.valueOf()>0}function Vi(e){return Si(e)||Ti(e)}function ji(e){return Ei(e)&&e>=0}function Ii(e){return xi(e)&&e.valueOf()>=0}function Oi(e){return ji(e)||Ii(e)}function $i(e){return e!=e}function Fi(e,r){return li(r)?X(r,"duration")&&(e.duration=r.duration,!Si(r.duration))?new TypeError(xe("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",r.duration)):X(r,"period")&&(e.period=r.period,!Si(r.period))?new TypeError(xe("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",r.period)):X(r,"min")&&(e.min=r.min,!fi(r.min)||$i(r.min))?new TypeError(xe("invalid option. `%s` option must be a number. Option: `%s`.","min",r.min)):X(r,"max")&&(e.max=r.max,!fi(r.max)||$i(r.max))?new TypeError(xe("invalid option. `%s` option must be a number. Option: `%s`.","max",r.max)):X(r,"offset")&&(e.offset=r.offset,!Ei(r.offset))?new TypeError(xe("invalid option. `%s` option must be an integer. Option: `%s`.","offset",r.offset)):X(r,"iter")&&(e.iter=r.iter,!ji(r.iter))?new TypeError(xe("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(xe("invalid argument. Options argument must be an object. Value: `%s`.",r))}function _i(e){var r,i,t,n,a,o;if(r={duration:-1,period:10,min:0,max:1,offset:0,iter:1e308},arguments.length&&(n=Fi(r,e)))throw n;if(-1===r.duration&&(r.duration=ke(r.period/2)),r.duration>=r.period)throw new RangeError(xe("invalid option. `%s` option must be less than the period. Option: `%s`.","duration",r.duration));return(a=(r.period-r.offset)%r.period)<0&&(a+=r.period),a-=1,o=0,G(i={},"next",s),G(i,"return",c),M&&G(i,M,p),i;function s(){return o+=1,t||o>r.iter?{done:!0}:{value:(a=(a+1)%r.period)<r.duration?r.max:r.min,done:!1}}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return _i(r)}}G(ki,"isPrimitive",Ei),G(ki,"isObject",xi),G(Vi,"isPrimitive",Si),G(Vi,"isObject",Ti),G(Oi,"isPrimitive",ji),G(Oi,"isObject",Ii);export{_i as default};
//# sourceMappingURL=mod.js.map
