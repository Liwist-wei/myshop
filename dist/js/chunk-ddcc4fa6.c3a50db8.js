(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddcc4fa6"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?i(t):c(n(t))}},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),a=r("17c2"),o=r("9112");for(var i in c){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),a=c("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1fd4":function(t,e,r){"use strict";r("78fd")},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4d44":function(t,e,r){"use strict";r("eaf2")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,a=r("1dde"),o=a("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"5ca9":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||o(e,t,{value:a.f(t)})}},"78fd":function(t,e,r){},"8be7":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),a=r("d066"),o=r("c430"),i=r("83ab"),s=r("4930"),u=r("d039"),f=r("5135"),l=r("e8b5"),b=r("861d"),d=r("d9b5"),g=r("825a"),y=r("7b0b"),p=r("fc6a"),h=r("a04b"),v=r("577e"),m=r("5c6c"),O=r("7c73"),w=r("df75"),j=r("241c"),C=r("057f"),D=r("7418"),k=r("06cf"),x=r("9bf2"),S=r("d1e7"),_=r("9112"),I=r("6eeb"),P=r("5692"),E=r("f772"),T=r("d012"),$=r("90e3"),N=r("b622"),A=r("e538"),J=r("746f"),G=r("d44e"),W=r("69f3"),F=r("b727").forEach,K=E("hidden"),M="Symbol",V="prototype",B=N("toPrimitive"),L=W.set,Q=W.getterFor(M),q=Object[V],z=c.Symbol,H=a("JSON","stringify"),R=k.f,U=x.f,X=C.f,Y=S.f,Z=P("symbols"),tt=P("op-symbols"),et=P("string-to-symbol-registry"),rt=P("symbol-to-string-registry"),nt=P("wks"),ct=c.QObject,at=!ct||!ct[V]||!ct[V].findChild,ot=i&&u((function(){return 7!=O(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=R(q,e);n&&delete q[e],U(t,e,r),n&&t!==q&&U(q,e,n)}:U,it=function(t,e){var r=Z[t]=O(z[V]);return L(r,{type:M,tag:t,description:e}),i||(r.description=e),r},st=function(t,e,r){t===q&&st(tt,e,r),g(t);var n=h(e);return g(r),f(Z,n)?(r.enumerable?(f(t,K)&&t[K][n]&&(t[K][n]=!1),r=O(r,{enumerable:m(0,!1)})):(f(t,K)||U(t,K,m(1,{})),t[K][n]=!0),ot(t,n,r)):U(t,n,r)},ut=function(t,e){g(t);var r=p(e),n=w(r).concat(gt(r));return F(n,(function(e){i&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?O(t):ut(O(t),e)},lt=function(t){var e=h(t),r=Y.call(this,e);return!(this===q&&f(Z,e)&&!f(tt,e))&&(!(r||!f(this,e)||!f(Z,e)||f(this,K)&&this[K][e])||r)},bt=function(t,e){var r=p(t),n=h(e);if(r!==q||!f(Z,n)||f(tt,n)){var c=R(r,n);return!c||!f(Z,n)||f(r,K)&&r[K][n]||(c.enumerable=!0),c}},dt=function(t){var e=X(p(t)),r=[];return F(e,(function(t){f(Z,t)||f(T,t)||r.push(t)})),r},gt=function(t){var e=t===q,r=X(e?tt:p(t)),n=[];return F(r,(function(t){!f(Z,t)||e&&!f(q,t)||n.push(Z[t])})),n};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=$(t),r=function(t){this===q&&r.call(tt,t),f(this,K)&&f(this[K],e)&&(this[K][e]=!1),ot(this,e,m(1,t))};return i&&at&&ot(q,e,{configurable:!0,set:r}),it(e,t)},I(z[V],"toString",(function(){return Q(this).tag})),I(z,"withoutSetter",(function(t){return it($(t),t)})),S.f=lt,x.f=st,k.f=bt,j.f=C.f=dt,D.f=gt,A.f=function(t){return it(N(t),t)},i&&(U(z[V],"description",{configurable:!0,get:function(){return Q(this).description}}),o||I(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),F(w(nt),(function(t){J(t)})),n({target:M,stat:!0,forced:!s},{for:function(t){var e=v(t);if(f(et,e))return et[e];var r=z(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(f(rt,t))return rt[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!i},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:u((function(){D.f(1)}))},{getOwnPropertySymbols:function(t){return D.f(y(t))}}),H){var yt=!s||u((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,r){var n,c=[t],a=1;while(arguments.length>a)c.push(arguments[a++]);if(n=e,(b(e)||void 0!==t)&&!d(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!d(e))return e}),c[1]=e,H.apply(null,c)}})}z[V][B]||_(z[V],B,z[V].valueOf),G(z,M),T[K]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},af2f:function(t,e,r){"use strict";r("5ca9")},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),a=r("df75"),o=r("d039"),i=o((function(){a(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return a(c(t))}})},b95e:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return a}));var n="pop",c="new",a="sell"},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{attrs:{id:"mcontent"}},[r("scroll",{ref:"tscroll",attrs:{id:"tab-menu-scroll","pull-up-load":!0,"probe-type":3}},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}})],1),r("scroll",{ref:"cscroll",attrs:{id:"tab-content-scroll","pull-up-load":!0,"probe-type":3}},[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)],1)],1)},c=[],a=r("5530"),o=r("406a"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menu-list ",attrs:{id:"tab-menu"}},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)},s=[],u=r("5d17"),f={name:"TabMenu",components:{Scroll:u["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}},mounted:function(){}},l=f,b=(r("af2f"),r("2877")),d=Object(b["a"])(l,i,s,!1,null,"6bf62066",null),g=d.exports,y=r("bc3c"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},h=[],v=r("15ae"),m={name:"TabContentCategory",components:{GridView:v["a"]},props:{subcategories:{type:Object,default:function(){return[]}}}},O=m,w=(r("1fd4"),Object(b["a"])(O,p,h,!1,null,"05cca9d1",null)),j=w.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("grid-view",t._l(t.categoryDetail,(function(t,e){return r("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},D=[],k=r("9977"),x={name:"TabContentDetail",components:{GridView:v["a"],GoodsListItem:k["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},S=x,_=Object(b["a"])(S,C,D,!1,null,"5c018f7e",null),I=_.exports,P=r("1bab");function E(){return Object(P["a"])({url:"/category"})}function T(t){return Object(P["a"])({url:"/subcategory",params:{maitKey:t}})}function $(t,e){return Object(P["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var N=r("b95e"),A=r("90b9"),J={name:"Category",components:{NavBar:o["a"],TabMenu:g,TabControl:y["a"],Scroll:u["a"],TabContentCategory:j,TabContentDetail:I},data:function(){return{categories:[],categoryData:{},currentIndex:-1,currentType:N["b"]}},created:function(){this.fgetCategory()},mounted:function(){var t=Object(A["a"])(this.$refs.cscroll.refresh,200);this.$bus.$on("categoryload",(function(){t()}))},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{fgetCategory:function(){var t=this;E().then((function(e){t.categories=e.data.category.list,t.$nextTick((function(){t.$refs.tscroll.refresh()}));for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t.fgetSubcategories(0)}))},fgetSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;T(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(a["a"])({},e.categoryData),e.fgetCategoryDetail(N["b"]),e.fgetCategoryDetail(N["c"]),e.fgetCategoryDetail(N["a"])}))},fgetCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;$(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(a["a"])({},e.categoryData)}))},selectItem:function(t){this.fgetSubcategories(t),this.$refs.cscroll.scrollTo(0,0,.1),this.$refs.cscroll.refresh()},tabClick:function(t){switch(t){case 0:this.currentType=N["b"];break;case 1:this.currentType=N["a"];break;case 2:this.currentType=N["c"];break}}}},G=J,W=(r("4d44"),Object(b["a"])(G,n,c,!1,null,"e2c70230",null));e["default"]=W.exports},bc3c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-control-item",class:{active:t.currentIndex===n},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},c=[],a={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},o=a,i=(r("e24f"),r("2877")),s=Object(i["a"])(o,n,c,!1,null,"25af15b0",null);e["a"]=s.exports},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),a=r("56ef"),o=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),c=i.f,u=a(n),f={},l=0;while(u.length>l)r=c(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e24f:function(t,e,r){"use strict";r("8be7")},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),a=r("fc6a"),o=r("06cf").f,i=r("83ab"),s=c((function(){o(1)})),u=!i||s;n({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},eaf2:function(t,e,r){}}]);
//# sourceMappingURL=chunk-ddcc4fa6.c3a50db8.js.map