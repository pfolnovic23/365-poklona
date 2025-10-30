(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function mE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dd={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function TA(){if(N_)return Cl;N_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Cl.Fragment=t,Cl.jsx=i,Cl.jsxs=i,Cl}var O_;function SA(){return O_||(O_=1,Dd.exports=TA()),Dd.exports}var nt=SA(),Nd={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function AA(){if(x_)return It;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.iterator;function Y(V){return V===null||typeof V!="object"?null:(V=N&&V[N]||V["@@iterator"],typeof V=="function"?V:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},et=Object.assign,rt={};function ht(V,Z,ot){this.props=V,this.context=Z,this.refs=rt,this.updater=ot||$}ht.prototype.isReactComponent={},ht.prototype.setState=function(V,Z){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Z,"setState")},ht.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Tt(){}Tt.prototype=ht.prototype;function M(V,Z,ot){this.props=V,this.context=Z,this.refs=rt,this.updater=ot||$}var Ut=M.prototype=new Tt;Ut.constructor=M,et(Ut,ht.prototype),Ut.isPureReactComponent=!0;var le=Array.isArray;function Nt(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function R(V,Z,ot){var lt=ot.ref;return{$$typeof:r,type:V,key:Z,ref:lt!==void 0?lt:null,props:ot}}function U(V,Z){return R(V.type,Z,V.props)}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function L(V){var Z={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ot){return Z[ot]})}var w=/\/+/g;function Ft(V,Z){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):Z.toString(36)}function we(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(Nt,Nt):(V.status="pending",V.then(function(Z){V.status==="pending"&&(V.status="fulfilled",V.value=Z)},function(Z){V.status==="pending"&&(V.status="rejected",V.reason=Z)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function X(V,Z,ot,lt,pt){var _t=typeof V;(_t==="undefined"||_t==="boolean")&&(V=null);var ut=!1;if(V===null)ut=!0;else switch(_t){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(V.$$typeof){case r:case t:ut=!0;break;case S:return ut=V._init,X(ut(V._payload),Z,ot,lt,pt)}}if(ut)return pt=pt(V),ut=lt===""?"."+Ft(V,0):lt,le(pt)?(ot="",ut!=null&&(ot=ut.replace(w,"$&/")+"/"),X(pt,Z,ot,"",function(an){return an})):pt!=null&&(O(pt)&&(pt=U(pt,ot+(pt.key==null||V&&V.key===pt.key?"":(""+pt.key).replace(w,"$&/")+"/")+ut)),Z.push(pt)),1;ut=0;var Ee=lt===""?".":lt+":";if(le(V))for(var ie=0;ie<V.length;ie++)lt=V[ie],_t=Ee+Ft(lt,ie),ut+=X(lt,Z,ot,_t,pt);else if(ie=Y(V),typeof ie=="function")for(V=ie.call(V),ie=0;!(lt=V.next()).done;)lt=lt.value,_t=Ee+Ft(lt,ie++),ut+=X(lt,Z,ot,_t,pt);else if(_t==="object"){if(typeof V.then=="function")return X(we(V),Z,ot,lt,pt);throw Z=String(V),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ut}function at(V,Z,ot){if(V==null)return V;var lt=[],pt=0;return X(V,lt,"","",function(_t){return Z.call(ot,_t,pt++)}),lt}function yt(V){if(V._status===-1){var Z=V._result;Z=Z(),Z.then(function(ot){(V._status===0||V._status===-1)&&(V._status=1,V._result=ot)},function(ot){(V._status===0||V._status===-1)&&(V._status=2,V._result=ot)}),V._status===-1&&(V._status=0,V._result=Z)}if(V._status===1)return V._result.default;throw V._result}var Gt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},$t={map:at,forEach:function(V,Z,ot){at(V,function(){Z.apply(this,arguments)},ot)},count:function(V){var Z=0;return at(V,function(){Z++}),Z},toArray:function(V){return at(V,function(Z){return Z})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return It.Activity=A,It.Children=$t,It.Component=ht,It.Fragment=i,It.Profiler=l,It.PureComponent=M,It.StrictMode=a,It.Suspense=_,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,It.__COMPILER_RUNTIME={__proto__:null,c:function(V){return I.H.useMemoCache(V)}},It.cache=function(V){return function(){return V.apply(null,arguments)}},It.cacheSignal=function(){return null},It.cloneElement=function(V,Z,ot){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var lt=et({},V.props),pt=V.key;if(Z!=null)for(_t in Z.key!==void 0&&(pt=""+Z.key),Z)!b.call(Z,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&Z.ref===void 0||(lt[_t]=Z[_t]);var _t=arguments.length-2;if(_t===1)lt.children=ot;else if(1<_t){for(var ut=Array(_t),Ee=0;Ee<_t;Ee++)ut[Ee]=arguments[Ee+2];lt.children=ut}return R(V.type,pt,lt)},It.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},It.createElement=function(V,Z,ot){var lt,pt={},_t=null;if(Z!=null)for(lt in Z.key!==void 0&&(_t=""+Z.key),Z)b.call(Z,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(pt[lt]=Z[lt]);var ut=arguments.length-2;if(ut===1)pt.children=ot;else if(1<ut){for(var Ee=Array(ut),ie=0;ie<ut;ie++)Ee[ie]=arguments[ie+2];pt.children=Ee}if(V&&V.defaultProps)for(lt in ut=V.defaultProps,ut)pt[lt]===void 0&&(pt[lt]=ut[lt]);return R(V,_t,pt)},It.createRef=function(){return{current:null}},It.forwardRef=function(V){return{$$typeof:g,render:V}},It.isValidElement=O,It.lazy=function(V){return{$$typeof:S,_payload:{_status:-1,_result:V},_init:yt}},It.memo=function(V,Z){return{$$typeof:y,type:V,compare:Z===void 0?null:Z}},It.startTransition=function(V){var Z=I.T,ot={};I.T=ot;try{var lt=V(),pt=I.S;pt!==null&&pt(ot,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Nt,Gt)}catch(_t){Gt(_t)}finally{Z!==null&&ot.types!==null&&(Z.types=ot.types),I.T=Z}},It.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},It.use=function(V){return I.H.use(V)},It.useActionState=function(V,Z,ot){return I.H.useActionState(V,Z,ot)},It.useCallback=function(V,Z){return I.H.useCallback(V,Z)},It.useContext=function(V){return I.H.useContext(V)},It.useDebugValue=function(){},It.useDeferredValue=function(V,Z){return I.H.useDeferredValue(V,Z)},It.useEffect=function(V,Z){return I.H.useEffect(V,Z)},It.useEffectEvent=function(V){return I.H.useEffectEvent(V)},It.useId=function(){return I.H.useId()},It.useImperativeHandle=function(V,Z,ot){return I.H.useImperativeHandle(V,Z,ot)},It.useInsertionEffect=function(V,Z){return I.H.useInsertionEffect(V,Z)},It.useLayoutEffect=function(V,Z){return I.H.useLayoutEffect(V,Z)},It.useMemo=function(V,Z){return I.H.useMemo(V,Z)},It.useOptimistic=function(V,Z){return I.H.useOptimistic(V,Z)},It.useReducer=function(V,Z,ot){return I.H.useReducer(V,Z,ot)},It.useRef=function(V){return I.H.useRef(V)},It.useState=function(V){return I.H.useState(V)},It.useSyncExternalStore=function(V,Z,ot){return I.H.useSyncExternalStore(V,Z,ot)},It.useTransition=function(){return I.H.useTransition()},It.version="19.2.0",It}var M_;function vm(){return M_||(M_=1,Nd.exports=AA()),Nd.exports}var ce=vm();const bA=mE(ce);var Od={exports:{}},Il={},xd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function RA(){return V_||(V_=1,(function(r){function t(X,at){var yt=X.length;X.push(at);t:for(;0<yt;){var Gt=yt-1>>>1,$t=X[Gt];if(0<l($t,at))X[Gt]=at,X[yt]=$t,yt=Gt;else break t}}function i(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var at=X[0],yt=X.pop();if(yt!==at){X[0]=yt;t:for(var Gt=0,$t=X.length,V=$t>>>1;Gt<V;){var Z=2*(Gt+1)-1,ot=X[Z],lt=Z+1,pt=X[lt];if(0>l(ot,yt))lt<$t&&0>l(pt,ot)?(X[Gt]=pt,X[lt]=yt,Gt=lt):(X[Gt]=ot,X[Z]=yt,Gt=Z);else if(lt<$t&&0>l(pt,yt))X[Gt]=pt,X[lt]=yt,Gt=lt;else break t}}return at}function l(X,at){var yt=X.sortIndex-at.sortIndex;return yt!==0?yt:X.id-at.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();r.unstable_now=function(){return d.now()-g}}var _=[],y=[],S=1,A=null,N=3,Y=!1,$=!1,et=!1,rt=!1,ht=typeof setTimeout=="function"?setTimeout:null,Tt=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function Ut(X){for(var at=i(y);at!==null;){if(at.callback===null)a(y);else if(at.startTime<=X)a(y),at.sortIndex=at.expirationTime,t(_,at);else break;at=i(y)}}function le(X){if(et=!1,Ut(X),!$)if(i(_)!==null)$=!0,Nt||(Nt=!0,L());else{var at=i(y);at!==null&&we(le,at.startTime-X)}}var Nt=!1,I=-1,b=5,R=-1;function U(){return rt?!0:!(r.unstable_now()-R<b)}function O(){if(rt=!1,Nt){var X=r.unstable_now();R=X;var at=!0;try{t:{$=!1,et&&(et=!1,Tt(I),I=-1),Y=!0;var yt=N;try{e:{for(Ut(X),A=i(_);A!==null&&!(A.expirationTime>X&&U());){var Gt=A.callback;if(typeof Gt=="function"){A.callback=null,N=A.priorityLevel;var $t=Gt(A.expirationTime<=X);if(X=r.unstable_now(),typeof $t=="function"){A.callback=$t,Ut(X),at=!0;break e}A===i(_)&&a(_),Ut(X)}else a(_);A=i(_)}if(A!==null)at=!0;else{var V=i(y);V!==null&&we(le,V.startTime-X),at=!1}}break t}finally{A=null,N=yt,Y=!1}at=void 0}}finally{at?L():Nt=!1}}}var L;if(typeof M=="function")L=function(){M(O)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,Ft=w.port2;w.port1.onmessage=O,L=function(){Ft.postMessage(null)}}else L=function(){ht(O,0)};function we(X,at){I=ht(function(){X(r.unstable_now())},at)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(X){switch(N){case 1:case 2:case 3:var at=3;break;default:at=N}var yt=N;N=at;try{return X()}finally{N=yt}},r.unstable_requestPaint=function(){rt=!0},r.unstable_runWithPriority=function(X,at){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var yt=N;N=X;try{return at()}finally{N=yt}},r.unstable_scheduleCallback=function(X,at,yt){var Gt=r.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Gt+yt:Gt):yt=Gt,X){case 1:var $t=-1;break;case 2:$t=250;break;case 5:$t=1073741823;break;case 4:$t=1e4;break;default:$t=5e3}return $t=yt+$t,X={id:S++,callback:at,priorityLevel:X,startTime:yt,expirationTime:$t,sortIndex:-1},yt>Gt?(X.sortIndex=yt,t(y,X),i(_)===null&&X===i(y)&&(et?(Tt(I),I=-1):et=!0,we(le,yt-Gt))):(X.sortIndex=$t,t(_,X),$||Y||($=!0,Nt||(Nt=!0,L()))),X},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(X){var at=N;return function(){var yt=N;N=at;try{return X.apply(this,arguments)}finally{N=yt}}}})(Md)),Md}var U_;function wA(){return U_||(U_=1,xd.exports=RA()),xd.exports}var Vd={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function CA(){if(L_)return on;L_=1;var r=vm();function t(_){var y="https://react.dev/errors/"+_;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(_,y,S){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:A==null?null:""+A,children:_,containerInfo:y,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,y){if(_==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,on.createPortal=function(_,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(_,y,null,S)},on.flushSync=function(_){var y=d.T,S=a.p;try{if(d.T=null,a.p=2,_)return _()}finally{d.T=y,a.p=S,a.d.f()}},on.preconnect=function(_,y){typeof _=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(_,y))},on.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},on.preinit=function(_,y){if(typeof _=="string"&&y&&typeof y.as=="string"){var S=y.as,A=g(S,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,Y=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?a.d.S(_,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:N,fetchPriority:Y}):S==="script"&&a.d.X(_,{crossOrigin:A,integrity:N,fetchPriority:Y,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(_,y){if(typeof _=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=g(y.as,y.crossOrigin);a.d.M(_,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(_)},on.preload=function(_,y){if(typeof _=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,A=g(S,y.crossOrigin);a.d.L(_,S,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(_,y){if(typeof _=="string")if(y){var S=g(y.as,y.crossOrigin);a.d.m(_,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(_)},on.requestFormReset=function(_){a.d.r(_)},on.unstable_batchedUpdates=function(_,y){return _(y)},on.useFormState=function(_,y,S){return d.H.useFormState(_,y,S)},on.useFormStatus=function(){return d.H.useHostTransitionStatus()},on.version="19.2.0",on}var P_;function IA(){if(P_)return Vd.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Vd.exports=CA(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function DA(){if(k_)return Il;k_=1;var r=wA(),t=vm(),i=IA();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(c(e)!==e)throw Error(a(188))}function y(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return _(h),e;if(f===o)return _(h),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=f;else{for(var p=!1,E=h.child;E;){if(E===s){p=!0,s=h,o=f;break}if(E===o){p=!0,o=h,s=f;break}E=E.sibling}if(!p){for(E=f.child;E;){if(E===s){p=!0,s=f,o=h;break}if(E===o){p=!0,o=f,s=h;break}E=E.sibling}if(!p)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var A=Object.assign,N=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),Tt=Symbol.for("react.consumer"),M=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),Nt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function Ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case et:return"Fragment";case ht:return"Profiler";case rt:return"StrictMode";case le:return"Suspense";case Nt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case M:return e.displayName||"Context";case Tt:return(e._context.displayName||"Context")+".Consumer";case Ut:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:Ft(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return Ft(e(n))}catch{}}return null}var we=Array.isArray,X=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Gt=[],$t=-1;function V(e){return{current:e}}function Z(e){0>$t||(e.current=Gt[$t],Gt[$t]=null,$t--)}function ot(e,n){$t++,Gt[$t]=e.current,e.current=n}var lt=V(null),pt=V(null),_t=V(null),ut=V(null);function Ee(e,n){switch(ot(_t,n),ot(pt,e),ot(lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wy(n),e=t_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(lt),ot(lt,e)}function ie(){Z(lt),Z(pt),Z(_t)}function an(e){e.memoizedState!==null&&ot(ut,e);var n=lt.current,s=t_(n,e.type);n!==s&&(ot(pt,e),ot(lt,s))}function Qi(e){pt.current===e&&(Z(lt),Z(pt)),ut.current===e&&(Z(ut),Al._currentValue=yt)}var _i,fn;function Ae(e){if(_i===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);_i=n&&n[1]||"",fn=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_i+e+fn}var Ki=!1;function ii(e,n){if(!e||Ki)return"";Ki=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var j=H}Reflect.construct(e,[],J)}else{try{J.call()}catch(H){j=H}e.call(J.prototype)}}else{try{throw Error()}catch(H){j=H}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&j&&typeof H.stack=="string")return[H.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),p=f[0],E=f[1];if(p&&E){var C=p.split(`
`),B=E.split(`
`);for(h=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(o===C.length||h===B.length)for(o=C.length-1,h=B.length-1;1<=o&&0<=h&&C[o]!==B[h];)h--;for(;1<=o&&0<=h;o--,h--)if(C[o]!==B[h]){if(o!==1||h!==1)do if(o--,h--,0>h||C[o]!==B[h]){var Q=`
`+C[o].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=o&&0<=h);break}}}finally{Ki=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ae(s):""}function zn(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return ii(e.type,!1);case 11:return ii(e.type.render,!1);case 1:return ii(e.type,!0);case 31:return Ae("Activity");default:return""}}function vi(e){try{var n="",s=null;do n+=zn(e,s),s=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var he=Object.prototype.hasOwnProperty,pe=r.unstable_scheduleCallback,ri=r.unstable_cancelCallback,Ei=r.unstable_shouldYield,br=r.unstable_requestPaint,Ke=r.unstable_now,Ti=r.unstable_getCurrentPriorityLevel,Is=r.unstable_ImmediatePriority,Rr=r.unstable_UserBlockingPriority,wn=r.unstable_NormalPriority,wr=r.unstable_LowPriority,fa=r.unstable_IdlePriority,da=r.log,ma=r.unstable_setDisableYieldValue,Cn=null,Be=null;function gn(e){if(typeof da=="function"&&ma(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(Cn,e)}catch{}}var Te=Math.clz32?Math.clz32:Ds,ga=Math.log,Cr=Math.LN2;function Ds(e){return e>>>=0,e===0?32:31-(ga(e)/Cr|0)|0}var Bn=256,si=262144,ye=4194304;function jn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qn(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=jn(o):(p&=E,p!==0?h=jn(p):s||(s=E&~e,s!==0&&(h=jn(s))))):(E=o&~f,E!==0?h=jn(E):p!==0?h=jn(p):s||(s=o&~e,s!==0&&(h=jn(s)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:h}function In(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ir(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pa(){var e=ye;return ye<<=1,(ye&62914560)===0&&(ye=4194304),e}function Hn(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function Si(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,n,s,o,h,f){var p=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,C=e.expirationTimes,B=e.hiddenUpdates;for(s=p&~s;0<s;){var Q=31-Te(s),J=1<<Q;E[Q]=0,C[Q]=-1;var j=B[Q];if(j!==null)for(B[Q]=null,Q=0;Q<j.length;Q++){var H=j[Q];H!==null&&(H.lane&=-536870913)}s&=~J}o!==0&&$i(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function $i(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Te(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function D(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-Te(s),h=1<<o;h&n|e[o]&n&&(e[o]|=n),s&=~h}}function F(e,n){var s=n&-n;return s=(s&42)!==0?1:G(s),(s&(e.suspendedLanes|n))!==0?0:s}function G(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mt(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function St(e,n){var s=at.p;try{return at.p=e,n()}finally{at.p=s}}var wt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+wt,Lt="__reactProps$"+wt,Ce="__reactContainer$"+wt,pn="__reactEvents$"+wt,Vh="__reactListeners$"+wt,ou="__reactHandles$"+wt,lu="__reactResources$"+wt,Ai="__reactMarker$"+wt;function ya(e){delete e[Vt],delete e[Lt],delete e[pn],delete e[Vh],delete e[ou]}function bi(e){var n=e[Vt];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Ce]||s[Vt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=o_(e);e!==null;){if(s=e[Vt])return s;e=o_(e)}return n}e=s,s=e.parentNode}return null}function Fn(e){if(e=e[Vt]||e[Ce]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Dn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Ri(e){var n=e[lu];return n||(n=e[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(e){e[Ai]=!0}var No=new Set,Oo={};function wi(e,n){Ci(e,n),Ci(e+"Capture",n)}function Ci(e,n){for(Oo[e]=n,e=0;e<n.length;e++)No.add(n[e])}var xo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},Vo={};function uu(e){return he.call(Vo,e)?!0:he.call(Mo,e)?!1:xo.test(e)?Vo[e]=!0:(Mo[e]=!0,!1)}function _a(e,n,s){if(uu(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Nn(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Me(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function Ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uo(e,n,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(p){s=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function te(e){if(!e._valueTracker){var n=Dr(e)?"checked":"value";e._valueTracker=Uo(e,n,""+e[n])}}function Ns(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=Dr(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Os=/[\n"\\]/g;function yn(e){return e.replace(Os,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function va(e,n,s,o,h,f,p,E){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ye(n)):e.value!==""+Ye(n)&&(e.value=""+Ye(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Lo(e,p,Ye(n)):s!=null?Lo(e,p,Ye(s)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ye(E):e.removeAttribute("name")}function cu(e,n,s,o,h,f,p,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){te(e);return}s=s!=null?""+Ye(s):"",n=n!=null?""+Ye(n):s,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),te(e)}function Lo(e,n,s){n==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Nr(e,n,s,o){if(e=e.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=n.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Ye(s),n=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function hu(e,n,s){if(n!=null&&(n=""+Ye(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Ye(s):""}function Or(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(we(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Ye(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),te(e)}function _n(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var fu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Po(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||fu.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function ko(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&s[h]!==o&&Po(e,h,o)}else for(var f in n)n.hasOwnProperty(f)&&Po(e,f,n[f])}function Ea(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(e){return xr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ai(){}var zo=null;function Gn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Di=null;function xs(e){var n=Fn(e);if(n&&(e=n.stateNode)){var s=e[Lt]||null;t:switch(e=n.stateNode,n.type){case"input":if(va(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var h=o[Lt]||null;if(!h)throw Error(a(90));va(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&Ns(o)}break t;case"textarea":hu(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Nr(e,!!s.multiple,n,!1)}}}var Sa=!1;function Vr(e,n,s){if(Sa)return e(n,s);Sa=!0;try{var o=e(n);return o}finally{if(Sa=!1,(Mr!==null||Di!==null)&&(ac(),Mr&&(n=Mr,e=Di,Di=Mr=null,xs(n),e)))for(n=0;n<e.length;n++)xs(e[n])}}function oi(e,n){var s=e.stateNode;if(s===null)return null;var o=s[Lt]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=!1;if(Yn)try{var re={};Object.defineProperty(re,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{Ms=!1}var Ni=null,Bo=null,Vs=null;function jo(){if(Vs)return Vs;var e,n=Bo,s=n.length,o,h="value"in Ni?Ni.value:Ni.textContent,f=h.length;for(e=0;e<s&&n[e]===h[e];e++);var p=s-e;for(o=1;o<=p&&n[s-o]===h[f-o];o++);return Vs=h.slice(e,1<o?1-o:void 0)}function Us(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function li(){return!1}function $e(e){function n(s,o,h,f,p){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zi:li,this.isPropagationStopped=li,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),n}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=$e(Ji),Ur=A({},Ji,{view:0,detail:0}),qo=$e(Ur),Lr,Aa,xi,ba=A({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Lr=e.screenX-xi.screenX,Aa=e.screenY-xi.screenY):Aa=Lr=0,xi=e),Lr)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Ho=$e(ba),Ls=A({},ba,{dataTransfer:0}),mu=$e(Ls),gu=A({},Ur,{relatedTarget:0}),Ps=$e(gu),Fo=A({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),pu=$e(Fo),Ra=A({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yu=$e(Ra),_u=A({},Ji,{data:0}),Mi=$e(_u),vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tu[e])?!!n[e]:!1}function Pr(){return Su}var dn=A({},Ur,{key:function(e){if(e.key){var n=vu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(e){return e.type==="keypress"?Us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Au=$e(dn),bu=A({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wi=$e(bu),u=A({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),m=$e(u),v=A({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),T=$e(v),k=A({},ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q=$e(k),st=A({},Ji,{newState:0,oldState:0}),Ot=$e(st),Ie=[9,13,27,32],Zt=Yn&&"CompositionEvent"in window,_e=null;Yn&&"documentMode"in document&&(_e=document.documentMode);var Xn=Yn&&"TextEvent"in window&&!_e,Vi=Yn&&(!Zt||_e&&8<_e&&11>=_e),ui=" ",ci=!1;function ks(e,n){switch(e){case"keyup":return Ie.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function G0(e,n){switch(e){case"compositionend":return wa(n);case"keypress":return n.which!==32?null:(ci=!0,ui);case"textInput":return e=n.data,e===ui&&ci?null:e;default:return null}}function Y0(e,n){if(Ca)return e==="compositionend"||!Zt&&ks(e,n)?(e=jo(),Vs=Bo=Ni=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vi&&n.locale!=="ko"?null:n.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!X0[e.type]:n==="textarea"}function hg(e,n,s,o){Mr?Di?Di.push(o):Di=[o]:Mr=o,n=dc(n,"onChange"),0<n.length&&(s=new Oi("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Go=null,Yo=null;function Q0(e){Xy(e,0)}function Ru(e){var n=Dn(e);if(Ns(n))return e}function fg(e,n){if(e==="change")return n}var dg=!1;if(Yn){var Uh;if(Yn){var Lh="oninput"in document;if(!Lh){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),Lh=typeof mg.oninput=="function"}Uh=Lh}else Uh=!1;dg=Uh&&(!document.documentMode||9<document.documentMode)}function gg(){Go&&(Go.detachEvent("onpropertychange",pg),Yo=Go=null)}function pg(e){if(e.propertyName==="value"&&Ru(Yo)){var n=[];hg(n,Yo,e,Gn(e)),Vr(Q0,n)}}function K0(e,n,s){e==="focusin"?(gg(),Go=n,Yo=s,Go.attachEvent("onpropertychange",pg)):e==="focusout"&&gg()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ru(Yo)}function Z0(e,n){if(e==="click")return Ru(n)}function J0(e,n){if(e==="input"||e==="change")return Ru(n)}function W0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var On=typeof Object.is=="function"?Object.is:W0;function Xo(e,n){if(On(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!he.call(n,h)||!On(e[h],n[h]))return!1}return!0}function yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,n){var s=yg(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=yg(s)}}function vg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Eg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ii(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ii(e.document)}return n}function Ph(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tS=Yn&&"documentMode"in document&&11>=document.documentMode,Ia=null,kh=null,Qo=null,zh=!1;function Tg(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zh||Ia==null||Ia!==Ii(o)||(o=Ia,"selectionStart"in o&&Ph(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qo&&Xo(Qo,o)||(Qo=o,o=dc(kh,"onSelect"),0<o.length&&(n=new Oi("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=Ia)))}function zs(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Da={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionrun:zs("Transition","TransitionRun"),transitionstart:zs("Transition","TransitionStart"),transitioncancel:zs("Transition","TransitionCancel"),transitionend:zs("Transition","TransitionEnd")},Bh={},Sg={};Yn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Bs(e){if(Bh[e])return Bh[e];if(!Da[e])return e;var n=Da[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Sg)return Bh[e]=n[s];return e}var Ag=Bs("animationend"),bg=Bs("animationiteration"),Rg=Bs("animationstart"),eS=Bs("transitionrun"),nS=Bs("transitionstart"),iS=Bs("transitioncancel"),wg=Bs("transitionend"),Cg=new Map,jh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jh.push("scrollEnd");function hi(e,n){Cg.set(e,n),wi(n,[e])}var wu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qn=[],Na=0,qh=0;function Cu(){for(var e=Na,n=qh=Na=0;n<e;){var s=Qn[n];Qn[n++]=null;var o=Qn[n];Qn[n++]=null;var h=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,o!==null&&h!==null){var p=o.pending;p===null?h.next=h:(h.next=p.next,p.next=h),o.pending=h}f!==0&&Ig(s,h,f)}}function Iu(e,n,s,o){Qn[Na++]=e,Qn[Na++]=n,Qn[Na++]=s,Qn[Na++]=o,qh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Hh(e,n,s,o){return Iu(e,n,s,o),Du(e)}function js(e,n){return Iu(e,null,null,n),Du(e)}function Ig(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&n!==null&&(h=31-Te(s),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[n]:o.push(n),n.lane=s|536870912),f):null}function Du(e){if(50<pl)throw pl=0,Wf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Oa={};function rS(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,n,s,o){return new rS(e,n,s,o)}function Fh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tr(e,n){var s=e.alternate;return s===null?(s=xn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Dg(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Nu(e,n,s,o,h,f){var p=0;if(o=e,typeof e=="function")Fh(e)&&(p=1);else if(typeof e=="string")p=uA(e,s,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=xn(31,s,n,h),e.elementType=R,e.lanes=f,e;case et:return qs(s.children,h,f,n);case rt:p=8,h|=24;break;case ht:return e=xn(12,s,n,h|2),e.elementType=ht,e.lanes=f,e;case le:return e=xn(13,s,n,h),e.elementType=le,e.lanes=f,e;case Nt:return e=xn(19,s,n,h),e.elementType=Nt,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:p=10;break t;case Tt:p=9;break t;case Ut:p=11;break t;case I:p=14;break t;case b:p=16,o=null;break t}p=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=xn(p,s,n,h),n.elementType=e,n.type=o,n.lanes=f,n}function qs(e,n,s,o){return e=xn(7,e,o,n),e.lanes=s,e}function Gh(e,n,s){return e=xn(6,e,null,n),e.lanes=s,e}function Ng(e){var n=xn(18,null,null,0);return n.stateNode=e,n}function Yh(e,n,s){return n=xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Og=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var s=Og.get(e);return s!==void 0?s:(n={value:e,source:n,stack:vi(n)},Og.set(e,n),n)}return{value:e,source:n,stack:vi(n)}}var xa=[],Ma=0,Ou=null,Ko=0,$n=[],Zn=0,kr=null,Ui=1,Li="";function er(e,n){xa[Ma++]=Ko,xa[Ma++]=Ou,Ou=e,Ko=n}function xg(e,n,s){$n[Zn++]=Ui,$n[Zn++]=Li,$n[Zn++]=kr,kr=e;var o=Ui;e=Li;var h=32-Te(o)-1;o&=~(1<<h),s+=1;var f=32-Te(n)+h;if(30<f){var p=h-h%5;f=(o&(1<<p)-1).toString(32),o>>=p,h-=p,Ui=1<<32-Te(n)+h|s<<h|o,Li=f+e}else Ui=1<<f|s<<h|o,Li=e}function Xh(e){e.return!==null&&(er(e,1),xg(e,1,0))}function Qh(e){for(;e===Ou;)Ou=xa[--Ma],xa[Ma]=null,Ko=xa[--Ma],xa[Ma]=null;for(;e===kr;)kr=$n[--Zn],$n[Zn]=null,Li=$n[--Zn],$n[Zn]=null,Ui=$n[--Zn],$n[Zn]=null}function Mg(e,n){$n[Zn++]=Ui,$n[Zn++]=Li,$n[Zn++]=kr,Ui=n.id,Li=n.overflow,kr=e}var Ze=null,fe=null,Yt=!1,zr=null,Jn=!1,Kh=Error(a(519));function Br(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(Kn(n,e)),Kh}function Vg(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[Vt]=e,n[Lt]=o,s){case"dialog":kt("cancel",n),kt("close",n);break;case"iframe":case"object":case"embed":kt("load",n);break;case"video":case"audio":for(s=0;s<_l.length;s++)kt(_l[s],n);break;case"source":kt("error",n);break;case"img":case"image":case"link":kt("error",n),kt("load",n);break;case"details":kt("toggle",n);break;case"input":kt("invalid",n),cu(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":kt("invalid",n);break;case"textarea":kt("invalid",n),Or(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||Zy(n.textContent,s)?(o.popover!=null&&(kt("beforetoggle",n),kt("toggle",n)),o.onScroll!=null&&kt("scroll",n),o.onScrollEnd!=null&&kt("scrollend",n),o.onClick!=null&&(n.onclick=ai),n=!0):n=!1,n||Br(e,!0)}function Ug(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:Ze=Ze.return}}function Va(e){if(e!==Ze)return!1;if(!Yt)return Ug(e),Yt=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||md(e.type,e.memoizedProps)),s=!s),s&&fe&&Br(e),Ug(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));fe=a_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));fe=a_(e)}else n===27?(n=fe,ts(e.type)?(e=vd,vd=null,fe=e):fe=n):fe=Ze?ti(e.stateNode.nextSibling):null;return!0}function Hs(){fe=Ze=null,Yt=!1}function $h(){var e=zr;return e!==null&&(Sn===null?Sn=e:Sn.push.apply(Sn,e),zr=null),e}function $o(e){zr===null?zr=[e]:zr.push(e)}var Zh=V(null),Fs=null,nr=null;function jr(e,n,s){ot(Zh,n._currentValue),n._currentValue=s}function ir(e){e._currentValue=Zh.current,Z(Zh)}function Jh(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Wh(e,n,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var p=h.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=h;for(var C=0;C<n.length;C++)if(E.context===n[C]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),Jh(f.return,s,e),o||(p=null);break t}f=E.next}}else if(h.tag===18){if(p=h.return,p===null)throw Error(a(341));p.lanes|=s,f=p.alternate,f!==null&&(f.lanes|=s),Jh(p,s,e),p=null}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===e){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}}function Ua(e,n,s,o){e=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var p=h.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var E=h.type;On(h.pendingProps.value,p.value)||(e!==null?e.push(E):e=[E])}}else if(h===ut.current){if(p=h.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&Wh(n,e,s,o),n.flags|=262144}function xu(e){for(e=e.firstContext;e!==null;){if(!On(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gs(e){Fs=e,nr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Lg(Fs,e)}function Mu(e,n){return Fs===null&&Gs(e),Lg(e,n)}function Lg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},nr===null){if(e===null)throw Error(a(308));nr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else nr=nr.next=n;return s}var sS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},aS=r.unstable_scheduleCallback,oS=r.unstable_NormalPriority,Ve={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new sS,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&aS(oS,function(){e.controller.abort()})}var Jo=null,ef=0,La=0,Pa=null;function lS(e,n){if(Jo===null){var s=Jo=[];ef=0,La=sd(),Pa={status:"pending",value:void 0,then:function(o){s.push(o)}}}return ef++,n.then(Pg,Pg),n}function Pg(){if(--ef===0&&Jo!==null){Pa!==null&&(Pa.status="fulfilled");var e=Jo;Jo=null,La=0,Pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uS(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var kg=X.S;X.S=function(e,n){Ty=Ke(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lS(e,n),kg!==null&&kg(e,n)};var Ys=V(null);function nf(){var e=Ys.current;return e!==null?e:ue.pooledCache}function Vu(e,n){n===null?ot(Ys,Ys.current):ot(Ys,n.pool)}function zg(){var e=nf();return e===null?null:{parent:Ve._currentValue,pool:e}}var ka=Error(a(460)),rf=Error(a(474)),Uu=Error(a(542)),Lu={then:function(){}};function Bg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jg(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(ai,ai),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hg(e),e;default:if(typeof n.status=="string")n.then(ai,ai);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hg(e),e}throw Qs=n,ka}}function Xs(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,ka):s}}var Qs=null;function qg(){if(Qs===null)throw Error(a(459));var e=Qs;return Qs=null,e}function Hg(e){if(e===ka||e===Uu)throw Error(a(483))}var za=null,Wo=0;function Pu(e){var n=Wo;return Wo+=1,za===null&&(za=[]),jg(za,e,n)}function tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ku(e,n){throw n.$$typeof===N?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fg(e){function n(P,x){if(e){var z=P.deletions;z===null?(P.deletions=[x],P.flags|=16):z.push(x)}}function s(P,x){if(!e)return null;for(;x!==null;)n(P,x),x=x.sibling;return null}function o(P){for(var x=new Map;P!==null;)P.key!==null?x.set(P.key,P):x.set(P.index,P),P=P.sibling;return x}function h(P,x){return P=tr(P,x),P.index=0,P.sibling=null,P}function f(P,x,z){return P.index=z,e?(z=P.alternate,z!==null?(z=z.index,z<x?(P.flags|=67108866,x):z):(P.flags|=67108866,x)):(P.flags|=1048576,x)}function p(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,x,z,K){return x===null||x.tag!==6?(x=Gh(z,P.mode,K),x.return=P,x):(x=h(x,z),x.return=P,x)}function C(P,x,z,K){var vt=z.type;return vt===et?Q(P,x,z.props.children,K,z.key):x!==null&&(x.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===b&&Xs(vt)===x.type)?(x=h(x,z.props),tl(x,z),x.return=P,x):(x=Nu(z.type,z.key,z.props,null,P.mode,K),tl(x,z),x.return=P,x)}function B(P,x,z,K){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Yh(z,P.mode,K),x.return=P,x):(x=h(x,z.children||[]),x.return=P,x)}function Q(P,x,z,K,vt){return x===null||x.tag!==7?(x=qs(z,P.mode,K,vt),x.return=P,x):(x=h(x,z),x.return=P,x)}function J(P,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Gh(""+x,P.mode,z),x.return=P,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return z=Nu(x.type,x.key,x.props,null,P.mode,z),tl(z,x),z.return=P,z;case $:return x=Yh(x,P.mode,z),x.return=P,x;case b:return x=Xs(x),J(P,x,z)}if(we(x)||L(x))return x=qs(x,P.mode,z,null),x.return=P,x;if(typeof x.then=="function")return J(P,Pu(x),z);if(x.$$typeof===M)return J(P,Mu(P,x),z);ku(P,x)}return null}function j(P,x,z,K){var vt=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return vt!==null?null:E(P,x,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Y:return z.key===vt?C(P,x,z,K):null;case $:return z.key===vt?B(P,x,z,K):null;case b:return z=Xs(z),j(P,x,z,K)}if(we(z)||L(z))return vt!==null?null:Q(P,x,z,K,null);if(typeof z.then=="function")return j(P,x,Pu(z),K);if(z.$$typeof===M)return j(P,x,Mu(P,z),K);ku(P,z)}return null}function H(P,x,z,K,vt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(z)||null,E(x,P,""+K,vt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:return P=P.get(K.key===null?z:K.key)||null,C(x,P,K,vt);case $:return P=P.get(K.key===null?z:K.key)||null,B(x,P,K,vt);case b:return K=Xs(K),H(P,x,z,K,vt)}if(we(K)||L(K))return P=P.get(z)||null,Q(x,P,K,vt,null);if(typeof K.then=="function")return H(P,x,z,Pu(K),vt);if(K.$$typeof===M)return H(P,x,z,Mu(x,K),vt);ku(x,K)}return null}function ft(P,x,z,K){for(var vt=null,Qt=null,gt=x,Mt=x=0,Bt=null;gt!==null&&Mt<z.length;Mt++){gt.index>Mt?(Bt=gt,gt=null):Bt=gt.sibling;var Kt=j(P,gt,z[Mt],K);if(Kt===null){gt===null&&(gt=Bt);break}e&&gt&&Kt.alternate===null&&n(P,gt),x=f(Kt,x,Mt),Qt===null?vt=Kt:Qt.sibling=Kt,Qt=Kt,gt=Bt}if(Mt===z.length)return s(P,gt),Yt&&er(P,Mt),vt;if(gt===null){for(;Mt<z.length;Mt++)gt=J(P,z[Mt],K),gt!==null&&(x=f(gt,x,Mt),Qt===null?vt=gt:Qt.sibling=gt,Qt=gt);return Yt&&er(P,Mt),vt}for(gt=o(gt);Mt<z.length;Mt++)Bt=H(gt,P,Mt,z[Mt],K),Bt!==null&&(e&&Bt.alternate!==null&&gt.delete(Bt.key===null?Mt:Bt.key),x=f(Bt,x,Mt),Qt===null?vt=Bt:Qt.sibling=Bt,Qt=Bt);return e&&gt.forEach(function(ss){return n(P,ss)}),Yt&&er(P,Mt),vt}function At(P,x,z,K){if(z==null)throw Error(a(151));for(var vt=null,Qt=null,gt=x,Mt=x=0,Bt=null,Kt=z.next();gt!==null&&!Kt.done;Mt++,Kt=z.next()){gt.index>Mt?(Bt=gt,gt=null):Bt=gt.sibling;var ss=j(P,gt,Kt.value,K);if(ss===null){gt===null&&(gt=Bt);break}e&&gt&&ss.alternate===null&&n(P,gt),x=f(ss,x,Mt),Qt===null?vt=ss:Qt.sibling=ss,Qt=ss,gt=Bt}if(Kt.done)return s(P,gt),Yt&&er(P,Mt),vt;if(gt===null){for(;!Kt.done;Mt++,Kt=z.next())Kt=J(P,Kt.value,K),Kt!==null&&(x=f(Kt,x,Mt),Qt===null?vt=Kt:Qt.sibling=Kt,Qt=Kt);return Yt&&er(P,Mt),vt}for(gt=o(gt);!Kt.done;Mt++,Kt=z.next())Kt=H(gt,P,Mt,Kt.value,K),Kt!==null&&(e&&Kt.alternate!==null&&gt.delete(Kt.key===null?Mt:Kt.key),x=f(Kt,x,Mt),Qt===null?vt=Kt:Qt.sibling=Kt,Qt=Kt);return e&&gt.forEach(function(EA){return n(P,EA)}),Yt&&er(P,Mt),vt}function oe(P,x,z,K){if(typeof z=="object"&&z!==null&&z.type===et&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Y:t:{for(var vt=z.key;x!==null;){if(x.key===vt){if(vt=z.type,vt===et){if(x.tag===7){s(P,x.sibling),K=h(x,z.props.children),K.return=P,P=K;break t}}else if(x.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===b&&Xs(vt)===x.type){s(P,x.sibling),K=h(x,z.props),tl(K,z),K.return=P,P=K;break t}s(P,x);break}else n(P,x);x=x.sibling}z.type===et?(K=qs(z.props.children,P.mode,K,z.key),K.return=P,P=K):(K=Nu(z.type,z.key,z.props,null,P.mode,K),tl(K,z),K.return=P,P=K)}return p(P);case $:t:{for(vt=z.key;x!==null;){if(x.key===vt)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){s(P,x.sibling),K=h(x,z.children||[]),K.return=P,P=K;break t}else{s(P,x);break}else n(P,x);x=x.sibling}K=Yh(z,P.mode,K),K.return=P,P=K}return p(P);case b:return z=Xs(z),oe(P,x,z,K)}if(we(z))return ft(P,x,z,K);if(L(z)){if(vt=L(z),typeof vt!="function")throw Error(a(150));return z=vt.call(z),At(P,x,z,K)}if(typeof z.then=="function")return oe(P,x,Pu(z),K);if(z.$$typeof===M)return oe(P,x,Mu(P,z),K);ku(P,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(s(P,x.sibling),K=h(x,z),K.return=P,P=K):(s(P,x),K=Gh(z,P.mode,K),K.return=P,P=K),p(P)):s(P,x)}return function(P,x,z,K){try{Wo=0;var vt=oe(P,x,z,K);return za=null,vt}catch(gt){if(gt===ka||gt===Uu)throw gt;var Qt=xn(29,gt,null,P.mode);return Qt.lanes=K,Qt.return=P,Qt}finally{}}}var Ks=Fg(!0),Gg=Fg(!1),qr=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Jt&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=Du(e),Ig(e,null,s),n}return Iu(e,o,n,s),Du(e)}function el(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,D(e,s)}}function of(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var p={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=p:f=f.next=p,s=s.next}while(s!==null);f===null?h=f=n:f=f.next=n}else h=f=n;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var lf=!1;function nl(){if(lf){var e=Pa;if(e!==null)throw e}}function il(e,n,s,o){lf=!1;var h=e.updateQueue;qr=!1;var f=h.firstBaseUpdate,p=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var C=E,B=C.next;C.next=null,p===null?f=B:p.next=B,p=C;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==p&&(E===null?Q.firstBaseUpdate=B:E.next=B,Q.lastBaseUpdate=C))}if(f!==null){var J=h.baseState;p=0,Q=B=C=null,E=f;do{var j=E.lane&-536870913,H=j!==E.lane;if(H?(zt&j)===j:(o&j)===j){j!==0&&j===La&&(lf=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ft=e,At=E;j=n;var oe=s;switch(At.tag){case 1:if(ft=At.payload,typeof ft=="function"){J=ft.call(oe,J,j);break t}J=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=At.payload,j=typeof ft=="function"?ft.call(oe,J,j):ft,j==null)break t;J=A({},J,j);break t;case 2:qr=!0}}j=E.callback,j!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[j]:H.push(j))}else H={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(B=Q=H,C=J):Q=Q.next=H,p|=j;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);Q===null&&(C=J),h.baseState=C,h.firstBaseUpdate=B,h.lastBaseUpdate=Q,f===null&&(h.shared.lanes=0),Kr|=p,e.lanes=p,e.memoizedState=J}}function Yg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Xg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Yg(s[e],n)}var Ba=V(null),zu=V(0);function Qg(e,n){e=fr,ot(zu,e),ot(Ba,n),fr=e|n.baseLanes}function uf(){ot(zu,fr),ot(Ba,Ba.current)}function cf(){fr=zu.current,Z(Ba),Z(zu)}var Mn=V(null),Wn=null;function Gr(e){var n=e.alternate;ot(De,De.current&1),ot(Mn,e),Wn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Wn=e)}function hf(e){ot(De,De.current),ot(Mn,e),Wn===null&&(Wn=e)}function Kg(e){e.tag===22?(ot(De,De.current),ot(Mn,e),Wn===null&&(Wn=e)):Yr()}function Yr(){ot(De,De.current),ot(Mn,Mn.current)}function Vn(e){Z(Mn),Wn===e&&(Wn=null),Z(De)}var De=V(0);function Bu(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||yd(s)||_d(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rr=0,xt=null,se=null,Ue=null,ju=!1,ja=!1,$s=!1,qu=0,rl=0,qa=null,cS=0;function be(){throw Error(a(321))}function ff(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!On(e[s],n[s]))return!1;return!0}function df(e,n,s,o,h,f){return rr=f,xt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,X.H=e===null||e.memoizedState===null?xp:If,$s=!1,f=s(o,h),$s=!1,ja&&(f=Zg(n,s,o,h)),$g(e),f}function $g(e){X.H=ol;var n=se!==null&&se.next!==null;if(rr=0,Ue=se=xt=null,ju=!1,rl=0,qa=null,n)throw Error(a(300));e===null||Le||(e=e.dependencies,e!==null&&xu(e)&&(Le=!0))}function Zg(e,n,s,o){xt=e;var h=0;do{if(ja&&(qa=null),rl=0,ja=!1,25<=h)throw Error(a(301));if(h+=1,Ue=se=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}X.H=Mp,f=n(s,o)}while(ja);return f}function hS(){var e=X.H,n=e.useState()[0];return n=typeof n.then=="function"?sl(n):n,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(xt.flags|=1024),n}function mf(){var e=qu!==0;return qu=0,e}function gf(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function pf(e){if(ju){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ju=!1}rr=0,Ue=se=xt=null,ja=!1,rl=qu=0,qa=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?xt.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ne(){if(se===null){var e=xt.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=Ue===null?xt.memoizedState:Ue.next;if(n!==null)Ue=n,se=e;else{if(e===null)throw xt.alternate===null?Error(a(467)):Error(a(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Ue===null?xt.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var n=rl;return rl+=1,qa===null&&(qa=[]),e=jg(qa,e,n),n=xt,(Ue===null?n.memoizedState:Ue.next)===null&&(n=n.alternate,X.H=n===null||n.memoizedState===null?xp:If),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===M)return Je(e)}throw Error(a(438,String(e)))}function yf(e){var n=null,s=xt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=xt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Hu(),xt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=U;return n.index++,s}function sr(e,n){return typeof n=="function"?n(e):n}function Gu(e){var n=Ne();return _f(n,se,e)}function _f(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var p=h.next;h.next=f.next,f.next=p}n.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{n=h.next;var E=p=null,C=null,B=n,Q=!1;do{var J=B.lane&-536870913;if(J!==B.lane?(zt&J)===J:(rr&J)===J){var j=B.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),J===La&&(Q=!0);else if((rr&j)===j){B=B.next,j===La&&(Q=!0);continue}else J={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(E=C=J,p=f):C=C.next=J,xt.lanes|=j,Kr|=j;J=B.action,$s&&s(f,J),f=B.hasEagerState?B.eagerState:s(f,J)}else j={lane:J,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(E=C=j,p=f):C=C.next=j,xt.lanes|=J,Kr|=J;B=B.next}while(B!==null&&B!==n);if(C===null?p=f:C.next=E,!On(f,e.memoizedState)&&(Le=!0,Q&&(s=Pa,s!==null)))throw s;e.memoizedState=f,e.baseState=p,e.baseQueue=C,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vf(e){var n=Ne(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,f=n.memoizedState;if(h!==null){s.pending=null;var p=h=h.next;do f=e(f,p.action),p=p.next;while(p!==h);On(f,n.memoizedState)||(Le=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function Jg(e,n,s){var o=xt,h=Ne(),f=Yt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var p=!On((se||h).memoizedState,s);if(p&&(h.memoizedState=s,Le=!0),h=h.queue,Sf(ep.bind(null,o,h,e),[e]),h.getSnapshot!==n||p||Ue!==null&&Ue.memoizedState.tag&1){if(o.flags|=2048,Ha(9,{destroy:void 0},tp.bind(null,o,h,s,n),null),ue===null)throw Error(a(349));f||(rr&127)!==0||Wg(o,n,s)}return s}function Wg(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=xt.updateQueue,n===null?(n=Hu(),xt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function tp(e,n,s,o){n.value=s,n.getSnapshot=o,np(n)&&ip(e)}function ep(e,n,s){return s(function(){np(n)&&ip(e)})}function np(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!On(e,s)}catch{return!0}}function ip(e){var n=js(e,2);n!==null&&An(n,e,2)}function Ef(e){var n=mn();if(typeof e=="function"){var s=e;if(e=s(),$s){gn(!0);try{s()}finally{gn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n}function rp(e,n,s,o){return e.baseState=s,_f(e,se,typeof o=="function"?o:sr)}function fS(e,n,s,o,h){if(Qu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};X.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,sp(n,f)):(f.next=s.next,n.pending=s.next=f)}}function sp(e,n){var s=n.action,o=n.payload,h=e.state;if(n.isTransition){var f=X.T,p={};X.T=p;try{var E=s(h,o),C=X.S;C!==null&&C(p,E),ap(e,n,E)}catch(B){Tf(e,n,B)}finally{f!==null&&p.types!==null&&(f.types=p.types),X.T=f}}else try{f=s(h,o),ap(e,n,f)}catch(B){Tf(e,n,B)}}function ap(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){op(e,n,o)},function(o){return Tf(e,n,o)}):op(e,n,s)}function op(e,n,s){n.status="fulfilled",n.value=s,lp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,sp(e,s)))}function Tf(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,lp(n),n=n.next;while(n!==o)}e.action=null}function lp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function up(e,n){return n}function cp(e,n){if(Yt){var s=ue.formState;if(s!==null){t:{var o=xt;if(Yt){if(fe){e:{for(var h=fe,f=Jn;h.nodeType!==8;){if(!f){h=null;break e}if(h=ti(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){fe=ti(h.nextSibling),o=h.data==="F!";break t}}Br(o)}o=!1}o&&(n=s[0])}}return s=mn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:n},s.queue=o,s=Dp.bind(null,xt,o),o.dispatch=s,o=Ef(!1),f=Cf.bind(null,xt,!1,o.queue),o=mn(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,s=fS.bind(null,xt,h,f,s),h.dispatch=s,o.memoizedState=e,[n,s,!1]}function hp(e){var n=Ne();return fp(n,se,e)}function fp(e,n,s){if(n=_f(e,n,up)[0],e=Gu(sr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=sl(n)}catch(p){throw p===ka?Uu:p}else o=n;n=Ne();var h=n.queue,f=h.dispatch;return s!==n.memoizedState&&(xt.flags|=2048,Ha(9,{destroy:void 0},dS.bind(null,h,s),null)),[o,f,e]}function dS(e,n){e.action=n}function dp(e){var n=Ne(),s=se;if(s!==null)return fp(n,s,e);Ne(),n=n.memoizedState,s=Ne();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Ha(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=xt.updateQueue,n===null&&(n=Hu(),xt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function mp(){return Ne().memoizedState}function Yu(e,n,s,o){var h=mn();xt.flags|=e,h.memoizedState=Ha(1|n,{destroy:void 0},s,o===void 0?null:o)}function Xu(e,n,s,o){var h=Ne();o=o===void 0?null:o;var f=h.memoizedState.inst;se!==null&&o!==null&&ff(o,se.memoizedState.deps)?h.memoizedState=Ha(n,f,s,o):(xt.flags|=e,h.memoizedState=Ha(1|n,f,s,o))}function gp(e,n){Yu(8390656,8,e,n)}function Sf(e,n){Xu(2048,8,e,n)}function mS(e){xt.flags|=4;var n=xt.updateQueue;if(n===null)n=Hu(),xt.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function pp(e){var n=Ne().memoizedState;return mS({ref:n,nextImpl:e}),function(){if((Jt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function yp(e,n){return Xu(4,2,e,n)}function _p(e,n){return Xu(4,4,e,n)}function vp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ep(e,n,s){s=s!=null?s.concat([e]):null,Xu(4,4,vp.bind(null,n,e),s)}function Af(){}function Tp(e,n){var s=Ne();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&ff(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Sp(e,n){var s=Ne();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&ff(n,o[1]))return o[0];if(o=e(),$s){gn(!0);try{e()}finally{gn(!1)}}return s.memoizedState=[o,n],o}function bf(e,n,s){return s===void 0||(rr&1073741824)!==0&&(zt&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Ay(),xt.lanes|=e,Kr|=e,s)}function Ap(e,n,s,o){return On(s,n)?s:Ba.current!==null?(e=bf(e,s,o),On(e,n)||(Le=!0),e):(rr&42)===0||(rr&1073741824)!==0&&(zt&261930)===0?(Le=!0,e.memoizedState=s):(e=Ay(),xt.lanes|=e,Kr|=e,n)}function bp(e,n,s,o,h){var f=at.p;at.p=f!==0&&8>f?f:8;var p=X.T,E={};X.T=E,Cf(e,!1,n,s);try{var C=h(),B=X.S;if(B!==null&&B(E,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=uS(C,o);al(e,n,Q,Pn(e))}else al(e,n,o,Pn(e))}catch(J){al(e,n,{then:function(){},status:"rejected",reason:J},Pn())}finally{at.p=f,p!==null&&E.types!==null&&(p.types=E.types),X.T=p}}function gS(){}function Rf(e,n,s,o){if(e.tag!==5)throw Error(a(476));var h=Rp(e).queue;bp(e,h,n,yt,s===null?gS:function(){return wp(e),s(o)})}function Rp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:yt},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function wp(e){var n=Rp(e);n.next===null&&(n=e.alternate.memoizedState),al(e,n.next.queue,{},Pn())}function wf(){return Je(Al)}function Cp(){return Ne().memoizedState}function Ip(){return Ne().memoizedState}function pS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Pn();e=Hr(s);var o=Fr(n,e,s);o!==null&&(An(o,n,s),el(o,n,s)),n={cache:tf()},e.payload=n;return}n=n.return}}function yS(e,n,s){var o=Pn();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Qu(e)?Np(n,s):(s=Hh(e,n,s,o),s!==null&&(An(s,e,o),Op(s,n,o)))}function Dp(e,n,s){var o=Pn();al(e,n,s,o)}function al(e,n,s,o){var h={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Np(n,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,E=f(p,s);if(h.hasEagerState=!0,h.eagerState=E,On(E,p))return Iu(e,n,h,0),ue===null&&Cu(),!1}catch{}finally{}if(s=Hh(e,n,h,o),s!==null)return An(s,e,o),Op(s,n,o),!0}return!1}function Cf(e,n,s,o){if(o={lane:2,revertLane:sd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Qu(e)){if(n)throw Error(a(479))}else n=Hh(e,s,o,2),n!==null&&An(n,e,2)}function Qu(e){var n=e.alternate;return e===xt||n!==null&&n===xt}function Np(e,n){ja=ju=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Op(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,D(e,s)}}var ol={readContext:Je,use:Fu,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};ol.useEffectEvent=be;var xp={readContext:Je,use:Fu,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Je,useEffect:gp,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Yu(4194308,4,vp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Yu(4194308,4,e,n)},useInsertionEffect:function(e,n){Yu(4,2,e,n)},useMemo:function(e,n){var s=mn();n=n===void 0?null:n;var o=e();if($s){gn(!0);try{e()}finally{gn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=mn();if(s!==void 0){var h=s(n);if($s){gn(!0);try{s(n)}finally{gn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=yS.bind(null,xt,e),[o.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ef(e);var n=e.queue,s=Dp.bind(null,xt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Af,useDeferredValue:function(e,n){var s=mn();return bf(s,e,n)},useTransition:function(){var e=Ef(!1);return e=bp.bind(null,xt,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=xt,h=mn();if(Yt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),ue===null)throw Error(a(349));(zt&127)!==0||Wg(o,n,s)}h.memoizedState=s;var f={value:s,getSnapshot:n};return h.queue=f,gp(ep.bind(null,o,f,e),[e]),o.flags|=2048,Ha(9,{destroy:void 0},tp.bind(null,o,f,s,n),null),s},useId:function(){var e=mn(),n=ue.identifierPrefix;if(Yt){var s=Li,o=Ui;s=(o&~(1<<32-Te(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=qu++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=cS++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:wf,useFormState:cp,useActionState:cp,useOptimistic:function(e){var n=mn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Cf.bind(null,xt,!0,s),s.dispatch=n,[e,n]},useMemoCache:yf,useCacheRefresh:function(){return mn().memoizedState=pS.bind(null,xt)},useEffectEvent:function(e){var n=mn(),s={impl:e};return n.memoizedState=s,function(){if((Jt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},If={readContext:Je,use:Fu,useCallback:Tp,useContext:Je,useEffect:Sf,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Sp,useReducer:Gu,useRef:mp,useState:function(){return Gu(sr)},useDebugValue:Af,useDeferredValue:function(e,n){var s=Ne();return Ap(s,se.memoizedState,e,n)},useTransition:function(){var e=Gu(sr)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:sl(e),n]},useSyncExternalStore:Jg,useId:Cp,useHostTransitionStatus:wf,useFormState:hp,useActionState:hp,useOptimistic:function(e,n){var s=Ne();return rp(s,se,e,n)},useMemoCache:yf,useCacheRefresh:Ip};If.useEffectEvent=pp;var Mp={readContext:Je,use:Fu,useCallback:Tp,useContext:Je,useEffect:Sf,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Sp,useReducer:vf,useRef:mp,useState:function(){return vf(sr)},useDebugValue:Af,useDeferredValue:function(e,n){var s=Ne();return se===null?bf(s,e,n):Ap(s,se.memoizedState,e,n)},useTransition:function(){var e=vf(sr)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:sl(e),n]},useSyncExternalStore:Jg,useId:Cp,useHostTransitionStatus:wf,useFormState:dp,useActionState:dp,useOptimistic:function(e,n){var s=Ne();return se!==null?rp(s,se,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:yf,useCacheRefresh:Ip};Mp.useEffectEvent=pp;function Df(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:A({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Nf={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=Pn(),h=Hr(o);h.payload=n,s!=null&&(h.callback=s),n=Fr(e,h,o),n!==null&&(An(n,e,o),el(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=Pn(),h=Hr(o);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Fr(e,h,o),n!==null&&(An(n,e,o),el(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Pn(),o=Hr(s);o.tag=2,n!=null&&(o.callback=n),n=Fr(e,o,s),n!==null&&(An(n,e,s),el(n,e,s))}};function Vp(e,n,s,o,h,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,p):n.prototype&&n.prototype.isPureReactComponent?!Xo(s,o)||!Xo(h,f):!0}function Up(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&Nf.enqueueReplaceState(n,n.state,null)}function Zs(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=A({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function Lp(e){wu(e)}function Pp(e){console.error(e)}function kp(e){wu(e)}function Ku(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zp(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Of(e,n,s){return s=Hr(s),s.tag=3,s.payload={element:null},s.callback=function(){Ku(e,n)},s}function Bp(e){return e=Hr(e),e.tag=3,e}function jp(e,n,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){zp(n,s,o)}}var p=s.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){zp(n,s,o),typeof h!="function"&&($r===null?$r=new Set([this]):$r.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function _S(e,n,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Ua(n,s,h,!0),s=Mn.current,s!==null){switch(s.tag){case 31:case 13:return Wn===null?oc():s.alternate===null&&Re===0&&(Re=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Lu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),nd(e,o,h)),!1;case 22:return s.flags|=65536,o===Lu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),nd(e,o,h)),!1}throw Error(a(435,s.tag))}return nd(e,o,h),oc(),!1}if(Yt)return n=Mn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==Kh&&(e=Error(a(422),{cause:o}),$o(Kn(e,s)))):(o!==Kh&&(n=Error(a(423),{cause:o}),$o(Kn(n,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Kn(o,s),h=Of(e.stateNode,o,h),of(e,h),Re!==4&&(Re=2)),!1;var f=Error(a(520),{cause:o});if(f=Kn(f,s),gl===null?gl=[f]:gl.push(f),Re!==4&&(Re=2),n===null)return!0;o=Kn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Of(s.stateNode,o,e),of(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($r===null||!$r.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Bp(h),jp(h,e,s,o),of(s,h),!1}s=s.return}while(s!==null);return!1}var xf=Error(a(461)),Le=!1;function We(e,n,s,o){n.child=e===null?Gg(n,null,s,o):Ks(n,e.child,s,o)}function qp(e,n,s,o,h){s=s.render;var f=n.ref;if("ref"in o){var p={};for(var E in o)E!=="ref"&&(p[E]=o[E])}else p=o;return Gs(n),o=df(e,n,s,p,f,h),E=mf(),e!==null&&!Le?(gf(e,n,h),ar(e,n,h)):(Yt&&E&&Xh(n),n.flags|=1,We(e,n,o,h),n.child)}function Hp(e,n,s,o,h){if(e===null){var f=s.type;return typeof f=="function"&&!Fh(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,Fp(e,n,f,o,h)):(e=Nu(s.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Bf(e,h)){var p=f.memoizedProps;if(s=s.compare,s=s!==null?s:Xo,s(p,o)&&e.ref===n.ref)return ar(e,n,h)}return n.flags|=1,e=tr(f,o),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,s,o,h){if(e!==null){var f=e.memoizedProps;if(Xo(f,o)&&e.ref===n.ref)if(Le=!1,n.pendingProps=o=f,Bf(e,h))(e.flags&131072)!==0&&(Le=!0);else return n.lanes=e.lanes,ar(e,n,h)}return Mf(e,n,s,o,h)}function Gp(e,n,s,o){var h=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(o=n.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return Yp(e,n,f,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vu(n,f!==null?f.cachePool:null),f!==null?Qg(n,f):uf(),Kg(n);else return o=n.lanes=536870912,Yp(e,n,f!==null?f.baseLanes|s:s,s,o)}else f!==null?(Vu(n,f.cachePool),Qg(n,f),Yr(),n.memoizedState=null):(e!==null&&Vu(n,null),uf(),Yr());return We(e,n,h,s),n.child}function ll(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yp(e,n,s,o,h){var f=nf();return f=f===null?null:{parent:Ve._currentValue,pool:f},n.memoizedState={baseLanes:s,cachePool:f},e!==null&&Vu(n,null),uf(),Kg(n),e!==null&&Ua(e,n,o,!0),n.childLanes=h,null}function $u(e,n){return n=Ju({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Xp(e,n,s){return Ks(n,e.child,null,s),e=$u(n,n.pendingProps),e.flags|=2,Vn(n),n.memoizedState=null,e}function vS(e,n,s){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Yt){if(o.mode==="hidden")return e=$u(n,o),n.lanes=536870912,ll(null,e);if(hf(n),(e=fe)?(e=s_(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:kr!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=Ng(e),s.return=n,n.child=s,Ze=n,fe=null)):e=null,e===null)throw Br(n);return n.lanes=536870912,null}return $u(n,o)}var f=e.memoizedState;if(f!==null){var p=f.dehydrated;if(hf(n),h)if(n.flags&256)n.flags&=-257,n=Xp(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Le||Ua(e,n,s,!1),h=(s&e.childLanes)!==0,Le||h){if(o=ue,o!==null&&(p=F(o,s),p!==0&&p!==f.retryLane))throw f.retryLane=p,js(e,p),An(o,e,p),xf;oc(),n=Xp(e,n,s)}else e=f.treeContext,fe=ti(p.nextSibling),Ze=n,Yt=!0,zr=null,Jn=!1,e!==null&&Mg(n,e),n=$u(n,o),n.flags|=4096;return n}return e=tr(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zu(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function Mf(e,n,s,o,h){return Gs(n),s=df(e,n,s,o,void 0,h),o=mf(),e!==null&&!Le?(gf(e,n,h),ar(e,n,h)):(Yt&&o&&Xh(n),n.flags|=1,We(e,n,s,h),n.child)}function Qp(e,n,s,o,h,f){return Gs(n),n.updateQueue=null,s=Zg(n,o,s,h),$g(e),o=mf(),e!==null&&!Le?(gf(e,n,f),ar(e,n,f)):(Yt&&o&&Xh(n),n.flags|=1,We(e,n,s,f),n.child)}function Kp(e,n,s,o,h){if(Gs(n),n.stateNode===null){var f=Oa,p=s.contextType;typeof p=="object"&&p!==null&&(f=Je(p)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},sf(n),p=s.contextType,f.context=typeof p=="object"&&p!==null?Je(p):Oa,f.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Df(n,s,p,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Nf.enqueueReplaceState(f,f.state,null),il(n,o,f,h),nl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,C=Zs(s,E);f.props=C;var B=f.context,Q=s.contextType;p=Oa,typeof Q=="object"&&Q!==null&&(p=Je(Q));var J=s.getDerivedStateFromProps;Q=typeof J=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,Q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||B!==p)&&Up(n,f,o,p),qr=!1;var j=n.memoizedState;f.state=j,il(n,o,f,h),nl(),B=n.memoizedState,E||j!==B||qr?(typeof J=="function"&&(Df(n,s,J,o),B=n.memoizedState),(C=qr||Vp(n,s,C,o,j,B,p))?(Q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=B),f.props=o,f.state=B,f.context=p,o=C):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,af(e,n),p=n.memoizedProps,Q=Zs(s,p),f.props=Q,J=n.pendingProps,j=f.context,B=s.contextType,C=Oa,typeof B=="object"&&B!==null&&(C=Je(B)),E=s.getDerivedStateFromProps,(B=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==J||j!==C)&&Up(n,f,o,C),qr=!1,j=n.memoizedState,f.state=j,il(n,o,f,h),nl();var H=n.memoizedState;p!==J||j!==H||qr||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof E=="function"&&(Df(n,s,E,o),H=n.memoizedState),(Q=qr||Vp(n,s,Q,o,j,H,C)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(B||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,H,C),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,H,C)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=H),f.props=o,f.state=H,f.context=C,o=Q):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Zu(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ks(n,e.child,null,h),n.child=Ks(n,null,s,h)):We(e,n,s,h),n.memoizedState=f.state,e=n.child):e=ar(e,n,h),e}function $p(e,n,s,o){return Hs(),n.flags|=256,We(e,n,s,o),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:zg()}}function Lf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Ln),e}function Zp(e,n,s){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),p&&(h=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Yt){if(h?Gr(n):Yr(),(e=fe)?(e=s_(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:kr!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=Ng(e),s.return=n,n.child=s,Ze=n,fe=null)):e=null,e===null)throw Br(n);return _d(e)?n.lanes=32:n.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(Yr(),h=n.mode,E=Ju({mode:"hidden",children:E},h),o=qs(o,h,s,null),E.return=n,o.return=n,E.sibling=o,n.child=E,o=n.child,o.memoizedState=Uf(s),o.childLanes=Lf(e,p,s),n.memoizedState=Vf,ll(null,o)):(Gr(n),Pf(n,E))}var C=e.memoizedState;if(C!==null&&(E=C.dehydrated,E!==null)){if(f)n.flags&256?(Gr(n),n.flags&=-257,n=kf(e,n,s)):n.memoizedState!==null?(Yr(),n.child=e.child,n.flags|=128,n=null):(Yr(),E=o.fallback,h=n.mode,o=Ju({mode:"visible",children:o.children},h),E=qs(E,h,s,null),E.flags|=2,o.return=n,E.return=n,o.sibling=E,n.child=o,Ks(n,e.child,null,s),o=n.child,o.memoizedState=Uf(s),o.childLanes=Lf(e,p,s),n.memoizedState=Vf,n=ll(null,o));else if(Gr(n),_d(E)){if(p=E.nextSibling&&E.nextSibling.dataset,p)var B=p.dgst;p=B,o=Error(a(419)),o.stack="",o.digest=p,$o({value:o,source:null,stack:null}),n=kf(e,n,s)}else if(Le||Ua(e,n,s,!1),p=(s&e.childLanes)!==0,Le||p){if(p=ue,p!==null&&(o=F(p,s),o!==0&&o!==C.retryLane))throw C.retryLane=o,js(e,o),An(p,e,o),xf;yd(E)||oc(),n=kf(e,n,s)}else yd(E)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,fe=ti(E.nextSibling),Ze=n,Yt=!0,zr=null,Jn=!1,e!==null&&Mg(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return h?(Yr(),E=o.fallback,h=n.mode,C=e.child,B=C.sibling,o=tr(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,B!==null?E=tr(B,E):(E=qs(E,h,s,null),E.flags|=2),E.return=n,o.return=n,o.sibling=E,n.child=o,ll(null,o),o=n.child,E=e.child.memoizedState,E===null?E=Uf(s):(h=E.cachePool,h!==null?(C=Ve._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=zg(),E={baseLanes:E.baseLanes|s,cachePool:h}),o.memoizedState=E,o.childLanes=Lf(e,p,s),n.memoizedState=Vf,ll(e.child,o)):(Gr(n),s=e.child,e=s.sibling,s=tr(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=s,n.memoizedState=null,s)}function Pf(e,n){return n=Ju({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ju(e,n){return e=xn(22,e,null,n),e.lanes=0,e}function kf(e,n,s){return Ks(n,e.child,null,s),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jp(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Jh(e.return,n,s)}function zf(e,n,s,o,h,f){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h,treeForkCount:f}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=s,p.tailMode=h,p.treeForkCount=f)}function Wp(e,n,s){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var p=De.current,E=(p&2)!==0;if(E?(p=p&1|2,n.flags|=128):p&=1,ot(De,p),We(e,n,o,s),o=Yt?Ko:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jp(e,s,n);else if(e.tag===19)Jp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=n.child,h=null;s!==null;)e=s.alternate,e!==null&&Bu(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),zf(n,!1,h,s,f,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&Bu(e)===null){n.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}zf(n,!0,s,null,f,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ar(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Kr|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Ua(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=tr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=tr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function ES(e,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),jr(n,Ve,e.memoizedState.cache),Hs();break;case 27:case 5:an(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:jr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Gr(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Zp(e,n,s):(Gr(n),e=ar(e,n,s),e!==null?e.sibling:null);Gr(n);break;case 19:var h=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Ua(e,n,s,!1),o=(s&n.childLanes)!==0),h){if(o)return Wp(e,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ot(De,De.current),o)break;return null;case 22:return n.lanes=0,Gp(e,n,s,n.pendingProps);case 24:jr(n,Ve,e.memoizedState.cache)}return ar(e,n,s)}function ty(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Le=!0;else{if(!Bf(e,s)&&(n.flags&128)===0)return Le=!1,ES(e,n,s);Le=(e.flags&131072)!==0}else Le=!1,Yt&&(n.flags&1048576)!==0&&xg(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Xs(n.elementType),n.type=e,typeof e=="function")Fh(e)?(o=Zs(e,o),n.tag=1,n=Kp(null,n,e,o,s)):(n.tag=0,n=Mf(null,n,e,o,s));else{if(e!=null){var h=e.$$typeof;if(h===Ut){n.tag=11,n=qp(null,n,e,o,s);break t}else if(h===I){n.tag=14,n=Hp(null,n,e,o,s);break t}}throw n=Ft(e)||e,Error(a(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,h=Zs(o,n.pendingProps),Kp(e,n,o,h,s);case 3:t:{if(Ee(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,af(e,n),il(n,o,null,s);var p=n.memoizedState;if(o=p.cache,jr(n,Ve,o),o!==f.cache&&Wh(n,[Ve],s,!0),nl(),o=p.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$p(e,n,o,s);break t}else if(o!==h){h=Kn(Error(a(424)),n),$o(h),n=$p(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fe=ti(e.firstChild),Ze=n,Yt=!0,zr=null,Jn=!0,s=Gg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Hs(),o===h){n=ar(e,n,s);break t}We(e,n,o,s)}n=n.child}return n;case 26:return Zu(e,n),e===null?(s=h_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Yt||(s=n.type,e=n.pendingProps,o=mc(_t.current).createElement(s),o[Vt]=n,o[Lt]=e,tn(o,s,e),xe(o),n.stateNode=o):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return an(n),e===null&&Yt&&(o=n.stateNode=l_(n.type,n.pendingProps,_t.current),Ze=n,Jn=!0,h=fe,ts(n.type)?(vd=h,fe=ti(o.firstChild)):fe=h),We(e,n,n.pendingProps.children,s),Zu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Yt&&((h=o=fe)&&(o=$S(o,n.type,n.pendingProps,Jn),o!==null?(n.stateNode=o,Ze=n,fe=ti(o.firstChild),Jn=!1,h=!0):h=!1),h||Br(n)),an(n),h=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,o=f.children,md(h,f)?o=null:p!==null&&md(h,p)&&(n.flags|=32),n.memoizedState!==null&&(h=df(e,n,hS,null,null,s),Al._currentValue=h),Zu(e,n),We(e,n,o,s),n.child;case 6:return e===null&&Yt&&((e=s=fe)&&(s=ZS(s,n.pendingProps,Jn),s!==null?(n.stateNode=s,Ze=n,fe=null,e=!0):e=!1),e||Br(n)),null;case 13:return Zp(e,n,s);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ks(n,null,o,s):We(e,n,o,s),n.child;case 11:return qp(e,n,n.type,n.pendingProps,s);case 7:return We(e,n,n.pendingProps,s),n.child;case 8:return We(e,n,n.pendingProps.children,s),n.child;case 12:return We(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,jr(n,n.type,o.value),We(e,n,o.children,s),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Gs(n),h=Je(h),o=o(h),n.flags|=1,We(e,n,o,s),n.child;case 14:return Hp(e,n,n.type,n.pendingProps,s);case 15:return Fp(e,n,n.type,n.pendingProps,s);case 19:return Wp(e,n,s);case 31:return vS(e,n,s);case 22:return Gp(e,n,s,n.pendingProps);case 24:return Gs(n),o=Je(Ve),e===null?(h=nf(),h===null&&(h=ue,f=tf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),n.memoizedState={parent:o,cache:h},sf(n),jr(n,Ve,h)):((e.lanes&s)!==0&&(af(e,n),il(n,null,null,s),nl()),h=e.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),jr(n,Ve,o)):(o=f.cache,jr(n,Ve,o),o!==h.cache&&Wh(n,[Ve],s,!0))),We(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function or(e){e.flags|=4}function jf(e,n,s,o,h){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Cy())e.flags|=8192;else throw Qs=Lu,rf}else e.flags&=-16777217}function ey(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!p_(n))if(Cy())e.flags|=8192;else throw Qs=Lu,rf}function Wu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pa():536870912,e.lanes|=n,Xa|=n)}function ul(e,n){if(!Yt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function TS(e,n,s){var o=n.pendingProps;switch(Qh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return de(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ir(Ve),ie(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Va(n)?or(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$h())),de(n),null;case 26:var h=n.type,f=n.memoizedState;return e===null?(or(n),f!==null?(de(n),ey(n,f)):(de(n),jf(n,h,null,o,s))):f?f!==e.memoizedState?(or(n),de(n),ey(n,f)):(de(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&or(n),de(n),jf(n,h,e,o,s)),null;case 27:if(Qi(n),s=_t.current,h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&or(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return de(n),null}e=lt.current,Va(n)?Vg(n):(e=l_(h,o,s),n.stateNode=e,or(n))}return de(n),null;case 5:if(Qi(n),h=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&or(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return de(n),null}if(f=lt.current,Va(n))Vg(n);else{var p=mc(_t.current);switch(f){case 1:f=p.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=p.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=p.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?p.createElement("select",{is:o.is}):p.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?p.createElement(h,{is:o.is}):p.createElement(h)}}f[Vt]=n,f[Lt]=o;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)f.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=f;t:switch(tn(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&or(n)}}return de(n),jf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&or(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=_t.current,Va(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,h=Ze,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Zy(e.nodeValue,s)),e||Br(n,!0)}else e=mc(e).createTextNode(o),e[Vt]=n,n.stateNode=e}return de(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(o=Va(n),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Vt]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;de(n),e=!1}else s=$h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return de(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Va(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Vt]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;de(n),h=!1}else h=$h(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),Wu(n,n.updateQueue),de(n),null);case 4:return ie(),e===null&&ud(n.stateNode.containerInfo),de(n),null;case 10:return ir(n.type),de(n),null;case 19:if(Z(De),o=n.memoizedState,o===null)return de(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)ul(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Bu(e),f!==null){for(n.flags|=128,ul(o,!1),e=f.updateQueue,n.updateQueue=e,Wu(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Dg(s,e),s=s.sibling;return ot(De,De.current&1|2),Yt&&er(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ke()>rc&&(n.flags|=128,h=!0,ul(o,!1),n.lanes=4194304)}else{if(!h)if(e=Bu(f),e!==null){if(n.flags|=128,h=!0,e=e.updateQueue,n.updateQueue=e,Wu(n,e),ul(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Yt)return de(n),null}else 2*Ke()-o.renderingStartTime>rc&&s!==536870912&&(n.flags|=128,h=!0,ul(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ke(),e.sibling=null,s=De.current,ot(De,h?s&1|2:s&1),Yt&&er(n,o.treeForkCount),e):(de(n),null);case 22:case 23:return Vn(n),cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),s=n.updateQueue,s!==null&&Wu(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&Z(Ys),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ir(Ve),de(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function SS(e,n){switch(Qh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ir(Ve),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qi(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(a(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(De),null;case 4:return ie(),null;case 10:return ir(n.type),null;case 22:case 23:return Vn(n),cf(),e!==null&&Z(Ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ir(Ve),null;case 25:return null;default:return null}}function ny(e,n){switch(Qh(n),n.tag){case 3:ir(Ve),ie();break;case 26:case 27:case 5:Qi(n);break;case 4:ie();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:Z(De);break;case 10:ir(n.type);break;case 22:case 23:Vn(n),cf(),e!==null&&Z(Ys);break;case 24:ir(Ve)}}function cl(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var f=s.create,p=s.inst;o=f(),p.destroy=o}s=s.next}while(s!==h)}}catch(E){ne(n,n.return,E)}}function Xr(e,n,s){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var p=o.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,h=n;var C=s,B=E;try{B()}catch(Q){ne(h,C,Q)}}}o=o.next}while(o!==f)}}catch(Q){ne(n,n.return,Q)}}function iy(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Xg(n,s)}catch(o){ne(e,e.return,o)}}}function ry(e,n,s){s.props=Zs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ne(e,n,o)}}function hl(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){ne(e,n,h)}}function Pi(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){ne(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ne(e,n,h)}else s.current=null}function sy(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){ne(e,e.return,h)}}function qf(e,n,s){try{var o=e.stateNode;FS(o,e.type,s,n),o[Lt]=n}catch(h){ne(e,e.return,h)}}function ay(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ai));else if(o!==4&&(o===27&&ts(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,s),e=e.sibling;e!==null;)Ff(e,n,s),e=e.sibling}function tc(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&ts(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(tc(e,n,s),e=e.sibling;e!==null;)tc(e,n,s),e=e.sibling}function oy(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);tn(n,o,s),n[Vt]=e,n[Lt]=s}catch(f){ne(e,e.return,f)}}var lr=!1,Pe=!1,Gf=!1,ly=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function AS(e,n){if(e=e.containerInfo,fd=Tc,e=Eg(e),Ph(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var p=0,E=-1,C=-1,B=0,Q=0,J=e,j=null;e:for(;;){for(var H;J!==s||h!==0&&J.nodeType!==3||(E=p+h),J!==f||o!==0&&J.nodeType!==3||(C=p+o),J.nodeType===3&&(p+=J.nodeValue.length),(H=J.firstChild)!==null;)j=J,J=H;for(;;){if(J===e)break e;if(j===s&&++B===h&&(E=p),j===f&&++Q===o&&(C=p),(H=J.nextSibling)!==null)break;J=j,j=J.parentNode}J=H}s=E===-1||C===-1?null:{start:E,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(dd={focusedElem:e,selectionRange:s},Tc=!1,Xe=n;Xe!==null;)if(n=Xe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Xe=e;else for(;Xe!==null;){switch(n=Xe,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,h=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var ft=Zs(s.type,h);e=o.getSnapshotBeforeUpdate(ft,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(At){ne(s,s.return,At)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)pd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Xe=e;break}Xe=n.return}}function uy(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:cr(e,s),o&4&&cl(5,s);break;case 1:if(cr(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(p){ne(s,s.return,p)}else{var h=Zs(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ne(s,s.return,p)}}o&64&&iy(s),o&512&&hl(s,s.return);break;case 3:if(cr(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Xg(e,n)}catch(p){ne(s,s.return,p)}}break;case 27:n===null&&o&4&&oy(s);case 26:case 5:cr(e,s),n===null&&o&4&&sy(s),o&512&&hl(s,s.return);break;case 12:cr(e,s);break;case 31:cr(e,s),o&4&&fy(e,s);break;case 13:cr(e,s),o&4&&dy(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=xS.bind(null,s),JS(e,s))));break;case 22:if(o=s.memoizedState!==null||lr,!o){n=n!==null&&n.memoizedState!==null||Pe,h=lr;var f=Pe;lr=o,(Pe=n)&&!f?hr(e,s,(s.subtreeFlags&8772)!==0):cr(e,s),lr=h,Pe=f}break;case 30:break;default:cr(e,s)}}function cy(e){var n=e.alternate;n!==null&&(e.alternate=null,cy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ya(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,vn=!1;function ur(e,n,s){for(s=s.child;s!==null;)hy(e,n,s),s=s.sibling}function hy(e,n,s){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Cn,s)}catch{}switch(s.tag){case 26:Pe||Pi(s,n),ur(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Pe||Pi(s,n);var o=ve,h=vn;ts(s.type)&&(ve=s.stateNode,vn=!1),ur(e,n,s),El(s.stateNode),ve=o,vn=h;break;case 5:Pe||Pi(s,n);case 6:if(o=ve,h=vn,ve=null,ur(e,n,s),ve=o,vn=h,ve!==null)if(vn)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(s.stateNode)}catch(f){ne(s,n,f)}else try{ve.removeChild(s.stateNode)}catch(f){ne(s,n,f)}break;case 18:ve!==null&&(vn?(e=ve,i_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),eo(e)):i_(ve,s.stateNode));break;case 4:o=ve,h=vn,ve=s.stateNode.containerInfo,vn=!0,ur(e,n,s),ve=o,vn=h;break;case 0:case 11:case 14:case 15:Xr(2,s,n),Pe||Xr(4,s,n),ur(e,n,s);break;case 1:Pe||(Pi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&ry(s,n,o)),ur(e,n,s);break;case 21:ur(e,n,s);break;case 22:Pe=(o=Pe)||s.memoizedState!==null,ur(e,n,s),Pe=o;break;default:ur(e,n,s)}}function fy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(s){ne(n,n.return,s)}}}function dy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(s){ne(n,n.return,s)}}function bS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ly),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ly),n;default:throw Error(a(435,e.tag))}}function ec(e,n){var s=bS(e);n.forEach(function(o){if(!s.has(o)){s.add(o);var h=MS.bind(null,e,o);o.then(h,h)}})}function En(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],f=e,p=n,E=p;t:for(;E!==null;){switch(E.tag){case 27:if(ts(E.type)){ve=E.stateNode,vn=!1;break t}break;case 5:ve=E.stateNode,vn=!1;break t;case 3:case 4:ve=E.stateNode.containerInfo,vn=!0;break t}E=E.return}if(ve===null)throw Error(a(160));hy(f,p,h),ve=null,vn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)my(n,e),n=n.sibling}var fi=null;function my(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(n,e),Tn(e),o&4&&(Xr(3,e,e.return),cl(3,e),Xr(5,e,e.return));break;case 1:En(n,e),Tn(e),o&512&&(Pe||s===null||Pi(s,s.return)),o&64&&lr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=fi;if(En(n,e),Tn(e),o&512&&(Pe||s===null||Pi(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Ai]||f[Vt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),tn(f,o,s),f[Vt]=e,xe(f),o=f;break t;case"link":var p=m_("link","href",h).get(o+(s.href||""));if(p){for(var E=0;E<p.length;E++)if(f=p[E],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){p.splice(E,1);break e}}f=h.createElement(o),tn(f,o,s),h.head.appendChild(f);break;case"meta":if(p=m_("meta","content",h).get(o+(s.content||""))){for(E=0;E<p.length;E++)if(f=p[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){p.splice(E,1);break e}}f=h.createElement(o),tn(f,o,s),h.head.appendChild(f);break;default:throw Error(a(468,o))}f[Vt]=e,xe(f),o=f}e.stateNode=o}else g_(h,e.type,e.stateNode);else e.stateNode=d_(h,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?g_(h,e.type,e.stateNode):d_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&qf(e,e.memoizedProps,s.memoizedProps)}break;case 27:En(n,e),Tn(e),o&512&&(Pe||s===null||Pi(s,s.return)),s!==null&&o&4&&qf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(En(n,e),Tn(e),o&512&&(Pe||s===null||Pi(s,s.return)),e.flags&32){h=e.stateNode;try{_n(h,"")}catch(ft){ne(e,e.return,ft)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,qf(e,h,s!==null?s.memoizedProps:h)),o&1024&&(Gf=!0);break;case 6:if(En(n,e),Tn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(ft){ne(e,e.return,ft)}}break;case 3:if(yc=null,h=fi,fi=gc(n.containerInfo),En(n,e),fi=h,Tn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(ft){ne(e,e.return,ft)}Gf&&(Gf=!1,gy(e));break;case 4:o=fi,fi=gc(e.stateNode.containerInfo),En(n,e),Tn(e),fi=o;break;case 12:En(n,e),Tn(e);break;case 31:En(n,e),Tn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 13:En(n,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ic=Ke()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 22:h=e.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,B=lr,Q=Pe;if(lr=B||h,Pe=Q||C,En(n,e),Pe=Q,lr=B,Tn(e),o&8192)t:for(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||C||lr||Pe||Js(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){C=s=n;try{if(f=C.stateNode,h)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{E=C.stateNode;var J=C.memoizedProps.style,j=J!=null&&J.hasOwnProperty("display")?J.display:null;E.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ft){ne(C,C.return,ft)}}}else if(n.tag===6){if(s===null){C=n;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ft){ne(C,C.return,ft)}}}else if(n.tag===18){if(s===null){C=n;try{var H=C.stateNode;h?r_(H,!0):r_(C.stateNode,!1)}catch(ft){ne(C,C.return,ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,ec(e,s))));break;case 19:En(n,e),Tn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 30:break;case 21:break;default:En(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(ay(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=Hf(e);tc(e,f,h);break;case 5:var p=s.stateNode;s.flags&32&&(_n(p,""),s.flags&=-33);var E=Hf(e);tc(e,E,p);break;case 3:case 4:var C=s.stateNode.containerInfo,B=Hf(e);Ff(e,B,C);break;default:throw Error(a(161))}}catch(Q){ne(e,e.return,Q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function cr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)uy(e,n.alternate,n),n=n.sibling}function Js(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xr(4,n,n.return),Js(n);break;case 1:Pi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ry(n,n.return,s),Js(n);break;case 27:El(n.stateNode);case 26:case 5:Pi(n,n.return),Js(n);break;case 22:n.memoizedState===null&&Js(n);break;case 30:Js(n);break;default:Js(n)}e=e.sibling}}function hr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:hr(h,f,s),cl(4,f);break;case 1:if(hr(h,f,s),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){ne(o,o.return,B)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Yg(C[h],E)}catch(B){ne(o,o.return,B)}}s&&p&64&&iy(f),hl(f,f.return);break;case 27:oy(f);case 26:case 5:hr(h,f,s),s&&o===null&&p&4&&sy(f),hl(f,f.return);break;case 12:hr(h,f,s);break;case 31:hr(h,f,s),s&&p&4&&fy(h,f);break;case 13:hr(h,f,s),s&&p&4&&dy(h,f);break;case 22:f.memoizedState===null&&hr(h,f,s),hl(f,f.return);break;case 30:break;default:hr(h,f,s)}n=n.sibling}}function Yf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Zo(s))}function Xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zo(e))}function di(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)py(e,n,s,o),n=n.sibling}function py(e,n,s,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,s,o),h&2048&&cl(9,n);break;case 1:di(e,n,s,o);break;case 3:di(e,n,s,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zo(e)));break;case 12:if(h&2048){di(e,n,s,o),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,E=f.onPostCommit;typeof E=="function"&&E(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){ne(n,n.return,C)}}else di(e,n,s,o);break;case 31:di(e,n,s,o);break;case 13:di(e,n,s,o);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?di(e,n,s,o):fl(e,n):f._visibility&2?di(e,n,s,o):(f._visibility|=2,Fa(e,n,s,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&Yf(p,n);break;case 24:di(e,n,s,o),h&2048&&Xf(n.alternate,n);break;default:di(e,n,s,o)}}function Fa(e,n,s,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,p=n,E=s,C=o,B=p.flags;switch(p.tag){case 0:case 11:case 15:Fa(f,p,E,C,h),cl(8,p);break;case 23:break;case 22:var Q=p.stateNode;p.memoizedState!==null?Q._visibility&2?Fa(f,p,E,C,h):fl(f,p):(Q._visibility|=2,Fa(f,p,E,C,h)),h&&B&2048&&Yf(p.alternate,p);break;case 24:Fa(f,p,E,C,h),h&&B&2048&&Xf(p.alternate,p);break;default:Fa(f,p,E,C,h)}n=n.sibling}}function fl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,h=o.flags;switch(o.tag){case 22:fl(s,o),h&2048&&Yf(o.alternate,o);break;case 24:fl(s,o),h&2048&&Xf(o.alternate,o);break;default:fl(s,o)}n=n.sibling}}var dl=8192;function Ga(e,n,s){if(e.subtreeFlags&dl)for(e=e.child;e!==null;)yy(e,n,s),e=e.sibling}function yy(e,n,s){switch(e.tag){case 26:Ga(e,n,s),e.flags&dl&&e.memoizedState!==null&&cA(s,fi,e.memoizedState,e.memoizedProps);break;case 5:Ga(e,n,s);break;case 3:case 4:var o=fi;fi=gc(e.stateNode.containerInfo),Ga(e,n,s),fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=dl,dl=16777216,Ga(e,n,s),dl=o):Ga(e,n,s));break;default:Ga(e,n,s)}}function _y(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ml(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Xe=o,Ey(o,e)}_y(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vy(e),e=e.sibling}function vy(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&Xr(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,nc(e)):ml(e);break;default:ml(e)}}function nc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Xe=o,Ey(o,e)}_y(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xr(8,n,n.return),nc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,nc(n));break;default:nc(n)}e=e.sibling}}function Ey(e,n){for(;Xe!==null;){var s=Xe;switch(s.tag){case 0:case 11:case 15:Xr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Xe=o;else t:for(s=e;Xe!==null;){o=Xe;var h=o.sibling,f=o.return;if(cy(o),o===s){Xe=null;break t}if(h!==null){h.return=f,Xe=h;break t}Xe=f}}}var RS={getCacheForType:function(e){var n=Je(Ve),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return Je(Ve).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,Jt=0,ue=null,Pt=null,zt=0,ee=0,Un=null,Qr=!1,Ya=!1,Qf=!1,fr=0,Re=0,Kr=0,Ws=0,Kf=0,Ln=0,Xa=0,gl=null,Sn=null,$f=!1,ic=0,Ty=0,rc=1/0,sc=null,$r=null,je=0,Zr=null,Qa=null,dr=0,Zf=0,Jf=null,Sy=null,pl=0,Wf=null;function Pn(){return(Jt&2)!==0&&zt!==0?zt&-zt:X.T!==null?sd():mt()}function Ay(){if(Ln===0)if((zt&536870912)===0||Yt){var e=si;si<<=1,(si&3932160)===0&&(si=262144),Ln=e}else Ln=536870912;return e=Mn.current,e!==null&&(e.flags|=32),Ln}function An(e,n,s){(e===ue&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Jr(e,zt,Ln,!1)),Si(e,s),((Jt&2)===0||e!==ue)&&(e===ue&&((Jt&2)===0&&(Ws|=s),Re===4&&Jr(e,zt,Ln,!1)),ki(e))}function by(e,n,s){if((Jt&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&e.expiredLanes)===0||In(e,n),h=o?DS(e,n):ed(e,n,!0),f=o;do{if(h===0){Ya&&!o&&Jr(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!CS(s)){h=ed(e,n,!1),f=!1;continue}if(h===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var E=e;h=gl;var C=E.current.memoizedState.isDehydrated;if(C&&(Ka(E,p).flags|=256),p=ed(E,p,!1),p!==2){if(Qf&&!C){E.errorRecoveryDisabledLanes|=f,Ws|=f,h=4;break t}f=Sn,Sn=h,f!==null&&(Sn===null?Sn=f:Sn.push.apply(Sn,f))}h=p}if(f=!1,h!==2)continue}}if(h===1){Ka(e,0),Jr(e,n,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Jr(o,n,Ln,!Qr);break t;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=ic+300-Ke(),10<h)){if(Jr(o,n,Ln,!Qr),qn(o,0,!0)!==0)break t;dr=n,o.timeoutHandle=e_(Ry.bind(null,o,s,Sn,sc,$f,n,Ln,Ws,Xa,Qr,f,"Throttled",-0,0),h);break t}Ry(o,s,Sn,sc,$f,n,Ln,Ws,Xa,Qr,f,null,-0,0)}}break}while(!0);ki(e)}function Ry(e,n,s,o,h,f,p,E,C,B,Q,J,j,H){if(e.timeoutHandle=-1,J=n.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ai},yy(n,f,J);var ft=(f&62914560)===f?ic-Ke():(f&4194048)===f?Ty-Ke():0;if(ft=hA(J,ft),ft!==null){dr=f,e.cancelPendingCommit=ft(My.bind(null,e,n,f,s,o,h,p,E,C,Q,J,null,j,H)),Jr(e,f,p,!B);return}}My(e,n,f,s,o,h,p,E,C)}function CS(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],f=h.getSnapshot;h=h.value;try{if(!On(f(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jr(e,n,s,o){n&=~Kf,n&=~Ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var f=31-Te(h),p=1<<f;o[f]=-1,h&=~p}s!==0&&$i(e,s,n)}function ac(){return(Jt&6)===0?(yl(0),!1):!0}function td(){if(Pt!==null){if(ee===0)var e=Pt.return;else e=Pt,nr=Fs=null,pf(e),za=null,Wo=0,e=Pt;for(;e!==null;)ny(e.alternate,e),e=e.return;Pt=null}}function Ka(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,XS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),dr=0,td(),ue=e,Pt=s=tr(e.current,null),zt=n,ee=0,Un=null,Qr=!1,Ya=In(e,n),Qf=!1,Xa=Ln=Kf=Ws=Kr=Re=0,Sn=gl=null,$f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-Te(o),f=1<<h;n|=e[h],o&=~f}return fr=n,Cu(),s}function wy(e,n){xt=null,X.H=ol,n===ka||n===Uu?(n=qg(),ee=3):n===rf?(n=qg(),ee=4):ee=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Un=n,Pt===null&&(Re=1,Ku(e,Kn(n,e.current)))}function Cy(){var e=Mn.current;return e===null?!0:(zt&4194048)===zt?Wn===null:(zt&62914560)===zt||(zt&536870912)!==0?e===Wn:!1}function Iy(){var e=X.H;return X.H=ol,e===null?ol:e}function Dy(){var e=X.A;return X.A=RS,e}function oc(){Re=4,Qr||(zt&4194048)!==zt&&Mn.current!==null||(Ya=!0),(Kr&134217727)===0&&(Ws&134217727)===0||ue===null||Jr(ue,zt,Ln,!1)}function ed(e,n,s){var o=Jt;Jt|=2;var h=Iy(),f=Dy();(ue!==e||zt!==n)&&(sc=null,Ka(e,n)),n=!1;var p=Re;t:do try{if(ee!==0&&Pt!==null){var E=Pt,C=Un;switch(ee){case 8:td(),p=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(n=!0);var B=ee;if(ee=0,Un=null,$a(e,E,C,B),s&&Ya){p=0;break t}break;default:B=ee,ee=0,Un=null,$a(e,E,C,B)}}IS(),p=Re;break}catch(Q){wy(e,Q)}while(!0);return n&&e.shellSuspendCounter++,nr=Fs=null,Jt=o,X.H=h,X.A=f,Pt===null&&(ue=null,zt=0,Cu()),p}function IS(){for(;Pt!==null;)Ny(Pt)}function DS(e,n){var s=Jt;Jt|=2;var o=Iy(),h=Dy();ue!==e||zt!==n?(sc=null,rc=Ke()+500,Ka(e,n)):Ya=In(e,n);t:do try{if(ee!==0&&Pt!==null){n=Pt;var f=Un;e:switch(ee){case 1:ee=0,Un=null,$a(e,n,f,1);break;case 2:case 9:if(Bg(f)){ee=0,Un=null,Oy(n);break}n=function(){ee!==2&&ee!==9||ue!==e||(ee=7),ki(e)},f.then(n,n);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:Bg(f)?(ee=0,Un=null,Oy(n)):(ee=0,Un=null,$a(e,n,f,7));break;case 5:var p=null;switch(Pt.tag){case 26:p=Pt.memoizedState;case 5:case 27:var E=Pt;if(p?p_(p):E.stateNode.complete){ee=0,Un=null;var C=E.sibling;if(C!==null)Pt=C;else{var B=E.return;B!==null?(Pt=B,lc(B)):Pt=null}break e}}ee=0,Un=null,$a(e,n,f,5);break;case 6:ee=0,Un=null,$a(e,n,f,6);break;case 8:td(),Re=6;break t;default:throw Error(a(462))}}NS();break}catch(Q){wy(e,Q)}while(!0);return nr=Fs=null,X.H=o,X.A=h,Jt=s,Pt!==null?0:(ue=null,zt=0,Cu(),Re)}function NS(){for(;Pt!==null&&!Ei();)Ny(Pt)}function Ny(e){var n=ty(e.alternate,e,fr);e.memoizedProps=e.pendingProps,n===null?lc(e):Pt=n}function Oy(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Qp(s,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=Qp(s,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:pf(n);default:ny(s,n),n=Pt=Dg(n,fr),n=ty(s,n,fr)}e.memoizedProps=e.pendingProps,n===null?lc(e):Pt=n}function $a(e,n,s,o){nr=Fs=null,pf(n),za=null,Wo=0;var h=n.return;try{if(_S(e,h,n,s,zt)){Re=1,Ku(e,Kn(s,e.current)),Pt=null;return}}catch(f){if(h!==null)throw Pt=h,f;Re=1,Ku(e,Kn(s,e.current)),Pt=null;return}n.flags&32768?(Yt||o===1?e=!0:Ya||(zt&536870912)!==0?e=!1:(Qr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),xy(n,e)):lc(n)}function lc(e){var n=e;do{if((n.flags&32768)!==0){xy(n,Qr);return}e=n.return;var s=TS(n.alternate,n,fr);if(s!==null){Pt=s;return}if(n=n.sibling,n!==null){Pt=n;return}Pt=n=e}while(n!==null);Re===0&&(Re=5)}function xy(e,n){do{var s=SS(e.alternate,e);if(s!==null){s.flags&=32767,Pt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){Pt=e;return}Pt=e=s}while(e!==null);Re=6,Pt=null}function My(e,n,s,o,h,f,p,E,C){e.cancelPendingCommit=null;do uc();while(je!==0);if((Jt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=qh,Ge(e,s,f,p,E,C),e===ue&&(Pt=ue=null,zt=0),Qa=n,Zr=e,dr=s,Zf=f,Jf=h,Sy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(wn,function(){return ky(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=X.T,X.T=null,h=at.p,at.p=2,p=Jt,Jt|=4;try{AS(e,n,s)}finally{Jt=p,at.p=h,X.T=o}}je=1,Vy(),Uy(),Ly()}}function Vy(){if(je===1){je=0;var e=Zr,n=Qa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=X.T,X.T=null;var o=at.p;at.p=2;var h=Jt;Jt|=4;try{my(n,e);var f=dd,p=Eg(e.containerInfo),E=f.focusedElem,C=f.selectionRange;if(p!==E&&E&&E.ownerDocument&&vg(E.ownerDocument.documentElement,E)){if(C!==null&&Ph(E)){var B=C.start,Q=C.end;if(Q===void 0&&(Q=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(Q,E.value.length);else{var J=E.ownerDocument||document,j=J&&J.defaultView||window;if(j.getSelection){var H=j.getSelection(),ft=E.textContent.length,At=Math.min(C.start,ft),oe=C.end===void 0?At:Math.min(C.end,ft);!H.extend&&At>oe&&(p=oe,oe=At,At=p);var P=_g(E,At),x=_g(E,oe);if(P&&x&&(H.rangeCount!==1||H.anchorNode!==P.node||H.anchorOffset!==P.offset||H.focusNode!==x.node||H.focusOffset!==x.offset)){var z=J.createRange();z.setStart(P.node,P.offset),H.removeAllRanges(),At>oe?(H.addRange(z),H.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),H.addRange(z))}}}}for(J=[],H=E;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<J.length;E++){var K=J[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Tc=!!fd,dd=fd=null}finally{Jt=h,at.p=o,X.T=s}}e.current=n,je=2}}function Uy(){if(je===2){je=0;var e=Zr,n=Qa,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=X.T,X.T=null;var o=at.p;at.p=2;var h=Jt;Jt|=4;try{uy(e,n.alternate,n)}finally{Jt=h,at.p=o,X.T=s}}je=3}}function Ly(){if(je===4||je===3){je=0,br();var e=Zr,n=Qa,s=dr,o=Sy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?je=5:(je=0,Qa=Zr=null,Py(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&($r=null),it(s),n=n.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Cn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=X.T,h=at.p,at.p=2,X.T=null;try{for(var f=e.onRecoverableError,p=0;p<o.length;p++){var E=o[p];f(E.value,{componentStack:E.stack})}}finally{X.T=n,at.p=h}}(dr&3)!==0&&uc(),ki(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===Wf?pl++:(pl=0,Wf=e):pl=0,yl(0)}}function Py(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zo(n)))}function uc(){return Vy(),Uy(),Ly(),ky()}function ky(){if(je!==5)return!1;var e=Zr,n=Zf;Zf=0;var s=it(dr),o=X.T,h=at.p;try{at.p=32>s?32:s,X.T=null,s=Jf,Jf=null;var f=Zr,p=dr;if(je=0,Qa=Zr=null,dr=0,(Jt&6)!==0)throw Error(a(331));var E=Jt;if(Jt|=4,vy(f.current),py(f,f.current,p,s),Jt=E,yl(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Cn,f)}catch{}return!0}finally{at.p=h,X.T=o,Py(e,n)}}function zy(e,n,s){n=Kn(s,n),n=Of(e.stateNode,n,2),e=Fr(e,n,2),e!==null&&(Si(e,2),ki(e))}function ne(e,n,s){if(e.tag===3)zy(e,e,s);else for(;n!==null;){if(n.tag===3){zy(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($r===null||!$r.has(o))){e=Kn(s,e),s=Bp(2),o=Fr(n,s,2),o!==null&&(jp(s,o,n,e),Si(o,2),ki(o));break}}n=n.return}}function nd(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new wS;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(s)||(Qf=!0,h.add(s),e=OS.bind(null,e,n,s),n.then(e,e))}function OS(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ue===e&&(zt&s)===s&&(Re===4||Re===3&&(zt&62914560)===zt&&300>Ke()-ic?(Jt&2)===0&&Ka(e,0):Kf|=s,Xa===zt&&(Xa=0)),ki(e)}function By(e,n){n===0&&(n=pa()),e=js(e,n),e!==null&&(Si(e,n),ki(e))}function xS(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),By(e,s)}function MS(e,n){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),By(e,s)}function VS(e,n){return pe(e,n)}var cc=null,Za=null,id=!1,hc=!1,rd=!1,Wr=0;function ki(e){e!==Za&&e.next===null&&(Za===null?cc=Za=e:Za=Za.next=e),hc=!0,id||(id=!0,LS())}function yl(e,n){if(!rd&&hc){rd=!0;do for(var s=!1,o=cc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var p=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Te(42|e)+1)-1,f&=h&~(p&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,Fy(o,f))}else f=zt,f=qn(o,o===ue?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||In(o,f)||(s=!0,Fy(o,f));o=o.next}while(s);rd=!1}}function US(){jy()}function jy(){hc=id=!1;var e=0;Wr!==0&&YS()&&(e=Wr);for(var n=Ke(),s=null,o=cc;o!==null;){var h=o.next,f=qy(o,n);f===0?(o.next=null,s===null?cc=h:s.next=h,h===null&&(Za=s)):(s=o,(e!==0||(f&3)!==0)&&(hc=!0)),o=h}je!==0&&je!==5||yl(e),Wr!==0&&(Wr=0)}function qy(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Te(f),E=1<<p,C=h[p];C===-1?((E&s)===0||(E&o)!==0)&&(h[p]=Ir(E,n)):C<=n&&(e.expiredLanes|=E),f&=~E}if(n=ue,s=zt,s=qn(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ri(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||In(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&ri(o),it(s)){case 2:case 8:s=Rr;break;case 32:s=wn;break;case 268435456:s=fa;break;default:s=wn}return o=Hy.bind(null,e),s=pe(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&ri(o),e.callbackPriority=2,e.callbackNode=null,2}function Hy(e,n){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(uc()&&e.callbackNode!==s)return null;var o=zt;return o=qn(e,e===ue?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(by(e,o,n),qy(e,Ke()),e.callbackNode!=null&&e.callbackNode===s?Hy.bind(null,e):null)}function Fy(e,n){if(uc())return null;by(e,n,!0)}function LS(){QS(function(){(Jt&6)!==0?pe(Is,US):jy()})}function sd(){if(Wr===0){var e=La;e===0&&(e=Bn,Bn<<=1,(Bn&261888)===0&&(Bn=256)),Wr=e}return Wr}function Gy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ta(""+e)}function Yy(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function PS(e,n,s,o,h){if(n==="submit"&&s&&s.stateNode===h){var f=Gy((h[Lt]||null).action),p=o.submitter;p&&(n=(n=p[Lt]||null)?Gy(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var E=new Oi("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wr!==0){var C=p?Yy(h,p):new FormData(h);Rf(s,{pending:!0,data:C,method:h.method,action:f},null,C)}}else typeof f=="function"&&(E.preventDefault(),C=p?Yy(h,p):new FormData(h),Rf(s,{pending:!0,data:C,method:h.method,action:f},f,C))},currentTarget:h}]})}}for(var ad=0;ad<jh.length;ad++){var od=jh[ad],kS=od.toLowerCase(),zS=od[0].toUpperCase()+od.slice(1);hi(kS,"on"+zS)}hi(Ag,"onAnimationEnd"),hi(bg,"onAnimationIteration"),hi(Rg,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(eS,"onTransitionRun"),hi(nS,"onTransitionStart"),hi(iS,"onTransitionCancel"),hi(wg,"onTransitionEnd"),Ci("onMouseEnter",["mouseout","mouseover"]),Ci("onMouseLeave",["mouseout","mouseover"]),Ci("onPointerEnter",["pointerout","pointerover"]),Ci("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function Xy(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var p=o.length-1;0<=p;p--){var E=o[p],C=E.instance,B=E.currentTarget;if(E=E.listener,C!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=B;try{f(h)}catch(Q){wu(Q)}h.currentTarget=null,f=C}else for(p=0;p<o.length;p++){if(E=o[p],C=E.instance,B=E.currentTarget,E=E.listener,C!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=B;try{f(h)}catch(Q){wu(Q)}h.currentTarget=null,f=C}}}}function kt(e,n){var s=n[pn];s===void 0&&(s=n[pn]=new Set);var o=e+"__bubble";s.has(o)||(Qy(n,e,2,!1),s.add(o))}function ld(e,n,s){var o=0;n&&(o|=4),Qy(s,e,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[fc]){e[fc]=!0,No.forEach(function(s){s!=="selectionchange"&&(BS.has(s)||ld(s,!1,e),ld(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,ld("selectionchange",!1,n))}}function Qy(e,n,s,o){switch(A_(n)){case 2:var h=mA;break;case 8:h=gA;break;default:h=bd}s=h.bind(null,n,s,e),h=void 0,!Ms||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,s,{capture:!0,passive:h}):e.addEventListener(n,s,!0):h!==void 0?e.addEventListener(n,s,{passive:h}):e.addEventListener(n,s,!1)}function cd(e,n,s,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var E=o.stateNode.containerInfo;if(E===h)break;if(p===4)for(p=o.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===h)return;p=p.return}for(;E!==null;){if(p=bi(E),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){o=f=p;continue t}E=E.parentNode}}o=o.return}Vr(function(){var B=f,Q=Gn(s),J=[];t:{var j=Cg.get(e);if(j!==void 0){var H=Oi,ft=e;switch(e){case"keypress":if(Us(s)===0)break t;case"keydown":case"keyup":H=Au;break;case"focusin":ft="focus",H=Ps;break;case"focusout":ft="blur",H=Ps;break;case"beforeblur":case"afterblur":H=Ps;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=m;break;case Ag:case bg:case Rg:H=pu;break;case wg:H=T;break;case"scroll":case"scrollend":H=qo;break;case"wheel":H=q;break;case"copy":case"cut":case"paste":H=yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Wi;break;case"toggle":case"beforetoggle":H=Ot}var At=(n&4)!==0,oe=!At&&(e==="scroll"||e==="scrollend"),P=At?j!==null?j+"Capture":null:j;At=[];for(var x=B,z;x!==null;){var K=x;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||P===null||(K=oi(x,P),K!=null&&At.push(vl(x,K,z))),oe)break;x=x.return}0<At.length&&(j=new H(j,ft,null,s,Q),J.push({event:j,listeners:At}))}}if((n&7)===0){t:{if(j=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",j&&s!==zo&&(ft=s.relatedTarget||s.fromElement)&&(bi(ft)||ft[Ce]))break t;if((H||j)&&(j=Q.window===Q?Q:(j=Q.ownerDocument)?j.defaultView||j.parentWindow:window,H?(ft=s.relatedTarget||s.toElement,H=B,ft=ft?bi(ft):null,ft!==null&&(oe=c(ft),At=ft.tag,ft!==oe||At!==5&&At!==27&&At!==6)&&(ft=null)):(H=null,ft=B),H!==ft)){if(At=Ho,K="onMouseLeave",P="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(At=Wi,K="onPointerLeave",P="onPointerEnter",x="pointer"),oe=H==null?j:Dn(H),z=ft==null?j:Dn(ft),j=new At(K,x+"leave",H,s,Q),j.target=oe,j.relatedTarget=z,K=null,bi(Q)===B&&(At=new At(P,x+"enter",ft,s,Q),At.target=z,At.relatedTarget=oe,K=At),oe=K,H&&ft)e:{for(At=jS,P=H,x=ft,z=0,K=P;K;K=At(K))z++;K=0;for(var vt=x;vt;vt=At(vt))K++;for(;0<z-K;)P=At(P),z--;for(;0<K-z;)x=At(x),K--;for(;z--;){if(P===x||x!==null&&P===x.alternate){At=P;break e}P=At(P),x=At(x)}At=null}else At=null;H!==null&&Ky(J,j,H,At,!1),ft!==null&&oe!==null&&Ky(J,oe,ft,At,!0)}}t:{if(j=B?Dn(B):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var Qt=fg;else if(cg(j))if(dg)Qt=J0;else{Qt=$0;var gt=K0}else H=j.nodeName,!H||H.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?B&&Ea(B.elementType)&&(Qt=fg):Qt=Z0;if(Qt&&(Qt=Qt(e,B))){hg(J,Qt,s,Q);break t}gt&&gt(e,j,B),e==="focusout"&&B&&j.type==="number"&&B.memoizedProps.value!=null&&Lo(j,"number",j.value)}switch(gt=B?Dn(B):window,e){case"focusin":(cg(gt)||gt.contentEditable==="true")&&(Ia=gt,kh=B,Qo=null);break;case"focusout":Qo=kh=Ia=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Tg(J,s,Q);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":Tg(J,s,Q)}var Mt;if(Zt)t:{switch(e){case"compositionstart":var Bt="onCompositionStart";break t;case"compositionend":Bt="onCompositionEnd";break t;case"compositionupdate":Bt="onCompositionUpdate";break t}Bt=void 0}else Ca?ks(e,s)&&(Bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Bt="onCompositionStart");Bt&&(Vi&&s.locale!=="ko"&&(Ca||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&Ca&&(Mt=jo()):(Ni=Q,Bo="value"in Ni?Ni.value:Ni.textContent,Ca=!0)),gt=dc(B,Bt),0<gt.length&&(Bt=new Mi(Bt,e,null,s,Q),J.push({event:Bt,listeners:gt}),Mt?Bt.data=Mt:(Mt=wa(s),Mt!==null&&(Bt.data=Mt)))),(Mt=Xn?G0(e,s):Y0(e,s))&&(Bt=dc(B,"onBeforeInput"),0<Bt.length&&(gt=new Mi("onBeforeInput","beforeinput",null,s,Q),J.push({event:gt,listeners:Bt}),gt.data=Mt)),PS(J,e,B,s,Q)}Xy(J,n)})}function vl(e,n,s){return{instance:e,listener:n,currentTarget:s}}function dc(e,n){for(var s=n+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=oi(e,s),h!=null&&o.unshift(vl(e,h,f)),h=oi(e,n),h!=null&&o.push(vl(e,h,f))),e.tag===3)return o;e=e.return}return[]}function jS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ky(e,n,s,o,h){for(var f=n._reactName,p=[];s!==null&&s!==o;){var E=s,C=E.alternate,B=E.stateNode;if(E=E.tag,C!==null&&C===o)break;E!==5&&E!==26&&E!==27||B===null||(C=B,h?(B=oi(s,f),B!=null&&p.unshift(vl(s,B,C))):h||(B=oi(s,f),B!=null&&p.push(vl(s,B,C)))),s=s.return}p.length!==0&&e.push({event:n,listeners:p})}var qS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function $y(e){return(typeof e=="string"?e:""+e).replace(qS,`
`).replace(HS,"")}function Zy(e,n){return n=$y(n),$y(e)===n}function ae(e,n,s,o,h,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_n(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_n(e,""+o);break;case"className":Nn(e,"class",o);break;case"tabIndex":Nn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(e,s,o);break;case"style":ko(e,o,f);break;case"data":if(n!=="object"){Nn(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ta(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&ae(e,n,"name",h.name,h,null),ae(e,n,"formEncType",h.formEncType,h,null),ae(e,n,"formMethod",h.formMethod,h,null),ae(e,n,"formTarget",h.formTarget,h,null)):(ae(e,n,"encType",h.encType,h,null),ae(e,n,"method",h.method,h,null),ae(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ta(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ai);break;case"onScroll":o!=null&&kt("scroll",e);break;case"onScrollEnd":o!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Ta(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":kt("beforetoggle",e),kt("toggle",e),_a(e,"popover",o);break;case"xlinkActuate":Me(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Me(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Me(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Me(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Me(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Me(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Me(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_a(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=du.get(s)||s,_a(e,s,o))}}function hd(e,n,s,o,h,f){switch(s){case"style":ko(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?_n(e,o):(typeof o=="number"||typeof o=="bigint")&&_n(e,""+o);break;case"onScroll":o!=null&&kt("scroll",e);break;case"onScrollEnd":o!=null&&kt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ai);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),f=e[Lt]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):_a(e,s,o)}}}function tn(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var o=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var p=s[f];if(p!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ae(e,n,f,p,s,null)}}h&&ae(e,n,"srcSet",s.srcSet,s,null),o&&ae(e,n,"src",s.src,s,null);return;case"input":kt("invalid",e);var E=f=p=h=null,C=null,B=null;for(o in s)if(s.hasOwnProperty(o)){var Q=s[o];if(Q!=null)switch(o){case"name":h=Q;break;case"type":p=Q;break;case"checked":C=Q;break;case"defaultChecked":B=Q;break;case"value":f=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,n));break;default:ae(e,n,o,Q,s,null)}}cu(e,f,E,C,B,p,h,!1);return;case"select":kt("invalid",e),o=p=f=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":p=E;break;case"multiple":o=E;default:ae(e,n,h,E,s,null)}n=f,s=p,e.multiple=!!o,n!=null?Nr(e,!!o,n,!1):s!=null&&Nr(e,!!o,s,!0);return;case"textarea":kt("invalid",e),f=h=o=null;for(p in s)if(s.hasOwnProperty(p)&&(E=s[p],E!=null))switch(p){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:ae(e,n,p,E,s,null)}Or(e,o,h,f);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(o=s[C],o!=null))switch(C){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ae(e,n,C,o,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(o=0;o<_l.length;o++)kt(_l[o],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in s)if(s.hasOwnProperty(B)&&(o=s[B],o!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ae(e,n,B,o,s,null)}return;default:if(Ea(n)){for(Q in s)s.hasOwnProperty(Q)&&(o=s[Q],o!==void 0&&hd(e,n,Q,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&ae(e,n,E,o,s,null))}function FS(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,p=null,E=null,C=null,B=null,Q=null;for(H in s){var J=s[H];if(s.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=J;default:o.hasOwnProperty(H)||ae(e,n,H,null,o,J)}}for(var j in o){var H=o[j];if(J=s[j],o.hasOwnProperty(j)&&(H!=null||J!=null))switch(j){case"type":f=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":Q=H;break;case"value":p=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:H!==J&&ae(e,n,j,H,o,J)}}va(e,p,E,C,B,Q,f,h);return;case"select":H=p=E=j=null;for(f in s)if(C=s[f],s.hasOwnProperty(f)&&C!=null)switch(f){case"value":break;case"multiple":H=C;default:o.hasOwnProperty(f)||ae(e,n,f,null,o,C)}for(h in o)if(f=o[h],C=s[h],o.hasOwnProperty(h)&&(f!=null||C!=null))switch(h){case"value":j=f;break;case"defaultValue":E=f;break;case"multiple":p=f;default:f!==C&&ae(e,n,h,f,o,C)}n=E,s=p,o=H,j!=null?Nr(e,!!s,j,!1):!!o!=!!s&&(n!=null?Nr(e,!!s,n,!0):Nr(e,!!s,s?[]:"",!1));return;case"textarea":H=j=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ae(e,n,E,null,o,h)}for(p in o)if(h=o[p],f=s[p],o.hasOwnProperty(p)&&(h!=null||f!=null))switch(p){case"value":j=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&ae(e,n,p,h,o,f)}hu(e,j,H);return;case"option":for(var ft in s)if(j=s[ft],s.hasOwnProperty(ft)&&j!=null&&!o.hasOwnProperty(ft))switch(ft){case"selected":e.selected=!1;break;default:ae(e,n,ft,null,o,j)}for(C in o)if(j=o[C],H=s[C],o.hasOwnProperty(C)&&j!==H&&(j!=null||H!=null))switch(C){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:ae(e,n,C,j,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in s)j=s[At],s.hasOwnProperty(At)&&j!=null&&!o.hasOwnProperty(At)&&ae(e,n,At,null,o,j);for(B in o)if(j=o[B],H=s[B],o.hasOwnProperty(B)&&j!==H&&(j!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:ae(e,n,B,j,o,H)}return;default:if(Ea(n)){for(var oe in s)j=s[oe],s.hasOwnProperty(oe)&&j!==void 0&&!o.hasOwnProperty(oe)&&hd(e,n,oe,void 0,o,j);for(Q in o)j=o[Q],H=s[Q],!o.hasOwnProperty(Q)||j===H||j===void 0&&H===void 0||hd(e,n,Q,j,o,H);return}}for(var P in s)j=s[P],s.hasOwnProperty(P)&&j!=null&&!o.hasOwnProperty(P)&&ae(e,n,P,null,o,j);for(J in o)j=o[J],H=s[J],!o.hasOwnProperty(J)||j===H||j==null&&H==null||ae(e,n,J,j,o,H)}function Jy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var h=s[o],f=h.transferSize,p=h.initiatorType,E=h.duration;if(f&&E&&Jy(p)){for(p=0,E=h.responseEnd,o+=1;o<s.length;o++){var C=s[o],B=C.startTime;if(B>E)break;var Q=C.transferSize,J=C.initiatorType;Q&&Jy(J)&&(C=C.responseEnd,p+=Q*(C<E?1:(E-B)/(C-B)))}if(--o,n+=8*(f+p)/(h.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,dd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function md(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function YS(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var e_=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(KS)}:e_;function KS(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function i_(e,n){var s=n,o=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(h),eo(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")El(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,El(s);for(var f=s.firstChild;f;){var p=f.nextSibling,E=f.nodeName;f[Ai]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=p}}else s==="body"&&El(e.ownerDocument.body);s=h}while(s);eo(n)}function r_(e,n){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function pd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":pd(s),ya(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $S(e,n,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function ZS(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ti(e.nextSibling),e===null))return null;return e}function s_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function _d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JS(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vd=null;function a_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return ti(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function l_(e,n,s){switch(n=mc(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function El(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ya(e)}var ei=new Map,u_=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mr=at.d;at.d={f:WS,r:tA,D:eA,C:nA,L:iA,m:rA,X:aA,S:sA,M:oA};function WS(){var e=mr.f(),n=ac();return e||n}function tA(e){var n=Fn(e);n!==null&&n.tag===5&&n.type==="form"?wp(n):mr.r(e)}var Ja=typeof document>"u"?null:document;function c_(e,n,s){var o=Ja;if(o&&typeof n=="string"&&n){var h=yn(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),u_.has(h)||(u_.add(h),e={rel:e,crossOrigin:s,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),tn(n,"link",e),xe(n),o.head.appendChild(n)))}}function eA(e){mr.D(e),c_("dns-prefetch",e,null)}function nA(e,n){mr.C(e,n),c_("preconnect",e,n)}function iA(e,n,s){mr.L(e,n,s);var o=Ja;if(o&&e&&n){var h='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+yn(s.imageSizes)+'"]')):h+='[href="'+yn(e)+'"]';var f=h;switch(n){case"style":f=Wa(e);break;case"script":f=to(e)}ei.has(f)||(e=A({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),ei.set(f,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(Tl(f))||n==="script"&&o.querySelector(Sl(f))||(n=o.createElement("link"),tn(n,"link",e),xe(n),o.head.appendChild(n)))}}function rA(e,n){mr.m(e,n);var s=Ja;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=to(e)}if(!ei.has(f)&&(e=A({rel:"modulepreload",href:e},n),ei.set(f,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(f)))return}o=s.createElement("link"),tn(o,"link",e),xe(o),s.head.appendChild(o)}}}function sA(e,n,s){mr.S(e,n,s);var o=Ja;if(o&&e){var h=Ri(o).hoistableStyles,f=Wa(e);n=n||"default";var p=h.get(f);if(!p){var E={loading:0,preload:null};if(p=o.querySelector(Tl(f)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},s),(s=ei.get(f))&&Ed(e,s);var C=p=o.createElement("link");xe(C),tn(C,"link",e),C._p=new Promise(function(B,Q){C.onload=B,C.onerror=Q}),C.addEventListener("load",function(){E.loading|=1}),C.addEventListener("error",function(){E.loading|=2}),E.loading|=4,pc(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:E},h.set(f,p)}}}function aA(e,n){mr.X(e,n);var s=Ja;if(s&&e){var o=Ri(s).hoistableScripts,h=to(e),f=o.get(h);f||(f=s.querySelector(Sl(h)),f||(e=A({src:e,async:!0},n),(n=ei.get(h))&&Td(e,n),f=s.createElement("script"),xe(f),tn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function oA(e,n){mr.M(e,n);var s=Ja;if(s&&e){var o=Ri(s).hoistableScripts,h=to(e),f=o.get(h);f||(f=s.querySelector(Sl(h)),f||(e=A({src:e,async:!0,type:"module"},n),(n=ei.get(h))&&Td(e,n),f=s.createElement("script"),xe(f),tn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function h_(e,n,s,o){var h=(h=_t.current)?gc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Wa(s.href),s=Ri(h).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Wa(s.href);var f=Ri(h).hoistableStyles,p=f.get(e);if(p||(h=h.ownerDocument||h,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=h.querySelector(Tl(e)))&&!f._p&&(p.instance=f,p.state.loading=5),ei.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ei.set(e,s),f||lA(h,e,s,p.state))),n&&o===null)throw Error(a(528,""));return p}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=to(s),s=Ri(h).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Wa(e){return'href="'+yn(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function lA(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),tn(n,"link",s),xe(n),e.head.appendChild(n))}function to(e){return'[src="'+yn(e)+'"]'}function Sl(e){return"script[async]"+e}function d_(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(s.href)+'"]');if(o)return n.instance=o,xe(o),o;var h=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),xe(o),tn(o,"style",h),pc(o,s.precedence,e),n.instance=o;case"stylesheet":h=Wa(s.href);var f=e.querySelector(Tl(h));if(f)return n.state.loading|=4,n.instance=f,xe(f),f;o=f_(s),(h=ei.get(h))&&Ed(o,h),f=(e.ownerDocument||e).createElement("link"),xe(f);var p=f;return p._p=new Promise(function(E,C){p.onload=E,p.onerror=C}),tn(f,"link",o),n.state.loading|=4,pc(f,s.precedence,e),n.instance=f;case"script":return f=to(s.src),(h=e.querySelector(Sl(f)))?(n.instance=h,xe(h),h):(o=s,(h=ei.get(f))&&(o=A({},s),Td(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),xe(h),tn(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,s.precedence,e));return n.instance}function pc(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,p=0;p<o.length;p++){var E=o[p];if(E.dataset.precedence===n)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var yc=null;function m_(e,n,s){if(yc===null){var o=new Map,h=yc=new Map;h.set(s,o)}else h=yc,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[Ai]||f[Vt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var E=o.get(p);E?E.push(f):o.set(p,[f])}}return o}function g_(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function uA(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cA(e,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Wa(o.href),f=n.querySelector(Tl(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_c.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=f,xe(f);return}f=n.ownerDocument||n,o=f_(o),(h=ei.get(h))&&Ed(o,h),f=f.createElement("link"),xe(f);var p=f;p._p=new Promise(function(E,C){p.onload=E,p.onerror=C}),tn(f,"link",o),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=_c.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var Sd=0;function hA(e,n){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Sd===0&&(Sd=62500*GS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Sd?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function Ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,n.forEach(fA,e),vc=null,_c.call(e))}function fA(e,n){if(!(n.state.loading&4)){var s=vc.get(e);if(s)var o=s.get(null);else{s=new Map,vc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var p=h[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(s.set(p.dataset.precedence,p),o=p)}o&&s.set(null,o)}h=n.instance,p=h.getAttribute("data-precedence"),f=s.get(p)||o,f===o&&s.set(null,h),s.set(p,h),this.count++,o=_c.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var Al={$$typeof:M,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function dA(e,n,s,o,h,f,p,E,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.hiddenUpdates=Hn(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function y_(e,n,s,o,h,f,p,E,C,B,Q,J){return e=new dA(e,n,s,p,C,B,Q,J,E),n=1,f===!0&&(n|=24),f=xn(3,null,null,n),e.current=f,f.stateNode=e,n=tf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},sf(f),e}function __(e){return e?(e=Oa,e):Oa}function v_(e,n,s,o,h,f){h=__(h),o.context===null?o.context=h:o.pendingContext=h,o=Hr(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=Fr(e,o,n),s!==null&&(An(s,e,n),el(s,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Ad(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function T_(e){if(e.tag===13||e.tag===31){var n=js(e,67108864);n!==null&&An(n,e,67108864),Ad(e,67108864)}}function S_(e){if(e.tag===13||e.tag===31){var n=Pn();n=G(n);var s=js(e,n);s!==null&&An(s,e,n),Ad(e,n)}}var Tc=!0;function mA(e,n,s,o){var h=X.T;X.T=null;var f=at.p;try{at.p=2,bd(e,n,s,o)}finally{at.p=f,X.T=h}}function gA(e,n,s,o){var h=X.T;X.T=null;var f=at.p;try{at.p=8,bd(e,n,s,o)}finally{at.p=f,X.T=h}}function bd(e,n,s,o){if(Tc){var h=Rd(o);if(h===null)cd(e,n,o,Sc,s),b_(e,o);else if(yA(h,e,n,s,o))o.stopPropagation();else if(b_(e,o),n&4&&-1<pA.indexOf(e)){for(;h!==null;){var f=Fn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=jn(f.pendingLanes);if(p!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var C=1<<31-Te(p);E.entanglements[1]|=C,p&=~C}ki(f),(Jt&6)===0&&(rc=Ke()+500,yl(0))}}break;case 31:case 13:E=js(f,2),E!==null&&An(E,f,2),ac(),Ad(f,2)}if(f=Rd(o),f===null&&cd(e,n,o,Sc,s),f===h)break;h=f}h!==null&&o.stopPropagation()}else cd(e,n,o,null,s)}}function Rd(e){return e=Gn(e),wd(e)}var Sc=null;function wd(e){if(Sc=null,e=bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=d(n),e!==null)return e;e=null}else if(s===31){if(e=g(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Sc=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ti()){case Is:return 2;case Rr:return 8;case wn:case wr:return 32;case fa:return 268435456;default:return 32}default:return 32}}var Cd=!1,es=null,ns=null,is=null,bl=new Map,Rl=new Map,rs=[],pA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(e,n){switch(e){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":bl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(n.pointerId)}}function wl(e,n,s,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=Fn(n),n!==null&&T_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function yA(e,n,s,o,h){switch(n){case"focusin":return es=wl(es,e,n,s,o,h),!0;case"dragenter":return ns=wl(ns,e,n,s,o,h),!0;case"mouseover":return is=wl(is,e,n,s,o,h),!0;case"pointerover":var f=h.pointerId;return bl.set(f,wl(bl.get(f)||null,e,n,s,o,h)),!0;case"gotpointercapture":return f=h.pointerId,Rl.set(f,wl(Rl.get(f)||null,e,n,s,o,h)),!0}return!1}function R_(e){var n=bi(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=d(s),n!==null){e.blockedOn=n,St(e.priority,function(){S_(s)});return}}else if(n===31){if(n=g(s),n!==null){e.blockedOn=n,St(e.priority,function(){S_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Rd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);zo=o,s.target.dispatchEvent(o),zo=null}else return n=Fn(s),n!==null&&T_(n),e.blockedOn=s,!1;n.shift()}return!0}function w_(e,n,s){Ac(e)&&s.delete(n)}function _A(){Cd=!1,es!==null&&Ac(es)&&(es=null),ns!==null&&Ac(ns)&&(ns=null),is!==null&&Ac(is)&&(is=null),bl.forEach(w_),Rl.forEach(w_)}function bc(e,n){e.blockedOn===n&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_A)))}var Rc=null;function C_(e){Rc!==e&&(Rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(wd(o||s)===null)continue;break}var f=Fn(s);f!==null&&(e.splice(n,3),n-=3,Rf(f,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function eo(e){function n(C){return bc(C,e)}es!==null&&bc(es,e),ns!==null&&bc(ns,e),is!==null&&bc(is,e),bl.forEach(n),Rl.forEach(n);for(var s=0;s<rs.length;s++){var o=rs[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(s=rs[0],s.blockedOn===null);)R_(s),s.blockedOn===null&&rs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],f=s[o+1],p=h[Lt]||null;if(typeof f=="function")p||C_(s);else if(p){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,p=f[Lt]||null)E=p.formAction;else if(wd(h)!==null)continue}else E=p.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),C_(s)}}}function I_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(p){return h=p})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function Id(e){this._internalRoot=e}wc.prototype.render=Id.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=Pn();v_(s,o,e,n,null,null)},wc.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),ac(),n[Ce]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=mt();e={blockedOn:null,target:e,priority:n};for(var s=0;s<rs.length&&n!==0&&n<rs[s].priority;s++);rs.splice(s,0,e),s===0&&R_(e)}};var D_=t.version;if(D_!=="19.2.0")throw Error(a(527,D_,"19.2.0"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var vA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Cn=Cc.inject(vA),Be=Cc}catch{}}return Il.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",h=Lp,f=Pp,p=kp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=y_(e,1,!1,null,null,s,o,null,h,f,p,I_),e[Ce]=n.current,ud(e),new Id(n)},Il.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,h="",f=Lp,p=Pp,E=kp,C=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.formState!==void 0&&(C=s.formState)),n=y_(e,1,!0,n,s??null,o,h,C,f,p,E,I_),n.context=__(null),s=n.current,o=Pn(),o=G(o),h=Hr(o),h.callback=null,Fr(s,h,o),s=o,n.current.lanes=s,Si(n,s),ki(n),e[Ce]=n.current,ud(e),new wc(n)},Il.version="19.2.0",Il}var z_;function NA(){if(z_)return Od.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Od.exports=DA(),Od.exports}var OA=NA();const xA=mE(OA),MA=()=>{};var B_={};/**
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
 */const gE=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},VA=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],d=r[i++],g=r[i++],_=((l&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const c=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},pE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,g=d?r[l+1]:0,_=l+2<r.length,y=_?r[l+2]:0,S=c>>2,A=(c&3)<<4|g>>4;let N=(g&15)<<2|y>>6,Y=y&63;_||(Y=64,d||(N=64)),a.push(i[S],i[A],i[N],i[Y])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(gE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):VA(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],g=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const A=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||g==null||y==null||A==null)throw new UA;const N=c<<2|g>>4;if(a.push(N),y!==64){const Y=g<<4&240|y>>2;if(a.push(Y),A!==64){const $=y<<6&192|A;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class UA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LA=function(r){const t=gE(r);return pE.encodeByteArray(t,!0)},Fc=function(r){return LA(r).replace(/\./g,"")},yE=function(r){try{return pE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function PA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kA=()=>PA().__FIREBASE_DEFAULTS__,zA=()=>{if(typeof process>"u"||typeof B_>"u")return;const r=B_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},BA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&yE(r[1]);return t&&JSON.parse(t)},ch=()=>{try{return MA()||kA()||zA()||BA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_E=r=>ch()?.emulatorHosts?.[r],jA=r=>{const t=_E(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},vE=()=>ch()?.config,EE=r=>ch()?.[`_${r}`];/**
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
 */class qA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function To(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function TE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function HA(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Fc(JSON.stringify(i)),Fc(JSON.stringify(d)),""].join(".")}const Ul={};function FA(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ul))Ul[t]?r.emulator.push(t):r.prod.push(t);return r}function GA(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let j_=!1;function SE(r,t){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||Ul[r]===t||Ul[r]||j_)return;Ul[r]=t;function i(N){return`__firebase__banner__${N}`}const a="__firebase__banner",c=FA().prod.length>0;function d(){const N=document.getElementById(a);N&&N.remove()}function g(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function _(N,Y){N.setAttribute("width","24"),N.setAttribute("id",Y),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function y(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{j_=!0,d()},N}function S(N,Y){N.setAttribute("id",Y),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function A(){const N=GA(a),Y=i("text"),$=document.getElementById(Y)||document.createElement("span"),et=i("learnmore"),rt=document.getElementById(et)||document.createElement("a"),ht=i("preprendIcon"),Tt=document.getElementById(ht)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const M=N.element;g(M),S(rt,et);const Ut=y();_(Tt,ht),M.append(Tt,$,rt,Ut),document.body.appendChild(M)}c?($.innerText="Preview backend disconnected.",Tt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Tt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",Y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function XA(){const r=ch()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $A(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZA(){const r=hn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function JA(){return!XA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WA(){try{return typeof indexedDB=="object"}catch{return!1}}function t1(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}/**
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
 */const e1="FirebaseError";class Ar extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=e1,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zl.prototype.create)}}class Zl{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?n1(c,a):"Error",g=`${this.serviceName}: ${d} (${l}).`;return new Ar(l,g,a)}}function n1(r,t){return r.replace(i1,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const i1=/\{\$([^}]+)}/g;function r1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ra(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const c=r[l],d=t[l];if(q_(c)&&q_(d)){if(!ra(c,d))return!1}else if(c!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function q_(r){return r!==null&&typeof r=="object"}/**
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
 */function Jl(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function Dl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,c]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function Nl(r){const t=r.indexOf("?");if(!t)return"";const i=r.indexOf("#",t);return r.substring(t,i>0?i:void 0)}function s1(r,t){const i=new a1(r,t);return i.subscribe.bind(i)}class a1{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");o1(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=Ud),l.error===void 0&&(l.error=Ud),l.complete===void 0&&(l.complete=Ud);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o1(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function Ud(){}/**
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
 */function rn(r){return r&&r._delegate?r._delegate:r}class sa{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ta="[DEFAULT]";/**
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
 */class l1{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new qA;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(c1(t))try{this.getOrInitializeService({instanceIdentifier:ta})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=ta){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ta){return this.instances.has(t)}getOptions(t=ta){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);a===g&&d.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:u1(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=ta){return this.component?this.component.multipleInstances?t:ta:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u1(r){return r===ta?void 0:r}function c1(r){return r.instantiationMode==="EAGER"}/**
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
 */class h1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new l1(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var jt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(jt||(jt={}));const f1={debug:jt.DEBUG,verbose:jt.VERBOSE,info:jt.INFO,warn:jt.WARN,error:jt.ERROR,silent:jt.SILENT},d1=jt.INFO,m1={[jt.DEBUG]:"log",[jt.VERBOSE]:"log",[jt.INFO]:"info",[jt.WARN]:"warn",[jt.ERROR]:"error"},g1=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=m1[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Em{constructor(t){this.name=t,this._logLevel=d1,this._logHandler=g1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in jt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?f1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,jt.DEBUG,...t),this._logHandler(this,jt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,jt.VERBOSE,...t),this._logHandler(this,jt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,jt.INFO,...t),this._logHandler(this,jt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,jt.WARN,...t),this._logHandler(this,jt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,jt.ERROR,...t),this._logHandler(this,jt.ERROR,...t)}}const p1=(r,t)=>t.some(i=>r instanceof i);let H_,F_;function y1(){return H_||(H_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _1(){return F_||(F_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AE=new WeakMap,Xd=new WeakMap,bE=new WeakMap,Ld=new WeakMap,Tm=new WeakMap;function v1(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{i(fs(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&AE.set(i,r)}).catch(()=>{}),Tm.set(t,r),t}function E1(r){if(Xd.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Xd.set(r,t)}let Qd={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Xd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||bE.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return fs(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function T1(r){Qd=r(Qd)}function S1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(Pd(this),t,...i);return bE.set(a,t.sort?t.sort():[t]),fs(a)}:_1().includes(r)?function(...t){return r.apply(Pd(this),t),fs(AE.get(this))}:function(...t){return fs(r.apply(Pd(this),t))}}function A1(r){return typeof r=="function"?S1(r):(r instanceof IDBTransaction&&E1(r),p1(r,y1())?new Proxy(r,Qd):r)}function fs(r){if(r instanceof IDBRequest)return v1(r);if(Ld.has(r))return Ld.get(r);const t=A1(r);return t!==r&&(Ld.set(r,t),Tm.set(t,r)),t}const Pd=r=>Tm.get(r);function b1(r,t,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),g=fs(d);return a&&d.addEventListener("upgradeneeded",_=>{a(fs(d.result),_.oldVersion,_.newVersion,fs(d.transaction),_)}),i&&d.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),g.then(_=>{c&&_.addEventListener("close",()=>c()),l&&_.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const R1=["get","getKey","getAll","getAllKeys","count"],w1=["put","add","delete","clear"],kd=new Map;function G_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(kd.get(t))return kd.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=w1.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||R1.includes(i)))return;const c=async function(d,...g){const _=this.transaction(d,l?"readwrite":"readonly");let y=_.store;return a&&(y=y.index(g.shift())),(await Promise.all([y[i](...g),l&&_.done]))[0]};return kd.set(t,c),c}T1(r=>({...r,get:(t,i,a)=>G_(t,i)||r.get(t,i,a),has:(t,i)=>!!G_(t,i)||r.has(t,i)}));/**
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
 */class C1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(I1(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function I1(r){return r.getComponent()?.type==="VERSION"}const Kd="@firebase/app",Y_="0.14.4";/**
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
 */const _r=new Em("@firebase/app"),D1="@firebase/app-compat",N1="@firebase/analytics-compat",O1="@firebase/analytics",x1="@firebase/app-check-compat",M1="@firebase/app-check",V1="@firebase/auth",U1="@firebase/auth-compat",L1="@firebase/database",P1="@firebase/data-connect",k1="@firebase/database-compat",z1="@firebase/functions",B1="@firebase/functions-compat",j1="@firebase/installations",q1="@firebase/installations-compat",H1="@firebase/messaging",F1="@firebase/messaging-compat",G1="@firebase/performance",Y1="@firebase/performance-compat",X1="@firebase/remote-config",Q1="@firebase/remote-config-compat",K1="@firebase/storage",$1="@firebase/storage-compat",Z1="@firebase/firestore",J1="@firebase/ai",W1="@firebase/firestore-compat",tb="firebase",eb="12.4.0";/**
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
 */const $d="[DEFAULT]",nb={[Kd]:"fire-core",[D1]:"fire-core-compat",[O1]:"fire-analytics",[N1]:"fire-analytics-compat",[M1]:"fire-app-check",[x1]:"fire-app-check-compat",[V1]:"fire-auth",[U1]:"fire-auth-compat",[L1]:"fire-rtdb",[P1]:"fire-data-connect",[k1]:"fire-rtdb-compat",[z1]:"fire-fn",[B1]:"fire-fn-compat",[j1]:"fire-iid",[q1]:"fire-iid-compat",[H1]:"fire-fcm",[F1]:"fire-fcm-compat",[G1]:"fire-perf",[Y1]:"fire-perf-compat",[X1]:"fire-rc",[Q1]:"fire-rc-compat",[K1]:"fire-gcs",[$1]:"fire-gcs-compat",[Z1]:"fire-fst",[W1]:"fire-fst-compat",[J1]:"fire-vertex","fire-js":"fire-js",[tb]:"fire-js-all"};/**
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
 */const Gc=new Map,ib=new Map,Zd=new Map;function X_(r,t){try{r.container.addComponent(t)}catch(i){_r.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function fo(r){const t=r.name;if(Zd.has(t))return _r.debug(`There were multiple attempts to register component ${t}.`),!1;Zd.set(t,r);for(const i of Gc.values())X_(i,r);for(const i of ib.values())X_(i,r);return!0}function Sm(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function mi(r){return r==null?!1:r.settings!==void 0}/**
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
 */const rb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Zl("app","Firebase",rb);/**
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
 */class sb{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new sa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const So=eb;function RE(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a={name:$d,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw ds.create("bad-app-name",{appName:String(l)});if(i||(i=vE()),!i)throw ds.create("no-options");const c=Gc.get(l);if(c){if(ra(i,c.options)&&ra(a,c.config))return c;throw ds.create("duplicate-app",{appName:l})}const d=new h1(l);for(const _ of Zd.values())d.addComponent(_);const g=new sb(i,a,d);return Gc.set(l,g),g}function wE(r=$d){const t=Gc.get(r);if(!t&&r===$d&&vE())return RE();if(!t)throw ds.create("no-app",{appName:r});return t}function ms(r,t,i){let a=nb[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_r.warn(d.join(" "));return}fo(new sa(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const ab="firebase-heartbeat-database",ob=1,jl="firebase-heartbeat-store";let zd=null;function CE(){return zd||(zd=b1(ab,ob,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(jl)}catch(i){console.warn(i)}}}}).catch(r=>{throw ds.create("idb-open",{originalErrorMessage:r.message})})),zd}async function lb(r){try{const i=(await CE()).transaction(jl),a=await i.objectStore(jl).get(IE(r));return await i.done,a}catch(t){if(t instanceof Ar)_r.warn(t.message);else{const i=ds.create("idb-get",{originalErrorMessage:t?.message});_r.warn(i.message)}}}async function Q_(r,t){try{const a=(await CE()).transaction(jl,"readwrite");await a.objectStore(jl).put(t,IE(r)),await a.done}catch(i){if(i instanceof Ar)_r.warn(i.message);else{const a=ds.create("idb-set",{originalErrorMessage:i?.message});_r.warn(a.message)}}}function IE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const ub=1024,cb=30;class hb{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new db(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=K_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>cb){const l=mb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){_r.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=K_(),{heartbeatsToSend:i,unsentEntries:a}=fb(this._heartbeatsCache.heartbeats),l=Fc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return _r.warn(t),""}}}function K_(){return new Date().toISOString().substring(0,10)}function fb(r,t=ub){const i=[];let a=r.slice();for(const l of r){const c=i.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),$_(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),$_(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class db{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WA()?t1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await lb(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Q_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function $_(r){return Fc(JSON.stringify({version:2,heartbeats:r})).length}function mb(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
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
 */function gb(r){fo(new sa("platform-logger",t=>new C1(t),"PRIVATE")),fo(new sa("heartbeat",t=>new hb(t),"PRIVATE")),ms(Kd,Y_,r),ms(Kd,Y_,"esm2020"),ms("fire-js","")}gb("");function DE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pb=DE,NE=new Zl("auth","Firebase",DE());/**
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
 */const Yc=new Em("@firebase/auth");function yb(r,...t){Yc.logLevel<=jt.WARN&&Yc.warn(`Auth (${So}): ${r}`,...t)}function Vc(r,...t){Yc.logLevel<=jt.ERROR&&Yc.error(`Auth (${So}): ${r}`,...t)}/**
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
 */function yi(r,...t){throw Am(r,...t)}function Bi(r,...t){return Am(r,...t)}function OE(r,t,i){const a={...pb(),[t]:i};return new Zl("auth","Firebase",a).create(t,{appName:r.name})}function gs(r){return OE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return NE.create(r,...t)}function bt(r,t,...i){if(!r)throw Am(t,...i)}function gr(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Vc(t),new Error(t)}function vr(r,t){r||gr(t)}/**
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
 */function Jd(){return typeof self<"u"&&self.location?.href||""}function _b(){return Z_()==="http:"||Z_()==="https:"}function Z_(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_b()||KA()||"connection"in navigator)?navigator.onLine:!0}function Eb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Wl{constructor(t,i){this.shortDelay=t,this.longDelay=i,vr(i>t,"Short delay should be less than long delay!"),this.isMobile=YA()||$A()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(r,t){vr(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class xE{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Tb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ab=new Wl(3e4,6e4);function ua(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function bs(r,t,i,a,l={}){return ME(r,l,async()=>{let c={},d={};a&&(t==="GET"?d=a:c={body:JSON.stringify(a)});const g=Jl({key:r.config.apiKey,...d}).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:_,...c};return QA()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&To(r.emulatorConfig.host)&&(y.credentials="include"),xE.fetch()(await VE(r,r.config.apiHost,i,g),y)})}async function ME(r,t,i){r._canInitEmulator=!1;const a={...Tb,...t};try{const l=new Rb(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Ic(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[_,y]=g.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(r,"credential-already-in-use",d);if(_==="EMAIL_EXISTS")throw Ic(r,"email-already-in-use",d);if(_==="USER_DISABLED")throw Ic(r,"user-disabled",d);const S=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw OE(r,S,y);yi(r,S)}}catch(l){if(l instanceof Ar)throw l;yi(r,"network-request-failed",{message:String(l)})}}async function hh(r,t,i,a,l={}){const c=await bs(r,t,i,a,l);return"mfaPendingCredential"in c&&yi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function VE(r,t,i,a){const l=`${t}${i}?${a}`,c=r,d=c.config.emulator?bm(r.config,l):`${r.config.apiScheme}://${l}`;return Sb.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function bb(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(Bi(this.auth,"network-request-failed")),Ab.get())})}}function Ic(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=Bi(r,t,a);return l.customData._tokenResponse=i,l}function J_(r){return r!==void 0&&r.enterprise!==void 0}class wb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return bb(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Cb(r,t){return bs(r,"GET","/v2/recaptchaConfig",ua(r,t))}/**
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
 */async function Ib(r,t){return bs(r,"POST","/v1/accounts:delete",t)}async function Xc(r,t){return bs(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ll(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Db(r,t=!1){const i=rn(r),a=await i.getIdToken(t),l=Rm(a);bt(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:a,authTime:Ll(Bd(l.auth_time)),issuedAtTime:Ll(Bd(l.iat)),expirationTime:Ll(Bd(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Bd(r){return Number(r)*1e3}function Rm(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const l=yE(i);return l?JSON.parse(l):(Vc("Failed to decode base64 JWT payload"),null)}catch(l){return Vc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function W_(r){const t=Rm(r);return bt(t,"internal-error"),bt(typeof t.exp<"u","internal-error"),bt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ql(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Ar&&Nb(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function Nb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Ob{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qc(r){const t=r.auth,i=await r.getIdToken(),a=await ql(r,Xc(t,{idToken:i}));bt(a?.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?UE(l.providerUserInfo):[],d=Mb(r.providerData,c),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!d?.length,y=g?_:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Wd(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,S)}async function xb(r){const t=rn(r);await Qc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Mb(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function UE(r){return r.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Vb(r,t){const i=await ME(r,{},async()=>{const a=Jl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await VE(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:g,body:a};return r.emulatorConfig&&To(r.emulatorConfig.host)&&(_.credentials="include"),xE.fetch()(d,_)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ub(r,t){return bs(r,"POST","/v2/accounts:revokeToken",ua(r,t))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){bt(t.idToken,"internal-error"),bt(typeof t.idToken<"u","internal-error"),bt(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){bt(t.length!==0,"internal-error");const i=W_(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(bt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:c}=await Vb(t,i);this.updateTokensAndExpiration(a,l,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:c}=i,d=new oo;return a&&(bt(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(bt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(bt(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
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
 */function as(r,t){bt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class gi{constructor({uid:t,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new Ob(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Wd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await ql(this,this.stsTokenManager.getToken(this.auth,t));return bt(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Db(this,t)}reload(){return xb(this)}_assign(t){this!==t&&(bt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new gi({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){bt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Qc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mi(this.auth.app))return Promise.reject(gs(this.auth));const t=await this.getIdToken();return await ql(this,Ib(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const a=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,d=i.photoURL??void 0,g=i.tenantId??void 0,_=i._redirectEventId??void 0,y=i.createdAt??void 0,S=i.lastLoginAt??void 0,{uid:A,emailVerified:N,isAnonymous:Y,providerData:$,stsTokenManager:et}=i;bt(A&&et,t,"internal-error");const rt=oo.fromJSON(this.name,et);bt(typeof A=="string",t,"internal-error"),as(a,t.name),as(l,t.name),bt(typeof N=="boolean",t,"internal-error"),bt(typeof Y=="boolean",t,"internal-error"),as(c,t.name),as(d,t.name),as(g,t.name),as(_,t.name),as(y,t.name),as(S,t.name);const ht=new gi({uid:A,auth:t,email:l,emailVerified:N,displayName:a,isAnonymous:Y,photoURL:d,phoneNumber:c,tenantId:g,stsTokenManager:rt,createdAt:y,lastLoginAt:S});return $&&Array.isArray($)&&(ht.providerData=$.map(Tt=>({...Tt}))),_&&(ht._redirectEventId=_),ht}static async _fromIdTokenResponse(t,i,a=!1){const l=new oo;l.updateFromServerResponse(i);const c=new gi({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Qc(c),c}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];bt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?UE(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,g=new oo;g.updateFromIdToken(a);const _=new gi({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Wd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(_,y),_}}/**
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
 */const tv=new Map;function pr(r){vr(r instanceof Function,"Expected a class definition");let t=tv.get(r);return t?(vr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,tv.set(r,t),t)}/**
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
 */function Uc(r,t,i){return`firebase:${r}:${t}:${i}`}class lo{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:c}=this.auth;this.fullUserKey=Uc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Uc("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Xc(this.auth,{idToken:t}).catch(()=>{});return i?gi._fromGetAccountInfoResponse(this.auth,i,t):null}return gi._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new lo(pr(ev),t,a);const l=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||pr(ev);const d=Uc(a,t.config.apiKey,t.name);let g=null;for(const y of i)try{const S=await y._get(d);if(S){let A;if(typeof S=="string"){const N=await Xc(t,{idToken:S}).catch(()=>{});if(!N)break;A=await gi._fromGetAccountInfoResponse(t,N,S)}else A=gi._fromJSON(t,S);y!==c&&(g=A),c=y;break}}catch{}const _=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new lo(c,t,a):(c=_[0],g&&await c._set(d,g.toJSON()),await Promise.all(i.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new lo(c,t,a))}}/**
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
 */function nv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(BE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(PE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qE(t))return"Blackberry";if(HE(t))return"Webos";if(kE(t))return"Safari";if((t.includes("chrome/")||zE(t))&&!t.includes("edge/"))return"Chrome";if(jE(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if(a?.length===2)return a[1]}return"Other"}function PE(r=hn()){return/firefox\//i.test(r)}function kE(r=hn()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zE(r=hn()){return/crios\//i.test(r)}function BE(r=hn()){return/iemobile/i.test(r)}function jE(r=hn()){return/android/i.test(r)}function qE(r=hn()){return/blackberry/i.test(r)}function HE(r=hn()){return/webos/i.test(r)}function wm(r=hn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Lb(r=hn()){return wm(r)&&!!window.navigator?.standalone}function Pb(){return ZA()&&document.documentMode===10}function FE(r=hn()){return wm(r)||jE(r)||HE(r)||qE(r)||/windows phone/i.test(r)||BE(r)}/**
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
 */function GE(r,t=[]){let i;switch(r){case"Browser":i=nv(hn());break;case"Worker":i=`${nv(hn())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${So}/${a}`}/**
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
 */class kb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((d,g)=>{try{const _=t(c);d(_)}catch(_){g(_)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */async function zb(r,t={}){return bs(r,"GET","/v2/passwordPolicy",ua(r,t))}/**
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
 */const Bb=6;class jb{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??Bb,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class qb{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=pr(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await lo.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Xc(this,{idToken:t}),a=await gi._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(mi(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=a?._redirectEventId,g=await this.tryRedirectSignIn(t);(!c||c===d)&&g?.user&&(a=g.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return bt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Qc(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Eb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mi(this.app))return Promise.reject(gs(this));const i=t?rn(t):null;return i&&bt(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&bt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mi(this.app)?Promise.reject(gs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mi(this.app)?Promise.reject(gs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await zb(this),i=new jb(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Zl("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await Ub(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&pr(t)||this._popupRedirectResolver;bt(i,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[pr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(bt(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,l);return()=>{d=!0,_()}}else{const _=t.addObserver(i);return()=>{d=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return bt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=GE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){if(mi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&yb(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ao(r){return rn(r)}class iv{constructor(t){this.auth=t,this.observer=null,this.addObserver=s1(i=>this.observer=i)}get next(){return bt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hb(r){fh=r}function YE(r){return fh.loadJS(r)}function Fb(){return fh.recaptchaEnterpriseScript}function Gb(){return fh.gapiScript}function Yb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Xb{constructor(){this.enterprise=new Qb}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class Qb{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Kb="recaptcha-enterprise",XE="NO_RECAPTCHA";class $b{constructor(t){this.type=Kb,this.auth=Ao(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,g)=>{Cb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const y=new wb(_);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,d(y.siteKey)}}).catch(_=>{g(_)})})}function l(c,d,g){const _=window.grecaptcha;J_(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(y=>{d(y)}).catch(()=>{d(XE)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xb().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{a(this.auth).then(g=>{if(!i&&J_(window.grecaptcha))l(g,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let _=Fb();_.length!==0&&(_+=g),YE(_).then(()=>{l(g,c,d)}).catch(y=>{d(y)})}}).catch(g=>{d(g)})})}}async function rv(r,t,i,a=!1,l=!1){const c=new $b(r);let d;if(l)d=XE;else try{d=await c.verify(i)}catch{d=await c.verify(i,!0)}const g={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const _=g.phoneEnrollmentInfo.phoneNumber,y=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const _=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return a?Object.assign(g,{captchaResp:d}):Object.assign(g,{captchaResponse:d}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function sv(r,t,i,a,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await rv(r,t,i,i==="getOobCode");return a(r,c)}else return a(r,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await rv(r,t,i,i==="getOobCode");return a(r,d)}else return Promise.reject(c)})}/**
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
 */function Zb(r,t){const i=Sm(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(ra(c,t??{}))return l;yi(l,"already-initialized")}return i.initialize({options:t})}function Jb(r,t){const i=t?.persistence||[],a=(Array.isArray(i)?i:[i]).map(pr);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t?.popupRedirectResolver)}function Wb(r,t,i){const a=Ao(r);bt(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,c=QE(t),{host:d,port:g}=tR(t),_=g===null?"":`:${g}`,y={url:`${c}//${d}${_}/`},S=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){bt(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),bt(ra(y,a.config.emulator)&&ra(S,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=S,a.settings.appVerificationDisabledForTesting=!0,To(d)?(TE(`${c}//${d}${_}`),SE("Auth",!0)):eR()}function QE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function tR(r){const t=QE(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const c=l[1];return{host:c,port:av(a.substr(c.length+1))}}else{const[c,d]=a.split(":");return{host:c,port:av(d)}}}function av(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function eR(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Cm{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return gr("not implemented")}_getIdTokenResponse(t){return gr("not implemented")}_linkToIdToken(t,i){return gr("not implemented")}_getReauthenticationResolver(t){return gr("not implemented")}}async function nR(r,t){return bs(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function iR(r,t){return hh(r,"POST","/v1/accounts:signInWithPassword",ua(r,t))}/**
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
 */async function rR(r,t){return hh(r,"POST","/v1/accounts:signInWithEmailLink",ua(r,t))}async function sR(r,t){return hh(r,"POST","/v1/accounts:signInWithEmailLink",ua(r,t))}/**
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
 */class Hl extends Cm{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new Hl(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Hl(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sv(t,i,"signInWithPassword",iR);case"emailLink":return rR(t,{email:this._email,oobCode:this._password});default:yi(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sv(t,a,"signUpPassword",nR);case"emailLink":return sR(t,{idToken:i,email:this._email,oobCode:this._password});default:yi(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function uo(r,t){return hh(r,"POST","/v1/accounts:signInWithIdp",ua(r,t))}/**
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
 */const aR="http://localhost";class aa extends Cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new aa(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):yi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l,...c}=i;if(!a||!l)return null;const d=new aa(a,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return uo(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,uo(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,uo(t,i)}buildRequest(){const t={requestUri:aR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Jl(i)}return t}}/**
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
 */function oR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lR(r){const t=Dl(Nl(r)).link,i=t?Dl(Nl(t)).deep_link_id:null,a=Dl(Nl(r)).deep_link_id;return(a?Dl(Nl(a)).link:null)||a||i||t||r}class Im{constructor(t){const i=Dl(Nl(t)),a=i.apiKey??null,l=i.oobCode??null,c=oR(i.mode??null);bt(a&&l&&c,"argument-error"),this.apiKey=a,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=lR(t);try{return new Im(i)}catch{return null}}}/**
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
 */class bo{constructor(){this.providerId=bo.PROVIDER_ID}static credential(t,i){return Hl._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Im.parseLink(i);return bt(a,"argument-error"),Hl._fromEmailAndCode(t,a.code,a.tenantId)}}bo.PROVIDER_ID="password";bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tu extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class os extends tu{constructor(){super("facebook.com")}static credential(t){return aa._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return os.credential(t.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
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
 */class ls extends tu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return aa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ls.credentialFromTaggedObject(t)}static credentialFromError(t){return ls.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return ls.credential(i,a)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
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
 */class us extends tu{constructor(){super("github.com")}static credential(t){return aa._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return us.credentialFromTaggedObject(t)}static credentialFromError(t){return us.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return us.credential(t.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
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
 */class cs extends tu{constructor(){super("twitter.com")}static credential(t,i){return aa._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return cs.credentialFromTaggedObject(t)}static credentialFromError(t){return cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return cs.credential(i,a)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const c=await gi._fromIdTokenResponse(t,a,l),d=ov(a);return new mo({user:c,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=ov(a);return new mo({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function ov(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Kc extends Ar{constructor(t,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new Kc(t,i,a,l)}}function $E(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(r,c,t,a):c})}async function uR(r,t,i=!1){const a=await ql(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return mo._forOperation(r,"link",a)}/**
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
 */async function cR(r,t,i=!1){const{auth:a}=r;if(mi(a.app))return Promise.reject(gs(a));const l="reauthenticate";try{const c=await ql(r,$E(a,l,t,r),i);bt(c.idToken,a,"internal-error");const d=Rm(c.idToken);bt(d,a,"internal-error");const{sub:g}=d;return bt(r.uid===g,a,"user-mismatch"),mo._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&yi(a,"user-mismatch"),c}}/**
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
 */async function ZE(r,t,i=!1){if(mi(r.app))return Promise.reject(gs(r));const a="signIn",l=await $E(r,a,t),c=await mo._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(c.user),c}async function hR(r,t){return ZE(Ao(r),t)}/**
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
 */async function fR(r){const t=Ao(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function dR(r,t,i){return mi(r.app)?Promise.reject(gs(r)):hR(rn(r),bo.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&fR(r),a})}function mR(r,t,i,a){return rn(r).onIdTokenChanged(t,i,a)}function gR(r,t,i){return rn(r).beforeAuthStateChanged(t,i)}function pR(r,t,i,a){return rn(r).onAuthStateChanged(t,i,a)}function JE(r){return rn(r).signOut()}const $c="__sak";/**
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
 */class WE{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yR=1e3,_R=10;class tT extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,g,_)=>{this.notifyListeners(d,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},c=this.storage.getItem(a);Pb()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,_R):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}tT.type="LOCAL";const vR=tT;/**
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
 */function ER(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class dh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new dh(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:c}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const g=Array.from(d).map(async y=>y(i.origin,c)),_=await ER(g);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
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
 */class TR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((g,_)=>{const y=Dm("",20);l.port1.start();const S=setTimeout(()=>{_(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(A){const N=A;if(N.data.eventId===y)switch(N.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(N.data.response);break;default:clearTimeout(S),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:y,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function ji(){return window}function SR(r){ji().location.href=r}/**
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
 */function iT(){return typeof ji().WorkerGlobalScope<"u"&&typeof ji().importScripts=="function"}async function AR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bR(){return navigator?.serviceWorker?.controller||null}function RR(){return iT()?self:null}/**
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
 */const rT="firebaseLocalStorageDb",wR=1,Zc="firebaseLocalStorage",sT="fbase_key";class eu{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function mh(r,t){return r.transaction([Zc],t?"readwrite":"readonly").objectStore(Zc)}function CR(){const r=indexedDB.deleteDatabase(rT);return new eu(r).toPromise()}function tm(){const r=indexedDB.open(rT,wR);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Zc,{keyPath:sT})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Zc)?t(a):(a.close(),await CR(),t(await tm()))})})}async function lv(r,t,i){const a=mh(r,!0).put({[sT]:t,value:i});return new eu(a).toPromise()}async function IR(r,t){const i=mh(r,!1).get(t),a=await new eu(i).toPromise();return a===void 0?null:a.value}function uv(r,t){const i=mh(r,!0).delete(t);return new eu(i).toPromise()}const DR=800,NR=3;class aT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tm(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>NR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(RR()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await AR(),!this.activeServiceWorker)return;this.sender=new TR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await tm();return await lv(t,$c,"1"),await uv(t,$c),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>lv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>IR(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=mh(l,!1).getAll();return new eu(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aT.type="LOCAL";const OR=aT;new Wl(3e4,6e4);/**
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
 */function xR(r,t){return t?pr(t):(bt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Nm extends Cm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return uo(t,this._buildIdpRequest())}_linkToIdToken(t,i){return uo(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return uo(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function MR(r){return ZE(r.auth,new Nm(r),r.bypassAuthState)}function VR(r){const{auth:t,user:i}=r;return bt(i,t,"internal-error"),cR(i,new Nm(r),r.bypassAuthState)}async function UR(r){const{auth:t,user:i}=r;return bt(i,t,"internal-error"),uR(i,new Nm(r),r.bypassAuthState)}/**
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
 */class oT{constructor(t,i,a,l,c=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:c,error:d,type:g}=t;if(d){this.reject(d);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(_))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return MR;case"linkViaPopup":case"linkViaRedirect":return UR;case"reauthViaPopup":case"reauthViaRedirect":return VR;default:yi(this.auth,"internal-error")}}resolve(t){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LR=new Wl(2e3,1e4);class ao extends oT{constructor(t,i,a,l,c){super(t,i,l,c),this.provider=a,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return bt(t,this.auth,"internal-error"),t}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const t=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,LR.get())};t()}}ao.currentPopupAction=null;/**
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
 */const PR="pendingRedirect",Lc=new Map;class kR extends oT{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=Lc.get(this.auth._key());if(!t){try{const a=await zR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}Lc.set(this.auth._key(),t)}return this.bypassAuthState||Lc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zR(r,t){const i=qR(t),a=jR(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function BR(r,t){Lc.set(r._key(),t)}function jR(r){return pr(r._redirectPersistence)}function qR(r){return Uc(PR,r.config.apiKey,r.name)}async function HR(r,t,i=!1){if(mi(r.app))return Promise.reject(gs(r));const a=Ao(r),l=xR(a,t),d=await new kR(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
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
 */const FR=600*1e3;class GR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!YR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!lT(t)){const a=t.error.code?.split("auth/")[1]||"internal-error";i.onError(Bi(this.auth,a))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=FR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(t))}saveEventToCache(t){this.cachedEventUids.add(cv(t)),this.lastProcessedEventTime=Date.now()}}function cv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function lT({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function YR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(r);default:return!1}}/**
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
 */async function XR(r,t={}){return bs(r,"GET","/v1/projects",t)}/**
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
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function $R(r){if(r.config.emulator)return;const{authorizedDomains:t}=await XR(r);for(const i of t)try{if(ZR(i))return}catch{}yi(r,"unauthorized-domain")}function ZR(r){const t=Jd(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!KR.test(i))return!1;if(QR.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const JR=new Wl(3e4,6e4);function hv(){const r=ji().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function WR(r){return new Promise((t,i)=>{function a(){hv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hv(),i(Bi(r,"network-request-failed"))},timeout:JR.get()})}if(ji().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(ji().gapi?.load)a();else{const l=Yb("iframefcb");return ji()[l]=()=>{gapi.load?a():i(Bi(r,"network-request-failed"))},YE(`${Gb()}?onload=${l}`).catch(c=>i(c))}}).catch(t=>{throw Pc=null,t})}let Pc=null;function tw(r){return Pc=Pc||WR(r),Pc}/**
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
 */const ew=new Wl(5e3,15e3),nw="__/auth/iframe",iw="emulator/auth/iframe",rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aw(r){const t=r.config;bt(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?bm(t,iw):`https://${r.config.authDomain}/${nw}`,a={apiKey:t.apiKey,appName:r.name,v:So},l=sw.get(r.config.apiHost);l&&(a.eid=l);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${Jl(a).slice(1)}`}async function ow(r){const t=await tw(r),i=ji().gapi;return bt(i,r,"internal-error"),t.open({where:document.body,url:aw(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rw,dontclear:!0},a=>new Promise(async(l,c)=>{await a.restyle({setHideOnLeave:!1});const d=Bi(r,"network-request-failed"),g=ji().setTimeout(()=>{c(d)},ew.get());function _(){ji().clearTimeout(g),l(a)}a.ping(_).then(_,()=>{c(d)})}))}/**
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
 */const lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uw=500,cw=600,hw="_blank",fw="http://localhost";class fv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dw(r,t,i,a=uw,l=cw){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const _={...lw,width:a.toString(),height:l.toString(),top:c,left:d},y=hn().toLowerCase();i&&(g=zE(y)?hw:i),PE(y)&&(t=t||fw,_.scrollbars="yes");const S=Object.entries(_).reduce((N,[Y,$])=>`${N}${Y}=${$},`,"");if(Lb(y)&&g!=="_self")return mw(t||"",g),new fv(null);const A=window.open(t||"",g,S);bt(A,r,"popup-blocked");try{A.focus()}catch{}return new fv(A)}function mw(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const gw="__/auth/handler",pw="emulator/auth/handler",yw=encodeURIComponent("fac");async function dv(r,t,i,a,l,c){bt(r.config.authDomain,r,"auth-domain-config-required"),bt(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:So,eventId:l};if(t instanceof KE){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",r1(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[S,A]of Object.entries({}))d[S]=A}if(t instanceof tu){const S=t.getScopes().filter(A=>A!=="");S.length>0&&(d.scopes=S.join(","))}r.tenantId&&(d.tid=r.tenantId);const g=d;for(const S of Object.keys(g))g[S]===void 0&&delete g[S];const _=await r._getAppCheckToken(),y=_?`#${yw}=${encodeURIComponent(_)}`:"";return`${_w(r)}?${Jl(g).slice(1)}${y}`}function _w({config:r}){return r.emulator?bm(r,pw):`https://${r.authDomain}/${gw}`}/**
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
 */const jd="webStorageSupport";class vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=HR,this._overrideRedirectResult=BR}async _openPopup(t,i,a,l){vr(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await dv(t,i,a,Jd(),l);return dw(t,c,Dm())}async _openRedirect(t,i,a,l){await this._originValidation(t);const c=await dv(t,i,a,Jd(),l);return SR(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(vr(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await ow(t),a=new GR(t);return i.register("authEvent",l=>(bt(l?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(jd,{type:jd},l=>{const c=l?.[0]?.[jd];c!==void 0&&i(!!c),yi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=$R(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return FE()||kE()||wm()}}const Ew=vw;var mv="@firebase/auth",gv="1.11.0";/**
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
 */class Tw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){bt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Aw(r){fo(new sa("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;bt(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:d,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GE(r)},y=new qb(a,l,c,_);return Jb(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),fo(new sa("auth-internal",t=>{const i=Ao(t.getProvider("auth").getImmediate());return(a=>new Tw(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ms(mv,gv,Sw(r)),ms(mv,gv,"esm2020")}/**
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
 */const bw=300,Rw=EE("authIdTokenMaxAge")||bw;let pv=null;const ww=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>Rw)return;const l=i?.token;pv!==l&&(pv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Cw(r=wE()){const t=Sm(r,"auth");if(t.isInitialized())return t.getImmediate();const i=Zb(r,{popupRedirectResolver:Ew,persistence:[OR,vR,nT]}),a=EE("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const d=ww(c.toString());gR(i,d,()=>d(i.currentUser)),mR(i,g=>d(g))}}const l=_E("auth");return l&&Wb(i,`http://${l}`),i}function Iw(){return document.getElementsByTagName("head")?.[0]??document}Hb({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const c=Bi("internal-error");c.customData=l,i(c)},a.type="text/javascript",a.charset="UTF-8",Iw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Aw("Browser");var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,uT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,b){function R(){}R.prototype=b.prototype,I.F=b.prototype,I.prototype=new R,I.prototype.constructor=I,I.D=function(U,O,L){for(var w=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)w[Ft-2]=arguments[Ft];return b.prototype[O].apply(U,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(I,b,R){R||(R=0);const U=Array(16);if(typeof b=="string")for(var O=0;O<16;++O)U[O]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(O=0;O<16;++O)U[O]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=I.g[0],R=I.g[1],O=I.g[2];let L=I.g[3],w;w=b+(L^R&(O^L))+U[0]+3614090360&4294967295,b=R+(w<<7&4294967295|w>>>25),w=L+(O^b&(R^O))+U[1]+3905402710&4294967295,L=b+(w<<12&4294967295|w>>>20),w=O+(R^L&(b^R))+U[2]+606105819&4294967295,O=L+(w<<17&4294967295|w>>>15),w=R+(b^O&(L^b))+U[3]+3250441966&4294967295,R=O+(w<<22&4294967295|w>>>10),w=b+(L^R&(O^L))+U[4]+4118548399&4294967295,b=R+(w<<7&4294967295|w>>>25),w=L+(O^b&(R^O))+U[5]+1200080426&4294967295,L=b+(w<<12&4294967295|w>>>20),w=O+(R^L&(b^R))+U[6]+2821735955&4294967295,O=L+(w<<17&4294967295|w>>>15),w=R+(b^O&(L^b))+U[7]+4249261313&4294967295,R=O+(w<<22&4294967295|w>>>10),w=b+(L^R&(O^L))+U[8]+1770035416&4294967295,b=R+(w<<7&4294967295|w>>>25),w=L+(O^b&(R^O))+U[9]+2336552879&4294967295,L=b+(w<<12&4294967295|w>>>20),w=O+(R^L&(b^R))+U[10]+4294925233&4294967295,O=L+(w<<17&4294967295|w>>>15),w=R+(b^O&(L^b))+U[11]+2304563134&4294967295,R=O+(w<<22&4294967295|w>>>10),w=b+(L^R&(O^L))+U[12]+1804603682&4294967295,b=R+(w<<7&4294967295|w>>>25),w=L+(O^b&(R^O))+U[13]+4254626195&4294967295,L=b+(w<<12&4294967295|w>>>20),w=O+(R^L&(b^R))+U[14]+2792965006&4294967295,O=L+(w<<17&4294967295|w>>>15),w=R+(b^O&(L^b))+U[15]+1236535329&4294967295,R=O+(w<<22&4294967295|w>>>10),w=b+(O^L&(R^O))+U[1]+4129170786&4294967295,b=R+(w<<5&4294967295|w>>>27),w=L+(R^O&(b^R))+U[6]+3225465664&4294967295,L=b+(w<<9&4294967295|w>>>23),w=O+(b^R&(L^b))+U[11]+643717713&4294967295,O=L+(w<<14&4294967295|w>>>18),w=R+(L^b&(O^L))+U[0]+3921069994&4294967295,R=O+(w<<20&4294967295|w>>>12),w=b+(O^L&(R^O))+U[5]+3593408605&4294967295,b=R+(w<<5&4294967295|w>>>27),w=L+(R^O&(b^R))+U[10]+38016083&4294967295,L=b+(w<<9&4294967295|w>>>23),w=O+(b^R&(L^b))+U[15]+3634488961&4294967295,O=L+(w<<14&4294967295|w>>>18),w=R+(L^b&(O^L))+U[4]+3889429448&4294967295,R=O+(w<<20&4294967295|w>>>12),w=b+(O^L&(R^O))+U[9]+568446438&4294967295,b=R+(w<<5&4294967295|w>>>27),w=L+(R^O&(b^R))+U[14]+3275163606&4294967295,L=b+(w<<9&4294967295|w>>>23),w=O+(b^R&(L^b))+U[3]+4107603335&4294967295,O=L+(w<<14&4294967295|w>>>18),w=R+(L^b&(O^L))+U[8]+1163531501&4294967295,R=O+(w<<20&4294967295|w>>>12),w=b+(O^L&(R^O))+U[13]+2850285829&4294967295,b=R+(w<<5&4294967295|w>>>27),w=L+(R^O&(b^R))+U[2]+4243563512&4294967295,L=b+(w<<9&4294967295|w>>>23),w=O+(b^R&(L^b))+U[7]+1735328473&4294967295,O=L+(w<<14&4294967295|w>>>18),w=R+(L^b&(O^L))+U[12]+2368359562&4294967295,R=O+(w<<20&4294967295|w>>>12),w=b+(R^O^L)+U[5]+4294588738&4294967295,b=R+(w<<4&4294967295|w>>>28),w=L+(b^R^O)+U[8]+2272392833&4294967295,L=b+(w<<11&4294967295|w>>>21),w=O+(L^b^R)+U[11]+1839030562&4294967295,O=L+(w<<16&4294967295|w>>>16),w=R+(O^L^b)+U[14]+4259657740&4294967295,R=O+(w<<23&4294967295|w>>>9),w=b+(R^O^L)+U[1]+2763975236&4294967295,b=R+(w<<4&4294967295|w>>>28),w=L+(b^R^O)+U[4]+1272893353&4294967295,L=b+(w<<11&4294967295|w>>>21),w=O+(L^b^R)+U[7]+4139469664&4294967295,O=L+(w<<16&4294967295|w>>>16),w=R+(O^L^b)+U[10]+3200236656&4294967295,R=O+(w<<23&4294967295|w>>>9),w=b+(R^O^L)+U[13]+681279174&4294967295,b=R+(w<<4&4294967295|w>>>28),w=L+(b^R^O)+U[0]+3936430074&4294967295,L=b+(w<<11&4294967295|w>>>21),w=O+(L^b^R)+U[3]+3572445317&4294967295,O=L+(w<<16&4294967295|w>>>16),w=R+(O^L^b)+U[6]+76029189&4294967295,R=O+(w<<23&4294967295|w>>>9),w=b+(R^O^L)+U[9]+3654602809&4294967295,b=R+(w<<4&4294967295|w>>>28),w=L+(b^R^O)+U[12]+3873151461&4294967295,L=b+(w<<11&4294967295|w>>>21),w=O+(L^b^R)+U[15]+530742520&4294967295,O=L+(w<<16&4294967295|w>>>16),w=R+(O^L^b)+U[2]+3299628645&4294967295,R=O+(w<<23&4294967295|w>>>9),w=b+(O^(R|~L))+U[0]+4096336452&4294967295,b=R+(w<<6&4294967295|w>>>26),w=L+(R^(b|~O))+U[7]+1126891415&4294967295,L=b+(w<<10&4294967295|w>>>22),w=O+(b^(L|~R))+U[14]+2878612391&4294967295,O=L+(w<<15&4294967295|w>>>17),w=R+(L^(O|~b))+U[5]+4237533241&4294967295,R=O+(w<<21&4294967295|w>>>11),w=b+(O^(R|~L))+U[12]+1700485571&4294967295,b=R+(w<<6&4294967295|w>>>26),w=L+(R^(b|~O))+U[3]+2399980690&4294967295,L=b+(w<<10&4294967295|w>>>22),w=O+(b^(L|~R))+U[10]+4293915773&4294967295,O=L+(w<<15&4294967295|w>>>17),w=R+(L^(O|~b))+U[1]+2240044497&4294967295,R=O+(w<<21&4294967295|w>>>11),w=b+(O^(R|~L))+U[8]+1873313359&4294967295,b=R+(w<<6&4294967295|w>>>26),w=L+(R^(b|~O))+U[15]+4264355552&4294967295,L=b+(w<<10&4294967295|w>>>22),w=O+(b^(L|~R))+U[6]+2734768916&4294967295,O=L+(w<<15&4294967295|w>>>17),w=R+(L^(O|~b))+U[13]+1309151649&4294967295,R=O+(w<<21&4294967295|w>>>11),w=b+(O^(R|~L))+U[4]+4149444226&4294967295,b=R+(w<<6&4294967295|w>>>26),w=L+(R^(b|~O))+U[11]+3174756917&4294967295,L=b+(w<<10&4294967295|w>>>22),w=O+(b^(L|~R))+U[2]+718787259&4294967295,O=L+(w<<15&4294967295|w>>>17),w=R+(L^(O|~b))+U[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(O+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+L&4294967295}a.prototype.v=function(I,b){b===void 0&&(b=I.length);const R=b-this.blockSize,U=this.C;let O=this.h,L=0;for(;L<b;){if(O==0)for(;L<=R;)l(this,I,L),L+=this.blockSize;if(typeof I=="string"){for(;L<b;)if(U[O++]=I.charCodeAt(L++),O==this.blockSize){l(this,U),O=0;break}}else for(;L<b;)if(U[O++]=I[L++],O==this.blockSize){l(this,U),O=0;break}}this.h=O,this.o+=b},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;b=this.o*8;for(var R=I.length-8;R<I.length;++R)I[R]=b&255,b/=256;for(this.v(I),I=Array(16),b=0,R=0;R<4;++R)for(let U=0;U<32;U+=8)I[b++]=this.g[R]>>>U&255;return I};function c(I,b){var R=g;return Object.prototype.hasOwnProperty.call(R,I)?R[I]:R[I]=b(I)}function d(I,b){this.h=b;const R=[];let U=!0;for(let O=I.length-1;O>=0;O--){const L=I[O]|0;U&&L==b||(R[O]=L,U=!1)}this.g=R}var g={};function _(I){return-128<=I&&I<128?c(I,function(b){return new d([b|0],b<0?-1:0)}):new d([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return A;if(I<0)return rt(y(-I));const b=[];let R=1;for(let U=0;I>=R;U++)b[U]=I/R|0,R*=4294967296;return new d(b,0)}function S(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return rt(S(I.substring(1),b));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=y(Math.pow(b,8));let U=A;for(let L=0;L<I.length;L+=8){var O=Math.min(8,I.length-L);const w=parseInt(I.substring(L,L+O),b);O<8?(O=y(Math.pow(b,O)),U=U.j(O).add(y(w))):(U=U.j(R),U=U.add(y(w)))}return U}var A=_(0),N=_(1),Y=_(16777216);r=d.prototype,r.m=function(){if(et(this))return-rt(this).m();let I=0,b=1;for(let R=0;R<this.g.length;R++){const U=this.i(R);I+=(U>=0?U:4294967296+U)*b,b*=4294967296}return I},r.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if($(this))return"0";if(et(this))return"-"+rt(this).toString(I);const b=y(Math.pow(I,6));var R=this;let U="";for(;;){const O=Ut(R,b).g;R=ht(R,O.j(b));let L=((R.g.length>0?R.g[0]:R.h)>>>0).toString(I);if(R=O,$(R))return L+U;for(;L.length<6;)L="0"+L;U=L+U}},r.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function $(I){if(I.h!=0)return!1;for(let b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function et(I){return I.h==-1}r.l=function(I){return I=ht(this,I),et(I)?-1:$(I)?0:1};function rt(I){const b=I.g.length,R=[];for(let U=0;U<b;U++)R[U]=~I.g[U];return new d(R,~I.h).add(N)}r.abs=function(){return et(this)?rt(this):this},r.add=function(I){const b=Math.max(this.g.length,I.g.length),R=[];let U=0;for(let O=0;O<=b;O++){let L=U+(this.i(O)&65535)+(I.i(O)&65535),w=(L>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);U=w>>>16,L&=65535,w&=65535,R[O]=w<<16|L}return new d(R,R[R.length-1]&-2147483648?-1:0)};function ht(I,b){return I.add(rt(b))}r.j=function(I){if($(this)||$(I))return A;if(et(this))return et(I)?rt(this).j(rt(I)):rt(rt(this).j(I));if(et(I))return rt(this.j(rt(I)));if(this.l(Y)<0&&I.l(Y)<0)return y(this.m()*I.m());const b=this.g.length+I.g.length,R=[];for(var U=0;U<2*b;U++)R[U]=0;for(U=0;U<this.g.length;U++)for(let O=0;O<I.g.length;O++){const L=this.i(U)>>>16,w=this.i(U)&65535,Ft=I.i(O)>>>16,we=I.i(O)&65535;R[2*U+2*O]+=w*we,Tt(R,2*U+2*O),R[2*U+2*O+1]+=L*we,Tt(R,2*U+2*O+1),R[2*U+2*O+1]+=w*Ft,Tt(R,2*U+2*O+1),R[2*U+2*O+2]+=L*Ft,Tt(R,2*U+2*O+2)}for(I=0;I<b;I++)R[I]=R[2*I+1]<<16|R[2*I];for(I=b;I<2*b;I++)R[I]=0;return new d(R,0)};function Tt(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function M(I,b){this.g=I,this.h=b}function Ut(I,b){if($(b))throw Error("division by zero");if($(I))return new M(A,A);if(et(I))return b=Ut(rt(I),b),new M(rt(b.g),rt(b.h));if(et(b))return b=Ut(I,rt(b)),new M(rt(b.g),b.h);if(I.g.length>30){if(et(I)||et(b))throw Error("slowDivide_ only works with positive integers.");for(var R=N,U=b;U.l(I)<=0;)R=le(R),U=le(U);var O=Nt(R,1),L=Nt(U,1);for(U=Nt(U,2),R=Nt(R,2);!$(U);){var w=L.add(U);w.l(I)<=0&&(O=O.add(R),L=w),U=Nt(U,1),R=Nt(R,1)}return b=ht(I,O.j(b)),new M(O,b)}for(O=A;I.l(b)>=0;){for(R=Math.max(1,Math.floor(I.m()/b.m())),U=Math.ceil(Math.log(R)/Math.LN2),U=U<=48?1:Math.pow(2,U-48),L=y(R),w=L.j(b);et(w)||w.l(I)>0;)R-=U,L=y(R),w=L.j(b);$(L)&&(L=N),O=O.add(L),I=ht(I,w)}return new M(O,I)}r.B=function(I){return Ut(this,I).h},r.and=function(I){const b=Math.max(this.g.length,I.g.length),R=[];for(let U=0;U<b;U++)R[U]=this.i(U)&I.i(U);return new d(R,this.h&I.h)},r.or=function(I){const b=Math.max(this.g.length,I.g.length),R=[];for(let U=0;U<b;U++)R[U]=this.i(U)|I.i(U);return new d(R,this.h|I.h)},r.xor=function(I){const b=Math.max(this.g.length,I.g.length),R=[];for(let U=0;U<b;U++)R[U]=this.i(U)^I.i(U);return new d(R,this.h^I.h)};function le(I){const b=I.g.length+1,R=[];for(let U=0;U<b;U++)R[U]=I.i(U)<<1|I.i(U-1)>>>31;return new d(R,I.h)}function Nt(I,b){const R=b>>5;b%=32;const U=I.g.length-R,O=[];for(let L=0;L<U;L++)O[L]=b>0?I.i(L+R)>>>b|I.i(L+R+1)<<32-b:I.i(L+R);return new d(O,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,uT=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=S,ps=d}).apply(typeof yv<"u"?yv:typeof self<"u"?self:typeof window<"u"?window:{});var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cT,Ol,hT,kc,em,fT,dT,mT;(function(){var r,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dc=="object"&&Dc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var v=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var k=u[T];if(!(k in v))break t;v=v[k]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&t(v,u,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(m){var v=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&v.push([T,m[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function g(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function y(u,m,v){return y=_,y.apply(null,arguments)}function S(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function A(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(T,k,q){for(var st=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)st[Ot-2]=arguments[Ot];return m.prototype[k].apply(T,st)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function Y(u){const m=u.length;if(m>0){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function $(u,m){for(let T=1;T<arguments.length;T++){const k=arguments[T];var v=typeof k;if(v=v!="object"?v:k?Array.isArray(k)?"array":v:"null",v=="array"||v=="object"&&typeof k.length=="number"){v=u.length||0;const q=k.length||0;u.length=v+q;for(let st=0;st<q;st++)u[v+st]=k[st]}else u.push(k)}}class et{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function rt(u){d.setTimeout(()=>{throw u},0)}function ht(){var u=I;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Tt{constructor(){this.h=this.g=null}add(m,v){const T=M.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var M=new et(()=>new Ut,u=>u.reset());class Ut{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Nt=!1,I=new Tt,b=()=>{const u=Promise.resolve(void 0);le=()=>{u.then(R)}};function R(){for(var u;u=ht();){try{u.h.call(u.g)}catch(v){rt(v)}var m=M;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Nt=!1}function U(){this.u=this.u,this.C=this.C}U.prototype.u=!1,U.prototype.dispose=function(){this.u||(this.u=!0,this.N())},U.prototype[Symbol.dispose]=function(){this.dispose()},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function w(u){return/^[\s\xa0]*$/.test(u)}function Ft(u,m){O.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}A(Ft,O),Ft.prototype.init=function(u,m){const v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Ft.Z.h.call(this)},Ft.prototype.h=function(){Ft.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var we="closure_listenable_"+(Math.random()*1e6|0),X=0;function at(u,m,v,T,k){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=k,this.key=++X,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Gt(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function $t(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function V(u){const m={};for(const v in u)m[v]=u[v];return m}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ot(u,m){let v,T;for(let k=1;k<arguments.length;k++){T=arguments[k];for(v in T)u[v]=T[v];for(let q=0;q<Z.length;q++)v=Z[q],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function lt(u){this.src=u,this.g={},this.h=0}lt.prototype.add=function(u,m,v,T,k){const q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);const st=_t(u,m,T,k);return st>-1?(m=u[st],v||(m.fa=!1)):(m=new at(m,this.src,q,!!T,k),m.fa=v,u.push(m)),m};function pt(u,m){const v=m.type;if(v in u.g){var T=u.g[v],k=Array.prototype.indexOf.call(T,m,void 0),q;(q=k>=0)&&Array.prototype.splice.call(T,k,1),q&&(yt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function _t(u,m,v,T){for(let k=0;k<u.length;++k){const q=u[k];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==T)return k}return-1}var ut="closure_lm_"+(Math.random()*1e6|0),Ee={};function ie(u,m,v,T,k){if(Array.isArray(m)){for(let q=0;q<m.length;q++)ie(u,m[q],v,T,k);return null}return v=vi(v),u&&u[we]?u.J(m,v,g(T)?!!T.capture:!1,k):an(u,m,v,!1,T,k)}function an(u,m,v,T,k,q){if(!m)throw Error("Invalid event type");const st=g(k)?!!k.capture:!!k;let Ot=ii(u);if(Ot||(u[ut]=Ot=new lt(u)),v=Ot.add(m,v,T,st,q),v.proxy)return v;if(T=Qi(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)L||(k=st),k===void 0&&(k=!1),u.addEventListener(m.toString(),T,k);else if(u.attachEvent)u.attachEvent(Ae(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Qi(){function u(v){return m.call(u.src,u.listener,v)}const m=Ki;return u}function _i(u,m,v,T,k){if(Array.isArray(m))for(var q=0;q<m.length;q++)_i(u,m[q],v,T,k);else T=g(T)?!!T.capture:!!T,v=vi(v),u&&u[we]?(u=u.i,q=String(m).toString(),q in u.g&&(m=u.g[q],v=_t(m,v,T,k),v>-1&&(yt(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[q],u.h--)))):u&&(u=ii(u))&&(m=u.g[m.toString()],u=-1,m&&(u=_t(m,v,T,k)),(v=u>-1?m[u]:null)&&fn(v))}function fn(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[we])pt(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(Ae(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=ii(m))?(pt(v,u),v.h==0&&(v.src=null,m[ut]=null)):yt(u)}}}function Ae(u){return u in Ee?Ee[u]:Ee[u]="on"+u}function Ki(u,m){if(u.da)u=!0;else{m=new Ft(m,this);const v=u.listener,T=u.ha||u.src;u.fa&&fn(u),u=v.call(T,m)}return u}function ii(u){return u=u[ut],u instanceof lt?u:null}var zn="__closure_events_fn_"+(Math.random()*1e9>>>0);function vi(u){return typeof u=="function"?u:(u[zn]||(u[zn]=function(m){return u.handleEvent(m)}),u[zn])}function he(){U.call(this),this.i=new lt(this),this.M=this,this.G=null}A(he,U),he.prototype[we]=!0,he.prototype.removeEventListener=function(u,m,v,T){_i(this,u,m,v,T)};function pe(u,m){var v,T=u.G;if(T)for(v=[];T;T=T.G)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new O(m,u);else if(m instanceof O)m.target=m.target||u;else{var k=m;m=new O(T,u),ot(m,k)}k=!0;let q,st;if(v)for(st=v.length-1;st>=0;st--)q=m.g=v[st],k=ri(q,T,!0,m)&&k;if(q=m.g=u,k=ri(q,T,!0,m)&&k,k=ri(q,T,!1,m)&&k,v)for(st=0;st<v.length;st++)q=m.g=v[st],k=ri(q,T,!1,m)&&k}he.prototype.N=function(){if(he.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let T=0;T<v.length;T++)yt(v[T]);delete u.g[m],u.h--}}this.G=null},he.prototype.J=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},he.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function ri(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let k=!0;for(let q=0;q<m.length;++q){const st=m[q];if(st&&!st.da&&st.capture==v){const Ot=st.listener,Ie=st.ha||st.src;st.fa&&pt(u.i,st),k=Ot.call(Ie,T)!==!1&&k}}return k&&!T.defaultPrevented}function Ei(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:d.setTimeout(u,m||0)}function br(u){u.g=Ei(()=>{u.g=null,u.i&&(u.i=!1,br(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ke extends U{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(u){U.call(this),this.h=u,this.g={}}A(Ti,U);var Is=[];function Rr(u){Gt(u.g,function(m,v){this.g.hasOwnProperty(v)&&fn(m)},u),u.g={}}Ti.prototype.N=function(){Ti.Z.N.call(this),Rr(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wn=d.JSON.stringify,wr=d.JSON.parse,fa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function da(){}function ma(){}var Cn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Be(){O.call(this,"d")}A(Be,O);function gn(){O.call(this,"c")}A(gn,O);var Te={},ga=null;function Cr(){return ga=ga||new he}Te.Ia="serverreachability";function Ds(u){O.call(this,Te.Ia,u)}A(Ds,O);function Bn(u){const m=Cr();pe(m,new Ds(m))}Te.STAT_EVENT="statevent";function si(u,m){O.call(this,Te.STAT_EVENT,u),this.stat=m}A(si,O);function ye(u){const m=Cr();pe(m,new si(m,u))}Te.Ja="timingevent";function jn(u,m){O.call(this,Te.Ja,u),this.size=m}A(jn,O);function qn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function In(){this.g=!0}In.prototype.ua=function(){this.g=!1};function Ir(u,m,v,T,k,q){u.info(function(){if(u.g)if(q){var st="",Ot=q.split("&");for(let Zt=0;Zt<Ot.length;Zt++){var Ie=Ot[Zt].split("=");if(Ie.length>1){const _e=Ie[0];Ie=Ie[1];const Xn=_e.split("_");st=Xn.length>=2&&Xn[1]=="type"?st+(_e+"="+Ie+"&"):st+(_e+"=redacted&")}}}else st=null;else st=q;return"XMLHTTP REQ ("+T+") [attempt "+k+"]: "+m+`
`+v+`
`+st})}function pa(u,m,v,T,k,q,st){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+k+"]: "+m+`
`+v+`
`+q+" "+st})}function Hn(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ge(u,v)+(T?" "+T:"")})}function Si(u,m){u.info(function(){return"TIMEOUT: "+m})}In.prototype.info=function(){};function Ge(u,m){if(!u.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(u=0;u<q.length;u++)if(Array.isArray(q[u])){var v=q[u];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var k=T[0];if(k!="noop"&&k!="stop"&&k!="close")for(let st=1;st<T.length;st++)T[st]=""}}}}return wn(q)}catch{return m}}var $i={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},D={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},F;function G(){}A(G,da),G.prototype.g=function(){return new XMLHttpRequest},F=new G;function it(u){return encodeURIComponent(String(u))}function mt(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function St(u,m,v,T){this.j=u,this.i=m,this.l=v,this.S=T||1,this.V=new Ti(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var Vt={},Lt={};function Ce(u,m,v){u.M=1,u.A=Ns(Me(m)),u.u=v,u.R=!0,pn(u,null)}function pn(u,m){u.F=Date.now(),Ai(u),u.B=Me(u.A);var v=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Ea(v.i,"t",T),u.C=0,v=u.j.L,u.h=new wt,u.g=Tu(u.j,v?m:null,!u.u),u.P>0&&(u.O=new Ke(y(u.Y,u,u.g),u.P)),m=u.V,v=u.g,T=u.ba;var k="readystatechange";Array.isArray(k)||(k&&(Is[0]=k.toString()),k=Is);for(let q=0;q<k.length;q++){const st=ie(v,k[q],T||m.handleEvent,!1,m.h||m);if(!st)break;m.g[st.key]=st}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Bn(),Ir(u.i,u.v,u.B,u.l,u.S,u.u)}St.prototype.ba=function(u){u=u.target;const m=this.O;m&&li(u)==3?m.j():this.Y(u)},St.prototype.Y=function(u){try{if(u==this.g)t:{const Ot=li(this.g),Ie=this.g.ya(),Zt=this.g.ca();if(!(Ot<3)&&(Ot!=3||this.g&&(this.h.h||this.g.la()||$e(this.g)))){this.K||Ot!=4||Ie==7||(Ie==8||Zt<=0?Bn(3):Bn(2)),bi(this);var m=this.g.ca();this.X=m;var v=Vh(this);if(this.o=m==200,pa(this.i,this.v,this.B,this.l,this.S,Ot,m),this.o){if(this.U&&!this.L){e:{if(this.g){var T,k=this.g;if((T=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(T)){var q=T;break e}}q=null}if(u=q)Hn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ri(this,u);else{this.o=!1,this.m=3,ye(12),Dn(this),Fn(this);break t}}if(this.R){u=!0;let _e;for(;!this.K&&this.C<v.length;)if(_e=lu(this,v),_e==Lt){Ot==4&&(this.m=4,ye(14),u=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==Vt){this.m=4,ye(15),Hn(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else Hn(this.i,this.l,_e,null),Ri(this,_e);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||v.length!=0||this.h.h||(this.m=1,ye(16),u=!1),this.o=this.o&&u,!u)Hn(this.i,this.l,v,"[Invalid Chunked Response]"),Dn(this),Fn(this);else if(v.length>0&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.aa&&!st.P&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Fo(st),st.P=!0,ye(11))}}else Hn(this.i,this.l,v,null),Ri(this,v);Ot==4&&Dn(this),this.o&&!this.K&&(Ot==4?yu(this.j,this):(this.o=!1,Ai(this)))}else Ji(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),Dn(this),Fn(this)}}}catch{}finally{}};function Vh(u){if(!ou(u))return u.g.la();const m=$e(u.g);if(m==="")return"";let v="";const T=m.length,k=li(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Dn(u),Fn(u),"";u.h.i=new d.TextDecoder}for(let q=0;q<T;q++)u.h.h=!0,v+=u.h.i.decode(m[q],{stream:!(k&&q==T-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function ou(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function lu(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?Lt:(v=Number(m.substring(v,T)),isNaN(v)?Vt:(T+=1,T+v>m.length?Lt:(m=m.slice(T,T+v),u.C=T+v,m)))}St.prototype.cancel=function(){this.K=!0,Dn(this)};function Ai(u){u.T=Date.now()+u.H,ya(u,u.H)}function ya(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=qn(y(u.aa,u),m)}function bi(u){u.D&&(d.clearTimeout(u.D),u.D=null)}St.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Si(this.i,this.B),this.M!=2&&(Bn(),ye(17)),Dn(this),this.m=2,Fn(this)):ya(this,this.T-u)};function Fn(u){u.j.I==0||u.K||yu(u.j,u)}function Dn(u){bi(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Rr(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ri(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||Ci(v.h,u))){if(!u.L&&Ci(v.h,u)&&v.I==3){try{var T=v.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var k=T;if(k[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)Ra(v),Lr(v);else break t;Ps(v),ye(18)}}else v.xa=k[1],0<v.xa-v.K&&k[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=qn(y(v.Va,v),6e3));wi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Mi(v,11)}else if((u.L||v.g==u)&&Ra(v),!w(m))for(k=v.Ba.g.parse(m),m=0;m<k.length;m++){let Zt=k[m];const _e=Zt[0];if(!(_e<=v.K))if(v.K=_e,Zt=Zt[1],v.I==2)if(Zt[0]=="c"){v.M=Zt[1],v.ba=Zt[2];const Xn=Zt[3];Xn!=null&&(v.ka=Xn,v.j.info("VER="+v.ka));const Vi=Zt[4];Vi!=null&&(v.za=Vi,v.j.info("SVER="+v.za));const ui=Zt[5];ui!=null&&typeof ui=="number"&&ui>0&&(T=1.5*ui,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const ci=u.g;if(ci){const ks=ci.g?ci.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ks){var q=T.h;q.g||ks.indexOf("spdy")==-1&&ks.indexOf("quic")==-1&&ks.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(xo(q,q.h),q.h=null))}if(T.G){const wa=ci.g?ci.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(T.wa=wa,te(T.J,T.G,wa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var st=u;if(T.na=Eu(T,T.L?T.ba:null,T.W),st.L){Mo(T.h,st);var Ot=st,Ie=T.O;Ie&&(Ot.H=Ie),Ot.D&&(bi(Ot),Ai(Ot)),T.g=st}else gu(T);v.i.length>0&&xi(v)}else Zt[0]!="stop"&&Zt[0]!="close"||Mi(v,7);else v.I==3&&(Zt[0]=="stop"||Zt[0]=="close"?Zt[0]=="stop"?Mi(v,7):qo(v):Zt[0]!="noop"&&v.l&&v.l.qa(Zt),v.A=0)}}Bn(4)}catch{}}var xe=class{constructor(u,m){this.g=u,this.map=m}};function No(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function wi(u){return u.h?1:u.g?u.g.size:0}function Ci(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function xo(u,m){u.g?u.g.add(m):u.h=m}function Mo(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}No.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Vo(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return Y(u.i)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _a(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const T=u[v].indexOf("=");let k,q=null;T>=0?(k=u[v].substring(0,T),q=u[v].substring(T+1)):k=u[v],m(k,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Nn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Nn?(this.l=u.l,Ye(this,u.j),this.o=u.o,this.g=u.g,Dr(this,u.u),this.h=u.h,Uo(this,du(u.i)),this.m=u.m):u&&(m=String(u).match(uu))?(this.l=!1,Ye(this,m[1]||"",!0),this.o=Ii(m[2]||""),this.g=Ii(m[3]||"",!0),Dr(this,m[4]),this.h=Ii(m[5]||"",!0),Uo(this,m[6]||"",!0),this.m=Ii(m[7]||"")):(this.l=!1,this.i=new Or(null,this.l))}Nn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Os(m,va,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Os(m,va,!0),"@"),u.push(it(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Os(v,v.charAt(0)=="/"?Lo:cu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Os(v,hu)),u.join("")},Nn.prototype.resolve=function(u){const m=Me(this);let v=!!u.j;v?Ye(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var T=u.h;if(v)Dr(m,u.u);else if(v=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var k=m.h.lastIndexOf("/");k!=-1&&(T=m.h.slice(0,k+1)+T)}if(k=T,k==".."||k==".")T="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){T=k.lastIndexOf("/",0)==0,k=k.split("/");const q=[];for(let st=0;st<k.length;){const Ot=k[st++];Ot=="."?T&&st==k.length&&q.push(""):Ot==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),T&&st==k.length&&q.push("")):(q.push(Ot),T=!0)}T=q.join("/")}else T=k}return v?m.h=T:v=u.i.toString()!=="",v?Uo(m,du(u.i)):v=!!u.m,v&&(m.m=u.m),m};function Me(u){return new Nn(u)}function Ye(u,m,v){u.j=v?Ii(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Dr(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Uo(u,m,v){m instanceof Or?(u.i=m,Ta(u.i,u.l)):(v||(m=Os(m,Nr)),u.i=new Or(m,u.l))}function te(u,m,v){u.i.set(m,v)}function Ns(u){return te(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ii(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Os(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,yn),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function yn(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var va=/[#\/\?@]/g,cu=/[#\?:]/g,Lo=/[#\?]/g,Nr=/[#\?@]/g,hu=/#/g;function Or(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&_a(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=Or.prototype,r.add=function(u,m){_n(this),this.i=null,u=xr(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function fu(u,m){_n(u),m=xr(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Po(u,m){return _n(u),m=xr(u,m),u.g.has(m)}r.forEach=function(u,m){_n(this),this.g.forEach(function(v,T){v.forEach(function(k){u.call(m,k,T,this)},this)},this)};function ko(u,m){_n(u);let v=[];if(typeof m=="string")Po(u,m)&&(v=v.concat(u.g.get(xr(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}r.set=function(u,m){return _n(this),this.i=null,u=xr(this,u),Po(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=ko(this,u),u.length>0?String(u[0]):m):m};function Ea(u,m,v){fu(u,m),v.length>0&&(u.i=null,u.g.set(xr(u,m),Y(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var v=m[T];const k=it(v);v=ko(this,v);for(let q=0;q<v.length;q++){let st=k;v[q]!==""&&(st+="="+it(v[q])),u.push(st)}}return this.i=u.join("&")};function du(u){const m=new Or;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function xr(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Ta(u,m){m&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(v,T){const k=T.toLowerCase();T!=k&&(fu(this,T),Ea(this,k,v))},u)),u.j=m}function ai(u,m){const v=new In;if(d.Image){const T=new Image;T.onload=S(Gn,v,"TestLoadImage: loaded",!0,m,T),T.onerror=S(Gn,v,"TestLoadImage: error",!1,m,T),T.onabort=S(Gn,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=S(Gn,v,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function zo(u,m){const v=new In,T=new AbortController,k=setTimeout(()=>{T.abort(),Gn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(k),q.ok?Gn(v,"TestPingServer: ok",!0,m):Gn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),Gn(v,"TestPingServer: error",!1,m)})}function Gn(u,m,v,T,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),T(v)}catch{}}function Mr(){this.g=new fa}function Di(u){this.i=u.Sb||null,this.h=u.ab||!1}A(Di,da),Di.prototype.g=function(){return new xs(this.i,this.h)};function xs(u,m){he.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(xs,he),r=xs.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,oi(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||d).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sa(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sa(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Vr(this):oi(this),this.readyState==3&&Sa(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Vr(this))},r.Na=function(u){this.g&&(this.response=u,Vr(this))},r.ga=function(){this.g&&Vr(this)};function Vr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,oi(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function oi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Yn(u){let m="";return Gt(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function Ms(u,m,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=Yn(v),typeof u=="string"?v!=null&&it(v):te(u,m,v))}function re(u){he.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(re,he);var Ni=/^https?$/i,Bo=["POST","PUT"];r=re.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():F.g(),this.g.onreadystatechange=N(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){Vs(this,q);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var k in T)v.set(k,T[k]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())v.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),k=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(Bo,m,void 0)>=0)||T||k||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,st]of v)this.g.setRequestHeader(q,st);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(q){Vs(this,q)}};function Vs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,jo(u),Zi(u)}function jo(u){u.A||(u.A=!0,pe(u,"complete"),pe(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,pe(this,"complete"),pe(this,"abort"),Zi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),re.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Us(this):this.Xa())},r.Xa=function(){Us(this)};function Us(u){if(u.h&&typeof c<"u"){if(u.v&&li(u)==4)setTimeout(u.Ca.bind(u),0);else if(pe(u,"readystatechange"),li(u)==4){u.h=!1;try{const q=u.ca();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var T;if(T=q===0){let st=String(u.D).match(uu)[1]||null;!st&&d.self&&d.self.location&&(st=d.self.location.protocol.slice(0,-1)),T=!Ni.test(st?st.toLowerCase():"")}v=T}if(v)pe(u,"complete"),pe(u,"success");else{u.o=6;try{var k=li(u)>2?u.g.statusText:""}catch{k=""}u.l=k+" ["+u.ca()+"]",jo(u)}}finally{Zi(u)}}}}function Zi(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||pe(u,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function li(u){return u.g?u.g.readyState:0}r.ca=function(){try{return li(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),wr(m)}};function $e(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ji(u){const m={};u=(u.g&&li(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(w(u[T]))continue;var v=mt(u[T]);const k=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[k]||[];m[k]=q,q.push(v)}$t(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ur(u){this.za=0,this.i=[],this.j=new In,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oi("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oi("baseRetryDelayMs",5e3,u),this.Za=Oi("retryDelaySeedMs",1e4,u),this.Ta=Oi("forwardChannelMaxRetries",2,u),this.va=Oi("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new No(u&&u.concurrentRequestLimit),this.Ba=new Mr,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ur.prototype,r.ka=8,r.I=1,r.connect=function(u,m,v,T){ye(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=Eu(this,null,this.W),xi(this)};function qo(u){if(Aa(u),u.I==3){var m=u.V++,v=Me(u.J);if(te(v,"SID",u.M),te(v,"RID",m),te(v,"TYPE","terminate"),Ls(u,v),m=new St(u,u.j,m),m.M=2,m.A=Ns(Me(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.A,v=!0),v||(m.g=Tu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ai(m)}vu(u)}function Lr(u){u.g&&(Fo(u),u.g.cancel(),u.g=null)}function Aa(u){Lr(u),u.v&&(d.clearTimeout(u.v),u.v=null),Ra(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function xi(u){if(!Oo(u.h)&&!u.m){u.m=!0;var m=u.Ea;le||b(),Nt||(le(),Nt=!0),I.add(m,u),u.D=0}}function ba(u,m){return wi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=qn(y(u.Ea,u,m),_u(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const k=new St(this,this.j,u);let q=this.o;if(this.U&&(q?(q=V(q),ot(q,this.U)):q=this.U),this.u!==null||this.R||(k.J=q,q=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=mu(this,k,m),v=Me(this.J),te(v,"RID",u),te(v,"CVER",22),this.G&&te(v,"X-HTTP-Session-Id",this.G),Ls(this,v),q&&(this.R?m="headers="+it(Yn(q))+"&"+m:this.u&&Ms(v,this.u,q)),xo(this.h,k),this.Ra&&te(v,"TYPE","init"),this.S?(te(v,"$req",m),te(v,"SID","null"),k.U=!0,Ce(k,v,null)):Ce(k,v,m),this.I=2}}else this.I==3&&(u?Ho(this,u):this.i.length==0||Oo(this.h)||Ho(this))};function Ho(u,m){var v;m?v=m.l:v=u.V++;const T=Me(u.J);te(T,"SID",u.M),te(T,"RID",v),te(T,"AID",u.K),Ls(u,T),u.u&&u.o&&Ms(T,u.u,u.o),v=new St(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=mu(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),xo(u.h,v),Ce(v,T,m)}function Ls(u,m){u.H&&Gt(u.H,function(v,T){te(m,T,v)}),u.l&&Gt({},function(v,T){te(m,T,v)})}function mu(u,m,v){v=Math.min(u.i.length,v);const T=u.l?y(u.l.Ka,u.l,u):null;t:{var k=u.i;let Ot=-1;for(;;){const Ie=["count="+v];Ot==-1?v>0?(Ot=k[0].g,Ie.push("ofs="+Ot)):Ot=0:Ie.push("ofs="+Ot);let Zt=!0;for(let _e=0;_e<v;_e++){var q=k[_e].g;const Xn=k[_e].map;if(q-=Ot,q<0)Ot=Math.max(0,k[_e].g-100),Zt=!1;else try{q="req"+q+"_"||"";try{var st=Xn instanceof Map?Xn:Object.entries(Xn);for(const[Vi,ui]of st){let ci=ui;g(ui)&&(ci=wn(ui)),Ie.push(q+Vi+"="+encodeURIComponent(ci))}}catch(Vi){throw Ie.push(q+"type="+encodeURIComponent("_badmap")),Vi}}catch{T&&T(Xn)}}if(Zt){st=Ie.join("&");break t}}st=void 0}return u=u.i.splice(0,v),m.G=u,st}function gu(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;le||b(),Nt||(le(),Nt=!0),I.add(m,u),u.A=0}}function Ps(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=qn(y(u.Da,u),_u(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=qn(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),Lr(this),pu(this))};function Fo(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function pu(u){u.g=new St(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=Me(u.na);te(m,"RID","rpc"),te(m,"SID",u.M),te(m,"AID",u.K),te(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&te(m,"TO",u.ia),te(m,"TYPE","xmlhttp"),Ls(u,m),u.u&&u.o&&Ms(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Ns(Me(m)),v.u=null,v.R=!0,pn(v,u)}r.Va=function(){this.C!=null&&(this.C=null,Lr(this),Ps(this),ye(19))};function Ra(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function yu(u,m){var v=null;if(u.g==m){Ra(u),Fo(u),u.g=null;var T=2}else if(Ci(u.h,m))v=m.G,Mo(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var k=u.D;T=Cr(),pe(T,new jn(T,v)),xi(u)}else gu(u);else if(k=m.m,k==3||k==0&&m.X>0||!(T==1&&ba(u,m)||T==2&&Ps(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),k){case 1:Mi(u,5);break;case 4:Mi(u,10);break;case 3:Mi(u,6);break;default:Mi(u,2)}}}function _u(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function Mi(u,m){if(u.j.info("Error code "+m),m==2){var v=y(u.bb,u),T=u.Ua;const k=!T;T=new Nn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ye(T,"https"),Ns(T),k?ai(T.toString(),v):zo(T.toString(),v)}else ye(2);u.I=0,u.l&&u.l.pa(m),vu(u),Aa(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function vu(u){if(u.I=0,u.ja=[],u.l){const m=Vo(u.h);(m.length!=0||u.i.length!=0)&&($(u.ja,m),$(u.ja,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.oa()}}function Eu(u,m,v){var T=v instanceof Nn?Me(v):new Nn(v);if(T.g!="")m&&(T.g=m+"."+T.g),Dr(T,T.u);else{var k=d.location;T=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;const q=new Nn(null);T&&Ye(q,T),m&&(q.g=m),k&&Dr(q,k),v&&(q.h=v),T=q}return v=u.G,m=u.wa,v&&m&&te(T,v,m),te(T,"VER",u.ka),Ls(u,T),T}function Tu(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new re(new Di({ab:v})):new re(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}r=Su.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Pr(){}Pr.prototype.g=function(u,m){return new dn(u,m)};function dn(u,m){he.call(this),this.g=new Ur(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!w(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!w(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Wi(this)}A(dn,he),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){qo(this.g)},dn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=wn(u),u=v);m.i.push(new xe(m.Ya++,u)),m.I==3&&xi(m)},dn.prototype.N=function(){this.g.l=null,delete this.j,qo(this.g),delete this.g,dn.Z.N.call(this)};function Au(u){Be.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const v in m){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}A(Au,Be);function bu(){gn.call(this),this.status=1}A(bu,gn);function Wi(u){this.g=u}A(Wi,Su),Wi.prototype.ra=function(){pe(this.g,"a")},Wi.prototype.qa=function(u){pe(this.g,new Au(u))},Wi.prototype.pa=function(u){pe(this.g,new bu)},Wi.prototype.oa=function(){pe(this.g,"b")},Pr.prototype.createWebChannel=Pr.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,mT=function(){return new Pr},dT=function(){return Cr()},fT=Te,em={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,kc=$i,D.COMPLETE="complete",hT=D,ma.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",he.prototype.listen=he.prototype.J,Ol=ma,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,cT=re}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore",vv="4.9.2";/**
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
 */class un{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
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
 */let Ro="12.3.0";/**
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
 */const oa=new Em("@firebase/firestore");function no(){return oa.logLevel}function ct(r,...t){if(oa.logLevel<=jt.DEBUG){const i=t.map(Om);oa.debug(`Firestore (${Ro}): ${r}`,...i)}}function Er(r,...t){if(oa.logLevel<=jt.ERROR){const i=t.map(Om);oa.error(`Firestore (${Ro}): ${r}`,...i)}}function go(r,...t){if(oa.logLevel<=jt.WARN){const i=t.map(Om);oa.warn(`Firestore (${Ro}): ${r}`,...i)}}function Om(r){if(typeof r=="string")return r;try{/**
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
 */function Rt(r,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,gT(r,a,i)}function gT(r,t,i){let a=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw Er(a),new Error(a)}function Wt(r,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||gT(t,l,a)}function Dt(r,t){return r}/**
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
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends Ar{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yr{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
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
 */class pT{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(un.UNAUTHENTICATED)))}shutdown(){}}class Nw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class Ow{constructor(t){this.t=t,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Wt(this.o===void 0,42304);let a=this.i;const l=_=>this.i!==a?(a=this.i,i(_)):Promise.resolve();let c=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new yr,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const _=c;t.enqueueRetryable((async()=>{await _.promise,await l(this.currentUser)}))},g=_=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((_=>g(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?g(_):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new yr)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Wt(typeof a.accessToken=="string",31837,{l:a}),new pT(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Wt(t===null||typeof t=="string",2055,{h:t}),new un(t)}}class xw{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=un.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mw{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new xw(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vw{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mi(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Wt(this.o===void 0,3512);const a=c=>{c.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,ct("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>a(c)))};const l=c=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Wt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Ev(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class xm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=Uw(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=t.charAt(l[c]%62))}return a}}function qt(r,t){return r<t?-1:r>t?1:0}function nm(r,t){const i=Math.min(r.length,t.length);for(let a=0;a<i;a++){const l=r.charAt(a),c=t.charAt(a);if(l!==c)return qd(l)===qd(c)?qt(l,c):qd(l)?1:-1}return qt(r.length,t.length)}const Lw=55296,Pw=57343;function qd(r){const t=r.charCodeAt(0);return t>=Lw&&t<=Pw}function po(r,t,i){return r.length===t.length&&r.every(((a,l)=>i(a,t[l])))}/**
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
 */const Tv="__name__";class zi{constructor(t,i,a){i===void 0?i=0:i>t.length&&Rt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&Rt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return zi.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof zi?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const c=zi.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return qt(t.length,i.length)}static compareSegments(t,i){const a=zi.isNumericId(t),l=zi.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?zi.extractNumericId(t).compare(zi.extractNumericId(i)):nm(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ps.fromString(t.substring(4,t.length-2))}}class me extends zi{construct(t,i,a){return new me(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(tt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new me(i)}static emptyPath(){return new me([])}}const kw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends zi{construct(t,i,a){return new nn(t,i,a)}static isValidIdentifier(t){return kw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new nn([Tv])}static fromServerFormat(t){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new dt(tt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new dt(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new dt(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=_,l+=2}else g==="`"?(d=!d,l++):g!=="."||d?(a+=g,l++):(c(),l++)}if(c(),d)throw new dt(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nn(i)}static emptyPath(){return new nn([])}}/**
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
 */class Et{constructor(t){this.path=t}static fromPath(t){return new Et(me.fromString(t))}static fromName(t){return new Et(me.fromString(t).popFirst(5))}static empty(){return new Et(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&me.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return me.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Et(new me(t.slice()))}}/**
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
 */function yT(r,t,i){if(!i)throw new dt(tt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function zw(r,t,i,a){if(t===!0&&a===!0)throw new dt(tt.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function Sv(r){if(!Et.isDocumentKey(r))throw new dt(tt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Av(r){if(Et.isDocumentKey(r))throw new dt(tt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _T(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Mm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Rt(12329,{type:typeof r})}function Tr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new dt(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Mm(r);throw new dt(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */function ze(r,t){const i={typeString:r};return t&&(i.value=t),i}function nu(r,t){if(!_T(r))throw new dt(tt.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,c="value"in t[a]?{value:t[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const d=r[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new dt(tt.INVALID_ARGUMENT,i);return!0}/**
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
 */const bv=-62135596800,Rv=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(t){return ge.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*Rv);return new ge(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new dt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new dt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<bv)throw new dt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rv}_compareTo(t){return this.seconds===t.seconds?qt(this.nanoseconds,t.nanoseconds):qt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nu(t,ge._jsonSchema))return new ge(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-bv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:ze("string",ge._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
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
 */const Fl=-1;function Bw(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Ct.fromTimestamp(a===1e9?new ge(i+1,0):new ge(i,a));return new _s(l,Et.empty(),t)}function jw(r){return new _s(r.readTime,r.key,Fl)}class _s{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new _s(Ct.min(),Et.empty(),Fl)}static max(){return new _s(Ct.max(),Et.empty(),Fl)}}function qw(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=Et.comparator(r.documentKey,t.documentKey),i!==0?i:qt(r.largestBatchId,t.largestBatchId))}/**
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
 */const Hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function wo(r){if(r.code!==tt.FAILED_PRECONDITION||r.message!==Hw)throw r;ct("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Rt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new W(((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof W?i:W.resolve(i)}catch(i){return W.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):W.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):W.reject(i)}static resolve(t){return new W(((i,a)=>{i(t)}))}static reject(t){return new W(((i,a)=>{a(t)}))}static waitFor(t){return new W(((i,a)=>{let l=0,c=0,d=!1;t.forEach((g=>{++l,g.next((()=>{++c,d&&c===l&&i()}),(_=>a(_)))})),d=!0,c===l&&i()}))}static or(t){let i=W.resolve(!1);for(const a of t)i=i.next((l=>l?W.resolve(l):a()));return i}static forEach(t,i){const a=[];return t.forEach(((l,c)=>{a.push(i.call(this,l,c))})),this.waitFor(a)}static mapArray(t,i){return new W(((a,l)=>{const c=t.length,d=new Array(c);let g=0;for(let _=0;_<c;_++){const y=_;i(t[y]).next((S=>{d[y]=S,++g,g===c&&a(d)}),(S=>l(S)))}}))}static doWhile(t,i){return new W(((a,l)=>{const c=()=>{t()===!0?i().next((()=>{c()}),l):a()};c()}))}}function Gw(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Co(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class gh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}gh.ce=-1;/**
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
 */const Vm=-1;function ph(r){return r==null}function Jc(r){return r===0&&1/r==-1/0}function Yw(r){return typeof r=="number"&&Number.isInteger(r)&&!Jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const vT="";function Xw(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=wv(t)),t=Qw(r.get(i),t);return wv(t)}function Qw(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case vT:i+="";break;default:i+=c}}return i}function wv(r){return r+vT+""}/**
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
 */function Cv(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function Rs(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function ET(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Se{constructor(t,i){this.comparator=t,this.root=i||en.EMPTY}insert(t,i){return new Se(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,en.BLACK,null,null))}remove(t){return new Se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,en.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nc(this.root,t,this.comparator,!0)}}class Nc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?a(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class en{constructor(t,i,a,l,c){this.key=t,this.value=i,this.color=a??en.RED,this.left=l??en.EMPTY,this.right=c??en.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,c){return new en(t??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return en.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Rt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Rt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Rt(27949);return t+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1;en.EMPTY=new class{constructor(){this.size=0}get key(){throw Rt(57766)}get value(){throw Rt(16141)}get color(){throw Rt(16727)}get left(){throw Rt(29726)}get right(){throw Rt(36894)}copy(t,i,a,l,c){return this}insert(t,i,a){return new en(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(t){this.comparator=t,this.data=new Se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Iv(this.data.getIterator())}getIteratorFrom(t){return new Iv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Fe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Fe(this.comparator);return i.data=t,i}}class Iv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kn{constructor(t){this.fields=t,t.sort(nn.comparator)}static empty(){return new kn([])}unionWith(t){let i=new Fe(nn.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new kn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return po(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class sn{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new TT("Invalid base64 string: "+c):c}})(t);return new sn(i)}static fromUint8Array(t){const i=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(t);return new sn(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return qt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const Kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(r){if(Wt(!!r,39018),typeof r=="string"){let t=0;const i=Kw.exec(r);if(Wt(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Oe(r.seconds),nanos:Oe(r.nanos)}}function Oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Es(r){return typeof r=="string"?sn.fromBase64String(r):sn.fromUint8Array(r)}/**
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
 */const ST="server_timestamp",AT="__type__",bT="__previous_value__",RT="__local_write_time__";function Um(r){return(r?.mapValue?.fields||{})[AT]?.stringValue===ST}function yh(r){const t=r.mapValue.fields[bT];return Um(t)?yh(t):t}function Gl(r){const t=vs(r.mapValue.fields[RT].timestampValue);return new ge(t.seconds,t.nanos)}/**
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
 */class $w{constructor(t,i,a,l,c,d,g,_,y,S){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=_,this.useFetchStreams=y,this.isUsingEmulator=S}}const Wc="(default)";class Yl{constructor(t,i){this.projectId=t,this.database=i||Wc}static empty(){return new Yl("","")}get isDefaultDatabase(){return this.database===Wc}isEqual(t){return t instanceof Yl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const wT="__type__",Zw="__max__",Oc={mapValue:{}},CT="__vector__",th="value";function Ts(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Um(r)?4:Ww(r)?9007199254740991:Jw(r)?10:11:Rt(28295,{value:r})}function Yi(r,t){if(r===t)return!0;const i=Ts(r);if(i!==Ts(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Gl(r).isEqual(Gl(t));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=vs(l.timestampValue),g=vs(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,c){return Es(l.bytesValue).isEqual(Es(c.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,c){return Oe(l.geoPointValue.latitude)===Oe(c.geoPointValue.latitude)&&Oe(l.geoPointValue.longitude)===Oe(c.geoPointValue.longitude)})(r,t);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return Oe(l.integerValue)===Oe(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=Oe(l.doubleValue),g=Oe(c.doubleValue);return d===g?Jc(d)===Jc(g):isNaN(d)&&isNaN(g)}return!1})(r,t);case 9:return po(r.arrayValue.values||[],t.arrayValue.values||[],Yi);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},g=c.mapValue.fields||{};if(Cv(d)!==Cv(g))return!1;for(const _ in d)if(d.hasOwnProperty(_)&&(g[_]===void 0||!Yi(d[_],g[_])))return!1;return!0})(r,t);default:return Rt(52216,{left:r})}}function Xl(r,t){return(r.values||[]).find((i=>Yi(i,t)))!==void 0}function yo(r,t){if(r===t)return 0;const i=Ts(r),a=Ts(t);if(i!==a)return qt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return qt(r.booleanValue,t.booleanValue);case 2:return(function(c,d){const g=Oe(c.integerValue||c.doubleValue),_=Oe(d.integerValue||d.doubleValue);return g<_?-1:g>_?1:g===_?0:isNaN(g)?isNaN(_)?0:-1:1})(r,t);case 3:return Dv(r.timestampValue,t.timestampValue);case 4:return Dv(Gl(r),Gl(t));case 5:return nm(r.stringValue,t.stringValue);case 6:return(function(c,d){const g=Es(c),_=Es(d);return g.compareTo(_)})(r.bytesValue,t.bytesValue);case 7:return(function(c,d){const g=c.split("/"),_=d.split("/");for(let y=0;y<g.length&&y<_.length;y++){const S=qt(g[y],_[y]);if(S!==0)return S}return qt(g.length,_.length)})(r.referenceValue,t.referenceValue);case 8:return(function(c,d){const g=qt(Oe(c.latitude),Oe(d.latitude));return g!==0?g:qt(Oe(c.longitude),Oe(d.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Nv(r.arrayValue,t.arrayValue);case 10:return(function(c,d){const g=c.fields||{},_=d.fields||{},y=g[th]?.arrayValue,S=_[th]?.arrayValue,A=qt(y?.values?.length||0,S?.values?.length||0);return A!==0?A:Nv(y,S)})(r.mapValue,t.mapValue);case 11:return(function(c,d){if(c===Oc.mapValue&&d===Oc.mapValue)return 0;if(c===Oc.mapValue)return 1;if(d===Oc.mapValue)return-1;const g=c.fields||{},_=Object.keys(g),y=d.fields||{},S=Object.keys(y);_.sort(),S.sort();for(let A=0;A<_.length&&A<S.length;++A){const N=nm(_[A],S[A]);if(N!==0)return N;const Y=yo(g[_[A]],y[S[A]]);if(Y!==0)return Y}return qt(_.length,S.length)})(r.mapValue,t.mapValue);default:throw Rt(23264,{he:i})}}function Dv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return qt(r,t);const i=vs(r),a=vs(t),l=qt(i.seconds,a.seconds);return l!==0?l:qt(i.nanos,a.nanos)}function Nv(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=yo(i[l],a[l]);if(c)return c}return qt(i.length,a.length)}function _o(r){return im(r)}function im(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const a=vs(i);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return Es(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return Et.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=im(c);return a+"]"})(r.arrayValue):"mapValue"in r?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const d of a)c?c=!1:l+=",",l+=`${d}:${im(i.fields[d])}`;return l+"}"})(r.mapValue):Rt(61005,{value:r})}function zc(r){switch(Ts(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yh(r);return t?16+zc(t):16;case 5:return 2*r.stringValue.length;case 6:return Es(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,c)=>l+zc(c)),0)})(r.arrayValue);case 10:case 11:return(function(a){let l=0;return Rs(a.fields,((c,d)=>{l+=c.length+zc(d)})),l})(r.mapValue);default:throw Rt(13486,{value:r})}}function rm(r){return!!r&&"integerValue"in r}function Lm(r){return!!r&&"arrayValue"in r}function Ov(r){return!!r&&"nullValue"in r}function xv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bc(r){return!!r&&"mapValue"in r}function Jw(r){return(r?.mapValue?.fields||{})[wT]?.stringValue===CT}function Pl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Rs(r.mapValue.fields,((i,a)=>t.mapValue.fields[i]=Pl(a))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Pl(r.arrayValue.values[i]);return t}return{...r}}function Ww(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Zw}/**
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
 */class Rn{constructor(t){this.value=t}static empty(){return new Rn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!Bc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pl(i)}setAll(t){let i=nn.emptyPath(),a={},l=[];t.forEach(((d,g)=>{if(!i.isImmediateParentOf(g)){const _=this.getFieldsMap(i);this.applyChanges(_,a,l),a={},l=[],i=g.popLast()}d?a[g.lastSegment()]=Pl(d):l.push(g.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(t){const i=this.field(t.popLast());Bc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Yi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];Bc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Rs(i,((l,c)=>t[l]=c));for(const l of a)delete t[l]}clone(){return new Rn(Pl(this.value))}}function IT(r){const t=[];return Rs(r.fields,((i,a)=>{const l=new nn([i]);if(Bc(a)){const c=IT(a.mapValue).fields;if(c.length===0)t.push(l);else for(const d of c)t.push(l.child(d))}else t.push(l)})),new kn(t)}/**
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
 */class cn{constructor(t,i,a,l,c,d,g){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(t){return new cn(t,0,Ct.min(),Ct.min(),Ct.min(),Rn.empty(),0)}static newFoundDocument(t,i,a,l){return new cn(t,1,i,Ct.min(),a,l,0)}static newNoDocument(t,i){return new cn(t,2,i,Ct.min(),Ct.min(),Rn.empty(),0)}static newUnknownDocument(t,i){return new cn(t,3,i,Ct.min(),Ct.min(),Rn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof cn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eh{constructor(t,i){this.position=t,this.inclusive=i}}function Mv(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?a=Et.comparator(Et.fromName(d.referenceValue),i.key):a=yo(d,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function Vv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Yi(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class nh{constructor(t,i="asc"){this.field=t,this.dir=i}}function t2(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class DT{}class qe extends DT{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new n2(t,i,a):i==="array-contains"?new s2(t,a):i==="in"?new a2(t,a):i==="not-in"?new o2(t,a):i==="array-contains-any"?new l2(t,a):new qe(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new i2(t,a):new r2(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(yo(i,this.value)):i!==null&&Ts(this.value)===Ts(i)&&this.matchesComparison(yo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Rt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xi extends DT{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new Xi(t,i)}matches(t){return NT(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function NT(r){return r.op==="and"}function OT(r){return e2(r)&&NT(r)}function e2(r){for(const t of r.filters)if(t instanceof Xi)return!1;return!0}function sm(r){if(r instanceof qe)return r.field.canonicalString()+r.op.toString()+_o(r.value);if(OT(r))return r.filters.map((t=>sm(t))).join(",");{const t=r.filters.map((i=>sm(i))).join(",");return`${r.op}(${t})`}}function xT(r,t){return r instanceof qe?(function(a,l){return l instanceof qe&&a.op===l.op&&a.field.isEqual(l.field)&&Yi(a.value,l.value)})(r,t):r instanceof Xi?(function(a,l){return l instanceof Xi&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((c,d,g)=>c&&xT(d,l.filters[g])),!0):!1})(r,t):void Rt(19439)}function MT(r){return r instanceof qe?(function(i){return`${i.field.canonicalString()} ${i.op} ${_o(i.value)}`})(r):r instanceof Xi?(function(i){return i.op.toString()+" {"+i.getFilters().map(MT).join(" ,")+"}"})(r):"Filter"}class n2 extends qe{constructor(t,i,a){super(t,i,a),this.key=Et.fromName(a.referenceValue)}matches(t){const i=Et.comparator(t.key,this.key);return this.matchesComparison(i)}}class i2 extends qe{constructor(t,i){super(t,"in",i),this.keys=VT("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class r2 extends qe{constructor(t,i){super(t,"not-in",i),this.keys=VT("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function VT(r,t){return(t.arrayValue?.values||[]).map((i=>Et.fromName(i.referenceValue)))}class s2 extends qe{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return Lm(i)&&Xl(i.arrayValue,this.value)}}class a2 extends qe{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Xl(this.value.arrayValue,i)}}class o2 extends qe{constructor(t,i){super(t,"not-in",i)}matches(t){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Xl(this.value.arrayValue,i)}}class l2 extends qe{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!Lm(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Xl(this.value.arrayValue,a)))}}/**
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
 */class u2{constructor(t,i=null,a=[],l=[],c=null,d=null,g=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=d,this.endAt=g,this.Te=null}}function Uv(r,t=null,i=[],a=[],l=null,c=null,d=null){return new u2(r,t,i,a,l,c,d)}function Pm(r){const t=Dt(r);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>sm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(c){return c.field.canonicalString()+c.dir})(a))).join(","),ph(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>_o(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>_o(a))).join(",")),t.Te=i}return t.Te}function km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!t2(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!xT(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Vv(r.startAt,t.startAt)&&Vv(r.endAt,t.endAt)}function am(r){return Et.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class _h{constructor(t,i=null,a=[],l=[],c=null,d="F",g=null,_=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function c2(r,t,i,a,l,c,d,g){return new _h(r,t,i,a,l,c,d,g)}function zm(r){return new _h(r)}function Lv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function h2(r){return r.collectionGroup!==null}function kl(r){const t=Dt(r);if(t.Ie===null){t.Ie=[];const i=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),i.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new Fe(nn.comparator);return d.filters.forEach((_=>{_.getFlattenedFilters().forEach((y=>{y.isInequality()&&(g=g.add(y.field))}))})),g})(t).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new nh(c,a))})),i.has(nn.keyField().canonicalString())||t.Ie.push(new nh(nn.keyField(),a))}return t.Ie}function qi(r){const t=Dt(r);return t.Ee||(t.Ee=f2(t,kl(r))),t.Ee}function f2(r,t){if(r.limitType==="F")return Uv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new nh(l.field,c)}));const i=r.endAt?new eh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new eh(r.startAt.position,r.startAt.inclusive):null;return Uv(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function om(r,t,i){return new _h(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function vh(r,t){return km(qi(r),qi(t))&&r.limitType===t.limitType}function UT(r){return`${Pm(qi(r))}|lt:${r.limitType}`}function io(r){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>MT(l))).join(", ")}]`),ph(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>_o(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>_o(l))).join(",")),`Target(${a})`})(qi(r))}; limitType=${r.limitType})`}function Eh(r,t){return t.isFoundDocument()&&(function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):Et.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)})(r,t)&&(function(a,l){for(const c of kl(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,t)&&(function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0})(r,t)&&(function(a,l){return!(a.startAt&&!(function(d,g,_){const y=Mv(d,g,_);return d.inclusive?y<=0:y<0})(a.startAt,kl(a),l)||a.endAt&&!(function(d,g,_){const y=Mv(d,g,_);return d.inclusive?y>=0:y>0})(a.endAt,kl(a),l))})(r,t)}function d2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function LT(r){return(t,i)=>{let a=!1;for(const l of kl(r)){const c=m2(l,t,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function m2(r,t,i){const a=r.field.isKeyField()?Et.comparator(t.key,i.key):(function(c,d,g){const _=d.data.field(c),y=g.data.field(c);return _!==null&&y!==null?yo(_,y):Rt(42886)})(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Rt(19790,{direction:r.dir})}}/**
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
 */class ca{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Rs(this.inner,((i,a)=>{for(const[l,c]of a)t(l,c)}))}isEmpty(){return ET(this.inner)}size(){return this.innerSize}}/**
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
 */const g2=new Se(Et.comparator);function Sr(){return g2}const PT=new Se(Et.comparator);function xl(...r){let t=PT;for(const i of r)t=t.insert(i.key,i);return t}function kT(r){let t=PT;return r.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function ea(){return zl()}function zT(){return zl()}function zl(){return new ca((r=>r.toString()),((r,t)=>r.isEqual(t)))}const p2=new Se(Et.comparator),y2=new Fe(Et.comparator);function Ht(...r){let t=y2;for(const i of r)t=t.add(i);return t}const _2=new Fe(qt);function v2(){return _2}/**
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
 */function Bm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jc(t)?"-0":t}}function BT(r){return{integerValue:""+r}}function E2(r,t){return Yw(t)?BT(t):Bm(r,t)}/**
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
 */class Th{constructor(){this._=void 0}}function T2(r,t,i){return r instanceof ih?(function(l,c){const d={fields:{[AT]:{stringValue:ST},[RT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Um(c)&&(c=yh(c)),c&&(d.fields[bT]=c),{mapValue:d}})(i,t):r instanceof Ql?qT(r,t):r instanceof Kl?HT(r,t):(function(l,c){const d=jT(l,c),g=Pv(d)+Pv(l.Ae);return rm(d)&&rm(l.Ae)?BT(g):Bm(l.serializer,g)})(r,t)}function S2(r,t,i){return r instanceof Ql?qT(r,t):r instanceof Kl?HT(r,t):i}function jT(r,t){return r instanceof rh?(function(a){return rm(a)||(function(c){return!!c&&"doubleValue"in c})(a)})(t)?t:{integerValue:0}:null}class ih extends Th{}class Ql extends Th{constructor(t){super(),this.elements=t}}function qT(r,t){const i=FT(t);for(const a of r.elements)i.some((l=>Yi(l,a)))||i.push(a);return{arrayValue:{values:i}}}class Kl extends Th{constructor(t){super(),this.elements=t}}function HT(r,t){let i=FT(t);for(const a of r.elements)i=i.filter((l=>!Yi(l,a)));return{arrayValue:{values:i}}}class rh extends Th{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Pv(r){return Oe(r.integerValue||r.doubleValue)}function FT(r){return Lm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function A2(r,t){return r.field.isEqual(t.field)&&(function(a,l){return a instanceof Ql&&l instanceof Ql||a instanceof Kl&&l instanceof Kl?po(a.elements,l.elements,Yi):a instanceof rh&&l instanceof rh?Yi(a.Ae,l.Ae):a instanceof ih&&l instanceof ih})(r.transform,t.transform)}class b2{constructor(t,i){this.version=t,this.transformResults=i}}class pi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new pi}static exists(t){return new pi(void 0,t)}static updateTime(t){return new pi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Sh{}function GT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new jm(r.key,pi.none()):new iu(r.key,r.data,pi.none());{const i=r.data,a=Rn.empty();let l=new Fe(nn.comparator);for(let c of t.fields)if(!l.has(c)){let d=i.field(c);d===null&&c.length>1&&(c=c.popLast(),d=i.field(c)),d===null?a.delete(c):a.set(c,d),l=l.add(c)}return new ws(r.key,a,new kn(l.toArray()),pi.none())}}function R2(r,t,i){r instanceof iu?(function(l,c,d){const g=l.value.clone(),_=zv(l.fieldTransforms,c,d.transformResults);g.setAll(_),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,t,i):r instanceof ws?(function(l,c,d){if(!jc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const g=zv(l.fieldTransforms,c,d.transformResults),_=c.data;_.setAll(YT(l)),_.setAll(g),c.convertToFoundDocument(d.version,_).setHasCommittedMutations()})(r,t,i):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Bl(r,t,i,a){return r instanceof iu?(function(c,d,g,_){if(!jc(c.precondition,d))return g;const y=c.value.clone(),S=Bv(c.fieldTransforms,_,d);return y.setAll(S),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,t,i,a):r instanceof ws?(function(c,d,g,_){if(!jc(c.precondition,d))return g;const y=Bv(c.fieldTransforms,_,d),S=d.data;return S.setAll(YT(c)),S.setAll(y),d.convertToFoundDocument(d.version,S).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((A=>A.field)))})(r,t,i,a):(function(c,d,g){return jc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g})(r,t,i)}function w2(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),c=jT(a.transform,l||null);c!=null&&(i===null&&(i=Rn.empty()),i.set(a.field,c))}return i||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&po(a,l,((c,d)=>A2(c,d)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class iu extends Sh{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ws extends Sh{constructor(t,i,a,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function YT(r){const t=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}})),t}function zv(r,t,i){const a=new Map;Wt(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const c=r[l],d=c.transform,g=t.data.field(c.field);a.set(c.field,S2(d,g,i[l]))}return a}function Bv(r,t,i){const a=new Map;for(const l of r){const c=l.transform,d=i.data.field(l.field);a.set(l.field,T2(c,d,t))}return a}class jm extends Sh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C2 extends Sh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class I2{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&R2(c,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Bl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Bl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=zT();return this.mutations.forEach((l=>{const c=t.get(l.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=i.has(l.key)?null:g;const _=GT(d,g);_!==null&&a.set(l.key,_),d.isValidDocument()||d.convertToNoDocument(Ct.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Ht())}isEqual(t){return this.batchId===t.batchId&&po(this.mutations,t.mutations,((i,a)=>kv(i,a)))&&po(this.baseMutations,t.baseMutations,((i,a)=>kv(i,a)))}}class qm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){Wt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=(function(){return p2})();const c=t.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,a[d].version);return new qm(t,i,a,l)}}/**
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
 */class D2{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class N2{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var ke,Xt;function O2(r){switch(r){case tt.OK:return Rt(64938);case tt.CANCELLED:case tt.UNKNOWN:case tt.DEADLINE_EXCEEDED:case tt.RESOURCE_EXHAUSTED:case tt.INTERNAL:case tt.UNAVAILABLE:case tt.UNAUTHENTICATED:return!1;case tt.INVALID_ARGUMENT:case tt.NOT_FOUND:case tt.ALREADY_EXISTS:case tt.PERMISSION_DENIED:case tt.FAILED_PRECONDITION:case tt.ABORTED:case tt.OUT_OF_RANGE:case tt.UNIMPLEMENTED:case tt.DATA_LOSS:return!0;default:return Rt(15467,{code:r})}}function XT(r){if(r===void 0)return Er("GRPC error has no .code"),tt.UNKNOWN;switch(r){case ke.OK:return tt.OK;case ke.CANCELLED:return tt.CANCELLED;case ke.UNKNOWN:return tt.UNKNOWN;case ke.DEADLINE_EXCEEDED:return tt.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return tt.RESOURCE_EXHAUSTED;case ke.INTERNAL:return tt.INTERNAL;case ke.UNAVAILABLE:return tt.UNAVAILABLE;case ke.UNAUTHENTICATED:return tt.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return tt.INVALID_ARGUMENT;case ke.NOT_FOUND:return tt.NOT_FOUND;case ke.ALREADY_EXISTS:return tt.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return tt.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return tt.FAILED_PRECONDITION;case ke.ABORTED:return tt.ABORTED;case ke.OUT_OF_RANGE:return tt.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return tt.UNIMPLEMENTED;case ke.DATA_LOSS:return tt.DATA_LOSS;default:return Rt(39323,{code:r})}}(Xt=ke||(ke={}))[Xt.OK=0]="OK",Xt[Xt.CANCELLED=1]="CANCELLED",Xt[Xt.UNKNOWN=2]="UNKNOWN",Xt[Xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xt[Xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xt[Xt.NOT_FOUND=5]="NOT_FOUND",Xt[Xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xt[Xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xt[Xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xt[Xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xt[Xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xt[Xt.ABORTED=10]="ABORTED",Xt[Xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xt[Xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xt[Xt.INTERNAL=13]="INTERNAL",Xt[Xt.UNAVAILABLE=14]="UNAVAILABLE",Xt[Xt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function x2(){return new TextEncoder}/**
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
 */const M2=new ps([4294967295,4294967295],0);function jv(r){const t=x2().encode(r),i=new uT;return i.update(t),new Uint8Array(i.digest())}function qv(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new ps([i,a],0),new ps([l,c],0)]}class Hm{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Ml(`Invalid padding: ${i}`);if(a<0)throw new Ml(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ml(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Ml(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=ps.fromNumber(this.ge)}ye(t,i,a){let l=t.add(i.multiply(ps.fromNumber(a)));return l.compare(M2)===1&&(l=new ps([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=jv(t),[a,l]=qv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);if(!this.we(d))return!1}return!0}static create(t,i,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new Hm(c,l,i);return a.forEach((g=>d.insert(g))),d}insert(t){if(this.ge===0)return;const i=jv(t),[a,l]=qv(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(a,l,c);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ah{constructor(t,i,a,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const l=new Map;return l.set(t,ru.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Ah(Ct.min(),l,new Se(qt),Sr(),Ht())}}class ru{constructor(t,i,a,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new ru(a,i,Ht(),Ht(),Ht())}}/**
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
 */class qc{constructor(t,i,a,l){this.be=t,this.removedTargetIds=i,this.key=a,this.De=l}}class QT{constructor(t,i){this.targetId=t,this.Ce=i}}class KT{constructor(t,i,a=sn.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=l}}class Hv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ht(),i=Ht(),a=Ht();return this.Fe.forEach(((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:a=a.add(l);break;default:Rt(38017,{changeType:c})}})),new ru(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Wt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class V2{constructor(t){this.Ge=t,this.ze=new Map,this.je=Sr(),this.Je=xc(),this.He=xc(),this.Ye=new Se(qt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:Rt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,l)=>{this.rt(l)&&i(l)}))}st(t){const i=t.targetId,a=t.Ce.count,l=this.ot(i);if(l){const c=l.target;if(am(c))if(a===0){const d=new Et(c.path);this.et(i,d,cn.newNoDocument(d,Ct.min()))}else Wt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const g=this.ut(t),_=g?this.ct(g,t,d):1;if(_!==0){this.it(i);const y=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,y)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=i;let d,g;try{d=Es(a).toUint8Array()}catch(_){if(_ instanceof TT)return go("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{g=new Hm(d,l,c)}catch(_){return go(_ instanceof Ml?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return g.ge===0?null:g}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let l=0;return a.forEach((c=>{const d=this.Ge.ht(),g=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.et(i,c,null),l++)})),l}Tt(t){const i=new Map;this.ze.forEach(((c,d)=>{const g=this.ot(d);if(g){if(c.current&&am(g.target)){const _=new Et(g.target.path);this.It(_).has(d)||this.Et(d,_)||this.et(d,_,cn.newNoDocument(_,t))}c.Be&&(i.set(d,c.ke()),c.qe())}}));let a=Ht();this.He.forEach(((c,d)=>{let g=!0;d.forEachWhile((_=>{const y=this.ot(_);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(a=a.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(t)));const l=new Ah(t,i,this.Ye,this.je,a);return this.je=Sr(),this.Je=xc(),this.He=xc(),this.Ye=new Se(qt),l}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,i)?l.Qe(i,1):l.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Hv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Fe(qt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Fe(qt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||ct("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Hv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function xc(){return new Se(Et.comparator)}function Fv(){return new Se(Et.comparator)}const U2={asc:"ASCENDING",desc:"DESCENDING"},L2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P2={and:"AND",or:"OR"};class k2{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function lm(r,t){return r.useProto3Json||ph(t)?t:{value:t}}function sh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $T(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function z2(r,t){return sh(r,t.toTimestamp())}function Hi(r){return Wt(!!r,49232),Ct.fromTimestamp((function(i){const a=vs(i);return new ge(a.seconds,a.nanos)})(r))}function Fm(r,t){return um(r,t).canonicalString()}function um(r,t){const i=(function(l){return new me(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?i:i.child(t)}function ZT(r){const t=me.fromString(r);return Wt(n0(t),10190,{key:t.toString()}),t}function cm(r,t){return Fm(r.databaseId,t.path)}function Hd(r,t){const i=ZT(t);if(i.get(1)!==r.databaseId.projectId)throw new dt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new dt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new Et(WT(i))}function JT(r,t){return Fm(r.databaseId,t)}function B2(r){const t=ZT(r);return t.length===4?me.emptyPath():WT(t)}function hm(r){return new me(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function WT(r){return Wt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gv(r,t,i){return{name:cm(r,t),fields:i.value.mapValue.fields}}function j2(r,t){let i;if("targetChange"in t){t.targetChange;const a=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Rt(39313,{state:y})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=(function(y,S){return y.useProto3Json?(Wt(S===void 0||typeof S=="string",58123),sn.fromBase64String(S||"")):(Wt(S===void 0||S instanceof Buffer||S instanceof Uint8Array,16193),sn.fromUint8Array(S||new Uint8Array))})(r,t.targetChange.resumeToken),d=t.targetChange.cause,g=d&&(function(y){const S=y.code===void 0?tt.UNKNOWN:XT(y.code);return new dt(S,y.message||"")})(d);i=new KT(a,l,c,g||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=Hd(r,a.document.name),c=Hi(a.document.updateTime),d=a.document.createTime?Hi(a.document.createTime):Ct.min(),g=new Rn({mapValue:{fields:a.document.fields}}),_=cn.newFoundDocument(l,c,d,g),y=a.targetIds||[],S=a.removedTargetIds||[];i=new qc(y,S,_.key,_)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=Hd(r,a.document),c=a.readTime?Hi(a.readTime):Ct.min(),d=cn.newNoDocument(l,c),g=a.removedTargetIds||[];i=new qc([],g,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=Hd(r,a.document),c=a.removedTargetIds||[];i=new qc([],c,l,null)}else{if(!("filter"in t))return Rt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,d=new N2(l,c),g=a.targetId;i=new QT(g,d)}}return i}function q2(r,t){let i;if(t instanceof iu)i={update:Gv(r,t.key,t.value)};else if(t instanceof jm)i={delete:cm(r,t.key)};else if(t instanceof ws)i={update:Gv(r,t.key,t.data),updateMask:Z2(t.fieldMask)};else{if(!(t instanceof C2))return Rt(16599,{Vt:t.type});i={verify:cm(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(c,d){const g=d.transform;if(g instanceof ih)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ql)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Kl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof rh)return{fieldPath:d.field.canonicalString(),increment:g.Ae};throw Rt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:z2(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Rt(27497)})(r,t.precondition)),i}function H2(r,t){return r&&r.length>0?(Wt(t!==void 0,14353),r.map((i=>(function(l,c){let d=l.updateTime?Hi(l.updateTime):Hi(c);return d.isEqual(Ct.min())&&(d=Hi(c)),new b2(d,l.transformResults||[])})(i,t)))):[]}function F2(r,t){return{documents:[JT(r,t.path)]}}function G2(r,t){const i={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=JT(r,l);const c=(function(y){if(y.length!==0)return e0(Xi.create(y,"and"))})(t.filters);c&&(i.structuredQuery.where=c);const d=(function(y){if(y.length!==0)return y.map((S=>(function(N){return{field:ro(N.field),direction:Q2(N.dir)}})(S)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const g=lm(r,t.limit);return g!==null&&(i.structuredQuery.limit=g),t.startAt&&(i.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ft:i,parent:l}}function Y2(r){let t=B2(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){Wt(a===1,65062);const S=i.from[0];S.allDescendants?l=S.collectionId:t=t.child(S.collectionId)}let c=[];i.where&&(c=(function(A){const N=t0(A);return N instanceof Xi&&OT(N)?N.getFilters():[N]})(i.where));let d=[];i.orderBy&&(d=(function(A){return A.map((N=>(function($){return new nh(so($.field),(function(rt){switch(rt){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(N)))})(i.orderBy));let g=null;i.limit&&(g=(function(A){let N;return N=typeof A=="object"?A.value:A,ph(N)?null:N})(i.limit));let _=null;i.startAt&&(_=(function(A){const N=!!A.before,Y=A.values||[];return new eh(Y,N)})(i.startAt));let y=null;return i.endAt&&(y=(function(A){const N=!A.before,Y=A.values||[];return new eh(Y,N)})(i.endAt)),c2(t,l,d,c,g,"F",_,y)}function X2(r,t){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Rt(28987,{purpose:l})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function t0(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=so(i.unaryFilter.field);return qe.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=so(i.unaryFilter.field);return qe.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=so(i.unaryFilter.field);return qe.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=so(i.unaryFilter.field);return qe.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Rt(61313);default:return Rt(60726)}})(r):r.fieldFilter!==void 0?(function(i){return qe.create(so(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Rt(58110);default:return Rt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return Xi.create(i.compositeFilter.filters.map((a=>t0(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Rt(1026)}})(i.compositeFilter.op))})(r):Rt(30097,{filter:r})}function Q2(r){return U2[r]}function K2(r){return L2[r]}function $2(r){return P2[r]}function ro(r){return{fieldPath:r.canonicalString()}}function so(r){return nn.fromServerFormat(r.fieldPath)}function e0(r){return r instanceof qe?(function(i){if(i.op==="=="){if(xv(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NAN"}};if(Ov(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(xv(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NOT_NAN"}};if(Ov(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(i.field),op:K2(i.op),value:i.value}}})(r):r instanceof Xi?(function(i){const a=i.getFilters().map((l=>e0(l)));return a.length===1?a[0]:{compositeFilter:{op:$2(i.op),filters:a}}})(r):Rt(54877,{filter:r})}function Z2(r){const t=[];return r.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function n0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class hs{constructor(t,i,a,l,c=Ct.min(),d=Ct.min(),g=sn.EMPTY_BYTE_STRING,_=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=g,this.expectedCount=_}withSequenceNumber(t){return new hs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class J2{constructor(t){this.yt=t}}function W2(r){const t=Y2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?om(t,t.limit,"L"):t}/**
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
 */class tC{constructor(){this.Cn=new eC}addToCollectionParentIndex(t,i){return this.Cn.add(i),W.resolve()}getCollectionParents(t,i){return W.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return W.resolve()}deleteFieldIndex(t,i){return W.resolve()}deleteAllFieldIndexes(t){return W.resolve()}createTargetIndexes(t,i){return W.resolve()}getDocumentsMatchingTarget(t,i){return W.resolve(null)}getIndexType(t,i){return W.resolve(0)}getFieldIndexes(t,i){return W.resolve([])}getNextCollectionGroupToUpdate(t){return W.resolve(null)}getMinOffset(t,i){return W.resolve(_s.min())}getMinOffsetFromCollectionGroup(t,i){return W.resolve(_s.min())}updateCollectionGroup(t,i,a){return W.resolve()}updateIndexEntries(t,i){return W.resolve()}}class eC{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Fe(me.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Fe(me.comparator)).toArray()}}/**
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
 */const Yv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i0=41943040;class bn{static withCacheSize(t){return new bn(t,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(i0,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
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
 */class vo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new vo(0)}static cr(){return new vo(-1)}}/**
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
 */const Xv="LruGarbageCollector",nC=1048576;function Qv([r,t],[i,a]){const l=qt(r,i);return l===0?qt(t,a):l}class iC{constructor(t){this.Ir=t,this.buffer=new Fe(Qv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Qv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class rC{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){ct(Xv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Co(i)?ct(Xv,"Ignoring IndexedDB error during garbage collection: ",i):await wo(i)}await this.Vr(3e5)}))}}class sC{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return W.resolve(gh.ce);const a=new iC(i);return this.mr.forEachTarget(t,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Yv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,c,d,g,_,y;const S=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),l=this.params.maximumSequenceNumbersToCollect):l=A,d=Date.now(),this.nthSequenceNumber(t,l)))).next((A=>(a=A,g=Date.now(),this.removeTargets(t,a,i)))).next((A=>(c=A,_=Date.now(),this.removeOrphanedDocuments(t,a)))).next((A=>(y=Date.now(),no()<=jt.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-S}ms
	Determined least recently used ${l} in `+(g-d)+`ms
	Removed ${c} targets in `+(_-g)+`ms
	Removed ${A} documents in `+(y-_)+`ms
Total Duration: ${y-S}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:A}))))}}function aC(r,t){return new sC(r,t)}/**
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
 */class oC{constructor(){this.changes=new ca((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,cn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?W.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class lC{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class uC{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(t,i)))).next((l=>(a!==null&&Bl(a.mutation,l,kn.empty(),ge.now()),l)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Ht()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Ht()){const l=ea();return this.populateOverlays(t,l,i).next((()=>this.computeViews(t,i,l,a).next((c=>{let d=xl();return c.forEach(((g,_)=>{d=d.insert(g,_.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=ea();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Ht())))}populateOverlays(t,i,a){const l=[];return a.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(t,l).next((c=>{c.forEach(((d,g)=>{i.set(d,g)}))}))}computeViews(t,i,a,l){let c=Sr();const d=zl(),g=(function(){return zl()})();return i.forEach(((_,y)=>{const S=a.get(y.key);l.has(y.key)&&(S===void 0||S.mutation instanceof ws)?c=c.insert(y.key,y):S!==void 0?(d.set(y.key,S.mutation.getFieldMask()),Bl(S.mutation,y,S.mutation.getFieldMask(),ge.now())):d.set(y.key,kn.empty())})),this.recalculateAndSaveOverlays(t,c).next((_=>(_.forEach(((y,S)=>d.set(y,S))),i.forEach(((y,S)=>g.set(y,new lC(S,d.get(y)??null)))),g)))}recalculateAndSaveOverlays(t,i){const a=zl();let l=new Se(((d,g)=>d-g)),c=Ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const g of d)g.keys().forEach((_=>{const y=i.get(_);if(y===null)return;let S=a.get(_)||kn.empty();S=g.applyToLocalView(y,S),a.set(_,S);const A=(l.get(g.batchId)||Ht()).add(_);l=l.insert(g.batchId,A)}))})).next((()=>{const d=[],g=l.getReverseIterator();for(;g.hasNext();){const _=g.getNext(),y=_.key,S=_.value,A=zT();S.forEach((N=>{if(!c.has(N)){const Y=GT(i.get(N),a.get(N));Y!==null&&A.set(N,Y),c=c.add(N)}})),d.push(this.documentOverlayCache.saveOverlays(t,y,A))}return W.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,l){return(function(d){return Et.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):h2(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-c.size):W.resolve(ea());let g=Fl,_=c;return d.next((y=>W.forEach(y,((S,A)=>(g<A.largestBatchId&&(g=A.largestBatchId),c.get(S)?W.resolve():this.remoteDocumentCache.getEntry(t,S).next((N=>{_=_.insert(S,N)}))))).next((()=>this.populateOverlays(t,y,c))).next((()=>this.computeViews(t,_,y,Ht()))).next((S=>({batchId:g,changes:kT(S)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new Et(i)).next((a=>{let l=xl();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const c=i.collectionGroup;let d=xl();return this.indexManager.getCollectionParents(t,c).next((g=>W.forEach(g,(_=>{const y=(function(A,N){return new _h(N,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(i,_.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,a,l).next((S=>{S.forEach(((A,N)=>{d=d.insert(A,N)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,c,l)))).next((d=>{c.forEach(((_,y)=>{const S=y.getKey();d.get(S)===null&&(d=d.insert(S,cn.newInvalidDocument(S)))}));let g=xl();return d.forEach(((_,y)=>{const S=c.get(_);S!==void 0&&Bl(S.mutation,y,kn.empty(),ge.now()),Eh(i,y)&&(g=g.insert(_,y))})),g}))}}/**
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
 */class cC{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return W.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Hi(l.createTime)}})(i)),W.resolve()}getNamedQuery(t,i){return W.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:W2(l.bundledQuery),readTime:Hi(l.readTime)}})(i)),W.resolve()}}/**
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
 */class hC{constructor(){this.overlays=new Se(Et.comparator),this.qr=new Map}getOverlay(t,i){return W.resolve(this.overlays.get(i))}getOverlays(t,i){const a=ea();return W.forEach(i,(l=>this.getOverlay(t,l).next((c=>{c!==null&&a.set(l,c)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((l,c)=>{this.St(t,i,c)})),W.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(a)),W.resolve()}getOverlaysForCollection(t,i,a){const l=ea(),c=i.length+1,d=new Et(i.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const _=g.getNext().value,y=_.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&_.largestBatchId>a&&l.set(_.getKey(),_)}return W.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let c=new Se(((y,S)=>y-S));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>a){let S=c.get(y.largestBatchId);S===null&&(S=ea(),c=c.insert(y.largestBatchId,S)),S.set(y.getKey(),y)}}const g=ea(),_=c.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((y,S)=>g.set(y,S))),!(g.size()>=l)););return W.resolve(g)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new D2(i,a));let c=this.qr.get(i);c===void 0&&(c=Ht(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
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
 */class fC{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(t){return W.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,W.resolve()}}/**
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
 */class Gm{constructor(){this.Qr=new Fe(Qe.$r),this.Ur=new Fe(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Qe(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Qe(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new Et(new me([])),a=new Qe(i,t),l=new Qe(i,t+1),c=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new Et(new me([])),a=new Qe(i,t),l=new Qe(i,t+1);let c=Ht();return this.Ur.forEachInRange([a,l],(d=>{c=c.add(d.key)})),c}containsKey(t){const i=new Qe(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Qe{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return Et.comparator(t.key,i.key)||qt(t.Yr,i.Yr)}static Kr(t,i){return qt(t.Yr,i.Yr)||Et.comparator(t.key,i.key)}}/**
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
 */class dC{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Fe(Qe.$r)}checkEmpty(t){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new I2(c,i,a,l);this.mutationQueue.push(d);for(const g of l)this.Zr=this.Zr.add(new Qe(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return W.resolve(d)}lookupMutationBatch(t,i){return W.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Vm:this.tr-1)}getAllMutationBatches(t){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Qe(i,0),l=new Qe(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],(d=>{const g=this.Xr(d.Yr);c.push(g)})),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Fe(qt);return i.forEach((l=>{const c=new Qe(l,0),d=new Qe(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(g=>{a=a.add(g.Yr)}))})),W.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let c=a;Et.isDocumentKey(c)||(c=c.child(""));const d=new Qe(new Et(c),0);let g=new Fe(qt);return this.Zr.forEachWhile((_=>{const y=_.key.path;return!!a.isPrefixOf(y)&&(y.length===l&&(g=g.add(_.Yr)),!0)}),d),W.resolve(this.ti(g))}ti(t){const i=[];return t.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(t,i){Wt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return W.forEach(i.mutations,(l=>{const c=new Qe(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Qe(i,0),l=this.Zr.firstAfterOrEqual(a);return W.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,W.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class mC{constructor(t){this.ri=t,this.docs=(function(){return new Se(Et.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return W.resolve(a?a.document.mutableCopy():cn.newInvalidDocument(i))}getEntries(t,i){let a=Sr();return i.forEach((l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():cn.newInvalidDocument(l))})),W.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let c=Sr();const d=i.path,g=new Et(d.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(g);for(;_.hasNext();){const{key:y,value:{document:S}}=_.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||qw(jw(S),a)<=0||(l.has(S.key)||Eh(i,S))&&(c=c.insert(S.key,S.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(t,i,a,l){Rt(9500)}ii(t,i){return W.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new gC(this)}getSize(t){return W.resolve(this.size)}}class gC extends oC{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)})),W.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
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
 */class pC{constructor(t){this.persistence=t,this.si=new ca((i=>Pm(i)),km),this.lastRemoteSnapshotVersion=Ct.min(),this.highestTargetId=0,this.oi=0,this._i=new Gm,this.targetCount=0,this.ai=vo.ur()}forEachTarget(t,i){return this.si.forEach(((a,l)=>i(l))),W.resolve()}getLastRemoteSnapshotVersion(t){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return W.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),W.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new vo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,W.resolve()}updateTargetData(t,i){return this.Pr(i),W.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,W.resolve()}removeTargets(t,i,a){let l=0;const c=[];return this.si.forEach(((d,g)=>{g.sequenceNumber<=i&&a.get(g.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)})),W.waitFor(c).next((()=>l))}getTargetCount(t){return W.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return W.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),W.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((d=>{c.push(l.markPotentiallyOrphaned(t,d))})),W.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),W.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return W.resolve(a)}containsKey(t,i){return W.resolve(this._i.containsKey(i))}}/**
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
 */class r0{constructor(t,i){this.ui={},this.overlays={},this.ci=new gh(0),this.li=!1,this.li=!0,this.hi=new fC,this.referenceDelegate=t(this),this.Pi=new pC(this),this.indexManager=new tC,this.remoteDocumentCache=(function(l){return new mC(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new J2(i),this.Ii=new cC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new hC,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new dC(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){ct("MemoryPersistence","Starting transaction:",t);const l=new yC(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(t,i){return W.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class yC extends Fw{constructor(t){super(),this.currentSequenceNumber=t}}class Ym{constructor(t){this.persistence=t,this.Ri=new Gm,this.Vi=null}static mi(t){return new Ym(t)}get fi(){if(this.Vi)return this.Vi;throw Rt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),W.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),W.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),W.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(a=>{const l=Et.fromPath(a);return this.gi(t,l).next((c=>{c||i.removeEntry(l,Ct.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return W.or([()=>W.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class ah{constructor(t,i){this.persistence=t,this.pi=new ca((a=>Xw(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=aC(this,i)}static mi(t,i){return new ah(t,i)}Ei(){}di(t){return W.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((l=>a+l))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return W.forEach(this.pi,((a,l)=>this.br(t,a,l).next((c=>c?W.resolve():i(l)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,i).next((g=>{g||(a++,c.removeEntry(d,Ct.min()))})))).next((()=>c.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),W.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),W.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),W.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),W.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=zc(t.data.value)),i}br(t,i,a){return W.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return W.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Xm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Ht(),l=Ht();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Xm(t,i.fromCache,a,l)}}/**
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
 */class _C{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class vC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return JA()?8:Gw(hn())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const c={result:null};return this.ys(t,i).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(t,i,l,a).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new _C;return this.Ss(t,i,d).next((g=>{if(c.result=g,this.Vs)return this.bs(t,i,d,g.size)}))})).next((()=>c.result))}bs(t,i,a,l){return a.documentReadCount<this.fs?(no()<=jt.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",io(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(no()<=jt.DEBUG&&ct("QueryEngine","Query:",io(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(no()<=jt.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",io(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qi(i))):W.resolve())}ys(t,i){if(Lv(i))return W.resolve(null);let a=qi(i);return this.indexManager.getIndexType(t,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=om(i,null,"F"),a=qi(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((c=>{const d=Ht(...c);return this.ps.getDocuments(t,d).next((g=>this.indexManager.getMinOffset(t,a).next((_=>{const y=this.Ds(i,g);return this.Cs(i,y,d,_.readTime)?this.ys(t,om(i,null,"F")):this.vs(t,y,i,_)}))))})))))}ws(t,i,a,l){return Lv(i)||l.isEqual(Ct.min())?W.resolve(null):this.ps.getDocuments(t,a).next((c=>{const d=this.Ds(i,c);return this.Cs(i,d,a,l)?W.resolve(null):(no()<=jt.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),io(i)),this.vs(t,d,i,Bw(l,Fl)).next((g=>g)))}))}Ds(t,i){let a=new Fe(LT(t));return i.forEach(((l,c)=>{Eh(t,c)&&(a=a.add(c))})),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,i,a){return no()<=jt.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",io(i)),this.ps.getDocumentsMatchingQuery(t,i,_s.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next((c=>(i.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
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
 */const Qm="LocalStore",EC=3e8;class TC{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new Se(qt),this.xs=new ca((c=>Pm(c)),km),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function SC(r,t,i,a){return new TC(r,t,i,a)}async function s0(r,t){const i=Dt(r);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((c=>(l=c,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((c=>{const d=[],g=[];let _=Ht();for(const y of l){d.push(y.batchId);for(const S of y.mutations)_=_.add(S.key)}for(const y of c){g.push(y.batchId);for(const S of y.mutations)_=_.add(S.key)}return i.localDocuments.getDocuments(a,_).next((y=>({Ls:y,removedBatchIds:d,addedBatchIds:g})))}))}))}function AC(r,t){const i=Dt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const l=t.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,_,y,S){const A=y.batch,N=A.keys();let Y=W.resolve();return N.forEach(($=>{Y=Y.next((()=>S.getEntry(_,$))).next((et=>{const rt=y.docVersions.get($);Wt(rt!==null,48541),et.version.compareTo(rt)<0&&(A.applyToRemoteDocument(et,y),et.isValidDocument()&&(et.setReadTime(y.commitVersion),S.addEntry(et)))}))})),Y.next((()=>g.mutationQueue.removeMutationBatch(_,A)))})(i,a,t,c).next((()=>c.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(g){let _=Ht();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(_=_.add(g.batch.mutations[y].key));return _})(t)))).next((()=>i.localDocuments.getDocuments(a,l)))}))}function a0(r){const t=Dt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function bC(r,t){const i=Dt(r),a=t.snapshotVersion;let l=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});l=i.Ms;const g=[];t.targetChanges.forEach(((S,A)=>{const N=l.get(A);if(!N)return;g.push(i.Pi.removeMatchingKeys(c,S.removedDocuments,A).next((()=>i.Pi.addMatchingKeys(c,S.addedDocuments,A))));let Y=N.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(A)!==null?Y=Y.withResumeToken(sn.EMPTY_BYTE_STRING,Ct.min()).withLastLimboFreeSnapshotVersion(Ct.min()):S.resumeToken.approximateByteSize()>0&&(Y=Y.withResumeToken(S.resumeToken,a)),l=l.insert(A,Y),(function(et,rt,ht){return et.resumeToken.approximateByteSize()===0||rt.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=EC?!0:ht.addedDocuments.size+ht.modifiedDocuments.size+ht.removedDocuments.size>0})(N,Y,S)&&g.push(i.Pi.updateTargetData(c,Y))}));let _=Sr(),y=Ht();if(t.documentUpdates.forEach((S=>{t.resolvedLimboDocuments.has(S)&&g.push(i.persistence.referenceDelegate.updateLimboDocument(c,S))})),g.push(RC(c,d,t.documentUpdates).next((S=>{_=S.ks,y=S.qs}))),!a.isEqual(Ct.min())){const S=i.Pi.getLastRemoteSnapshotVersion(c).next((A=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a)));g.push(S)}return W.waitFor(g).next((()=>d.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,_,y))).next((()=>_))})).then((c=>(i.Ms=l,c)))}function RC(r,t,i){let a=Ht(),l=Ht();return i.forEach((c=>a=a.add(c))),t.getEntries(r,a).next((c=>{let d=Sr();return i.forEach(((g,_)=>{const y=c.get(g);_.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(g)),_.isNoDocument()&&_.version.isEqual(Ct.min())?(t.removeEntry(g,_.readTime),d=d.insert(g,_)):!y.isValidDocument()||_.version.compareTo(y.version)>0||_.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(_),d=d.insert(g,_)):ct(Qm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",_.version)})),{ks:d,qs:l}}))}function wC(r,t){const i=Dt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Vm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function CC(r,t){const i=Dt(r);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let l;return i.Pi.getTargetData(a,t).next((c=>c?(l=c,W.resolve(l)):i.Pi.allocateTargetId(a).next((d=>(l=new hs(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,l).next((()=>l)))))))})).then((a=>{const l=i.Ms.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function fm(r,t,i){const a=Dt(r),l=a.Ms.get(t),c=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",c,(d=>a.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!Co(d))throw d;ct(Qm,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(l.target)}function Kv(r,t,i){const a=Dt(r);let l=Ct.min(),c=Ht();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(_,y,S){const A=Dt(_),N=A.xs.get(S);return N!==void 0?W.resolve(A.Ms.get(N)):A.Pi.getTargetData(y,S)})(a,d,qi(t)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,g.targetId).next((_=>{c=_}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?l:Ct.min(),i?c:Ht()))).next((g=>(IC(a,d2(t),g),{documents:g,Qs:c})))))}function IC(r,t,i){let a=r.Os.get(t)||Ct.min();i.forEach(((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)})),r.Os.set(t,a)}class $v{constructor(){this.activeTargetIds=v2()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class DC{constructor(){this.Mo=new $v,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new $v,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class NC{Oo(t){}shutdown(){}}/**
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
 */const Zv="ConnectivityMonitor";class Jv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ct(Zv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ct(Zv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function dm(){return Mc===null?Mc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mc++,"0x"+Mc.toString(16)}/**
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
 */const Fd="RestConnection",OC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===Wc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,c){const d=dm(),g=this.zo(t,i.toUriEncodedString());ct(Fd,`Sending RPC '${t}' ${d}:`,g,a);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,l,c);const{host:y}=new URL(g),S=To(y);return this.Jo(t,g,_,a,S).then((A=>(ct(Fd,`Received RPC '${t}' ${d}: `,A),A)),(A=>{throw go(Fd,`RPC '${t}' ${d} failed with error: `,A,"url: ",g,"request:",a),A}))}Ho(t,i,a,l,c,d){return this.Go(t,i,a,l,c)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),a&&a.headers.forEach(((l,c)=>t[c]=l))}zo(t,i){const a=OC[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
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
 */class MC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const ln="WebChannelConnection";class VC extends xC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,c){const d=dm();return new Promise(((g,_)=>{const y=new cT;y.setWithCredentials(!0),y.listenOnce(hT.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case kc.NO_ERROR:const A=y.getResponseJson();ct(ln,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(A)),g(A);break;case kc.TIMEOUT:ct(ln,`RPC '${t}' ${d} timed out`),_(new dt(tt.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const N=y.getStatus();if(ct(ln,`RPC '${t}' ${d} failed with status:`,N,"response text:",y.getResponseText()),N>0){let Y=y.getResponseJson();Array.isArray(Y)&&(Y=Y[0]);const $=Y?.error;if($&&$.status&&$.message){const et=(function(ht){const Tt=ht.toLowerCase().replace(/_/g,"-");return Object.values(tt).indexOf(Tt)>=0?Tt:tt.UNKNOWN})($.status);_(new dt(et,$.message))}else _(new dt(tt.UNKNOWN,"Server responded with status "+y.getStatus()))}else _(new dt(tt.UNAVAILABLE,"Connection failed."));break;default:Rt(9055,{l_:t,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ct(ln,`RPC '${t}' ${d} completed.`)}}));const S=JSON.stringify(l);ct(ln,`RPC '${t}' ${d} sending request:`,l),y.send(i,"POST",S,a,15)}))}T_(t,i,a){const l=dm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=mT(),g=dT(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(_.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,i,a),_.encodeInitMessageHeaders=!0;const S=c.join("");ct(ln,`Creating RPC '${t}' stream ${l}: ${S}`,_);const A=d.createWebChannel(S,_);this.I_(A);let N=!1,Y=!1;const $=new MC({Yo:rt=>{Y?ct(ln,`Not sending because RPC '${t}' stream ${l} is closed:`,rt):(N||(ct(ln,`Opening RPC '${t}' stream ${l} transport.`),A.open(),N=!0),ct(ln,`RPC '${t}' stream ${l} sending:`,rt),A.send(rt))},Zo:()=>A.close()}),et=(rt,ht,Tt)=>{rt.listen(ht,(M=>{try{Tt(M)}catch(Ut){setTimeout((()=>{throw Ut}),0)}}))};return et(A,Ol.EventType.OPEN,(()=>{Y||(ct(ln,`RPC '${t}' stream ${l} transport opened.`),$.o_())})),et(A,Ol.EventType.CLOSE,(()=>{Y||(Y=!0,ct(ln,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(A))})),et(A,Ol.EventType.ERROR,(rt=>{Y||(Y=!0,go(ln,`RPC '${t}' stream ${l} transport errored. Name:`,rt.name,"Message:",rt.message),$.a_(new dt(tt.UNAVAILABLE,"The operation could not be completed")))})),et(A,Ol.EventType.MESSAGE,(rt=>{if(!Y){const ht=rt.data[0];Wt(!!ht,16349);const Tt=ht,M=Tt?.error||Tt[0]?.error;if(M){ct(ln,`RPC '${t}' stream ${l} received error:`,M);const Ut=M.status;let le=(function(b){const R=ke[b];if(R!==void 0)return XT(R)})(Ut),Nt=M.message;le===void 0&&(le=tt.INTERNAL,Nt="Unknown error status: "+Ut+" with message "+M.message),Y=!0,$.a_(new dt(le,Nt)),A.close()}else ct(ln,`RPC '${t}' stream ${l} received:`,ht),$.u_(ht)}})),et(g,fT.STAT_EVENT,(rt=>{rt.stat===em.PROXY?ct(ln,`RPC '${t}' stream ${l} detected buffering proxy`):rt.stat===em.NOPROXY&&ct(ln,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Gd(){return typeof document<"u"?document:null}/**
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
 */function bh(r){return new k2(r,!0)}/**
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
 */class o0{constructor(t,i,a=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&ct("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wv="PersistentStream";class l0{constructor(t,i,a,l,c,d,g,_){this.Mi=t,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new o0(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===tt.RESOURCE_EXHAUSTED?(Er(i.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===tt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{t((()=>{const l=new dt(tt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return ct(Wv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(ct(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UC extends l0{constructor(t,i,a,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=j2(this.serializer,t),a=(function(c){if(!("targetChange"in c))return Ct.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?Ct.min():d.readTime?Hi(d.readTime):Ct.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=hm(this.serializer),i.addTarget=(function(c,d){let g;const _=d.target;if(g=am(_)?{documents:F2(c,_)}:{query:G2(c,_).ft},g.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){g.resumeToken=$T(c,d.resumeToken);const y=lm(c,d.expectedCount);y!==null&&(g.expectedCount=y)}else if(d.snapshotVersion.compareTo(Ct.min())>0){g.readTime=sh(c,d.snapshotVersion.toTimestamp());const y=lm(c,d.expectedCount);y!==null&&(g.expectedCount=y)}return g})(this.serializer,t);const a=X2(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=hm(this.serializer),i.removeTarget=t,this.q_(i)}}class LC extends l0{constructor(t,i,a,l,c,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Wt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Wt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Wt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=H2(t.writeResults,t.commitTime),a=Hi(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=hm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>q2(this.serializer,a)))};this.q_(i)}}/**
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
 */class PC{}class kC extends PC{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new dt(tt.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(t,um(i,a),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new dt(tt.UNKNOWN,c.toString())}))}Ho(t,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,g])=>this.connection.Ho(t,um(i,a),l,d,g,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new dt(tt.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class zC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Er(i),this.aa=!1):ct("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const la="RemoteStore";class BC{constructor(t,i,a,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ha(this)&&(ct(la,"Restarting streams for network reachability change."),await(async function(_){const y=Dt(_);y.Ea.add(4),await su(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Rh(y)})(this))}))})),this.Ra=new zC(a,l)}}async function Rh(r){if(ha(r))for(const t of r.da)await t(!0)}async function su(r){for(const t of r.da)await t(!1)}function u0(r,t){const i=Dt(r);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Jm(i)?Zm(i):Io(i).O_()&&$m(i,t))}function Km(r,t){const i=Dt(r),a=Io(i);i.Ia.delete(t),a.O_()&&c0(i,t),i.Ia.size===0&&(a.O_()?a.L_():ha(i)&&i.Ra.set("Unknown"))}function $m(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ct.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Io(r).Y_(t)}function c0(r,t){r.Va.Ue(t),Io(r).Z_(t)}function Zm(r){r.Va=new V2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Io(r).start(),r.Ra.ua()}function Jm(r){return ha(r)&&!Io(r).x_()&&r.Ia.size>0}function ha(r){return Dt(r).Ea.size===0}function h0(r){r.Va=void 0}async function jC(r){r.Ra.set("Online")}async function qC(r){r.Ia.forEach(((t,i)=>{$m(r,t)}))}async function HC(r,t){h0(r),Jm(r)?(r.Ra.ha(t),Zm(r)):r.Ra.set("Unknown")}async function FC(r,t,i){if(r.Ra.set("Online"),t instanceof KT&&t.state===2&&t.cause)try{await(async function(l,c){const d=c.cause;for(const g of c.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,d),l.Ia.delete(g),l.Va.removeTarget(g))})(r,t)}catch(a){ct(la,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await oh(r,a)}else if(t instanceof qc?r.Va.Ze(t):t instanceof QT?r.Va.st(t):r.Va.tt(t),!i.isEqual(Ct.min()))try{const a=await a0(r.localStore);i.compareTo(a)>=0&&await(function(c,d){const g=c.Va.Tt(d);return g.targetChanges.forEach(((_,y)=>{if(_.resumeToken.approximateByteSize()>0){const S=c.Ia.get(y);S&&c.Ia.set(y,S.withResumeToken(_.resumeToken,d))}})),g.targetMismatches.forEach(((_,y)=>{const S=c.Ia.get(_);if(!S)return;c.Ia.set(_,S.withResumeToken(sn.EMPTY_BYTE_STRING,S.snapshotVersion)),c0(c,_);const A=new hs(S.target,_,y,S.sequenceNumber);$m(c,A)})),c.remoteSyncer.applyRemoteEvent(g)})(r,i)}catch(a){ct(la,"Failed to raise snapshot:",a),await oh(r,a)}}async function oh(r,t,i){if(!Co(t))throw t;r.Ea.add(1),await su(r),r.Ra.set("Offline"),i||(i=()=>a0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ct(la,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await Rh(r)}))}function f0(r,t){return t().catch((i=>oh(r,i,t)))}async function wh(r){const t=Dt(r),i=Ss(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Vm;for(;GC(t);)try{const l=await wC(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,YC(t,l)}catch(l){await oh(t,l)}d0(t)&&m0(t)}function GC(r){return ha(r)&&r.Ta.length<10}function YC(r,t){r.Ta.push(t);const i=Ss(r);i.O_()&&i.X_&&i.ea(t.mutations)}function d0(r){return ha(r)&&!Ss(r).x_()&&r.Ta.length>0}function m0(r){Ss(r).start()}async function XC(r){Ss(r).ra()}async function QC(r){const t=Ss(r);for(const i of r.Ta)t.ea(i.mutations)}async function KC(r,t,i){const a=r.Ta.shift(),l=qm.from(a,t,i);await f0(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await wh(r)}async function $C(r,t){t&&Ss(r).X_&&await(async function(a,l){if((function(d){return O2(d)&&d!==tt.ABORTED})(l.code)){const c=a.Ta.shift();Ss(a).B_(),await f0(a,(()=>a.remoteSyncer.rejectFailedWrite(c.batchId,l))),await wh(a)}})(r,t),d0(r)&&m0(r)}async function tE(r,t){const i=Dt(r);i.asyncQueue.verifyOperationInProgress(),ct(la,"RemoteStore received new credentials");const a=ha(i);i.Ea.add(3),await su(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await Rh(i)}async function ZC(r,t){const i=Dt(r);t?(i.Ea.delete(2),await Rh(i)):t||(i.Ea.add(2),await su(i),i.Ra.set("Unknown"))}function Io(r){return r.ma||(r.ma=(function(i,a,l){const c=Dt(i);return c.sa(),new UC(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:jC.bind(null,r),t_:qC.bind(null,r),r_:HC.bind(null,r),H_:FC.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Jm(r)?Zm(r):r.Ra.set("Unknown")):(await r.ma.stop(),h0(r))}))),r.ma}function Ss(r){return r.fa||(r.fa=(function(i,a,l){const c=Dt(i);return c.sa(),new LC(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:XC.bind(null,r),r_:$C.bind(null,r),ta:QC.bind(null,r),na:KC.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await wh(r)):(await r.fa.stop(),r.Ta.length>0&&(ct(la,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Wm{constructor(t,i,a,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,c){const d=Date.now()+a,g=new Wm(t,i,d,l,c);return g.start(a),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tg(r,t){if(Er("AsyncQueue",`${t}: ${r}`),Co(r))return new dt(tt.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class co{static emptySet(t){return new co(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||Et.comparator(i.key,a.key):(i,a)=>Et.comparator(i.key,a.key),this.keyedMap=xl(),this.sortedSet=new Se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof co)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new co;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
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
 */class eE{constructor(){this.ga=new Se(Et.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):Rt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class Eo{constructor(t,i,a,l,c,d,g,_,y){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=g,this.excludesMetadataChanges=_,this.hasCachedResults=y}static fromInitialDocuments(t,i,a,l,c){const d=[];return i.forEach((g=>{d.push({type:0,doc:g})})),new Eo(t,i,co.emptySet(i),d,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==a[l].type||!i[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
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
 */class JC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class WC{constructor(){this.queries=nE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=Dt(i),c=l.queries;l.queries=nE(),c.forEach(((d,g)=>{for(const _ of g.Sa)_.onError(a)}))})(this,new dt(tt.ABORTED,"Firestore shutting down"))}}function nE(){return new ca((r=>UT(r)),vh)}async function g0(r,t){const i=Dt(r);let a=3;const l=t.query;let c=i.queries.get(l);c?!c.ba()&&t.Da()&&(a=2):(c=new JC,a=t.Da()?0:1);try{switch(a){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(d){const g=tg(d,`Initialization of query '${io(t.query)}' failed`);return void t.onError(g)}i.queries.set(l,c),c.Sa.push(t),t.va(i.onlineState),c.wa&&t.Fa(c.wa)&&eg(i)}async function p0(r,t){const i=Dt(r),a=t.query;let l=3;const c=i.queries.get(a);if(c){const d=c.Sa.indexOf(t);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function tI(r,t){const i=Dt(r);let a=!1;for(const l of t){const c=l.query,d=i.queries.get(c);if(d){for(const g of d.Sa)g.Fa(l)&&(a=!0);d.wa=l}}a&&eg(i)}function eI(r,t,i){const a=Dt(r),l=a.queries.get(t);if(l)for(const c of l.Sa)c.onError(i);a.queries.delete(t)}function eg(r){r.Ca.forEach((t=>{t.next()}))}var mm,iE;(iE=mm||(mm={})).Ma="default",iE.Cache="cache";class y0{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new Eo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=Eo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==mm.Cache}}/**
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
 */class _0{constructor(t){this.key=t}}class v0{constructor(t){this.key=t}}class nI{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ht(),this.mutatedKeys=Ht(),this.eu=LT(t),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new eE,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,d=l,g=!1;const _=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((S,A)=>{const N=l.get(S),Y=Eh(this.query,A)?A:null,$=!!N&&this.mutatedKeys.has(N.key),et=!!Y&&(Y.hasLocalMutations||this.mutatedKeys.has(Y.key)&&Y.hasCommittedMutations);let rt=!1;N&&Y?N.data.isEqual(Y.data)?$!==et&&(a.track({type:3,doc:Y}),rt=!0):this.su(N,Y)||(a.track({type:2,doc:Y}),rt=!0,(_&&this.eu(Y,_)>0||y&&this.eu(Y,y)<0)&&(g=!0)):!N&&Y?(a.track({type:0,doc:Y}),rt=!0):N&&!Y&&(a.track({type:1,doc:N}),rt=!0,(_||y)&&(g=!0)),rt&&(Y?(d=d.add(Y),c=et?c.add(S):c.delete(S)):(d=d.delete(S),c=c.delete(S)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const S=this.query.limitType==="F"?d.last():d.first();d=d.delete(S.key),c=c.delete(S.key),a.track({type:1,doc:S})}return{tu:d,iu:a,Cs:g,mutatedKeys:c}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((S,A)=>(function(Y,$){const et=rt=>{switch(rt){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Rt(20277,{Rt:rt})}};return et(Y)-et($)})(S.type,A.type)||this.eu(S.doc,A.doc))),this.ou(a),l=l??!1;const g=i&&!l?this._u():[],_=this.Xa.size===0&&this.current&&!l?1:0,y=_!==this.Za;return this.Za=_,d.length!==0||y?{snapshot:new Eo(this.query,t.tu,c,d,t.mutatedKeys,_===0,y,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new eE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ht(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new v0(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new _0(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Ht();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ng="SyncEngine";class iI{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class rI{constructor(t){this.key=t,this.hu=!1}}class sI{constructor(t,i,a,l,c,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ca((g=>UT(g)),vh),this.Iu=new Map,this.Eu=new Set,this.du=new Se(Et.comparator),this.Au=new Map,this.Ru=new Gm,this.Vu={},this.mu=new Map,this.fu=vo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function aI(r,t,i=!0){const a=R0(r);let l;const c=a.Tu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await E0(a,t,i,!0),l}async function oI(r,t){const i=R0(r);await E0(i,t,!0,!1)}async function E0(r,t,i,a){const l=await CC(r.localStore,qi(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,i);let g;return a&&(g=await lI(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&i&&u0(r.remoteStore,l),g}async function lI(r,t,i,a,l){r.pu=(A,N,Y)=>(async function(et,rt,ht,Tt){let M=rt.view.ru(ht);M.Cs&&(M=await Kv(et.localStore,rt.query,!1).then((({documents:I})=>rt.view.ru(I,M))));const Ut=Tt&&Tt.targetChanges.get(rt.targetId),le=Tt&&Tt.targetMismatches.get(rt.targetId)!=null,Nt=rt.view.applyChanges(M,et.isPrimaryClient,Ut,le);return sE(et,rt.targetId,Nt.au),Nt.snapshot})(r,A,N,Y);const c=await Kv(r.localStore,t,!0),d=new nI(t,c.Qs),g=d.ru(c.documents),_=ru.createSynthesizedTargetChangeForCurrentChange(i,a&&r.onlineState!=="Offline",l),y=d.applyChanges(g,r.isPrimaryClient,_);sE(r,i,y.au);const S=new iI(t,i,d);return r.Tu.set(t,S),r.Iu.has(i)?r.Iu.get(i).push(t):r.Iu.set(i,[t]),y.snapshot}async function uI(r,t,i){const a=Dt(r),l=a.Tu.get(t),c=a.Iu.get(l.targetId);if(c.length>1)return a.Iu.set(l.targetId,c.filter((d=>!vh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await fm(a.localStore,l.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(l.targetId),i&&Km(a.remoteStore,l.targetId),gm(a,l.targetId)})).catch(wo)):(gm(a,l.targetId),await fm(a.localStore,l.targetId,!0))}async function cI(r,t){const i=Dt(r),a=i.Tu.get(t),l=i.Iu.get(a.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Km(i.remoteStore,a.targetId))}async function hI(r,t,i){const a=_I(r);try{const l=await(function(d,g){const _=Dt(d),y=ge.now(),S=g.reduce(((Y,$)=>Y.add($.key)),Ht());let A,N;return _.persistence.runTransaction("Locally write mutations","readwrite",(Y=>{let $=Sr(),et=Ht();return _.Ns.getEntries(Y,S).next((rt=>{$=rt,$.forEach(((ht,Tt)=>{Tt.isValidDocument()||(et=et.add(ht))}))})).next((()=>_.localDocuments.getOverlayedDocuments(Y,$))).next((rt=>{A=rt;const ht=[];for(const Tt of g){const M=w2(Tt,A.get(Tt.key).overlayedDocument);M!=null&&ht.push(new ws(Tt.key,M,IT(M.value.mapValue),pi.exists(!0)))}return _.mutationQueue.addMutationBatch(Y,y,ht,g)})).next((rt=>{N=rt;const ht=rt.applyToLocalDocumentSet(A,et);return _.documentOverlayCache.saveOverlays(Y,rt.batchId,ht)}))})).then((()=>({batchId:N.batchId,changes:kT(A)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),(function(d,g,_){let y=d.Vu[d.currentUser.toKey()];y||(y=new Se(qt)),y=y.insert(g,_),d.Vu[d.currentUser.toKey()]=y})(a,l.batchId,i),await au(a,l.changes),await wh(a.remoteStore)}catch(l){const c=tg(l,"Failed to persist write");i.reject(c)}}async function T0(r,t){const i=Dt(r);try{const a=await bC(i.localStore,t);t.targetChanges.forEach(((l,c)=>{const d=i.Au.get(c);d&&(Wt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?Wt(d.hu,14607):l.removedDocuments.size>0&&(Wt(d.hu,42227),d.hu=!1))})),await au(i,a,t)}catch(a){await wo(a)}}function rE(r,t,i){const a=Dt(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((c,d)=>{const g=d.view.va(t);g.snapshot&&l.push(g.snapshot)})),(function(d,g){const _=Dt(d);_.onlineState=g;let y=!1;_.queries.forEach(((S,A)=>{for(const N of A.Sa)N.va(g)&&(y=!0)})),y&&eg(_)})(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function fI(r,t,i){const a=Dt(r);a.sharedClientState.updateQueryState(t,"rejected",i);const l=a.Au.get(t),c=l&&l.key;if(c){let d=new Se(Et.comparator);d=d.insert(c,cn.newNoDocument(c,Ct.min()));const g=Ht().add(c),_=new Ah(Ct.min(),new Map,new Se(qt),d,g);await T0(a,_),a.du=a.du.remove(c),a.Au.delete(t),ig(a)}else await fm(a.localStore,t,!1).then((()=>gm(a,t,i))).catch(wo)}async function dI(r,t){const i=Dt(r),a=t.batch.batchId;try{const l=await AC(i.localStore,t);A0(i,a,null),S0(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await au(i,l)}catch(l){await wo(l)}}async function mI(r,t,i){const a=Dt(r);try{const l=await(function(d,g){const _=Dt(d);return _.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let S;return _.mutationQueue.lookupMutationBatch(y,g).next((A=>(Wt(A!==null,37113),S=A.keys(),_.mutationQueue.removeMutationBatch(y,A)))).next((()=>_.mutationQueue.performConsistencyCheck(y))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(y,S,g))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,S))).next((()=>_.localDocuments.getDocuments(y,S)))}))})(a.localStore,t);A0(a,t,i),S0(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await au(a,l)}catch(l){await wo(l)}}function S0(r,t){(r.mu.get(t)||[]).forEach((i=>{i.resolve()})),r.mu.delete(t)}function A0(r,t,i){const a=Dt(r);let l=a.Vu[a.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}function gm(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const a of r.Iu.get(t))r.Tu.delete(a),i&&r.Pu.yu(a,i);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((a=>{r.Ru.containsKey(a)||b0(r,a)}))}function b0(r,t){r.Eu.delete(t.path.canonicalString());const i=r.du.get(t);i!==null&&(Km(r.remoteStore,i),r.du=r.du.remove(t),r.Au.delete(i),ig(r))}function sE(r,t,i){for(const a of i)a instanceof _0?(r.Ru.addReference(a.key,t),gI(r,a)):a instanceof v0?(ct(ng,"Document no longer in limbo: "+a.key),r.Ru.removeReference(a.key,t),r.Ru.containsKey(a.key)||b0(r,a.key)):Rt(19791,{wu:a})}function gI(r,t){const i=t.key,a=i.path.canonicalString();r.du.get(i)||r.Eu.has(a)||(ct(ng,"New document in limbo: "+i),r.Eu.add(a),ig(r))}function ig(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const i=new Et(me.fromString(t)),a=r.fu.next();r.Au.set(a,new rI(i)),r.du=r.du.insert(i,a),u0(r.remoteStore,new hs(qi(zm(i.path)),a,"TargetPurposeLimboResolution",gh.ce))}}async function au(r,t,i){const a=Dt(r),l=[],c=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((g,_)=>{d.push(a.pu(_,t,i).then((y=>{if((y||i)&&a.isPrimaryClient){const S=y?!y.fromCache:i?.targetChanges.get(_.targetId)?.current;a.sharedClientState.updateQueryState(_.targetId,S?"current":"not-current")}if(y){l.push(y);const S=Xm.As(_.targetId,y);c.push(S)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(_,y){const S=Dt(_);try{await S.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>W.forEach(y,(N=>W.forEach(N.Es,(Y=>S.persistence.referenceDelegate.addReference(A,N.targetId,Y))).next((()=>W.forEach(N.ds,(Y=>S.persistence.referenceDelegate.removeReference(A,N.targetId,Y)))))))))}catch(A){if(!Co(A))throw A;ct(Qm,"Failed to update sequence numbers: "+A)}for(const A of y){const N=A.targetId;if(!A.fromCache){const Y=S.Ms.get(N),$=Y.snapshotVersion,et=Y.withLastLimboFreeSnapshotVersion($);S.Ms=S.Ms.insert(N,et)}}})(a.localStore,c))}async function pI(r,t){const i=Dt(r);if(!i.currentUser.isEqual(t)){ct(ng,"User change. New user:",t.toKey());const a=await s0(i.localStore,t);i.currentUser=t,(function(c,d){c.mu.forEach((g=>{g.forEach((_=>{_.reject(new dt(tt.CANCELLED,d))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await au(i,a.Ls)}}function yI(r,t){const i=Dt(r),a=i.Au.get(t);if(a&&a.hu)return Ht().add(a.key);{let l=Ht();const c=i.Iu.get(t);if(!c)return l;for(const d of c){const g=i.Tu.get(d);l=l.unionWith(g.view.nu)}return l}}function R0(r){const t=Dt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fI.bind(null,t),t.Pu.H_=tI.bind(null,t.eventManager),t.Pu.yu=eI.bind(null,t.eventManager),t}function _I(r){const t=Dt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mI.bind(null,t),t}class lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return SC(this.persistence,new vC,t.initialUser,this.serializer)}Cu(t){return new r0(Ym.mi,this.serializer)}Du(t){return new DC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lh.provider={build:()=>new lh};class vI extends lh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Wt(this.persistence.referenceDelegate instanceof ah,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new rC(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new r0((a=>ah.mi(a,i)),this.serializer)}}class pm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>rE(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=pI.bind(null,this.syncEngine),await ZC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new WC})()}createDatastore(t){const i=bh(t.databaseInfo.databaseId),a=(function(c){return new VC(c)})(t.databaseInfo);return(function(c,d,g,_){return new kC(c,d,g,_)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,l,c,d,g){return new BC(a,l,c,d,g)})(this.localStore,this.datastore,t.asyncQueue,(i=>rE(this.syncEngine,i,0)),(function(){return Jv.v()?new Jv:new NC})())}createSyncEngine(t,i){return(function(l,c,d,g,_,y,S){const A=new sI(l,c,d,g,_,y);return S&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=Dt(i);ct(la,"RemoteStore shutting down."),a.Ea.add(5),await su(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}pm.provider={build:()=>new pm};/**
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
 */class w0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Er("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
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
 */const As="FirestoreClient";class EI{constructor(t,i,a,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=un.UNAUTHENTICATED,this.clientId=xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,(async d=>{ct(As,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(ct(As,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=tg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Yd(r,t){r.asyncQueue.verifyOperationInProgress(),ct(As,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener((async l=>{a.isEqual(l)||(await s0(t.localStore,l),a=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function aE(r,t){r.asyncQueue.verifyOperationInProgress();const i=await TI(r);ct(As,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener((a=>tE(t.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,l)=>tE(t.remoteStore,l))),r._onlineComponents=t}async function TI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ct(As,"Using user provided OfflineComponentProvider");try{await Yd(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(l){return l.name==="FirebaseError"?l.code===tt.FAILED_PRECONDITION||l.code===tt.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;go("Error using user provided cache. Falling back to memory cache: "+i),await Yd(r,new lh)}}else ct(As,"Using default OfflineComponentProvider"),await Yd(r,new vI(void 0));return r._offlineComponents}async function C0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ct(As,"Using user provided OnlineComponentProvider"),await aE(r,r._uninitializedComponentsProvider._online)):(ct(As,"Using default OnlineComponentProvider"),await aE(r,new pm))),r._onlineComponents}function SI(r){return C0(r).then((t=>t.syncEngine))}async function I0(r){const t=await C0(r),i=t.eventManager;return i.onListen=aI.bind(null,t.syncEngine),i.onUnlisten=uI.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=oI.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=cI.bind(null,t.syncEngine),i}function AI(r,t,i={}){const a=new yr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,_,y){const S=new w0({next:N=>{S.Nu(),d.enqueueAndForget((()=>p0(c,A)));const Y=N.docs.has(g);!Y&&N.fromCache?y.reject(new dt(tt.UNAVAILABLE,"Failed to get document because the client is offline.")):Y&&N.fromCache&&_&&_.source==="server"?y.reject(new dt(tt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(N)},error:N=>y.reject(N)}),A=new y0(zm(g.path),S,{includeMetadataChanges:!0,qa:!0});return g0(c,A)})(await I0(r),r.asyncQueue,t,i,a))),a.promise}function bI(r,t,i={}){const a=new yr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,g,_,y){const S=new w0({next:N=>{S.Nu(),d.enqueueAndForget((()=>p0(c,A))),N.fromCache&&_.source==="server"?y.reject(new dt(tt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(N)},error:N=>y.reject(N)}),A=new y0(g,S,{includeMetadataChanges:!0,qa:!0});return g0(c,A)})(await I0(r),r.asyncQueue,t,i,a))),a.promise}/**
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
 */const N0="firestore.googleapis.com",lE=!0;class uE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new dt(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N0,this.ssl=lE}else this.host=t.host,this.ssl=t.ssl??lE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=i0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nC)throw new dt(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D0(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new dt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ch{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new Dw;switch(a.type){case"firstParty":return new Mw(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=oE.get(i);a&&(ct("ComponentProvider","Removing Datastore"),oE.delete(i),a.terminate())})(this),Promise.resolve()}}function RI(r,t,i,a={}){r=Tr(r,Ch);const l=To(t),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${i}`;l&&(TE(`https://${g}`),SE("Firestore",!0)),c.host!==N0&&c.host!==g&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:g,ssl:l,emulatorOptions:a};if(!ra(_,d)&&(r._setSettings(_),a.mockUserToken)){let y,S;if(typeof a.mockUserToken=="string")y=a.mockUserToken,S=un.MOCK_USER;else{y=HA(a.mockUserToken,r._app?.options.projectId);const A=a.mockUserToken.sub||a.mockUserToken.user_id;if(!A)throw new dt(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new un(A)}r._authCredentials=new Nw(new pT(y,S))}}/**
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
 */class Ih{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Ih(this.firestore,t,this._query)}}class He{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new He(this.firestore,t,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(nu(i,He._jsonSchema))return new He(t,a||null,new Et(me.fromString(i.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:ze("string",He._jsonSchemaVersion),referencePath:ze("string")};class ys extends Ih{constructor(t,i,a){super(t,i,zm(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new He(this.firestore,null,new Et(t))}withConverter(t){return new ys(this.firestore,t,this._path)}}function ym(r,t,...i){if(r=rn(r),yT("collection","path",t),r instanceof Ch){const a=me.fromString(t,...i);return Av(a),new ys(r,null,a)}{if(!(r instanceof He||r instanceof ys))throw new dt(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(me.fromString(t,...i));return Av(a),new ys(r.firestore,null,a)}}function $l(r,t,...i){if(r=rn(r),arguments.length===1&&(t=xm.newId()),yT("doc","path",t),r instanceof Ch){const a=me.fromString(t,...i);return Sv(a),new He(r,null,new Et(a))}{if(!(r instanceof He||r instanceof ys))throw new dt(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(me.fromString(t,...i));return Sv(a),new He(r.firestore,r instanceof ys?r.converter:null,new Et(a))}}/**
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
 */const cE="AsyncQueue";class hE{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new o0(this,"async_queue_retry"),this._c=()=>{const a=Gd();a&&ct(cE,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Gd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Gd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new yr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Co(t))throw t;ct(cE,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,Er("INTERNAL UNHANDLED ERROR: ",fE(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=Wm.createAndSchedule(this,t,i,a,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&Rt(47125,{Pc:fE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function fE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Do extends Ch{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new hE,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hE(t),this._firestoreClient=void 0,await t}}}function wI(r,t){const i=typeof r=="object"?r:wE(),a=typeof r=="string"?r:Wc,l=Sm(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=jA("firestore");c&&RI(l,...c)}return l}function rg(r){if(r._terminated)throw new dt(tt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||CI(r),r._firestoreClient}function CI(r){const t=r._freezeSettings(),i=(function(l,c,d,g){return new $w(l,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,D0(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new EI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class ni{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ni(sn.fromBase64String(t))}catch(i){throw new dt(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new ni(sn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ni._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nu(t,ni._jsonSchema))return ni.fromBase64String(t.bytes)}}ni._jsonSchemaVersion="firestore/bytes/1.0",ni._jsonSchema={type:ze("string",ni._jsonSchemaVersion),bytes:ze("string")};/**
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
 */class Dh{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new dt(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Fi{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new dt(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new dt(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return qt(this._lat,t._lat)||qt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fi._jsonSchemaVersion}}static fromJSON(t){if(nu(t,Fi._jsonSchema))return new Fi(t.latitude,t.longitude)}}Fi._jsonSchemaVersion="firestore/geoPoint/1.0",Fi._jsonSchema={type:ze("string",Fi._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
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
 */class Gi{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Gi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nu(t,Gi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Gi(t.vectorValues);throw new dt(tt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gi._jsonSchemaVersion="firestore/vectorValue/1.0",Gi._jsonSchema={type:ze("string",Gi._jsonSchemaVersion),vectorValues:ze("object")};/**
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
 */const II=/^__.*__$/;class DI{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new ws(t,this.data,this.fieldMask,i,this.fieldTransforms):new iu(t,this.data,i,this.fieldTransforms)}}class O0{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new ws(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function x0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Rt(40011,{Ac:r})}}class ag{constructor(t,i,a,l,c,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ag({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return uh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(x0(this.Ac)&&II.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class NI{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||bh(t)}Cc(t,i,a,l=!1){return new ag({Ac:t,methodName:i,Dc:a,path:nn.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M0(r){const t=r._freezeSettings(),i=bh(r._databaseId);return new NI(r._databaseId,!!t.ignoreUndefinedProperties,i)}function OI(r,t,i,a,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,t,i,l);og("Data must be an object, but it was:",d,a);const g=V0(a,d);let _,y;if(c.merge)_=new kn(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const S=[];for(const A of c.mergeFields){const N=_m(t,A,i);if(!d.contains(N))throw new dt(tt.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);L0(S,N)||S.push(N)}_=new kn(S),y=d.fieldTransforms.filter((A=>_.covers(A.field)))}else _=null,y=d.fieldTransforms;return new DI(new Rn(g),_,y)}class Nh extends sg{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Nh}}function xI(r,t,i,a){const l=r.Cc(1,t,i);og("Data must be an object, but it was:",l,a);const c=[],d=Rn.empty();Rs(a,((_,y)=>{const S=lg(t,_,i);y=rn(y);const A=l.yc(S);if(y instanceof Nh)c.push(S);else{const N=Oh(y,A);N!=null&&(c.push(S),d.set(S,N))}}));const g=new kn(c);return new O0(d,g,l.fieldTransforms)}function MI(r,t,i,a,l,c){const d=r.Cc(1,t,i),g=[_m(t,a,i)],_=[l];if(c.length%2!=0)throw new dt(tt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<c.length;N+=2)g.push(_m(t,c[N])),_.push(c[N+1]);const y=[],S=Rn.empty();for(let N=g.length-1;N>=0;--N)if(!L0(y,g[N])){const Y=g[N];let $=_[N];$=rn($);const et=d.yc(Y);if($ instanceof Nh)y.push(Y);else{const rt=Oh($,et);rt!=null&&(y.push(Y),S.set(Y,rt))}}const A=new kn(y);return new O0(S,A,d.fieldTransforms)}function Oh(r,t){if(U0(r=rn(r)))return og("Unsupported field value:",t,r),V0(r,t);if(r instanceof sg)return(function(a,l){if(!x0(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,l){const c=[];let d=0;for(const g of a){let _=Oh(g,l.wc(d));_==null&&(_={nullValue:"NULL_VALUE"}),c.push(_),d++}return{arrayValue:{values:c}}})(r,t)}return(function(a,l){if((a=rn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return E2(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=ge.fromDate(a);return{timestampValue:sh(l.serializer,c)}}if(a instanceof ge){const c=new ge(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:sh(l.serializer,c)}}if(a instanceof Fi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof ni)return{bytesValue:$T(l.serializer,a._byteString)};if(a instanceof He){const c=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Fm(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof Gi)return(function(d,g){return{mapValue:{fields:{[wT]:{stringValue:CT},[th]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw g.Sc("VectorValues must only contain numeric values.");return Bm(g.serializer,y)}))}}}}}})(a,l);throw l.Sc(`Unsupported field value: ${Mm(a)}`)})(r,t)}function V0(r,t){const i={};return ET(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(r,((a,l)=>{const c=Oh(l,t.mc(a));c!=null&&(i[a]=c)})),{mapValue:{fields:i}}}function U0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ge||r instanceof Fi||r instanceof ni||r instanceof He||r instanceof sg||r instanceof Gi)}function og(r,t,i){if(!U0(i)||!_T(i)){const a=Mm(i);throw a==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+a)}}function _m(r,t,i){if((t=rn(t))instanceof Dh)return t._internalPath;if(typeof t=="string")return lg(r,t);throw uh("Field path arguments must be of type string or ",r,!1,void 0,i)}const VI=new RegExp("[~\\*/\\[\\]]");function lg(r,t,i){if(t.search(VI)>=0)throw uh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new Dh(...t.split("."))._internalPath}catch{throw uh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function uh(r,t,i,a,l){const c=a&&!a.isEmpty(),d=l!==void 0;let g=`Function ${t}() called with invalid data`;i&&(g+=" (via `toFirestore()`)"),g+=". ";let _="";return(c||d)&&(_+=" (found",c&&(_+=` in field ${a}`),d&&(_+=` in document ${l}`),_+=")"),new dt(tt.INVALID_ARGUMENT,g+r+_)}function L0(r,t){return r.some((i=>i.isEqual(t)))}/**
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
 */class P0{constructor(t,i,a,l,c){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new UI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(k0("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class UI extends P0{data(){return super.data()}}function k0(r,t){return typeof t=="string"?lg(r,t):t instanceof Dh?t._internalPath:t._delegate._internalPath}/**
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
 */function LI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new dt(tt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PI{convertValue(t,i="none"){switch(Ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Oe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(Es(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Rt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return Rs(t,((l,c)=>{a[l]=this.convertValue(c,i)})),a}convertVectorValue(t){const i=t.fields?.[th].arrayValue?.values?.map((a=>Oe(a.doubleValue)));return new Gi(i)}convertGeoPoint(t){return new Fi(Oe(t.latitude),Oe(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=yh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(Gl(t));default:return null}}convertTimestamp(t){const i=vs(t);return new ge(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=me.fromString(t);Wt(n0(a),9688,{name:t});const l=new Yl(a.get(1),a.get(3)),c=new Et(a.popFirst(5));return l.isEqual(i)||Er(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function kI(r,t,i){let a;return a=r?r.toFirestore(t):t,a}class Vl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ia extends P0{constructor(t,i,a,l,c,d){super(t,i,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(k0("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(tt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=ia._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}ia._jsonSchemaVersion="firestore/documentSnapshot/1.0",ia._jsonSchema={type:ze("string",ia._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Hc extends ia{data(t={}){return super.data(t)}}class ho{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new Vl(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new Hc(this._firestore,this._userDataWriter,a.key,a,new Vl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new dt(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((g=>{const _=new Hc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Vl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:_,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const _=new Hc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Vl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,S=-1;return g.type!==0&&(y=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),S=d.indexOf(g.doc.key)),{type:zI(g.type),doc:_,oldIndex:y,newIndex:S}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(tt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ho._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function zI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Rt(61501,{type:r})}}/**
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
 */function BI(r){r=Tr(r,He);const t=Tr(r.firestore,Do);return AI(rg(t),r._key).then((i=>HI(t,r,i)))}ho._jsonSchemaVersion="firestore/querySnapshot/1.0",ho._jsonSchema={type:ze("string",ho._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class z0 extends PI{constructor(t){super(),this.firestore=t}convertBytes(t){return new ni(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new He(this.firestore,null,i)}}function B0(r){r=Tr(r,Ih);const t=Tr(r.firestore,Do),i=rg(t),a=new z0(t);return LI(r._query),bI(i,r._query).then((l=>new ho(t,a,r,l)))}function j0(r,t,i,...a){r=Tr(r,He);const l=Tr(r.firestore,Do),c=M0(l);let d;return d=typeof(t=rn(t))=="string"||t instanceof Dh?MI(c,"updateDoc",r._key,t,i,a):xI(c,"updateDoc",r._key,t),ug(l,[d.toMutation(r._key,pi.exists(!0))])}function jI(r){return ug(Tr(r.firestore,Do),[new jm(r._key,pi.none())])}function qI(r,t){const i=Tr(r.firestore,Do),a=$l(r),l=kI(r.converter,t);return ug(i,[OI(M0(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,pi.exists(!1))]).then((()=>a))}function ug(r,t){return(function(a,l){const c=new yr;return a.asyncQueue.enqueueAndForget((async()=>hI(await SI(a),l,c))),c.promise})(rg(r),t)}function HI(r,t,i){const a=i.docs.get(t._key),l=new z0(r);return new ia(r,l,t._key,a,new Vl(i.hasPendingWrites,i.fromCache),t.converter)}(function(t,i=!0){(function(l){Ro=l})(So),fo(new sa("firestore",((a,{instanceIdentifier:l,options:c})=>{const d=a.getProvider("app").getImmediate(),g=new Do(new Ow(a.getProvider("auth-internal")),new Vw(d,a.getProvider("app-check-internal")),(function(y,S){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new dt(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yl(y.options.projectId,S)})(d,l),d);return c={useFetchStreams:i,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),ms(_v,vv,t),ms(_v,vv,"esm2020")})();var FI="firebase",GI="12.4.0";/**
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
 */ms(FI,GI,"app");const YI={apiKey:"AIzaSyAYw6oBVlkecGJlAZzuCZlruBCSeFsPuuM",authDomain:"poklona-a8530.firebaseapp.com",projectId:"poklona-a8530",storageBucket:"poklona-a8530.firebasestorage.app",messagingSenderId:"396446466261",appId:"1:396446466261:web:9119f5e342138a4319625c"},q0=RE(YI),xh=Cw(q0),na=wI(q0);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QI=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,a)=>a?a.toUpperCase():i.toLowerCase()),dE=r=>{const t=QI(r);return t.charAt(0).toUpperCase()+t.slice(1)},H0=(...r)=>r.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim(),KI=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $I={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=ce.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:d,...g},_)=>ce.createElement("svg",{ref:_,...$I,width:t,height:t,stroke:r,strokeWidth:a?Number(i)*24/Number(t):i,className:H0("lucide",l),...!c&&!KI(g)&&{"aria-hidden":"true"},...g},[...d.map(([y,S])=>ce.createElement(y,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=(r,t)=>{const i=ce.forwardRef(({className:a,...l},c)=>ce.createElement(ZI,{ref:c,iconNode:t,className:H0(`lucide-${XI(dE(r))}`,`lucide-${r}`,a),...l}));return i.displayName=dE(r),i};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],WI=Cs("circle-check-big",JI);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],F0=Cs("gift",tD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],nD=Cs("lock",eD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],rD=Cs("log-out",iD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],aD=Cs("plus",sD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lD=Cs("settings",oD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],cD=Cs("square-pen",uD);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],fD=Cs("trash-2",hD);function Mh({SIM_RESOLUTION:r=64,DYE_RESOLUTION:t=512,CAPTURE_RESOLUTION:i=256,DENSITY_DISSIPATION:a=4,VELOCITY_DISSIPATION:l=2.5,PRESSURE:c=.1,PRESSURE_ITERATIONS:d=10,CURL:g=2,SPLAT_RADIUS:_=.15,SPLAT_FORCE:y=4e3,SHADING:S=!1,COLOR_UPDATE_SPEED:A=5,BACK_COLOR:N={r:.5,g:0,b:0},TRANSPARENT:Y=!0}){const $=ce.useRef(null);return ce.useEffect(()=>{const et=$.current;if(!et)return;function rt(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let ht={SIM_RESOLUTION:r,DYE_RESOLUTION:t,DENSITY_DISSIPATION:a,VELOCITY_DISSIPATION:l,PRESSURE:c,PRESSURE_ITERATIONS:d,CURL:g,SPLAT_RADIUS:_,SPLAT_FORCE:y,SHADING:S,COLOR_UPDATE_SPEED:A},Tt=[new rt];const{gl:M,ext:Ut}=le(et);Ut.supportLinearFiltering||(ht.DYE_RESOLUTION=256,ht.SHADING=!1);function le(D){const F={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let G=D.getContext("webgl2",F);const it=!!G;it||(G=D.getContext("webgl",F)||D.getContext("experimental-webgl",F));let mt,St;it?(G.getExtension("EXT_color_buffer_float"),St=G.getExtension("OES_texture_float_linear")):(mt=G.getExtension("OES_texture_half_float"),St=G.getExtension("OES_texture_half_float_linear")),G.clearColor(0,0,0,1);const wt=it?G.HALF_FLOAT:mt&&mt.HALF_FLOAT_OES;let Vt,Lt,Ce;return it?(Vt=Nt(G,G.RGBA16F,G.RGBA,wt),Lt=Nt(G,G.RG16F,G.RG,wt),Ce=Nt(G,G.R16F,G.RED,wt)):(Vt=Nt(G,G.RGBA,G.RGBA,wt),Lt=Nt(G,G.RGBA,G.RGBA,wt),Ce=Nt(G,G.RGBA,G.RGBA,wt)),{gl:G,ext:{formatRGBA:Vt,formatRG:Lt,formatR:Ce,halfFloatTexType:wt,supportLinearFiltering:St}}}function Nt(D,F,G,it){if(!I(D,F,G,it))switch(F){case D.R16F:return Nt(D,D.RG16F,D.RG,it);case D.RG16F:return Nt(D,D.RGBA16F,D.RGBA,it);default:return null}return{internalFormat:F,format:G}}function I(D,F,G,it){const mt=D.createTexture();D.bindTexture(D.TEXTURE_2D,mt),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_S,D.CLAMP_TO_EDGE),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_T,D.CLAMP_TO_EDGE),D.texImage2D(D.TEXTURE_2D,0,F,4,4,0,G,it,null);const St=D.createFramebuffer();return D.bindFramebuffer(D.FRAMEBUFFER,St),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt,0),D.checkFramebufferStatus(D.FRAMEBUFFER)===D.FRAMEBUFFER_COMPLETE}class b{constructor(F,G){this.vertexShader=F,this.fragmentShaderSource=G,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(F){let G=0;for(let mt=0;mt<F.length;mt++)G+=$i(F[mt]);let it=this.programs[G];if(it==null){let mt=L(M.FRAGMENT_SHADER,this.fragmentShaderSource,F);it=U(this.vertexShader,mt),this.programs[G]=it}it!==this.activeProgram&&(this.uniforms=O(it),this.activeProgram=it)}bind(){M.useProgram(this.activeProgram)}}class R{constructor(F,G){this.uniforms={},this.program=U(F,G),this.uniforms=O(this.program)}bind(){M.useProgram(this.program)}}function U(D,F){let G=M.createProgram();return M.attachShader(G,D),M.attachShader(G,F),M.linkProgram(G),M.getProgramParameter(G,M.LINK_STATUS)||console.trace(M.getProgramInfoLog(G)),G}function O(D){let F=[],G=M.getProgramParameter(D,M.ACTIVE_UNIFORMS);for(let it=0;it<G;it++){let mt=M.getActiveUniform(D,it).name;F[mt]=M.getUniformLocation(D,mt)}return F}function L(D,F,G){F=w(F,G);const it=M.createShader(D);return M.shaderSource(it,F),M.compileShader(it),M.getShaderParameter(it,M.COMPILE_STATUS)||console.trace(M.getShaderInfoLog(it)),it}function w(D,F){if(!F)return D;let G="";return F.forEach(it=>{G+="#define "+it+`
`}),G+D}const Ft=L(M.VERTEX_SHADER,`
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
    `),we=L(M.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),X=L(M.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),at=`
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
    `,yt=L(M.FRAGMENT_SHADER,`
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
    `),Gt=L(M.FRAGMENT_SHADER,`
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
    `,Ut.supportLinearFiltering?null:["MANUAL_FILTERING"]),$t=L(M.FRAGMENT_SHADER,`
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
    `),V=L(M.FRAGMENT_SHADER,`
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
    `),Z=L(M.FRAGMENT_SHADER,`
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
    `),ot=L(M.FRAGMENT_SHADER,`
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
    `),lt=L(M.FRAGMENT_SHADER,`
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
    `),pt=(M.bindBuffer(M.ARRAY_BUFFER,M.createBuffer()),M.bufferData(M.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),M.STATIC_DRAW),M.bindBuffer(M.ELEMENT_ARRAY_BUFFER,M.createBuffer()),M.bufferData(M.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),M.STATIC_DRAW),M.vertexAttribPointer(0,2,M.FLOAT,!1,0,0),M.enableVertexAttribArray(0),(D,F=!1)=>{D==null?(M.viewport(0,0,M.drawingBufferWidth,M.drawingBufferHeight),M.bindFramebuffer(M.FRAMEBUFFER,null)):(M.viewport(0,0,D.width,D.height),M.bindFramebuffer(M.FRAMEBUFFER,D.fbo)),F&&(M.clearColor(0,0,0,1),M.clear(M.COLOR_BUFFER_BIT)),M.drawElements(M.TRIANGLES,6,M.UNSIGNED_SHORT,0)});let _t,ut,Ee,ie,an;const Qi=new R(Ft,we),_i=new R(Ft,X),fn=new R(Ft,yt),Ae=new R(Ft,Gt),Ki=new R(Ft,$t),ii=new R(Ft,V),zn=new R(Ft,Z),vi=new R(Ft,ot),he=new R(Ft,lt),pe=new b(Ft,at);function ri(){let D=Si(ht.SIM_RESOLUTION),F=Si(ht.DYE_RESOLUTION);const G=Ut.halfFloatTexType,it=Ut.formatRGBA,mt=Ut.formatRG,St=Ut.formatR,wt=Ut.supportLinearFiltering?M.LINEAR:M.NEAREST;M.disable(M.BLEND),_t?_t=Ti(_t,F.width,F.height,it.internalFormat,it.format,G,wt):_t=br(F.width,F.height,it.internalFormat,it.format,G,wt),ut?ut=Ti(ut,D.width,D.height,mt.internalFormat,mt.format,G,wt):ut=br(D.width,D.height,mt.internalFormat,mt.format,G,wt),Ee=Ei(D.width,D.height,St.internalFormat,St.format,G,M.NEAREST),ie=Ei(D.width,D.height,St.internalFormat,St.format,G,M.NEAREST),an=br(D.width,D.height,St.internalFormat,St.format,G,M.NEAREST)}function Ei(D,F,G,it,mt,St){M.activeTexture(M.TEXTURE0);let wt=M.createTexture();M.bindTexture(M.TEXTURE_2D,wt),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MIN_FILTER,St),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MAG_FILTER,St),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_S,M.CLAMP_TO_EDGE),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_T,M.CLAMP_TO_EDGE),M.texImage2D(M.TEXTURE_2D,0,G,D,F,0,it,mt,null);let Vt=M.createFramebuffer();M.bindFramebuffer(M.FRAMEBUFFER,Vt),M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,wt,0),M.viewport(0,0,D,F),M.clear(M.COLOR_BUFFER_BIT);let Lt=1/D,Ce=1/F;return{texture:wt,fbo:Vt,width:D,height:F,texelSizeX:Lt,texelSizeY:Ce,attach(pn){return M.activeTexture(M.TEXTURE0+pn),M.bindTexture(M.TEXTURE_2D,wt),pn}}}function br(D,F,G,it,mt,St){let wt=Ei(D,F,G,it,mt,St),Vt=Ei(D,F,G,it,mt,St);return{width:D,height:F,texelSizeX:wt.texelSizeX,texelSizeY:wt.texelSizeY,get read(){return wt},set read(Lt){wt=Lt},get write(){return Vt},set write(Lt){Vt=Lt},swap(){let Lt=wt;wt=Vt,Vt=Lt}}}function Ke(D,F,G,it,mt,St,wt){let Vt=Ei(F,G,it,mt,St,wt);return Qi.bind(),M.uniform1i(Qi.uniforms.uTexture,D.attach(0)),pt(Vt),Vt}function Ti(D,F,G,it,mt,St,wt){return D.width===F&&D.height===G||(D.read=Ke(D.read,F,G,it,mt,St,wt),D.write=Ei(F,G,it,mt,St,wt),D.width=F,D.height=G,D.texelSizeX=1/F,D.texelSizeY=1/G),D}function Is(){let D=[];ht.SHADING&&D.push("SHADING"),pe.setKeywords(D)}Is(),ri();let Rr=Date.now(),wn=0;function wr(){const D=fa();da()&&ri(),ma(D),Cn(),Be(D),gn(null),requestAnimationFrame(wr)}function fa(){let D=Date.now(),F=(D-Rr)/1e3;return F=Math.min(F,.016666),Rr=D,F}function da(){let D=Ge(et.clientWidth),F=Ge(et.clientHeight);return et.width!==D||et.height!==F?(et.width=D,et.height=F,!0):!1}function ma(D){wn+=D*ht.COLOR_UPDATE_SPEED,wn>=1&&(wn=Hn(wn,0,1),Tt.forEach(F=>{F.color=Ir()}))}function Cn(){Tt.forEach(D=>{D.moved&&(D.moved=!1,ga(D))})}function Be(D){M.disable(M.BLEND),ii.bind(),M.uniform2f(ii.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),M.uniform1i(ii.uniforms.uVelocity,ut.read.attach(0)),pt(ie),zn.bind(),M.uniform2f(zn.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),M.uniform1i(zn.uniforms.uVelocity,ut.read.attach(0)),M.uniform1i(zn.uniforms.uCurl,ie.attach(1)),M.uniform1f(zn.uniforms.curl,ht.CURL),M.uniform1f(zn.uniforms.dt,D),pt(ut.write),ut.swap(),Ki.bind(),M.uniform2f(Ki.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),M.uniform1i(Ki.uniforms.uVelocity,ut.read.attach(0)),pt(Ee),_i.bind(),M.uniform1i(_i.uniforms.uTexture,an.read.attach(0)),M.uniform1f(_i.uniforms.value,ht.PRESSURE),pt(an.write),an.swap(),vi.bind(),M.uniform2f(vi.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),M.uniform1i(vi.uniforms.uDivergence,Ee.attach(0));for(let G=0;G<ht.PRESSURE_ITERATIONS;G++)M.uniform1i(vi.uniforms.uPressure,an.read.attach(1)),pt(an.write),an.swap();he.bind(),M.uniform2f(he.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),M.uniform1i(he.uniforms.uPressure,an.read.attach(0)),M.uniform1i(he.uniforms.uVelocity,ut.read.attach(1)),pt(ut.write),ut.swap(),Ae.bind(),M.uniform2f(Ae.uniforms.texelSize,ut.texelSizeX,ut.texelSizeY),Ut.supportLinearFiltering||M.uniform2f(Ae.uniforms.dyeTexelSize,ut.texelSizeX,ut.texelSizeY);let F=ut.read.attach(0);M.uniform1i(Ae.uniforms.uVelocity,F),M.uniform1i(Ae.uniforms.uSource,F),M.uniform1f(Ae.uniforms.dt,D),M.uniform1f(Ae.uniforms.dissipation,ht.VELOCITY_DISSIPATION),pt(ut.write),ut.swap(),Ut.supportLinearFiltering||M.uniform2f(Ae.uniforms.dyeTexelSize,_t.texelSizeX,_t.texelSizeY),M.uniform1i(Ae.uniforms.uVelocity,ut.read.attach(0)),M.uniform1i(Ae.uniforms.uSource,_t.read.attach(1)),M.uniform1f(Ae.uniforms.dissipation,ht.DENSITY_DISSIPATION),pt(_t.write),_t.swap()}function gn(D){M.blendFunc(M.ONE,M.ONE_MINUS_SRC_ALPHA),M.enable(M.BLEND),Te(D)}function Te(D){let F=M.drawingBufferWidth,G=M.drawingBufferHeight;pe.bind(),ht.SHADING&&M.uniform2f(pe.uniforms.texelSize,1/F,1/G),M.uniform1i(pe.uniforms.uTexture,_t.read.attach(0)),pt(D)}function ga(D){let F=D.deltaX*ht.SPLAT_FORCE,G=D.deltaY*ht.SPLAT_FORCE;Ds(D.texcoordX,D.texcoordY,F,G,D.color)}function Cr(D){const F=Ir();F.r*=10,F.g*=10,F.b*=10;let G=10*(Math.random()-.5),it=30*(Math.random()-.5);Ds(D.texcoordX,D.texcoordY,G,it,F)}function Ds(D,F,G,it,mt){fn.bind(),M.uniform1i(fn.uniforms.uTarget,ut.read.attach(0)),M.uniform1f(fn.uniforms.aspectRatio,et.width/et.height),M.uniform2f(fn.uniforms.point,D,F),M.uniform3f(fn.uniforms.color,G,it,0),M.uniform1f(fn.uniforms.radius,Bn(ht.SPLAT_RADIUS/100)),pt(ut.write),ut.swap(),M.uniform1i(fn.uniforms.uTarget,_t.read.attach(0)),M.uniform3f(fn.uniforms.color,mt.r,mt.g,mt.b),pt(_t.write),_t.swap()}function Bn(D){let F=et.width/et.height;return F>1&&(D*=F),D}function si(D,F,G,it){D.id=F,D.down=!0,D.moved=!1,D.texcoordX=G/et.width,D.texcoordY=1-it/et.height,D.prevTexcoordX=D.texcoordX,D.prevTexcoordY=D.texcoordY,D.deltaX=0,D.deltaY=0,D.color=Ir()}function ye(D,F,G,it){D.prevTexcoordX=D.texcoordX,D.prevTexcoordY=D.texcoordY,D.texcoordX=F/et.width,D.texcoordY=1-G/et.height,D.deltaX=qn(D.texcoordX-D.prevTexcoordX),D.deltaY=In(D.texcoordY-D.prevTexcoordY),D.moved=Math.abs(D.deltaX)>0||Math.abs(D.deltaY)>0,D.color=it}function jn(D){D.down=!1}function qn(D){let F=et.width/et.height;return F<1&&(D*=F),D}function In(D){let F=et.width/et.height;return F>1&&(D/=F),D}function Ir(){let D=pa(Math.random(),1,1);return D.r*=.15,D.g*=.15,D.b*=.15,D}function pa(D,F,G){let it,mt,St,wt,Vt,Lt,Ce,pn;switch(wt=Math.floor(D*6),Vt=D*6-wt,Lt=G*(1-F),Ce=G*(1-Vt*F),pn=G*(1-(1-Vt)*F),wt%6){case 0:it=G,mt=pn,St=Lt;break;case 1:it=Ce,mt=G,St=Lt;break;case 2:it=Lt,mt=G,St=pn;break;case 3:it=Lt,mt=Ce,St=G;break;case 4:it=pn,mt=Lt,St=G;break;case 5:it=G,mt=Lt,St=Ce;break}return{r:it,g:mt,b:St}}function Hn(D,F,G){const it=G-F;return(D-F)%it+F}function Si(D){let F=M.drawingBufferWidth/M.drawingBufferHeight;F<1&&(F=1/F);const G=Math.round(D),it=Math.round(D*F);return M.drawingBufferWidth>M.drawingBufferHeight?{width:it,height:G}:{width:G,height:it}}function Ge(D){const F=window.devicePixelRatio||1;return Math.floor(D*F)}function $i(D){if(D.length===0)return 0;let F=0;for(let G=0;G<D.length;G++)F=(F<<5)-F+D.charCodeAt(G),F|=0;return F}window.addEventListener("mousedown",D=>{let F=Tt[0],G=Ge(D.clientX),it=Ge(D.clientY);si(F,-1,G,it),Cr(F)}),document.body.addEventListener("mousemove",function D(F){let G=Tt[0],it=Ge(F.clientX),mt=Ge(F.clientY),St=Ir();wr(),ye(G,it,mt,St),document.body.removeEventListener("mousemove",D)}),window.addEventListener("mousemove",D=>{let F=Tt[0],G=Ge(D.clientX),it=Ge(D.clientY),mt=F.color;ye(F,G,it,mt)}),document.body.addEventListener("touchstart",function D(F){const G=F.targetTouches;let it=Tt[0];for(let mt=0;mt<G.length;mt++){let St=Ge(G[mt].clientX),wt=Ge(G[mt].clientY);wr(),si(it,G[mt].identifier,St,wt)}document.body.removeEventListener("touchstart",D)}),window.addEventListener("touchstart",D=>{const F=D.targetTouches;let G=Tt[0];for(let it=0;it<F.length;it++){let mt=Ge(F[it].clientX),St=Ge(F[it].clientY);si(G,F[it].identifier,mt,St)}}),window.addEventListener("touchmove",D=>{const F=D.targetTouches;let G=Tt[0];for(let it=0;it<F.length;it++){let mt=Ge(F[it].clientX),St=Ge(F[it].clientY);ye(G,mt,St,G.color)}},!1),window.addEventListener("touchend",D=>{const F=D.changedTouches;let G=Tt[0];for(let it=0;it<F.length;it++)jn(G)}),wr()},[r,t,i,a,l,c,d,g,_,y,S,A,N,Y]),nt.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:nt.jsx("canvas",{ref:$,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}function dD(){const[r,t]=ce.useState(""),[i,a]=ce.useState(""),[l,c]=ce.useState(""),[d,g]=ce.useState(!1),_=async y=>{y.preventDefault(),c(""),g(!0);try{await dR(xh,r,i)}catch{c("Pogrešna email adresa ili lozinka"),g(!1)}};return nt.jsxs("div",{className:"min-h-screen flex items-center justify-center p-6",children:[nt.jsxs("div",{className:"max-w-md w-full glass border rounded-2xl p-10 shadow-2xl text-center",children:[nt.jsx("div",{className:"mb-6",children:nt.jsx(F0,{size:48,className:"text-primary mx-auto"})}),nt.jsx("h1",{className:"text-3xl font-bold text-primary mb-2",children:"365 Poklona"}),nt.jsx("p",{className:"text-sm text-gray-300 mb-6",children:"Prijavi se da otvoriš svoje poklone"}),nt.jsxs("form",{onSubmit:_,className:"flex flex-col gap-4",children:[nt.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:y=>t(y.target.value),className:"px-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white outline-none",required:!0}),nt.jsx("input",{type:"password",placeholder:"Lozinka",value:i,onChange:y=>a(y.target.value),className:"px-4 py-3 rounded-xl border bg-white/5 border-white/10 text-white outline-none",required:!0}),l&&nt.jsx("p",{className:"text-sm text-red-400 text-center",children:l}),nt.jsx("button",{type:"submit",disabled:d,className:"mt-2 py-3 rounded-xl bg-primary text-white font-semibold disabled:opacity-60",children:d?"Prijava...":"Prijavi se"})]})]}),nt.jsx(Mh,{})]})}function mD({present:r,onOpen:t,isLocked:i}){const[a,l]=ce.useState("");ce.useEffect(()=>{const g=()=>{const A=new Date(r.unlockDate+"T00:00:00")-new Date;if(A<=0){l("");return}const N=A/(1e3*60*60*24);if(N>=1){const Y=Math.ceil(N);l(`${Y} dana`)}else{const Y=Math.ceil(A/1e3),$=Math.floor(Y/3600),et=Math.floor(Y%3600/60),rt=Y%60;l(`${$}h ${et}m ${rt}s`)}};g();const _=setInterval(g,1e3);return()=>clearInterval(_)},[r.unlockDate]);const c=()=>{i||t(r)},d=()=>r.opened?nt.jsx(WI,{size:28,className:"text-primary"}):i?nt.jsx(nD,{size:28,className:"text-gray-400"}):nt.jsx(F0,{size:28,className:"text-primary"});return nt.jsxs("div",{className:`card glass ${i?"opacity-75 cursor-not-allowed":"hover:scale-105 cursor-pointer"} transform transition-all duration-300`,onClick:c,children:[nt.jsx("div",{className:"mb-4",children:d()}),nt.jsxs("h3",{className:"text-lg font-semibold text-white mb-2",children:["Dan ",r.day]}),i&&nt.jsx("p",{className:"text-sm text-gray-300",children:a}),r.opened&&nt.jsx("p",{className:"text-sm text-primary font-medium",children:"Otvoreno"})]})}function gD(){const[r,t]=ce.useState([]),[i,a]=ce.useState(null),[l,c]=ce.useState(!0);ce.useEffect(()=>{d()},[]);const d=async()=>{try{const A=(await B0(ym(na,"presents"))).docs.map(N=>({id:N.id,...N.data()}));A.sort((N,Y)=>N.day-Y.day),t(A),c(!1)}catch(S){console.error("Error loading presents:",S),c(!1)}},g=async S=>{if(a(S),!S.opened)try{const A=$l(na,"presents",S.id);await j0(A,{opened:!0,openedAt:new Date().toISOString()}),d()}catch(A){console.error("Error opening present:",A)}},_=S=>{const A=new Date,N=new Date(S.unlockDate);return A<N},y=()=>{JE(xh)};return l?nt.jsx("div",{className:"min-h-screen flex items-center justify-center text-white text-xl",children:"Učitavanje..."}):nt.jsxs("div",{className:"min-h-screen p-6",children:[nt.jsxs("header",{className:"flex items-center justify-between mb-10",children:[nt.jsx("h1",{className:"text-4xl font-bold text-primary",children:"Tvoji Pokloni"}),nt.jsx("button",{onClick:y,className:"py-2 px-4 rounded-lg border border-white/10 glass text-white",children:"Odjavi se"})]}),nt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto",children:r.map(S=>nt.jsx(mD,{present:S,onOpen:g,isLocked:_(S)},S.id))}),i&&nt.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50",onClick:()=>a(null),children:nt.jsxs("div",{className:"bg-white/6 border border-white/10 rounded-2xl p-8 max-w-2xl w-full mx-4 relative",onClick:S=>S.stopPropagation(),children:[nt.jsx("button",{className:"absolute top-4 right-4 text-white text-xl",onClick:()=>a(null),children:"✕"}),nt.jsxs("h2",{className:"text-2xl font-bold text-primary mb-4",children:["Dan ",i.day]}),i.type==="text"&&nt.jsx("p",{className:"text-white leading-relaxed",children:i.content}),i.type==="image"&&nt.jsx("img",{src:i.content,alt:"Present",className:"w-full rounded-lg mt-4"}),i.type==="song"&&nt.jsxs("div",{children:[nt.jsx("p",{className:"text-primary font-semibold mb-2",children:i.title}),nt.jsx("audio",{controls:!0,className:"w-full",children:nt.jsx("source",{src:i.content,type:"audio/mpeg"})})]})]})}),nt.jsx(Mh,{})]})}function pD(){const[r,t]=ce.useState([]),[i,a]=ce.useState(!1),[l,c]=ce.useState(null),[d,g]=ce.useState({day:"",type:"text",title:"",content:"",unlockDate:""});ce.useEffect(()=>{_()},[]);const _=async()=>{try{const et=(await B0(ym(na,"presents"))).docs.map(rt=>({id:rt.id,...rt.data()}));et.sort((rt,ht)=>rt.day-ht.day),t(et)}catch($){console.error("Error loading presents:",$)}},y=async $=>{$.preventDefault();try{const et={day:parseInt(d.day),type:d.type,title:d.title,content:d.content,unlockDate:d.unlockDate,opened:!1};l?await j0($l(na,"presents",l.id),et):await qI(ym(na,"presents"),et),N(),_()}catch(et){console.error("Error saving present:",et)}},S=$=>{c($),g({day:$.day,type:$.type,title:$.title||"",content:$.content,unlockDate:$.unlockDate}),a(!0)},A=async $=>{if(window.confirm("Jesi li siguran da želiš obrisati ovaj poklon?"))try{await jI($l(na,"presents",$)),_()}catch(et){console.error("Error deleting present:",et)}},N=()=>{g({day:"",type:"text",title:"",content:"",unlockDate:""}),c(null),a(!1)},Y=()=>{JE(xh)};return nt.jsxs("div",{className:"min-h-screen p-6",children:[nt.jsxs("header",{className:"flex items-center justify-between mb-8",children:[nt.jsxs("div",{className:"flex items-center gap-4",children:[nt.jsx(lD,{size:28,className:"text-primary"}),nt.jsx("h1",{className:"text-2xl font-bold text-white",children:"Admin Dashboard"})]}),nt.jsxs("div",{className:"flex items-center gap-3",children:[nt.jsxs("button",{onClick:()=>a(!i),className:"flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg",children:[nt.jsx(aD,{size:14}),i?"Zatvori":"Dodaj Poklon"]}),nt.jsxs("button",{onClick:Y,className:"flex items-center gap-2 glass border px-4 py-2 rounded-lg text-white",children:[nt.jsx(rD,{size:14}),"Odjavi se"]})]})]}),i&&nt.jsxs("div",{className:"glass border rounded-2xl p-6 mb-6 max-w-2xl",children:[nt.jsx("h2",{className:"text-xl font-semibold text-primary mb-4",children:l?"Uredi Poklon":"Novi Poklon"}),nt.jsxs("form",{onSubmit:y,className:"flex flex-col gap-4",children:[nt.jsxs("div",{className:"flex flex-col",children:[nt.jsx("label",{className:"text-sm text-white font-medium",children:"Dan (1-365)"}),nt.jsx("input",{type:"number",min:"1",max:"365",value:d.day,onChange:$=>g({...d,day:$.target.value}),className:"mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white",required:!0})]}),nt.jsxs("div",{className:"flex flex-col",children:[nt.jsx("label",{className:"text-sm text-white font-medium",children:"Tip"}),nt.jsxs("select",{value:d.type,onChange:$=>g({...d,type:$.target.value}),className:"mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white",children:[nt.jsx("option",{value:"text",children:"Tekst"}),nt.jsx("option",{value:"image",children:"Slika"}),nt.jsx("option",{value:"song",children:"Pjesma"})]})]}),d.type==="song"&&nt.jsxs("div",{className:"flex flex-col",children:[nt.jsx("label",{className:"text-sm text-white font-medium",children:"Naslov"}),nt.jsx("input",{type:"text",value:d.title,onChange:$=>g({...d,title:$.target.value}),className:"mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white",placeholder:"Naziv pjesme"})]}),nt.jsxs("div",{className:"flex flex-col",children:[nt.jsx("label",{className:"text-sm text-white font-medium",children:d.type==="text"?"Tekst":"URL"}),nt.jsx("textarea",{value:d.content,onChange:$=>g({...d,content:$.target.value}),className:"mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white min-h-[100px]",placeholder:d.type==="text"?"Upiši poruku...":"https://...",required:!0})]}),nt.jsxs("div",{className:"flex flex-col",children:[nt.jsx("label",{className:"text-sm text-white font-medium",children:"Datum otključavanja"}),nt.jsx("input",{type:"date",value:d.unlockDate,onChange:$=>g({...d,unlockDate:$.target.value}),className:"mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white",required:!0})]}),nt.jsxs("div",{className:"flex gap-4",children:[nt.jsx("button",{type:"submit",className:"flex-1 py-3 bg-primary text-white rounded-lg font-semibold",children:l?"Spremi":"Dodaj"}),nt.jsx("button",{type:"button",onClick:N,className:"flex-1 py-3 border border-white/10 rounded-lg text-white",children:"Odustani"})]})]})]}),nt.jsxs("div",{className:"glass border rounded-2xl p-6",children:[nt.jsxs("h2",{className:"text-lg text-primary font-semibold mb-4",children:["Svi Pokloni (",r.length,")"]}),nt.jsx("div",{className:"space-y-3",children:r.map($=>nt.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-white/6",children:[nt.jsxs("div",{className:"flex items-center gap-4",children:[nt.jsxs("span",{className:"font-semibold text-primary",children:["Dan ",$.day]}),nt.jsx("span",{className:"text-sm text-white/80 bg-white/5 px-3 py-1 rounded-full",children:$.type}),nt.jsx("span",{className:"text-sm text-white/60",children:$.unlockDate}),$.opened&&nt.jsx("span",{className:"text-sm text-primary",children:"Otvoreno"})]}),nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("button",{onClick:()=>S($),className:"p-2 bg-primary text-white rounded-md",children:nt.jsx(cD,{size:14})}),nt.jsx("button",{onClick:()=>A($.id),className:"p-2 border border-white/10 rounded-md text-white",children:nt.jsx(fD,{size:14})})]})]},$.id))})]}),nt.jsx(Mh,{})]})}function yD(){const[r,t]=ce.useState(null),[i,a]=ce.useState(null),[l,c]=ce.useState(!0);return ce.useEffect(()=>{const d=pR(xh,async g=>{if(g){t(g);try{const _=await BI($l(na,"users",g.uid));_.exists()&&a(_.data().role)}catch(_){console.error("Error fetching user role:",_)}}else t(null),a(null);c(!1)});return()=>d()},[]),l?nt.jsxs(nt.Fragment,{children:[nt.jsx("div",{className:"min-h-screen flex items-center justify-center text-white text-2xl",children:"Učitavanje..."}),nt.jsx(Mh,{})]}):r?i==="admin"?nt.jsx(pD,{}):nt.jsx(gD,{}):nt.jsx(dD,{})}const _D=xA.createRoot(document.getElementById("root"));_D.render(nt.jsx(bA.StrictMode,{children:nt.jsx(yD,{})}));
