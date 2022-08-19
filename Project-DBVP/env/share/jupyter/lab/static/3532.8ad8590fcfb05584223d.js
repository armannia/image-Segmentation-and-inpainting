"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[3532],{26655:(o,r,c)=>{c.d(r,{Z:()=>i});var n=c(94015);var e=c.n(n);var t=c(23645);var a=c.n(t);var s=a()(e());s.push([o.id,"/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/hopscotch.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,yCAAyC,8BAA8B,CAAC;AACxE,qCAAqC,mBAAmB,EAAE,iBAAiB,CAAC;AAC5E,wCAAwC,cAAc,CAAC;AACvD,oCAAoC,yCAAyC,CAAC;;AAE9E,iCAAiC,cAAc,CAAC;AAChD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,cAAc,CAAC;;AAE/C,qEAAqE,cAAc,CAAC;AACpF,iCAAiC,cAAc,CAAC;AAChD,gCAAgC,cAAc,CAAC;;AAE/C,kCAAkC,cAAc,CAAC;AACjD,oCAAoC,cAAc,CAAC;AACnD,6BAA6B,cAAc,CAAC;AAC5C,+BAA+B,mBAAmB,EAAE,cAAc,CAAC;AACnE,iCAAiC,cAAc,CAAC;AAChD,6BAA6B,cAAc,CAAC;AAC5C,8BAA8B,cAAc,CAAC;;AAE7C,8CAA8C,0BAA0B,EAAE,uBAAuB,CAAC;AAClG,oDAAoD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n"],sourceRoot:""}]);const i=s},23645:o=>{o.exports=function(o){var r=[];r.toString=function r(){return this.map((function(r){var c=o(r);if(r[2]){return"@media ".concat(r[2]," {").concat(c,"}")}return c})).join("")};r.i=function(o,c,n){if(typeof o==="string"){o=[[null,o,""]]}var e={};if(n){for(var t=0;t<this.length;t++){var a=this[t][0];if(a!=null){e[a]=true}}}for(var s=0;s<o.length;s++){var i=[].concat(o[s]);if(n&&e[i[0]]){continue}if(c){if(!i[2]){i[2]=c}else{i[2]="".concat(c," and ").concat(i[2])}}r.push(i)}};return r}},94015:o=>{function r(o,r){return a(o)||t(o,r)||n(o,r)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(o,r){if(!o)return;if(typeof o==="string")return e(o,r);var c=Object.prototype.toString.call(o).slice(8,-1);if(c==="Object"&&o.constructor)c=o.constructor.name;if(c==="Map"||c==="Set")return Array.from(o);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(o,r)}function e(o,r){if(r==null||r>o.length)r=o.length;for(var c=0,n=new Array(r);c<r;c++){n[c]=o[c]}return n}function t(o,r){var c=o&&(typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"]);if(c==null)return;var n=[];var e=true;var t=false;var a,s;try{for(c=c.call(o);!(e=(a=c.next()).done);e=true){n.push(a.value);if(r&&n.length===r)break}}catch(i){t=true;s=i}finally{try{if(!e&&c["return"]!=null)c["return"]()}finally{if(t)throw s}}return n}function a(o){if(Array.isArray(o))return o}o.exports=function o(c){var n=r(c,4),e=n[1],t=n[3];if(!t){return e}if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var i="/*# ".concat(s," */");var A=t.sources.map((function(o){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(o," */")}));return[e].concat(A).concat([i]).join("\n")}return[e].join("\n")}},53532:(o,r,c)=>{c.r(r);c.d(r,{default:()=>i});var n=c(93379);var e=c.n(n);var t=c(26655);var a={};a.insert="head";a.singleton=false;var s=e()(t.Z,a);const i=t.Z.locals||{}},93379:(o,r,c)=>{var n=function o(){var r;return function o(){if(typeof r==="undefined"){r=Boolean(window&&document&&document.all&&!window.atob)}return r}}();var e=function o(){var r={};return function o(c){if(typeof r[c]==="undefined"){var n=document.querySelector(c);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(e){n=null}}r[c]=n}return r[c]}}();var t=[];function a(o){var r=-1;for(var c=0;c<t.length;c++){if(t[c].identifier===o){r=c;break}}return r}function s(o,r){var c={};var n=[];for(var e=0;e<o.length;e++){var s=o[e];var i=r.base?s[0]+r.base:s[0];var A=c[i]||0;var u="".concat(i," ").concat(A);c[i]=A+1;var l=a(u);var p={css:s[1],media:s[2],sourceMap:s[3]};if(l!==-1){t[l].references++;t[l].updater(p)}else{t.push({identifier:u,updater:d(p,r),references:1})}n.push(u)}return n}function i(o){var r=document.createElement("style");var n=o.attributes||{};if(typeof n.nonce==="undefined"){var t=true?c.nc:0;if(t){n.nonce=t}}Object.keys(n).forEach((function(o){r.setAttribute(o,n[o])}));if(typeof o.insert==="function"){o.insert(r)}else{var a=e(o.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(r)}return r}function A(o){if(o.parentNode===null){return false}o.parentNode.removeChild(o)}var u=function o(){var r=[];return function o(c,n){r[c]=n;return r.filter(Boolean).join("\n")}}();function l(o,r,c,n){var e=c?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(o.styleSheet){o.styleSheet.cssText=u(r,e)}else{var t=document.createTextNode(e);var a=o.childNodes;if(a[r]){o.removeChild(a[r])}if(a.length){o.insertBefore(t,a[r])}else{o.appendChild(t)}}}function p(o,r,c){var n=c.css;var e=c.media;var t=c.sourceMap;if(e){o.setAttribute("media",e)}else{o.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(o.styleSheet){o.styleSheet.cssText=n}else{while(o.firstChild){o.removeChild(o.firstChild)}o.appendChild(document.createTextNode(n))}}var h=null;var m=0;function d(o,r){var c;var n;var e;if(r.singleton){var t=m++;c=h||(h=i(r));n=l.bind(null,c,t,false);e=l.bind(null,c,t,true)}else{c=i(r);n=p.bind(null,c,r);e=function o(){A(c)}}n(o);return function r(c){if(c){if(c.css===o.css&&c.media===o.media&&c.sourceMap===o.sourceMap){return}n(o=c)}else{e()}}}o.exports=function(o,r){r=r||{};if(!r.singleton&&typeof r.singleton!=="boolean"){r.singleton=n()}o=o||[];var c=s(o,r);return function o(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var e=0;e<c.length;e++){var i=c[e];var A=a(i);t[A].references--}var u=s(n,r);for(var l=0;l<c.length;l++){var p=c[l];var h=a(p);if(t[h].references===0){t[h].updater();t.splice(h,1)}}c=u}}}}]);
//# sourceMappingURL=3532.8ad8590fcfb05584223d.js.map?v=8ad8590fcfb05584223d