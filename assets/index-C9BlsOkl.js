(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,K=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Q=new WeakMap;let ht=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const gt=r=>new ht(typeof r=="string"?r:r+"",void 0,J),u=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ht(e,r,J)},$t=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:_t,getOwnPropertyDescriptor:wt,getOwnPropertyNames:vt,getOwnPropertySymbols:bt,getPrototypeOf:At}=Object,$=globalThis,et=$.trustedTypes,xt=et?et.emptyScript:"",L=$.reactiveElementPolyfillSupport,E=(r,t)=>r,R={toAttribute(r,t){switch(t){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},X=(r,t)=>!yt(r,t),st={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=wt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...vt(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:R).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:R;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??X)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,L==null||L({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,H=C.trustedTypes,it=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+g,St=`<${pt}>`,v=document,P=()=>v.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",Y=Array.isArray,Et=r=>Y(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,_=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,Ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),z=Ct(1),b=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),lt=new WeakMap,w=v.createTreeWalker(v,129);function ft(r,t){if(!Y(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=S;for(let l=0;l<e;l++){const a=r[l];let d,p,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,p=n.exec(a),p!==null);)f=n.lastIndex,n===S?p[1]==="!--"?n=rt:p[1]!==void 0?n=ot:p[2]!==void 0?(ut.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=s??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?_:p[3]==='"'?at:nt):n===at||n===nt?n=_:n===rt||n===ot?n=S:(n=_,s=void 0);const m=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+St:c>=0?(i.push(d),a.slice(0,c)+dt+a.slice(c)+g+m):a+g+(c===-2?l:m)}return[ft(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[d,p]=Pt(t,e);if(this.el=T.createElement(d,i),w.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=w.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(dt)){const f=p[n++],m=s.getAttribute(c).split(g),k=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:k[2],strings:m,ctor:k[1]==="."?Tt:k[1]==="?"?Ut:k[1]==="@"?kt:I}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(ut.test(s.tagName)){const c=s.textContent.split(g),f=c.length-1;if(f>0){s.textContent=H?H.emptyScript:"";for(let m=0;m<f;m++)s.append(c[m],P()),w.nextNode(),a.push({type:2,index:++o});s.append(c[f],P())}}}else if(s.nodeType===8)if(s.data===pt)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){var n,l;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);w.currentNode=s;let o=w.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new U(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Nt(o,this,t)),this._$AV.push(d),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=w.nextNode(),n++)}return w.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(ft(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Ot(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new T(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=x(this,l[i+a],e,a),d===b&&(d=this._$AH[a]),n||(n=!O(d)||d!==this._$AH[a]),d===h?t=h:t!==h&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ut extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class kt extends I{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===b)return;const i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const B=C.litHtmlPolyfillSupport;B==null||B(T,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Mt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new U(t.insertBefore(P(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}};var ct;y._$litElement$=!0,y.finalized=!0,(ct=globalThis.litElementHydrateSupport)==null||ct.call(globalThis,{LitElement:y});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:X},Ht=(r=Rt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function Dt(r){return(t,e)=>typeof e=="object"?Ht(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}const N={primary:u`#1A1A1D`,secondary:u`#3B1C32`,tertiary:u`#A64D79`,accent:u`#6A1E55`,ctext:u`#FFFFFF`,ctext_muted:u`#CCCCCC`};var zt=Object.getOwnPropertyDescriptor,It=(r,t,e,i)=>{for(var s=i>1?void 0:i?zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let G=class extends y{render(){return z`
            <figure class="title-section">
                <img src="/zix.gif" alt="zix">
                <figcaption>
                    <h1 class="title">ZIX</h1>
                    <h2 class="subtitle">AN LS ALTERNATIVE</h2>
                </figcaption>
            </figure>
            <section class="continuos">
                <h3>READY TO REVOLUTIONIZE YOUR TERMINAL?</h3>
                <img src="/arrow.svg" alt="arrow">
            </section>
        `}};G.styles=u`
        :host   {
            color: #fff;
            margin: 2rem 0;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        figure  {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap-reverse;
            gap: 3rem;
            max-width: 90%;
            cursor: default;
        }

        figure img  {
            width: clamp(60%, 500px, 75%);
            height: auto;
            box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.27);
            border-inline: 3px solid black;
        }

        figure figcaption {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .title {
            font-size: 4rem;
            font-weight: bold;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #8D8D8D;
            margin: 0
        }

        .subtitle {
            font-size: 1.2rem;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
        }

        .continuos  {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #8D8D8D;
            width: 100%;
            gap: 1rem;
        }

        .continuos h3    {
            font-size: clamp(1rem, 1.5vw, 2rem);
            text-align: center
        }
    `;G=It([j("presentation-section")],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={CHILD:2},Lt=r=>(...t)=>({_$litDirective$:r,values:t});class Wt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V extends Wt{constructor(t){if(super(t),this.it=h,t.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===b)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}V.directiveName="unsafeHTML",V.resultType=1;const Bt=Lt(V),Ft=new Set(["cd","ls","pwd","echo","cat","touch","rm","cp","mv","mkdir","rmdir","chmod","chown","find","grep","sed","awk","sort","uniq","head","tail","ps","top","htop","kill","killall","jobs","bg","fg","nice","renice","nohup","timeout","watch","uptime","uname","whoami","id","groups","ping","curl","wget","netstat","ss","traceroute","nslookup","dig","ip","ifconfig","route","arp","iwconfig","scp","sftp","rsync","export","unset","alias","unalias","env","set","read","echo","source",">",">>","<","|","&","&&","||","if","then","else","elif","fi","for","while","until","case","esac","select","do","done","break","continue","function","return","trap","exit","exec","wait","test","[","]","apt","dnf","yum","pacman","brew","snap","flatpak","pip","npm","tar","zip","unzip","gzip","gunzip","bzip2","xz","df","du","mount","umount","ln","basename","dirname","cut","paste","tee","xargs","wc","diff","cmp","stat","shred","clear","history","date","cal"]),Gt=new Set(["as","async","await","break","const","continue","crate","dyn","else","enum","extern","false","fn","for","if","impl","in","let","loop","match","mod","move","mut","pub","ref","return","Self","self","static","struct","super","trait","true","type","unsafe","use","where","while","abstract","become","box","do","final","macro","override","priv","typeof","unsized","virtual","yield","try"]),Vt=new Set(["Write-Host","Write-Output","Write-Error","Write-Warning","Write-Debug","Get-Process","Stop-Process","Start-Process","Wait-Process","Select-Object","Where-Object","ForEach-Object","Sort-Object","Measure-Object","New-Object","Remove-Item","Rename-Item","Move-Item","Copy-Item","Set-Location","Get-Location","Test-Path","Join-Path","Split-Path","Invoke-WebRequest","Invoke-RestMethod","Invoke-Expression","Get-Help","Get-Command","Get-Module","Import-Module","Set-Variable","Get-Variable","Clear-Variable","If","Else","For","While","Do","Switch","Break","Continue","Function","Return","Try","Catch","Finally","powershell"]),qt=new Set(["await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","super","switch","static","this","throw","try","true","typeof","var","void","while","with","yield"]),Zt=new Map([["powershell","powershell"],["ps1","powershell"],["rust","rust"],["rs","rust"],["bash","bash"],["sh","bash"]]);function Kt(r,t){let e=Zt.get(r)??"text";return Jt(e,t,r)}function Jt(r,t,e){let s={rust:Gt,bash:Ft,powershell:Vt,javascript:qt}[e]||new Set,o=/\b\w+\b/g,n=/(?:^|\s)(-[-\w]+)/g,l=t.replace(o,a=>s.has(a)?`<span class="keyword">${a}</span>`:a);return l=l.replace(n,a=>`<span class="flag">${a}</span>`),`<code class="language-${r}">${l}</code>`}const Xt=u`
    .keyword    {
        color: rgb(166, 77, 121);
    }
    pre {
        width: 100%;
    }

    code {
        background: #111;
        padding: 1rem .5rem;
        font-family: monospace;
        width: calc(100% - 1rem);
        word-wrap: break-word;
        box-decoration-break: clone;
    }


    pre code {
        display: block;
        white-space: pre;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        max-width: 100%;
        min-width: 100px;
        text-align: start;
    }

    .flag {
        color: #66ccff;
        font-weight: bold;
    }
`;var Yt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,mt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Yt(t,e,s),s};let D=class extends y{constructor(){super(...arguments),this.lang="bash",this.rawCode=""}firstUpdated(){this.updateCodeFromSlot()}updateCodeFromSlot(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(r){const e=r.assignedNodes();this.rawCode=e.map(i=>{var s;return(s=i.textContent)==null?void 0:s.trim()}).join(`
`),this.requestUpdate()}}coloredCode(){return`${Kt(this.lang,this.rawCode)}`}render(){return z`
            <pre>
                ${Bt(this.coloredCode())}
            </pre>
            <slot hidden></slot>
        `}};D.styles=Xt;mt([Dt({type:String})],D.prototype,"lang",2);D=mt([j("code-block")],D);var te=Object.getOwnPropertyDescriptor,ee=(r,t,e,i)=>{for(var s=i>1?void 0:i?te(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let q=class extends y{render(){return z`
            <h2>INSTALLATION</h2>
            <section class="installs">
                <div class="install">
                    <h3>
                        Linux (using curl)
                    </h3>
                    <p>
                        To install <strong>Zix</strong> on Linux, use the following command.
                        This script will automatically download and install Zix using <code>curl</code>:
                    </p>
                    <code-block lang="bash">
                        curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/zix-rs/zix/refs/heads/main/scripts/install.sh | sh
                    </code-block>
                </div>
                <div class="install">
                    <h3>
                        Powershell
                    </h3>
                    <p>
                        To install <strong>Zix</strong> on Windows, run the following command in PowerShell.
                        This script will download and execute the installer automatically:
                    </p>
                    <code-block lang="powershell">
                        powershell -c "irm https://raw.githubusercontent.com/zix-rs/zix/refs/heads/main/scripts/install.ps1|iex"
                    </code-block>
                </div>
            </section>
        `}};q.styles=u`
        :host   {
            color: #fff;
            margin: 1rem 0;
            font-family: "Galdeano", serif;
            font-weight: 400;
            font-style: normal;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
        }

        h2  {
            font-weight: bold;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #8D8D8D;
            width: calc(100%-2rem);
            padding: 0 2rem;
        }

        .installs   {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .install    {
            width: 90%;
        }
    `;q=ee([j("installation-section")],q);var se=Object.getOwnPropertyDescriptor,ie=(r,t,e,i)=>{for(var s=i>1?void 0:i?se(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let Z=class extends y{render(){return z`
            <header>
                <a class="social" href="https://twitter.com/arkeazs">
                    <p>TWITTER</p>
                    <img src="/twitter.svg" alt="twitter">
                </a>
                <a class="social" href="https://github.com/zix-rs/zix">
                    <p>GITHUB</p>
                    <img src="/github.svg" alt="github">
                </a>
            </header>
            <main>
                <presentation-section></presentation-section>
                <installation-section></presentation-section>
            </main>
            <footer>
                <p>ZIX</p>
            </footer>
        `}};Z.styles=u`

        :host   {
            display: grid;
            grid-template-rows: 6rem auto 7rem;
            grid-template-columns: 100%;
            background-color: ${N.primary};
            min-height: 100vh;
            justify-items: center;
            width: 100%;
        }

        header, main, footer  {
            width: 100%;
        }

        header  {
            height: 4rem;
            background-color: ${N.tertiary};
            display: flex;
            justify-content: flex-end;
            align-items: center;
            box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.71);
            width: calc(95% - 2rem);
            margin: 1rem 0;
            color: ${N.ctext};
            gap: 1rem;
            padding: 0 1rem;
            flex-direction: row;
            border-radius: 5px;
            box-shadow: 0px 0px 10px black;
        }

        .social {
            background-color: #3B1C32;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            height: 1rem;
            padding: .5rem 1.7rem;
            gap: 0.5rem;
            border-radius: 3px
        }

        .social p {
            margin: 0;
            font-size: 0.7rem;
            color: white;
        }

        .social img {
            height: 1rem;
            width: auto;
        }

        footer  {
            background-color: ${N.tertiary};
            width: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        footer p    {
            font-size: 1.5rem;
            font-family: "Gasoek One", serif;
            font-weight: 400;
            font-style: normal;
            color: #eee
        }
    `;Z=ie([j("zix-web")],Z);
