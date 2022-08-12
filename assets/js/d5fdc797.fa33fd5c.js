"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96776],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),p=["components"],i={title:"keyvalue (Sink Mapper)"},l=void 0,u={unversionedId:"cep/reference/functions/sinkmapper/keyvalue",id:"cep/reference/functions/sinkmapper/keyvalue",title:"keyvalue (Sink Mapper)",description:"The Event to Key-Value Map output mapper extension allows you to convert Stream App events processed by gdn SP to key-value map events before publishing them. You can either use pre-defined keys where conversion takes place without extra configurations, or use custom keys with which the messages can be published.",source:"@site/docs/cep/reference/functions/sinkmapper/keyvalue.md",sourceDirName:"cep/reference/functions/sinkmapper",slug:"/cep/reference/functions/sinkmapper/keyvalue",permalink:"/docs/cep/reference/functions/sinkmapper/keyvalue",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sinkmapper/keyvalue.md",tags:[],version:"current",frontMatter:{title:"keyvalue (Sink Mapper)"},sidebar:"tutorialSidebar",previous:{title:"json (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/json"},next:{title:"passThrough (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/passThrough"}},c={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Event to Key-Value Map")," output mapper extension allows you to convert Stream App events processed by gdn SP to key-value map events before publishing them. You can either use pre-defined keys where conversion takes place without extra configurations, or use custom keys with which the messages can be published."),(0,o.kt)("p",null,"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (map.type="keyvalue")\n')),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SINK FooStream WITH (type='inMemory', topic='stock', map.type='keyvalue') (symbol string, price float, volume long);\n")),(0,o.kt)("p",null,"This query performs a default Key-Value output mapping. The expected output is something similar to the following: symbol:",(0,o.kt)("inlineCode",{parentName:"p"},"gdn")," price : 55.6f volume: 100L"),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SINK FooStream WITH (type='inMemory', topic='stock', map.type='keyvalue', map.payload=\"a='symbol',b='price',c='volume'\") (symbol string, price float, volume long);\n")),(0,o.kt)("p",null,"This query performs a custom Key-Value output mapping where values are passed as objects. Values for ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"price"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," attributes are published with the keys ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," respectively. The expected output is a map similar to the following: a:",(0,o.kt)("inlineCode",{parentName:"p"},"gdn")," b : 55.6f c: 100L"),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SINK FooStream WITH (type='inMemory', topic='stock', map.type='keyvalue', map.payload=\"a='{{symbol}} is here',b='`price`',c='volume'\") (symbol string, price float, volume long);\n")),(0,o.kt)("p",null,"This query performs a custom Key-Value output mapping where the values of the ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," attributes are strings and c is object. The expected output should be a Map similar to the following: a:",(0,o.kt)("inlineCode",{parentName:"p"},"gdn is here")," b : ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," c: 100L"))}f.isMDXComponent=!0}}]);