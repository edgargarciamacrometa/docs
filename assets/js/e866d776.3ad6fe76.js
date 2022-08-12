"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51765],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"timeLength (Window)"},c=void 0,u={unversionedId:"cep/reference/functions/core/timeLength",id:"cep/reference/functions/core/timeLength",title:"timeLength (Window)",description:"A sliding time window that, at a given time holds the last window.length events that arrived during last window.time period, and gets updated for every event arrival and expiration.",source:"@site/docs/cep/reference/functions/core/timeLength.md",sourceDirName:"cep/reference/functions/core",slug:"/cep/reference/functions/core/timeLength",permalink:"/docs/cep/reference/functions/core/timeLength",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/core/timeLength.md",tags:[],version:"current",frontMatter:{title:"timeLength (Window)"},sidebar:"tutorialSidebar",previous:{title:"timeBatch (Window)",permalink:"/docs/cep/reference/functions/core/timeBatch"},next:{title:"unionSet (Aggregate Function)",permalink:"/docs/cep/reference/functions/core/unionSet"}},p={},d=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A sliding time window that, at a given time holds the last window.length events that arrived during last window.time period, and gets updated for every event arrival and expiration."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"timeLength(<INT|LONG|TIME> window.time, <INT> window.length)\n")),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"window.time"),(0,i.kt)("td",{parentName:"tr",align:null},"The sliding time period for which the window should hold events."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"INT LONG TIME"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"window.length"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of events that should be be included in a sliding length window.."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"INT"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE STREAM cseEventStream (symbol string, price float, volume int);\nCREATE WINDOW cseEventWindow (symbol string, price float, volume int) timeLength(2 sec, 10);\n\n@info(name = 'query0')\ninsert into cseEventWindow\nfrom cseEventStream;\n\n@info(name = 'query1')\ninsert all events into outputStream\nfrom cseEventWindow select symbol, price, volume;\n")),(0,i.kt)("p",null,"window.timeLength(2 sec, 10) holds the last 10 events that arrived during last 2 seconds and gets updated for every event arrival and expiration."))}s.isMDXComponent=!0}}]);