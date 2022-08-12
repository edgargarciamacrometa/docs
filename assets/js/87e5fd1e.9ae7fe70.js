"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8492],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"groupConcat (Aggregate Function)"},p=void 0,u={unversionedId:"cep/reference/functions/str/groupConcat",id:"cep/reference/functions/str/groupConcat",title:"groupConcat (Aggregate Function)",description:"This function aggregates the received events by concatenating the keys",source:"@site/docs/cep/reference/functions/str/groupConcat.md",sourceDirName:"cep/reference/functions/str",slug:"/cep/reference/functions/str/groupConcat",permalink:"/docs/cep/reference/functions/str/groupConcat",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/str/groupConcat.md",tags:[],version:"current",frontMatter:{title:"groupConcat (Aggregate Function)"},sidebar:"tutorialSidebar",previous:{title:"fillTemplate (Function)",permalink:"/docs/cep/reference/functions/str/fillTemplate"},next:{title:"hex (Function)",permalink:"/docs/cep/reference/functions/str/hex"}},c={},s=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function aggregates the received events by concatenating the keys\nin those events using a separator, e.g.,a comma (,) or a hyphen (-), and\nreturns the concatenated key string."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<STRING> str:groupConcat(<STRING> key)\n<STRING> str:groupConcat(<STRING> key, <STRING> ...)\n<STRING> str:groupConcat(<STRING> key, <STRING> separator, <BOOL> distinct)\n<STRING> str:groupConcat(<STRING> key, <STRING> separator, <BOOL> distinct, <STRING> order)\n")),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"The string that needs to be aggregated."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"separator"),(0,i.kt)("td",{parentName:"tr",align:null},"The separator that separates each string key after concatenating the keys."),(0,i.kt)("td",{parentName:"tr",align:null},","),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"distinct"),(0,i.kt)("td",{parentName:"tr",align:null},"This is used to only have distinct values in the concatenated string that is returned."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"order"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter accepts ",(0,i.kt)("inlineCode",{parentName:"td"},"ASC")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"DESC")," strings to sort the string keys in either ascending or descending order respectively."),(0,i.kt)("td",{parentName:"tr",align:null},"No order"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from InputStream WINDOW SLIDING_TIME(5 min)\nselect str:groupConcat("key") as groupedKeys\ninput OutputStream;\n')),(0,i.kt)("p",null,"When we input events having values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'B'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'S'"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"'C'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", it returns ",(0,i.kt)("inlineCode",{parentName:"p"},'"A,B,S,C,A"')," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputStream"),"."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from InputStream WINDOW SLIDING_TIME(5 min)\nselect groupConcat("key","-",true,"ASC") as groupedKeys\ninput OutputStream;\n')),(0,i.kt)("p",null,"When we input events having values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'B'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'S'"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"'C'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", specify the seperator as hyphen and choose the order to be\nascending, the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},'"A-B-C-S"')," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputStream"),"."))}d.isMDXComponent=!0}}]);