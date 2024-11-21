"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{3145:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(8461),o=n.n(r)},8461:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getImageProps:function(){return l}});let r=n(7043),o=n(5346),a=n(5878),u=r._(n(5084));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let i=a.Image},7388:function(e,t,n){let r;n.d(t,{R:function(){return o}});var o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},1492:function(e,t,n){let r,o,a;n.d(t,{O:function(){return _}});var u=n(2265),l=n(7847),i=n(7684),s=n(4536),c=n(7388),d=n(7105),f=n(4518),p=n(3689),m=n(4),v=n(1948),h=n(8198);function b(e){let{onFocus:t}=e,[n,r]=(0,u.useState)(!0);return n?u.createElement(h._,{as:"button",type:"button",features:h.A.Focusable,onFocus:e=>{e.preventDefault();let n,o=50;n=requestAnimationFrame(function e(){if(o--<=0){n&&cancelAnimationFrame(n);return}if(t()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(e)})}}):null}var g=n(8036),y=n(6822),E=n(293);let x=u.createContext(null);function w(e){let{children:t}=e,n=u.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return u.createElement(x.Provider,{value:n},t)}function T(e){let t=u.useContext(x);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let o=[],a=r;for(;a;)o.push(a.index),a=a.return;return"$."+o.join(".")}(),[r,o]=t.current.get(e,n);return u.useEffect(()=>o,[]),r}var O=((r=O||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),A=((o=A||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),P=((a=P||{})[a.SetSelectedIndex=0]="SetSelectedIndex",a[a.RegisterTab=1]="RegisterTab",a[a.UnregisterTab=2]="UnregisterTab",a[a.RegisterPanel=3]="RegisterPanel",a[a.UnregisterPanel=4]="UnregisterPanel",a);let S={0(e,t){var n;let r=(0,d.z2)(e.tabs,e=>e.current),o=(0,d.z2)(e.panels,e=>e.current),a=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),u={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===a.length?u:{...u,selectedIndex:(0,s.E)(n,{0:()=>r.indexOf(a[0]),1:()=>r.indexOf(a[a.length-1])})}}let l=r.slice(0,t.index),i=[...r.slice(t.index),...l].find(e=>a.includes(e));if(!i)return u;let c=null!=(n=r.indexOf(i))?n:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...u,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=(0,d.z2)([...e.tabs,t.tab],e=>e.current),a=null!=(n=o.indexOf(r))?n:e.selectedIndex;return -1===a&&(a=e.selectedIndex),{...e,tabs:o,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},I=(0,u.createContext)(null);function N(e){let t=(0,u.useContext)(I);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}I.displayName="TabsDataContext";let R=(0,u.createContext)(null);function F(e){let t=(0,u.useContext)(R);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return t}function j(e,t){return(0,s.E)(t.type,S,e,t)}R.displayName="TabsActionsContext";let k=u.Fragment,M=l.AN.RenderStrategy|l.AN.Static,_=Object.assign((0,l.yV)(function(e,t){var n,r;let o=(0,i.M)(),{id:a="headlessui-tabs-tab-".concat(o),...v}=e,{orientation:h,activation:b,selectedIndex:x,tabs:w,panels:O}=N("Tab"),A=F("Tab"),P=N("Tab"),S=(0,u.useRef)(null),I=(0,p.T)(S,t);(0,f.e)(()=>A.registerTab(S),[A,S]);let R=T("tabs"),j=w.indexOf(S);-1===j&&(j=R);let k=j===x,M=(0,g.z)(e=>{var t;let n=e();if(n===d.fE.Success&&"auto"===b){let e=null==(t=(0,E.r)(S))?void 0:t.activeElement,n=P.tabs.findIndex(t=>t.current===e);-1!==n&&A.change(n)}return n}),_=(0,g.z)(e=>{let t=w.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),A.change(j);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),M(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),M(()=>(0,d.jA)(t,d.TO.Last))}if(M(()=>(0,s.E)(h,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),C=(0,u.useRef)(!1),D=(0,g.z)(()=>{var e;C.current||(C.current=!0,null==(e=S.current)||e.focus(),A.change(j),(0,y.Y)(()=>{C.current=!1}))}),L=(0,g.z)(e=>{e.preventDefault()}),z=(0,u.useMemo)(()=>({selected:k}),[k]),U={ref:I,onKeyDown:_,onMouseDown:L,onClick:D,id:a,role:"tab",type:(0,m.f)(e,S),"aria-controls":null==(r=null==(n=O[j])?void 0:n.current)?void 0:r.id,"aria-selected":k,tabIndex:k?0:-1};return(0,l.sY)({ourProps:U,theirProps:v,slot:z,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,l.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:a,selectedIndex:i=null,...s}=e,c=r?"vertical":"horizontal",m=o?"manual":"auto",h=null!==i,y=(0,p.T)(t),[E,x]=(0,u.useReducer)(j,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),T=(0,u.useMemo)(()=>({selectedIndex:E.selectedIndex}),[E.selectedIndex]),O=(0,v.E)(a||(()=>{})),A=(0,v.E)(E.tabs),P=(0,u.useMemo)(()=>({orientation:c,activation:m,...E}),[c,m,E]),S=(0,g.z)(e=>(x({type:1,tab:e}),()=>x({type:2,tab:e}))),N=(0,g.z)(e=>(x({type:3,panel:e}),()=>x({type:4,panel:e}))),F=(0,g.z)(e=>{M.current!==e&&O.current(e),h||x({type:0,index:e})}),M=(0,v.E)(h?e.selectedIndex:E.selectedIndex),_=(0,u.useMemo)(()=>({registerTab:S,registerPanel:N,change:F}),[]);return(0,f.e)(()=>{x({type:0,index:null!=i?i:n})},[i]),(0,f.e)(()=>{if(void 0===M.current||E.tabs.length<=0)return;let e=(0,d.z2)(E.tabs,e=>e.current);e.some((e,t)=>E.tabs[t]!==e)&&F(e.indexOf(E.tabs[M.current]))}),u.createElement(w,null,u.createElement(R.Provider,{value:_},u.createElement(I.Provider,{value:P},P.tabs.length<=0&&u.createElement(b,{onFocus:()=>{var e,t;for(let n of A.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,l.sY)({ourProps:{ref:y},theirProps:s,slot:T,defaultTag:k,name:"Tabs"}))))}),List:(0,l.yV)(function(e,t){let{orientation:n,selectedIndex:r}=N("Tab.List"),o=(0,p.T)(t);return(0,l.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,l.yV)(function(e,t){let{selectedIndex:n}=N("Tab.Panels"),r=(0,p.T)(t),o=(0,u.useMemo)(()=>({selectedIndex:n}),[n]);return(0,l.sY)({ourProps:{ref:r},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,l.yV)(function(e,t){var n,r,o,a;let s=(0,i.M)(),{id:c="headlessui-tabs-panel-".concat(s),tabIndex:d=0,...m}=e,{selectedIndex:v,tabs:b,panels:g}=N("Tab.Panel"),y=F("Tab.Panel"),E=(0,u.useRef)(null),x=(0,p.T)(E,t);(0,f.e)(()=>y.registerPanel(E),[y,E]);let w=T("panels"),O=g.indexOf(E);-1===O&&(O=w);let A=O===v,P=(0,u.useMemo)(()=>({selected:A}),[A]),S={ref:x,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=b[O])?void 0:n.current)?void 0:r.id,tabIndex:A?d:-1};return A||null!=(o=m.unmount)&&!o||null!=(a=m.static)&&a?(0,l.sY)({ourProps:S,theirProps:m,slot:P,defaultTag:"div",features:M,visible:A,name:"Tabs.Panel"}):u.createElement(h._,{as:"span",...S})})})},8036:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(1948);let a=function(e){let t=(0,o.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},7684:function(e,t,n){n.d(t,{M:function(){return i}});var r,o=n(2265),a=n(4518),u=n(2238),l=n(1424);let i=null!=(r=o.useId)?r:function(){let e=(0,u.H)(),[t,n]=o.useState(e?()=>l.O.nextId():null);return(0,a.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},4518:function(e,t,n){n.d(t,{e:function(){return a}});var r=n(2265),o=n(1424);let a=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1948:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(2265),o=n(4518);function a(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},4:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(2265),o=n(4518);function a(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function u(e,t){let[n,u]=(0,r.useState)(()=>a(e));return(0,o.e)(()=>{u(a(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&u("button")},[n,t]),n}},2238:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(2265),o=n(1424);function a(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},3689:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return u}});var r=n(2265),o=n(8036);let a=Symbol();function u(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[a]:t})}function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let u=(0,r.useRef)(t);(0,r.useEffect)(()=>{u.current=t},[t]);let l=(0,o.z)(e=>{for(let t of u.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[a]))?void 0:l}},8198:function(e,t,n){let r;n.d(t,{A:function(){return a},_:function(){return u}});var o=n(7847),a=((r=a||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let u=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:a,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},2120:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},1424:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);class u{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){a(this,"current",this.detect()),a(this,"handoffState","pending"),a(this,"currentId",0)}}let l=new u},7105:function(e,t,n){let r,o,a,u,l;n.d(t,{C5:function(){return g},GO:function(){return m},TO:function(){return d},fE:function(){return f},jA:function(){return E},sP:function(){return h},tJ:function(){return v},z2:function(){return y}});var i=n(4536),s=n(293);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var d=((r=d||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),f=((o=f||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),p=((a=p||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a);function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var v=((u=v||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u);function h(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=(0,s.r)(e))?void 0:t.body)&&(0,i.E)(n,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var b=((l=b||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function g(e){null==e||e.focus({preventScroll:!0})}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t){var n,r,o;let{sorted:a=!0,relativeTo:u=null,skipElements:l=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?a?y(e):e:m(e);l.length>0&&s.length>1&&(s=s.filter(e=>!l.includes(e))),u=null!=u?u:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(u))-1;if(4&t)return Math.max(0,s.indexOf(u))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,v=s.length,h;do{if(p>=v||p+v<=0)return 0;let e=d+p;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(h=s[e])||h.focus(f),p+=c}while(h!==i.activeElement);return 6&t&&null!=(o=null==(r=null==(n=h)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},4536:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];if(e in t){let n=t[e];return"function"==typeof n?n(...o):n}let u=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},6822:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},293:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(1424);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},7847:function(e,t,n){let r,o;n.d(t,{AN:function(){return i},l4:function(){return s},oA:function(){return m},sY:function(){return c},yV:function(){return p}});var a=n(2265),u=n(2120),l=n(4536),i=((r=i||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:a,visible:u=!0,name:i}=e,s=f(n,t);if(u)return d(s,r,o,i);let c=null!=a?a:0;if(2&c){let{static:e=!1,...t}=s;if(e)return d(t,r,o,i)}if(1&c){let{unmount:e=!0,...t}=s;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,o,i)})}return d(s,r,o,i)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,{as:o=n,children:l,refName:i="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===a.Fragment&&Object.keys(m(s)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(s).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,u.A)(null==e?void 0:e.className(...n),s.className)}:(0,u.A)(null==e?void 0:e.className,s.className);return(0,a.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{ref:t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,a.createElement)(o,Object.assign({},v(s,["ref"]),o!==a.Fragment&&c,o!==a.Fragment&&p),d)}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(o).map(e=>[e,void 0])));for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function p(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},3727:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,r.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))});t.Z=o}}]);