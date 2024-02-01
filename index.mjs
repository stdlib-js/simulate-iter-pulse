// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";function l(i,e){return r(e)?s(e,"duration")&&(i.duration=e.duration,!m(e.duration))?new TypeError(t("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",e.duration)):s(e,"period")&&(i.period=e.period,!m(e.period))?new TypeError(t("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",e.period)):s(e,"min")&&(i.min=e.min,!o(e.min)||a(e.min))?new TypeError(t("invalid option. `%s` option must be a number. Option: `%s`.","min",e.min)):s(e,"max")&&(i.max=e.max,!o(e.max)||a(e.max))?new TypeError(t("invalid option. `%s` option must be a number. Option: `%s`.","max",e.max)):s(e,"offset")&&(i.offset=e.offset,!d(e.offset))?new TypeError(t("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):s(e,"iter")&&(i.iter=e.iter,!p(e.iter))?new TypeError(t("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(t("invalid argument. Options argument must be an object. Value: `%s`.",e))}function u(r){var s,o,d,m,p,a;if(s={duration:-1,period:10,min:0,max:1,offset:0,iter:1e308},arguments.length&&(m=l(s,r)))throw m;if(-1===s.duration&&(s.duration=n(s.period/2)),s.duration>=s.period)throw new RangeError(t("invalid option. `%s` option must be less than the period. Option: `%s`.","duration",s.duration));return(p=(s.period-s.offset)%s.period)<0&&(p+=s.period),p-=1,a=0,i(o={},"next",v),i(o,"return",f),e&&i(o,e,j),o;function v(){return a+=1,d||a>s.iter?{done:!0}:{value:(p=(p+1)%s.period)<s.duration?s.max:s.min,done:!1}}function f(i){return d=!0,arguments.length?{value:i,done:!0}:{done:!0}}function j(){return u(s)}}export{u as default};
//# sourceMappingURL=index.mjs.map
