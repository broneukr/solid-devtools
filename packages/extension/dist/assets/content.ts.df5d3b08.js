import{C as g,i as u,c as v,g as f,y as C,p as O,r as M,l as E}from"./chunk-7NOROMYZ.f0d1f7d8.js";import{e as h,w}from"./chunk-OKMKW7SY.b5cd78f7.js";const N="/assets/realWorld.a90e9989.js",i=chrome.runtime.getManifest().version,n="0.23.0",a=chrome.runtime.connect({name:g});let c=!1;u();const d=O(),l=M(),{postPortMessage:r,onPortMessage:p}=v(a);{const e=document.createElement("script");e.src=chrome.runtime.getURL(N),e.type="module",e.addEventListener("error",s=>h("Real world script failed to load.",s)),document.head.append(e);const o=s=>{s.data==="__SolidOnPage__"&&(r("SolidOnPage"),window.removeEventListener("message",o))};window.addEventListener("message",o)}d("ClientConnected",e=>{console.log(`\u{1F6A7} %csolid-devtools%c is in early development! \u{1F6A7}
Please report any bugs to https://github.com/thetarnav/solid-devtools/issues`,"color: #fff; background: rgba(181, 111, 22, 0.7); padding: 1px 4px;","color: #e38b1b");const o=t=>t.split(".").map(Number),s=o(e),m=o(n);for(let t=0;t<2;t++)if(s[t]!==m[t]){w(`${t===0?"MAJOR":"MINOR"} VERSION MISMATCH!
Extension version: ${i}
Client version: ${e}
Expected client version: ${n}
Please install "solid-devtools@${n}" in your project`);break}r("Versions",{client:e,extension:i,expectedClient:n}),d("ResetPanel",()=>r("ResetPanel")),c&&l("DevtoolsOpened")});p("DevtoolsOpened",()=>{c=!0,l("DevtoolsOpened")});p("DevtoolsClosed",()=>l("DevtoolsClosed"));E(e=>{const o={forwarding:!0,id:e.id,payload:e.payload};a.postMessage(o)});a.onMessage.addListener(e=>{f(e)&&C(e)});
