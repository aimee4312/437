(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=globalThis,Ye=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),at=new WeakMap;let Nt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ye&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=at.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(t,e))}return e}toString(){return this.cssText}};const m=s=>new Nt(typeof s=="string"?s:s+"",void 0,Ze),C=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Nt(t,s,Ze)},_s=(s,e)=>{if(Ye)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=$e.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},lt=Ye?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return m(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vs,defineProperty:bs,getOwnPropertyDescriptor:ys,getOwnPropertyNames:$s,getOwnPropertySymbols:ws,getPrototypeOf:Es}=Object,j=globalThis,ct=j.trustedTypes,Ss=ct?ct.emptyScript:"",He=j.reactiveElementPolyfillSupport,se=(s,e)=>s,Ae={toAttribute(s,e){switch(e){case Boolean:s=s?Ss:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},et=(s,e)=>!vs(s,e),ht={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class z extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&bs(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=ys(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ht}static _$Ei(){if(this.hasOwnProperty(se("elementProperties")))return;const e=Es(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se("properties"))){const t=this.properties,i=[...$s(t),...ws(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(lt(r))}else e!==void 0&&t.push(lt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _s(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ae).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Ae;this._$Em=r,this[r]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??et)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[se("elementProperties")]=new Map,z[se("finalized")]=new Map,He==null||He({ReactiveElement:z}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Pe=ie.trustedTypes,ut=Pe?Pe.createPolicy("lit-html",{createHTML:s=>s}):void 0,Mt="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,Lt="?"+D,As=`<${Lt}>`,I=document,ne=()=>I.createComment(""),oe=s=>s===null||typeof s!="object"&&typeof s!="function",It=Array.isArray,Ps=s=>It(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,M=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,gt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Os=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=Os(1),K=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),mt=new WeakMap,L=I.createTreeWalker(I,129);function Ht(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(e):e}const xs=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",o=te;for(let l=0;l<t;l++){const a=s[l];let c,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===te?h[1]==="!--"?o=dt:h[1]!==void 0?o=pt:h[2]!==void 0?(Ft.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=M):h[3]!==void 0&&(o=M):o===M?h[0]===">"?(o=r??te,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?M:h[3]==='"'?gt:ft):o===gt||o===ft?o=M:o===dt||o===pt?o=te:(o=M,r=void 0);const p=o===M&&s[l+1].startsWith("/>")?" ":"";n+=o===te?a+As:u>=0?(i.push(c),a.slice(0,u)+Mt+a.slice(u)+D+p):a+D+(u===-2?l:p)}return[Ht(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class ae{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,h]=xs(e,t);if(this.el=ae.createElement(c,i),L.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=L.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Mt)){const d=h[o++],p=r.getAttribute(u).split(D),N=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:N[2],strings:p,ctor:N[1]==="."?Rs:N[1]==="?"?Us:N[1]==="@"?ks:Te}),r.removeAttribute(u)}else u.startsWith(D)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(Ft.test(r.tagName)){const u=r.textContent.split(D),d=u.length-1;if(d>0){r.textContent=Pe?Pe.emptyScript:"";for(let p=0;p<d;p++)r.append(u[p],ne()),L.nextNode(),a.push({type:2,index:++n});r.append(u[d],ne())}}}else if(r.nodeType===8)if(r.data===Lt)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(D,u+1))!==-1;)a.push({type:7,index:n}),u+=D.length-1}n++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function J(s,e,t=s,i){var o,l;if(e===K)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=oe(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=J(s,r._$AS(s,e.values),r,i)),e}class Cs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??I).importNode(t,!0);L.currentNode=r;let n=L.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new pe(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Ds(n,this,e)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=L.nextNode(),o++)}return L.currentNode=I,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class pe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),oe(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==v&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ae.createElement(Ht(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Cs(r,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=mt.get(e.strings);return t===void 0&&mt.set(e.strings,t=new ae(e)),t}k(e){It(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new pe(this.S(ne()),this.S(ne()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=J(this,e,t,0),o=!oe(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=J(this,l[i+a],t,a),c===K&&(c=this._$AH[a]),o||(o=!oe(c)||c!==this._$AH[a]),c===v?e=v:e!==v&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rs extends Te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Us extends Te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class ks extends Te{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??v)===K)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ds{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const qe=ie.litHtmlPolyfillSupport;qe==null||qe(ae,pe),(ie.litHtmlVersions??(ie.litHtmlVersions=[])).push("3.1.2");const Ts=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new pe(e.insertBefore(ne(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}};var jt;O._$litElement$=!0,O.finalized=!0,(jt=globalThis.litElementHydrateSupport)==null||jt.call(globalThis,{LitElement:O});const We=globalThis.litElementPolyfillSupport;We==null||We({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:et},Ns=(s=js,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,s)},init(l){return l!==void 0&&this.P(o,void 0,s),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function g(s){return(e,t)=>typeof t=="object"?Ns(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(s){return g({...s,state:!0,attribute:!1})}const R='@import"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";*{font-family:Roboto,sans-serif}body{margin:0;background-color:var(--primary-background);color:var(--secondary-text);height:100vh}a:link,a:visited{color:var(--secondary-text);text-decoration:none}a:hover{color:var(--primary-accent)}input{margin:20px 20px 20px 0;width:100%;height:20%}.dropdown{background-color:var(--primary-accent)}',Bt="h1{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background-color:transparent;color:var(--secondary-color);margin:0}svg.icon{display:inline;height:2em;width:2em;vertical-align:top;fill:currentColor}a:link,a:visited,a:hover{color:var(--secondary-color);text-decoration:none}.dropdown{background:var(--secondary-color);color:var(--secondary-text);border-radius:15px}.dropdown a:link,.dropdown a:visited,.dropdown a:hover{color:var(--secondary-text)}input[type=text]{border-radius:10px}.background-container{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(/source-images/background/smiski-wallpaper.png);background-size:auto;background-position:center}.container{position:absolute;top:50%;width:60%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center}.searchbar{width:100%;max-width:calc(100% - 3em);height:3em}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class{constructor(e,t,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new qt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ms{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ls=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class vt extends Ms{constructor(e,t,i){var r,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:h}]of this.subscriptions)a.has(c)||(a.add(c),h.dispatchEvent(new qt(this.context,c,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(r=this.host).addController)==null||n.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ls(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt({context:s}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new vt(this,{context:s}))}),{get(){return e.get.call(this)},set(r){var n;return(n=i.get(this))==null||n.setValue(r),e.set.call(this,r)},init(r){var n;return(n=i.get(this))==null||n.setValue(r),r}};{e.constructor.addInitializer(o=>{i.set(o,new vt(o,{context:s}))});const r=Object.getOwnPropertyDescriptor(e,t);let n;if(r===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=r.set;n={...r,set:function(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q({context:s,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new _t(this,{context:s,callback:r=>{this[i.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new _t(r,{context:s,callback:n=>{r[i]=n},subscribe:e})})}}const Is=window.location.origin,Ve="JWT_AUTH_TOKEN",Fs="/api",k=class k{constructor(){this.authenticated=!1,this.username="fellow_user",this.signOut=()=>{}}static deauthenticate(e){const t=new k;return console.log("Deauthenticating",e,k._theUser),e===k._theUser&&(localStorage.removeItem(Ve),k._theUser=t),t}};k._theUser=new k;let y=k;class le extends y{constructor(e,t){super();const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(r).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const i=new le(e,t);return y._theUser=i,localStorage.setItem(Ve,e),i}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ve);return t?le.authenticate(t,e):y._theUser}}class fe{constructor(e){this._base=Fs,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=y._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${y._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${Is}${this._base}${e}`}}class bt extends fe{constructor(e){super(Object.fromEntries(e))}}class x extends fe{constructor(){super(void 0)}}var Hs=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,je=(s,e,t,i)=>{for(var r=i>1?void 0:i?Bs(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Hs(e,t,r),r};let W="auth",G=class extends O{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=le.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const s=f`
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
    `;return f`
      ${this.isAuthenticated()?"":s}
      <slot></slot>
    `}_handleLogin(s){s.preventDefault();const e=s.target,t=new FormData(e);new bt(t).base().post("/login").then(r=>{if(r.status===200)return r.json();this.loginStatus=r.status}).then(r=>{if(r){console.log("Authentication:",r.token);const n=le.authenticate(r.token,()=>this._signOut());this.user=n,this._toggleDialog(!1),this._dispatchUserLoggedIn(n),this.requestUpdate()}})}_dispatchUserLoggedIn(s){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:s}});this.dispatchEvent(e)}_handleRegister(s){s.preventDefault();const e=s.target,t=new FormData(e);new bt(t).base().post("/signup").then(r=>{if(r.status===200)return r.json();this.registerStatus=r.status}).then(r=>{console.log("Registration:",r)})}_toggleDialog(s){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(s?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=y.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};G.styles=C`
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
  `;je([_()],G.prototype,"loginStatus",2);je([_()],G.prototype,"registerStatus",2);je([Wt({context:W}),_()],G.prototype,"user",2);G=je([b("auth-required")],G);function Oe(s){return s=s||[],Array.isArray(s)?s:[s]}function A(s){return`[Vaadin.Router] ${s}`}function qs(s){if(typeof s!="object")return String(s);const e=Object.prototype.toString.call(s).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(s)}`:e}const xe="module",Ce="nomodule",Ke=[xe,Ce];function yt(s){if(!s.match(/.+\.[m]?js$/))throw new Error(A(`Unsupported type for bundle "${s}": .js or .mjs expected.`))}function zt(s){if(!s||!S(s.path))throw new Error(A('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=s.bundle,t=["component","redirect","bundle"];if(!F(s.action)&&!Array.isArray(s.children)&&!F(s.children)&&!Re(e)&&!t.some(i=>S(s[i])))throw new Error(A(`Expected route config "${s.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(S(e))yt(e);else if(Ke.some(i=>i in e))Ke.forEach(i=>i in e&&yt(e[i]));else throw new Error(A('Expected route bundle to include either "'+Ce+'" or "'+xe+'" keys, or both'));s.redirect&&["bundle","component"].forEach(i=>{i in s&&console.warn(A(`Route config "${s.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function $t(s){Oe(s).forEach(e=>zt(e))}function wt(s,e){let t=document.head.querySelector('script[src="'+s+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",s),e===xe?t.setAttribute("type",xe):e===Ce&&t.setAttribute(Ce,""),t.async=!0),new Promise((i,r)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,i(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),r(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Ws(s){return S(s)?wt(s):Promise.race(Ke.filter(e=>e in s).map(e=>wt(s[e],e)))}function re(s,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${s}`,{cancelable:s==="go",detail:e}))}function Re(s){return typeof s=="object"&&!!s}function F(s){return typeof s=="function"}function S(s){return typeof s=="string"}function Vt(s){const e=new Error(A(`Page not found (${s.pathname})`));return e.context=s,e.code=404,e}const V=new class{};function zs(s){const e=s.port,t=s.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?s.hostname:s.host;return`${t}//${n}`}function Et(s){if(s.defaultPrevented||s.button!==0||s.shiftKey||s.ctrlKey||s.altKey||s.metaKey)return;let e=s.target;const t=s.composedPath?s.composedPath():s.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||zs(e))!==window.location.origin)return;const{pathname:r,search:n,hash:o}=e;re("go",{pathname:r,search:n,hash:o})&&(s.preventDefault(),s&&s.type==="click"&&window.scrollTo(0,0))}const Vs={activate(){window.document.addEventListener("click",Et)},inactivate(){window.document.removeEventListener("click",Et)}},Ks=/Trident/.test(navigator.userAgent);Ks&&!F(window.PopStateEvent)&&(window.PopStateEvent=function(s,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(s,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function St(s){if(s.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;re("go",{pathname:e,search:t,hash:i})}const Js={activate(){window.addEventListener("popstate",St)},inactivate(){window.removeEventListener("popstate",St)}};var Z=Yt,Gs=tt,Xs=ei,Qs=Gt,Ys=Qt,Kt="/",Jt="./",Zs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function tt(s,e){for(var t=[],i=0,r=0,n="",o=e&&e.delimiter||Kt,l=e&&e.delimiters||Jt,a=!1,c;(c=Zs.exec(s))!==null;){var h=c[0],u=c[1],d=c.index;if(n+=s.slice(r,d),r=d+h.length,u){n+=u[1],a=!0;continue}var p="",N=s[r],us=c[2],ds=c[3],ps=c[4],be=c[5];if(!a&&n.length){var Fe=n.length-1;l.indexOf(n[Fe])>-1&&(p=n[Fe],n=n.slice(0,Fe))}n&&(t.push(n),n="",a=!1);var fs=p!==""&&N!==void 0&&N!==p,gs=be==="+"||be==="*",ms=be==="?"||be==="*",nt=p||o,ot=ds||ps;t.push({name:us||i++,prefix:p,delimiter:nt,optional:ms,repeat:gs,partial:fs,pattern:ot?ti(ot):"[^"+U(nt)+"]+?"})}return(n||r<s.length)&&t.push(n+s.substr(r)),t}function ei(s,e){return Gt(tt(s,e))}function Gt(s){for(var e=new Array(s.length),t=0;t<s.length;t++)typeof s[t]=="object"&&(e[t]=new RegExp("^(?:"+s[t].pattern+")$"));return function(i,r){for(var n="",o=r&&r.encode||encodeURIComponent,l=0;l<s.length;l++){var a=s[l];if(typeof a=="string"){n+=a;continue}var c=i?i[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(h=o(c[u],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=o(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function U(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ti(s){return s.replace(/([=!:$/()])/g,"\\$1")}function Xt(s){return s&&s.sensitive?"":"i"}function si(s,e){if(!e)return s;var t=s.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return s}function ii(s,e,t){for(var i=[],r=0;r<s.length;r++)i.push(Yt(s[r],e,t).source);return new RegExp("(?:"+i.join("|")+")",Xt(t))}function ri(s,e,t){return Qt(tt(s,t),e,t)}function Qt(s,e,t){t=t||{};for(var i=t.strict,r=t.start!==!1,n=t.end!==!1,o=U(t.delimiter||Kt),l=t.delimiters||Jt,a=[].concat(t.endsWith||[]).map(U).concat("$").join("|"),c=r?"^":"",h=s.length===0,u=0;u<s.length;u++){var d=s[u];if(typeof d=="string")c+=U(d),h=u===s.length-1&&l.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+U(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?c+=U(d.prefix)+"("+p+")?":c+="(?:"+U(d.prefix)+"("+p+"))?":c+=U(d.prefix)+"("+p+")"}}return n?(i||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(i||(c+="(?:"+o+"(?="+a+"))?"),h||(c+="(?="+o+"|"+a+")")),new RegExp(c,Xt(t))}function Yt(s,e,t){return s instanceof RegExp?si(s,e):Array.isArray(s)?ii(s,e,t):ri(s,e,t)}Z.parse=Gs;Z.compile=Xs;Z.tokensToFunction=Qs;Z.tokensToRegExp=Ys;const{hasOwnProperty:ni}=Object.prototype,Je=new Map;Je.set("|false",{keys:[],pattern:/(?:)/});function At(s){try{return decodeURIComponent(s)}catch{return s}}function oi(s,e,t,i,r){t=!!t;const n=`${s}|${t}`;let o=Je.get(n);if(!o){const c=[];o={keys:c,pattern:Z(s,c,{end:t,strict:s===""})},Je.set(n,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},r);for(let c=1;c<l.length;c++){const h=o.keys[c-1],u=h.name,d=l[c];(d!==void 0||!ni.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(At):[]:a[u]=d&&At(d))}return{path:l[0],keys:(i||[]).concat(o.keys),params:a}}function Zt(s,e,t,i,r){let n,o,l=0,a=s.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(s===c)return{done:!0};const h=s.__children=s.__children||s.children;if(!n&&(n=oi(a,e,!h,i,r),n))return{done:!1,value:{route:s,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;l<h.length;){if(!o){const d=h[l];d.parent=s;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Zt(d,e.substr(p),t,n.keys,n.params)}const u=o.next(c);if(!u.done)return{done:!1,value:u.value};o=null,l++}return{done:!0}}}}function ai(s){if(F(s.route.action))return s.route.action(s)}function li(s,e){let t=e;for(;t;)if(t=t.parent,t===s)return!0;return!1}function ci(s){let e=`Path '${s.pathname}' is not properly resolved due to an error.`;const t=(s.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function hi(s,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const r={path:i,route:t};if(!s.chain)s.chain=[];else if(t.parent){let n=s.chain.length;for(;n--&&s.chain[n].route&&s.chain[n].route!==t.parent;)s.chain.pop()}s.chain.push(r)}}class ce{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||ai,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){$t(e);const t=[...Oe(e)];this.root.__children=t}addRoutes(e){return $t(e),this.root.__children.push(...Oe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,S(e)?{pathname:e}:e),i=Zt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let n=null,o=null,l=t;function a(c,h=n.value.route,u){const d=u===null&&n.value.route;return n=o||i.next(d),o=null,!c&&(n.done||!li(h,n.value.route))?(o=n,Promise.resolve(V)):n.done?Promise.reject(Vt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,n.value),hi(l,n.value),Promise.resolve(r(l)).then(p=>p!=null&&p!==V?(l.result=p.result||p,l):a(c,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=ci(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}ce.pathToRegexp=Z;const{pathToRegexp:Pt}=ce,Ot=new Map;function es(s,e,t){const i=e.name||e.component;if(i&&(s.has(i)?s.get(i).push(e):s.set(i,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const n=t[r];n.parent=e,es(s,n,n.__children||n.children)}}function xt(s,e){const t=s.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Ct(s){let e=s.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function ui(s,e={}){if(!(s instanceof ce))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,r)=>{let n=xt(t,i);if(!n&&(t.clear(),es(t,s.root,s.root.__children),n=xt(t,i),!n))throw new Error(`Route "${i}" not found`);let o=Ot.get(n.fullPath);if(!o){let a=Ct(n),c=n.parent;for(;c;){const p=Ct(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=Pt.parse(a),u=Pt.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)S(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},Ot.set(a,o),n.fullPath=a}let l=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},c=Object.keys(r);for(let u=0;u<c.length;u++){const d=c[u];o.keys[d]||(a[d]=r[d])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let Rt=[];function di(s){Rt.forEach(e=>e.inactivate()),s.forEach(e=>e.activate()),Rt=s}const pi=s=>{const e=getComputedStyle(s).getPropertyValue("animation-name");return e&&e!=="none"},fi=(s,e)=>{const t=()=>{s.removeEventListener("animationend",t),e()};s.addEventListener("animationend",t)};function Ut(s,e){return s.classList.add(e),new Promise(t=>{if(pi(s)){const i=s.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;s.setAttribute("style",`position: absolute; ${r}`),fi(s,()=>{s.classList.remove(e),s.removeAttribute("style"),t()})}else s.classList.remove(e),t()})}const gi=256;function ze(s){return s!=null}function mi(s){const e=Object.assign({},s);return delete e.next,e}function E({pathname:s="",search:e="",hash:t="",chain:i=[],params:r={},redirectFrom:n,resolver:o},l){const a=i.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:s,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:r,redirectFrom:n,getUrl:(c={})=>Ee(T.pathToRegexp.compile(ts(a))(Object.assign({},r,c)),o)}}function kt(s,e){const t=Object.assign({},s.params);return{redirect:{pathname:e,from:s.pathname,params:t}}}function _i(s,e){e.location=E(s);const t=s.chain.map(i=>i.route).indexOf(s.route);return s.chain[t].element=e,e}function we(s,e,t){if(F(s))return s.apply(t,e)}function Dt(s,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return we(t[s],e,t)}}function vi(s,e){if(!Array.isArray(s)&&!Re(s))throw new Error(A(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${s}`));e.__children=[];const t=Oe(s);for(let i=0;i<t.length;i++)zt(t[i]),e.__children.push(t[i])}function ye(s){if(s&&s.length){const e=s[0].parentNode;for(let t=0;t<s.length;t++)e.removeChild(s[t])}}function Ee(s,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(s.replace(/^\//,""),t).pathname:s}function ts(s){return s.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class T extends ce{constructor(e,t){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&ce.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=T.NavigationTrigger;T.setTriggers.apply(T,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=E({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();F(t.children)&&(i=i.then(()=>t.children(mi(e))).then(n=>{!ze(n)&&!F(t.children)&&(n=t.children),vi(n,t)}));const r={redirect:n=>kt(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return we(t.action,[e,r],t)}).then(n=>{if(ze(n)&&(n instanceof HTMLElement||n.redirect||n===V))return n;if(S(t.redirect))return r.redirect(t.redirect);if(t.bundle)return Ws(t.bundle).then(()=>{},()=>{throw new Error(A(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(ze(n))return n;if(S(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},S(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=E(n),t&&this.__updateBrowserHistory(n,i===1),re("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const l=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),l.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ye(this.__outlet&&this.__outlet.children),this.location=E(Object.assign(r,{resolver:this})),re("error",Object.assign({router:this,error:n},r)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,l=Ee(ts(i.chain),i.resolver)===i.pathname,a=(c,h=c.route,u)=>c.next(void 0,h,u).then(d=>d===null||d===V?l?c:h.parent!==null?a(c,h.parent,d):d:d);return a(i).then(c=>{if(c===null||c===V)throw Vt(n);return c&&c!==V&&c!==i?this.__fullyResolveChain(n,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(_i(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(A(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${qs(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],r=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),l=a=>kt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,r.length)&&!(i[a].route!==r[a].route||i[a].path!==r[a].path&&i[a].element!==r[a].element||!this.__isReusableElement(i[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a]);for(let a=0;a<r.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:l},r[a]),i[a].element.location=E(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=E(e,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:l},r[a]),r[a].element&&(r[a].element.location=E(e,r[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,r){const n=E(t);return e.then(o=>{if(this.__isLatestRender(t))return Dt("onBeforeLeave",[n,i,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,r){const n=E(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Dt("onBeforeEnter",[n,i,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>gi)throw new Error(A(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(A(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=r?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const n=t&&t.chain[r].element;if(n)if(n.parentNode===i)e.chain[r].element=n,i=n;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let r=i;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===i&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ye(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ye(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=t.chain[i].element;if(r)try{const n=E(e);we(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ye(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},r=E(e,e.chain[t].route);we(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],n=e.chain;let o;for(let l=n.length;l>0;l--)if(n[l-1].route.animate){o=n[l-1].route.animate;break}if(t&&i&&o){const l=Re(o)&&o.leave||"leaving",a=Re(o)&&o.enter||"entering";r.push(Ut(t,l)),r.push(Ut(i,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:r}=e?e.detail:window.location;S(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:r},!0))}static setTriggers(...e){di(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=ui(this)),Ee(this.__urlForName(e,t),this)}urlForPath(e,t){return Ee(T.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:r}=S(e)?this.__createUrl(e,"http://a"):e;return re("go",{pathname:t,search:i,hash:r})}}const bi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Se=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yi(){function s(){return!0}return ss(s)}function $i(){try{return wi()?!0:Ei()?Se?!Si():!yi():!1}catch{return!1}}function wi(){return localStorage.getItem("vaadin.developmentmode.force")}function Ei(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Si(){return!!(Se&&Object.keys(Se).map(e=>Se[e]).filter(e=>e.productionMode).length>0)}function ss(s,e){if(typeof s!="function")return;const t=bi.exec(s.toString());if(t)try{s=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return s(e)}window.Vaadin=window.Vaadin||{};const Tt=function(s,e){if(window.Vaadin.developmentMode)return ss(s,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$i());function Ai(){}const Pi=function(){if(typeof Tt=="function")return Tt(Ai)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Pi();T.NavigationTrigger={POPSTATE:Js,CLICK:Vs};var Oi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,is=(s,e,t,i)=>{for(var r=i>1?void 0:i?xi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Oi(e,t,r),r};let Ge=class extends O{constructor(){super(...arguments),this.router=new T(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};is([g({attribute:!1})],Ge.prototype,"routes",2);Ge=is([b("vaadin-router")],Ge);let Ci=class extends O{constructor(e,t,i){super(),this.updateFn=e,this.getModel=t,this.setModel=i,this.addEventListener("mvu:message",r=>{const n=r.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(r=>{const n=r(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},Ri=class extends O{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class Ui{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,r=this._handlers.get(i);return r?r(t,e):e}}function ki(s){return e=>Object.assign({},e,s)}function Di(s){return s}var Ti=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,rs=(s,e,t,i)=>{for(var r=i>1?void 0:i?ji(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ti(e,t,r),r};const ns="SmiskiWorldModel",Ni={user:new y};class os extends Ci{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Ni}}rs([Wt({context:ns}),_()],os.prototype,"model",2);class w extends Ri{getFromModel(e){if(this._model)return this._model[e]}}rs([q({context:ns,subscribe:!0}),g({attribute:!1})],w.prototype,"_model",2);const Mi=()=>new Ui,ge=ki,Ne=Di,me="body{height:100%}.display-name{grid-column:3;font-size:3em;margin:0;height:10%}.img-change{grid-column:2}.name{padding:10%;font-size:2em}.profile-container{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,100px)}.profile-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.profile-display a{display:inline-block;width:100%}.profile-img{box-sizing:border-box;border-radius:150px;border:2px solid var(--primary-accent);width:40%;margin-top:10%;margin-left:10%}.profile-navbar{grid-column:1 / 5;grid-row:1 / span 10;height:100vh;background-color:var(--primary-accent)}.selected-prof-nav{grid-column:1 / 2;grid-row:2;background-color:var(--secondary-color);border-top-right-radius:20px;border-bottom-right-radius:20px}.text-input{grid-column:3;grid-row:2}";var Li=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,st=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ii(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Li(e,t,r),r};let he=class extends w{get profile(){return this.using||{}}render(){const{name:s,email:e}=this.profile||{};return f`
      <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${s}/>
          <span>Email</span>
          <input name="email" value=${e}/>
          <input
            name="avatar"
            type="file"
            @change=${this._handleAvatarSelected}
        />
          <button type="submit">Submit</button
        </label>
      </form>
    `}_handleAvatarSelected(s){const t=s.target.files[0];new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=l=>n(l),o.readAsDataURL(t)}).then(r=>this.newAvatar=r)}_handleSubmit(s){var e;if(s.preventDefault(),this.profile){const t=s.target,i=new FormData(t);let r=Array.from(i.entries()).map(([o,l])=>l===""?[o]:[o,l]).map(([o,l])=>o==="airports"?[o,l.split(",").map(a=>a.trim())]:[o,l]);this.newAvatar&&r.push(["avatar",this.newAvatar]);const n=Object.fromEntries(r);console.log("Submitting Form",n),this.dispatchMessage({type:"ProfileSaved",userid:(e=this.profile)==null?void 0:e.userid,profile:n})}}};he.styles=[m(R),m(me),C`
    input {
      margin: 10px;
      margin-left: 0;
      width: 300px;
      height: 10%
    }
  
  `];st([g({attribute:!1})],he.prototype,"using",2);st([_()],he.prototype,"newAvatar",2);he=st([b("profile-form")],he);var Fi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,as=(s,e,t,i)=>{for(var r=i>1?void 0:i?Hi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Fi(e,t,r),r};let Ue=class extends O{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange}/>
      </span>
    </label>`}_handleChange(s){const e=s.target,t=new Event(s.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Ue.styles=C`
    :host {
      display: block;
    }
    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-slider-checked);
      border-radius: 0.75em;
      background-color: var(--color-slider-background);
      margin-left: 10px;
      height: 1em;
      width: 1.75em;
      position: relative;
      transition: background-color
      var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-slider-checked);
    }
    input {
      appearance: none;
      background-color: var(--color-slider-forground);
      border-radius: 50%;
      width: 1.5em;
      height: 1.5em;
      vertical-align: center;
      position: absolute;
      left: 0;
      transition: left var(--time-slider-transition);
    }
    input:checked {
      left: 1.5em;
    }
  `;as([g({reflect:!0,type:Boolean})],Ue.prototype,"on",2);Ue=as([b("toggle-switch")],Ue);var Bi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,it=(s,e,t,i)=>{for(var r=i>1?void 0:i?qi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Bi(e,t,r),r};let ue=class extends w{constructor(){super(...arguments),this.user=new y}render(){const{userid:s}=this.profile||{};return f`
    <h1>
      <a href="/app">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <a href="/app/smiski">Collections</a>
      <div class="header-title">Smiski World</div>
      <a href="/app/forum">Forum</a>
      <drop-down>
          <svg class="icon">
              <use href="/source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="/app/profile/${s}">Profile</a></li>
              <li><hr /></li>
              <li><a href="/app/collection/${s}">Collection</a></li>
              <li><hr /></li>
              <li><a href="/app/wishlist/${s}">Wishlist</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
          </ul>
      </drop-down>
    </h1>`}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new x().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_toggleDarkMode(s){const e=s.target,t=document.body;e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_signOut(){console.log("Signout"),this.user.signOut()}};ue.styles=C`
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
  `;it([_()],ue.prototype,"profile",2);it([q({context:W,subscribe:!0}),g({attribute:!1})],ue.prototype,"user",2);ue=it([b("header-bar")],ue);var Wi=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,_e=(s,e,t,i)=>{for(var r=i>1?void 0:i?zi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Wi(e,t,r),r};let H=class extends w{constructor(){super(...arguments),this.user=new y}render(){const{name:s,userid:e}=this.profile||{};return f`
            <div class="profile-navbar">
                ${this._renderAvatar()}
                <div class="name ${this.selectedLink==="profile"?"selected-prof-nav":""}">
                    <a href="/app/profile/${e}">${s}</a>
                </div>
                <div class="saved-songs name ${this.selectedLink==="collection"?"selected-prof-nav":""}">
                    <a href="/app/collection/${e}">Collection</a>
                </div>
                <div class="name ${this.selectedLink==="wishlist"?"selected-prof-nav":""}">
                    <a href="/app/wishlist/${e}">Wishlist</a>
                </div>
            </div>
        `}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new x().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_renderAvatar(){const{avatar:s}=this.profile||{},e=this.newAvatar||s,t=f` <img src="${e}" class="profile-img">`;return f` <div class="avatar">
          ${t}
        </div>`}};H.styles=[m(me),m(R)];_e([_()],H.prototype,"profile",2);_e([q({context:W,subscribe:!0}),g({attribute:!1})],H.prototype,"user",2);_e([g({type:String})],H.prototype,"selectedLink",2);_e([_()],H.prototype,"newAvatar",2);H=_e([b("profile-nav")],H);var Vi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Me=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ki(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Vi(e,t,r),r};let X=class extends w{get userid(){var s;return(s=this.location)==null?void 0:s.params.userid}get profile(){return this.getFromModel("profile")}attributeChangedCallback(s,e,t){s==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(s,e,t)}render(){const{name:s}=this.profile||{};return f`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav selectedLink="profile"></profile-nav>
        <p class="display-name">${s}</p>
        <profile-form .using=${this.profile}></profile-form>
      </div>
    `}};X.styles=[m(R),m(me),C`

  profile-form {
    grid-column: 3;
    grid-row: 3;
    margin-top: 20px;
    height: 50%;
  }
  
  `];Me([g({attribute:!1})],X.prototype,"location",2);Me([g({reflect:!0})],X.prototype,"userid",1);Me([g()],X.prototype,"profile",1);X=Me([b("profile-page")],X);var Ji=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,ls=(s,e,t,i)=>{for(var r=i>1?void 0:i?Gi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ji(e,t,r),r};let ke=class extends O{constructor(){super(...arguments),this.open=!1}render(){return f`
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
    `}_handleChange(s){const e=s.target;this._toggle(e==null?void 0:e.checked)}_toggle(s){this.open=s,this._toggleClickAway(s)}_toggleClickAway(s){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};s?document.addEventListener("click",e):document.removeEventListener("click",e)}};ke.styles=C`
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
  `;ls([g({reflect:!0,type:Boolean})],ke.prototype,"open",2);ke=ls([b("drop-down")],ke);const cs=".card{box-shadow:0 4px 8px #0003;transition:.3s;border-radius:5px;height:500px;overflow:hidden}.card-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(5,minmax(250px,1fr));grid-gap:1rem}.container{padding:2px 16px}.card:hover{box-shadow:0 8px 16px #0003}img[slot=image]{width:100%}";var Xi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,P=(s,e,t,i)=>{for(var r=i>1?void 0:i?Qi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Xi(e,t,r),r};let $=class extends w{constructor(){super(...arguments),this.path="",this.photo="",this.smiskiName="",this.collections="",this.bodyType="",this.found="",this.pose="",this.description=""}connectedCallback(){if(this.user){const s=this.user.username;this._getData(s)}super.connectedCallback()}render(){const e=this.profile&&this.smiskiName&&this.profile.wishlist.includes(this.smiskiName)?"Remove from Wishlist":"Add to Wishlist",i=this.profile&&this.smiskiName&&this.profile.smiski_owned.includes(this.smiskiName)?"Remove from Collection":"Add to Collection";return f`
      <div class="card">
        <slot name="image"></slot>
        <div class="container">
          <img src="${this.photo}" alt="Smiski Image">
          <div class="smiski-name-container">
            ${this.smiskiName!==""?f`<h5><span slot="smiskiName">${this.smiskiName}</span></h5>`:""}
            <drop-down>
              <button>+</button>
              <ul slot="menu" >
                <li><button @click="${this.toggleWishlist}">${e}</button></li>
                <li><hr /></li>
                <li><button @click="${this.toggleCollection}">${i}</button></li>
              </ul>
            </drop-down>
          </div>
          ${this.collections!==""?f`<h5><span slot="collections">${this.collections}</span></h5>`:""}
          ${this.bodyType!==""?f`<p>Body Type: <span slot="bodyType">${this.bodyType}</span></p>`:""}
          ${this.found!==""?f`<p>Found: <span slot="found">${this.found}</span></p>`:""}
          ${this.pose!==""?f`<p>Pose: <span slot="pose">${this.pose}</span></p>`:""}
          ${this.description!==""?f`<span slot="description">${this.description}</span>`:""}
        </div>
      </div>
    `}_getData(s){const e=new x,t=`/profiles/${s}`;e.get(t).then(i=>i.status===200?i.json():null).then(i=>{this.profile=i})}toggleWishlist(){var s;if(this.user&&this._getData(this.user.username),this.profile&&this.user){const e=this.smiskiName,t=this.profile.wishlist.includes(e);let i;t?i=this.profile.wishlist.filter(r=>r!==e):i=[...this.profile.wishlist,e],this.profile.wishlist=i,this.dispatchMessage({type:"SmiskiWishlistUpdated",userid:(s=this.profile)==null?void 0:s.userid,wishlist:i})}else console.error("Could not update user wishlist.")}toggleCollection(){var s;if(this.user&&this._getData(this.user.username),this.profile&&this.user){const e=this.smiskiName,t=this.profile.smiski_owned.includes(e);let i;t?i=this.profile.smiski_owned.filter(r=>r!==e):i=[...this.profile.smiski_owned,e],this.profile.smiski_owned=i,this.dispatchMessage({type:"SmiskiCollectionUpdated",userid:(s=this.profile)==null?void 0:s.userid,smiski_owned:i})}else console.error("Could not update user collection.")}};$.styles=[m(cs),C`
      ul[slot="menu"] button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }

      h5,
      p {
        margin: 10px 0;
      } 

      .smiski-name-container {
        display: flex;
        align-items: center;
      }

      .smiski-name-container h5 {
        margin-right: 10px;
        width: 80%;
      }
    `];P([g()],$.prototype,"path",2);P([_()],$.prototype,"profile",2);P([q({context:W,subscribe:!0}),g({attribute:!1})],$.prototype,"user",2);P([g({type:String})],$.prototype,"photo",2);P([g({type:String})],$.prototype,"smiskiName",2);P([g({type:String})],$.prototype,"collections",2);P([g({type:String})],$.prototype,"bodyType",2);P([g({type:String})],$.prototype,"found",2);P([g({type:String})],$.prototype,"pose",2);P([g({type:String})],$.prototype,"description",2);$=P([b("display-card")],$);var Yi=Object.defineProperty,Zi=Object.getOwnPropertyDescriptor,Le=(s,e,t,i)=>{for(var r=i>1?void 0:i?Zi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Yi(e,t,r),r};let Q=class extends w{constructor(){super(...arguments),this.user=new y,this.allSmiski=[]}render(){const{smiski_owned:s}=this.profile||{},e=this.allSmiski.filter(t=>s.includes(t.smiskiName));return f`
        <header-bar></header-bar>
        <div class="profile-container">
            <profile-nav selectedLink="collection"></profile-nav>
            <div class="profile-display">
                ${e.map(t=>f`
                    <display-card 
                        photo="${t.photo}"
                        smiskiName="${t.smiskiName}"
                        collections="${t.collections}"
                        bodyType="${t.bodyType}"
                        found="${t.found}"
                        pose="${t.pose}"
                        description="${t.description}"
                    ></display-card>
                `)}
            </div>
        </div>
        `}updated(s){if(console.log("Smiski owned has been updated",s),s.has("user")){const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}async _getData(s){var t,i;const e=new x;try{const r=await e.get(s);if(r.status===200){const n=await r.json();if(this.profile=n,console.log("Smiski owned:",(t=this.profile)==null?void 0:t.smiski_owned),Array.isArray((i=this.profile)==null?void 0:i.smiski_owned)){const o=this.profile.smiski_owned.map(a=>this._fetchSmiskiByName(a)),l=await Promise.all(o);this.allSmiski=l.filter(a=>a!==null)}else console.error("smiski owned is not an array")}else console.error("Failed to fetch user collection data")}catch(r){console.error("Error fetching user collection:",r)}}async _fetchSmiskiByName(s){const e=new x,t=`/smiskis/${s}`;try{const i=await e.get(t);if(i.status===200)return await i.json()}catch(i){console.error("Error fetching Smiski by name:",i)}return null}};Q.styles=[m(R),m(me)];Le([_()],Q.prototype,"profile",2);Le([q({context:W,subscribe:!0}),g({attribute:!1})],Q.prototype,"user",2);Le([_()],Q.prototype,"allSmiski",2);Q=Le([b("user-collections")],Q);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Ie=(s,e,t,i)=>{for(var r=i>1?void 0:i?tr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&er(e,t,r),r};let Y=class extends w{constructor(){super(...arguments),this.user=new y,this.allSmiski=[]}render(){const{wishlist:s}=this.profile||{},e=this.allSmiski.filter(t=>s.includes(t.smiskiName));return f`
        <header-bar></header-bar>
        <div class="profile-container">
            <profile-nav selectedLink="wishlist"></profile-nav>
            <div class="profile-display">
                ${e.map(t=>f`
                    <display-card 
                        photo="${t.photo}"
                        smiskiName="${t.smiskiName}"
                        collections="${t.collections}"
                        bodyType="${t.bodyType}"
                        found="${t.found}"
                        pose="${t.pose}"
                        description="${t.description}"
                    ></display-card>
                `)}
            </div>
        </div>
        `}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}async _getData(s){var t,i;const e=new x;try{const r=await e.get(s);if(r.status===200){const n=await r.json();if(this.profile=n,console.log("Wishlist:",(t=this.profile)==null?void 0:t.wishlist),Array.isArray((i=this.profile)==null?void 0:i.wishlist)){const o=this.profile.wishlist.map(a=>this._fetchSmiskiByName(a)),l=await Promise.all(o);this.allSmiski=l.filter(a=>a!==null)}else console.error("Wishlist is not an array")}else console.error("Failed to fetch profile data")}catch(r){console.error("Error fetching wishlist:",r)}}async _fetchSmiskiByName(s){const e=new x,t=`/smiskis/${s}`;try{const i=await e.get(t);if(i.status===200)return await i.json()}catch(i){console.error("Error fetching Smiski by name:",i)}return null}};Y.styles=[m(R),m(me)];Ie([_()],Y.prototype,"profile",2);Ie([q({context:W,subscribe:!0}),g({attribute:!1})],Y.prototype,"user",2);Ie([_()],Y.prototype,"allSmiski",2);Y=Ie([b("user-wishlist")],Y);var sr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,ve=(s,e,t,i)=>{for(var r=i>1?void 0:i?ir(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&sr(e,t,r),r};let B=class extends w{constructor(){super(...arguments),this.allSmiski=[],this.filteredSmiski=[],this.selectedFilters=[],this.showSpecial=!1}async connectedCallback(){super.connectedCallback(),await this._fetchAllSmiskis()}render(){return f`
            <header-bar></header-bar>
            <div class="container">
                <div class="filter-container">
                    <img class="filter" src="../source-images/smiskis/s1.png" @click="${()=>this.toggleFilter("Series 1")}" alt="Series 1">
                    <img class="filter" src="../source-images/smiskis/s2.png" @click="${()=>this.toggleFilter("Series 2")}" alt="Series 2">
                    <img class="filter" src="../source-images/smiskis/s3.png" @click="${()=>this.toggleFilter("Series 3")}" alt="Series 3">
                    <img class="filter" src="../source-images/smiskis/s4.png" @click="${()=>this.toggleFilter("Series 4")}" alt="Series 4">
                    <img class="special-filter" src="../source-images/smiskis/secret.png" @click="${this.toggleShowSpecial}" alt="Secret">
                </div>
                <div class="profile-container">
                    <div class="card-display">
                        ${this.filteredSmiski.map(s=>f`
                            <display-card 
                                photo="${s.photo}"
                                smiskiName="${s.smiskiName}"
                                collections="${s.collections}"
                                bodyType="${s.bodyType}"
                                found="${s.found}"
                                pose="${s.pose}"
                                description="${s.description}"
                            ></display-card>
                        `)}
                    </div>
                </div>
            </div>
        `}async _fetchAllSmiskis(){const s=new x,e="/smiskis";try{const t=await s.get(e);if(t.status===200){const i=await t.json();return this.allSmiski=i,i}}catch(t){console.error("Error fetching all Smiskis:",t)}return null}toggleFilter(s){this.selectedFilters.indexOf(s)===-1?this.selectedFilters=[...this.selectedFilters,s]:this.selectedFilters=this.selectedFilters.filter(t=>t!==s),this.updateFilteredSmiski()}toggleShowSpecial(){this.showSpecial=!this.showSpecial,this.updateFilteredSmiski()}updateFilteredSmiski(){let s=this.allSmiski;this.selectedFilters.length>0&&(s=s.filter(e=>this.selectedFilters.includes(e.collections))),this.showSpecial&&(s=s.filter(e=>e.special)),this.filteredSmiski=s}};B.styles=[m(R),m(cs),C`
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .filter-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .filter {
            width: 200px;
            height: auto;
            cursor: pointer;
            margin: 10px;
        }
        
        .special-filter {
            width: 100px;
            height: auto;
            cursor: pointer;
            margin: 10px;
        }
    `];ve([_()],B.prototype,"allSmiski",2);ve([_()],B.prototype,"filteredSmiski",2);ve([_()],B.prototype,"selectedFilters",2);ve([_()],B.prototype,"showSpecial",2);B=ve([b("smiski-collection")],B);var rr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,rt=(s,e,t,i)=>{for(var r=i>1?void 0:i?nr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&rr(e,t,r),r};let de=class extends w{constructor(){super(...arguments),this.user=new y}render(){const{userid:s}=this.profile||{};return f`
    <h1>
        <a href="./">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
        </a>
        <a href="/app/smiski">Collections</a>
        <div class="header-title">Smiski World</div>
        <a href="/app/forum">Forum</a>
        <drop-down>
            <svg class="icon">
                <use href="/source-images/icons/icon.svg#icon-profile" />
            </svg>
            <ul slot="menu" class="dropdown" >
                <li><a href="/app/profile/${s}">Profile</a></li>
                <li><hr /></li>
                <li><a href="/app/collection/${s}">Collection</a></li>
                <li><hr /></li>
                <li><a href="/app/wishlist/${s}">Wishlist</a></li>
                <li><hr /></li>
                <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
        </drop-down>
    </h1>`}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new x().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};de.styles=C`
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
  `;rt([_()],de.prototype,"profile",2);rt([q({context:W,subscribe:!0}),g({attribute:!1})],de.prototype,"user",2);de=rt([b("home-header")],de);var or=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,lr=(s,e,t,i)=>{for(var r=i>1?void 0:i?ar(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&or(e,t,r),r};let Xe=class extends w{render(){return f`
                <div class="background-container">
                    <home-header></home-header>
                </div>
            `}};Xe.styles=[m(R),m(Bt)];Xe=lr([b("home-page")],Xe);const cr=window.location.host,hr="/ws";function ur(s,e){const t=new WebSocket(`ws://${cr}${hr}?channel=${s}`);return t.onmessage=i=>{console.log("Received message:",i.data);const r=JSON.parse(i.data);e(r)},{channel:s,socket:t}}function dr(s,e){s.socket.send(JSON.stringify(e))}var pr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,hs=(s,e,t,i)=>{for(var r=i>1?void 0:i?fr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&pr(e,t,r),r};let De=class extends w{constructor(){super(...arguments),this.messages=[]}get username(){var s;return(s=this.getFromModel("user"))==null?void 0:s.username}firstUpdated(){this.connection||(this.connection=ur("chatroom",s=>this._handleMessage(s)),console.log("Connection created",this.connection))}render(){return f`
      <header-bar></header-bar>
      <ul>
        ${this.messages.map(s=>f`
              <li>${s.username}: ${s.text}</li>
            `)}
      </ul>
      <form @submit=${this._handleSubmit}>
        <input name="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>

    `}_handleSubmit(s){var e;if(s.preventDefault(),this.username&&this.connection){const t=s.target,r=((e=new FormData(t).get("text"))==null?void 0:e.toString())||"";dr(this.connection,{username:this.username,text:r}),t.reset()}}_handleMessage(s){console.log("Received message",s),this.messages=this.messages.concat([s])}};De.styles=[m(R),C`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    ul {
      flex: 1;
      overflow-y: auto;
    }

    form {
      display: flex;
      align-items: center;
    }
    
    input[name="text"] {
      flex: 1;
      height: 30%;
      margin-right: 5px;
    }
    
    button[type="submit"] {
      width: 50px;
      height: 30px;
    }
  
    `];hs([_()],De.prototype,"messages",2);De=hs([b("chat-room")],De);const gr=[{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/collection/:userid",component:"user-collections"},{path:"/app/wishlist/:userid",component:"user-wishlist"},{path:"/app/smiski",component:"smiski-collection"},{path:"/app/forum",component:"chat-room"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}],ee=Mi(),mr=ee.update;ee.addMessage("UserLoggedIn",(s,e)=>{const{user:t}=s;return ge({user:t})(e)});ee.addMessage("ProfileSelected",s=>{const{userid:e}=s;return new x().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?ge({profile:t}):Ne)});ee.addMessage("ProfileSaved",s=>{const{userid:e,profile:t}=s;return new fe(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?ge({profile:i}):Ne)});ee.addMessage("SmiskiCollectionUpdated",s=>{const{userid:e,smiski_owned:t}=s;return new fe({smiski_owned:t}).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{if(i)return console.log("Collection Updated:",i),i}).then(i=>i?ge({profile:i}):Ne)});ee.addMessage("SmiskiWishlistUpdated",s=>{const{userid:e,wishlist:t}=s;return new fe({wishlist:t}).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{if(i)return console.log("Wishlist Updated:",i),i}).then(i=>i?ge({profile:i}):Ne)});var _r=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,br=(s,e,t,i)=>{for(var r=i>1?void 0:i?vr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&_r(e,t,r),r};let Qe=class extends os{constructor(){super(mr)}render(){return f`
            <auth-required>
                <vaadin-router .routes=${gr}> </vaadin-router>
            </auth-required>
            `}};Qe.styles=[m(R),m(Bt)];Qe=br([b("smiski-world")],Qe);
