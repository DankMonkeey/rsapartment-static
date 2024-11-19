"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{7388:function(e,t,n){let r;n.d(t,{R:function(){return o}});var o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},1492:function(e,t,n){let r,o,a;n.d(t,{O:function(){return M}});var l=n(2265),u=n(7847),i=n(7684),s=n(4536),c=n(7388),d=n(7105),f=n(4518),p=n(3689),h=n(4),m=n(1948),v=n(8198);function b(e){let{onFocus:t}=e,[n,r]=(0,l.useState)(!0);return n?l.createElement(v._,{as:"button",type:"button",features:v.A.Focusable,onFocus:e=>{e.preventDefault();let n,o=50;n=requestAnimationFrame(function e(){if(o--<=0){n&&cancelAnimationFrame(n);return}if(t()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(e)})}}):null}var g=n(8036),E=n(6822),y=n(293);let w=l.createContext(null);function x(e){let{children:t}=e,n=l.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return l.createElement(w.Provider,{value:n},t)}function T(e){let t=l.useContext(w);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let o=[],a=r;for(;a;)o.push(a.index),a=a.return;return"$."+o.join(".")}(),[r,o]=t.current.get(e,n);return l.useEffect(()=>o,[]),r}var O=((r=O||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),A=((o=A||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),P=((a=P||{})[a.SetSelectedIndex=0]="SetSelectedIndex",a[a.RegisterTab=1]="RegisterTab",a[a.UnregisterTab=2]="UnregisterTab",a[a.RegisterPanel=3]="RegisterPanel",a[a.UnregisterPanel=4]="UnregisterPanel",a);let N={0(e,t){var n;let r=(0,d.z2)(e.tabs,e=>e.current),o=(0,d.z2)(e.panels,e=>e.current),a=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),l={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===a.length?l:{...l,selectedIndex:(0,s.E)(n,{0:()=>r.indexOf(a[0]),1:()=>r.indexOf(a[a.length-1])})}}let u=r.slice(0,t.index),i=[...r.slice(t.index),...u].find(e=>a.includes(e));if(!i)return l;let c=null!=(n=r.indexOf(i))?n:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...l,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=(0,d.z2)([...e.tabs,t.tab],e=>e.current),a=null!=(n=o.indexOf(r))?n:e.selectedIndex;return -1===a&&(a=e.selectedIndex),{...e,tabs:o,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},S=(0,l.createContext)(null);function I(e){let t=(0,l.useContext)(S);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return t}S.displayName="TabsDataContext";let R=(0,l.createContext)(null);function k(e){let t=(0,l.useContext)(R);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}function F(e,t){return(0,s.E)(t.type,N,e,t)}R.displayName="TabsActionsContext";let j=l.Fragment,L=u.AN.RenderStrategy|u.AN.Static,M=Object.assign((0,u.yV)(function(e,t){var n,r;let o=(0,i.M)(),{id:a="headlessui-tabs-tab-".concat(o),...m}=e,{orientation:v,activation:b,selectedIndex:w,tabs:x,panels:O}=I("Tab"),A=k("Tab"),P=I("Tab"),N=(0,l.useRef)(null),S=(0,p.T)(N,t);(0,f.e)(()=>A.registerTab(N),[A,N]);let R=T("tabs"),F=x.indexOf(N);-1===F&&(F=R);let j=F===w,L=(0,g.z)(e=>{var t;let n=e();if(n===d.fE.Success&&"auto"===b){let e=null==(t=(0,y.r)(N))?void 0:t.activeElement,n=P.tabs.findIndex(t=>t.current===e);-1!==n&&A.change(n)}return n}),M=(0,g.z)(e=>{let t=x.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),A.change(F);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),L(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),L(()=>(0,d.jA)(t,d.TO.Last))}if(L(()=>(0,s.E)(v,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),C=(0,l.useRef)(!1),D=(0,g.z)(()=>{var e;C.current||(C.current=!0,null==(e=N.current)||e.focus(),A.change(F),(0,E.Y)(()=>{C.current=!1}))}),_=(0,g.z)(e=>{e.preventDefault()}),U=(0,l.useMemo)(()=>({selected:j}),[j]),z={ref:S,onKeyDown:M,onMouseDown:_,onClick:D,id:a,role:"tab",type:(0,h.f)(e,N),"aria-controls":null==(r=null==(n=O[F])?void 0:n.current)?void 0:r.id,"aria-selected":j,tabIndex:j?0:-1};return(0,u.sY)({ourProps:z,theirProps:m,slot:U,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,u.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:a,selectedIndex:i=null,...s}=e,c=r?"vertical":"horizontal",h=o?"manual":"auto",v=null!==i,E=(0,p.T)(t),[y,w]=(0,l.useReducer)(F,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),T=(0,l.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),O=(0,m.E)(a||(()=>{})),A=(0,m.E)(y.tabs),P=(0,l.useMemo)(()=>({orientation:c,activation:h,...y}),[c,h,y]),N=(0,g.z)(e=>(w({type:1,tab:e}),()=>w({type:2,tab:e}))),I=(0,g.z)(e=>(w({type:3,panel:e}),()=>w({type:4,panel:e}))),k=(0,g.z)(e=>{L.current!==e&&O.current(e),v||w({type:0,index:e})}),L=(0,m.E)(v?e.selectedIndex:y.selectedIndex),M=(0,l.useMemo)(()=>({registerTab:N,registerPanel:I,change:k}),[]);return(0,f.e)(()=>{w({type:0,index:null!=i?i:n})},[i]),(0,f.e)(()=>{if(void 0===L.current||y.tabs.length<=0)return;let e=(0,d.z2)(y.tabs,e=>e.current);e.some((e,t)=>y.tabs[t]!==e)&&k(e.indexOf(y.tabs[L.current]))}),l.createElement(x,null,l.createElement(R.Provider,{value:M},l.createElement(S.Provider,{value:P},P.tabs.length<=0&&l.createElement(b,{onFocus:()=>{var e,t;for(let n of A.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,u.sY)({ourProps:{ref:E},theirProps:s,slot:T,defaultTag:j,name:"Tabs"}))))}),List:(0,u.yV)(function(e,t){let{orientation:n,selectedIndex:r}=I("Tab.List"),o=(0,p.T)(t);return(0,u.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,u.yV)(function(e,t){let{selectedIndex:n}=I("Tab.Panels"),r=(0,p.T)(t),o=(0,l.useMemo)(()=>({selectedIndex:n}),[n]);return(0,u.sY)({ourProps:{ref:r},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,u.yV)(function(e,t){var n,r,o,a;let s=(0,i.M)(),{id:c="headlessui-tabs-panel-".concat(s),tabIndex:d=0,...h}=e,{selectedIndex:m,tabs:b,panels:g}=I("Tab.Panel"),E=k("Tab.Panel"),y=(0,l.useRef)(null),w=(0,p.T)(y,t);(0,f.e)(()=>E.registerPanel(y),[E,y]);let x=T("panels"),O=g.indexOf(y);-1===O&&(O=x);let A=O===m,P=(0,l.useMemo)(()=>({selected:A}),[A]),N={ref:w,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=b[O])?void 0:n.current)?void 0:r.id,tabIndex:A?d:-1};return A||null!=(o=h.unmount)&&!o||null!=(a=h.static)&&a?(0,u.sY)({ourProps:N,theirProps:h,slot:P,defaultTag:"div",features:L,visible:A,name:"Tabs.Panel"}):l.createElement(v._,{as:"span",...N})})})},8036:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(2265),o=n(1948);let a=function(e){let t=(0,o.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},7684:function(e,t,n){n.d(t,{M:function(){return i}});var r,o=n(2265),a=n(4518),l=n(2238),u=n(1424);let i=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?()=>u.O.nextId():null);return(0,a.e)(()=>{null===t&&n(u.O.nextId())},[t]),null!=t?""+t:void 0}},4518:function(e,t,n){n.d(t,{e:function(){return a}});var r=n(2265),o=n(1424);let a=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1948:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(2265),o=n(4518);function a(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},4:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(2265),o=n(4518);function a(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>a(e));return(0,o.e)(()=>{l(a(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},2238:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(2265),o=n(1424);function a(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},3689:function(e,t,n){n.d(t,{T:function(){return u},h:function(){return l}});var r=n(2265),o=n(8036);let a=Symbol();function l(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[a]:t})}function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let l=(0,r.useRef)(t);(0,r.useEffect)(()=>{l.current=t},[t]);let u=(0,o.z)(e=>{for(let t of l.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[a]))?void 0:u}},8198:function(e,t,n){let r;n.d(t,{A:function(){return a},_:function(){return l}});var o=n(7847),a=((r=a||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let l=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:a,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},2120:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},1424:function(e,t,n){n.d(t,{O:function(){return u}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);class l{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){a(this,"current",this.detect()),a(this,"handoffState","pending"),a(this,"currentId",0)}}let u=new l},7105:function(e,t,n){let r,o,a,l,u;n.d(t,{C5:function(){return g},GO:function(){return h},TO:function(){return d},fE:function(){return f},jA:function(){return y},sP:function(){return v},tJ:function(){return m},z2:function(){return E}});var i=n(4536),s=n(293);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var d=((r=d||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),f=((o=f||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),p=((a=p||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a);function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var m=((l=m||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function v(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=(0,s.r)(e))?void 0:t.body)&&(0,i.E)(n,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var b=((u=b||{})[u.Keyboard=0]="Keyboard",u[u.Mouse=1]="Mouse",u);function g(e){null==e||e.focus({preventScroll:!0})}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function y(e,t){var n,r,o;let{sorted:a=!0,relativeTo:l=null,skipElements:u=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?a?E(e):e:h(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),l=null!=l?l:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(l))-1;if(4&t)return Math.max(0,s.indexOf(l))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==i.activeElement);return 6&t&&null!=(o=null==(r=null==(n=v)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&v.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},4536:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];if(e in t){let n=t[e];return"function"==typeof n?n(...o):n}let l=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}},6822:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},293:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(1424);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},7847:function(e,t,n){let r,o;n.d(t,{AN:function(){return i},l4:function(){return s},oA:function(){return h},sY:function(){return c},yV:function(){return p}});var a=n(2265),l=n(2120),u=n(4536),i=((r=i||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:a,visible:l=!0,name:i}=e,s=f(n,t);if(l)return d(s,r,o,i);let c=null!=a?a:0;if(2&c){let{static:e=!1,...t}=s;if(e)return d(t,r,o,i)}if(1&c){let{unmount:e=!0,...t}=s;return(0,u.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,o,i)})}return d(s,r,o,i)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,{as:o=n,children:u,refName:i="ref",...s}=m(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},d="function"==typeof u?u(t):u;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===a.Fragment&&Object.keys(h(s)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(s).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,l.A)(null==e?void 0:e.className(...n),s.className)}:(0,l.A)(null==e?void 0:e.className,s.className);return(0,a.cloneElement)(d,Object.assign({},f(d.props,h(m(s,["ref"]))),p,c,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{ref:t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,a.createElement)(o,Object.assign({},m(s,["ref"]),o!==a.Fragment&&c,o!==a.Fragment&&p),d)}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(o).map(e=>[e,void 0])));for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function p(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function h(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},2700:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))});t.Z=o},3910:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});t.Z=o},3727:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,r.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))});t.Z=o}}]);