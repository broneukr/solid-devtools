import { a, b, c } from './chunk-JGJZYBMB.js';
import { getOwner, runWithOwner, createRoot, createComputed, createMemo, batch, createSignal, onCleanup, untrack, createEffect, Index, Show, $PROXY } from 'solid-js';
import { throttle, scheduleIdle } from '@solid-primitives/scheduled';
import { atom, defer, makeHoverElementListener, untrackedCallback } from '@solid-devtools/shared/primitives';
import { trimString, warn } from '@solid-devtools/shared/utils';
import { DEV, unwrap } from 'solid-js/store';
import { createSimpleEmitter, createEventHub } from '@solid-primitives/event-bus';
import { makeEventListener } from '@solid-primitives/event-listener';
import { createKeyHold } from '@solid-primitives/keyboard';
import { asArray, onRootCleanup } from '@solid-primitives/utils';
import { MARK_COMPONENT_FN_NAME, LOCATION_ATTRIBUTE_NAME, WINDOW_PROJECTPATH_PROPERTY } from '@solid-devtools/transform/types';
import { isWindows } from '@solid-primitives/platform';
import { template, createComponent, Portal, mergeProps, insert, effect, className } from 'solid-js/web';
import { createElementCursor } from '@solid-primitives/cursor';
import { createElementBounds } from '@solid-primitives/bounds';

