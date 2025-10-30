(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function mE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Id={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function ES(){if(N_)return Ol;N_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Ol.Fragment=t,Ol.jsx=i,Ol.jsxs=i,Ol}var O_;function TS(){return O_||(O_=1,Id.exports=ES()),Id.exports}var Q=TS(),Dd={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function SS(){if(x_)return It;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.iterator;function H(M){return M===null||typeof M!="object"?null:(M=N&&M[N]||M["@@iterator"],typeof M=="function"?M:null)}var it={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},et=Object.assign,nt={};function yt(M,$,ot){this.props=M,this.context=$,this.refs=nt,this.updater=ot||it}yt.prototype.isReactComponent={},yt.prototype.setState=function(M,$){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,$,"setState")},yt.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function bt(){}bt.prototype=yt.prototype;function rt(M,$,ot){this.props=M,this.context=$,this.refs=nt,this.updater=ot||it}var Ot=rt.prototype=new bt;Ot.constructor=rt,et(Ot,yt.prototype),Ot.isPureReactComponent=!0;var gt=Array.isArray;function Rt(){}var E={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function I(M,$,ot){var lt=ot.ref;return{$$typeof:r,type:M,key:$,ref:lt!==void 0?lt:null,props:ot}}function V(M,$){return I(M.type,$,M.props)}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function L(M){var $={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ot){return $[ot]})}var w=/\/+/g;function ue(M,$){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):$.toString(36)}function Ae(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Rt,Rt):(M.status="pending",M.then(function($){M.status==="pending"&&(M.status="fulfilled",M.value=$)},function($){M.status==="pending"&&(M.status="rejected",M.reason=$)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function G(M,$,ot,lt,At){var Nt=typeof M;(Nt==="undefined"||Nt==="boolean")&&(M=null);var Bt=!1;if(M===null)Bt=!0;else switch(Nt){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(M.$$typeof){case r:case t:Bt=!0;break;case A:return Bt=M._init,G(Bt(M._payload),$,ot,lt,At)}}if(Bt)return At=At(M),Bt=lt===""?"."+ue(M,0):lt,gt(At)?(ot="",Bt!=null&&(ot=Bt.replace(w,"$&/")+"/"),G(At,$,ot,"",function(Ie){return Ie})):At!=null&&(x(At)&&(At=V(At,ot+(At.key==null||M&&M.key===At.key?"":(""+At.key).replace(w,"$&/")+"/")+Bt)),$.push(At)),1;Bt=0;var Ce=lt===""?".":lt+":";if(gt(M))for(var Pt=0;Pt<M.length;Pt++)lt=M[Pt],Nt=Ce+ue(lt,Pt),Bt+=G(lt,$,ot,Nt,At);else if(Pt=H(M),typeof Pt=="function")for(M=Pt.call(M),Pt=0;!(lt=M.next()).done;)lt=lt.value,Nt=Ce+ue(lt,Pt++),Bt+=G(lt,$,ot,Nt,At);else if(Nt==="object"){if(typeof M.then=="function")return G(Ae(M),$,ot,lt,At);throw $=String(M),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function at(M,$,ot){if(M==null)return M;var lt=[],At=0;return G(M,lt,"","",function(Nt){return $.call(ot,Nt,At++)}),lt}function ft(M){if(M._status===-1){var $=M._result;$=$(),$.then(function(ot){(M._status===0||M._status===-1)&&(M._status=1,M._result=ot)},function(ot){(M._status===0||M._status===-1)&&(M._status=2,M._result=ot)}),M._status===-1&&(M._status=0,M._result=$)}if(M._status===1)return M._result.default;throw M._result}var Yt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Zt={map:at,forEach:function(M,$,ot){at(M,function(){$.apply(this,arguments)},ot)},count:function(M){var $=0;return at(M,function(){$++}),$},toArray:function(M){return at(M,function($){return $})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return It.Activity=b,It.Children=Zt,It.Component=yt,It.Fragment=i,It.Profiler=l,It.PureComponent=rt,It.StrictMode=a,It.Suspense=y,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,It.__COMPILER_RUNTIME={__proto__:null,c:function(M){return E.H.useMemoCache(M)}},It.cache=function(M){return function(){return M.apply(null,arguments)}},It.cacheSignal=function(){return null},It.cloneElement=function(M,$,ot){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var lt=et({},M.props),At=M.key;if($!=null)for(Nt in $.key!==void 0&&(At=""+$.key),$)!R.call($,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&$.ref===void 0||(lt[Nt]=$[Nt]);var Nt=arguments.length-2;if(Nt===1)lt.children=ot;else if(1<Nt){for(var Bt=Array(Nt),Ce=0;Ce<Nt;Ce++)Bt[Ce]=arguments[Ce+2];lt.children=Bt}return I(M.type,At,lt)},It.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},It.createElement=function(M,$,ot){var lt,At={},Nt=null;if($!=null)for(lt in $.key!==void 0&&(Nt=""+$.key),$)R.call($,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(At[lt]=$[lt]);var Bt=arguments.length-2;if(Bt===1)At.children=ot;else if(1<Bt){for(var Ce=Array(Bt),Pt=0;Pt<Bt;Pt++)Ce[Pt]=arguments[Pt+2];At.children=Ce}if(M&&M.defaultProps)for(lt in Bt=M.defaultProps,Bt)At[lt]===void 0&&(At[lt]=Bt[lt]);return I(M,Nt,At)},It.createRef=function(){return{current:null}},It.forwardRef=function(M){return{$$typeof:g,render:M}},It.isValidElement=x,It.lazy=function(M){return{$$typeof:A,_payload:{_status:-1,_result:M},_init:ft}},It.memo=function(M,$){return{$$typeof:_,type:M,compare:$===void 0?null:$}},It.startTransition=function(M){var $=E.T,ot={};E.T=ot;try{var lt=M(),At=E.S;At!==null&&At(ot,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Rt,Yt)}catch(Nt){Yt(Nt)}finally{$!==null&&ot.types!==null&&($.types=ot.types),E.T=$}},It.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},It.use=function(M){return E.H.use(M)},It.useActionState=function(M,$,ot){return E.H.useActionState(M,$,ot)},It.useCallback=function(M,$){return E.H.useCallback(M,$)},It.useContext=function(M){return E.H.useContext(M)},It.useDebugValue=function(){},It.useDeferredValue=function(M,$){return E.H.useDeferredValue(M,$)},It.useEffect=function(M,$){return E.H.useEffect(M,$)},It.useEffectEvent=function(M){return E.H.useEffectEvent(M)},It.useId=function(){return E.H.useId()},It.useImperativeHandle=function(M,$,ot){return E.H.useImperativeHandle(M,$,ot)},It.useInsertionEffect=function(M,$){return E.H.useInsertionEffect(M,$)},It.useLayoutEffect=function(M,$){return E.H.useLayoutEffect(M,$)},It.useMemo=function(M,$){return E.H.useMemo(M,$)},It.useOptimistic=function(M,$){return E.H.useOptimistic(M,$)},It.useReducer=function(M,$,ot){return E.H.useReducer(M,$,ot)},It.useRef=function(M){return E.H.useRef(M)},It.useState=function(M){return E.H.useState(M)},It.useSyncExternalStore=function(M,$,ot){return E.H.useSyncExternalStore(M,$,ot)},It.useTransition=function(){return E.H.useTransition()},It.version="19.2.0",It}var M_;function vm(){return M_||(M_=1,Dd.exports=SS()),Dd.exports}var le=vm();const AS=mE(le);var Nd={exports:{}},xl={},Od={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function bS(){return V_||(V_=1,(function(r){function t(G,at){var ft=G.length;G.push(at);t:for(;0<ft;){var Yt=ft-1>>>1,Zt=G[Yt];if(0<l(Zt,at))G[Yt]=at,G[ft]=Zt,ft=Yt;else break t}}function i(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var at=G[0],ft=G.pop();if(ft!==at){G[0]=ft;t:for(var Yt=0,Zt=G.length,M=Zt>>>1;Yt<M;){var $=2*(Yt+1)-1,ot=G[$],lt=$+1,At=G[lt];if(0>l(ot,ft))lt<Zt&&0>l(At,ot)?(G[Yt]=At,G[lt]=ft,Yt=lt):(G[Yt]=ot,G[$]=ft,Yt=$);else if(lt<Zt&&0>l(At,ft))G[Yt]=At,G[lt]=ft,Yt=lt;else break t}}return at}function l(G,at){var ft=G.sortIndex-at.sortIndex;return ft!==0?ft:G.id-at.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var y=[],_=[],A=1,b=null,N=3,H=!1,it=!1,et=!1,nt=!1,yt=typeof setTimeout=="function"?setTimeout:null,bt=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function Ot(G){for(var at=i(_);at!==null;){if(at.callback===null)a(_);else if(at.startTime<=G)a(_),at.sortIndex=at.expirationTime,t(y,at);else break;at=i(_)}}function gt(G){if(et=!1,Ot(G),!it)if(i(y)!==null)it=!0,Rt||(Rt=!0,L());else{var at=i(_);at!==null&&Ae(gt,at.startTime-G)}}var Rt=!1,E=-1,R=5,I=-1;function V(){return nt?!0:!(r.unstable_now()-I<R)}function x(){if(nt=!1,Rt){var G=r.unstable_now();I=G;var at=!0;try{t:{it=!1,et&&(et=!1,bt(E),E=-1),H=!0;var ft=N;try{e:{for(Ot(G),b=i(y);b!==null&&!(b.expirationTime>G&&V());){var Yt=b.callback;if(typeof Yt=="function"){b.callback=null,N=b.priorityLevel;var Zt=Yt(b.expirationTime<=G);if(G=r.unstable_now(),typeof Zt=="function"){b.callback=Zt,Ot(G),at=!0;break e}b===i(y)&&a(y),Ot(G)}else a(y);b=i(y)}if(b!==null)at=!0;else{var M=i(_);M!==null&&Ae(gt,M.startTime-G),at=!1}}break t}finally{b=null,N=ft,H=!1}at=void 0}}finally{at?L():Rt=!1}}}var L;if(typeof rt=="function")L=function(){rt(x)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,ue=w.port2;w.port1.onmessage=x,L=function(){ue.postMessage(null)}}else L=function(){yt(x,0)};function Ae(G,at){E=yt(function(){G(r.unstable_now())},at)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(G){switch(N){case 1:case 2:case 3:var at=3;break;default:at=N}var ft=N;N=at;try{return G()}finally{N=ft}},r.unstable_requestPaint=function(){nt=!0},r.unstable_runWithPriority=function(G,at){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ft=N;N=G;try{return at()}finally{N=ft}},r.unstable_scheduleCallback=function(G,at,ft){var Yt=r.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?Yt+ft:Yt):ft=Yt,G){case 1:var Zt=-1;break;case 2:Zt=250;break;case 5:Zt=1073741823;break;case 4:Zt=1e4;break;default:Zt=5e3}return Zt=ft+Zt,G={id:A++,callback:at,priorityLevel:G,startTime:ft,expirationTime:Zt,sortIndex:-1},ft>Yt?(G.sortIndex=ft,t(_,G),i(y)===null&&G===i(_)&&(et?(bt(E),E=-1):et=!0,Ae(gt,ft-Yt))):(G.sortIndex=Zt,t(y,G),it||H||(it=!0,Rt||(Rt=!0,L()))),G},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(G){var at=N;return function(){var ft=N;N=at;try{return G.apply(this,arguments)}finally{N=ft}}}})(xd)),xd}var U_;function RS(){return U_||(U_=1,Od.exports=bS()),Od.exports}var Md={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function wS(){if(L_)return fn;L_=1;var r=vm();function t(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)_+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(y,_,A){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:y,containerInfo:_,implementation:A}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,fn.createPortal=function(y,_){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return c(y,_,null,A)},fn.flushSync=function(y){var _=d.T,A=a.p;try{if(d.T=null,a.p=2,y)return y()}finally{d.T=_,a.p=A,a.d.f()}},fn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(y,_))},fn.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},fn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var A=_.as,b=g(A,_.crossOrigin),N=typeof _.integrity=="string"?_.integrity:void 0,H=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;A==="style"?a.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:N,fetchPriority:H}):A==="script"&&a.d.X(y,{crossOrigin:b,integrity:N,fetchPriority:H,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},fn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var A=g(_.as,_.crossOrigin);a.d.M(y,{crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(y)},fn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var A=_.as,b=g(A,_.crossOrigin);a.d.L(y,A,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},fn.preloadModule=function(y,_){if(typeof y=="string")if(_){var A=g(_.as,_.crossOrigin);a.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(y)},fn.requestFormReset=function(y){a.d.r(y)},fn.unstable_batchedUpdates=function(y,_){return y(_)},fn.useFormState=function(y,_,A){return d.H.useFormState(y,_,A)},fn.useFormStatus=function(){return d.H.useHostTransitionStatus()},fn.version="19.2.0",fn}var P_;function CS(){if(P_)return Md.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=wS(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function IS(){if(k_)return xl;k_=1;var r=RS(),t=vm(),i=CS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(c(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return y(h),e;if(f===o)return y(h),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=f;else{for(var p=!1,T=h.child;T;){if(T===s){p=!0,s=h,o=f;break}if(T===o){p=!0,o=h,s=f;break}T=T.sibling}if(!p){for(T=f.child;T;){if(T===s){p=!0,s=f,o=h;break}if(T===o){p=!0,o=f,s=h;break}T=T.sibling}if(!p)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function A(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=A(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,N=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),it=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),yt=Symbol.for("react.profiler"),bt=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),Ot=Symbol.for("react.forward_ref"),gt=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case et:return"Fragment";case yt:return"Profiler";case nt:return"StrictMode";case gt:return"Suspense";case Rt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case it:return"Portal";case rt:return e.displayName||"Context";case bt:return(e._context.displayName||"Context")+".Consumer";case Ot:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case R:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var Ae=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Yt=[],Zt=-1;function M(e){return{current:e}}function $(e){0>Zt||(e.current=Yt[Zt],Yt[Zt]=null,Zt--)}function ot(e,n){Zt++,Yt[Zt]=e.current,e.current=n}var lt=M(null),At=M(null),Nt=M(null),Bt=M(null);function Ce(e,n){switch(ot(Nt,n),ot(At,e),ot(lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wy(n),e=t_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(lt),ot(lt,e)}function Pt(){$(lt),$(At),$(Nt)}function Ie(e){e.memoizedState!==null&&ot(Bt,e);var n=lt.current,s=t_(n,e.type);n!==s&&(ot(At,e),ot(lt,s))}function Ut(e){At.current===e&&($(lt),$(At)),Bt.current===e&&($(Bt),Cl._currentValue=ft)}var Ti,Si;function He(e){if(Ti===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Ti=n&&n[1]||"",Si=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ti+e+Si}var Ir=!1;function li(e,n){if(!e||Ir)return"";Ir=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(F){var B=F}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(F){B=F}e.call(Z.prototype)}}else{try{throw Error()}catch(F){B=F}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),p=f[0],T=f[1];if(p&&T){var C=p.split(`
`),z=T.split(`
`);for(h=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(o===C.length||h===z.length)for(o=C.length-1,h=z.length-1;1<=o&&0<=h&&C[o]!==z[h];)h--;for(;1<=o&&0<=h;o--,h--)if(C[o]!==z[h]){if(o!==1||h!==1)do if(o--,h--,0>h||C[o]!==z[h]){var X=`
`+C[o].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=o&&0<=h);break}}}finally{Ir=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?He(s):""}function Tn(e,n){switch(e.tag){case 26:case 27:case 5:return He(e.type);case 16:return He("Lazy");case 13:return e.child!==n&&n!==null?He("Suspense Fallback"):He("Suspense");case 19:return He("SuspenseList");case 0:case 15:return li(e.type,!1);case 11:return li(e.type.render,!1);case 1:return li(e.type,!0);case 31:return He("Activity");default:return""}}function We(e){try{var n="",s=null;do n+=Tn(e,s),s=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var pe=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,yn=r.unstable_cancelCallback,Dr=r.unstable_shouldYield,Xi=r.unstable_requestPaint,Ve=r.unstable_now,Ai=r.unstable_getCurrentPriorityLevel,Gn=r.unstable_ImmediatePriority,Qi=r.unstable_UserBlockingPriority,bi=r.unstable_NormalPriority,pa=r.unstable_LowPriority,ya=r.unstable_IdlePriority,xs=r.log,Ki=r.unstable_setDisableYieldValue,cn=null,Ue=null;function _n(e){if(typeof xs=="function"&&Ki(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(cn,e)}catch{}}var Te=Math.clz32?Math.clz32:va,_a=Math.log,Nr=Math.LN2;function va(e){return e>>>=0,e===0?32:31-(_a(e)/Nr|0)|0}var Yn=256,$i=262144,be=4194304;function Xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qn(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?h=Xn(o):(p&=T,p!==0?h=Xn(p):s||(s=T&~e,s!==0&&(h=Xn(s))))):(T=o&~f,T!==0?h=Xn(T):p!==0?h=Xn(p):s||(s=o&~e,s!==0&&(h=Xn(s)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:h}function Sn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Or(){var e=be;return be<<=1,(be&62914560)===0&&(be=4194304),e}function An(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function Zi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uo(e,n,s,o,h,f){var p=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,C=e.expirationTimes,z=e.hiddenUpdates;for(s=p&~s;0<s;){var X=31-Te(s),Z=1<<X;T[X]=0,C[X]=-1;var B=z[X];if(B!==null)for(z[X]=null,X=0;X<B.length;X++){var F=B[X];F!==null&&(F.lane&=-536870913)}s&=~Z}o!==0&&Ji(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function Ji(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Te(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function Ri(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-Te(s),h=1<<o;h&n|e[o]&n&&(e[o]|=n),s&=~h}}function Ms(e,n){var s=n&-n;return s=(s&42)!==0?1:Wi(s),(s&(e.suspendedLanes|n))!==0?0:s}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fe(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function Un(e,n){var s=at.p;try{return at.p=e,n()}finally{at.p=s}}var bn=Math.random().toString(36).slice(2),ye="__reactFiber$"+bn,De="__reactProps$"+bn,Rn="__reactContainer$"+bn,tr="__reactEvents$"+bn,Ea="__reactListeners$"+bn,Vs="__reactHandles$"+bn,D="__reactResources$"+bn,j="__reactMarker$"+bn;function Y(e){delete e[ye],delete e[De],delete e[tr],delete e[Ea],delete e[Vs]}function tt(e){var n=e[ye];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Rn]||s[ye]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=o_(e);e!==null;){if(s=e[ye])return s;e=o_(e)}return n}e=s,s=e.parentNode}return null}function ct(e){if(e=e[ye]||e[Rn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function wt(e){var n=e[D];return n||(n=e[D]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Lt(e){e[j]=!0}var he=new Set,hn={};function Ke(e,n){wi(e,n),wi(e+"Capture",n)}function wi(e,n){for(hn[e]=n,e=0;e<n.length;e++)he.add(n[e])}var Lo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Po={},ko={};function cu(e){return pe.call(ko,e)?!0:pe.call(Po,e)?!1:Lo.test(e)?ko[e]=!0:(Po[e]=!0,!1)}function Ta(e,n,s){if(cu(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Ln(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Le(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zo(e,n,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(p){s=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ee(e){if(!e._valueTracker){var n=xr(e)?"checked":"value";e._valueTracker=zo(e,n,""+e[n])}}function Us(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=xr(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ls=/[\n"\\]/g;function wn(e){return e.replace(Ls,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sa(e,n,s,o,h,f,p,T){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Bo(e,p,$e(n)):s!=null?Bo(e,p,$e(s)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function hu(e,n,s,o,h,f,p,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ee(e);return}s=s!=null?""+$e(s):"",n=n!=null?""+$e(n):s,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),ee(e)}function Bo(e,n,s){n==="number"&&Ci(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Mr(e,n,s,o){if(e=e.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=n.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+$e(s),n=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function fu(e,n,s){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+$e(s):""}function Vr(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(Ae(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=$e(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),ee(e)}function Cn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var du=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jo(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||du.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function qo(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&s[h]!==o&&jo(e,h,o)}else for(var f in n)n.hasOwnProperty(f)&&jo(e,f,n[f])}function Aa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ur=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ba(e){return Ur.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ui(){}var Ho=null;function $n(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Ii=null;function Ps(e){var n=ct(e);if(n&&(e=n.stateNode)){var s=e[De]||null;t:switch(e=n.stateNode,n.type){case"input":if(Sa(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var h=o[De]||null;if(!h)throw Error(a(90));Sa(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&Us(o)}break t;case"textarea":fu(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Mr(e,!!s.multiple,n,!1)}}}var Ra=!1;function Pr(e,n,s){if(Ra)return e(n,s);Ra=!0;try{var o=e(n);return o}finally{if(Ra=!1,(Lr!==null||Ii!==null)&&(oc(),Lr&&(n=Lr,e=Ii,Ii=Lr=null,Ps(n),e)))for(n=0;n<e.length;n++)Ps(e[n])}}function ci(e,n){var s=e.stateNode;if(s===null)return null;var o=s[De]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=!1;if(Zn)try{var re={};Object.defineProperty(re,"passive",{get:function(){ks=!0}}),window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{ks=!1}var Di=null,Fo=null,zs=null;function Go(){if(zs)return zs;var e,n=Fo,s=n.length,o,h="value"in Di?Di.value:Di.textContent,f=h.length;for(e=0;e<s&&n[e]===h[e];e++);var p=s-e;for(o=1;o<=p&&n[s-o]===h[f-o];o++);return zs=h.slice(e,1<o?1-o:void 0)}function Bs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function er(){return!0}function hi(){return!1}function tn(e){function n(s,o,h,f,p){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?er:hi,this.isPropagationStopped=hi,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=tn(nr),kr=b({},nr,{view:0,detail:0}),Yo=tn(kr),zr,wa,Oi,Ca=b({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oi&&(Oi&&e.type==="mousemove"?(zr=e.screenX-Oi.screenX,wa=e.screenY-Oi.screenY):wa=zr=0,Oi=e),zr)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),Xo=tn(Ca),js=b({},Ca,{dataTransfer:0}),gu=tn(js),pu=b({},kr,{relatedTarget:0}),qs=tn(pu),Qo=b({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),yu=tn(Qo),Ia=b({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_u=tn(Ia),vu=b({},nr,{data:0}),xi=tn(vu),Eu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Au(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Su[e])?!!n[e]:!1}function Br(){return Au}var vn=b({},kr,{key:function(e){if(e.key){var n=Eu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(e){return e.type==="keypress"?Bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bu=tn(vn),Ru=b({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ir=tn(Ru),u=b({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),m=tn(u),v=b({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S=tn(v),P=b({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q=tn(P),st=b({},nr,{newState:0,oldState:0}),xt=tn(st),Ne=[9,13,27,32],Jt=Zn&&"CompositionEvent"in window,_e=null;Zn&&"documentMode"in document&&(_e=document.documentMode);var Jn=Zn&&"TextEvent"in window&&!_e,Mi=Zn&&(!Jt||_e&&8<_e&&11>=_e),fi=" ",di=!1;function Hs(e,n){switch(e){case"keyup":return Ne.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function F0(e,n){switch(e){case"compositionend":return Da(n);case"keypress":return n.which!==32?null:(di=!0,fi);case"textInput":return e=n.data,e===fi&&di?null:e;default:return null}}function G0(e,n){if(Na)return e==="compositionend"||!Jt&&Hs(e,n)?(e=Go(),zs=Fo=Di=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mi&&n.locale!=="ko"?null:n.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Y0[e.type]:n==="textarea"}function hg(e,n,s,o){Lr?Ii?Ii.push(o):Ii=[o]:Lr=o,n=mc(n,"onChange"),0<n.length&&(s=new Ni("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Ko=null,$o=null;function X0(e){Xy(e,0)}function wu(e){var n=vt(e);if(Us(n))return e}function fg(e,n){if(e==="change")return n}var dg=!1;if(Zn){var Vh;if(Zn){var Uh="oninput"in document;if(!Uh){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),Uh=typeof mg.oninput=="function"}Vh=Uh}else Vh=!1;dg=Vh&&(!document.documentMode||9<document.documentMode)}function gg(){Ko&&(Ko.detachEvent("onpropertychange",pg),$o=Ko=null)}function pg(e){if(e.propertyName==="value"&&wu($o)){var n=[];hg(n,$o,e,$n(e)),Pr(X0,n)}}function Q0(e,n,s){e==="focusin"?(gg(),Ko=n,$o=s,Ko.attachEvent("onpropertychange",pg)):e==="focusout"&&gg()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu($o)}function $0(e,n){if(e==="click")return wu(n)}function Z0(e,n){if(e==="input"||e==="change")return wu(n)}function J0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pn=typeof Object.is=="function"?Object.is:J0;function Zo(e,n){if(Pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!pe.call(n,h)||!Pn(e[h],n[h]))return!1}return!0}function yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,n){var s=yg(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=yg(s)}}function vg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Eg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ci(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ci(e.document)}return n}function Lh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var W0=Zn&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ph=null,Jo=null,kh=!1;function Tg(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;kh||Oa==null||Oa!==Ci(o)||(o=Oa,"selectionStart"in o&&Lh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jo&&Zo(Jo,o)||(Jo=o,o=mc(Ph,"onSelect"),0<o.length&&(n=new Ni("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=Oa)))}function Fs(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var xa={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},zh={},Sg={};Zn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Gs(e){if(zh[e])return zh[e];if(!xa[e])return e;var n=xa[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Sg)return zh[e]=n[s];return e}var Ag=Gs("animationend"),bg=Gs("animationiteration"),Rg=Gs("animationstart"),t1=Gs("transitionrun"),e1=Gs("transitionstart"),n1=Gs("transitioncancel"),wg=Gs("transitionend"),Cg=new Map,Bh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bh.push("scrollEnd");function mi(e,n){Cg.set(e,n),Ke(n,[e])}var Cu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],Ma=0,jh=0;function Iu(){for(var e=Ma,n=jh=Ma=0;n<e;){var s=Wn[n];Wn[n++]=null;var o=Wn[n];Wn[n++]=null;var h=Wn[n];Wn[n++]=null;var f=Wn[n];if(Wn[n++]=null,o!==null&&h!==null){var p=o.pending;p===null?h.next=h:(h.next=p.next,p.next=h),o.pending=h}f!==0&&Ig(s,h,f)}}function Du(e,n,s,o){Wn[Ma++]=e,Wn[Ma++]=n,Wn[Ma++]=s,Wn[Ma++]=o,jh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qh(e,n,s,o){return Du(e,n,s,o),Nu(e)}function Ys(e,n){return Du(e,null,null,n),Nu(e)}function Ig(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&n!==null&&(h=31-Te(s),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[n]:o.push(n),n.lane=s|536870912),f):null}function Nu(e){if(50<El)throw El=0,Jf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Va={};function i1(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,s,o){return new i1(e,n,s,o)}function Hh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rr(e,n){var s=e.alternate;return s===null?(s=kn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Dg(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ou(e,n,s,o,h,f){var p=0;if(o=e,typeof e=="function")Hh(e)&&(p=1);else if(typeof e=="string")p=lS(e,s,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=kn(31,s,n,h),e.elementType=I,e.lanes=f,e;case et:return Xs(s.children,h,f,n);case nt:p=8,h|=24;break;case yt:return e=kn(12,s,n,h|2),e.elementType=yt,e.lanes=f,e;case gt:return e=kn(13,s,n,h),e.elementType=gt,e.lanes=f,e;case Rt:return e=kn(19,s,n,h),e.elementType=Rt,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:p=10;break t;case bt:p=9;break t;case Ot:p=11;break t;case E:p=14;break t;case R:p=16,o=null;break t}p=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=kn(p,s,n,h),n.elementType=e,n.type=o,n.lanes=f,n}function Xs(e,n,s,o){return e=kn(7,e,o,n),e.lanes=s,e}function Fh(e,n,s){return e=kn(6,e,null,n),e.lanes=s,e}function Ng(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function Gh(e,n,s){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Og=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var s=Og.get(e);return s!==void 0?s:(n={value:e,source:n,stack:We(n)},Og.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var Ua=[],La=0,xu=null,Wo=0,ei=[],ni=0,jr=null,Vi=1,Ui="";function sr(e,n){Ua[La++]=Wo,Ua[La++]=xu,xu=e,Wo=n}function xg(e,n,s){ei[ni++]=Vi,ei[ni++]=Ui,ei[ni++]=jr,jr=e;var o=Vi;e=Ui;var h=32-Te(o)-1;o&=~(1<<h),s+=1;var f=32-Te(n)+h;if(30<f){var p=h-h%5;f=(o&(1<<p)-1).toString(32),o>>=p,h-=p,Vi=1<<32-Te(n)+h|s<<h|o,Ui=f+e}else Vi=1<<f|s<<h|o,Ui=e}function Yh(e){e.return!==null&&(sr(e,1),xg(e,1,0))}function Xh(e){for(;e===xu;)xu=Ua[--La],Ua[La]=null,Wo=Ua[--La],Ua[La]=null;for(;e===jr;)jr=ei[--ni],ei[ni]=null,Ui=ei[--ni],ei[ni]=null,Vi=ei[--ni],ei[ni]=null}function Mg(e,n){ei[ni++]=Vi,ei[ni++]=Ui,ei[ni++]=jr,Vi=n.id,Ui=n.overflow,jr=e}var en=null,fe=null,Xt=!1,qr=null,ii=!1,Qh=Error(a(519));function Hr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(ti(n,e)),Qh}function Vg(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[ye]=e,n[De]=o,s){case"dialog":zt("cancel",n),zt("close",n);break;case"iframe":case"object":case"embed":zt("load",n);break;case"video":case"audio":for(s=0;s<Sl.length;s++)zt(Sl[s],n);break;case"source":zt("error",n);break;case"img":case"image":case"link":zt("error",n),zt("load",n);break;case"details":zt("toggle",n);break;case"input":zt("invalid",n),hu(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":zt("invalid",n);break;case"textarea":zt("invalid",n),Vr(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Zy(n.textContent,s)?(o.popover!=null&&(zt("beforetoggle",n),zt("toggle",n)),o.onScroll!=null&&zt("scroll",n),o.onScrollEnd!=null&&zt("scrollend",n),o.onClick!=null&&(n.onclick=ui),n=!0):n=!1,n||Hr(e,!0)}function Ug(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:en=en.return}}function Pa(e){if(e!==en)return!1;if(!Xt)return Ug(e),Xt=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||dd(e.type,e.memoizedProps)),s=!s),s&&fe&&Hr(e),Ug(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));fe=a_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));fe=a_(e)}else n===27?(n=fe,is(e.type)?(e=_d,_d=null,fe=e):fe=n):fe=en?si(e.stateNode.nextSibling):null;return!0}function Qs(){fe=en=null,Xt=!1}function Kh(){var e=qr;return e!==null&&(On===null?On=e:On.push.apply(On,e),qr=null),e}function tl(e){qr===null?qr=[e]:qr.push(e)}var $h=M(null),Ks=null,ar=null;function Fr(e,n,s){ot($h,n._currentValue),n._currentValue=s}function or(e){e._currentValue=$h.current,$($h)}function Zh(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Jh(e,n,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var p=h.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=h;for(var C=0;C<n.length;C++)if(T.context===n[C]){f.lanes|=s,T=f.alternate,T!==null&&(T.lanes|=s),Zh(f.return,s,e),o||(p=null);break t}f=T.next}}else if(h.tag===18){if(p=h.return,p===null)throw Error(a(341));p.lanes|=s,f=p.alternate,f!==null&&(f.lanes|=s),Zh(p,s,e),p=null}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===e){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}}function ka(e,n,s,o){e=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var p=h.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var T=h.type;Pn(h.pendingProps.value,p.value)||(e!==null?e.push(T):e=[T])}}else if(h===Bt.current){if(p=h.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}h=h.return}e!==null&&Jh(n,e,s,o),n.flags|=262144}function Mu(e){for(e=e.firstContext;e!==null;){if(!Pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $s(e){Ks=e,ar=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Lg(Ks,e)}function Vu(e,n){return Ks===null&&$s(e),Lg(e,n)}function Lg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},ar===null){if(e===null)throw Error(a(308));ar=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ar=ar.next=n;return s}var r1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},s1=r.unstable_scheduleCallback,a1=r.unstable_NormalPriority,Pe={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new r1,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&s1(a1,function(){e.controller.abort()})}var nl=null,tf=0,za=0,Ba=null;function o1(e,n){if(nl===null){var s=nl=[];tf=0,za=rd(),Ba={status:"pending",value:void 0,then:function(o){s.push(o)}}}return tf++,n.then(Pg,Pg),n}function Pg(){if(--tf===0&&nl!==null){Ba!==null&&(Ba.status="fulfilled");var e=nl;nl=null,za=0,Ba=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function l1(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var kg=G.S;G.S=function(e,n){Ty=Ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&o1(e,n),kg!==null&&kg(e,n)};var Zs=M(null);function ef(){var e=Zs.current;return e!==null?e:ce.pooledCache}function Uu(e,n){n===null?ot(Zs,Zs.current):ot(Zs,n.pool)}function zg(){var e=ef();return e===null?null:{parent:Pe._currentValue,pool:e}}var ja=Error(a(460)),nf=Error(a(474)),Lu=Error(a(542)),Pu={then:function(){}};function Bg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jg(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(ui,ui),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hg(e),e;default:if(typeof n.status=="string")n.then(ui,ui);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hg(e),e}throw Ws=n,ja}}function Js(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ws=s,ja):s}}var Ws=null;function qg(){if(Ws===null)throw Error(a(459));var e=Ws;return Ws=null,e}function Hg(e){if(e===ja||e===Lu)throw Error(a(483))}var qa=null,il=0;function ku(e){var n=il;return il+=1,qa===null&&(qa=[]),jg(qa,e,n)}function rl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zu(e,n){throw n.$$typeof===N?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fg(e){function n(U,O){if(e){var k=U.deletions;k===null?(U.deletions=[O],U.flags|=16):k.push(O)}}function s(U,O){if(!e)return null;for(;O!==null;)n(U,O),O=O.sibling;return null}function o(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function h(U,O){return U=rr(U,O),U.index=0,U.sibling=null,U}function f(U,O,k){return U.index=k,e?(k=U.alternate,k!==null?(k=k.index,k<O?(U.flags|=67108866,O):k):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function p(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function T(U,O,k,K){return O===null||O.tag!==6?(O=Fh(k,U.mode,K),O.return=U,O):(O=h(O,k),O.return=U,O)}function C(U,O,k,K){var pt=k.type;return pt===et?X(U,O,k.props.children,K,k.key):O!==null&&(O.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&Js(pt)===O.type)?(O=h(O,k.props),rl(O,k),O.return=U,O):(O=Ou(k.type,k.key,k.props,null,U.mode,K),rl(O,k),O.return=U,O)}function z(U,O,k,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==k.containerInfo||O.stateNode.implementation!==k.implementation?(O=Gh(k,U.mode,K),O.return=U,O):(O=h(O,k.children||[]),O.return=U,O)}function X(U,O,k,K,pt){return O===null||O.tag!==7?(O=Xs(k,U.mode,K,pt),O.return=U,O):(O=h(O,k),O.return=U,O)}function Z(U,O,k){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Fh(""+O,U.mode,k),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case H:return k=Ou(O.type,O.key,O.props,null,U.mode,k),rl(k,O),k.return=U,k;case it:return O=Gh(O,U.mode,k),O.return=U,O;case R:return O=Js(O),Z(U,O,k)}if(Ae(O)||L(O))return O=Xs(O,U.mode,k,null),O.return=U,O;if(typeof O.then=="function")return Z(U,ku(O),k);if(O.$$typeof===rt)return Z(U,Vu(U,O),k);zu(U,O)}return null}function B(U,O,k,K){var pt=O!==null?O.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return pt!==null?null:T(U,O,""+k,K);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case H:return k.key===pt?C(U,O,k,K):null;case it:return k.key===pt?z(U,O,k,K):null;case R:return k=Js(k),B(U,O,k,K)}if(Ae(k)||L(k))return pt!==null?null:X(U,O,k,K,null);if(typeof k.then=="function")return B(U,O,ku(k),K);if(k.$$typeof===rt)return B(U,O,Vu(U,k),K);zu(U,k)}return null}function F(U,O,k,K,pt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return U=U.get(k)||null,T(O,U,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return U=U.get(K.key===null?k:K.key)||null,C(O,U,K,pt);case it:return U=U.get(K.key===null?k:K.key)||null,z(O,U,K,pt);case R:return K=Js(K),F(U,O,k,K,pt)}if(Ae(K)||L(K))return U=U.get(k)||null,X(O,U,K,pt,null);if(typeof K.then=="function")return F(U,O,k,ku(K),pt);if(K.$$typeof===rt)return F(U,O,k,Vu(O,K),pt);zu(O,K)}return null}function ht(U,O,k,K){for(var pt=null,Kt=null,mt=O,Vt=O=0,qt=null;mt!==null&&Vt<k.length;Vt++){mt.index>Vt?(qt=mt,mt=null):qt=mt.sibling;var $t=B(U,mt,k[Vt],K);if($t===null){mt===null&&(mt=qt);break}e&&mt&&$t.alternate===null&&n(U,mt),O=f($t,O,Vt),Kt===null?pt=$t:Kt.sibling=$t,Kt=$t,mt=qt}if(Vt===k.length)return s(U,mt),Xt&&sr(U,Vt),pt;if(mt===null){for(;Vt<k.length;Vt++)mt=Z(U,k[Vt],K),mt!==null&&(O=f(mt,O,Vt),Kt===null?pt=mt:Kt.sibling=mt,Kt=mt);return Xt&&sr(U,Vt),pt}for(mt=o(mt);Vt<k.length;Vt++)qt=F(mt,U,Vt,k[Vt],K),qt!==null&&(e&&qt.alternate!==null&&mt.delete(qt.key===null?Vt:qt.key),O=f(qt,O,Vt),Kt===null?pt=qt:Kt.sibling=qt,Kt=qt);return e&&mt.forEach(function(ls){return n(U,ls)}),Xt&&sr(U,Vt),pt}function Et(U,O,k,K){if(k==null)throw Error(a(151));for(var pt=null,Kt=null,mt=O,Vt=O=0,qt=null,$t=k.next();mt!==null&&!$t.done;Vt++,$t=k.next()){mt.index>Vt?(qt=mt,mt=null):qt=mt.sibling;var ls=B(U,mt,$t.value,K);if(ls===null){mt===null&&(mt=qt);break}e&&mt&&ls.alternate===null&&n(U,mt),O=f(ls,O,Vt),Kt===null?pt=ls:Kt.sibling=ls,Kt=ls,mt=qt}if($t.done)return s(U,mt),Xt&&sr(U,Vt),pt;if(mt===null){for(;!$t.done;Vt++,$t=k.next())$t=Z(U,$t.value,K),$t!==null&&(O=f($t,O,Vt),Kt===null?pt=$t:Kt.sibling=$t,Kt=$t);return Xt&&sr(U,Vt),pt}for(mt=o(mt);!$t.done;Vt++,$t=k.next())$t=F(mt,U,Vt,$t.value,K),$t!==null&&(e&&$t.alternate!==null&&mt.delete($t.key===null?Vt:$t.key),O=f($t,O,Vt),Kt===null?pt=$t:Kt.sibling=$t,Kt=$t);return e&&mt.forEach(function(vS){return n(U,vS)}),Xt&&sr(U,Vt),pt}function oe(U,O,k,K){if(typeof k=="object"&&k!==null&&k.type===et&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case H:t:{for(var pt=k.key;O!==null;){if(O.key===pt){if(pt=k.type,pt===et){if(O.tag===7){s(U,O.sibling),K=h(O,k.props.children),K.return=U,U=K;break t}}else if(O.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===R&&Js(pt)===O.type){s(U,O.sibling),K=h(O,k.props),rl(K,k),K.return=U,U=K;break t}s(U,O);break}else n(U,O);O=O.sibling}k.type===et?(K=Xs(k.props.children,U.mode,K,k.key),K.return=U,U=K):(K=Ou(k.type,k.key,k.props,null,U.mode,K),rl(K,k),K.return=U,U=K)}return p(U);case it:t:{for(pt=k.key;O!==null;){if(O.key===pt)if(O.tag===4&&O.stateNode.containerInfo===k.containerInfo&&O.stateNode.implementation===k.implementation){s(U,O.sibling),K=h(O,k.children||[]),K.return=U,U=K;break t}else{s(U,O);break}else n(U,O);O=O.sibling}K=Gh(k,U.mode,K),K.return=U,U=K}return p(U);case R:return k=Js(k),oe(U,O,k,K)}if(Ae(k))return ht(U,O,k,K);if(L(k)){if(pt=L(k),typeof pt!="function")throw Error(a(150));return k=pt.call(k),Et(U,O,k,K)}if(typeof k.then=="function")return oe(U,O,ku(k),K);if(k.$$typeof===rt)return oe(U,O,Vu(U,k),K);zu(U,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,O!==null&&O.tag===6?(s(U,O.sibling),K=h(O,k),K.return=U,U=K):(s(U,O),K=Fh(k,U.mode,K),K.return=U,U=K),p(U)):s(U,O)}return function(U,O,k,K){try{il=0;var pt=oe(U,O,k,K);return qa=null,pt}catch(mt){if(mt===ja||mt===Lu)throw mt;var Kt=kn(29,mt,null,U.mode);return Kt.lanes=K,Kt.return=U,Kt}finally{}}}var ta=Fg(!0),Gg=Fg(!1),Gr=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=Nu(e),Ig(e,null,s),n}return Du(e,o,n,s),Nu(e)}function sl(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Ri(e,s)}}function af(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var p={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=p:f=f.next=p,s=s.next}while(s!==null);f===null?h=f=n:f=f.next=n}else h=f=n;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var of=!1;function al(){if(of){var e=Ba;if(e!==null)throw e}}function ol(e,n,s,o){of=!1;var h=e.updateQueue;Gr=!1;var f=h.firstBaseUpdate,p=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,z=C.next;C.next=null,p===null?f=z:p.next=z,p=C;var X=e.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==p&&(T===null?X.firstBaseUpdate=z:T.next=z,X.lastBaseUpdate=C))}if(f!==null){var Z=h.baseState;p=0,X=z=C=null,T=f;do{var B=T.lane&-536870913,F=B!==T.lane;if(F?(jt&B)===B:(o&B)===B){B!==0&&B===za&&(of=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ht=e,Et=T;B=n;var oe=s;switch(Et.tag){case 1:if(ht=Et.payload,typeof ht=="function"){Z=ht.call(oe,Z,B);break t}Z=ht;break t;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=Et.payload,B=typeof ht=="function"?ht.call(oe,Z,B):ht,B==null)break t;Z=b({},Z,B);break t;case 2:Gr=!0}}B=T.callback,B!==null&&(e.flags|=64,F&&(e.flags|=8192),F=h.callbacks,F===null?h.callbacks=[B]:F.push(B))}else F={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(z=X=F,C=Z):X=X.next=F,p|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;F=T,T=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);X===null&&(C=Z),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=X,f===null&&(h.shared.lanes=0),Jr|=p,e.lanes=p,e.memoizedState=Z}}function Yg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Xg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Yg(s[e],n)}var Ha=M(null),Bu=M(0);function Qg(e,n){e=pr,ot(Bu,e),ot(Ha,n),pr=e|n.baseLanes}function lf(){ot(Bu,pr),ot(Ha,Ha.current)}function uf(){pr=Bu.current,$(Ha),$(Bu)}var zn=M(null),ri=null;function Qr(e){var n=e.alternate;ot(Oe,Oe.current&1),ot(zn,e),ri===null&&(n===null||Ha.current!==null||n.memoizedState!==null)&&(ri=e)}function cf(e){ot(Oe,Oe.current),ot(zn,e),ri===null&&(ri=e)}function Kg(e){e.tag===22?(ot(Oe,Oe.current),ot(zn,e),ri===null&&(ri=e)):Kr()}function Kr(){ot(Oe,Oe.current),ot(zn,zn.current)}function Bn(e){$(zn),ri===e&&(ri=null),$(Oe)}var Oe=M(0);function ju(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||pd(s)||yd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lr=0,Mt=null,se=null,ke=null,qu=!1,Fa=!1,ea=!1,Hu=0,ll=0,Ga=null,u1=0;function Re(){throw Error(a(321))}function hf(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Pn(e[s],n[s]))return!1;return!0}function ff(e,n,s,o,h,f){return lr=f,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?xp:Cf,ea=!1,f=s(o,h),ea=!1,Fa&&(f=Zg(n,s,o,h)),$g(e),f}function $g(e){G.H=hl;var n=se!==null&&se.next!==null;if(lr=0,ke=se=Mt=null,qu=!1,ll=0,Ga=null,n)throw Error(a(300));e===null||ze||(e=e.dependencies,e!==null&&Mu(e)&&(ze=!0))}function Zg(e,n,s,o){Mt=e;var h=0;do{if(Fa&&(Ga=null),ll=0,Fa=!1,25<=h)throw Error(a(301));if(h+=1,ke=se=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=Mp,f=n(s,o)}while(Fa);return f}function c1(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?ul(n):n,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(Mt.flags|=1024),n}function df(){var e=Hu!==0;return Hu=0,e}function mf(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function gf(e){if(qu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}qu=!1}lr=0,ke=se=Mt=null,Fa=!1,ll=Hu=0,Ga=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Mt.memoizedState=ke=e:ke=ke.next=e,ke}function xe(){if(se===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=ke===null?Mt.memoizedState:ke.next;if(n!==null)ke=n,se=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ke===null?Mt.memoizedState=ke=e:ke=ke.next=e}return ke}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var n=ll;return ll+=1,Ga===null&&(Ga=[]),e=jg(Ga,e,n),n=Mt,(ke===null?n.memoizedState:ke.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?xp:Cf),e}function Gu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===rt)return nn(e)}throw Error(a(438,String(e)))}function pf(e){var n=null,s=Mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=Mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Fu(),Mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=V;return n.index++,s}function ur(e,n){return typeof n=="function"?n(e):n}function Yu(e){var n=xe();return yf(n,se,e)}function yf(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var p=h.next;h.next=f.next,f.next=p}n.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{n=h.next;var T=p=null,C=null,z=n,X=!1;do{var Z=z.lane&-536870913;if(Z!==z.lane?(jt&Z)===Z:(lr&Z)===Z){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Z===za&&(X=!0);else if((lr&B)===B){z=z.next,B===za&&(X=!0);continue}else Z={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=Z,p=f):C=C.next=Z,Mt.lanes|=B,Jr|=B;Z=z.action,ea&&s(f,Z),f=z.hasEagerState?z.eagerState:s(f,Z)}else B={lane:Z,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=B,p=f):C=C.next=B,Mt.lanes|=Z,Jr|=Z;z=z.next}while(z!==null&&z!==n);if(C===null?p=f:C.next=T,!Pn(f,e.memoizedState)&&(ze=!0,X&&(s=Ba,s!==null)))throw s;e.memoizedState=f,e.baseState=p,e.baseQueue=C,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=xe(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,f=n.memoizedState;if(h!==null){s.pending=null;var p=h=h.next;do f=e(f,p.action),p=p.next;while(p!==h);Pn(f,n.memoizedState)||(ze=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function Jg(e,n,s){var o=Mt,h=xe(),f=Xt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var p=!Pn((se||h).memoizedState,s);if(p&&(h.memoizedState=s,ze=!0),h=h.queue,Tf(ep.bind(null,o,h,e),[e]),h.getSnapshot!==n||p||ke!==null&&ke.memoizedState.tag&1){if(o.flags|=2048,Ya(9,{destroy:void 0},tp.bind(null,o,h,s,n),null),ce===null)throw Error(a(349));f||(lr&127)!==0||Wg(o,n,s)}return s}function Wg(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Mt.updateQueue,n===null?(n=Fu(),Mt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function tp(e,n,s,o){n.value=s,n.getSnapshot=o,np(n)&&ip(e)}function ep(e,n,s){return s(function(){np(n)&&ip(e)})}function np(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Pn(e,s)}catch{return!0}}function ip(e){var n=Ys(e,2);n!==null&&xn(n,e,2)}function vf(e){var n=En();if(typeof e=="function"){var s=e;if(e=s(),ea){_n(!0);try{s()}finally{_n(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},n}function rp(e,n,s,o){return e.baseState=s,yf(e,se,typeof o=="function"?o:ur)}function h1(e,n,s,o,h){if(Ku(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};G.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,sp(n,f)):(f.next=s.next,n.pending=s.next=f)}}function sp(e,n){var s=n.action,o=n.payload,h=e.state;if(n.isTransition){var f=G.T,p={};G.T=p;try{var T=s(h,o),C=G.S;C!==null&&C(p,T),ap(e,n,T)}catch(z){Ef(e,n,z)}finally{f!==null&&p.types!==null&&(f.types=p.types),G.T=f}}else try{f=s(h,o),ap(e,n,f)}catch(z){Ef(e,n,z)}}function ap(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){op(e,n,o)},function(o){return Ef(e,n,o)}):op(e,n,s)}function op(e,n,s){n.status="fulfilled",n.value=s,lp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,sp(e,s)))}function Ef(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,lp(n),n=n.next;while(n!==o)}e.action=null}function lp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function up(e,n){return n}function cp(e,n){if(Xt){var s=ce.formState;if(s!==null){t:{var o=Mt;if(Xt){if(fe){e:{for(var h=fe,f=ii;h.nodeType!==8;){if(!f){h=null;break e}if(h=si(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){fe=si(h.nextSibling),o=h.data==="F!";break t}}Hr(o)}o=!1}o&&(n=s[0])}}return s=En(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:n},s.queue=o,s=Dp.bind(null,Mt,o),o.dispatch=s,o=vf(!1),f=wf.bind(null,Mt,!1,o.queue),o=En(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,s=h1.bind(null,Mt,h,f,s),h.dispatch=s,o.memoizedState=e,[n,s,!1]}function hp(e){var n=xe();return fp(n,se,e)}function fp(e,n,s){if(n=yf(e,n,up)[0],e=Yu(ur)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ul(n)}catch(p){throw p===ja?Lu:p}else o=n;n=xe();var h=n.queue,f=h.dispatch;return s!==n.memoizedState&&(Mt.flags|=2048,Ya(9,{destroy:void 0},f1.bind(null,h,s),null)),[o,f,e]}function f1(e,n){e.action=n}function dp(e){var n=xe(),s=se;if(s!==null)return fp(n,s,e);xe(),n=n.memoizedState,s=xe();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Ya(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=Mt.updateQueue,n===null&&(n=Fu(),Mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function mp(){return xe().memoizedState}function Xu(e,n,s,o){var h=En();Mt.flags|=e,h.memoizedState=Ya(1|n,{destroy:void 0},s,o===void 0?null:o)}function Qu(e,n,s,o){var h=xe();o=o===void 0?null:o;var f=h.memoizedState.inst;se!==null&&o!==null&&hf(o,se.memoizedState.deps)?h.memoizedState=Ya(n,f,s,o):(Mt.flags|=e,h.memoizedState=Ya(1|n,f,s,o))}function gp(e,n){Xu(8390656,8,e,n)}function Tf(e,n){Qu(2048,8,e,n)}function d1(e){Mt.flags|=4;var n=Mt.updateQueue;if(n===null)n=Fu(),Mt.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function pp(e){var n=xe().memoizedState;return d1({ref:n,nextImpl:e}),function(){if((Wt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function yp(e,n){return Qu(4,2,e,n)}function _p(e,n){return Qu(4,4,e,n)}function vp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ep(e,n,s){s=s!=null?s.concat([e]):null,Qu(4,4,vp.bind(null,n,e),s)}function Sf(){}function Tp(e,n){var s=xe();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&hf(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Sp(e,n){var s=xe();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&hf(n,o[1]))return o[0];if(o=e(),ea){_n(!0);try{e()}finally{_n(!1)}}return s.memoizedState=[o,n],o}function Af(e,n,s){return s===void 0||(lr&1073741824)!==0&&(jt&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Ay(),Mt.lanes|=e,Jr|=e,s)}function Ap(e,n,s,o){return Pn(s,n)?s:Ha.current!==null?(e=Af(e,s,o),Pn(e,n)||(ze=!0),e):(lr&42)===0||(lr&1073741824)!==0&&(jt&261930)===0?(ze=!0,e.memoizedState=s):(e=Ay(),Mt.lanes|=e,Jr|=e,n)}function bp(e,n,s,o,h){var f=at.p;at.p=f!==0&&8>f?f:8;var p=G.T,T={};G.T=T,wf(e,!1,n,s);try{var C=h(),z=G.S;if(z!==null&&z(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=l1(C,o);cl(e,n,X,Hn(e))}else cl(e,n,o,Hn(e))}catch(Z){cl(e,n,{then:function(){},status:"rejected",reason:Z},Hn())}finally{at.p=f,p!==null&&T.types!==null&&(p.types=T.types),G.T=p}}function m1(){}function bf(e,n,s,o){if(e.tag!==5)throw Error(a(476));var h=Rp(e).queue;bp(e,h,n,ft,s===null?m1:function(){return wp(e),s(o)})}function Rp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:ft},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function wp(e){var n=Rp(e);n.next===null&&(n=e.alternate.memoizedState),cl(e,n.next.queue,{},Hn())}function Rf(){return nn(Cl)}function Cp(){return xe().memoizedState}function Ip(){return xe().memoizedState}function g1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Hn();e=Yr(s);var o=Xr(n,e,s);o!==null&&(xn(o,n,s),sl(o,n,s)),n={cache:Wh()},e.payload=n;return}n=n.return}}function p1(e,n,s){var o=Hn();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ku(e)?Np(n,s):(s=qh(e,n,s,o),s!==null&&(xn(s,e,o),Op(s,n,o)))}function Dp(e,n,s){var o=Hn();cl(e,n,s,o)}function cl(e,n,s,o){var h={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Np(n,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,T=f(p,s);if(h.hasEagerState=!0,h.eagerState=T,Pn(T,p))return Du(e,n,h,0),ce===null&&Iu(),!1}catch{}finally{}if(s=qh(e,n,h,o),s!==null)return xn(s,e,o),Op(s,n,o),!0}return!1}function wf(e,n,s,o){if(o={lane:2,revertLane:rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ku(e)){if(n)throw Error(a(479))}else n=qh(e,s,o,2),n!==null&&xn(n,e,2)}function Ku(e){var n=e.alternate;return e===Mt||n!==null&&n===Mt}function Np(e,n){Fa=qu=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Op(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Ri(e,s)}}var hl={readContext:nn,use:Gu,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};hl.useEffectEvent=Re;var xp={readContext:nn,use:Gu,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:gp,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Xu(4194308,4,vp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Xu(4194308,4,e,n)},useInsertionEffect:function(e,n){Xu(4,2,e,n)},useMemo:function(e,n){var s=En();n=n===void 0?null:n;var o=e();if(ea){_n(!0);try{e()}finally{_n(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=En();if(s!==void 0){var h=s(n);if(ea){_n(!0);try{s(n)}finally{_n(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=p1.bind(null,Mt,e),[o.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,s=Dp.bind(null,Mt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Sf,useDeferredValue:function(e,n){var s=En();return Af(s,e,n)},useTransition:function(){var e=vf(!1);return e=bp.bind(null,Mt,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=Mt,h=En();if(Xt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),ce===null)throw Error(a(349));(jt&127)!==0||Wg(o,n,s)}h.memoizedState=s;var f={value:s,getSnapshot:n};return h.queue=f,gp(ep.bind(null,o,f,e),[e]),o.flags|=2048,Ya(9,{destroy:void 0},tp.bind(null,o,f,s,n),null),s},useId:function(){var e=En(),n=ce.identifierPrefix;if(Xt){var s=Ui,o=Vi;s=(o&~(1<<32-Te(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Hu++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=u1++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rf,useFormState:cp,useActionState:cp,useOptimistic:function(e){var n=En();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=wf.bind(null,Mt,!0,s),s.dispatch=n,[e,n]},useMemoCache:pf,useCacheRefresh:function(){return En().memoizedState=g1.bind(null,Mt)},useEffectEvent:function(e){var n=En(),s={impl:e};return n.memoizedState=s,function(){if((Wt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Cf={readContext:nn,use:Gu,useCallback:Tp,useContext:nn,useEffect:Tf,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Sp,useReducer:Yu,useRef:mp,useState:function(){return Yu(ur)},useDebugValue:Sf,useDeferredValue:function(e,n){var s=xe();return Ap(s,se.memoizedState,e,n)},useTransition:function(){var e=Yu(ur)[0],n=xe().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Jg,useId:Cp,useHostTransitionStatus:Rf,useFormState:hp,useActionState:hp,useOptimistic:function(e,n){var s=xe();return rp(s,se,e,n)},useMemoCache:pf,useCacheRefresh:Ip};Cf.useEffectEvent=pp;var Mp={readContext:nn,use:Gu,useCallback:Tp,useContext:nn,useEffect:Tf,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Sp,useReducer:_f,useRef:mp,useState:function(){return _f(ur)},useDebugValue:Sf,useDeferredValue:function(e,n){var s=xe();return se===null?Af(s,e,n):Ap(s,se.memoizedState,e,n)},useTransition:function(){var e=_f(ur)[0],n=xe().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Jg,useId:Cp,useHostTransitionStatus:Rf,useFormState:dp,useActionState:dp,useOptimistic:function(e,n){var s=xe();return se!==null?rp(s,se,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:pf,useCacheRefresh:Ip};Mp.useEffectEvent=pp;function If(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:b({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Df={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=Hn(),h=Yr(o);h.payload=n,s!=null&&(h.callback=s),n=Xr(e,h,o),n!==null&&(xn(n,e,o),sl(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=Hn(),h=Yr(o);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Xr(e,h,o),n!==null&&(xn(n,e,o),sl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Hn(),o=Yr(s);o.tag=2,n!=null&&(o.callback=n),n=Xr(e,o,s),n!==null&&(xn(n,e,s),sl(n,e,s))}};function Vp(e,n,s,o,h,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,p):n.prototype&&n.prototype.isPureReactComponent?!Zo(s,o)||!Zo(h,f):!0}function Up(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&Df.enqueueReplaceState(n,n.state,null)}function na(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=b({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function Lp(e){Cu(e)}function Pp(e){console.error(e)}function kp(e){Cu(e)}function $u(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zp(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nf(e,n,s){return s=Yr(s),s.tag=3,s.payload={element:null},s.callback=function(){$u(e,n)},s}function Bp(e){return e=Yr(e),e.tag=3,e}function jp(e,n,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){zp(n,s,o)}}var p=s.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){zp(n,s,o),typeof h!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function y1(e,n,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&ka(n,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 31:case 13:return ri===null?lc():s.alternate===null&&we===0&&(we=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Pu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),ed(e,o,h)),!1;case 22:return s.flags|=65536,o===Pu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),ed(e,o,h)),!1}throw Error(a(435,s.tag))}return ed(e,o,h),lc(),!1}if(Xt)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==Qh&&(e=Error(a(422),{cause:o}),tl(ti(e,s)))):(o!==Qh&&(n=Error(a(423),{cause:o}),tl(ti(n,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=ti(o,s),h=Nf(e.stateNode,o,h),af(e,h),we!==4&&(we=2)),!1;var f=Error(a(520),{cause:o});if(f=ti(f,s),vl===null?vl=[f]:vl.push(f),we!==4&&(we=2),n===null)return!0;o=ti(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Nf(s.stateNode,o,e),af(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wr===null||!Wr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Bp(h),jp(h,e,s,o),af(s,h),!1}s=s.return}while(s!==null);return!1}var Of=Error(a(461)),ze=!1;function rn(e,n,s,o){n.child=e===null?Gg(n,null,s,o):ta(n,e.child,s,o)}function qp(e,n,s,o,h){s=s.render;var f=n.ref;if("ref"in o){var p={};for(var T in o)T!=="ref"&&(p[T]=o[T])}else p=o;return $s(n),o=ff(e,n,s,p,f,h),T=df(),e!==null&&!ze?(mf(e,n,h),cr(e,n,h)):(Xt&&T&&Yh(n),n.flags|=1,rn(e,n,o,h),n.child)}function Hp(e,n,s,o,h){if(e===null){var f=s.type;return typeof f=="function"&&!Hh(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,Fp(e,n,f,o,h)):(e=Ou(s.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!zf(e,h)){var p=f.memoizedProps;if(s=s.compare,s=s!==null?s:Zo,s(p,o)&&e.ref===n.ref)return cr(e,n,h)}return n.flags|=1,e=rr(f,o),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,s,o,h){if(e!==null){var f=e.memoizedProps;if(Zo(f,o)&&e.ref===n.ref)if(ze=!1,n.pendingProps=o=f,zf(e,h))(e.flags&131072)!==0&&(ze=!0);else return n.lanes=e.lanes,cr(e,n,h)}return xf(e,n,s,o,h)}function Gp(e,n,s,o){var h=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(o=n.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return Yp(e,n,f,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(n,f!==null?f.cachePool:null),f!==null?Qg(n,f):lf(),Kg(n);else return o=n.lanes=536870912,Yp(e,n,f!==null?f.baseLanes|s:s,s,o)}else f!==null?(Uu(n,f.cachePool),Qg(n,f),Kr(),n.memoizedState=null):(e!==null&&Uu(n,null),lf(),Kr());return rn(e,n,h,s),n.child}function fl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yp(e,n,s,o,h){var f=ef();return f=f===null?null:{parent:Pe._currentValue,pool:f},n.memoizedState={baseLanes:s,cachePool:f},e!==null&&Uu(n,null),lf(),Kg(n),e!==null&&ka(e,n,o,!0),n.childLanes=h,null}function Zu(e,n){return n=Wu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Xp(e,n,s){return ta(n,e.child,null,s),e=Zu(n,n.pendingProps),e.flags|=2,Bn(n),n.memoizedState=null,e}function _1(e,n,s){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Xt){if(o.mode==="hidden")return e=Zu(n,o),n.lanes=536870912,fl(null,e);if(cf(n),(e=fe)?(e=s_(e,ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:jr!==null?{id:Vi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=Ng(e),s.return=n,n.child=s,en=n,fe=null)):e=null,e===null)throw Hr(n);return n.lanes=536870912,null}return Zu(n,o)}var f=e.memoizedState;if(f!==null){var p=f.dehydrated;if(cf(n),h)if(n.flags&256)n.flags&=-257,n=Xp(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(ze||ka(e,n,s,!1),h=(s&e.childLanes)!==0,ze||h){if(o=ce,o!==null&&(p=Ms(o,s),p!==0&&p!==f.retryLane))throw f.retryLane=p,Ys(e,p),xn(o,e,p),Of;lc(),n=Xp(e,n,s)}else e=f.treeContext,fe=si(p.nextSibling),en=n,Xt=!0,qr=null,ii=!1,e!==null&&Mg(n,e),n=Zu(n,o),n.flags|=4096;return n}return e=rr(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ju(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function xf(e,n,s,o,h){return $s(n),s=ff(e,n,s,o,void 0,h),o=df(),e!==null&&!ze?(mf(e,n,h),cr(e,n,h)):(Xt&&o&&Yh(n),n.flags|=1,rn(e,n,s,h),n.child)}function Qp(e,n,s,o,h,f){return $s(n),n.updateQueue=null,s=Zg(n,o,s,h),$g(e),o=df(),e!==null&&!ze?(mf(e,n,f),cr(e,n,f)):(Xt&&o&&Yh(n),n.flags|=1,rn(e,n,s,f),n.child)}function Kp(e,n,s,o,h){if($s(n),n.stateNode===null){var f=Va,p=s.contextType;typeof p=="object"&&p!==null&&(f=nn(p)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},rf(n),p=s.contextType,f.context=typeof p=="object"&&p!==null?nn(p):Va,f.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(If(n,s,p,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Df.enqueueReplaceState(f,f.state,null),ol(n,o,f,h),al(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,C=na(s,T);f.props=C;var z=f.context,X=s.contextType;p=Va,typeof X=="object"&&X!==null&&(p=nn(X));var Z=s.getDerivedStateFromProps;X=typeof Z=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,X||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||z!==p)&&Up(n,f,o,p),Gr=!1;var B=n.memoizedState;f.state=B,ol(n,o,f,h),al(),z=n.memoizedState,T||B!==z||Gr?(typeof Z=="function"&&(If(n,s,Z,o),z=n.memoizedState),(C=Gr||Vp(n,s,C,o,B,z,p))?(X||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=z),f.props=o,f.state=z,f.context=p,o=C):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,sf(e,n),p=n.memoizedProps,X=na(s,p),f.props=X,Z=n.pendingProps,B=f.context,z=s.contextType,C=Va,typeof z=="object"&&z!==null&&(C=nn(z)),T=s.getDerivedStateFromProps,(z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==Z||B!==C)&&Up(n,f,o,C),Gr=!1,B=n.memoizedState,f.state=B,ol(n,o,f,h),al();var F=n.memoizedState;p!==Z||B!==F||Gr||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof T=="function"&&(If(n,s,T,o),F=n.memoizedState),(X=Gr||Vp(n,s,X,o,B,F,C)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,F,C),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,F,C)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=F),f.props=o,f.state=F,f.context=C,o=X):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ju(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ta(n,e.child,null,h),n.child=ta(n,null,s,h)):rn(e,n,s,h),n.memoizedState=f.state,e=n.child):e=cr(e,n,h),e}function $p(e,n,s,o){return Qs(),n.flags|=256,rn(e,n,s,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:zg()}}function Uf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=qn),e}function Zp(e,n,s){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),p&&(h=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xt){if(h?Qr(n):Kr(),(e=fe)?(e=s_(e,ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:jr!==null?{id:Vi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=Ng(e),s.return=n,n.child=s,en=n,fe=null)):e=null,e===null)throw Hr(n);return yd(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,h?(Kr(),h=n.mode,T=Wu({mode:"hidden",children:T},h),o=Xs(o,h,s,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Vf(s),o.childLanes=Uf(e,p,s),n.memoizedState=Mf,fl(null,o)):(Qr(n),Lf(n,T))}var C=e.memoizedState;if(C!==null&&(T=C.dehydrated,T!==null)){if(f)n.flags&256?(Qr(n),n.flags&=-257,n=Pf(e,n,s)):n.memoizedState!==null?(Kr(),n.child=e.child,n.flags|=128,n=null):(Kr(),T=o.fallback,h=n.mode,o=Wu({mode:"visible",children:o.children},h),T=Xs(T,h,s,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,ta(n,e.child,null,s),o=n.child,o.memoizedState=Vf(s),o.childLanes=Uf(e,p,s),n.memoizedState=Mf,n=fl(null,o));else if(Qr(n),yd(T)){if(p=T.nextSibling&&T.nextSibling.dataset,p)var z=p.dgst;p=z,o=Error(a(419)),o.stack="",o.digest=p,tl({value:o,source:null,stack:null}),n=Pf(e,n,s)}else if(ze||ka(e,n,s,!1),p=(s&e.childLanes)!==0,ze||p){if(p=ce,p!==null&&(o=Ms(p,s),o!==0&&o!==C.retryLane))throw C.retryLane=o,Ys(e,o),xn(p,e,o),Of;pd(T)||lc(),n=Pf(e,n,s)}else pd(T)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,fe=si(T.nextSibling),en=n,Xt=!0,qr=null,ii=!1,e!==null&&Mg(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return h?(Kr(),T=o.fallback,h=n.mode,C=e.child,z=C.sibling,o=rr(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,z!==null?T=rr(z,T):(T=Xs(T,h,s,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,fl(null,o),o=n.child,T=e.child.memoizedState,T===null?T=Vf(s):(h=T.cachePool,h!==null?(C=Pe._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=zg(),T={baseLanes:T.baseLanes|s,cachePool:h}),o.memoizedState=T,o.childLanes=Uf(e,p,s),n.memoizedState=Mf,fl(e.child,o)):(Qr(n),s=e.child,e=s.sibling,s=rr(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=s,n.memoizedState=null,s)}function Lf(e,n){return n=Wu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wu(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function Pf(e,n,s){return ta(n,e.child,null,s),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jp(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zh(e.return,n,s)}function kf(e,n,s,o,h,f){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h,treeForkCount:f}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=s,p.tailMode=h,p.treeForkCount=f)}function Wp(e,n,s){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var p=Oe.current,T=(p&2)!==0;if(T?(p=p&1|2,n.flags|=128):p&=1,ot(Oe,p),rn(e,n,o,s),o=Xt?Wo:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jp(e,s,n);else if(e.tag===19)Jp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=n.child,h=null;s!==null;)e=s.alternate,e!==null&&ju(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),kf(n,!1,h,s,f,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&ju(e)===null){n.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}kf(n,!0,s,null,f,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function cr(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Jr|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(ka(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=rr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=rr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function zf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function v1(e,n,s){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Fr(n,Pe,e.memoizedState.cache),Qs();break;case 27:case 5:Ie(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Fr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qr(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Zp(e,n,s):(Qr(n),e=cr(e,n,s),e!==null?e.sibling:null);Qr(n);break;case 19:var h=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(ka(e,n,s,!1),o=(s&n.childLanes)!==0),h){if(o)return Wp(e,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ot(Oe,Oe.current),o)break;return null;case 22:return n.lanes=0,Gp(e,n,s,n.pendingProps);case 24:Fr(n,Pe,e.memoizedState.cache)}return cr(e,n,s)}function ty(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)ze=!0;else{if(!zf(e,s)&&(n.flags&128)===0)return ze=!1,v1(e,n,s);ze=(e.flags&131072)!==0}else ze=!1,Xt&&(n.flags&1048576)!==0&&xg(n,Wo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Js(n.elementType),n.type=e,typeof e=="function")Hh(e)?(o=na(e,o),n.tag=1,n=Kp(null,n,e,o,s)):(n.tag=0,n=xf(null,n,e,o,s));else{if(e!=null){var h=e.$$typeof;if(h===Ot){n.tag=11,n=qp(null,n,e,o,s);break t}else if(h===E){n.tag=14,n=Hp(null,n,e,o,s);break t}}throw n=ue(e)||e,Error(a(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,h=na(o,n.pendingProps),Kp(e,n,o,h,s);case 3:t:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,sf(e,n),ol(n,o,null,s);var p=n.memoizedState;if(o=p.cache,Fr(n,Pe,o),o!==f.cache&&Jh(n,[Pe],s,!0),al(),o=p.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$p(e,n,o,s);break t}else if(o!==h){h=ti(Error(a(424)),n),tl(h),n=$p(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fe=si(e.firstChild),en=n,Xt=!0,qr=null,ii=!0,s=Gg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Qs(),o===h){n=cr(e,n,s);break t}rn(e,n,o,s)}n=n.child}return n;case 26:return Ju(e,n),e===null?(s=h_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Xt||(s=n.type,e=n.pendingProps,o=gc(Nt.current).createElement(s),o[ye]=n,o[De]=e,sn(o,s,e),Lt(o),n.stateNode=o):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ie(n),e===null&&Xt&&(o=n.stateNode=l_(n.type,n.pendingProps,Nt.current),en=n,ii=!0,h=fe,is(n.type)?(_d=h,fe=si(o.firstChild)):fe=h),rn(e,n,n.pendingProps.children,s),Ju(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xt&&((h=o=fe)&&(o=K1(o,n.type,n.pendingProps,ii),o!==null?(n.stateNode=o,en=n,fe=si(o.firstChild),ii=!1,h=!0):h=!1),h||Hr(n)),Ie(n),h=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,o=f.children,dd(h,f)?o=null:p!==null&&dd(h,p)&&(n.flags|=32),n.memoizedState!==null&&(h=ff(e,n,c1,null,null,s),Cl._currentValue=h),Ju(e,n),rn(e,n,o,s),n.child;case 6:return e===null&&Xt&&((e=s=fe)&&(s=$1(s,n.pendingProps,ii),s!==null?(n.stateNode=s,en=n,fe=null,e=!0):e=!1),e||Hr(n)),null;case 13:return Zp(e,n,s);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ta(n,null,o,s):rn(e,n,o,s),n.child;case 11:return qp(e,n,n.type,n.pendingProps,s);case 7:return rn(e,n,n.pendingProps,s),n.child;case 8:return rn(e,n,n.pendingProps.children,s),n.child;case 12:return rn(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Fr(n,n.type,o.value),rn(e,n,o.children,s),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,$s(n),h=nn(h),o=o(h),n.flags|=1,rn(e,n,o,s),n.child;case 14:return Hp(e,n,n.type,n.pendingProps,s);case 15:return Fp(e,n,n.type,n.pendingProps,s);case 19:return Wp(e,n,s);case 31:return _1(e,n,s);case 22:return Gp(e,n,s,n.pendingProps);case 24:return $s(n),o=nn(Pe),e===null?(h=ef(),h===null&&(h=ce,f=Wh(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),n.memoizedState={parent:o,cache:h},rf(n),Fr(n,Pe,h)):((e.lanes&s)!==0&&(sf(e,n),ol(n,null,null,s),al()),h=e.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Fr(n,Pe,o)):(o=f.cache,Fr(n,Pe,o),o!==h.cache&&Jh(n,[Pe],s,!0))),rn(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function hr(e){e.flags|=4}function Bf(e,n,s,o,h){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Cy())e.flags|=8192;else throw Ws=Pu,nf}else e.flags&=-16777217}function ey(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!p_(n))if(Cy())e.flags|=8192;else throw Ws=Pu,nf}function tc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Or():536870912,e.lanes|=n,$a|=n)}function dl(e,n){if(!Xt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function E1(e,n,s){var o=n.pendingProps;switch(Xh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return de(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),or(Pe),Pt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Pa(n)?hr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kh())),de(n),null;case 26:var h=n.type,f=n.memoizedState;return e===null?(hr(n),f!==null?(de(n),ey(n,f)):(de(n),Bf(n,h,null,o,s))):f?f!==e.memoizedState?(hr(n),de(n),ey(n,f)):(de(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&hr(n),de(n),Bf(n,h,e,o,s)),null;case 27:if(Ut(n),s=Nt.current,h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&hr(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return de(n),null}e=lt.current,Pa(n)?Vg(n):(e=l_(h,o,s),n.stateNode=e,hr(n))}return de(n),null;case 5:if(Ut(n),h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&hr(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return de(n),null}if(f=lt.current,Pa(n))Vg(n);else{var p=gc(Nt.current);switch(f){case 1:f=p.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=p.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=p.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?p.createElement("select",{is:o.is}):p.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?p.createElement(h,{is:o.is}):p.createElement(h)}}f[ye]=n,f[De]=o;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)f.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=f;t:switch(sn(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&hr(n)}}return de(n),Bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&hr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=Nt.current,Pa(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,h=en,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[ye]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Zy(e.nodeValue,s)),e||Hr(n,!0)}else e=gc(e).createTextNode(o),e[ye]=n,n.stateNode=e}return de(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(o=Pa(n),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ye]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;de(n),e=!1}else s=Kh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(Bn(n),n):(Bn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return de(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Pa(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[ye]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;de(n),h=!1}else h=Kh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Bn(n),n):(Bn(n),null)}return Bn(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),tc(n,n.updateQueue),de(n),null);case 4:return Pt(),e===null&&ld(n.stateNode.containerInfo),de(n),null;case 10:return or(n.type),de(n),null;case 19:if($(Oe),o=n.memoizedState,o===null)return de(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)dl(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ju(e),f!==null){for(n.flags|=128,dl(o,!1),e=f.updateQueue,n.updateQueue=e,tc(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Dg(s,e),s=s.sibling;return ot(Oe,Oe.current&1|2),Xt&&sr(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ve()>sc&&(n.flags|=128,h=!0,dl(o,!1),n.lanes=4194304)}else{if(!h)if(e=ju(f),e!==null){if(n.flags|=128,h=!0,e=e.updateQueue,n.updateQueue=e,tc(n,e),dl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Xt)return de(n),null}else 2*Ve()-o.renderingStartTime>sc&&s!==536870912&&(n.flags|=128,h=!0,dl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ve(),e.sibling=null,s=Oe.current,ot(Oe,h?s&1|2:s&1),Xt&&sr(n,o.treeForkCount),e):(de(n),null);case 22:case 23:return Bn(n),uf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),s=n.updateQueue,s!==null&&tc(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&$(Zs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),or(Pe),de(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function T1(e,n){switch(Xh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return or(Pe),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ut(n),null;case 31:if(n.memoizedState!==null){if(Bn(n),n.alternate===null)throw Error(a(340));Qs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Bn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Qs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(Oe),null;case 4:return Pt(),null;case 10:return or(n.type),null;case 22:case 23:return Bn(n),uf(),e!==null&&$(Zs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return or(Pe),null;case 25:return null;default:return null}}function ny(e,n){switch(Xh(n),n.tag){case 3:or(Pe),Pt();break;case 26:case 27:case 5:Ut(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Bn(n);break;case 13:Bn(n);break;case 19:$(Oe);break;case 10:or(n.type);break;case 22:case 23:Bn(n),uf(),e!==null&&$(Zs);break;case 24:or(Pe)}}function ml(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var f=s.create,p=s.inst;o=f(),p.destroy=o}s=s.next}while(s!==h)}}catch(T){ie(n,n.return,T)}}function $r(e,n,s){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var p=o.inst,T=p.destroy;if(T!==void 0){p.destroy=void 0,h=n;var C=s,z=T;try{z()}catch(X){ie(h,C,X)}}}o=o.next}while(o!==f)}}catch(X){ie(n,n.return,X)}}function iy(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Xg(n,s)}catch(o){ie(e,e.return,o)}}}function ry(e,n,s){s.props=na(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ie(e,n,o)}}function gl(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){ie(e,n,h)}}function Li(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){ie(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ie(e,n,h)}else s.current=null}function sy(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){ie(e,e.return,h)}}function jf(e,n,s){try{var o=e.stateNode;H1(o,e.type,s,n),o[De]=n}catch(h){ie(e,e.return,h)}}function ay(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ui));else if(o!==4&&(o===27&&is(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Hf(e,n,s),e=e.sibling;e!==null;)Hf(e,n,s),e=e.sibling}function ec(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&is(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ec(e,n,s),e=e.sibling;e!==null;)ec(e,n,s),e=e.sibling}function oy(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);sn(n,o,s),n[ye]=e,n[De]=s}catch(f){ie(e,e.return,f)}}var fr=!1,Be=!1,Ff=!1,ly=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function S1(e,n){if(e=e.containerInfo,hd=Sc,e=Eg(e),Lh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var p=0,T=-1,C=-1,z=0,X=0,Z=e,B=null;e:for(;;){for(var F;Z!==s||h!==0&&Z.nodeType!==3||(T=p+h),Z!==f||o!==0&&Z.nodeType!==3||(C=p+o),Z.nodeType===3&&(p+=Z.nodeValue.length),(F=Z.firstChild)!==null;)B=Z,Z=F;for(;;){if(Z===e)break e;if(B===s&&++z===h&&(T=p),B===f&&++X===o&&(C=p),(F=Z.nextSibling)!==null)break;Z=B,B=Z.parentNode}Z=F}s=T===-1||C===-1?null:{start:T,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(fd={focusedElem:e,selectionRange:s},Sc=!1,Ze=n;Ze!==null;)if(n=Ze,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ze=e;else for(;Ze!==null;){switch(n=Ze,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,h=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var ht=na(s.type,h);e=o.getSnapshotBeforeUpdate(ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ie(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)gd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ze=e;break}Ze=n.return}}function uy(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:mr(e,s),o&4&&ml(5,s);break;case 1:if(mr(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(p){ie(s,s.return,p)}else{var h=na(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ie(s,s.return,p)}}o&64&&iy(s),o&512&&gl(s,s.return);break;case 3:if(mr(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Xg(e,n)}catch(p){ie(s,s.return,p)}}break;case 27:n===null&&o&4&&oy(s);case 26:case 5:mr(e,s),n===null&&o&4&&sy(s),o&512&&gl(s,s.return);break;case 12:mr(e,s);break;case 31:mr(e,s),o&4&&fy(e,s);break;case 13:mr(e,s),o&4&&dy(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=O1.bind(null,s),Z1(e,s))));break;case 22:if(o=s.memoizedState!==null||fr,!o){n=n!==null&&n.memoizedState!==null||Be,h=fr;var f=Be;fr=o,(Be=n)&&!f?gr(e,s,(s.subtreeFlags&8772)!==0):mr(e,s),fr=h,Be=f}break;case 30:break;default:mr(e,s)}}function cy(e){var n=e.alternate;n!==null&&(e.alternate=null,cy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Y(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,In=!1;function dr(e,n,s){for(s=s.child;s!==null;)hy(e,n,s),s=s.sibling}function hy(e,n,s){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(cn,s)}catch{}switch(s.tag){case 26:Be||Li(s,n),dr(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Be||Li(s,n);var o=ve,h=In;is(s.type)&&(ve=s.stateNode,In=!1),dr(e,n,s),bl(s.stateNode),ve=o,In=h;break;case 5:Be||Li(s,n);case 6:if(o=ve,h=In,ve=null,dr(e,n,s),ve=o,In=h,ve!==null)if(In)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(s.stateNode)}catch(f){ie(s,n,f)}else try{ve.removeChild(s.stateNode)}catch(f){ie(s,n,f)}break;case 18:ve!==null&&(In?(e=ve,i_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ro(e)):i_(ve,s.stateNode));break;case 4:o=ve,h=In,ve=s.stateNode.containerInfo,In=!0,dr(e,n,s),ve=o,In=h;break;case 0:case 11:case 14:case 15:$r(2,s,n),Be||$r(4,s,n),dr(e,n,s);break;case 1:Be||(Li(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&ry(s,n,o)),dr(e,n,s);break;case 21:dr(e,n,s);break;case 22:Be=(o=Be)||s.memoizedState!==null,dr(e,n,s),Be=o;break;default:dr(e,n,s)}}function fy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ro(e)}catch(s){ie(n,n.return,s)}}}function dy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ro(e)}catch(s){ie(n,n.return,s)}}function A1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ly),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ly),n;default:throw Error(a(435,e.tag))}}function nc(e,n){var s=A1(e);n.forEach(function(o){if(!s.has(o)){s.add(o);var h=x1.bind(null,e,o);o.then(h,h)}})}function Dn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],f=e,p=n,T=p;t:for(;T!==null;){switch(T.tag){case 27:if(is(T.type)){ve=T.stateNode,In=!1;break t}break;case 5:ve=T.stateNode,In=!1;break t;case 3:case 4:ve=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(ve===null)throw Error(a(160));hy(f,p,h),ve=null,In=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)my(n,e),n=n.sibling}var gi=null;function my(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(n,e),Nn(e),o&4&&($r(3,e,e.return),ml(3,e),$r(5,e,e.return));break;case 1:Dn(n,e),Nn(e),o&512&&(Be||s===null||Li(s,s.return)),o&64&&fr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=gi;if(Dn(n,e),Nn(e),o&512&&(Be||s===null||Li(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[j]||f[ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),sn(f,o,s),f[ye]=e,Lt(f),o=f;break t;case"link":var p=m_("link","href",h).get(o+(s.href||""));if(p){for(var T=0;T<p.length;T++)if(f=p[T],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){p.splice(T,1);break e}}f=h.createElement(o),sn(f,o,s),h.head.appendChild(f);break;case"meta":if(p=m_("meta","content",h).get(o+(s.content||""))){for(T=0;T<p.length;T++)if(f=p[T],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){p.splice(T,1);break e}}f=h.createElement(o),sn(f,o,s),h.head.appendChild(f);break;default:throw Error(a(468,o))}f[ye]=e,Lt(f),o=f}e.stateNode=o}else g_(h,e.type,e.stateNode);else e.stateNode=d_(h,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?g_(h,e.type,e.stateNode):d_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Dn(n,e),Nn(e),o&512&&(Be||s===null||Li(s,s.return)),s!==null&&o&4&&jf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Dn(n,e),Nn(e),o&512&&(Be||s===null||Li(s,s.return)),e.flags&32){h=e.stateNode;try{Cn(h,"")}catch(ht){ie(e,e.return,ht)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,jf(e,h,s!==null?s.memoizedProps:h)),o&1024&&(Ff=!0);break;case 6:if(Dn(n,e),Nn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(ht){ie(e,e.return,ht)}}break;case 3:if(_c=null,h=gi,gi=pc(n.containerInfo),Dn(n,e),gi=h,Nn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{ro(n.containerInfo)}catch(ht){ie(e,e.return,ht)}Ff&&(Ff=!1,gy(e));break;case 4:o=gi,gi=pc(e.stateNode.containerInfo),Dn(n,e),Nn(e),gi=o;break;case 12:Dn(n,e),Nn(e);break;case 31:Dn(n,e),Nn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:Dn(n,e),Nn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(rc=Ve()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:h=e.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,z=fr,X=Be;if(fr=z||h,Be=X||C,Dn(n,e),Be=X,fr=z,Nn(e),o&8192)t:for(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||C||fr||Be||ia(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){C=s=n;try{if(f=C.stateNode,h)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{T=C.stateNode;var Z=C.memoizedProps.style,B=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ht){ie(C,C.return,ht)}}}else if(n.tag===6){if(s===null){C=n;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ht){ie(C,C.return,ht)}}}else if(n.tag===18){if(s===null){C=n;try{var F=C.stateNode;h?r_(F,!0):r_(C.stateNode,!1)}catch(ht){ie(C,C.return,ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,nc(e,s))));break;case 19:Dn(n,e),Nn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:Dn(n,e),Nn(e)}}function Nn(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(ay(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=qf(e);ec(e,f,h);break;case 5:var p=s.stateNode;s.flags&32&&(Cn(p,""),s.flags&=-33);var T=qf(e);ec(e,T,p);break;case 3:case 4:var C=s.stateNode.containerInfo,z=qf(e);Hf(e,z,C);break;default:throw Error(a(161))}}catch(X){ie(e,e.return,X)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function mr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)uy(e,n.alternate,n),n=n.sibling}function ia(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:$r(4,n,n.return),ia(n);break;case 1:Li(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ry(n,n.return,s),ia(n);break;case 27:bl(n.stateNode);case 26:case 5:Li(n,n.return),ia(n);break;case 22:n.memoizedState===null&&ia(n);break;case 30:ia(n);break;default:ia(n)}e=e.sibling}}function gr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:gr(h,f,s),ml(4,f);break;case 1:if(gr(h,f,s),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){ie(o,o.return,z)}if(o=f,h=o.updateQueue,h!==null){var T=o.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Yg(C[h],T)}catch(z){ie(o,o.return,z)}}s&&p&64&&iy(f),gl(f,f.return);break;case 27:oy(f);case 26:case 5:gr(h,f,s),s&&o===null&&p&4&&sy(f),gl(f,f.return);break;case 12:gr(h,f,s);break;case 31:gr(h,f,s),s&&p&4&&fy(h,f);break;case 13:gr(h,f,s),s&&p&4&&dy(h,f);break;case 22:f.memoizedState===null&&gr(h,f,s),gl(f,f.return);break;case 30:break;default:gr(h,f,s)}n=n.sibling}}function Gf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&el(s))}function Yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e))}function pi(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)py(e,n,s,o),n=n.sibling}function py(e,n,s,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:pi(e,n,s,o),h&2048&&ml(9,n);break;case 1:pi(e,n,s,o);break;case 3:pi(e,n,s,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e)));break;case 12:if(h&2048){pi(e,n,s,o),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,T=f.onPostCommit;typeof T=="function"&&T(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){ie(n,n.return,C)}}else pi(e,n,s,o);break;case 31:pi(e,n,s,o);break;case 13:pi(e,n,s,o);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?pi(e,n,s,o):pl(e,n):f._visibility&2?pi(e,n,s,o):(f._visibility|=2,Xa(e,n,s,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&Gf(p,n);break;case 24:pi(e,n,s,o),h&2048&&Yf(n.alternate,n);break;default:pi(e,n,s,o)}}function Xa(e,n,s,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,p=n,T=s,C=o,z=p.flags;switch(p.tag){case 0:case 11:case 15:Xa(f,p,T,C,h),ml(8,p);break;case 23:break;case 22:var X=p.stateNode;p.memoizedState!==null?X._visibility&2?Xa(f,p,T,C,h):pl(f,p):(X._visibility|=2,Xa(f,p,T,C,h)),h&&z&2048&&Gf(p.alternate,p);break;case 24:Xa(f,p,T,C,h),h&&z&2048&&Yf(p.alternate,p);break;default:Xa(f,p,T,C,h)}n=n.sibling}}function pl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,h=o.flags;switch(o.tag){case 22:pl(s,o),h&2048&&Gf(o.alternate,o);break;case 24:pl(s,o),h&2048&&Yf(o.alternate,o);break;default:pl(s,o)}n=n.sibling}}var yl=8192;function Qa(e,n,s){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)yy(e,n,s),e=e.sibling}function yy(e,n,s){switch(e.tag){case 26:Qa(e,n,s),e.flags&yl&&e.memoizedState!==null&&uS(s,gi,e.memoizedState,e.memoizedProps);break;case 5:Qa(e,n,s);break;case 3:case 4:var o=gi;gi=pc(e.stateNode.containerInfo),Qa(e,n,s),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yl,yl=16777216,Qa(e,n,s),yl=o):Qa(e,n,s));break;default:Qa(e,n,s)}}function _y(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Ze=o,Ey(o,e)}_y(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vy(e),e=e.sibling}function vy(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&$r(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):_l(e);break;default:_l(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Ze=o,Ey(o,e)}_y(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$r(8,n,n.return),ic(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function Ey(e,n){for(;Ze!==null;){var s=Ze;switch(s.tag){case 0:case 11:case 15:$r(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:el(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ze=o;else t:for(s=e;Ze!==null;){o=Ze;var h=o.sibling,f=o.return;if(cy(o),o===s){Ze=null;break t}if(h!==null){h.return=f,Ze=h;break t}Ze=f}}}var b1={getCacheForType:function(e){var n=nn(Pe),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return nn(Pe).controller.signal}},R1=typeof WeakMap=="function"?WeakMap:Map,Wt=0,ce=null,kt=null,jt=0,ne=0,jn=null,Zr=!1,Ka=!1,Xf=!1,pr=0,we=0,Jr=0,ra=0,Qf=0,qn=0,$a=0,vl=null,On=null,Kf=!1,rc=0,Ty=0,sc=1/0,ac=null,Wr=null,Ge=0,ts=null,Za=null,yr=0,$f=0,Zf=null,Sy=null,El=0,Jf=null;function Hn(){return(Wt&2)!==0&&jt!==0?jt&-jt:G.T!==null?rd():Fe()}function Ay(){if(qn===0)if((jt&536870912)===0||Xt){var e=$i;$i<<=1,($i&3932160)===0&&($i=262144),qn=e}else qn=536870912;return e=zn.current,e!==null&&(e.flags|=32),qn}function xn(e,n,s){(e===ce&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(Ja(e,0),es(e,jt,qn,!1)),Zi(e,s),((Wt&2)===0||e!==ce)&&(e===ce&&((Wt&2)===0&&(ra|=s),we===4&&es(e,jt,qn,!1)),Pi(e))}function by(e,n,s){if((Wt&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&e.expiredLanes)===0||Sn(e,n),h=o?I1(e,n):td(e,n,!0),f=o;do{if(h===0){Ka&&!o&&es(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!w1(s)){h=td(e,n,!1),f=!1;continue}if(h===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var T=e;h=vl;var C=T.current.memoizedState.isDehydrated;if(C&&(Ja(T,p).flags|=256),p=td(T,p,!1),p!==2){if(Xf&&!C){T.errorRecoveryDisabledLanes|=f,ra|=f,h=4;break t}f=On,On=h,f!==null&&(On===null?On=f:On.push.apply(On,f))}h=p}if(f=!1,h!==2)continue}}if(h===1){Ja(e,0),es(e,n,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:es(o,n,qn,!Zr);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=rc+300-Ve(),10<h)){if(es(o,n,qn,!Zr),Qn(o,0,!0)!==0)break t;yr=n,o.timeoutHandle=e_(Ry.bind(null,o,s,On,ac,Kf,n,qn,ra,$a,Zr,f,"Throttled",-0,0),h);break t}Ry(o,s,On,ac,Kf,n,qn,ra,$a,Zr,f,null,-0,0)}}break}while(!0);Pi(e)}function Ry(e,n,s,o,h,f,p,T,C,z,X,Z,B,F){if(e.timeoutHandle=-1,Z=n.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ui},yy(n,f,Z);var ht=(f&62914560)===f?rc-Ve():(f&4194048)===f?Ty-Ve():0;if(ht=cS(Z,ht),ht!==null){yr=f,e.cancelPendingCommit=ht(My.bind(null,e,n,f,s,o,h,p,T,C,X,Z,null,B,F)),es(e,f,p,!z);return}}My(e,n,f,s,o,h,p,T,C)}function w1(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],f=h.getSnapshot;h=h.value;try{if(!Pn(f(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function es(e,n,s,o){n&=~Qf,n&=~ra,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var f=31-Te(h),p=1<<f;o[f]=-1,h&=~p}s!==0&&Ji(e,s,n)}function oc(){return(Wt&6)===0?(Tl(0),!1):!0}function Wf(){if(kt!==null){if(ne===0)var e=kt.return;else e=kt,ar=Ks=null,gf(e),qa=null,il=0,e=kt;for(;e!==null;)ny(e.alternate,e),e=e.return;kt=null}}function Ja(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Y1(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),yr=0,Wf(),ce=e,kt=s=rr(e.current,null),jt=n,ne=0,jn=null,Zr=!1,Ka=Sn(e,n),Xf=!1,$a=qn=Qf=ra=Jr=we=0,On=vl=null,Kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-Te(o),f=1<<h;n|=e[h],o&=~f}return pr=n,Iu(),s}function wy(e,n){Mt=null,G.H=hl,n===ja||n===Lu?(n=qg(),ne=3):n===nf?(n=qg(),ne=4):ne=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,kt===null&&(we=1,$u(e,ti(n,e.current)))}function Cy(){var e=zn.current;return e===null?!0:(jt&4194048)===jt?ri===null:(jt&62914560)===jt||(jt&536870912)!==0?e===ri:!1}function Iy(){var e=G.H;return G.H=hl,e===null?hl:e}function Dy(){var e=G.A;return G.A=b1,e}function lc(){we=4,Zr||(jt&4194048)!==jt&&zn.current!==null||(Ka=!0),(Jr&134217727)===0&&(ra&134217727)===0||ce===null||es(ce,jt,qn,!1)}function td(e,n,s){var o=Wt;Wt|=2;var h=Iy(),f=Dy();(ce!==e||jt!==n)&&(ac=null,Ja(e,n)),n=!1;var p=we;t:do try{if(ne!==0&&kt!==null){var T=kt,C=jn;switch(ne){case 8:Wf(),p=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var z=ne;if(ne=0,jn=null,Wa(e,T,C,z),s&&Ka){p=0;break t}break;default:z=ne,ne=0,jn=null,Wa(e,T,C,z)}}C1(),p=we;break}catch(X){wy(e,X)}while(!0);return n&&e.shellSuspendCounter++,ar=Ks=null,Wt=o,G.H=h,G.A=f,kt===null&&(ce=null,jt=0,Iu()),p}function C1(){for(;kt!==null;)Ny(kt)}function I1(e,n){var s=Wt;Wt|=2;var o=Iy(),h=Dy();ce!==e||jt!==n?(ac=null,sc=Ve()+500,Ja(e,n)):Ka=Sn(e,n);t:do try{if(ne!==0&&kt!==null){n=kt;var f=jn;e:switch(ne){case 1:ne=0,jn=null,Wa(e,n,f,1);break;case 2:case 9:if(Bg(f)){ne=0,jn=null,Oy(n);break}n=function(){ne!==2&&ne!==9||ce!==e||(ne=7),Pi(e)},f.then(n,n);break t;case 3:ne=7;break t;case 4:ne=5;break t;case 7:Bg(f)?(ne=0,jn=null,Oy(n)):(ne=0,jn=null,Wa(e,n,f,7));break;case 5:var p=null;switch(kt.tag){case 26:p=kt.memoizedState;case 5:case 27:var T=kt;if(p?p_(p):T.stateNode.complete){ne=0,jn=null;var C=T.sibling;if(C!==null)kt=C;else{var z=T.return;z!==null?(kt=z,uc(z)):kt=null}break e}}ne=0,jn=null,Wa(e,n,f,5);break;case 6:ne=0,jn=null,Wa(e,n,f,6);break;case 8:Wf(),we=6;break t;default:throw Error(a(462))}}D1();break}catch(X){wy(e,X)}while(!0);return ar=Ks=null,G.H=o,G.A=h,Wt=s,kt!==null?0:(ce=null,jt=0,Iu(),we)}function D1(){for(;kt!==null&&!Dr();)Ny(kt)}function Ny(e){var n=ty(e.alternate,e,pr);e.memoizedProps=e.pendingProps,n===null?uc(e):kt=n}function Oy(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Qp(s,n,n.pendingProps,n.type,void 0,jt);break;case 11:n=Qp(s,n,n.pendingProps,n.type.render,n.ref,jt);break;case 5:gf(n);default:ny(s,n),n=kt=Dg(n,pr),n=ty(s,n,pr)}e.memoizedProps=e.pendingProps,n===null?uc(e):kt=n}function Wa(e,n,s,o){ar=Ks=null,gf(n),qa=null,il=0;var h=n.return;try{if(y1(e,h,n,s,jt)){we=1,$u(e,ti(s,e.current)),kt=null;return}}catch(f){if(h!==null)throw kt=h,f;we=1,$u(e,ti(s,e.current)),kt=null;return}n.flags&32768?(Xt||o===1?e=!0:Ka||(jt&536870912)!==0?e=!1:(Zr=e=!0,(o===2||o===9||o===3||o===6)&&(o=zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),xy(n,e)):uc(n)}function uc(e){var n=e;do{if((n.flags&32768)!==0){xy(n,Zr);return}e=n.return;var s=E1(n.alternate,n,pr);if(s!==null){kt=s;return}if(n=n.sibling,n!==null){kt=n;return}kt=n=e}while(n!==null);we===0&&(we=5)}function xy(e,n){do{var s=T1(e.alternate,e);if(s!==null){s.flags&=32767,kt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){kt=e;return}kt=e=s}while(e!==null);we=6,kt=null}function My(e,n,s,o,h,f,p,T,C){e.cancelPendingCommit=null;do cc();while(Ge!==0);if((Wt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=jh,Uo(e,s,f,p,T,C),e===ce&&(kt=ce=null,jt=0),Za=n,ts=e,yr=s,$f=f,Zf=h,Sy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,M1(bi,function(){return ky(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,h=at.p,at.p=2,p=Wt,Wt|=4;try{S1(e,n,s)}finally{Wt=p,at.p=h,G.T=o}}Ge=1,Vy(),Uy(),Ly()}}function Vy(){if(Ge===1){Ge=0;var e=ts,n=Za,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=G.T,G.T=null;var o=at.p;at.p=2;var h=Wt;Wt|=4;try{my(n,e);var f=fd,p=Eg(e.containerInfo),T=f.focusedElem,C=f.selectionRange;if(p!==T&&T&&T.ownerDocument&&vg(T.ownerDocument.documentElement,T)){if(C!==null&&Lh(T)){var z=C.start,X=C.end;if(X===void 0&&(X=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(X,T.value.length);else{var Z=T.ownerDocument||document,B=Z&&Z.defaultView||window;if(B.getSelection){var F=B.getSelection(),ht=T.textContent.length,Et=Math.min(C.start,ht),oe=C.end===void 0?Et:Math.min(C.end,ht);!F.extend&&Et>oe&&(p=oe,oe=Et,Et=p);var U=_g(T,Et),O=_g(T,oe);if(U&&O&&(F.rangeCount!==1||F.anchorNode!==U.node||F.anchorOffset!==U.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var k=Z.createRange();k.setStart(U.node,U.offset),F.removeAllRanges(),Et>oe?(F.addRange(k),F.extend(O.node,O.offset)):(k.setEnd(O.node,O.offset),F.addRange(k))}}}}for(Z=[],F=T;F=F.parentNode;)F.nodeType===1&&Z.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Z.length;T++){var K=Z[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Sc=!!hd,fd=hd=null}finally{Wt=h,at.p=o,G.T=s}}e.current=n,Ge=2}}function Uy(){if(Ge===2){Ge=0;var e=ts,n=Za,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=G.T,G.T=null;var o=at.p;at.p=2;var h=Wt;Wt|=4;try{uy(e,n.alternate,n)}finally{Wt=h,at.p=o,G.T=s}}Ge=3}}function Ly(){if(Ge===4||Ge===3){Ge=0,Xi();var e=ts,n=Za,s=yr,o=Sy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ge=5:(Ge=0,Za=ts=null,Py(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Wr=null),Kn(s),n=n.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(cn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=G.T,h=at.p,at.p=2,G.T=null;try{for(var f=e.onRecoverableError,p=0;p<o.length;p++){var T=o[p];f(T.value,{componentStack:T.stack})}}finally{G.T=n,at.p=h}}(yr&3)!==0&&cc(),Pi(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===Jf?El++:(El=0,Jf=e):El=0,Tl(0)}}function Py(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,el(n)))}function cc(){return Vy(),Uy(),Ly(),ky()}function ky(){if(Ge!==5)return!1;var e=ts,n=$f;$f=0;var s=Kn(yr),o=G.T,h=at.p;try{at.p=32>s?32:s,G.T=null,s=Zf,Zf=null;var f=ts,p=yr;if(Ge=0,Za=ts=null,yr=0,(Wt&6)!==0)throw Error(a(331));var T=Wt;if(Wt|=4,vy(f.current),py(f,f.current,p,s),Wt=T,Tl(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(cn,f)}catch{}return!0}finally{at.p=h,G.T=o,Py(e,n)}}function zy(e,n,s){n=ti(s,n),n=Nf(e.stateNode,n,2),e=Xr(e,n,2),e!==null&&(Zi(e,2),Pi(e))}function ie(e,n,s){if(e.tag===3)zy(e,e,s);else for(;n!==null;){if(n.tag===3){zy(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wr===null||!Wr.has(o))){e=ti(s,e),s=Bp(2),o=Xr(n,s,2),o!==null&&(jp(s,o,n,e),Zi(o,2),Pi(o));break}}n=n.return}}function ed(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new R1;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(s)||(Xf=!0,h.add(s),e=N1.bind(null,e,n,s),n.then(e,e))}function N1(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ce===e&&(jt&s)===s&&(we===4||we===3&&(jt&62914560)===jt&&300>Ve()-rc?(Wt&2)===0&&Ja(e,0):Qf|=s,$a===jt&&($a=0)),Pi(e)}function By(e,n){n===0&&(n=Or()),e=Ys(e,n),e!==null&&(Zi(e,n),Pi(e))}function O1(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),By(e,s)}function x1(e,n){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),By(e,s)}function M1(e,n){return Ee(e,n)}var hc=null,to=null,nd=!1,fc=!1,id=!1,ns=0;function Pi(e){e!==to&&e.next===null&&(to===null?hc=to=e:to=to.next=e),fc=!0,nd||(nd=!0,U1())}function Tl(e,n){if(!id&&fc){id=!0;do for(var s=!1,o=hc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var p=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Te(42|e)+1)-1,f&=h&~(p&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Fy(o,f))}else f=jt,f=Qn(o,o===ce?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Sn(o,f)||(s=!0,Fy(o,f));o=o.next}while(s);id=!1}}function V1(){jy()}function jy(){fc=nd=!1;var e=0;ns!==0&&G1()&&(e=ns);for(var n=Ve(),s=null,o=hc;o!==null;){var h=o.next,f=qy(o,n);f===0?(o.next=null,s===null?hc=h:s.next=h,h===null&&(to=s)):(s=o,(e!==0||(f&3)!==0)&&(fc=!0)),o=h}Ge!==0&&Ge!==5||Tl(e),ns!==0&&(ns=0)}function qy(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Te(f),T=1<<p,C=h[p];C===-1?((T&s)===0||(T&o)!==0)&&(h[p]=Vo(T,n)):C<=n&&(e.expiredLanes|=T),f&=~T}if(n=ce,s=jt,s=Qn(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&yn(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Sn(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&yn(o),Kn(s)){case 2:case 8:s=Qi;break;case 32:s=bi;break;case 268435456:s=ya;break;default:s=bi}return o=Hy.bind(null,e),s=Ee(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&yn(o),e.callbackPriority=2,e.callbackNode=null,2}function Hy(e,n){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(cc()&&e.callbackNode!==s)return null;var o=jt;return o=Qn(e,e===ce?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(by(e,o,n),qy(e,Ve()),e.callbackNode!=null&&e.callbackNode===s?Hy.bind(null,e):null)}function Fy(e,n){if(cc())return null;by(e,n,!0)}function U1(){X1(function(){(Wt&6)!==0?Ee(Gn,V1):jy()})}function rd(){if(ns===0){var e=za;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),ns=e}return ns}function Gy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ba(""+e)}function Yy(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function L1(e,n,s,o,h){if(n==="submit"&&s&&s.stateNode===h){var f=Gy((h[De]||null).action),p=o.submitter;p&&(n=(n=p[De]||null)?Gy(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var T=new Ni("action","action",null,o,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ns!==0){var C=p?Yy(h,p):new FormData(h);bf(s,{pending:!0,data:C,method:h.method,action:f},null,C)}}else typeof f=="function"&&(T.preventDefault(),C=p?Yy(h,p):new FormData(h),bf(s,{pending:!0,data:C,method:h.method,action:f},f,C))},currentTarget:h}]})}}for(var sd=0;sd<Bh.length;sd++){var ad=Bh[sd],P1=ad.toLowerCase(),k1=ad[0].toUpperCase()+ad.slice(1);mi(P1,"on"+k1)}mi(Ag,"onAnimationEnd"),mi(bg,"onAnimationIteration"),mi(Rg,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(t1,"onTransitionRun"),mi(e1,"onTransitionStart"),mi(n1,"onTransitionCancel"),mi(wg,"onTransitionEnd"),wi("onMouseEnter",["mouseout","mouseover"]),wi("onMouseLeave",["mouseout","mouseover"]),wi("onPointerEnter",["pointerout","pointerover"]),wi("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function Xy(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var p=o.length-1;0<=p;p--){var T=o[p],C=T.instance,z=T.currentTarget;if(T=T.listener,C!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=z;try{f(h)}catch(X){Cu(X)}h.currentTarget=null,f=C}else for(p=0;p<o.length;p++){if(T=o[p],C=T.instance,z=T.currentTarget,T=T.listener,C!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=z;try{f(h)}catch(X){Cu(X)}h.currentTarget=null,f=C}}}}function zt(e,n){var s=n[tr];s===void 0&&(s=n[tr]=new Set);var o=e+"__bubble";s.has(o)||(Qy(n,e,2,!1),s.add(o))}function od(e,n,s){var o=0;n&&(o|=4),Qy(s,e,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[dc]){e[dc]=!0,he.forEach(function(s){s!=="selectionchange"&&(z1.has(s)||od(s,!1,e),od(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dc]||(n[dc]=!0,od("selectionchange",!1,n))}}function Qy(e,n,s,o){switch(A_(n)){case 2:var h=dS;break;case 8:h=mS;break;default:h=Ad}s=h.bind(null,n,s,e),h=void 0,!ks||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,s,{capture:!0,passive:h}):e.addEventListener(n,s,!0):h!==void 0?e.addEventListener(n,s,{passive:h}):e.addEventListener(n,s,!1)}function ud(e,n,s,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var T=o.stateNode.containerInfo;if(T===h)break;if(p===4)for(p=o.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===h)return;p=p.return}for(;T!==null;){if(p=tt(T),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){o=f=p;continue t}T=T.parentNode}}o=o.return}Pr(function(){var z=f,X=$n(s),Z=[];t:{var B=Cg.get(e);if(B!==void 0){var F=Ni,ht=e;switch(e){case"keypress":if(Bs(s)===0)break t;case"keydown":case"keyup":F=bu;break;case"focusin":ht="focus",F=qs;break;case"focusout":ht="blur",F=qs;break;case"beforeblur":case"afterblur":F=qs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=m;break;case Ag:case bg:case Rg:F=yu;break;case wg:F=S;break;case"scroll":case"scrollend":F=Yo;break;case"wheel":F=q;break;case"copy":case"cut":case"paste":F=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ir;break;case"toggle":case"beforetoggle":F=xt}var Et=(n&4)!==0,oe=!Et&&(e==="scroll"||e==="scrollend"),U=Et?B!==null?B+"Capture":null:B;Et=[];for(var O=z,k;O!==null;){var K=O;if(k=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||k===null||U===null||(K=ci(O,U),K!=null&&Et.push(Al(O,K,k))),oe)break;O=O.return}0<Et.length&&(B=new F(B,ht,null,s,X),Z.push({event:B,listeners:Et}))}}if((n&7)===0){t:{if(B=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",B&&s!==Ho&&(ht=s.relatedTarget||s.fromElement)&&(tt(ht)||ht[Rn]))break t;if((F||B)&&(B=X.window===X?X:(B=X.ownerDocument)?B.defaultView||B.parentWindow:window,F?(ht=s.relatedTarget||s.toElement,F=z,ht=ht?tt(ht):null,ht!==null&&(oe=c(ht),Et=ht.tag,ht!==oe||Et!==5&&Et!==27&&Et!==6)&&(ht=null)):(F=null,ht=z),F!==ht)){if(Et=Xo,K="onMouseLeave",U="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Et=ir,K="onPointerLeave",U="onPointerEnter",O="pointer"),oe=F==null?B:vt(F),k=ht==null?B:vt(ht),B=new Et(K,O+"leave",F,s,X),B.target=oe,B.relatedTarget=k,K=null,tt(X)===z&&(Et=new Et(U,O+"enter",ht,s,X),Et.target=k,Et.relatedTarget=oe,K=Et),oe=K,F&&ht)e:{for(Et=B1,U=F,O=ht,k=0,K=U;K;K=Et(K))k++;K=0;for(var pt=O;pt;pt=Et(pt))K++;for(;0<k-K;)U=Et(U),k--;for(;0<K-k;)O=Et(O),K--;for(;k--;){if(U===O||O!==null&&U===O.alternate){Et=U;break e}U=Et(U),O=Et(O)}Et=null}else Et=null;F!==null&&Ky(Z,B,F,Et,!1),ht!==null&&oe!==null&&Ky(Z,oe,ht,Et,!0)}}t:{if(B=z?vt(z):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var Kt=fg;else if(cg(B))if(dg)Kt=Z0;else{Kt=K0;var mt=Q0}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&Aa(z.elementType)&&(Kt=fg):Kt=$0;if(Kt&&(Kt=Kt(e,z))){hg(Z,Kt,s,X);break t}mt&&mt(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Bo(B,"number",B.value)}switch(mt=z?vt(z):window,e){case"focusin":(cg(mt)||mt.contentEditable==="true")&&(Oa=mt,Ph=z,Jo=null);break;case"focusout":Jo=Ph=Oa=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,Tg(Z,s,X);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":Tg(Z,s,X)}var Vt;if(Jt)t:{switch(e){case"compositionstart":var qt="onCompositionStart";break t;case"compositionend":qt="onCompositionEnd";break t;case"compositionupdate":qt="onCompositionUpdate";break t}qt=void 0}else Na?Hs(e,s)&&(qt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(qt="onCompositionStart");qt&&(Mi&&s.locale!=="ko"&&(Na||qt!=="onCompositionStart"?qt==="onCompositionEnd"&&Na&&(Vt=Go()):(Di=X,Fo="value"in Di?Di.value:Di.textContent,Na=!0)),mt=mc(z,qt),0<mt.length&&(qt=new xi(qt,e,null,s,X),Z.push({event:qt,listeners:mt}),Vt?qt.data=Vt:(Vt=Da(s),Vt!==null&&(qt.data=Vt)))),(Vt=Jn?F0(e,s):G0(e,s))&&(qt=mc(z,"onBeforeInput"),0<qt.length&&(mt=new xi("onBeforeInput","beforeinput",null,s,X),Z.push({event:mt,listeners:qt}),mt.data=Vt)),L1(Z,e,z,s,X)}Xy(Z,n)})}function Al(e,n,s){return{instance:e,listener:n,currentTarget:s}}function mc(e,n){for(var s=n+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=ci(e,s),h!=null&&o.unshift(Al(e,h,f)),h=ci(e,n),h!=null&&o.push(Al(e,h,f))),e.tag===3)return o;e=e.return}return[]}function B1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ky(e,n,s,o,h){for(var f=n._reactName,p=[];s!==null&&s!==o;){var T=s,C=T.alternate,z=T.stateNode;if(T=T.tag,C!==null&&C===o)break;T!==5&&T!==26&&T!==27||z===null||(C=z,h?(z=ci(s,f),z!=null&&p.unshift(Al(s,z,C))):h||(z=ci(s,f),z!=null&&p.push(Al(s,z,C)))),s=s.return}p.length!==0&&e.push({event:n,listeners:p})}var j1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function $y(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(q1,"")}function Zy(e,n){return n=$y(n),$y(e)===n}function ae(e,n,s,o,h,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Cn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Cn(e,""+o);break;case"className":Ln(e,"class",o);break;case"tabIndex":Ln(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(e,s,o);break;case"style":qo(e,o,f);break;case"data":if(n!=="object"){Ln(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ba(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&ae(e,n,"name",h.name,h,null),ae(e,n,"formEncType",h.formEncType,h,null),ae(e,n,"formMethod",h.formMethod,h,null),ae(e,n,"formTarget",h.formTarget,h,null)):(ae(e,n,"encType",h.encType,h,null),ae(e,n,"method",h.method,h,null),ae(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ba(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ui);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ba(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":zt("beforetoggle",e),zt("toggle",e),Ta(e,"popover",o);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ta(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mu.get(s)||s,Ta(e,s,o))}}function cd(e,n,s,o,h,f){switch(s){case"style":qo(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Cn(e,o):(typeof o=="number"||typeof o=="bigint")&&Cn(e,""+o);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hn.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),f=e[De]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Ta(e,s,o)}}}function sn(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",e),zt("load",e);var o=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var p=s[f];if(p!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ae(e,n,f,p,s,null)}}h&&ae(e,n,"srcSet",s.srcSet,s,null),o&&ae(e,n,"src",s.src,s,null);return;case"input":zt("invalid",e);var T=f=p=h=null,C=null,z=null;for(o in s)if(s.hasOwnProperty(o)){var X=s[o];if(X!=null)switch(o){case"name":h=X;break;case"type":p=X;break;case"checked":C=X;break;case"defaultChecked":z=X;break;case"value":f=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,n));break;default:ae(e,n,o,X,s,null)}}hu(e,f,T,C,z,p,h,!1);return;case"select":zt("invalid",e),o=p=f=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":p=T;break;case"multiple":o=T;default:ae(e,n,h,T,s,null)}n=f,s=p,e.multiple=!!o,n!=null?Mr(e,!!o,n,!1):s!=null&&Mr(e,!!o,s,!0);return;case"textarea":zt("invalid",e),f=h=o=null;for(p in s)if(s.hasOwnProperty(p)&&(T=s[p],T!=null))switch(p){case"value":o=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:ae(e,n,p,T,s,null)}Vr(e,o,h,f);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(o=s[C],o!=null))switch(C){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ae(e,n,C,o,s,null)}return;case"dialog":zt("beforetoggle",e),zt("toggle",e),zt("cancel",e),zt("close",e);break;case"iframe":case"object":zt("load",e);break;case"video":case"audio":for(o=0;o<Sl.length;o++)zt(Sl[o],e);break;case"image":zt("error",e),zt("load",e);break;case"details":zt("toggle",e);break;case"embed":case"source":case"link":zt("error",e),zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in s)if(s.hasOwnProperty(z)&&(o=s[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ae(e,n,z,o,s,null)}return;default:if(Aa(n)){for(X in s)s.hasOwnProperty(X)&&(o=s[X],o!==void 0&&cd(e,n,X,o,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(o=s[T],o!=null&&ae(e,n,T,o,s,null))}function H1(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,p=null,T=null,C=null,z=null,X=null;for(F in s){var Z=s[F];if(s.hasOwnProperty(F)&&Z!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=Z;default:o.hasOwnProperty(F)||ae(e,n,F,null,o,Z)}}for(var B in o){var F=o[B];if(Z=s[B],o.hasOwnProperty(B)&&(F!=null||Z!=null))switch(B){case"type":f=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":X=F;break;case"value":p=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,n));break;default:F!==Z&&ae(e,n,B,F,o,Z)}}Sa(e,p,T,C,z,X,f,h);return;case"select":F=p=T=B=null;for(f in s)if(C=s[f],s.hasOwnProperty(f)&&C!=null)switch(f){case"value":break;case"multiple":F=C;default:o.hasOwnProperty(f)||ae(e,n,f,null,o,C)}for(h in o)if(f=o[h],C=s[h],o.hasOwnProperty(h)&&(f!=null||C!=null))switch(h){case"value":B=f;break;case"defaultValue":T=f;break;case"multiple":p=f;default:f!==C&&ae(e,n,h,f,o,C)}n=T,s=p,o=F,B!=null?Mr(e,!!s,B,!1):!!o!=!!s&&(n!=null?Mr(e,!!s,n,!0):Mr(e,!!s,s?[]:"",!1));return;case"textarea":F=B=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ae(e,n,T,null,o,h)}for(p in o)if(h=o[p],f=s[p],o.hasOwnProperty(p)&&(h!=null||f!=null))switch(p){case"value":B=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&ae(e,n,p,h,o,f)}fu(e,B,F);return;case"option":for(var ht in s)if(B=s[ht],s.hasOwnProperty(ht)&&B!=null&&!o.hasOwnProperty(ht))switch(ht){case"selected":e.selected=!1;break;default:ae(e,n,ht,null,o,B)}for(C in o)if(B=o[C],F=s[C],o.hasOwnProperty(C)&&B!==F&&(B!=null||F!=null))switch(C){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:ae(e,n,C,B,o,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)B=s[Et],s.hasOwnProperty(Et)&&B!=null&&!o.hasOwnProperty(Et)&&ae(e,n,Et,null,o,B);for(z in o)if(B=o[z],F=s[z],o.hasOwnProperty(z)&&B!==F&&(B!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:ae(e,n,z,B,o,F)}return;default:if(Aa(n)){for(var oe in s)B=s[oe],s.hasOwnProperty(oe)&&B!==void 0&&!o.hasOwnProperty(oe)&&cd(e,n,oe,void 0,o,B);for(X in o)B=o[X],F=s[X],!o.hasOwnProperty(X)||B===F||B===void 0&&F===void 0||cd(e,n,X,B,o,F);return}}for(var U in s)B=s[U],s.hasOwnProperty(U)&&B!=null&&!o.hasOwnProperty(U)&&ae(e,n,U,null,o,B);for(Z in o)B=o[Z],F=s[Z],!o.hasOwnProperty(Z)||B===F||B==null&&F==null||ae(e,n,Z,B,o,F)}function Jy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function F1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var h=s[o],f=h.transferSize,p=h.initiatorType,T=h.duration;if(f&&T&&Jy(p)){for(p=0,T=h.responseEnd,o+=1;o<s.length;o++){var C=s[o],z=C.startTime;if(z>T)break;var X=C.transferSize,Z=C.initiatorType;X&&Jy(Z)&&(C=C.responseEnd,p+=X*(C<T?1:(T-z)/(C-z)))}if(--o,n+=8*(f+p)/(h.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hd=null,fd=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var md=null;function G1(){var e=window.event;return e&&e.type==="popstate"?e===md?!1:(md=e,!0):(md=null,!1)}var e_=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(Q1)}:e_;function Q1(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function i_(e,n){var s=n,o=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(h),ro(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")bl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,bl(s);for(var f=s.firstChild;f;){var p=f.nextSibling,T=f.nodeName;f[j]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=p}}else s==="body"&&bl(e.ownerDocument.body);s=h}while(s);ro(n)}function r_(e,n){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function gd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":gd(s),Y(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function K1(e,n,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[j])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function $1(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=si(e.nextSibling),e===null))return null;return e}function s_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function pd(e){return e.data==="$?"||e.data==="$~"}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z1(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _d=null;function a_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return si(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function l_(e,n,s){switch(n=gc(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function bl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Y(e)}var ai=new Map,u_=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _r=at.d;at.d={f:J1,r:W1,D:tS,C:eS,L:nS,m:iS,X:sS,S:rS,M:aS};function J1(){var e=_r.f(),n=oc();return e||n}function W1(e){var n=ct(e);n!==null&&n.tag===5&&n.type==="form"?wp(n):_r.r(e)}var eo=typeof document>"u"?null:document;function c_(e,n,s){var o=eo;if(o&&typeof n=="string"&&n){var h=wn(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),u_.has(h)||(u_.add(h),e={rel:e,crossOrigin:s,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),sn(n,"link",e),Lt(n),o.head.appendChild(n)))}}function tS(e){_r.D(e),c_("dns-prefetch",e,null)}function eS(e,n){_r.C(e,n),c_("preconnect",e,n)}function nS(e,n,s){_r.L(e,n,s);var o=eo;if(o&&e&&n){var h='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+wn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+wn(s.imageSizes)+'"]')):h+='[href="'+wn(e)+'"]';var f=h;switch(n){case"style":f=no(e);break;case"script":f=io(e)}ai.has(f)||(e=b({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),ai.set(f,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(Rl(f))||n==="script"&&o.querySelector(wl(f))||(n=o.createElement("link"),sn(n,"link",e),Lt(n),o.head.appendChild(n)))}}function iS(e,n){_r.m(e,n);var s=eo;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+wn(o)+'"][href="'+wn(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=io(e)}if(!ai.has(f)&&(e=b({rel:"modulepreload",href:e},n),ai.set(f,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(wl(f)))return}o=s.createElement("link"),sn(o,"link",e),Lt(o),s.head.appendChild(o)}}}function rS(e,n,s){_r.S(e,n,s);var o=eo;if(o&&e){var h=wt(o).hoistableStyles,f=no(e);n=n||"default";var p=h.get(f);if(!p){var T={loading:0,preload:null};if(p=o.querySelector(Rl(f)))T.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},s),(s=ai.get(f))&&vd(e,s);var C=p=o.createElement("link");Lt(C),sn(C,"link",e),C._p=new Promise(function(z,X){C.onload=z,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:T},h.set(f,p)}}}function sS(e,n){_r.X(e,n);var s=eo;if(s&&e){var o=wt(s).hoistableScripts,h=io(e),f=o.get(h);f||(f=s.querySelector(wl(h)),f||(e=b({src:e,async:!0},n),(n=ai.get(h))&&Ed(e,n),f=s.createElement("script"),Lt(f),sn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function aS(e,n){_r.M(e,n);var s=eo;if(s&&e){var o=wt(s).hoistableScripts,h=io(e),f=o.get(h);f||(f=s.querySelector(wl(h)),f||(e=b({src:e,async:!0,type:"module"},n),(n=ai.get(h))&&Ed(e,n),f=s.createElement("script"),Lt(f),sn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function h_(e,n,s,o){var h=(h=Nt.current)?pc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=no(s.href),s=wt(h).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=no(s.href);var f=wt(h).hoistableStyles,p=f.get(e);if(p||(h=h.ownerDocument||h,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=h.querySelector(Rl(e)))&&!f._p&&(p.instance=f,p.state.loading=5),ai.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ai.set(e,s),f||oS(h,e,s,p.state))),n&&o===null)throw Error(a(528,""));return p}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=io(s),s=wt(h).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function no(e){return'href="'+wn(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function oS(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),sn(n,"link",s),Lt(n),e.head.appendChild(n))}function io(e){return'[src="'+wn(e)+'"]'}function wl(e){return"script[async]"+e}function d_(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+wn(s.href)+'"]');if(o)return n.instance=o,Lt(o),o;var h=b({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Lt(o),sn(o,"style",h),yc(o,s.precedence,e),n.instance=o;case"stylesheet":h=no(s.href);var f=e.querySelector(Rl(h));if(f)return n.state.loading|=4,n.instance=f,Lt(f),f;o=f_(s),(h=ai.get(h))&&vd(o,h),f=(e.ownerDocument||e).createElement("link"),Lt(f);var p=f;return p._p=new Promise(function(T,C){p.onload=T,p.onerror=C}),sn(f,"link",o),n.state.loading|=4,yc(f,s.precedence,e),n.instance=f;case"script":return f=io(s.src),(h=e.querySelector(wl(f)))?(n.instance=h,Lt(h),h):(o=s,(h=ai.get(f))&&(o=b({},s),Ed(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Lt(h),sn(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,s.precedence,e));return n.instance}function yc(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,p=0;p<o.length;p++){var T=o[p];if(T.dataset.precedence===n)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function vd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _c=null;function m_(e,n,s){if(_c===null){var o=new Map,h=_c=new Map;h.set(s,o)}else h=_c,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[j]||f[ye]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var T=o.get(p);T?T.push(f):o.set(p,[f])}}return o}function g_(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function lS(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uS(e,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=no(o.href),f=n.querySelector(Rl(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=vc.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=f,Lt(f);return}f=n.ownerDocument||n,o=f_(o),(h=ai.get(h))&&vd(o,h),f=f.createElement("link"),Lt(f);var p=f;p._p=new Promise(function(T,C){p.onload=T,p.onerror=C}),sn(f,"link",o),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=vc.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var Td=0;function cS(e,n){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Td===0&&(Td=62500*F1());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Td?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,n.forEach(hS,e),Ec=null,vc.call(e))}function hS(e,n){if(!(n.state.loading&4)){var s=Ec.get(e);if(s)var o=s.get(null);else{s=new Map,Ec.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var p=h[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(s.set(p.dataset.precedence,p),o=p)}o&&s.set(null,o)}h=n.instance,p=h.getAttribute("data-precedence"),f=s.get(p)||o,f===o&&s.set(null,h),s.set(p,h),this.count++,o=vc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var Cl={$$typeof:rt,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function fS(e,n,s,o,h,f,p,T,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=An(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.hiddenUpdates=An(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function y_(e,n,s,o,h,f,p,T,C,z,X,Z){return e=new fS(e,n,s,p,C,z,X,Z,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=Wh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},rf(f),e}function __(e){return e?(e=Va,e):Va}function v_(e,n,s,o,h,f){h=__(h),o.context===null?o.context=h:o.pendingContext=h,o=Yr(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=Xr(e,o,n),s!==null&&(xn(s,e,n),sl(s,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Sd(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function T_(e){if(e.tag===13||e.tag===31){var n=Ys(e,67108864);n!==null&&xn(n,e,67108864),Sd(e,67108864)}}function S_(e){if(e.tag===13||e.tag===31){var n=Hn();n=Wi(n);var s=Ys(e,n);s!==null&&xn(s,e,n),Sd(e,n)}}var Sc=!0;function dS(e,n,s,o){var h=G.T;G.T=null;var f=at.p;try{at.p=2,Ad(e,n,s,o)}finally{at.p=f,G.T=h}}function mS(e,n,s,o){var h=G.T;G.T=null;var f=at.p;try{at.p=8,Ad(e,n,s,o)}finally{at.p=f,G.T=h}}function Ad(e,n,s,o){if(Sc){var h=bd(o);if(h===null)ud(e,n,o,Ac,s),b_(e,o);else if(pS(h,e,n,s,o))o.stopPropagation();else if(b_(e,o),n&4&&-1<gS.indexOf(e)){for(;h!==null;){var f=ct(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Xn(f.pendingLanes);if(p!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;p;){var C=1<<31-Te(p);T.entanglements[1]|=C,p&=~C}Pi(f),(Wt&6)===0&&(sc=Ve()+500,Tl(0))}}break;case 31:case 13:T=Ys(f,2),T!==null&&xn(T,f,2),oc(),Sd(f,2)}if(f=bd(o),f===null&&ud(e,n,o,Ac,s),f===h)break;h=f}h!==null&&o.stopPropagation()}else ud(e,n,o,null,s)}}function bd(e){return e=$n(e),Rd(e)}var Ac=null;function Rd(e){if(Ac=null,e=tt(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=d(n),e!==null)return e;e=null}else if(s===31){if(e=g(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ac=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ai()){case Gn:return 2;case Qi:return 8;case bi:case pa:return 32;case ya:return 268435456;default:return 32}default:return 32}}var wd=!1,rs=null,ss=null,as=null,Il=new Map,Dl=new Map,os=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(e,n){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(n.pointerId)}}function Nl(e,n,s,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=ct(n),n!==null&&T_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function pS(e,n,s,o,h){switch(n){case"focusin":return rs=Nl(rs,e,n,s,o,h),!0;case"dragenter":return ss=Nl(ss,e,n,s,o,h),!0;case"mouseover":return as=Nl(as,e,n,s,o,h),!0;case"pointerover":var f=h.pointerId;return Il.set(f,Nl(Il.get(f)||null,e,n,s,o,h)),!0;case"gotpointercapture":return f=h.pointerId,Dl.set(f,Nl(Dl.get(f)||null,e,n,s,o,h)),!0}return!1}function R_(e){var n=tt(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=d(s),n!==null){e.blockedOn=n,Un(e.priority,function(){S_(s)});return}}else if(n===31){if(n=g(s),n!==null){e.blockedOn=n,Un(e.priority,function(){S_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=bd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Ho=o,s.target.dispatchEvent(o),Ho=null}else return n=ct(s),n!==null&&T_(n),e.blockedOn=s,!1;n.shift()}return!0}function w_(e,n,s){bc(e)&&s.delete(n)}function yS(){wd=!1,rs!==null&&bc(rs)&&(rs=null),ss!==null&&bc(ss)&&(ss=null),as!==null&&bc(as)&&(as=null),Il.forEach(w_),Dl.forEach(w_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,wd||(wd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var wc=null;function C_(e){wc!==e&&(wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===e&&(wc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(Rd(o||s)===null)continue;break}var f=ct(s);f!==null&&(e.splice(n,3),n-=3,bf(f,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function ro(e){function n(C){return Rc(C,e)}rs!==null&&Rc(rs,e),ss!==null&&Rc(ss,e),as!==null&&Rc(as,e),Il.forEach(n),Dl.forEach(n);for(var s=0;s<os.length;s++){var o=os[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<os.length&&(s=os[0],s.blockedOn===null);)R_(s),s.blockedOn===null&&os.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],f=s[o+1],p=h[De]||null;if(typeof f=="function")p||C_(s);else if(p){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,p=f[De]||null)T=p.formAction;else if(Rd(h)!==null)continue}else T=p.action;typeof T=="function"?s[o+1]=T:(s.splice(o,3),o-=3),C_(s)}}}function I_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(p){return h=p})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function Cd(e){this._internalRoot=e}Cc.prototype.render=Cd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=Hn();v_(s,o,e,n,null,null)},Cc.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),oc(),n[Rn]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fe();e={blockedOn:null,target:e,priority:n};for(var s=0;s<os.length&&n!==0&&n<os[s].priority;s++);os.splice(s,0,e),s===0&&R_(e)}};var D_=t.version;if(D_!=="19.2.0")throw Error(a(527,D_,"19.2.0"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var _S={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{cn=Ic.inject(_S),Ue=Ic}catch{}}return xl.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",h=Lp,f=Pp,p=kp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=y_(e,1,!1,null,null,s,o,null,h,f,p,I_),e[Rn]=n.current,ld(e),new Cd(n)},xl.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,h="",f=Lp,p=Pp,T=kp,C=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.formState!==void 0&&(C=s.formState)),n=y_(e,1,!0,n,s??null,o,h,C,f,p,T,I_),n.context=__(null),s=n.current,o=Hn(),o=Wi(o),h=Yr(o),h.callback=null,Xr(s,h,o),s=o,n.current.lanes=s,Zi(n,s),Pi(n),e[Rn]=n.current,ld(e),new Cc(n)},xl.version="19.2.0",xl}var z_;function DS(){if(z_)return Nd.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nd.exports=IS(),Nd.exports}var NS=DS();const OS=mE(NS),xS=()=>{};var B_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},MS=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],d=r[i++],g=r[i++],y=((l&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;t[a++]=String.fromCharCode(55296+(y>>10)),t[a++]=String.fromCharCode(56320+(y&1023))}else{const c=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},pE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,g=d?r[l+1]:0,y=l+2<r.length,_=y?r[l+2]:0,A=c>>2,b=(c&3)<<4|g>>4;let N=(g&15)<<2|_>>6,H=_&63;y||(H=64,d||(N=64)),a.push(i[A],i[b],i[N],i[H])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(gE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):MS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],g=l<r.length?i[r.charAt(l)]:0;++l;const _=l<r.length?i[r.charAt(l)]:64;++l;const b=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||g==null||_==null||b==null)throw new VS;const N=c<<2|g>>4;if(a.push(N),_!==64){const H=g<<4&240|_>>2;if(a.push(H),b!==64){const it=_<<6&192|b;a.push(it)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class VS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const US=function(r){const t=gE(r);return pE.encodeByteArray(t,!0)},Gc=function(r){return US(r).replace(/\./g,"")},yE=function(r){try{return pE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=()=>LS().__FIREBASE_DEFAULTS__,kS=()=>{if(typeof process>"u"||typeof B_>"u")return;const r=B_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&yE(r[1]);return t&&JSON.parse(t)},hh=()=>{try{return xS()||PS()||kS()||zS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_E=r=>hh()?.emulatorHosts?.[r],BS=r=>{const t=_E(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},vE=()=>hh()?.config,EE=r=>hh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function TE(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gc(JSON.stringify(i)),Gc(JSON.stringify(d)),""].join(".")}const zl={};function HS(){const r={prod:[],emulator:[]};for(const t of Object.keys(zl))zl[t]?r.emulator.push(t):r.prod.push(t);return r}function FS(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let j_=!1;function SE(r,t){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||zl[r]===t||zl[r]||j_)return;zl[r]=t;function i(N){return`__firebase__banner__${N}`}const a="__firebase__banner",c=HS().prod.length>0;function d(){const N=document.getElementById(a);N&&N.remove()}function g(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function y(N,H){N.setAttribute("width","24"),N.setAttribute("id",H),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function _(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{j_=!0,d()},N}function A(N,H){N.setAttribute("id",H),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function b(){const N=FS(a),H=i("text"),it=document.getElementById(H)||document.createElement("span"),et=i("learnmore"),nt=document.getElementById(et)||document.createElement("a"),yt=i("preprendIcon"),bt=document.getElementById(yt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const rt=N.element;g(rt),A(nt,et);const Ot=_();y(bt,yt),rt.append(bt,it,nt,Ot),document.body.appendChild(rt)}c?(it.innerText="Preview backend disconnected.",bt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(bt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,it.innerText="Preview backend running in this workspace."),it.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function YS(){const r=hh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function KS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $S(){const r=pn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ZS(){return!YS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JS(){try{return typeof indexedDB=="object"}catch{return!1}}function WS(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="FirebaseError";class Cr extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=tA,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?eA(c,a):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new Cr(l,g,a)}}function eA(r,t){return r.replace(nA,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const nA=/\{\$([^}]+)}/g;function iA(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function la(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const c=r[l],d=t[l];if(q_(c)&&q_(d)){if(!la(c,d))return!1}else if(c!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function q_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function Ml(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,c]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function Vl(r){const t=r.indexOf("?");if(!t)return"";const i=r.indexOf("#",t);return r.substring(t,i>0?i:void 0)}function rA(r,t){const i=new sA(r,t);return i.subscribe.bind(i)}class sA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");aA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=Vd),l.error===void 0&&(l.error=Vd),l.complete===void 0&&(l.complete=Vd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aA(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function Vd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(r){return r&&r._delegate?r._delegate:r}class ua{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new jS;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uA(t))try{this.getOrInitializeService({instanceIdentifier:sa})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=sa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sa){return this.instances.has(t)}getOptions(t=sa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&d.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:lA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=sa){return this.component?this.component.multipleInstances?t:sa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lA(r){return r===sa?void 0:r}function uA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new oA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ht||(Ht={}));const hA={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},fA=Ht.INFO,dA={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},mA=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=dA[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Em{constructor(t){this.name=t,this._logLevel=fA,this._logHandler=mA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...t),this._logHandler(this,Ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...t),this._logHandler(this,Ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...t),this._logHandler(this,Ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...t),this._logHandler(this,Ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...t),this._logHandler(this,Ht.ERROR,...t)}}const gA=(r,t)=>t.some(i=>r instanceof i);let H_,F_;function pA(){return H_||(H_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yA(){return F_||(F_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AE=new WeakMap,Yd=new WeakMap,bE=new WeakMap,Ud=new WeakMap,Tm=new WeakMap;function _A(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{i(ps(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&AE.set(i,r)}).catch(()=>{}),Tm.set(t,r),t}function vA(r){if(Yd.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Yd.set(r,t)}let Xd={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Yd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||bE.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ps(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function EA(r){Xd=r(Xd)}function TA(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(Ld(this),t,...i);return bE.set(a,t.sort?t.sort():[t]),ps(a)}:yA().includes(r)?function(...t){return r.apply(Ld(this),t),ps(AE.get(this))}:function(...t){return ps(r.apply(Ld(this),t))}}function SA(r){return typeof r=="function"?TA(r):(r instanceof IDBTransaction&&vA(r),gA(r,pA())?new Proxy(r,Xd):r)}function ps(r){if(r instanceof IDBRequest)return _A(r);if(Ud.has(r))return Ud.get(r);const t=SA(r);return t!==r&&(Ud.set(r,t),Tm.set(t,r)),t}const Ld=r=>Tm.get(r);function AA(r,t,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),g=ps(d);return a&&d.addEventListener("upgradeneeded",y=>{a(ps(d.result),y.oldVersion,y.newVersion,ps(d.transaction),y)}),i&&d.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),l&&y.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),g}const bA=["get","getKey","getAll","getAllKeys","count"],RA=["put","add","delete","clear"],Pd=new Map;function G_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Pd.get(t))return Pd.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=RA.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||bA.includes(i)))return;const c=async function(d,...g){const y=this.transaction(d,l?"readwrite":"readonly");let _=y.store;return a&&(_=_.index(g.shift())),(await Promise.all([_[i](...g),l&&y.done]))[0]};return Pd.set(t,c),c}EA(r=>({...r,get:(t,i,a)=>G_(t,i)||r.get(t,i,a),has:(t,i)=>!!G_(t,i)||r.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(CA(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function CA(r){return r.getComponent()?.type==="VERSION"}const Qd="@firebase/app",Y_="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Em("@firebase/app"),IA="@firebase/app-compat",DA="@firebase/analytics-compat",NA="@firebase/analytics",OA="@firebase/app-check-compat",xA="@firebase/app-check",MA="@firebase/auth",VA="@firebase/auth-compat",UA="@firebase/database",LA="@firebase/data-connect",PA="@firebase/database-compat",kA="@firebase/functions",zA="@firebase/functions-compat",BA="@firebase/installations",jA="@firebase/installations-compat",qA="@firebase/messaging",HA="@firebase/messaging-compat",FA="@firebase/performance",GA="@firebase/performance-compat",YA="@firebase/remote-config",XA="@firebase/remote-config-compat",QA="@firebase/storage",KA="@firebase/storage-compat",$A="@firebase/firestore",ZA="@firebase/ai",JA="@firebase/firestore-compat",WA="firebase",tb="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="[DEFAULT]",eb={[Qd]:"fire-core",[IA]:"fire-core-compat",[NA]:"fire-analytics",[DA]:"fire-analytics-compat",[xA]:"fire-app-check",[OA]:"fire-app-check-compat",[MA]:"fire-auth",[VA]:"fire-auth-compat",[UA]:"fire-rtdb",[LA]:"fire-data-connect",[PA]:"fire-rtdb-compat",[kA]:"fire-fn",[zA]:"fire-fn-compat",[BA]:"fire-iid",[jA]:"fire-iid-compat",[qA]:"fire-fcm",[HA]:"fire-fcm-compat",[FA]:"fire-perf",[GA]:"fire-perf-compat",[YA]:"fire-rc",[XA]:"fire-rc-compat",[QA]:"fire-gcs",[KA]:"fire-gcs-compat",[$A]:"fire-fst",[JA]:"fire-fst-compat",[ZA]:"fire-vertex","fire-js":"fire-js",[WA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map,nb=new Map,$d=new Map;function X_(r,t){try{r.container.addComponent(t)}catch(i){Sr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function yo(r){const t=r.name;if($d.has(t))return Sr.debug(`There were multiple attempts to register component ${t}.`),!1;$d.set(t,r);for(const i of Yc.values())X_(i,r);for(const i of nb.values())X_(i,r);return!0}function Sm(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function yi(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ys=new tu("app","Firebase",ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ua("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ys.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=tb;function RE(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a={name:Kd,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw ys.create("bad-app-name",{appName:String(l)});if(i||(i=vE()),!i)throw ys.create("no-options");const c=Yc.get(l);if(c){if(la(i,c.options)&&la(a,c.config))return c;throw ys.create("duplicate-app",{appName:l})}const d=new cA(l);for(const y of $d.values())d.addComponent(y);const g=new rb(i,a,d);return Yc.set(l,g),g}function wE(r=Kd){const t=Yc.get(r);if(!t&&r===Kd&&vE())return RE();if(!t)throw ys.create("no-app",{appName:r});return t}function _s(r,t,i){let a=eb[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Sr.warn(d.join(" "));return}yo(new ua(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="firebase-heartbeat-database",ab=1,Gl="firebase-heartbeat-store";let kd=null;function CE(){return kd||(kd=AA(sb,ab,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Gl)}catch(i){console.warn(i)}}}}).catch(r=>{throw ys.create("idb-open",{originalErrorMessage:r.message})})),kd}async function ob(r){try{const i=(await CE()).transaction(Gl),a=await i.objectStore(Gl).get(IE(r));return await i.done,a}catch(t){if(t instanceof Cr)Sr.warn(t.message);else{const i=ys.create("idb-get",{originalErrorMessage:t?.message});Sr.warn(i.message)}}}async function Q_(r,t){try{const a=(await CE()).transaction(Gl,"readwrite");await a.objectStore(Gl).put(t,IE(r)),await a.done}catch(i){if(i instanceof Cr)Sr.warn(i.message);else{const a=ys.create("idb-set",{originalErrorMessage:i?.message});Sr.warn(a.message)}}}function IE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=1024,ub=30;class cb{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new fb(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=K_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>ub){const l=db(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Sr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=K_(),{heartbeatsToSend:i,unsentEntries:a}=hb(this._heartbeatsCache.heartbeats),l=Gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Sr.warn(t),""}}}function K_(){return new Date().toISOString().substring(0,10)}function hb(r,t=lb){const i=[];let a=r.slice();for(const l of r){const c=i.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),$_(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),$_(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class fb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JS()?WS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await ob(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function $_(r){return Gc(JSON.stringify({version:2,heartbeats:r})).length}function db(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(r){yo(new ua("platform-logger",t=>new wA(t),"PRIVATE")),yo(new ua("heartbeat",t=>new cb(t),"PRIVATE")),_s(Qd,Y_,r),_s(Qd,Y_,"esm2020"),_s("fire-js","")}mb("");function DE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gb=DE,NE=new tu("auth","Firebase",DE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Em("@firebase/auth");function pb(r,...t){Xc.logLevel<=Ht.WARN&&Xc.warn(`Auth (${wo}): ${r}`,...t)}function Uc(r,...t){Xc.logLevel<=Ht.ERROR&&Xc.error(`Auth (${wo}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r,...t){throw Am(r,...t)}function zi(r,...t){return Am(r,...t)}function OE(r,t,i){const a={...gb(),[t]:i};return new tu("auth","Firebase",a).create(t,{appName:r.name})}function vs(r){return OE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return NE.create(r,...t)}function Tt(r,t,...i){if(!r)throw Am(t,...i)}function vr(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Uc(t),new Error(t)}function Ar(r,t){r||vr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return typeof self<"u"&&self.location?.href||""}function yb(){return Z_()==="http:"||Z_()==="https:"}function Z_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yb()||QS()||"connection"in navigator)?navigator.onLine:!0}function vb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,i){this.shortDelay=t,this.longDelay=i,Ar(i>t,"Short delay should be less than long delay!"),this.isMobile=GS()||KS()}get(){return _b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(r,t){Ar(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sb=new nu(3e4,6e4);function da(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function Is(r,t,i,a,l={}){return ME(r,l,async()=>{let c={},d={};a&&(t==="GET"?d=a:c={body:JSON.stringify(a)});const g=eu({key:r.config.apiKey,...d}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _={method:t,headers:y,...c};return XS()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(_.credentials="include"),xE.fetch()(await VE(r,r.config.apiHost,i,g),_)})}async function ME(r,t,i){r._canInitEmulator=!1;const a={...Eb,...t};try{const l=new bb(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Dc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[y,_]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dc(r,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Dc(r,"email-already-in-use",d);if(y==="USER_DISABLED")throw Dc(r,"user-disabled",d);const A=a[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw OE(r,A,_);Ei(r,A)}}catch(l){if(l instanceof Cr)throw l;Ei(r,"network-request-failed",{message:String(l)})}}async function fh(r,t,i,a,l={}){const c=await Is(r,t,i,a,l);return"mfaPendingCredential"in c&&Ei(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function VE(r,t,i,a){const l=`${t}${i}?${a}`,c=r,d=c.config.emulator?bm(r.config,l):`${r.config.apiScheme}://${l}`;return Tb.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function Ab(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(zi(this.auth,"network-request-failed")),Sb.get())})}}function Dc(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=zi(r,t,a);return l.customData._tokenResponse=i,l}function J_(r){return r!==void 0&&r.enterprise!==void 0}class Rb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Ab(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wb(r,t){return Is(r,"GET","/v2/recaptchaConfig",da(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(r,t){return Is(r,"POST","/v1/accounts:delete",t)}async function Qc(r,t){return Is(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ib(r,t=!1){const i=ln(r),a=await i.getIdToken(t),l=Rm(a);Tt(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:a,authTime:Bl(zd(l.auth_time)),issuedAtTime:Bl(zd(l.iat)),expirationTime:Bl(zd(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function zd(r){return Number(r)*1e3}function Rm(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const l=yE(i);return l?JSON.parse(l):(Uc("Failed to decode base64 JWT payload"),null)}catch(l){return Uc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function W_(r){const t=Rm(r);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Cr&&Db(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function Db({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bl(this.lastLoginAt),this.creationTime=Bl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(r){const t=r.auth,i=await r.getIdToken(),a=await Yl(r,Qc(t,{idToken:i}));Tt(a?.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?UE(l.providerUserInfo):[],d=xb(r.providerData,c),g=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!d?.length,_=g?y:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Jd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,A)}async function Ob(r){const t=ln(r);await Kc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xb(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function UE(r){return r.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(r,t){const i=await ME(r,{},async()=>{const a=eu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await VE(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:a};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(y.credentials="include"),xE.fetch()(d,y)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Vb(r,t){return Is(r,"POST","/v2/accounts:revokeToken",da(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const i=W_(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:c}=await Mb(t,i);this.updateTokensAndExpiration(a,l,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:c}=i,d=new co;return a&&(Tt(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(Tt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(Tt(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r,t){Tt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class _i{constructor({uid:t,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await Yl(this,this.stsTokenManager.getToken(this.auth,t));return Tt(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Ib(this,t)}reload(){return Ob(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new _i({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Kc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yi(this.auth.app))return Promise.reject(vs(this.auth));const t=await this.getIdToken();return await Yl(this,Cb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const a=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,d=i.photoURL??void 0,g=i.tenantId??void 0,y=i._redirectEventId??void 0,_=i.createdAt??void 0,A=i.lastLoginAt??void 0,{uid:b,emailVerified:N,isAnonymous:H,providerData:it,stsTokenManager:et}=i;Tt(b&&et,t,"internal-error");const nt=co.fromJSON(this.name,et);Tt(typeof b=="string",t,"internal-error"),us(a,t.name),us(l,t.name),Tt(typeof N=="boolean",t,"internal-error"),Tt(typeof H=="boolean",t,"internal-error"),us(c,t.name),us(d,t.name),us(g,t.name),us(y,t.name),us(_,t.name),us(A,t.name);const yt=new _i({uid:b,auth:t,email:l,emailVerified:N,displayName:a,isAnonymous:H,photoURL:d,phoneNumber:c,tenantId:g,stsTokenManager:nt,createdAt:_,lastLoginAt:A});return it&&Array.isArray(it)&&(yt.providerData=it.map(bt=>({...bt}))),y&&(yt._redirectEventId=y),yt}static async _fromIdTokenResponse(t,i,a=!1){const l=new co;l.updateFromServerResponse(i);const c=new _i({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Kc(c),c}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];Tt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?UE(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,g=new co;g.updateFromIdToken(a);const y=new _i({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Jd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new Map;function Er(r){Ar(r instanceof Function,"Expected a class definition");let t=tv.get(r);return t?(Ar(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,tv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}LE.type="NONE";const ev=LE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r,t,i){return`firebase:${r}:${t}:${i}`}class ho{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:c}=this.auth;this.fullUserKey=Lc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Lc("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Qc(this.auth,{idToken:t}).catch(()=>{});return i?_i._fromGetAccountInfoResponse(this.auth,i,t):null}return _i._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new ho(Er(ev),t,a);const l=(await Promise.all(i.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||Er(ev);const d=Lc(a,t.config.apiKey,t.name);let g=null;for(const _ of i)try{const A=await _._get(d);if(A){let b;if(typeof A=="string"){const N=await Qc(t,{idToken:A}).catch(()=>{});if(!N)break;b=await _i._fromGetAccountInfoResponse(t,N,A)}else b=_i._fromJSON(t,A);_!==c&&(g=b),c=_;break}}catch{}const y=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new ho(c,t,a):(c=y[0],g&&await c._set(d,g.toJSON()),await Promise.all(i.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new ho(c,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(BE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(PE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qE(t))return"Blackberry";if(HE(t))return"Webos";if(kE(t))return"Safari";if((t.includes("chrome/")||zE(t))&&!t.includes("edge/"))return"Chrome";if(jE(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if(a?.length===2)return a[1]}return"Other"}function PE(r=pn()){return/firefox\//i.test(r)}function kE(r=pn()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zE(r=pn()){return/crios\//i.test(r)}function BE(r=pn()){return/iemobile/i.test(r)}function jE(r=pn()){return/android/i.test(r)}function qE(r=pn()){return/blackberry/i.test(r)}function HE(r=pn()){return/webos/i.test(r)}function wm(r=pn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ub(r=pn()){return wm(r)&&!!window.navigator?.standalone}function Lb(){return $S()&&document.documentMode===10}function FE(r=pn()){return wm(r)||jE(r)||HE(r)||qE(r)||/windows phone/i.test(r)||BE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r,t=[]){let i;switch(r){case"Browser":i=nv(pn());break;case"Worker":i=`${nv(pn())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${wo}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((d,g)=>{try{const y=t(c);d(y)}catch(y){g(y)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(r,t={}){return Is(r,"GET","/v2/passwordPolicy",da(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6;class Bb{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??zb,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Er(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ho.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Qc(this,{idToken:t}),a=await _i._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(yi(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=a?._redirectEventId,g=await this.tryRedirectSignIn(t);(!c||c===d)&&g?.user&&(a=g.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Kc(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yi(this.app))return Promise.reject(vs(this));const i=t?ln(t):null;return i&&Tt(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yi(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yi(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kb(this),i=new Bb(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new tu("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await Vb(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Er(t)||this._popupRedirectResolver;Tt(i,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Er(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof i=="function"){const y=t.addObserver(i,a,l);return()=>{d=!0,y()}}else{const y=t.addObserver(i);return()=>{d=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=GE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){if(yi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&pb(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Co(r){return ln(r)}class iv{constructor(t){this.auth=t,this.observer=null,this.addObserver=rA(i=>this.observer=i)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qb(r){dh=r}function YE(r){return dh.loadJS(r)}function Hb(){return dh.recaptchaEnterpriseScript}function Fb(){return dh.gapiScript}function Gb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Yb{constructor(){this.enterprise=new Xb}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class Xb{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Qb="recaptcha-enterprise",XE="NO_RECAPTCHA";class Kb{constructor(t){this.type=Qb,this.auth=Co(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,g)=>{wb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const _=new Rb(y);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(y=>{g(y)})})}function l(c,d,g){const y=window.grecaptcha;J_(y)?y.enterprise.ready(()=>{y.enterprise.execute(c,{action:t}).then(_=>{d(_)}).catch(()=>{d(XE)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yb().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{a(this.auth).then(g=>{if(!i&&J_(window.grecaptcha))l(g,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=Hb();y.length!==0&&(y+=g),YE(y).then(()=>{l(g,c,d)}).catch(_=>{d(_)})}}).catch(g=>{d(g)})})}}async function rv(r,t,i,a=!1,l=!1){const c=new Kb(r);let d;if(l)d=XE;else try{d=await c.verify(i)}catch{d=await c.verify(i,!0)}const g={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,_=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return a?Object.assign(g,{captchaResp:d}):Object.assign(g,{captchaResponse:d}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function sv(r,t,i,a,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await rv(r,t,i,i==="getOobCode");return a(r,c)}else return a(r,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await rv(r,t,i,i==="getOobCode");return a(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(r,t){const i=Sm(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(la(c,t??{}))return l;Ei(l,"already-initialized")}return i.initialize({options:t})}function Zb(r,t){const i=t?.persistence||[],a=(Array.isArray(i)?i:[i]).map(Er);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t?.popupRedirectResolver)}function Jb(r,t,i){const a=Co(r);Tt(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,c=QE(t),{host:d,port:g}=Wb(t),y=g===null?"":`:${g}`,_={url:`${c}//${d}${y}/`},A=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){Tt(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Tt(la(_,a.config.emulator)&&la(A,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=_,a.emulatorConfig=A,a.settings.appVerificationDisabledForTesting=!0,Ro(d)?(TE(`${c}//${d}${y}`),SE("Auth",!0)):tR()}function QE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Wb(r){const t=QE(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const c=l[1];return{host:c,port:av(a.substr(c.length+1))}}else{const[c,d]=a.split(":");return{host:c,port:av(d)}}}function av(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function tR(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return vr("not implemented")}_getIdTokenResponse(t){return vr("not implemented")}_linkToIdToken(t,i){return vr("not implemented")}_getReauthenticationResolver(t){return vr("not implemented")}}async function eR(r,t){return Is(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(r,t){return fh(r,"POST","/v1/accounts:signInWithPassword",da(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(r,t){return fh(r,"POST","/v1/accounts:signInWithEmailLink",da(r,t))}async function rR(r,t){return fh(r,"POST","/v1/accounts:signInWithEmailLink",da(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Cm{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new Xl(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Xl(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sv(t,i,"signInWithPassword",nR);case"emailLink":return iR(t,{email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sv(t,a,"signUpPassword",eR);case"emailLink":return rR(t,{idToken:i,email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(r,t){return fh(r,"POST","/v1/accounts:signInWithIdp",da(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="http://localhost";class ca extends Cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new ca(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Ei("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l,...c}=i;if(!a||!l)return null;const d=new ca(a,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return fo(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,fo(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,fo(t,i)}buildRequest(){const t={requestUri:sR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=eu(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oR(r){const t=Ml(Vl(r)).link,i=t?Ml(Vl(t)).deep_link_id:null,a=Ml(Vl(r)).deep_link_id;return(a?Ml(Vl(a)).link:null)||a||i||t||r}class Im{constructor(t){const i=Ml(Vl(t)),a=i.apiKey??null,l=i.oobCode??null,c=aR(i.mode??null);Tt(a&&l&&c,"argument-error"),this.apiKey=a,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=oR(t);try{return new Im(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(t,i){return Xl._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Im.parseLink(i);return Tt(a,"argument-error"),Xl._fromEmailAndCode(t,a.code,a.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends iu{constructor(){super("facebook.com")}static credential(t){return ca._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cs.credentialFromTaggedObject(t)}static credentialFromError(t){return cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cs.credential(t.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends iu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return ca._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return hs.credentialFromTaggedObject(t)}static credentialFromError(t){return hs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return hs.credential(i,a)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends iu{constructor(){super("github.com")}static credential(t){return ca._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fs.credentialFromTaggedObject(t)}static credentialFromError(t){return fs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fs.credential(t.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends iu{constructor(){super("twitter.com")}static credential(t,i){return ca._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return ds.credentialFromTaggedObject(t)}static credentialFromError(t){return ds.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return ds.credential(i,a)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const c=await _i._fromIdTokenResponse(t,a,l),d=ov(a);return new _o({user:c,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=ov(a);return new _o({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function ov(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Cr{constructor(t,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new $c(t,i,a,l)}}function $E(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(r,c,t,a):c})}async function lR(r,t,i=!1){const a=await Yl(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return _o._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(r,t,i=!1){const{auth:a}=r;if(yi(a.app))return Promise.reject(vs(a));const l="reauthenticate";try{const c=await Yl(r,$E(a,l,t,r),i);Tt(c.idToken,a,"internal-error");const d=Rm(c.idToken);Tt(d,a,"internal-error");const{sub:g}=d;return Tt(r.uid===g,a,"user-mismatch"),_o._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Ei(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(r,t,i=!1){if(yi(r.app))return Promise.reject(vs(r));const a="signIn",l=await $E(r,a,t),c=await _o._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(c.user),c}async function cR(r,t){return ZE(Co(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(r){const t=Co(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function fR(r,t,i){return yi(r.app)?Promise.reject(vs(r)):cR(ln(r),Io.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&hR(r),a})}function dR(r,t,i,a){return ln(r).onIdTokenChanged(t,i,a)}function mR(r,t,i){return ln(r).beforeAuthStateChanged(t,i)}function gR(r,t,i,a){return ln(r).onAuthStateChanged(t,i,a)}function JE(r){return ln(r).signOut()}const Zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=1e3,yR=10;class tT extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},c=this.storage.getItem(a);Lb()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,yR):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}tT.type="LOCAL";const _R=tT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}eT.type="SESSION";const nT=eT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new mh(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:c}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const g=Array.from(d).map(async _=>_(i.origin,c)),y=await vR(g);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:y})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(r="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((g,y)=>{const _=Dm("",20);l.port1.start();const A=setTimeout(()=>{y(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(b){const N=b;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(N.data.response);break;default:clearTimeout(A),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:_,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){return window}function TR(r){Bi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof Bi().WorkerGlobalScope<"u"&&typeof Bi().importScripts=="function"}async function SR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AR(){return navigator?.serviceWorker?.controller||null}function bR(){return iT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebaseLocalStorageDb",RR=1,Jc="firebaseLocalStorage",sT="fbase_key";class ru{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function gh(r,t){return r.transaction([Jc],t?"readwrite":"readonly").objectStore(Jc)}function wR(){const r=indexedDB.deleteDatabase(rT);return new ru(r).toPromise()}function Wd(){const r=indexedDB.open(rT,RR);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Jc,{keyPath:sT})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Jc)?t(a):(a.close(),await wR(),t(await Wd()))})})}async function lv(r,t,i){const a=gh(r,!0).put({[sT]:t,value:i});return new ru(a).toPromise()}async function CR(r,t){const i=gh(r,!1).get(t),a=await new ru(i).toPromise();return a===void 0?null:a.value}function uv(r,t){const i=gh(r,!0).delete(t);return new ru(i).toPromise()}const IR=800,DR=3;class aT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>DR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(bR()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new ER(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Wd();return await lv(t,Zc,"1"),await uv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>lv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>CR(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=gh(l,!1).getAll();return new ru(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aT.type="LOCAL";const NR=aT;new nu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(r,t){return t?Er(t):(Tt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Cm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fo(t,this._buildIdpRequest())}_linkToIdToken(t,i){return fo(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return fo(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function xR(r){return ZE(r.auth,new Nm(r),r.bypassAuthState)}function MR(r){const{auth:t,user:i}=r;return Tt(i,t,"internal-error"),uR(i,new Nm(r),r.bypassAuthState)}async function VR(r){const{auth:t,user:i}=r;return Tt(i,t,"internal-error"),lR(i,new Nm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t,i,a,l,c=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:c,error:d,type:g}=t;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return VR;case"reauthViaPopup":case"reauthViaRedirect":return MR;default:Ei(this.auth,"internal-error")}}resolve(t){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new nu(2e3,1e4);class uo extends oT{constructor(t,i,a,l,c){super(t,i,l,c),this.provider=a,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const t=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(zi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(zi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,UR.get())};t()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="pendingRedirect",Pc=new Map;class PR extends oT{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const a=await kR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(r,t){const i=jR(t),a=BR(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function zR(r,t){Pc.set(r._key(),t)}function BR(r){return Er(r._redirectPersistence)}function jR(r){return Lc(LR,r.config.apiKey,r.name)}async function qR(r,t,i=!1){if(yi(r.app))return Promise.reject(vs(r));const a=Co(r),l=OR(a,t),d=await new PR(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=600*1e3;class FR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!GR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!lT(t)){const a=t.error.code?.split("auth/")[1]||"internal-error";i.onError(zi(this.auth,a))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(t))}saveEventToCache(t){this.cachedEventUids.add(cv(t)),this.lastProcessedEventTime=Date.now()}}function cv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function lT({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function GR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(r,t={}){return Is(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QR=/^https?/;async function KR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await YR(r);for(const i of t)try{if($R(i))return}catch{}Ei(r,"unauthorized-domain")}function $R(r){const t=Zd(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!QR.test(i))return!1;if(XR.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new nu(3e4,6e4);function hv(){const r=Bi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function JR(r){return new Promise((t,i)=>{function a(){hv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hv(),i(zi(r,"network-request-failed"))},timeout:ZR.get()})}if(Bi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Bi().gapi?.load)a();else{const l=Gb("iframefcb");return Bi()[l]=()=>{gapi.load?a():i(zi(r,"network-request-failed"))},YE(`${Fb()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw kc=null,t})}let kc=null;function WR(r){return kc=kc||JR(r),kc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new nu(5e3,15e3),ew="__/auth/iframe",nw="emulator/auth/iframe",iw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sw(r){const t=r.config;Tt(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?bm(t,nw):`https://${r.config.authDomain}/${ew}`,a={apiKey:t.apiKey,appName:r.name,v:wo},l=rw.get(r.config.apiHost);l&&(a.eid=l);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${eu(a).slice(1)}`}async function aw(r){const t=await WR(r),i=Bi().gapi;return Tt(i,r,"internal-error"),t.open({where:document.body,url:sw(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iw,dontclear:!0},a=>new Promise(async(l,c)=>{await a.restyle({setHideOnLeave:!1});const d=zi(r,"network-request-failed"),g=Bi().setTimeout(()=>{c(d)},tw.get());function y(){Bi().clearTimeout(g),l(a)}a.ping(y).then(y,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lw=500,uw=600,cw="_blank",hw="http://localhost";class fv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fw(r,t,i,a=lw,l=uw){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const y={...ow,width:a.toString(),height:l.toString(),top:c,left:d},_=pn().toLowerCase();i&&(g=zE(_)?cw:i),PE(_)&&(t=t||hw,y.scrollbars="yes");const A=Object.entries(y).reduce((N,[H,it])=>`${N}${H}=${it},`,"");if(Ub(_)&&g!=="_self")return dw(t||"",g),new fv(null);const b=window.open(t||"",g,A);Tt(b,r,"popup-blocked");try{b.focus()}catch{}return new fv(b)}function dw(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="__/auth/handler",gw="emulator/auth/handler",pw=encodeURIComponent("fac");async function dv(r,t,i,a,l,c){Tt(r.config.authDomain,r,"auth-domain-config-required"),Tt(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:wo,eventId:l};if(t instanceof KE){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",iA(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,b]of Object.entries({}))d[A]=b}if(t instanceof iu){const A=t.getScopes().filter(b=>b!=="");A.length>0&&(d.scopes=A.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const y=await r._getAppCheckToken(),_=y?`#${pw}=${encodeURIComponent(y)}`:"";return`${yw(r)}?${eu(g).slice(1)}${_}`}function yw({config:r}){return r.emulator?bm(r,gw):`https://${r.authDomain}/${mw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="webStorageSupport";class _w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=qR,this._overrideRedirectResult=zR}async _openPopup(t,i,a,l){Ar(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await dv(t,i,a,Zd(),l);return fw(t,c,Dm())}async _openRedirect(t,i,a,l){await this._originValidation(t);const c=await dv(t,i,a,Zd(),l);return TR(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(Ar(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await aw(t),a=new FR(t);return i.register("authEvent",l=>(Tt(l?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Bd,{type:Bd},l=>{const c=l?.[0]?.[Bd];c!==void 0&&i(!!c),Ei(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=KR(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return FE()||kE()||wm()}}const vw=_w;var mv="@firebase/auth",gv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sw(r){yo(new ua("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;Tt(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const y={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GE(r)},_=new jb(a,l,c,y);return Zb(_,i),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),yo(new ua("auth-internal",t=>{const i=Co(t.getProvider("auth").getImmediate());return(a=>new Ew(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(mv,gv,Tw(r)),_s(mv,gv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=300,bw=EE("authIdTokenMaxAge")||Aw;let pv=null;const Rw=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>bw)return;const l=i?.token;pv!==l&&(pv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function ww(r=wE()){const t=Sm(r,"auth");if(t.isInitialized())return t.getImmediate();const i=$b(r,{popupRedirectResolver:vw,persistence:[NR,_R,nT]}),a=EE("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const d=Rw(c.toString());mR(i,d,()=>d(i.currentUser)),dR(i,g=>d(g))}}const l=_E("auth");return l&&Jb(i,`http://${l}`),i}function Cw(){return document.getElementsByTagName("head")?.[0]??document}qb({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const c=zi("internal-error");c.customData=l,i(c)},a.type="text/javascript",a.charset="UTF-8",Cw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sw("Browser");var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,uT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,R){function I(){}I.prototype=R.prototype,E.F=R.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(V,x,L){for(var w=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)w[ue-2]=arguments[ue];return R.prototype[x].apply(V,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(E,R,I){I||(I=0);const V=Array(16);if(typeof R=="string")for(var x=0;x<16;++x)V[x]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(x=0;x<16;++x)V[x]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=E.g[0],I=E.g[1],x=E.g[2];let L=E.g[3],w;w=R+(L^I&(x^L))+V[0]+3614090360&4294967295,R=I+(w<<7&4294967295|w>>>25),w=L+(x^R&(I^x))+V[1]+3905402710&4294967295,L=R+(w<<12&4294967295|w>>>20),w=x+(I^L&(R^I))+V[2]+606105819&4294967295,x=L+(w<<17&4294967295|w>>>15),w=I+(R^x&(L^R))+V[3]+3250441966&4294967295,I=x+(w<<22&4294967295|w>>>10),w=R+(L^I&(x^L))+V[4]+4118548399&4294967295,R=I+(w<<7&4294967295|w>>>25),w=L+(x^R&(I^x))+V[5]+1200080426&4294967295,L=R+(w<<12&4294967295|w>>>20),w=x+(I^L&(R^I))+V[6]+2821735955&4294967295,x=L+(w<<17&4294967295|w>>>15),w=I+(R^x&(L^R))+V[7]+4249261313&4294967295,I=x+(w<<22&4294967295|w>>>10),w=R+(L^I&(x^L))+V[8]+1770035416&4294967295,R=I+(w<<7&4294967295|w>>>25),w=L+(x^R&(I^x))+V[9]+2336552879&4294967295,L=R+(w<<12&4294967295|w>>>20),w=x+(I^L&(R^I))+V[10]+4294925233&4294967295,x=L+(w<<17&4294967295|w>>>15),w=I+(R^x&(L^R))+V[11]+2304563134&4294967295,I=x+(w<<22&4294967295|w>>>10),w=R+(L^I&(x^L))+V[12]+1804603682&4294967295,R=I+(w<<7&4294967295|w>>>25),w=L+(x^R&(I^x))+V[13]+4254626195&4294967295,L=R+(w<<12&4294967295|w>>>20),w=x+(I^L&(R^I))+V[14]+2792965006&4294967295,x=L+(w<<17&4294967295|w>>>15),w=I+(R^x&(L^R))+V[15]+1236535329&4294967295,I=x+(w<<22&4294967295|w>>>10),w=R+(x^L&(I^x))+V[1]+4129170786&4294967295,R=I+(w<<5&4294967295|w>>>27),w=L+(I^x&(R^I))+V[6]+3225465664&4294967295,L=R+(w<<9&4294967295|w>>>23),w=x+(R^I&(L^R))+V[11]+643717713&4294967295,x=L+(w<<14&4294967295|w>>>18),w=I+(L^R&(x^L))+V[0]+3921069994&4294967295,I=x+(w<<20&4294967295|w>>>12),w=R+(x^L&(I^x))+V[5]+3593408605&4294967295,R=I+(w<<5&4294967295|w>>>27),w=L+(I^x&(R^I))+V[10]+38016083&4294967295,L=R+(w<<9&4294967295|w>>>23),w=x+(R^I&(L^R))+V[15]+3634488961&4294967295,x=L+(w<<14&4294967295|w>>>18),w=I+(L^R&(x^L))+V[4]+3889429448&4294967295,I=x+(w<<20&4294967295|w>>>12),w=R+(x^L&(I^x))+V[9]+568446438&4294967295,R=I+(w<<5&4294967295|w>>>27),w=L+(I^x&(R^I))+V[14]+3275163606&4294967295,L=R+(w<<9&4294967295|w>>>23),w=x+(R^I&(L^R))+V[3]+4107603335&4294967295,x=L+(w<<14&4294967295|w>>>18),w=I+(L^R&(x^L))+V[8]+1163531501&4294967295,I=x+(w<<20&4294967295|w>>>12),w=R+(x^L&(I^x))+V[13]+2850285829&4294967295,R=I+(w<<5&4294967295|w>>>27),w=L+(I^x&(R^I))+V[2]+4243563512&4294967295,L=R+(w<<9&4294967295|w>>>23),w=x+(R^I&(L^R))+V[7]+1735328473&4294967295,x=L+(w<<14&4294967295|w>>>18),w=I+(L^R&(x^L))+V[12]+2368359562&4294967295,I=x+(w<<20&4294967295|w>>>12),w=R+(I^x^L)+V[5]+4294588738&4294967295,R=I+(w<<4&4294967295|w>>>28),w=L+(R^I^x)+V[8]+2272392833&4294967295,L=R+(w<<11&4294967295|w>>>21),w=x+(L^R^I)+V[11]+1839030562&4294967295,x=L+(w<<16&4294967295|w>>>16),w=I+(x^L^R)+V[14]+4259657740&4294967295,I=x+(w<<23&4294967295|w>>>9),w=R+(I^x^L)+V[1]+2763975236&4294967295,R=I+(w<<4&4294967295|w>>>28),w=L+(R^I^x)+V[4]+1272893353&4294967295,L=R+(w<<11&4294967295|w>>>21),w=x+(L^R^I)+V[7]+4139469664&4294967295,x=L+(w<<16&4294967295|w>>>16),w=I+(x^L^R)+V[10]+3200236656&4294967295,I=x+(w<<23&4294967295|w>>>9),w=R+(I^x^L)+V[13]+681279174&4294967295,R=I+(w<<4&4294967295|w>>>28),w=L+(R^I^x)+V[0]+3936430074&4294967295,L=R+(w<<11&4294967295|w>>>21),w=x+(L^R^I)+V[3]+3572445317&4294967295,x=L+(w<<16&4294967295|w>>>16),w=I+(x^L^R)+V[6]+76029189&4294967295,I=x+(w<<23&4294967295|w>>>9),w=R+(I^x^L)+V[9]+3654602809&4294967295,R=I+(w<<4&4294967295|w>>>28),w=L+(R^I^x)+V[12]+3873151461&4294967295,L=R+(w<<11&4294967295|w>>>21),w=x+(L^R^I)+V[15]+530742520&4294967295,x=L+(w<<16&4294967295|w>>>16),w=I+(x^L^R)+V[2]+3299628645&4294967295,I=x+(w<<23&4294967295|w>>>9),w=R+(x^(I|~L))+V[0]+4096336452&4294967295,R=I+(w<<6&4294967295|w>>>26),w=L+(I^(R|~x))+V[7]+1126891415&4294967295,L=R+(w<<10&4294967295|w>>>22),w=x+(R^(L|~I))+V[14]+2878612391&4294967295,x=L+(w<<15&4294967295|w>>>17),w=I+(L^(x|~R))+V[5]+4237533241&4294967295,I=x+(w<<21&4294967295|w>>>11),w=R+(x^(I|~L))+V[12]+1700485571&4294967295,R=I+(w<<6&4294967295|w>>>26),w=L+(I^(R|~x))+V[3]+2399980690&4294967295,L=R+(w<<10&4294967295|w>>>22),w=x+(R^(L|~I))+V[10]+4293915773&4294967295,x=L+(w<<15&4294967295|w>>>17),w=I+(L^(x|~R))+V[1]+2240044497&4294967295,I=x+(w<<21&4294967295|w>>>11),w=R+(x^(I|~L))+V[8]+1873313359&4294967295,R=I+(w<<6&4294967295|w>>>26),w=L+(I^(R|~x))+V[15]+4264355552&4294967295,L=R+(w<<10&4294967295|w>>>22),w=x+(R^(L|~I))+V[6]+2734768916&4294967295,x=L+(w<<15&4294967295|w>>>17),w=I+(L^(x|~R))+V[13]+1309151649&4294967295,I=x+(w<<21&4294967295|w>>>11),w=R+(x^(I|~L))+V[4]+4149444226&4294967295,R=I+(w<<6&4294967295|w>>>26),w=L+(I^(R|~x))+V[11]+3174756917&4294967295,L=R+(w<<10&4294967295|w>>>22),w=x+(R^(L|~I))+V[2]+718787259&4294967295,x=L+(w<<15&4294967295|w>>>17),w=I+(L^(x|~R))+V[9]+3951481745&4294967295,E.g[0]=E.g[0]+R&4294967295,E.g[1]=E.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+L&4294967295}a.prototype.v=function(E,R){R===void 0&&(R=E.length);const I=R-this.blockSize,V=this.C;let x=this.h,L=0;for(;L<R;){if(x==0)for(;L<=I;)l(this,E,L),L+=this.blockSize;if(typeof E=="string"){for(;L<R;)if(V[x++]=E.charCodeAt(L++),x==this.blockSize){l(this,V),x=0;break}}else for(;L<R;)if(V[x++]=E[L++],x==this.blockSize){l(this,V),x=0;break}}this.h=x,this.o+=R},a.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var R=1;R<E.length-8;++R)E[R]=0;R=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=R&255,R/=256;for(this.v(E),E=Array(16),R=0,I=0;I<4;++I)for(let V=0;V<32;V+=8)E[R++]=this.g[I]>>>V&255;return E};function c(E,R){var I=g;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=R(E)}function d(E,R){this.h=R;const I=[];let V=!0;for(let x=E.length-1;x>=0;x--){const L=E[x]|0;V&&L==R||(I[x]=L,V=!1)}this.g=I}var g={};function y(E){return-128<=E&&E<128?c(E,function(R){return new d([R|0],R<0?-1:0)}):new d([E|0],E<0?-1:0)}function _(E){if(isNaN(E)||!isFinite(E))return b;if(E<0)return nt(_(-E));const R=[];let I=1;for(let V=0;E>=I;V++)R[V]=E/I|0,I*=4294967296;return new d(R,0)}function A(E,R){if(E.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(E.charAt(0)=="-")return nt(A(E.substring(1),R));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=_(Math.pow(R,8));let V=b;for(let L=0;L<E.length;L+=8){var x=Math.min(8,E.length-L);const w=parseInt(E.substring(L,L+x),R);x<8?(x=_(Math.pow(R,x)),V=V.j(x).add(_(w))):(V=V.j(I),V=V.add(_(w)))}return V}var b=y(0),N=y(1),H=y(16777216);r=d.prototype,r.m=function(){if(et(this))return-nt(this).m();let E=0,R=1;for(let I=0;I<this.g.length;I++){const V=this.i(I);E+=(V>=0?V:4294967296+V)*R,R*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(it(this))return"0";if(et(this))return"-"+nt(this).toString(E);const R=_(Math.pow(E,6));var I=this;let V="";for(;;){const x=Ot(I,R).g;I=yt(I,x.j(R));let L=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=x,it(I))return L+V;for(;L.length<6;)L="0"+L;V=L+V}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function it(E){if(E.h!=0)return!1;for(let R=0;R<E.g.length;R++)if(E.g[R]!=0)return!1;return!0}function et(E){return E.h==-1}r.l=function(E){return E=yt(this,E),et(E)?-1:it(E)?0:1};function nt(E){const R=E.g.length,I=[];for(let V=0;V<R;V++)I[V]=~E.g[V];return new d(I,~E.h).add(N)}r.abs=function(){return et(this)?nt(this):this},r.add=function(E){const R=Math.max(this.g.length,E.g.length),I=[];let V=0;for(let x=0;x<=R;x++){let L=V+(this.i(x)&65535)+(E.i(x)&65535),w=(L>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);V=w>>>16,L&=65535,w&=65535,I[x]=w<<16|L}return new d(I,I[I.length-1]&-2147483648?-1:0)};function yt(E,R){return E.add(nt(R))}r.j=function(E){if(it(this)||it(E))return b;if(et(this))return et(E)?nt(this).j(nt(E)):nt(nt(this).j(E));if(et(E))return nt(this.j(nt(E)));if(this.l(H)<0&&E.l(H)<0)return _(this.m()*E.m());const R=this.g.length+E.g.length,I=[];for(var V=0;V<2*R;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(let x=0;x<E.g.length;x++){const L=this.i(V)>>>16,w=this.i(V)&65535,ue=E.i(x)>>>16,Ae=E.i(x)&65535;I[2*V+2*x]+=w*Ae,bt(I,2*V+2*x),I[2*V+2*x+1]+=L*Ae,bt(I,2*V+2*x+1),I[2*V+2*x+1]+=w*ue,bt(I,2*V+2*x+1),I[2*V+2*x+2]+=L*ue,bt(I,2*V+2*x+2)}for(E=0;E<R;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=R;E<2*R;E++)I[E]=0;return new d(I,0)};function bt(E,R){for(;(E[R]&65535)!=E[R];)E[R+1]+=E[R]>>>16,E[R]&=65535,R++}function rt(E,R){this.g=E,this.h=R}function Ot(E,R){if(it(R))throw Error("division by zero");if(it(E))return new rt(b,b);if(et(E))return R=Ot(nt(E),R),new rt(nt(R.g),nt(R.h));if(et(R))return R=Ot(E,nt(R)),new rt(nt(R.g),R.h);if(E.g.length>30){if(et(E)||et(R))throw Error("slowDivide_ only works with positive integers.");for(var I=N,V=R;V.l(E)<=0;)I=gt(I),V=gt(V);var x=Rt(I,1),L=Rt(V,1);for(V=Rt(V,2),I=Rt(I,2);!it(V);){var w=L.add(V);w.l(E)<=0&&(x=x.add(I),L=w),V=Rt(V,1),I=Rt(I,1)}return R=yt(E,x.j(R)),new rt(x,R)}for(x=b;E.l(R)>=0;){for(I=Math.max(1,Math.floor(E.m()/R.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),L=_(I),w=L.j(R);et(w)||w.l(E)>0;)I-=V,L=_(I),w=L.j(R);it(L)&&(L=N),x=x.add(L),E=yt(E,w)}return new rt(x,E)}r.B=function(E){return Ot(this,E).h},r.and=function(E){const R=Math.max(this.g.length,E.g.length),I=[];for(let V=0;V<R;V++)I[V]=this.i(V)&E.i(V);return new d(I,this.h&E.h)},r.or=function(E){const R=Math.max(this.g.length,E.g.length),I=[];for(let V=0;V<R;V++)I[V]=this.i(V)|E.i(V);return new d(I,this.h|E.h)},r.xor=function(E){const R=Math.max(this.g.length,E.g.length),I=[];for(let V=0;V<R;V++)I[V]=this.i(V)^E.i(V);return new d(I,this.h^E.h)};function gt(E){const R=E.g.length+1,I=[];for(let V=0;V<R;V++)I[V]=E.i(V)<<1|E.i(V-1)>>>31;return new d(I,E.h)}function Rt(E,R){const I=R>>5;R%=32;const V=E.g.length-I,x=[];for(let L=0;L<V;L++)x[L]=R>0?E.i(L+I)>>>R|E.i(L+I+1)<<32-R:E.i(L+I);return new d(x,E.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,uT=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=A,Es=d}).apply(typeof yv<"u"?yv:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cT,Ul,hT,zc,tm,fT,dT,mT;(function(){var r,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var v=a;u=u.split(".");for(var S=0;S<u.length-1;S++){var P=u[S];if(!(P in v))break t;v=v[P]}u=u[u.length-1],S=v[u],m=m(S),m!=S&&m!=null&&t(v,u,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(m){var v=[],S;for(S in m)Object.prototype.hasOwnProperty.call(m,S)&&v.push([S,m[S]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function g(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function y(u,m,v){return u.call.apply(u.bind,arguments)}function _(u,m,v){return _=y,_.apply(null,arguments)}function A(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),u.apply(this,S)}}function b(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(S,P,q){for(var st=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)st[xt-2]=arguments[xt];return m.prototype[P].apply(S,st)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function H(u){const m=u.length;if(m>0){const v=Array(m);for(let S=0;S<m;S++)v[S]=u[S];return v}return[]}function it(u,m){for(let S=1;S<arguments.length;S++){const P=arguments[S];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=u.length||0;const q=P.length||0;u.length=v+q;for(let st=0;st<q;st++)u[v+st]=P[st]}else u.push(P)}}class et{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function nt(u){d.setTimeout(()=>{throw u},0)}function yt(){var u=E;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class bt{constructor(){this.h=this.g=null}add(m,v){const S=rt.get();S.set(m,v),this.h?this.h.next=S:this.g=S,this.h=S}}var rt=new et(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,Rt=!1,E=new bt,R=()=>{const u=Promise.resolve(void 0);gt=()=>{u.then(I)}};function I(){for(var u;u=yt();){try{u.h.call(u.g)}catch(v){nt(v)}var m=rt;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Rt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function w(u){return/^[\s\xa0]*$/.test(u)}function ue(u,m){x.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}b(ue,x),ue.prototype.init=function(u,m){const v=this.type=u.type,S=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ae="closure_listenable_"+(Math.random()*1e6|0),G=0;function at(u,m,v,S,P){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!S,this.ha=P,this.key=++G,this.da=this.fa=!1}function ft(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Yt(u,m,v){for(const S in u)m.call(v,u[S],S,u)}function Zt(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function M(u){const m={};for(const v in u)m[v]=u[v];return m}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ot(u,m){let v,S;for(let P=1;P<arguments.length;P++){S=arguments[P];for(v in S)u[v]=S[v];for(let q=0;q<$.length;q++)v=$[q],Object.prototype.hasOwnProperty.call(S,v)&&(u[v]=S[v])}}function lt(u){this.src=u,this.g={},this.h=0}lt.prototype.add=function(u,m,v,S,P){const q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);const st=Nt(u,m,S,P);return st>-1?(m=u[st],v||(m.fa=!1)):(m=new at(m,this.src,q,!!S,P),m.fa=v,u.push(m)),m};function At(u,m){const v=m.type;if(v in u.g){var S=u.g[v],P=Array.prototype.indexOf.call(S,m,void 0),q;(q=P>=0)&&Array.prototype.splice.call(S,P,1),q&&(ft(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Nt(u,m,v,S){for(let P=0;P<u.length;++P){const q=u[P];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==S)return P}return-1}var Bt="closure_lm_"+(Math.random()*1e6|0),Ce={};function Pt(u,m,v,S,P){if(Array.isArray(m)){for(let q=0;q<m.length;q++)Pt(u,m[q],v,S,P);return null}return v=We(v),u&&u[Ae]?u.J(m,v,g(S)?!!S.capture:!1,P):Ie(u,m,v,!1,S,P)}function Ie(u,m,v,S,P,q){if(!m)throw Error("Invalid event type");const st=g(P)?!!P.capture:!!P;let xt=li(u);if(xt||(u[Bt]=xt=new lt(u)),v=xt.add(m,v,S,st,q),v.proxy)return v;if(S=Ut(),v.proxy=S,S.src=u,S.listener=v,u.addEventListener)L||(P=st),P===void 0&&(P=!1),u.addEventListener(m.toString(),S,P);else if(u.attachEvent)u.attachEvent(He(m.toString()),S);else if(u.addListener&&u.removeListener)u.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ut(){function u(v){return m.call(u.src,u.listener,v)}const m=Ir;return u}function Ti(u,m,v,S,P){if(Array.isArray(m))for(var q=0;q<m.length;q++)Ti(u,m[q],v,S,P);else S=g(S)?!!S.capture:!!S,v=We(v),u&&u[Ae]?(u=u.i,q=String(m).toString(),q in u.g&&(m=u.g[q],v=Nt(m,v,S,P),v>-1&&(ft(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[q],u.h--)))):u&&(u=li(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Nt(m,v,S,P)),(v=u>-1?m[u]:null)&&Si(v))}function Si(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ae])At(m.i,u);else{var v=u.type,S=u.proxy;m.removeEventListener?m.removeEventListener(v,S,u.capture):m.detachEvent?m.detachEvent(He(v),S):m.addListener&&m.removeListener&&m.removeListener(S),(v=li(m))?(At(v,u),v.h==0&&(v.src=null,m[Bt]=null)):ft(u)}}}function He(u){return u in Ce?Ce[u]:Ce[u]="on"+u}function Ir(u,m){if(u.da)u=!0;else{m=new ue(m,this);const v=u.listener,S=u.ha||u.src;u.fa&&Si(u),u=v.call(S,m)}return u}function li(u){return u=u[Bt],u instanceof lt?u:null}var Tn="__closure_events_fn_"+(Math.random()*1e9>>>0);function We(u){return typeof u=="function"?u:(u[Tn]||(u[Tn]=function(m){return u.handleEvent(m)}),u[Tn])}function pe(){V.call(this),this.i=new lt(this),this.M=this,this.G=null}b(pe,V),pe.prototype[Ae]=!0,pe.prototype.removeEventListener=function(u,m,v,S){Ti(this,u,m,v,S)};function Ee(u,m){var v,S=u.G;if(S)for(v=[];S;S=S.G)v.push(S);if(u=u.M,S=m.type||m,typeof m=="string")m=new x(m,u);else if(m instanceof x)m.target=m.target||u;else{var P=m;m=new x(S,u),ot(m,P)}P=!0;let q,st;if(v)for(st=v.length-1;st>=0;st--)q=m.g=v[st],P=yn(q,S,!0,m)&&P;if(q=m.g=u,P=yn(q,S,!0,m)&&P,P=yn(q,S,!1,m)&&P,v)for(st=0;st<v.length;st++)q=m.g=v[st],P=yn(q,S,!1,m)&&P}pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let S=0;S<v.length;S++)ft(v[S]);delete u.g[m],u.h--}}this.G=null},pe.prototype.J=function(u,m,v,S){return this.i.add(String(u),m,!1,v,S)},pe.prototype.K=function(u,m,v,S){return this.i.add(String(u),m,!0,v,S)};function yn(u,m,v,S){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let q=0;q<m.length;++q){const st=m[q];if(st&&!st.da&&st.capture==v){const xt=st.listener,Ne=st.ha||st.src;st.fa&&At(u.i,st),P=xt.call(Ne,S)!==!1&&P}}return P&&!S.defaultPrevented}function Dr(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:d.setTimeout(u,m||0)}function Xi(u){u.g=Dr(()=>{u.g=null,u.i&&(u.i=!1,Xi(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ve extends V{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Xi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(u){V.call(this),this.h=u,this.g={}}b(Ai,V);var Gn=[];function Qi(u){Yt(u.g,function(m,v){this.g.hasOwnProperty(v)&&Si(m)},u),u.g={}}Ai.prototype.N=function(){Ai.Z.N.call(this),Qi(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bi=d.JSON.stringify,pa=d.JSON.parse,ya=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function xs(){}function Ki(){}var cn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ue(){x.call(this,"d")}b(Ue,x);function _n(){x.call(this,"c")}b(_n,x);var Te={},_a=null;function Nr(){return _a=_a||new pe}Te.Ia="serverreachability";function va(u){x.call(this,Te.Ia,u)}b(va,x);function Yn(u){const m=Nr();Ee(m,new va(m))}Te.STAT_EVENT="statevent";function $i(u,m){x.call(this,Te.STAT_EVENT,u),this.stat=m}b($i,x);function be(u){const m=Nr();Ee(m,new $i(m,u))}Te.Ja="timingevent";function Xn(u,m){x.call(this,Te.Ja,u),this.size=m}b(Xn,x);function Qn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Sn(){this.g=!0}Sn.prototype.ua=function(){this.g=!1};function Vo(u,m,v,S,P,q){u.info(function(){if(u.g)if(q){var st="",xt=q.split("&");for(let Jt=0;Jt<xt.length;Jt++){var Ne=xt[Jt].split("=");if(Ne.length>1){const _e=Ne[0];Ne=Ne[1];const Jn=_e.split("_");st=Jn.length>=2&&Jn[1]=="type"?st+(_e+"="+Ne+"&"):st+(_e+"=redacted&")}}}else st=null;else st=q;return"XMLHTTP REQ ("+S+") [attempt "+P+"]: "+m+`
`+v+`
`+st})}function Or(u,m,v,S,P,q,st){u.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+P+"]: "+m+`
`+v+`
`+q+" "+st})}function An(u,m,v,S){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Uo(u,v)+(S?" "+S:"")})}function Zi(u,m){u.info(function(){return"TIMEOUT: "+m})}Sn.prototype.info=function(){};function Uo(u,m){if(!u.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(u=0;u<q.length;u++)if(Array.isArray(q[u])){var v=q[u];if(!(v.length<2)){var S=v[1];if(Array.isArray(S)&&!(S.length<1)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(let st=1;st<S.length;st++)S[st]=""}}}}return bi(q)}catch{return m}}var Ji={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ri={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ms;function Wi(){}b(Wi,xs),Wi.prototype.g=function(){return new XMLHttpRequest},Ms=new Wi;function Kn(u){return encodeURIComponent(String(u))}function Fe(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function Un(u,m,v,S){this.j=u,this.i=m,this.l=v,this.S=S||1,this.V=new Ai(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bn}function bn(){this.i=null,this.g="",this.h=!1}var ye={},De={};function Rn(u,m,v){u.M=1,u.A=Us(Le(m)),u.u=v,u.R=!0,tr(u,null)}function tr(u,m){u.F=Date.now(),j(u),u.B=Le(u.A);var v=u.B,S=u.S;Array.isArray(S)||(S=[String(S)]),Aa(v.i,"t",S),u.C=0,v=u.j.L,u.h=new bn,u.g=Su(u.j,v?m:null,!u.u),u.P>0&&(u.O=new Ve(_(u.Y,u,u.g),u.P)),m=u.V,v=u.g,S=u.ba;var P="readystatechange";Array.isArray(P)||(P&&(Gn[0]=P.toString()),P=Gn);for(let q=0;q<P.length;q++){const st=Pt(v,P[q],S||m.handleEvent,!1,m.h||m);if(!st)break;m.g[st.key]=st}m=u.J?M(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Yn(),Vo(u.i,u.v,u.B,u.l,u.S,u.u)}Un.prototype.ba=function(u){u=u.target;const m=this.O;m&&hi(u)==3?m.j():this.Y(u)},Un.prototype.Y=function(u){try{if(u==this.g)t:{const xt=hi(this.g),Ne=this.g.ya(),Jt=this.g.ca();if(!(xt<3)&&(xt!=3||this.g&&(this.h.h||this.g.la()||tn(this.g)))){this.K||xt!=4||Ne==7||(Ne==8||Jt<=0?Yn(3):Yn(2)),tt(this);var m=this.g.ca();this.X=m;var v=Ea(this);if(this.o=m==200,Or(this.i,this.v,this.B,this.l,this.S,xt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var S,P=this.g;if((S=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(S)){var q=S;break e}}q=null}if(u=q)An(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wt(this,u);else{this.o=!1,this.m=3,be(12),vt(this),ct(this);break t}}if(this.R){u=!0;let _e;for(;!this.K&&this.C<v.length;)if(_e=D(this,v),_e==De){xt==4&&(this.m=4,be(14),u=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==ye){this.m=4,be(15),An(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else An(this.i,this.l,_e,null),wt(this,_e);if(Vs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||v.length!=0||this.h.h||(this.m=1,be(16),u=!1),this.o=this.o&&u,!u)An(this.i,this.l,v,"[Invalid Chunked Response]"),vt(this),ct(this);else if(v.length>0&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.aa&&!st.P&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Qo(st),st.P=!0,be(11))}}else An(this.i,this.l,v,null),wt(this,v);xt==4&&vt(this),this.o&&!this.K&&(xt==4?_u(this.j,this):(this.o=!1,j(this)))}else nr(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),vt(this),ct(this)}}}catch{}finally{}};function Ea(u){if(!Vs(u))return u.g.la();const m=tn(u.g);if(m==="")return"";let v="";const S=m.length,P=hi(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vt(u),ct(u),"";u.h.i=new d.TextDecoder}for(let q=0;q<S;q++)u.h.h=!0,v+=u.h.i.decode(m[q],{stream:!(P&&q==S-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function Vs(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function D(u,m){var v=u.C,S=m.indexOf(`
`,v);return S==-1?De:(v=Number(m.substring(v,S)),isNaN(v)?ye:(S+=1,S+v>m.length?De:(m=m.slice(S,S+v),u.C=S+v,m)))}Un.prototype.cancel=function(){this.K=!0,vt(this)};function j(u){u.T=Date.now()+u.H,Y(u,u.H)}function Y(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Qn(_(u.aa,u),m)}function tt(u){u.D&&(d.clearTimeout(u.D),u.D=null)}Un.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Zi(this.i,this.B),this.M!=2&&(Yn(),be(17)),vt(this),this.m=2,ct(this)):Y(this,this.T-u)};function ct(u){u.j.I==0||u.K||_u(u.j,u)}function vt(u){tt(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Qi(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function wt(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||wi(v.h,u))){if(!u.L&&wi(v.h,u)&&v.I==3){try{var S=v.Ba.g.parse(m)}catch{S=null}if(Array.isArray(S)&&S.length==3){var P=S;if(P[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)Ia(v),zr(v);else break t;qs(v),be(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=Qn(_(v.Va,v),6e3));Ke(v.h)<=1&&v.ta&&(v.ta=void 0)}else xi(v,11)}else if((u.L||v.g==u)&&Ia(v),!w(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let Jt=P[m];const _e=Jt[0];if(!(_e<=v.K))if(v.K=_e,Jt=Jt[1],v.I==2)if(Jt[0]=="c"){v.M=Jt[1],v.ba=Jt[2];const Jn=Jt[3];Jn!=null&&(v.ka=Jn,v.j.info("VER="+v.ka));const Mi=Jt[4];Mi!=null&&(v.za=Mi,v.j.info("SVER="+v.za));const fi=Jt[5];fi!=null&&typeof fi=="number"&&fi>0&&(S=1.5*fi,v.O=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const di=u.g;if(di){const Hs=di.g?di.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var q=S.h;q.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Lo(q,q.h),q.h=null))}if(S.G){const Da=di.g?di.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(S.wa=Da,ee(S.J,S.G,Da))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),S=v;var st=u;if(S.na=Tu(S,S.L?S.ba:null,S.W),st.L){Po(S.h,st);var xt=st,Ne=S.O;Ne&&(xt.H=Ne),xt.D&&(tt(xt),j(xt)),S.g=st}else pu(S);v.i.length>0&&Oi(v)}else Jt[0]!="stop"&&Jt[0]!="close"||xi(v,7);else v.I==3&&(Jt[0]=="stop"||Jt[0]=="close"?Jt[0]=="stop"?xi(v,7):Yo(v):Jt[0]!="noop"&&v.l&&v.l.qa(Jt),v.A=0)}}Yn(4)}catch{}}var Lt=class{constructor(u,m){this.g=u,this.map=m}};function he(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ke(u){return u.h?1:u.g?u.g.size:0}function wi(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Lo(u,m){u.g?u.g.add(m):u.h=m}function Po(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}he.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ko(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return H(u.i)}var cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ta(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const S=u[v].indexOf("=");let P,q=null;S>=0?(P=u[v].substring(0,S),q=u[v].substring(S+1)):P=u[v],m(P,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Ln(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Ln?(this.l=u.l,$e(this,u.j),this.o=u.o,this.g=u.g,xr(this,u.u),this.h=u.h,zo(this,mu(u.i)),this.m=u.m):u&&(m=String(u).match(cu))?(this.l=!1,$e(this,m[1]||"",!0),this.o=Ci(m[2]||""),this.g=Ci(m[3]||"",!0),xr(this,m[4]),this.h=Ci(m[5]||"",!0),zo(this,m[6]||"",!0),this.m=Ci(m[7]||"")):(this.l=!1,this.i=new Vr(null,this.l))}Ln.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Ls(m,Sa,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ls(m,Sa,!0),"@"),u.push(Kn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Ls(v,v.charAt(0)=="/"?Bo:hu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Ls(v,fu)),u.join("")},Ln.prototype.resolve=function(u){const m=Le(this);let v=!!u.j;v?$e(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var S=u.h;if(v)xr(m,u.u);else if(v=!!u.h){if(S.charAt(0)!="/")if(this.g&&!this.h)S="/"+S;else{var P=m.h.lastIndexOf("/");P!=-1&&(S=m.h.slice(0,P+1)+S)}if(P=S,P==".."||P==".")S="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){S=P.lastIndexOf("/",0)==0,P=P.split("/");const q=[];for(let st=0;st<P.length;){const xt=P[st++];xt=="."?S&&st==P.length&&q.push(""):xt==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),S&&st==P.length&&q.push("")):(q.push(xt),S=!0)}S=q.join("/")}else S=P}return v?m.h=S:v=u.i.toString()!=="",v?zo(m,mu(u.i)):v=!!u.m,v&&(m.m=u.m),m};function Le(u){return new Ln(u)}function $e(u,m,v){u.j=v?Ci(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function xr(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function zo(u,m,v){m instanceof Vr?(u.i=m,ba(u.i,u.l)):(v||(m=Ls(m,Mr)),u.i=new Vr(m,u.l))}function ee(u,m,v){u.i.set(m,v)}function Us(u){return ee(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ci(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ls(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,wn),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wn(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Sa=/[#\/\?@]/g,hu=/[#\?:]/g,Bo=/[#\?]/g,Mr=/[#\?@]/g,fu=/#/g;function Vr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Cn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ta(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=Vr.prototype,r.add=function(u,m){Cn(this),this.i=null,u=Ur(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function du(u,m){Cn(u),m=Ur(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function jo(u,m){return Cn(u),m=Ur(u,m),u.g.has(m)}r.forEach=function(u,m){Cn(this),this.g.forEach(function(v,S){v.forEach(function(P){u.call(m,P,S,this)},this)},this)};function qo(u,m){Cn(u);let v=[];if(typeof m=="string")jo(u,m)&&(v=v.concat(u.g.get(Ur(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}r.set=function(u,m){return Cn(this),this.i=null,u=Ur(this,u),jo(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=qo(this,u),u.length>0?String(u[0]):m):m};function Aa(u,m,v){du(u,m),v.length>0&&(u.i=null,u.g.set(Ur(u,m),H(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let S=0;S<m.length;S++){var v=m[S];const P=Kn(v);v=qo(this,v);for(let q=0;q<v.length;q++){let st=P;v[q]!==""&&(st+="="+Kn(v[q])),u.push(st)}}return this.i=u.join("&")};function mu(u){const m=new Vr;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Ur(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ba(u,m){m&&!u.j&&(Cn(u),u.i=null,u.g.forEach(function(v,S){const P=S.toLowerCase();S!=P&&(du(this,S),Aa(this,P,v))},u)),u.j=m}function ui(u,m){const v=new Sn;if(d.Image){const S=new Image;S.onload=A($n,v,"TestLoadImage: loaded",!0,m,S),S.onerror=A($n,v,"TestLoadImage: error",!1,m,S),S.onabort=A($n,v,"TestLoadImage: abort",!1,m,S),S.ontimeout=A($n,v,"TestLoadImage: timeout",!1,m,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=u}else m(!1)}function Ho(u,m){const v=new Sn,S=new AbortController,P=setTimeout(()=>{S.abort(),$n(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:S.signal}).then(q=>{clearTimeout(P),q.ok?$n(v,"TestPingServer: ok",!0,m):$n(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),$n(v,"TestPingServer: error",!1,m)})}function $n(u,m,v,S,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),S(v)}catch{}}function Lr(){this.g=new ya}function Ii(u){this.i=u.Sb||null,this.h=u.ab||!1}b(Ii,xs),Ii.prototype.g=function(){return new Ps(this.i,this.h)};function Ps(u,m){pe.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(Ps,pe),r=Ps.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,ci(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||d).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ra(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ra(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Pr(this):ci(this),this.readyState==3&&Ra(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Pr(this))},r.Na=function(u){this.g&&(this.response=u,Pr(this))},r.ga=function(){this.g&&Pr(this)};function Pr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,ci(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function ci(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Zn(u){let m="";return Yt(u,function(v,S){m+=S,m+=":",m+=v,m+=`\r
`}),m}function ks(u,m,v){t:{for(S in v){var S=!1;break t}S=!0}S||(v=Zn(v),typeof u=="string"?v!=null&&Kn(v):ee(u,m,v))}function re(u){pe.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(re,pe);var Di=/^https?$/i,Fo=["POST","PUT"];r=re.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ms.g(),this.g.onreadystatechange=N(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){zs(this,q);return}if(u=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var P in S)v.set(P,S[P]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const q of S.keys())v.set(q,S.get(q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),P=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(Fo,m,void 0)>=0)||S||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,st]of v)this.g.setRequestHeader(q,st);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(q){zs(this,q)}};function zs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Go(u),er(u)}function Go(u){u.A||(u.A=!0,Ee(u,"complete"),Ee(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,Ee(this,"complete"),Ee(this,"abort"),er(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),re.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Bs(this):this.Xa())},r.Xa=function(){Bs(this)};function Bs(u){if(u.h&&typeof c<"u"){if(u.v&&hi(u)==4)setTimeout(u.Ca.bind(u),0);else if(Ee(u,"readystatechange"),hi(u)==4){u.h=!1;try{const q=u.ca();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var S;if(S=q===0){let st=String(u.D).match(cu)[1]||null;!st&&d.self&&d.self.location&&(st=d.self.location.protocol.slice(0,-1)),S=!Di.test(st?st.toLowerCase():"")}v=S}if(v)Ee(u,"complete"),Ee(u,"success");else{u.o=6;try{var P=hi(u)>2?u.g.statusText:""}catch{P=""}u.l=P+" ["+u.ca()+"]",Go(u)}}finally{er(u)}}}}function er(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||Ee(u,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function hi(u){return u.g?u.g.readyState:0}r.ca=function(){try{return hi(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),pa(m)}};function tn(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function nr(u){const m={};u=(u.g&&hi(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<u.length;S++){if(w(u[S]))continue;var v=Fe(u[S]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[P]||[];m[P]=q,q.push(v)}Zt(m,function(S){return S.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function kr(u){this.za=0,this.i=[],this.j=new Sn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ni("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ni("baseRetryDelayMs",5e3,u),this.Za=Ni("retryDelaySeedMs",1e4,u),this.Ta=Ni("forwardChannelMaxRetries",2,u),this.va=Ni("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new he(u&&u.concurrentRequestLimit),this.Ba=new Lr,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=kr.prototype,r.ka=8,r.I=1,r.connect=function(u,m,v,S){be(0),this.W=u,this.H=m||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.J=Tu(this,null,this.W),Oi(this)};function Yo(u){if(wa(u),u.I==3){var m=u.V++,v=Le(u.J);if(ee(v,"SID",u.M),ee(v,"RID",m),ee(v,"TYPE","terminate"),js(u,v),m=new Un(u,u.j,m),m.M=2,m.A=Us(Le(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.A,v=!0),v||(m.g=Su(m.j,null),m.g.ea(m.A)),m.F=Date.now(),j(m)}Eu(u)}function zr(u){u.g&&(Qo(u),u.g.cancel(),u.g=null)}function wa(u){zr(u),u.v&&(d.clearTimeout(u.v),u.v=null),Ia(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function Oi(u){if(!hn(u.h)&&!u.m){u.m=!0;var m=u.Ea;gt||R(),Rt||(gt(),Rt=!0),E.add(m,u),u.D=0}}function Ca(u,m){return Ke(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Qn(_(u.Ea,u,m),vu(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const P=new Un(this,this.j,u);let q=this.o;if(this.U&&(q?(q=M(q),ot(q,this.U)):q=this.U),this.u!==null||this.R||(P.J=q,q=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break e}S=void 0}if(S===void 0)break;if(m+=S,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=gu(this,P,m),v=Le(this.J),ee(v,"RID",u),ee(v,"CVER",22),this.G&&ee(v,"X-HTTP-Session-Id",this.G),js(this,v),q&&(this.R?m="headers="+Kn(Zn(q))+"&"+m:this.u&&ks(v,this.u,q)),Lo(this.h,P),this.Ra&&ee(v,"TYPE","init"),this.S?(ee(v,"$req",m),ee(v,"SID","null"),P.U=!0,Rn(P,v,null)):Rn(P,v,m),this.I=2}}else this.I==3&&(u?Xo(this,u):this.i.length==0||hn(this.h)||Xo(this))};function Xo(u,m){var v;m?v=m.l:v=u.V++;const S=Le(u.J);ee(S,"SID",u.M),ee(S,"RID",v),ee(S,"AID",u.K),js(u,S),u.u&&u.o&&ks(S,u.u,u.o),v=new Un(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=gu(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Lo(u.h,v),Rn(v,S,m)}function js(u,m){u.H&&Yt(u.H,function(v,S){ee(m,S,v)}),u.l&&Yt({},function(v,S){ee(m,S,v)})}function gu(u,m,v){v=Math.min(u.i.length,v);const S=u.l?_(u.l.Ka,u.l,u):null;t:{var P=u.i;let xt=-1;for(;;){const Ne=["count="+v];xt==-1?v>0?(xt=P[0].g,Ne.push("ofs="+xt)):xt=0:Ne.push("ofs="+xt);let Jt=!0;for(let _e=0;_e<v;_e++){var q=P[_e].g;const Jn=P[_e].map;if(q-=xt,q<0)xt=Math.max(0,P[_e].g-100),Jt=!1;else try{q="req"+q+"_"||"";try{var st=Jn instanceof Map?Jn:Object.entries(Jn);for(const[Mi,fi]of st){let di=fi;g(fi)&&(di=bi(fi)),Ne.push(q+Mi+"="+encodeURIComponent(di))}}catch(Mi){throw Ne.push(q+"type="+encodeURIComponent("_badmap")),Mi}}catch{S&&S(Jn)}}if(Jt){st=Ne.join("&");break t}}st=void 0}return u=u.i.splice(0,v),m.G=u,st}function pu(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;gt||R(),Rt||(gt(),Rt=!0),E.add(m,u),u.A=0}}function qs(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Qn(_(u.Da,u),vu(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,yu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Qn(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),zr(this),yu(this))};function Qo(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function yu(u){u.g=new Un(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=Le(u.na);ee(m,"RID","rpc"),ee(m,"SID",u.M),ee(m,"AID",u.K),ee(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&ee(m,"TO",u.ia),ee(m,"TYPE","xmlhttp"),js(u,m),u.u&&u.o&&ks(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Us(Le(m)),v.u=null,v.R=!0,tr(v,u)}r.Va=function(){this.C!=null&&(this.C=null,zr(this),qs(this),be(19))};function Ia(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function _u(u,m){var v=null;if(u.g==m){Ia(u),Qo(u),u.g=null;var S=2}else if(wi(u.h,m))v=m.G,Po(u.h,m),S=1;else return;if(u.I!=0){if(m.o)if(S==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=u.D;S=Nr(),Ee(S,new Xn(S,v)),Oi(u)}else pu(u);else if(P=m.m,P==3||P==0&&m.X>0||!(S==1&&Ca(u,m)||S==2&&qs(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),P){case 1:xi(u,5);break;case 4:xi(u,10);break;case 3:xi(u,6);break;default:xi(u,2)}}}function vu(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function xi(u,m){if(u.j.info("Error code "+m),m==2){var v=_(u.bb,u),S=u.Ua;const P=!S;S=new Ln(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$e(S,"https"),Us(S),P?ui(S.toString(),v):Ho(S.toString(),v)}else be(2);u.I=0,u.l&&u.l.pa(m),Eu(u),wa(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function Eu(u){if(u.I=0,u.ja=[],u.l){const m=ko(u.h);(m.length!=0||u.i.length!=0)&&(it(u.ja,m),it(u.ja,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.oa()}}function Tu(u,m,v){var S=v instanceof Ln?Le(v):new Ln(v);if(S.g!="")m&&(S.g=m+"."+S.g),xr(S,S.u);else{var P=d.location;S=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const q=new Ln(null);S&&$e(q,S),m&&(q.g=m),P&&xr(q,P),v&&(q.h=v),S=q}return v=u.G,m=u.wa,v&&m&&ee(S,v,m),ee(S,"VER",u.ka),js(u,S),S}function Su(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new re(new Ii({ab:v})):new re(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}r=Au.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Br(){}Br.prototype.g=function(u,m){return new vn(u,m)};function vn(u,m){pe.call(this),this.g=new kr(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!w(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!w(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ir(this)}b(vn,pe),vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Yo(this.g)},vn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=bi(u),u=v);m.i.push(new Lt(m.Ya++,u)),m.I==3&&Oi(m)},vn.prototype.N=function(){this.g.l=null,delete this.j,Yo(this.g),delete this.g,vn.Z.N.call(this)};function bu(u){Ue.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const v in m){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}b(bu,Ue);function Ru(){_n.call(this),this.status=1}b(Ru,_n);function ir(u){this.g=u}b(ir,Au),ir.prototype.ra=function(){Ee(this.g,"a")},ir.prototype.qa=function(u){Ee(this.g,new bu(u))},ir.prototype.pa=function(u){Ee(this.g,new Ru)},ir.prototype.oa=function(){Ee(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,mT=function(){return new Br},dT=function(){return Nr()},fT=Te,tm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ji.NO_ERROR=0,Ji.TIMEOUT=8,Ji.HTTP_ERROR=6,zc=Ji,Ri.COMPLETE="complete",hT=Ri,Ki.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",pe.prototype.listen=pe.prototype.J,Ul=Ki,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,cT=re}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore",vv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mn.UNAUTHENTICATED=new mn(null),mn.GOOGLE_CREDENTIALS=new mn("google-credentials-uid"),mn.FIRST_PARTY=new mn("first-party-uid"),mn.MOCK_USER=new mn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Em("@firebase/firestore");function so(){return ha.logLevel}function ut(r,...t){if(ha.logLevel<=Ht.DEBUG){const i=t.map(Om);ha.debug(`Firestore (${Do}): ${r}`,...i)}}function br(r,...t){if(ha.logLevel<=Ht.ERROR){const i=t.map(Om);ha.error(`Firestore (${Do}): ${r}`,...i)}}function vo(r,...t){if(ha.logLevel<=Ht.WARN){const i=t.map(Om);ha.warn(`Firestore (${Do}): ${r}`,...i)}}function Om(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,gT(r,a,i)}function gT(r,t,i){let a=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw br(a),new Error(a)}function te(r,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||gT(t,l,a)}function Dt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends Cr{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(mn.UNAUTHENTICATED)))}shutdown(){}}class Dw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class Nw{constructor(t){this.t=t,this.currentUser=mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){te(this.o===void 0,42304);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let c=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Tr,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const y=c;t.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},g=y=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Tr)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(te(typeof a.accessToken=="string",31837,{l:a}),new pT(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return te(t===null||typeof t=="string",2055,{h:t}),new mn(t)}}class Ow{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xw{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new Ow(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(mn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mw{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yi(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){te(this.o===void 0,3512);const a=c=>{c.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,ut("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>a(c)))};const l=c=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(te(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Ev(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=Vw(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=t.charAt(l[c]%62))}return a}}function Ft(r,t){return r<t?-1:r>t?1:0}function em(r,t){const i=Math.min(r.length,t.length);for(let a=0;a<i;a++){const l=r.charAt(a),c=t.charAt(a);if(l!==c)return jd(l)===jd(c)?Ft(l,c):jd(l)?1:-1}return Ft(r.length,t.length)}const Uw=55296,Lw=57343;function jd(r){const t=r.charCodeAt(0);return t>=Uw&&t<=Lw}function Eo(r,t,i){return r.length===t.length&&r.every(((a,l)=>i(a,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="__name__";class ki{constructor(t,i,a){i===void 0?i=0:i>t.length&&St(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&St(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ki.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ki?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const c=ki.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Ft(t.length,i.length)}static compareSegments(t,i){const a=ki.isNumericId(t),l=ki.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ki.extractNumericId(t).compare(ki.extractNumericId(i)):em(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Es.fromString(t.substring(4,t.length-2))}}class me extends ki{construct(t,i,a){return new me(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(W.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new me(i)}static emptyPath(){return new me([])}}const Pw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends ki{construct(t,i,a){return new on(t,i,a)}static isValidIdentifier(t){return Pw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new on([Tv])}static fromServerFormat(t){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new dt(W.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new dt(W.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new dt(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=y,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(a+=g,l++):(c(),l++)}if(c(),d)throw new dt(W.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new on(i)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(me.fromString(t))}static fromName(t){return new _t(me.fromString(t).popFirst(5))}static empty(){return new _t(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&me.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return me.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new me(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r,t,i){if(!i)throw new dt(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function kw(r,t,i,a){if(t===!0&&a===!0)throw new dt(W.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function Sv(r){if(!_t.isDocumentKey(r))throw new dt(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Av(r){if(_t.isDocumentKey(r))throw new dt(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _T(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Mm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":St(12329,{type:typeof r})}function Rr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new dt(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Mm(r);throw new dt(W.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(r,t){const i={typeString:r};return t&&(i.value=t),i}function su(r,t){if(!_T(r))throw new dt(W.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,c="value"in t[a]?{value:t[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const d=r[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new dt(W.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=-62135596800,Rv=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(t){return ge.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*Rv);return new ge(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new dt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new dt(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<bv)throw new dt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rv}_compareTo(t){return this.seconds===t.seconds?Ft(this.nanoseconds,t.nanoseconds):Ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(su(t,ge._jsonSchema))return new ge(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-bv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:qe("string",ge._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{static fromTimestamp(t){return new Ct(t)}static min(){return new Ct(new ge(0,0))}static max(){return new Ct(new ge(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=-1;function zw(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Ct.fromTimestamp(a===1e9?new ge(i+1,0):new ge(i,a));return new Ss(l,_t.empty(),t)}function Bw(r){return new Ss(r.readTime,r.key,Ql)}class Ss{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Ss(Ct.min(),_t.empty(),Ql)}static max(){return new Ss(Ct.max(),_t.empty(),Ql)}}function jw(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=_t.comparator(r.documentKey,t.documentKey),i!==0?i:Ft(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==qw)throw r;ut("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&St(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new J(((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof J?i:J.resolve(i)}catch(i){return J.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):J.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):J.reject(i)}static resolve(t){return new J(((i,a)=>{i(t)}))}static reject(t){return new J(((i,a)=>{a(t)}))}static waitFor(t){return new J(((i,a)=>{let l=0,c=0,d=!1;t.forEach((g=>{++l,g.next((()=>{++c,d&&c===l&&i()}),(y=>a(y)))})),d=!0,c===l&&i()}))}static or(t){let i=J.resolve(!1);for(const a of t)i=i.next((l=>l?J.resolve(l):a()));return i}static forEach(t,i){const a=[];return t.forEach(((l,c)=>{a.push(i.call(this,l,c))})),this.waitFor(a)}static mapArray(t,i){return new J(((a,l)=>{const c=t.length,d=new Array(c);let g=0;for(let y=0;y<c;y++){const _=y;i(t[_]).next((A=>{d[_]=A,++g,g===c&&a(d)}),(A=>l(A)))}}))}static doWhile(t,i){return new J(((a,l)=>{const c=()=>{t()===!0?i().next((()=>{c()}),l):a()};c()}))}}function Fw(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Oo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ph.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=-1;function yh(r){return r==null}function Wc(r){return r===0&&1/r==-1/0}function Gw(r){return typeof r=="number"&&Number.isInteger(r)&&!Wc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="";function Yw(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=wv(t)),t=Xw(r.get(i),t);return wv(t)}function Xw(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case vT:i+="";break;default:i+=c}}return i}function wv(r){return r+vT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function Ds(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function ET(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,i){this.comparator=t,this.root=i||an.EMPTY}insert(t,i){return new Se(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,an.BLACK,null,null))}remove(t){return new Se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,an.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Oc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Oc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Oc(this.root,t,this.comparator,!0)}}class Oc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?a(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class an{constructor(t,i,a,l,c){this.key=t,this.value=i,this.color=a??an.RED,this.left=l??an.EMPTY,this.right=c??an.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,c){return new an(t??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return an.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return an.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw St(43730,{key:this.key,value:this.value});if(this.right.isRed())throw St(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw St(27949);return t+(this.isRed()?0:1)}}an.EMPTY=null,an.RED=!0,an.BLACK=!1;an.EMPTY=new class{constructor(){this.size=0}get key(){throw St(57766)}get value(){throw St(16141)}get color(){throw St(16727)}get left(){throw St(29726)}get right(){throw St(36894)}copy(t,i,a,l,c){return this}insert(t,i,a){return new an(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.comparator=t,this.data=new Se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Iv(this.data.getIterator())}getIteratorFrom(t){return new Iv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Qe(this.comparator);return i.data=t,i}}class Iv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.fields=t,t.sort(on.comparator)}static empty(){return new Fn([])}unionWith(t){let i=new Qe(on.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Fn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Eo(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new TT("Invalid base64 string: "+c):c}})(t);return new un(i)}static fromUint8Array(t){const i=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(t);return new un(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}un.EMPTY_BYTE_STRING=new un("");const Qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(r){if(te(!!r,39018),typeof r=="string"){let t=0;const i=Qw.exec(r);if(te(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Me(r.seconds),nanos:Me(r.nanos)}}function Me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bs(r){return typeof r=="string"?un.fromBase64String(r):un.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="server_timestamp",AT="__type__",bT="__previous_value__",RT="__local_write_time__";function Um(r){return(r?.mapValue?.fields||{})[AT]?.stringValue===ST}function _h(r){const t=r.mapValue.fields[bT];return Um(t)?_h(t):t}function Kl(r){const t=As(r.mapValue.fields[RT].timestampValue);return new ge(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,i,a,l,c,d,g,y,_,A){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=A}}const th="(default)";class $l{constructor(t,i){this.projectId=t,this.database=i||th}static empty(){return new $l("","")}get isDefaultDatabase(){return this.database===th}isEqual(t){return t instanceof $l&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="__type__",$w="__max__",xc={mapValue:{}},CT="__vector__",eh="value";function Rs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Um(r)?4:Jw(r)?9007199254740991:Zw(r)?10:11:St(28295,{value:r})}function Gi(r,t){if(r===t)return!0;const i=Rs(r);if(i!==Rs(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Kl(r).isEqual(Kl(t));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=As(l.timestampValue),g=As(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,c){return bs(l.bytesValue).isEqual(bs(c.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,c){return Me(l.geoPointValue.latitude)===Me(c.geoPointValue.latitude)&&Me(l.geoPointValue.longitude)===Me(c.geoPointValue.longitude)})(r,t);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return Me(l.integerValue)===Me(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=Me(l.doubleValue),g=Me(c.doubleValue);return d===g?Wc(d)===Wc(g):isNaN(d)&&isNaN(g)}return!1})(r,t);case 9:return Eo(r.arrayValue.values||[],t.arrayValue.values||[],Gi);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},g=c.mapValue.fields||{};if(Cv(d)!==Cv(g))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(g[y]===void 0||!Gi(d[y],g[y])))return!1;return!0})(r,t);default:return St(52216,{left:r})}}function Zl(r,t){return(r.values||[]).find((i=>Gi(i,t)))!==void 0}function To(r,t){if(r===t)return 0;const i=Rs(r),a=Rs(t);if(i!==a)return Ft(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ft(r.booleanValue,t.booleanValue);case 2:return(function(c,d){const g=Me(c.integerValue||c.doubleValue),y=Me(d.integerValue||d.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1})(r,t);case 3:return Dv(r.timestampValue,t.timestampValue);case 4:return Dv(Kl(r),Kl(t));case 5:return em(r.stringValue,t.stringValue);case 6:return(function(c,d){const g=bs(c),y=bs(d);return g.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(c,d){const g=c.split("/"),y=d.split("/");for(let _=0;_<g.length&&_<y.length;_++){const A=Ft(g[_],y[_]);if(A!==0)return A}return Ft(g.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(c,d){const g=Ft(Me(c.latitude),Me(d.latitude));return g!==0?g:Ft(Me(c.longitude),Me(d.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Nv(r.arrayValue,t.arrayValue);case 10:return(function(c,d){const g=c.fields||{},y=d.fields||{},_=g[eh]?.arrayValue,A=y[eh]?.arrayValue,b=Ft(_?.values?.length||0,A?.values?.length||0);return b!==0?b:Nv(_,A)})(r.mapValue,t.mapValue);case 11:return(function(c,d){if(c===xc.mapValue&&d===xc.mapValue)return 0;if(c===xc.mapValue)return 1;if(d===xc.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),_=d.fields||{},A=Object.keys(_);y.sort(),A.sort();for(let b=0;b<y.length&&b<A.length;++b){const N=em(y[b],A[b]);if(N!==0)return N;const H=To(g[y[b]],_[A[b]]);if(H!==0)return H}return Ft(y.length,A.length)})(r.mapValue,t.mapValue);default:throw St(23264,{he:i})}}function Dv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ft(r,t);const i=As(r),a=As(t),l=Ft(i.seconds,a.seconds);return l!==0?l:Ft(i.nanos,a.nanos)}function Nv(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=To(i[l],a[l]);if(c)return c}return Ft(i.length,a.length)}function So(r){return nm(r)}function nm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const a=As(i);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return bs(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return _t.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=nm(c);return a+"]"})(r.arrayValue):"mapValue"in r?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const d of a)c?c=!1:l+=",",l+=`${d}:${nm(i.fields[d])}`;return l+"}"})(r.mapValue):St(61005,{value:r})}function Bc(r){switch(Rs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_h(r);return t?16+Bc(t):16;case 5:return 2*r.stringValue.length;case 6:return bs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,c)=>l+Bc(c)),0)})(r.arrayValue);case 10:case 11:return(function(a){let l=0;return Ds(a.fields,((c,d)=>{l+=c.length+Bc(d)})),l})(r.mapValue);default:throw St(13486,{value:r})}}function im(r){return!!r&&"integerValue"in r}function Lm(r){return!!r&&"arrayValue"in r}function Ov(r){return!!r&&"nullValue"in r}function xv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jc(r){return!!r&&"mapValue"in r}function Zw(r){return(r?.mapValue?.fields||{})[wT]?.stringValue===CT}function jl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ds(r.mapValue.fields,((i,a)=>t.mapValue.fields[i]=jl(a))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=jl(r.arrayValue.values[i]);return t}return{...r}}function Jw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.value=t}static empty(){return new Vn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!jc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=jl(i)}setAll(t){let i=on.emptyPath(),a={},l=[];t.forEach(((d,g)=>{if(!i.isImmediateParentOf(g)){const y=this.getFieldsMap(i);this.applyChanges(y,a,l),a={},l=[],i=g.popLast()}d?a[g.lastSegment()]=jl(d):l.push(g.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(t){const i=this.field(t.popLast());jc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Gi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];jc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Ds(i,((l,c)=>t[l]=c));for(const l of a)delete t[l]}clone(){return new Vn(jl(this.value))}}function IT(r){const t=[];return Ds(r.fields,((i,a)=>{const l=new on([i]);if(jc(a)){const c=IT(a.mapValue).fields;if(c.length===0)t.push(l);else for(const d of c)t.push(l.child(d))}else t.push(l)})),new Fn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,i,a,l,c,d,g){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(t){return new gn(t,0,Ct.min(),Ct.min(),Ct.min(),Vn.empty(),0)}static newFoundDocument(t,i,a,l){return new gn(t,1,i,Ct.min(),a,l,0)}static newNoDocument(t,i){return new gn(t,2,i,Ct.min(),Ct.min(),Vn.empty(),0)}static newUnknownDocument(t,i){return new gn(t,3,i,Ct.min(),Ct.min(),Vn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,i){this.position=t,this.inclusive=i}}function Mv(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?a=_t.comparator(_t.fromName(d.referenceValue),i.key):a=To(d,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function Vv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Gi(r.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,i="asc"){this.field=t,this.dir=i}}function Ww(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{}class Ye extends DT{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new e2(t,i,a):i==="array-contains"?new r2(t,a):i==="in"?new s2(t,a):i==="not-in"?new a2(t,a):i==="array-contains-any"?new o2(t,a):new Ye(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new n2(t,a):new i2(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(To(i,this.value)):i!==null&&Rs(this.value)===Rs(i)&&this.matchesComparison(To(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return St(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yi extends DT{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new Yi(t,i)}matches(t){return NT(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function NT(r){return r.op==="and"}function OT(r){return t2(r)&&NT(r)}function t2(r){for(const t of r.filters)if(t instanceof Yi)return!1;return!0}function rm(r){if(r instanceof Ye)return r.field.canonicalString()+r.op.toString()+So(r.value);if(OT(r))return r.filters.map((t=>rm(t))).join(",");{const t=r.filters.map((i=>rm(i))).join(",");return`${r.op}(${t})`}}function xT(r,t){return r instanceof Ye?(function(a,l){return l instanceof Ye&&a.op===l.op&&a.field.isEqual(l.field)&&Gi(a.value,l.value)})(r,t):r instanceof Yi?(function(a,l){return l instanceof Yi&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((c,d,g)=>c&&xT(d,l.filters[g])),!0):!1})(r,t):void St(19439)}function MT(r){return r instanceof Ye?(function(i){return`${i.field.canonicalString()} ${i.op} ${So(i.value)}`})(r):r instanceof Yi?(function(i){return i.op.toString()+" {"+i.getFilters().map(MT).join(" ,")+"}"})(r):"Filter"}class e2 extends Ye{constructor(t,i,a){super(t,i,a),this.key=_t.fromName(a.referenceValue)}matches(t){const i=_t.comparator(t.key,this.key);return this.matchesComparison(i)}}class n2 extends Ye{constructor(t,i){super(t,"in",i),this.keys=VT("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class i2 extends Ye{constructor(t,i){super(t,"not-in",i),this.keys=VT("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function VT(r,t){return(t.arrayValue?.values||[]).map((i=>_t.fromName(i.referenceValue)))}class r2 extends Ye{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return Lm(i)&&Zl(i.arrayValue,this.value)}}class s2 extends Ye{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Zl(this.value.arrayValue,i)}}class a2 extends Ye{constructor(t,i){super(t,"not-in",i)}matches(t){if(Zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Zl(this.value.arrayValue,i)}}class o2 extends Ye{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!Lm(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Zl(this.value.arrayValue,a)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(t,i=null,a=[],l=[],c=null,d=null,g=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=d,this.endAt=g,this.Te=null}}function Uv(r,t=null,i=[],a=[],l=null,c=null,d=null){return new l2(r,t,i,a,l,c,d)}function Pm(r){const t=Dt(r);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>rm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(c){return c.field.canonicalString()+c.dir})(a))).join(","),yh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>So(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>So(a))).join(",")),t.Te=i}return t.Te}function km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Ww(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!xT(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Vv(r.startAt,t.startAt)&&Vv(r.endAt,t.endAt)}function sm(r){return _t.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,i=null,a=[],l=[],c=null,d="F",g=null,y=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function u2(r,t,i,a,l,c,d,g){return new vh(r,t,i,a,l,c,d,g)}function zm(r){return new vh(r)}function Lv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function c2(r){return r.collectionGroup!==null}function ql(r){const t=Dt(r);if(t.Ie===null){t.Ie=[];const i=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),i.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new Qe(on.comparator);return d.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(g=g.add(_.field))}))})),g})(t).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new ih(c,a))})),i.has(on.keyField().canonicalString())||t.Ie.push(new ih(on.keyField(),a))}return t.Ie}function ji(r){const t=Dt(r);return t.Ee||(t.Ee=h2(t,ql(r))),t.Ee}function h2(r,t){if(r.limitType==="F")return Uv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new ih(l.field,c)}));const i=r.endAt?new nh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new nh(r.startAt.position,r.startAt.inclusive):null;return Uv(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function am(r,t,i){return new vh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Eh(r,t){return km(ji(r),ji(t))&&r.limitType===t.limitType}function UT(r){return`${Pm(ji(r))}|lt:${r.limitType}`}function ao(r){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>MT(l))).join(", ")}]`),yh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>So(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>So(l))).join(",")),`Target(${a})`})(ji(r))}; limitType=${r.limitType})`}function Th(r,t){return t.isFoundDocument()&&(function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):_t.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)})(r,t)&&(function(a,l){for(const c of ql(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,t)&&(function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0})(r,t)&&(function(a,l){return!(a.startAt&&!(function(d,g,y){const _=Mv(d,g,y);return d.inclusive?_<=0:_<0})(a.startAt,ql(a),l)||a.endAt&&!(function(d,g,y){const _=Mv(d,g,y);return d.inclusive?_>=0:_>0})(a.endAt,ql(a),l))})(r,t)}function f2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function LT(r){return(t,i)=>{let a=!1;for(const l of ql(r)){const c=d2(l,t,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function d2(r,t,i){const a=r.field.isKeyField()?_t.comparator(t.key,i.key):(function(c,d,g){const y=d.data.field(c),_=g.data.field(c);return y!==null&&_!==null?To(y,_):St(42886)})(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return St(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Ds(this.inner,((i,a)=>{for(const[l,c]of a)t(l,c)}))}isEmpty(){return ET(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new Se(_t.comparator);function wr(){return m2}const PT=new Se(_t.comparator);function Ll(...r){let t=PT;for(const i of r)t=t.insert(i.key,i);return t}function kT(r){let t=PT;return r.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function aa(){return Hl()}function zT(){return Hl()}function Hl(){return new ma((r=>r.toString()),((r,t)=>r.isEqual(t)))}const g2=new Se(_t.comparator),p2=new Qe(_t.comparator);function Gt(...r){let t=p2;for(const i of r)t=t.add(i);return t}const y2=new Qe(Ft);function _2(){return y2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(t)?"-0":t}}function BT(r){return{integerValue:""+r}}function v2(r,t){return Gw(t)?BT(t):Bm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function E2(r,t,i){return r instanceof rh?(function(l,c){const d={fields:{[AT]:{stringValue:ST},[RT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Um(c)&&(c=_h(c)),c&&(d.fields[bT]=c),{mapValue:d}})(i,t):r instanceof Jl?qT(r,t):r instanceof Wl?HT(r,t):(function(l,c){const d=jT(l,c),g=Pv(d)+Pv(l.Ae);return im(d)&&im(l.Ae)?BT(g):Bm(l.serializer,g)})(r,t)}function T2(r,t,i){return r instanceof Jl?qT(r,t):r instanceof Wl?HT(r,t):i}function jT(r,t){return r instanceof sh?(function(a){return im(a)||(function(c){return!!c&&"doubleValue"in c})(a)})(t)?t:{integerValue:0}:null}class rh extends Sh{}class Jl extends Sh{constructor(t){super(),this.elements=t}}function qT(r,t){const i=FT(t);for(const a of r.elements)i.some((l=>Gi(l,a)))||i.push(a);return{arrayValue:{values:i}}}class Wl extends Sh{constructor(t){super(),this.elements=t}}function HT(r,t){let i=FT(t);for(const a of r.elements)i=i.filter((l=>!Gi(l,a)));return{arrayValue:{values:i}}}class sh extends Sh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Pv(r){return Me(r.integerValue||r.doubleValue)}function FT(r){return Lm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function S2(r,t){return r.field.isEqual(t.field)&&(function(a,l){return a instanceof Jl&&l instanceof Jl||a instanceof Wl&&l instanceof Wl?Eo(a.elements,l.elements,Gi):a instanceof sh&&l instanceof sh?Gi(a.Ae,l.Ae):a instanceof rh&&l instanceof rh})(r.transform,t.transform)}class A2{constructor(t,i){this.version=t,this.transformResults=i}}class vi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new vi}static exists(t){return new vi(void 0,t)}static updateTime(t){return new vi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ah{}function GT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new jm(r.key,vi.none()):new au(r.key,r.data,vi.none());{const i=r.data,a=Vn.empty();let l=new Qe(on.comparator);for(let c of t.fields)if(!l.has(c)){let d=i.field(c);d===null&&c.length>1&&(c=c.popLast(),d=i.field(c)),d===null?a.delete(c):a.set(c,d),l=l.add(c)}return new Ns(r.key,a,new Fn(l.toArray()),vi.none())}}function b2(r,t,i){r instanceof au?(function(l,c,d){const g=l.value.clone(),y=zv(l.fieldTransforms,c,d.transformResults);g.setAll(y),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,t,i):r instanceof Ns?(function(l,c,d){if(!qc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const g=zv(l.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(YT(l)),y.setAll(g),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()})(r,t,i):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Fl(r,t,i,a){return r instanceof au?(function(c,d,g,y){if(!qc(c.precondition,d))return g;const _=c.value.clone(),A=Bv(c.fieldTransforms,y,d);return _.setAll(A),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null})(r,t,i,a):r instanceof Ns?(function(c,d,g,y){if(!qc(c.precondition,d))return g;const _=Bv(c.fieldTransforms,y,d),A=d.data;return A.setAll(YT(c)),A.setAll(_),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((b=>b.field)))})(r,t,i,a):(function(c,d,g){return qc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g})(r,t,i)}function R2(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),c=jT(a.transform,l||null);c!=null&&(i===null&&(i=Vn.empty()),i.set(a.field,c))}return i||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&Eo(a,l,((c,d)=>S2(c,d)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class au extends Ah{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Ns extends Ah{constructor(t,i,a,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function YT(r){const t=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}})),t}function zv(r,t,i){const a=new Map;te(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const c=r[l],d=c.transform,g=t.data.field(c.field);a.set(c.field,T2(d,g,i[l]))}return a}function Bv(r,t,i){const a=new Map;for(const l of r){const c=l.transform,d=i.data.field(l.field);a.set(l.field,E2(c,d,t))}return a}class jm extends Ah{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w2 extends Ah{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&b2(c,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Fl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Fl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=zT();return this.mutations.forEach((l=>{const c=t.get(l.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=i.has(l.key)?null:g;const y=GT(d,g);y!==null&&a.set(l.key,y),d.isValidDocument()||d.convertToNoDocument(Ct.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Gt())}isEqual(t){return this.batchId===t.batchId&&Eo(this.mutations,t.mutations,((i,a)=>kv(i,a)))&&Eo(this.baseMutations,t.baseMutations,((i,a)=>kv(i,a)))}}class qm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){te(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=(function(){return g2})();const c=t.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,a[d].version);return new qm(t,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Qt;function N2(r){switch(r){case W.OK:return St(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return St(15467,{code:r})}}function XT(r){if(r===void 0)return br("GRPC error has no .code"),W.UNKNOWN;switch(r){case je.OK:return W.OK;case je.CANCELLED:return W.CANCELLED;case je.UNKNOWN:return W.UNKNOWN;case je.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case je.INTERNAL:return W.INTERNAL;case je.UNAVAILABLE:return W.UNAVAILABLE;case je.UNAUTHENTICATED:return W.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case je.NOT_FOUND:return W.NOT_FOUND;case je.ALREADY_EXISTS:return W.ALREADY_EXISTS;case je.PERMISSION_DENIED:return W.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case je.ABORTED:return W.ABORTED;case je.OUT_OF_RANGE:return W.OUT_OF_RANGE;case je.UNIMPLEMENTED:return W.UNIMPLEMENTED;case je.DATA_LOSS:return W.DATA_LOSS;default:return St(39323,{code:r})}}(Qt=je||(je={}))[Qt.OK=0]="OK",Qt[Qt.CANCELLED=1]="CANCELLED",Qt[Qt.UNKNOWN=2]="UNKNOWN",Qt[Qt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qt[Qt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qt[Qt.NOT_FOUND=5]="NOT_FOUND",Qt[Qt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qt[Qt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qt[Qt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qt[Qt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qt[Qt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qt[Qt.ABORTED=10]="ABORTED",Qt[Qt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qt[Qt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qt[Qt.INTERNAL=13]="INTERNAL",Qt[Qt.UNAVAILABLE=14]="UNAVAILABLE",Qt[Qt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Es([4294967295,4294967295],0);function jv(r){const t=O2().encode(r),i=new uT;return i.update(t),new Uint8Array(i.digest())}function qv(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Es([i,a],0),new Es([l,c],0)]}class Hm{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Pl(`Invalid padding: ${i}`);if(a<0)throw new Pl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Es.fromNumber(this.ge)}ye(t,i,a){let l=t.add(i.multiply(Es.fromNumber(a)));return l.compare(x2)===1&&(l=new Es([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=jv(t),[a,l]=qv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);if(!this.we(d))return!1}return!0}static create(t,i,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new Hm(c,l,i);return a.forEach((g=>d.insert(g))),d}insert(t){if(this.ge===0)return;const i=jv(t),[a,l]=qv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,i,a,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const l=new Map;return l.set(t,ou.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new bh(Ct.min(),l,new Se(Ft),wr(),Gt())}}class ou{constructor(t,i,a,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new ou(a,i,Gt(),Gt(),Gt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,i,a,l){this.be=t,this.removedTargetIds=i,this.key=a,this.De=l}}class QT{constructor(t,i){this.targetId=t,this.Ce=i}}class KT{constructor(t,i,a=un.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=l}}class Hv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=un.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Gt(),i=Gt(),a=Gt();return this.Fe.forEach(((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:a=a.add(l);break;default:St(38017,{changeType:c})}})),new ou(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class M2{constructor(t){this.Ge=t,this.ze=new Map,this.je=wr(),this.Je=Mc(),this.He=Mc(),this.Ye=new Se(Ft)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:St(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,l)=>{this.rt(l)&&i(l)}))}st(t){const i=t.targetId,a=t.Ce.count,l=this.ot(i);if(l){const c=l.target;if(sm(c))if(a===0){const d=new _t(c.path);this.et(i,d,gn.newNoDocument(d,Ct.min()))}else te(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const g=this.ut(t),y=g?this.ct(g,t,d):1;if(y!==0){this.it(i);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,_)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=i;let d,g;try{d=bs(a).toUint8Array()}catch(y){if(y instanceof TT)return vo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{g=new Hm(d,l,c)}catch(y){return vo(y instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return g.ge===0?null:g}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let l=0;return a.forEach((c=>{const d=this.Ge.ht(),g=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.et(i,c,null),l++)})),l}Tt(t){const i=new Map;this.ze.forEach(((c,d)=>{const g=this.ot(d);if(g){if(c.current&&sm(g.target)){const y=new _t(g.target.path);this.It(y).has(d)||this.Et(d,y)||this.et(d,y,gn.newNoDocument(y,t))}c.Be&&(i.set(d,c.ke()),c.qe())}}));let a=Gt();this.He.forEach(((c,d)=>{let g=!0;d.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(a=a.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(t)));const l=new bh(t,i,this.Ye,this.je,a);return this.je=wr(),this.Je=Mc(),this.He=Mc(),this.Ye=new Se(Ft),l}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,i)?l.Qe(i,1):l.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Hv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Qe(Ft),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Qe(Ft),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||ut("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Hv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Mc(){return new Se(_t.comparator)}function Fv(){return new Se(_t.comparator)}const V2={asc:"ASCENDING",desc:"DESCENDING"},U2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L2={and:"AND",or:"OR"};class P2{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function om(r,t){return r.useProto3Json||yh(t)?t:{value:t}}function ah(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $T(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function k2(r,t){return ah(r,t.toTimestamp())}function qi(r){return te(!!r,49232),Ct.fromTimestamp((function(i){const a=As(i);return new ge(a.seconds,a.nanos)})(r))}function Fm(r,t){return lm(r,t).canonicalString()}function lm(r,t){const i=(function(l){return new me(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?i:i.child(t)}function ZT(r){const t=me.fromString(r);return te(n0(t),10190,{key:t.toString()}),t}function um(r,t){return Fm(r.databaseId,t.path)}function qd(r,t){const i=ZT(t);if(i.get(1)!==r.databaseId.projectId)throw new dt(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new dt(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new _t(WT(i))}function JT(r,t){return Fm(r.databaseId,t)}function z2(r){const t=ZT(r);return t.length===4?me.emptyPath():WT(t)}function cm(r){return new me(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function WT(r){return te(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gv(r,t,i){return{name:um(r,t),fields:i.value.mapValue.fields}}function B2(r,t){let i;if("targetChange"in t){t.targetChange;const a=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:St(39313,{state:_})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=(function(_,A){return _.useProto3Json?(te(A===void 0||typeof A=="string",58123),un.fromBase64String(A||"")):(te(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),un.fromUint8Array(A||new Uint8Array))})(r,t.targetChange.resumeToken),d=t.targetChange.cause,g=d&&(function(_){const A=_.code===void 0?W.UNKNOWN:XT(_.code);return new dt(A,_.message||"")})(d);i=new KT(a,l,c,g||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=qd(r,a.document.name),c=qi(a.document.updateTime),d=a.document.createTime?qi(a.document.createTime):Ct.min(),g=new Vn({mapValue:{fields:a.document.fields}}),y=gn.newFoundDocument(l,c,d,g),_=a.targetIds||[],A=a.removedTargetIds||[];i=new Hc(_,A,y.key,y)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=qd(r,a.document),c=a.readTime?qi(a.readTime):Ct.min(),d=gn.newNoDocument(l,c),g=a.removedTargetIds||[];i=new Hc([],g,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=qd(r,a.document),c=a.removedTargetIds||[];i=new Hc([],c,l,null)}else{if(!("filter"in t))return St(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,d=new D2(l,c),g=a.targetId;i=new QT(g,d)}}return i}function j2(r,t){let i;if(t instanceof au)i={update:Gv(r,t.key,t.value)};else if(t instanceof jm)i={delete:um(r,t.key)};else if(t instanceof Ns)i={update:Gv(r,t.key,t.data),updateMask:$2(t.fieldMask)};else{if(!(t instanceof w2))return St(16599,{Vt:t.type});i={verify:um(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(c,d){const g=d.transform;if(g instanceof rh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Jl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Wl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof sh)return{fieldPath:d.field.canonicalString(),increment:g.Ae};throw St(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:k2(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:St(27497)})(r,t.precondition)),i}function q2(r,t){return r&&r.length>0?(te(t!==void 0,14353),r.map((i=>(function(l,c){let d=l.updateTime?qi(l.updateTime):qi(c);return d.isEqual(Ct.min())&&(d=qi(c)),new A2(d,l.transformResults||[])})(i,t)))):[]}function H2(r,t){return{documents:[JT(r,t.path)]}}function F2(r,t){const i={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=JT(r,l);const c=(function(_){if(_.length!==0)return e0(Yi.create(_,"and"))})(t.filters);c&&(i.structuredQuery.where=c);const d=(function(_){if(_.length!==0)return _.map((A=>(function(N){return{field:oo(N.field),direction:X2(N.dir)}})(A)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const g=om(r,t.limit);return g!==null&&(i.structuredQuery.limit=g),t.startAt&&(i.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(t.endAt)),{ft:i,parent:l}}function G2(r){let t=z2(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){te(a===1,65062);const A=i.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];i.where&&(c=(function(b){const N=t0(b);return N instanceof Yi&&OT(N)?N.getFilters():[N]})(i.where));let d=[];i.orderBy&&(d=(function(b){return b.map((N=>(function(it){return new ih(lo(it.field),(function(nt){switch(nt){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(it.direction))})(N)))})(i.orderBy));let g=null;i.limit&&(g=(function(b){let N;return N=typeof b=="object"?b.value:b,yh(N)?null:N})(i.limit));let y=null;i.startAt&&(y=(function(b){const N=!!b.before,H=b.values||[];return new nh(H,N)})(i.startAt));let _=null;return i.endAt&&(_=(function(b){const N=!b.before,H=b.values||[];return new nh(H,N)})(i.endAt)),u2(t,l,d,c,g,"F",y,_)}function Y2(r,t){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return St(28987,{purpose:l})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function t0(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=lo(i.unaryFilter.field);return Ye.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=lo(i.unaryFilter.field);return Ye.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=lo(i.unaryFilter.field);return Ye.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=lo(i.unaryFilter.field);return Ye.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return St(61313);default:return St(60726)}})(r):r.fieldFilter!==void 0?(function(i){return Ye.create(lo(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return St(58110);default:return St(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return Yi.create(i.compositeFilter.filters.map((a=>t0(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return St(1026)}})(i.compositeFilter.op))})(r):St(30097,{filter:r})}function X2(r){return V2[r]}function Q2(r){return U2[r]}function K2(r){return L2[r]}function oo(r){return{fieldPath:r.canonicalString()}}function lo(r){return on.fromServerFormat(r.fieldPath)}function e0(r){return r instanceof Ye?(function(i){if(i.op==="=="){if(xv(i.value))return{unaryFilter:{field:oo(i.field),op:"IS_NAN"}};if(Ov(i.value))return{unaryFilter:{field:oo(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(xv(i.value))return{unaryFilter:{field:oo(i.field),op:"IS_NOT_NAN"}};if(Ov(i.value))return{unaryFilter:{field:oo(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(i.field),op:Q2(i.op),value:i.value}}})(r):r instanceof Yi?(function(i){const a=i.getFilters().map((l=>e0(l)));return a.length===1?a[0]:{compositeFilter:{op:K2(i.op),filters:a}}})(r):St(54877,{filter:r})}function $2(r){const t=[];return r.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function n0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,i,a,l,c=Ct.min(),d=Ct.min(),g=un.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=g,this.expectedCount=y}withSequenceNumber(t){return new gs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(t){this.yt=t}}function J2(r){const t=G2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?am(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.Cn=new tC}addToCollectionParentIndex(t,i){return this.Cn.add(i),J.resolve()}getCollectionParents(t,i){return J.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return J.resolve()}deleteFieldIndex(t,i){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,i){return J.resolve()}getDocumentsMatchingTarget(t,i){return J.resolve(null)}getIndexType(t,i){return J.resolve(0)}getFieldIndexes(t,i){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,i){return J.resolve(Ss.min())}getMinOffsetFromCollectionGroup(t,i){return J.resolve(Ss.min())}updateCollectionGroup(t,i,a){return J.resolve()}updateIndexEntries(t,i){return J.resolve()}}class tC{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Qe(me.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Qe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i0=41943040;class Mn{static withCacheSize(t){return new Mn(t,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.DEFAULT_COLLECTION_PERCENTILE=10,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mn.DEFAULT=new Mn(i0,Mn.DEFAULT_COLLECTION_PERCENTILE,Mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mn.DISABLED=new Mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ao(0)}static cr(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="LruGarbageCollector",eC=1048576;function Qv([r,t],[i,a]){const l=Ft(r,i);return l===0?Ft(t,a):l}class nC{constructor(t){this.Ir=t,this.buffer=new Qe(Qv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Qv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class iC{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){ut(Xv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Oo(i)?ut(Xv,"Ignoring IndexedDB error during garbage collection: ",i):await No(i)}await this.Vr(3e5)}))}}class rC{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return J.resolve(ph.ce);const a=new nC(i);return this.mr.forEachTarget(t,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ut("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Yv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(ut("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,c,d,g,y,_;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(ut("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),l=this.params.maximumSequenceNumbersToCollect):l=b,d=Date.now(),this.nthSequenceNumber(t,l)))).next((b=>(a=b,g=Date.now(),this.removeTargets(t,a,i)))).next((b=>(c=b,y=Date.now(),this.removeOrphanedDocuments(t,a)))).next((b=>(_=Date.now(),so()<=Ht.DEBUG&&ut("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(g-d)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${b} documents in `+(_-y)+`ms
Total Duration: ${_-A}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:b}))))}}function sC(r,t){return new rC(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.changes=new ma((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,gn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?J.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(t,i)))).next((l=>(a!==null&&Fl(a.mutation,l,Fn.empty(),ge.now()),l)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Gt()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Gt()){const l=aa();return this.populateOverlays(t,l,i).next((()=>this.computeViews(t,i,l,a).next((c=>{let d=Ll();return c.forEach(((g,y)=>{d=d.insert(g,y.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=aa();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Gt())))}populateOverlays(t,i,a){const l=[];return a.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(t,l).next((c=>{c.forEach(((d,g)=>{i.set(d,g)}))}))}computeViews(t,i,a,l){let c=wr();const d=Hl(),g=(function(){return Hl()})();return i.forEach(((y,_)=>{const A=a.get(_.key);l.has(_.key)&&(A===void 0||A.mutation instanceof Ns)?c=c.insert(_.key,_):A!==void 0?(d.set(_.key,A.mutation.getFieldMask()),Fl(A.mutation,_,A.mutation.getFieldMask(),ge.now())):d.set(_.key,Fn.empty())})),this.recalculateAndSaveOverlays(t,c).next((y=>(y.forEach(((_,A)=>d.set(_,A))),i.forEach(((_,A)=>g.set(_,new oC(A,d.get(_)??null)))),g)))}recalculateAndSaveOverlays(t,i){const a=Hl();let l=new Se(((d,g)=>d-g)),c=Gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const g of d)g.keys().forEach((y=>{const _=i.get(y);if(_===null)return;let A=a.get(y)||Fn.empty();A=g.applyToLocalView(_,A),a.set(y,A);const b=(l.get(g.batchId)||Gt()).add(y);l=l.insert(g.batchId,b)}))})).next((()=>{const d=[],g=l.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),_=y.key,A=y.value,b=zT();A.forEach((N=>{if(!c.has(N)){const H=GT(i.get(N),a.get(N));H!==null&&b.set(N,H),c=c.add(N)}})),d.push(this.documentOverlayCache.saveOverlays(t,_,b))}return J.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,l){return(function(d){return _t.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):c2(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-c.size):J.resolve(aa());let g=Ql,y=c;return d.next((_=>J.forEach(_,((A,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),c.get(A)?J.resolve():this.remoteDocumentCache.getEntry(t,A).next((N=>{y=y.insert(A,N)}))))).next((()=>this.populateOverlays(t,_,c))).next((()=>this.computeViews(t,y,_,Gt()))).next((A=>({batchId:g,changes:kT(A)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new _t(i)).next((a=>{let l=Ll();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const c=i.collectionGroup;let d=Ll();return this.indexManager.getCollectionParents(t,c).next((g=>J.forEach(g,(y=>{const _=(function(b,N){return new vh(N,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(i,y.child(c));return this.getDocumentsMatchingCollectionQuery(t,_,a,l).next((A=>{A.forEach(((b,N)=>{d=d.insert(b,N)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,c,l)))).next((d=>{c.forEach(((y,_)=>{const A=_.getKey();d.get(A)===null&&(d=d.insert(A,gn.newInvalidDocument(A)))}));let g=Ll();return d.forEach(((y,_)=>{const A=c.get(y);A!==void 0&&Fl(A.mutation,_,Fn.empty(),ge.now()),Th(i,_)&&(g=g.insert(y,_))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return J.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:qi(l.createTime)}})(i)),J.resolve()}getNamedQuery(t,i){return J.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:J2(l.bundledQuery),readTime:qi(l.readTime)}})(i)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.overlays=new Se(_t.comparator),this.qr=new Map}getOverlay(t,i){return J.resolve(this.overlays.get(i))}getOverlays(t,i){const a=aa();return J.forEach(i,(l=>this.getOverlay(t,l).next((c=>{c!==null&&a.set(l,c)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((l,c)=>{this.St(t,i,c)})),J.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(a)),J.resolve()}getOverlaysForCollection(t,i,a){const l=aa(),c=i.length+1,d=new _t(i.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const y=g.getNext().value,_=y.getKey();if(!i.isPrefixOf(_.path))break;_.path.length===c&&y.largestBatchId>a&&l.set(y.getKey(),y)}return J.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let c=new Se(((_,A)=>_-A));const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===i&&_.largestBatchId>a){let A=c.get(_.largestBatchId);A===null&&(A=aa(),c=c.insert(_.largestBatchId,A)),A.set(_.getKey(),_)}}const g=aa(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,A)=>g.set(_,A))),!(g.size()>=l)););return J.resolve(g)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new I2(i,a));let c=this.qr.get(i);c===void 0&&(c=Gt(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.Qr=new Qe(Je.$r),this.Ur=new Qe(Je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Je(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Je(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new _t(new me([])),a=new Je(i,t),l=new Je(i,t+1),c=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new _t(new me([])),a=new Je(i,t),l=new Je(i,t+1);let c=Gt();return this.Ur.forEachInRange([a,l],(d=>{c=c.add(d.key)})),c}containsKey(t){const i=new Je(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Je{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return _t.comparator(t.key,i.key)||Ft(t.Yr,i.Yr)}static Kr(t,i){return Ft(t.Yr,i.Yr)||_t.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Je.$r)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new C2(c,i,a,l);this.mutationQueue.push(d);for(const g of l)this.Zr=this.Zr.add(new Je(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return J.resolve(d)}lookupMutationBatch(t,i){return J.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return J.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Vm:this.tr-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Je(i,0),l=new Je(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],(d=>{const g=this.Xr(d.Yr);c.push(g)})),J.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Qe(Ft);return i.forEach((l=>{const c=new Je(l,0),d=new Je(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(g=>{a=a.add(g.Yr)}))})),J.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let c=a;_t.isDocumentKey(c)||(c=c.child(""));const d=new Je(new _t(c),0);let g=new Qe(Ft);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!a.isPrefixOf(_)&&(_.length===l&&(g=g.add(y.Yr)),!0)}),d),J.resolve(this.ti(g))}ti(t){const i=[];return t.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(t,i){te(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return J.forEach(i.mutations,(l=>{const c=new Je(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Je(i,0),l=this.Zr.firstAfterOrEqual(a);return J.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(t){this.ri=t,this.docs=(function(){return new Se(_t.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return J.resolve(a?a.document.mutableCopy():gn.newInvalidDocument(i))}getEntries(t,i){let a=wr();return i.forEach((l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():gn.newInvalidDocument(l))})),J.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let c=wr();const d=i.path,g=new _t(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:_,value:{document:A}}=y.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||jw(Bw(A),a)<=0||(l.has(A.key)||Th(i,A))&&(c=c.insert(A.key,A.mutableCopy()))}return J.resolve(c)}getAllFromCollectionGroup(t,i,a,l){St(9500)}ii(t,i){return J.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new mC(this)}getSize(t){return J.resolve(this.size)}}class mC extends aC{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)})),J.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(t){this.persistence=t,this.si=new ma((i=>Pm(i)),km),this.lastRemoteSnapshotVersion=Ct.min(),this.highestTargetId=0,this.oi=0,this._i=new Gm,this.targetCount=0,this.ai=Ao.ur()}forEachTarget(t,i){return this.si.forEach(((a,l)=>i(l))),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),J.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new Ao(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,J.resolve()}updateTargetData(t,i){return this.Pr(i),J.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,i,a){let l=0;const c=[];return this.si.forEach(((d,g)=>{g.sequenceNumber<=i&&a.get(g.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)})),J.waitFor(c).next((()=>l))}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return J.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),J.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((d=>{c.push(l.markPotentiallyOrphaned(t,d))})),J.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),J.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return J.resolve(a)}containsKey(t,i){return J.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(t,i){this.ui={},this.overlays={},this.ci=new ph(0),this.li=!1,this.li=!0,this.hi=new hC,this.referenceDelegate=t(this),this.Pi=new gC(this),this.indexManager=new W2,this.remoteDocumentCache=(function(l){return new dC(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new Z2(i),this.Ii=new uC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new cC,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new fC(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){ut("MemoryPersistence","Starting transaction:",t);const l=new pC(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(t,i){return J.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class pC extends Hw{constructor(t){super(),this.currentSequenceNumber=t}}class Ym{constructor(t){this.persistence=t,this.Ri=new Gm,this.Vi=null}static mi(t){return new Ym(t)}get fi(){if(this.Vi)return this.Vi;throw St(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),J.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),J.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),J.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(a=>{const l=_t.fromPath(a);return this.gi(t,l).next((c=>{c||i.removeEntry(l,Ct.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return J.or([()=>J.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class oh{constructor(t,i){this.persistence=t,this.pi=new ma((a=>Yw(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=sC(this,i)}static mi(t,i){return new oh(t,i)}Ei(){}di(t){return J.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((l=>a+l))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return J.forEach(this.pi,((a,l)=>this.br(t,a,l).next((c=>c?J.resolve():i(l)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,i).next((g=>{g||(a++,c.removeEntry(d,Ct.min()))})))).next((()=>c.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),J.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),J.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),J.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=Bc(t.data.value)),i}br(t,i,a){return J.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return J.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Gt(),l=Gt();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Xm(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ZS()?8:Fw(pn())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const c={result:null};return this.ys(t,i).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(t,i,l,a).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new yC;return this.Ss(t,i,d).next((g=>{if(c.result=g,this.Vs)return this.bs(t,i,d,g.size)}))})).next((()=>c.result))}bs(t,i,a,l){return a.documentReadCount<this.fs?(so()<=Ht.DEBUG&&ut("QueryEngine","SDK will not create cache indexes for query:",ao(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(so()<=Ht.DEBUG&&ut("QueryEngine","Query:",ao(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(so()<=Ht.DEBUG&&ut("QueryEngine","The SDK decides to create cache indexes for query:",ao(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ji(i))):J.resolve())}ys(t,i){if(Lv(i))return J.resolve(null);let a=ji(i);return this.indexManager.getIndexType(t,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=am(i,null,"F"),a=ji(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((c=>{const d=Gt(...c);return this.ps.getDocuments(t,d).next((g=>this.indexManager.getMinOffset(t,a).next((y=>{const _=this.Ds(i,g);return this.Cs(i,_,d,y.readTime)?this.ys(t,am(i,null,"F")):this.vs(t,_,i,y)}))))})))))}ws(t,i,a,l){return Lv(i)||l.isEqual(Ct.min())?J.resolve(null):this.ps.getDocuments(t,a).next((c=>{const d=this.Ds(i,c);return this.Cs(i,d,a,l)?J.resolve(null):(so()<=Ht.DEBUG&&ut("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),ao(i)),this.vs(t,d,i,zw(l,Ql)).next((g=>g)))}))}Ds(t,i){let a=new Qe(LT(t));return i.forEach(((l,c)=>{Th(t,c)&&(a=a.add(c))})),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,i,a){return so()<=Ht.DEBUG&&ut("QueryEngine","Using full collection scan to execute query:",ao(i)),this.ps.getDocumentsMatchingQuery(t,i,Ss.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next((c=>(i.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="LocalStore",vC=3e8;class EC{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new Se(Ft),this.xs=new ma((c=>Pm(c)),km),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function TC(r,t,i,a){return new EC(r,t,i,a)}async function s0(r,t){const i=Dt(r);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((c=>(l=c,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((c=>{const d=[],g=[];let y=Gt();for(const _ of l){d.push(_.batchId);for(const A of _.mutations)y=y.add(A.key)}for(const _ of c){g.push(_.batchId);for(const A of _.mutations)y=y.add(A.key)}return i.localDocuments.getDocuments(a,y).next((_=>({Ls:_,removedBatchIds:d,addedBatchIds:g})))}))}))}function SC(r,t){const i=Dt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const l=t.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,y,_,A){const b=_.batch,N=b.keys();let H=J.resolve();return N.forEach((it=>{H=H.next((()=>A.getEntry(y,it))).next((et=>{const nt=_.docVersions.get(it);te(nt!==null,48541),et.version.compareTo(nt)<0&&(b.applyToRemoteDocument(et,_),et.isValidDocument()&&(et.setReadTime(_.commitVersion),A.addEntry(et)))}))})),H.next((()=>g.mutationQueue.removeMutationBatch(y,b)))})(i,a,t,c).next((()=>c.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(g){let y=Gt();for(let _=0;_<g.mutationResults.length;++_)g.mutationResults[_].transformResults.length>0&&(y=y.add(g.batch.mutations[_].key));return y})(t)))).next((()=>i.localDocuments.getDocuments(a,l)))}))}function a0(r){const t=Dt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function AC(r,t){const i=Dt(r),a=t.snapshotVersion;let l=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});l=i.Ms;const g=[];t.targetChanges.forEach(((A,b)=>{const N=l.get(b);if(!N)return;g.push(i.Pi.removeMatchingKeys(c,A.removedDocuments,b).next((()=>i.Pi.addMatchingKeys(c,A.addedDocuments,b))));let H=N.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(b)!==null?H=H.withResumeToken(un.EMPTY_BYTE_STRING,Ct.min()).withLastLimboFreeSnapshotVersion(Ct.min()):A.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(A.resumeToken,a)),l=l.insert(b,H),(function(et,nt,yt){return et.resumeToken.approximateByteSize()===0||nt.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=vC?!0:yt.addedDocuments.size+yt.modifiedDocuments.size+yt.removedDocuments.size>0})(N,H,A)&&g.push(i.Pi.updateTargetData(c,H))}));let y=wr(),_=Gt();if(t.documentUpdates.forEach((A=>{t.resolvedLimboDocuments.has(A)&&g.push(i.persistence.referenceDelegate.updateLimboDocument(c,A))})),g.push(bC(c,d,t.documentUpdates).next((A=>{y=A.ks,_=A.qs}))),!a.isEqual(Ct.min())){const A=i.Pi.getLastRemoteSnapshotVersion(c).next((b=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a)));g.push(A)}return J.waitFor(g).next((()=>d.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,y,_))).next((()=>y))})).then((c=>(i.Ms=l,c)))}function bC(r,t,i){let a=Gt(),l=Gt();return i.forEach((c=>a=a.add(c))),t.getEntries(r,a).next((c=>{let d=wr();return i.forEach(((g,y)=>{const _=c.get(g);y.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(g)),y.isNoDocument()&&y.version.isEqual(Ct.min())?(t.removeEntry(g,y.readTime),d=d.insert(g,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(y),d=d.insert(g,y)):ut(Qm,"Ignoring outdated watch update for ",g,". Current version:",_.version," Watch version:",y.version)})),{ks:d,qs:l}}))}function RC(r,t){const i=Dt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Vm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function wC(r,t){const i=Dt(r);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let l;return i.Pi.getTargetData(a,t).next((c=>c?(l=c,J.resolve(l)):i.Pi.allocateTargetId(a).next((d=>(l=new gs(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,l).next((()=>l)))))))})).then((a=>{const l=i.Ms.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function hm(r,t,i){const a=Dt(r),l=a.Ms.get(t),c=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",c,(d=>a.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!Oo(d))throw d;ut(Qm,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(l.target)}function Kv(r,t,i){const a=Dt(r);let l=Ct.min(),c=Gt();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(y,_,A){const b=Dt(y),N=b.xs.get(A);return N!==void 0?J.resolve(b.Ms.get(N)):b.Pi.getTargetData(_,A)})(a,d,ji(t)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,g.targetId).next((y=>{c=y}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?l:Ct.min(),i?c:Gt()))).next((g=>(CC(a,f2(t),g),{documents:g,Qs:c})))))}function CC(r,t,i){let a=r.Os.get(t)||Ct.min();i.forEach(((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)})),r.Os.set(t,a)}class $v{constructor(){this.activeTargetIds=_2()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class IC{constructor(){this.Mo=new $v,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new $v,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="ConnectivityMonitor";class Jv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ut(Zv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ut(Zv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function fm(){return Vc===null?Vc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="RestConnection",NC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===th?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,c){const d=fm(),g=this.zo(t,i.toUriEncodedString());ut(Hd,`Sending RPC '${t}' ${d}:`,g,a);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,l,c);const{host:_}=new URL(g),A=Ro(_);return this.Jo(t,g,y,a,A).then((b=>(ut(Hd,`Received RPC '${t}' ${d}: `,b),b)),(b=>{throw vo(Hd,`RPC '${t}' ${d} failed with error: `,b,"url: ",g,"request:",a),b}))}Ho(t,i,a,l,c,d){return this.Go(t,i,a,l,c)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Do})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),a&&a.headers.forEach(((l,c)=>t[c]=l))}zo(t,i){const a=NC[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="WebChannelConnection";class MC extends OC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,c){const d=fm();return new Promise(((g,y)=>{const _=new cT;_.setWithCredentials(!0),_.listenOnce(hT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case zc.NO_ERROR:const b=_.getResponseJson();ut(dn,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(b)),g(b);break;case zc.TIMEOUT:ut(dn,`RPC '${t}' ${d} timed out`),y(new dt(W.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const N=_.getStatus();if(ut(dn,`RPC '${t}' ${d} failed with status:`,N,"response text:",_.getResponseText()),N>0){let H=_.getResponseJson();Array.isArray(H)&&(H=H[0]);const it=H?.error;if(it&&it.status&&it.message){const et=(function(yt){const bt=yt.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(bt)>=0?bt:W.UNKNOWN})(it.status);y(new dt(et,it.message))}else y(new dt(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new dt(W.UNAVAILABLE,"Connection failed."));break;default:St(9055,{l_:t,streamId:d,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ut(dn,`RPC '${t}' ${d} completed.`)}}));const A=JSON.stringify(l);ut(dn,`RPC '${t}' ${d} sending request:`,l),_.send(i,"POST",A,a,15)}))}T_(t,i,a){const l=fm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=mT(),g=dT(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,i,a),y.encodeInitMessageHeaders=!0;const A=c.join("");ut(dn,`Creating RPC '${t}' stream ${l}: ${A}`,y);const b=d.createWebChannel(A,y);this.I_(b);let N=!1,H=!1;const it=new xC({Yo:nt=>{H?ut(dn,`Not sending because RPC '${t}' stream ${l} is closed:`,nt):(N||(ut(dn,`Opening RPC '${t}' stream ${l} transport.`),b.open(),N=!0),ut(dn,`RPC '${t}' stream ${l} sending:`,nt),b.send(nt))},Zo:()=>b.close()}),et=(nt,yt,bt)=>{nt.listen(yt,(rt=>{try{bt(rt)}catch(Ot){setTimeout((()=>{throw Ot}),0)}}))};return et(b,Ul.EventType.OPEN,(()=>{H||(ut(dn,`RPC '${t}' stream ${l} transport opened.`),it.o_())})),et(b,Ul.EventType.CLOSE,(()=>{H||(H=!0,ut(dn,`RPC '${t}' stream ${l} transport closed`),it.a_(),this.E_(b))})),et(b,Ul.EventType.ERROR,(nt=>{H||(H=!0,vo(dn,`RPC '${t}' stream ${l} transport errored. Name:`,nt.name,"Message:",nt.message),it.a_(new dt(W.UNAVAILABLE,"The operation could not be completed")))})),et(b,Ul.EventType.MESSAGE,(nt=>{if(!H){const yt=nt.data[0];te(!!yt,16349);const bt=yt,rt=bt?.error||bt[0]?.error;if(rt){ut(dn,`RPC '${t}' stream ${l} received error:`,rt);const Ot=rt.status;let gt=(function(R){const I=je[R];if(I!==void 0)return XT(I)})(Ot),Rt=rt.message;gt===void 0&&(gt=W.INTERNAL,Rt="Unknown error status: "+Ot+" with message "+rt.message),H=!0,it.a_(new dt(gt,Rt)),b.close()}else ut(dn,`RPC '${t}' stream ${l} received:`,yt),it.u_(yt)}})),et(g,fT.STAT_EVENT,(nt=>{nt.stat===tm.PROXY?ut(dn,`RPC '${t}' stream ${l} detected buffering proxy`):nt.stat===tm.NOPROXY&&ut(dn,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{it.__()}),0),it}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){return new P2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,i,a=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&ut("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="PersistentStream";class l0{constructor(t,i,a,l,c,d,g,y){this.Mi=t,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new o0(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===W.RESOURCE_EXHAUSTED?(br(i.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{t((()=>{const l=new dt(W.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return ut(Wv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(ut(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VC extends l0{constructor(t,i,a,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=B2(this.serializer,t),a=(function(c){if(!("targetChange"in c))return Ct.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?Ct.min():d.readTime?qi(d.readTime):Ct.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=cm(this.serializer),i.addTarget=(function(c,d){let g;const y=d.target;if(g=sm(y)?{documents:H2(c,y)}:{query:F2(c,y).ft},g.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){g.resumeToken=$T(c,d.resumeToken);const _=om(c,d.expectedCount);_!==null&&(g.expectedCount=_)}else if(d.snapshotVersion.compareTo(Ct.min())>0){g.readTime=ah(c,d.snapshotVersion.toTimestamp());const _=om(c,d.expectedCount);_!==null&&(g.expectedCount=_)}return g})(this.serializer,t);const a=Y2(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=cm(this.serializer),i.removeTarget=t,this.q_(i)}}class UC extends l0{constructor(t,i,a,l,c,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return te(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,te(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){te(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=q2(t.writeResults,t.commitTime),a=qi(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=cm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>j2(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{}class PC extends LC{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new dt(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(t,lm(i,a),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new dt(W.UNKNOWN,c.toString())}))}Ho(t,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,g])=>this.connection.Ho(t,lm(i,a),l,d,g,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new dt(W.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class kC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(br(i),this.aa=!1):ut("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="RemoteStore";class zC{constructor(t,i,a,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ga(this)&&(ut(fa,"Restarting streams for network reachability change."),await(async function(y){const _=Dt(y);_.Ea.add(4),await lu(_),_.Ra.set("Unknown"),_.Ea.delete(4),await wh(_)})(this))}))})),this.Ra=new kC(a,l)}}async function wh(r){if(ga(r))for(const t of r.da)await t(!0)}async function lu(r){for(const t of r.da)await t(!1)}function u0(r,t){const i=Dt(r);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Jm(i)?Zm(i):xo(i).O_()&&$m(i,t))}function Km(r,t){const i=Dt(r),a=xo(i);i.Ia.delete(t),a.O_()&&c0(i,t),i.Ia.size===0&&(a.O_()?a.L_():ga(i)&&i.Ra.set("Unknown"))}function $m(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ct.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}xo(r).Y_(t)}function c0(r,t){r.Va.Ue(t),xo(r).Z_(t)}function Zm(r){r.Va=new M2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.Ra.ua()}function Jm(r){return ga(r)&&!xo(r).x_()&&r.Ia.size>0}function ga(r){return Dt(r).Ea.size===0}function h0(r){r.Va=void 0}async function BC(r){r.Ra.set("Online")}async function jC(r){r.Ia.forEach(((t,i)=>{$m(r,t)}))}async function qC(r,t){h0(r),Jm(r)?(r.Ra.ha(t),Zm(r)):r.Ra.set("Unknown")}async function HC(r,t,i){if(r.Ra.set("Online"),t instanceof KT&&t.state===2&&t.cause)try{await(async function(l,c){const d=c.cause;for(const g of c.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,d),l.Ia.delete(g),l.Va.removeTarget(g))})(r,t)}catch(a){ut(fa,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await lh(r,a)}else if(t instanceof Hc?r.Va.Ze(t):t instanceof QT?r.Va.st(t):r.Va.tt(t),!i.isEqual(Ct.min()))try{const a=await a0(r.localStore);i.compareTo(a)>=0&&await(function(c,d){const g=c.Va.Tt(d);return g.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const A=c.Ia.get(_);A&&c.Ia.set(_,A.withResumeToken(y.resumeToken,d))}})),g.targetMismatches.forEach(((y,_)=>{const A=c.Ia.get(y);if(!A)return;c.Ia.set(y,A.withResumeToken(un.EMPTY_BYTE_STRING,A.snapshotVersion)),c0(c,y);const b=new gs(A.target,y,_,A.sequenceNumber);$m(c,b)})),c.remoteSyncer.applyRemoteEvent(g)})(r,i)}catch(a){ut(fa,"Failed to raise snapshot:",a),await lh(r,a)}}async function lh(r,t,i){if(!Oo(t))throw t;r.Ea.add(1),await lu(r),r.Ra.set("Offline"),i||(i=()=>a0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ut(fa,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await wh(r)}))}function f0(r,t){return t().catch((i=>lh(r,i,t)))}async function Ch(r){const t=Dt(r),i=ws(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Vm;for(;FC(t);)try{const l=await RC(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,GC(t,l)}catch(l){await lh(t,l)}d0(t)&&m0(t)}function FC(r){return ga(r)&&r.Ta.length<10}function GC(r,t){r.Ta.push(t);const i=ws(r);i.O_()&&i.X_&&i.ea(t.mutations)}function d0(r){return ga(r)&&!ws(r).x_()&&r.Ta.length>0}function m0(r){ws(r).start()}async function YC(r){ws(r).ra()}async function XC(r){const t=ws(r);for(const i of r.Ta)t.ea(i.mutations)}async function QC(r,t,i){const a=r.Ta.shift(),l=qm.from(a,t,i);await f0(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Ch(r)}async function KC(r,t){t&&ws(r).X_&&await(async function(a,l){if((function(d){return N2(d)&&d!==W.ABORTED})(l.code)){const c=a.Ta.shift();ws(a).B_(),await f0(a,(()=>a.remoteSyncer.rejectFailedWrite(c.batchId,l))),await Ch(a)}})(r,t),d0(r)&&m0(r)}async function tE(r,t){const i=Dt(r);i.asyncQueue.verifyOperationInProgress(),ut(fa,"RemoteStore received new credentials");const a=ga(i);i.Ea.add(3),await lu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await wh(i)}async function $C(r,t){const i=Dt(r);t?(i.Ea.delete(2),await wh(i)):t||(i.Ea.add(2),await lu(i),i.Ra.set("Unknown"))}function xo(r){return r.ma||(r.ma=(function(i,a,l){const c=Dt(i);return c.sa(),new VC(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:BC.bind(null,r),t_:jC.bind(null,r),r_:qC.bind(null,r),H_:HC.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Jm(r)?Zm(r):r.Ra.set("Unknown")):(await r.ma.stop(),h0(r))}))),r.ma}function ws(r){return r.fa||(r.fa=(function(i,a,l){const c=Dt(i);return c.sa(),new UC(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:YC.bind(null,r),r_:KC.bind(null,r),ta:XC.bind(null,r),na:QC.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Ch(r)):(await r.fa.stop(),r.Ta.length>0&&(ut(fa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,i,a,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,c){const d=Date.now()+a,g=new Wm(t,i,d,l,c);return g.start(a),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(W.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tg(r,t){if(br("AsyncQueue",`${t}: ${r}`),Oo(r))return new dt(W.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static emptySet(t){return new mo(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||_t.comparator(i.key,a.key):(i,a)=>_t.comparator(i.key,a.key),this.keyedMap=Ll(),this.sortedSet=new Se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof mo)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new mo;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.ga=new Se(_t.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):St(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class bo{constructor(t,i,a,l,c,d,g,y,_){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=g,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(t,i,a,l,c){const d=[];return i.forEach((g=>{d.push({type:0,doc:g})})),new bo(t,i,mo.emptySet(i),d,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Eh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==a[l].type||!i[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class JC{constructor(){this.queries=nE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=Dt(i),c=l.queries;l.queries=nE(),c.forEach(((d,g)=>{for(const y of g.Sa)y.onError(a)}))})(this,new dt(W.ABORTED,"Firestore shutting down"))}}function nE(){return new ma((r=>UT(r)),Eh)}async function g0(r,t){const i=Dt(r);let a=3;const l=t.query;let c=i.queries.get(l);c?!c.ba()&&t.Da()&&(a=2):(c=new ZC,a=t.Da()?0:1);try{switch(a){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(d){const g=tg(d,`Initialization of query '${ao(t.query)}' failed`);return void t.onError(g)}i.queries.set(l,c),c.Sa.push(t),t.va(i.onlineState),c.wa&&t.Fa(c.wa)&&eg(i)}async function p0(r,t){const i=Dt(r),a=t.query;let l=3;const c=i.queries.get(a);if(c){const d=c.Sa.indexOf(t);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function WC(r,t){const i=Dt(r);let a=!1;for(const l of t){const c=l.query,d=i.queries.get(c);if(d){for(const g of d.Sa)g.Fa(l)&&(a=!0);d.wa=l}}a&&eg(i)}function tI(r,t,i){const a=Dt(r),l=a.queries.get(t);if(l)for(const c of l.Sa)c.onError(i);a.queries.delete(t)}function eg(r){r.Ca.forEach((t=>{t.next()}))}var dm,iE;(iE=dm||(dm={})).Ma="default",iE.Cache="cache";class y0{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new bo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=bo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t){this.key=t}}class v0{constructor(t){this.key=t}}class eI{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Gt(),this.mutatedKeys=Gt(),this.eu=LT(t),this.tu=new mo(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new eE,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,d=l,g=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((A,b)=>{const N=l.get(A),H=Th(this.query,b)?b:null,it=!!N&&this.mutatedKeys.has(N.key),et=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let nt=!1;N&&H?N.data.isEqual(H.data)?it!==et&&(a.track({type:3,doc:H}),nt=!0):this.su(N,H)||(a.track({type:2,doc:H}),nt=!0,(y&&this.eu(H,y)>0||_&&this.eu(H,_)<0)&&(g=!0)):!N&&H?(a.track({type:0,doc:H}),nt=!0):N&&!H&&(a.track({type:1,doc:N}),nt=!0,(y||_)&&(g=!0)),nt&&(H?(d=d.add(H),c=et?c.add(A):c.delete(A)):(d=d.delete(A),c=c.delete(A)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const A=this.query.limitType==="F"?d.last():d.first();d=d.delete(A.key),c=c.delete(A.key),a.track({type:1,doc:A})}return{tu:d,iu:a,Cs:g,mutatedKeys:c}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((A,b)=>(function(H,it){const et=nt=>{switch(nt){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return St(20277,{Rt:nt})}};return et(H)-et(it)})(A.type,b.type)||this.eu(A.doc,b.doc))),this.ou(a),l=l??!1;const g=i&&!l?this._u():[],y=this.Xa.size===0&&this.current&&!l?1:0,_=y!==this.Za;return this.Za=y,d.length!==0||_?{snapshot:new bo(this.query,t.tu,c,d,t.mutatedKeys,y===0,_,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new eE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Gt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new v0(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new _0(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Gt();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return bo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ng="SyncEngine";class nI{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class iI{constructor(t){this.key=t,this.hu=!1}}class rI{constructor(t,i,a,l,c,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ma((g=>UT(g)),Eh),this.Iu=new Map,this.Eu=new Set,this.du=new Se(_t.comparator),this.Au=new Map,this.Ru=new Gm,this.Vu={},this.mu=new Map,this.fu=Ao.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sI(r,t,i=!0){const a=R0(r);let l;const c=a.Tu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await E0(a,t,i,!0),l}async function aI(r,t){const i=R0(r);await E0(i,t,!0,!1)}async function E0(r,t,i,a){const l=await wC(r.localStore,ji(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,i);let g;return a&&(g=await oI(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&i&&u0(r.remoteStore,l),g}async function oI(r,t,i,a,l){r.pu=(b,N,H)=>(async function(et,nt,yt,bt){let rt=nt.view.ru(yt);rt.Cs&&(rt=await Kv(et.localStore,nt.query,!1).then((({documents:E})=>nt.view.ru(E,rt))));const Ot=bt&&bt.targetChanges.get(nt.targetId),gt=bt&&bt.targetMismatches.get(nt.targetId)!=null,Rt=nt.view.applyChanges(rt,et.isPrimaryClient,Ot,gt);return sE(et,nt.targetId,Rt.au),Rt.snapshot})(r,b,N,H);const c=await Kv(r.localStore,t,!0),d=new eI(t,c.Qs),g=d.ru(c.documents),y=ou.createSynthesizedTargetChangeForCurrentChange(i,a&&r.onlineState!=="Offline",l),_=d.applyChanges(g,r.isPrimaryClient,y);sE(r,i,_.au);const A=new nI(t,i,d);return r.Tu.set(t,A),r.Iu.has(i)?r.Iu.get(i).push(t):r.Iu.set(i,[t]),_.snapshot}async function lI(r,t,i){const a=Dt(r),l=a.Tu.get(t),c=a.Iu.get(l.targetId);if(c.length>1)return a.Iu.set(l.targetId,c.filter((d=>!Eh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await hm(a.localStore,l.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(l.targetId),i&&Km(a.remoteStore,l.targetId),mm(a,l.targetId)})).catch(No)):(mm(a,l.targetId),await hm(a.localStore,l.targetId,!0))}async function uI(r,t){const i=Dt(r),a=i.Tu.get(t),l=i.Iu.get(a.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Km(i.remoteStore,a.targetId))}async function cI(r,t,i){const a=yI(r);try{const l=await(function(d,g){const y=Dt(d),_=ge.now(),A=g.reduce(((H,it)=>H.add(it.key)),Gt());let b,N;return y.persistence.runTransaction("Locally write mutations","readwrite",(H=>{let it=wr(),et=Gt();return y.Ns.getEntries(H,A).next((nt=>{it=nt,it.forEach(((yt,bt)=>{bt.isValidDocument()||(et=et.add(yt))}))})).next((()=>y.localDocuments.getOverlayedDocuments(H,it))).next((nt=>{b=nt;const yt=[];for(const bt of g){const rt=R2(bt,b.get(bt.key).overlayedDocument);rt!=null&&yt.push(new Ns(bt.key,rt,IT(rt.value.mapValue),vi.exists(!0)))}return y.mutationQueue.addMutationBatch(H,_,yt,g)})).next((nt=>{N=nt;const yt=nt.applyToLocalDocumentSet(b,et);return y.documentOverlayCache.saveOverlays(H,nt.batchId,yt)}))})).then((()=>({batchId:N.batchId,changes:kT(b)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),(function(d,g,y){let _=d.Vu[d.currentUser.toKey()];_||(_=new Se(Ft)),_=_.insert(g,y),d.Vu[d.currentUser.toKey()]=_})(a,l.batchId,i),await uu(a,l.changes),await Ch(a.remoteStore)}catch(l){const c=tg(l,"Failed to persist write");i.reject(c)}}async function T0(r,t){const i=Dt(r);try{const a=await AC(i.localStore,t);t.targetChanges.forEach(((l,c)=>{const d=i.Au.get(c);d&&(te(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?te(d.hu,14607):l.removedDocuments.size>0&&(te(d.hu,42227),d.hu=!1))})),await uu(i,a,t)}catch(a){await No(a)}}function rE(r,t,i){const a=Dt(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((c,d)=>{const g=d.view.va(t);g.snapshot&&l.push(g.snapshot)})),(function(d,g){const y=Dt(d);y.onlineState=g;let _=!1;y.queries.forEach(((A,b)=>{for(const N of b.Sa)N.va(g)&&(_=!0)})),_&&eg(y)})(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function hI(r,t,i){const a=Dt(r);a.sharedClientState.updateQueryState(t,"rejected",i);const l=a.Au.get(t),c=l&&l.key;if(c){let d=new Se(_t.comparator);d=d.insert(c,gn.newNoDocument(c,Ct.min()));const g=Gt().add(c),y=new bh(Ct.min(),new Map,new Se(Ft),d,g);await T0(a,y),a.du=a.du.remove(c),a.Au.delete(t),ig(a)}else await hm(a.localStore,t,!1).then((()=>mm(a,t,i))).catch(No)}async function fI(r,t){const i=Dt(r),a=t.batch.batchId;try{const l=await SC(i.localStore,t);A0(i,a,null),S0(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await uu(i,l)}catch(l){await No(l)}}async function dI(r,t,i){const a=Dt(r);try{const l=await(function(d,g){const y=Dt(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let A;return y.mutationQueue.lookupMutationBatch(_,g).next((b=>(te(b!==null,37113),A=b.keys(),y.mutationQueue.removeMutationBatch(_,b)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,A,g))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,A))).next((()=>y.localDocuments.getDocuments(_,A)))}))})(a.localStore,t);A0(a,t,i),S0(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await uu(a,l)}catch(l){await No(l)}}function S0(r,t){(r.mu.get(t)||[]).forEach((i=>{i.resolve()})),r.mu.delete(t)}function A0(r,t,i){const a=Dt(r);let l=a.Vu[a.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}function mm(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const a of r.Iu.get(t))r.Tu.delete(a),i&&r.Pu.yu(a,i);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((a=>{r.Ru.containsKey(a)||b0(r,a)}))}function b0(r,t){r.Eu.delete(t.path.canonicalString());const i=r.du.get(t);i!==null&&(Km(r.remoteStore,i),r.du=r.du.remove(t),r.Au.delete(i),ig(r))}function sE(r,t,i){for(const a of i)a instanceof _0?(r.Ru.addReference(a.key,t),mI(r,a)):a instanceof v0?(ut(ng,"Document no longer in limbo: "+a.key),r.Ru.removeReference(a.key,t),r.Ru.containsKey(a.key)||b0(r,a.key)):St(19791,{wu:a})}function mI(r,t){const i=t.key,a=i.path.canonicalString();r.du.get(i)||r.Eu.has(a)||(ut(ng,"New document in limbo: "+i),r.Eu.add(a),ig(r))}function ig(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const i=new _t(me.fromString(t)),a=r.fu.next();r.Au.set(a,new iI(i)),r.du=r.du.insert(i,a),u0(r.remoteStore,new gs(ji(zm(i.path)),a,"TargetPurposeLimboResolution",ph.ce))}}async function uu(r,t,i){const a=Dt(r),l=[],c=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((g,y)=>{d.push(a.pu(y,t,i).then((_=>{if((_||i)&&a.isPrimaryClient){const A=_?!_.fromCache:i?.targetChanges.get(y.targetId)?.current;a.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(_){l.push(_);const A=Xm.As(y.targetId,_);c.push(A)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(y,_){const A=Dt(y);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>J.forEach(_,(N=>J.forEach(N.Es,(H=>A.persistence.referenceDelegate.addReference(b,N.targetId,H))).next((()=>J.forEach(N.ds,(H=>A.persistence.referenceDelegate.removeReference(b,N.targetId,H)))))))))}catch(b){if(!Oo(b))throw b;ut(Qm,"Failed to update sequence numbers: "+b)}for(const b of _){const N=b.targetId;if(!b.fromCache){const H=A.Ms.get(N),it=H.snapshotVersion,et=H.withLastLimboFreeSnapshotVersion(it);A.Ms=A.Ms.insert(N,et)}}})(a.localStore,c))}async function gI(r,t){const i=Dt(r);if(!i.currentUser.isEqual(t)){ut(ng,"User change. New user:",t.toKey());const a=await s0(i.localStore,t);i.currentUser=t,(function(c,d){c.mu.forEach((g=>{g.forEach((y=>{y.reject(new dt(W.CANCELLED,d))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await uu(i,a.Ls)}}function pI(r,t){const i=Dt(r),a=i.Au.get(t);if(a&&a.hu)return Gt().add(a.key);{let l=Gt();const c=i.Iu.get(t);if(!c)return l;for(const d of c){const g=i.Tu.get(d);l=l.unionWith(g.view.nu)}return l}}function R0(r){const t=Dt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hI.bind(null,t),t.Pu.H_=WC.bind(null,t.eventManager),t.Pu.yu=tI.bind(null,t.eventManager),t}function yI(r){const t=Dt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dI.bind(null,t),t}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return TC(this.persistence,new _C,t.initialUser,this.serializer)}Cu(t){return new r0(Ym.mi,this.serializer)}Du(t){return new IC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class _I extends uh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){te(this.persistence.referenceDelegate instanceof oh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new iC(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?Mn.withCacheSize(this.cacheSizeBytes):Mn.DEFAULT;return new r0((a=>oh.mi(a,i)),this.serializer)}}class gm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>rE(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=gI.bind(null,this.syncEngine),await $C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new JC})()}createDatastore(t){const i=Rh(t.databaseInfo.databaseId),a=(function(c){return new MC(c)})(t.databaseInfo);return(function(c,d,g,y){return new PC(c,d,g,y)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,l,c,d,g){return new zC(a,l,c,d,g)})(this.localStore,this.datastore,t.asyncQueue,(i=>rE(this.syncEngine,i,0)),(function(){return Jv.v()?new Jv:new DC})())}createSyncEngine(t,i){return(function(l,c,d,g,y,_,A){const b=new rI(l,c,d,g,y,_);return A&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=Dt(i);ut(fa,"RemoteStore shutting down."),a.Ea.add(5),await lu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gm.provider={build:()=>new gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):br("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="FirestoreClient";class vI{constructor(t,i,a,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=mn.UNAUTHENTICATED,this.clientId=xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,(async d=>{ut(Cs,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(ut(Cs,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=tg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Gd(r,t){r.asyncQueue.verifyOperationInProgress(),ut(Cs,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener((async l=>{a.isEqual(l)||(await s0(t.localStore,l),a=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function aE(r,t){r.asyncQueue.verifyOperationInProgress();const i=await EI(r);ut(Cs,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener((a=>tE(t.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,l)=>tE(t.remoteStore,l))),r._onlineComponents=t}async function EI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ut(Cs,"Using user provided OfflineComponentProvider");try{await Gd(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(l){return l.name==="FirebaseError"?l.code===W.FAILED_PRECONDITION||l.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;vo("Error using user provided cache. Falling back to memory cache: "+i),await Gd(r,new uh)}}else ut(Cs,"Using default OfflineComponentProvider"),await Gd(r,new _I(void 0));return r._offlineComponents}async function C0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ut(Cs,"Using user provided OnlineComponentProvider"),await aE(r,r._uninitializedComponentsProvider._online)):(ut(Cs,"Using default OnlineComponentProvider"),await aE(r,new gm))),r._onlineComponents}function TI(r){return C0(r).then((t=>t.syncEngine))}async function I0(r){const t=await C0(r),i=t.eventManager;return i.onListen=sI.bind(null,t.syncEngine),i.onUnlisten=lI.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=aI.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=uI.bind(null,t.syncEngine),i}function SI(r,t,i={}){const a=new Tr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,y,_){const A=new w0({next:N=>{A.Nu(),d.enqueueAndForget((()=>p0(c,b)));const H=N.docs.has(g);!H&&N.fromCache?_.reject(new dt(W.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&N.fromCache&&y&&y.source==="server"?_.reject(new dt(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(N)},error:N=>_.reject(N)}),b=new y0(zm(g.path),A,{includeMetadataChanges:!0,qa:!0});return g0(c,b)})(await I0(r),r.asyncQueue,t,i,a))),a.promise}function AI(r,t,i={}){const a=new Tr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,y,_){const A=new w0({next:N=>{A.Nu(),d.enqueueAndForget((()=>p0(c,b))),N.fromCache&&y.source==="server"?_.reject(new dt(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),b=new y0(g,A,{includeMetadataChanges:!0,qa:!0});return g0(c,b)})(await I0(r),r.asyncQueue,t,i,a))),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="firestore.googleapis.com",lE=!0;class uE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new dt(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N0,this.ssl=lE}else this.host=t.host,this.ssl=t.ssl??lE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=i0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<eC)throw new dt(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D0(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new dt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dt(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ih{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new Iw;switch(a.type){case"firstParty":return new xw(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=oE.get(i);a&&(ut("ComponentProvider","Removing Datastore"),oE.delete(i),a.terminate())})(this),Promise.resolve()}}function bI(r,t,i,a={}){r=Rr(r,Ih);const l=Ro(t),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${i}`;l&&(TE(`https://${g}`),SE("Firestore",!0)),c.host!==N0&&c.host!==g&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:g,ssl:l,emulatorOptions:a};if(!la(y,d)&&(r._setSettings(y),a.mockUserToken)){let _,A;if(typeof a.mockUserToken=="string")_=a.mockUserToken,A=mn.MOCK_USER;else{_=qS(a.mockUserToken,r._app?.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new dt(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new mn(b)}r._authCredentials=new Dw(new pT(_,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Dh(this.firestore,t,this._query)}}class Xe{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xe(this.firestore,t,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(su(i,Xe._jsonSchema))return new Xe(t,a||null,new _t(me.fromString(i.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:qe("string",Xe._jsonSchemaVersion),referencePath:qe("string")};class Ts extends Dh{constructor(t,i,a){super(t,i,zm(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xe(this.firestore,null,new _t(t))}withConverter(t){return new Ts(this.firestore,t,this._path)}}function pm(r,t,...i){if(r=ln(r),yT("collection","path",t),r instanceof Ih){const a=me.fromString(t,...i);return Av(a),new Ts(r,null,a)}{if(!(r instanceof Xe||r instanceof Ts))throw new dt(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(me.fromString(t,...i));return Av(a),new Ts(r.firestore,null,a)}}function go(r,t,...i){if(r=ln(r),arguments.length===1&&(t=xm.newId()),yT("doc","path",t),r instanceof Ih){const a=me.fromString(t,...i);return Sv(a),new Xe(r,null,new _t(a))}{if(!(r instanceof Xe||r instanceof Ts))throw new dt(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(me.fromString(t,...i));return Sv(a),new Xe(r.firestore,r instanceof Ts?r.converter:null,new _t(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="AsyncQueue";class hE{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new o0(this,"async_queue_retry"),this._c=()=>{const a=Fd();a&&ut(cE,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Fd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Fd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Tr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Oo(t))throw t;ut(cE,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,br("INTERNAL UNHANDLED ERROR: ",fE(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=Wm.createAndSchedule(this,t,i,a,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&St(47125,{Pc:fE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function fE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Mo extends Ih{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new hE,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hE(t),this._firestoreClient=void 0,await t}}}function RI(r,t){const i=typeof r=="object"?r:wE(),a=typeof r=="string"?r:th,l=Sm(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=BS("firestore");c&&bI(l,...c)}return l}function rg(r){if(r._terminated)throw new dt(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wI(r),r._firestoreClient}function wI(r){const t=r._freezeSettings(),i=(function(l,c,d,g){return new Kw(l,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,D0(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new vI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new oi(un.fromBase64String(t))}catch(i){throw new dt(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new oi(un.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:oi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(su(t,oi._jsonSchema))return oi.fromBase64String(t.bytes)}}oi._jsonSchemaVersion="firestore/bytes/1.0",oi._jsonSchema={type:qe("string",oi._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new dt(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new dt(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new dt(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ft(this._lat,t._lat)||Ft(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hi._jsonSchemaVersion}}static fromJSON(t){if(su(t,Hi._jsonSchema))return new Hi(t.latitude,t.longitude)}}Hi._jsonSchemaVersion="firestore/geoPoint/1.0",Hi._jsonSchema={type:qe("string",Hi._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Fi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(su(t,Fi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Fi(t.vectorValues);throw new dt(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fi._jsonSchemaVersion="firestore/vectorValue/1.0",Fi._jsonSchema={type:qe("string",Fi._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^__.*__$/;class II{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new Ns(t,this.data,this.fieldMask,i,this.fieldTransforms):new au(t,this.data,i,this.fieldTransforms)}}class O0{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new Ns(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function x0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw St(40011,{Ac:r})}}class ag{constructor(t,i,a,l,c,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ag({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ch(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(x0(this.Ac)&&CI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class DI{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Rh(t)}Cc(t,i,a,l=!1){return new ag({Ac:t,methodName:i,Dc:a,path:on.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M0(r){const t=r._freezeSettings(),i=Rh(r._databaseId);return new DI(r._databaseId,!!t.ignoreUndefinedProperties,i)}function NI(r,t,i,a,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,t,i,l);og("Data must be an object, but it was:",d,a);const g=V0(a,d);let y,_;if(c.merge)y=new Fn(d.fieldMask),_=d.fieldTransforms;else if(c.mergeFields){const A=[];for(const b of c.mergeFields){const N=ym(t,b,i);if(!d.contains(N))throw new dt(W.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);L0(A,N)||A.push(N)}y=new Fn(A),_=d.fieldTransforms.filter((b=>y.covers(b.field)))}else y=null,_=d.fieldTransforms;return new II(new Vn(g),y,_)}class Oh extends sg{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Oh}}function OI(r,t,i,a){const l=r.Cc(1,t,i);og("Data must be an object, but it was:",l,a);const c=[],d=Vn.empty();Ds(a,((y,_)=>{const A=lg(t,y,i);_=ln(_);const b=l.yc(A);if(_ instanceof Oh)c.push(A);else{const N=xh(_,b);N!=null&&(c.push(A),d.set(A,N))}}));const g=new Fn(c);return new O0(d,g,l.fieldTransforms)}function xI(r,t,i,a,l,c){const d=r.Cc(1,t,i),g=[ym(t,a,i)],y=[l];if(c.length%2!=0)throw new dt(W.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<c.length;N+=2)g.push(ym(t,c[N])),y.push(c[N+1]);const _=[],A=Vn.empty();for(let N=g.length-1;N>=0;--N)if(!L0(_,g[N])){const H=g[N];let it=y[N];it=ln(it);const et=d.yc(H);if(it instanceof Oh)_.push(H);else{const nt=xh(it,et);nt!=null&&(_.push(H),A.set(H,nt))}}const b=new Fn(_);return new O0(A,b,d.fieldTransforms)}function xh(r,t){if(U0(r=ln(r)))return og("Unsupported field value:",t,r),V0(r,t);if(r instanceof sg)return(function(a,l){if(!x0(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,l){const c=[];let d=0;for(const g of a){let y=xh(g,l.wc(d));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),d++}return{arrayValue:{values:c}}})(r,t)}return(function(a,l){if((a=ln(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return v2(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=ge.fromDate(a);return{timestampValue:ah(l.serializer,c)}}if(a instanceof ge){const c=new ge(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:ah(l.serializer,c)}}if(a instanceof Hi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof oi)return{bytesValue:$T(l.serializer,a._byteString)};if(a instanceof Xe){const c=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Fm(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof Fi)return(function(d,g){return{mapValue:{fields:{[wT]:{stringValue:CT},[eh]:{arrayValue:{values:d.toArray().map((_=>{if(typeof _!="number")throw g.Sc("VectorValues must only contain numeric values.");return Bm(g.serializer,_)}))}}}}}})(a,l);throw l.Sc(`Unsupported field value: ${Mm(a)}`)})(r,t)}function V0(r,t){const i={};return ET(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ds(r,((a,l)=>{const c=xh(l,t.mc(a));c!=null&&(i[a]=c)})),{mapValue:{fields:i}}}function U0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ge||r instanceof Hi||r instanceof oi||r instanceof Xe||r instanceof sg||r instanceof Fi)}function og(r,t,i){if(!U0(i)||!_T(i)){const a=Mm(i);throw a==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+a)}}function ym(r,t,i){if((t=ln(t))instanceof Nh)return t._internalPath;if(typeof t=="string")return lg(r,t);throw ch("Field path arguments must be of type string or ",r,!1,void 0,i)}const MI=new RegExp("[~\\*/\\[\\]]");function lg(r,t,i){if(t.search(MI)>=0)throw ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new Nh(...t.split("."))._internalPath}catch{throw ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function ch(r,t,i,a,l){const c=a&&!a.isEmpty(),d=l!==void 0;let g=`Function ${t}() called with invalid data`;i&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(c||d)&&(y+=" (found",c&&(y+=` in field ${a}`),d&&(y+=` in document ${l}`),y+=")"),new dt(W.INVALID_ARGUMENT,g+r+y)}function L0(r,t){return r.some((i=>i.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(t,i,a,l,c){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new VI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(k0("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class VI extends P0{data(){return super.data()}}function k0(r,t){return typeof t=="string"?lg(r,t):t instanceof Nh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new dt(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class LI{convertValue(t,i="none"){switch(Rs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(bs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw St(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return Ds(t,((l,c)=>{a[l]=this.convertValue(c,i)})),a}convertVectorValue(t){const i=t.fields?.[eh].arrayValue?.values?.map((a=>Me(a.doubleValue)));return new Fi(i)}convertGeoPoint(t){return new Hi(Me(t.latitude),Me(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=_h(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(Kl(t));default:return null}}convertTimestamp(t){const i=As(t);return new ge(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=me.fromString(t);te(n0(a),9688,{name:t});const l=new $l(a.get(1),a.get(3)),c=new _t(a.popFirst(5));return l.isEqual(i)||br(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(r,t,i){let a;return a=r?r.toFirestore(t):t,a}class kl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oa extends P0{constructor(t,i,a,l,c,d){super(t,i,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(k0("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=oa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}oa._jsonSchemaVersion="firestore/documentSnapshot/1.0",oa._jsonSchema={type:qe("string",oa._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class Fc extends oa{data(t={}){return super.data(t)}}class po{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new kl(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new Fc(this._firestore,this._userDataWriter,a.key,a,new kl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new dt(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((g=>{const y=new Fc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new kl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const y=new Fc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new kl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,A=-1;return g.type!==0&&(_=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),A=d.indexOf(g.doc.key)),{type:kI(g.type),doc:y,oldIndex:_,newIndex:A}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=po._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function kI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return St(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(r){r=Rr(r,Xe);const t=Rr(r.firestore,Mo);return SI(rg(t),r._key).then((i=>qI(t,r,i)))}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:qe("string",po._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class z0 extends LI{constructor(t){super(),this.firestore=t}convertBytes(t){return new oi(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Xe(this.firestore,null,i)}}function B0(r){r=Rr(r,Dh);const t=Rr(r.firestore,Mo),i=rg(t),a=new z0(t);return UI(r._query),AI(i,r._query).then((l=>new po(t,a,r,l)))}function _m(r,t,i,...a){r=Rr(r,Xe);const l=Rr(r.firestore,Mo),c=M0(l);let d;return d=typeof(t=ln(t))=="string"||t instanceof Nh?xI(c,"updateDoc",r._key,t,i,a):OI(c,"updateDoc",r._key,t),ug(l,[d.toMutation(r._key,vi.exists(!0))])}function BI(r){return ug(Rr(r.firestore,Mo),[new jm(r._key,vi.none())])}function jI(r,t){const i=Rr(r.firestore,Mo),a=go(r),l=PI(r.converter,t);return ug(i,[NI(M0(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,vi.exists(!1))]).then((()=>a))}function ug(r,t){return(function(a,l){const c=new Tr;return a.asyncQueue.enqueueAndForget((async()=>cI(await TI(a),l,c))),c.promise})(rg(r),t)}function qI(r,t,i){const a=i.docs.get(t._key),l=new z0(r);return new oa(r,l,t._key,a,new kl(i.hasPendingWrites,i.fromCache),t.converter)}(function(t,i=!0){(function(l){Do=l})(wo),yo(new ua("firestore",((a,{instanceIdentifier:l,options:c})=>{const d=a.getProvider("app").getImmediate(),g=new Mo(new Nw(a.getProvider("auth-internal")),new Mw(d,a.getProvider("app-check-internal")),(function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new dt(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(_.options.projectId,A)})(d,l),d);return c={useFetchStreams:i,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),_s(_v,vv,t),_s(_v,vv,"esm2020")})();var HI="firebase",FI="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(HI,FI,"app");const GI={apiKey:"AIzaSyAYw6oBVlkecGJlAZzuCZlruBCSeFsPuuM",authDomain:"poklona-a8530.firebaseapp.com",projectId:"poklona-a8530",storageBucket:"poklona-a8530.firebasestorage.app",messagingSenderId:"396446466261",appId:"1:396446466261:web:9119f5e342138a4319625c"},j0=RE(GI),Mh=ww(j0),ms=RI(j0);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),XI=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,a)=>a?a.toUpperCase():i.toLowerCase()),dE=r=>{const t=XI(r);return t.charAt(0).toUpperCase()+t.slice(1)},q0=(...r)=>r.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim(),QI=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=le.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:d,...g},y)=>le.createElement("svg",{ref:y,...KI,width:t,height:t,stroke:r,strokeWidth:a?Number(i)*24/Number(t):i,className:q0("lucide",l),...!c&&!QI(g)&&{"aria-hidden":"true"},...g},[...d.map(([_,A])=>le.createElement(_,A)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=(r,t)=>{const i=le.forwardRef(({className:a,...l},c)=>le.createElement($I,{ref:c,iconNode:t,className:q0(`lucide-${YI(dE(r))}`,`lucide-${r}`,a),...l}));return i.displayName=dE(r),i};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],JI=Os("circle-check-big",ZI);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],H0=Os("gift",WI);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],eD=Os("lock",tD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],iD=Os("log-out",nD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],sD=Os("plus",rD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],oD=Os("settings",aD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],uD=Os("square-pen",lD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],hD=Os("trash-2",cD);function fD(){const[r,t]=le.useState(""),[i,a]=le.useState(""),[l,c]=le.useState(""),[d,g]=le.useState(!1),y=async _=>{_.preventDefault(),c(""),g(!0);try{await fR(Mh,r,i)}catch{c("Pogrešna email adresa ili lozinka"),g(!1)}};return Q.jsx("div",{className:"min-h-screen flex items-center justify-center p-8 bg-[#f5f4dc]",children:Q.jsx("div",{className:"w-full max-w-md relative",children:Q.jsxs("div",{className:"relative z-10 bg-[#fffdfd]/95 border-4 border-black p-8 text-center",style:{boxShadow:"16px 16px 0 0 #000"},children:[Q.jsx("div",{className:"mb-6",children:Q.jsx(H0,{size:48,className:"text-primary mx-auto"})}),Q.jsx("h1",{className:"text-3xl font-extrabold text-[#111827] mb-2",children:"Pavel Voli Taru"}),Q.jsx("p",{className:"text-sm text-gray-700 mb-6",children:"Prijavi se da otvoriš svoje poklone"}),Q.jsxs("form",{onSubmit:y,className:"flex flex-col gap-4",children:[Q.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:_=>t(_.target.value),className:"px-4 py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] outline-none focus:ring-0",required:!0}),Q.jsx("input",{type:"password",placeholder:"Lozinka",value:i,onChange:_=>a(_.target.value),className:"px-4 py-3 rounded-none border-2 border-black bg-[#f6f4ee] text-[#111827] outline-none focus:ring-0",required:!0}),l&&Q.jsx("p",{className:"text-sm text-red-600 text-center",children:l}),Q.jsx("button",{type:"submit",disabled:d,className:"mt-2 py-3 rounded-none bg-primary text-white font-bold border-2 border-black disabled:opacity-60 hover:scale-[1.02] transition-transform",children:d?"Prijava...":"Prijavi se"})]})]})})})}function dD({present:r,onOpen:t,isLocked:i}){const[a,l]=le.useState("");le.useEffect(()=>{const g=()=>{const b=new Date(r.unlockDate+"T00:00:00")-new Date;if(b<=0){l("");return}const N=b/(1e3*60*60*24);if(N>=1){const H=Math.ceil(N);l(`${H} dana`)}else{const H=Math.ceil(b/1e3),it=Math.floor(H/3600),et=Math.floor(H%3600/60),nt=H%60;l(`${it}h ${et}m ${nt}s`)}};g();const y=setInterval(g,1e3);return()=>clearInterval(y)},[r.unlockDate]);const c=()=>{i||t(r)},d=()=>r.opened?Q.jsx(JI,{size:28,className:"text-primary"}):i?Q.jsx(eD,{size:28,className:"text-gray-400"}):Q.jsx(H0,{size:28,className:"text-primary"});return Q.jsxs("div",{className:`p-6 border-2 border-black bg-[#f6f4ee] text-[#111827] ${i?"opacity-75 cursor-not-allowed":"hover:scale-105 cursor-pointer"} transform transition-all duration-300`,onClick:c,style:{borderRadius:0},children:[Q.jsx("div",{className:"mb-4",children:d()}),Q.jsxs("h3",{className:"text-lg font-semibold mb-2",children:["Dan ",r.day]}),i&&Q.jsx("p",{className:"text-sm text-[#666]",children:a}),r.opened&&Q.jsx("p",{className:"text-sm text-[#667eea] font-medium",children:"Otvoreno"})]})}function mD(){const[r,t]=le.useState([]),[i,a]=le.useState(null),[l,c]=le.useState(!0);le.useEffect(()=>{d()},[]);const d=async()=>{try{const N=(await B0(pm(ms,"presents"))).docs.map(H=>({id:H.id,...H.data()}));N.sort((H,it)=>H.day-it.day),t(N),c(!1)}catch(b){console.error("Error loading presents:",b),c(!1)}},g=async b=>{if(a(b),!b.opened)try{const N=go(ms,"presents",b.id);await _m(N,{opened:!0,openedAt:new Date().toISOString()}),d()}catch(N){console.error("Error opening present:",N)}},y=b=>{const N=new Date,H=new Date(b.unlockDate);return N<H},_=b=>{if(!b)return"";const N=new Date(b),H=it=>it.toString().padStart(2,"0");return`${N.getFullYear()}-${H(N.getMonth()+1)}-${H(N.getDate())} ${H(N.getHours())}:${H(N.getMinutes())}:${H(N.getSeconds())}`},A=()=>{JE(Mh)};return l?Q.jsx("div",{className:"min-h-screen flex items-center justify-center p-8 bg-[#f5f4dc]",children:Q.jsx("div",{className:"w-full max-w-md relative",children:Q.jsxs("div",{className:"relative z-10 bg-[#fffdfd]/95 border-4 border-black p-8 text-center",style:{boxShadow:"16px 16px 0 0 #000"},children:[Q.jsx("h2",{className:"text-2xl font-bold text-[#111827] mb-2",children:"Učitavanje"}),Q.jsx("p",{className:"text-sm text-gray-700",children:"Molimo pričekajte..."})]})})}):Q.jsx("div",{className:"min-h-screen flex items-start justify-center p-8 bg-[#f5f4dc]",children:Q.jsxs("div",{className:"w-full max-w-6xl relative mt-6",children:[Q.jsx("div",{className:"absolute inset-0 translate-x-4 translate-y-4 bg-black","aria-hidden":!0}),Q.jsxs("div",{className:"relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6",children:[Q.jsxs("header",{className:"flex items-center justify-between mb-6",children:[Q.jsx("h1",{className:"text-3xl font-extrabold text-[#111827]",children:"Tvoji Pokloni"}),Q.jsx("button",{onClick:A,className:"py-2 px-4 border-2 border-black bg-[#111827] text-white",children:"Odjavi se"})]}),Q.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:r.map(b=>Q.jsx(dD,{present:b,onOpen:g,isLocked:y(b)},b.id))}),i&&Q.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50",onClick:()=>a(null),children:Q.jsxs("div",{className:"bg-[#fffdfd]/95 border-4 border-black p-8 max-w-2xl w-full mx-4 relative",onClick:b=>b.stopPropagation(),children:[Q.jsx("button",{className:"absolute top-4 right-4 text-[#111827] text-xl",onClick:()=>a(null),children:"✕"}),Q.jsxs("h2",{className:"text-2xl font-bold text-[#111827] mb-2",children:["Dan ",i.day]}),i.opened&&i.openedAt&&Q.jsxs("p",{className:"text-sm text-gray-600 mb-3",children:["Otvoreno: ",_(i.openedAt)]}),i.type==="text"&&Q.jsx("p",{className:"text-[#111827] leading-relaxed",children:i.content}),i.type==="image"&&Q.jsx("img",{src:i.content,alt:"Present",className:"w-full mt-4"}),i.type==="song"&&Q.jsxs("div",{children:[Q.jsx("p",{className:"text-[#111827] font-semibold mb-2",children:i.title}),Q.jsx("audio",{controls:!0,className:"w-full",children:Q.jsx("source",{src:i.content,type:"audio/mpeg"})})]}),Q.jsx("div",{className:"mt-6 flex justify-end",children:Q.jsx("button",{onClick:()=>a(null),className:"px-4 py-2 border-2 border-black bg-[#f6f4ee] text-[#111827]",children:"Zatvori"})})]})})]})]})})}function gD(){const[r,t]=le.useState([]),[i,a]=le.useState(!1),[l,c]=le.useState(!1),[d,g]=le.useState(null),[y,_]=le.useState({day:"",type:"text",title:"",content:"",unlockDate:""});le.useEffect(()=>{A()},[]);const A=async()=>{try{const Ot=(await B0(pm(ms,"presents"))).docs.map(gt=>({id:gt.id,...gt.data()}));Ot.sort((gt,Rt)=>gt.day-Rt.day),t(Ot)}catch(rt){console.error("Error loading presents:",rt)}},b=async rt=>{rt.preventDefault();try{const Ot={day:parseInt(y.day),type:y.type,title:y.title,content:y.content,unlockDate:y.unlockDate,opened:!1};d?await _m(go(ms,"presents",d.id),Ot):await jI(pm(ms,"presents"),Ot),et(),A()}catch(Ot){console.error("Error saving present:",Ot)}},N=rt=>{g(rt),_({day:rt.day,type:rt.type,title:rt.title||"",content:rt.content,unlockDate:rt.unlockDate}),a(!0)},H=async rt=>{if(window.confirm("Jesi li siguran da želiš obrisati ovaj poklon?"))try{await BI(go(ms,"presents",rt)),A()}catch(Ot){console.error("Error deleting present:",Ot)}},it=async rt=>{if(window.confirm('Želiš li zaista vratiti ovaj poklon u stanje "spakirano"?'))try{await _m(go(ms,"presents",rt),{opened:!1,openedAt:null}),A()}catch(Ot){console.error("Error re-packing present:",Ot)}},et=()=>{_({day:"",type:"text",title:"",content:"",unlockDate:""}),g(null),a(!1)},nt=()=>{JE(Mh)},yt=()=>{if(l){a(!0),c(!1);return}g(null),_({day:"",type:"text",title:"",content:"",unlockDate:""}),a(!0),c(!1)},bt=()=>{a(!1),c(!0)};return Q.jsx("div",{className:"min-h-screen flex items-start justify-center p-6 bg-[#f5f4dc]",children:Q.jsxs("div",{className:"w-full max-w-6xl relative mt-6",children:[Q.jsx("div",{className:"absolute inset-0 translate-x-4 translate-y-4 bg-black","aria-hidden":!0}),Q.jsxs("div",{className:"relative z-10 bg-[#fffdfd]/95 border-4 border-black p-6",children:[Q.jsxs("header",{className:"flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4",children:[Q.jsxs("div",{className:"flex items-center gap-4",children:[Q.jsx(oD,{size:28,className:"text-[#111827]"}),Q.jsx("h1",{className:"text-2xl font-extrabold text-[#111827]",children:"Admin Dashboard"})]}),Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsxs("button",{onClick:yt,className:"flex items-center gap-2 bg-[#111827] text-white px-4 py-2 border-2 border-black",children:[Q.jsx(sD,{size:14}),Q.jsx("span",{className:"text-sm",children:"Dodaj Poklon"})]}),Q.jsxs("button",{onClick:nt,className:"flex items-center gap-2 px-4 py-2 border-2 border-black bg-[#f6f4ee] text-[#111827]",children:[Q.jsx(iD,{size:14}),Q.jsx("span",{className:"text-sm",children:"Odjavi se"})]})]})]}),i&&Q.jsxs("div",{className:"mb-6 relative",children:[Q.jsx("h2",{className:"text-xl font-semibold text-[#111827] mb-4",children:d?"Uredi Poklon":"Novi Poklon"}),Q.jsxs("div",{className:"absolute top-0 right-0 flex gap-2",children:[Q.jsx("button",{type:"button",onClick:bt,title:"Minimize form",className:"px-3 py-1 border-2 border-black bg-[#f6f4ee]",children:"−"}),Q.jsx("button",{type:"button",onClick:et,title:"Close form",className:"px-3 py-1 border-2 border-black bg-[#f6f4ee]",children:"✕"})]}),Q.jsxs("form",{onSubmit:b,className:"flex flex-col gap-4",children:[Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{className:"text-sm text-[#111827] font-medium",children:"Dan (1-365)"}),Q.jsx("input",{type:"number",min:"1",max:"365",value:y.day,onChange:rt=>_({...y,day:rt.target.value}),className:"mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]",required:!0})]}),Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{className:"text-sm text-[#111827] font-medium",children:"Tip"}),Q.jsxs("select",{value:y.type,onChange:rt=>_({...y,type:rt.target.value}),className:"mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]",children:[Q.jsx("option",{value:"text",children:"Tekst"}),Q.jsx("option",{value:"image",children:"Slika"}),Q.jsx("option",{value:"song",children:"Pjesma"})]})]}),y.type==="song"&&Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{className:"text-sm text-[#111827] font-medium",children:"Naslov"}),Q.jsx("input",{type:"text",value:y.title,onChange:rt=>_({...y,title:rt.target.value}),className:"mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]",placeholder:"Naziv pjesme"})]}),Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{className:"text-sm text-[#111827] font-medium",children:y.type==="text"?"Tekst":"URL"}),Q.jsx("textarea",{value:y.content,onChange:rt=>_({...y,content:rt.target.value}),className:"mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827] min-h-[100px]",placeholder:y.type==="text"?"Upiši poruku...":"https://...",required:!0})]}),Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{className:"text-sm text-[#111827] font-medium",children:"Datum otključavanja"}),Q.jsx("input",{type:"date",value:y.unlockDate,onChange:rt=>_({...y,unlockDate:rt.target.value}),className:"mt-1 p-3 border-2 border-black bg-[#f6f4ee] text-[#111827]",required:!0})]}),Q.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[Q.jsx("button",{type:"submit",className:"flex-1 py-3 bg-[#111827] text-white border-2 border-black font-semibold",children:d?"Spremi":"Dodaj"}),Q.jsx("button",{type:"button",onClick:et,className:"flex-1 py-3 border-2 border-black bg-[#f6f4ee] text-[#111827]",children:"Odustani"})]})]})]}),Q.jsxs("div",{children:[Q.jsxs("h2",{className:"text-lg font-semibold text-[#111827] mb-4",children:["Svi Pokloni (",r.length,")"]}),Q.jsx("div",{className:"flex flex-col gap-4",children:r.map(rt=>Q.jsxs("div",{className:"p-4 border-2 border-black bg-[#f6f4ee] flex items-center justify-between",children:[Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsxs("span",{className:"font-semibold text-[#111827]",children:["Dan ",rt.day]}),Q.jsx("span",{className:"text-sm text-[#111827] bg-[#fff] px-2 py-1 border-2 border-black",children:rt.type}),Q.jsx("span",{className:"text-sm text-[#666]",children:rt.unlockDate}),rt.opened&&Q.jsx("span",{className:"text-sm text-[#667eea]",children:"Otvoreno"})]}),Q.jsxs("div",{className:"flex items-center gap-2",children:[Q.jsx("button",{onClick:()=>{N(rt),window.scrollTo({top:0,behavior:"smooth"})},className:"p-2 bg-[#111827] text-white border-2 border-black",children:Q.jsx(uD,{size:14})}),Q.jsx("button",{onClick:()=>H(rt.id),className:"p-2 border-2 border-black bg-[#f6f4ee] text-[#111827]",children:Q.jsx(hD,{size:14})}),rt.opened&&Q.jsx("button",{onClick:()=>it(rt.id),className:"p-2 border-2 border-black bg-[#fff] text-[#111827]",children:"Spakiraj"})]})]},rt.id))})]})]})]})})}function pD({SIM_RESOLUTION:r=64,DYE_RESOLUTION:t=512,CAPTURE_RESOLUTION:i=256,DENSITY_DISSIPATION:a=4,VELOCITY_DISSIPATION:l=2.5,PRESSURE:c=.1,PRESSURE_ITERATIONS:d=10,CURL:g=2,SPLAT_RADIUS:y=.15,SPLAT_FORCE:_=4e3,SHADING:A=!1,COLOR_UPDATE_SPEED:b=5,BACK_COLOR:N={r:.5,g:0,b:0},TRANSPARENT:H=!0}){const it=le.useRef(null);return le.useEffect(()=>{const et=it.current;if(!et)return;const nt=navigator.hardwareConcurrency||4,yt=/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),bt=nt<=1||yt&&nt<=2,rt=yt||nt<=2;if(bt){et.style.display="none";return}function Ot(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let gt={SIM_RESOLUTION:r,DYE_RESOLUTION:t,CAPTURE_RESOLUTION:i,DENSITY_DISSIPATION:a,VELOCITY_DISSIPATION:l,PRESSURE:c,PRESSURE_ITERATIONS:d,CURL:g,SPLAT_RADIUS:y,SPLAT_FORCE:_,SHADING:A,COLOR_UPDATE_SPEED:b};rt&&(gt.SIM_RESOLUTION=Math.min(gt.SIM_RESOLUTION,32),gt.DYE_RESOLUTION=Math.min(gt.DYE_RESOLUTION,256),gt.CAPTURE_RESOLUTION=Math.min(gt.CAPTURE_RESOLUTION,128),gt.PRESSURE_ITERATIONS=Math.min(gt.PRESSURE_ITERATIONS,6),gt.SPLAT_FORCE=Math.min(gt.SPLAT_FORCE,2e3),gt.SHADING=!1,gt.COLOR_UPDATE_SPEED=Math.max(1,gt.COLOR_UPDATE_SPEED/2));let Rt=[new Ot];const{gl:E,ext:R}=I(et);R.supportLinearFiltering||(gt.DYE_RESOLUTION=256,gt.SHADING=!1);function I(D){const j={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let Y=D.getContext("webgl2",j);const tt=!!Y;tt||(Y=D.getContext("webgl",j)||D.getContext("experimental-webgl",j));let ct,vt;tt?(Y.getExtension("EXT_color_buffer_float"),vt=Y.getExtension("OES_texture_float_linear")):(ct=Y.getExtension("OES_texture_half_float"),vt=Y.getExtension("OES_texture_half_float_linear")),Y.clearColor(0,0,0,1);const wt=tt?Y.HALF_FLOAT:ct&&ct.HALF_FLOAT_OES;let Lt,he,hn;return tt?(Lt=V(Y,Y.RGBA16F,Y.RGBA,wt),he=V(Y,Y.RG16F,Y.RG,wt),hn=V(Y,Y.R16F,Y.RED,wt)):(Lt=V(Y,Y.RGBA,Y.RGBA,wt),he=V(Y,Y.RGBA,Y.RGBA,wt),hn=V(Y,Y.RGBA,Y.RGBA,wt)),{gl:Y,ext:{formatRGBA:Lt,formatRG:he,formatR:hn,halfFloatTexType:wt,supportLinearFiltering:vt}}}function V(D,j,Y,tt){if(!x(D,j,Y,tt))switch(j){case D.R16F:return V(D,D.RG16F,D.RG,tt);case D.RG16F:return V(D,D.RGBA16F,D.RGBA,tt);default:return null}return{internalFormat:j,format:Y}}function x(D,j,Y,tt){const ct=D.createTexture();D.bindTexture(D.TEXTURE_2D,ct),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_S,D.CLAMP_TO_EDGE),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_T,D.CLAMP_TO_EDGE),D.texImage2D(D.TEXTURE_2D,0,j,4,4,0,Y,tt,null);const vt=D.createFramebuffer();return D.bindFramebuffer(D.FRAMEBUFFER,vt),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ct,0),D.checkFramebufferStatus(D.FRAMEBUFFER)===D.FRAMEBUFFER_COMPLETE}class L{constructor(j,Y){this.vertexShader=j,this.fragmentShaderSource=Y,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(j){let Y=0;for(let ct=0;ct<j.length;ct++)Y+=Un(j[ct]);let tt=this.programs[Y];if(tt==null){let ct=G(E.FRAGMENT_SHADER,this.fragmentShaderSource,j);tt=ue(this.vertexShader,ct),this.programs[Y]=tt}tt!==this.activeProgram&&(this.uniforms=Ae(tt),this.activeProgram=tt)}bind(){E.useProgram(this.activeProgram)}}class w{constructor(j,Y){this.uniforms={},this.program=ue(j,Y),this.uniforms=Ae(this.program)}bind(){E.useProgram(this.program)}}function ue(D,j){let Y=E.createProgram();return E.attachShader(Y,D),E.attachShader(Y,j),E.linkProgram(Y),E.getProgramParameter(Y,E.LINK_STATUS)||console.trace(E.getProgramInfoLog(Y)),Y}function Ae(D){let j=[],Y=E.getProgramParameter(D,E.ACTIVE_UNIFORMS);for(let tt=0;tt<Y;tt++){let ct=E.getActiveUniform(D,tt).name;j[ct]=E.getUniformLocation(D,ct)}return j}function G(D,j,Y){j=at(j,Y);const tt=E.createShader(D);return E.shaderSource(tt,j),E.compileShader(tt),E.getShaderParameter(tt,E.COMPILE_STATUS)||console.trace(E.getShaderInfoLog(tt)),tt}function at(D,j){if(!j)return D;let Y="";return j.forEach(tt=>{Y+="#define "+tt+`
`}),Y+D}const ft=G(E.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),Yt=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),Zt=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),M=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,$=G(E.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),ot=G(E.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,R.supportLinearFiltering?null:["MANUAL_FILTERING"]),lt=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),At=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),Nt=G(E.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),Bt=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),Ce=G(E.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),Pt=(E.bindBuffer(E.ARRAY_BUFFER,E.createBuffer()),E.bufferData(E.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),E.STATIC_DRAW),E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,E.createBuffer()),E.bufferData(E.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),E.STATIC_DRAW),E.vertexAttribPointer(0,2,E.FLOAT,!1,0,0),E.enableVertexAttribArray(0),(D,j=!1)=>{D==null?(E.viewport(0,0,E.drawingBufferWidth,E.drawingBufferHeight),E.bindFramebuffer(E.FRAMEBUFFER,null)):(E.viewport(0,0,D.width,D.height),E.bindFramebuffer(E.FRAMEBUFFER,D.fbo)),j&&(E.clearColor(0,0,0,1),E.clear(E.COLOR_BUFFER_BIT)),E.drawElements(E.TRIANGLES,6,E.UNSIGNED_SHORT,0)});let Ie,Ut,Ti,Si,He;const Ir=new w(ft,Yt),li=new w(ft,Zt),Tn=new w(ft,$),We=new w(ft,ot),pe=new w(ft,lt),Ee=new w(ft,At),yn=new w(ft,Nt),Dr=new w(ft,Bt),Xi=new w(ft,Ce),Ve=new L(ft,M);function Ai(){let D=Kn(gt.SIM_RESOLUTION),j=Kn(gt.DYE_RESOLUTION);const Y=R.halfFloatTexType,tt=R.formatRGBA,ct=R.formatRG,vt=R.formatR,wt=R.supportLinearFiltering?E.LINEAR:E.NEAREST;E.disable(E.BLEND),Ie?Ie=pa(Ie,j.width,j.height,tt.internalFormat,tt.format,Y,wt):Ie=Qi(j.width,j.height,tt.internalFormat,tt.format,Y,wt),Ut?Ut=pa(Ut,D.width,D.height,ct.internalFormat,ct.format,Y,wt):Ut=Qi(D.width,D.height,ct.internalFormat,ct.format,Y,wt),Ti=Gn(D.width,D.height,vt.internalFormat,vt.format,Y,E.NEAREST),Si=Gn(D.width,D.height,vt.internalFormat,vt.format,Y,E.NEAREST),He=Qi(D.width,D.height,vt.internalFormat,vt.format,Y,E.NEAREST)}function Gn(D,j,Y,tt,ct,vt){E.activeTexture(E.TEXTURE0);let wt=E.createTexture();E.bindTexture(E.TEXTURE_2D,wt),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,vt),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,vt),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),E.texImage2D(E.TEXTURE_2D,0,Y,D,j,0,tt,ct,null);let Lt=E.createFramebuffer();E.bindFramebuffer(E.FRAMEBUFFER,Lt),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,wt,0),E.viewport(0,0,D,j),E.clear(E.COLOR_BUFFER_BIT);let he=1/D,hn=1/j;return{texture:wt,fbo:Lt,width:D,height:j,texelSizeX:he,texelSizeY:hn,attach(Ke){return E.activeTexture(E.TEXTURE0+Ke),E.bindTexture(E.TEXTURE_2D,wt),Ke}}}function Qi(D,j,Y,tt,ct,vt){let wt=Gn(D,j,Y,tt,ct,vt),Lt=Gn(D,j,Y,tt,ct,vt);return{width:D,height:j,texelSizeX:wt.texelSizeX,texelSizeY:wt.texelSizeY,get read(){return wt},set read(he){wt=he},get write(){return Lt},set write(he){Lt=he},swap(){let he=wt;wt=Lt,Lt=he}}}function bi(D,j,Y,tt,ct,vt,wt){let Lt=Gn(j,Y,tt,ct,vt,wt);return Ir.bind(),E.uniform1i(Ir.uniforms.uTexture,D.attach(0)),Pt(Lt),Lt}function pa(D,j,Y,tt,ct,vt,wt){return D.width===j&&D.height===Y||(D.read=bi(D.read,j,Y,tt,ct,vt,wt),D.write=Gn(j,Y,tt,ct,vt,wt),D.width=j,D.height=Y,D.texelSizeX=1/j,D.texelSizeY=1/Y),D}function ya(){let D=[];gt.SHADING&&D.push("SHADING"),Ve.setKeywords(D)}ya(),Ai();let xs=Date.now(),Ki=0,cn=null,Ue=!1;function _n(){const D=Te();_a()&&Ai(),Nr(D),va(),Yn(D),$i(null),cn=requestAnimationFrame(_n)}function Te(){let D=Date.now(),j=(D-xs)/1e3;return j=Math.min(j,.016666),xs=D,j}function _a(){let D=Fe(et.clientWidth),j=Fe(et.clientHeight);return et.width!==D||et.height!==j?(et.width=D,et.height=j,!0):!1}function Nr(D){Ki+=D*gt.COLOR_UPDATE_SPEED,Ki>=1&&(Ki=Wi(Ki,0,1),Rt.forEach(j=>{j.color=Ri()}))}function va(){Rt.forEach(D=>{D.moved&&(D.moved=!1,Xn(D))})}function Yn(D){E.disable(E.BLEND),Ee.bind(),E.uniform2f(Ee.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),E.uniform1i(Ee.uniforms.uVelocity,Ut.read.attach(0)),Pt(Si),yn.bind(),E.uniform2f(yn.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),E.uniform1i(yn.uniforms.uVelocity,Ut.read.attach(0)),E.uniform1i(yn.uniforms.uCurl,Si.attach(1)),E.uniform1f(yn.uniforms.curl,gt.CURL),E.uniform1f(yn.uniforms.dt,D),Pt(Ut.write),Ut.swap(),pe.bind(),E.uniform2f(pe.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),E.uniform1i(pe.uniforms.uVelocity,Ut.read.attach(0)),Pt(Ti),li.bind(),E.uniform1i(li.uniforms.uTexture,He.read.attach(0)),E.uniform1f(li.uniforms.value,gt.PRESSURE),Pt(He.write),He.swap(),Dr.bind(),E.uniform2f(Dr.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),E.uniform1i(Dr.uniforms.uDivergence,Ti.attach(0));for(let Y=0;Y<gt.PRESSURE_ITERATIONS;Y++)E.uniform1i(Dr.uniforms.uPressure,He.read.attach(1)),Pt(He.write),He.swap();Xi.bind(),E.uniform2f(Xi.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),E.uniform1i(Xi.uniforms.uPressure,He.read.attach(0)),E.uniform1i(Xi.uniforms.uVelocity,Ut.read.attach(1)),Pt(Ut.write),Ut.swap(),We.bind(),E.uniform2f(We.uniforms.texelSize,Ut.texelSizeX,Ut.texelSizeY),R.supportLinearFiltering||E.uniform2f(We.uniforms.dyeTexelSize,Ut.texelSizeX,Ut.texelSizeY);let j=Ut.read.attach(0);E.uniform1i(We.uniforms.uVelocity,j),E.uniform1i(We.uniforms.uSource,j),E.uniform1f(We.uniforms.dt,D),E.uniform1f(We.uniforms.dissipation,gt.VELOCITY_DISSIPATION),Pt(Ut.write),Ut.swap(),R.supportLinearFiltering||E.uniform2f(We.uniforms.dyeTexelSize,Ie.texelSizeX,Ie.texelSizeY),E.uniform1i(We.uniforms.uVelocity,Ut.read.attach(0)),E.uniform1i(We.uniforms.uSource,Ie.read.attach(1)),E.uniform1f(We.uniforms.dissipation,gt.DENSITY_DISSIPATION),Pt(Ie.write),Ie.swap()}function $i(D){E.blendFunc(E.ONE,E.ONE_MINUS_SRC_ALPHA),E.enable(E.BLEND),be(D)}function be(D){let j=E.drawingBufferWidth,Y=E.drawingBufferHeight;Ve.bind(),gt.SHADING&&E.uniform2f(Ve.uniforms.texelSize,1/j,1/Y),E.uniform1i(Ve.uniforms.uTexture,Ie.read.attach(0)),Pt(D)}function Xn(D){let j=D.deltaX*gt.SPLAT_FORCE,Y=D.deltaY*gt.SPLAT_FORCE;Sn(D.texcoordX,D.texcoordY,j,Y,D.color)}function Qn(D){const j=Ri();j.r*=10,j.g*=10,j.b*=10;let Y=10*(Math.random()-.5),tt=30*(Math.random()-.5);Sn(D.texcoordX,D.texcoordY,Y,tt,j)}function Sn(D,j,Y,tt,ct){Tn.bind(),E.uniform1i(Tn.uniforms.uTarget,Ut.read.attach(0)),E.uniform1f(Tn.uniforms.aspectRatio,et.width/et.height),E.uniform2f(Tn.uniforms.point,D,j),E.uniform3f(Tn.uniforms.color,Y,tt,0),E.uniform1f(Tn.uniforms.radius,Vo(gt.SPLAT_RADIUS/100)),Pt(Ut.write),Ut.swap(),E.uniform1i(Tn.uniforms.uTarget,Ie.read.attach(0)),E.uniform3f(Tn.uniforms.color,ct.r,ct.g,ct.b),Pt(Ie.write),Ie.swap()}function Vo(D){let j=et.width/et.height;return j>1&&(D*=j),D}function Or(D,j,Y,tt){D.id=j,D.down=!0,D.moved=!1,D.texcoordX=Y/et.width,D.texcoordY=1-tt/et.height,D.prevTexcoordX=D.texcoordX,D.prevTexcoordY=D.texcoordY,D.deltaX=0,D.deltaY=0,D.color=Ri()}function An(D,j,Y,tt){D.prevTexcoordX=D.texcoordX,D.prevTexcoordY=D.texcoordY,D.texcoordX=j/et.width,D.texcoordY=1-Y/et.height,D.deltaX=Uo(D.texcoordX-D.prevTexcoordX),D.deltaY=Ji(D.texcoordY-D.prevTexcoordY),D.moved=Math.abs(D.deltaX)>0||Math.abs(D.deltaY)>0,D.color=tt}function Zi(D){D.down=!1}function Uo(D){let j=et.width/et.height;return j<1&&(D*=j),D}function Ji(D){let j=et.width/et.height;return j>1&&(D/=j),D}function Ri(){let D=Ms(Math.random(),1,1);return D.r*=.15,D.g*=.15,D.b*=.15,D}function Ms(D,j,Y){let tt,ct,vt,wt,Lt,he,hn,Ke;switch(wt=Math.floor(D*6),Lt=D*6-wt,he=Y*(1-j),hn=Y*(1-Lt*j),Ke=Y*(1-(1-Lt)*j),wt%6){case 0:tt=Y,ct=Ke,vt=he;break;case 1:tt=hn,ct=Y,vt=he;break;case 2:tt=he,ct=Y,vt=Ke;break;case 3:tt=he,ct=hn,vt=Y;break;case 4:tt=Ke,ct=he,vt=Y;break;case 5:tt=Y,ct=he,vt=hn;break}return{r:tt,g:ct,b:vt}}function Wi(D,j,Y){const tt=Y-j;return(D-j)%tt+j}function Kn(D){let j=E.drawingBufferWidth/E.drawingBufferHeight;j<1&&(j=1/j);const Y=Math.round(D),tt=Math.round(D*j);return E.drawingBufferWidth>E.drawingBufferHeight?{width:tt,height:Y}:{width:Y,height:tt}}function Fe(D){const j=window.devicePixelRatio||1;return Math.floor(D*j)}function Un(D){if(D.length===0)return 0;let j=0;for(let Y=0;Y<D.length;Y++)j=(j<<5)-j+D.charCodeAt(Y),j|=0;return j}const bn=D=>{let j=Rt[0],Y=Fe(D.clientX),tt=Fe(D.clientY);Or(j,-1,Y,tt),Qn(j)},ye=D=>{let j=Rt[0],Y=Fe(D.clientX),tt=Fe(D.clientY),ct=Ri();An(j,Y,tt,ct),document.body.removeEventListener("mousemove",ye)},De=D=>{let j=Rt[0],Y=Fe(D.clientX),tt=Fe(D.clientY),ct=j.color;An(j,Y,tt,ct)},Rn=D=>{const j=D.targetTouches;let Y=Rt[0];for(let tt=0;tt<j.length;tt++){let ct=Fe(j[tt].clientX),vt=Fe(j[tt].clientY);Or(Y,j[tt].identifier,ct,vt)}document.body.removeEventListener("touchstart",Rn)},tr=D=>{const j=D.targetTouches;let Y=Rt[0];for(let tt=0;tt<j.length;tt++){let ct=Fe(j[tt].clientX),vt=Fe(j[tt].clientY);Or(Y,j[tt].identifier,ct,vt)}},Ea=D=>{const j=D.targetTouches;let Y=Rt[0];for(let tt=0;tt<j.length;tt++){let ct=Fe(j[tt].clientX),vt=Fe(j[tt].clientY);An(Y,ct,vt,Y.color)}},Vs=D=>{const j=D.changedTouches;let Y=Rt[0];for(let tt=0;tt<j.length;tt++)Zi(Y)};return window.addEventListener("mousedown",bn),document.body.addEventListener("mousemove",ye),window.addEventListener("mousemove",De),document.body.addEventListener("touchstart",Rn),window.addEventListener("touchstart",tr),window.addEventListener("touchmove",Ea,!1),window.addEventListener("touchend",Vs),Ue||(Ue=!0,cn=requestAnimationFrame(_n)),()=>{try{window.removeEventListener("mousedown",bn),document.body.removeEventListener("mousemove",ye),window.removeEventListener("mousemove",De),document.body.removeEventListener("touchstart",Rn),window.removeEventListener("touchstart",tr),window.removeEventListener("touchmove",Ea,!1),window.removeEventListener("touchend",Vs)}catch{}cn&&cancelAnimationFrame(cn)}},[r,t,i,a,l,c,d,g,y,_,A,b,N,H]),Q.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:Q.jsx("canvas",{ref:it,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}function yD(){const[r,t]=le.useState(null),[i,a]=le.useState(null),[l,c]=le.useState(!0);return le.useEffect(()=>{const d=gR(Mh,async g=>{if(g){t(g);try{const y=await zI(go(ms,"users",g.uid));y.exists()&&a(y.data().role)}catch(y){console.error("Error fetching user role:",y)}}else t(null),a(null);c(!1)});return()=>d()},[]),l?Q.jsxs("div",{className:"min-h-screen flex items-center justify-center p-8 bg-[#f5f4dc]",children:[Q.jsx("div",{className:"w-full max-w-md relative",children:Q.jsxs("div",{className:"relative z-10 bg-[#fffdfd]/95 border-4 border-black p-8 text-center",style:{boxShadow:"16px 16px 0 0 #000"},children:[Q.jsx("h2",{className:"text-2xl font-bold text-[#111827] mb-2",children:"Učitavanje"}),Q.jsx("p",{className:"text-sm text-gray-700",children:"Molimo pričekajte..."}),Q.jsxs("div",{className:"mt-4 flex items-center justify-center gap-2",children:[Q.jsx("span",{className:"inline-block w-3 h-3 bg-primary rounded-sm animate-pulse"}),Q.jsx("span",{style:{animationDelay:"0.12s"},className:"inline-block w-3 h-3 bg-primary rounded-sm animate-pulse"}),Q.jsx("span",{style:{animationDelay:"0.24s"},className:"inline-block w-3 h-3 bg-primary rounded-sm animate-pulse"})]})]})}),Q.jsx(pD,{})]}):r?i==="admin"?Q.jsx(gD,{}):Q.jsx(mD,{}):Q.jsx(fD,{})}const _D=OS.createRoot(document.getElementById("root"));_D.render(Q.jsx(AS.StrictMode,{children:Q.jsx(yD,{})}));
