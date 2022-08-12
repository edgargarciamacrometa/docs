"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3302],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),o=n(34334),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(83117),o=n(67294),r=n(34334),l=n(72389),i=n(67392),c=n(7094),s=n(12466),u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,p=e.defaultValue,f=e.values,h=e.groupId,k=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,O=(0,o.useState)(g),x=O[0],D=O[1],j=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=N[h];null!=_&&_!==x&&b.some((function(e){return e.value===_}))&&D(_)}var E=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==x&&(T(t),D(a),null!=h&&C(h,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=j.indexOf(e.currentTarget)+1;n=null!=(a=j[o])?a:j[0];break;case"ArrowLeft":var r,l=j.indexOf(e.currentTarget)-1;n=null!=(r=j[l])?r:j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},82082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(65488),i=n(85162),c=["components"],s={title:"Add Documents to Collection",sidebar_position:30},u=void 0,m={unversionedId:"collections/documents/add-document",id:"collections/documents/add-document",title:"Add Documents to Collection",description:"This page explains how to add a document to a Document Store collection.",source:"@site/docs/collections/documents/add-document.md",sourceDirName:"collections/documents",slug:"/collections/documents/add-document",permalink:"/docs/collections/documents/add-document",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/documents/add-document.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Add Documents to Collection",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Create a Document Store",permalink:"/docs/collections/documents/create-document-store"},next:{title:"Document Store Data",permalink:"/docs/collections/documents/document-store-data"}},d={},p=[{value:"Add a Document with the Console",id:"add-a-document-with-the-console",level:2},{value:"Add Documents from a File",id:"add-documents-from-a-file",level:2},{value:"Add Documents with Code",id:"add-documents-with-code",level:2}],f={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page explains how to add a document to a Document Store collection."),(0,r.kt)("p",null,"By default, a new document has only one attribute, ",(0,r.kt)("inlineCode",{parentName:"p"},"_key"),". Defining the document ",(0,r.kt)("inlineCode",{parentName:"p"},"_key")," attribute is optional. If you do not specify a key, then it will be autogenerated."),(0,r.kt)("h2",{id:"add-a-document-with-the-console"},"Add a Document with the Console"),(0,r.kt)("p",null,"Follow these instructions to add documents to an existing document collection using the GDN console web UI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"COLLECTIONS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the collection list, click the name of the document collection to which you want to add a document. If you aren't sure which collections are document collections, then you can click ",(0,r.kt)("strong",{parentName:"p"},"Document")," at the top of the page to see just document collections.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New Document"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Enter a ",(0,r.kt)("inlineCode",{parentName:"p"},"_key"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",{parentName:"li"},"Macrometa creates the new document that contains no data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add any data desired and then click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h2",{id:"add-documents-from-a-file"},"Add Documents from a File"),(0,r.kt)("p",null,"Follow these instructions to add documents to an existing document collection from a JSON or CSV file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Import a Document",src:n(46437).Z,width:"1600",height:"592"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"COLLECTIONS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the collection list, click the name of the document collection to which you want to add a document. If you aren't sure which collections are document collections, then you can click ",(0,r.kt)("strong",{parentName:"p"},"Document")," at the top of the page to see just document collections.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the import icon, which is a down arrow pointing to a file box.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Choose File"),", then browse to the file containing the documents you want to import.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out any desired options and then click ",(0,r.kt)("strong",{parentName:"p"},"Import Documents"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select Primary Key -")," Macrometa can autogenerate your primary key, or you can select one from the file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Replace docs -")," Select this option to overwrite any existing documents with the same ",(0,r.kt)("inlineCode",{parentName:"li"},"_key"),".")))),(0,r.kt)("h2",{id:"add-documents-with-code"},"Add Documents with Code"),(0,r.kt)("p",null,"The example below shows how to use Python or JavaScript to insert documents into an ",(0,r.kt)("inlineCode",{parentName:"p"},"employees")," collection."),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"  # Simple Approach\n  client = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\n                          email='nemo@nautilus.com', password='xxxxx',\n                          geofabric='_system')\n  client.insert_document(collection_name='employees', document={'_key':'Jean', 'firstname': 'Jean', 'lastname':'Picard', 'email':'jean.picard@macrometa.io'})\n\n  docs = [\n    {'_kefabricy':'James', 'firstname': 'James', 'lastname':'Kirk', 'email':'james.kirk@mafabriccrometa.io'},\n    {'_kefabricy': 'Han', 'firstname': 'Han', 'lastname':'Solo', 'email':'han.solo@macrfabricometa.io'},\n    {'_kefabricy': 'Bruce', 'firstname': 'Bruce', 'lastname':'Wayne', 'email':'bruce.wayne@mfabricacrometa.io'}\n  ]\n\n  client.insert_document(collection_name='employees', document=docs)\n"))),(0,r.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const jsc8 = require(\"jsc8\");\n\n  // Create an authenticated instance with a token or API key.\n  // const client = new jsc8({url: \"https://gdn.paas.macrometa.io\", token: \"XXXX\", fabricName: '_system'});\n  // const client = new jsc8({url: \"https://gdn.paas.macrometa.io\", apiKey: \"XXXX\", fabricName: '_system'});\n  // await console.log(\"Authentication done!!...\");\n\n  // Or use Email & Password to Authenticate client instance\n  const client = new jsc8(\"https://gdn.paas.macrometa.io\");\n\n  await client.login(\"nemo@nautilus.com\", \"xxxxxx\");\n\n  //Variables\n  const docJean = {'_key':'Jean', \n            'firstname': 'Jean', \n            'lastname':'Picard', 'email':'jean.picard@macrometa.io'};\n\n  const docJames = {'_key':'James', \n                    'firstname': 'James', 'lastname':'Kirk', 'email':'james.kirk@macrometa.io'};\n\n  const docHan = {'_key': 'Han', \n                  'firstname': 'Han',\n                  'lastname':'Solo', 'email':'han.solo@macrometa.io'};\n\n  const docBruce = {'_key': 'Bruce',\n                    'firstname': 'Bruce', 'lastname':'Wayne', 'email':'bruce.wayne@macrometa.io'};\n\n  const docs = [docJean, docJames, docHan, docBruce];\n\n\n  async function populate() {\n    await console.log(\"Creating the collection object to be used and populating with documents...\");\n    await client.insertDocumentMany(\"employees\", docs);\n    await console.log(\"collection populated with documents\");\n  }\n\n  populate();\n")))))}h.isMDXComponent=!0},46437:function(e,t,n){t.Z=n.p+"assets/images/import-docs-c98bd2ddb6c72634b59a6c4a45d3d962.png"}}]);