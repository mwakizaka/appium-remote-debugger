function(){return (function(){var h=this||self;function k(a){return"string"==typeof a}function aa(a,b){a=a.split(".");var c=h;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a,b,c){return a.call.apply(a.bind,arguments)}function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l=ca:l=da;return l.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function p(a,b,c){this.a=a;this.b=b||1;this.f=c||1};var fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},q=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},r=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,
b,c)}:function(a,b,c){var d=c;q(a,function(e,f){d=b.call(void 0,d,e,f,a)});return d},t=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function ha(a){return Array.prototype.concat.apply([],arguments)}function ia(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var ja=h.navigator;if(ja){var ka=ja.userAgent;if(ka){u=ka;break a}}u=""}function v(a){return-1!=u.indexOf(a)};function la(){return v("Firefox")||v("FxiOS")}function ma(){return(v("Chrome")||v("CriOS"))&&!v("Edge")};function na(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};function x(){return v("iPhone")&&!v("iPod")&&!v("iPad")};function oa(a){this.b=a;this.a=0}function pa(a){a=a.match(qa);for(var b=0;b<a.length;b++)ra.test(a[b])&&a.splice(b,1);return new oa(a)}var qa=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,ra=/^\s/;function y(a,b){return a.b[a.a+(b||0)]}function z(a){return a.b[a.a++]}function B(a){return a.b.length<=a.a};function sa(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ta(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?ua(a,b):!c&&sa(e,b)?-1*va(a,b):!d&&sa(f,a)?va(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);
a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(h.Range.START_TO_END,a)}function va(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return ua(b,a)}function ua(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1};function C(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;c=0;var d=[];for(b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return b}
function D(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function E(a,b,c,d,e){return wa.call(null,a,b,k(c)?c:null,k(d)?d:null,e||new F)}
function wa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),q(b,function(f){a.a(f)&&e.add(f)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),q(b,function(f){f.className==d&&a.a(f)&&e.add(f)})):a instanceof G?xa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),q(b,function(f){D(f,c,d)&&e.add(f)}));return e}function xa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.a(b)&&e.add(b),xa(a,b,c,d,e)};function F(){this.b=this.a=null;this.l=0}function ya(a){this.f=a;this.a=this.b=null}function za(a,b){if(!a.a)return b;if(!b.a)return a;var c=a.a;b=b.a;for(var d=null,e,f=0;c&&b;)c.f==b.f?(e=c,c=c.a,b=b.a):0<ta(c.f,b.f)?(e=b,b=b.a):(e=c,c=c.a),(e.b=d)?d.a=e:a.a=e,d=e,f++;for(e=c||b;e;)e.b=d,d=d.a=e,f++,e=e.a;a.b=d;a.l=f;return a}function Aa(a,b){b=new ya(b);b.a=a.a;a.b?a.a.b=b:a.a=a.b=b;a.a=b;a.l++}F.prototype.add=function(a){a=new ya(a);a.b=this.b;this.a?this.b.a=a:this.a=this.b=a;this.b=a;this.l++};
function Ba(a){return(a=a.a)?a.f:null}function Ca(a){return(a=Ba(a))?C(a):""}function H(a,b){return new Da(a,!!b)}function Da(a,b){this.f=a;this.b=(this.s=b)?a.b:a.a;this.a=null}function I(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.s?b.b:b.a;return c.f};function J(a){this.i=a;this.b=this.g=!1;this.f=null}function K(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Ea(a,b){a.g=b}function Fa(a,b){a.b=b}function L(a,b){a=a.a(b);return a instanceof F?+Ca(a):+a}function M(a,b){a=a.a(b);return a instanceof F?Ca(a):""+a}function O(a,b){a=a.a(b);return a instanceof F?!!a.l:!!a};function P(a,b,c){J.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==Ga&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,u:b}):this.f={name:b.f.name,u:c})}m(P,J);
function Q(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof F&&c instanceof F){b=H(b);for(d=I(b);d;d=I(b))for(e=H(c),f=I(e);f;f=I(e))if(a(C(d),C(f)))return!0;return!1}if(b instanceof F||c instanceof F){b instanceof F?(e=b,d=c):(e=c,d=b);f=H(e);for(var g=typeof d,n=I(f);n;n=I(f)){switch(g){case "number":n=+C(n);break;case "boolean":n=!!C(n);break;case "string":n=C(n);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(n,d)||e==c&&a(d,n))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}P.prototype.a=function(a){return this.c.m(this.h,this.o,a)};P.prototype.toString=function(){var a="Binary Expression: "+this.c;a+=K(this.h);return a+=K(this.o)};function Ha(a,b,c,d){this.I=a;this.D=b;this.i=c;this.m=d}Ha.prototype.toString=function(){return this.I};var Ia={};
function R(a,b,c,d){if(Ia.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Ha(a,b,c,d);return Ia[a.toString()]=a}R("div",6,1,function(a,b,c){return L(a,c)/L(b,c)});R("mod",6,1,function(a,b,c){return L(a,c)%L(b,c)});R("*",6,1,function(a,b,c){return L(a,c)*L(b,c)});R("+",5,1,function(a,b,c){return L(a,c)+L(b,c)});R("-",5,1,function(a,b,c){return L(a,c)-L(b,c)});R("<",4,2,function(a,b,c){return Q(function(d,e){return d<e},a,b,c)});
R(">",4,2,function(a,b,c){return Q(function(d,e){return d>e},a,b,c)});R("<=",4,2,function(a,b,c){return Q(function(d,e){return d<=e},a,b,c)});R(">=",4,2,function(a,b,c){return Q(function(d,e){return d>=e},a,b,c)});var Ga=R("=",3,2,function(a,b,c){return Q(function(d,e){return d==e},a,b,c,!0)});R("!=",3,2,function(a,b,c){return Q(function(d,e){return d!=e},a,b,c,!0)});R("and",2,2,function(a,b,c){return O(a,c)&&O(b,c)});R("or",1,2,function(a,b,c){return O(a,c)||O(b,c)});function Ja(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");J.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Ja,J);Ja.prototype.a=function(a){a=this.c.a(a);return Ka(this.h,a)};Ja.prototype.toString=function(){var a="Filter:"+K(this.c);return a+=K(this.h)};function La(a,b){if(b.length<a.C)throw Error("Function "+a.j+" expects at least"+a.C+" arguments, "+b.length+" given");if(null!==a.B&&b.length>a.B)throw Error("Function "+a.j+" expects at most "+a.B+" arguments, "+b.length+" given");a.H&&q(b,function(c,d){if(4!=c.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+c);});J.call(this,a.i);this.v=a;this.c=b;Ea(this,a.g||t(b,function(c){return c.g}));Fa(this,a.G&&!b.length||a.F&&!!b.length||t(b,function(c){return c.b}))}m(La,J);
La.prototype.a=function(a){return this.v.m.apply(null,ha(a,this.c))};La.prototype.toString=function(){var a="Function: "+this.v;if(this.c.length){var b=r(this.c,function(c,d){return c+K(d)},"Arguments:");a+=K(b)}return a};function Ma(a,b,c,d,e,f,g,n){this.j=a;this.i=b;this.g=c;this.G=d;this.F=!1;this.m=e;this.C=f;this.B=void 0!==g?g:f;this.H=!!n}Ma.prototype.toString=function(){return this.j};var Na={};
function S(a,b,c,d,e,f,g,n){if(Na.hasOwnProperty(a))throw Error("Function already created: "+a+".");Na[a]=new Ma(a,b,c,d,e,f,g,n)}S("boolean",2,!1,!1,function(a,b){return O(b,a)},1);S("ceiling",1,!1,!1,function(a,b){return Math.ceil(L(b,a))},1);S("concat",3,!1,!1,function(a,b){return r(ia(arguments,1),function(c,d){return c+M(d,a)},"")},2,null);S("contains",2,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);return-1!=b.indexOf(a)},2);S("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
S("false",2,!1,!1,function(){return!1},0);S("floor",1,!1,!1,function(a,b){return Math.floor(L(b,a))},1);S("id",4,!1,!1,function(a,b){var c=a.a,d=9==c.nodeType?c:c.ownerDocument;a=M(b,a).split(/\s+/);var e=[];q(a,function(g){g=d.getElementById(g);!g||0<=fa(e,g)||e.push(g)});e.sort(ta);var f=new F;q(e,function(g){f.add(g)});return f},1);S("lang",2,!1,!1,function(){return!1},1);S("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);
S("local-name",3,!1,!0,function(a,b){return(a=b?Ba(b.a(a)):a.a)?a.localName||a.nodeName.toLowerCase():""},0,1,!0);S("name",3,!1,!0,function(a,b){return(a=b?Ba(b.a(a)):a.a)?a.nodeName.toLowerCase():""},0,1,!0);S("namespace-uri",3,!0,!1,function(){return""},0,1,!0);S("normalize-space",3,!1,!0,function(a,b){return(b?M(b,a):C(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);S("not",2,!1,!1,function(a,b){return!O(b,a)},1);S("number",1,!1,!0,function(a,b){return b?L(b,a):+C(a.a)},0,1);
S("position",1,!0,!1,function(a){return a.b},0);S("round",1,!1,!1,function(a,b){return Math.round(L(b,a))},1);S("starts-with",2,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);return 0==b.lastIndexOf(a,0)},2);S("string",3,!1,!0,function(a,b){return b?M(b,a):C(a.a)},0,1);S("string-length",1,!1,!0,function(a,b){return(b?M(b,a):C(a.a)).length},0,1);
S("substring",3,!1,!1,function(a,b,c,d){c=L(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?L(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=M(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);S("substring-after",3,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
S("substring-before",3,!1,!1,function(a,b,c){b=M(b,a);a=M(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);S("sum",1,!1,!1,function(a,b){a=H(b.a(a));b=0;for(var c=I(a);c;c=I(a))b+=+C(c);return b},1,1,!0);S("translate",3,!1,!1,function(a,b,c,d){b=M(b,a);c=M(c,a);var e=M(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);S("true",2,!1,!1,function(){return!0},0);function G(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Oa(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}G.prototype.a=function(a){return null===this.b||this.b==a.nodeType};G.prototype.f=function(){return this.h};
G.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=K(this.c));return a};function Pa(a){J.call(this,3);this.c=a.substring(1,a.length-1)}m(Pa,J);Pa.prototype.a=function(){return this.c};Pa.prototype.toString=function(){return"Literal: "+this.c};function T(a,b){this.j=a.toLowerCase();a="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.b=b?b.toLowerCase():a}T.prototype.a=function(a){var b=a.nodeType;if(1!=b&&2!=b)return!1;b=void 0!==a.localName?a.localName:a.nodeName;return"*"!=this.j&&this.j!=b.toLowerCase()?!1:"*"==this.b?!0:this.b==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};T.prototype.f=function(){return this.j};
T.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.b?"":this.b+":")+this.j};function Qa(a){J.call(this,1);this.c=a}m(Qa,J);Qa.prototype.a=function(){return this.c};Qa.prototype.toString=function(){return"Number: "+this.c};function Ra(a,b){J.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;1==this.c.length&&(a=this.c[0],a.A||a.c!=Sa||(a=a.o,"*"!=a.f()&&(this.f={name:a.f(),u:null})))}m(Ra,J);function U(){J.call(this,4)}m(U,J);U.prototype.a=function(a){var b=new F;a=a.a;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};U.prototype.toString=function(){return"Root Helper Expression"};function Ta(){J.call(this,4)}m(Ta,J);Ta.prototype.a=function(a){var b=new F;b.add(a.a);return b};Ta.prototype.toString=function(){return"Context Helper Expression"};
function Ua(a){return"/"==a||"//"==a}Ra.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof F))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=H(b,e.c.s);if(e.g||e.c!=Va)if(e.g||e.c!=Wa){var g=I(f);for(b=e.a(new p(g));null!=(g=I(f));)g=e.a(new p(g)),b=za(b,g)}else g=I(f),b=e.a(new p(g));else{for(g=I(f);(b=I(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new p(g))}}return b};
Ra.prototype.toString=function(){var a="Path Expression:"+K(this.h);if(this.c.length){var b=r(this.c,function(c,d){return c+K(d)},"Steps:");a+=K(b)}return a};function Xa(a,b){this.a=a;this.s=!!b}
function Ka(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=H(b),f=b.l,g,n=0;g=I(e);n++){var w=a.s?f-n:n+1;g=d.a(new p(g,w,f));if("number"==typeof g)w=w==g;else if("string"==typeof g||"boolean"==typeof g)w=!!g;else if(g instanceof F)w=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!w){w=e;g=w.f;var A=w.a;if(!A)throw Error("Next must be called at least once before remove.");var N=A.b;A=A.a;N?N.a=A:g.a=A;A?A.b=N:g.b=N;g.l--;w.a=null}}return b}
Xa.prototype.toString=function(){return r(this.a,function(a,b){return a+K(b)},"Predicates:")};function V(a,b,c,d){J.call(this,4);this.c=a;this.o=b;this.h=c||new Xa([]);this.A=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.J&&b&&(this.f={name:b.name,u:b.u});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(V,J);
V.prototype.a=function(a){var b=a.a,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.u?M(c.u,a):null,f=1);if(this.A)if(this.g||this.c!=Ya)if(b=H((new V(Za,new G("node"))).a(a)),c=I(b))for(a=this.m(c,d,e,f);null!=(c=I(b));)a=za(a,this.m(c,d,e,f));else a=new F;else a=E(this.o,b,d,e),a=Ka(this.h,a,f);else a=this.m(a.a,d,e,f);return a};V.prototype.m=function(a,b,c,d){a=this.c.v(this.o,a,b,c);return a=Ka(this.h,a,d)};
V.prototype.toString=function(){var a="Step:"+K("Operator: "+(this.A?"//":"/"));this.c.j&&(a+=K("Axis: "+this.c));a+=K(this.o);if(this.h.a.length){var b=r(this.h.a,function(c,d){return c+K(d)},"Predicates:");a+=K(b)}return a};function $a(a,b,c,d){this.j=a;this.v=b;this.s=c;this.J=d}$a.prototype.toString=function(){return this.j};var ab={};function W(a,b,c,d){if(ab.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new $a(a,b,c,!!d);return ab[a]=b}
W("ancestor",function(a,b){for(var c=new F;b=b.parentNode;)a.a(b)&&Aa(c,b);return c},!0);W("ancestor-or-self",function(a,b){var c=new F;do a.a(b)&&Aa(c,b);while(b=b.parentNode);return c},!0);
var Sa=W("attribute",function(a,b){var c=new F,d=a.f();if(b=b.attributes)if(a instanceof G&&null===a.b||"*"==d)for(a=0;d=b[a];a++)c.add(d);else(d=b.getNamedItem(d))&&c.add(d);return c},!1),Ya=W("child",function(a,b,c,d,e){c=k(c)?c:null;d=k(d)?d:null;e=e||new F;for(b=b.firstChild;b;b=b.nextSibling)D(b,c,d)&&a.a(b)&&e.add(b);return e},!1,!0);W("descendant",E,!1,!0);
var Za=W("descendant-or-self",function(a,b,c,d){var e=new F;D(b,c,d)&&a.a(b)&&e.add(b);return E(a,b,c,d,e)},!1,!0),Va=W("following",function(a,b,c,d){var e=new F;do for(var f=b;f=f.nextSibling;)D(f,c,d)&&a.a(f)&&e.add(f),e=E(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);W("following-sibling",function(a,b){for(var c=new F;b=b.nextSibling;)a.a(b)&&c.add(b);return c},!1);W("namespace",function(){return new F},!1);
var bb=W("parent",function(a,b){var c=new F;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;b=b.parentNode;a.a(b)&&c.add(b);return c},!1),Wa=W("preceding",function(a,b,c,d){var e=new F,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,n=f.length;g<n;g++){var w=[];for(b=f[g];b=b.previousSibling;)w.unshift(b);for(var A=0,N=w.length;A<N;A++)b=w[A],D(b,c,d)&&a.a(b)&&e.add(b),e=E(a,b,c,d,e)}return e},!0,!0);
W("preceding-sibling",function(a,b){for(var c=new F;b=b.previousSibling;)a.a(b)&&Aa(c,b);return c},!0);var cb=W("self",function(a,b){var c=new F;a.a(b)&&c.add(b);return c},!1);function db(a){J.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(db,J);db.prototype.a=function(a){return-L(this.c,a)};db.prototype.toString=function(){return"Unary Expression: -"+K(this.c)};function eb(a){J.call(this,4);this.c=a;Ea(this,t(this.c,function(b){return b.g}));Fa(this,t(this.c,function(b){return b.b}))}m(eb,J);eb.prototype.a=function(a){var b=new F;q(this.c,function(c){c=c.a(a);if(!(c instanceof F))throw Error("Path expression must evaluate to NodeSet.");b=za(b,c)});return b};eb.prototype.toString=function(){return r(this.c,function(a,b){return a+K(b)},"Union Expression:")};function fb(a,b){this.a=a;this.b=b}function gb(a){for(var b,c=[];;){X(a,"Missing right hand side of binary expression.");b=hb(a);var d=z(a.a);if(!d)break;var e=(d=Ia[d]||null)&&d.D;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].D;)b=new P(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new P(c.pop(),c.pop(),b);return b}function X(a,b){if(B(a.a))throw Error(b);}function ib(a,b){a=z(a.a);if(a!=b)throw Error("Bad token, expected: "+b+" got: "+a);}
function jb(a){a=z(a.a);if(")"!=a)throw Error("Bad token: "+a);}function kb(a){a=z(a.a);if(2>a.length)throw Error("Unclosed literal string");return new Pa(a)}
function lb(a){var b=[];if(Ua(y(a.a))){var c=z(a.a);var d=y(a.a);if("/"==c&&(B(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new U;d=new U;X(a,"Missing next location step.");c=mb(a,c);b.push(c)}else{a:{c=y(a.a);d=c.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":z(a.a);c=gb(a);X(a,'unclosed "("');ib(a,")");break;case '"':case "'":c=kb(a);break;default:if(isNaN(+c))if(!Oa(c)&&/(?![0-9])[\w]/.test(d)&&"("==y(a.a,1)){c=z(a.a);
c=Na[c]||null;z(a.a);for(d=[];")"!=y(a.a);){X(a,"Missing function argument list.");d.push(gb(a));if(","!=y(a.a))break;z(a.a)}X(a,"Unclosed function argument list.");jb(a);c=new La(c,d)}else{c=null;break a}else c=new Qa(+z(a.a))}"["==y(a.a)&&(d=new Xa(nb(a)),c=new Ja(c,d))}if(c)if(Ua(y(a.a)))d=c;else return c;else c=mb(a,"/"),d=new Ta,b.push(c)}for(;Ua(y(a.a));)c=z(a.a),X(a,"Missing next location step."),c=mb(a,c),b.push(c);return new Ra(d,b)}
function mb(a,b){if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==y(a.a)){var c=new V(cb,new G("node"));z(a.a);return c}if(".."==y(a.a))return c=new V(bb,new G("node")),z(a.a),c;if("@"==y(a.a)){var d=Sa;z(a.a);X(a,"Missing attribute name")}else if("::"==y(a.a,1)){if(!/(?![0-9])[\w]/.test(y(a.a).charAt(0)))throw Error("Bad token: "+z(a.a));var e=z(a.a);d=ab[e]||null;if(!d)throw Error("No axis with name: "+e);z(a.a);X(a,"Missing node name")}else d=Ya;e=y(a.a);if(/(?![0-9])[\w\*]/.test(e.charAt(0)))if("("==
y(a.a,1)){if(!Oa(e))throw Error("Invalid node type: "+e);e=z(a.a);if(!Oa(e))throw Error("Invalid type name: "+e);ib(a,"(");X(a,"Bad nodetype");var f=y(a.a).charAt(0),g=null;if('"'==f||"'"==f)g=kb(a);X(a,"Bad nodetype");jb(a);e=new G(e,g)}else if(e=z(a.a),f=e.indexOf(":"),-1==f)e=new T(e);else{g=e.substring(0,f);if("*"==g)var n="*";else if(n=a.b(g),!n)throw Error("Namespace prefix not declared: "+g);e=e.substr(f+1);e=new T(e,n)}else throw Error("Bad token: "+z(a.a));a=new Xa(nb(a),d.s);return c||new V(d,
e,a,"//"==b)}function nb(a){for(var b=[];"["==y(a.a);){z(a.a);X(a,"Missing predicate expression.");var c=gb(a);b.push(c);X(a,"Unclosed predicate expression.");ib(a,"]")}return b}function hb(a){if("-"==y(a.a))return z(a.a),new db(hb(a));var b=lb(a);if("|"!=y(a.a))a=b;else{for(b=[b];"|"==z(a.a);)X(a,"Missing next union location path."),b.push(lb(a));a.a.a--;a=new eb(b)}return a};function ob(a){switch(a.nodeType){case 1:return ea(pb,a);case 9:return ob(a.documentElement);case 11:case 10:case 6:case 12:return qb;default:return a.parentNode?ob(a.parentNode):qb}}function qb(){return null}function pb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?pb(a.parentNode,b):null};function rb(a,b){if(!a.length)throw Error("Empty XPath expression.");a=pa(a);if(B(a))throw Error("Invalid XPath expression.");b?"function"==ba(b)||(b=l(b.lookupNamespaceURI,b)):b=function(){return null};var c=gb(new fb(a,b));if(!B(a))throw Error("Bad token: "+z(a));this.evaluate=function(d,e){d=c.a(new p(d));return new Y(d,e)}}
function Y(a,b){if(0==b)if(a instanceof F)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof F))throw Error("value could not be converted to the specified type");this.resultType=b;switch(b){case 2:this.stringValue=a instanceof F?Ca(a):""+a;break;case 1:this.numberValue=a instanceof F?+Ca(a):+a;break;case 3:this.booleanValue=a instanceof F?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var c=
H(a);var d=[];for(var e=I(c);e;e=I(c))d.push(e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:this.singleNodeValue=Ba(a);break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=d.length?null:d[f++]};this.snapshotItem=function(g){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return g>=d.length||0>g?null:d[g]}}Y.ANY_TYPE=0;
Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function sb(a){this.lookupNamespaceURI=ob(a)}
function tb(a,b){a=a||h;var c=a.Document&&a.Document.prototype||a.document;if(!c.evaluate||b)a.XPathResult=Y,c.evaluate=function(d,e,f,g){return(new rb(d,f)).evaluate(e,g)},c.createExpression=function(d,e){return new rb(d,e)},c.createNSResolver=function(d){return new sb(d)}}aa("wgxpath.install",tb);aa("wgxpath.install",tb);var ub={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var vb="backgroundColor borderTopColor borderRightColor borderBottomColor borderLeftColor color outlineColor".split(" "),wb=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,xb=/^#(?:[0-9a-f]{3}){1,2}$/i,yb=/^(?:rgba)?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(0|1|0\.\d*)\)$/i,zb=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;var Ab=la(),Bb=x()||v("iPod"),Cb=v("iPad"),Db=v("Android")&&!(ma()||la()||v("Opera")||v("Silk")),Eb=ma(),Fb=v("Safari")&&!(ma()||v("Coast")||v("Opera")||v("Edge")||v("Edg/")||v("OPR")||la()||v("Silk")||v("Android"))&&!(x()||v("iPad")||v("iPod"));function Z(a){return(a=a.exec(u))?a[1]:""}(function(){if(Ab)return Z(/Firefox\/([0-9.]+)/);if(Eb)return x()||v("iPad")||v("iPod")?Z(/CriOS\/([0-9.]+)/):Z(/Chrome\/([0-9.]+)/);if(Fb&&!(x()||v("iPad")||v("iPod")))return Z(/Version\/([0-9.]+)/);if(Bb||Cb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(u);if(a)return a[1]+"."+a[2]}else if(Db)return(a=Z(/Android\s+([0-9.]+)/))?a:Z(/Version\/([0-9.]+)/);return""})();function Gb(a,b){var c=a.currentStyle||a.style,d=c[b];void 0===d&&"function"==ba(c.getPropertyValue)&&(d=c.getPropertyValue(b));if("inherit"!=d)return void 0!==d?d:null;var e;for(a=a.parentNode;a&&1!=a.nodeType&&9!=a.nodeType&&11!=a.nodeType;)a=a.parentNode;e&&"string"!==typeof e&&(e=e.toString());return(e=!a||1!=a.nodeType||e&&a.tagName.toUpperCase()!=e?null:a)?Gb(e,b):null};aa("_",function(a,b){b=na(b);if("float"==b||"cssFloat"==b||"styleFloat"==b)b="cssFloat";a:{var c=b;var d=9==a.nodeType?a:a.ownerDocument||a.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(a,null))){c=d[c]||d.getPropertyValue(c)||"";break a}c=""}a=c||Gb(a,b);if(null===a)a=null;else if(0<=fa(vb,b)){b:{var e=a.match(yb);if(e&&(b=Number(e[1]),c=Number(e[2]),d=Number(e[3]),e=Number(e[4]),0<=b&&255>=b&&0<=c&&255>=c&&0<=d&&255>=d&&0<=e&&1>=e)){b=[b,c,d,e];break b}b=
null}if(!b)b:{if(d=a.match(zb))if(b=Number(d[1]),c=Number(d[2]),d=Number(d[3]),0<=b&&255>=b&&0<=c&&255>=c&&0<=d&&255>=d){b=[b,c,d,1];break b}b=null}if(!b)b:{b=a.toLowerCase();c=ub[b.toLowerCase()];if(!c&&(c="#"==b.charAt(0)?b:"#"+b,4==c.length&&(c=c.replace(wb,"#$1$1$2$2$3$3")),!xb.test(c))){b=null;break b}b=[parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16),1]}a=b?"rgba("+b.join(", ")+")":a}return a});; return this._.apply(null,arguments);}).apply(window, arguments);}