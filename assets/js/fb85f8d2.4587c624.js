"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15578],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],l={sidebar_position:7,title:"Data Queries"},s=void 0,u={unversionedId:"c8ql/data-queries",id:"c8ql/data-queries",title:"Data Queries",description:"Data Access Queries",source:"@site/docs/c8ql/data-queries.md",sourceDirName:"c8ql",slug:"/c8ql/data-queries",permalink:"/docs/c8ql/data-queries",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/data-queries.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Data Queries"},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/c8ql/operators"},next:{title:"c8 Query Language",permalink:"/docs/c8ql/examples/"}},p={},c=[{value:"Data Access Queries",id:"data-access-queries",level:2},{value:"Data Modification Queries",id:"data-modification-queries",level:2},{value:"Modifying a single document",id:"modifying-a-single-document",level:2},{value:"Modifying multiple documents",id:"modifying-multiple-documents",level:2},{value:"Returning documents",id:"returning-documents",level:2},{value:"Projections",id:"projections",level:2},{value:"Using OLD and NEW in the same query",id:"using-old-and-new-in-the-same-query",level:2},{value:"Calculations with OLD or NEW",id:"calculations-with-old-or-new",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Transactional Execution",id:"transactional-execution",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-access-queries"},"Data Access Queries"),(0,o.kt)("p",null,"Retrieving data from the database with C8QL does always include a ",(0,o.kt)("strong",{parentName:"p"},"RETURN")," operation. It can be used to return a static value, such as a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'RETURN "Hello C8!"\n')),(0,o.kt)("p",null,"The query result is always an array of elements, even if a single element was returned and contains a single element in that case: ",(0,o.kt)("inlineCode",{parentName:"p"},'["Hello C8!"]')),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCUMENT()")," can be called to retrieve a single document via its document handle, for instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'RETURN DOCUMENT("users/phil")\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," is usually accompanied by a ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," loop to iterate over the documents of a collection. "),(0,o.kt)("p",null,"The following query executes the loop body for all documents of a collection called ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),". Each document is returned unchanged in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN users\n    RETURN doc\n")),(0,o.kt)("p",null,"Instead of returning the raw ",(0,o.kt)("inlineCode",{parentName:"p"},"doc"),", one can easily create a projection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN users\n    RETURN { user: doc, newAttribute: true }\n")),(0,o.kt)("p",null,"For every user document, an object with two attributes is returned. The value of the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," is set to the content of the user document, and ",(0,o.kt)("inlineCode",{parentName:"p"},"newAttribute")," is a static attribute with the boolean value ",(0,o.kt)("em",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Operations like ",(0,o.kt)("strong",{parentName:"p"},"FILTER"),", ",(0,o.kt)("strong",{parentName:"p"},"SORT")," and ",(0,o.kt)("strong",{parentName:"p"},"LIMIT")," can be added to the loop body to narrow and order the result. Instead of above shown call to ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCUMENT()"),", one can also retrieve the document that describes user ",(0,o.kt)("inlineCode",{parentName:"p"},"phil")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN users\n    FILTER doc._key == "phil"\n    RETURN doc\n')),(0,o.kt)("p",null,"The document key is used in this example, but any other attribute could equally be used for filtering. Since the document key is guaranteed to be unique, no more than a single document will match this filter. For other attributes this may not be the case. "),(0,o.kt)("p",null,"To return a subset of active users (determined by an attribute called ",(0,o.kt)("inlineCode",{parentName:"p"},"status"),"), sorted by name in ascending order, you can do: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN users\n    FILTER doc.status == "active"\n    SORT doc.name\n    LIMIT 10\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Operations do not have to occur in a fixed order and that their order can influence the result significantly. Limiting the number of documents before a filter is usually not what you want, because it easily misses a lot of documents that would fulfill the filter criterion, but are ignored because of a premature ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause.  Because of the aforementioned reasons, ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT")," is usually put at the very end, after ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," and other operations.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"operations/"},"High Level Operations")," chapter for more details."),(0,o.kt)("h2",{id:"data-modification-queries"},"Data Modification Queries"),(0,o.kt)("p",null,"C8QL supports the following data-modification operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"INSERT"),": insert new documents into a collection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UPDATE"),": partially update existing documents in a collection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"REPLACE"),": completely replace existing documents in a collection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"REMOVE"),": remove existing documents from a collection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UPSERT"),": conditionally insert or update documents in a collection")),(0,o.kt)("p",null,"Below you find some simple example queries that use these operations. The operations are detailed in the chapter ",(0,o.kt)("a",{parentName:"p",href:"operations/"},"High Level Operations"),"."),(0,o.kt)("h2",{id:"modifying-a-single-document"},"Modifying a single document"),(0,o.kt)("p",null,"Let's start with the basics: ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," operations on single documents. Here is an example that insert a document in an existing collection ",(0,o.kt)("em",{parentName:"p"},"users"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'INSERT {\n    firstName: "Anna",\n    name: "Pavlova",\n    profession: "artist"\n} IN users\n')),(0,o.kt)("p",null,"You may provide a key for the new document; if not provided, C8 will create one for you.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'INSERT {\n    _key: "GilbertoGil",\n    firstName: "Gilberto",\n    name: "Gil",\n    city: "Fortalezza"\n} IN users\n')),(0,o.kt)("p",null,"As C8 is schema-free, attributes of the documents may vary: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'INSERT {\n    _key: "PhilCarpenter",\n    firstName: "Phil",\n    name: "Carpenter",\n    middleName: "G.",\n    status: "inactive"\n} IN users\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'INSERT {\n    _key: "NatachaDeclerck",\n    firstName: "Natacha",\n    name: "Declerck",\n    location: "Antwerp"\n} IN users \n')),(0,o.kt)("p",null,"Update is quite simple. The following C8QL statement will add or change the attributes status and location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'UPDATE "PhilCarpenter" WITH {\n    status: "active",\n    location: "Beijing"\n} IN users\n')),(0,o.kt)("p",null,"Replace is an alternative to update where all attributes of the document are replaced."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'REPLACE {\n    _key: "NatachaDeclerck",\n    firstName: "Natacha",\n    name: "Leclerc",\n    status: "active",\n    level: "premium"\n} IN users\n')),(0,o.kt)("p",null,"Removing a document if you know its key is simple as well : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'REMOVE "GilbertoGil" IN users\n')),(0,o.kt)("p",null,"or "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'REMOVE { _key: "GilbertoGil" } IN users\n')),(0,o.kt)("h2",{id:"modifying-multiple-documents"},"Modifying multiple documents"),(0,o.kt)("p",null,"Data-modification operations are normally combined with ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," loops to iterate over a given list of documents. They can optionally be combined with ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER")," statements and the like."),(0,o.kt)("p",null,"Let's start with an example that modifies existing documents in a collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," that match some condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n    FILTER u.status == "not active"\n    UPDATE u WITH { status: "inactive" } IN users\n')),(0,o.kt)("p",null,"Now, let's copy the contents of the collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," into the collection ",(0,o.kt)("inlineCode",{parentName:"p"},"backup"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users\n    INSERT u IN backup\n")),(0,o.kt)("p",null,"As a final example, let's find some documents in collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and remove them from collection ",(0,o.kt)("inlineCode",{parentName:"p"},"backup"),". The link between the documents in both collections is established via the documents' keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n    FILTER u.status == "deleted"\n    REMOVE u IN backup\n')),(0,o.kt)("h2",{id:"returning-documents"},"Returning documents"),(0,o.kt)("p",null,"Data-modification queries can optionally return documents. In order to reference the inserted, removed or modified documents in a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," statement, data-modification statements introduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," pseudo-values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..100\n    INSERT { value: i } IN test \n    RETURN NEW\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n    FILTER u.status == "deleted"\n    REMOVE u IN users \n    RETURN OLD\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n    FILTER u.status == "not active"\n    UPDATE u WITH { status: "inactive" } IN users \n    RETURN NEW\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," refers to the inserted or modified document revision, and ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," refers to the document revision before update or removal. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INSERT")," statements can only refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," pseudo-value, and ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," operations only to ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," can refer to either."),(0,o.kt)("p",null,"In all cases the full documents will be returned with all their attributes, including the potentially auto-generated attributes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_key"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"_rev")," and the attributes not specified in the update expression of a partial update."),(0,o.kt)("h2",{id:"projections"},"Projections"),(0,o.kt)("p",null,"It is possible to return a projection of the documents in ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," instead of returning the entire documents. This can be used to reduce the amount of data returned by queries."),(0,o.kt)("p",null,"For example, the following query will return only the keys of the inserted documents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..100\n    INSERT { value: i } IN test \n    RETURN NEW._key\n")),(0,o.kt)("h2",{id:"using-old-and-new-in-the-same-query"},"Using OLD and NEW in the same query"),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," statements, both ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," can be used to return the previous revision of a document together with the updated revision:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n    FILTER u.status == "not active"\n    UPDATE u WITH { status: "inactive" } IN users \n    RETURN { old: OLD, new: NEW }\n')),(0,o.kt)("h2",{id:"calculations-with-old-or-new"},"Calculations with OLD or NEW"),(0,o.kt)("p",null,"It is also possible to run additional calculations with ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statements between the data-modification part and the final ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," of a C8QL query. "),(0,o.kt)("p",null,"For example, the following query performs an upsert operation and returns whether an existing document was updated, or a new document was inserted. It does so by checking the ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," variable after the ",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," and using a ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement to store a temporary string for the operation type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'UPSERT { name: "test" }\n    INSERT { name: "test" }\n    UPDATE { } IN users\nLET opType = IS_NULL(OLD) ? "insert" : "update"\nRETURN { _key: NEW._key, type: opType }\n')),(0,o.kt)("h2",{id:"restrictions"},"Restrictions"),(0,o.kt)("p",null,"The name of the modified collection (",(0,o.kt)("em",{parentName:"p"},"users")," and ",(0,o.kt)("em",{parentName:"p"},"backup")," in the above cases) must be known to the C8QL executor at query-compile time and cannot change at runtime. Using a bind parameter to specify the collection name is allowed."),(0,o.kt)("p",null,"Data-modification operations are restricted to one collection at a time. It is not possible to use multiple data-modification operations for the same collection in the same query, or follow up a data-modification operation for a specific collection with a read operation for the same collection. Neither is it possible to follow up any data-modification operation with a traversal query (which may read from arbitrary collections not necessarily known at the start of the traversal)."),(0,o.kt)("p",null,"That means you may not place several ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE")," statements for the same collection into the same query. It is however possible to modify different collections by using multiple data-modification operations for different collections in the same query."),(0,o.kt)("p",null,"In case you have a query with several places that need to remove documents from the same collection, it is recommended to collect these documents or their keys in an array and have the documents from that array removed using a single ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," operation."),(0,o.kt)("p",null,"Data-modification operations can optionally be followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," operations to perform further calculations and a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," operation to return data."),(0,o.kt)("h2",{id:"transactional-execution"},"Transactional Execution"),(0,o.kt)("p",null,"On a single server, data-modification operations are executed transactionally. If a data-modification operation fails, any changes made by it will be rolled back automatically as if they never happened. "),(0,o.kt)("p",null,"In a cluster, C8QL data-modification queries are currently not executed transactionally. Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"replace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," C8QL queries currently require the ",(0,o.kt)("inlineCode",{parentName:"p"},"_key")," attribute to be specified for all documents that should be modified or removed, even if a shared key attribute other than ",(0,o.kt)("inlineCode",{parentName:"p"},"_key")," was chosen for the collection. This restriction may be overcome in a future release of C8."))}m.isMDXComponent=!0}}]);