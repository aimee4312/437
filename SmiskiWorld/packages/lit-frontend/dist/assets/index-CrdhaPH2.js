(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=globalThis,Qe=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),ot=new WeakMap;let Dt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(t,e))}return e}toString(){return this.cssText}};const m=i=>new Dt(typeof i=="string"?i:i+"",void 0,Ye),O=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Dt(t,i,Ye)},_i=(i,e)=>{if(Qe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=be.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},at=Qe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return m(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vi,defineProperty:bi,getOwnPropertyDescriptor:yi,getOwnPropertyNames:$i,getOwnPropertySymbols:wi,getPrototypeOf:Ei}=Object,L=globalThis,lt=L.trustedTypes,Ai=lt?lt.emptyScript:"",He=L.reactiveElementPolyfillSupport,ie=(i,e)=>i,Ee={toAttribute(i,e){switch(e){case Boolean:i=i?Ai:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ze=(i,e)=>!vi(i,e),ct={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:Ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class W extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ct){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&bi(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:n}=yi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ct}static _$Ei(){if(this.hasOwnProperty(ie("elementProperties")))return;const e=Ei(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie("properties"))){const t=this.properties,s=[...$i(t),...wi(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(at(r))}else e!==void 0&&t.push(at(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _i(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var n;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Ee).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Ee;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ze)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[ie("elementProperties")]=new Map,W[ie("finalized")]=new Map,He==null||He({ReactiveElement:W}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis,Ae=se.trustedTypes,ht=Ae?Ae.createPolicy("lit-html",{createHTML:i=>i}):void 0,Nt="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Mt="?"+T,Si=`<${Mt}>`,I=document,ne=()=>I.createComment(""),oe=i=>i===null||typeof i!="object"&&typeof i!="function",jt=Array.isArray,Pi=i=>jt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Fe=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,dt=/>/g,M=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,It=/^(?:script|style|textarea|title)$/i,Ci=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=Ci(1),V=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),gt=new WeakMap,j=I.createTreeWalker(I,129);function Ht(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(e):e}const Oi=(i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":"",o=te;for(let c=0;c<t;c++){const a=i[c];let l,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===te?h[1]==="!--"?o=ut:h[1]!==void 0?o=dt:h[2]!==void 0?(It.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=M):h[3]!==void 0&&(o=M):o===M?h[0]===">"?(o=r??te,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?M:h[3]==='"'?ft:pt):o===ft||o===pt?o=M:o===ut||o===dt?o=te:(o=M,r=void 0);const p=o===M&&i[c+1].startsWith("/>")?" ":"";n+=o===te?a+Si:u>=0?(s.push(l),a.slice(0,u)+Nt+a.slice(u)+T+p):a+T+(u===-2?c:p)}return[Ht(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),s]};class ae{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Oi(e,t);if(this.el=ae.createElement(l,s),j.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=j.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Nt)){const d=h[o++],p=r.getAttribute(u).split(T),N=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:N[2],strings:p,ctor:N[1]==="."?ki:N[1]==="?"?Ri:N[1]==="@"?Ti:Ue}),r.removeAttribute(u)}else u.startsWith(T)&&(a.push({type:6,index:n}),r.removeAttribute(u));if(It.test(r.tagName)){const u=r.textContent.split(T),d=u.length-1;if(d>0){r.textContent=Ae?Ae.emptyScript:"";for(let p=0;p<d;p++)r.append(u[p],ne()),j.nextNode(),a.push({type:2,index:++n});r.append(u[d],ne())}}}else if(r.nodeType===8)if(r.data===Mt)a.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(T,u+1))!==-1;)a.push({type:7,index:n}),u+=T.length-1}n++}}static createElement(e,t){const s=I.createElement("template");return s.innerHTML=e,s}}function K(i,e,t=i,s){var o,c;if(e===V)return e;let r=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=oe(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=K(i,r._$AS(i,e.values),r,s)),e}class xi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??I).importNode(t,!0);j.currentNode=r;let n=j.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new de(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Ui(n,this,e)),this._$AV.push(l),a=s[++c]}o!==(a==null?void 0:a.index)&&(n=j.nextNode(),o++)}return j.currentNode=I,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class de{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),oe(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ae.createElement(Ht(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new xi(r,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=gt.get(e.strings);return t===void 0&&gt.set(e.strings,t=new ae(e)),t}k(e){jt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new de(this.S(ne()),this.S(ne()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(e,t=this,s,r){const n=this.strings;let o=!1;if(n===void 0)e=K(this,e,t,0),o=!oe(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=K(this,c[s+a],t,a),l===V&&(l=this._$AH[a]),o||(o=!oe(l)||l!==this._$AH[a]),l===_?e=_:e!==_&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ki extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Ri extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Ti extends Ue{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??_)===V)return;const s=this._$AH,r=e===_&&s!==_||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==_&&(s===_||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ui{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const Be=se.litHtmlPolyfillSupport;Be==null||Be(ae,de),(se.litHtmlVersions??(se.litHtmlVersions=[])).push("3.1.2");const Li=(i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new de(e.insertBefore(ne(),n),n,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Li(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return V}};var Lt;y._$litElement$=!0,y.finalized=!0,(Lt=globalThis.litElementHydrateSupport)==null||Lt.call(globalThis,{LitElement:y});const qe=globalThis.litElementPolyfillSupport;qe==null||qe({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:Ze},Ni=(i=Di,e,t)=>{const{kind:s,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,i),s==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(s==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function f(i){return(e,t)=>typeof t=="object"?Ni(i,e,t):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(i){return f({...i,state:!0,attribute:!1})}const x='@import"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";*{font-family:Roboto,sans-serif}body{margin:0;background-color:var(--primary-background);color:var(--secondary-text);height:100vh}a:link,a:visited{color:var(--secondary-text);text-decoration:none}a:hover{color:var(--primary-accent)}input{margin:20px 20px 20px 0;width:100%;height:20%}.dropdown{background-color:var(--primary-accent)}',Ft="h1{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background-color:transparent;color:var(--secondary-color);margin:0}svg.icon{display:inline;height:2em;width:2em;vertical-align:top;fill:currentColor}a:link,a:visited,a:hover{color:var(--secondary-color);text-decoration:none}.dropdown{background:var(--secondary-color);color:var(--secondary-text);border-radius:15px}.dropdown a:link,.dropdown a:visited,.dropdown a:hover{color:var(--secondary-text)}input[type=text]{border-radius:10px}.background-container{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(/source-images/background/smiski-wallpaper.png);background-size:auto;background-position:center}.container{position:absolute;top:50%;width:60%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center}.searchbar{width:100%;max-width:calc(100% - 3em);height:3em}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bt=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class{constructor(e,t,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Bt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ji=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class _t extends Mi{constructor(e,t,s){var r,n;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Bt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(r=this.host).addController)==null||n.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ji(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt({context:i}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new _t(this,{context:i}))}),{get(){return e.get.call(this)},set(r){var n;return(n=s.get(this))==null||n.setValue(r),e.set.call(this,r)},init(r){var n;return(n=s.get(this))==null||n.setValue(r),r}};{e.constructor.addInitializer(o=>{s.set(o,new _t(o,{context:i}))});const r=Object.getOwnPropertyDescriptor(e,t);let n;if(r===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){s.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=r.set;n={...r,set:function(c){s.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe({context:i,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new mt(this,{context:i,callback:r=>{this[s.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new mt(r,{context:i,callback:n=>{r[s]=n},subscribe:e})})}}const Wt=window.location.origin,ze="JWT_AUTH_TOKEN",Ii="/api";function Se(i){return`${Wt}${i}`}const R=class R{constructor(){this.authenticated=!1,this.username="fellow_user",this.signOut=()=>{}}static deauthenticate(e){const t=new R;return console.log("Deauthenticating",e,R._theUser),e===R._theUser&&(localStorage.removeItem(ze),R._theUser=t),t}};R._theUser=new R;let S=R;class le extends S{constructor(e,t){super();const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(r).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const s=new le(e,t);return S._theUser=s,localStorage.setItem(ze,e),s}static authenticateFromLocalStorage(e){const t=localStorage.getItem(ze);return t?le.authenticate(t,e):S._theUser}}class C{constructor(e){this._base=Ii,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=S._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${S._theUser.token}`};return e?{...s,...n}:n}else return e?{...s}:void 0}_url(e){return`${Wt}${this._base}${e}`}}class vt extends C{constructor(e){super(Object.fromEntries(e))}}class et extends C{constructor(){super(void 0)}}var Hi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Le=(i,e,t,s)=>{for(var r=s>1?void 0:s?Fi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Hi(e,t,r),r};let fe="auth",J=class extends y{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=le.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const i=g`
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
    `;return g`
      ${this.isAuthenticated()?"":i}
      <slot></slot>
    `}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new vt(t).base().post("/login").then(r=>{if(r.status===200)return r.json();this.loginStatus=r.status}).then(r=>{if(r){console.log("Authentication:",r.token);const n=le.authenticate(r.token,()=>this._signOut());this.user=n,this._toggleDialog(!1),this._dispatchUserLoggedIn(n),this.requestUpdate()}})}_dispatchUserLoggedIn(i){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:i}});this.dispatchEvent(e)}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new vt(t).base().post("/signup").then(r=>{if(r.status===200)return r.json();this.registerStatus=r.status}).then(r=>{console.log("Registration:",r)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=S.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};J.styles=O`
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
  `;Le([v()],J.prototype,"loginStatus",2);Le([v()],J.prototype,"registerStatus",2);Le([qt({context:fe}),v()],J.prototype,"user",2);J=Le([b("auth-required")],J);function Pe(i){return i=i||[],Array.isArray(i)?i:[i]}function A(i){return`[Vaadin.Router] ${i}`}function Bi(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const Ce="module",Oe="nomodule",Ve=[Ce,Oe];function bt(i){if(!i.match(/.+\.[m]?js$/))throw new Error(A(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function zt(i){if(!i||!E(i.path))throw new Error(A('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!H(i.action)&&!Array.isArray(i.children)&&!H(i.children)&&!xe(e)&&!t.some(s=>E(i[s])))throw new Error(A(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(E(e))bt(e);else if(Ve.some(s=>s in e))Ve.forEach(s=>s in e&&bt(e[s]));else throw new Error(A('Expected route bundle to include either "'+Oe+'" or "'+Ce+'" keys, or both'));i.redirect&&["bundle","component"].forEach(s=>{s in i&&console.warn(A(`Route config "${i.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function yt(i){Pe(i).forEach(e=>zt(e))}function $t(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===Ce?t.setAttribute("type",Ce):e===Oe&&t.setAttribute(Oe,""),t.async=!0),new Promise((s,r)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,s(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),r(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function qi(i){return E(i)?$t(i):Promise.race(Ve.filter(e=>e in i).map(e=>$t(i[e],e)))}function re(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function xe(i){return typeof i=="object"&&!!i}function H(i){return typeof i=="function"}function E(i){return typeof i=="string"}function Vt(i){const e=new Error(A(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const z=new class{};function Wi(i){const e=i.port,t=i.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${n}`}function wt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Wi(e))!==window.location.origin)return;const{pathname:r,search:n,hash:o}=e;re("go",{pathname:r,search:n,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const zi={activate(){window.document.addEventListener("click",wt)},inactivate(){window.document.removeEventListener("click",wt)}},Vi=/Trident/.test(navigator.userAgent);Vi&&!H(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Et(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;re("go",{pathname:e,search:t,hash:s})}const Ki={activate(){window.addEventListener("popstate",Et)},inactivate(){window.removeEventListener("popstate",Et)}};var Z=Yt,Ji=tt,Gi=Zi,Xi=Gt,Qi=Qt,Kt="/",Jt="./",Yi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function tt(i,e){for(var t=[],s=0,r=0,n="",o=e&&e.delimiter||Kt,c=e&&e.delimiters||Jt,a=!1,l;(l=Yi.exec(i))!==null;){var h=l[0],u=l[1],d=l.index;if(n+=i.slice(r,d),r=d+h.length,u){n+=u[1],a=!0;continue}var p="",N=i[r],ui=l[2],di=l[3],pi=l[4],_e=l[5];if(!a&&n.length){var Ie=n.length-1;c.indexOf(n[Ie])>-1&&(p=n[Ie],n=n.slice(0,Ie))}n&&(t.push(n),n="",a=!1);var fi=p!==""&&N!==void 0&&N!==p,gi=_e==="+"||_e==="*",mi=_e==="?"||_e==="*",rt=p||o,nt=di||pi;t.push({name:ui||s++,prefix:p,delimiter:rt,optional:mi,repeat:gi,partial:fi,pattern:nt?es(nt):"[^"+k(rt)+"]+?"})}return(n||r<i.length)&&t.push(n+i.substr(r)),t}function Zi(i,e){return Gt(tt(i,e))}function Gt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(s,r){for(var n="",o=r&&r.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){n+=a;continue}var l=s?s[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(h=o(l[u],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function k(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function es(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Xt(i){return i&&i.sensitive?"":"i"}function ts(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function is(i,e,t){for(var s=[],r=0;r<i.length;r++)s.push(Yt(i[r],e,t).source);return new RegExp("(?:"+s.join("|")+")",Xt(t))}function ss(i,e,t){return Qt(tt(i,t),e,t)}function Qt(i,e,t){t=t||{};for(var s=t.strict,r=t.start!==!1,n=t.end!==!1,o=k(t.delimiter||Kt),c=t.delimiters||Jt,a=[].concat(t.endsWith||[]).map(k).concat("$").join("|"),l=r?"^":"",h=i.length===0,u=0;u<i.length;u++){var d=i[u];if(typeof d=="string")l+=k(d),h=u===i.length-1&&c.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+k(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=k(d.prefix)+"("+p+")?":l+="(?:"+k(d.prefix)+"("+p+"))?":l+=k(d.prefix)+"("+p+")"}}return n?(s||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(s||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Xt(t))}function Yt(i,e,t){return i instanceof RegExp?ts(i,e):Array.isArray(i)?is(i,e,t):ss(i,e,t)}Z.parse=Ji;Z.compile=Gi;Z.tokensToFunction=Xi;Z.tokensToRegExp=Qi;const{hasOwnProperty:rs}=Object.prototype,Ke=new Map;Ke.set("|false",{keys:[],pattern:/(?:)/});function At(i){try{return decodeURIComponent(i)}catch{return i}}function ns(i,e,t,s,r){t=!!t;const n=`${i}|${t}`;let o=Ke.get(n);if(!o){const l=[];o={keys:l,pattern:Z(i,l,{end:t,strict:i===""})},Ke.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=o.keys[l-1],u=h.name,d=c[l];(d!==void 0||!rs.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(At):[]:a[u]=d&&At(d))}return{path:c[0],keys:(s||[]).concat(o.keys),params:a}}function Zt(i,e,t,s,r){let n,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!n&&(n=ns(a,e,!h,s,r),n))return{done:!1,value:{route:i,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const d=h[c];d.parent=i;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Zt(d,e.substr(p),t,n.keys,n.params)}const u=o.next(l);if(!u.done)return{done:!1,value:u.value};o=null,c++}return{done:!0}}}}function os(i){if(H(i.route.action))return i.route.action(i)}function as(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function ls(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function cs(i,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const r={path:s,route:t};if(!i.chain)i.chain=[];else if(t.parent){let n=i.chain.length;for(;n--&&i.chain[n].route&&i.chain[n].route!==t.parent;)i.chain.pop()}i.chain.push(r)}}class ce{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||os,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){yt(e);const t=[...Pe(e)];this.root.__children=t}addRoutes(e){return yt(e),this.root.__children.push(...Pe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,E(e)?{pathname:e}:e),s=Zt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,u){const d=u===null&&n.value.route;return n=o||s.next(d),o=null,!l&&(n.done||!as(h,n.value.route))?(o=n,Promise.resolve(z)):n.done?Promise.reject(Vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),cs(c,n.value),Promise.resolve(r(c)).then(p=>p!=null&&p!==z?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=ls(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}ce.pathToRegexp=Z;const{pathToRegexp:St}=ce,Pt=new Map;function ei(i,e,t){const s=e.name||e.component;if(s&&(i.has(s)?i.get(s).push(e):i.set(s,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const n=t[r];n.parent=e,ei(i,n,n.__children||n.children)}}function Ct(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Ot(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function hs(i,e={}){if(!(i instanceof ce))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,r)=>{let n=Ct(t,s);if(!n&&(t.clear(),ei(t,i.root,i.root.__children),n=Ct(t,s),!n))throw new Error(`Route "${s}" not found`);let o=Pt.get(n.fullPath);if(!o){let a=Ot(n),l=n.parent;for(;l;){const p=Ot(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=St.parse(a),u=St.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)E(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},Pt.set(a,o),n.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let u=0;u<l.length;u++){const d=l[u];o.keys[d]||(a[d]=r[d])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let xt=[];function us(i){xt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),xt=i}const ds=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},ps=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function kt(i,e){return i.classList.add(e),new Promise(t=>{if(ds(i)){const s=i.getBoundingClientRect(),r=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;i.setAttribute("style",`position: absolute; ${r}`),ps(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const fs=256;function We(i){return i!=null}function gs(i){const e=Object.assign({},i);return delete e.next,e}function w({pathname:i="",search:e="",hash:t="",chain:s=[],params:r={},redirectFrom:n,resolver:o},c){const a=s.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:n,getUrl:(l={})=>$e(U.pathToRegexp.compile(ti(a))(Object.assign({},r,l)),o)}}function Rt(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function ms(i,e){e.location=w(i);const t=i.chain.map(s=>s.route).indexOf(i.route);return i.chain[t].element=e,e}function ye(i,e,t){if(H(i))return i.apply(t,e)}function Tt(i,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return ye(t[i],e,t)}}function _s(i,e){if(!Array.isArray(i)&&!xe(i))throw new Error(A(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=Pe(i);for(let s=0;s<t.length;s++)zt(t[s]),e.__children.push(t[s])}function ve(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function $e(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function ti(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class U extends ce{constructor(e,t){const s=document.head.querySelector("base"),r=s&&s.getAttribute("href");super([],Object.assign({baseUrl:r&&ce.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=U.NavigationTrigger;U.setTriggers.apply(U,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=w({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();H(t.children)&&(s=s.then(()=>t.children(gs(e))).then(n=>{!We(n)&&!H(t.children)&&(n=t.children),_s(n,t)}));const r={redirect:n=>Rt(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return s.then(()=>{if(this.__isLatestRender(e))return ye(t.action,[e,r],t)}).then(n=>{if(We(n)&&(n instanceof HTMLElement||n.redirect||n===z))return n;if(E(t.redirect))return r.redirect(t.redirect);if(t.bundle)return qi(t.bundle).then(()=>{},()=>{throw new Error(A(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(We(n))return n;if(E(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},E(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(r).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=w(n),t&&this.__updateBrowserHistory(n,s===1),re("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ve(this.__outlet&&this.__outlet.children),this.location=w(Object.assign(r,{resolver:this})),re("error",Object.assign({router:this,error:n},r)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const n=s!==t?s:e,c=$e(ti(s.chain),s.resolver)===s.pathname,a=(l,h=l.route,u)=>l.next(void 0,h,u).then(d=>d===null||d===z?c?l:h.parent!==null?a(l,h.parent,d):d:d);return a(s).then(l=>{if(l===null||l===z)throw Vt(n);return l&&l!==z&&l!==s?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(ms(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(A(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Bi(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],r=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Rt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,r.length)&&!(s[a].route!==r[a].route||s[a].path!==r[a].path&&s[a].element!==r[a].element||!this.__isReusableElement(s[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===s.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a]);for(let a=0;a<r.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),s[a].element.location=w(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=w(e,s[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=w(e,r[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,r){const n=w(t);return e.then(o=>{if(this.__isLatestRender(t))return Tt("onBeforeLeave",[n,s,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,s,r){const n=w(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Tt("onBeforeEnter",[n,s,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>fs)throw new Error(A(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(A(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const n=r?"replaceState":"pushState";window.history[n](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const n=t&&t.chain[r].element;if(n)if(n.parentNode===s)e.chain[r].element=n,s=n;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let r=s;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===s&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const r=t.chain[s].element;if(r)try{const n=w(e);ye(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ve(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},r=w(e,e.chain[t].route);ye(s.onAfterEnter,[r,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],r=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&s&&o){const c=xe(o)&&o.leave||"leaving",a=xe(o)&&o.enter||"entering";r.push(kt(t,c)),r.push(kt(s,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:r}=e?e.detail:window.location;E(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:r},!0))}static setTriggers(...e){us(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=hs(this)),$e(this.__urlForName(e,t),this)}urlForPath(e,t){return $e(U.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:r}=E(e)?this.__createUrl(e,"http://a"):e;return re("go",{pathname:t,search:s,hash:r})}}const vs=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,we=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function bs(){function i(){return!0}return ii(i)}function ys(){try{return $s()?!0:ws()?we?!Es():!bs():!1}catch{return!1}}function $s(){return localStorage.getItem("vaadin.developmentmode.force")}function ws(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Es(){return!!(we&&Object.keys(we).map(e=>we[e]).filter(e=>e.productionMode).length>0)}function ii(i,e){if(typeof i!="function")return;const t=vs.exec(i.toString());if(t)try{i=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(e)}window.Vaadin=window.Vaadin||{};const Ut=function(i,e){if(window.Vaadin.developmentMode)return ii(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ys());function As(){}const Ss=function(){if(typeof Ut=="function")return Ut(As)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ss();U.NavigationTrigger={POPSTATE:Ki,CLICK:zi};var Ps=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,si=(i,e,t,s)=>{for(var r=s>1?void 0:s?Cs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Ps(e,t,r),r};let Je=class extends y{constructor(){super(...arguments),this.router=new U(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};si([f({attribute:!1})],Je.prototype,"routes",2);Je=si([b("vaadin-router")],Je);let Os=class extends y{constructor(e,t,s){super(),this.updateFn=e,this.getModel=t,this.setModel=s,this.addEventListener("mvu:message",r=>{const n=r.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(r=>{const n=r(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},xs=class extends y{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class ks{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,r=this._handlers.get(s);return r?r(t,e):e}}function Rs(i){return e=>Object.assign({},e,i)}function Ts(i){return i}var Us=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,ri=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ls(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Us(e,t,r),r};const ni="ChromaWaveModel",Ds={user:new S};class oi extends Os{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Ds}}ri([qt({context:ni}),v()],oi.prototype,"model",2);class B extends xs{getFromModel(e){if(this._model)return this._model[e]}}ri([pe({context:ni,subscribe:!0}),f({attribute:!1})],B.prototype,"_model",2);const Ns=()=>new ks,q=Rs,ee=Ts,ge="body{height:100%}.display-name{grid-column:3;font-size:3em;margin:0;height:10%}.img-change{grid-column:2}.name{padding:10%;font-size:2em}.profile-container{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,100px)}.profile-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.profile-display a{display:inline-block;width:100%}.profile-img{box-sizing:border-box;border-radius:150px;border:2px solid var(--primary-accent);width:40%;margin-top:10%;margin-left:10%}.profile-navbar{grid-column:1 / 5;grid-row:1 / span 10;height:100vh;background-color:var(--primary-accent)}.selected-prof-nav{grid-column:1 / 2;grid-row:2;background-color:var(--secondary-color);border-top-right-radius:20px;border-bottom-right-radius:20px}.text-input{grid-column:3;grid-row:2}";var Ms=Object.defineProperty,js=Object.getOwnPropertyDescriptor,De=(i,e,t,s)=>{for(var r=s>1?void 0:s?js(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Ms(e,t,r),r};let G=class extends y{constructor(){super(...arguments),this.path=""}connectedCallback(){this.path&&this._getData(this.path),super.connectedCallback()}attributeChangedCallback(i,e,t){i==="path"&&e!==t&&e&&this._getData(t),super.attributeChangedCallback(i,e,t)}updated(i){return console.log("updated Profile Form",i),i.get("authenticatedUser")&&this._getData(this.path),!0}render(){const{name:i,email:e}=this.profile||{};return g`
      <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${i}/>
          <span>Email</span>
          <input name="email" value=${e}/>
          <button type="submit">Submit</button
        </label>
      </form>
    `}_getData(i){new et().get(i).then(t=>t.status===200?t.json():null).then(t=>{this.profile=t})}_handleChange(i){const e=i.target,t=e.name,s=e.value;let r=this.profile;console.log("Changed",t,s),r[t]=s,this.profile=r}_handleSubmit(i){i.preventDefault(),new C(this.profile).put(this.path).then(t=>t.status===200?t.json():null).then(t=>{t&&(console.log("PUT request successful:",t),this.profile=t)}).catch(t=>console.log("Failed to POST form data",t))}};G.styles=[m(x),m(ge),O`
    input {
      margin: 10px;
      margin-left: 0;
      width: 300px;
      height: 10%
    }
  
  `];De([f()],G.prototype,"path",2);De([v()],G.prototype,"profile",2);De([pe({context:fe,subscribe:!0}),f({attribute:!1})],G.prototype,"user",2);G=De([b("profile-form")],G);var Is=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,it=(i,e,t,s)=>{for(var r=s>1?void 0:s?Hs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Is(e,t,r),r};let he=class extends y{constructor(){super(...arguments),this.user=new S}render(){return g`
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
              <li><a href="/app/profile/aimee4312">Profile</a></li>
              <li><hr /></li>
              <li><a href="/app/collection">Collection</a></li>
              <li><hr /></li>
              <li><a href="/app/wishlist">Wishlist</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
          </ul>
      </drop-down>
    </h1>`}_toggleDarkMode(i){const e=i.target,t=document.body;e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_signOut(){console.log("Signout"),this.user.signOut()}};he.styles=O`
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
  `;it([v()],he.prototype,"profile",2);it([pe({context:fe,subscribe:!0}),f({attribute:!1})],he.prototype,"user",2);he=it([b("header-bar")],he);var Fs=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,me=(i,e,t,s)=>{for(var r=s>1?void 0:s?Bs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Fs(e,t,r),r};let F=class extends y{get userid(){var i;return(i=this.location)==null?void 0:i.params.userid}constructor(){super(),this._handleLinkClick=this._handleLinkClick.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("click",this._handleLinkClick)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("click",this._handleLinkClick)}render(){return g`
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
                <div class="name ${this.selectedLink==="profile"?"selected-prof-nav":""}">
                    <a href="/app/profile/aimee4312">Aimee</a>
                </div>
                <div class="saved-songs name ${this.selectedLink==="collection"?"selected-prof-nav":""}">
                    <a href="/app/collection">Collection</a>
                </div>
                <div class="name ${this.selectedLink==="wishlist"?"selected-prof-nav":""}">
                    <a href="/app/wishlist">Wishlist</a>
                </div>
            </div>
        `}_handleLinkClick(i){var t;const e=i.target;if(e.tagName==="A"&&((t=e.getAttribute("href"))!=null&&t.startsWith("./"))){i.preventDefault();const s=e.getAttribute("href")||"";history.pushState({},"",s)}}};F.styles=[m(ge),m(x)];me([v()],F.prototype,"profile",2);me([f({attribute:!1})],F.prototype,"location",2);me([f({reflect:!0})],F.prototype,"userid",1);me([f({type:String})],F.prototype,"selectedLink",2);F=me([b("profile-nav")],F);var qs=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,ai=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ws(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&qs(e,t,r),r};let ke=class extends B{get profile(){return this.using||{}}render(){return g`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav selectedLink="profile"></profile-nav>
        <p class="display-name">Aimee</p>
        <profile-form path="/profiles/aimee4312"></profile-form>
      </div>
    `}};ke.styles=[m(x),m(ge),O`

  profile-form {
    grid-column: 3;
    grid-row: 3;
    margin-top: 20px;
    height: 50%;
  }
  
  `];ai([v()],ke.prototype,"newAvatar",2);ke=ai([b("profile-page")],ke);var zs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,li=(i,e,t,s)=>{for(var r=s>1?void 0:s?Vs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&zs(e,t,r),r};let Re=class extends y{constructor(){super(...arguments),this.open=!1}render(){return g`
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
    `}_handleChange(i){const e=i.target;this._toggle(e==null?void 0:e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};Re.styles=O`
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
  `;li([f({reflect:!0,type:Boolean})],Re.prototype,"open",2);Re=li([b("drop-down")],Re);const ci=".card{box-shadow:0 4px 8px #0003;transition:.3s;border-radius:5px;height:450px;overflow:hidden}.card-display{grid-column:2 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem;margin:5%}.container{padding:2px 16px}.card:hover{box-shadow:0 8px 16px #0003}img[slot=image]{width:100%}";var Ks=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,P=(i,e,t,s)=>{for(var r=s>1?void 0:s?Js(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Ks(e,t,r),r};let $=class extends y{constructor(){super(...arguments),this.path="",this.photo="",this.smiskiName="",this.collections="",this.bodyType="",this.found="",this.pose="",this.description=""}connectedCallback(){this.path&&this._getData(this.path),super.connectedCallback()}render(){return g`
      <div class="card">
        <slot name="image"></slot>
        <div class="container">
          <img src="${this.photo}" alt="Smiski Image">
          <div class="smiski-name-container">
            <h5><span slot="smiskiName">${this.smiskiName}</span></h5>
            <drop-down>
              <button>+</button>
              <ul slot="menu" >
                <li><button @click="${this.addToWishlist}">Add to wishlist</button></li>
                <li><hr /></li>
                <li><button @click="${this.addToCollection}">Add to collection</button></li>
              </ul>
          </drop-down>
          </div>
          <h5><span slot="collections">${this.collections}</span></h5>
          <p>Body Type: <span slot="bodyType">${this.bodyType}</span></p>
          <p>Found: <span slot="found">${this.found}</span></p>
          <p>Pose: <span slot="pose">${this.pose}</span></p>
          <span slot="description">${this.description}</span>
        </div>
      </div>
    `}_getData(i){new et().get(i).then(t=>t.status===200?t.json():null).then(t=>{this.profile=t})}addToWishlist(){new C(this.user).put(this.path).then(e=>{e.status===200?console.log("Added to wishlist successfully"):console.log("Failed to add to wishlist")}).catch(e=>console.error("Error adding to wishlist:",e))}addToCollection(){new C(this.user).put(this.path).then(e=>{e.status===200?console.log("Added to collection successfully"):console.log("Failed to add to collection")}).catch(e=>console.error("Error adding to collection:",e))}};$.styles=[m(ci),O`
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
    `];P([f()],$.prototype,"path",2);P([v()],$.prototype,"profile",2);P([pe({context:fe,subscribe:!0}),f({attribute:!1})],$.prototype,"user",2);P([f({type:String})],$.prototype,"photo",2);P([f({type:String})],$.prototype,"smiskiName",2);P([f({type:String})],$.prototype,"collections",2);P([f({type:String})],$.prototype,"bodyType",2);P([f({type:String})],$.prototype,"found",2);P([f({type:String})],$.prototype,"pose",2);P([f({type:String})],$.prototype,"description",2);$=P([b("display-card")],$);var Gs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,Ne=(i,e,t,s)=>{for(var r=s>1?void 0:s?Xs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Gs(e,t,r),r};let X=class extends B{constructor(){super(...arguments),this.path="",this.allSmiski=[]}connectedCallback(){this.allSmiski=[{smiskiName:"Smiski Hugging Knees",collections:"Series 1",photo:"/source-images/smiskis/huggingknees.png",special:!1,bodyType:"Normal",found:"In corners of a room",pose:"Kneeling",description:"Always in the corner hugging onto the knees, staring out into the distance pensive in thought."},{smiskiName:"Smiski Looking Back",collections:"Series 1",photo:"/source-images/smiskis/lookingback.png",special:!1,bodyType:"Chubby",found:"In corners of a room",pose:"Looking back",description:"A Smiski that scares easily. When found, it will turn back and stare at you in surprise."}],super.connectedCallback()}attributeChangedCallback(i,e,t){i==="path"&&e!==t&&e&&this._fetchData(t),super.attributeChangedCallback(i,e,t)}render(){return g`
        <header-bar></header-bar>
        <div class="profile-container">
                <profile-nav selectedLink="collection"></profile-nav>
                <div class="profile-display">
                    ${this.allSmiski.map(i=>g`
                    <display-card 
                        photo="${i.photo}"
                        smiskiName="${i.smiskiName}"
                        collections="${i.collections}"
                        bodyType="${i.bodyType}"
                        found="${i.found}"
                        pose="${i.pose}"
                        description="${i.description}"
                    ></display-card>

                    `)}
                </div>
            </div>
        </div>
        `}_fetchData(i){fetch(Se(i)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e,this.profile.smiski_owned&&this.profile.smiski_owned.forEach(t=>this.fetchAndAppendSmiskiDetails(t)))})}async fetchAndAppendSmiskiDetails(i){try{const e=await fetch(Se(`/api/smiski/${encodeURIComponent(i)}`));if(e.ok){const s=await e.json();this.allSmiski=[...this.allSmiski,s]}}catch(e){console.error("Error fetching smiski details:",e)}}};X.styles=[m(x),m(ge)];Ne([f()],X.prototype,"path",2);Ne([v()],X.prototype,"profile",2);Ne([v()],X.prototype,"allSmiski",2);X=Ne([b("user-collections")],X);var Qs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Me=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ys(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Qs(e,t,r),r};let Q=class extends B{constructor(){super(...arguments),this.path="",this.allSmiski=[]}connectedCallback(){this.allSmiski=[{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"}],super.connectedCallback()}attributeChangedCallback(i,e,t){i==="path"&&e!==t&&e&&this._fetchData(t),super.attributeChangedCallback(i,e,t)}render(){return g`
        <header-bar></header-bar>
        <div class="profile-container">
                <profile-nav selectedLink="wishlist"></profile-nav>
                <div class="profile-display">
                    ${this.allSmiski.map(i=>g`
                    <display-card 
                        photo="${i.photo}"
                        smiskiName="${i.smiskiName}"
                        collections="${i.collections}"
                        bodyType="${i.bodyType}"
                        found="${i.found}"
                        pose="${i.pose}"
                        description="${i.description}"
                    ></display-card>

                    `)}
                </div>
            </div>
        </div>
        `}_fetchData(i){fetch(Se(i)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e,this.profile.smiski_owned&&this.profile.smiski_owned.forEach(t=>this.fetchAndAppendSmiskiDetails(t)))})}async fetchAndAppendSmiskiDetails(i){try{const e=await fetch(Se(`/api/smiski/${encodeURIComponent(i)}`));if(e.ok){const s=await e.json();this.allSmiski=[...this.allSmiski,s]}}catch(e){console.error("Error fetching smiski details:",e)}}};Q.styles=[m(x),m(ge)];Me([f()],Q.prototype,"path",2);Me([v()],Q.prototype,"profile",2);Me([v()],Q.prototype,"allSmiski",2);Q=Me([b("user-wishlist")],Q);var Zs=Object.defineProperty,er=Object.getOwnPropertyDescriptor,je=(i,e,t,s)=>{for(var r=s>1?void 0:s?er(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Zs(e,t,r),r};let Y=class extends B{constructor(){super(...arguments),this.path="",this.allSmiski=[],this.allCollection=[]}connectedCallback(){this.allSmiski=[{smiskiName:"Smiski Hugging Knees",collections:"Series 1",photo:"/source-images/smiskis/huggingknees.png",special:!1,bodyType:"Normal",found:"In corners of a room",pose:"Kneeling",description:"Always in the corner hugging onto the knees, staring out into the distance pensive in thought."},{smiskiName:"Smiski Looking Back",collections:"Series 1",photo:"/source-images/smiskis/lookingback.png",special:!1,bodyType:"Chubby",found:"In corners of a room",pose:"Looking back",description:"A Smiski that scares easily. When found, it will turn back and stare at you in surprise."},{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"},{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"},{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"},{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"},{smiskiName:"Little Smiski Lifting",collections:"Series 1",photo:"/source-images/smiskis/littlelifting.png",special:!0,bodyType:"",found:"",pose:"",description:"He's tiny but strong!"}],super.connectedCallback()}render(){return g`
            <header-bar></header-bar>
            <div class="profile-container">
                <div class="card-display">
                    ${this.allSmiski.map(i=>g`
                    <display-card 
                        photo="${i.photo}"
                        smiskiName="${i.smiskiName}"
                        collections="${i.collections}"
                        bodyType="${i.bodyType}"
                        found="${i.found}"
                        pose="${i.pose}"
                        description="${i.description}"
                    ></display-card>

                    `)}
                </div>
            </div>
        </div>
        `}};Y.styles=[m(x),m(ci),O`
    `];je([f()],Y.prototype,"path",2);je([v()],Y.prototype,"allSmiski",2);je([v()],Y.prototype,"allCollection",2);Y=je([b("smiski-collection")],Y);var tr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,st=(i,e,t,s)=>{for(var r=s>1?void 0:s?ir(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&tr(e,t,r),r};let ue=class extends y{constructor(){super(...arguments),this.user=new S}render(){return g`
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
                <li><a href="/app/profile/aimee4312">Profile</a></li>
                <li><hr /></li>
                <li><a href="/app/collection">Collection</a></li>
                <li><hr /></li>
                <li><a href="/app/wishlist">Wishlist</a></li>
                <li><hr /></li>
                <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
        </drop-down>
    </h1>`}_signOut(){console.log("Signout"),this.user.signOut()}};ue.styles=O`
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
  `;st([v()],ue.prototype,"profile",2);st([pe({context:fe,subscribe:!0}),f({attribute:!1})],ue.prototype,"user",2);ue=st([b("home-header")],ue);var sr=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,nr=(i,e,t,s)=>{for(var r=s>1?void 0:s?rr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&sr(e,t,r),r};let Ge=class extends B{render(){return g`
                <div class="background-container">
                    <home-header></home-header>
                </div>
            `}};Ge.styles=[m(x),m(Ft)];Ge=nr([b("home-page")],Ge);const or=window.location.host,ar="/ws";function lr(i,e){const t=new WebSocket(`ws://${or}${ar}?channel=${i}`);return t.onmessage=s=>{console.log("Received message:",s.data);const r=JSON.parse(s.data);e(r)},{channel:i,socket:t}}function cr(i,e){i.socket.send(JSON.stringify(e))}var hr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,hi=(i,e,t,s)=>{for(var r=s>1?void 0:s?ur(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&hr(e,t,r),r};let Te=class extends B{constructor(){super(...arguments),this.messages=[]}get username(){var i;return(i=this.getFromModel("user"))==null?void 0:i.username}firstUpdated(){this.connection||(this.connection=lr("chatroom",i=>this._handleMessage(i)),console.log("Connection created",this.connection))}render(){return g`
      <header-bar></header-bar>
      <ul>
        ${this.messages.map(i=>g`
              <li>${i.username}: ${i.text}</li>
            `)}
      </ul>
      <form @submit=${this._handleSubmit}>
        <input name="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>

    `}_handleSubmit(i){var e;if(i.preventDefault(),this.username&&this.connection){const t=i.target,r=((e=new FormData(t).get("text"))==null?void 0:e.toString())||"";cr(this.connection,{username:this.username,text:r}),t.reset()}}_handleMessage(i){console.log("Received message",i),this.messages=this.messages.concat([i])}};Te.styles=[m(x),O`
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
  
    `];hi([v()],Te.prototype,"messages",2);Te=hi([b("chat-room")],Te);const dr=[{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/collection",component:"user-collections"},{path:"/app/wishlist",component:"user-wishlist"},{path:"/app/smiski",component:"smiski-collection"},{path:"/app/forum",component:"chat-room"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}],D=Ns(),pr=D.update;D.addMessage("UserLoggedIn",(i,e)=>{const{user:t}=i;return q({user:t})(e)});D.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new et().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?q({profile:t}):ee)});D.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new C(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?q({profile:s}):ee)});D.addMessage("SmiskiAddedToCollection",i=>{const{userid:e,smiski:t}=i;return new C({smiski:t}).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Profile Updated:",s),s}).then(s=>s?q({profile:s}):ee)});D.addMessage("SmiskiRemovedFromCollection",i=>{const{userid:e,smiskiName:t}=i;return new C({smiskiName:t}).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Profile Updated:",s),s}).then(s=>s?q({profile:s}):ee)});D.addMessage("SmiskiAddedToWishlist",i=>{const{userid:e,smiski:t}=i;return new C({smiski:t}).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Profile Updated:",s),s}).then(s=>s?q({profile:s}):ee)});D.addMessage("SmiskiRemovedFromWishlist",i=>{const{userid:e,smiskiName:t}=i;return new C({smiskiName:t}).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Profile Updated:",s),s}).then(s=>s?q({profile:s}):ee)});var fr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mr=(i,e,t,s)=>{for(var r=s>1?void 0:s?gr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&fr(e,t,r),r};let Xe=class extends oi{constructor(){super(pr)}render(){return g`
            <auth-required>
                <vaadin-router .routes=${dr}> </vaadin-router>
            </auth-required>
            `}};Xe.styles=[m(x),m(Ft)];Xe=mr([b("smiski-world")],Xe);
