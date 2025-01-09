(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),X=new WeakMap;let at=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new at(typeof r=="string"?r:r+"",void 0,V),f=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new at(e,r,V)},ft=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:gt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:_t,getOwnPropertySymbols:yt,getPrototypeOf:At}=Object,$=globalThis,Y=$.trustedTypes,vt=Y?Y.emptyScript:"",I=$.reactiveElementPolyfillSupport,S=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>!mt(r,t),Q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=$t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const h=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[..._t(e),...yt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:B;this._$Em=i,this[i]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??lt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[S("elementProperties")]=new Map,w[S("finalized")]=new Map,I==null||I({ReactiveElement:w}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,z=C.trustedTypes,tt=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+g,wt=`<${ct}>`,v=document,P=()=>v.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,xt=r=>q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",M=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,_=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,rt=/"/g,dt=/^(?:script|style|textarea|title)$/i,bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Z=bt(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,y=v.createTreeWalker(v,129);function pt(r,t){if(!q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=E;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===E?p[1]==="!--"?o=et:p[1]!==void 0?o=it:p[2]!==void 0?(dt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=i??E,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?rt:st):o===rt||o===st?o=_:o===et||o===it?o=E:(o=_,i=void 0);const m=o===_&&r[h+1].startsWith("/>")?" ":"";n+=o===E?a+wt:l>=0?(s.push(c),a.slice(0,l)+ht+a.slice(l)+g+m):a+g+(l===-2?h:m)}return[pt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,p]=Et(t,e);if(this.el=T.createElement(c,s),y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ht)){const u=p[o++],m=i.getAttribute(l).split(g),N=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:N[2],strings:m,ctor:N[1]==="."?Ct:N[1]==="?"?Pt:N[1]==="@"?Ot:D}),i.removeAttribute(l)}else l.startsWith(g)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(dt.test(i.tagName)){const l=i.textContent.split(g),u=l.length-1;if(u>0){i.textContent=z?z.emptyScript:"";for(let m=0;m<u;m++)i.append(l[m],P()),y.nextNode(),a.push({type:2,index:++n});i.append(l[u],P())}}}else if(i.nodeType===8)if(i.data===ct)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(g,l+1))!==-1;)a.push({type:7,index:n}),l+=g.length-1}n++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var o,h;if(t===x)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);y.currentNode=i;let n=y.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new U(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Tt(n,this,t)),this._$AV.push(c),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(pt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new St(i,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new T(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=b(this,h[s+a],e,a),c===x&&(c=this._$AH[a]),o||(o=!O(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Pt extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ot extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===x)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const L=C.litHtmlPolyfillSupport;L==null||L(T,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Ut=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(P(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var ot;A._$litElement$=!0,A.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:A});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)},R={primary:f`#1A1A1D`,secondary:f`#3B1C32`,tertiary:f`#A64D79`,accent:f`#6A1E55`,ctext:f`#FFFFFF`,ctext_muted:f`#CCCCCC`};var Nt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Ht=(r,t,e,s)=>{for(var i=s>1?void 0:s?Rt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Nt(t,e,i),i};let k=class extends A{render(){return Z`
            <figure class="title-section">
                <img src="/website/zix.gif" alt="zix">
                <figcaption>
                    <h1 class="title">ZIX</h1>
                    <h2 class="subtitle">AN LS ALTERNATIVE</h2>
                </figcaption>
            </figure>
            <section class="continuos">
                <h3>READY TO REVOLUTIONIZE YOUR TERMINAL?</h3>
                <img src="/website/arrow.svg" alt="arrow">
            </section>
        `}};k.styles=f`
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

        // @media (max-width: 768px) {
        //     figure {
        //         flex-direction: column; /* Acomoda elementos verticalmente */
        //         gap: 1.5rem;
        //     }

        //     figure img {
        //         width: 90%; /* GIF más pequeño */
        //         max-width: 300px; /* Máximo en pantallas pequeñas */
        //     }

        //     .title {
        //         font-size: 2.5rem;
        //     }

        //     .subtitle {
        //         font-size: 1rem;
        //     }
        // }

        // @media (max-width: 480px) {
        //     figure img {
        //         width: 100%; /* GIF ocupa el 100% en pantallas muy pequeñas */
        //         max-width: 250px;
        //     }

        //     .title {
        //         font-size: 2rem;
        //     }

        //     .subtitle {
        //         font-size: 0.9rem;
        //     }

        //     .continuos h3 {
        //         font-size: 1rem;
        //     }
        // }
    `;k=Ht([K("presentation-section")],k);var zt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,It=(r,t,e,s)=>{for(var i=s>1?void 0:s?Dt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&zt(t,e,i),i};let W=class extends A{render(){return Z`
            <h2>INSTALLATION</h2>
            <section class="cards">
                <div class="card windows">
                    <figure>
                        <figcaption>WINDOWS</figcaption>
                        <img class="win-img" src="/website/windows.svg" alt="windows">
                    </figure>
                    <a href="https://github.com/zix-rs/zix/releases/download/v0.0.5/zix-installer.exe">DOWNLOAD</a>
                </div>
                <div class="card rust">
                    <figure>
                        <figcaption>USING CARGO</figcaption>
                        <img class="rust-img" src="/website/rust.svg" alt="windows">
                    </figure>
                    <a href="#">CARGO INSTALL ZIX</a>
                </div>
            </section>
        `}};W.styles=f`
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
        .cards  {
            display: flex;
            gap: 1rem;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin: 3rem 0;
        }
        .card   {
            display: flex;
            background-color: #111;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 400px;
            height: 400px;
            padding: 2rem 0;
            gap: 2rem;
            background-color: #3B1C32;
        }

        .card figure    {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem
        }

        .card figcaption    {
            font-size: 1.3rem;
        }

        .card img   {
            height: auto;
            object-fit: contain;
        }

        .win-img    {
            width: 60%
        }

        .rust-img   {
            width: 100%;
        }

        .card a {
            color: #ddd;
            text-decoration: none;
            background-color: #A64D79;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .8rem 0;
        }

        @media (max-width: 508px) {
            .card   {
                width: 70%;
            }
        }

    `;W=It([K("installation-section")],W);var Mt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,jt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Lt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Mt(t,e,i),i};let G=class extends A{render(){return Z`
            <header>
                <a class="social" href="https://twitter.com/arkeazs">
                    <p>TWITTER</p>
                    <img src="/website/twitter.svg" alt="twitter">
                </a>
                <a class="social" href="https://github.com/zix-rs/zix">
                    <p>GITHUB</p>
                    <img src="/website/github.svg" alt="github">
                </a>
            </header>
            <main>
                <presentation-section></presentation-section>
                <installation-section></presentation-section>
            </main>
            <footer>
                <p>ZIX</p>
            </footer>
        `}};G.styles=f`

        :host   {
            display: grid;
            grid-template-rows: 6rem auto 7rem;
            grid-template-columns: 100%;
            background-color: ${R.primary};
            min-height: 100vh;
            justify-items: center;
            width: 100%;
        }

        header, main, footer  {
            width: 100%;
        }

        header  {
            height: 4rem;
            background-color: ${R.tertiary};
            display: flex;
            justify-content: flex-end;
            align-items: center;
            box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.71);
            width: calc(95% - 2rem);
            margin: 1rem 0;
            color: ${R.ctext};
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
            background-color: ${R.tertiary};
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
    `;G=jt([K("zix-web")],G);
