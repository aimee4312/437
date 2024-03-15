(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=globalThis,Xe=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),it=new WeakMap;let Dt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xe&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=it.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&it.set(t,e))}return e}toString(){return this.cssText}};const m=s=>new Dt(typeof s=="string"?s:s+"",void 0,Qe),x=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,i,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[n+1],s[0]);return new Dt(t,s,Qe)},gs=(s,e)=>{if(Xe)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=_e.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},nt=Xe?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return m(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ms,defineProperty:_s,getOwnPropertyDescriptor:vs,getOwnPropertyNames:bs,getOwnPropertySymbols:ys,getPrototypeOf:$s}=Object,M=globalThis,ot=M.trustedTypes,ws=ot?ot.emptyScript:"",Ie=M.reactiveElementPolyfillSupport,te=(s,e)=>s,$e={toAttribute(s,e){switch(e){case Boolean:s=s?ws:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ye=(s,e)=>!ms(s,e),at={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);class q extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=at){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&_s(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=vs(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??at}static _$Ei(){if(this.hasOwnProperty(te("elementProperties")))return;const e=$s(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(te("properties"))){const t=this.properties,r=[...bs(t),...ys(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(nt(i))}else e!==void 0&&t.push(nt(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:$e).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:$e;this._$Em=i,this[i]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ye)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[te("elementProperties")]=new Map,q[te("finalized")]=new Map,Ie==null||Ie({ReactiveElement:q}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis,we=se.trustedTypes,lt=we?we.createPolicy("lit-html",{createHTML:s=>s}):void 0,jt="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,Mt="?"+D,Es=`<${Mt}>`,I=document,ie=()=>I.createComment(""),ne=s=>s===null||typeof s!="object"&&typeof s!="function",Nt=Array.isArray,As=s=>Nt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",He=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ht=/>/g,L=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,dt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Ps=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=Ps(1),z=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),pt=new WeakMap,k=I.createTreeWalker(I,129);function kt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(e):e}const Ss=(s,e)=>{const t=s.length-1,r=[];let i,n=e===2?"<svg>":"",o=ee;for(let l=0;l<t;l++){const a=s[l];let c,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===ee?h[1]==="!--"?o=ct:h[1]!==void 0?o=ht:h[2]!==void 0?(Lt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=L):h[3]!==void 0&&(o=L):o===L?h[0]===">"?(o=i??ee,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?L:h[3]==='"'?dt:ut):o===dt||o===ut?o=L:o===ct||o===ht?o=ee:(o=L,i=void 0);const p=o===L&&s[l+1].startsWith("/>")?" ":"";n+=o===ee?a+Es:u>=0?(r.push(c),a.slice(0,u)+jt+a.slice(u)+D+p):a+D+(u===-2?l:p)}return[kt(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),r]};class oe{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,h]=Ss(e,t);if(this.el=oe.createElement(c,r),k.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=k.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(jt)){const d=h[o++],p=i.getAttribute(u).split(D),N=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:N[2],strings:p,ctor:N[1]==="."?Cs:N[1]==="?"?xs:N[1]==="@"?Rs:Ue}),i.removeAttribute(u)}else u.startsWith(D)&&(a.push({type:6,index:n}),i.removeAttribute(u));if(Lt.test(i.tagName)){const u=i.textContent.split(D),d=u.length-1;if(d>0){i.textContent=we?we.emptyScript:"";for(let p=0;p<d;p++)i.append(u[p],ie()),k.nextNode(),a.push({type:2,index:++n});i.append(u[d],ie())}}}else if(i.nodeType===8)if(i.data===Mt)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(D,u+1))!==-1;)a.push({type:7,index:n}),u+=D.length-1}n++}}static createElement(e,t){const r=I.createElement("template");return r.innerHTML=e,r}}function V(s,e,t=s,r){var o,l;if(e===z)return e;let i=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=ne(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=V(s,i._$AS(s,e.values),i,r)),e}class Os{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??I).importNode(t,!0);k.currentNode=i;let n=k.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new ue(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Us(n,this,e)),this._$AV.push(c),a=r[++l]}o!==(a==null?void 0:a.index)&&(n=k.nextNode(),o++)}return k.currentNode=I,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ue{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),ne(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):As(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=oe.createElement(kt(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Os(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new oe(e)),t}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new ue(this.S(ie()),this.S(ie()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=V(this,e,t,0),o=!ne(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=V(this,l[r+a],t,a),c===z&&(c=this._$AH[a]),o||(o=!ne(c)||c!==this._$AH[a]),c===_?e=_:e!==_&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cs extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class xs extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Rs extends Ue{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??_)===z)return;const r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Us{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const Fe=se.litHtmlPolyfillSupport;Fe==null||Fe(oe,ue),(se.litHtmlVersions??(se.litHtmlVersions=[])).push("3.1.2");const Ts=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new ue(e.insertBefore(ie(),n),n,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}};var Tt;C._$litElement$=!0,C.finalized=!0,(Tt=globalThis.litElementHydrateSupport)==null||Tt.call(globalThis,{LitElement:C});const Be=globalThis.litElementPolyfillSupport;Be==null||Be({LitElement:C});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ye},js=(s=Ds,e,t)=>{const{kind:r,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(t.name,s),r==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,s)},init(l){return l!==void 0&&this.P(o,void 0,s),l}}}if(r==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+r)};function g(s){return(e,t)=>typeof t=="object"?js(s,e,t):((r,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(s){return g({...s,state:!0,attribute:!1})}const R='@import"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";*{font-family:Roboto,sans-serif}body{margin:0;background-color:var(--primary-background);color:var(--secondary-text);height:100vh}a:link,a:visited{color:var(--secondary-text);text-decoration:none}a:hover{color:var(--primary-accent)}input{margin:20px 20px 20px 0;width:100%;height:20%}.dropdown{background-color:var(--primary-accent)}',It="h1{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background-color:transparent;color:var(--secondary-color);margin:0}svg.icon{display:inline;height:2em;width:2em;vertical-align:top;fill:currentColor}a:link,a:visited,a:hover{color:var(--secondary-color);text-decoration:none}.dropdown{background:var(--secondary-color);color:var(--secondary-text);border-radius:15px}.dropdown a:link,.dropdown a:visited,.dropdown a:hover{color:var(--secondary-text)}input[type=text]{border-radius:10px}.background-container{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(/source-images/background/smiski-wallpaper.png);background-size:auto;background-position:center}.container{position:absolute;top:50%;width:60%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center}.searchbar{width:100%;max-width:calc(100% - 3em);height:3em}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=class extends Event{constructor(e,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class{constructor(e,t,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ht(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ms{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ns=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class gt extends Ms{constructor(e,t,r){var i,n;super(t.context!==void 0?t.initialValue:r),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:h}]of this.subscriptions)a.has(c)||(a.add(c),h.dispatchEvent(new Ht(this.context,c,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ns(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ft({context:s}){return(e,t)=>{const r=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){r.set(this,new gt(this,{context:s}))}),{get(){return e.get.call(this)},set(i){var n;return(n=r.get(this))==null||n.setValue(i),e.set.call(this,i)},init(i){var n;return(n=r.get(this))==null||n.setValue(i),i}};{e.constructor.addInitializer(o=>{r.set(o,new gt(o,{context:s}))});const i=Object.getOwnPropertyDescriptor(e,t);let n;if(i===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(l){r.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=i.set;n={...i,set:function(l){r.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F({context:s,subscribe:e}){return(t,r)=>{typeof r=="object"?r.addInitializer(function(){new ft(this,{context:s,callback:i=>{this[r.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new ft(i,{context:s,callback:n=>{i[r]=n},subscribe:e})})}}const Ls=window.location.origin,We="JWT_AUTH_TOKEN",ks="/api",T=class T{constructor(){this.authenticated=!1,this.username="fellow_user",this.signOut=()=>{}}static deauthenticate(e){const t=new T;return console.log("Deauthenticating",e,T._theUser),e===T._theUser&&(localStorage.removeItem(We),T._theUser=t),t}};T._theUser=new T;let b=T;class ae extends b{constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(i).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const r=new ae(e,t);return b._theUser=r,localStorage.setItem(We,e),r}static authenticateFromLocalStorage(e){const t=localStorage.getItem(We);return t?ae.authenticate(t,e):b._theUser}}class de{constructor(e){this._base=ks,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=b._theUser.authenticated,r={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${b._theUser.token}`};return e?{...r,...n}:n}else return e?{...r}:void 0}_url(e){return`${Ls}${this._base}${e}`}}class mt extends de{constructor(e){super(Object.fromEntries(e))}}class O extends de{constructor(){super(void 0)}}var Is=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Te=(s,e,t,r)=>{for(var i=r>1?void 0:r?Hs(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Is(e,t,i),i};let B="auth",K=class extends C{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=ae.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const s=f`
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
    `}_handleLogin(s){s.preventDefault();const e=s.target,t=new FormData(e);new mt(t).base().post("/login").then(i=>{if(i.status===200)return i.json();this.loginStatus=i.status}).then(i=>{if(i){console.log("Authentication:",i.token);const n=ae.authenticate(i.token,()=>this._signOut());this.user=n,this._toggleDialog(!1),this._dispatchUserLoggedIn(n),this.requestUpdate()}})}_dispatchUserLoggedIn(s){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:s}});this.dispatchEvent(e)}_handleRegister(s){s.preventDefault();const e=s.target,t=new FormData(e);new mt(t).base().post("/signup").then(i=>{if(i.status===200)return i.json();this.registerStatus=i.status}).then(i=>{console.log("Registration:",i)})}_toggleDialog(s){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(s?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=b.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};K.styles=x`
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
  `;Te([y()],K.prototype,"loginStatus",2);Te([y()],K.prototype,"registerStatus",2);Te([Ft({context:B}),y()],K.prototype,"user",2);K=Te([v("auth-required")],K);function Ee(s){return s=s||[],Array.isArray(s)?s:[s]}function P(s){return`[Vaadin.Router] ${s}`}function Fs(s){if(typeof s!="object")return String(s);const e=Object.prototype.toString.call(s).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(s)}`:e}const Ae="module",Pe="nomodule",ze=[Ae,Pe];function _t(s){if(!s.match(/.+\.[m]?js$/))throw new Error(P(`Unsupported type for bundle "${s}": .js or .mjs expected.`))}function Bt(s){if(!s||!A(s.path))throw new Error(P('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=s.bundle,t=["component","redirect","bundle"];if(!H(s.action)&&!Array.isArray(s.children)&&!H(s.children)&&!Se(e)&&!t.some(r=>A(s[r])))throw new Error(P(`Expected route config "${s.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(A(e))_t(e);else if(ze.some(r=>r in e))ze.forEach(r=>r in e&&_t(e[r]));else throw new Error(P('Expected route bundle to include either "'+Pe+'" or "'+Ae+'" keys, or both'));s.redirect&&["bundle","component"].forEach(r=>{r in s&&console.warn(P(`Route config "${s.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function vt(s){Ee(s).forEach(e=>Bt(e))}function bt(s,e){let t=document.head.querySelector('script[src="'+s+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",s),e===Ae?t.setAttribute("type",Ae):e===Pe&&t.setAttribute(Pe,""),t.async=!0),new Promise((r,i)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,r(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),i(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function Bs(s){return A(s)?bt(s):Promise.race(ze.filter(e=>e in s).map(e=>bt(s[e],e)))}function re(s,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${s}`,{cancelable:s==="go",detail:e}))}function Se(s){return typeof s=="object"&&!!s}function H(s){return typeof s=="function"}function A(s){return typeof s=="string"}function qt(s){const e=new Error(P(`Page not found (${s.pathname})`));return e.context=s,e.code=404,e}const W=new class{};function qs(s){const e=s.port,t=s.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?s.hostname:s.host;return`${t}//${n}`}function yt(s){if(s.defaultPrevented||s.button!==0||s.shiftKey||s.ctrlKey||s.altKey||s.metaKey)return;let e=s.target;const t=s.composedPath?s.composedPath():s.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||qs(e))!==window.location.origin)return;const{pathname:i,search:n,hash:o}=e;re("go",{pathname:i,search:n,hash:o})&&(s.preventDefault(),s&&s.type==="click"&&window.scrollTo(0,0))}const Ws={activate(){window.document.addEventListener("click",yt)},inactivate(){window.document.removeEventListener("click",yt)}},zs=/Trident/.test(navigator.userAgent);zs&&!H(window.PopStateEvent)&&(window.PopStateEvent=function(s,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(s,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function $t(s){if(s.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;re("go",{pathname:e,search:t,hash:r})}const Vs={activate(){window.addEventListener("popstate",$t)},inactivate(){window.removeEventListener("popstate",$t)}};var Y=Gt,Ks=Ze,Js=Ys,Gs=Vt,Xs=Jt,Wt="/",zt="./",Qs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ze(s,e){for(var t=[],r=0,i=0,n="",o=e&&e.delimiter||Wt,l=e&&e.delimiters||zt,a=!1,c;(c=Qs.exec(s))!==null;){var h=c[0],u=c[1],d=c.index;if(n+=s.slice(i,d),i=d+h.length,u){n+=u[1],a=!0;continue}var p="",N=s[i],cs=c[2],hs=c[3],us=c[4],ge=c[5];if(!a&&n.length){var ke=n.length-1;l.indexOf(n[ke])>-1&&(p=n[ke],n=n.slice(0,ke))}n&&(t.push(n),n="",a=!1);var ds=p!==""&&N!==void 0&&N!==p,ps=ge==="+"||ge==="*",fs=ge==="?"||ge==="*",st=p||o,rt=hs||us;t.push({name:cs||r++,prefix:p,delimiter:st,optional:fs,repeat:ps,partial:ds,pattern:rt?Zs(rt):"[^"+U(st)+"]+?"})}return(n||i<s.length)&&t.push(n+s.substr(i)),t}function Ys(s,e){return Vt(Ze(s,e))}function Vt(s){for(var e=new Array(s.length),t=0;t<s.length;t++)typeof s[t]=="object"&&(e[t]=new RegExp("^(?:"+s[t].pattern+")$"));return function(r,i){for(var n="",o=i&&i.encode||encodeURIComponent,l=0;l<s.length;l++){var a=s[l];if(typeof a=="string"){n+=a;continue}var c=r?r[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(h=o(c[u],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=o(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function U(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Zs(s){return s.replace(/([=!:$/()])/g,"\\$1")}function Kt(s){return s&&s.sensitive?"":"i"}function er(s,e){if(!e)return s;var t=s.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return s}function tr(s,e,t){for(var r=[],i=0;i<s.length;i++)r.push(Gt(s[i],e,t).source);return new RegExp("(?:"+r.join("|")+")",Kt(t))}function sr(s,e,t){return Jt(Ze(s,t),e,t)}function Jt(s,e,t){t=t||{};for(var r=t.strict,i=t.start!==!1,n=t.end!==!1,o=U(t.delimiter||Wt),l=t.delimiters||zt,a=[].concat(t.endsWith||[]).map(U).concat("$").join("|"),c=i?"^":"",h=s.length===0,u=0;u<s.length;u++){var d=s[u];if(typeof d=="string")c+=U(d),h=u===s.length-1&&l.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+U(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?c+=U(d.prefix)+"("+p+")?":c+="(?:"+U(d.prefix)+"("+p+"))?":c+=U(d.prefix)+"("+p+")"}}return n?(r||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(r||(c+="(?:"+o+"(?="+a+"))?"),h||(c+="(?="+o+"|"+a+")")),new RegExp(c,Kt(t))}function Gt(s,e,t){return s instanceof RegExp?er(s,e):Array.isArray(s)?tr(s,e,t):sr(s,e,t)}Y.parse=Ks;Y.compile=Js;Y.tokensToFunction=Gs;Y.tokensToRegExp=Xs;const{hasOwnProperty:rr}=Object.prototype,Ve=new Map;Ve.set("|false",{keys:[],pattern:/(?:)/});function wt(s){try{return decodeURIComponent(s)}catch{return s}}function ir(s,e,t,r,i){t=!!t;const n=`${s}|${t}`;let o=Ve.get(n);if(!o){const c=[];o={keys:c,pattern:Y(s,c,{end:t,strict:s===""})},Ve.set(n,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const h=o.keys[c-1],u=h.name,d=l[c];(d!==void 0||!rr.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(wt):[]:a[u]=d&&wt(d))}return{path:l[0],keys:(r||[]).concat(o.keys),params:a}}function Xt(s,e,t,r,i){let n,o,l=0,a=s.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(s===c)return{done:!0};const h=s.__children=s.__children||s.children;if(!n&&(n=ir(a,e,!h,r,i),n))return{done:!1,value:{route:s,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;l<h.length;){if(!o){const d=h[l];d.parent=s;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Xt(d,e.substr(p),t,n.keys,n.params)}const u=o.next(c);if(!u.done)return{done:!1,value:u.value};o=null,l++}return{done:!0}}}}function nr(s){if(H(s.route.action))return s.route.action(s)}function or(s,e){let t=e;for(;t;)if(t=t.parent,t===s)return!0;return!1}function ar(s){let e=`Path '${s.pathname}' is not properly resolved due to an error.`;const t=(s.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function lr(s,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const i={path:r,route:t};if(!s.chain)s.chain=[];else if(t.parent){let n=s.chain.length;for(;n--&&s.chain[n].route&&s.chain[n].route!==t.parent;)s.chain.pop()}s.chain.push(i)}}class le{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||nr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){vt(e);const t=[...Ee(e)];this.root.__children=t}addRoutes(e){return vt(e),this.root.__children.push(...Ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,A(e)?{pathname:e}:e),r=Xt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let n=null,o=null,l=t;function a(c,h=n.value.route,u){const d=u===null&&n.value.route;return n=o||r.next(d),o=null,!c&&(n.done||!or(h,n.value.route))?(o=n,Promise.resolve(W)):n.done?Promise.reject(qt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,n.value),lr(l,n.value),Promise.resolve(i(l)).then(p=>p!=null&&p!==W?(l.result=p.result||p,l):a(c,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=ar(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}le.pathToRegexp=Y;const{pathToRegexp:Et}=le,At=new Map;function Qt(s,e,t){const r=e.name||e.component;if(r&&(s.has(r)?s.get(r).push(e):s.set(r,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const n=t[i];n.parent=e,Qt(s,n,n.__children||n.children)}}function Pt(s,e){const t=s.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function St(s){let e=s.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function cr(s,e={}){if(!(s instanceof le))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,i)=>{let n=Pt(t,r);if(!n&&(t.clear(),Qt(t,s.root,s.root.__children),n=Pt(t,r),!n))throw new Error(`Route "${r}" not found`);let o=At.get(n.fullPath);if(!o){let a=St(n),c=n.parent;for(;c;){const p=St(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=Et.parse(a),u=Et.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)A(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},At.set(a,o),n.fullPath=a}let l=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let u=0;u<c.length;u++){const d=c[u];o.keys[d]||(a[d]=i[d])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let Ot=[];function hr(s){Ot.forEach(e=>e.inactivate()),s.forEach(e=>e.activate()),Ot=s}const ur=s=>{const e=getComputedStyle(s).getPropertyValue("animation-name");return e&&e!=="none"},dr=(s,e)=>{const t=()=>{s.removeEventListener("animationend",t),e()};s.addEventListener("animationend",t)};function Ct(s,e){return s.classList.add(e),new Promise(t=>{if(ur(s)){const r=s.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;s.setAttribute("style",`position: absolute; ${i}`),dr(s,()=>{s.classList.remove(e),s.removeAttribute("style"),t()})}else s.classList.remove(e),t()})}const pr=256;function qe(s){return s!=null}function fr(s){const e=Object.assign({},s);return delete e.next,e}function E({pathname:s="",search:e="",hash:t="",chain:r=[],params:i={},redirectFrom:n,resolver:o},l){const a=r.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:s,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:n,getUrl:(c={})=>be(j.pathToRegexp.compile(Yt(a))(Object.assign({},i,c)),o)}}function xt(s,e){const t=Object.assign({},s.params);return{redirect:{pathname:e,from:s.pathname,params:t}}}function gr(s,e){e.location=E(s);const t=s.chain.map(r=>r.route).indexOf(s.route);return s.chain[t].element=e,e}function ve(s,e,t){if(H(s))return s.apply(t,e)}function Rt(s,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return ve(t[s],e,t)}}function mr(s,e){if(!Array.isArray(s)&&!Se(s))throw new Error(P(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${s}`));e.__children=[];const t=Ee(s);for(let r=0;r<t.length;r++)Bt(t[r]),e.__children.push(t[r])}function me(s){if(s&&s.length){const e=s[0].parentNode;for(let t=0;t<s.length;t++)e.removeChild(s[t])}}function be(s,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(s.replace(/^\//,""),t).pathname:s}function Yt(s){return s.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class j extends le{constructor(e,t){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&le.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=j.NavigationTrigger;j.setTriggers.apply(j,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=E({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();H(t.children)&&(r=r.then(()=>t.children(fr(e))).then(n=>{!qe(n)&&!H(t.children)&&(n=t.children),mr(n,t)}));const i={redirect:n=>xt(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return ve(t.action,[e,i],t)}).then(n=>{if(qe(n)&&(n instanceof HTMLElement||n.redirect||n===W))return n;if(A(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Bs(t.bundle).then(()=>{},()=>{throw new Error(P(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(qe(n))return n;if(A(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},A(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=E(n),t&&this.__updateBrowserHistory(n,r===1),re("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const l=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),l.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),me(this.__outlet&&this.__outlet.children),this.location=E(Object.assign(i,{resolver:this})),re("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const n=r!==t?r:e,l=be(Yt(r.chain),r.resolver)===r.pathname,a=(c,h=c.route,u)=>c.next(void 0,h,u).then(d=>d===null||d===W?l?c:h.parent!==null?a(c,h.parent,d):d:d);return a(r).then(c=>{if(c===null||c===W)throw qt(n);return c&&c!==W&&c!==r?this.__fullyResolveChain(n,c):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(gr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(P(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Fs(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],i=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),l=a=>xt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,i.length)&&!(r[a].route!==i[a].route||r[a].path!==i[a].path&&r[a].element!==i[a].element||!this.__isReusableElement(r[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===r.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},r[a]);for(let a=0;a<i.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:l},i[a]),r[a].element.location=E(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=E(e,r[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:l},i[a]),i[a].element&&(i[a].element.location=E(e,i[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,i){const n=E(t);return e.then(o=>{if(this.__isLatestRender(t))return Rt("onBeforeLeave",[n,r,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,r,i){const n=E(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return Rt("onBeforeEnter",[n,r,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>pr)throw new Error(P(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(P(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const n=i?"replaceState":"pushState";window.history[n](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const n=t&&t.chain[i].element;if(n)if(n.parentNode===r)e.chain[i].element=n,r=n;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let i=r;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===r&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&me(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(me(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const i=t.chain[r].element;if(i)try{const n=E(e);ve(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&me(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},i=E(e,e.chain[t].route);ve(r.onAfterEnter,[i,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],n=e.chain;let o;for(let l=n.length;l>0;l--)if(n[l-1].route.animate){o=n[l-1].route.animate;break}if(t&&r&&o){const l=Se(o)&&o.leave||"leaving",a=Se(o)&&o.enter||"entering";i.push(Ct(t,l)),i.push(Ct(r,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:i}=e?e.detail:window.location;A(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:i},!0))}static setTriggers(...e){hr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=cr(this)),be(this.__urlForName(e,t),this)}urlForPath(e,t){return be(j.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:i}=A(e)?this.__createUrl(e,"http://a"):e;return re("go",{pathname:t,search:r,hash:i})}}const _r=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ye=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function vr(){function s(){return!0}return Zt(s)}function br(){try{return yr()?!0:$r()?ye?!wr():!vr():!1}catch{return!1}}function yr(){return localStorage.getItem("vaadin.developmentmode.force")}function $r(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function wr(){return!!(ye&&Object.keys(ye).map(e=>ye[e]).filter(e=>e.productionMode).length>0)}function Zt(s,e){if(typeof s!="function")return;const t=_r.exec(s.toString());if(t)try{s=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return s(e)}window.Vaadin=window.Vaadin||{};const Ut=function(s,e){if(window.Vaadin.developmentMode)return Zt(s,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=br());function Er(){}const Ar=function(){if(typeof Ut=="function")return Ut(Er)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ar();j.NavigationTrigger={POPSTATE:Vs,CLICK:Ws};var Pr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,es=(s,e,t,r)=>{for(var i=r>1?void 0:r?Sr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Pr(e,t,i),i};let Ke=class extends C{constructor(){super(...arguments),this.router=new j(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};es([g({attribute:!1})],Ke.prototype,"routes",2);Ke=es([v("vaadin-router")],Ke);let Or=class extends C{constructor(e,t,r){super(),this.updateFn=e,this.getModel=t,this.setModel=r,this.addEventListener("mvu:message",i=>{const n=i.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),r=t;typeof(r==null?void 0:r.then)=="function"?r.then(i=>{const n=i(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},Cr=class extends C{dispatchMessage(e,t=this){const r=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(r)}};class xr{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:r}=t,i=this._handlers.get(r);return i?i(t,e):e}}function Rr(s){return e=>Object.assign({},e,s)}function Ur(s){return s}var Tr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,ts=(s,e,t,r)=>{for(var i=r>1?void 0:r?Dr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Tr(e,t,i),i};const ss="ChromaWaveModel",jr={user:new b};class rs extends Or{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=jr}}ts([Ft({context:ss}),y()],rs.prototype,"model",2);class w extends Cr{getFromModel(e){if(this._model)return this._model[e]}}ts([F({context:ss,subscribe:!0}),g({attribute:!1})],w.prototype,"_model",2);const Mr=()=>new xr,pe=Rr,De=Ur,fe="body{height:100%}.display-name{grid-column:3;font-size:3em;margin:0;height:10%}.img-change{grid-column:2}.name{padding:10%;font-size:2em}.profile-container{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,100px)}.profile-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.profile-display a{display:inline-block;width:100%}.profile-img{box-sizing:border-box;border-radius:150px;border:2px solid var(--primary-accent);width:40%;margin-top:10%;margin-left:10%}.profile-navbar{grid-column:1 / 5;grid-row:1 / span 10;height:100vh;background-color:var(--primary-accent)}.selected-prof-nav{grid-column:1 / 2;grid-row:2;background-color:var(--secondary-color);border-top-right-radius:20px;border-bottom-right-radius:20px}.text-input{grid-column:3;grid-row:2}";var Nr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,is=(s,e,t,r)=>{for(var i=r>1?void 0:r?Lr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Nr(e,t,i),i};let Oe=class extends w{get profile(){return this.using||{}}render(){const{name:s,email:e}=this.profile||{};return f`
      <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${s}/>
          <span>Email</span>
          <input name="email" value=${e}/>
          <button type="submit">Submit</button
        </label>
      </form>
    `}_handleSubmit(s){var e;if(s.preventDefault(),console.log("Handle submit"),this.profile){const t=s.target,r=new FormData(t);let i=Array.from(r.entries()).map(([o,l])=>l===""?[o]:[o,l]);const n=Object.fromEntries(i);console.log("Submitting Form",n),this.dispatchMessage({type:"ProfileSaved",userid:(e=this.profile)==null?void 0:e.userid,profile:n})}}};Oe.styles=[m(R),m(fe),x`
    input {
      margin: 10px;
      margin-left: 0;
      width: 300px;
      height: 10%
    }
  
  `];is([g({attribute:!1})],Oe.prototype,"using",2);Oe=is([v("profile-form")],Oe);var kr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,et=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ir(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&kr(e,t,i),i};let ce=class extends w{constructor(){super(...arguments),this.user=new b}render(){const{userid:s}=this.profile||{};return f`
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
              <li><a href="/app/collection">Collection/${s}</a></li>
              <li><hr /></li>
              <li><a href="/app/wishlist">Wishlis/${s}</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
          </ul>
      </drop-down>
    </h1>`}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new O().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_toggleDarkMode(s){const e=s.target,t=document.body;e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_signOut(){console.log("Signout"),this.user.signOut()}};ce.styles=x`
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
  `;et([y()],ce.prototype,"profile",2);et([F({context:B,subscribe:!0}),g({attribute:!1})],ce.prototype,"user",2);ce=et([v("header-bar")],ce);var Hr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,je=(s,e,t,r)=>{for(var i=r>1?void 0:r?Fr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Hr(e,t,i),i};let J=class extends w{constructor(){super(...arguments),this.user=new b}render(){const{name:s,userid:e}=this.profile||{};return f`
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
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
        `}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new O().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}};J.styles=[m(fe),m(R)];je([y()],J.prototype,"profile",2);je([F({context:B,subscribe:!0}),g({attribute:!1})],J.prototype,"user",2);je([g({type:String})],J.prototype,"selectedLink",2);J=je([v("profile-nav")],J);var Br=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Me=(s,e,t,r)=>{for(var i=r>1?void 0:r?qr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Br(e,t,i),i};let G=class extends w{get userid(){var s;return(s=this.location)==null?void 0:s.params.userid}get profile(){return this.getFromModel("profile")}attributeChangedCallback(s,e,t){s==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(s,e,t)}render(){const{name:s}=this.profile||{};return f`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav selectedLink="profile"></profile-nav>
        <p class="display-name">${s}</p>
        <profile-form .using=${this.profile}></profile-form>
      </div>
    `}};G.styles=[m(R),m(fe),x`

  profile-form {
    grid-column: 3;
    grid-row: 3;
    margin-top: 20px;
    height: 50%;
  }
  
  `];Me([g({attribute:!1})],G.prototype,"location",2);Me([g({reflect:!0})],G.prototype,"userid",1);Me([g()],G.prototype,"profile",1);G=Me([v("profile-page")],G);var Wr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,ns=(s,e,t,r)=>{for(var i=r>1?void 0:r?zr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Wr(e,t,i),i};let Ce=class extends C{constructor(){super(...arguments),this.open=!1}render(){return f`
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
    `}_handleChange(s){const e=s.target;this._toggle(e==null?void 0:e.checked)}_toggle(s){this.open=s,this._toggleClickAway(s)}_toggleClickAway(s){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};s?document.addEventListener("click",e):document.removeEventListener("click",e)}};Ce.styles=x`
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
  `;ns([g({reflect:!0,type:Boolean})],Ce.prototype,"open",2);Ce=ns([v("drop-down")],Ce);const os=".card{box-shadow:0 4px 8px #0003;transition:.3s;border-radius:5px;height:500px;overflow:hidden}.card-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.container{padding:2px 16px}.card:hover{box-shadow:0 8px 16px #0003}img[slot=image]{width:100%}";var Vr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,S=(s,e,t,r)=>{for(var i=r>1?void 0:r?Kr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Vr(e,t,i),i};let $=class extends w{constructor(){super(...arguments),this.path="",this.photo="",this.smiskiName="",this.collections="",this.bodyType="",this.found="",this.pose="",this.description=""}connectedCallback(){if(this.user){const s=this.user.username;this._getData(s)}super.connectedCallback()}render(){return f`
      <div class="card">
        <slot name="image"></slot>
        <div class="container">
          <img src="${this.photo}" alt="Smiski Image">
          <div class="smiski-name-container">
            ${this.smiskiName!==""?f`<h5><span slot="smiskiName">${this.smiskiName}</span></h5>`:""}
            <drop-down>
              <button>+</button>
              <ul slot="menu" >
                <li><button @click="${this.addToWishlist}">Add to wishlist</button></li>
                <li><hr /></li>
                <li><button @click="${this.addToCollection}">Add to collection</button></li>
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
    `}_getData(s){const e=new O,t=`/profiles/${s}`;console.log("display card profile fetched"),e.get(t).then(r=>r.status===200?r.json():null).then(r=>{this.profile=r})}addToWishlist(){var s;if(this.user){const e=this.user.username;this._getData(e)}if(console.log("profile: ",this.profile),console.log("user: ",this.user),this.profile&&this.user){const e=this.smiskiName,t=[...this.profile.wishlist,e];this.dispatchMessage({type:"SmiskiWishlistUpdated",userid:(s=this.profile)==null?void 0:s.userid,wishlist:t})}else console.error("Could not update user wishlist.")}addToCollection(){var s;if(this.profile&&this.user){const e=this.smiskiName,t=[...this.profile.smiski_owned,e];this.dispatchMessage({type:"SmiskiCollectionUpdated",userid:(s=this.profile)==null?void 0:s.userid,smiski_owned:t})}else console.error("Could not update user collection.")}};$.styles=[m(os),x`
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
    `];S([g()],$.prototype,"path",2);S([y()],$.prototype,"profile",2);S([F({context:B,subscribe:!0}),g({attribute:!1})],$.prototype,"user",2);S([g({type:String})],$.prototype,"photo",2);S([g({type:String})],$.prototype,"smiskiName",2);S([g({type:String})],$.prototype,"collections",2);S([g({type:String})],$.prototype,"bodyType",2);S([g({type:String})],$.prototype,"found",2);S([g({type:String})],$.prototype,"pose",2);S([g({type:String})],$.prototype,"description",2);$=S([v("display-card")],$);var Jr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Ne=(s,e,t,r)=>{for(var i=r>1?void 0:r?Gr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Jr(e,t,i),i};let X=class extends w{constructor(){super(...arguments),this.user=new b,this.allSmiski=[]}render(){const{smiski_owned:s}=this.profile||{},e=this.allSmiski.filter(t=>s.includes(t.smiskiName));return f`
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
        `}updated(s){if(console.log("Smiski owned has been updated",s),s.has("user")){const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}async _getData(s){var t,r;const e=new O;try{const i=await e.get(s);if(i.status===200){const n=await i.json();if(this.profile=n,console.log("Smiski owned:",(t=this.profile)==null?void 0:t.smiski_owned),Array.isArray((r=this.profile)==null?void 0:r.smiski_owned)){const o=this.profile.smiski_owned.map(a=>this._fetchSmiskiByName(a)),l=await Promise.all(o);this.allSmiski=l.filter(a=>a!==null)}else console.error("smiski owned is not an array")}else console.error("Failed to fetch user collection data")}catch(i){console.error("Error fetching user collection:",i)}}async _fetchSmiskiByName(s){const e=new O,t=`/smiskis/${s}`;try{const r=await e.get(t);if(r.status===200)return await r.json()}catch(r){console.error("Error fetching Smiski by name:",r)}return null}};X.styles=[m(R),m(fe)];Ne([y()],X.prototype,"profile",2);Ne([F({context:B,subscribe:!0}),g({attribute:!1})],X.prototype,"user",2);Ne([y()],X.prototype,"allSmiski",2);X=Ne([v("user-collections")],X);var Xr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Le=(s,e,t,r)=>{for(var i=r>1?void 0:r?Qr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Xr(e,t,i),i};let Q=class extends w{constructor(){super(...arguments),this.user=new b,this.allSmiski=[]}render(){const{wishlist:s}=this.profile||{},e=this.allSmiski.filter(t=>s.includes(t.smiskiName));return f`
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
        `}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}async _getData(s){var t,r;const e=new O;try{const i=await e.get(s);if(i.status===200){const n=await i.json();if(this.profile=n,console.log("Wishlist:",(t=this.profile)==null?void 0:t.wishlist),Array.isArray((r=this.profile)==null?void 0:r.wishlist)){const o=this.profile.wishlist.map(a=>this._fetchSmiskiByName(a)),l=await Promise.all(o);this.allSmiski=l.filter(a=>a!==null)}else console.error("Wishlist is not an array")}else console.error("Failed to fetch profile data")}catch(i){console.error("Error fetching wishlist:",i)}}async _fetchSmiskiByName(s){const e=new O,t=`/smiskis/${s}`;try{const r=await e.get(t);if(r.status===200)return await r.json()}catch(r){console.error("Error fetching Smiski by name:",r)}return null}};Q.styles=[m(R),m(fe)];Le([y()],Q.prototype,"profile",2);Le([F({context:B,subscribe:!0}),g({attribute:!1})],Q.prototype,"user",2);Le([y()],Q.prototype,"allSmiski",2);Q=Le([v("user-wishlist")],Q);var Yr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,as=(s,e,t,r)=>{for(var i=r>1?void 0:r?Zr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Yr(e,t,i),i};let xe=class extends w{constructor(){super(...arguments),this.allSmiski=[]}async connectedCallback(){super.connectedCallback(),await this._fetchAllSmiskis()}render(){return console.log("Rendering component: ",this.allSmiski),f`
            <header-bar></header-bar>
            <div class="profile-container">
                <div class="card-display">
                    ${this.allSmiski.map(s=>f`
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
        `}async _fetchAllSmiskis(){const s=new O,e="/smiskis";try{const t=await s.get(e);if(t.status===200){const r=await t.json();return this.allSmiski=r,r}}catch(t){console.error("Error fetching all Smiskis:",t)}return null}};xe.styles=[m(R),m(os),x`
    `];as([y()],xe.prototype,"allSmiski",2);xe=as([v("smiski-collection")],xe);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,tt=(s,e,t,r)=>{for(var i=r>1?void 0:r?ti(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&ei(e,t,i),i};let he=class extends w{constructor(){super(...arguments),this.user=new b}render(){const{userid:s}=this.profile||{};return f`
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
    </h1>`}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new O().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};he.styles=x`
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
  `;tt([y()],he.prototype,"profile",2);tt([F({context:B,subscribe:!0}),g({attribute:!1})],he.prototype,"user",2);he=tt([v("home-header")],he);var si=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ii=(s,e,t,r)=>{for(var i=r>1?void 0:r?ri(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&si(e,t,i),i};let Je=class extends w{render(){return f`
                <div class="background-container">
                    <home-header></home-header>
                </div>
            `}};Je.styles=[m(R),m(It)];Je=ii([v("home-page")],Je);const ni=window.location.host,oi="/ws";function ai(s,e){const t=new WebSocket(`ws://${ni}${oi}?channel=${s}`);return t.onmessage=r=>{console.log("Received message:",r.data);const i=JSON.parse(r.data);e(i)},{channel:s,socket:t}}function li(s,e){s.socket.send(JSON.stringify(e))}var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,ls=(s,e,t,r)=>{for(var i=r>1?void 0:r?hi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&ci(e,t,i),i};let Re=class extends w{constructor(){super(...arguments),this.messages=[]}get username(){var s;return(s=this.getFromModel("user"))==null?void 0:s.username}firstUpdated(){this.connection||(this.connection=ai("chatroom",s=>this._handleMessage(s)),console.log("Connection created",this.connection))}render(){return f`
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

    `}_handleSubmit(s){var e;if(s.preventDefault(),this.username&&this.connection){const t=s.target,i=((e=new FormData(t).get("text"))==null?void 0:e.toString())||"";li(this.connection,{username:this.username,text:i}),t.reset()}}_handleMessage(s){console.log("Received message",s),this.messages=this.messages.concat([s])}};Re.styles=[m(R),x`
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
  
    `];ls([y()],Re.prototype,"messages",2);Re=ls([v("chat-room")],Re);const ui=[{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/collection/:userid",component:"user-collections"},{path:"/app/wishlist/:userid",component:"user-wishlist"},{path:"/app/smiski",component:"smiski-collection"},{path:"/app/forum",component:"chat-room"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}],Z=Mr(),di=Z.update;Z.addMessage("UserLoggedIn",(s,e)=>{const{user:t}=s;return pe({user:t})(e)});Z.addMessage("ProfileSelected",s=>{const{userid:e}=s;return new O().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?pe({profile:t}):De)});Z.addMessage("ProfileSaved",s=>{const{userid:e,profile:t}=s;return new de(t).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{r&&console.log("Profile:",r)}).then(r=>r?pe({profile:r}):De)});Z.addMessage("SmiskiCollectionUpdated",s=>{const{userid:e,smiski_owned:t}=s;return new de({smiski_owned:t}).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{if(r)return console.log("Collection Updated:",r),r}).then(r=>r?pe({profile:r}):De)});Z.addMessage("SmiskiWishlistUpdated",s=>{const{userid:e,wishlist:t}=s;return new de({wishlist:t}).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{if(r)return console.log("Wishlist Updated:",r),r}).then(r=>r?pe({profile:r}):De)});var pi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,gi=(s,e,t,r)=>{for(var i=r>1?void 0:r?fi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&pi(e,t,i),i};let Ge=class extends rs{constructor(){super(di)}render(){return f`
            <auth-required>
                <vaadin-router .routes=${ui}> </vaadin-router>
            </auth-required>
            `}};Ge.styles=[m(R),m(It)];Ge=gi([v("smiski-world")],Ge);
