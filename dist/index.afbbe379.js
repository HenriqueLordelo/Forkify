var e,t,r,n,i,o,a,s,c,u,l,d,p,h,f,v,g,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},O={};S=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},j={};j=!O(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;$=j?F.bind(F):function(){return F.apply(F,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},N={},H=Function.prototype,q=H.call,I=j&&H.bind.bind(q,q),z={},C=(N=j?I:function(e){return function(){return q.apply(e,arguments)}})({}.toString),A=N("".slice);z=function(e){return A(C(e),8,-1)};var D=Object,R=N("".split);T=O(function(){return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===z(e)?R(e,""):D(e)}:D;var W={},U={};U=function(e){return null==e};var B=TypeError;W=function(e){if(U(e))throw new B("Can't call method on "+e);return e},x=function(e){return T(W(e))};var G={},J={},V={},Y={},Q="object"==typeof document&&document.all;Y=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},V=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=N({}.isPrototypeOf);var ee={},et={},er={},en={},ei=k.navigator,eo=ei&&ei.userAgent;en=eo?String(eo):"";var ea=k.process,es=k.Deno,ec=ea&&ea.versions||es&&es.version,eu=ec&&ec.v8;eu&&(s=(a=eu.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var el=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol("symbol detection");return!el(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,ed(e))};var ep={},eh={},ef={},ev=String;ef=function(e){try{return ev(e)}catch(e){return"Object"}};var eg=TypeError;eh=function(e){if(Y(e))return e;throw new eg(ef(e)+" is not a function")},ep=function(e,t){var r=e[t];return U(r)?void 0:eh(r)};var em={},ey=TypeError;em=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!V(n=$(r,e))||Y(r=e.valueOf)&&!V(n=$(r,e))||"string"!==t&&Y(r=e.toString)&&!V(n=$(r,e)))return n;throw new ey("Can't convert object to primitive value")};var eb={},e_={},ew={};ew=!1;var ek={},eE=Object.defineProperty;ek=function(e,t){try{eE(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var eS="__core-js_shared__",eO=e_=k[eS]||ek(eS,{});(eO.versions||(eO.versions=[])).push({version:"3.38.1",mode:ew?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return e_[e]||(e_[e]=t||{})};var e$={},ej={},eF=Object;ej=function(e){return eF(W(e))};var eL=N({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eL(ej(e),t)};var eM={},eP=0,ex=Math.random(),eT=N(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eP+ex,36)};var eN=k.Symbol,eH=eb("wks"),eq=ee?eN.for||eN:eN&&eN.withoutSetter||eM,eI=TypeError,ez=(e$(eH,e="toPrimitive")||(eH[e]=et&&e$(eN,e)?eN[e]:eq("Symbol."+e)),eH[e]);J=function(e,t){if(!V(e)||K(e))return e;var r,n=ep(e,ez);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!V(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},G=function(e){var t=J(e,"string");return K(t)?t:t+""};var eC={},eA={},eD=k.document,eR=V(eD)&&V(eD.createElement);eA=function(e){return eR?eD.createElement(e):{}},eC=!S&&!O(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;i=S?eW:function(e,t){if(e=x(e),t=G(t),eC)try{return eW(e,t)}catch(e){}if(e$(e,t))return P(!$(o,e,t),e[t])};var eU={},eB={};eB=S&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eJ=String,eV=TypeError;eG=function(e){if(V(e))return e;throw new eV(eJ(e)+" is not an object")};var eY=TypeError,eQ=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e1="writable";c=S?eB?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eK(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(eG(e),t=G(t),eG(r),eC)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e0={},e2={},e4=Function.prototype,e9=S&&Object.getOwnPropertyDescriptor,e3=e$(e4,"name")&&(!S||S&&e9(e4,"name").configurable),e8={},e7=N(Function.toString);Y(e_.inspectSource)||(e_.inspectSource=function(e){return e7(e)}),e8=e_.inspectSource;var e6={},e5={},te=k.WeakMap;e5=Y(te)&&/native code/.test(String(te));var tt={},tr=eb("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e5||e_.state){var ts=e_.state||(e_.state=new ta);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,u=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},l=function(e){return ts.get(e)||{}},d=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,u=function(e,t){if(e$(e,tc))throw new to(ti);return t.facade=e,eU(e,tc,t),t},l=function(e){return e$(e,tc)?e[tc]:{}},d=function(e){return e$(e,tc)}}var tu=(e6={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=l(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e6.get,tp=String,th=Object.defineProperty,tf=N("".slice),tv=N("".replace),tg=N([].join),tm=S&&!O(function(){return 8!==th(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e2=function(e,t,r){"Symbol("===tf(tp(t),0,7)&&(t="["+tv(tp(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e3&&e.name!==t)&&(S?th(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&e$(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?S&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return e$(n,"source")||(n.source=tg(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=tb(function(){return Y(this)&&tl(this).source||e8(this)},"toString"),e0=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&e2(r,o,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},tO={},t$=Math.ceil,tj=Math.floor;tO=Math.trunc||function(e){var t=+e;return(t>0?tj:t$)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tO(t)};var tF=Math.max,tL=Math.min;tE=function(e,t){var r=tS(e);return r<0?tF(r+t,0):tL(r,t)};var tM={},tP={},tx=Math.min;tP=function(e){var t=tS(e);return t>0?tx(t,0x1fffffffffffff):0},tM=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var i,o=x(t),a=tM(o);if(0===a)return!e&&-1;var s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tN={includes:tT(!0),indexOf:tT(!1)}.indexOf,tH=N([].push);tk=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!e$(tn,r)&&e$(n,r)&&tH(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tN(o,r)||tH(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tk(e,tq)},h=Object.getOwnPropertySymbols;var tI=N([].concat);tw=X("Reflect","ownKeys")||function(e){var t=p(eG(e));return h?tI(t,h(e)):t},t_=function(e,t,r){for(var n=tw(t),o=0;o<n.length;o++){var a=n[o];e$(e,a)||r&&e$(r,a)||c(e,a,i(t,a))}};var tz={},tC=/#|\.prototype\./,tA=function(e,t){var r=tR[tD(e)];return r===tU||r!==tW&&(Y(t)?O(t):!!t)},tD=tA.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tR=tA.data={},tW=tA.NATIVE="N",tU=tA.POLYFILL="P";tz=tA,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||ek(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tz(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&eU(a,"sham",!0),e0(r,n,a,e)}};var tB={},tG={},tJ=Function.prototype,tV=tJ.apply,tY=tJ.call;tG="object"==typeof Reflect&&Reflect.apply||(j?tY.bind(tV):function(){return tY.apply(tV,arguments)});var tQ={},tK={},tX=(tK=function(e){if("Function"===z(e))return N(e)})(tK.bind);tQ=function(e,t){return eh(e),void 0===t?e:j?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=X("document","documentElement");var t1={};t1=N([].slice);var t0={},t2=TypeError;t0=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t9={},t3={},t8=function(e){return en.slice(0,e.length)===e};t9="NODE"==(t3=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":k.Bun&&"string"==typeof Bun.version?"BUN":k.Deno&&"object"==typeof Deno.version?"DENO":"process"===z(k.process)?"NODE":k.window&&k.document?"BROWSER":"REST");var t7=k.setImmediate,t6=k.clearImmediate,t5=k.process,re=k.Dispatch,rt=k.Function,rr=k.MessageChannel,rn=k.String,ri=0,ro={},ra="onreadystatechange";O(function(){f=k.location});var rs=function(e){if(e$(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){k.postMessage(rn(e),f.protocol+"//"+f.host)};t7&&t6||(t7=function(e){t0(arguments.length,1);var t=Y(e)?e:rt(e),r=t1(arguments,1);return ro[++ri]=function(){tG(t,void 0,r)},v(ri),ri},t6=function(e){delete ro[e]},t9?v=function(e){t5.nextTick(rc(e))}:re&&re.now?v=function(e){re.now(rc(e))}:rr&&!t4?(m=(g=new rr).port2,g.port1.onmessage=ru,v=tQ(m.postMessage,m)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!O(rl)?(v=rl,k.addEventListener("message",ru,!1)):v=ra in eA("script")?function(e){tZ.appendChild(eA("script"))[ra]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tB={set:t7,clear:t6}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rd},{clearImmediate:rd});var rp=tB.set,rh={},rf=k.Function,rv=/MSIE .\./.test(en)||"BUN"===t3&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rh=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t0(arguments.length,1)>r,a=Y(n)?n:rf(n),s=o?t1(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rg=k.setImmediate?rh(rp,!1):rp;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rg},{setImmediate:rg});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.herokuapp.com/api/v2/recipes/",rb="7ebfcc6c-fd84-48ea-aaa6-f880dd649064",r_=async(e,t)=>{try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=e=>{let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rE=async e=>{try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t);let{recipe:r}=t.data;rw.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1,console.log(rw.recipe)}catch(e){throw console.error(`${e} :(`),e}},rS=async e=>{try{rw.search.query=e;let t=await r_(`${ry}?search=${e}&key=${rb}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rw.search.page=1}catch(e){throw console.error(`${e} :(`),e}},rO=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},r$=e=>{rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rj=()=>{localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},rF=e=>{rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rj()},rL=e=>{let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rj()};(()=>{let e=localStorage.getItem("bookmarks");e&&(rw.bookmarks=JSON.parse(e))})();const rM=async e=>{try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format. Please, use the correct format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r_(`${ry}?key=${rb}`,r);rw.recipe=rk(n),rF(rw.recipe)}catch(e){throw e}};var rP={};rP=new URL("icons.c14567a0.svg",import.meta.url).toString();var rx={};rx='<svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http_://www.w3.org/2000/svg"><path d="M11 2v4a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 16v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0zM4.223 5.637l2.83 2.83a.999.999 0 1 0 1.414-1.414l-2.83-2.83a.999.999 0 1 0-1.414 1.414zm11.31 11.31 2.83 2.83a.999.999 0 1 0 1.414-1.414l-2.83-2.83a.999.999 0 1 0-1.414 1.414zM2 13h4a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm16 0h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2zM5.637 19.777l2.83-2.83a.999.999 0 1 0-1.414-1.414l-2.83 2.83a.999.999 0 1 0 1.414 1.414zm11.31-11.31 2.83-2.83a.999.999 0 1 0-1.414-1.414l-2.83 2.83a.999.999 0 1 0 1.414 1.414z"/></svg>';class rT{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
      <div class="spinner">
        ${/*@__PURE__*/_(rx)}
      </div> 
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/_(rP)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rN extends rT{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please, try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">${1===this._data.servings?"serving":"servings"}</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rP)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rP)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
               <use href="${/*@__PURE__*/_(rP)}#icon-user"></use>
              </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/_(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${/*@__PURE__*/_(rP)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>
  `}}var rH=new rN;class rq{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rI=new rq,rz=new class extends rT{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
            <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
              
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${/*@__PURE__*/_(rP)}#icon-user"></use>
                </svg>
            </div>
          </div>
            </a>
        </li>
    `}};class rC extends rT{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please, try again.";_message="";_generateMarkup(){return this._data.map(e=>rz.render(e,!1)).join("")}}var rA=new rC;class rD extends rT{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-arrow-right"></use>
            </svg>
          </button>
        `:e===t&&t>1?`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
        `:e<t?`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rP)}#icon-arrow-right"></use>
            </svg>
          </button>
        `:""}}var rR=new rD;class rW extends rT{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rz.render(e,!1)).join("")}}var rU=new rW;class rB extends rT{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rG=new rB;const rJ=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rH.renderSpinner(),rA.update(rO()),rU.update(rw.bookmarks),await rE(e),rH.render(rw.recipe)}catch(e){rH.renderError(),console.error(e)}},rV=async()=>{try{rA.renderSpinner();let e=rI.getQuery();if(!e)return;await rS(e),rA.render(rO()),rR.render(rw.search)}catch(e){console.log(e)}},rY=async e=>{try{rG.renderSpinner(),await rM(e),console.log(mode.state.recipe),rH.render(rw.recipe),rG.renderMessage(),rU.render(rw.bookmarks),window.history.pushState(null,"",`#${rw.recipe.id}`),setTimeout(()=>{rG.toggleWindow()},2500)}catch(e){console.error(e),rG.renderError(e.message)}};rU.addHandlerRender(()=>{rU.render(rw.bookmarks)}),rH.addHandlerRender(rJ),rH.addHandlerUpdateServings(e=>{r$(e),rH.update(rw.recipe)}),rH.addHandlerAddBookmark(()=>{rw.recipe.bookmarked?rL(rw.recipe.id):rF(rw.recipe),rH.update(rw.recipe),rU.render(rw.bookmarks)}),rI.addHandlerSearch(rV),rR.addHandlerClick(e=>{rA.render(rO(e)),rR.render(rw.search)}),rG.addHandlerUpload(rY);
//# sourceMappingURL=index.afbbe379.js.map
