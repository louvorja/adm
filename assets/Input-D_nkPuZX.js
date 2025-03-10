import{_ as gt,b as A,o as b,d as x,t as R,f as Bt,F as ct,p as pt,n as W,A as Ft,k as mt,e as F,g as ht,a as yt,w as Et,r as J,c as _t}from"./index-DwlHLOfu.js";function qt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const vt={list(){return[{label:"Português",code:"pt"},{label:"Espanhol",code:"es"}]}};var $={exports:{}},tt={exports:{}},et={exports:{}};/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Pt=et.exports,At;function Kt(){return At||(At=1,function(e,a){(function(t,l){e.exports=l()})(Pt,function(){const t=new Map;return{set(s,i,o){t.has(s)||t.set(s,new Map);const r=t.get(s);if(!r.has(i)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(i,o)},get(s,i){return t.has(s)&&t.get(s).get(i)||null},remove(s,i){if(!t.has(s))return;const o=t.get(s);o.delete(i),o.size===0&&t.delete(s)}}})}(et)),et.exports}var it={exports:{}},Q={exports:{}};/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ut=Q.exports,xt;function H(){return xt||(xt=1,function(e,a){(function(t,l){l(a)})(Ut,function(t){const i="transitionend",o=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(d,u)=>`#${CSS.escape(u)}`)),n),r=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),h=n=>{do n+=Math.floor(Math.random()*1e6);while(document.getElementById(n));return n},c=n=>{if(!n)return 0;let{transitionDuration:d,transitionDelay:u}=window.getComputedStyle(n);const S=Number.parseFloat(d),T=Number.parseFloat(u);return!S&&!T?0:(d=d.split(",")[0],u=u.split(",")[0],(Number.parseFloat(d)+Number.parseFloat(u))*1e3)},w=n=>{n.dispatchEvent(new Event(i))},y=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),_=n=>y(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(o(n)):null,g=n=>{if(!y(n)||n.getClientRects().length===0)return!1;const d=getComputedStyle(n).getPropertyValue("visibility")==="visible",u=n.closest("details:not([open])");if(!u)return d;if(u!==n){const S=n.closest("summary");if(S&&S.parentNode!==u||S===null)return!1}return d},N=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",L=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const d=n.getRootNode();return d instanceof ShadowRoot?d:null}return n instanceof ShadowRoot?n:n.parentNode?L(n.parentNode):null},M=()=>{},k=n=>{n.offsetHeight},B=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,V=[],Y=n=>{document.readyState==="loading"?(V.length||document.addEventListener("DOMContentLoaded",()=>{for(const d of V)d()}),V.push(n)):n()},j=()=>document.documentElement.dir==="rtl",m=n=>{Y(()=>{const d=B();if(d){const u=n.NAME,S=d.fn[u];d.fn[u]=n.jQueryInterface,d.fn[u].Constructor=n,d.fn[u].noConflict=()=>(d.fn[u]=S,n.jQueryInterface)}})},f=(n,d=[],u=n)=>typeof n=="function"?n(...d):u,p=(n,d,u=!0)=>{if(!u){f(n);return}const T=c(d)+5;let D=!1;const I=({target:K})=>{K===d&&(D=!0,d.removeEventListener(i,I),f(n))};d.addEventListener(i,I),setTimeout(()=>{D||w(d)},T)},E=(n,d,u,S)=>{const T=n.length;let D=n.indexOf(d);return D===-1?!u&&S?n[T-1]:n[0]:(D+=u?1:-1,S&&(D=(D+T)%T),n[Math.max(0,Math.min(D,T-1))])};t.defineJQueryPlugin=m,t.execute=f,t.executeAfterTransition=p,t.findShadowRoot=L,t.getElement=_,t.getNextActiveElement=E,t.getTransitionDurationFromElement=c,t.getUID=h,t.getjQuery=B,t.isDisabled=N,t.isElement=y,t.isRTL=j,t.isVisible=g,t.noop=M,t.onDOMContentLoaded=Y,t.parseSelector=o,t.reflow=k,t.toType=r,t.triggerTransitionEnd=w,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})}(Q,Q.exports)),Q.exports}/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Yt=it.exports,wt;function G(){return wt||(wt=1,function(e,a){(function(t,l){e.exports=l(H())})(Yt,function(t){const l=/[^.]*(?=\..*)\.|.*/,s=/\..*/,i=/::\d+$/,o={};let r=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function w(m,f){return f&&`${f}::${r++}`||m.uidEvent||r++}function y(m){const f=w(m);return m.uidEvent=f,o[f]=o[f]||{},o[f]}function _(m,f){return function p(E){return j(E,{delegateTarget:m}),p.oneOff&&Y.off(m,E.type,f),f.apply(m,[E])}}function g(m,f,p){return function E(n){const d=m.querySelectorAll(f);for(let{target:u}=n;u&&u!==this;u=u.parentNode)for(const S of d)if(S===u)return j(n,{delegateTarget:u}),E.oneOff&&Y.off(m,n.type,f,p),p.apply(u,[n])}}function N(m,f,p=null){return Object.values(m).find(E=>E.callable===f&&E.delegationSelector===p)}function L(m,f,p){const E=typeof f=="string",n=E?p:f||p;let d=V(m);return c.has(d)||(d=m),[E,n,d]}function M(m,f,p,E,n){if(typeof f!="string"||!m)return;let[d,u,S]=L(f,p,E);f in h&&(u=(dt=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return dt.call(this,v)})(u));const T=y(m),D=T[S]||(T[S]={}),I=N(D,u,d?p:null);if(I){I.oneOff=I.oneOff&&n;return}const K=w(u,f.replace(l,"")),q=d?g(m,p,u):_(m,u);q.delegationSelector=d?p:null,q.callable=u,q.oneOff=n,q.uidEvent=K,D[K]=q,m.addEventListener(S,q,d)}function k(m,f,p,E,n){const d=N(f[p],E,n);d&&(m.removeEventListener(p,d,!!n),delete f[p][d.uidEvent])}function B(m,f,p,E){const n=f[p]||{};for(const[d,u]of Object.entries(n))d.includes(E)&&k(m,f,p,u.callable,u.delegationSelector)}function V(m){return m=m.replace(s,""),h[m]||m}const Y={on(m,f,p,E){M(m,f,p,E,!1)},one(m,f,p,E){M(m,f,p,E,!0)},off(m,f,p,E){if(typeof f!="string"||!m)return;const[n,d,u]=L(f,p,E),S=u!==f,T=y(m),D=T[u]||{},I=f.startsWith(".");if(typeof d<"u"){if(!Object.keys(D).length)return;k(m,T,u,d,n?p:null);return}if(I)for(const K of Object.keys(T))B(m,T,K,f.slice(1));for(const[K,q]of Object.entries(D)){const U=K.replace(i,"");(!S||f.includes(U))&&k(m,T,u,q.callable,q.delegationSelector)}},trigger(m,f,p){if(typeof f!="string"||!m)return null;const E=t.getjQuery(),n=V(f),d=f!==n;let u=null,S=!0,T=!0,D=!1;d&&E&&(u=E.Event(f,p),E(m).trigger(u),S=!u.isPropagationStopped(),T=!u.isImmediatePropagationStopped(),D=u.isDefaultPrevented());const I=j(new Event(f,{bubbles:S,cancelable:!0}),p);return D&&I.preventDefault(),T&&m.dispatchEvent(I),I.defaultPrevented&&u&&u.preventDefault(),I}};function j(m,f={}){for(const[p,E]of Object.entries(f))try{m[p]=E}catch{Object.defineProperty(m,p,{configurable:!0,get(){return E}})}return m}return Y})}(it)),it.exports}var nt={exports:{}},st={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Wt=st.exports,St;function Vt(){return St||(St=1,function(e,a){(function(t,l){e.exports=l()})(Wt,function(){function t(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function l(i){return i.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(i,o,r){i.setAttribute(`data-bs-${l(o)}`,r)},removeDataAttribute(i,o){i.removeAttribute(`data-bs-${l(o)}`)},getDataAttributes(i){if(!i)return{};const o={},r=Object.keys(i.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of r){let c=h.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),o[c]=t(i.dataset[h])}return o},getDataAttribute(i,o){return t(i.getAttribute(`data-bs-${l(o)}`))}}})}(st)),st.exports}/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ht=nt.exports,kt;function bt(){return kt||(kt=1,function(e,a){(function(t,l){e.exports=l(Vt(),H())})(Ht,function(t,l){class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,r){const h=l.isElement(r)?t.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...l.isElement(r)?t.getDataAttributes(r):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,r=this.constructor.DefaultType){for(const[h,c]of Object.entries(r)){const w=o[h],y=l.isElement(w)?"element":l.toType(w);if(!new RegExp(c).test(y))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${y}" but expected type "${c}".`)}}}return s})}(nt)),nt.exports}/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var jt=tt.exports,Tt;function zt(){return Tt||(Tt=1,function(e,a){(function(t,l){e.exports=l(Kt(),G(),bt(),H())})(jt,function(t,l,s,i){const o="5.3.3";class r extends s{constructor(c,w){super(),c=i.getElement(c),c&&(this._element=c,this._config=this._getConfig(w),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,w,y=!0){i.executeAfterTransition(c,w,y)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return t.get(i.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,w={}){return this.getInstance(c)||new this(c,typeof w=="object"?w:null)}static get VERSION(){return o}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return r})}(tt)),tt.exports}var ot={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Qt=ot.exports,Dt;function ut(){return Dt||(Dt=1,function(e,a){(function(t,l){e.exports=l(H())})(Qt,function(t){const l=i=>{let o=i.getAttribute("data-bs-target");if(!o||o==="#"){let r=i.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),o=r&&r!=="#"?r.trim():null}return o?o.split(",").map(r=>t.parseSelector(r)).join(","):null},s={find(i,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,i))},findOne(i,o=document.documentElement){return Element.prototype.querySelector.call(o,i)},children(i,o){return[].concat(...i.children).filter(r=>r.matches(o))},parents(i,o){const r=[];let h=i.parentNode.closest(o);for(;h;)r.push(h),h=h.parentNode.closest(o);return r},prev(i,o){let r=i.previousElementSibling;for(;r;){if(r.matches(o))return[r];r=r.previousElementSibling}return[]},next(i,o){let r=i.nextElementSibling;for(;r;){if(r.matches(o))return[r];r=r.nextElementSibling}return[]},focusableChildren(i){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(o,i).filter(r=>!t.isDisabled(r)&&t.isVisible(r))},getSelectorFromElement(i){const o=l(i);return o&&s.findOne(o)?o:null},getElementFromSelector(i){const o=l(i);return o?s.findOne(o):null},getMultipleElementsFromSelector(i){const o=l(i);return o?s.find(o):[]}};return s})}(ot)),ot.exports}var rt={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xt=rt.exports,Nt;function Jt(){return Nt||(Nt=1,function(e,a){(function(t,l){e.exports=l(G(),bt(),H())})(Xt,function(t,l,s){const i="backdrop",o="fade",r="show",h=`mousedown.bs.${i}`,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},w={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class y extends l{constructor(g){super(),this._config=this._getConfig(g),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return w}static get NAME(){return i}show(g){if(!this._config.isVisible){s.execute(g);return}this._append();const N=this._getElement();this._config.isAnimated&&s.reflow(N),N.classList.add(r),this._emulateAnimation(()=>{s.execute(g)})}hide(g){if(!this._config.isVisible){s.execute(g);return}this._getElement().classList.remove(r),this._emulateAnimation(()=>{this.dispose(),s.execute(g)})}dispose(){this._isAppended&&(t.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const g=document.createElement("div");g.className=this._config.className,this._config.isAnimated&&g.classList.add(o),this._element=g}return this._element}_configAfterMerge(g){return g.rootElement=s.getElement(g.rootElement),g}_append(){if(this._isAppended)return;const g=this._getElement();this._config.rootElement.append(g),t.on(g,h,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(g){s.executeAfterTransition(g,this._getElement(),this._config.isAnimated)}}return y})}(rt)),rt.exports}var X={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Gt=X.exports,Ct;function Zt(){return Ct||(Ct=1,function(e,a){(function(t,l){l(a,G(),ut(),H())})(Gt,function(t,l,s,i){const o=(r,h="hide")=>{const c=`click.dismiss${r.EVENT_KEY}`,w=r.NAME;l.on(document,c,`[data-bs-dismiss="${w}"]`,function(y){if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),i.isDisabled(this))return;const _=s.getElementFromSelector(this)||this.closest(`.${w}`);r.getOrCreateInstance(_)[h]()})};t.enableDismissTrigger=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})}(X,X.exports)),X.exports}var lt={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var $t=lt.exports,Ot;function te(){return Ot||(Ot=1,function(e,a){(function(t,l){e.exports=l(G(),ut(),bt())})($t,function(t,l,s){const i="focustrap",r=".bs.focustrap",h=`focusin${r}`,c=`keydown.tab${r}`,w="Tab",y="forward",_="backward",g={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class L extends s{constructor(k){super(),this._config=this._getConfig(k),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return g}static get DefaultType(){return N}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,r),t.on(document,h,k=>this._handleFocusin(k)),t.on(document,c,k=>this._handleKeydown(k)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,r))}_handleFocusin(k){const{trapElement:B}=this._config;if(k.target===document||k.target===B||B.contains(k.target))return;const V=l.focusableChildren(B);V.length===0?B.focus():this._lastTabNavDirection===_?V[V.length-1].focus():V[0].focus()}_handleKeydown(k){k.key===w&&(this._lastTabNavDirection=k.shiftKey?_:y)}}return L})}(lt)),lt.exports}var at={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ee=at.exports,It;function ie(){return It||(It=1,function(e,a){(function(t,l){e.exports=l(Vt(),ut(),H())})(ee,function(t,l,s){const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",o=".sticky-top",r="padding-right",h="margin-right";class c{constructor(){this._element=document.body}getWidth(){const y=document.documentElement.clientWidth;return Math.abs(window.innerWidth-y)}hide(){const y=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,_=>_+y),this._setElementAttributes(i,r,_=>_+y),this._setElementAttributes(o,h,_=>_-y)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(i,r),this._resetElementAttributes(o,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(y,_,g){const N=this.getWidth(),L=M=>{if(M!==this._element&&window.innerWidth>M.clientWidth+N)return;this._saveInitialAttribute(M,_);const k=window.getComputedStyle(M).getPropertyValue(_);M.style.setProperty(_,`${g(Number.parseFloat(k))}px`)};this._applyManipulationCallback(y,L)}_saveInitialAttribute(y,_){const g=y.style.getPropertyValue(_);g&&t.setDataAttribute(y,_,g)}_resetElementAttributes(y,_){const g=N=>{const L=t.getDataAttribute(N,_);if(L===null){N.style.removeProperty(_);return}t.removeDataAttribute(N,_),N.style.setProperty(_,L)};this._applyManipulationCallback(y,g)}_applyManipulationCallback(y,_){if(s.isElement(y)){_(y);return}for(const g of l.find(y,this._element))_(g)}}return c})}(at)),at.exports}/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ne=$.exports,Lt;function se(){return Lt||(Lt=1,function(e,a){(function(t,l){e.exports=l(zt(),G(),ut(),Jt(),Zt(),te(),H(),ie())})(ne,function(t,l,s,i,o,r,h,c){const w="modal",_=".bs.modal",g=".data-api",N="Escape",L=`hide${_}`,M=`hidePrevented${_}`,k=`hidden${_}`,B=`show${_}`,V=`shown${_}`,Y=`resize${_}`,j=`click.dismiss${_}`,m=`mousedown.dismiss${_}`,f=`keydown.dismiss${_}`,p=`click${_}${g}`,E="modal-open",n="fade",d="show",u="modal-static",S=".modal.show",T=".modal-dialog",D=".modal-body",I='[data-bs-toggle="modal"]',K={backdrop:!0,focus:!0,keyboard:!0},q={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class U extends t{constructor(v,C){super(v,C),this._dialog=s.findOne(T,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c,this._addEventListeners()}static get Default(){return K}static get DefaultType(){return q}static get NAME(){return w}toggle(v){return this._isShown?this.hide():this.show(v)}show(v){this._isShown||this._isTransitioning||l.trigger(this._element,B,{relatedTarget:v}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(E),this._adjustDialog(),this._backdrop.show(()=>this._showElement(v)))}hide(){!this._isShown||this._isTransitioning||l.trigger(this._element,L).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(d),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){l.off(window,_),l.off(this._dialog,_),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new i({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new r({trapElement:this._element})}_showElement(v){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const C=s.findOne(D,this._dialog);C&&(C.scrollTop=0),h.reflow(this._element),this._element.classList.add(d);const P=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,l.trigger(this._element,V,{relatedTarget:v})};this._queueCallback(P,this._dialog,this._isAnimated())}_addEventListeners(){l.on(this._element,f,v=>{if(v.key===N){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),l.on(window,Y,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),l.on(this._element,m,v=>{l.one(this._element,j,C=>{if(!(this._element!==v.target||this._element!==C.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(E),this._resetAdjustments(),this._scrollBar.reset(),l.trigger(this._element,k)})}_isAnimated(){return this._element.classList.contains(n)}_triggerBackdropTransition(){if(l.trigger(this._element,M).defaultPrevented)return;const C=this._element.scrollHeight>document.documentElement.clientHeight,P=this._element.style.overflowY;P==="hidden"||this._element.classList.contains(u)||(C||(this._element.style.overflowY="hidden"),this._element.classList.add(u),this._queueCallback(()=>{this._element.classList.remove(u),this._queueCallback(()=>{this._element.style.overflowY=P},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const v=this._element.scrollHeight>document.documentElement.clientHeight,C=this._scrollBar.getWidth(),P=C>0;if(P&&!v){const z=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[z]=`${C}px`}if(!P&&v){const z=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[z]=`${C}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(v,C){return this.each(function(){const P=U.getOrCreateInstance(this,v);if(typeof v=="string"){if(typeof P[v]>"u")throw new TypeError(`No method named "${v}"`);P[v](C)}})}}return l.on(document,p,I,function(dt){const v=s.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&dt.preventDefault(),l.one(v,B,z=>{z.defaultPrevented||l.one(v,k,()=>{h.isVisible(this)&&this.focus()})});const C=s.findOne(S);C&&U.getInstance(C).hide(),U.getOrCreateInstance(v).toggle(this)}),o.enableDismissTrigger(U),h.defineJQueryPlugin(U),U})}($)),$.exports}var oe=se();const re=qt(oe);var O=[];for(var ft=0;ft<256;++ft)O.push((ft+256).toString(16).slice(1));function le(e,a=0){return(O[e[a+0]]+O[e[a+1]]+O[e[a+2]]+O[e[a+3]]+"-"+O[e[a+4]]+O[e[a+5]]+"-"+O[e[a+6]]+O[e[a+7]]+"-"+O[e[a+8]]+O[e[a+9]]+"-"+O[e[a+10]]+O[e[a+11]]+O[e[a+12]]+O[e[a+13]]+O[e[a+14]]+O[e[a+15]]).toLowerCase()}var Z,ae=new Uint8Array(16);function ce(){if(!Z&&(Z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(ae)}var ue=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Mt={randomUUID:ue};function Rt(e,a,t){if(Mt.randomUUID&&!e)return Mt.randomUUID();e=e||{};var l=e.random||(e.rng||ce)();return l[6]=l[6]&15|64,l[8]=l[8]&63|128,le(l)}const de={name:"ModalComponent",inheritAttrs:!1,props:{modelValue:Boolean,title:String,buttons:Object},data(){return{id:Rt(),modalInstance:null,modalElement:null}},computed:{buttons_list(){return this.buttons?Object.keys(this.buttons).map(e=>typeof this.buttons[e]=="string"?{id:e,label:this.buttons[e]}:{id:e,...this.buttons[e]}):[]}},watch:{modelValue(e){e?this.openModal():this.modalInstance&&this.modalInstance.hide()}},methods:{openModal(){this.modalInstance&&this.modalInstance.show()},onModalHide(){this.$emit("update:modelValue",!1)},clickButton(e){this.$emit("button",e)},onResize(){let e=this;setTimeout(function(){e.onScroll()},100)},onScroll(e){const a=e?e.target.scrollTop:this.$refs.modalBody.scrollTop,t=e?e.target.scrollHeight:this.$refs.modalBody.scrollHeight,l=e?e.target.clientHeight:this.$refs.modalBody.clientHeight,s=t-(a+l);this.$emit("scroll",{top:a,bottom:s,height:t})}},mounted(){this.modalElement=document.getElementById(this.id),this.modalElement&&(this.modalInstance=new re(this.modalElement),this.modalElement.addEventListener("hidden.bs.modal",this.onModalHide)),this.show&&this.openModal(),this.$refs.modalBody.addEventListener("scroll",this.onScroll),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.$refs.modalBody),this.onScroll(),this.onResize()},beforeUnmount(){if(this.modalElement)try{this.modalElement.removeEventListener("hidden.bs.modal",this.onModalHide)}catch(e){console.error("Failed to remove event listener:",e)}this.$refs.modalBody.removeEventListener("scroll",this.onScroll),this.$refs.modalBody.removeEventListener("scroll",this.onScroll),this.resizeObserver&&this.resizeObserver.disconnect()}},he=["id","aria-labelledby"],fe={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},me={class:"modal-content"},_e={class:"modal-header"},ge=["id"],pe=x("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),be={class:"modal-body",ref:"modalBody"},ye={class:"modal-footer"},Ee=["onClick"];function ve(e,a,t,l,s,i){return b(),A("div",{class:"modal fade",id:s.id,tabindex:"-1","aria-labelledby":s.id+"Label","aria-hidden":"true"},[x("div",fe,[x("div",me,[x("div",_e,[x("h5",{class:"modal-title",id:s.id+"Label"},R(t.title),9,ge),pe]),x("div",be,[Bt(e.$slots,"default")],512),x("div",ye,[(b(!0),A(ct,null,pt(i.buttons_list,(o,r)=>(b(),A("button",{key:r,type:"button",class:W("btn btn-"+(o.color??"primary")),onClick:h=>i.clickButton(o.id)},R(o.label??""),11,Ee))),128))])])])],8,he)}const Ae=gt(de,[["render",ve]]),xe={name:"LibraryInputComponent",components:{Modal:Ae,Alert:Ft},inheritAttrs:!1,props:{modelValue:Number,value:Number,id:String,category:String,disabled:Boolean},data(){return{show_library:!1,error:"",error_item:"",loading:!1,loading_item:!1,limit:50,page:null,pages:null,next_page:1,data:[],item:{},data_scroll:{},scroll_load:50}},watch:{value(e){e?this.load_item():(this.error_item="",this.error="",this.item={})},show_library(e){e&&this.load()}},methods:{modal_library(){this.show_library=!0},button_library(e){e=="remove"&&this.remove()},scroll(e){this.data_scroll=e,!this.loading&&e.bottom<=this.scroll_load&&this.load()},remove(){this.file={},this.$emit("input",null),this.show_library=!1},load(){if(this.next_page&&this.show_library){let e=this;this.error="",this.loading=!0,mt.get("admin/files",{type:this.category,limit:this.limit,page:this.next_page,sort_by:"id_file.desc"},function(a,t){e.loading=!1,e.error=t.error??"",a&&(e.page=t.current_page,e.pages=t.last_page,e.next_page=t.next_page_url?t.current_page+1:null,e.data.push(...t.data??[]))})}},load_item(){let e=this;this.error_item="",this.loading_item=!0,mt.get("admin/files/"+this.value,{},function(a,t){e.loading_item=!1,e.error_item=t.error??"",a&&(e.item=t.data??{})})},selectFile(e){this.item=e,this.show_library=!1,this.$emit("input",e.id_file)}},mounted(){}},we={key:0,class:"input-group-text flex-fill d-flex flex-column",style:{width:"10px"}},Se={key:0,class:"spinner-border spinner-border-sm ms-2",role:"status"},ke=x("span",{class:"visually-hidden"},"Loading...",-1),Te=[ke],De={key:1,controls:"",class:"w-100",style:{height:"32px"}},Ne=["src"],Ce={key:2,class:"d-block text-truncate text-start text-danger flex-fill small w-100"},Oe={key:3,class:"d-block text-truncate text-start small w-100"},Ie={key:1,class:"input-group-text",style:{width:"38px",height:"38px",padding:"3px"}},Le={key:0,class:"spinner-border spinner-border-sm ms-2",role:"status"},Me=x("span",{class:"visually-hidden"},"Loading...",-1),Ve=[Me],Re=["href"],Be=["src"],Fe={key:2,class:"input-group-text text-danger flex-fill d-block text-truncate text-start"},qe={key:3,class:"input-group-text flex-fill d-block text-truncate text-start"},Pe={key:1,class:"d-flex flex-wrap align-items-center justify-content-between"},Ke={key:0,class:"card border-left-primary shadow h-100 m-1",style:{"min-width":"350px"}},Ue={class:"card-body"},Ye={class:"row no-gutters align-items-center"},We={class:"col mr-2"},He={class:"text-xs font-weight-bold text-primary text-truncate d-block text-uppercase"},je={class:"text-xs text-muted font-weight-bold text-primary text-truncate d-block mb-1"},ze={class:"btn-toolbar"},Qe=x("div",{class:"ms-auto"},null,-1),Xe=["href"],Je=["onClick"],Ge=x("div",{class:"col-auto"},[x("i",{class:"fas fa-calendar fa-2x text-gray-300"})],-1),Ze=["onClick"],$e={class:"figure"},ti=["src","alt"],ei={class:"figure-caption text-center"},ii={key:2,class:"d-flex align-items-center justify-content-center"},ni=x("div",{class:"spinner-border text-secondary",role:"status"},[x("span",{class:"visually-hidden"},"Loading...")],-1),si=[ni],oi={key:3,class:"p-4 w-100 text-center"},ri=["disabled"],li=["disabled"];function ai(e,a,t,l,s,i){const o=J("alert"),r=J("modal"),h=J("font-awesome-icon");return b(),A(ct,null,[t.category=="music"?(b(),A("div",we,[s.loading_item?(b(),A("div",Se,Te)):s.item.url?(b(),A("audio",De,[x("source",{src:s.item.url},null,8,Ne),yt(" Audio não suportado ")])):F("",!0),s.error_item?(b(),A("div",Ce,R(s.error_item),1)):(b(),A("div",Oe,R(s.item.name??""),1))])):(b(),A("div",Ie,[s.loading_item?(b(),A("div",Le,Ve)):s.item.url?(b(),A("a",{key:1,href:s.item.url,target:"_blank"},[x("img",{src:s.item.url,style:{width:"100%",height:"100%"}},null,8,Be)],8,Re)):F("",!0)])),s.error_item&&t.category!=="music"?(b(),A("div",Fe,R(s.error_item),1)):t.category!=="music"?(b(),A("div",qe,R(s.item.name??""),1)):F("",!0),ht(r,{modelValue:s.show_library,"onUpdate:modelValue":a[1]||(a[1]=c=>s.show_library=c),title:"Biblioteca | "+(t.category=="image_album"?"Imagens de Capa":t.category=="image_music"?"Imagens":t.category=="music"?"Músicas":""),buttons:{remove:{label:"Remover Imagem",color:"danger"}},onButton:i.button_library,onScroll:i.scroll},{default:Et(()=>[s.error?(b(),_t(o,{key:0,danger:""},{default:Et(()=>[yt(R(s.error),1)]),_:1})):F("",!0),s.data?(b(),A("div",Pe,[(b(!0),A(ct,null,pt(s.data,c=>(b(),A("div",{key:c.id_file},[t.category=="music"?(b(),A("div",Ke,[x("div",Ue,[x("div",Ye,[x("div",We,[x("div",He,R(c.name),1),x("div",je,R(c.subdirectory),1),x("div",ze,[Qe,x("a",{href:c.url,target:"_blank",type:"button",class:"btn btn-sm btn-info mx-1"}," Ouvir ",8,Xe),x("button",{type:"button",class:"btn btn-sm btn-primary mx-1",onClick:w=>i.selectFile(c)}," Selecionar ",8,Je)])]),Ge])])])):(b(),A("a",{key:1,href:"javascript:",onClick:w=>i.selectFile(c),class:"m-2"},[x("figure",$e,[x("img",{src:c.url,alt:c.name,class:"figure-img img-thumbnail",style:{"max-height":"130px"}},null,8,ti),x("figcaption",ei,R(c.name),1)])],8,Ze))]))),128))])):F("",!0),s.loading?(b(),A("div",ii,si)):F("",!0),s.next_page?(b(),A("div",oi,[x("button",{class:"btn btn-primary",onClick:a[0]||(a[0]=c=>i.load())},"Carregar mais")])):F("",!0)]),_:1},8,["modelValue","title","onButton","onScroll"]),t.value?(b(),A("button",{key:4,class:"btn btn-danger",type:"button",onClick:a[2]||(a[2]=(...c)=>i.remove&&i.remove(...c)),disabled:t.disabled},[ht(h,{icon:"x"})],8,ri)):F("",!0),x("button",{class:"btn btn-primary",type:"button",onClick:a[3]||(a[3]=(...c)=>i.modal_library&&i.modal_library(...c)),disabled:t.disabled},[ht(h,{icon:"search"})],8,li)],64)}const ci=gt(xe,[["render",ai]]),ui={name:"InputComponent",components:{LibraryInput:ci},inheritAttrs:!1,props:{modelValue:[String,Array,Number,Boolean],label:String,type:String,help:String,error:[String,Array],options:Array,options_url:String,options_label:String,options_key:String,options_params:Object,disabled:Boolean,readonly:Boolean,category:String,col:Number,colSm:Number,colMd:Number,colLg:Number,colXl:Number,colXxl:Number},data(){return{id:Rt(),local_options:[],loading:!1,error_field:""}},watch:{modelValue(){this.adjustHeight()}},computed:{error_list(){let e=[];return this.error?typeof this.error=="string"?e=[this.error]:e=this.error:e=[],e=[...e,this.error_field].filter(a=>a),e.length>0?e:null},selectValue(){let e=this.type=="multiple"?[]:"";return this.modelValue&&this.local_options?this.local_options.filter(a=>this.type=="multiple"?this.modelValue.includes(a.code):this.modelValue==a.code):e},langs(){return vt.list()}},methods:{onInput:function(e){this.$emit("update:modelValue",e.target.value),this.adjustHeight()},onCheck:function(e){this.$emit("update:modelValue",e.target.checked)},onSelect:function(e){let a;this.type=="multiple"?(a=[],a=e.map(t=>typeof t=="object"?t.code??"":t)):(a=null,e&&(typeof e=="object"?a=e.code??"":a=e)),this.$emit("update:modelValue",a)},onFile:function(e){this.$emit("update:modelValue",e)},adjustHeight(){if(this.type=="textarea"){let e=this.$refs.textarea;e.style.height="auto",e.style.height=`${e.scrollHeight+2}px`}},loadOptions:function(){let e=this;this.error_field="",this.loading=!0,mt.get(this.options_url??"",Object.assign(this.options_params??{},{limit:-1}),function(a,t){e.loading=!1,e.error_field=t.error??"",a&&(e.local_options=t.data.map(l=>({label:(l[e.options_key]??"")+" - "+(l[e.options_label]??""),code:l[e.options_key]??""})))})}},mounted(){this.type=="lang"?this.local_options=vt.list():this.type=="select_data"?this.loadOptions():this.local_options=this.options??[]}},di=["for"],hi={key:0,class:"spinner-border spinner-border-sm ms-2",role:"status"},fi=x("span",{class:"visually-hidden"},"Loading...",-1),mi=[fi],_i=["id","aria-describedby","value","disabled"],gi={key:3,class:"form-check form-switch"},pi=["id","aria-describedby","checked","disabled"],bi=["for"],yi={key:0},Ei={key:1},vi=["type","id","aria-describedby","value","disabled","step"],Ai=["value","disabled"],xi=["id"],wi={key:2,class:"invalid-feedback"};function Si(e,a,t,l,s,i){const o=J("library-input"),r=J("vue-select");return b(),A("div",{class:W("form-group "+(t.col?" col-"+t.col:"")+(t.colSm?" col-sm-"+t.colSm:"")+(t.colMd?" col-md-"+t.colMd:"")+(t.colLg?" col-lg-"+t.colLg:"")+(t.colXl?" col-xl-"+t.colXl:"")+(t.colXxl?" col-xxl-"+t.colXxl:""))},[x("label",{for:s.id,class:"form-label"},R(t.label),9,di),s.loading?(b(),A("div",hi,mi)):F("",!0),x("div",{class:W(["input-group flex-nowrap",{"is-invalid":i.error_list}])},[t.type=="library"?(b(),_t(o,{key:0,id:s.id,class:W({"is-invalid":i.error_list}),category:t.category,value:t.modelValue,disabled:t.disabled||t.readonly||s.loading,onInput:i.onFile},null,8,["id","class","category","value","disabled","onInput"])):t.type=="select"||t.type=="multiple"||t.type=="select_data"||t.type=="lang"?(b(),_t(r,{key:1,multiple:t.type=="multiple",options:s.local_options,class:W(["w-100",{"is-invalid":i.error_list}]),id:s.id,modelValue:i.selectValue,selectable:h=>t.modelValue&&t.type=="multiple"?!t.modelValue.includes(h.code):!0,disabled:t.disabled||t.readonly||s.loading,"onUpdate:modelValue":i.onSelect},null,8,["multiple","options","class","id","modelValue","selectable","disabled","onUpdate:modelValue"])):t.type=="textarea"?(b(),A("textarea",{key:2,class:W(["form-control",{"is-invalid":i.error_list}]),id:s.id,"aria-describedby":s.id+"Help",value:t.modelValue,disabled:t.disabled||t.readonly||s.loading,ref:"textarea",onInput:a[0]||(a[0]=(...h)=>i.onInput&&i.onInput(...h))},null,42,_i)):t.type=="boolean"?(b(),A("div",gi,[x("input",{type:"checkbox",class:W(["form-check-input",{"is-invalid":i.error_list}]),id:s.id,"aria-describedby":s.id+"Help",checked:t.modelValue,disabled:t.disabled||t.readonly||s.loading,onChange:a[1]||(a[1]=(...h)=>i.onCheck&&i.onCheck(...h))},null,42,pi),x("label",{class:"form-check-label",for:s.id},[t.modelValue?(b(),A("span",yi,"Sim")):(b(),A("span",Ei,"Não"))],8,bi)])):(b(),A("input",{key:4,type:t.type&&t.type!="color"?t.type:"text",class:W(["form-control",{"is-invalid":i.error_list}]),id:s.id,"aria-describedby":s.id+"Help",value:t.modelValue,disabled:t.disabled||t.readonly||s.loading,step:t.type=="number"||t.type=="time"?1:0,onInput:a[2]||(a[2]=(...h)=>i.onInput&&i.onInput(...h))},null,42,vi)),t.type=="color"?(b(),A("input",{key:5,type:"color",class:"input-group-text",style:{width:"38px",height:"38px",padding:"3px"},value:t.modelValue??"#000000",disabled:t.disabled||t.readonly||s.loading,onInput:a[3]||(a[3]=(...h)=>i.onInput&&i.onInput(...h))},null,40,Ai)):F("",!0)],2),t.help?(b(),A("div",{key:1,id:s.id+"Help",class:"form-text"},R(t.help),9,xi)):F("",!0),i.error_list?(b(),A("div",wi,[(b(!0),A(ct,null,pt(i.error_list,(h,c)=>(b(),A("div",{key:c},R(h),1))),128))])):F("",!0)],2)}const Ti=gt(ui,[["render",Si]]);export{Ti as I,Ae as M,Rt as v};
