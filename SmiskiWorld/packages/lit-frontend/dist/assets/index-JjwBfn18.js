(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis,je=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,De=Symbol(),We=new WeakMap;let $t=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==De)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(je&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=We.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&We.set(t,e))}return e}toString(){return this.cssText}};const le=r=>new $t(typeof r=="string"?r:r+"",void 0,De),L=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new $t(t,r,De)},rr=(r,e)=>{if(je)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=se.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Ke=je?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return le(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ir,defineProperty:sr,getOwnPropertyDescriptor:nr,getOwnPropertyNames:or,getOwnPropertySymbols:ar,getPrototypeOf:lr}=Object,O=globalThis,Je=O.trustedTypes,cr=Je?Je.emptyScript:"",Ae=O.reactiveElementPolyfillSupport,z=(r,e)=>r,ce={toAttribute(r,e){switch(e){case Boolean:r=r?cr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ne=(r,e)=>!ir(r,e),Ge={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:Ne};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);class j extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&sr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=nr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=lr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,i=[...or(t),...ar(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ke(s))}else e!==void 0&&t.push(Ke(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ce).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ce;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ne)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[z("elementProperties")]=new Map,j[z("finalized")]=new Map,Ae==null||Ae({ReactiveElement:j}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,he=V.trustedTypes,Xe=he?he.createPolicy("lit-html",{createHTML:r=>r}):void 0,wt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Et="?"+P,hr=`<${Et}>`,T=document,K=()=>T.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",At=Array.isArray,ur=r=>At(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,Ye=/>/g,R=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,et=/"/g,Pt=/^(?:script|style|textarea|title)$/i,dr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),y=dr(1),N=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),tt=new WeakMap,U=T.createTreeWalker(T,129);function St(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const pr=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=q;for(let c=0;c<t;c++){const a=r[c];let l,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===q?h[1]==="!--"?o=Qe:h[1]!==void 0?o=Ye:h[2]!==void 0?(Pt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=R):h[3]!==void 0&&(o=R):o===R?h[0]===">"?(o=s??q,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?R:h[3]==='"'?et:Ze):o===et||o===Ze?o=R:o===Qe||o===Ye?o=q:(o=R,s=void 0);const p=o===R&&r[c+1].startsWith("/>")?" ":"";n+=o===q?a+hr:u>=0?(i.push(l),a.slice(0,u)+wt+a.slice(u)+P+p):a+P+(u===-2?c:p)}return[St(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=pr(e,t);if(this.el=G.createElement(l,i),U.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=U.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(wt)){const d=h[o++],p=s.getAttribute(u).split(P),x=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:x[2],strings:p,ctor:x[1]==="."?gr:x[1]==="?"?_r:x[1]==="@"?mr:_e}),s.removeAttribute(u)}else u.startsWith(P)&&(a.push({type:6,index:n}),s.removeAttribute(u));if(Pt.test(s.tagName)){const u=s.textContent.split(P),d=u.length-1;if(d>0){s.textContent=he?he.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],K()),U.nextNode(),a.push({type:2,index:++n});s.append(u[d],K())}}}else if(s.nodeType===8)if(s.data===Et)a.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(P,u+1))!==-1;)a.push({type:7,index:n}),u+=P.length-1}n++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function I(r,e,t=r,i){var o,c;if(e===N)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=J(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=I(r,s._$AS(r,e.values),s,i)),e}class fr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??T).importNode(t,!0);U.currentNode=s;let n=U.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new te(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new vr(n,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=U.nextNode(),o++)}return U.currentNode=T,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),J(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ur(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=G.createElement(St(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new fr(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=tt.get(e.strings);return t===void 0&&tt.set(e.strings,t=new G(e)),t}k(e){At(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new te(this.S(K()),this.S(K()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=I(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==N,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=I(this,c[i+a],t,a),l===N&&(l=this._$AH[a]),o||(o=!J(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gr extends _e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class _r extends _e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class mr extends _e{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??f)===N)return;const i=this._$AH,s=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class vr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Se=V.litHtmlPolyfillSupport;Se==null||Se(G,te),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.1.2");const br=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new te(e.insertBefore(K(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=br(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return N}};var yt;g._$litElement$=!0,g.finalized=!0,(yt=globalThis.litElementHydrateSupport)==null||yt.call(globalThis,{LitElement:g});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:Ne},$r=(r=yr,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function _(r){return(e,t)=>typeof t=="object"?$r(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(r){return _({...r,state:!0,attribute:!1})}const Ot='@import"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";*{font-family:Roboto,sans-serif}body{margin:0;background-color:var(--primary-background);color:var(--secondary-text)}a:link,a:visited{color:var(--secondary-text);text-decoration:none}a:hover{color:var(--primary-accent)}input{margin:20px 20px 20px 0;width:100%;height:20%}.dropdown{background-color:var(--primary-accent)}';var wr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?Er(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&wr(e,t,s),s};let ue=class extends g{constructor(){super(...arguments),this.open=!1}render(){return y`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ue.styles=L`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: auto;
      border: 1px solid;
      border-radius: 15px;
      background: var(--secondary-color);
      right:0;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;Ct([_({reflect:!0,type:Boolean})],ue.prototype,"open",2);ue=Ct([w("drop-down")],ue);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new xt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ar{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class it extends Ar{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new xt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new it(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new it(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){i.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set:function(c){i.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ie({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new rt(this,{context:r,callback:s=>{this[i.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new rt(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const Sr="http://localhost:3000/",xe="JWT_AUTH_TOKEN",Or="api",A=class A{constructor(){this.authenticated=!1,this.username="fellow_user",this.signOut=()=>{}}static deauthenticate(e){const t=new A;return console.log("Deauthenticating",e,A._theUser),e===A._theUser&&(localStorage.removeItem(xe),A._theUser=t),t}};A._theUser=new A;let $=A;class X extends ${constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(s).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const i=new X(e,t);return $._theUser=i,localStorage.setItem(xe,e),i}static authenticateFromLocalStorage(e){const t=localStorage.getItem(xe);return t?X.authenticate(t,e):$._theUser}}class me{constructor(e){this._base=Or,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${Sr}${this._base}${e}`}}class st extends me{constructor(e){super(Object.fromEntries(e))}}class Ut extends me{constructor(){super(void 0)}}var Cr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?xr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Cr(e,t,s),s};let He="auth",H=class extends g{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=X.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const r=y`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}>
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>
            ${this.loginStatus?`Login failed: ${this.loginStatus}`:""}
          </p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${this.registerStatus=0}>
          <h2>New User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return y`
      ${this.isAuthenticated()?"":r}
      <slot></slot>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new st(t).base().post("login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{if(s){console.log("Authentication:",s.token);const n=X.authenticate(s.token,()=>this._signOut());this.user=n,this._toggleDialog(!1),this._dispatchUserLoggedIn(n),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new st(t).base().post("signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};H.styles=L`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;ve([C()],H.prototype,"loginStatus",2);ve([C()],H.prototype,"registerStatus",2);ve([Rt({context:He}),C()],H.prototype,"user",2);H=ve([w("auth-required")],H);function de(r){return r=r||[],Array.isArray(r)?r:[r]}function b(r){return`[Vaadin.Router] ${r}`}function Rr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const pe="module",fe="nomodule",Re=[pe,fe];function nt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(b(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Tt(r){if(!r||!v(r.path))throw new Error(b('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!M(r.action)&&!Array.isArray(r.children)&&!M(r.children)&&!ge(e)&&!t.some(i=>v(r[i])))throw new Error(b(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(v(e))nt(e);else if(Re.some(i=>i in e))Re.forEach(i=>i in e&&nt(e[i]));else throw new Error(b('Expected route bundle to include either "'+fe+'" or "'+pe+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(b(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function ot(r){de(r).forEach(e=>Tt(e))}function at(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===pe?t.setAttribute("type",pe):e===fe&&t.setAttribute(fe,""),t.async=!0),new Promise((i,s)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,i(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),s(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Ur(r){return v(r)?at(r):Promise.race(Re.filter(e=>e in r).map(e=>at(r[e],e)))}function W(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ge(r){return typeof r=="object"&&!!r}function M(r){return typeof r=="function"}function v(r){return typeof r=="string"}function Mt(r){const e=new Error(b(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const D=new class{};function Tr(r){const e=r.port,t=r.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${n}`}function lt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Tr(e))!==window.location.origin)return;const{pathname:s,search:n,hash:o}=e;W("go",{pathname:s,search:n,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Mr={activate(){window.document.addEventListener("click",lt)},inactivate(){window.document.removeEventListener("click",lt)}},Lr=/Trident/.test(navigator.userAgent);Lr&&!M(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ct(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;W("go",{pathname:e,search:t,hash:i})}const jr={activate(){window.addEventListener("popstate",ct)},inactivate(){window.removeEventListener("popstate",ct)}};var F=Ht,Dr=ke,Nr=Br,Ir=Dt,Hr=It,Lt="/",jt="./",kr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ke(r,e){for(var t=[],i=0,s=0,n="",o=e&&e.delimiter||Lt,c=e&&e.delimiters||jt,a=!1,l;(l=kr.exec(r))!==null;){var h=l[0],u=l[1],d=l.index;if(n+=r.slice(s,d),s=d+h.length,u){n+=u[1],a=!0;continue}var p="",x=r[s],Xt=l[2],Qt=l[3],Yt=l[4],re=l[5];if(!a&&n.length){var Ee=n.length-1;c.indexOf(n[Ee])>-1&&(p=n[Ee],n=n.slice(0,Ee))}n&&(t.push(n),n="",a=!1);var Zt=p!==""&&x!==void 0&&x!==p,er=re==="+"||re==="*",tr=re==="?"||re==="*",ze=p||o,Ve=Qt||Yt;t.push({name:Xt||i++,prefix:p,delimiter:ze,optional:tr,repeat:er,partial:Zt,pattern:Ve?Fr(Ve):"[^"+E(ze)+"]+?"})}return(n||s<r.length)&&t.push(n+r.substr(s)),t}function Br(r,e){return Dt(ke(r,e))}function Dt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,s){for(var n="",o=s&&s.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){n+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(h=o(l[u],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function E(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Fr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Nt(r){return r&&r.sensitive?"":"i"}function qr(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function zr(r,e,t){for(var i=[],s=0;s<r.length;s++)i.push(Ht(r[s],e,t).source);return new RegExp("(?:"+i.join("|")+")",Nt(t))}function Vr(r,e,t){return It(ke(r,t),e,t)}function It(r,e,t){t=t||{};for(var i=t.strict,s=t.start!==!1,n=t.end!==!1,o=E(t.delimiter||Lt),c=t.delimiters||jt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=s?"^":"",h=r.length===0,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string")l+=E(d),h=u===r.length-1&&c.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+E(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=E(d.prefix)+"("+p+")?":l+="(?:"+E(d.prefix)+"("+p+"))?":l+=E(d.prefix)+"("+p+")"}}return n?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Nt(t))}function Ht(r,e,t){return r instanceof RegExp?qr(r,e):Array.isArray(r)?zr(r,e,t):Vr(r,e,t)}F.parse=Dr;F.compile=Nr;F.tokensToFunction=Ir;F.tokensToRegExp=Hr;const{hasOwnProperty:Wr}=Object.prototype,Ue=new Map;Ue.set("|false",{keys:[],pattern:/(?:)/});function ht(r){try{return decodeURIComponent(r)}catch{return r}}function Kr(r,e,t,i,s){t=!!t;const n=`${r}|${t}`;let o=Ue.get(n);if(!o){const l=[];o={keys:l,pattern:F(r,l,{end:t,strict:r===""})},Ue.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},s);for(let l=1;l<c.length;l++){const h=o.keys[l-1],u=h.name,d=c[l];(d!==void 0||!Wr.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(ht):[]:a[u]=d&&ht(d))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function kt(r,e,t,i,s){let n,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!n&&(n=Kr(a,e,!h,i,s),n))return{done:!1,value:{route:r,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const d=h[c];d.parent=r;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=kt(d,e.substr(p),t,n.keys,n.params)}const u=o.next(l);if(!u.done)return{done:!1,value:u.value};o=null,c++}return{done:!0}}}}function Jr(r){if(M(r.route.action))return r.route.action(r)}function Gr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Xr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Qr(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const s={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let n=r.chain.length;for(;n--&&r.chain[n].route&&r.chain[n].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class Q{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Jr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ot(e);const t=[...de(e)];this.root.__children=t}addRoutes(e){return ot(e),this.root.__children.push(...de(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,v(e)?{pathname:e}:e),i=kt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,u){const d=u===null&&n.value.route;return n=o||i.next(d),o=null,!l&&(n.done||!Gr(h,n.value.route))?(o=n,Promise.resolve(D)):n.done?Promise.reject(Mt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Qr(c,n.value),Promise.resolve(s(c)).then(p=>p!=null&&p!==D?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Xr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}Q.pathToRegexp=F;const{pathToRegexp:ut}=Q,dt=new Map;function Bt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const n=t[s];n.parent=e,Bt(r,n,n.__children||n.children)}}function pt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ft(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Yr(r,e={}){if(!(r instanceof Q))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,s)=>{let n=pt(t,i);if(!n&&(t.clear(),Bt(t,r.root,r.root.__children),n=pt(t,i),!n))throw new Error(`Route "${i}" not found`);let o=dt.get(n.fullPath);if(!o){let a=ft(n),l=n.parent;for(;l;){const p=ft(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=ut.parse(a),u=ut.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)v(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},dt.set(a,o),n.fullPath=a}let c=o.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const a={},l=Object.keys(s);for(let u=0;u<l.length;u++){const d=l[u];o.keys[d]||(a[d]=s[d])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let gt=[];function Zr(r){gt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),gt=r}const ei=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},ti=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function _t(r,e){return r.classList.add(e),new Promise(t=>{if(ei(r)){const i=r.getBoundingClientRect(),s=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${s}`),ti(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const ri=256;function Ce(r){return r!=null}function ii(r){const e=Object.assign({},r);return delete e.next,e}function m({pathname:r="",search:e="",hash:t="",chain:i=[],params:s={},redirectFrom:n,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:s,redirectFrom:n,getUrl:(l={})=>oe(S.pathToRegexp.compile(Ft(a))(Object.assign({},s,l)),o)}}function mt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function si(r,e){e.location=m(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function ne(r,e,t){if(M(r))return r.apply(t,e)}function vt(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return ne(t[r],e,t)}}function ni(r,e){if(!Array.isArray(r)&&!ge(r))throw new Error(b(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=de(r);for(let i=0;i<t.length;i++)Tt(t[i]),e.__children.push(t[i])}function ie(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function oe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Ft(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class S extends Q{constructor(e,t){const i=document.head.querySelector("base"),s=i&&i.getAttribute("href");super([],Object.assign({baseUrl:s&&Q.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=S.NavigationTrigger;S.setTriggers.apply(S,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();M(t.children)&&(i=i.then(()=>t.children(ii(e))).then(n=>{!Ce(n)&&!M(t.children)&&(n=t.children),ni(n,t)}));const s={redirect:n=>mt(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return ne(t.action,[e,s],t)}).then(n=>{if(Ce(n)&&(n instanceof HTMLElement||n.redirect||n===D))return n;if(v(t.redirect))return s.redirect(t.redirect);if(t.bundle)return Ur(t.bundle).then(()=>{},()=>{throw new Error(b(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Ce(n))return n;if(v(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},v(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(s).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(n),t&&this.__updateBrowserHistory(n,i===1),W("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),ie(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(s,{resolver:this})),W("error",Object.assign({router:this,error:n},s)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,c=oe(Ft(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,u)=>l.next(void 0,h,u).then(d=>d===null||d===D?c?l:h.parent!==null?a(l,h.parent,d):d:d);return a(i).then(l=>{if(l===null||l===D)throw Mt(n);return l&&l!==D&&l!==i?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(si(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(b(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Rr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],s=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>mt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,s.length)&&!(i[a].route!==s[a].route||i[a].path!==s[a].path&&i[a].element!==s[a].element||!this.__isReusableElement(i[a].element,s[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=s.length===i.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a]);for(let a=0;a<s.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),i[a].element.location=m(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=m(e,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),s[a].element&&(s[a].element.location=m(e,s[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,s){const n=m(t);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeLeave",[n,i,this],s.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,s){const n=m(t,s.route);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeEnter",[n,i,this],s.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>ri)throw new Error(b(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(b(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=s?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const n=t&&t.chain[s].element;if(n)if(n.parentNode===i)e.chain[s].element=n,i=n;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let s=i;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(s.appendChild(o),this.__addedByRouter.set(o,!0),s===i&&this.__appearingContent.push(o),s=o)}}__removeDisappearingContent(){this.__disappearingContent&&ie(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ie(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const s=t.chain[i].element;if(s)try{const n=m(e);ne(s.onAfterLeave,[n,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&ie(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},s=m(e,e.chain[t].route);ne(i.onAfterEnter,[s,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],s=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&i&&o){const c=ge(o)&&o.leave||"leaving",a=ge(o)&&o.enter||"entering";s.push(_t(t,c)),s.push(_t(i,a))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:s}=e?e.detail:window.location;v(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:s},!0))}static setTriggers(...e){Zr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Yr(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(S.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:s}=v(e)?this.__createUrl(e,"http://a"):e;return W("go",{pathname:t,search:i,hash:s})}}const oi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ai(){function r(){return!0}return qt(r)}function li(){try{return ci()?!0:hi()?ae?!ui():!ai():!1}catch{return!1}}function ci(){return localStorage.getItem("vaadin.developmentmode.force")}function hi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ui(){return!!(ae&&Object.keys(ae).map(e=>ae[e]).filter(e=>e.productionMode).length>0)}function qt(r,e){if(typeof r!="function")return;const t=oi.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const bt=function(r,e){if(window.Vaadin.developmentMode)return qt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=li());function di(){}const pi=function(){if(typeof bt=="function")return bt(di)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});pi();S.NavigationTrigger={POPSTATE:jr,CLICK:Mr};var fi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,zt=(r,e,t,i)=>{for(var s=i>1?void 0:i?gi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&fi(e,t,s),s};let Te=class extends g{constructor(){super(...arguments),this.router=new S(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return y`<slot></slot>`}};zt([_({attribute:!1})],Te.prototype,"routes",2);Te=zt([w("vaadin-router")],Te);var _i=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,Be=(r,e,t,i)=>{for(var s=i>1?void 0:i?mi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&_i(e,t,s),s};let Y=class extends g{constructor(){super(...arguments),this.user=new $}render(){return y`
    <h1>
        <a href="../app/">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
        </a>
        <a href="./music/artist.html">Collections</a>
        <div class="header-title">TBD</div>
        <a href="./music/music.html">Forum</a>
        <drop-down>
            <svg class="icon">
                <use href="/source-images/icons/icon.svg#icon-profile" />
            </svg>
            <ul slot="menu" class="dropdown" >
                <li><a href="/app/profile/aimee4312">Profile</a></li>
                <li><hr /></li>
                <li>Collections</li>
                <li><hr /></li>
                <li>Wishlist</li>
                <li><hr /></li>
                <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
        </drop-down>
    </h1>`}_signOut(){console.log("Signout"),this.user.signOut()}};Y.styles=L`
    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px; 
        background-color: transparent; 
        color: var(--secondary-text); 
        margin: 0;
    }
        
    svg.icon {
        display: inline;
        height: 2em;
        width: 2em;
        vertical-align: top;
        fill: var(--secondary-text);
    }
        
    a:link,
    a:visited,
    a:hover{
        color: var(--secondary-text);
        text-decoration: none;
    }
    
    .dropdown {
        background: var(--secondary-color);
        color: var(--secondary-text);
        border-radius: 15px;
    }
    
    .dropdown a:link,
    .dropdown a:visited,
    .dropdown a:hover {
        color: var(--secondary-text);
    }
  `;Be([C()],Y.prototype,"profile",2);Be([Ie({context:He,subscribe:!0}),_({attribute:!1})],Y.prototype,"user",2);Y=Be([w("home-header")],Y);let vi=class extends g{constructor(e,t,i){super(),this.updateFn=e,this.getModel=t,this.setModel=i,this.addEventListener("mvu:message",s=>{const n=s.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(s=>{const n=s(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},bi=class extends g{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class yi{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,s=this._handlers.get(i);return s?s(t,e):e}}function $i(r){return e=>Object.assign({},e,r)}function wi(r){return r}var Ei=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Vt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ai(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ei(e,t,s),s};const Wt="ChromaWaveModel",Pi={user:new $};class Kt extends vi{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Pi}}Vt([Rt({context:Wt}),C()],Kt.prototype,"model",2);class Jt extends bi{getFromModel(e){if(this._model)return this._model[e]}}Vt([Ie({context:Wt,subscribe:!0}),_({attribute:!1})],Jt.prototype,"_model",2);const Si=()=>new yi,Fe=$i,Gt=wi;var Oi=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,be=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ci(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Oi(e,t,s),s};let k=class extends g{constructor(){super(...arguments),this.path=""}connectedCallback(){this.path&&this._getData(this.path),super.connectedCallback()}attributeChangedCallback(r,e,t){r==="path"&&e!==t&&e&&this._getData(t),super.attributeChangedCallback(r,e,t)}updated(r){return console.log("updated Profile Form",r),r.get("authenticatedUser")&&this._getData(this.path),!0}render(){const{name:r,email:e}=this.profile||{};return y`
    <div class="profile-container">
        <form @submit=${this._handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value=${r}/>
            <span>Email</span>
            <input name="email" value=${e}/>
            <button type="submit">Submit</button
          </label>
        </form>
    </div>
    `}_getData(r){new Ut().get(r).then(t=>t.status===200?t.json():null).then(t=>{this.profile=t})}_handleChange(r){const e=r.target,t=e.name,i=e.value;let s=this.profile;console.log("Changed",t,i),s[t]=i,this.profile=s}_handleSubmit(r){r.preventDefault(),new me(this.profile).put(this.path).then(t=>t.status===200?t.json():null).then(t=>{t&&(console.log("PUT request successful:",t),this.profile=t)}).catch(t=>console.log("Failed to POST form data",t))}};k.styles=L`
  input {
    margin: 10px;
    margin-left: 0;
    width: 300px;
    height: 10%
  }

  .profile-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }
  
  `;be([_()],k.prototype,"path",2);be([C()],k.prototype,"profile",2);be([Ie({context:He,subscribe:!0}),_({attribute:!1})],k.prototype,"user",2);k=be([w("profile-form")],k);var xi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Ui=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ri(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&xi(e,t,s),s};let Me=class extends g{render(){return y`
    <h1>
      <a href="../index.html">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <a href="../music/artist.html">Artists</a>
      <div class="header-title">TBD</div>
      <a href="../music/music.html">Music</a>
      <drop-down>
          <svg class="icon">
              <use href="/source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="../profile/">Profile</a></li>
              <li><hr /></li>
              <li><a href="../profile/saved-songs.html">Saved Songs</a></li>
              <li><hr /></li>
              <li><a href="../profile/saved-palettes.html">Saved Palettes</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li>Logout</li>
          </ul>
      </drop-down>
    </h1>`}_toggleDarkMode(r){const e=r.target,t=document.body;e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}};Me.styles=L`
    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px; 
      background-color: var(--secondary-color); 
      color: var(--secondary-text); 
      margin: 0;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
    }

    a:link, a:visited{
      color: var(--secondary-text);
      text-decoration: none;
    }
    
    a:hover {
        color: var(--primary-accent);
    }
  `;Me=Ui([w("header-bar")],Me);const Ti=".display-name{grid-column:3;grid-row:1;font-size:3em;align-self:end;margin:0}.img-change{grid-column:2}.name{padding:10%;font-size:2em}.profile-container{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto}.profile-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.profile-display a{display:inline-block;width:100%}.profile-img{box-sizing:border-box;border-radius:150px;border:2px solid var(--primary-accent);width:40%;margin-top:10%;margin-left:25%}.profile-navbar{grid-column:1;grid-row-start:1;grid-row-end:10;background-color:var(--primary-background)}.selected-prof-nav{grid-column:1;grid-row:2;background-color:var(--secondary-color);border-top-right-radius:20px;border-bottom-right-radius:20px}.text-input{grid-column:3;grid-row:2}";var Mi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,ye=(r,e,t,i)=>{for(var s=i>1?void 0:i?Li(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Mi(e,t,s),s};let B=class extends g{get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}render(){return y`
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
                <div class="name selected-prof-nav">
                    <a href="./index.html">${name}</a>
                </div>
                <div class="saved-songs name">
                    <a href="./saved-songs.html">Saved Songs</a>
                </div>
                <div class="name">
                    <a href="./saved-palettes.html">Saved Palettes</a>
                </div>
            </div>
        `}};B.styles=[le(Ti),le(Ot)];ye([C()],B.prototype,"profile",2);ye([_({attribute:!1})],B.prototype,"location",2);ye([_({reflect:!0})],B.prototype,"userid",1);B=ye([w("profile-nav")],B);var ji=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,qe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Di(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ji(e,t,s),s};let Z=class extends g{get profile(){return this.using||{}}render(){const{name:r}=this.profile||{};return y`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav></profile-nav>
        <p class="display-name">${r}</p>
        <profile-form path="/profile/aimee4312"></profile-form>
      </div>
    `}};Z.styles=L`
  :host {
    --avatar-backgroundColor: var(--color-accent);
    --avatar-size: 100px;
  }

  a:link,
  a:visited {
    color: var(--secondary-text);
    text-decoration: none;
  }

  input {
    margin: 10px;
    margin-left: 0;
    width: 100%;
    height: 10%
  }

  .avatar {
    grid-column: key;
    grid-row: auto/span 2;
    justify-self: end;
    position: relative;
    width: var(--avatar-size);
    aspect-ratio: 1;
    background-color: var(--avatar-backgroundColor);
    border-radius: 50%;
    text-align: center;
    line-height: var(--avatar-size);
    font-size: calc(0.66 * var(--avatar-size));
    font-family: var(--font-family-display);
    color: var(--color-link-inverted);
    overflow: hidden;
  }

  .display-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 3em;
    align-self: end;
    margin: 0;
  }

  img {
    width: 100%;
  }

  .img-change {
    grid-column: 2;
  }

  .name {
    padding: 10%;
    font-size: 2em;
  }

  .profile-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }

  .profile-display {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin: 5%;
  }
    
  .profile-display a {
    display: inline-block;
    width: 100%;
  }

  .profile-img {
    box-sizing: border-box;
    border-radius: 150px;
    border: 2px solid var(--primary-accent);
    width: 40%;
    margin-top: 10%;
    margin-left: 25%;
  }

  .profile-navbar {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 10;
    background-color: var(--primary-background);
  }

  .selected-prof-nav {
    grid-column: 1; 
    grid-row: 2; 
    background-color: var(--secondary-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  profile-form {
    grid-column: 3;
    grid-row: 2/4;
    margin-top: 20px;
  }
  
  `;qe([_({attribute:!1})],Z.prototype,"using",2);qe([C()],Z.prototype,"newAvatar",2);Z=qe([w("user-profile")],Z);var Ni=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,$e=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ii(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ni(e,t,s),s};let ee=class extends Jt{get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}render(){return y`
      <main class="page">
              <user-profile .using=${this.profile}>
              </user-profile>
      </main>
    `}};$e([_({attribute:!1})],ee.prototype,"location",2);$e([_({reflect:!0})],ee.prototype,"userid",1);$e([_()],ee.prototype,"profile",1);ee=$e([w("profile-page")],ee);const Hi=[{path:"/app/profile/:userid",component:"profile-page"}],we=Si(),ki=we.update;we.addMessage("UserLoggedIn",(r,e)=>{const{user:t}=r;return Fe({user:t})(e)});we.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Ut().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Fe({profile:t}):Gt)});we.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new me(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?Fe({profile:i}):Gt)});var Bi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,qi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Bi(e,t,s),s};let Le=class extends Kt{constructor(){super(ki)}render(){return y`
        <auth-required>
            <div class="background-container">
                <home-header></home-header>
            </div>
            <vaadin-router .routes=${Hi}> </vaadin-router>
        </auth-required>
            `}};Le.styles=[le(Ot),L`
        body {
            margin: 0;
        }

        input[type=text]{
            border-radius: 10px;
        }
        
        .background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/source-images/background/smiski-wallpaper.png');
            background-size: auto;
            background-position: center;
        }
        
        `];Le=qi([w("smiski-world")],Le);
