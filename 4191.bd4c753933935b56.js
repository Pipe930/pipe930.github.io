"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4191],{4191:(Or,V,T)=>{T.r(V),T.d(V,{RegisterPageModule:()=>Cr});var K=T(6895),s=T(433),I=T(6159),ve=T(529),m=T(5035),ee=T(655);function h(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function R(r){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function he(r){return h(1,arguments),r instanceof Date||"object"===R(r)&&"[object Date]"===Object.prototype.toString.call(r)}function W(r){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function y(r){h(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||"object"===W(r)&&"[object Date]"===t?new Date(r.getTime()):"number"==typeof r||"[object Number]"===t?new Date(r):(("string"==typeof r||"[object String]"===t)&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function pe(r){if(h(1,arguments),!he(r)&&"number"!=typeof r)return!1;var t=y(r);return!isNaN(Number(t))}function x(r){if(null===r||!0===r||!1===r)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function _e(r,t){h(2,arguments);var e=y(r).getTime(),n=x(t);return new Date(e+n)}function we(r,t){h(2,arguments);var e=x(t);return _e(r,-e)}function E(r){h(1,arguments);var t=1,e=y(r),n=e.getUTCDay(),i=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function te(r){h(1,arguments);var t=y(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var i=E(n),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var u=E(o);return t.getTime()>=i.getTime()?e+1:t.getTime()>=u.getTime()?e:e-1}function ye(r){h(1,arguments);var t=te(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=E(e);return n}var xe=6048e5,re={};function A(){return re}function F(r,t){var e,n,i,o,u,d,f,l;h(1,arguments);var v=A(),g=x(null!==(e=null!==(n=null!==(i=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(u=t.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==i?i:v.weekStartsOn)&&void 0!==n?n:null===(f=v.locale)||void 0===f||null===(l=f.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==e?e:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=y(r),p=_.getUTCDay(),b=(p<g?7:0)+p-g;return _.setUTCDate(_.getUTCDate()-b),_.setUTCHours(0,0,0,0),_}function ne(r,t){var e,n,i,o,u,d,f,l;h(1,arguments);var v=y(r),g=v.getUTCFullYear(),_=A(),p=x(null!==(e=null!==(n=null!==(i=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(u=t.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:_.firstWeekContainsDate)&&void 0!==n?n:null===(f=_.locale)||void 0===f||null===(l=f.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==e?e:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(g+1,0,p),b.setUTCHours(0,0,0,0);var Y=F(b,t),M=new Date(0);M.setUTCFullYear(g,0,p),M.setUTCHours(0,0,0,0);var q=F(M,t);return v.getTime()>=Y.getTime()?g+1:v.getTime()>=q.getTime()?g:g-1}function De(r,t){var e,n,i,o,u,d,f,l;h(1,arguments);var v=A(),g=x(null!==(e=null!==(n=null!==(i=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(u=t.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:v.firstWeekContainsDate)&&void 0!==n?n:null===(f=v.locale)||void 0===f||null===(l=f.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==e?e:1),_=ne(r,t),p=new Date(0);p.setUTCFullYear(_,0,g),p.setUTCHours(0,0,0,0);var b=F(p,t);return b}var Pe=6048e5;function c(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}const C_y=function(t,e){var n=t.getUTCFullYear(),i=n>0?n:1-n;return c("yy"===e?i%100:i,e.length)},C_M=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},C_d=function(t,e){return c(t.getUTCDate(),e.length)},C_h=function(t,e){return c(t.getUTCHours()%12||12,e.length)},C_H=function(t,e){return c(t.getUTCHours(),e.length)},C_m=function(t,e){return c(t.getUTCMinutes(),e.length)},C_s=function(t,e){return c(t.getUTCSeconds(),e.length)},C_S=function(t,e){var n=e.length,i=t.getUTCMilliseconds();return c(Math.floor(i*Math.pow(10,n-3)),e.length)};function ae(r,t){var e=r>0?"-":"+",n=Math.abs(r),i=Math.floor(n/60),o=n%60;if(0===o)return e+String(i);var u=t||"";return e+String(i)+u+c(o,2)}function ie(r,t){return r%60==0?(r>0?"-":"+")+c(Math.abs(r)/60,2):P(r,t)}function P(r,t){var e=t||"",n=r>0?"-":"+",i=Math.abs(r);return n+c(Math.floor(i/60),2)+e+c(i%60,2)}const Oe={G:function(t,e,n){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var i=t.getUTCFullYear();return n.ordinalNumber(i>0?i:1-i,{unit:"year"})}return C_y(t,e)},Y:function(t,e,n,i){var o=ne(t,i),u=o>0?o:1-o;return"YY"===e?c(u%100,2):"Yo"===e?n.ordinalNumber(u,{unit:"year"}):c(u,e.length)},R:function(t,e){return c(te(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return c(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return c(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){var i=t.getUTCMonth();switch(e){case"M":case"MM":return C_M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return c(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var o=function Me(r,t){h(1,arguments);var e=y(r),n=F(e,t).getTime()-De(e,t).getTime();return Math.round(n/Pe)+1}(t,i);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):c(o,e.length)},I:function(t,e,n){var i=function Ce(r){h(1,arguments);var t=y(r),e=E(t).getTime()-ye(t).getTime();return Math.round(e/xe)+1}(t);return"Io"===e?n.ordinalNumber(i,{unit:"week"}):c(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):C_d(t,e)},D:function(t,e,n){var i=function Te(r){h(1,arguments);var t=y(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime();return Math.floor((e-n)/864e5)+1}(t);return"Do"===e?n.ordinalNumber(i,{unit:"dayOfYear"}):c(i,e.length)},E:function(t,e,n){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){var o=t.getUTCDay(),u=(o-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(u);case"ee":return c(u,2);case"eo":return n.ordinalNumber(u,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){var o=t.getUTCDay(),u=(o-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(u);case"cc":return c(u,e.length);case"co":return n.ordinalNumber(u,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var i=t.getUTCDay(),o=0===i?7:i;switch(e){case"i":return String(o);case"ii":return c(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){var o=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){var o,i=t.getUTCHours();switch(o=12===i?"noon":0===i?"midnight":i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){var o,i=t.getUTCHours();switch(o=i>=17?"evening":i>=12?"afternoon":i>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var i=t.getUTCHours()%12;return 0===i&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return C_h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):C_H(t,e)},K:function(t,e,n){var i=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(i,{unit:"hour"}):c(i,e.length)},k:function(t,e,n){var i=t.getUTCHours();return 0===i&&(i=24),"ko"===e?n.ordinalNumber(i,{unit:"hour"}):c(i,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):C_m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C_s(t,e)},S:function(t,e){return C_S(t,e)},X:function(t,e,n,i){var u=(i._originalDate||t).getTimezoneOffset();if(0===u)return"Z";switch(e){case"X":return ie(u);case"XXXX":case"XX":return P(u);default:return P(u,":")}},x:function(t,e,n,i){var u=(i._originalDate||t).getTimezoneOffset();switch(e){case"x":return ie(u);case"xxxx":case"xx":return P(u);default:return P(u,":")}},O:function(t,e,n,i){var u=(i._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ae(u,":");default:return"GMT"+P(u,":")}},z:function(t,e,n,i){var u=(i._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ae(u,":");default:return"GMT"+P(u,":")}},t:function(t,e,n,i){return c(Math.floor((i._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,n,i){return c((i._originalDate||t).getTime(),e.length)}};var oe=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ue=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const qe={p:ue,P:function(t,e){var u,n=t.match(/(P+)(p+)?/)||[],i=n[1],o=n[2];if(!o)return oe(t,e);switch(i){case"P":u=e.dateTime({width:"short"});break;case"PP":u=e.dateTime({width:"medium"});break;case"PPP":u=e.dateTime({width:"long"});break;default:u=e.dateTime({width:"full"})}return u.replace("{{date}}",oe(i,e)).replace("{{time}}",ue(o,e))}};function Se(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var Ze=["D","DD"],Ie=["YY","YYYY"];function Re(r){return-1!==Ze.indexOf(r)}function We(r){return-1!==Ie.indexOf(r)}function se(r,t,e){if("YYYY"===r)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===r)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===r)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===r)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ee={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function $(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var $e={date:$({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:$({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:$({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Ge={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(r){return function(t,e){var i;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,u=null!=e&&e.width?String(e.width):o;i=r.formattingValues[u]||r.formattingValues[o]}else{var d=r.defaultWidth,f=null!=e&&e.width?String(e.width):r.defaultWidth;i=r.values[f]||r.values[d]}return i[r.argumentCallback?r.argumentCallback(t):t]}}function O(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,i=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],o=t.match(i);if(!o)return null;var l,u=o[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],f=Array.isArray(d)?ot(d,function(g){return g.test(u)}):it(d,function(g){return g.test(u)});l=r.valueCallback?r.valueCallback(f):f,l=e.valueCallback?e.valueCallback(l):l;var v=t.slice(u.length);return{value:l,rest:v}}}function it(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function ot(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}const yt={code:"en-US",formatDistance:function(t,e,n){var i,o=Ee[t];return i="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i},formatLong:$e,formatRelative:function(t,e,n,i){return Ge[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function ut(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var i=n[0],o=t.match(r.parsePattern);if(!o)return null;var u=r.valueCallback?r.valueCallback(o[0]):o[0];u=e.valueCallback?e.valueCallback(u):u;var d=t.slice(i.length);return{value:u,rest:d}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:O({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:O({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:O({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:O({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dt=/^'([^]*?)'?$/,Pt=/''/g,Mt=/[a-zA-Z]/;function de(r,t,e){var n,i,o,u,d,f,l,v,g,_,p,b,Y,M,q,G,B,X;h(2,arguments);var Dr=String(t),S=A(),Z=null!==(n=null!==(i=null==e?void 0:e.locale)&&void 0!==i?i:S.locale)&&void 0!==n?n:yt,j=x(null!==(o=null!==(u=null!==(d=null!==(f=null==e?void 0:e.firstWeekContainsDate)&&void 0!==f?f:null==e||null===(l=e.locale)||void 0===l||null===(v=l.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==d?d:S.firstWeekContainsDate)&&void 0!==u?u:null===(g=S.locale)||void 0===g||null===(_=g.options)||void 0===_?void 0:_.firstWeekContainsDate)&&void 0!==o?o:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var z=x(null!==(p=null!==(b=null!==(Y=null!==(M=null==e?void 0:e.weekStartsOn)&&void 0!==M?M:null==e||null===(q=e.locale)||void 0===q||null===(G=q.options)||void 0===G?void 0:G.weekStartsOn)&&void 0!==Y?Y:S.weekStartsOn)&&void 0!==b?b:null===(B=S.locale)||void 0===B||null===(X=B.options)||void 0===X?void 0:X.weekStartsOn)&&void 0!==p?p:0);if(!(z>=0&&z<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Z.localize)throw new RangeError("locale must contain localize property");if(!Z.formatLong)throw new RangeError("locale must contain formatLong property");var J=y(r);if(!pe(J))throw new RangeError("Invalid time value");var Pr=Se(J),Mr=we(J,Pr),Ur={firstWeekContainsDate:j,weekStartsOn:z,locale:Z,_originalDate:J},Nr=Dr.match(Ct).map(function(w){var D=w[0];return"p"===D||"P"===D?(0,qe[D])(w,Z.formatLong):w}).join("").match(xt).map(function(w){if("''"===w)return"'";var D=w[0];if("'"===D)return Ut(w);var L=Oe[D];if(L)return!(null!=e&&e.useAdditionalWeekYearTokens)&&We(w)&&se(w,t,String(r)),!(null!=e&&e.useAdditionalDayOfYearTokens)&&Re(w)&&se(w,t,String(r)),L(Mr,w,Z.localize,Ur);if(D.match(Mt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return w}).join("");return Nr}function Ut(r){var t=r.match(Dt);return t?t[1].replace(Pt,"'"):r}Math.pow(10,8);var Q={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Zt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,It=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Rt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Wt(r){var n,t={},e=r.split(Q.dateTimeDelimiter);if(e.length>2)return t;if(/:/.test(e[0])?n=e[0]:(t.date=e[0],n=e[1],Q.timeZoneDelimiter.test(t.date)&&(t.date=r.split(Q.timeZoneDelimiter)[0],n=r.substr(t.date.length,r.length))),n){var i=Q.timezone.exec(n);i?(t.time=n.replace(i[1],""),t.timezone=i[1]):t.time=n}return t}function Et(r,t){var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=r.match(e);if(!n)return{year:NaN,restDateString:""};var i=n[1]?parseInt(n[1]):null,o=n[2]?parseInt(n[2]):null;return{year:null===o?i:100*o,restDateString:r.slice((n[1]||n[2]).length)}}function At(r,t){if(null===t)return new Date(NaN);var e=r.match(Zt);if(!e)return new Date(NaN);var n=!!e[4],i=k(e[1]),o=k(e[2])-1,u=k(e[3]),d=k(e[4]),f=k(e[5])-1;if(n)return function Gt(r,t,e){return t>=1&&t<=53&&e>=0&&e<=6}(0,d,f)?function Jt(r,t,e){var n=new Date(0);n.setUTCFullYear(r,0,4);var o=7*(t-1)+e+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+o),n}(t,d,f):new Date(NaN);var l=new Date(0);return function $t(r,t,e){return t>=0&&t<=11&&e>=1&&e<=(Lt[t]||(me(r)?29:28))}(t,o,u)&&function Ht(r,t){return t>=1&&t<=(me(r)?366:365)}(t,i)?(l.setUTCFullYear(t,o,Math.max(i,u)),l):new Date(NaN)}function k(r){return r?parseInt(r):1}function Ft(r){var t=r.match(It);if(!t)return NaN;var e=H(t[1]),n=H(t[2]),i=H(t[3]);return function Bt(r,t,e){return 24===r?0===t&&0===e:e>=0&&e<60&&t>=0&&t<60&&r>=0&&r<25}(e,n,i)?36e5*e+6e4*n+1e3*i:NaN}function H(r){return r&&parseFloat(r.replace(",","."))||0}function Qt(r){if("Z"===r)return 0;var t=r.match(Rt);if(!t)return 0;var e="+"===t[1]?-1:1,n=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function Xt(r,t){return t>=0&&t<=59}(0,i)?e*(36e5*n+6e4*i):NaN}var Lt=[31,null,31,30,31,30,31,31,30,31,30,31];function me(r){return r%400==0||r%4==0&&r%100!=0}var a=T(8256),ge=T(280);function jt(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function zt(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener minimo 4 caracteres"),a.qZA())}function Vt(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener maximo 20 caracteres"),a.qZA())}function Kt(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,jt,2,0,"ion-note",21),a.YNc(2,zt,2,0,"ion-note",21),a.YNc(3,Vt,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.nombre.errors.required),a.xp6(1),a.Q6J("ngIf",e.nombre.errors.minlength),a.xp6(1),a.Q6J("ngIf",e.nombre.errors.maxlength)}}function er(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function tr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener minimo 4 caracteres"),a.qZA())}function rr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener maximo 20 caracteres"),a.qZA())}function nr(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,er,2,0,"ion-note",21),a.YNc(2,tr,2,0,"ion-note",21),a.YNc(3,rr,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.apellido.errors.required),a.xp6(1),a.Q6J("ngIf",e.apellido.errors.minlength),a.xp6(1),a.Q6J("ngIf",e.apellido.errors.maxlength)}}function ar(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function ir(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener minimo 5 caracteres"),a.qZA())}function or(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener maximo 15 caracteres"),a.qZA())}function ur(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,ar,2,0,"ion-note",21),a.YNc(2,ir,2,0,"ion-note",21),a.YNc(3,or,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.nombre_usuario.errors.required),a.xp6(1),a.Q6J("ngIf",e.nombre_usuario.errors.minlength),a.xp6(1),a.Q6J("ngIf",e.nombre_usuario.errors.maxlength)}}function sr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function dr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que ser mayor de edad"),a.qZA())}function lr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"No puede superar a los 98 a\xf1os"),a.qZA())}function cr(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,sr,2,0,"ion-note",21),a.YNc(2,dr,2,0,"ion-note",21),a.YNc(3,lr,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.edad.errors.required),a.xp6(1),a.Q6J("ngIf",e.edad.errors.min),a.xp6(1),a.Q6J("ngIf",e.edad.errors.max)}}function fr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function mr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que ingresar una direccion de correo valida"),a.qZA())}function gr(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,fr,2,0,"ion-note",21),a.YNc(2,mr,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.correo.errors.required),a.xp6(1),a.Q6J("ngIf",e.correo.errors.email)}}function vr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function hr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener minimo 8 caracteres"),a.qZA())}function pr(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Tiene que tener maximo 16 caracteres"),a.qZA())}function _r(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,vr,2,0,"ion-note",21),a.YNc(2,hr,2,0,"ion-note",21),a.YNc(3,pr,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.contrasenia.errors.required),a.xp6(1),a.Q6J("ngIf",e.contrasenia.errors.minlength),a.xp6(1),a.Q6J("ngIf",e.contrasenia.errors.maxlength)}}function wr(r,t){if(1&r){const e=a.EpF();a.TgZ(0,"ion-datetime",23,24),a.NdJ("ionChange",function(){a.CHM(e);const i=a.MAs(1),o=a.oxw();return a.KtG(o.agregarFecha(i.value))}),a.TgZ(2,"span",25),a._uU(3,"Seleccione su fecha de nacimiento"),a.qZA()()}if(2&r){const e=a.oxw();a.Q6J("max",e.fechaActual)("value",e.dateValue)("showDefaultButtons",!0)}}function br(r,t){1&r&&(a.TgZ(0,"ion-note",22),a._uU(1,"Este campo es requerido"),a.qZA())}function Tr(r,t){if(1&r&&(a.TgZ(0,"div",20),a.YNc(1,br,2,0,"ion-note",21),a.qZA()),2&r){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.fecha_nacimiento.errors.required)}}const yr=[{path:"",component:(()=>{class r{constructor(e,n,i,o,u){this.builder=e,this.ruta=n,this.servicioUser=i,this.alerta=o,this.toast=u,this.d=new Date,this.fechaActual=this.d.getFullYear()+"-"+("0"+(this.d.getMonth()+1)).slice(-2)+"-"+("0"+(this.d.getDate()-1)).slice(-2),this.bithDay="",this.dateValue=de(new Date,"yyyy-MM-dd")}construirFormulario(){this.formularioRegistrarse=this.builder.group({nombre:new s.NI("",[s.kI.required,s.kI.minLength(4),s.kI.maxLength(20)]),apellido:new s.NI("",[s.kI.required,s.kI.minLength(4),s.kI.maxLength(20)]),nombre_usuario:new s.NI("",[s.kI.required,s.kI.minLength(5),s.kI.maxLength(15)]),edad:new s.NI(null,[s.kI.required,s.kI.min(18),s.kI.max(98)]),correo:new s.NI("",[s.kI.required,s.kI.email]),contrasenia:new s.NI("",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16)]),fecha_nacimiento:new s.NI("",s.kI.required),genero:new s.NI("male",s.kI.required)})}ngOnInit(){this.construirFormulario(),console.log(this.fechaActual)}alertaExito(){return(0,ee.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Exito",subHeader:"Mensaje de Exito",message:"Se a registrado correctamente",buttons:["Aceptar"]})).present()})}alertaError(){return(0,ee.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Error",subHeader:"Mensaje de Error",message:"Faltan datos a completar",buttons:["Ok"]})).present()})}registrarse(){const e=this.formularioRegistrarse.value,n={firstName:e.nombre,lastName:e.apellido,username:e.nombre_usuario,age:e.edad,email:e.correo,password:e.contrasenia,birthDate:this.bithDay,gender:e.genero};this.formularioRegistrarse.invalid?(this.formularioRegistrarse.markAllAsTouched(),this.alertaError()):this.servicioUser.register(n).subscribe(i=>{console.log(i),this.alertaExito(),this.formularioRegistrarse.reset(),this.ruta.navigate(["login"])},i=>{console.log(i),window.alert("Error al enviar el formulario")})}agregarFecha(e){null!=e&&(this.bithDay=de(function St(r,t){var e;h(1,arguments);var n=x(null!==(e=null==t?void 0:t.additionalDigits)&&void 0!==e?e:2);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof r&&"[object String]"!==Object.prototype.toString.call(r))return new Date(NaN);var o,i=Wt(r);if(i.date){var u=Et(i.date,n);o=At(u.restDateString,u.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l,d=o.getTime(),f=0;if(i.time&&(f=Ft(i.time),isNaN(f)))return new Date(NaN);if(!i.timezone){var v=new Date(d+f),g=new Date(0);return g.setFullYear(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()),g.setHours(v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds()),g}return l=Qt(i.timezone),isNaN(l)?new Date(NaN):new Date(d+f+l)}(e),"yyyy-MM-dd")),console.log(this.bithDay)}get nombre(){return this.formularioRegistrarse.get("nombre")}get apellido(){return this.formularioRegistrarse.get("apellido")}get nombre_usuario(){return this.formularioRegistrarse.get("nombre_usuario")}get edad(){return this.formularioRegistrarse.get("edad")}get correo(){return this.formularioRegistrarse.get("correo")}get contrasenia(){return this.formularioRegistrarse.get("contrasenia")}get fecha_nacimiento(){return this.formularioRegistrarse.get("fecha_nacimiento")}}return r.\u0275fac=function(e){return new(e||r)(a.Y36(s.qu),a.Y36(I.F0),a.Y36(ge.b),a.Y36(m.Br),a.Y36(m.yF))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-register"]],decls:62,vars:10,consts:[["color","tertiary"],["slot","start"],[1,"ion-padding"],["lines","full",1,"ion-padding"],[1,"ion-text-center"],["action","","novalidate","",3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","nombre"],["class","container-messages-errors",4,"ngIf"],["type","text","formControlName","apellido"],["type","text","formControlName","nombre_usuario"],["type","number","formControlName","edad"],["type","email","formControlName","correo"],["type","password","formControlName","contrasenia"],["datetime","datetime"],[3,"keepContentsMounted"],["formControlName","genero"],["value","female"],["value","male"],["expand","block","shape","round","fill","outline","type","submit",3,"disabled"],[1,"container-messages-errors"],["color","danger",4,"ngIf"],["color","danger"],["formControlName","fecha_nacimiento","id","datetime","min","1992-01-01","presentation","date","size","cover","doneText","Confirmar","cancelText","Cancelar",3,"max","value","showDefaultButtons","ionChange"],["datetime",""],["slot","title"]],template:function(e,n){1&e&&(a.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),a._UZ(3,"ion-back-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5,"Registro"),a.qZA()()(),a.TgZ(6,"ion-content",2)(7,"ion-list",3)(8,"ion-list-header")(9,"ion-label",4)(10,"h1"),a._uU(11," Registrarse "),a.qZA()()(),a.TgZ(12,"form",5),a.NdJ("ngSubmit",function(){return n.registrarse()}),a.TgZ(13,"ion-item")(14,"ion-label",6),a._uU(15,"Nombre"),a.qZA(),a._UZ(16,"ion-input",7),a.YNc(17,Kt,4,3,"div",8),a.qZA(),a.TgZ(18,"ion-item")(19,"ion-label",6),a._uU(20,"Apellido"),a.qZA(),a._UZ(21,"ion-input",9),a.YNc(22,nr,4,3,"div",8),a.qZA(),a.TgZ(23,"ion-item")(24,"ion-label",6),a._uU(25,"Nombre Usuario"),a.qZA(),a._UZ(26,"ion-input",10),a.YNc(27,ur,4,3,"div",8),a.qZA(),a.TgZ(28,"ion-item")(29,"ion-label",6),a._uU(30,"Edad"),a.qZA(),a._UZ(31,"ion-input",11),a.YNc(32,cr,4,3,"div",8),a.qZA(),a.TgZ(33,"ion-item")(34,"ion-label",6),a._uU(35,"Correo"),a.qZA(),a._UZ(36,"ion-input",12),a.YNc(37,gr,3,2,"div",8),a.qZA(),a.TgZ(38,"ion-item")(39,"ion-label",6),a._uU(40,"Contrase\xf1a"),a.qZA(),a._UZ(41,"ion-input",13),a.YNc(42,_r,4,3,"div",8),a.qZA(),a.TgZ(43,"ion-item")(44,"ion-label"),a._uU(45," Fecha Nacimiento "),a.qZA(),a._UZ(46,"ion-datetime-button",14),a.TgZ(47,"ion-modal",15),a.YNc(48,wr,4,3,"ng-template"),a.qZA()(),a.YNc(49,Tr,2,1,"div",8),a.TgZ(50,"ion-item")(51,"ion-label"),a._uU(52,"Genero"),a.qZA(),a.TgZ(53,"ion-segment",16)(54,"ion-segment-button",17)(55,"ion-label"),a._uU(56,"Mujer"),a.qZA()(),a.TgZ(57,"ion-segment-button",18)(58,"ion-label"),a._uU(59,"Hombre"),a.qZA()()()(),a.TgZ(60,"ion-button",19),a._uU(61,"Registrarse"),a.qZA()()()()),2&e&&(a.xp6(12),a.Q6J("formGroup",n.formularioRegistrarse),a.xp6(5),a.Q6J("ngIf",n.nombre.invalid&&(n.nombre.dirty||n.nombre.touched)),a.xp6(5),a.Q6J("ngIf",n.apellido.invalid&&(n.apellido.dirty||n.apellido.touched)),a.xp6(5),a.Q6J("ngIf",n.nombre_usuario.invalid&&(n.nombre_usuario.dirty||n.nombre_usuario.touched)),a.xp6(5),a.Q6J("ngIf",n.edad.invalid&&(n.edad.dirty||n.edad.touched)),a.xp6(5),a.Q6J("ngIf",n.correo.invalid&&(n.correo.dirty||n.correo.touched)),a.xp6(5),a.Q6J("ngIf",n.contrasenia.invalid&&(n.contrasenia.dirty||n.contrasenia.touched)),a.xp6(5),a.Q6J("keepContentsMounted",!0),a.xp6(2),a.Q6J("ngIf",n.fecha_nacimiento.invalid&&(n.fecha_nacimiento.dirty||n.fecha_nacimiento.touched)),a.xp6(11),a.Q6J("disabled",n.formularioRegistrarse.invalid))},dependencies:[K.O5,s._Y,s.JJ,s.JL,m.oU,m.YG,m.Sm,m.W2,m.x4,m.Mj,m.Gu,m.pK,m.Ie,m.Q$,m.q_,m.yh,m.uN,m.cJ,m.GO,m.wd,m.sr,m.ki,m.as,m.QI,m.j9,m.cs,s.sg,s.u],styles:["ion-list[_ngcontent-%COMP%]{width:90%;max-width:500px;margin:auto;border-radius:10px}ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;font-weight:900;padding:10px 0 0}"]}),r})()}];let xr=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[I.Bz.forChild(yr),I.Bz]}),r})(),Cr=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({providers:[ge.b],imports:[K.ez,s.u5,m.Pc,xr,I.Bz,s.UX,ve.JF]}),r})()}}]);