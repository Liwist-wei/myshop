(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-107385d8"],{"0a06":function(t,e,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),a=n("5270"),s=n("4a7b");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=c},"0cb2":function(t,e,n){var r=n("7b0b"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,f){var l=n+t.length,d=c.length,p=s;return void 0!==u&&(u=r(u),p=a),i.call(f,p,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":a=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>d){var f=o(s/10);return 0===f?r:f<=d?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):r}a=c[s-1]}return void 0===a?"":a}))}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"107c":function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;t.exports=r((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"15ae":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},o=[],i=(n("a9e3"),n("99af"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var n=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols,r=0;r<e.length;r++){var o=e[r];o.style.width=n+"px",(r+1)%this.cols!==0&&(o.style.marginRight=this.itemSpace+"px"),r>=this.cols&&(o.style.marginTop=this.lineSpace+"px")}}}}),a=i,s=(n("52be"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"b9ad422e",null);e["a"]=c.exports},"1b9d":function(t,e,n){"use strict";n("4df9")},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);n("3b42");function i(t){var e=o.a.create({baseURL:"http://152.136.185.210:7878/api/m5"});return e.interceptors.request.use((function(t){return t}),(function(t){})),e.interceptors.response.use((function(t){return t.data}),(function(t){console.log(t)})),e(t)}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"1e1e":function(t,e,n){},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}var c={adapter:s(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(i)})),t.exports=c}).call(this,n("4362"))},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("577e"),a=n("d039"),s=n("ad6d"),c="toString",u=RegExp.prototype,f=u[c],l=a((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=f.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var t=o(this),e=i(t.source),n=t.flags,r=i(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3b42":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}},[n("nav-bar",{staticClass:"nav-bar"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物商城")])]),n("UserInfo"),t._m(0),n("list-view",{staticClass:"order-list",attrs:{"list-data":t.orderList}}),n("list-view",{staticClass:"service-list",attrs:{"list-data":t.serviceList}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"account"},[n("div",{staticClass:"account-item"},[n("div",{staticClass:"number"},[n("span",{staticClass:"balance"},[t._v("0.00")]),t._v("元 ")]),n("div",{staticClass:"account-info"},[t._v("我的余额")])]),n("div",{staticClass:"account-item"},[n("div",{staticClass:"number"},[n("span",{staticClass:"balance"},[t._v("0")]),t._v("个 ")]),n("div",{staticClass:"account-info"},[t._v("我的优惠")])]),n("div",{staticClass:"account-item"},[n("div",{staticClass:"number"},[n("span",{staticClass:"balance"},[t._v("0")]),t._v("分 ")]),n("div",{staticClass:"account-info"},[t._v("我的积分")])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-info"}},[n("a",{staticClass:"clear-fix",attrs:{href:"#"}},[t._t("user-icon",(function(){return[n("svg",{staticClass:"privateImage-svg left"},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#avatar-default"}})])]})),n("div",{staticClass:"login-info left"},[t._t("user-nickname",(function(){return[n("div",[t._v("登录/注册")])]})),n("div",{staticClass:"phone"},[n("span",[n("svg",{staticClass:"icon-mobile",attrs:{"data-v-735ff1be":"",fill:"#fff"}},[n("use",{attrs:{"data-v-735ff1be":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#mobile"}})])]),t._t("user-phone",(function(){return[t._v("暂无绑定手机号")]}))],2)],2),n("svg",{staticClass:"arrow-svg right",attrs:{"data-v-735ff1be":"",fill:"#fff"}},[n("use",{attrs:{"data-v-735ff1be":"","xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])],2)])},a=[],s={name:"UserInfo",components:{}},c=s,u=(n("1b9d"),n("2877")),f=Object(u["a"])(c,i,a,!1,null,"4159f3c7",null),l=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},t._l(t.listData,(function(e,r){return n("div",{key:r,staticClass:"item"},[n("span",{staticClass:"icon"},[n("svg",{attrs:{fill:e.iconColor}},[n("use",{attrs:{"xlink:href":e.icon}})])]),n("div",{staticClass:"info"},[t._v(t._s(e.info))])])})),0)},p=[],h={name:"ListView",props:{listData:{type:Array,default:function(){return[]}}}},v=h,g=(n("cf39"),Object(u["a"])(v,d,p,!1,null,"ca88dfa8",null)),m=g.exports,b=n("406a"),x={name:"Profile",components:{UserInfo:l,ListView:m,NavBar:b["a"]},data:function(){return{orderList:[{icon:"#order",iconColor:"#ff8198",info:"我的消息"},{icon:"#point",iconColor:"#fc7b53",info:"积分商城"},{icon:"#vip",iconColor:"#ffc636",info:"会员卡"}],serviceList:[{icon:"#service",iconColor:"#ff8198",info:"我的购物车"},{icon:"#download",iconColor:"#ff8198",info:"下载购物APP"}]}},mounted:function(){}},y=x,w=(n("7a3c"),Object(u["a"])(y,r,o,!1,null,"5f94b346",null));e["default"]=w.exports},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function u(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(t[o],e[o])}r.forEach(o,(function(t){r.isUndefined(e[t])||(n[t]=c(void 0,e[t]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=c(void 0,t[o])):n[o]=c(void 0,e[o])})),r.forEach(s,(function(r){r in e?n[r]=c(t[r],e[r]):r in t&&(n[r]=c(void 0,t[r]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return r.forEach(l,u),n}},"4d63":function(t,e,n){var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("7156"),s=n("9112"),c=n("9bf2").f,u=n("241c").f,f=n("44e7"),l=n("577e"),d=n("ad6d"),p=n("9f7f"),h=n("6eeb"),v=n("d039"),g=n("5135"),m=n("69f3").enforce,b=n("2626"),x=n("b622"),y=n("fce3"),w=n("107c"),E=x("match"),C=o.RegExp,R=C.prototype,A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,k=/a/g,O=/a/g,S=new C(k)!==k,_=p.UNSUPPORTED_Y,j=r&&(!S||_||y||w||v((function(){return O[E]=!1,C(k)!=k||C(O)==O||"/a/i"!=C(k,"i")}))),I=function(t){for(var e,n=t.length,r=0,o="",i=!1;r<=n;r++)e=t.charAt(r),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+t.charAt(++r);return o},N=function(t){for(var e,n=t.length,r=0,o="",i=[],a={},s=!1,c=!1,u=0,f="";r<=n;r++){if(e=t.charAt(r),"\\"===e)e+=t.charAt(++r);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:A.test(t.slice(r+1))&&(r+=2,c=!0),o+=e,u++;continue;case">"===e&&c:if(""===f||g(a,f))throw new SyntaxError("Invalid capture group name");a[f]=!0,i.push([f,u]),c=!1,f="";continue}c?f+=e:o+=e}return[o,i]};if(i("RegExp",j)){for(var T=function(t,e){var n,r,o,i,c,u,p=this instanceof T,h=f(t),v=void 0===e,g=[],b=t;if(!p&&h&&v&&t.constructor===T)return t;if((h||t instanceof T)&&(t=t.source,v&&(e="flags"in b?b.flags:d.call(b))),t=void 0===t?"":l(t),e=void 0===e?"":l(e),b=t,y&&"dotAll"in k&&(r=!!e&&e.indexOf("s")>-1,r&&(e=e.replace(/s/g,""))),n=e,_&&"sticky"in k&&(o=!!e&&e.indexOf("y")>-1,o&&(e=e.replace(/y/g,""))),w&&(i=N(t),t=i[0],g=i[1]),c=a(C(t,e),p?this:R,T),(r||o||g.length)&&(u=m(c),r&&(u.dotAll=!0,u.raw=T(I(t),n)),o&&(u.sticky=!0),g.length&&(u.groups=g)),t!==b)try{s(c,"source",""===b?"(?:)":b)}catch(x){}return c},U=function(t){t in T||c(T,t,{configurable:!0,get:function(){return C[t]},set:function(e){C[t]=e}})},$=u(C),L=0;$.length>L;)U($[L++]);R.constructor=T,T.prototype=R,h(o,"RegExp",T)}b("RegExp")},"4df9":function(t,e,n){},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),a=n("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||a.adapter;return e(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"52be":function(t,e,n){"use strict";n("1e1e")},5319:function(t,e,n){"use strict";var r=n("d784"),o=n("d039"),i=n("825a"),a=n("a691"),s=n("50c4"),c=n("577e"),u=n("1d80"),f=n("8aa5"),l=n("0cb2"),d=n("14c3"),p=n("b622"),h=p("replace"),v=Math.max,g=Math.min,m=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),y=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=x?"$":"$0";return[function(t,n){var r=u(this),o=void 0==t?void 0:t[h];return void 0!==o?o.call(t,r,n):e.call(c(r),t,n)},function(t,o){var u=i(this),p=c(t);if("string"===typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var h=n(e,u,p,o);if(h.done)return h.value}var b="function"===typeof o;b||(o=c(o));var x=u.global;if(x){var y=u.unicode;u.lastIndex=0}var w=[];while(1){var E=d(u,p);if(null===E)break;if(w.push(E),!x)break;var C=c(E[0]);""===C&&(u.lastIndex=f(p,s(u.lastIndex),y))}for(var R="",A=0,k=0;k<w.length;k++){E=w[k];for(var O=c(E[0]),S=v(g(a(E.index),p.length),0),_=[],j=1;j<E.length;j++)_.push(m(E[j]));var I=E.groups;if(b){var N=[O].concat(_,S,p);void 0!==I&&N.push(I);var T=c(o.apply(void 0,N))}else T=l(O,p,S,_,I,o);S>=A&&(R+=p.slice(A,S)+T,A=S+O.length)}return R+p.slice(A)}]}),!y||!b||x)},"5f02":function(t,e,n){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"74c5":function(t,e,n){},"7a3c":function(t,e,n){"use strict";n("74c5")},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,n){"use strict";var r=n("d925"),o=n("e683");t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},"846c":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},"90b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("ac1f"),n("5319"),n("4d63"),n("25f0");function r(t,e){var n=null;return function(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,i)}),e)}}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var o=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:i(o))}return e}function i(t){return("00"+t).substr(t.length)}},9263:function(t,e,n){"use strict";var r=n("577e"),o=n("ad6d"),i=n("9f7f"),a=n("5692"),s=n("7c73"),c=n("69f3").get,u=n("fce3"),f=n("107c"),l=RegExp.prototype.exec,d=a("native-string-replace",String.prototype.replace),p=l,h=function(){var t=/a/,e=/b*/g;return l.call(t,"a"),l.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=i.UNSUPPORTED_Y||i.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],m=h||g||v||u||f;m&&(p=function(t){var e,n,i,a,u,f,m,b=this,x=c(b),y=r(t),w=x.raw;if(w)return w.lastIndex=b.lastIndex,e=p.call(w,y),b.lastIndex=w.lastIndex,e;var E=x.groups,C=v&&b.sticky,R=o.call(b),A=b.source,k=0,O=y;if(C&&(R=R.replace("y",""),-1===R.indexOf("g")&&(R+="g"),O=y.slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==y.charAt(b.lastIndex-1))&&(A="(?: "+A+")",O=" "+O,k++),n=new RegExp("^(?:"+A+")",R)),g&&(n=new RegExp("^"+A+"$(?!\\s)",R)),h&&(i=b.lastIndex),a=l.call(C?n:b,O),C?a?(a.input=a.input.slice(k),a[0]=a[0].slice(k),a.index=b.lastIndex,b.lastIndex+=a[0].length):b.lastIndex=0:h&&a&&(b.lastIndex=b.global?a.index+a[0].length:i),g&&a&&a.length>1&&d.call(a[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a&&E)for(a.groups=f=s(null),u=0;u<E.length;u++)m=E[u],f[m[0]]=a[m[1]];return a}),t.exports=p},9977:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImg,expression:"showImg"}],key:t.showImg,attrs:{alt:""},on:{load:t.imgload}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},o=[],i={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},methods:{imgload:function(){-1!=this.$route.path.indexOf("/home")?this.$bus.$emit("imgload"):-1!=this.$route.path.indexOf("/home")?this.$bus.$emit("detailload"):this.$bus.$emit("categoryload")},itemClick:function(){this.$router.push({path:"/detail",query:{iid:this.goodsItem.iid}})}},computed:{showImg:function(){return this.goodsItem.image||this.goodsItem.img||this.goodsItem.show.img}}},a=i,s=(n("fba5"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"f944015c",null);e["a"]=c.exports},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=l("concat"),x=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},y=!m||!b;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,o,i,a=s(this),l=f(a,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],x(i)){if(o=c(i.length),d+o>v)throw TypeError(g);for(n=0;n<o;n++,d++)n in i&&u(l,d,i[n])}else{if(d>=v)throw TypeError(g);u(l,d++,i)}return l.length=d,l}})},"9f7f":function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac16:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("7aac"),a=n("30b5"),s=n("83b9"),c=n("c345"),u=n("3934"),f=n("2d83");t.exports=function(t){return new Promise((function(e,n){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+v)}var g=s(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),a(g,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?p.response:p.responseText,a={data:i,status:p.status,statusText:p.statusText,headers:r,config:t,request:p};o(e,n,a),p=null}},p.onabort=function(){p&&(n(f("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(f("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=(t.withCredentials||u(g))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;m&&(d[t.xsrfHeaderName]=m)}if("setRequestHeader"in p&&r.forEach(d,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),n(t),p=null)})),l||(l=null),p.send(l)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}})),a):a}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function a(t){return"undefined"===typeof t}function s(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===o.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function f(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function d(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function h(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function v(t){return"[object Date]"===o.call(t)}function g(t){return"[object File]"===o.call(t)}function m(t){return"[object Blob]"===o.call(t)}function b(t){return"[object Function]"===o.call(t)}function x(t){return p(t)&&b(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function R(){var t={};function e(e,n){h(t[n])&&h(e)?t[n]=R(t[n],e):h(e)?t[n]=R({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],e);return t}function A(t,e,n){return C(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}function k(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:v,isFile:g,isBlob:m,isFunction:b,isStream:x,isURLSearchParams:y,isStandardBrowserEnv:E,forEach:C,merge:R,extend:A,trim:w,stripBOM:k}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),a=n("4a7b"),s=n("2444");function c(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=c(s);u.Axios=i,u.create=function(t){return c(a(u.defaults,t))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(t){return Promise.all(t)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),t.exports=u,t.exports.default=u},cf39:function(t,e,n){"use strict";n("ac16")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("9263"),i=n("d039"),a=n("b622"),s=n("9112"),c=a("species"),u=RegExp.prototype;t.exports=function(t,e,n,f){var l=a(t),d=!i((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),p=d&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return e=!0,null},n[l](""),!e}));if(!d||!p||n){var h=/./[l],v=e(l,""[t],(function(t,e,n,r,i){var a=e.exec;return a===o||a===u.exec?d&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,v[0]),r(u,l,v[1])}f&&s(u[l],"sham",!0)}},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(o(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),a="/"===i(t,-1);return t=n(o(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&a&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===r&&(o=!1,r=a+1),46===s?-1===e?e=a:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=a+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},fba5:function(t,e,n){"use strict";n("846c")},fce3:function(t,e,n){var r=n("d039"),o=n("da84"),i=o.RegExp;t.exports=r((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-107385d8.c4a4a157.js.map