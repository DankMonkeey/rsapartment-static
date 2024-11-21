"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{9376:function(e,t,n){var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},2756:function(e,t,n){let r,o;n.d(t,{J:function(){return L}});var l=n(2265),a=n(4536),u=n(7847),s=n(3689),i=n(7684),c=n(7388),p=n(7634),d=n(7105),v=n(7863),f=n(4),m=n(2539),b=n(293),P=n(48),E=n(6802),h=n(8198),g=n(8036),y=n(9017),w=n(1948),S=n(4518),k=((r=k||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),O=((o=O||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let M={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,l.createContext)(null);function x(e){let t=(0,l.useContext)(I);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Popover /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}I.displayName="PopoverContext";let T=(0,l.createContext)(null);function A(e){let t=(0,l.useContext)(T);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Popover /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}T.displayName="PopoverAPIContext";let C=(0,l.createContext)(null);function R(){return(0,l.useContext)(C)}C.displayName="PopoverGroupContext";let B=(0,l.createContext)(null);function N(e,t){return(0,a.E)(t.type,M,e,t)}B.displayName="PopoverPanelContext";let j=u.AN.RenderStrategy|u.AN.Static,F=u.AN.RenderStrategy|u.AN.Static,L=Object.assign((0,u.yV)(function(e,t){var n;let r=(0,l.useRef)(null),o=(0,s.T)(t,(0,s.h)(e=>{r.current=e})),i=(0,l.useRef)([]),c=(0,l.useReducer)(N,{popoverState:1,buttons:i,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:p,button:f,buttonId:b,panel:h,panelId:y,beforePanelSentinel:S,afterPanelSentinel:k},O]=c,M=(0,P.i)(null!=(n=r.current)?n:f),x=(0,l.useMemo)(()=>{if(!f||!h)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(f))^Number(null==e?void 0:e.contains(h)))return!0;let e=(0,d.GO)(),t=e.indexOf(f),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],l=e[r];return!h.contains(o)&&!h.contains(l)},[f,h]),A=(0,w.E)(b),C=(0,w.E)(y),j=(0,l.useMemo)(()=>({buttonId:A,panelId:C,close:()=>O({type:1})}),[A,C,O]),F=R(),L=null==F?void 0:F.registerPopover,Z=(0,g.z)(()=>{var e;return null!=(e=null==F?void 0:F.isFocusWithinPopoverGroup())?e:(null==M?void 0:M.activeElement)&&((null==f?void 0:f.contains(M.activeElement))||(null==h?void 0:h.contains(M.activeElement)))});(0,l.useEffect)(()=>null==L?void 0:L(j),[L,j]),(0,E.O)(null==M?void 0:M.defaultView,"focus",e=>{var t,n,r,o;0===p&&(Z()||f&&h&&e.target!==window&&(null!=(n=null==(t=S.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=k.current)?void 0:r.contains)&&o.call(r,e.target)||O({type:1})))},!0),(0,m.O)([f,h],(e,t)=>{O({type:1}),(0,d.sP)(t,d.tJ.Loose)||(e.preventDefault(),null==f||f.focus())},0===p);let z=(0,g.z)(e=>{O({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:f:f;null==t||t.focus()}),D=(0,l.useMemo)(()=>({close:z,isPortalled:x}),[z,x]),V=(0,l.useMemo)(()=>({open:0===p,close:z}),[p,z]);return l.createElement(B.Provider,{value:null},l.createElement(I.Provider,{value:c},l.createElement(T.Provider,{value:D},l.createElement(v.up,{value:(0,a.E)(p,{0:v.ZM.Open,1:v.ZM.Closed})},(0,u.sY)({ourProps:{ref:o},theirProps:e,slot:V,defaultTag:"div",name:"Popover"})))))}),{Button:(0,u.yV)(function(e,t){let n=(0,i.M)(),{id:r="headlessui-popover-button-".concat(n),...o}=e,[v,m]=x("Popover.Button"),{isPortalled:b}=A("Popover.Button"),E=(0,l.useRef)(null),w="headlessui-focus-sentinel-".concat((0,i.M)()),S=R(),k=null==S?void 0:S.closeOthers,O=null!==(0,l.useContext)(B);(0,l.useEffect)(()=>{if(!O)return m({type:3,buttonId:r}),()=>{m({type:3,buttonId:null})}},[O,r,m]);let[M]=(0,l.useState)(()=>Symbol()),I=(0,s.T)(E,t,O?null:e=>{if(e)v.buttons.current.push(M);else{let e=v.buttons.current.indexOf(M);-1!==e&&v.buttons.current.splice(e,1)}v.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&m({type:2,button:e})}),T=(0,s.T)(E,t),C=(0,P.i)(E),N=(0,g.z)(e=>{var t,n,r;if(O){if(1===v.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),m({type:1}),null==(r=v.button)||r.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===v.popoverState&&(null==k||k(v.buttonId)),m({type:0});break;case c.R.Escape:if(0!==v.popoverState)return null==k?void 0:k(v.buttonId);if(!E.current||null!=C&&C.activeElement&&!E.current.contains(C.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1})}}),j=(0,g.z)(e=>{O||e.key===c.R.Space&&e.preventDefault()}),F=(0,g.z)(t=>{var n,r;(0,p.P)(t.currentTarget)||e.disabled||(O?(m({type:1}),null==(n=v.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===v.popoverState&&(null==k||k(v.buttonId)),m({type:0}),null==(r=v.button)||r.focus()))}),L=(0,g.z)(e=>{e.preventDefault(),e.stopPropagation()}),Z=0===v.popoverState,z=(0,l.useMemo)(()=>({open:Z}),[Z]),D=(0,f.f)(e,E),V=O?{ref:T,type:D,onKeyDown:N,onClick:F}:{ref:I,id:v.buttonId,type:D,"aria-expanded":e.disabled?void 0:0===v.popoverState,"aria-controls":v.panel?v.panelId:void 0,onKeyDown:N,onKeyUp:j,onClick:F,onMouseDown:L},G=(0,y.l)(),W=(0,g.z)(()=>{let e=v.panel;e&&(0,a.E)(G.current,{[y.N.Forwards]:()=>(0,d.jA)(e,d.TO.First),[y.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})===d.fE.Error&&(0,d.jA)((0,d.GO)().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,a.E)(G.current,{[y.N.Forwards]:d.TO.Next,[y.N.Backwards]:d.TO.Previous}),{relativeTo:v.button})});return l.createElement(l.Fragment,null,(0,u.sY)({ourProps:V,theirProps:o,slot:z,defaultTag:"button",name:"Popover.Button"}),Z&&!O&&b&&l.createElement(h._,{id:w,features:h.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:W}))}),Overlay:(0,u.yV)(function(e,t){let n=(0,i.M)(),{id:r="headlessui-popover-overlay-".concat(n),...o}=e,[{popoverState:a},c]=x("Popover.Overlay"),d=(0,s.T)(t),f=(0,v.oJ)(),m=null!==f?(f&v.ZM.Open)===v.ZM.Open:0===a,b=(0,g.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();c({type:1})}),P=(0,l.useMemo)(()=>({open:0===a}),[a]);return(0,u.sY)({ourProps:{ref:d,id:r,"aria-hidden":!0,onClick:b},theirProps:o,slot:P,defaultTag:"div",features:j,visible:m,name:"Popover.Overlay"})}),Panel:(0,u.yV)(function(e,t){let n=(0,i.M)(),{id:r="headlessui-popover-panel-".concat(n),focus:o=!1,...p}=e,[f,m]=x("Popover.Panel"),{close:b,isPortalled:E}=A("Popover.Panel"),w="headlessui-focus-sentinel-before-".concat((0,i.M)()),k="headlessui-focus-sentinel-after-".concat((0,i.M)()),O=(0,l.useRef)(null),M=(0,s.T)(O,t,e=>{m({type:4,panel:e})}),I=(0,P.i)(O);(0,S.e)(()=>(m({type:5,panelId:r}),()=>{m({type:5,panelId:null})}),[r,m]);let T=(0,v.oJ)(),C=null!==T?(T&v.ZM.Open)===v.ZM.Open:0===f.popoverState,R=(0,g.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==f.popoverState||!O.current||null!=I&&I.activeElement&&!O.current.contains(I.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1}),null==(t=f.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===f.popoverState&&(null==(t=e.unmount)||t)&&m({type:4,panel:null})},[f.popoverState,e.unmount,e.static,m]),(0,l.useEffect)(()=>{if(!o||0!==f.popoverState||!O.current)return;let e=null==I?void 0:I.activeElement;O.current.contains(e)||(0,d.jA)(O.current,d.TO.First)},[o,O,f.popoverState]);let N=(0,l.useMemo)(()=>({open:0===f.popoverState,close:b}),[f,b]),j={ref:M,id:r,onKeyDown:R,onBlur:o&&0===f.popoverState?e=>{var t,n,r,o,l;let a=e.relatedTarget;a&&O.current&&(null!=(t=O.current)&&t.contains(a)||(m({type:1}),(null!=(r=null==(n=f.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,a)||null!=(l=null==(o=f.afterPanelSentinel.current)?void 0:o.contains)&&l.call(o,a))&&a.focus({preventScroll:!0})))}:void 0,tabIndex:-1},L=(0,y.l)(),Z=(0,g.z)(()=>{let e=O.current;e&&(0,a.E)(L.current,{[y.N.Forwards]:()=>{var t;(0,d.jA)(e,d.TO.First)===d.fE.Error&&(null==(t=f.afterPanelSentinel.current)||t.focus())},[y.N.Backwards]:()=>{var e;null==(e=f.button)||e.focus({preventScroll:!0})}})}),z=(0,g.z)(()=>{let e=O.current;e&&(0,a.E)(L.current,{[y.N.Forwards]:()=>{var e;if(!f.button)return;let t=(0,d.GO)(),n=t.indexOf(f.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=f.panel)&&e.contains(t)){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}(0,d.jA)(o,d.TO.First,{sorted:!1})},[y.N.Backwards]:()=>{var t;(0,d.jA)(e,d.TO.Previous)===d.fE.Error&&(null==(t=f.button)||t.focus())}})});return l.createElement(B.Provider,{value:r},C&&E&&l.createElement(h._,{id:w,ref:f.beforePanelSentinel,features:h.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Z}),(0,u.sY)({ourProps:j,theirProps:p,slot:N,defaultTag:"div",features:F,visible:C,name:"Popover.Panel"}),C&&E&&l.createElement(h._,{id:k,ref:f.afterPanelSentinel,features:h.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:z}))}),Group:(0,u.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,s.T)(n,t),[o,a]=(0,l.useState)([]),i=(0,g.z)(e=>{a(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,g.z)(e=>(a(t=>[...t,e]),()=>i(e))),p=(0,g.z)(()=>{var e;let t=(0,b.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),d=(0,g.z)(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),v=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:i,isFocusWithinPopoverGroup:p,closeOthers:d}),[c,i,p,d]),f=(0,l.useMemo)(()=>({}),[]);return l.createElement(C.Provider,{value:v},(0,u.sY)({ourProps:{ref:r},theirProps:e,slot:f,defaultTag:"div",name:"Popover.Group"}))})})},9812:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))});t.Z=o},1077:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))});t.Z=o},2700:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))});t.Z=o},3910:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});t.Z=o},588:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"}))});t.Z=o},7165:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});t.Z=o}}]);