var Se=DEV,U=getOwner,L=e=>"fn"in e,k=e=>"sdtType"in e?e.sdtType===4:L(e)&&We(e),ye=e=>"owned"in e,Z=e=>e.sdtType===0||!L(e),Q=e=>"props"in e,Be=e=>Se.$NAME in e,F=e=>!("observers"in e)&&Se.$NAME in e.value,We=e=>"value"in e&&"comparator"in e&&e.pure===!0;function xt(e){let{name:t,componentName:o}=e;return o&&typeof o=="string"?o.startsWith("_Hot$$")?o.slice(6):o:t||"(unnamed)"}function wt(e){return e.name||"(unnamed)"}var he=e=>e[Se.$NAME]||"(unnamed)";function ee(e){let t=ye(e)?xt(e):F(e)?he(e):wt(e);return be(t)}function be(e){return trimString(e,16)}function Ie(e){return ye(e)?j(e):F(e)?9:8}var j=e=>{if(typeof e.sdtType<"u")return e.sdtType;if(!L(e))return 0;if(Q(e))return 1;if(We(e)){let t,o;return (t=e.owner)&&Q(t)&&(o=t.componentName)&&o.startsWith("_Hot$$")?6:4}return e.pure===!1?e.user===!0?2:e.context!==null?7:3:5},Ot=0,Et=()=>(Ot++).toString(36);function te(e){return e.sdtName!==void 0?e.sdtName:e.sdtName=ee(e)}function M(e,t){return e.sdtType!==void 0?e.sdtType:e.sdtType=t??j(e)}function T(e){return e.sdtId!==void 0?e.sdtId:e.sdtId=Et()}function oe(e){let{owned:t}=e,o;return t&&t.length===1&&M(o=t[0])===6?o:null}function Ke(e){let t=fe(e);return Array.isArray(t)&&!t.length&&(t=null),t}function fe(e){if(typeof e=="function"&&!e.length&&e.name==="bound readSignal")return fe(e());if(Array.isArray(e)){let t=[];for(let o of e){let n=fe(o);n&&(Array.isArray(n)?t.push.apply(t,n):t.push(n));}return t}return e instanceof HTMLElement?e:null}function Rt(e,t){do{if(t(e))return e;e=e.owner;}while(e.owner);return null}function Ce(e,t){e.sdtContext=t;}function ze(e){for(;!e.sdtContext&&e.owner;)e=e.owner;return e.sdtContext}function Ge(e){delete e.sdtContext;}var ne=e=>U()?onCleanup(e):e;function V(e,t,o=!1){return e.cleanups===null?e.cleanups=[t]:o?e.cleanups.splice(0,0,t):e.cleanups.push(t),()=>e.cleanups?.splice(e.cleanups.indexOf(t),1)}function Tt(e,t,o=!1){return e.owner?V(e.owner,t,o):()=>{}}function Ut(e){return runWithOwner(null,()=>createRoot(e))}function Mt(e){let t,o=!0;return runWithOwner(null,()=>createRoot(n=>createComputed(()=>{if(!o)return;o=!1,e();let r=U().sources;r&&(t=[...r]),n();}))),t??[]}var _=null,B=Symbol("internal"),A=(e,t)=>{_=e;let o=createRoot(n=>{let r=U();return Ce(r,B),e(n)},t);return _===e&&(_=null),o},Xe=()=>{let e=!!_;return e&&(_=null),e};function Lt(e){let t=new Set,o=[];for(let n=e.length-1;n>=0;n--){let r=e[n];t.has(r.id)||(t.add(r.id),o.push(r));}return o}function Ye(e){let t=[],o=throttle(()=>{let n=Lt(t);t.length=0,e(n);});return n=>{t.push(n),o();}}var re=new Set;{let e=()=>re.forEach(t=>t());typeof window._$afterUpdate=="function"&&re.add(window._$afterUpdate),window._$afterUpdate=e;}function Ne(e){return re.add(e),ne(()=>{re.delete(e);})}var ie=new Set;{let e=t=>{Xe()||ie.forEach(o=>o(t));};typeof window._$afterCreateRoot=="function"&&ie.add(window._$afterCreateRoot),window._$afterCreateRoot=e;}function ve(e){return ie.add(e),ne(()=>ie.delete(e))}function De(e,t){if(e.onComputationUpdate)return void(e.onComputationUpdate=t);e.onComputationUpdate=t,qe(e,o=>{untrack(e.onComputationUpdate),o();});}function qe(e,t){let o=e.fn,n,r,a=()=>n=o(r);e.fn=e.fn.length?d=>(t(a,r=d),n):()=>(t(a,void 0),n);}function W(e,t,o){if(e.onValueUpdate){e.onValueUpdate[o]=t;return}let n=e.onValueUpdate={[o]:t},r=e.value;Object.defineProperty(e,"value",{get:()=>r,set:a=>{for(let d of Object.getOwnPropertySymbols(n))n[d](a,r);r=a;}});}function $(e,t){e.onValueUpdate&&delete e.onValueUpdate[t];}function Vt(e,t,o){W(e,t,o),ne(()=>$(e,o));}var ae,xe,Je,we=[],K;function Oe(e,t){let{owned:o}=e;if(!o||!o.length)return t;let n=Array(o.length);for(let r=0;r<n.length;r++)n[r]=$t(o[r]);return t.children=n,t}function At(e,t,o){De(e,Je.bind(void 0,xe,t)),(!e.sources||e.sources.length===0)&&(o.frozen=!0);}function $t(e){let t=M(e),o=T(e),n=t===1||t===4||t===2||t===5?te(e):void 0,r={id:o,type:t};if(n&&(r.name=n),o===ae&&(K=e),t===1){let a;if(n==="provider"&&e.owned&&e.owned.length===1&&M(a=e.owned[0])===7){let m=T(a);return m===ae&&(K=a),Oe(a.owned[0],{id:m,type:7})}let d=Ke(e.value);d&&we.push({id:o,name:n,element:d});let i,p;n==="Show"&&e.owned?.length===2&&k(i=e.owned[0])&&k(p=e.owned[1])&&(i.name="condition",p.name="value");let c;n==="For"&&e.owned?.length===1&&k(c=e.owned[0])&&(c.name="value");let u=!1,S=oe(e);S&&(u=!0,e=S),r.hmr=u;}else t!==7&&At(e,o,r);return Oe(e,r)}function Pt(e,t,o){t===ae&&(K=e);let n={id:t,type:0};return Oe(e,n),o&&(n.attached=T(o)),n}function Qe(e,t){return ae=t.inspectedId,xe=t.rootId,Je=t.onComputationUpdate,K=null,we=[],{root:Pt(e,xe,e.sdtAttached),inspectedOwner:K,components:we}}var jt=/^((?:\\?[^\s][^/\\:\"\?\*<>\|]+)+):([0-9]+):([0-9]+)$/,Bt=/^((?:(?:\.\/|\.\.\/|\/)?(?:\.?\w+\/)*)(?:\.?\w+\.?\w+)):([0-9]+):([0-9]+)$/,et=isWindows?jt:Bt;function Ee(e){let t=e.getAttribute(LOCATION_ATTRIBUTE_NAME);if(!(!t||!et.test(t)))return t}var Wt={vscode:({projectPath:e,filePath:t,line:o,column:n})=>`vscode://file/${e}/${t}:${o}:${n}`,"vscode-insiders":({projectPath:e,filePath:t,line:o,column:n})=>`vscode-insiders://file/${e}/${t}:${o}:${n}`,atom:({projectPath:e,filePath:t,line:o,column:n})=>`atom://core/open/file?filename=${e}/${t}&line=${o}&column=${n}`,webstorm:({projectPath:e,filePath:t,line:o,column:n})=>`webstorm://open?file=${e}/${t}&line=${o}&column=${n}`};function Kt(e,t){return typeof e=="function"?e(t):Wt[e](t)}function Re(e,t){let o=window[WINDOW_PROJECTPATH_PROPERTY];if(!o)return;let n=e.match(et);if(!n)return;let[,r,a,d]=n;return {filePath:r,line:+a,column:+d,projectPath:o,element:t}}function Te(e,t){let o=Kt(e,t);typeof o=="string"&&window.open(o,"_blank");}var de=new Map,Ze={};function Ue(e,t){Ze!==e&&(de.clear(),Ze=e);let o=[],n=[t],r,a;for(let d of n){if(!r){let p=Ee(d);p&&(r=p,a=d);}let i=de.get(d);if(i!==void 0)return o.forEach(p=>de.set(p,i)),i?{...i,location:r??i.location,element:a??i.element}:null;o.push(d);for(let[p,c]of Object.entries(e))for(let u=c.length-1;u>=0;u--){let S=c[u],{element:m}=S;if(Array.isArray(m)&&m.some(s=>s===d)||d===m){let s={...S,element:a??d,location:r,rootId:p};return o.forEach(g=>de.set(g,s)),s}}d.parentElement&&n.push(d.parentElement);}return null}var Xt=template(`<style>
.element-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  pointer-events: none;
  transition-duration: 100ms;
  transition-property: transform, width, height;
  --color: 14 116 144;
}
.border {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid rgb(var(--color) / 0.8);
  background-color: rgb(var(--color) / 0.3);
  border-radius: 0.25rem;
}
.name-container {
  position: absolute;
  z-index: 10000;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  color: white;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1rem;
}
.name-container.bottom {
  top: 100%;
}
.name-container.top {
  bottom: 100%;
}
.name-animated-container {
  position: relative;
  margin: 0.5rem auto;
  padding: 0.25rem 0.5rem;
}
.name-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(var(--color) / 0.8);
  border-radius: 0.25rem;
}
.name-text {
  position: absolute;
}
.name-text span {
  color: #a5f3fc;
}
.name-invisible {
  visibility: hidden;
}
</style>`,2),Yt=template('<div><div class="name-animated-container"><div class="name-background"></div><div class="name-text">: <span></span></div><div class="name-invisible">: </div></div></div>',12),qt=template('<div class="element-overlay"><div class="border"></div></div>',4);function ot(e){return createComponent(Portal,{useShadow:!0,get children(){return createComponent(Index,{get each(){return e()},children:t=>{createElementCursor(()=>t().element,"pointer");let o=createElementBounds(()=>t().element);return createComponent(oo,mergeProps(o,{get tag(){return t().element.tagName.toLocaleLowerCase()},get name(){return t().name}}))}})}})}var oo=e=>{let t=createMemo(i=>e.left===null?i:e.left,0),o=createMemo(i=>e.top===null?i:e.top,0),n=createMemo(i=>e.width===null?i:e.width,0),r=createMemo(i=>e.height===null?i:e.height,0),a=createMemo(()=>`translate(${Math.round(t())}px, ${Math.round(o())}px)`),d=createMemo(()=>o()>window.innerHeight/2);return [Xt.cloneNode(!0),(()=>{let i=qt.cloneNode(!0);i.firstChild;return insert(i,createComponent(Show,{get when(){return !!e.name},get children(){let c=Yt.cloneNode(!0),u=c.firstChild,S=u.firstChild,m=S.nextSibling,s=m.firstChild,g=s.nextSibling,b=m.nextSibling,h=b.firstChild;return insert(m,()=>e.name,s),insert(g,()=>e.tag),insert(b,()=>e.name,h),insert(b,()=>e.tag,null),effect(()=>className(c,`name-container ${d()?"top":"bottom"}`)),c}}),null),effect(c=>{let u=a(),S=n()+"px",m=r()+"px";return u!==c._v$&&i.style.setProperty("transform",c._v$=u),S!==c._v$2&&i.style.setProperty("width",c._v$2=S),m!==c._v$3&&i.style.setProperty("height",c._v$3=m),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()]};function Le(e){let t=U();if(!t)return;let o=j(t);o===1?t.location=e:o===6&&(t.owner.location=e);}globalThis[MARK_COMPONENT_FN_NAME]=Le;function rt({components:e,debuggerEnabled:t,findComponent:o,getElementById:n,setLocatorEnabledSignal:r}){let a=atom(!1),d=atom(),i=createMemo(()=>!!d()?.());r(i);let p=createMemo(()=>t()&&(i()||a()));function c(f){a(y=>f??!y);}let u=atom(null),S=atom(null),m=createMemo(defer([e,()=>u()??S()],([f,y])=>{if(!y)return [];if(y instanceof HTMLElement){let N=Ue(f,y);return N?[N]:[]}return asArray(y.element).map(N=>({location:Ee(N),element:N,id:y.id,rootId:y.rootId,name:y.name}))},[]));setTimeout(()=>{A(()=>ot(m));},1e3);let[s,g]=createSimpleEmitter();createEffect(f=>{let y=u();if(!y)return;let N=Ue(e(),y);return f&&g({nodeId:f,state:!1}),N&&g({nodeId:N.id,state:!0}),N?.id});function b(f){if(!f)return S(null);if("nodeId"in f){let{rootId:y,nodeId:N}=f,w=o(y,N);w&&S({...w,rootId:y});}else {let y=n(f.elementId);if(!y)return warn("No element found",f);S(y);}}let h=new Set;function v(...[f,y,N]){for(let w of h)if(w(f,y,N),f.defaultPrevented)return !0}function D(f){h.add(f),onRootCleanup(()=>h.delete(f));}let C;createEffect(()=>{!p()||(makeHoverElementListener(f=>u(f)),onCleanup(()=>u(null)),makeEventListener(window,"click",f=>{let{target:y}=f;if(!(y instanceof HTMLElement))return;let N=m(),w=N.find(({element:ht})=>y.contains(ht))??N[0];if(!w)return;let me=w.location&&Re(w.location,w.element);!v(f,w,me)&&C&&me&&(f.preventDefault(),f.stopPropagation(),Te(C,me));},!0));});let l=!1,I=getOwner();function x(f){runWithOwner(I,()=>{if(Ae(),l)return warn("useLocator can be called only once.");l=!0,f.targetIDE&&(C=f.targetIDE);let y=createKeyHold(f.key??"Alt",{preventDefault:!0});d(()=>y);});}function O(f,y){if(!C)return warn("Please set `targetIDE` it in useLocator options.");let N=Re(f,y);N&&Te(C,N);}return {useLocator:x,togglePluginLocatorMode:c,enabledByDebugger:i,addClickInterceptor:D,setPluginHighlightTarget:b,onDebuggerHoveredComponentChange:s,openElementSourceCode:O}}function R(e,t,o,n,r=!1){if(typeof e=="number")return e===1/0?{type:0,value:a}:e===-1/0?{type:0,value:b}:Number.isNaN(e)?{type:0,value:c}:{type:0,value:e};if(typeof e=="boolean")return {type:1,value:e};if(typeof e=="string")return {type:2,value:e};if(e===null)return {type:3};if(e===void 0)return {type:4};if(typeof e=="symbol")return {type:5,value:e.description??""};if(typeof e=="function")return {type:8,value:e.name};if(e instanceof HTMLElement)return {type:10,value:{name:e.tagName,id:o.set(e)}};if(!r&&Be(e)){let i=unwrap(e),p=o.set(i);return n&&n(p,i),{type:12,value:{value:R(i,t,o,void 0,!0),id:p}}}if(Array.isArray(e)){let i={type:6,value:e.length};return t&&(i.children=e.map(p=>R(p,!0,o,n,r))),i}let d=Object.prototype.toString.call(e).slice(8,-1);if(d==="Object"){let i=e,p={type:7,value:Object.keys(i).length};if(t){let c=p.children={};for(let[u,S]of Object.entries(Object.getOwnPropertyDescriptors(e)))c[u]=S.get?{type:9,value:u}:R(S.value,!0,o,n,r);}return p}return {type:11,value:d}}var So=0,H=class{obj={};map=new WeakMap;get(t){return this.obj[t]}getId(t){return this.map.get(t)}set(t){let o=this.map.get(t);return o!==void 0||(o=(So++).toString(36),this.obj[o]=t,this.map.set(t,o)),o}};var pe=DEV,G=new WeakMap;globalThis._$onStoreNodeUpdate=(e,t,o,n)=>{let r=G.get(e);if(r)for(let a of r)a(e,t,o,n);};function at(e,t){if(Array.isArray(e))for(let o=0;o<e.length;o++){let n=e[o];pe.isWrappable(n)&&t(o.toString(),n);}else for(let o in e){let{value:n,get:r}=Object.getOwnPropertyDescriptor(e,o);!r&&pe.isWrappable(n)&&t(o,n);}}function dt({storePath:e,storeSymbol:t},o,n){if(t!==o||e.length!==n.length)return !1;if(e==n)return !0;for(let r=0;r<e.length;r++)if(e[r]!=n[r])return !1;return !0}function lt(e,t){e=unwrap(e);let o=Symbol("inspect-store");return untrack(()=>(n(e,[]),()=>r(e,[])));function n(a,d){let i=G.get(a);if(i&&i.some(c=>dt(c,o,d)))return;let p=(c,u,S,m)=>{if(typeof u=="symbol")return;let s=[...d,u];untrack(()=>{u==="length"&&typeof S=="number"&&Array.isArray(a)?t({path:d,property:u,length:S}):(pe.isWrappable(m)&&r(m,s),pe.isWrappable(S)&&n(S,s),t({path:d,property:u,value:S}));});};p.storePath=d,p.storeSymbol=o,i?i.push(p):G.set(a,[p]),at(a,(c,u)=>n(u,[...d,c]));}function r(a,d){let i=G.get(a);if(!i)return;let p=i.splice(i.findIndex(c=>dt(c,o,d)),1);i.length===0&&G.delete(a),p.length&&at(a,(c,u)=>r(u,[...d,c]));}}var $e=class{constructor(t){this.getValue=t;}trackedStores=[];selected=!1;addStoreObserver(t){this.trackedStores.push(t);}unsubscribe(){for(let t of this.trackedStores)t();this.trackedStores=[];}reset(){this.unsubscribe(),this.selected=!1;}isSelected(){return this.selected}setSelected(t){this.selected=t,t||this.unsubscribe();}},J=class{record={};get(t){return this.record[t]}add(t,o){this.record[t]=new $e(o);}reset(){for(let t of Object.values(this.record))t.reset();}},X,Y,q=Symbol("inspector");function st(e,t){let{value:o}=e,n=T(e),r;return Y.add(`signal:${n}`,()=>e.value),F(e)?r=be(he(o)):(r=ee(e),W(e,a=>t(n,a),q)),{type:Ie(e),name:r,id:n,value:R(o,!1,X)}}function pt(e){if(L(e)&&$(e,q),e.sourceMap)for(let t of Object.values(e.sourceMap))$(t,q);if(e.owned)for(let t of e.owned)$(t,q);}function ut(e,t){let{onSignalUpdate:o,onValueUpdate:n}=t;X=new H,Y=new J;let r=T(e),a=M(e),d=te(e),{sourceMap:i,owned:p}=e,c=()=>e.value,u={id:r,name:d,type:a};if(a===7){i=void 0,p=null;let m=Object.getOwnPropertySymbols(e.context);if(m.length!==1)throw new Error("Context field has more than one symbol. This is not expected.");{let s=e.context[m[0]];c=()=>s;}}let S;if(L(e)){if(Q(e)){let m=oe(e);m&&(i=m.sourceMap,p=m.owned,c=()=>m.value);let s=!!e.props[$PROXY],g={};for(let[b,h]of Object.entries(Object.getOwnPropertyDescriptors(e.props)))h.get?g[b]={type:9,value:b}:(g[b]=R(h.value,!1,X),h.value instanceof Object&&Y.add(`prop:${b}`,()=>h.value));if(u.props={proxy:s,record:g},e.location&&(u.location=e.location),s){let b=Object.keys(g);S=()=>{let h=Object.keys(e.props),v=new Set(h),D=[],C=!1;for(let l of b)v.has(l)?v.delete(l):(C=!0,D.push(l));if(!(!C&&!v.size))return b=h,{added:Array.from(v),removed:D}};}}else W(e,n,q);u.value=R(c(),!1,X);}if(i){let m=Object.values(i);u.signals=Array(m.length);for(let s=0;s<m.length;s++)u.signals[s]=st(m[s],o);}else u.signals=[];if(p)for(let m of p)k(m)&&u.signals.push(st(m,o));return Y.add("value",c),{details:u,valueMap:Y,nodeIdMap:X,checkProxyProps:S}}function ct(e,{eventHub:t}){let o,n,r=new H,a=new J,d,{pushStoreUpdate:i,pushValueUpdate:p,triggerPropsCheck:c,clearUpdates:u}=(()=>{let s=new Set,g=[],b=!1,h=scheduleIdle(()=>{let D=[];for(let C of s){let l=a.get(C);if(!l||!l.getValue)continue;let I=l.isSelected(),x=R(l.getValue(),I,r,I&&S.bind(null,C,l));D.push(["value",{id:C,value:x}]);}s.clear();for(let[C,l,I]of g)D.push(["store",{valueNodeId:C,storeId:l,value:"length"in I?I.length:I.value===void 0?void 0:R(I.value,!0,r,void 0,!0),path:I.path,property:I.property}]);if(g=[],b&&d){let C=d();C&&D.push(["props",{added:C.added,removed:C.removed}]),b=!1;}D.length&&t.emit("InspectorUpdate",D);}),v=throttle(h,200);return {pushValueUpdate(D){s.add(D),h();},pushStoreUpdate(D,C,l){g.push([D,C,l]),h();},triggerPropsCheck(){b=!0,v();},clearUpdates(){s.clear(),g=[],b=!1,h.clear(),v.clear();}}})();function S(s,g,b,h){g.addStoreObserver(lt(h,v=>i(s,b,v)));}function m(s){n&&pt(n),n=s,d=void 0,o=void 0,a.reset(),u(),s&&untrack(()=>{let g=ut(s,{onSignalUpdate:b=>p(`signal:${b}`),onValueUpdate:()=>p("value")});t.emit("InspectedNodeDetails",g.details),a=g.valueMap,r=g.nodeIdMap,o=g.details,d=g.checkProxyProps;});}return createEffect(()=>{!e()||(onCleanup(()=>m(void 0)),Ne(()=>{d&&c();}));}),{getLastDetails:()=>o,setInspectedNode(s){if(!s)return m(void 0);let{rootId:g,nodeId:b}=s,h=mt(g,b);if(!h||!h.inspectedOwner)return m(void 0);m(h.inspectedOwner);},toggleValueNode({id:s,selected:g}){let b=a.get(s);if(!b)return warn("Could not find value node:",s);b.setSelected(g),p(s);},getElementById(s){let g=r.get(s);if(g instanceof HTMLElement)return g}}}var E=A(()=>{let[e,t]=createSimpleEmitter(),[o,n]=createSimpleEmitter(),r=createEventHub(l=>({ComputationUpdates:l(),StructureUpdates:l(),InspectorUpdate:l(),InspectedNodeDetails:l()})),[a,d,i]=(()=>{let l=atom(),I=atom(),x=atom(!1);return createComputed(defer(createMemo(()=>!!l()?.()||!!I()?.()),O=>{batch(()=>{a(O),O||(c({}),v.togglePluginLocatorMode(!1),v.setPluginHighlightTarget(null),h.setInspectedNode(null));});})),[x,O=>void I(()=>O),O=>void l(()=>O)]})(),[p,c]=createSignal({});function u(l,I){let x=p()[l];if(!!x){for(let O of x)if(O.id===I)return O}}function S(l){c(I=>{let x=Object.assign({},I);return delete x[l],x}),s({removed:l});}function m(l,I){c(x=>Object.assign(x,{[l.id]:I})),s({updated:l});}let s=(()=>{let l=[],I=new Set,x=throttle(()=>{let f={};for(let y=l.length-1;y>=0;y--){let N=l[y],{id:w}=N;!I.has(w)&&!f[w]&&(f[w]=N);}r.emit("StructureUpdates",{updated:f,removed:[...I]}),l.length=0,I.clear();},50);return f=>{if("removed"in f)I.add(f.removed);else {if(I.has(f.updated.id))return;l.push(f.updated);}x();}})(),g=Ye(l=>{r.emit("ComputationUpdates",l);}),b=(l,I)=>{g({rootId:l,id:I});},h=ct(a,{eventHub:r}),v=rt({components:p,debuggerEnabled:a,findComponent:u,getElementById:h.getElementById,setLocatorEnabledSignal:i});function D(){let l=h.getLastDetails();!l||!l.location||v.openElementSourceCode(l.location,l.name);}function C(){return {listenTo:r.on,setUserEnabledSignal:d,triggerUpdate:t,forceTriggerUpdate:n,openInspectedNodeLocation:D,inspector:{setInspectedNode:h.setInspectedNode,toggleValueNode:h.toggleValueNode},locator:{toggleEnabled:v.togglePluginLocatorMode,enabledByDebugger:v.enabledByDebugger,addClickInterceptor:v.addClickInterceptor,setHighlightTarget:v.setPluginHighlightTarget,onHoveredComponent:v.onDebuggerHoveredComponentChange}}}return {onUpdate:e,onForceUpdate:o,enabled:a,useDebugger:C,updateRoot:m,removeRoot:S,pushComputationUpdate:b,useLocator:v.useLocator}});var ue=new Map,mt=(e,t)=>{let o=ue.get(e);return o?o.forceUpdate(t):null};function Po(e){A(t=>{V(e,t);let o=T(e),n=(d,i)=>{e.isDisposed||(untrack(E.enabled)&&a(),E.pushComputationUpdate(d,i));},r=untrackedCallback(d=>{if(e.isDisposed)return null;let i=Qe(e,{onComputationUpdate:n,rootId:o,inspectedId:d??null});return E.updateRoot(i.root,i.components),i}),a=throttle(r,300);ue.set(o,{forceUpdate:r,dispose:t}),E.onUpdate(a),E.onForceUpdate(r),createEffect(()=>{E.enabled()&&r();}),Ce(e,{rootId:o,triggerRootUpdate:a,forceRootUpdate:r}),onCleanup(()=>{Ge(e),E.removeRoot(o),e.isDisposed=!0,ue.delete(o);});});}function ce(e=U()){let t=e;if(!t)return warn("reatachOwner helper should be called synchronously in a reactive owner.");_o(t,(o,n)=>{if(n!==B&&(o.sdtAttached=null,M(o,0),Po(o),n)){n.triggerRootUpdate();let r=yt(o);if(!r.owner)return warn("PARENT_SHOULD_BE_ALIVE");o.sdtAttached=r.owner;let a=()=>{let p=yt(o);p.owner?(r=p,o.sdtAttached=r.owner,V(r.root,a)):(o.sdtAttached=null,i());},d=V(r.root,a),i=V(o,()=>{o.isDisposed=!0,o.sdtAttached=null,d(),n.triggerRootUpdate();});}});}function Ho(){ue.forEach(e=>e.dispose());}var St=!1;function Ae(){St||(St=!0,ve(e=>ce(e)));}function yt(e){let t=null,o=null,n=e;for(;n.owner&&!o;)n=n.owner,Z(n)&&(n.isDisposed?t=n:o=n);return o?{owner:t?.owner??e.owner,root:o}:{owner:null,root:null}}function _o(e,t){let o=[],n;do{if(Z(e)){if("sdtAttached"in e){n||(n=ze(e));break}if(e.sdtContext===B){n=B;break}o.push(e);}e=e.owner;}while(e);for(let r=o.length-1;r>=0;r--){let a=o[r];t(a,n),a.sdtContext&&(n=a.sdtContext);}}var $r=e=>(ce(),e.children),Hr=E.useDebugger,_r=E.useLocator;

export { $r as A, Hr as B, _r as C, U as a, L as b, k as c, ye as d, Z as e, F as f, ee as g, Ie as h, j as i, Rt as j, V as k, Tt as l, Ut as m, Mt as n, A as o, Ne as p, ve as q, De as r, qe as s, W as t, $ as u, Vt as v, Le as w, ce as x, Ho as y, Ae as z };