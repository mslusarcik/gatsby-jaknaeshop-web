/*! For license information please see component---src-pages-404-js-452981a9ce754c2521ec.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[883],{4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},5153:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(7294),r=n(4184),l=n.n(r),i=n(5893);const o=["xxl","xl","lg","md","sm","xs"],s=a.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:c,Provider:u}=s;function m(e,t){const{prefixes:n}=(0,a.useContext)(s);return e||n[t]||t}const d=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:a,...r},o)=>{const s=m(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:o,...r,className:l()(a,t?`${s}${c}`:s)})}));d.displayName="Container",d.defaultProps={fluid:!1};var f=d;const p=["as","disabled"];function v({tagName:e,disabled:t,href:n,target:a,rel:r,role:l,onClick:i,tabIndex:o=0,type:s}){e||(e=null!=n||null!=a||null!=r?"a":"button");const c={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},c];const u=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&a.preventDefault(),t?a.stopPropagation():null==i||i(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:o,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?r:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const b=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,p);const[l,{tagName:o}]=v(Object.assign({tagName:n,disabled:a},r));return(0,i.jsx)(o,Object.assign({},r,l,{ref:t}))}));b.displayName="Button";const g=a.forwardRef((({as:e,bsPrefix:t,variant:n,size:a,active:r,className:o,...s},c)=>{const u=m(t,"btn"),[d,{tagName:f}]=v({tagName:e,...s}),p=f;return(0,i.jsx)(p,{...d,...s,ref:c,className:l()(o,u,r&&"active",n&&`${u}-${n}`,a&&`${u}-${a}`,s.href&&s.disabled&&"disabled")})}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var E=g,y=n.p+"static/logo-e71493a68f0f42178f82b932e90ce2b9.png",h=n(1883);var x=()=>a.createElement("header",null,a.createElement(f,null,a.createElement("div",{className:"inner-header"},a.createElement("div",{className:"logo-wrapper"},a.createElement(h.Link,{to:"/",className:"flex items-center"},a.createElement("img",{src:y,alt:"",className:"logo"}),a.createElement("span",{className:"font-bold text-xl ml-3"},"JAKNAESHOP",a.createElement("br",null),a.createElement("span",{className:"font-light text-sm block mt-1"},"…ukážu vám, že e-shop může mít každý")))),a.createElement("nav",null,a.createElement("ul",null,a.createElement("li",null,a.createElement(h.Link,{to:"/",activeClassName:"active"},"Home")),a.createElement("li",null,a.createElement(E,{type:"primary"},"Kontaktovat")))))));var N=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(x,null),t)}},9357:function(e,t,n){"use strict";var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:i,children:o}=e;const{site:s}=(0,r.useStaticQuery)("63159454"),c=l||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?i+" | "+u:i),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:c}),o)}},429:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return i}});var a=n(7294),r=n(5153),l=n(9357);const i=()=>a.createElement(l.Z,{title:"404: Not Found"});t.default=()=>a.createElement(r.Z,null,a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}]);
//# sourceMappingURL=component---src-pages-404-js-452981a9ce754c2521ec.js.map