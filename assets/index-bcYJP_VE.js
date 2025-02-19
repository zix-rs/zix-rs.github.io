(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,J=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ee=new WeakMap;let de=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}};const $e=r=>new de(typeof r=="string"?r:r+"",void 0,X),u=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new de(t,r,X)},ye=(r,e)=>{if(J)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},te=J?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $e(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_e,defineProperty:we,getOwnPropertyDescriptor:ve,getOwnPropertyNames:be,getOwnPropertySymbols:Ae,getPrototypeOf:xe}=Object,y=globalThis,se=y.trustedTypes,Se=se?se.emptyScript:"",L=y.reactiveElementPolyfillSupport,E=(r,e)=>r,H={toAttribute(r,e){switch(e){case Boolean:r=r?Se:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Y=(r,e)=>!_e(r,e),ie={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&we(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=ve(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,i=[...be(t),...Ae(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(te(s))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ye(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:H).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:H;this._$Em=s,this[s]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Y)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,L==null||L({ReactiveElement:A}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,D=C.trustedTypes,re=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+$,Ee=`<${ue}>`,v=document,P=()=>v.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,Ce=r=>Q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,ne=/>/g,_=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,fe=/^(?:script|style|textarea|title)$/i,Pe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),N=Pe(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ce=new WeakMap,w=v.createTreeWalker(v,129);function me(r,e){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Oe=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=S;for(let l=0;l<t;l++){const a=r[l];let c,h,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===S?h[1]==="!--"?n=oe:h[1]!==void 0?n=ne:h[2]!==void 0?(fe.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=_):h[3]!==void 0&&(n=_):n===_?h[0]===">"?(n=s??S,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?_:h[3]==='"'?le:ae):n===le||n===ae?n=_:n===oe||n===ne?n=S:(n=_,s=void 0);const g=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+Ee:d>=0?(i.push(c),a.slice(0,d)+pe+a.slice(d)+$+g):a+$+(d===-2?l:g)}return[me(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class T{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[c,h]=Oe(e,t);if(this.el=T.createElement(c,i),w.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=w.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(pe)){const f=h[n++],g=s.getAttribute(d).split($),R=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:R[2],strings:g,ctor:R[1]==="."?Ue:R[1]==="?"?Ne:R[1]==="@"?ke:I}),s.removeAttribute(d)}else d.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(d));if(fe.test(s.tagName)){const d=s.textContent.split($),f=d.length-1;if(f>0){s.textContent=D?D.emptyScript:"";for(let g=0;g<f;g++)s.append(d[g],P()),w.nextNode(),a.push({type:2,index:++o});s.append(d[f],P())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)a.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function x(r,e,t=r,i){var n,l;if(e===b)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=O(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=x(r,s._$AS(r,e.values),s,i)),e}class Te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??v).importNode(t,!0);w.currentNode=s;let o=w.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new k(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new Me(o,this,e)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=w.nextNode(),n++)}return w.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),O(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(me(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Te(s,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new T(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new k(this.O(P()),this.O(P()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=x(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=x(this,l[i+a],t,a),c===b&&(c=this._$AH[a]),n||(n=!O(c)||c!==this._$AH[a]),c===p?e=p:e!==p&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ne extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class ke extends I{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??p)===b)return;const i=this._$AH,s=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const B=C.litHtmlPolyfillSupport;B==null||B(T,k),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Re=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new k(e.insertBefore(P(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return b}};var he;m._$litElement$=!0,m.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:m});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:Y},He=(r=ze,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(i==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function De(r){return(e,t)=>typeof t=="object"?He(r,e,t):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}const U={primary:u`#1A1A1D`,secondary:u`#3B1C32`,tertiary:u`#A64D79`,accent:u`#6A1E55`,ctext:u`#FFFFFF`,ctext_muted:u`#CCCCCC`};var je=Object.getOwnPropertyDescriptor,Ie=(r,e,t,i)=>{for(var s=i>1?void 0:i?je(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let G=class extends m{render(){return N`
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
    `;G=Ie([M("presentation-section")],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={CHILD:2},We=r=>(...e)=>({_$litDirective$:r,values:e});class Be{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V extends Be{constructor(e){if(super(e),this.it=p,e.type!==Le.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===p||e==null)return this._t=void 0,this.it=e;if(e===b)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}V.directiveName="unsafeHTML",V.resultType=1;const Fe=We(V),Ge=new Set(["cd","ls","pwd","echo","cat","touch","rm","cp","mv","mkdir","rmdir","chmod","chown","find","grep","sed","awk","sort","uniq","head","tail","ps","top","htop","kill","killall","jobs","bg","fg","nice","renice","nohup","timeout","watch","uptime","uname","whoami","id","groups","ping","curl","wget","netstat","ss","traceroute","nslookup","dig","ip","ifconfig","route","arp","iwconfig","scp","sftp","rsync","export","unset","alias","unalias","env","set","read","echo","source",">",">>","<","|","&","&&","||","if","then","else","elif","fi","for","while","until","case","esac","select","do","done","break","continue","function","return","trap","exit","exec","wait","test","[","]","apt","dnf","yum","pacman","brew","snap","flatpak","pip","npm","tar","zip","unzip","gzip","gunzip","bzip2","xz","df","du","mount","umount","ln","basename","dirname","cut","paste","tee","xargs","wc","diff","cmp","stat","shred","clear","history","date","cal"]),Ve=new Set(["as","async","await","break","const","continue","crate","dyn","else","enum","extern","false","fn","for","if","impl","in","let","loop","match","mod","move","mut","pub","ref","return","Self","self","static","struct","super","trait","true","type","unsafe","use","where","while","abstract","become","box","do","final","macro","override","priv","typeof","unsized","virtual","yield","try"]),Ze=new Set(["Write-Host","Write-Output","Write-Error","Write-Warning","Write-Debug","Get-Process","Stop-Process","Start-Process","Wait-Process","Select-Object","Where-Object","ForEach-Object","Sort-Object","Measure-Object","New-Object","Remove-Item","Rename-Item","Move-Item","Copy-Item","Set-Location","Get-Location","Test-Path","Join-Path","Split-Path","Invoke-WebRequest","Invoke-RestMethod","Invoke-Expression","Get-Help","Get-Command","Get-Module","Import-Module","Set-Variable","Get-Variable","Clear-Variable","If","Else","For","While","Do","Switch","Break","Continue","Function","Return","Try","Catch","Finally","powershell"]),qe=new Set(["await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","super","switch","static","this","throw","try","true","typeof","var","void","while","with","yield"]),Ke=new Map([["powershell","powershell"],["ps1","powershell"],["rust","rust"],["rs","rust"],["bash","bash"],["sh","bash"]]);function Je(r,e){let t=Ke.get(r)??"text";return Xe(t,e,r)}function Xe(r,e,t){let s={rust:Ve,bash:Ge,powershell:Ze,javascript:qe}[t]||new Set,o=/\b\w+\b/g,n=/(?:^|\s)(-[-\w.]+)/g,l=/("|')((?:\\\1|(?:(?!\1).))*)\1/g,a=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,c=e.replace(l,h=>`<span class="string">${h}</span>`);return c=c.replace(a,h=>`<span class="url">${h}</span>`),c=c.replace(n,h=>`<span class="flag">${h}</span>`),c=c.replace(o,h=>s.has(h)?`<span class="keyword">${h}</span>`:h),`<code class="language-${r}">${c}</code>`}const Ye=u`
    .keyword    {
        color: #fff;
    }
    pre {
        width: 100%;
    }

    code {
        background: ${U.secondary};
        padding: 1rem 1rem;
        font-family: monospace;
        width: calc(100% - 1.5rem);
        word-wrap: break-word;
        box-decoration-break: clone;
        box-shadow: 0 10px 4px -4px #111;
        border-radius: 10px
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

    .url {
        color: #FFB200
    }

    .string {
        color: #999
    }
`;var Qe=Object.defineProperty,et=Object.getOwnPropertyDescriptor,ge=(r,e,t,i)=>{for(var s=i>1?void 0:i?et(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Qe(e,t,s),s};let j=class extends m{constructor(){super(...arguments),this.lang="bash",this.rawCode=""}firstUpdated(){this.updateCodeFromSlot()}updateCodeFromSlot(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");if(r){const t=r.assignedNodes();this.rawCode=t.map(i=>{var s;return(s=i.textContent)==null?void 0:s.trim()}).join(`
`),this.requestUpdate()}}coloredCode(){return`${Je(this.lang,this.rawCode)}`}render(){return N`
            <pre>
                ${Fe(this.coloredCode())}
            </pre>
            <slot hidden></slot>
        `}};j.styles=Ye;ge([De({type:String})],j.prototype,"lang",2);j=ge([M("code-block")],j);var tt=Object.getOwnPropertyDescriptor,st=(r,e,t,i)=>{for(var s=i>1?void 0:i?tt(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let Z=class extends m{render(){return N`
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
                        curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/zix-rs/zix/main/scripts/install.sh | sh
                    </code-block>
                </div>
                <div class="install">
                    <h3>
                        Powershell (Admin)
                    </h3>
                    <p>
                        To install <strong>Zix</strong> on Windows, run the following command in PowerShell.
                        This script will download and execute the installer automatically:
                    </p>
                    <code-block lang="powershell">
                        powershell -c "irm https://raw.githubusercontent.com/zix-rs/zix/main/scripts/install.ps1|iex"
                    </code-block>
                </div>
            </section>
        `}};Z.styles=u`
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
            font-family: Galdeano, serif;
        }

        .install p {
            line-height: 1.4rem;
        }
    `;Z=st([M("installation-section")],Z);var it=Object.getOwnPropertyDescriptor,rt=(r,e,t,i)=>{for(var s=i>1?void 0:i?it(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let q=class extends m{render(){return N`
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
        `}};q.styles=u`
        :host {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        header  {
            height: 4rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background-color: ${U.tertiary};
            box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.71);
            width: calc(95% - 2rem);
            margin: 1rem 0;
            color: ${U.ctext};
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
    `;q=rt([M("zix-header")],q);var ot=Object.getOwnPropertyDescriptor,nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?ot(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let K=class extends m{render(){return N`
            <zix-header>
            </zix-header>
            <main>
                <presentation-section></presentation-section>
                <installation-section></presentation-section>
            </main>
            <footer>
                <p>ZIX</p>
            </footer>
        `}};K.styles=u`

        :host   {
            display: grid;
            grid-template-rows: 6rem auto 7rem;
            grid-template-columns: 100%;
            background-color: ${U.primary};
            min-height: 100vh;
            justify-items: center;
            width: 100%;
        }

        main, footer  {
            width: 100%;
        }


        footer  {
            background-color: ${U.tertiary};
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
    `;K=nt([M("zix-web")],K);
