(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ly={exports:{}},Nd={},cy={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=Symbol.for("react.element"),UE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),OE=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),jE=Symbol.for("react.lazy"),i0=Symbol.iterator;function WE(n){return n===null||typeof n!="object"?null:(n=i0&&n[i0]||n["@@iterator"],typeof n=="function"?n:null)}var uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fy=Object.assign,dy={};function ml(n,e,t){this.props=n,this.context=e,this.refs=dy,this.updater=t||uy}ml.prototype.isReactComponent={};ml.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ml.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function hy(){}hy.prototype=ml.prototype;function Sg(n,e,t){this.props=n,this.context=e,this.refs=dy,this.updater=t||uy}var Mg=Sg.prototype=new hy;Mg.constructor=Sg;fy(Mg,ml.prototype);Mg.isPureReactComponent=!0;var r0=Array.isArray,py=Object.prototype.hasOwnProperty,Eg={current:null},my={key:!0,ref:!0,__self:!0,__source:!0};function gy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)py.call(e,i)&&!my.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Jc,type:n,key:s,ref:o,props:r,_owner:Eg.current}}function XE(n,e){return{$$typeof:Jc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function wg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Jc}function YE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var s0=/\/+/g;function sh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?YE(""+n.key):e.toString(36)}function gf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Jc:case UE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+sh(o,0):i,r0(r)?(t="",n!=null&&(t=n.replace(s0,"$&/")+"/"),gf(r,e,t,"",function(c){return c})):r!=null&&(wg(r)&&(r=XE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(s0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",r0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+sh(s,a);o+=gf(s,e,t,l,r)}else if(l=WE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+sh(s,a++),o+=gf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uu(n,e,t){if(n==null)return n;var i=[],r=0;return gf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function $E(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},_f={transition:null},qE={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:_f,ReactCurrentOwner:Eg};function _y(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:uu,forEach:function(n,e,t){uu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return uu(n,function(){e++}),e},toArray:function(n){return uu(n,function(e){return e})||[]},only:function(n){if(!wg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=ml;ot.Fragment=kE;ot.Profiler=OE;ot.PureComponent=Sg;ot.StrictMode=FE;ot.Suspense=VE;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;ot.act=_y;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=fy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)py.call(e,l)&&!my.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Jc,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:BE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zE,_context:n},n.Consumer=n};ot.createElement=gy;ot.createFactory=function(n){var e=gy.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:HE,render:n}};ot.isValidElement=wg;ot.lazy=function(n){return{$$typeof:jE,_payload:{_status:-1,_result:n},_init:$E}};ot.memo=function(n,e){return{$$typeof:GE,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=_f.transition;_f.transition={};try{n()}finally{_f.transition=e}};ot.unstable_act=_y;ot.useCallback=function(n,e){return Xn.current.useCallback(n,e)};ot.useContext=function(n){return Xn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return Xn.current.useEffect(n,e)};ot.useId=function(){return Xn.current.useId()};ot.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return Xn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};ot.useRef=function(n){return Xn.current.useRef(n)};ot.useState=function(n){return Xn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return Xn.current.useTransition()};ot.version="18.3.1";cy.exports=ot;var We=cy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KE=We,ZE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),JE=Object.prototype.hasOwnProperty,ew=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tw={key:!0,ref:!0,__self:!0,__source:!0};function vy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)JE.call(e,i)&&!tw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ZE,type:n,key:s,ref:o,props:r,_owner:ew.current}}Nd.Fragment=QE;Nd.jsx=vy;Nd.jsxs=vy;ly.exports=Nd;var y=ly.exports,xy={exports:{}},Pi={},yy={exports:{}},Sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,Z){var P=U.length;U.push(Z);e:for(;0<P;){var se=P-1>>>1,Se=U[se];if(0<r(Se,Z))U[se]=Z,U[P]=Se,P=se;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Z=U[0],P=U.pop();if(P!==Z){U[0]=P;e:for(var se=0,Se=U.length,Xe=Se>>>1;se<Xe;){var q=2*(se+1)-1,ie=U[q],he=q+1,L=U[he];if(0>r(ie,P))he<Se&&0>r(L,ie)?(U[se]=L,U[he]=P,se=he):(U[se]=ie,U[q]=P,se=q);else if(he<Se&&0>r(L,P))U[se]=L,U[he]=P,se=he;else break e}}return Z}function r(U,Z){var P=U.sortIndex-Z.sortIndex;return P!==0?P:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,h=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var Z=t(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=U)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=t(c)}}function S(U){if(_=!1,x(U),!m)if(t(l)!==null)m=!0,X(R);else{var Z=t(c);Z!==null&&V(S,Z.startTime-U)}}function R(U,Z){m=!1,_&&(_=!1,p(b),b=-1),h=!0;var P=d;try{for(x(Z),f=t(l);f!==null&&(!(f.expirationTime>Z)||U&&!D());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var Se=se(f.expirationTime<=Z);Z=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),x(Z)}else i(l);f=t(l)}if(f!==null)var Xe=!0;else{var q=t(c);q!==null&&V(S,q.startTime-Z),Xe=!1}return Xe}finally{f=null,d=P,h=!1}}var A=!1,E=null,b=-1,w=5,M=-1;function D(){return!(n.unstable_now()-M<w)}function k(){if(E!==null){var U=n.unstable_now();M=U;var Z=!0;try{Z=E(!0,U)}finally{Z?B():(A=!1,E=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,K=W.port2;W.port1.onmessage=k,B=function(){K.postMessage(null)}}else B=function(){g(k,0)};function X(U){E=U,A||(A=!0,B())}function V(U,Z){b=g(function(){U(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){m||h||(m=!0,X(R))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var P=d;d=Z;try{return U()}finally{d=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var P=d;d=U;try{return Z()}finally{d=P}},n.unstable_scheduleCallback=function(U,Z,P){var se=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?se+P:se):P=se,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=P+Se,U={id:u++,callback:Z,priorityLevel:U,startTime:P,expirationTime:Se,sortIndex:-1},P>se?(U.sortIndex=P,e(c,U),t(l)===null&&U===t(c)&&(_?(p(b),b=-1):_=!0,V(S,P-se))):(U.sortIndex=Se,e(l,U),m||h||(m=!0,X(R))),U},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(U){var Z=d;return function(){var P=d;d=Z;try{return U.apply(this,arguments)}finally{d=P}}}})(Sy);yy.exports=Sy;var nw=yy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iw=We,Ci=nw;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var My=new Set,wc={};function jo(n,e){Za(n,e),Za(n+"Capture",e)}function Za(n,e){for(wc[n]=e,n=0;n<e.length;n++)My.add(e[n])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mp=Object.prototype.hasOwnProperty,rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o0={},a0={};function sw(n){return Mp.call(a0,n)?!0:Mp.call(o0,n)?!1:rw.test(n)?a0[n]=!0:(o0[n]=!0,!1)}function ow(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function aw(n,e,t,i){if(e===null||typeof e>"u"||ow(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mn[n]=new Yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mn[e]=new Yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mn[n]=new Yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mn[n]=new Yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mn[n]=new Yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mn[n]=new Yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mn[n]=new Yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mn[n]=new Yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mn[n]=new Yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Tg=/[\-:]([a-z])/g;function Ag(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Tg,Ag);Mn[e]=new Yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Tg,Ag);Mn[e]=new Yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Tg,Ag);Mn[e]=new Yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Cg(n,e,t,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aw(e,t,r,i)&&(t=null),i||r===null?sw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var rs=iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fu=Symbol.for("react.element"),xa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),Rg=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),wy=Symbol.for("react.context"),bg=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),Tp=Symbol.for("react.suspense_list"),Pg=Symbol.for("react.memo"),ps=Symbol.for("react.lazy"),Ty=Symbol.for("react.offscreen"),l0=Symbol.iterator;function Ml(n){return n===null||typeof n!="object"?null:(n=l0&&n[l0]||n["@@iterator"],typeof n=="function"?n:null)}var Gt=Object.assign,oh;function Bl(n){if(oh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);oh=e&&e[1]||""}return`
`+oh+n}var ah=!1;function lh(n,e){if(!n||ah)return"";ah=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ah=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Bl(n):""}function lw(n){switch(n.tag){case 5:return Bl(n.type);case 16:return Bl("Lazy");case 13:return Bl("Suspense");case 19:return Bl("SuspenseList");case 0:case 2:case 15:return n=lh(n.type,!1),n;case 11:return n=lh(n.type.render,!1),n;case 1:return n=lh(n.type,!0),n;default:return""}}function Ap(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ya:return"Fragment";case xa:return"Portal";case Ep:return"Profiler";case Rg:return"StrictMode";case wp:return"Suspense";case Tp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case wy:return(n.displayName||"Context")+".Consumer";case Ey:return(n._context.displayName||"Context")+".Provider";case bg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pg:return e=n.displayName||null,e!==null?e:Ap(n.type)||"Memo";case ps:e=n._payload,n=n._init;try{return Ap(n(e))}catch{}}return null}function cw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ap(e);case 8:return e===Rg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ay(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uw(n){var e=Ay(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function du(n){n._valueTracker||(n._valueTracker=uw(n))}function Cy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ay(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function jf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cp(n,e){var t=e.checked;return Gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function c0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ry(n,e){e=e.checked,e!=null&&Cg(n,"checked",e,!1)}function Rp(n,e){Ry(n,e);var t=Bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?bp(n,e.type,t):e.hasOwnProperty("defaultValue")&&bp(n,e.type,Bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function u0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function bp(n,e,t){(e!=="number"||jf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Hl=Array.isArray;function Ua(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function f0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if(Hl(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Bs(t)}}function by(n,e){var t=Bs(e.value),i=Bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function d0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Py(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Py(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hu,Ly=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hu=hu||document.createElement("div"),hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Tc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ec={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fw=["Webkit","ms","Moz","O"];Object.keys(ec).forEach(function(n){fw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ec[e]=ec[n]})});function Dy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ec.hasOwnProperty(n)&&ec[n]?(""+e).trim():e+"px"}function Ny(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Dy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var dw=Gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dp(n,e){if(e){if(dw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Np(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ip=null;function Lg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Up=null,ka=null,Fa=null;function h0(n){if(n=nu(n)){if(typeof Up!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=Od(e),Up(n.stateNode,n.type,e))}}function Iy(n){ka?Fa?Fa.push(n):Fa=[n]:ka=n}function Uy(){if(ka){var n=ka,e=Fa;if(Fa=ka=null,h0(n),e)for(n=0;n<e.length;n++)h0(e[n])}}function ky(n,e){return n(e)}function Fy(){}var ch=!1;function Oy(n,e,t){if(ch)return n(e,t);ch=!0;try{return ky(n,e,t)}finally{ch=!1,(ka!==null||Fa!==null)&&(Fy(),Uy())}}function Ac(n,e){var t=n.stateNode;if(t===null)return null;var i=Od(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var kp=!1;if(Zr)try{var El={};Object.defineProperty(El,"passive",{get:function(){kp=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{kp=!1}function hw(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var tc=!1,Wf=null,Xf=!1,Fp=null,pw={onError:function(n){tc=!0,Wf=n}};function mw(n,e,t,i,r,s,o,a,l){tc=!1,Wf=null,hw.apply(pw,arguments)}function gw(n,e,t,i,r,s,o,a,l){if(mw.apply(this,arguments),tc){if(tc){var c=Wf;tc=!1,Wf=null}else throw Error(ue(198));Xf||(Xf=!0,Fp=c)}}function Wo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function zy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p0(n){if(Wo(n)!==n)throw Error(ue(188))}function _w(n){var e=n.alternate;if(!e){if(e=Wo(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return p0(r),n;if(s===i)return p0(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function By(n){return n=_w(n),n!==null?Hy(n):null}function Hy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Hy(n);if(e!==null)return e;n=n.sibling}return null}var Vy=Ci.unstable_scheduleCallback,m0=Ci.unstable_cancelCallback,vw=Ci.unstable_shouldYield,xw=Ci.unstable_requestPaint,Yt=Ci.unstable_now,yw=Ci.unstable_getCurrentPriorityLevel,Dg=Ci.unstable_ImmediatePriority,Gy=Ci.unstable_UserBlockingPriority,Yf=Ci.unstable_NormalPriority,Sw=Ci.unstable_LowPriority,jy=Ci.unstable_IdlePriority,Id=null,Tr=null;function Mw(n){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(Id,n,void 0,(n.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:Tw,Ew=Math.log,ww=Math.LN2;function Tw(n){return n>>>=0,n===0?32:31-(Ew(n)/ww|0)|0}var pu=64,mu=4194304;function Vl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $f(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Vl(a):(s&=o,s!==0&&(i=Vl(s)))}else o=t&~r,o!==0?i=Vl(o):s!==0&&(i=Vl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-lr(e),r=1<<t,i|=n[t],e&=~r;return i}function Aw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-lr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Aw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Op(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wy(){var n=pu;return pu<<=1,!(pu&4194240)&&(pu=64),n}function uh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function eu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-lr(e),n[e]=t}function Rw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-lr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ng(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-lr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var St=0;function Xy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Yy,Ig,$y,qy,Ky,zp=!1,gu=[],Cs=null,Rs=null,bs=null,Cc=new Map,Rc=new Map,gs=[],bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(n,e){switch(n){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Cc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rc.delete(e.pointerId)}}function wl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nu(e),e!==null&&Ig(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Pw(n,e,t,i,r){switch(e){case"focusin":return Cs=wl(Cs,n,e,t,i,r),!0;case"dragenter":return Rs=wl(Rs,n,e,t,i,r),!0;case"mouseover":return bs=wl(bs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Cc.set(s,wl(Cc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Rc.set(s,wl(Rc.get(s)||null,n,e,t,i,r)),!0}return!1}function Zy(n){var e=_o(n.target);if(e!==null){var t=Wo(e);if(t!==null){if(e=t.tag,e===13){if(e=zy(t),e!==null){n.blockedOn=e,Ky(n.priority,function(){$y(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ip=i,t.target.dispatchEvent(i),Ip=null}else return e=nu(t),e!==null&&Ig(e),n.blockedOn=t,!1;e.shift()}return!0}function _0(n,e,t){vf(n)&&t.delete(e)}function Lw(){zp=!1,Cs!==null&&vf(Cs)&&(Cs=null),Rs!==null&&vf(Rs)&&(Rs=null),bs!==null&&vf(bs)&&(bs=null),Cc.forEach(_0),Rc.forEach(_0)}function Tl(n,e){n.blockedOn===e&&(n.blockedOn=null,zp||(zp=!0,Ci.unstable_scheduleCallback(Ci.unstable_NormalPriority,Lw)))}function bc(n){function e(r){return Tl(r,n)}if(0<gu.length){Tl(gu[0],n);for(var t=1;t<gu.length;t++){var i=gu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Cs!==null&&Tl(Cs,n),Rs!==null&&Tl(Rs,n),bs!==null&&Tl(bs,n),Cc.forEach(e),Rc.forEach(e),t=0;t<gs.length;t++)i=gs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gs.length&&(t=gs[0],t.blockedOn===null);)Zy(t),t.blockedOn===null&&gs.shift()}var Oa=rs.ReactCurrentBatchConfig,qf=!0;function Dw(n,e,t,i){var r=St,s=Oa.transition;Oa.transition=null;try{St=1,Ug(n,e,t,i)}finally{St=r,Oa.transition=s}}function Nw(n,e,t,i){var r=St,s=Oa.transition;Oa.transition=null;try{St=4,Ug(n,e,t,i)}finally{St=r,Oa.transition=s}}function Ug(n,e,t,i){if(qf){var r=Bp(n,e,t,i);if(r===null)yh(n,e,i,Kf,t),g0(n,i);else if(Pw(r,n,e,t,i))i.stopPropagation();else if(g0(n,i),e&4&&-1<bw.indexOf(n)){for(;r!==null;){var s=nu(r);if(s!==null&&Yy(s),s=Bp(n,e,t,i),s===null&&yh(n,e,i,Kf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else yh(n,e,i,null,t)}}var Kf=null;function Bp(n,e,t,i){if(Kf=null,n=Lg(i),n=_o(n),n!==null)if(e=Wo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=zy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Kf=n,null}function Qy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yw()){case Dg:return 1;case Gy:return 4;case Yf:case Sw:return 16;case jy:return 536870912;default:return 16}default:return 16}}var xs=null,kg=null,xf=null;function Jy(){if(xf)return xf;var n,e=kg,t=e.length,i,r="value"in xs?xs.value:xs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return xf=r.slice(n,1<i?1-i:void 0)}function yf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _u(){return!0}function v0(){return!1}function Li(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:v0,this.isPropagationStopped=v0,this}return Gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fg=Li(gl),tu=Gt({},gl,{view:0,detail:0}),Iw=Li(tu),fh,dh,Al,Ud=Gt({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Og,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Al&&(Al&&n.type==="mousemove"?(fh=n.screenX-Al.screenX,dh=n.screenY-Al.screenY):dh=fh=0,Al=n),fh)},movementY:function(n){return"movementY"in n?n.movementY:dh}}),x0=Li(Ud),Uw=Gt({},Ud,{dataTransfer:0}),kw=Li(Uw),Fw=Gt({},tu,{relatedTarget:0}),hh=Li(Fw),Ow=Gt({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),zw=Li(Ow),Bw=Gt({},gl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hw=Li(Bw),Vw=Gt({},gl,{data:0}),y0=Li(Vw),Gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ww[n])?!!e[n]:!1}function Og(){return Xw}var Yw=Gt({},tu,{key:function(n){if(n.key){var e=Gw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Og,charCode:function(n){return n.type==="keypress"?yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$w=Li(Yw),qw=Gt({},Ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=Li(qw),Kw=Gt({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Og}),Zw=Li(Kw),Qw=Gt({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jw=Li(Qw),eT=Gt({},Ud,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=Li(eT),nT=[9,13,27,32],zg=Zr&&"CompositionEvent"in window,nc=null;Zr&&"documentMode"in document&&(nc=document.documentMode);var iT=Zr&&"TextEvent"in window&&!nc,eS=Zr&&(!zg||nc&&8<nc&&11>=nc),M0=" ",E0=!1;function tS(n,e){switch(n){case"keyup":return nT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Sa=!1;function rT(n,e){switch(n){case"compositionend":return nS(e);case"keypress":return e.which!==32?null:(E0=!0,M0);case"textInput":return n=e.data,n===M0&&E0?null:n;default:return null}}function sT(n,e){if(Sa)return n==="compositionend"||!zg&&tS(n,e)?(n=Jy(),xf=kg=xs=null,Sa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eS&&e.locale!=="ko"?null:e.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!oT[n.type]:e==="textarea"}function iS(n,e,t,i){Iy(i),e=Zf(e,"onChange"),0<e.length&&(t=new Fg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ic=null,Pc=null;function aT(n){pS(n,0)}function kd(n){var e=wa(n);if(Cy(e))return n}function lT(n,e){if(n==="change")return e}var rS=!1;if(Zr){var ph;if(Zr){var mh="oninput"in document;if(!mh){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),mh=typeof T0.oninput=="function"}ph=mh}else ph=!1;rS=ph&&(!document.documentMode||9<document.documentMode)}function A0(){ic&&(ic.detachEvent("onpropertychange",sS),Pc=ic=null)}function sS(n){if(n.propertyName==="value"&&kd(Pc)){var e=[];iS(e,Pc,n,Lg(n)),Oy(aT,e)}}function cT(n,e,t){n==="focusin"?(A0(),ic=e,Pc=t,ic.attachEvent("onpropertychange",sS)):n==="focusout"&&A0()}function uT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kd(Pc)}function fT(n,e){if(n==="click")return kd(e)}function dT(n,e){if(n==="input"||n==="change")return kd(e)}function hT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ur=typeof Object.is=="function"?Object.is:hT;function Lc(n,e){if(ur(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mp.call(e,r)||!ur(n[r],e[r]))return!1}return!0}function C0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function R0(n,e){var t=C0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=C0(t)}}function oS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?oS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function aS(){for(var n=window,e=jf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=jf(n.document)}return e}function Bg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function pT(n){var e=aS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&oS(t.ownerDocument.documentElement,t)){if(i!==null&&Bg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=R0(t,s);var o=R0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mT=Zr&&"documentMode"in document&&11>=document.documentMode,Ma=null,Hp=null,rc=null,Vp=!1;function b0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vp||Ma==null||Ma!==jf(i)||(i=Ma,"selectionStart"in i&&Bg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rc&&Lc(rc,i)||(rc=i,i=Zf(Hp,"onSelect"),0<i.length&&(e=new Fg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ma)))}function vu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ea={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},gh={},lS={};Zr&&(lS=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Fd(n){if(gh[n])return gh[n];if(!Ea[n])return n;var e=Ea[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in lS)return gh[n]=e[t];return n}var cS=Fd("animationend"),uS=Fd("animationiteration"),fS=Fd("animationstart"),dS=Fd("transitionend"),hS=new Map,P0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $s(n,e){hS.set(n,e),jo(e,[n])}for(var _h=0;_h<P0.length;_h++){var vh=P0[_h],gT=vh.toLowerCase(),_T=vh[0].toUpperCase()+vh.slice(1);$s(gT,"on"+_T)}$s(cS,"onAnimationEnd");$s(uS,"onAnimationIteration");$s(fS,"onAnimationStart");$s("dblclick","onDoubleClick");$s("focusin","onFocus");$s("focusout","onBlur");$s(dS,"onTransitionEnd");Za("onMouseEnter",["mouseout","mouseover"]);Za("onMouseLeave",["mouseout","mouseover"]);Za("onPointerEnter",["pointerout","pointerover"]);Za("onPointerLeave",["pointerout","pointerover"]);jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jo("onBeforeInput",["compositionend","keypress","textInput","paste"]);jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gl));function L0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,gw(i,e,void 0,n),n.currentTarget=null}function pS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;L0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;L0(r,a,c),s=l}}}if(Xf)throw n=Fp,Xf=!1,Fp=null,n}function Lt(n,e){var t=e[Yp];t===void 0&&(t=e[Yp]=new Set);var i=n+"__bubble";t.has(i)||(mS(e,n,2,!1),t.add(i))}function xh(n,e,t){var i=0;e&&(i|=4),mS(t,n,i,e)}var xu="_reactListening"+Math.random().toString(36).slice(2);function Dc(n){if(!n[xu]){n[xu]=!0,My.forEach(function(t){t!=="selectionchange"&&(vT.has(t)||xh(t,!1,n),xh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[xu]||(e[xu]=!0,xh("selectionchange",!1,e))}}function mS(n,e,t,i){switch(Qy(e)){case 1:var r=Dw;break;case 4:r=Nw;break;default:r=Ug}t=r.bind(null,e,t,n),r=void 0,!kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function yh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_o(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Oy(function(){var c=s,u=Lg(t),f=[];e:{var d=hS.get(n);if(d!==void 0){var h=Fg,m=n;switch(n){case"keypress":if(yf(t)===0)break e;case"keydown":case"keyup":h=$w;break;case"focusin":m="focus",h=hh;break;case"focusout":m="blur",h=hh;break;case"beforeblur":case"afterblur":h=hh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=x0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=kw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Zw;break;case cS:case uS:case fS:h=zw;break;case dS:h=Jw;break;case"scroll":h=Iw;break;case"wheel":h=tT;break;case"copy":case"cut":case"paste":h=Hw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=S0}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=Ac(v,p),S!=null&&_.push(Nc(v,S,x)))),g)break;v=v.return}0<_.length&&(d=new h(d,m,null,t,u),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",d&&t!==Ip&&(m=t.relatedTarget||t.fromElement)&&(_o(m)||m[Qr]))break e;if((h||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=c,m=m?_o(m):null,m!==null&&(g=Wo(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(_=x0,S="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=S0,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?d:wa(h),x=m==null?d:wa(m),d=new _(S,v+"leave",h,t,u),d.target=g,d.relatedTarget=x,S=null,_o(u)===c&&(_=new _(p,v+"enter",m,t,u),_.target=x,_.relatedTarget=g,S=_),g=S,h&&m)t:{for(_=h,p=m,v=0,x=_;x;x=$o(x))v++;for(x=0,S=p;S;S=$o(S))x++;for(;0<v-x;)_=$o(_),v--;for(;0<x-v;)p=$o(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=$o(_),p=$o(p)}_=null}else _=null;h!==null&&D0(f,d,h,_,!1),m!==null&&g!==null&&D0(f,g,m,_,!0)}}e:{if(d=c?wa(c):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var R=lT;else if(w0(d))if(rS)R=dT;else{R=uT;var A=cT}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=fT);if(R&&(R=R(n,c))){iS(f,R,t,u);break e}A&&A(n,d,c),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&bp(d,"number",d.value)}switch(A=c?wa(c):window,n){case"focusin":(w0(A)||A.contentEditable==="true")&&(Ma=A,Hp=c,rc=null);break;case"focusout":rc=Hp=Ma=null;break;case"mousedown":Vp=!0;break;case"contextmenu":case"mouseup":case"dragend":Vp=!1,b0(f,t,u);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":b0(f,t,u)}var E;if(zg)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Sa?tS(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(eS&&t.locale!=="ko"&&(Sa||b!=="onCompositionStart"?b==="onCompositionEnd"&&Sa&&(E=Jy()):(xs=u,kg="value"in xs?xs.value:xs.textContent,Sa=!0)),A=Zf(c,b),0<A.length&&(b=new y0(b,n,null,t,u),f.push({event:b,listeners:A}),E?b.data=E:(E=nS(t),E!==null&&(b.data=E)))),(E=iT?rT(n,t):sT(n,t))&&(c=Zf(c,"onBeforeInput"),0<c.length&&(u=new y0("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=E))}pS(f,e)})}function Nc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Zf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ac(n,t),s!=null&&i.unshift(Nc(n,s,r)),s=Ac(n,e),s!=null&&i.push(Nc(n,s,r))),n=n.return}return i}function $o(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function D0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ac(t,s),l!=null&&o.unshift(Nc(t,l,a))):r||(l=Ac(t,s),l!=null&&o.push(Nc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var xT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function N0(n){return(typeof n=="string"?n:""+n).replace(xT,`
`).replace(yT,"")}function yu(n,e,t){if(e=N0(e),N0(n)!==e&&t)throw Error(ue(425))}function Qf(){}var Gp=null,jp=null;function Wp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xp=typeof setTimeout=="function"?setTimeout:void 0,ST=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch(ET)}:Xp;function ET(n){setTimeout(function(){throw n})}function Sh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),bc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);bc(e)}function Ps(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function U0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var _l=Math.random().toString(36).slice(2),yr="__reactFiber$"+_l,Ic="__reactProps$"+_l,Qr="__reactContainer$"+_l,Yp="__reactEvents$"+_l,wT="__reactListeners$"+_l,TT="__reactHandles$"+_l;function _o(n){var e=n[yr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qr]||t[yr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=U0(n);n!==null;){if(t=n[yr])return t;n=U0(n)}return e}n=t,t=n.parentNode}return null}function nu(n){return n=n[yr]||n[Qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function wa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function Od(n){return n[Ic]||null}var $p=[],Ta=-1;function qs(n){return{current:n}}function Nt(n){0>Ta||(n.current=$p[Ta],$p[Ta]=null,Ta--)}function bt(n,e){Ta++,$p[Ta]=n.current,n.current=e}var Hs={},In=qs(Hs),ei=qs(!1),Io=Hs;function Qa(n,e){var t=n.type.contextTypes;if(!t)return Hs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ti(n){return n=n.childContextTypes,n!=null}function Jf(){Nt(ei),Nt(In)}function k0(n,e,t){if(In.current!==Hs)throw Error(ue(168));bt(In,e),bt(ei,t)}function gS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,cw(n)||"Unknown",r));return Gt({},t,i)}function ed(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hs,Io=In.current,bt(In,n),bt(ei,ei.current),!0}function F0(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=gS(n,e,Io),i.__reactInternalMemoizedMergedChildContext=n,Nt(ei),Nt(In),bt(In,n)):Nt(ei),bt(ei,t)}var zr=null,zd=!1,Mh=!1;function _S(n){zr===null?zr=[n]:zr.push(n)}function AT(n){zd=!0,_S(n)}function Ks(){if(!Mh&&zr!==null){Mh=!0;var n=0,e=St;try{var t=zr;for(St=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zr=null,zd=!1}catch(r){throw zr!==null&&(zr=zr.slice(n+1)),Vy(Dg,Ks),r}finally{St=e,Mh=!1}}return null}var Aa=[],Ca=0,td=null,nd=0,ki=[],Fi=0,Uo=null,jr=1,Wr="";function ao(n,e){Aa[Ca++]=nd,Aa[Ca++]=td,td=n,nd=e}function vS(n,e,t){ki[Fi++]=jr,ki[Fi++]=Wr,ki[Fi++]=Uo,Uo=n;var i=jr;n=Wr;var r=32-lr(i)-1;i&=~(1<<r),t+=1;var s=32-lr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,jr=1<<32-lr(e)+r|t<<r|i,Wr=s+n}else jr=1<<s|t<<r|i,Wr=n}function Hg(n){n.return!==null&&(ao(n,1),vS(n,1,0))}function Vg(n){for(;n===td;)td=Aa[--Ca],Aa[Ca]=null,nd=Aa[--Ca],Aa[Ca]=null;for(;n===Uo;)Uo=ki[--Fi],ki[Fi]=null,Wr=ki[--Fi],ki[Fi]=null,jr=ki[--Fi],ki[Fi]=null}var Ti=null,Si=null,It=!1,sr=null;function xS(n,e){var t=Hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function O0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ti=n,Si=Ps(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ti=n,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Uo!==null?{id:jr,overflow:Wr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ti=n,Si=null,!0):!1;default:return!1}}function qp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kp(n){if(It){var e=Si;if(e){var t=e;if(!O0(n,e)){if(qp(n))throw Error(ue(418));e=Ps(t.nextSibling);var i=Ti;e&&O0(n,e)?xS(i,t):(n.flags=n.flags&-4097|2,It=!1,Ti=n)}}else{if(qp(n))throw Error(ue(418));n.flags=n.flags&-4097|2,It=!1,Ti=n}}}function z0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ti=n}function Su(n){if(n!==Ti)return!1;if(!It)return z0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Wp(n.type,n.memoizedProps)),e&&(e=Si)){if(qp(n))throw yS(),Error(ue(418));for(;e;)xS(n,e),e=Ps(e.nextSibling)}if(z0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Si=Ps(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Si=null}}else Si=Ti?Ps(n.stateNode.nextSibling):null;return!0}function yS(){for(var n=Si;n;)n=Ps(n.nextSibling)}function Ja(){Si=Ti=null,It=!1}function Gg(n){sr===null?sr=[n]:sr.push(n)}var CT=rs.ReactCurrentBatchConfig;function Cl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function Mu(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function B0(n){var e=n._init;return e(n._payload)}function SS(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Is(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,S){return v===null||v.tag!==6?(v=bh(x,p.mode,S),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,S){var R=x.type;return R===ya?u(p,v,x.props.children,S,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ps&&B0(R)===v.type)?(S=r(v,x.props),S.ref=Cl(p,v,x),S.return=p,S):(S=Cf(x.type,x.key,x.props,null,p.mode,S),S.ref=Cl(p,v,x),S.return=p,S)}function c(p,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ph(x,p.mode,S),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function u(p,v,x,S,R){return v===null||v.tag!==7?(v=Ao(x,p.mode,S,R),v.return=p,v):(v=r(v,x),v.return=p,v)}function f(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bh(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fu:return x=Cf(v.type,v.key,v.props,null,p.mode,x),x.ref=Cl(p,null,v),x.return=p,x;case xa:return v=Ph(v,p.mode,x),v.return=p,v;case ps:var S=v._init;return f(p,S(v._payload),x)}if(Hl(v)||Ml(v))return v=Ao(v,p.mode,x,null),v.return=p,v;Mu(p,v)}return null}function d(p,v,x,S){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(p,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fu:return x.key===R?l(p,v,x,S):null;case xa:return x.key===R?c(p,v,x,S):null;case ps:return R=x._init,d(p,v,R(x._payload),S)}if(Hl(x)||Ml(x))return R!==null?null:u(p,v,x,S,null);Mu(p,x)}return null}function h(p,v,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(v,p,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:return p=p.get(S.key===null?x:S.key)||null,l(v,p,S,R);case xa:return p=p.get(S.key===null?x:S.key)||null,c(v,p,S,R);case ps:var A=S._init;return h(p,v,x,A(S._payload),R)}if(Hl(S)||Ml(S))return p=p.get(x)||null,u(v,p,S,R,null);Mu(v,S)}return null}function m(p,v,x,S){for(var R=null,A=null,E=v,b=v=0,w=null;E!==null&&b<x.length;b++){E.index>b?(w=E,E=null):w=E.sibling;var M=d(p,E,x[b],S);if(M===null){E===null&&(E=w);break}n&&E&&M.alternate===null&&e(p,E),v=s(M,v,b),A===null?R=M:A.sibling=M,A=M,E=w}if(b===x.length)return t(p,E),It&&ao(p,b),R;if(E===null){for(;b<x.length;b++)E=f(p,x[b],S),E!==null&&(v=s(E,v,b),A===null?R=E:A.sibling=E,A=E);return It&&ao(p,b),R}for(E=i(p,E);b<x.length;b++)w=h(E,p,b,x[b],S),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?b:w.key),v=s(w,v,b),A===null?R=w:A.sibling=w,A=w);return n&&E.forEach(function(D){return e(p,D)}),It&&ao(p,b),R}function _(p,v,x,S){var R=Ml(x);if(typeof R!="function")throw Error(ue(150));if(x=R.call(x),x==null)throw Error(ue(151));for(var A=R=null,E=v,b=v=0,w=null,M=x.next();E!==null&&!M.done;b++,M=x.next()){E.index>b?(w=E,E=null):w=E.sibling;var D=d(p,E,M.value,S);if(D===null){E===null&&(E=w);break}n&&E&&D.alternate===null&&e(p,E),v=s(D,v,b),A===null?R=D:A.sibling=D,A=D,E=w}if(M.done)return t(p,E),It&&ao(p,b),R;if(E===null){for(;!M.done;b++,M=x.next())M=f(p,M.value,S),M!==null&&(v=s(M,v,b),A===null?R=M:A.sibling=M,A=M);return It&&ao(p,b),R}for(E=i(p,E);!M.done;b++,M=x.next())M=h(E,p,b,M.value,S),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?b:M.key),v=s(M,v,b),A===null?R=M:A.sibling=M,A=M);return n&&E.forEach(function(k){return e(p,k)}),It&&ao(p,b),R}function g(p,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ya&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case fu:e:{for(var R=x.key,A=v;A!==null;){if(A.key===R){if(R=x.type,R===ya){if(A.tag===7){t(p,A.sibling),v=r(A,x.props.children),v.return=p,p=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ps&&B0(R)===A.type){t(p,A.sibling),v=r(A,x.props),v.ref=Cl(p,A,x),v.return=p,p=v;break e}t(p,A);break}else e(p,A);A=A.sibling}x.type===ya?(v=Ao(x.props.children,p.mode,S,x.key),v.return=p,p=v):(S=Cf(x.type,x.key,x.props,null,p.mode,S),S.ref=Cl(p,v,x),S.return=p,p=S)}return o(p);case xa:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=Ph(x,p.mode,S),v.return=p,p=v}return o(p);case ps:return A=x._init,g(p,v,A(x._payload),S)}if(Hl(x))return m(p,v,x,S);if(Ml(x))return _(p,v,x,S);Mu(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=bh(x,p.mode,S),v.return=p,p=v),o(p)):t(p,v)}return g}var el=SS(!0),MS=SS(!1),id=qs(null),rd=null,Ra=null,jg=null;function Wg(){jg=Ra=rd=null}function Xg(n){var e=id.current;Nt(id),n._currentValue=e}function Zp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function za(n,e){rd=n,jg=Ra=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Jn=!0),n.firstContext=null)}function $i(n){var e=n._currentValue;if(jg!==n)if(n={context:n,memoizedValue:e,next:null},Ra===null){if(rd===null)throw Error(ue(308));Ra=n,rd.dependencies={lanes:0,firstContext:n}}else Ra=Ra.next=n;return e}var vo=null;function Yg(n){vo===null?vo=[n]:vo.push(n)}function ES(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Yg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Jr(n,i)}function Jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ms=!1;function $g(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ls(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Jr(n,t)}return r=i.interleaved,r===null?(e.next=e,Yg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Jr(n,t)}function Sf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ng(n,t)}}function H0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function sd(n,e,t,i){var r=n.updateQueue;ms=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,_=a;switch(d=e,h=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){f=m.call(h,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,d=typeof m=="function"?m.call(h,f,d):m,d==null)break e;f=Gt({},f,d);break e;case 2:ms=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=f):u=u.next=h,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fo|=o,n.lanes=o,n.memoizedState=f}}function V0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var iu={},Ar=qs(iu),Uc=qs(iu),kc=qs(iu);function xo(n){if(n===iu)throw Error(ue(174));return n}function qg(n,e){switch(bt(kc,e),bt(Uc,n),bt(Ar,iu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lp(e,n)}Nt(Ar),bt(Ar,e)}function tl(){Nt(Ar),Nt(Uc),Nt(kc)}function TS(n){xo(kc.current);var e=xo(Ar.current),t=Lp(e,n.type);e!==t&&(bt(Uc,n),bt(Ar,t))}function Kg(n){Uc.current===n&&(Nt(Ar),Nt(Uc))}var Ot=qs(0);function od(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eh=[];function Zg(){for(var n=0;n<Eh.length;n++)Eh[n]._workInProgressVersionPrimary=null;Eh.length=0}var Mf=rs.ReactCurrentDispatcher,wh=rs.ReactCurrentBatchConfig,ko=0,Ht=null,rn=null,pn=null,ad=!1,sc=!1,Fc=0,RT=0;function En(){throw Error(ue(321))}function Qg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ur(n[t],e[t]))return!1;return!0}function Jg(n,e,t,i,r,s){if(ko=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mf.current=n===null||n.memoizedState===null?DT:NT,n=t(i,r),sc){s=0;do{if(sc=!1,Fc=0,25<=s)throw Error(ue(301));s+=1,pn=rn=null,e.updateQueue=null,Mf.current=IT,n=t(i,r)}while(sc)}if(Mf.current=ld,e=rn!==null&&rn.next!==null,ko=0,pn=rn=Ht=null,ad=!1,e)throw Error(ue(300));return n}function e_(){var n=Fc!==0;return Fc=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Ht.memoizedState=pn=n:pn=pn.next=n,pn}function qi(){if(rn===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=pn===null?Ht.memoizedState:pn.next;if(e!==null)pn=e,rn=n;else{if(n===null)throw Error(ue(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},pn===null?Ht.memoizedState=pn=n:pn=pn.next=n}return pn}function Oc(n,e){return typeof e=="function"?e(n):e}function Th(n){var e=qi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ko&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ht.lanes|=u,Fo|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ur(i,e.memoizedState)||(Jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,Fo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ah(n){var e=qi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ur(s,e.memoizedState)||(Jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function AS(){}function CS(n,e){var t=Ht,i=qi(),r=e(),s=!ur(i.memoizedState,r);if(s&&(i.memoizedState=r,Jn=!0),i=i.queue,t_(PS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(t.flags|=2048,zc(9,bS.bind(null,t,i,r,e),void 0,null),mn===null)throw Error(ue(349));ko&30||RS(t,e,r)}return r}function RS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function bS(n,e,t,i){e.value=t,e.getSnapshot=i,LS(e)&&DS(n)}function PS(n,e,t){return t(function(){LS(e)&&DS(n)})}function LS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ur(n,t)}catch{return!0}}function DS(n){var e=Jr(n,1);e!==null&&cr(e,n,1,-1)}function G0(n){var e=gr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oc,lastRenderedState:n},e.queue=n,n=n.dispatch=LT.bind(null,Ht,n),[e.memoizedState,n]}function zc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function NS(){return qi().memoizedState}function Ef(n,e,t,i){var r=gr();Ht.flags|=n,r.memoizedState=zc(1|e,t,void 0,i===void 0?null:i)}function Bd(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&Qg(i,o.deps)){r.memoizedState=zc(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=zc(1|e,t,s,i)}function j0(n,e){return Ef(8390656,8,n,e)}function t_(n,e){return Bd(2048,8,n,e)}function IS(n,e){return Bd(4,2,n,e)}function US(n,e){return Bd(4,4,n,e)}function kS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function FS(n,e,t){return t=t!=null?t.concat([n]):null,Bd(4,4,kS.bind(null,e,n),t)}function n_(){}function OS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Qg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function zS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Qg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function BS(n,e,t){return ko&21?(ur(t,e)||(t=Wy(),Ht.lanes|=t,Fo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=t)}function bT(n,e){var t=St;St=t!==0&&4>t?t:4,n(!0);var i=wh.transition;wh.transition={};try{n(!1),e()}finally{St=t,wh.transition=i}}function HS(){return qi().memoizedState}function PT(n,e,t){var i=Ns(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},VS(n))GS(e,t);else if(t=ES(n,e,t,i),t!==null){var r=Wn();cr(t,n,i,r),jS(t,e,i)}}function LT(n,e,t){var i=Ns(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(VS(n))GS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ur(a,o)){var l=e.interleaved;l===null?(r.next=r,Yg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ES(n,e,r,i),t!==null&&(r=Wn(),cr(t,n,i,r),jS(t,e,i))}}function VS(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function GS(n,e){sc=ad=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function jS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ng(n,t)}}var ld={readContext:$i,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},DT={readContext:$i,useCallback:function(n,e){return gr().memoizedState=[n,e===void 0?null:e],n},useContext:$i,useEffect:j0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ef(4194308,4,kS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ef(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ef(4,2,n,e)},useMemo:function(n,e){var t=gr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PT.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=gr();return n={current:n},e.memoizedState=n},useState:G0,useDebugValue:n_,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=G0(!1),e=n[0];return n=bT.bind(null,n[1]),gr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=gr();if(It){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),mn===null)throw Error(ue(349));ko&30||RS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,j0(PS.bind(null,i,s,n),[n]),i.flags|=2048,zc(9,bS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gr(),e=mn.identifierPrefix;if(It){var t=Wr,i=jr;t=(i&~(1<<32-lr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Fc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=RT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},NT={readContext:$i,useCallback:OS,useContext:$i,useEffect:t_,useImperativeHandle:FS,useInsertionEffect:IS,useLayoutEffect:US,useMemo:zS,useReducer:Th,useRef:NS,useState:function(){return Th(Oc)},useDebugValue:n_,useDeferredValue:function(n){var e=qi();return BS(e,rn.memoizedState,n)},useTransition:function(){var n=Th(Oc)[0],e=qi().memoizedState;return[n,e]},useMutableSource:AS,useSyncExternalStore:CS,useId:HS,unstable_isNewReconciler:!1},IT={readContext:$i,useCallback:OS,useContext:$i,useEffect:t_,useImperativeHandle:FS,useInsertionEffect:IS,useLayoutEffect:US,useMemo:zS,useReducer:Ah,useRef:NS,useState:function(){return Ah(Oc)},useDebugValue:n_,useDeferredValue:function(n){var e=qi();return rn===null?e.memoizedState=n:BS(e,rn.memoizedState,n)},useTransition:function(){var n=Ah(Oc)[0],e=qi().memoizedState;return[n,e]},useMutableSource:AS,useSyncExternalStore:CS,useId:HS,unstable_isNewReconciler:!1};function nr(n,e){if(n&&n.defaultProps){e=Gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Qp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hd={isMounted:function(n){return(n=n._reactInternals)?Wo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ns(n),s=qr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ls(n,s,r),e!==null&&(cr(e,n,r,i),Sf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ns(n),s=qr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ls(n,s,r),e!==null&&(cr(e,n,r,i),Sf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Ns(n),r=qr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ls(n,r,i),e!==null&&(cr(e,n,i,t),Sf(e,n,i))}};function W0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lc(t,i)||!Lc(r,s):!0}function WS(n,e,t){var i=!1,r=Hs,s=e.contextType;return typeof s=="object"&&s!==null?s=$i(s):(r=ti(e)?Io:In.current,i=e.contextTypes,s=(i=i!=null)?Qa(n,r):Hs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function X0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Hd.enqueueReplaceState(e,e.state,null)}function Jp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},$g(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$i(s):(s=ti(e)?Io:In.current,r.context=Qa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hd.enqueueReplaceState(r,r.state,null),sd(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function nl(n,e){try{var t="",i=e;do t+=lw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ch(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function em(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function XS(n,e,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ud||(ud=!0,um=i),em(n,e)},t}function YS(n,e,t){t=qr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){em(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){em(n,e),typeof i!="function"&&(Ds===null?Ds=new Set([this]):Ds.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Y0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qT.bind(null,n,e,t),e.then(n,n))}function $0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function q0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qr(-1,1),e.tag=2,Ls(t,e,1))),t.lanes|=1),n)}var kT=rs.ReactCurrentOwner,Jn=!1;function Bn(n,e,t,i){e.child=n===null?MS(e,null,t,i):el(e,n.child,t,i)}function K0(n,e,t,i,r){t=t.render;var s=e.ref;return za(e,r),i=Jg(n,e,t,i,s,r),t=e_(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(It&&t&&Hg(e),e.flags|=1,Bn(n,e,i,r),e.child)}function Z0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!u_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,$S(n,e,s,i,r)):(n=Cf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Lc,t(o,i)&&n.ref===e.ref)return es(n,e,r)}return e.flags|=1,n=Is(s,i),n.ref=e.ref,n.return=e,e.child=n}function $S(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Lc(s,i)&&n.ref===e.ref)if(Jn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Jn=!0);else return e.lanes=n.lanes,es(n,e,r)}return tm(n,e,t,i,r)}function qS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Pa,mi),mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,bt(Pa,mi),mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,bt(Pa,mi),mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,bt(Pa,mi),mi|=i;return Bn(n,e,r,t),e.child}function KS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tm(n,e,t,i,r){var s=ti(t)?Io:In.current;return s=Qa(e,s),za(e,r),t=Jg(n,e,t,i,s,r),i=e_(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(It&&i&&Hg(e),e.flags|=1,Bn(n,e,t,r),e.child)}function Q0(n,e,t,i,r){if(ti(t)){var s=!0;ed(e)}else s=!1;if(za(e,r),e.stateNode===null)wf(n,e),WS(e,t,i),Jp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=$i(c):(c=ti(t)?Io:In.current,c=Qa(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&X0(e,o,i,c),ms=!1;var d=e.memoizedState;o.state=d,sd(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ei.current||ms?(typeof u=="function"&&(Qp(e,t,u,i),l=e.memoizedState),(a=ms||W0(e,t,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wS(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:nr(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=$i(l):(l=ti(t)?Io:In.current,l=Qa(e,l));var h=t.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&X0(e,o,i,l),ms=!1,d=e.memoizedState,o.state=d,sd(e,i,o,r);var m=e.memoizedState;a!==f||d!==m||ei.current||ms?(typeof h=="function"&&(Qp(e,t,h,i),m=e.memoizedState),(c=ms||W0(e,t,c,i,d,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return nm(n,e,t,i,s,r)}function nm(n,e,t,i,r,s){KS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&F0(e,t,!1),es(n,e,s);i=e.stateNode,kT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=el(e,n.child,null,s),e.child=el(e,null,a,s)):Bn(n,e,a,s),e.memoizedState=i.state,r&&F0(e,t,!0),e.child}function ZS(n){var e=n.stateNode;e.pendingContext?k0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&k0(n,e.context,!1),qg(n,e.containerInfo)}function J0(n,e,t,i,r){return Ja(),Gg(r),e.flags|=256,Bn(n,e,t,i),e.child}var im={dehydrated:null,treeContext:null,retryLane:0};function rm(n){return{baseLanes:n,cachePool:null,transitions:null}}function QS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),bt(Ot,r&1),n===null)return Kp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jd(o,i,0,null),n=Ao(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rm(t),e.memoizedState=im,n):i_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Is(a,s):(s=Ao(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?rm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=im,i}return s=n.child,n=s.sibling,i=Is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function i_(n,e){return e=jd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Eu(n,e,t,i){return i!==null&&Gg(i),el(e,n.child,null,t),n=i_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ch(Error(ue(422))),Eu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jd({mode:"visible",children:i.children},r,0,null),s=Ao(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&el(e,n.child,null,o),e.child.memoizedState=rm(o),e.memoizedState=im,s);if(!(e.mode&1))return Eu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Ch(s,i,void 0),Eu(n,e,o,i)}if(a=(o&n.childLanes)!==0,Jn||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Jr(n,r),cr(i,n,r,-1))}return c_(),i=Ch(Error(ue(421))),Eu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Si=Ps(r.nextSibling),Ti=e,It=!0,sr=null,n!==null&&(ki[Fi++]=jr,ki[Fi++]=Wr,ki[Fi++]=Uo,jr=n.id,Wr=n.overflow,Uo=e),e=i_(e,i.children),e.flags|=4096,e)}function ev(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zp(n.return,e,t)}function Rh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function JS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ev(n,t,e);else if(n.tag===19)ev(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(bt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&od(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Rh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&od(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Rh(e,!0,t,null,s);break;case"together":Rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function es(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Fo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=Is(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Is(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OT(n,e,t){switch(e.tag){case 3:ZS(e),Ja();break;case 5:TS(e);break;case 1:ti(e.type)&&ed(e);break;case 4:qg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(id,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?QS(n,e,t):(bt(Ot,Ot.current&1),n=es(n,e,t),n!==null?n.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return JS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,qS(n,e,t)}return es(n,e,t)}var eM,sm,tM,nM;eM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sm=function(){};tM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,xo(Ar.current);var s=null;switch(t){case"input":r=Cp(n,r),i=Cp(n,i),s=[];break;case"select":r=Gt({},r,{value:void 0}),i=Gt({},i,{value:void 0}),s=[];break;case"textarea":r=Pp(n,r),i=Pp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Qf)}Dp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nM=function(n,e,t,i){t!==i&&(e.flags|=4)};function Rl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function zT(n,e,t){var i=e.pendingProps;switch(Vg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return ti(e.type)&&Jf(),wn(e),null;case 3:return i=e.stateNode,tl(),Nt(ei),Nt(In),Zg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Su(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr!==null&&(hm(sr),sr=null))),sm(n,e),wn(e),null;case 5:Kg(e);var r=xo(kc.current);if(t=e.type,n!==null&&e.stateNode!=null)tM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return wn(e),null}if(n=xo(Ar.current),Su(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yr]=e,i[Ic]=s,n=(e.mode&1)!==0,t){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<Gl.length;r++)Lt(Gl[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":c0(i,s),Lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Lt("invalid",i);break;case"textarea":f0(i,s),Lt("invalid",i)}Dp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yu(i.textContent,a,n),r=["children",""+a]):wc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Lt("scroll",i)}switch(t){case"input":du(i),u0(i,s,!0);break;case"textarea":du(i),d0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Py(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yr]=e,n[Ic]=i,eM(n,e,!1,!1),e.stateNode=n;e:{switch(o=Np(t,i),t){case"dialog":Lt("cancel",n),Lt("close",n),r=i;break;case"iframe":case"object":case"embed":Lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Gl.length;r++)Lt(Gl[r],n);r=i;break;case"source":Lt("error",n),r=i;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),r=i;break;case"details":Lt("toggle",n),r=i;break;case"input":c0(n,i),r=Cp(n,i),Lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Gt({},i,{value:void 0}),Lt("invalid",n);break;case"textarea":f0(n,i),r=Pp(n,i),Lt("invalid",n);break;default:r=i}Dp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ny(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ly(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Tc(n,l):typeof l=="number"&&Tc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Lt("scroll",n):l!=null&&Cg(n,s,l,o))}switch(t){case"input":du(n),u0(n,i,!1);break;case"textarea":du(n),d0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ua(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ua(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Qf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(n&&e.stateNode!=null)nM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=xo(kc.current),xo(Ar.current),Su(e)){if(i=e.stateNode,t=e.memoizedProps,i[yr]=e,(s=i.nodeValue!==t)&&(n=Ti,n!==null))switch(n.tag){case 3:yu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yr]=e,e.stateNode=i}return wn(e),null;case 13:if(Nt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&Si!==null&&e.mode&1&&!(e.flags&128))yS(),Ja(),e.flags|=98560,s=!1;else if(s=Su(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[yr]=e}else Ja(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else sr!==null&&(hm(sr),sr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?an===0&&(an=3):c_())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return tl(),sm(n,e),n===null&&Dc(e.stateNode.containerInfo),wn(e),null;case 10:return Xg(e.type._context),wn(e),null;case 17:return ti(e.type)&&Jf(),wn(e),null;case 19:if(Nt(Ot),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Rl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=od(n),o!==null){for(e.flags|=128,Rl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return bt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Yt()>il&&(e.flags|=128,i=!0,Rl(s,!1),e.lanes=4194304)}else{if(!i)if(n=od(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Rl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return wn(e),null}else 2*Yt()-s.renderingStartTime>il&&t!==1073741824&&(e.flags|=128,i=!0,Rl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,t=Ot.current,bt(Ot,i?t&1|2:t&1),e):(wn(e),null);case 22:case 23:return l_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mi&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function BT(n,e){switch(Vg(e),e.tag){case 1:return ti(e.type)&&Jf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return tl(),Nt(ei),Nt(In),Zg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(Nt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Ja()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Nt(Ot),null;case 4:return tl(),null;case 10:return Xg(e.type._context),null;case 22:case 23:return l_(),null;case 24:return null;default:return null}}var wu=!1,bn=!1,HT=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function ba(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){jt(n,e,i)}else t.current=null}function om(n,e,t){try{t()}catch(i){jt(n,e,i)}}var tv=!1;function VT(n,e){if(Gp=qf,n=aS(),Bg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var h;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(jp={focusedElem:n,selectionRange:t},qf=!1,Ae=e;Ae!==null;)if(e=Ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ae=n;else for(;Ae!==null;){e=Ae;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:nr(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){jt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}return m=tv,tv=!1,m}function oc(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&om(e,t,s)}r=r.next}while(r!==i)}}function Vd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function am(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function iM(n){var e=n.alternate;e!==null&&(n.alternate=null,iM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yr],delete e[Ic],delete e[Yp],delete e[wT],delete e[TT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rM(n){return n.tag===5||n.tag===3||n.tag===4}function nv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qf));else if(i!==4&&(n=n.child,n!==null))for(lm(n,e,t),n=n.sibling;n!==null;)lm(n,e,t),n=n.sibling}function cm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(cm(n,e,t),n=n.sibling;n!==null;)cm(n,e,t),n=n.sibling}var vn=null,ir=!1;function os(n,e,t){for(t=t.child;t!==null;)sM(n,e,t),t=t.sibling}function sM(n,e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(Id,t)}catch{}switch(t.tag){case 5:bn||ba(t,e);case 6:var i=vn,r=ir;vn=null,os(n,e,t),vn=i,ir=r,vn!==null&&(ir?(n=vn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vn.removeChild(t.stateNode));break;case 18:vn!==null&&(ir?(n=vn,t=t.stateNode,n.nodeType===8?Sh(n.parentNode,t):n.nodeType===1&&Sh(n,t),bc(n)):Sh(vn,t.stateNode));break;case 4:i=vn,r=ir,vn=t.stateNode.containerInfo,ir=!0,os(n,e,t),vn=i,ir=r;break;case 0:case 11:case 14:case 15:if(!bn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&om(t,e,o),r=r.next}while(r!==i)}os(n,e,t);break;case 1:if(!bn&&(ba(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){jt(t,e,a)}os(n,e,t);break;case 21:os(n,e,t);break;case 22:t.mode&1?(bn=(i=bn)||t.memoizedState!==null,os(n,e,t),bn=i):os(n,e,t);break;default:os(n,e,t)}}function iv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new HT),e.forEach(function(i){var r=ZT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Zi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vn=a.stateNode,ir=!1;break e;case 3:vn=a.stateNode.containerInfo,ir=!0;break e;case 4:vn=a.stateNode.containerInfo,ir=!0;break e}a=a.return}if(vn===null)throw Error(ue(160));sM(s,o,r),vn=null,ir=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){jt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oM(e,n),e=e.sibling}function oM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Zi(e,n),pr(n),i&4){try{oc(3,n,n.return),Vd(3,n)}catch(_){jt(n,n.return,_)}try{oc(5,n,n.return)}catch(_){jt(n,n.return,_)}}break;case 1:Zi(e,n),pr(n),i&512&&t!==null&&ba(t,t.return);break;case 5:if(Zi(e,n),pr(n),i&512&&t!==null&&ba(t,t.return),n.flags&32){var r=n.stateNode;try{Tc(r,"")}catch(_){jt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ry(r,s),Np(a,o);var c=Np(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Ny(r,f):u==="dangerouslySetInnerHTML"?Ly(r,f):u==="children"?Tc(r,f):Cg(r,u,f,c)}switch(a){case"input":Rp(r,s);break;case"textarea":by(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ua(r,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ua(r,!!s.multiple,s.defaultValue,!0):Ua(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ic]=s}catch(_){jt(n,n.return,_)}}break;case 6:if(Zi(e,n),pr(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){jt(n,n.return,_)}}break;case 3:if(Zi(e,n),pr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{bc(e.containerInfo)}catch(_){jt(n,n.return,_)}break;case 4:Zi(e,n),pr(n);break;case 13:Zi(e,n),pr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(o_=Yt())),i&4&&iv(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(bn=(c=bn)||u,Zi(e,n),bn=c):Zi(e,n),pr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ae=n,u=n.child;u!==null;){for(f=Ae=u;Ae!==null;){switch(d=Ae,h=d.child,d.tag){case 0:case 11:case 14:case 15:oc(4,d,d.return);break;case 1:ba(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){jt(i,t,_)}}break;case 5:ba(d,d.return);break;case 22:if(d.memoizedState!==null){sv(f);continue}}h!==null?(h.return=d,Ae=h):sv(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dy("display",o))}catch(_){jt(n,n.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){jt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zi(e,n),pr(n),i&4&&iv(n);break;case 21:break;default:Zi(e,n),pr(n)}}function pr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(rM(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Tc(r,""),i.flags&=-33);var s=nv(n);cm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nv(n);lm(n,a,o);break;default:throw Error(ue(161))}}catch(l){jt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GT(n,e,t){Ae=n,aM(n)}function aM(n,e,t){for(var i=(n.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bn;a=wu;var c=bn;if(wu=o,(bn=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?ov(r):l!==null?(l.return=o,Ae=l):ov(r);for(;s!==null;)Ae=s,aM(s),s=s.sibling;Ae=r,wu=a,bn=c}rv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):rv(n)}}function rv(n){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bn||Vd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:nr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&V0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}V0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&bc(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}bn||e.flags&512&&am(e)}catch(d){jt(e,e.return,d)}}if(e===n){Ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function sv(n){for(;Ae!==null;){var e=Ae;if(e===n){Ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function ov(n){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Vd(4,e)}catch(l){jt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{am(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{am(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===n){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var jT=Math.ceil,cd=rs.ReactCurrentDispatcher,r_=rs.ReactCurrentOwner,Xi=rs.ReactCurrentBatchConfig,pt=0,mn=null,Jt=null,yn=0,mi=0,Pa=qs(0),an=0,Bc=null,Fo=0,Gd=0,s_=0,ac=null,Zn=null,o_=0,il=1/0,Fr=null,ud=!1,um=null,Ds=null,Tu=!1,ys=null,fd=0,lc=0,fm=null,Tf=-1,Af=0;function Wn(){return pt&6?Yt():Tf!==-1?Tf:Tf=Yt()}function Ns(n){return n.mode&1?pt&2&&yn!==0?yn&-yn:CT.transition!==null?(Af===0&&(Af=Wy()),Af):(n=St,n!==0||(n=window.event,n=n===void 0?16:Qy(n.type)),n):1}function cr(n,e,t,i){if(50<lc)throw lc=0,fm=null,Error(ue(185));eu(n,t,i),(!(pt&2)||n!==mn)&&(n===mn&&(!(pt&2)&&(Gd|=t),an===4&&_s(n,yn)),ni(n,i),t===1&&pt===0&&!(e.mode&1)&&(il=Yt()+500,zd&&Ks()))}function ni(n,e){var t=n.callbackNode;Cw(n,e);var i=$f(n,n===mn?yn:0);if(i===0)t!==null&&m0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&m0(t),e===1)n.tag===0?AT(av.bind(null,n)):_S(av.bind(null,n)),MT(function(){!(pt&6)&&Ks()}),t=null;else{switch(Xy(i)){case 1:t=Dg;break;case 4:t=Gy;break;case 16:t=Yf;break;case 536870912:t=jy;break;default:t=Yf}t=mM(t,lM.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function lM(n,e){if(Tf=-1,Af=0,pt&6)throw Error(ue(327));var t=n.callbackNode;if(Ba()&&n.callbackNode!==t)return null;var i=$f(n,n===mn?yn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=dd(n,i);else{e=i;var r=pt;pt|=2;var s=uM();(mn!==n||yn!==e)&&(Fr=null,il=Yt()+500,To(n,e));do try{YT();break}catch(a){cM(n,a)}while(!0);Wg(),cd.current=s,pt=r,Jt!==null?e=0:(mn=null,yn=0,e=an)}if(e!==0){if(e===2&&(r=Op(n),r!==0&&(i=r,e=dm(n,r))),e===1)throw t=Bc,To(n,0),_s(n,i),ni(n,Yt()),t;if(e===6)_s(n,i);else{if(r=n.current.alternate,!(i&30)&&!WT(r)&&(e=dd(n,i),e===2&&(s=Op(n),s!==0&&(i=s,e=dm(n,s))),e===1))throw t=Bc,To(n,0),_s(n,i),ni(n,Yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:lo(n,Zn,Fr);break;case 3:if(_s(n,i),(i&130023424)===i&&(e=o_+500-Yt(),10<e)){if($f(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Xp(lo.bind(null,n,Zn,Fr),e);break}lo(n,Zn,Fr);break;case 4:if(_s(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-lr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jT(i/1960))-i,10<i){n.timeoutHandle=Xp(lo.bind(null,n,Zn,Fr),i);break}lo(n,Zn,Fr);break;case 5:lo(n,Zn,Fr);break;default:throw Error(ue(329))}}}return ni(n,Yt()),n.callbackNode===t?lM.bind(null,n):null}function dm(n,e){var t=ac;return n.current.memoizedState.isDehydrated&&(To(n,e).flags|=256),n=dd(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&hm(e)),n}function hm(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function WT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ur(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _s(n,e){for(e&=~s_,e&=~Gd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-lr(e),i=1<<t;n[t]=-1,e&=~i}}function av(n){if(pt&6)throw Error(ue(327));Ba();var e=$f(n,0);if(!(e&1))return ni(n,Yt()),null;var t=dd(n,e);if(n.tag!==0&&t===2){var i=Op(n);i!==0&&(e=i,t=dm(n,i))}if(t===1)throw t=Bc,To(n,0),_s(n,e),ni(n,Yt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,lo(n,Zn,Fr),ni(n,Yt()),null}function a_(n,e){var t=pt;pt|=1;try{return n(e)}finally{pt=t,pt===0&&(il=Yt()+500,zd&&Ks())}}function Oo(n){ys!==null&&ys.tag===0&&!(pt&6)&&Ba();var e=pt;pt|=1;var t=Xi.transition,i=St;try{if(Xi.transition=null,St=1,n)return n()}finally{St=i,Xi.transition=t,pt=e,!(pt&6)&&Ks()}}function l_(){mi=Pa.current,Nt(Pa)}function To(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ST(t)),Jt!==null)for(t=Jt.return;t!==null;){var i=t;switch(Vg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jf();break;case 3:tl(),Nt(ei),Nt(In),Zg();break;case 5:Kg(i);break;case 4:tl();break;case 13:Nt(Ot);break;case 19:Nt(Ot);break;case 10:Xg(i.type._context);break;case 22:case 23:l_()}t=t.return}if(mn=n,Jt=n=Is(n.current,null),yn=mi=e,an=0,Bc=null,s_=Gd=Fo=0,Zn=ac=null,vo!==null){for(e=0;e<vo.length;e++)if(t=vo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}vo=null}return n}function cM(n,e){do{var t=Jt;try{if(Wg(),Mf.current=ld,ad){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ad=!1}if(ko=0,pn=rn=Ht=null,sc=!1,Fc=0,r_.current=null,t===null||t.return===null){an=1,Bc=e,Jt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=yn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=$0(o);if(h!==null){h.flags&=-257,q0(h,o,a,s,e),h.mode&1&&Y0(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){Y0(s,c,e),c_();break e}l=Error(ue(426))}}else if(It&&a.mode&1){var g=$0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),q0(g,o,a,s,e),Gg(nl(l,a));break e}}s=l=nl(l,a),an!==4&&(an=2),ac===null?ac=[s]:ac.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=XS(s,l,e);H0(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ds===null||!Ds.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=YS(s,a,e);H0(s,S);break e}}s=s.return}while(s!==null)}dM(t)}catch(R){e=R,Jt===t&&t!==null&&(Jt=t=t.return);continue}break}while(!0)}function uM(){var n=cd.current;return cd.current=ld,n===null?ld:n}function c_(){(an===0||an===3||an===2)&&(an=4),mn===null||!(Fo&268435455)&&!(Gd&268435455)||_s(mn,yn)}function dd(n,e){var t=pt;pt|=2;var i=uM();(mn!==n||yn!==e)&&(Fr=null,To(n,e));do try{XT();break}catch(r){cM(n,r)}while(!0);if(Wg(),pt=t,cd.current=i,Jt!==null)throw Error(ue(261));return mn=null,yn=0,an}function XT(){for(;Jt!==null;)fM(Jt)}function YT(){for(;Jt!==null&&!vw();)fM(Jt)}function fM(n){var e=pM(n.alternate,n,mi);n.memoizedProps=n.pendingProps,e===null?dM(n):Jt=e,r_.current=null}function dM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=BT(t,e),t!==null){t.flags&=32767,Jt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,Jt=null;return}}else if(t=zT(t,e,mi),t!==null){Jt=t;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=n}while(e!==null);an===0&&(an=5)}function lo(n,e,t){var i=St,r=Xi.transition;try{Xi.transition=null,St=1,$T(n,e,t,i)}finally{Xi.transition=r,St=i}return null}function $T(n,e,t,i){do Ba();while(ys!==null);if(pt&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Rw(n,s),n===mn&&(Jt=mn=null,yn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Tu||(Tu=!0,mM(Yf,function(){return Ba(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=St;St=1;var a=pt;pt|=4,r_.current=null,VT(n,t),oM(t,n),pT(jp),qf=!!Gp,jp=Gp=null,n.current=t,GT(t),xw(),pt=a,St=o,Xi.transition=s}else n.current=t;if(Tu&&(Tu=!1,ys=n,fd=r),s=n.pendingLanes,s===0&&(Ds=null),Mw(t.stateNode),ni(n,Yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ud)throw ud=!1,n=um,um=null,n;return fd&1&&n.tag!==0&&Ba(),s=n.pendingLanes,s&1?n===fm?lc++:(lc=0,fm=n):lc=0,Ks(),null}function Ba(){if(ys!==null){var n=Xy(fd),e=Xi.transition,t=St;try{if(Xi.transition=null,St=16>n?16:n,ys===null)var i=!1;else{if(n=ys,ys=null,fd=0,pt&6)throw Error(ue(331));var r=pt;for(pt|=4,Ae=n.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:oc(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ae=f;else for(;Ae!==null;){u=Ae;var d=u.sibling,h=u.return;if(iM(u),u===c){Ae=null;break}if(d!==null){d.return=h,Ae=d;break}Ae=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oc(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ae=p;break e}Ae=s.return}}var v=n.current;for(Ae=v;Ae!==null;){o=Ae;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ae=x;else e:for(o=v;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vd(9,a)}}catch(R){jt(a,a.return,R)}if(a===o){Ae=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ae=S;break e}Ae=a.return}}if(pt=r,Ks(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(Id,n)}catch{}i=!0}return i}finally{St=t,Xi.transition=e}}return!1}function lv(n,e,t){e=nl(t,e),e=XS(n,e,1),n=Ls(n,e,1),e=Wn(),n!==null&&(eu(n,1,e),ni(n,e))}function jt(n,e,t){if(n.tag===3)lv(n,n,t);else for(;e!==null;){if(e.tag===3){lv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ds===null||!Ds.has(i))){n=nl(t,n),n=YS(e,n,1),e=Ls(e,n,1),n=Wn(),e!==null&&(eu(e,1,n),ni(e,n));break}}e=e.return}}function qT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,mn===n&&(yn&t)===t&&(an===4||an===3&&(yn&130023424)===yn&&500>Yt()-o_?To(n,0):s_|=t),ni(n,e)}function hM(n,e){e===0&&(n.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var t=Wn();n=Jr(n,e),n!==null&&(eu(n,e,t),ni(n,t))}function KT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),hM(n,t)}function ZT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),hM(n,t)}var pM;pM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ei.current)Jn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Jn=!1,OT(n,e,t);Jn=!!(n.flags&131072)}else Jn=!1,It&&e.flags&1048576&&vS(e,nd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wf(n,e),n=e.pendingProps;var r=Qa(e,In.current);za(e,t),r=Jg(null,e,i,n,r,t);var s=e_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,ed(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$g(e),r.updater=Hd,e.stateNode=r,r._reactInternals=e,Jp(e,i,n,t),e=nm(null,e,i,!0,s,t)):(e.tag=0,It&&s&&Hg(e),Bn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(wf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JT(i),n=nr(i,n),r){case 0:e=tm(null,e,i,n,t);break e;case 1:e=Q0(null,e,i,n,t);break e;case 11:e=K0(null,e,i,n,t);break e;case 14:e=Z0(null,e,i,nr(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:nr(i,r),tm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:nr(i,r),Q0(n,e,i,r,t);case 3:e:{if(ZS(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wS(n,e),sd(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=nl(Error(ue(423)),e),e=J0(n,e,i,t,r);break e}else if(i!==r){r=nl(Error(ue(424)),e),e=J0(n,e,i,t,r);break e}else for(Si=Ps(e.stateNode.containerInfo.firstChild),Ti=e,It=!0,sr=null,t=MS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ja(),i===r){e=es(n,e,t);break e}Bn(n,e,i,t)}e=e.child}return e;case 5:return TS(e),n===null&&Kp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Wp(i,r)?o=null:s!==null&&Wp(i,s)&&(e.flags|=32),KS(n,e),Bn(n,e,o,t),e.child;case 6:return n===null&&Kp(e),null;case 13:return QS(n,e,t);case 4:return qg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=el(e,null,i,t):Bn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:nr(i,r),K0(n,e,i,r,t);case 7:return Bn(n,e,e.pendingProps,t),e.child;case 8:return Bn(n,e,e.pendingProps.children,t),e.child;case 12:return Bn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(id,i._currentValue),i._currentValue=o,s!==null)if(ur(s.value,o)){if(s.children===r.children&&!ei.current){e=es(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,za(e,t),r=$i(r),i=i(r),e.flags|=1,Bn(n,e,i,t),e.child;case 14:return i=e.type,r=nr(i,e.pendingProps),r=nr(i.type,r),Z0(n,e,i,r,t);case 15:return $S(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:nr(i,r),wf(n,e),e.tag=1,ti(i)?(n=!0,ed(e)):n=!1,za(e,t),WS(e,i,r),Jp(e,i,r,t),nm(null,e,i,!0,n,t);case 19:return JS(n,e,t);case 22:return qS(n,e,t)}throw Error(ue(156,e.tag))};function mM(n,e){return Vy(n,e)}function QT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,e,t,i){return new QT(n,e,t,i)}function u_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JT(n){if(typeof n=="function")return u_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===bg)return 11;if(n===Pg)return 14}return 2}function Is(n,e){var t=n.alternate;return t===null?(t=Hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Cf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")u_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ya:return Ao(t.children,r,s,e);case Rg:o=8,r|=8;break;case Ep:return n=Hi(12,t,e,r|2),n.elementType=Ep,n.lanes=s,n;case wp:return n=Hi(13,t,e,r),n.elementType=wp,n.lanes=s,n;case Tp:return n=Hi(19,t,e,r),n.elementType=Tp,n.lanes=s,n;case Ty:return jd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ey:o=10;break e;case wy:o=9;break e;case bg:o=11;break e;case Pg:o=14;break e;case ps:o=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=Hi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ao(n,e,t,i){return n=Hi(7,n,i,e),n.lanes=t,n}function jd(n,e,t,i){return n=Hi(22,n,i,e),n.elementType=Ty,n.lanes=t,n.stateNode={isHidden:!1},n}function bh(n,e,t){return n=Hi(6,n,null,e),n.lanes=t,n}function Ph(n,e,t){return e=Hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function eA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uh(0),this.expirationTimes=uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function f_(n,e,t,i,r,s,o,a,l){return n=new eA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$g(s),n}function tA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function gM(n){if(!n)return Hs;n=n._reactInternals;e:{if(Wo(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(ti(t))return gS(n,t,e)}return e}function _M(n,e,t,i,r,s,o,a,l){return n=f_(t,i,!0,n,r,s,o,a,l),n.context=gM(null),t=n.current,i=Wn(),r=Ns(t),s=qr(i,r),s.callback=e??null,Ls(t,s,r),n.current.lanes=r,eu(n,r,i),ni(n,i),n}function Wd(n,e,t,i){var r=e.current,s=Wn(),o=Ns(r);return t=gM(t),e.context===null?e.context=t:e.pendingContext=t,e=qr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ls(r,e,o),n!==null&&(cr(n,r,o,s),Sf(n,r,o)),o}function hd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function d_(n,e){cv(n,e),(n=n.alternate)&&cv(n,e)}function nA(){return null}var vM=typeof reportError=="function"?reportError:function(n){console.error(n)};function h_(n){this._internalRoot=n}Xd.prototype.render=h_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));Wd(n,e,null,null)};Xd.prototype.unmount=h_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Oo(function(){Wd(null,n,null,null)}),e[Qr]=null}};function Xd(n){this._internalRoot=n}Xd.prototype.unstable_scheduleHydration=function(n){if(n){var e=qy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gs.length&&e!==0&&e<gs[t].priority;t++);gs.splice(t,0,n),t===0&&Zy(n)}};function p_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function uv(){}function iA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hd(o);s.call(c)}}var o=_M(e,i,n,0,null,!1,!1,"",uv);return n._reactRootContainer=o,n[Qr]=o.current,Dc(n.nodeType===8?n.parentNode:n),Oo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hd(l);a.call(c)}}var l=f_(n,0,!1,null,null,!1,!1,"",uv);return n._reactRootContainer=l,n[Qr]=l.current,Dc(n.nodeType===8?n.parentNode:n),Oo(function(){Wd(e,l,t,i)}),l}function $d(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hd(o);a.call(l)}}Wd(e,o,n,r)}else o=iA(t,e,n,r,i);return hd(o)}Yy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Vl(e.pendingLanes);t!==0&&(Ng(e,t|1),ni(e,Yt()),!(pt&6)&&(il=Yt()+500,Ks()))}break;case 13:Oo(function(){var i=Jr(n,1);if(i!==null){var r=Wn();cr(i,n,1,r)}}),d_(n,1)}};Ig=function(n){if(n.tag===13){var e=Jr(n,134217728);if(e!==null){var t=Wn();cr(e,n,134217728,t)}d_(n,134217728)}};$y=function(n){if(n.tag===13){var e=Ns(n),t=Jr(n,e);if(t!==null){var i=Wn();cr(t,n,e,i)}d_(n,e)}};qy=function(){return St};Ky=function(n,e){var t=St;try{return St=n,e()}finally{St=t}};Up=function(n,e,t){switch(e){case"input":if(Rp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Od(i);if(!r)throw Error(ue(90));Cy(i),Rp(i,r)}}}break;case"textarea":by(n,t);break;case"select":e=t.value,e!=null&&Ua(n,!!t.multiple,e,!1)}};ky=a_;Fy=Oo;var rA={usingClientEntryPoint:!1,Events:[nu,wa,Od,Iy,Uy,a_]},bl={findFiberByHostInstance:_o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sA={bundleType:bl.bundleType,version:bl.version,rendererPackageName:bl.rendererPackageName,rendererConfig:bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=By(n),n===null?null:n.stateNode},findFiberByHostInstance:bl.findFiberByHostInstance||nA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Id=Au.inject(sA),Tr=Au}catch{}}Pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;Pi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p_(e))throw Error(ue(200));return tA(n,e,null,t)};Pi.createRoot=function(n,e){if(!p_(n))throw Error(ue(299));var t=!1,i="",r=vM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=f_(n,1,!1,null,null,t,!1,i,r),n[Qr]=e.current,Dc(n.nodeType===8?n.parentNode:n),new h_(e)};Pi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=By(e),n=n===null?null:n.stateNode,n};Pi.flushSync=function(n){return Oo(n)};Pi.hydrate=function(n,e,t){if(!Yd(e))throw Error(ue(200));return $d(null,n,e,!0,t)};Pi.hydrateRoot=function(n,e,t){if(!p_(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=vM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=_M(e,null,n,1,t??null,r,!1,s,o),n[Qr]=e.current,Dc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Xd(e)};Pi.render=function(n,e,t){if(!Yd(e))throw Error(ue(200));return $d(null,n,e,!1,t)};Pi.unmountComponentAtNode=function(n){if(!Yd(n))throw Error(ue(40));return n._reactRootContainer?(Oo(function(){$d(null,null,n,!1,function(){n._reactRootContainer=null,n[Qr]=null})}),!0):!1};Pi.unstable_batchedUpdates=a_;Pi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Yd(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return $d(n,e,t,!1,i)};Pi.version="18.3.1-next-f1338f8080-20240426";function xM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xM)}catch(n){console.error(n)}}xM(),xy.exports=Pi;var oA=xy.exports,yM,fv=oA;yM=fv.createRoot,fv.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SM=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=We.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>We.createElement("svg",{ref:l,...lA,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:SM("lucide",r),...a},[...o.map(([c,u])=>We.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(n,e)=>{const t=We.forwardRef(({className:i,...r},s)=>We.createElement(cA,{ref:s,iconNode:e,className:SM(`lucide-${aA(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=$n("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=$n("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=$n("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=$n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=$n("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=$n("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=$n("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=$n("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=$n("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=$n("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=$n("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=$n("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=$n("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=$n("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=$n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const m_="168",_A=0,hv=1,vA=2,bM=1,PM=2,kr=3,Vs=0,ii=1,Hr=2,Us=0,Ha=1,pv=2,mv=3,gv=4,xA=5,mo=100,yA=101,SA=102,MA=103,EA=104,wA=200,TA=201,AA=202,CA=203,pm=204,mm=205,RA=206,bA=207,PA=208,LA=209,DA=210,NA=211,IA=212,UA=213,kA=214,FA=0,OA=1,zA=2,pd=3,BA=4,HA=5,VA=6,GA=7,g_=0,jA=1,WA=2,ks=0,XA=1,YA=2,$A=3,qA=4,KA=5,ZA=6,QA=7,LM=300,rl=301,sl=302,gm=303,_m=304,qd=306,vm=1e3,yo=1001,xm=1002,Vi=1003,JA=1004,Cu=1005,or=1006,Lh=1007,So=1008,ts=1009,DM=1010,NM=1011,Hc=1012,__=1013,zo=1014,Xr=1015,ru=1016,v_=1017,x_=1018,ol=1020,IM=35902,UM=1021,kM=1022,ar=1023,FM=1024,OM=1025,Va=1026,al=1027,zM=1028,y_=1029,BM=1030,S_=1031,M_=1033,Rf=33776,bf=33777,Pf=33778,Lf=33779,ym=35840,Sm=35841,Mm=35842,Em=35843,wm=36196,Tm=37492,Am=37496,Cm=37808,Rm=37809,bm=37810,Pm=37811,Lm=37812,Dm=37813,Nm=37814,Im=37815,Um=37816,km=37817,Fm=37818,Om=37819,zm=37820,Bm=37821,Df=36492,Hm=36494,Vm=36495,HM=36283,Gm=36284,jm=36285,Wm=36286,eC=3200,tC=3201,E_=0,nC=1,vs="",rr="srgb",Zs="srgb-linear",w_="display-p3",Kd="display-p3-linear",md="linear",Dt="srgb",gd="rec709",_d="p3",qo=7680,_v=519,iC=512,rC=513,sC=514,VM=515,oC=516,aC=517,lC=518,cC=519,vv=35044,xv="300 es",Yr=2e3,vd=2001;class vl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yv=1234567;const cc=Math.PI/180,Vc=180/Math.PI;function xl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Pn(n,e,t){return Math.max(e,Math.min(t,n))}function T_(n,e){return(n%e+e)%e}function uC(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function fC(n,e,t){return n!==e?(t-n)/(e-n):0}function uc(n,e,t){return(1-t)*n+t*e}function dC(n,e,t,i){return uc(n,e,1-Math.exp(-t*i))}function hC(n,e=1){return e-Math.abs(T_(n,e*2)-e)}function pC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gC(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _C(n,e){return n+Math.random()*(e-n)}function vC(n){return n*(.5-Math.random())}function xC(n){n!==void 0&&(yv=n);let e=yv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yC(n){return n*cc}function SC(n){return n*Vc}function MC(n){return(n&n-1)===0&&n!==0}function EC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TC(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pl={DEG2RAD:cc,RAD2DEG:Vc,generateUUID:xl,clamp:Pn,euclideanModulo:T_,mapLinear:uC,inverseLerp:fC,lerp:uc,damp:dC,pingpong:hC,smoothstep:pC,smootherstep:mC,randInt:gC,randFloat:_C,randFloatSpread:vC,seededRandom:xC,degToRad:yC,radToDeg:SC,isPowerOfTwo:MC,ceilPowerOfTwo:EC,floorPowerOfTwo:wC,setQuaternionFromProperEuler:TC,normalize:kn,denormalize:ga};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],v=r[1],x=r[4],S=r[7],R=r[2],A=r[5],E=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*g+a*x+l*A,s[6]=o*p+a*S+l*E,s[1]=c*_+u*v+f*R,s[4]=c*g+u*x+f*A,s[7]=c*p+u*S+f*E,s[2]=d*_+h*v+m*R,s[5]=d*g+h*x+m*A,s[8]=d*p+h*S+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,m=t*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new et;function GM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AC(){const n=xd("canvas");return n.style.display="block",n}const Sv={};function fc(n){n in Sv||(Sv[n]=!0,console.warn(n))}function CC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Mv=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ev=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[Zs]:{transfer:md,primaries:gd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[rr]:{transfer:Dt,primaries:gd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Kd]:{transfer:md,primaries:_d,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ev),fromReference:n=>n.applyMatrix3(Mv)},[w_]:{transfer:Dt,primaries:_d,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ev),fromReference:n=>n.applyMatrix3(Mv).convertLinearToSRGB()}},RC=new Set([Zs,Kd]),vt={enabled:!0,_workingColorSpace:Zs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!RC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ll[e].toReference,r=Ll[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ll[n].primaries},getTransfer:function(n){return n===vs?md:Ll[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ll[e].luminanceCoefficients)}};function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class bC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ko===void 0&&(Ko=xd("canvas")),Ko.width=e.width,Ko.height=e.height;const i=Ko.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PC=0;class jM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PC++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ih(r[o].image)):s.push(Ih(r[o]))}else s=Ih(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ih(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LC=0;class ri extends vl{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=yo,r=yo,s=or,o=So,a=ar,l=ts,c=ri.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=xl(),this.name="",this.source=new jM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vm:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case xm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vm:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case xm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=LM;ri.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,i=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(h+1)/2,R=(p+1)/2,A=(u+d)/4,E=(f+_)/4,b=(m+g)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=E/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DC extends vl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bo extends DC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class WM extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NC extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class su{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==m){let g=1-a;const p=l*d+c*h+u*m+f*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*v);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const S=a*v;if(l=l*g+d*S,c=c*g+h*S,u=u*g+m*S,f=f*g+_*S,g===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*f+l*h-c*d,e[t+1]=l*m+u*d+c*f-a*h,e[t+2]=c*m+u*h+a*d-l*f,e[t+3]=u*m-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f-d*h*m;break;case"YXZ":this._x=d*u*f+c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f+d*h*m;break;case"ZXY":this._x=d*u*f-c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f-d*h*m;break;case"ZYX":this._x=d*u*f-c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f+d*h*m;break;case"YZX":this._x=d*u*f+c*h*m,this._y=c*h*f+d*u*m,this._z=c*u*m-d*h*f,this._w=c*u*f-d*h*m;break;case"XZY":this._x=d*u*f-c*h*m,this._y=c*h*f-d*u*m,this._z=c*u*m+d*h*f,this._w=c*u*f+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new j,wv=new su;class yl{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ru.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ru.copy(i.boundingBox)),Ru.applyMatrix4(e.matrixWorld),this.union(Ru)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),bu.subVectors(this.max,Dl),Zo.subVectors(e.a,Dl),Qo.subVectors(e.b,Dl),Jo.subVectors(e.c,Dl),as.subVectors(Qo,Zo),ls.subVectors(Jo,Qo),Js.subVectors(Zo,Jo);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Js.z,Js.y,as.z,0,-as.x,ls.z,0,-ls.x,Js.z,0,-Js.x,-as.y,as.x,0,-ls.y,ls.x,0,-Js.y,Js.x,0];return!kh(t,Zo,Qo,Jo,bu)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Zo,Qo,Jo,bu))?!1:(Pu.crossVectors(as,ls),t=[Pu.x,Pu.y,Pu.z],kh(t,Zo,Qo,Jo,bu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new j,new j,new j,new j,new j,new j,new j,new j],Qi=new j,Ru=new yl,Zo=new j,Qo=new j,Jo=new j,as=new j,ls=new j,Js=new j,Dl=new j,bu=new j,Pu=new j,eo=new j;function kh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){eo.fromArray(n,s);const a=r.x*Math.abs(eo.x)+r.y*Math.abs(eo.y)+r.z*Math.abs(eo.z),l=e.dot(eo),c=t.dot(eo),u=i.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IC=new yl,Nl=new j,Fh=new j;class ou{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nl.subVectors(e,this.center);const t=Nl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Nl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nl.copy(e.center).add(Fh)),this.expandByPoint(Nl.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new j,Oh=new j,Lu=new j,cs=new j,zh=new j,Du=new j,Bh=new j;class A_{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oh.copy(e).add(t).multiplyScalar(.5),Lu.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Oh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lu),a=cs.dot(this.direction),l=-cs.dot(Lu),c=cs.lengthSq(),u=Math.abs(1-o*o);let f,d,h,m;if(u>0)if(f=o*l-a,d=o*a-l,m=s*u,f>=0)if(d>=-m)if(d<=m){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oh).addScaledVector(Lu,d),h}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,r,s){zh.subVectors(t,e),Du.subVectors(i,e),Bh.crossVectors(zh,Du);let o=this.direction.dot(Bh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const l=a*this.direction.dot(Du.crossVectors(cs,Du));if(l<0)return null;const c=a*this.direction.dot(zh.cross(cs));if(c<0||l+c>o)return null;const u=-a*cs.dot(Bh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,m=c*u,_=c*f;t[0]=d+_*a,t[4]=m*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,m=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=m*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=m*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+m,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-m,t[2]=m*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UC,e,kC)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),us.crossVectors(i,di),us.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),us.crossVectors(i,di)),us.normalize(),Nu.crossVectors(di,us),r[0]=us.x,r[4]=Nu.x,r[8]=di.x,r[1]=us.y,r[5]=Nu.y,r[9]=di.y,r[2]=us.z,r[6]=Nu.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],x=i[7],S=i[11],R=i[15],A=r[0],E=r[4],b=r[8],w=r[12],M=r[1],D=r[5],k=r[9],B=r[13],W=r[2],K=r[6],X=r[10],V=r[14],U=r[3],Z=r[7],P=r[11],se=r[15];return s[0]=o*A+a*M+l*W+c*U,s[4]=o*E+a*D+l*K+c*Z,s[8]=o*b+a*k+l*X+c*P,s[12]=o*w+a*B+l*V+c*se,s[1]=u*A+f*M+d*W+h*U,s[5]=u*E+f*D+d*K+h*Z,s[9]=u*b+f*k+d*X+h*P,s[13]=u*w+f*B+d*V+h*se,s[2]=m*A+_*M+g*W+p*U,s[6]=m*E+_*D+g*K+p*Z,s[10]=m*b+_*k+g*X+p*P,s[14]=m*w+_*B+g*V+p*se,s[3]=v*A+x*M+S*W+R*U,s[7]=v*E+x*D+S*K+R*Z,s[11]=v*b+x*k+S*X+R*P,s[15]=v*w+x*B+S*V+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+g*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=f*g*c-_*d*c+_*l*h-a*g*h-f*l*p+a*d*p,x=m*d*c-u*g*c-m*l*h+o*g*h+u*l*p-o*d*p,S=u*_*c-m*f*c+m*a*h-o*_*h-u*a*p+o*f*p,R=m*f*l-u*_*l-m*a*d+o*_*d+u*a*g-o*f*g,A=t*v+i*x+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=v*E,e[1]=(_*d*s-f*g*s-_*r*h+i*g*h+f*r*p-i*d*p)*E,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*E,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*E,e[4]=x*E,e[5]=(u*g*s-m*d*s+m*r*h-t*g*h-u*r*p+t*d*p)*E,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*p-t*l*p)*E,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*E,e[8]=S*E,e[9]=(m*f*s-u*_*s-m*i*h+t*_*h+u*i*p-t*f*p)*E,e[10]=(o*_*s-m*a*s+m*i*c-t*_*c-o*i*p+t*a*p)*E,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*E,e[12]=R*E,e[13]=(u*_*r-m*f*r+m*i*d-t*_*d-u*i*g+t*f*g)*E,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*g-t*a*g)*E,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,m=s*f,_=o*u,g=o*f,p=a*f,v=l*c,x=l*u,S=l*f,R=i.x,A=i.y,E=i.z;return r[0]=(1-(_+p))*R,r[1]=(h+S)*R,r[2]=(m-x)*R,r[3]=0,r[4]=(h-S)*A,r[5]=(1-(d+p))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+x)*E,r[9]=(g-v)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ea.set(r[0],r[1],r[2]).length();const o=ea.set(r[4],r[5],r[6]).length(),a=ea.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ji.copy(this);const c=1/s,u=1/o,f=1/a;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=u,Ji.elements[5]*=u,Ji.elements[6]*=u,Ji.elements[8]*=f,Ji.elements[9]*=f,Ji.elements[10]*=f,t.setFromRotationMatrix(Ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Yr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,m;if(a===Yr)h=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===vd)h=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let m,_;if(a===Yr)m=(o+s)*f,_=-2*f;else if(a===vd)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ea=new j,Ji=new Vt,UC=new j(0,0,0),kC=new j(1,1,1),us=new j,Nu=new j,di=new j,Tv=new Vt,Av=new su;class fr{constructor(e=0,t=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class XM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FC=0;const Cv=new j,ta=new su,Dr=new Vt,Iu=new j,Il=new j,OC=new j,zC=new su,Rv=new j(1,0,0),bv=new j(0,1,0),Pv=new j(0,0,1),Lv={type:"added"},BC={type:"removed"},na={type:"childadded",child:null},Hh={type:"childremoved",child:null};class ln extends vl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new j,t=new fr,i=new su,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new et}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new XM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(bv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,t){return Cv.copy(e).applyQuaternion(this.quaternion),this.position.add(Cv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(bv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Iu.copy(e):Iu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Il,Iu,this.up):Dr.lookAt(Iu,Il,this.up),this.quaternion.setFromRotationMatrix(Dr),r&&(Dr.extractRotation(r.matrixWorld),ta.setFromRotationMatrix(Dr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lv),na.child=e,this.dispatchEvent(na),na.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BC),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lv),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,e,OC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,zC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new j(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const er=new j,Nr=new j,Vh=new j,Ir=new j,ia=new j,ra=new j,Dv=new j,Gh=new j,jh=new j,Wh=new j;class Sr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),Nr.subVectors(i,t),Vh.subVectors(e,t);const o=er.dot(er),a=er.dot(Nr),l=er.dot(Vh),c=Nr.dot(Nr),u=Nr.dot(Vh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ir.x),l.addScaledVector(o,Ir.y),l.addScaledVector(a,Ir.z),l)}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),Nr.subVectors(e,t),er.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),er.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ia.subVectors(r,i),ra.subVectors(s,i),Gh.subVectors(e,i);const l=ia.dot(Gh),c=ra.dot(Gh);if(l<=0&&c<=0)return t.copy(i);jh.subVectors(e,r);const u=ia.dot(jh),f=ra.dot(jh);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ia,o);Wh.subVectors(e,s);const h=ia.dot(Wh),m=ra.dot(Wh);if(m>=0&&h<=m)return t.copy(s);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ra,a);const g=u*m-h*f;if(g<=0&&f-u>=0&&h-m>=0)return Dv.subVectors(s,r),a=(f-u)/(f-u+(h-m)),t.copy(r).addScaledVector(Dv,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(ia,o).addScaledVector(ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const YM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=T_(e,1),t=Pn(t,0,1),i=Pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xh(o,s,e+1/3),this.g=Xh(o,s,e),this.b=Xh(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=rr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rr){const i=YM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=Nh(e.r),this.g=Nh(e.g),this.b=Nh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rr){return vt.fromWorkingColorSpace(An.copy(this),e),Math.round(Pn(An.r*255,0,255))*65536+Math.round(Pn(An.g*255,0,255))*256+Math.round(Pn(An.b*255,0,255))}getHexString(e=rr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=rr){vt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==rr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Uu);const i=uc(fs.h,Uu.h,t),r=uc(fs.s,Uu.s,t),s=uc(fs.l,Uu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ze;Ze.NAMES=YM;let HC=0;class dr extends vl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=Ha,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pm,this.blendDst=mm,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ha&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pm&&(i.blendSrc=this.blendSrc),this.blendDst!==mm&&(i.blendDst=this.blendDst),this.blendEquation!==mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $M extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new j,ku=new ut;class Cr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ku.fromBufferAttribute(this,t),ku.applyMatrix3(e),this.setXY(t,ku.x,ku.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ga(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class qM extends Cr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class KM extends Cr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends Cr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let VC=0;const Ni=new Vt,Yh=new ln,sa=new j,hi=new yl,Ul=new yl,fn=new j;class hr extends vl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GM(e)?KM:qM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ul.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(hi.min,Ul.min),hi.expandByPoint(fn),fn.addVectors(hi.max,Ul.max),hi.expandByPoint(fn)):(hi.expandByPoint(Ul.min),hi.expandByPoint(Ul.max))}hi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(sa.fromBufferAttribute(e,c),fn.add(sa)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new j,l[b]=new j;const c=new j,u=new j,f=new j,d=new ut,h=new ut,m=new ut,_=new j,g=new j;function p(b,w,M){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,b),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),m.sub(d);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(D),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(D),a[b].add(_),a[w].add(_),a[M].add(_),l[b].add(g),l[w].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,w=v.length;b<w;++b){const M=v[b],D=M.start,k=M.count;for(let B=D,W=D+k;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new j,S=new j,R=new j,A=new j;function E(b){R.fromBufferAttribute(r,b),A.copy(R);const w=a[b];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(A,w);const D=S.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,D)}for(let b=0,w=v.length;b<w;++b){const M=v[b],D=M.start,k=M.count;for(let B=D,W=D+k;B<W;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[h++]}return new Cr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new Vt,to=new A_,Fu=new ou,Iv=new j,oa=new j,aa=new j,la=new j,$h=new j,Ou=new j,zu=new ut,Bu=new ut,Hu=new ut,Uv=new j,kv=new j,Fv=new j,Vu=new j,Gu=new j;class Gi extends ln{constructor(e=new hr,t=new $M){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ou.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($h.fromBufferAttribute(f,e),o?Ou.addScaledVector($h,u):Ou.addScaledVector($h.sub(t),u))}t.add(Ou)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fu.copy(i.boundingSphere),Fu.applyMatrix4(s),to.copy(e.ray).recast(e.near),!(Fu.containsPoint(to.origin)===!1&&(to.intersectSphere(Fu,Iv)===null||to.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Nv.copy(s).invert(),to.copy(e.ray).applyMatrix4(Nv),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let S=v,R=x;S<R;S+=3){const A=a.getX(S),E=a.getX(S+1),b=a.getX(S+2);r=ju(this,p,e,i,c,u,f,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=ju(this,o,e,i,c,u,f,v,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=v,R=x;S<R;S+=3){const A=S,E=S+1,b=S+2;r=ju(this,p,e,i,c,u,f,A,E,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,S=g+2;r=ju(this,o,e,i,c,u,f,v,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function GC(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vs,a),l===null)return null;Gu.copy(a),Gu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gu);return c<t.near||c>t.far?null:{distance:c,point:Gu.clone(),object:n}}function ju(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,oa),n.getVertexPosition(l,aa),n.getVertexPosition(c,la);const u=GC(n,e,t,i,oa,aa,la,Vu);if(u){r&&(zu.fromBufferAttribute(r,a),Bu.fromBufferAttribute(r,l),Hu.fromBufferAttribute(r,c),u.uv=Sr.getInterpolation(Vu,oa,aa,la,zu,Bu,Hu,new ut)),s&&(zu.fromBufferAttribute(s,a),Bu.fromBufferAttribute(s,l),Hu.fromBufferAttribute(s,c),u.uv1=Sr.getInterpolation(Vu,oa,aa,la,zu,Bu,Hu,new ut)),o&&(Uv.fromBufferAttribute(o,a),kv.fromBufferAttribute(o,l),Fv.fromBufferAttribute(o,c),u.normal=Sr.getInterpolation(Vu,oa,aa,la,Uv,kv,Fv,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};Sr.getNormal(oa,aa,la,f.normal),u.face=f}return u}class au extends hr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(f,2));function m(_,g,p,v,x,S,R,A,E,b,w){const M=S/E,D=R/b,k=S/2,B=R/2,W=A/2,K=E+1,X=b+1;let V=0,U=0;const Z=new j;for(let P=0;P<X;P++){const se=P*D-B;for(let Se=0;Se<K;Se++){const Xe=Se*M-k;Z[_]=Xe*v,Z[g]=se*x,Z[p]=W,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Se/E),f.push(1-P/b),V+=1}}for(let P=0;P<b;P++)for(let se=0;se<E;se++){const Se=d+se+K*P,Xe=d+se+K*(P+1),q=d+(se+1)+K*(P+1),ie=d+(se+1)+K*P;l.push(Se,Xe,ie),l.push(Xe,q,ie),U+=6}a.addGroup(h,U,w),h+=U,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ll(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=ll(n[t]);for(const r in i)e[r]=i[r]}return e}function jC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ZM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const WC={clone:ll,merge:On};var XC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gs extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XC,this.fragmentShader=YC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ll(e.uniforms),this.uniformsGroups=jC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class QM extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Yr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new j,Ov=new ut,zv=new ut;class Oi extends QM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Ov,zv),t.subVectors(zv,Ov)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ca=-90,ua=1;class $C extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(ca,ua,e,t);r.layers=this.layers,this.add(r);const s=new Oi(ca,ua,e,t);s.layers=this.layers,this.add(s);const o=new Oi(ca,ua,e,t);o.layers=this.layers,this.add(o);const a=new Oi(ca,ua,e,t);a.layers=this.layers,this.add(a);const l=new Oi(ca,ua,e,t);l.layers=this.layers,this.add(l);const c=new Oi(ca,ua,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class JM extends ri{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rl,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qC extends Bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new JM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:or}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new au(5,5,5),s=new Gs({name:"CubemapFromEquirect",uniforms:ll(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Us});s.uniforms.tEquirect.value=t;const o=new Gi(r,s),a=t.minFilter;return t.minFilter===So&&(t.minFilter=or),new $C(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const qh=new j,KC=new j,ZC=new et;class co{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qh.subVectors(i,t).cross(KC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ZC.getNormalMatrix(e),r=this.coplanarPoint(qh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new ou,Wu=new j;class C_{constructor(e=new co,t=new co,i=new co,r=new co,s=new co,o=new co){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],m=r[9],_=r[10],g=r[11],p=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,g-h,S-p).normalize(),i[1].setComponents(l+s,d+c,g+h,S+p).normalize(),i[2].setComponents(l+o,d+u,g+m,S+v).normalize(),i[3].setComponents(l-o,d-u,g-m,S-v).normalize(),i[4].setComponents(l-a,d-f,g-_,S-x).normalize(),t===Yr)i[5].setComponents(l+a,d+f,g+_,S+x).normalize();else if(t===vd)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wu.x=r.normal.x>0?e.max.x:e.min.x,Wu.y=r.normal.y>0?e.max.y:e.min.y,Wu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QC(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let h=0,m=d.length;h<m;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class lu extends hr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*d-o;for(let x=0;x<c;x++){const S=x*f-s;m.push(S,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,S=v+c*(p+1),R=v+1+c*(p+1),A=v+1+c*p;h.push(x,S,A),h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var JC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_R=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ER=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bR="gl_FragColor = linearToOutputTexel( gl_FragColor );",PR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:JC,alphahash_pars_fragment:eR,alphamap_fragment:tR,alphamap_pars_fragment:nR,alphatest_fragment:iR,alphatest_pars_fragment:rR,aomap_fragment:sR,aomap_pars_fragment:oR,batching_pars_vertex:aR,batching_vertex:lR,begin_vertex:cR,beginnormal_vertex:uR,bsdfs:fR,iridescence_fragment:dR,bumpmap_pars_fragment:hR,clipping_planes_fragment:pR,clipping_planes_pars_fragment:mR,clipping_planes_pars_vertex:gR,clipping_planes_vertex:_R,color_fragment:vR,color_pars_fragment:xR,color_pars_vertex:yR,color_vertex:SR,common:MR,cube_uv_reflection_fragment:ER,defaultnormal_vertex:wR,displacementmap_pars_vertex:TR,displacementmap_vertex:AR,emissivemap_fragment:CR,emissivemap_pars_fragment:RR,colorspace_fragment:bR,colorspace_pars_fragment:PR,envmap_fragment:LR,envmap_common_pars_fragment:DR,envmap_pars_fragment:NR,envmap_pars_vertex:IR,envmap_physical_pars_fragment:WR,envmap_vertex:UR,fog_vertex:kR,fog_pars_vertex:FR,fog_fragment:OR,fog_pars_fragment:zR,gradientmap_pars_fragment:BR,lightmap_pars_fragment:HR,lights_lambert_fragment:VR,lights_lambert_pars_fragment:GR,lights_pars_begin:jR,lights_toon_fragment:XR,lights_toon_pars_fragment:YR,lights_phong_fragment:$R,lights_phong_pars_fragment:qR,lights_physical_fragment:KR,lights_physical_pars_fragment:ZR,lights_fragment_begin:QR,lights_fragment_maps:JR,lights_fragment_end:eb,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:rb,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:ab,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:fb,morphcolor_vertex:db,morphnormal_vertex:hb,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:_b,normal_pars_fragment:vb,normal_pars_vertex:xb,normal_vertex:yb,normalmap_pars_fragment:Sb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:wb,iridescence_pars_fragment:Tb,opaque_fragment:Ab,packing:Cb,premultiplied_alpha_fragment:Rb,project_vertex:bb,dithering_fragment:Pb,dithering_pars_fragment:Lb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Ub,shadowmap_vertex:kb,shadowmask_pars_fragment:Fb,skinbase_vertex:Ob,skinning_pars_vertex:zb,skinning_vertex:Bb,skinnormal_vertex:Hb,specularmap_fragment:Vb,specularmap_pars_fragment:Gb,tonemapping_fragment:jb,tonemapping_pars_fragment:Wb,transmission_fragment:Xb,transmission_pars_fragment:Yb,uv_pars_fragment:$b,uv_pars_vertex:qb,uv_vertex:Kb,worldpos_vertex:Zb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:r2,depth_frag:s2,distanceRGBA_vert:o2,distanceRGBA_frag:a2,equirect_vert:l2,equirect_frag:c2,linedashed_vert:u2,linedashed_frag:f2,meshbasic_vert:d2,meshbasic_frag:h2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:_2,meshnormal_vert:v2,meshnormal_frag:x2,meshphong_vert:y2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:E2,meshtoon_vert:w2,meshtoon_frag:T2,points_vert:A2,points_frag:C2,shadow_vert:R2,shadow_frag:b2,sprite_vert:P2,sprite_frag:L2},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},xr={basic:{uniforms:On([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:On([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:On([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:On([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:On([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:On([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:On([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:On([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:On([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:On([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:On([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:On([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:On([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};xr.physical={uniforms:On([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Xu={r:0,b:0,g:0},io=new fr,D2=new Vt;function N2(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=m(v);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,x){const S=m(x);S&&(S.isCubeTexture||S.mapping===qd)?(u===void 0&&(u=new Gi(new au(1,1,1),new Gs({name:"BackgroundCubeMaterial",uniforms:ll(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),io.copy(x.backgroundRotation),io.x*=-1,io.y*=-1,io.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(io)),u.material.toneMapped=vt.getTransfer(S.colorSpace)!==Dt,(f!==S||d!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Gi(new lu(2,2),new Gs({name:"BackgroundMaterial",uniforms:ll(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=vt.getTransfer(S.colorSpace)!==Dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(Xu,ZM(n)),i.buffers.color.setClear(Xu.r,Xu.g,Xu.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g}}function I2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,D,k,B,W){let K=!1;const X=f(B,k,D);s!==X&&(s=X,c(s.object)),K=h(M,B,k,W),K&&m(M,B,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,D,k,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,k){const B=k.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let X=K[B];return X===void 0&&(X=d(l()),K[B]=X),X}function d(M){const D=[],k=[],B=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function h(M,D,k,B){const W=s.attributes,K=D.attributes;let X=0;const V=k.getAttributes();for(const U in V)if(V[U].location>=0){const P=W[U];let se=K[U];if(se===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),P===void 0||P.attribute!==se||se&&P.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function m(M,D,k,B){const W={},K=D.attributes;let X=0;const V=k.getAttributes();for(const U in V)if(V[U].location>=0){let P=K[U];P===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(P=M.instanceColor));const se={};se.attribute=P,P&&P.data&&(se.data=P.data),W[U]=se,X++}s.attributes=W,s.attributesNum=X,s.index=B}function _(){const M=s.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function g(M){p(M,0)}function p(M,D){const k=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;k[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==D&&(n.vertexAttribDivisor(M,D),W[M]=D)}function v(){const M=s.newAttributes,D=s.enabledAttributes;for(let k=0,B=D.length;k<B;k++)D[k]!==M[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function x(M,D,k,B,W,K,X){X===!0?n.vertexAttribIPointer(M,D,k,W,K):n.vertexAttribPointer(M,D,k,B,W,K)}function S(M,D,k,B){_();const W=B.attributes,K=k.getAttributes(),X=D.defaultAttributeValues;for(const V in K){const U=K[V];if(U.location>=0){let Z=W[V];if(Z===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const P=Z.normalized,se=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;const Xe=Se.buffer,q=Se.type,ie=Se.bytesPerElement,he=q===n.INT||q===n.UNSIGNED_INT||Z.gpuType===__;if(Z.isInterleavedBufferAttribute){const L=Z.data,re=L.stride,fe=Z.offset;if(L.isInstancedInterleavedBuffer){for(let pe=0;pe<U.locationSize;pe++)p(U.location+pe,L.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let pe=0;pe<U.locationSize;pe++)g(U.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let pe=0;pe<U.locationSize;pe++)x(U.location+pe,se/U.locationSize,q,P,re*ie,(fe+se/U.locationSize*pe)*ie,he)}else{if(Z.isInstancedBufferAttribute){for(let L=0;L<U.locationSize;L++)p(U.location+L,Z.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let L=0;L<U.locationSize;L++)g(U.location+L);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let L=0;L<U.locationSize;L++)x(U.location+L,se/U.locationSize,q,P,se*ie,se/U.locationSize*L*ie,he)}}else if(X!==void 0){const P=X[V];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(U.location,P);break;case 3:n.vertexAttrib3fv(U.location,P);break;case 4:n.vertexAttrib4fv(U.location,P);break;default:n.vertexAttrib1fv(U.location,P)}}}}v()}function R(){b();for(const M in i){const D=i[M];for(const k in D){const B=D[k];for(const W in B)u(B[W].object),delete B[W];delete D[k]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const k in D){const B=D[k];for(const W in B)u(B[W].object),delete B[W];delete D[k]}delete i[M.id]}function E(M){for(const D in i){const k=i[D];if(k[M.id]===void 0)continue;const B=k[M.id];for(const W in B)u(B[W].object),delete B[W];delete k[M.id]}}function b(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function U2(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];for(let _=0;_<d.length;_++)t.update(m,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ar&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===ru&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ts&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xr&&!E)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:R}}function F2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new co,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,x=v*4;let S=p.clippingState||null;l.value=S,S=u(m,d,x,h);for(let R=0;R!==x;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=h+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,S=h;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function O2(n){let e=new WeakMap;function t(o,a){return a===gm?o.mapping=rl:a===_m&&(o.mapping=sl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gm||a===_m)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qC(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class t1 extends QM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const La=4,Bv=[.125,.215,.35,.446,.526,.582],go=20,Kh=new t1,Hv=new Ze;let Zh=null,Qh=0,Jh=0,ep=!1;const uo=(1+Math.sqrt(5))/2,fa=1/uo,Vv=[new j(-uo,fa,0),new j(uo,fa,0),new j(-fa,0,uo),new j(fa,0,uo),new j(0,uo,-fa),new j(0,uo,fa),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Qh,Jh),this._renderer.xr.enabled=ep,e.scissorTest=!1,Yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rl||e.mapping===sl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:ru,format:ar,colorSpace:Zs,depthBuffer:!1},r=jv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z2(s)),this._blurMaterial=B2(s,e,t)}return r}_compileMaterial(e){const t=new Gi(this._lodPlanes[0],e);this._renderer.compile(t,Kh)}_sceneToCubeUV(e,t,i,r){const a=new Oi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hv),u.toneMapping=ks,u.autoClear=!1;const h=new $M({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),m=new Gi(new au,h);let _=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,_=!0):(h.color.copy(Hv),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Yu(r,v*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rl||e.mapping===sl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vv[(r-s-1)%Vv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gi(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*go-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):go;g>go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${go}`);const p=[];let v=0;for(let E=0;E<go;++E){const b=E/_,w=Math.exp(-b*b/2);p.push(w),E===0?v+=w:E<g&&(v+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-La?r-x+La:0),A=4*(this._cubeSize-S);Yu(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Kh)}}function z2(n){const e=[],t=[],i=[];let r=n;const s=n-La+1+Bv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-La?l=Bv[o-n+La-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*h),x=new Float32Array(g*m*h),S=new Float32Array(p*m*h);for(let A=0;A<h;A++){const E=A%3*2/3-1,b=A>2?0:-1,w=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(w,_*m*A),x.set(d,g*m*A);const M=[A,A,A,A,A,A];S.set(M,p*m*A)}const R=new hr;R.setAttribute("position",new Cr(v,_)),R.setAttribute("uv",new Cr(x,g)),R.setAttribute("faceIndex",new Cr(S,p)),e.push(R),r>La&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jv(n,e,t){const i=new Bo(n,e,t);return i.texture.mapping=qd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function B2(n,e,t){const i=new Float32Array(go),r=new j(0,1,0);return new Gs({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:R_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Wv(){return new Gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:R_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Xv(){return new Gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:R_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function R_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gm||l===_m,u=l===rl||l===sl;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Gv(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Gv(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function V2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const m in h){const _=h[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,m=f.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],A=v[x+1],E=v[x+2];d.push(R,A,A,E,E,R)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,A=x+1,E=x+2;d.push(R,A,A,E,E,R)}}else return;const g=new(GM(d)?KM:qM)(d,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function j2(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];t.update(g,i,1)}function f(d,h,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=h[v];for(let v=0;v<_.length;v++)t.update(p,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function W2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function X2(n,e,t){const i=new WeakMap,r=new on;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*A*4*f),b=new WM(E,R,A,f);b.type=Xr,b.needsUpdate=!0;const w=S*4;for(let D=0;D<f;D++){const k=p[D],B=v[D],W=x[D],K=R*A*4*D;for(let X=0;X<k.count;X++){const V=X*w;m===!0&&(r.fromBufferAttribute(k,X),E[K+V+0]=r.x,E[K+V+1]=r.y,E[K+V+2]=r.z,E[K+V+3]=0),_===!0&&(r.fromBufferAttribute(B,X),E[K+V+4]=r.x,E[K+V+5]=r.y,E[K+V+6]=r.z,E[K+V+7]=0),g===!0&&(r.fromBufferAttribute(W,X),E[K+V+8]=r.x,E[K+V+9]=r.y,E[K+V+10]=r.z,E[K+V+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new ut(R,A)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Y2(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class n1 extends ri{constructor(e,t,i,r,s,o,a,l,c,u=Va){if(u!==Va&&u!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Va&&(i=zo),i===void 0&&u===al&&(i=ol),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vi,this.minFilter=l!==void 0?l:Vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const i1=new ri,Yv=new n1(1,1),r1=new WM,s1=new NC,o1=new JM,$v=[],qv=[],Kv=new Float32Array(16),Zv=new Float32Array(9),Qv=new Float32Array(4);function Sl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$v[r];if(s===void 0&&(s=new Float32Array(r),$v[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zd(n,e){let t=qv[e];t===void 0&&(t=new Int32Array(e),qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function K2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function Z2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function Q2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Qv.set(i),n.uniformMatrix2fv(this.addr,!1,Qv),un(t,i)}}function J2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Zv.set(i),n.uniformMatrix3fv(this.addr,!1,Zv),un(t,i)}}function eP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Kv.set(i),n.uniformMatrix4fv(this.addr,!1,Kv),un(t,i)}}function tP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function sP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function aP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function lP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function cP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yv.compareFunction=VM,s=Yv):s=i1,t.setTexture2D(e||s,r)}function uP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||s1,r)}function fP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||o1,r)}function dP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||r1,r)}function hP(n){switch(n){case 5126:return $2;case 35664:return q2;case 35665:return K2;case 35666:return Z2;case 35674:return Q2;case 35675:return J2;case 35676:return eP;case 5124:case 35670:return tP;case 35667:case 35671:return nP;case 35668:case 35672:return iP;case 35669:case 35673:return rP;case 5125:return sP;case 36294:return oP;case 36295:return aP;case 36296:return lP;case 35678:case 36198:case 36298:case 36306:case 35682:return cP;case 35679:case 36299:case 36307:return uP;case 35680:case 36300:case 36308:case 36293:return fP;case 36289:case 36303:case 36311:case 36292:return dP}}function pP(n,e){n.uniform1fv(this.addr,e)}function mP(n,e){const t=Sl(e,this.size,2);n.uniform2fv(this.addr,t)}function gP(n,e){const t=Sl(e,this.size,3);n.uniform3fv(this.addr,t)}function _P(n,e){const t=Sl(e,this.size,4);n.uniform4fv(this.addr,t)}function vP(n,e){const t=Sl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xP(n,e){const t=Sl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yP(n,e){const t=Sl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SP(n,e){n.uniform1iv(this.addr,e)}function MP(n,e){n.uniform2iv(this.addr,e)}function EP(n,e){n.uniform3iv(this.addr,e)}function wP(n,e){n.uniform4iv(this.addr,e)}function TP(n,e){n.uniform1uiv(this.addr,e)}function AP(n,e){n.uniform2uiv(this.addr,e)}function CP(n,e){n.uniform3uiv(this.addr,e)}function RP(n,e){n.uniform4uiv(this.addr,e)}function bP(n,e,t){const i=this.cache,r=e.length,s=Zd(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||i1,s[o])}function PP(n,e,t){const i=this.cache,r=e.length,s=Zd(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||s1,s[o])}function LP(n,e,t){const i=this.cache,r=e.length,s=Zd(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||o1,s[o])}function DP(n,e,t){const i=this.cache,r=e.length,s=Zd(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||r1,s[o])}function NP(n){switch(n){case 5126:return pP;case 35664:return mP;case 35665:return gP;case 35666:return _P;case 35674:return vP;case 35675:return xP;case 35676:return yP;case 5124:case 35670:return SP;case 35667:case 35671:return MP;case 35668:case 35672:return EP;case 35669:case 35673:return wP;case 5125:return TP;case 36294:return AP;case 36295:return CP;case 36296:return RP;case 35678:case 36198:case 36298:case 36306:case 35682:return bP;case 35679:case 36299:case 36307:return PP;case 35680:case 36300:case 36308:case 36293:return LP;case 36289:case 36303:case 36311:case 36292:return DP}}class IP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hP(t.type)}}class UP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NP(t.type)}}class kP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function Jv(n,e){n.seq.push(e),n.map[e.id]=e}function FP(n,e,t){const i=n.name,r=i.length;for(tp.lastIndex=0;;){const s=tp.exec(i),o=tp.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jv(t,c===void 0?new IP(a,n,e):new UP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new kP(a),Jv(t,f)),t=f}}}class Nf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);FP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ex(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OP=37297;let zP=0;function BP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function HP(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===_d&&t===gd?i="LinearDisplayP3ToLinearSRGB":e===gd&&t===_d&&(i="LinearSRGBToLinearDisplayP3"),n){case Zs:case Kd:return[i,"LinearTransferOETF"];case rr:case w_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+BP(n.getShaderSource(e),o)}else return r}function VP(n,e){const t=HP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GP(n,e){let t;switch(e){case XA:t="Linear";break;case YA:t="Reinhard";break;case $A:t="Cineon";break;case qA:t="ACESFilmic";break;case ZA:t="AgX";break;case QA:t="Neutral";break;case KA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $u=new j;function jP(){vt.getLuminanceCoefficients($u);const n=$u.x.toFixed(4),e=$u.y.toFixed(4),t=$u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jl).join(`
`)}function XP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jl(n){return n!==""}function nx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ix(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $P=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(n){return n.replace($P,KP)}const qP=new Map;function KP(n,e){let t=Je[e];if(t===void 0){const i=qP.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xm(t)}const ZP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(n){return n.replace(ZP,QP)}function QP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function eL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rl:case sl:e="ENVMAP_TYPE_CUBE";break;case qd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sl:e="ENVMAP_MODE_REFRACTION";break}return e}function nL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case jA:e="ENVMAP_BLENDING_MIX";break;case WA:e="ENVMAP_BLENDING_ADD";break}return e}function iL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JP(t),c=eL(t),u=tL(t),f=nL(t),d=iL(t),h=WP(t),m=XP(s),_=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(jl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(jl).join(`
`),p.length>0&&(p+=`
`)):(g=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),p=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ks?"#define TONE_MAPPING":"",t.toneMapping!==ks?Je.tonemapping_pars_fragment:"",t.toneMapping!==ks?GP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,VP("linearToOutputTexel",t.outputColorSpace),jP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jl).join(`
`)),o=Xm(o),o=nx(o,t),o=ix(o,t),a=Xm(a),a=nx(a,t),a=ix(a,t),o=rx(o),a=rx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+o,S=v+p+a,R=ex(r,r.VERTEX_SHADER,x),A=ex(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(A).trim();let K=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,A);else{const V=tx(r,R,"vertex"),U=tx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+V+`
`+U)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:k,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(R),r.deleteShader(A),b=new Nf(r,_),w=YP(r,_)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,OP)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let sL=0;class oL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aL(e),t.set(e,i)),i}}class aL{constructor(e){this.id=sL++,this.code=e,this.usedTimes=0}}function lL(n,e,t,i,r,s,o){const a=new XM,l=new oL,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,D,k,B){const W=k.fog,K=B.geometry,X=w.isMeshStandardMaterial?k.environment:null,V=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),U=V&&V.mapping===qd?V.image.height:null,Z=m[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const P=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=P!==void 0?P.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let Xe,q,ie,he;if(Z){const at=xr[Z];Xe=at.vertexShader,q=at.fragmentShader}else Xe=w.vertexShader,q=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),he=l.getFragmentShaderID(w);const L=n.getRenderTarget(),re=B.isInstancedMesh===!0,fe=B.isBatchedMesh===!0,pe=!!w.map,Le=!!w.matcap,I=!!V,De=!!w.aoMap,ze=!!w.lightMap,Ke=!!w.bumpMap,Ee=!!w.normalMap,Y=!!w.displacementMap,Ue=!!w.emissiveMap,He=!!w.metalnessMap,N=!!w.roughnessMap,T=w.anisotropy>0,$=w.clearcoat>0,ne=w.dispersion>0,oe=w.iridescence>0,J=w.sheen>0,Ne=w.transmission>0,le=T&&!!w.anisotropyMap,ve=$&&!!w.clearcoatMap,Be=$&&!!w.clearcoatNormalMap,ce=$&&!!w.clearcoatRoughnessMap,Me=oe&&!!w.iridescenceMap,Fe=oe&&!!w.iridescenceThicknessMap,Ge=J&&!!w.sheenColorMap,ye=J&&!!w.sheenRoughnessMap,je=!!w.specularMap,qe=!!w.specularColorMap,mt=!!w.specularIntensityMap,O=Ne&&!!w.transmissionMap,Q=Ne&&!!w.thicknessMap,ee=!!w.gradientMap,te=!!w.alphaMap,de=w.alphaTest>0,Ie=!!w.alphaHash,Qe=!!w.extensions;let Et=ks;w.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=n.toneMapping);const wt={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:q,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:fe,batchingColor:fe&&B._colorsTexture!==null,instancing:re,instancingColor:re&&B.instanceColor!==null,instancingMorph:re&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zs,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:Le,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:U,aoMap:De,lightMap:ze,bumpMap:Ke,normalMap:Ee,displacementMap:d&&Y,emissiveMap:Ue,normalMapObjectSpace:Ee&&w.normalMapType===nC,normalMapTangentSpace:Ee&&w.normalMapType===E_,metalnessMap:He,roughnessMap:N,anisotropy:T,anisotropyMap:le,clearcoat:$,clearcoatMap:ve,clearcoatNormalMap:Be,clearcoatRoughnessMap:ce,dispersion:ne,iridescence:oe,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:Ge,sheenRoughnessMap:ye,specularMap:je,specularColorMap:qe,specularIntensityMap:mt,transmission:Ne,transmissionMap:O,thicknessMap:Q,gradientMap:ee,opaque:w.transparent===!1&&w.blending===Ha&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:Ie,combine:w.combine,mapUv:pe&&_(w.map.channel),aoMapUv:De&&_(w.aoMap.channel),lightMapUv:ze&&_(w.lightMap.channel),bumpMapUv:Ke&&_(w.bumpMap.channel),normalMapUv:Ee&&_(w.normalMap.channel),displacementMapUv:Y&&_(w.displacementMap.channel),emissiveMapUv:Ue&&_(w.emissiveMap.channel),metalnessMapUv:He&&_(w.metalnessMap.channel),roughnessMapUv:N&&_(w.roughnessMap.channel),anisotropyMapUv:le&&_(w.anisotropyMap.channel),clearcoatMapUv:ve&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(w.sheenRoughnessMap.channel),specularMapUv:je&&_(w.specularMap.channel),specularColorMapUv:qe&&_(w.specularColorMap.channel),specularIntensityMapUv:mt&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:Q&&_(w.thicknessMap.channel),alphaMapUv:te&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ee||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(pe||te),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Hr,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&w.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(M,w),x(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){const M=m[w.type];let D;if(M){const k=xr[M];D=WC.clone(k.uniforms)}else D=w.uniforms;return D}function R(w,M){let D;for(let k=0,B=u.length;k<B;k++){const W=u[k];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new rL(n,M,w,s),u.push(D)),D}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:b}}function cL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function uL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ax(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,m,_,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,d,h,m,_,g){const p=o(f,d,h,m,_,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,m,_,g){const p=o(f,d,h,m,_,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||uL),i.length>1&&i.sort(d||ox),r.length>1&&r.sort(d||ox)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ax,n.set(i,[o])):r>=s.length?(o=new ax,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ze};break;case"SpotLight":t={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function hL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pL=0;function mL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gL(n){const e=new dL,t=hL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Vt,o=new Vt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,v=0,x=0,S=0,R=0,A=0,E=0;c.sort(mL);for(let w=0,M=c.length;w<M;w++){const D=c[w],k=D.color,B=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*B,f+=k.g*B,d+=k.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],B);E++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=D.shadow.matrix,v++}i.directional[h]=X,h++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const V=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,V.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=V.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=K,S++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(k).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=X,g++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const V=D.shadow,U=t.get(D);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=D.shadow.matrix,x++}i.point[m]=X,m++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==h||b.pointLength!==m||b.spotLength!==_||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==R||b.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,b.directionalLength=h,b.pointLength=m,b.spotLength=_,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=R,b.numLightProbes=E,i.version=pL++)}function l(c,u){let f=0,d=0,h=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function lx(n){const e=new gL(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _L(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lx(n),e.set(r,[a])):s>=o.length?(a=new lx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class vL extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xL extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ML(n,e,t){let i=new C_;const r=new ut,s=new ut,o=new on,a=new vL({depthPacking:tC}),l=new xL,c={},u=t.maxTextureSize,f={[Vs]:ii,[ii]:Vs,[Hr]:Hr},d=new Gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:yL,fragmentShader:SL}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new hr;m.setAttribute("position",new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gi(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bM;let p=this.type;this.render=function(A,E,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Us),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==kr&&this.type===kr,W=p===kr&&this.type!==kr;for(let K=0,X=A.length;K<X;K++){const V=A[K],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Z=U.getFrameExtents();if(r.multiply(Z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||B===!0||W===!0){const se=this.type!==kr?{minFilter:Vi,magFilter:Vi}:{};U.map!==null&&U.map.dispose(),U.map=new Bo(r.x,r.y,se),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const P=U.getViewportCount();for(let se=0;se<P;se++){const Se=U.getViewport(se);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(o),U.updateMatrices(V,se),i=U.getFrustum(),S(E,b,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===kr&&v(U,b),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,M,D)};function v(A,E){const b=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bo(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,b,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,b,h,_,null)}function x(A,E,b,w){let M=null;const D=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=M.uuid,B=E.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let K=W[B];K===void 0&&(K=M.clone(),W[B]=K,E.addEventListener("dispose",R)),M=K}if(M.visible=E.visible,M.wireframe=E.wireframe,w===kr?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:f[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=b}return M}function S(A,E,b,w,M){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===kr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const K=B.groups;for(let X=0,V=K.length;X<V;X++){const U=K[X],Z=W[U.materialIndex];if(Z&&Z.visible){const P=x(A,Z,w,M);A.onBeforeShadow(n,A,E,b,B,P,U),n.renderBufferDirect(b,null,B,P,A,U),A.onAfterShadow(n,A,E,b,B,P,U)}}}else if(W.visible){const K=x(A,W,w,M);A.onBeforeShadow(n,A,E,b,B,K,null),n.renderBufferDirect(b,null,B,K,A,null),A.onAfterShadow(n,A,E,b,B,K,null)}}const k=A.children;for(let B=0,W=k.length;B<W;B++)S(k[B],E,b,w,M)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const w=c[b],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function EL(n){function e(){let O=!1;const Q=new on;let ee=null;const te=new on(0,0,0,0);return{setMask:function(de){ee!==de&&!O&&(n.colorMask(de,de,de,de),ee=de)},setLocked:function(de){O=de},setClear:function(de,Ie,Qe,Et,wt){wt===!0&&(de*=Et,Ie*=Et,Qe*=Et),Q.set(de,Ie,Qe,Et),te.equals(Q)===!1&&(n.clearColor(de,Ie,Qe,Et),te.copy(Q))},reset:function(){O=!1,ee=null,te.set(-1,0,0,0)}}}function t(){let O=!1,Q=null,ee=null,te=null;return{setTest:function(de){de?he(n.DEPTH_TEST):L(n.DEPTH_TEST)},setMask:function(de){Q!==de&&!O&&(n.depthMask(de),Q=de)},setFunc:function(de){if(ee!==de){switch(de){case FA:n.depthFunc(n.NEVER);break;case OA:n.depthFunc(n.ALWAYS);break;case zA:n.depthFunc(n.LESS);break;case pd:n.depthFunc(n.LEQUAL);break;case BA:n.depthFunc(n.EQUAL);break;case HA:n.depthFunc(n.GEQUAL);break;case VA:n.depthFunc(n.GREATER);break;case GA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=de}},setLocked:function(de){O=de},setClear:function(de){te!==de&&(n.clearDepth(de),te=de)},reset:function(){O=!1,Q=null,ee=null,te=null}}}function i(){let O=!1,Q=null,ee=null,te=null,de=null,Ie=null,Qe=null,Et=null,wt=null;return{setTest:function(at){O||(at?he(n.STENCIL_TEST):L(n.STENCIL_TEST))},setMask:function(at){Q!==at&&!O&&(n.stencilMask(at),Q=at)},setFunc:function(at,Ve,be){(ee!==at||te!==Ve||de!==be)&&(n.stencilFunc(at,Ve,be),ee=at,te=Ve,de=be)},setOp:function(at,Ve,be){(Ie!==at||Qe!==Ve||Et!==be)&&(n.stencilOp(at,Ve,be),Ie=at,Qe=Ve,Et=be)},setLocked:function(at){O=at},setClear:function(at){wt!==at&&(n.clearStencil(at),wt=at)},reset:function(){O=!1,Q=null,ee=null,te=null,de=null,Ie=null,Qe=null,Et=null,wt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,m=!1,_=null,g=null,p=null,v=null,x=null,S=null,R=null,A=new Ze(0,0,0),E=0,b=!1,w=null,M=null,D=null,k=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=X>=2);let U=null,Z={};const P=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Se=new on().fromArray(P),Xe=new on().fromArray(se);function q(O,Q,ee,te){const de=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(O,Ie),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ee;Qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Q+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ie}const ie={};ie[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(pd),Ke(!1),Ee(hv),he(n.CULL_FACE),De(Us);function he(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function L(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function re(O,Q){return u[O]!==Q?(n.bindFramebuffer(O,Q),u[O]=Q,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function fe(O,Q){let ee=d,te=!1;if(O){ee=f.get(Q),ee===void 0&&(ee=[],f.set(Q,ee));const de=O.textures;if(ee.length!==de.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Qe=de.length;Ie<Qe;Ie++)ee[Ie]=n.COLOR_ATTACHMENT0+Ie;ee.length=de.length,te=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,te=!0);te&&n.drawBuffers(ee)}function pe(O){return h!==O?(n.useProgram(O),h=O,!0):!1}const Le={[mo]:n.FUNC_ADD,[yA]:n.FUNC_SUBTRACT,[SA]:n.FUNC_REVERSE_SUBTRACT};Le[MA]=n.MIN,Le[EA]=n.MAX;const I={[wA]:n.ZERO,[TA]:n.ONE,[AA]:n.SRC_COLOR,[pm]:n.SRC_ALPHA,[DA]:n.SRC_ALPHA_SATURATE,[PA]:n.DST_COLOR,[RA]:n.DST_ALPHA,[CA]:n.ONE_MINUS_SRC_COLOR,[mm]:n.ONE_MINUS_SRC_ALPHA,[LA]:n.ONE_MINUS_DST_COLOR,[bA]:n.ONE_MINUS_DST_ALPHA,[NA]:n.CONSTANT_COLOR,[IA]:n.ONE_MINUS_CONSTANT_COLOR,[UA]:n.CONSTANT_ALPHA,[kA]:n.ONE_MINUS_CONSTANT_ALPHA};function De(O,Q,ee,te,de,Ie,Qe,Et,wt,at){if(O===Us){m===!0&&(L(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),O!==xA){if(O!==_||at!==b){if((g!==mo||x!==mo)&&(n.blendEquation(n.FUNC_ADD),g=mo,x=mo),at)switch(O){case Ha:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pv:n.blendFunc(n.ONE,n.ONE);break;case mv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,v=null,S=null,R=null,A.set(0,0,0),E=0,_=O,b=at}return}de=de||Q,Ie=Ie||ee,Qe=Qe||te,(Q!==g||de!==x)&&(n.blendEquationSeparate(Le[Q],Le[de]),g=Q,x=de),(ee!==p||te!==v||Ie!==S||Qe!==R)&&(n.blendFuncSeparate(I[ee],I[te],I[Ie],I[Qe]),p=ee,v=te,S=Ie,R=Qe),(Et.equals(A)===!1||wt!==E)&&(n.blendColor(Et.r,Et.g,Et.b,wt),A.copy(Et),E=wt),_=O,b=!1}function ze(O,Q){O.side===Hr?L(n.CULL_FACE):he(n.CULL_FACE);let ee=O.side===ii;Q&&(ee=!ee),Ke(ee),O.blending===Ha&&O.transparent===!1?De(Us):De(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const te=O.stencilWrite;o.setTest(te),te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):L(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){w!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),w=O)}function Ee(O){O!==_A?(he(n.CULL_FACE),O!==M&&(O===hv?n.cullFace(n.BACK):O===vA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):L(n.CULL_FACE),M=O}function Y(O){O!==D&&(K&&n.lineWidth(O),D=O)}function Ue(O,Q,ee){O?(he(n.POLYGON_OFFSET_FILL),(k!==Q||B!==ee)&&(n.polygonOffset(Q,ee),k=Q,B=ee)):L(n.POLYGON_OFFSET_FILL)}function He(O){O?he(n.SCISSOR_TEST):L(n.SCISSOR_TEST)}function N(O){O===void 0&&(O=n.TEXTURE0+W-1),U!==O&&(n.activeTexture(O),U=O)}function T(O,Q,ee){ee===void 0&&(U===null?ee=n.TEXTURE0+W-1:ee=U);let te=Z[ee];te===void 0&&(te={type:void 0,texture:void 0},Z[ee]=te),(te.type!==O||te.texture!==Q)&&(U!==ee&&(n.activeTexture(ee),U=ee),n.bindTexture(O,Q||ie[O]),te.type=O,te.texture=Q)}function $(){const O=Z[U];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(O){Se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function ye(O){Xe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Xe.copy(O))}function je(O,Q){let ee=l.get(Q);ee===void 0&&(ee=new WeakMap,l.set(Q,ee));let te=ee.get(O);te===void 0&&(te=n.getUniformBlockIndex(Q,O.name),ee.set(O,te))}function qe(O,Q){const te=l.get(Q).get(O);a.get(Q)!==te&&(n.uniformBlockBinding(Q,te,O.__bindingPointIndex),a.set(Q,te))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},U=null,Z={},u={},f=new WeakMap,d=[],h=null,m=!1,_=null,g=null,p=null,v=null,x=null,S=null,R=null,A=new Ze(0,0,0),E=0,b=!1,w=null,M=null,D=null,k=null,B=null,Se.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:L,bindFramebuffer:re,drawBuffers:fe,useProgram:pe,setBlending:De,setMaterial:ze,setFlipSided:Ke,setCullFace:Ee,setLineWidth:Y,setPolygonOffset:Ue,setScissorTest:He,activeTexture:N,bindTexture:T,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Me,texImage3D:Fe,updateUBOMapping:je,uniformBlockBinding:qe,texStorage2D:Be,texStorage3D:ce,texSubImage2D:J,texSubImage3D:Ne,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Ge,viewport:ye,reset:mt}}function cx(n,e,t,i){const r=wL(i);switch(t){case UM:return n*e;case FM:return n*e;case OM:return n*e*2;case zM:return n*e/r.components*r.byteLength;case y_:return n*e/r.components*r.byteLength;case BM:return n*e*2/r.components*r.byteLength;case S_:return n*e*2/r.components*r.byteLength;case kM:return n*e*3/r.components*r.byteLength;case ar:return n*e*4/r.components*r.byteLength;case M_:return n*e*4/r.components*r.byteLength;case Rf:case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pf:case Lf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sm:case Em:return Math.max(n,16)*Math.max(e,8)/4;case ym:case Mm:return Math.max(n,8)*Math.max(e,8)/2;case wm:case Tm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Im:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Um:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case km:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Om:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Df:case Hm:case Vm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case HM:case Gm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jm:case Wm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wL(n){switch(n){case ts:case DM:return{byteLength:1,components:1};case Hc:case NM:case ru:return{byteLength:2,components:1};case v_:case x_:return{byteLength:2,components:4};case zo:case __:case Xr:return{byteLength:4,components:1};case IM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function TL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,T){return h?new OffscreenCanvas(N,T):xd("canvas")}function _(N,T,$){let ne=1;const oe=He(N);if((oe.width>$||oe.height>$)&&(ne=$/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const J=Math.floor(ne*oe.width),Ne=Math.floor(ne*oe.height);f===void 0&&(f=m(J,Ne));const le=T?m(J,Ne):f;return le.width=J,le.height=Ne,le.getContext("2d").drawImage(N,0,0,J,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ne+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==Vi&&N.minFilter!==or}function p(N){n.generateMipmap(N)}function v(N,T,$,ne,oe=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let J=T;if(T===n.RED&&($===n.FLOAT&&(J=n.R32F),$===n.HALF_FLOAT&&(J=n.R16F),$===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.R8UI),$===n.UNSIGNED_SHORT&&(J=n.R16UI),$===n.UNSIGNED_INT&&(J=n.R32UI),$===n.BYTE&&(J=n.R8I),$===n.SHORT&&(J=n.R16I),$===n.INT&&(J=n.R32I)),T===n.RG&&($===n.FLOAT&&(J=n.RG32F),$===n.HALF_FLOAT&&(J=n.RG16F),$===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RG8UI),$===n.UNSIGNED_SHORT&&(J=n.RG16UI),$===n.UNSIGNED_INT&&(J=n.RG32UI),$===n.BYTE&&(J=n.RG8I),$===n.SHORT&&(J=n.RG16I),$===n.INT&&(J=n.RG32I)),T===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){const Ne=oe?md:vt.getTransfer(ne);$===n.FLOAT&&(J=n.RGBA32F),$===n.HALF_FLOAT&&(J=n.RGBA16F),$===n.UNSIGNED_BYTE&&(J=Ne===Dt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(N,T){let $;return N?T===null||T===zo||T===ol?$=n.DEPTH24_STENCIL8:T===Xr?$=n.DEPTH32F_STENCIL8:T===Hc&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zo||T===ol?$=n.DEPTH_COMPONENT24:T===Xr?$=n.DEPTH_COMPONENT32F:T===Hc&&($=n.DEPTH_COMPONENT16),$}function S(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vi&&N.minFilter!==or?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function R(N){const T=N.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&u.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),w(T)}function E(N){const T=i.get(N);if(T.__webglInit===void 0)return;const $=N.source,ne=d.get($);if(ne){const oe=ne[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(N),Object.keys(ne).length===0&&d.delete($)}i.remove(N)}function b(N){const T=i.get(N);n.deleteTexture(T.__webglTexture);const $=N.source,ne=d.get($);delete ne[T.__cacheKey],o.memory.textures--}function w(N){const T=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let oe=0;oe<T.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(T.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[ne]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=N.textures;for(let ne=0,oe=$.length;ne<oe;ne++){const J=i.get($[ne]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove($[ne])}i.remove(N)}let M=0;function D(){M=0}function k(){const N=M;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),M+=1,N}function B(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function W(N,T){const $=i.get(N);if(N.isVideoTexture&&Y(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const ne=N.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe($,N,T);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function K(N,T){const $=i.get(N);if(N.version>0&&$.__version!==N.version){Xe($,N,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function X(N,T){const $=i.get(N);if(N.version>0&&$.__version!==N.version){Xe($,N,T);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function V(N,T){const $=i.get(N);if(N.version>0&&$.__version!==N.version){q($,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}const U={[vm]:n.REPEAT,[yo]:n.CLAMP_TO_EDGE,[xm]:n.MIRRORED_REPEAT},Z={[Vi]:n.NEAREST,[JA]:n.NEAREST_MIPMAP_NEAREST,[Cu]:n.NEAREST_MIPMAP_LINEAR,[or]:n.LINEAR,[Lh]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},P={[iC]:n.NEVER,[cC]:n.ALWAYS,[rC]:n.LESS,[VM]:n.LEQUAL,[sC]:n.EQUAL,[lC]:n.GEQUAL,[oC]:n.GREATER,[aC]:n.NOTEQUAL};function se(N,T){if(T.type===Xr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===or||T.magFilter===Lh||T.magFilter===Cu||T.magFilter===So||T.minFilter===or||T.minFilter===Lh||T.minFilter===Cu||T.minFilter===So)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,U[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,U[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,U[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Z[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vi||T.minFilter!==Cu&&T.minFilter!==So||T.type===Xr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Se(N,T){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",R));const ne=T.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const J=B(T);if(J!==N.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[J].usedTimes++;const Ne=oe[N.__cacheKey];Ne!==void 0&&(oe[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&b(T)),N.__cacheKey=J,N.__webglTexture=oe[J].texture}return $}function Xe(N,T,$){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const oe=Se(N,T),J=T.source;t.bindTexture(ne,N.__webglTexture,n.TEXTURE0+$);const Ne=i.get(J);if(J.version!==Ne.__version||oe===!0){t.activeTexture(n.TEXTURE0+$);const le=vt.getPrimaries(vt.workingColorSpace),ve=T.colorSpace===vs?null:vt.getPrimaries(T.colorSpace),Be=T.colorSpace===vs||le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=_(T.image,!1,r.maxTextureSize);ce=Ue(T,ce);const Me=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Ge=v(T.internalFormat,Me,Fe,T.colorSpace,T.isVideoTexture);se(ne,T);let ye;const je=T.mipmaps,qe=T.isVideoTexture!==!0,mt=Ne.__version===void 0||oe===!0,O=J.dataReady,Q=S(T,ce);if(T.isDepthTexture)Ge=x(T.format===al,T.type),mt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Ge,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ge,ce.width,ce.height,0,Me,Fe,null));else if(T.isDataTexture)if(je.length>0){qe&&mt&&t.texStorage2D(n.TEXTURE_2D,Q,Ge,je[0].width,je[0].height);for(let ee=0,te=je.length;ee<te;ee++)ye=je[ee],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,Me,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,ee,Ge,ye.width,ye.height,0,Me,Fe,ye.data);T.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(n.TEXTURE_2D,Q,Ge,ce.width,ce.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Me,Fe,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,ce.width,ce.height,0,Me,Fe,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ge,je[0].width,je[0].height,ce.depth);for(let ee=0,te=je.length;ee<te;ee++)if(ye=je[ee],T.format!==ar)if(Me!==null)if(qe){if(O)if(T.layerUpdates.size>0){const de=cx(ye.width,ye.height,T.format,T.type);for(const Ie of T.layerUpdates){const Qe=ye.data.subarray(Ie*de/ye.data.BYTES_PER_ELEMENT,(Ie+1)*de/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ie,ye.width,ye.height,1,Me,Qe,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ce.depth,Me,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ge,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ce.depth,Me,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ge,ye.width,ye.height,ce.depth,0,Me,Fe,ye.data)}else{qe&&mt&&t.texStorage2D(n.TEXTURE_2D,Q,Ge,je[0].width,je[0].height);for(let ee=0,te=je.length;ee<te;ee++)ye=je[ee],T.format!==ar?Me!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,Me,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,ee,Ge,ye.width,ye.height,0,Me,Fe,ye.data)}else if(T.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Ge,ce.width,ce.height,ce.depth),O)if(T.layerUpdates.size>0){const ee=cx(ce.width,ce.height,T.format,T.type);for(const te of T.layerUpdates){const de=ce.data.subarray(te*ee/ce.data.BYTES_PER_ELEMENT,(te+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,Me,Fe,de)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,Fe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,ce.width,ce.height,ce.depth,0,Me,Fe,ce.data);else if(T.isData3DTexture)qe?(mt&&t.texStorage3D(n.TEXTURE_3D,Q,Ge,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,Fe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,ce.width,ce.height,ce.depth,0,Me,Fe,ce.data);else if(T.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(n.TEXTURE_2D,Q,Ge,ce.width,ce.height);else{let ee=ce.width,te=ce.height;for(let de=0;de<Q;de++)t.texImage2D(n.TEXTURE_2D,de,Ge,ee,te,0,Me,Fe,null),ee>>=1,te>>=1}}else if(je.length>0){if(qe&&mt){const ee=He(je[0]);t.texStorage2D(n.TEXTURE_2D,Q,Ge,ee.width,ee.height)}for(let ee=0,te=je.length;ee<te;ee++)ye=je[ee],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me,Fe,ye):t.texImage2D(n.TEXTURE_2D,ee,Ge,Me,Fe,ye);T.generateMipmaps=!1}else if(qe){if(mt){const ee=He(ce);t.texStorage2D(n.TEXTURE_2D,Q,Ge,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Fe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Me,Fe,ce);g(T)&&p(ne),Ne.__version=J.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function q(N,T,$){if(T.image.length!==6)return;const ne=Se(N,T),oe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+$);const J=i.get(oe);if(oe.version!==J.__version||ne===!0){t.activeTexture(n.TEXTURE0+$);const Ne=vt.getPrimaries(vt.workingColorSpace),le=T.colorSpace===vs?null:vt.getPrimaries(T.colorSpace),ve=T.colorSpace===vs||Ne===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!Be&&!ce?Me[te]=_(T.image[te],!0,r.maxCubemapSize):Me[te]=ce?T.image[te].image:T.image[te],Me[te]=Ue(T,Me[te]);const Fe=Me[0],Ge=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),je=v(T.internalFormat,Ge,ye,T.colorSpace),qe=T.isVideoTexture!==!0,mt=J.__version===void 0||ne===!0,O=oe.dataReady;let Q=S(T,Fe);se(n.TEXTURE_CUBE_MAP,T);let ee;if(Be){qe&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,je,Fe.width,Fe.height);for(let te=0;te<6;te++){ee=Me[te].mipmaps;for(let de=0;de<ee.length;de++){const Ie=ee[de];T.format!==ar?Ge!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Ie.width,Ie.height,Ge,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,je,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Ie.width,Ie.height,Ge,ye,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,je,Ie.width,Ie.height,0,Ge,ye,Ie.data)}}}else{if(ee=T.mipmaps,qe&&mt){ee.length>0&&Q++;const te=He(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,je,te.width,te.height)}for(let te=0;te<6;te++)if(ce){qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,Ge,ye,Me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,Me[te].width,Me[te].height,0,Ge,ye,Me[te].data);for(let de=0;de<ee.length;de++){const Qe=ee[de].image[te].image;qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Qe.width,Qe.height,Ge,ye,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,je,Qe.width,Qe.height,0,Ge,ye,Qe.data)}}else{qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ge,ye,Me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,Ge,ye,Me[te]);for(let de=0;de<ee.length;de++){const Ie=ee[de];qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Ge,ye,Ie.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,je,Ge,ye,Ie.image[te])}}}g(T)&&p(n.TEXTURE_CUBE_MAP),J.__version=oe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ie(N,T,$,ne,oe,J){const Ne=s.convert($.format,$.colorSpace),le=s.convert($.type),ve=v($.internalFormat,Ne,le,$.colorSpace);if(!i.get(T).__hasExternalTextures){const ce=Math.max(1,T.width>>J),Me=Math.max(1,T.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,ve,ce,Me,T.depth,0,Ne,le,null):t.texImage2D(oe,J,ve,ce,Me,0,Ne,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Ee(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,oe,i.get($).__webglTexture,0,Ke(T)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,oe,i.get($).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(N,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const ne=T.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,J=x(T.stencilBuffer,oe),Ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Ke(T);Ee(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,J,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,N)}else{const ne=T.textures;for(let oe=0;oe<ne.length;oe++){const J=ne[oe],Ne=s.convert(J.format,J.colorSpace),le=s.convert(J.type),ve=v(J.internalFormat,Ne,le,J.colorSpace),Be=Ke(T);$&&Ee(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ve,T.width,T.height):Ee(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,ve,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ve,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,oe=Ke(T);if(T.depthTexture.format===Va)Ee(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===al)Ee(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function re(N){const T=i.get(N),$=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ne=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){const oe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=ne}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");L(T.__webglFramebuffer,N)}else if($){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=n.createRenderbuffer(),he(T.__webglDepthbuffer[ne],N,!1);else{const oe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),he(T.__webglDepthbuffer,N,!1);else{const ne=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(N,T,$){const ne=i.get(N);T!==void 0&&ie(ne.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&re(N)}function pe(N){const T=N.texture,$=i.get(N),ne=i.get(T);N.addEventListener("dispose",A);const oe=N.textures,J=N.isWebGLCubeRenderTarget===!0,Ne=oe.length>1;if(Ne||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++),J){$.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[le]=[];for(let ve=0;ve<T.mipmaps.length;ve++)$.__webglFramebuffer[le][ve]=n.createFramebuffer()}else $.__webglFramebuffer[le]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)$.__webglFramebuffer[le]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let le=0,ve=oe.length;le<ve;le++){const Be=i.get(oe[le]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Ee(N)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){const ve=oe[le];$.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const Be=s.convert(ve.format,ve.colorSpace),ce=s.convert(ve.type),Me=v(ve.internalFormat,Be,ce,ve.colorSpace,N.isXRRenderTarget===!0),Fe=Ke(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Me,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,$.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),he($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),se(n.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ie($.__webglFramebuffer[le][ve],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else ie($.__webglFramebuffer[le],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let le=0,ve=oe.length;le<ve;le++){const Be=oe[le],ce=i.get(Be);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),se(n.TEXTURE_2D,Be),ie($.__webglFramebuffer,N,Be,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),se(le,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ie($.__webglFramebuffer[ve],N,T,n.COLOR_ATTACHMENT0,le,ve);else ie($.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,le,0);g(T)&&p(le),t.unbindTexture()}N.depthBuffer&&re(N)}function Le(N){const T=N.textures;for(let $=0,ne=T.length;$<ne;$++){const oe=T[$];if(g(oe)){const J=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ne=i.get(oe).__webglTexture;t.bindTexture(J,Ne),p(J),t.unbindTexture()}}}const I=[],De=[];function ze(N){if(N.samples>0){if(Ee(N)===!1){const T=N.textures,$=N.width,ne=N.height;let oe=n.COLOR_BUFFER_BIT;const J=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(N),le=T.length>1;if(le)for(let ve=0;ve<T.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[ve]);const Be=i.get(T[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,$,ne,0,0,$,ne,oe,n.NEAREST),l===!0&&(I.length=0,De.length=0,I.push(n.COLOR_ATTACHMENT0+ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(J),De.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<T.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[ve]);const Be=i.get(T[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ke(N){return Math.min(r.maxSamples,N.samples)}function Ee(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function Ue(N,T){const $=N.colorSpace,ne=N.format,oe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Zs&&$!==vs&&(vt.getTransfer($)===Dt?(ne!==ar||oe!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ee}function AL(n,e){function t(i,r=vs){let s;const o=vt.getTransfer(r);if(i===ts)return n.UNSIGNED_BYTE;if(i===v_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===x_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===IM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===DM)return n.BYTE;if(i===NM)return n.SHORT;if(i===Hc)return n.UNSIGNED_SHORT;if(i===__)return n.INT;if(i===zo)return n.UNSIGNED_INT;if(i===Xr)return n.FLOAT;if(i===ru)return n.HALF_FLOAT;if(i===UM)return n.ALPHA;if(i===kM)return n.RGB;if(i===ar)return n.RGBA;if(i===FM)return n.LUMINANCE;if(i===OM)return n.LUMINANCE_ALPHA;if(i===Va)return n.DEPTH_COMPONENT;if(i===al)return n.DEPTH_STENCIL;if(i===zM)return n.RED;if(i===y_)return n.RED_INTEGER;if(i===BM)return n.RG;if(i===S_)return n.RG_INTEGER;if(i===M_)return n.RGBA_INTEGER;if(i===Rf||i===bf||i===Pf||i===Lf)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ym||i===Sm||i===Mm||i===Em)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ym)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Em)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wm||i===Tm||i===Am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wm||i===Tm)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Am)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cm||i===Rm||i===bm||i===Pm||i===Lm||i===Dm||i===Nm||i===Im||i===Um||i===km||i===Fm||i===Om||i===zm||i===Bm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Im)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Um)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===km)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Om)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bm)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Df||i===Hm||i===Vm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Df)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===HM||i===Gm||i===jm||i===Wm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class CL extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wl extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RL={type:"move"};class np{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,m=.005;c.inputState.pinching&&d>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ri,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gs({vertexShader:bL,fragmentShader:PL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gi(new lu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DL extends vl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,m=null;const _=new LL,g=t.getContextAttributes();let p=null,v=null;const x=[],S=[],R=new ut;let A=null;const E=new Oi;E.layers.enable(1),E.viewport=new on;const b=new Oi;b.layers.enable(2),b.viewport=new on;const w=[E,b],M=new CL;M.layers.enable(1),M.layers.enable(2);let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new np,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new np,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new np,x[q]=ie),ie.getHandSpace()};function B(q){const ie=S.indexOf(q.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const ie=S[q];ie!==null&&(S[q]=null,x[q].disconnect(ie))}D=null,k=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Bo(h.framebufferWidth,h.framebufferHeight,{format:ar,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,he=null,L=null;g.depth&&(L=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?al:Va,he=g.stencil?ol:zo);const re={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Bo(d.textureWidth,d.textureHeight,{format:ar,type:ts,depthTexture:new n1(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let ie=0;ie<q.removed.length;ie++){const he=q.removed[ie],L=S.indexOf(he);L>=0&&(S[L]=null,x[L].disconnect(he))}for(let ie=0;ie<q.added.length;ie++){const he=q.added[ie];let L=S.indexOf(he);if(L===-1){for(let fe=0;fe<x.length;fe++)if(fe>=S.length){S.push(he),L=fe;break}else if(S[fe]===null){S[fe]=he,L=fe;break}if(L===-1)break}const re=x[L];re&&re.connect(he)}}const X=new j,V=new j;function U(q,ie,he){X.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const L=X.distanceTo(V),re=ie.projectionMatrix.elements,fe=he.projectionMatrix.elements,pe=re[14]/(re[10]-1),Le=re[14]/(re[10]+1),I=(re[9]+1)/re[5],De=(re[9]-1)/re[5],ze=(re[8]-1)/re[0],Ke=(fe[8]+1)/fe[0],Ee=pe*ze,Y=pe*Ke,Ue=L/(-ze+Ke),He=Ue*-ze;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(He),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),re[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const N=pe+Ue,T=Le+Ue,$=Ee-He,ne=Y+(L-He),oe=I*Le/T*N,J=De*Le/T*N;q.projectionMatrix.makePerspective($,ne,oe,J,N,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,he=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(he=_.depthFar)),M.near=b.near=E.near=ie,M.far=b.far=E.far=he,(D!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,k=M.far);const L=q.parent,re=M.cameras;Z(M,L);for(let fe=0;fe<re.length;fe++)Z(re[fe],L);re.length===2?U(M,E,b):M.projectionMatrix.copy(E.projectionMatrix),P(q,M,L)};function P(q,ie,he){he===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let se=null;function Se(q,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let L=!1;he.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let fe=0;fe<he.length;fe++){const pe=he[fe];let Le=null;if(h!==null)Le=h.getViewport(pe);else{const De=f.getViewSubImage(d,pe);Le=De.viewport,fe===0&&(e.setRenderTargetTextures(v,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(v))}let I=w[fe];I===void 0&&(I=new Oi,I.layers.enable(fe),I.viewport=new on,w[fe]=I),I.matrix.fromArray(pe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(pe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Le.x,Le.y,Le.width,Le.height),fe===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(I)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const fe=f.getDepthInformation(he[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,r.renderState)}}for(let he=0;he<x.length;he++){const L=S[he],re=x[he];L!==null&&re!==void 0&&re.update(L,ie,c||o)}se&&se(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Xe=new e1;Xe.setAnimationLoop(Se),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const ro=new fr,NL=new Vt;function IL(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ZM(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ii&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ii&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(g.envMap.value=x,ro.copy(S),ro.x*=-1,ro.y*=-1,ro.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),g.envMapRotation.value.setFromMatrix4(NL.makeRotationFromEuler(ro)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ii&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(m(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const x=f();v.__bindingPointIndex=x;const S=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=b.length;w<M;w++){const D=b[w];if(h(D,A,w,R)===!0){const k=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let K=0;K<B.length;K++){const X=B[K],V=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,x,S,R){const A=v.value,E=x+"_"+S;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const b=R[E];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return R[E]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function m(v){const x=v.uniforms;let S=0;const R=16;for(let E=0,b=x.length;E<b;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,D=w.length;M<D;M++){const k=w[M],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,K=B.length;W<K;W++){const X=B[W],V=_(X),U=S%R,Z=U%V.boundary,P=U+Z;S+=Z,P!==0&&R-P<V.storage&&(S+=R-P),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=V.storage}}}const A=S%R;return A>0&&(S+=R-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class kL{constructor(e={}){const{canvas:t=AC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rr,this.toneMapping=ks,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,E=null,b=-1,w=null;const M=new on,D=new on;let k=null;const B=new Ze(0);let W=0,K=t.width,X=t.height,V=1,U=null,Z=null;const P=new on(0,0,K,X),se=new on(0,0,K,X);let Se=!1;const Xe=new C_;let q=!1,ie=!1;const he=new Vt,L=new j,re=new on,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Le(){return E===null?V:1}let I=i;function De(C,F){return t.getContext(C,F)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${m_}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){const F="webgl2";if(I=De(F,C),I===null)throw De(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Ke,Ee,Y,Ue,He,N,T,$,ne,oe,J,Ne,le,ve,Be,ce,Me,Fe,Ge,ye,je,qe,mt;function O(){ze=new V2(I),ze.init(),je=new AL(I,ze),Ke=new k2(I,ze,e,je),Ee=new EL(I),Y=new W2(I),Ue=new cL,He=new TL(I,ze,Ee,Ue,Ke,je,Y),N=new O2(x),T=new H2(x),$=new QC(I),qe=new I2(I,$),ne=new G2(I,$,Y,qe),oe=new Y2(I,ne,$,Y),Fe=new X2(I,Ke,He),Be=new F2(Ue),J=new lL(x,N,T,ze,Ke,qe,Be),Ne=new IL(x,Ue),le=new fL,ve=new _L(ze),Me=new N2(x,N,T,Ee,oe,d,l),ce=new ML(x,oe,Ke),mt=new UL(I,Y,Ke,Ee),Ge=new U2(I,ze,Y),ye=new j2(I,ze,Y),Y.programs=J.programs,x.capabilities=Ke,x.extensions=ze,x.properties=Ue,x.renderLists=le,x.shadowMap=ce,x.state=Ee,x.info=Y}O();const Q=new DL(x,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(K,X,!1))},this.getSize=function(C){return C.set(K,X)},this.setSize=function(C,F,G=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,X=F,t.width=Math.floor(C*V),t.height=Math.floor(F*V),G===!0&&(t.style.width=C+"px",t.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(K*V,X*V).floor()},this.setDrawingBufferSize=function(C,F,G){K=C,X=F,V=G,t.width=Math.floor(C*G),t.height=Math.floor(F*G),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,F,G,H){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,F,G,H),Ee.viewport(M.copy(P).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,F,G,H){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,F,G,H),Ee.scissor(D.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){Ee.setScissorTest(Se=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(C=!0,F=!0,G=!0){let H=0;if(C){let z=!1;if(E!==null){const ae=E.texture.format;z=ae===M_||ae===S_||ae===y_}if(z){const ae=E.texture.type,_e=ae===ts||ae===zo||ae===Hc||ae===ol||ae===v_||ae===x_,Te=Me.getClearColor(),ge=Me.getClearAlpha(),we=Te.r,ke=Te.g,Pe=Te.b;_e?(h[0]=we,h[1]=ke,h[2]=Pe,h[3]=ge,I.clearBufferuiv(I.COLOR,0,h)):(m[0]=we,m[1]=ke,m[2]=Pe,m[3]=ge,I.clearBufferiv(I.COLOR,0,m))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT),G&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",de,!1),le.dispose(),ve.dispose(),Ue.dispose(),N.dispose(),T.dispose(),oe.dispose(),qe.dispose(),mt.dispose(),J.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",be),Q.removeEventListener("sessionend",ft),me.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Y.autoReset,F=ce.enabled,G=ce.autoUpdate,H=ce.needsUpdate,z=ce.type;O(),Y.autoReset=C,ce.enabled=F,ce.autoUpdate=G,ce.needsUpdate=H,ce.type=z}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const F=C.target;F.removeEventListener("dispose",Ie),Qe(F)}function Qe(C){Et(C),Ue.remove(C)}function Et(C){const F=Ue.get(C).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,G,H,z,ae){F===null&&(F=fe);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Te=Rt(C,F,G,H,z);Ee.setMaterial(H,_e);let ge=G.index,we=1;if(H.wireframe===!0){if(ge=ne.getWireframeAttribute(G),ge===void 0)return;we=2}const ke=G.drawRange,Pe=G.attributes.position;let dt=ke.start*we,Mt=(ke.start+ke.count)*we;ae!==null&&(dt=Math.max(dt,ae.start*we),Mt=Math.min(Mt,(ae.start+ae.count)*we)),ge!==null?(dt=Math.max(dt,0),Mt=Math.min(Mt,ge.count)):Pe!=null&&(dt=Math.max(dt,0),Mt=Math.min(Mt,Pe.count));const ht=Mt-dt;if(ht<0||ht===1/0)return;qe.setup(z,H,Te,G,ge);let tn,lt=Ge;if(ge!==null&&(tn=$.get(ge),lt=ye,lt.setIndex(tn)),z.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*Le()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(z.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*Le()),z.isLineSegments?lt.setMode(I.LINES):z.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else z.isPoints?lt.setMode(I.POINTS):z.isSprite&&lt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Re=z._multiDrawStarts,_n=z._multiDrawCounts,gt=z._multiDrawCount,Ki=ge?$.get(ge).bytesPerElement:1,Yo=Ue.get(H).currentProgram.getUniforms();for(let fi=0;fi<gt;fi++)Yo.setValue(I,"_gl_DrawID",fi),lt.render(Re[fi]/Ki,_n[fi])}else if(z.isInstancedMesh)lt.renderInstances(dt,ht,z.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_n=Math.min(G.instanceCount,Re);lt.renderInstances(dt,ht,_n)}else lt.render(dt,ht)};function wt(C,F,G){C.transparent===!0&&C.side===Hr&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,Ct(C,F,G),C.side=Vs,C.needsUpdate=!0,Ct(C,F,G),C.side=Hr):Ct(C,F,G)}this.compile=function(C,F,G=null){G===null&&(G=C),g=ve.get(G),g.init(F),v.push(g),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),C!==G&&C.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const H=new Set;return C.traverse(function(z){const ae=z.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const Te=ae[_e];wt(Te,G,z),H.add(Te)}else wt(ae,G,z),H.add(ae)}),v.pop(),g=null,H},this.compileAsync=function(C,F,G=null){const H=this.compile(C,F,G);return new Promise(z=>{function ae(){if(H.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){z(C);return}setTimeout(ae,10)}ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let at=null;function Ve(C){at&&at(C)}function be(){me.stop()}function ft(){me.start()}const me=new e1;me.setAnimationLoop(Ve),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(C){at=C,Q.setAnimationLoop(C),C===null?me.stop():me.start()},Q.addEventListener("sessionstart",be),Q.addEventListener("sessionend",ft),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,F,E),g=ve.get(C,v.length),g.init(F),v.push(g),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(he),ie=this.localClippingEnabled,q=Be.init(this.clippingPlanes,ie),_=le.get(C,p.length),_.init(),p.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Ye(ae,F,-1/0,x.sortObjects)}Ye(C,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,Z),pe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,pe&&Me.addToRenderList(_,C),this.info.render.frame++,q===!0&&Be.beginShadows();const G=g.state.shadowsArray;ce.render(G,C,F),q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,z=_.transmissive;if(g.setupLights(),F.isArrayCamera){const ae=F.cameras;if(z.length>0)for(let _e=0,Te=ae.length;_e<Te;_e++){const ge=ae[_e];$e(H,z,C,ge)}pe&&Me.render(C);for(let _e=0,Te=ae.length;_e<Te;_e++){const ge=ae[_e];Oe(_,C,ge,ge.viewport)}}else z.length>0&&$e(H,z,C,F),pe&&Me.render(C),Oe(_,C,F);E!==null&&(He.updateMultisampleRenderTarget(E),He.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,F),qe.resetDefaultState(),b=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],q===!0&&Be.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ye(C,F,G,H){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){H&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const _e=oe.update(C),Te=C.material;Te.visible&&_.push(C,_e,Te,G,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const _e=oe.update(C),Te=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),re.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),re.copy(_e.boundingSphere.center)),re.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(Te)){const ge=_e.groups;for(let we=0,ke=ge.length;we<ke;we++){const Pe=ge[we],dt=Te[Pe.materialIndex];dt&&dt.visible&&_.push(C,_e,dt,G,re.z,Pe)}}else Te.visible&&_.push(C,_e,Te,G,re.z,null)}}const ae=C.children;for(let _e=0,Te=ae.length;_e<Te;_e++)Ye(ae[_e],F,G,H)}function Oe(C,F,G,H){const z=C.opaque,ae=C.transmissive,_e=C.transparent;g.setupLightsView(G),q===!0&&Be.setGlobalState(x.clippingPlanes,G),H&&Ee.viewport(M.copy(H)),z.length>0&&kt(z,F,G),ae.length>0&&kt(ae,F,G),_e.length>0&&kt(_e,F,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function $e(C,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new Bo(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?ru:ts,minFilter:So,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ae=g.state.transmissionRenderTarget[H.id],_e=H.viewport||M;ae.setSize(_e.z,_e.w);const Te=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),pe&&Me.render(G);const ge=x.toneMapping;x.toneMapping=ks;const we=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),q===!0&&Be.setGlobalState(x.clippingPlanes,H),kt(C,G,H),He.updateMultisampleRenderTarget(ae),He.updateRenderTargetMipmap(ae),ze.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,dt=F.length;Pe<dt;Pe++){const Mt=F[Pe],ht=Mt.object,tn=Mt.geometry,lt=Mt.material,Re=Mt.group;if(lt.side===Hr&&ht.layers.test(H.layers)){const _n=lt.side;lt.side=ii,lt.needsUpdate=!0,it(ht,G,H,tn,lt,Re),lt.side=_n,lt.needsUpdate=!0,ke=!0}}ke===!0&&(He.updateMultisampleRenderTarget(ae),He.updateRenderTargetMipmap(ae))}x.setRenderTarget(Te),x.setClearColor(B,W),we!==void 0&&(H.viewport=we),x.toneMapping=ge}function kt(C,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ae=C.length;z<ae;z++){const _e=C[z],Te=_e.object,ge=_e.geometry,we=H===null?_e.material:H,ke=_e.group;Te.layers.test(G.layers)&&it(Te,F,G,ge,we,ke)}}function it(C,F,G,H,z,ae){C.onBeforeRender(x,F,G,H,z,ae),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(x,F,G,H,C,ae),z.transparent===!0&&z.side===Hr&&z.forceSinglePass===!1?(z.side=ii,z.needsUpdate=!0,x.renderBufferDirect(G,F,H,z,C,ae),z.side=Vs,z.needsUpdate=!0,x.renderBufferDirect(G,F,H,z,C,ae),z.side=Hr):x.renderBufferDirect(G,F,H,z,C,ae),C.onAfterRender(x,F,G,H,z,ae)}function Ct(C,F,G){F.isScene!==!0&&(F=fe);const H=Ue.get(C),z=g.state.lights,ae=g.state.shadowsArray,_e=z.state.version,Te=J.getParameters(C,z.state,ae,F,G),ge=J.getProgramCacheKey(Te);let we=H.programs;H.environment=C.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(C.isMeshStandardMaterial?T:N).get(C.envMap||H.environment),H.envMapRotation=H.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,we===void 0&&(C.addEventListener("dispose",Ie),we=new Map,H.programs=we);let ke=we.get(ge);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===_e)return Pt(C,Te),ke}else Te.uniforms=J.getUniforms(C),C.onBeforeCompile(Te,x),ke=J.acquireProgram(Te,ge),we.set(ge,ke),H.uniforms=Te.uniforms;const Pe=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=Be.uniform),Pt(C,Te),H.needsLights=ui(C),H.lightsStateVersion=_e,H.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function en(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=Nf.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Pt(C,F){const G=Ue.get(C);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Rt(C,F,G,H,z){F.isScene!==!0&&(F=fe),He.resetTextureUnits();const ae=F.fog,_e=H.isMeshStandardMaterial?F.environment:null,Te=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zs,ge=(H.isMeshStandardMaterial?T:N).get(H.envMap||_e),we=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,Mt=!!G.morphAttributes.color;let ht=ks;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ht=x.toneMapping);const tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=tn!==void 0?tn.length:0,Re=Ue.get(H),_n=g.state.lights;if(q===!0&&(ie===!0||C!==w)){const Di=C===w&&H.id===b;Be.setState(H,C,Di)}let gt=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==_n.state.version||Re.outputColorSpace!==Te||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==ge||H.fog===!0&&Re.fog!==ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Be.numPlanes||Re.numIntersection!==Be.numIntersection)||Re.vertexAlphas!==we||Re.vertexTangents!==ke||Re.morphTargets!==Pe||Re.morphNormals!==dt||Re.morphColors!==Mt||Re.toneMapping!==ht||Re.morphTargetsCount!==lt)&&(gt=!0):(gt=!0,Re.__version=H.version);let Ki=Re.currentProgram;gt===!0&&(Ki=Ct(H,F,z));let Yo=!1,fi=!1,nh=!1;const qt=Ki.getUniforms(),ss=Re.uniforms;if(Ee.useProgram(Ki.program)&&(Yo=!0,fi=!0,nh=!0),H.id!==b&&(b=H.id,fi=!0),Yo||w!==C){qt.setValue(I,"projectionMatrix",C.projectionMatrix),qt.setValue(I,"viewMatrix",C.matrixWorldInverse);const Di=qt.map.cameraPosition;Di!==void 0&&Di.setValue(I,L.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&qt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,fi=!0,nh=!0)}if(z.isSkinnedMesh){qt.setOptional(I,z,"bindMatrix"),qt.setOptional(I,z,"bindMatrixInverse");const Di=z.skeleton;Di&&(Di.boneTexture===null&&Di.computeBoneTexture(),qt.setValue(I,"boneTexture",Di.boneTexture,He))}z.isBatchedMesh&&(qt.setOptional(I,z,"batchingTexture"),qt.setValue(I,"batchingTexture",z._matricesTexture,He),qt.setOptional(I,z,"batchingIdTexture"),qt.setValue(I,"batchingIdTexture",z._indirectTexture,He),qt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&qt.setValue(I,"batchingColorTexture",z._colorsTexture,He));const ih=G.morphAttributes;if((ih.position!==void 0||ih.normal!==void 0||ih.color!==void 0)&&Fe.update(z,G,Ki),(fi||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,qt.setValue(I,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ss.envMap.value=ge,ss.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(ss.envMapIntensity.value=F.environmentIntensity),fi&&(qt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&xt(ss,nh),ae&&H.fog===!0&&Ne.refreshFogUniforms(ss,ae),Ne.refreshMaterialUniforms(ss,H,V,X,g.state.transmissionRenderTarget[C.id]),Nf.upload(I,en(Re),ss,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Nf.upload(I,en(Re),ss,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qt.setValue(I,"center",z.center),qt.setValue(I,"modelViewMatrix",z.modelViewMatrix),qt.setValue(I,"normalMatrix",z.normalMatrix),qt.setValue(I,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Di=H.uniformsGroups;for(let rh=0,IE=Di.length;rh<IE;rh++){const n0=Di[rh];mt.update(n0,Ki),mt.bind(n0,Ki)}}return Ki}function xt(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,F,G){Ue.get(C.texture).__webglTexture=F,Ue.get(C.depthTexture).__webglTexture=G;const H=Ue.get(C);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const G=Ue.get(C);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,G=0){E=C,R=F,A=G;let H=!0,z=null,ae=!1,_e=!1;if(C){const ge=Ue.get(C);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)He.setupRenderTarget(C);else if(ge.__hasExternalTextures)He.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pe=C.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&Ue.has(Pe)&&(C.width!==Pe.image.width||C.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(C)}}const we=C.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const ke=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?z=ke[F][G]:z=ke[F],ae=!0):C.samples>0&&He.useMultisampledRTT(C)===!1?z=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[G]:z=ke,M.copy(C.viewport),D.copy(C.scissor),k=C.scissorTest}else M.copy(P).multiplyScalar(V).floor(),D.copy(se).multiplyScalar(V).floor(),k=Se;if(Ee.bindFramebuffer(I.FRAMEBUFFER,z)&&H&&Ee.drawBuffers(C,z),Ee.viewport(M),Ee.scissor(D),Ee.setScissorTest(k),ae){const ge=Ue.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(_e){const ge=Ue.get(C.texture),we=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,G||0,we)}b=-1},this.readRenderTargetPixels=function(C,F,G,H,z,ae,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){Ee.bindFramebuffer(I.FRAMEBUFFER,Te);try{const ge=C.texture,we=ge.format,ke=ge.type;if(!Ke.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-H&&G>=0&&G<=C.height-z&&I.readPixels(F,G,H,z,je.convert(we),je.convert(ke),ae)}finally{const ge=E!==null?Ue.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(C,F,G,H,z,ae,_e){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){Ee.bindFramebuffer(I.FRAMEBUFFER,Te);try{const ge=C.texture,we=ge.format,ke=ge.type;if(!Ke.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-H&&G>=0&&G<=C.height-z){const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(F,G,H,z,je.convert(we),je.convert(ke),0),I.flush();const dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await CC(I,dt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae)}finally{I.deleteBuffer(Pe),I.deleteSync(dt)}return ae}}finally{const ge=E!==null?Ue.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(C,F=null,G=0){C.isTexture!==!0&&(fc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const H=Math.pow(2,-G),z=Math.floor(C.image.width*H),ae=Math.floor(C.image.height*H),_e=F!==null?F.x:0,Te=F!==null?F.y:0;He.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,_e,Te,z,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(C,F,G=null,H=null,z=0){C.isTexture!==!0&&(fc("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let ae,_e,Te,ge,we,ke;G!==null?(ae=G.max.x-G.min.x,_e=G.max.y-G.min.y,Te=G.min.x,ge=G.min.y):(ae=C.image.width,_e=C.image.height,Te=0,ge=0),H!==null?(we=H.x,ke=H.y):(we=0,ke=0);const Pe=je.convert(F.format),dt=je.convert(F.type);He.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),lt=I.getParameter(I.UNPACK_SKIP_ROWS),Re=I.getParameter(I.UNPACK_SKIP_IMAGES),_n=C.isCompressedTexture?C.mipmaps[z]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_n.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,ge),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,we,ke,ae,_e,Pe,dt,_n.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,we,ke,_n.width,_n.height,Pe,_n.data):I.texSubImage2D(I.TEXTURE_2D,z,we,ke,ae,_e,Pe,dt,_n),I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(C,F,G=null,H=null,z=0){C.isTexture!==!0&&(fc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,C=arguments[2],F=arguments[3],z=arguments[4]||0);let ae,_e,Te,ge,we,ke,Pe,dt,Mt;const ht=C.isCompressedTexture?C.mipmaps[z]:C.image;G!==null?(ae=G.max.x-G.min.x,_e=G.max.y-G.min.y,Te=G.max.z-G.min.z,ge=G.min.x,we=G.min.y,ke=G.min.z):(ae=ht.width,_e=ht.height,Te=ht.depth,ge=0,we=0,ke=0),H!==null?(Pe=H.x,dt=H.y,Mt=H.z):(Pe=0,dt=0,Mt=0);const tn=je.convert(F.format),lt=je.convert(F.type);let Re;if(F.isData3DTexture)He.setTexture3D(F,0),Re=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)He.setTexture2DArray(F,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ki=I.getParameter(I.UNPACK_SKIP_PIXELS),Yo=I.getParameter(I.UNPACK_SKIP_ROWS),fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Re,z,Pe,dt,Mt,ae,_e,Te,tn,lt,ht.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,z,Pe,dt,Mt,ae,_e,Te,tn,ht.data):I.texSubImage3D(Re,z,Pe,dt,Mt,ae,_e,Te,tn,lt,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,_n),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ki),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yo),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fi),z===0&&F.generateMipmaps&&I.generateMipmap(Re),Ee.unbindTexture()},this.initRenderTarget=function(C){Ue.get(C).__webglFramebuffer===void 0&&He.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?He.setTextureCube(C,0):C.isData3DTexture?He.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?He.setTexture2DArray(C,0):He.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,Ee.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===w_?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Kd?"display-p3":"srgb"}}class FL extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class If extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yd=new j,Sd=new j,ux=new Vt,kl=new A_,qu=new ou,ip=new j,fx=new j;class OL extends ln{constructor(e=new hr,t=new If){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)yd.fromBufferAttribute(t,r-1),Sd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=yd.distanceTo(Sd);e.setAttribute("lineDistance",new Gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qu.copy(i.boundingSphere),qu.applyMatrix4(r),qu.radius+=s,e.ray.intersectsSphere(qu)===!1)return;ux.copy(r).invert(),kl.copy(e.ray).applyMatrix4(ux);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=c){const p=u.getX(_),v=u.getX(_+1),x=Ku(this,e,kl,l,p,v);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(h),p=Ku(this,e,kl,l,_,g);p&&t.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=c){const p=Ku(this,e,kl,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ku(this,e,kl,l,m-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ku(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(yd.fromBufferAttribute(o,r),Sd.fromBufferAttribute(o,s),t.distanceSqToSegment(yd,Sd,ip,fx)>i)return;ip.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ip);if(!(l<e.near||l>e.far))return{distance:l,point:fx.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const dx=new j,hx=new j;class px extends OL{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)dx.fromBufferAttribute(t,r),hx.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dx.distanceTo(hx);e.setAttribute("lineDistance",new Gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xl extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mx=new Vt,Ym=new A_,Zu=new ou,Qu=new j;class rp extends ln{constructor(e=new hr,t=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zu.copy(i.boundingSphere),Zu.applyMatrix4(r),Zu.radius+=s,e.ray.intersectsSphere(Zu)===!1)return;mx.copy(r).invert(),Ym.copy(e.ray).applyMatrix4(mx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=d,_=h;m<_;m++){const g=c.getX(m);Qu.fromBufferAttribute(f,g),gx(Qu,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=d,_=h;m<_;m++)Qu.fromBufferAttribute(f,m),gx(Qu,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gx(n,e,t,i,r,s,o){const a=Ym.distanceSqToPoint(n);if(a<t){const l=new j;Ym.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zL extends dr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class BL extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HL extends BL{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VL extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _x={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class GL{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],m=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null}}}const jL=new GL;class b_{constructor(e){this.manager=e!==void 0?e:jL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}b_.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur={};class WL extends Error{constructor(e,t){super(e),this.response=t}}class XL extends b_{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_x.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ur[e]!==void 0){Ur[e].push({onLoad:t,onProgress:i,onError:r});return}Ur[e]=[],Ur[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ur[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,m=h!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){f.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:h});for(let A=0,E=u.length;A<E;A++){const b=u[A];b.onProgress&&b.onProgress(R)}p.enqueue(S),v()}},x=>{p.error(x)})}}});return new Response(g)}else throw new WL(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(m=>h.decode(m))}}}).then(c=>{_x.add(e,c);const u=Ur[e];delete Ur[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Ur[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ur[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class a1 extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class YL extends a1{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sp=new Vt,vx=new j,xx=new j;class $L{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new C_,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vx.setFromMatrixPosition(e.matrixWorld),t.position.copy(vx),xx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xx),t.updateMatrixWorld(),sp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qL extends $L{constructor(){super(new t1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yx extends a1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new qL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:m_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=m_);const KL=/^[og]\s*(.+)?/,ZL=/^mtllib /,QL=/^usemtl /,JL=/^usemap /,Sx=/\s+/,Mx=new j,op=new j,Ex=new j,wx=new j,Ii=new j,Ju=new Ze;function eD(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;Mx.fromArray(r,e),op.fromArray(r,t),Ex.fromArray(r,i),Ii.subVectors(Ex,op),wx.subVectors(Mx,op),Ii.cross(wx),Ii.normalize(),s.push(Ii.x,Ii.y,Ii.z),s.push(Ii.x,Ii.y,Ii.z),s.push(Ii.x,Ii.y,Ii.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),h=this.parseVertexIndex(i,u);if(this.addVertex(f,d,h),this.addColor(f,d,h),a!==void 0&&a!==""){const m=this.normals.length;f=this.parseNormalIndex(a,m),d=this.parseNormalIndex(l,m),h=this.parseNormalIndex(c,m),this.addNormal(f,d,h)}else this.addFaceNormal(f,d,h);if(r!==void 0&&r!==""){const m=this.uvs.length;f=this.parseUVIndex(r,m),d=this.parseUVIndex(s,m),h=this.parseUVIndex(o,m),this.addUV(f,d,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class tD extends b_{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new XL(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new eD;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Sx);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Ju.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Ju.r,Ju.g,Ju.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Sx),h=[];for(let _=0,g=d.length;_<g;_++){const p=d[_];if(p.length>0){const v=p.split("/");h.push(v)}}const m=h[0];for(let _=1,g=h.length-1;_<g;_++){const p=h[_],v=h[_+1];t.addFace(m[0],p[0],v[0],m[1],p[1],v[1],m[2],p[2],v[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let d=[];const h=[];if(c.indexOf("/")===-1)d=f;else for(let m=0,_=f.length;m<_;m++){const g=f[m].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&h.push(g[1])}t.addLineGeometry(d,h)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((r=KL.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(QL.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(ZL.test(c))t.materialLibraries.push(c.substring(7).trim());else if(JL.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const d=r[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Wl;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,f=c.materials,d=u.type==="Line",h=u.type==="Points";let m=!1;if(u.vertices.length===0)continue;const _=new hr;_.setAttribute("position",new Gn(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Gn(u.normals,3)),u.colors.length>0&&(m=!0,_.setAttribute("color",new Gn(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Gn(u.uvs,2));const g=[];for(let v=0,x=f.length;v<x;v++){const S=f[v],R=S.name+"_"+S.smooth+"_"+m;let A=t.materials[R];if(this.materials!==null){if(A=this.materials.create(S.name),d&&A&&!(A instanceof If)){const E=new If;dr.prototype.copy.call(E,A),E.color.copy(A.color),A=E}else if(h&&A&&!(A instanceof Xl)){const E=new Xl({size:10,sizeAttenuation:!1});dr.prototype.copy.call(E,A),E.color.copy(A.color),E.map=A.map,A=E}}A===void 0&&(d?A=new If:h?A=new Xl({size:1,sizeAttenuation:!1}):A=new VL,A.name=S.name,A.flatShading=!S.smooth,A.vertexColors=m,t.materials[R]=A),g.push(A)}let p;if(g.length>1){for(let v=0,x=f.length;v<x;v++){const S=f[v];_.addGroup(S.groupStart,S.groupCount,v)}d?p=new px(_,g):h?p=new rp(_,g):p=new Gi(_,g)}else d?p=new px(_,g[0]):h?p=new rp(_,g[0]):p=new Gi(_,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new Xl({size:1,sizeAttenuation:!1}),l=new hr;l.setAttribute("position",new Gn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Gn(t.colors,3)),a.vertexColors=!0);const c=new rp(l,a);s.add(c)}return s}}function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gc={duration:.5,overwrite:!1,delay:0},P_,Sn,Ut,ji=1e8,At=1/ji,$m=Math.PI*2,nD=$m/4,iD=0,c1=Math.sqrt,rD=Math.cos,sD=Math.sin,gn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},ns=function(e){return typeof e=="number"},L_=function(e){return typeof e>"u"},br=function(e){return typeof e=="object"},si=function(e){return e!==!1},D_=function(){return typeof window<"u"},ef=function(e){return Wt(e)||gn(e)},u1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,oD=/random\([^)]+\)/g,aD=/,\s*/g,Tx=/(?:-?\.?\d|\.)+/gi,f1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ap=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,d1=/[+-]=-?[.\d]+/,lD=/[^,'"\[\]\s]+/gi,cD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,_r,qm,N_,Ri={},Md={},h1,p1=function(e){return(Md=cl(e,Ri))&&ci},I_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},jc=function(e,t){return!t&&console.warn(e)},m1=function(e,t){return e&&(Ri[e]=t)&&Md&&(Md[e]=t)||Ri},Wc=function(){return 0},uD={suppressEvents:!0,isStart:!0,kill:!1},Uf={suppressEvents:!0,kill:!1},fD={suppressEvents:!0},U_={},Fs=[],Km={},g1,_i={},lp={},Ax=30,kf=[],k_="",F_=function(e){var t=e[0],i,r;if(br(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=kf.length;r--&&!kf[r].targetTest(t););i=kf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new O1(e[r],i)))||e.splice(r,1);return e},Co=function(e){return e._gsap||F_(Wi(e))[0]._gsap},_1=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():L_(i)&&e.getAttribute&&e.getAttribute(t)||i},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},ja=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},dD=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ed=function(){var e=Fs.length,t=Fs.slice(0),i,r;for(Km={},Fs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},O_=function(e){return!!(e._initted||e._startAt||e.add)},v1=function(e,t,i,r){Fs.length&&!Sn&&Ed(),e.render(t,i,!!(Sn&&t<0&&O_(e))),Fs.length&&!Sn&&Ed()},x1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lD).length<2?t:gn(e)?e.trim():e},y1=function(e){return e},bi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hD=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},cl=function(e,t){for(var i in t)e[i]=t[i];return e},Cx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=br(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},wd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},dc=function(e){var t=e.parent||zt,i=e.keyframes?hD(Nn(e.keyframes)):bi;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},pD=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},S1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Qd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},js=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},mD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zm=function(e,t,i,r){return e._startAt&&(Sn?e._startAt.revert(Uf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},gD=function n(e){return!e||e._ts&&n(e.parent)},Rx=function(e){return e._repeat?ul(e._tTime,e=e.duration()+e._rDelay)*e:0},ul=function(e,t){var i=Math.floor(e=Ft(e/t));return e&&i===e?i-1:i},Td=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jd=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},eh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jd(e),i._dirty||Ro(i,e)),e},M1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Td(e.rawTime(),t),(!t._dur||cu(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},Mr=function(e,t,i,r){return t.parent&&js(t),t._start=Ft((ns(i)?i:i||e!==zt?Ui(e,i,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),S1(e,t,"_first","_last",e._sort?"_start":0),Qm(t)||(e._recent=t),r||M1(e,t),e._ts<0&&eh(e,e._tTime),e},E1=function(e,t){return(Ri.ScrollTrigger||I_("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},w1=function(e,t,i,r,s){if(B_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&g1!==xi.frame)return Fs.push(e),e._lazy=[s,r],1},_D=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Qm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vD=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&_D(e)&&!(!e._initted&&Qm(e))||(e._ts<0||e._dp._ts<0)&&!Qm(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=cu(0,e._tDur,t),u=ul(l,a),e._yoyo&&u&1&&(o=1-o),u!==ul(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&w1(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zm(e,t,i,!0),e._onUpdate&&!i&&Mi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&js(e,1),!i&&!Sn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xD=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},fl=function(e,t,i,r){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!r&&eh(e,e._tTime=e._tDur*a),e.parent&&Jd(e),i||Ro(e.parent,e),e},bx=function(e){return e instanceof Qn?Ro(e):fl(e,e._dur)},yD={_start:0,endTime:Wc,totalDuration:Wc},Ui=function n(e,t,i){var r=e.labels,s=e._recent||yD,o=e.duration()>=ji?s.endTime(!1):e._dur,a,l,c;return gn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Nn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},hc=function(e,t,i){var r=ns(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},Qs=function(e,t){return e||e===0?t(e):t},cu=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!gn(e)||!(t=cD.exec(e))?"":t[1]},SD=function(e,t,i){return Qs(i,function(r){return cu(e,t,r)})},Jm=[].slice,T1=function(e,t){return e&&br(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&br(e[0]))&&!e.nodeType&&e!==_r},MD=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return gn(r)&&!t||T1(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):gn(e)&&!i&&(qm||!dl())?Jm.call((t||N_).querySelectorAll(e),0):Nn(e)?MD(e,i):T1(e)?Jm.call(e,0):e?[e]:[]},eg=function(e){return e=Wi(e)[0]||jc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?jc("Invalid scope")||N_.createElement("div"):e)}},A1=function(e){return e.sort(function(){return .5-Math.random()})},C1=function(e){if(Wt(e))return e;var t=br(e)?e:{each:e},i=bo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return gn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,m){var _=(m||t).length,g=o[_],p,v,x,S,R,A,E,b,w;if(!g){if(w=t.grid==="auto"?0:(t.grid||[1,ji])[1],!w){for(E=-ji;E<(E=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(g=o[_]=[],p=l?Math.min(w,_)*u-.5:r%w,v=w===ji?0:l?_*f/w-.5:r/w|0,E=0,b=ji,A=0;A<_;A++)x=A%w-p,S=v-(A/w|0),g[A]=R=c?Math.abs(c==="y"?S:x):c1(x*x+S*S),R>E&&(E=R),R<b&&(b=R);r==="random"&&A1(g),g.max=E-b,g.min=b,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Ln(t.amount||t.each)||0,i=i&&_<0?UD(i):i}return _=(g[d]-g.min)/g.max||0,Ft(g.b+(i?i(_):_)*g.v)+g.u}},tg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ft(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ns(i)?0:Ln(i))}},R1=function(e,t){var i=Nn(e),r,s;return!i&&br(e)&&(r=i=e.radius||ji,e.values?(e=Wi(e.values),(s=!ns(e[0]))&&(r*=r)):e=tg(e.increment)),Qs(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ji,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ns(o)?u:u+Ln(o)}:tg(e))},b1=function(e,t,i,r){return Qs(Nn(e)?!t:i===!0?!!(i=0):!r,function(){return Nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},ED=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},wD=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},TD=function(e,t,i){return L1(e,t,0,1,i)},P1=function(e,t,i){return Qs(i,function(r){return e[~~t(r)]})},AD=function n(e,t,i){var r=t-e;return Nn(e)?P1(e,n(0,e.length),t):Qs(i,function(s){return(r+(s-e)%r)%r+e})},CD=function n(e,t,i){var r=t-e,s=r*2;return Nn(e)?P1(e,n(0,e.length-1),t):Qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xc=function(e){return e.replace(oD,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(aD);return b1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},L1=function(e,t,i,r,s){var o=t-e,a=r-i;return Qs(s,function(l){return i+((l-e)/o*a||0)})},RD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=gn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Nn(e)&&!Nn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(m){m*=f;var _=Math.min(d,~~m);return u[_](m-_)},i=t}else r||(e=cl(Nn(e)?[]:{},e));if(!u){for(l in t)z_.call(a,e,l,"get",t[l]);s=function(m){return G_(m,a)||(o?e.p:e)}}}return Qs(i,s)},Px=function(e,t,i){var r=e.labels,s=ji,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Fs.length&&Ed(),a&&(Ut=a),u=l?s.apply(c,l):s.call(c),Ut=o,u},Yl=function(e){return js(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&Mi(e,"onInterrupt"),e},Na,D1=[],N1=function(e){if(e)if(e=!e.name&&e.default||e,D_()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Wc,render:G_,add:z_,kill:WD,modifier:jD,rawVars:0},o={targetTest:0,get:0,getSetter:V_,aliases:{},register:0};if(dl(),e!==r){if(_i[t])return;bi(r,bi(wd(e,s),o)),cl(r.prototype,cl(s,wd(e,o))),_i[r.prop=t]=r,e.targetTest&&(kf.push(r),U_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}m1(t,r),e.register&&e.register(ci,r,ai)}else D1.push(e)},Tt=255,$l={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},cp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},I1=function(e,t,i){var r=e?ns(e)?[e>>16,e>>8&Tt,e&Tt]:0:$l.black,s,o,a,l,c,u,f,d,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$l[e])r=$l[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(Tx),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=cp(l+1/3,s,o),r[1]=cp(l,s,o),r[2]=cp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(f1),i&&r.length<4&&(r[3]=1),r}else r=e.match(Tx)||$l.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},U1=function(e){var t=[],i=[],r=-1;return e.split(Os).forEach(function(s){var o=s.match(Da)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Lx=function(e,t,i){var r="",s=(e+r).match(Os),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=I1(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=U1(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Os,"1").split(Da),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Os),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Os=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $l)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),bD=/hsl[a]?\(/,k1=function(e){var t=e.join(" "),i;if(Os.lastIndex=0,Os.test(t))return i=bD.test(t),e[1]=Lx(e[1],i),e[0]=Lx(e[0],i,U1(e[1])),!0},Yc,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,m=function _(g){var p=n()-r,v=g===!0,x,S,R,A;if((p>e||p<0)&&(i+=p-t),r+=p,R=r-i,x=R-o,(x>0||v)&&(A=++f.frame,d=R-f.time*1e3,f.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=c(_)),S)for(h=0;h<a.length;h++)a[h](R,d,A,g)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){h1&&(!qm&&D_()&&(_r=qm=window,N_=_r.document||{},Ri.gsap=ci,(_r.gsapVersions||(_r.gsapVersions=[])).push(ci.version),p1(Md||_r.GreenSockGlobals||!_r.gsap&&_r||{}),D1.forEach(N1)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Yc=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yc=0,c=Wc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,p,v){var x=p?function(S,R,A,E){g(S,R,A,E),f.remove(x)}:g;return f.remove(g),a[v?"unshift":"push"](x),dl(),x},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),dl=function(){return!Yc&&xi.wake()},ct={},PD=/^[\d.\-M][\d.\-,\s]/,LD=/["']/g,DD=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(LD,"").trim():+c,r=l.substr(a+1).trim();return t},ND=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ID=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[DD(t[1])]:ND(e).split(",").map(x1)):ct._CE&&PD.test(e)?ct._CE("",e):i},UD=function(e){return function(t){return 1-e(1-t)}},bo=function(e,t){return e&&(Wt(e)?e:ct[e]||ID(e))||t},Xo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return oi(e,function(a){ct[a]=Ri[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},F1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},up=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/$m*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*sD((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:F1(a);return s=$m/s,l.config=function(c,u){return n(e,c,u)},l},fp=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:F1(i);return r.config=function(s){return n(e,s)},r};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Xo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Xo("Elastic",up("in"),up("out"),up());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Xo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Xo("Circ",function(n){return-(c1(1-n*n)-1)});Xo("Sine",function(n){return n===1?1:-rD(n*nD)+1});Xo("Back",fp("in"),fp("out"),fp());ct.SteppedEase=ct.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*cu(0,o,a)|0)+s)*i}}};Gc.ease=ct["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return k_+=n+","+n+"Params,"});var O1=function(e,t){this.id=iD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_1,this.set=t?t.getSetter:V_},$c=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Yc||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,fl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(dl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(eh(this,i),!s._dp||s.parent||M1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),v1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Rx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Rx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ul(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Td(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts,this.totalTime(cu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Jd(this),mD(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(dl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ft(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Td(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fD);var r=Sn;return Sn=i,O_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,bx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,bx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),si(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,si(r)),this._dur||(this._zTime=-At),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Wt(i)?i:y1,l=function(){var u=r.then;r.then=null,s&&s(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Yl(this)},n}();bi($c.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Qn=function(n){l1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),zt&&Mr(i.parent||zt,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&E1(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return hc(0,arguments,this),this},t.from=function(r,s,o){return hc(1,arguments,this),this},t.fromTo=function(r,s,o,a){return hc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,dc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return Mr(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,dc(o).immediateRender=si(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,dc(a).immediateRender=si(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ft(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,m,_,g,p,v,x,S,R,A,E;if(this!==zt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,x=this._ts,p=!x,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=Ft(u%g),u===l?(_=this._repeat,d=c):(R=Ft(u/g),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=ul(this._tTime,g),!a&&this._tTime&&R!==_&&this._tTime-R*g-this._dur<=0&&(R=_),A&&_&1&&(d=c-d,E=1),_!==R&&!this._lock){var b=A&&R&1,w=b===(A&&_&1);if(_<R&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ft(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=xD(this,Ft(a),Ft(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!R&&(Mi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){v=0,m&&(u+=this._zTime=-At);break}}h=m}else{h=this._last;for(var M=r<0?r:d;h;){if(m=h._prev,(h._act||M<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,s,o||Sn&&O_(h)),d!==this._time||!this._ts&&!p){v=0,m&&(u+=this._zTime=M?-At:At);break}}h=m}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=S,Jd(this),this.render(r,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&js(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Mi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ns(s)||(s=Ui(this,s,r)),!(r instanceof $c)){if(Nn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(gn(r))return this.addLabel(r,s);if(Wt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?Mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return gn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&Qd(this,r),r===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||Wc,o);return a.data="isPause",this._hasPause=1,Mr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&js(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ss!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,c=ns(s),u;l;)l instanceof Qt?dD(l._targets,a)&&(c?(!Ss||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,m=Qt.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!h){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&fl(m,g,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,f||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,bi({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Px(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Px(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Ft(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ro(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ro(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ji,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ft(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;fl(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(v1(zt,Td(r,zt)),g1=xi.frame),xi.frame>=Ax){Ax+=Ai.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Ai.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}($c);bi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var kD=function(e,t,i,r,s,o,a){var l=new ai(this._pt,e,t,0,1,j1,null,s),c=0,u=0,f,d,h,m,_,g,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Xc(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(ap)||[];f=ap.exec(r);)m=f[0],_=r.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?ja(g,m)-g:parseFloat(m)-g,m:h&&h<4?Math.round:0},c=ap.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(d1.test(r)||p)&&(l.e=0),this._pt=l,l},z_=function(e,t,i,r,s,o,a,l,c,u){Wt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Wt(f)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Wt(f)?c?HD:V1:H_,m;if(gn(r)&&(~r.indexOf("random(")&&(r=Xc(r)),r.charAt(1)==="="&&(m=ja(d,r)+(Ln(d)||0),(m||m===0)&&(r=m))),!u||d!==r||ng)return!isNaN(d*r)&&r!==""?(m=new ai(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?GD:G1,0,h),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(t in e)&&I_(t,r),kD.call(this,e,t,d,r,h,l||Ai.stringFilter,c))},FD=function(e,t,i,r,s){if(Wt(e)&&(e=pc(e,s,t,i,r)),!br(e)||e.style&&e.nodeType||Nn(e)||u1(e))return gn(e)?pc(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=pc(e[a],s,t,i,r);return o},z1=function(e,t,i,r,s,o){var a,l,c,u;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:FD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ai(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Na))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ss,ng,B_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,x=e._overwrite==="auto"&&!P_,S=e.timeline,R=r.easeReverse||f,A,E,b,w,M,D,k,B,W,K,X,V,U;if(S&&(!d||!s)&&(s="none"),e._ease=bo(s,Gc.ease),e._rEase=R&&(bo(R)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(B=g[0]?Co(g[0]).harness:0,V=B&&r[B.prop],A=wd(r,U_),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&m?Uf:uD),_._lazy=0),o){if(js(e._startAt=Qt.set(g,bi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!h)&&e._startAt.revert(Uf),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),b=bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&si(l),immediateRender:a,stagger:0,parent:p},A),V&&(b[B.prop]=V),js(e._startAt=Qt.set(g,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Uf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&si(l)||l&&!m,E=0;E<g.length;E++){if(M=g[E],k=M._gsap||F_(g)[E]._gsap,e._ptLookup[E]=K={},Km[k.id]&&Fs.length&&Ed(),X=v===g?E:v.indexOf(M),B&&(W=new B).init(M,V||A,e,X,v)!==!1&&(e._pt=w=new ai(e._pt,M,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Z){K[Z]=w}),W.priority&&(D=1)),!B||V)for(b in A)_i[b]&&(W=z1(b,A,e,X,M,v))?W.priority&&(D=1):K[b]=w=z_.call(e,M,b,"get",A[b],X,v,0,r.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),x&&e._pt&&(Ss=e,zt.killTweensOf(M,K,e.globalTime(t)),U=!e.parent,Ss=0),e._pt&&l&&(Km[k.id]=1)}D&&W1(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!U,d&&t<=0&&S.render(ji,!0,!0)},OD=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ng=1,e.vars[t]="+=0",B_(e,a),ng=0,l?jc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Xt(i)+Ln(f.e)),f.b&&(f.b=u.s+Ln(f.b))},zD=function(e,t){var i=e[0]?Co(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=cl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},BD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Nn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pc=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):gn(e)&&~e.indexOf("random(")?Xc(e):e},B1=k_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",H1={};oi(B1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return H1[n]=1});var Qt=function(n){l1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:dc(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=r.parent||zt,v=(Nn(i)||u1(i)?ns(i[0]):"length"in r)?[i]:Wi(i),x,S,R,A,E,b,w,M;if(a._targets=v.length?F_(v):jc("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||d||ef(c)||ef(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Qn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Or(a),x._start=0,d||ef(c)||ef(u)){if(A=v.length,w=d&&C1(d),br(d))for(E in d)~B1.indexOf(E)&&(M||(M={}),M[E]=d[E]);for(S=0;S<A;S++)R=wd(r,H1),R.stagger=0,D&&(R.easeReverse=D),M&&cl(R,M),b=v[S],R.duration=+pc(c,Or(a),S,b,v),R.delay=(+pc(u,Or(a),S,b,v)||0)-a._delay,!d&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),x.to(b,R,w?w(S,b,v):0),x._ease=ct.none;x.duration()?c=u=0:a.timeline=0}else if(m){dc(bi(x.vars.defaults,{ease:"none"})),x._ease=bo(m.ease||r.ease||"none");var k=0,B,W,K;if(Nn(m))m.forEach(function(X){return x.to(v,X,">")}),x.duration();else{R={};for(E in m)E==="ease"||E==="easeEach"||BD(E,m[E],R,m.easeEach);for(E in R)for(B=R[E].sort(function(X,V){return X.t-V.t}),k=0,S=0;S<B.length;S++)W=B[S],K={ease:W.e,duration:(W.t-(S?B[S-1].t:0))/100*c},K[E]=W.v,x.to(v,K,k),k+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return h===!0&&!P_&&(Ss=Or(a),zt.killTweensOf(v),Ss=0),Mr(p,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!m&&a._start===Ft(p._time)&&si(f)&&gD(Or(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),g&&E1(Or(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-At&&!u?l:r<At?0:r,d,h,m,_,g,p,v,x;if(!c)vD(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=Ft(f%_),f===l?(m=this._repeat,d=c):(g=Ft(f/_),m=~~g,m&&m===g?(d=c,m--):d>c&&(d=c)),p=this._yoyo&&m&1,p&&(d=c-d),g=ul(this._tTime,_),d===a&&!o&&this._initted&&m===g)return this._tTime=f,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(w1(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var R=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(S?-1:1)/R:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(Mi(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zm(this,r,s,o),Mi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Zm(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&js(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Yc||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||B_(this,c),u=this._ease(c/this._dur),OD(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(eh(this,0),this.parent||S1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Yl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ss&&Ss.vars.overwrite!==!0)._first||Yl(this),this.parent&&o!==this.timeline.totalDuration()&&fl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,c=this._ptLookup,u=this._pt,f,d,h,m,_,g,p;if((!s||s==="all")&&pD(a,l))return s==="all"&&(this._pt=0),Yl(this);for(f=this._op=this._op||[],s!=="all"&&(gn(s)&&(_={},oi(s,function(v){return _[v]=1}),s=_),s=zD(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,m=d,h={}):(h=f[p]=f[p]||{},m=s);for(_ in m)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Qd(this,g,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Yl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return hc(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return hc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e}($c);bi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(n){Qt[n]=function(){var e=new Qn,t=Jm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var H_=function(e,t,i){return e[t]=i},V1=function(e,t,i){return e[t](i)},HD=function(e,t,i,r){return e[t](r.fp,i)},VD=function(e,t,i){return e.setAttribute(t,i)},V_=function(e,t){return Wt(e[t])?V1:L_(e[t])&&e.setAttribute?VD:H_},G1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},j1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},G_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},jD=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},WD=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Qd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},XD=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},W1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ai=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||G1,this.d=l||this,this.set=c||H_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=XD,this.m=i,this.mt=s,this.tween=r},n}();oi(k_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return U_[n]=1});Ri.TweenMax=Ri.TweenLite=Qt;Ri.TimelineLite=Ri.TimelineMax=Qn;zt=new Qn({sortChildren:!1,defaults:Gc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=k1;var Po=[],Ff={},YD=[],Dx=0,$D=0,dp=function(e){return(Ff[e]||YD).map(function(t){return t()})},ig=function(){var e=Date.now(),t=[];e-Dx>2&&(dp("matchMediaInit"),Po.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=_r.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),dp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Dx=e,dp("matchMedia"))},X1=function(){function n(t,i){this.selector=i&&eg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$D++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var c=Ut,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=eg(s)),Ut=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Ut=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Po.length;o--;)Po[o].id===this.id&&Po.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),qD=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){br(i)||(i={matches:i});var o=new X1(0,s||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=_r.matchMedia(i[c]),l&&(Po.indexOf(o)<0&&Po.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ig):l.addEventListener("change",ig)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ad={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return N1(r)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){gn(e)&&(e=Wi(e)[0]);var s=Co(e||{}).get,o=i?y1:x1;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,c){return o((_i[a]&&_i[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(u){return ci.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=_i[t],a=Co(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Na._pt=0,f.init(e,i?u+i:u,Na,0,[e]),f.render(1,f),Na._pt&&G_(1,Na)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ci.to(e,bi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bo(e.ease,Gc.ease)),Cx(Gc,e||{})},config:function(e){return Cx(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!Ri[a]&&jc(t+" effect requires "+a+" plugin.")}),lp[t]=function(a,l,c){return i(Wi(a),bi(l||{},s),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(lp[t](a,br(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=bo(t)},parseEase:function(e,t){return arguments.length?bo(e,t):ct},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qn(e),r,s;for(i.smoothChildTiming=si(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&Mr(i,r,r._start-r._delay),r=s;return Mr(zt,i,0),i},context:function(e,t){return e?new X1(e,t):Ut},matchMedia:function(e){return new qD(e)},matchMediaRefresh:function(){return Po.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ig()},addEventListener:function(e,t){var i=Ff[e]||(Ff[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ff[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:AD,wrapYoyo:CD,distribute:C1,random:b1,snap:R1,normalize:TD,getUnit:Ln,clamp:SD,splitColor:I1,toArray:Wi,selector:eg,mapRange:L1,pipe:ED,unitize:wD,interpolate:RD,shuffle:A1},install:p1,effects:lp,ticker:xi,updateRoot:Qn.updateRoot,plugins:_i,globalTimeline:zt,core:{PropTween:ai,globals:m1,Tween:Qt,Timeline:Qn,Animation:$c,getCache:Co,_removeLinkedListItem:Qd,reverting:function(){return Sn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return P_=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ad[n]=Qt[n]});xi.add(Qn.updateRoot);Na=Ad.to({},{duration:0});var KD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ZD=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=KD(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},hp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(gn(s)&&(l={},oi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ZD(a,s)}}}},ci=Ad.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},hp("roundProps",tg),hp("modifiers"),hp("snap",R1))||Ad;Qt.version=Qn.version=ci.version="3.15.0";h1=1;D_()&&dl();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nx,Ms,Wa,j_,Mo,Ix,W_,QD=function(){return typeof window<"u"},is={},fo=180/Math.PI,Xa=Math.PI/180,da=Math.atan2,Ux=1e8,X_=/([A-Z])/g,JD=/(left|right|width|margin|padding|x)/i,e3=/[\s,\(]\S/,Er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},t3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},i3=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Y1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s3=function(e,t,i){return e.style[t]=i},o3=function(e,t,i){return e.style.setProperty(t,i)},a3=function(e,t,i){return e._gsap[t]=i},l3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},c3=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},u3=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",li=Bt+"Origin",f3=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Br(r,a)}):this.tfm[e]=o.x?o[e]:Br(r,e),e===li&&(this.tfm.zOrigin=o.zOrigin);else return Er.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},q1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d3=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(X_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=W_(),(!s||!s.isStart)&&!i[Bt]&&(q1(i),r.zOrigin&&i[li]&&(i[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},K1=function(e,t){var i={target:e,props:[],revert:d3,save:f3};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Z1,sg=function(e,t){var i=Ms.createElementNS?Ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ms.createElement(e);return i&&i.style?i:Ms.createElement(e)},Ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(X_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,hl(t)||t,1)||""},kx="O,Moz,ms,Ms,Webkit".split(","),hl=function(e,t,i){var r=t||Mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kx[o]:"")+e},og=function(){QD()&&window.document&&(Nx=window,Ms=Nx.document,Wa=Ms.documentElement,Mo=sg("div")||{style:{}},sg("div"),Bt=hl(Bt),li=Bt+"Origin",Mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z1=!!hl("perspective"),W_=ci.core.reverting,j_=1)},Fx=function(e){var t=e.ownerSVGElement,i=sg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Wa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Wa.removeChild(i),s},Ox=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Q1=function(e){var t,i;try{t=e.getBBox()}catch{t=Fx(e),i=1}return t&&(t.width||t.height)||i||(t=Fx(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ox(e,["x","cx","x1"])||0,y:+Ox(e,["y","cy","y1"])||0,width:0,height:0}:t},J1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Q1(e))},Ws=function(e,t){if(t){var i=e.style,r;t in is&&t!==li&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(X_,"-$1").toLowerCase())):i.removeAttribute(t)}},Es=function(e,t,i,r,s,o){var a=new ai(e._pt,t,i,0,1,o?$1:Y1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},zx={deg:1,rad:1,turn:1},h3={grid:1,flex:1},Xs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Mo.style,l=JD.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",m,_,g,p;if(r===o||!s||zx[r]||zx[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&J1(e),(h||o==="%")&&(is[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],Xt(h?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ms||!_.appendChild)&&(_=Ms.body),g=_._gsap,g&&h&&g.width&&l&&g.time===xi.time&&!g.uncache)return Xt(s/g.width*f);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,m=e[u],v?e.style[t]=v:Ws(e,t)}else(h||o==="%")&&!h3[Ei(_,"display")]&&(a.position=Ei(e,"position")),_===e&&(a.position="static"),_.appendChild(Mo),m=Mo[u],_.removeChild(Mo),a.position="absolute";return l&&h&&(g=Co(_),g.time=xi.time,g.width=_[u]),Xt(d?m*s/f:m&&s?f/m*s:0)},Br=function(e,t,i,r){var s;return j_||og(),t in Er&&t!=="transform"&&(t=Er[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(s=Kc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Rd(Ei(e,li))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Cd[t]&&Cd[t](e,t,i)||Ei(e,t)||_1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Xs(e,t,s,i)+i:s},p3=function(e,t,i,r){if(!i||i==="none"){var s=hl(t,e,1),o=s&&Ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var a=new ai(this._pt,e.style,t,0,1,j1),l=0,c=0,u,f,d,h,m,_,g,p,v,x,S,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ei(e,t)||r,_?e.style[t]=_:Ws(e,t)),u=[i,r],k1(u),i=u[0],r=u[1],d=i.match(Da)||[],R=r.match(Da)||[],R.length){for(;f=Da.exec(r);)g=f[0],v=r.substring(l,f.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=d[c++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),g.charAt(1)==="="&&(g=ja(h,g)+S),p=parseFloat(g),x=g.substr((p+"").length),l=Da.lastIndex-x.length,x||(x=x||Ai.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=Xs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:h,c:p-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?$1:Y1;return d1.test(r)&&(a.e=0),this._pt=a,a},Bx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m3=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Bx[i]||i,t[1]=Bx[r]||r,t.join(" ")},g3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],is[a]&&(l=1,a=a==="transformOrigin"?li:Bt),Ws(i,a);l&&(Ws(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Kc(i,1),o.uncache=1,q1(r)))}},Cd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ai(e._pt,t,i,0,0,g3);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},qc=[1,0,0,1,0,0],eE={},tE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hx=function(e){var t=Ei(e,Bt);return tE(t)?qc:t.substr(7).match(f1).map(Xt)},Y_=function(e,t){var i=e._gsap||Co(e),r=e.style,s=Hx(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qc:s):(s===qc&&!e.offsetParent&&e!==Wa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Wa.appendChild(e)),s=Hx(e),l?r.display=l:Ws(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Wa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ag=function(e,t,i,r,s,o){var a=e._gsap,l=s||Y_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],m=l[1],_=l[2],g=l[3],p=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,E,b,w;i?l!==qc&&(E=h*g-m*_)&&(b=S*(g/E)+R*(-_/E)+(_*v-g*p)/E,w=S*(-m/E)+R*(h/E)-(h*v-m*p)/E,S=b,R=w):(A=Q1(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),r||r!==!1&&a.smooth?(p=S-c,v=R-u,a.xOffset=f+(p*h+v*_)-p,a.yOffset=d+(p*m+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[li]="0px 0px",o&&(Es(o,a,"xOrigin",c,S),Es(o,a,"yOrigin",u,R),Es(o,a,"xOffset",f,a.xOffset),Es(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},Kc=function(e,t){var i=e._gsap||new O1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ei(e,li)||"0",u,f,d,h,m,_,g,p,v,x,S,R,A,E,b,w,M,D,k,B,W,K,X,V,U,Z,P,se,Se,Xe,q,ie;return u=f=d=_=g=p=v=x=S=0,h=m=1,i.svg=!!(e.getCTM&&J1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),E=Y_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),c=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),ag(e,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,E)),R=i.xOrigin||0,A=i.yOrigin||0,E!==qc&&(D=E[0],k=E[1],B=E[2],W=E[3],u=K=E[4],f=X=E[5],E.length===6?(h=Math.sqrt(D*D+k*k),m=Math.sqrt(W*W+B*B),_=D||k?da(k,D)*fo:0,v=B||W?da(B,W)*fo+_:0,v&&(m*=Math.abs(Math.cos(v*Xa))),i.svg&&(u-=R-(R*D+A*B),f-=A-(R*k+A*W))):(ie=E[6],Xe=E[7],P=E[8],se=E[9],Se=E[10],q=E[11],u=E[12],f=E[13],d=E[14],b=da(ie,Se),g=b*fo,b&&(w=Math.cos(-b),M=Math.sin(-b),V=K*w+P*M,U=X*w+se*M,Z=ie*w+Se*M,P=K*-M+P*w,se=X*-M+se*w,Se=ie*-M+Se*w,q=Xe*-M+q*w,K=V,X=U,ie=Z),b=da(-B,Se),p=b*fo,b&&(w=Math.cos(-b),M=Math.sin(-b),V=D*w-P*M,U=k*w-se*M,Z=B*w-Se*M,q=W*M+q*w,D=V,k=U,B=Z),b=da(k,D),_=b*fo,b&&(w=Math.cos(b),M=Math.sin(b),V=D*w+k*M,U=K*w+X*M,k=k*w-D*M,X=X*w-K*M,D=V,K=U),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),h=Xt(Math.sqrt(D*D+k*k+B*B)),m=Xt(Math.sqrt(X*X+ie*ie)),b=da(K,X),v=Math.abs(b)>2e-4?b*fo:0,S=q?1/(q<0?-q:q):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!tE(Ei(e,Bt)),V&&e.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Xt(h),i.scaleY=Xt(m),i.rotation=Xt(_)+a,i.rotationX=Xt(g)+a,i.rotationY=Xt(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[li]=Rd(c)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?v3:Z1?nE:_3,i.uncache=0,i},Rd=function(e){return(e=e.split(" "))[0]+" "+e[1]},pp=function(e,t,i){var r=Ln(t);return Xt(parseFloat(t)+parseFloat(Xs(e,"x",i+"px",r)))+r},_3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,nE(e,t)},so="0deg",Fl="0px",oo=") ",nE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,S="",R=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==so||u!==so)){var A=parseFloat(u)*Xa,E=Math.sin(A),b=Math.cos(A),w;A=parseFloat(f)*Xa,w=Math.cos(A),o=pp(v,o,E*w*-x),a=pp(v,a,-Math.sin(A)*-x),l=pp(v,l,b*w*-x+x)}g!==Fl&&(S+="perspective("+g+oo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(R||o!==Fl||a!==Fl||l!==Fl)&&(S+=l!==Fl||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+oo),c!==so&&(S+="rotate("+c+oo),u!==so&&(S+="rotateY("+u+oo),f!==so&&(S+="rotateX("+f+oo),(d!==so||h!==so)&&(S+="skew("+d+", "+h+oo),(m!==1||_!==1)&&(S+="scale("+m+", "+_+oo),v.style[Bt]=S||"translate(0, 0)"},v3=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),R,A,E,b,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xa,c*=Xa,R=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(u*=Xa,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,b*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),R*=w,A*=w)),R=Xt(R),A=Xt(A),E=Xt(E),b=Xt(b)):(R=f,b=d,A=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Xs(h,"x",o,"px"),S=Xs(h,"y",a,"px")),(m||_||g||p)&&(x=Xt(x+m-(m*R+_*E)+g),S=Xt(S+_-(m*A+_*b)+p)),(r||s)&&(w=h.getBBox(),x=Xt(x+r/100*w.width),S=Xt(S+s/100*w.height)),w="matrix("+R+","+A+","+E+","+b+","+x+","+S+")",h.setAttribute("transform",w),v&&(h.style[Bt]=w)},x3=function(e,t,i,r,s){var o=360,a=gn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fo:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ux)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ux)%o-~~(c/o)*o)),e._pt=d=new ai(e._pt,t,i,r,c,t3),d.e=u,d.u="deg",e._props.push(i),d},Vx=function(e,t){for(var i in t)e[i]=t[i];return e},y3=function(e,t,i){var r=Vx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=Kc(i,1),Ws(i,Bt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Bt],o[Bt]=t,a=Kc(i,1),o[Bt]=c);for(l in is)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Ln(c),m=Ln(u),f=h!==m?Xs(i,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new ai(e._pt,a,l,f,d-f,rg),e._pt.u=m||0,e._props.push(l));Vx(a,r)};oi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Cd[e>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(m){return Br(a,m,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(m,_){return h[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var iE={name:"css",register:og,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,m,_,g,p,v,x,S,R,A,E,b,w;j_||og(),this.styles=this.styles||K1(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_i[_]&&z1(_,t,i,r,e,s)))){if(h=typeof u,m=Cd[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Xc(u)),m)m(this,e,_,u,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Os.lastIndex=0,Os.test(c)||(g=Ln(c),p=Ln(u),p?g!==p&&(c=Xs(e,_,c,p)+p):g&&(u+=g)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],gn(c)&&~c.indexOf("random(")&&(c=Xc(c)),Ln(c+"")||c==="auto"||(c+=Ai.units[_]||Ln(Br(e,_))||""),(c+"").charAt(1)==="="&&(c=Br(e,_))):c=Br(e,_),d=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in Er&&(_==="autoAlpha"&&(d===1&&Br(e,"visibility")==="hidden"&&f&&(d=0),b.push("visibility",0,a.visibility),Es(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Er[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in is,x){if(this.styles.save(_),w=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Ei(e,"perspective"),M?e.style.perspective=M:Ws(e,"perspective")}f=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||Kc(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new ai(this._pt,a,Bt,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new ai(this._pt,R,"scaleY",R.scaleY,(v?ja(R.scaleY,v+f):f)-R.scaleY||0,rg),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(li,0,a[li]),u=m3(u),R.svg?ag(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&Es(this,R,"zOrigin",R.zOrigin,p),Es(this,a,_,Rd(c),Rd(u)));continue}else if(_==="svgOrigin"){ag(e,u,1,A,0,this);continue}else if(_ in eE){x3(this,R,_,d,v?ja(d,v+u):u);continue}else if(_==="smoothOrigin"){Es(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){y3(this,u,e);continue}}else _ in a||(_=hl(_)||_);if(x||(f||f===0)&&(d||d===0)&&!e3.test(u)&&_ in a)g=(c+"").substr((d+"").length),f||(f=0),p=Ln(u)||(_ in Ai.units?Ai.units[_]:g),g!==p&&(d=Xs(e,_,c,p)),this._pt=new ai(this._pt,x?R:a,_,d,(v?ja(d,v+f):f)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?r3:rg),this._pt.u=p||0,x&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=i3):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=n3);else if(_ in a)p3.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,r,s);else if(_!=="parseTransform"){I_(_,u);continue}x||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,c||e[_])),o.push(_)}}E&&W1(this)},render:function(e,t){if(t.tween._time||!W_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Br,aliases:Er,getSetter:function(e,t,i){var r=Er[t];return r&&r.indexOf(",")<0&&(t=r),t in is&&t!==li&&(e._gsap.x||Br(e,"x"))?i&&Ix===i?t==="scale"?l3:a3:(Ix=i||{})&&(t==="scale"?c3:u3):e.style&&!L_(e.style[t])?s3:~t.indexOf("-")?o3:V_(e,t)},core:{_removeProperty:Ws,_getMatrix:Y_}};ci.utils.checkPrefix=hl;ci.core.getStyleSaver=K1;(function(n,e,t,i){var r=oi(n+","+e+","+t,function(s){is[s]=1});oi(e,function(s){Ai.units[s]="deg",eE[s]=1}),Er[r[13]]=n+","+e,oi(i,function(s){var o=s.split(":");Er[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});ci.registerPlugin(iE);var rE=ci.registerPlugin(iE)||ci;rE.core.Tween;function S3(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function M3(n,e,t){return e&&S3(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Of,yi,ws,Ts,Ya,sE,ho,$a,oE,$r,tr,aE,lE=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},cE=1,Ia=[],st=[],Rr=[],mc=Date.now,lg=function(e,t){return t},E3=function(){var e=$a.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,Rr),st=i,Rr=r,lg=function(o,a){return t[o](a)}},zs=function(e,t){return~Rr.indexOf(e)&&Rr[Rr.indexOf(e)+1][t]},gc=function(e){return!!~oE.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},tf="scrollLeft",nf="scrollTop",cg=function(){return $r&&$r.isPressed||st.cache++},bd=function(e,t){var i=function r(s){if(s||s===0){cE&&(yi.history.scrollRestoration="manual");var o=$r&&$r.isPressed;s=r.v=Math.round(s)||($r&&$r.iOS?1:0),e(s),r.cacheID=st.cache,o&&lg("ss",s)}else(t||st.cache!==r.cacheID||lg("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:tf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bd(function(n){return arguments.length?yi.scrollTo(n,sn.sc()):yi.pageXOffset||ws[tf]||Ts[tf]||Ya[tf]||0})},sn={s:nf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:bd(function(n){return arguments.length?yi.scrollTo(jn.sc(),n):yi.pageYOffset||ws[nf]||Ts[nf]||Ya[nf]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},w3=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ys=function(e,t){var i=t.s,r=t.sc;gc(e)&&(e=ws.scrollingElement||Ts);var s=st.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Fn(e,"scroll",cg);var a=st[s+o],l=a||(st[s+o]=bd(zs(e,i),!0)||(gc(e)?r:bd(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},ug=function(e,t,i){var r=e,s=e,o=mc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=mc();_||g-o>l?(s=r,r=m,a=o,o=g):i?r+=m:r=s+(m-s)/(g-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(m){var _=a,g=s,p=mc();return(m||m===0)&&m!==r&&u(m),o===a||p-a>c?0:(r+(i?g:-g))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Ol=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Gx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},uE=function(){$a=xn.core.globals().ScrollTrigger,$a&&$a.core&&E3()},fE=function(e){return xn=e||lE(),!Of&&xn&&typeof document<"u"&&document.body&&(yi=window,ws=document,Ts=ws.documentElement,Ya=ws.body,oE=[yi,ws,Ts,Ya],xn.utils.clamp,aE=xn.core.context||function(){},ho="onpointerenter"in Ya?"pointer":"mouse",sE=$t.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=$t.eventTypes=("ontouchstart"in Ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cE=0},500),Of=1),$a||uE(),Of};jn.op=sn;st.cache=0;var $t=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Of||fE(xn)||console.warn("Please gsap.registerPlugin(Observer)"),$a||uE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,_=i.event,g=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,R=i.onRight,A=i.onLeft,E=i.onUp,b=i.onDown,w=i.onChangeX,M=i.onChangeY,D=i.onChange,k=i.onToggleX,B=i.onToggleY,W=i.onHover,K=i.onHoverEnd,X=i.onMove,V=i.ignoreCheck,U=i.isNormalizer,Z=i.onGestureStart,P=i.onGestureEnd,se=i.onWheel,Se=i.onEnable,Xe=i.onDisable,q=i.onClick,ie=i.scrollSpeed,he=i.capture,L=i.allowClicks,re=i.lockAxis,fe=i.onLockAxis;this.target=a=qn(a)||Ts,this.vars=i,h&&(h=xn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,ie=ie||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yi.getComputedStyle(Ya).lineHeight)||22);var pe,Le,I,De,ze,Ke,Ee,Y=this,Ue=0,He=0,N=i.passive||!u&&i.passive!==!1,T=Ys(a,jn),$=Ys(a,sn),ne=T(),oe=$(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",Ne=gc(a),le=a.ownerDocument||ws,ve=[0,0,0],Be=[0,0,0],ce=0,Me=function(){return ce=mc()},Fe=function(be,ft){return(Y.event=be)&&h&&w3(be.target,h)||ft&&J&&be.pointerType!=="touch"||V&&V(be,ft)},Ge=function(){Y._vx.reset(),Y._vy.reset(),Le.pause(),f&&f(Y)},ye=function(){var be=Y.deltaX=Gx(ve),ft=Y.deltaY=Gx(Be),me=Math.abs(be)>=r,Ye=Math.abs(ft)>=r;D&&(me||Ye)&&D(Y,be,ft,ve,Be),me&&(R&&Y.deltaX>0&&R(Y),A&&Y.deltaX<0&&A(Y),w&&w(Y),k&&Y.deltaX<0!=Ue<0&&k(Y),Ue=Y.deltaX,ve[0]=ve[1]=ve[2]=0),Ye&&(b&&Y.deltaY>0&&b(Y),E&&Y.deltaY<0&&E(Y),M&&M(Y),B&&Y.deltaY<0!=He<0&&B(Y),He=Y.deltaY,Be[0]=Be[1]=Be[2]=0),(De||I)&&(X&&X(Y),I&&(g&&I===1&&g(Y),v&&v(Y),I=0),De=!1),Ke&&!(Ke=!1)&&fe&&fe(Y),ze&&(se(Y),ze=!1),pe=0},je=function(be,ft,me){ve[me]+=be,Be[me]+=ft,Y._vx.update(be),Y._vy.update(ft),c?pe||(pe=requestAnimationFrame(ye)):ye()},qe=function(be,ft){re&&!Ee&&(Y.axis=Ee=Math.abs(be)>Math.abs(ft)?"x":"y",Ke=!0),Ee!=="y"&&(ve[2]+=be,Y._vx.update(be,!0)),Ee!=="x"&&(Be[2]+=ft,Y._vy.update(ft,!0)),c?pe||(pe=requestAnimationFrame(ye)):ye()},mt=function(be){if(!Fe(be,1)){be=Ol(be,u);var ft=be.clientX,me=be.clientY,Ye=ft-Y.x,Oe=me-Y.y,$e=Y.isDragging;Y.x=ft,Y.y=me,($e||(Ye||Oe)&&(Math.abs(Y.startX-ft)>=s||Math.abs(Y.startY-me)>=s))&&(I||(I=$e?2:1),$e||(Y.isDragging=!0),qe(Ye,Oe))}},O=Y.onPress=function(Ve){Fe(Ve,1)||Ve&&Ve.button||(Y.axis=Ee=null,Le.pause(),Y.isPressed=!0,Ve=Ol(Ve),Ue=He=0,Y.startX=Y.x=Ve.clientX,Y.startY=Y.y=Ve.clientY,Y._vx.reset(),Y._vy.reset(),Fn(U?a:le,tr[1],mt,N,!0),Y.deltaX=Y.deltaY=0,x&&x(Y))},Q=Y.onRelease=function(Ve){if(!Fe(Ve,1)){Un(U?a:le,tr[1],mt,!0);var be=!isNaN(Y.y-Y.startY),ft=Y.isDragging,me=ft&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ye=Ol(Ve);!me&&be&&(Y._vx.reset(),Y._vy.reset(),u&&L&&xn.delayedCall(.08,function(){if(mc()-ce>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(le.createEvent){var Oe=le.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,yi,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Oe)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&ft&&!U&&Le.restart(!0),I&&ye(),p&&ft&&p(Y),S&&S(Y,me)}},ee=function(be){return be.touches&&be.touches.length>1&&(Y.isGesturing=!0)&&Z(be,Y.isDragging)},te=function(){return(Y.isGesturing=!1)||P(Y)},de=function(be){if(!Fe(be)){var ft=T(),me=$();je((ft-ne)*ie,(me-oe)*ie,1),ne=ft,oe=me,f&&Le.restart(!0)}},Ie=function(be){if(!Fe(be)){be=Ol(be,u),se&&(ze=!0);var ft=(be.deltaMode===1?l:be.deltaMode===2?yi.innerHeight:1)*m;je(be.deltaX*ft,be.deltaY*ft,0),f&&!U&&Le.restart(!0)}},Qe=function(be){if(!Fe(be)){var ft=be.clientX,me=be.clientY,Ye=ft-Y.x,Oe=me-Y.y;Y.x=ft,Y.y=me,De=!0,f&&Le.restart(!0),(Ye||Oe)&&qe(Ye,Oe)}},Et=function(be){Y.event=be,W(Y)},wt=function(be){Y.event=be,K(Y)},at=function(be){return Fe(be)||Ol(be,u)&&q(Y)};Le=Y._dc=xn.delayedCall(d||.25,Ge).pause(),Y.deltaX=Y.deltaY=0,Y._vx=ug(0,50,!0),Y._vy=ug(0,50,!0),Y.scrollX=T,Y.scrollY=$,Y.isDragging=Y.isGesturing=Y.isPressed=!1,aE(this),Y.enable=function(Ve){return Y.isEnabled||(Fn(Ne?le:a,"scroll",cg),o.indexOf("scroll")>=0&&Fn(Ne?le:a,"scroll",de,N,he),o.indexOf("wheel")>=0&&Fn(a,"wheel",Ie,N,he),(o.indexOf("touch")>=0&&sE||o.indexOf("pointer")>=0)&&(Fn(a,tr[0],O,N,he),Fn(le,tr[2],Q),Fn(le,tr[3],Q),L&&Fn(a,"click",Me,!0,!0),q&&Fn(a,"click",at),Z&&Fn(le,"gesturestart",ee),P&&Fn(le,"gestureend",te),W&&Fn(a,ho+"enter",Et),K&&Fn(a,ho+"leave",wt),X&&Fn(a,ho+"move",Qe)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=De=I=!1,Y._vx.reset(),Y._vy.reset(),ne=T(),oe=$(),Ve&&Ve.type&&O(Ve),Se&&Se(Y)),Y},Y.disable=function(){Y.isEnabled&&(Ia.filter(function(Ve){return Ve!==Y&&gc(Ve.target)}).length||Un(Ne?le:a,"scroll",cg),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Un(U?a:le,tr[1],mt,!0)),Un(Ne?le:a,"scroll",de,he),Un(a,"wheel",Ie,he),Un(a,tr[0],O,he),Un(le,tr[2],Q),Un(le,tr[3],Q),Un(a,"click",Me,!0),Un(a,"click",at),Un(le,"gesturestart",ee),Un(le,"gestureend",te),Un(a,ho+"enter",Et),Un(a,ho+"leave",wt),Un(a,ho+"move",Qe),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Xe&&Xe(Y))},Y.kill=Y.revert=function(){Y.disable();var Ve=Ia.indexOf(Y);Ve>=0&&Ia.splice(Ve,1),$r===Y&&($r=0)},Ia.push(Y),U&&gc(a)&&($r=Y),Y.enable(_)},M3(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();$t.version="3.15.0";$t.create=function(n){return new $t(n)};$t.register=fE;$t.getAll=function(){return Ia.slice()};$t.getById=function(n){return Ia.filter(function(e){return e.vars.id===n})[0]};lE()&&xn.registerPlugin($t);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,_a,rt,yt,vi,_t,$_,Pd,Zc,_c,ql,rf,Cn,th,fg,Hn,jx,Wx,va,dE,mp,hE,zn,dg,pE,mE,hs,hg,q_,qa,K_,vc,pg,gp,sf=1,Rn=Date.now,_p=Rn(),Yi=0,Kl=0,Xx=function(e,t,i){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Yx=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},T3=function n(){return Kl&&requestAnimationFrame(n)},$x=function(){return th=1},qx=function(){return th=0},vr=function(e){return e},Zl=function(e){return Math.round(e*1e5)/1e5||0},gE=function(){return typeof window<"u"},_E=function(){return Ce||gE()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Ho=function(e){return!!~$_.indexOf(e)},vE=function(e){return(e==="Height"?K_:rt["inner"+e])||vi["client"+e]||_t["client"+e]},xE=function(e){return zs(e,"getBoundingClientRect")||(Ho(e)?function(){return Gf.width=rt.innerWidth,Gf.height=K_,Gf}:function(){return Vr(e)})},A3=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=zs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?vE(s):e["client"+s])||0}},C3=function(e,t){return!t||~Rr.indexOf(e)?xE(e):function(){return Gf}},wr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=zs(e,i))?o()-xE(e)()[s]:Ho(e)?(vi[i]||_t[i])-vE(r):e[i]-e["offset"+r])},of=function(e,t){for(var i=0;i<va.length;i+=3)(!t||~t.indexOf(va[i+1]))&&e(va[i],va[i+1],va[i+2])},gi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},Ql=function(e){return typeof e=="number"},po=function(e){return typeof e=="object"},zl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ha=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},pa=Math.abs,yE="left",SE="top",Z_="right",Q_="bottom",Lo="width",Do="height",xc="Right",yc="Left",Sc="Top",Mc="Bottom",Zt="padding",zi="margin",pl="Width",J_="Height",nn="px",Bi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},R3=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Vr=function(e,t){var i=t&&Bi(e)[fg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Ld=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},ME=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},b3=function(e){return function(t){return Ce.utils.snap(ME(e),t)}},e0=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},P3=function(e){return function(t,i){return e0(ME(e))(t,i.direction)}},af=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},lf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Zx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cf={toggleActions:"play",anticipatePin:0},Dd={top:0,left:0,center:.5,bottom:1,right:1},zf=function(e,t){if(gi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Dd?Dd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uf=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,m=yt.createElement("div"),_=Ho(i)||zs(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?_t:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(S+=(r===sn?Z_:Q_)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=S,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],Bf(m,0,r,v),m},Bf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+pl]=1,s["border"+a+pl]=0,s[i.p]=t+"px",Ce.set(e,s)},tt=[],mg={},Qc,Qx=function(){return Rn()-Yi>34&&(Qc||(Qc=requestAnimationFrame(Kr)))},ma=function(){(!zn||!zn.isPressed||zn.startX>_t.clientWidth)&&(st.cache++,zn?Qc||(Qc=requestAnimationFrame(Kr)):Kr(),Yi||Go("scrollStart"),Yi=Rn())},vp=function(){mE=rt.innerWidth,pE=rt.innerHeight},Jl=function(e){st.cache++,(e===!0||!Cn&&!hE&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!dg||mE!==rt.innerWidth||Math.abs(rt.innerHeight-pE)>rt.innerHeight*.25))&&Pd.restart(!0)},Vo={},L3=[],EE=function n(){return dn(nt,"scrollEnd",n)||Eo(!0)},Go=function(e){return Vo[e]&&Vo[e].map(function(t){return t()})||L3},pi=[],wE=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},TE=function(){return st.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},t0=function(e,t){var i;for(Hn=0;Hn<tt.length;Hn++)i=tt[Hn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));vc=!0,t&&wE(t),t||Go("revert")},AE=function(e,t){st.cache++,(t||!Vn)&&st.forEach(function(i){return Dn(i)&&i.cacheID++&&(i.rec=0)}),gi(e)&&(rt.history.scrollRestoration=q_=e)},Vn,No=0,Jx,D3=function(){if(Jx!==No){var e=Jx=No;requestAnimationFrame(function(){return e===No&&Eo(!0)})}},CE=function(){_t.appendChild(qa),K_=!zn&&qa.offsetHeight||rt.innerHeight,_t.removeChild(qa)},ey=function(e){return Zc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Eo=function(e,t){if(vi=yt.documentElement,_t=yt.body,$_=[rt,yt,vi,_t],Yi&&!e&&!vc){hn(nt,"scrollEnd",EE);return}CE(),Vn=nt.isRefreshing=!0,vc||TE();var i=Go("refreshInit");dE&&nt.sort(),t||t0(),st.forEach(function(r){Dn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),vc=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),pg=1,ey(!0),tt.forEach(function(r){var s=wr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),ey(!1),pg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){Dn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),AE(q_,1),Pd.pause(),No++,Vn=2,Kr(2),tt.forEach(function(r){return Dn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vn=nt.isRefreshing=!1,Go("refresh")},gg=0,Hf=1,Ec,Kr=function(e){if(e===2||!Vn&&!vc){nt.isUpdating=!0,Ec&&Ec.update(0);var t=tt.length,i=Rn(),r=i-_p>=50,s=t&&tt[0].scroll();if(Hf=gg>s?-1:1,Vn||(gg=s),r&&(Yi&&!th&&i-Yi>200&&(Yi=0,Go("scrollEnd")),ql=_p,_p=i),Hf<0){for(Hn=t;Hn-- >0;)tt[Hn]&&tt[Hn].update(0,r);Hf=1}else for(Hn=0;Hn<t;Hn++)tt[Hn]&&tt[Hn].update(0,r);nt.isUpdating=!1}Qc=0},_g=[yE,SE,Q_,Z_,zi+Mc,zi+xc,zi+Sc,zi+yc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vf=_g.concat([Lo,Do,"boxSizing","max"+pl,"max"+J_,"position",zi,Zt,Zt+Sc,Zt+xc,Zt+Mc,Zt+yc]),N3=function(e,t,i){Ka(i);var r=e._gsap;if(r.spacerIsNative)Ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=_g.length,o=t.style,a=e.style,l;s--;)l=_g[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Q_]=a[Z_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Lo]=Ld(e,jn)+nn,o[Do]=Ld(e,sn)+nn,o[Zt]=a[zi]=a[SE]=a[yE]="0",Ka(r),a[Lo]=a["max"+pl]=i[Lo],a[Do]=a["max"+J_]=i[Do],a[Zt]=i[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},I3=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(I3,"-$1").toLowerCase())}},ff=function(e){for(var t=Vf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Vf[s],i[Vf[s]]);return r.t=e,r},U3=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Gf={left:0,top:0},ty=function(e,t,i,r,s,o,a,l,c,u,f,d,h,m){Dn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?zf("0"+e.substr(3),i):0));var _=h?h.time():0,g,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),Ql(e))h&&(e=Ce.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Bf(a,i,r,!0);else{Dn(t)&&(t=t(l));var x=(e||"0").split(" "),S,R,A,E;v=qn(t,l)||_t,S=Vr(v)||{},(!S||!S.left&&!S.top)&&Bi(v).display==="none"&&(E=v.style.display,v.style.display="block",S=Vr(v),E?v.style.display=E:v.style.removeProperty("display")),R=zf(x[0],S[r.d]),A=zf(x[1]||"0",i),e=S[r.p]-c[r.p]-u+R+s-A,a&&Bf(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var b=e+i,w=o._isStart;g="scroll"+r.d2,Bf(o,b,r,w&&b>20||!w&&(f?Math.max(_t[g],vi[g]):o.parentNode[g])<=b+1),f&&(c=Vr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+nn))}return h&&v&&(g=Vr(v),h.seek(d),p=Vr(v),h._caScrollDist=g[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},k3=/(webkit|moz|length|cssText|inset)/i,ny=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!k3.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},RE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},df=function(e,t,i){var r={};r[t.p]="+="+i,Ce.set(e,r)},iy=function(e,t){var i=Ys(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,m={};c=c||i();var _=RE(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Kr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ce.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",i.wheelHandler),nt.isTouch&&hn(e,"touchmove",i.wheelHandler),s},nt=function(){function n(t,i){_a||n.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hg(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Kl){this.update=this.refresh=this.kill=vr;return}i=Kx(gi(i)||Ql(i)||i.nodeType?{trigger:i}:i,cf);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,b=s.fastScrollEnd,w=s.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:sn,D=!f&&f!==0,k=qn(i.scroller||rt),B=Ce.core.getCache(k),W=Ho(k),K=("pinType"in i?i.pinType:zs(k,"pinType")||W&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=D&&i.toggleActions.split(" "),U="markers"in i?i.markers:cf.markers,Z=W?0:parseFloat(Bi(k)["border"+M.p2+pl])||0,P=this,se=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Se=A3(k,W,M),Xe=C3(k,W),q=0,ie=0,he=0,L=Ys(k,M),re,fe,pe,Le,I,De,ze,Ke,Ee,Y,Ue,He,N,T,$,ne,oe,J,Ne,le,ve,Be,ce,Me,Fe,Ge,ye,je,qe,mt,O,Q,ee,te,de,Ie,Qe,Et,wt;if(P._startClamp=P._endClamp=!1,P._dir=M,g*=45,P.scroller=k,P.scroll=E?E.time.bind(E):L,Le=L(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(dE=1,i.refreshPriority===-9999&&(Ec=P)),B.tweenScroll=B.tweenScroll||{top:iy(k,sn),left:iy(k,jn)},P.tweenTo=re=B.tweenScroll[M.p],P.scrubDuration=function(me){ee=Ql(me)&&me,ee?Q?Q.duration(me):Q=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return p&&p(P)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),mt=0,l||(l=r.vars.id)),S&&((!po(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _t.style&&Ce.set(W?[_t,vi]:k,{scrollBehavior:"auto"}),st.forEach(function(me){return Dn(me)&&me.target===(W?yt.scrollingElement||vi:k)&&(me.smooth=!1)}),pe=Dn(S.snapTo)?S.snapTo:S.snapTo==="labels"?b3(r):S.snapTo==="labelsDirectional"?P3(r):S.directional!==!1?function(me,Ye){return e0(S.snapTo)(me,Rn()-ie<500?0:Ye.direction)}:Ce.utils.snap(S.snapTo),te=S.duration||{min:.1,max:2},te=po(te)?_c(te.min,te.max):_c(te,te),de=Ce.delayedCall(S.delay||ee/2||.1,function(){var me=L(),Ye=Rn()-ie<500,Oe=re.tween;if((Ye||Math.abs(P.getVelocity())<10)&&!Oe&&!th&&q!==me){var $e=(me-De)/T,kt=r&&!D?r.totalProgress():$e,it=Ye?0:(kt-O)/(Rn()-ql)*1e3||0,Ct=Ce.utils.clamp(-$e,1-$e,pa(it/2)*it/.185),en=$e+(S.inertia===!1?0:Ct),Pt,Rt,xt=S,ui=xt.onStart,C=xt.onInterrupt,F=xt.onComplete;if(Pt=pe(en,P),Ql(Pt)||(Pt=en),Rt=Math.max(0,Math.round(De+Pt*T)),me<=ze&&me>=De&&Rt!==me){if(Oe&&!Oe._initted&&Oe.data<=pa(Rt-me))return;S.inertia===!1&&(Ct=Pt-$e),re(Rt,{duration:te(pa(Math.max(pa(en-kt),pa(Pt-kt))*.185/it/.05||0)),ease:S.ease||"power3",data:pa(Rt-me),onInterrupt:function(){return de.restart(!0)&&C&&ha(P,C)},onComplete:function(){P.update(),q=L(),r&&!D&&(Q?Q.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),mt=O=r&&!D?r.totalProgress():P.progress,v&&v(P),F&&ha(P,F)}},me,Ct*T,Rt-me-Ct*T),ui&&ha(P,ui,re.tween)}}else P.isActive&&q!==me&&de.restart(!0)}).pause()),l&&(mg[l]=P),d=P.trigger=qn(d||h!==!0&&h),wt=d&&d._gsap&&d._gsap.stRevert,wt&&(wt=wt(P)),h=h===!0?d:qn(h),gi(a)&&(a={targets:d,className:a}),h&&(m===!1||m===zi||(m=!m&&h.parentNode&&h.parentNode.style&&Bi(h.parentNode).display==="flex"?!1:Zt),P.pin=h,fe=Ce.core.getCache(h),fe.spacer?$=fe.pinState:(A&&(A=qn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),fe.spacerIsNative=!!A,A&&(fe.spacerState=ff(A))),fe.spacer=J=A||yt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),fe.pinState=$=ff(h)),i.force3D!==!1&&Ce.set(h,{force3D:!0}),P.spacer=J=fe.spacer,qe=Bi(h),Me=qe[m+M.os2],le=Ce.getProperty(h),ve=Ce.quickSetter(h,M.a,nn),xp(h,J,qe),oe=ff(h)),U){He=po(U)?Kx(U,Zx):Zx,Y=uf("scroller-start",l,k,M,He,0),Ue=uf("scroller-end",l,k,M,He,0,Y),Ne=Y["offset"+M.op.d2];var at=qn(zs(k,"content")||k);Ke=this.markerStart=uf("start",l,at,M,He,Ne,0,E),Ee=this.markerEnd=uf("end",l,at,M,He,Ne,0,E),E&&(Et=Ce.quickSetter([Ke,Ee],M.a,nn)),!K&&!(Rr.length&&zs(k,"fixedMarkers")===!0)&&(R3(W?_t:k),Ce.set([Y,Ue],{force3D:!0}),Ge=Ce.quickSetter(Y,M.a,nn),je=Ce.quickSetter(Ue,M.a,nn))}if(E){var Ve=E.vars.onUpdate,be=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Ve&&Ve.apply(E,be||[])})}if(P.previous=function(){return tt[tt.indexOf(P)-1]},P.next=function(){return tt[tt.indexOf(P)+1]},P.revert=function(me,Ye){if(!Ye)return P.kill(!0);var Oe=me!==!1||!P.enabled,$e=Cn;Oe!==P.isReverted&&(Oe&&(Ie=Math.max(L(),P.scroll.rec||0),he=P.progress,Qe=r&&r.progress()),Ke&&[Ke,Ee,Y,Ue].forEach(function(kt){return kt.style.display=Oe?"none":"block"}),Oe&&(Cn=P,P.update(Oe)),h&&(!R||!P.isActive)&&(Oe?N3(h,J,$):xp(h,J,Bi(h),Fe)),Oe||P.update(Oe),Cn=$e,P.isReverted=Oe)},P.refresh=function(me,Ye,Oe,$e){if(!((Cn||!P.enabled)&&!Ye)){if(h&&me&&Yi){hn(n,"scrollEnd",EE);return}!Vn&&se&&se(P),Cn=P,re.tween&&!Oe&&(re.tween.kill(),re.tween=0),Q&&Q.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var kt=Se(),it=Xe(),Ct=E?E.duration():wr(k,M),en=T<=.01||!T,Pt=0,Rt=$e||0,xt=po(Oe)?Oe.end:i.end,ui=i.endTrigger||d,C=po(Oe)?Oe.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),F=P.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,P),G=d&&Math.max(0,tt.indexOf(P))||0,H=G,z,ae,_e,Te,ge,we,ke,Pe,dt,Mt,ht,tn,lt;for(U&&po(Oe)&&(tn=Ce.getProperty(Y,M.p),lt=Ce.getProperty(Ue,M.p));H-- >0;)we=tt[H],we.end||we.refresh(0,1)||(Cn=P),ke=we.pin,ke&&(ke===d||ke===h||ke===F)&&!we.isReverted&&(Mt||(Mt=[]),Mt.unshift(we),we.revert(!0,!0)),we!==tt[H]&&(G--,H--);for(Dn(C)&&(C=C(P)),C=Xx(C,"start",P),De=ty(C,d,kt,M,L(),Ke,Y,P,it,Z,K,Ct,E,P._startClamp&&"_startClamp")||(h?-.001:0),Dn(xt)&&(xt=xt(P)),gi(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(gi(C)?C.split(" ")[0]:"")+xt:(Pt=zf(xt.substr(2),kt),xt=gi(C)?C:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,De):De)+Pt,ui=d)),xt=Xx(xt,"end",P),ze=Math.max(De,ty(xt||(ui?"100% 0":Ct),ui,kt,M,L()+Pt,Ee,Ue,P,it,Z,K,Ct,E,P._endClamp&&"_endClamp"))||-.001,Pt=0,H=G;H--;)we=tt[H]||{},ke=we.pin,ke&&we.start-we._pinPush<=De&&!E&&we.end>0&&(z=we.end-(P._startClamp?Math.max(0,we.start):we.start),(ke===d&&we.start-we._pinPush<De||ke===F)&&isNaN(C)&&(Pt+=z*(1-we.progress)),ke===h&&(Rt+=z));if(De+=Pt,ze+=Pt,P._startClamp&&(P._startClamp+=Pt),P._endClamp&&!Vn&&(P._endClamp=ze||-.001,ze=Math.min(ze,wr(k,M))),T=ze-De||(De-=.01)&&.001,en&&(he=Ce.utils.clamp(0,1,Ce.utils.normalize(De,ze,Ie))),P._pinPush=Rt,Ke&&Pt&&(z={},z[M.a]="+="+Pt,F&&(z[M.p]="-="+L()),Ce.set([Ke,Ee],z)),h&&!(pg&&P.end>=wr(k,M)))z=Bi(h),Te=M===sn,_e=L(),Be=parseFloat(le(M.a))+Rt,!Ct&&ze>1&&(ht=(W?yt.scrollingElement||vi:k).style,ht={style:ht,value:ht["overflow"+M.a.toUpperCase()]},W&&Bi(_t)["overflow"+M.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+M.a.toUpperCase()]="scroll")),xp(h,J,z),oe=ff(h),ae=Vr(h,!0),Pe=K&&Ys(k,Te?jn:sn)(),m?(Fe=[m+M.os2,T+Rt+nn],Fe.t=J,H=m===Zt?Ld(h,M)+T+Rt:0,H&&(Fe.push(M.d,H+nn),J.style.flexBasis!=="auto"&&(J.style.flexBasis=H+nn)),Ka(Fe),F&&tt.forEach(function(Re){Re.pin===F&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),K&&L(Ie)):(H=Ld(h,M),H&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=H+nn)),K&&(ge={top:ae.top+(Te?_e-De:Pe)+nn,left:ae.left+(Te?Pe:_e-De)+nn,boxSizing:"border-box",position:"fixed"},ge[Lo]=ge["max"+pl]=Math.ceil(ae.width)+nn,ge[Do]=ge["max"+J_]=Math.ceil(ae.height)+nn,ge[zi]=ge[zi+Sc]=ge[zi+xc]=ge[zi+Mc]=ge[zi+yc]="0",ge[Zt]=z[Zt],ge[Zt+Sc]=z[Zt+Sc],ge[Zt+xc]=z[Zt+xc],ge[Zt+Mc]=z[Zt+Mc],ge[Zt+yc]=z[Zt+yc],ne=U3($,ge,R),Vn&&L(0)),r?(dt=r._initted,mp(1),r.render(r.duration(),!0,!0),ce=le(M.a)-Be+T+Rt,ye=Math.abs(T-ce)>1,K&&ye&&ne.splice(ne.length-2,2),r.render(0,!0,!0),dt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),mp(0)):ce=T,ht&&(ht.value?ht.style["overflow"+M.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+M.a));else if(d&&L()&&!E)for(ae=d.parentNode;ae&&ae!==_t;)ae._pinOffset&&(De-=ae._pinOffset,ze-=ae._pinOffset),ae=ae.parentNode;Mt&&Mt.forEach(function(Re){return Re.revert(!1,!0)}),P.start=De,P.end=ze,Le=I=Vn?Ie:L(),!E&&!Vn&&(Le<Ie&&L(Ie),P.scroll.rec=0),P.revert(!1,!0),ie=Rn(),de&&(q=-1,de.restart(!0)),Cn=0,r&&D&&(r._initted||Qe)&&r.progress()!==Qe&&r.progress(Qe||0,!0).render(r.time(),!0,!0),(en||he!==P.progress||E||_||r&&!r._initted)&&(r&&!D&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(E&&De<-.001&&!he?Ce.utils.normalize(De,ze,0):he,!0),P.progress=en||(Le-De)/T===he?0:he),h&&m&&(J._pinOffset=Math.round(P.progress*ce)),Q&&Q.invalidate(),isNaN(tn)||(tn-=Ce.getProperty(Y,M.p),lt-=Ce.getProperty(Ue,M.p),df(Y,M,tn),df(Ke,M,tn-($e||0)),df(Ue,M,lt),df(Ee,M,lt-($e||0))),en&&!Vn&&P.update(),u&&!Vn&&!N&&(N=!0,u(P),N=!1)}},P.getVelocity=function(){return(L()-I)/(Rn()-ql)*1e3||0},P.endAnimation=function(){zl(P.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?D||zl(r,P.direction<0,1):zl(r,r.reversed()))},P.labelToScroll=function(me){return r&&r.labels&&(De||P.refresh()||De)+r.labels[me]/r.duration()*T||0},P.getTrailing=function(me){var Ye=tt.indexOf(P),Oe=P.direction>0?tt.slice(0,Ye).reverse():tt.slice(Ye+1);return(gi(me)?Oe.filter(function($e){return $e.vars.preventOverlaps===me}):Oe).filter(function($e){return P.direction>0?$e.end<=De:$e.start>=ze})},P.update=function(me,Ye,Oe){if(!(E&&!Oe&&!me)){var $e=Vn===!0?Ie:P.scroll(),kt=me?0:($e-De)/T,it=kt<0?0:kt>1?1:kt||0,Ct=P.progress,en,Pt,Rt,xt,ui,C,F,G;if(Ye&&(I=Le,Le=E?L():$e,S&&(O=mt,mt=r&&!D?r.totalProgress():it)),g&&h&&!Cn&&!sf&&Yi&&(!it&&De<$e+($e-I)/(Rn()-ql)*g?it=1e-4:it===1&&ze>$e+($e-I)/(Rn()-ql)*g&&(it=.9999)),it!==Ct&&P.enabled){if(en=P.isActive=!!it&&it<1,Pt=!!Ct&&Ct<1,C=en!==Pt,ui=C||!!it!=!!Ct,P.direction=it>Ct?1:-1,P.progress=it,ui&&!Cn&&(Rt=it&&!Ct?0:it===1?1:Ct===1?2:3,D&&(xt=!C&&V[Rt+1]!=="none"&&V[Rt+1]||V[Rt],G=r&&(xt==="complete"||xt==="reset"||xt in r))),w&&(C||G)&&(G||f||!r)&&(Dn(w)?w(P):P.getTrailing(w).forEach(function(_e){return _e.endAnimation()})),D||(Q&&!Cn&&!sf?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",it,r._tTime/r._tDur):(Q.vars.totalProgress=it,Q.invalidate().restart())):r&&r.totalProgress(it,!!(Cn&&(ie||me)))),h){if(me&&m&&(J.style[m+M.os2]=Me),!K)ve(Zl(Be+ce*it));else if(ui){if(F=!me&&it>Ct&&ze+1>$e&&$e+1>=wr(k,M),R)if(!me&&(en||F)){var H=Vr(h,!0),z=$e-De;ny(h,_t,H.top+(M===sn?z:0)+nn,H.left+(M===sn?0:z)+nn)}else ny(h,J);Ka(en||F?ne:oe),ye&&it<1&&en||ve(Be+(it===1&&!F?ce:0))}}S&&!re.tween&&!Cn&&!sf&&de.restart(!0),a&&(C||x&&it&&(it<1||!gp))&&Zc(a.targets).forEach(function(_e){return _e.classList[en||x?"add":"remove"](a.className)}),o&&!D&&!me&&o(P),ui&&!Cn?(D&&(G&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(P)),(C||!gp)&&(c&&C&&ha(P,c),X[Rt]&&ha(P,X[Rt]),x&&(it===1?P.kill(!1,1):X[Rt]=0),C||(Rt=it===1?1:3,X[Rt]&&ha(P,X[Rt]))),b&&!en&&Math.abs(P.getVelocity())>(Ql(b)?b:2500)&&(zl(P.callbackAnimation),Q?Q.progress(1):zl(r,xt==="reverse"?1:!it,1))):D&&o&&!Cn&&o(P)}if(je){var ae=E?$e/E.duration()*(E._caScrollDist||0):$e;Ge(ae+(Y._isFlipped?1:0)),je(ae)}Et&&Et(-$e/E.duration()*(E._caScrollDist||0))}},P.enable=function(me,Ye){P.enabled||(P.enabled=!0,hn(k,"resize",Jl),W||hn(k,"scroll",ma),se&&hn(n,"refreshInit",se),me!==!1&&(P.progress=he=0,Le=I=q=L()),Ye!==!1&&P.refresh())},P.getTween=function(me){return me&&re?re.tween:Q},P.setPositions=function(me,Ye,Oe,$e){if(E){var kt=E.scrollTrigger,it=E.duration(),Ct=kt.end-kt.start;me=kt.start+Ct*me/it,Ye=kt.start+Ct*Ye/it}P.refresh(!1,!1,{start:Yx(me,Oe&&!!P._startClamp),end:Yx(Ye,Oe&&!!P._endClamp)},$e),P.update()},P.adjustPinSpacing=function(me){if(Fe&&me){var Ye=Fe.indexOf(M.d)+1;Fe[Ye]=parseFloat(Fe[Ye])+me+nn,Fe[1]=parseFloat(Fe[1])+me+nn,Ka(Fe)}},P.disable=function(me,Ye){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ye||Q&&Q.pause(),Ie=0,fe&&(fe.uncache=1),se&&dn(n,"refreshInit",se),de&&(de.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!W)){for(var Oe=tt.length;Oe--;)if(tt[Oe].scroller===k&&tt[Oe]!==P)return;dn(k,"resize",Jl),W||dn(k,"scroll",ma)}},P.kill=function(me,Ye){P.disable(me,Ye),Q&&!Ye&&Q.kill(),l&&delete mg[l];var Oe=tt.indexOf(P);Oe>=0&&tt.splice(Oe,1),Oe===Hn&&Hf>0&&Hn--,Oe=0,tt.forEach(function($e){return $e.scroller===P.scroller&&(Oe=1)}),Oe||Vn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),Ye||r.kill()),Ke&&[Ke,Ee,Y,Ue].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),Ec===P&&(Ec=0),h&&(fe&&(fe.uncache=1),Oe=0,tt.forEach(function($e){return $e.pin===h&&Oe++}),Oe||(fe.spacer=0)),i.onKill&&i.onKill(P)},tt.push(P),P.enable(!1,!1),wt&&wt(P),r&&r.add&&!T){var ft=P.update;P.update=function(){P.update=ft,st.cache++,De||ze||P.refresh()},Ce.delayedCall(.01,P.update),T=.01,De=ze=0}else P.refresh();h&&D3()},n.register=function(i){return _a||(Ce=i||_E(),gE()&&window.document&&n.enable(),_a=Kl),_a},n.defaults=function(i){if(i)for(var r in i)cf[r]=i[r];return cf},n.disable=function(i,r){Kl=0,tt.forEach(function(o){return o[r?"kill":"disable"](i)}),dn(rt,"wheel",ma),dn(yt,"scroll",ma),clearInterval(rf),dn(yt,"touchcancel",vr),dn(_t,"touchstart",vr),af(dn,yt,"pointerdown,touchstart,mousedown",$x),af(dn,yt,"pointerup,touchend,mouseup",qx),Pd.kill(),of(dn);for(var s=0;s<st.length;s+=3)lf(dn,st[s],st[s+1]),lf(dn,st[s],st[s+2])},n.enable=function(){if(rt=window,yt=document,vi=yt.documentElement,_t=yt.body,Ce){if(Zc=Ce.utils.toArray,_c=Ce.utils.clamp,hg=Ce.core.context||vr,mp=Ce.core.suppressOverwrites||vr,q_=rt.history.scrollRestoration||"auto",gg=rt.pageYOffset||0,Ce.core.globals("ScrollTrigger",n),_t){Kl=1,qa=document.createElement("div"),qa.style.height="100vh",qa.style.position="absolute",CE(),T3(),$t.register(Ce),n.isTouch=$t.isTouch,hs=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dg=$t.isTouch===1,hn(rt,"wheel",ma),$_=[rt,yt,vi,_t],Ce.matchMedia?(n.matchMedia=function(u){var f=Ce.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Ce.addEventListener("matchMediaInit",function(){TE(),t0()}),Ce.addEventListener("matchMediaRevert",function(){return wE()}),Ce.addEventListener("matchMedia",function(){Eo(0,1),Go("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return vp(),vp})):console.warn("Requires GSAP 3.11.0 or later"),vp(),hn(yt,"scroll",ma);var i=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Vr(_t),sn.m=Math.round(a.top+sn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(_t.setAttribute("style",""),_t.removeAttribute("style")),rf=setInterval(Qx,250),Ce.delayedCall(.5,function(){return sf=0}),hn(yt,"touchcancel",vr),hn(_t,"touchstart",vr),af(hn,yt,"pointerdown,touchstart,mousedown",$x),af(hn,yt,"pointerup,touchend,mouseup",qx),fg=Ce.utils.checkPrefix("transform"),Vf.push(fg),_a=Rn(),Pd=Ce.delayedCall(.2,Eo).pause(),va=[yt,"visibilitychange",function(){var u=rt.innerWidth,f=rt.innerHeight;yt.hidden?(jx=u,Wx=f):(jx!==u||Wx!==f)&&Jl()},yt,"DOMContentLoaded",Eo,rt,"load",Eo,rt,"resize",Jl],of(hn),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<st.length;l+=3)lf(dn,st[l],st[l+1]),lf(dn,st[l],st[l+2])}else if(yt){var c=function u(){n.enable(),yt.removeEventListener("DOMContentLoaded",u)};yt.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(gp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(rf)||(rf=r)&&setInterval(Qx,r),"ignoreMobileResize"in i&&(dg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(of(dn)||of(hn,i.autoRefreshEvents||"none"),hE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=st.indexOf(s),a=Ho(s);~o&&st.splice(o,a?6:2),r&&(a?Rr.unshift(rt,r,_t,r,vi,r):Rr.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(gi(i)?qn(i):i).getBoundingClientRect(),a=o[s?Lo:Do]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?Lo:Do],l=r==null?a/2:r in Dd?Dd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Vo.killAll||[];Vo={},r.forEach(function(s){return s()})}},n}();nt.version="3.15.0";nt.saveStyles=function(n){return n?Zc(n).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),hg())}}):pi};nt.revert=function(n,e){return t0(!n,e)};nt.create=function(n,e){return new nt(n,e)};nt.refresh=function(n){return n?Jl(!0):(_a||nt.register())&&Eo(!0)};nt.update=function(n){return++st.cache&&Kr(n===!0?2:0)};nt.clearScrollMemory=AE;nt.maxScroll=function(n,e){return wr(n,e?jn:sn)};nt.getScrollFunc=function(n,e){return Ys(qn(n),e?jn:sn)};nt.getById=function(n){return mg[n]};nt.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Yi};nt.snapDirectional=e0;nt.addEventListener=function(n,e){var t=Vo[n]||(Vo[n]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(n,e){var t=Vo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};nt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Ce.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(m){f.length||h.restart(!0),f.push(m.trigger),d.push(m),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),hn(nt,"refresh",function(){return s=e.batchMax()})),Zc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(nt.create(c))}),t};var ry=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},yp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===vi&&n(_t,t)},hf={auto:1,scroll:1},F3=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hf[(l=Bi(s)).overflowY]||hf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ho(s)&&(hf[(l=Bi(s)).overflowY]||hf[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},bE=function(e,t,i,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&F3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&hn(yt,$t.eventTypes[0],oy,!1,!0)},onDisable:function(){return dn(yt,$t.eventTypes[0],oy,!0)}})},O3=/(input|label|select|textarea)/i,sy,oy=function(e){var t=O3.test(e.target.tagName);(t||sy)&&(e._gsapAllow=!0,sy=t)},z3=function(e){po(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||vi,u=Ce.core.globals().ScrollSmoother,f=u&&u.get(),d=hs&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Ys(c,sn),m=Ys(c,jn),_=1,g=($t.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,v=Dn(r)?function(){return r(a)}:function(){return r||2.8},x,S,R=bE(c,e.type,!0,s),A=function(){return S=!1},E=vr,b=vr,w=function(){l=wr(c,sn),b=_c(hs?1:0,l),i&&(E=_c(0,wr(c,jn))),x=No},M=function(){d._gsap.y=Zl(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(S){requestAnimationFrame(A);var U=Zl(a.deltaY/2),Z=b(h.v-U);if(d&&Z!==h.v+h.offset){h.offset=Z-h.v;var P=Zl((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=st.cache,Kr()}return!0}h.offset&&M(),S=!0},k,B,W,K,X=function(){w(),k.isActive()&&k.vars.scrollY>l&&(h()>l?k.progress(1)&&h(l):k.resetTo("scrollY",l))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(V){return hs&&V.type==="touchmove"&&D()||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){S=!1;var V=_;_=Zl((rt.visualViewport&&rt.visualViewport.scale||1)/g),k.pause(),V!==_&&yp(c,_>1.01?!0:i?!1:"x"),B=m(),W=h(),w(),x=No},e.onRelease=e.onGestureStart=function(V,U){if(h.offset&&M(),!U)K.restart(!0);else{st.cache++;var Z=v(),P,se;i&&(P=m(),se=P+Z*.05*-V.velocityX/.227,Z*=ry(m,P,se,wr(c,jn)),k.vars.scrollX=E(se)),P=h(),se=P+Z*.05*-V.velocityY/.227,Z*=ry(h,P,se,wr(c,sn)),k.vars.scrollY=b(se),k.invalidate().duration(Z).play(.01),(hs&&k.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:X,duration:Z})}o&&o(V)},e.onWheel=function(){k._ts&&k.pause(),Rn()-p>1e3&&(x=0,p=Rn())},e.onChange=function(V,U,Z,P,se){if(No!==x&&w(),U&&i&&m(E(P[2]===U?B+(V.startX-V.x):m()+U-P[1])),Z){h.offset&&M();var Se=se[2]===Z,Xe=Se?W+V.startY-V.y:h()+Z-se[1],q=b(Xe);Se&&Xe!==q&&(W+=q-Xe),h(q)}(Z||U)&&Kr()},e.onEnable=function(){yp(c,i?!1:"x"),nt.addEventListener("refresh",X),hn(rt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),R.enable()},e.onDisable=function(){yp(c,!0),dn(rt,"resize",X),nt.removeEventListener("refresh",X),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=hs,hs&&!h()&&h(1),hs&&Ce.ticker.add(vr),K=a._dc,k=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:RE(h,h(),function(){return k.pause()})},onUpdate:Kr,onComplete:K.vars.onComplete}),a};nt.sort=function(n){if(Dn(n))return tt.sort(n);var e=rt.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};nt.observe=function(n){return new $t(n)};nt.normalizeScroll=function(n){if(typeof n>"u")return zn;if(n===!0&&zn)return zn.enable();if(n===!1){zn&&zn.kill(),zn=n;return}var e=n instanceof $t?n:z3(n);return zn&&zn.target===e.target&&zn.kill(),Ho(e.target)&&(zn=e),e};nt.core={_getVelocityProp:ug,_inputObserver:bE,_scrollers:st,_proxies:Rr,bridge:{ss:function(){Yi||Go("scrollStart"),Yi=Rn()},ref:function(){return Cn}}};_E()&&Ce.registerPlugin(nt);rE.registerPlugin(nt);const B3="/app/assets/models/962-frame.obj",pf=[{kicker:"Product Showcase",title:"962 Frame",text:"A premium scroll-led reveal built around the 9SIXTY frame geometry."},{kicker:"Detail View",title:"Engineered Form",text:"Scroll motion rotates the frame and moves the camera closer to highlight the structure."},{kicker:"Material Focus",title:"Carbon-Look Finish",text:"Controlled lighting, shadows and clearcoat material give the frame a refined product feel."},{kicker:"Garage Ready",title:"Built To Stand Out",text:"Use the final frame for product specs, enquiries or a direct path into the collection."}];function H3({nav:n}){const e=We.useRef(null),t=We.useRef(null),i=We.useRef(null),r=We.useRef(null),s=We.useRef(null),[o,a]=We.useState(0);We.useEffect(()=>{const c=e.current,u=t.current;if(!c||!u)return;const f=new FL;f.background=new Ze("#05070d");const d=new Oi(38,window.innerWidth/window.innerHeight,.1,100);d.position.set(0,.25,4.2),r.current=d;const h=new kL({canvas:u,antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(window.innerWidth,window.innerHeight),h.outputColorSpace=rr,h.shadowMap.enabled=!0,h.shadowMap.type=PM,s.current=h;const m=new YL("#ffffff","#1d2433",2.1);f.add(m);const _=new yx("#ffffff",3.2);_.position.set(3,4,5),_.castShadow=!0,f.add(_);const g=new yx("#A6936F",2.2);g.position.set(-4,1.5,-3),f.add(g);const p=new Gi(new lu(8,8),new zL({opacity:.22}));p.rotation.x=-Math.PI/2,p.position.y=-1.2,p.receiveShadow=!0,f.add(p),new tD().load(B3,b=>{const w=new yl().setFromObject(b),M=w.getCenter(new j),D=w.getSize(new j),k=2.25/Math.max(D.x,D.y,D.z);b.position.sub(M),b.scale.setScalar(k),b.rotation.set(-.12,-.65,.05);const B=new HL({color:"#141821",metalness:.35,roughness:.3,clearcoat:.8,clearcoatRoughness:.18});b.traverse(W=>{W.isMesh&&(W.material=B,W.castShadow=!0,W.receiveShadow=!0)}),i.current=b,f.add(b)},void 0,b=>console.error("Could not load OBJ model:",b));const x={progress:0},S=nt.create({trigger:c,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:b=>{x.progress=b.progress,a(Math.min(pf.length-1,Math.floor(b.progress*pf.length)))}});let R;const A=()=>{R=requestAnimationFrame(A);const b=x.progress,w=i.current,M=r.current;w&&(w.rotation.y=-.65+b*Math.PI*2.25,w.rotation.x=-.12+Math.sin(b*Math.PI)*.28,w.position.x=Pl.lerp(.55,-.5,b),w.position.y=Pl.lerp(-.05,.12,b),w.scale.setScalar(Pl.lerp(1,1.18,Math.sin(b*Math.PI)))),M.position.z=Pl.lerp(4.2,3.25,b),M.position.y=Pl.lerp(.25,.05,b),M.lookAt(0,0,0),h.render(f,M)};A();const E=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),nt.refresh()};return window.addEventListener("resize",E),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",E),S.kill(),h.dispose(),f.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material.forEach(w=>w.dispose()):b.material.dispose())})}},[]);const l=pf[o];return y.jsxs("section",{ref:e,className:"product-showcase","aria-label":"962 frame product showcase",children:[y.jsx("canvas",{ref:t,className:"product-showcase__canvas"}),y.jsxs("div",{className:"product-showcase__sticky-copy",children:[y.jsx("p",{className:"product-showcase__eyebrow",children:l.kicker}),y.jsx("h1",{children:l.title}),y.jsx("p",{children:l.text}),y.jsx("button",{type:"button",className:"product-showcase__button",onClick:()=>n("/shop"),children:"Shop collection"})]}),y.jsx("div",{className:"product-showcase__scroll-steps","aria-hidden":"true",children:pf.map(c=>y.jsx("div",{className:"product-showcase__step"},c.title))})]})}const Kn=(n,e={},t=null)=>fetch(n,{...e,headers:{Accept:"application/json","Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{},...e.headers||{}}}),Gr=n=>n?/^(https?:|\/api\/|\/storage\/|data:)/.test(n)?n:`/app/${n!=null&&n.startsWith("/assets")?n.slice(1):"assets/product-stand.svg"}`:"/app/assets/product-stand.svg",wi=n=>`£${Number(n||0).toFixed(2)}`,vg=n=>Number((n==null?void 0:n.sale_price)||(n==null?void 0:n.price)||0),xg=n=>{var e;return((e=n==null?void 0:n.variants)==null?void 0:e[0])||{id:"default",name:"Default",colour_name:"Default"}},mr=n=>Array.isArray(n)?n:String(n||"").split(`
`).map(e=>e.trim()).filter(Boolean),ay=n=>Array.isArray(n)?n.join(`
`):String(n||""),V3=(n={})=>Object.entries(n||{}).map(([e,t])=>`${e}: ${t}`).join(`
`),G3=n=>Object.fromEntries(String(n||"").split(`
`).map(e=>e.split(":")).filter(([e,t])=>(e==null?void 0:e.trim())&&(t==null?void 0:t.trim())).map(([e,...t])=>[e.trim(),t.join(":").trim()])),As=["/assets/products/frame-desert-tan-1.jpg","/assets/products/frame-barlow-1.jpg","/assets/products/frame-barlow-kit-1.jpg","/assets/products/frame-desert-kit-1.jpg"],Sp=[["stripe_secret_key","Stripe Secret Key"],["smtp2go_api_key","SMTP2GO API Key"],["smtp2go_password","SMTP2GO Password"],["mailchimp_api_key","Mailchimp API Key"],["mailchimp_list_id","Mailchimp List ID"],["tree_nation_api_key","Tree-Nation API Key"],["shiptheory_api_key","Shiptheory API Key"]],wo=[mf("FRAME III - Desert Tan","frame-iii-desert-tan",69.99,"Desert Tan","#A6936F",As[0]),mf("FRAME III - Barlow","frame-iii-barlow",69.99,"Barlow","#B9A678",As[1]),mf("FRAME III - Barlow Kit","frame-iii-barlow-kit",79.99,"Black/Gold","#A6936F",As[2]),mf("FRAME III - Desert Kit","frame-iii-desert-kit",79.99,"Desert Tan","#A6936F",As[3])];function mf(n,e,t,i,r,s){return{id:e,name:n,slug:e,price:t,category:{name:"Helmet Stands",slug:"helmet-stands"},hero_image:s,gallery:[s,...As.filter(o=>o!==s)],short_description:"Premium modular wall-mounted helmet stand engineered for protection and precision.",description:"Premium wall-mounted helmet stand engineered from carbon fibre infused plastic for exceptional durability and strength. Designed to protect and display your valuable helmets while maximizing garage space.",features:["Carbon fibre infused construction","Holds all helmet sizes and types","Precision-cut mounting holes","Included 4-inch mounting screws","Supports up to 15kg per stand","Weather-resistant materials"],specifications:{Material:"Carbon Fibre Infused Plastic",Dimensions:'8" x 6" x 4"',Weight:"0.5kg",Mounting:"Wall-mounted with included hardware",Finish:"Matte with accent details"},variants:[{id:`${e}-gold`,name:"Black/Gold",colour_name:"Black/Gold",accent_hex:"#A6936F",image:s},{id:`${e}-silver`,name:"Black/Silver",colour_name:"Black/Silver",accent_hex:"#C5C5C5",image:s},{id:`${e}-accent`,name:i,colour_name:i,accent_hex:r,image:s}],reviews:[{id:1,rating:5,user:{name:"Alex Thompson"},body:"Exceptional build quality. The installation was straightforward and the stand looks premium on my garage wall."},{id:2,rating:5,user:{name:"Maria Garcia"},body:"Perfect for my collection. Holds helmets securely and the gold accent is a nice touch."}]}}function j3(){var _;const[n,e]=We.useState(location.pathname),[t,i]=We.useState(()=>JSON.parse(localStorage.getItem("cart")||"[]")),[r,s]=We.useState(()=>JSON.parse(localStorage.getItem("auth")||"null")),[o,a]=We.useState({maintenance_mode:!0}),l=g=>{history.pushState(null,"",g),e(g),scrollTo(0,0)};window.onpopstate=()=>e(location.pathname);const c=(g,p,v=1)=>{const x=[...t,{product:g,variant:p,quantity:v}];i(x),localStorage.setItem("cart",JSON.stringify(x))},u=()=>Kn("/api/site-status").then(g=>g.json()).then(a).catch(()=>{});We.useEffect(()=>{u()},[]);const f=((_=r==null?void 0:r.user)==null?void 0:_.role)==="admin",d=n==="/account"||n==="/admin",h={nav:l,cart:t,setCart:i,auth:r,setAuth:s,addToCart:c,refreshSiteStatus:u};let m=y.jsx(Y3,{...h});return n.startsWith("/shop")&&(m=y.jsx($3,{...h})),n.startsWith("/product/")&&(m=y.jsx(q3,{...h,slug:n.split("/").pop()})),n==="/basket"&&(m=y.jsx(K3,{...h})),n==="/checkout"&&(m=y.jsx(Z3,{...h})),n==="/showcase"&&(m=y.jsx(Q3,{...h})),n==="/blog"&&(m=y.jsx(J3,{...h})),n.startsWith("/blog/")&&(m=y.jsx(eN,{...h})),n==="/account"&&(m=y.jsx(tN,{...h})),n==="/admin"&&(m=y.jsx(nN,{...h})),["/about","/our-story","/contact","/privacy-policy","/terms","/shipping-returns"].includes(n)&&(m=y.jsx(LE,{path:n,...h})),o.maintenance_mode&&!f&&!d?y.jsx(W3,{nav:l}):y.jsxs(y.Fragment,{children:[y.jsx(X3,{nav:l,cart:t,auth:r}),y.jsx("main",{children:m}),y.jsx(iN,{nav:l})]})}function W3({nav:n}){return y.jsx("main",{className:"maintenance-page",children:y.jsxs("section",{className:"maintenance-panel",children:[y.jsx("button",{className:"maintenance-logo",onClick:()=>n("/account"),children:"9SIXTY"}),y.jsx("p",{className:"eyebrow",children:"Private Preview"}),y.jsx("h1",{children:"Maintenance In Progress"}),y.jsx("p",{children:"We are preparing the 9SIXTY launch experience. The storefront is temporarily offline while the final product and checkout setup is completed."}),y.jsx("button",{className:"gold",onClick:()=>n("/account"),children:"Admin Login"})]})})}function X3({nav:n,cart:e,auth:t}){const[i,r]=We.useState(!1),s=[["/","Home"],["/shop","Shop"],["/about","About"],["/our-story","Our Story"]];return y.jsxs("header",{className:"site-header",children:[y.jsx("button",{className:"mobile-icon",onClick:()=>r(!i),"aria-label":"Menu",children:y.jsx(hA,{size:22})}),y.jsx("button",{className:"brand",onClick:()=>n("/"),children:"9SIXTY"}),y.jsxs("nav",{className:i?"open":"",children:[s.map(([o,a])=>y.jsx("button",{onClick:()=>n(o),children:a},o)),y.jsx("button",{onClick:()=>n("/showcase"),children:"Showcase"}),y.jsx("button",{onClick:()=>n("/blog"),children:"Blog"})]}),y.jsxs("div",{className:"header-actions",children:[y.jsx("button",{onClick:()=>n("/account"),"aria-label":"Account",children:y.jsx(RM,{size:20})}),y.jsxs("button",{onClick:()=>n("/basket"),"aria-label":"Basket",children:[y.jsx(TM,{size:22}),y.jsx("span",{children:e.length})]})]})]})}function Y3({nav:n,addToCart:e}){const[t,i]=We.useState({featured_products:wo.slice(0,3),reviews:wo[0].reviews});return We.useEffect(()=>{Kn("/api/home").then(r=>r.ok?r.json():Promise.reject()).then(r=>{var s,o;return i({featured_products:(s=r.featured_products)!=null&&s.length?r.featured_products:wo.slice(0,3),reviews:(o=r.reviews)!=null&&o.length?r.reviews:wo[0].reviews})}).catch(()=>{})},[]),y.jsxs(y.Fragment,{children:[y.jsx("section",{className:"hero",children:y.jsxs("div",{className:"hero-copy",children:[y.jsxs("h1",{children:["Engineered",y.jsx("br",{}),y.jsx("span",{children:"For Excellence"})]}),y.jsx("p",{children:"Premium modular wall-mounted stands designed to protect and preserve your valuable gear."}),y.jsxs("div",{children:[y.jsx("button",{onClick:()=>n("/shop"),className:"gold",children:"Shop Now"}),y.jsx("button",{onClick:()=>n("/showcase"),children:"Learn More"})]})]})}),y.jsx(yg,{title:"Featured Products",children:y.jsx("div",{className:"product-grid featured",children:t.featured_products.slice(0,3).map(r=>y.jsx(PE,{product:r,nav:n,addToCart:e},r.slug))})}),y.jsxs("section",{className:"band",children:[y.jsx("h2",{children:"Why Choose 9SIXTY"}),y.jsx("p",{children:"Precision engineering meets premium material."}),y.jsx("div",{className:"benefits",children:[[wM,"Premium Materials"],[CM,"Easy Installation"],[EM,"Modular Design"],[AM,"Built to Last"]].map(([r,s])=>y.jsxs("article",{children:[y.jsx(r,{size:24}),y.jsx("h3",{children:s}),y.jsx("p",{children:"Crafted for refined garage and display environments."})]},s))})]}),y.jsx(yg,{title:"What Our Customers Say",children:y.jsx("div",{className:"reviews",children:t.reviews.concat(t.reviews.length<3?[{id:"fallback-review",rating:5,user:{name:"Mike Johnson"},body:"Worth every penny. These stands are engineered to perfection."}]:[]).slice(0,3).map(r=>y.jsx(NE,{review:r},r.id))})}),y.jsxs("section",{className:"cta",children:[y.jsx("h2",{children:"Ready To Upgrade Your Garage?"}),y.jsx("p",{children:"Join thousands of satisfied customers who trust 9SIXTY for their gear storage."}),y.jsx("button",{onClick:()=>n("/shop"),children:"Browse Collection"})]})]})}function $3({nav:n,addToCart:e}){var d;const[t,i]=We.useState("All"),[r,s]=We.useState("All"),[o,a]=We.useState(wo),[l,c]=We.useState([{name:"Helmet Stands",slug:"helmet-stands"},{name:"Kit Hangers",slug:"kit-hangers"},{name:"Accessories",slug:"accessories"}]),u=t==="All"?"":((d=l.find(h=>h.name===t))==null?void 0:d.slug)||"",f=["All",...Array.from(new Set(o.flatMap(h=>(h.variants||[]).map(m=>m.colour_name)).filter(Boolean)))];return We.useEffect(()=>{const h=new URLSearchParams;u&&h.set("category",u),r!=="All"&&h.set("colour",r),Kn(`/api/products${h.toString()?`?${h}`:""}`).then(m=>m.ok?m.json():Promise.reject()).then(m=>{var _,g,p;a((g=(_=m.products)==null?void 0:_.data)!=null&&g.length?m.products.data:[]),(p=m.categories)!=null&&p.length&&c(m.categories)}).catch(()=>{})},[u,r]),y.jsxs("section",{className:"shop-page page-wrap",children:[y.jsxs("aside",{className:"filters",children:[y.jsx("h4",{children:"Category"}),["All",...l.map(h=>h.name)].map(h=>y.jsx("button",{className:t===h?"active":"",onClick:()=>i(h),children:h},h)),y.jsx("h4",{children:"Color"}),f.map(h=>y.jsx("button",{className:r===h?"active":"",onClick:()=>s(h),children:h},h)),y.jsx("h4",{children:"Price Range"}),["All","Under £50","£50 - £100","Over £100"].map(h=>y.jsx("button",{children:h},h))]}),y.jsxs("div",{children:[y.jsx("h1",{children:"Shop Collection"}),y.jsxs("div",{className:"product-grid shop-grid",children:[o.map(h=>y.jsx(PE,{product:h,nav:n,addToCart:e},h.slug)),!o.length&&y.jsx("p",{className:"muted",children:"No products match those filters."})]})]})]})}function PE({product:n,nav:e,addToCart:t}){var s;const i=xg(n),r=n.stock_status==="out_of_stock"||n.manage_stock&&Number(n.stock_quantity||0)<=0;return y.jsxs("article",{className:"product-card",children:[y.jsx("button",{className:"image-button",onClick:()=>e(`/product/${n.slug}`),children:y.jsx("img",{src:Gr(n.hero_image),alt:n.name})}),y.jsxs("div",{className:"card-body",children:[y.jsx("span",{children:((s=n.category)==null?void 0:s.name)||"Uncategorised"}),y.jsx("h3",{children:n.name}),n.short_description&&y.jsx("p",{className:"card-excerpt",children:n.short_description}),y.jsxs("div",{className:"price-row",children:[y.jsx("strong",{children:n.sale_price?y.jsxs(y.Fragment,{children:[y.jsx("s",{children:wi(n.price)})," ",wi(n.sale_price)]}):wi(n.price)}),y.jsx("small",{children:i.colour_name})]}),r&&y.jsx("p",{className:"stock-note",children:"Out of stock"}),y.jsxs("div",{className:"card-actions",children:[y.jsx("button",{className:"gold",disabled:r,onClick:()=>t(n,i),children:"Add"}),y.jsx("button",{onClick:()=>e(`/product/${n.slug}`),children:"View Details"})]})]})]})}function q3({slug:n,addToCart:e}){var d,h;const[t,i]=We.useState(wo.find(m=>m.slug===n)||wo[0]),[r,s]=We.useState((t.gallery||[t.hero_image])[0]),[o,a]=We.useState(xg(t)),[l,c]=We.useState(1),u=(d=t.gallery)!=null&&d.length?t.gallery:[t.hero_image].filter(Boolean),f=t.stock_status==="out_of_stock"||t.manage_stock&&Number(t.stock_quantity||0)<=0;return We.useEffect(()=>{Kn(`/api/products/${n}`).then(m=>m.ok?m.json():Promise.reject()).then(m=>{var _;i(m.product),s(((_=m.product.gallery)!=null&&_.length?m.product.gallery:[m.product.hero_image])[0]),a(xg(m.product))}).catch(()=>{})},[n]),y.jsxs("section",{className:"product-detail page-wrap",children:[y.jsxs("div",{className:"gallery",children:[y.jsx("img",{className:"main-img",src:Gr(r),alt:t.name}),y.jsx("div",{className:"thumbs",children:u.map(m=>y.jsx("button",{className:r===m?"active":"",onClick:()=>s(m),children:y.jsx("img",{src:Gr(m),alt:""})},m))})]}),y.jsxs("div",{className:"buy-panel",children:[y.jsx("h1",{children:t.name}),y.jsx(DE,{})," ",y.jsxs("span",{className:"muted",children:["4.9 (",((h=t.reviews)==null?void 0:h.length)||0," reviews)"]}),y.jsx("p",{className:"product-price",children:t.sale_price?y.jsxs(y.Fragment,{children:[y.jsx("s",{children:wi(t.price)})," ",wi(t.sale_price)]}):wi(t.price)}),t.short_description&&y.jsx("p",{children:t.short_description}),y.jsx("h4",{children:"Select Variant"}),y.jsx("div",{className:"variant-row",children:(t.variants||[]).map(m=>y.jsx("button",{className:o.id===m.id?"active":"",onClick:()=>a(m),children:m.name},m.id))}),y.jsx("h4",{children:"Quantity"}),y.jsxs("div",{className:"qty",children:[y.jsx("button",{onClick:()=>c(Math.max(1,l-1)),children:"-"}),y.jsx("strong",{children:l}),y.jsx("button",{onClick:()=>c(l+1),children:"+"})]}),f&&y.jsx("p",{className:"stock-note",children:"Out of stock"}),y.jsxs("div",{className:"purchase",children:[y.jsx("button",{className:"gold",disabled:f,onClick:()=>e(t,o,l),children:"Add To Cart"}),y.jsx("button",{disabled:f,children:"Buy Now"})]}),y.jsxs("div",{className:"promise",children:[y.jsxs("span",{children:[y.jsx(CM,{}),"Free Shipping"]}),y.jsxs("span",{children:[y.jsx(wM,{}),"2 Year Warranty"]}),y.jsxs("span",{children:[y.jsx(pA,{}),"30 Day Returns"]})]}),y.jsxs("article",{className:"description",children:[y.jsx("h3",{children:"Product Description"}),y.jsx("p",{children:t.description}),y.jsx("h4",{children:"Key Features"}),(t.features||[]).map(m=>y.jsxs("p",{className:"check",children:["✓ ",m]},m))]})]}),y.jsxs("div",{className:"wide",children:[y.jsx("h2",{children:"Specifications"}),y.jsx("table",{children:y.jsx("tbody",{children:Object.entries(t.specifications||{}).map(([m,_])=>y.jsxs("tr",{children:[y.jsx("th",{children:m}),y.jsx("td",{children:_})]},m))})}),y.jsx("h2",{children:"Customer Reviews"}),(t.reviews||[]).map(m=>y.jsx(NE,{review:m},m.id))]})]})}function K3({cart:n,setCart:e,nav:t}){const i=n.reduce((s,o)=>s+vg(o.product)*o.quantity,0),r=i>=70||i===0?0:5.99;return y.jsxs("section",{className:"page-wrap narrow",children:[y.jsx("h1",{children:"Basket"}),n.length===0&&y.jsx("p",{className:"muted",children:"Your basket is empty."}),n.map((s,o)=>y.jsxs("div",{className:"basket-line",children:[y.jsx("img",{src:Gr(s.product.hero_image),alt:""}),y.jsxs("div",{children:[y.jsx("h3",{children:s.product.name}),y.jsxs("p",{children:[s.variant.name," x ",s.quantity]})]}),y.jsx("strong",{children:wi(vg(s.product)*s.quantity)})]},`${s.product.slug}-${o}`)),y.jsxs("div",{className:"summary",children:[y.jsxs("p",{children:["Subtotal ",y.jsx("strong",{children:wi(i)})]}),y.jsxs("p",{children:["Shipping ",y.jsx("strong",{children:r?wi(r):"Free"})]}),y.jsxs("p",{children:["Trees planted ",y.jsx("strong",{children:Math.floor(i/50)})]}),y.jsxs("h2",{children:["Total ",wi(i+r)]}),y.jsx("button",{className:"gold",onClick:()=>t("/checkout"),children:"Checkout"}),y.jsx("button",{className:"clear-basket",onClick:()=>{e([]),localStorage.removeItem("cart")},children:"Clear Basket"})]})]})}function Z3({cart:n,auth:e,nav:t}){var r;const i=n.reduce((s,o)=>s+vg(o.product)*o.quantity,0);return y.jsxs("section",{className:"page-wrap checkout",children:[y.jsxs("div",{children:[y.jsx("h1",{children:"Checkout"}),y.jsxs("form",{className:"form-grid",children:[y.jsx("input",{placeholder:"Email",defaultValue:((r=e==null?void 0:e.user)==null?void 0:r.email)||""}),y.jsx("input",{placeholder:"Full name"}),y.jsx("input",{placeholder:"Phone"}),y.jsx("input",{placeholder:"Address line 1"}),y.jsx("input",{placeholder:"Town/City"}),y.jsx("input",{placeholder:"Postcode"}),y.jsx("button",{type:"button",className:"gold",onClick:()=>t("/account"),children:"Pay With Stripe"}),y.jsx("p",{className:"muted",children:"Stripe Payment Element, Apple Pay and Google Pay hooks are prepared in the API structure."})]})]}),y.jsxs("aside",{className:"summary",children:[y.jsx("h2",{children:"Order Summary"}),y.jsxs("p",{children:["Subtotal ",y.jsx("strong",{children:wi(i)})]}),y.jsxs("p",{children:["Shipping ",y.jsx("strong",{children:i>=70?"Free":"£5.99"})]}),y.jsxs("p",{children:[y.jsx(dA,{size:16})," Trees from this order ",y.jsx("strong",{children:Math.floor(i/50)})]})]})]})}function Q3({nav:n}){return y.jsx(H3,{nav:n})}function J3({nav:n}){return y.jsx(yg,{title:"Journal",children:y.jsx("div",{className:"product-grid",children:["Designing the perfect garage wall","Why helmet storage matters","9SIXTY material notes"].map(e=>y.jsxs("article",{className:"content-card",children:[y.jsx(MM,{}),y.jsx("h3",{children:e}),y.jsx("p",{children:"Launch content placeholder with SEO metadata support."}),y.jsx("button",{onClick:()=>n(`/blog/${e.toLowerCase().replaceAll(" ","-")}`),children:"Read"})]},e))})})}function eN(){return y.jsx(LE,{path:"/blog-post"})}function tN({auth:n,setAuth:e,nav:t}){const[i,r]=We.useState("login"),[s,o]=We.useState({name:"",email:"customer@9sixty.test",password:"Password123!"}),[a,l]=We.useState(""),c=async()=>{l("");const u=i==="register"?"/api/auth/register":"/api/auth/login",f=i==="register"?s:{email:s.email,password:s.password},d=await Kn(u,{method:"POST",body:JSON.stringify(f)}),h=await d.json();if(!d.ok){l(h.message||"Could not sign in.");return}e(h),localStorage.setItem("auth",JSON.stringify(h)),h.user.role==="admin"&&t("/admin")};return n?y.jsxs("section",{className:"page-wrap narrow",children:[y.jsx("h1",{children:"Account"}),y.jsxs("p",{children:["Signed in as ",n.user.name]}),n.user.role==="admin"&&y.jsx("button",{className:"gold",onClick:()=>t("/admin"),children:"Open Admin Dashboard"}),y.jsxs("div",{className:"content-card",children:[y.jsx("h3",{children:"Order History"}),y.jsx("p",{children:"No live orders yet. Paid orders will appear here through `/api/account/orders`."})]}),y.jsx("button",{onClick:()=>{e(null),localStorage.removeItem("auth")},children:"Log Out"})]}):y.jsxs("section",{className:"page-wrap narrow",children:[y.jsx("h1",{children:"Customer Account"}),y.jsxs("div",{className:"tabs",children:[y.jsx("button",{className:i==="login"?"active":"",onClick:()=>{r("login"),o({...s,email:"customer@9sixty.test"})},children:"Login"}),y.jsx("button",{className:i==="register"?"active":"",onClick:()=>r("register"),children:"Register"}),y.jsx("button",{className:i==="admin"?"active":"",onClick:()=>{r("admin"),o({...s,email:"admin@9sixty.test"})},children:"Admin Login"})]}),y.jsxs("form",{className:"form-grid",children:[i==="register"&&y.jsx("input",{placeholder:"Name",value:s.name,onChange:u=>o({...s,name:u.target.value})}),y.jsx("input",{placeholder:"Email",value:s.email,onChange:u=>o({...s,email:u.target.value})}),y.jsx("input",{placeholder:"Password",type:"password",value:s.password,onChange:u=>o({...s,password:u.target.value})}),a&&y.jsx("p",{className:"form-error",children:a}),y.jsx("button",{type:"button",className:"gold",onClick:c,children:i==="register"?"Create Account":"Sign In"})]})]})}function nN({auth:n,setAuth:e,nav:t,refreshSiteStatus:i}){var ie,he;const[r,s]=We.useState([]),[o,a]=We.useState([]),[l,c]=We.useState(null),[u,f]=We.useState(null),[d,h]=We.useState("Products"),[m,_]=We.useState({name:"",slug:"",description:""}),[g,p]=We.useState([]),[v,x]=We.useState(null),[S,R]=We.useState({maintenance_mode:!0,shipping_fee:"5.99",free_shipping_threshold:"70",stripe_publishable_key:""}),[A,E]=We.useState(()=>Object.fromEntries(Sp.map(([L])=>[L,""]))),[b,w]=We.useState({}),[M,D]=We.useState(""),k=((ie=n==null?void 0:n.user)==null?void 0:ie.role)==="admin",B=()=>{var L;return{category_id:((L=o[0])==null?void 0:L.id)||"",name:"New 9SIXTY Product",slug:"",sku:"",short_description:"",description:"",price:"0.00",sale_price:"",hero_image:As[0],gallery:As,features:[],specifications:{},meta_title:"",meta_description:"",manage_stock:!1,stock_quantity:"",stock_status:"in_stock",low_stock_threshold:"",weight:"",dimensions:"",is_featured:!1,is_active:!0,variants:[{colour_name:"Black/Gold",name:"Black/Gold",colour_hex:"#050505",accent_hex:"#A6936F",price_delta:0,is_active:!0}]}},W=()=>{Kn("/api/admin/categories",{},n.token).then(L=>L.json()).then(L=>a(L.categories||[]))},K=()=>{Kn("/api/admin/media",{},n.token).then(L=>L.json()).then(L=>p(L.media||[]))};We.useEffect(()=>{k&&(Kn("/api/admin/dashboard",{},n.token).then(L=>L.json()).then(c),Kn("/api/admin/products",{},n.token).then(L=>L.json()).then(L=>{var re;return s(((re=L.products)==null?void 0:re.data)||[])}),Kn("/api/admin/settings",{},n.token).then(L=>L.json()).then(L=>{R(re=>({...re,...L.settings||{}})),w(L.secrets||{})}),K(),W())},[k,n==null?void 0:n.token]);const X=async(L,re=null)=>{const fe=Array.from(L.target.files||[]);if(!fe.length)return;D("");const pe=[];for(const Le of fe){const I=new FormData;I.append("file",Le);const De=await fetch("/api/admin/media",{method:"POST",headers:{Authorization:`Bearer ${n.token}`},body:I}),ze=await De.json();if(!De.ok){D(ze.message||"Image upload failed.");continue}pe.push(ze.media)}pe.length&&(p(Le=>[...pe,...Le]),re==="featured"&&f(Le=>({...Le,hero_image:pe[0].path})),re==="gallery"&&f(Le=>({...Le,gallery:[...mr(Le.gallery),...pe.map(I=>I.path)]})),D(`${pe.length} image${pe.length===1?"":"s"} uploaded.`)),L.target.value=""},V=L=>{v&&(v==="featured"&&f({...u,hero_image:L.path}),v==="gallery"&&f({...u,gallery:[...mr(u.gallery),L.path]}),x(null))},U=async L=>{const re=await fetch(L.download_url,{headers:{Authorization:`Bearer ${n.token}`}});if(!re.ok){D("Image download failed.");return}const fe=await re.blob(),pe=URL.createObjectURL(fe),Le=document.createElement("a");Le.href=pe,Le.download=L.name||"image",document.body.appendChild(Le),Le.click(),Le.remove(),URL.revokeObjectURL(pe)},Z=async L=>{var pe,Le;if(L.readonly||!confirm(`Delete ${L.name}? This cannot be undone.`))return;const re=await fetch(`/api/admin/media/${L.filename}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}}),fe=await re.json();if(!re.ok){D(fe.message||"Image delete failed.");return}p(I=>I.filter(De=>De.path!==L.path)),(u==null?void 0:u.hero_image)===L.path&&f({...u,hero_image:""}),(Le=(pe=u==null?void 0:u.gallery)==null?void 0:pe.includes)!=null&&Le.call(pe,L.path)&&f({...u,gallery:mr(u.gallery).filter(I=>I!==L.path)}),D("Image deleted.")},P=async()=>{var pe;const L={category_id:u.category_id?Number(u.category_id):null,name:u.name,slug:u.slug,sku:u.sku||"",short_description:u.short_description||"",description:u.description||"",price:Number(u.price||0),sale_price:u.sale_price===""||u.sale_price===null||u.sale_price===void 0?null:Number(u.sale_price),hero_image:u.hero_image||As[0],gallery:mr(u.gallery),specifications:u.specifications||{},features:mr(u.features),meta_title:u.meta_title||`${u.name} | 9SIXTY`,meta_description:u.meta_description||u.short_description||"",manage_stock:!!u.manage_stock,stock_quantity:u.stock_quantity===""||u.stock_quantity===null||u.stock_quantity===void 0?null:Number(u.stock_quantity),stock_status:u.stock_status||"in_stock",low_stock_threshold:u.low_stock_threshold===""||u.low_stock_threshold===null||u.low_stock_threshold===void 0?null:Number(u.low_stock_threshold),weight:u.weight===""||u.weight===null||u.weight===void 0?null:Number(u.weight),dimensions:u.dimensions||"",is_featured:!!u.is_featured,is_active:!!u.is_active,variants:(pe=u.variants)!=null&&pe.length?u.variants:[{colour_name:"Black/Gold",name:"Black/Gold",colour_hex:"#050505",accent_hex:"#A6936F"}]},re=await Kn(u.id?`/api/admin/products/${u.id}`:"/api/admin/products",{method:u.id?"PUT":"POST",body:JSON.stringify(L)},n.token),fe=await re.json();if(!re.ok){D(fe.message||"Product could not be saved.");return}s(u.id?r.map(Le=>Le.id===fe.product.id?fe.product:Le):[fe.product,...r]),f(fe.product),D("Product saved.")},se=async()=>{if(!(u!=null&&u.id)||!confirm(`Delete ${u.name}? This cannot be undone.`))return;D("");const L=await Kn(`/api/admin/products/${u.id}`,{method:"DELETE"},n.token),re=await L.json();if(!L.ok){D(re.message||"Product could not be deleted.");return}s(r.filter(fe=>fe.id!==u.id)),f(null),D(re.message||"Product deleted.")},Se=async()=>{D("");const L=await Kn("/api/admin/categories",{method:"POST",body:JSON.stringify(m)},n.token),re=await L.json();if(!L.ok){D(re.message||"Category could not be created.");return}a([...o,re.category]),_({name:"",slug:"",description:""}),D("Category created.")},Xe=async()=>{D("");const L=Object.fromEntries(Object.entries(A).filter(([,pe])=>String(pe||"").trim()!=="")),re=await Kn("/api/admin/settings",{method:"PUT",body:JSON.stringify({...S,...L})},n.token),fe=await re.json();if(!re.ok){D(fe.message||"Settings could not be saved.");return}R(pe=>({...pe,...fe.settings||{}})),E(Object.fromEntries(Sp.map(([pe])=>[pe,""]))),w(fe.secrets||{}),i==null||i(),D("Settings saved.")};if(!k)return y.jsxs("section",{className:"page-wrap narrow",children:[y.jsx("h1",{children:"Admin Login"}),y.jsx("p",{className:"muted",children:"Use the admin account to manage products, orders, reviews and settings."}),y.jsxs("div",{className:"content-card",children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Email:"})," admin@9sixty.test"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Password:"})," Password123!"]}),y.jsx("button",{className:"gold",onClick:()=>t("/account"),children:"Go To Login"})]})]});const q=[[EM,"Products"],[dv,"Categories"],[TM,"Orders"],[RM,"Customers"],[MM,"Blog posts"],[mA,"Settings/API keys"],[uA,"Gift cards"],[AM,"Reviews"],[fA,"Media library"],[gA,"Discount codes"]];return y.jsxs("section",{className:"admin page-wrap",children:[y.jsx("h1",{children:"Admin Dashboard"}),y.jsxs("div",{className:"metrics",children:[y.jsxs("article",{children:[y.jsx("strong",{children:(l==null?void 0:l.orders)??"-"}),y.jsx("span",{children:"Orders"})]}),y.jsxs("article",{children:[y.jsx("strong",{children:wi((l==null?void 0:l.revenue)??0)}),y.jsx("span",{children:"Revenue"})]}),y.jsxs("article",{children:[y.jsx("strong",{children:(l==null?void 0:l.pending_reviews)??"-"}),y.jsx("span",{children:"Pending Reviews"})]})]}),y.jsxs("div",{className:"admin-layout",children:[y.jsxs("aside",{className:"admin-nav",children:[q.map(([L,re])=>y.jsxs("button",{className:re===d?"active":"",onClick:()=>{h(re),D("")},children:[y.jsx(L,{size:18}),re]},re)),y.jsx("button",{onClick:()=>{e(null),localStorage.removeItem("auth"),t("/account")},children:"Log Out"})]}),y.jsxs("section",{className:"admin-panel",children:[d==="Products"&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"admin-panel-head",children:[y.jsx("h2",{children:"Products"}),y.jsx("button",{className:"gold",onClick:()=>{f(B()),D("")},children:"Add Product"})]}),y.jsx("div",{className:"admin-products",children:r.map(L=>{var re;return y.jsxs("button",{className:(u==null?void 0:u.id)===L.id?"active":"",onClick:()=>{f(L),D("")},children:[y.jsx("img",{src:Gr(L.hero_image),alt:""}),y.jsxs("span",{children:[y.jsx("strong",{children:L.name}),y.jsx("small",{children:((re=L.category)==null?void 0:re.name)||"No category"})]}),y.jsx("strong",{children:wi(L.price)})]},L.id)})}),u&&y.jsxs("div",{className:"editor",children:[y.jsxs("div",{className:"editor-title",children:[y.jsx("h3",{children:u.id?"Edit Product":"New Product"}),y.jsxs("div",{className:"editor-actions",children:[u.id&&y.jsx("button",{className:"danger",onClick:se,children:"Delete Product"}),y.jsx("button",{className:"gold",onClick:P,children:"Save Product"})]})]}),y.jsxs("div",{className:"product-editor-grid",children:[y.jsxs("section",{className:"editor-card wide",children:[y.jsx("h4",{children:"Product Content"}),y.jsxs("label",{children:["Product name",y.jsx("input",{value:u.name||"",onChange:L=>f({...u,name:L.target.value})})]}),y.jsxs("label",{children:["Slug",y.jsx("input",{value:u.slug||"",onChange:L=>f({...u,slug:L.target.value}),placeholder:"auto-generated if left blank"})]}),y.jsxs("label",{children:["Card excerpt",y.jsx("textarea",{value:u.short_description||"",onChange:L=>f({...u,short_description:L.target.value}),placeholder:"Short copy shown on product cards and summaries."})]}),y.jsxs("label",{children:["Full description",y.jsx("textarea",{value:u.description||"",onChange:L=>f({...u,description:L.target.value})})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Publish"}),y.jsxs("label",{children:["Category",y.jsxs("select",{value:u.category_id||"",onChange:L=>f({...u,category_id:L.target.value?Number(L.target.value):null}),children:[y.jsx("option",{value:"",children:"No category"}),o.map(L=>y.jsx("option",{value:L.id,children:L.name},L.id))]})]}),y.jsxs("div",{className:"editor-toggles",children:[y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",checked:!!u.is_active,onChange:L=>f({...u,is_active:L.target.checked})})," Published"]}),y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",checked:!!u.is_featured,onChange:L=>f({...u,is_featured:L.target.checked})})," Featured product"]})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Pricing"}),y.jsxs("label",{children:["Regular price",y.jsx("input",{type:"number",step:"0.01",value:u.price||"",onChange:L=>f({...u,price:L.target.value})})]}),y.jsxs("label",{children:["Sale price",y.jsx("input",{type:"number",step:"0.01",value:u.sale_price||"",onChange:L=>f({...u,sale_price:L.target.value})})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Inventory"}),y.jsxs("label",{children:["SKU",y.jsx("input",{value:u.sku||"",onChange:L=>f({...u,sku:L.target.value})})]}),y.jsxs("label",{children:["Stock status",y.jsxs("select",{value:u.stock_status||"in_stock",onChange:L=>f({...u,stock_status:L.target.value}),children:[y.jsx("option",{value:"in_stock",children:"In stock"}),y.jsx("option",{value:"out_of_stock",children:"Out of stock"}),y.jsx("option",{value:"on_backorder",children:"On backorder"})]})]}),y.jsx("div",{className:"editor-toggles",children:y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",checked:!!u.manage_stock,onChange:L=>f({...u,manage_stock:L.target.checked})})," Manage stock quantity"]})}),y.jsxs("label",{children:["Stock quantity",y.jsx("input",{type:"number",min:"0",value:u.stock_quantity??"",onChange:L=>f({...u,stock_quantity:L.target.value})})]}),y.jsxs("label",{children:["Low stock threshold",y.jsx("input",{type:"number",min:"0",value:u.low_stock_threshold??"",onChange:L=>f({...u,low_stock_threshold:L.target.value})})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Shipping Data"}),y.jsxs("label",{children:["Weight",y.jsx("input",{type:"number",step:"0.01",value:u.weight??"",onChange:L=>f({...u,weight:L.target.value}),placeholder:"0.50"})]}),y.jsxs("label",{children:["Dimensions",y.jsx("input",{value:u.dimensions||"",onChange:L=>f({...u,dimensions:L.target.value}),placeholder:"8 x 6 x 4 inches"})]})]}),y.jsxs("section",{className:"editor-card wide",children:[y.jsx("h4",{children:"Images"}),y.jsxs("div",{className:"image-manager",children:[y.jsxs("div",{children:[y.jsx("h5",{children:"Featured image"}),u.hero_image?y.jsxs("div",{className:"selected-image",children:[y.jsx("img",{src:Gr(u.hero_image),alt:""}),y.jsx("button",{type:"button",onClick:()=>f({...u,hero_image:""}),children:"Remove"})]}):y.jsx("div",{className:"empty-media",children:"No featured image selected"}),y.jsxs("div",{className:"media-actions",children:[y.jsxs("label",{className:"upload-button",children:["Upload image",y.jsx("input",{type:"file",accept:"image/*",onChange:L=>X(L,"featured")})]}),y.jsx("button",{type:"button",onClick:()=>x("featured"),children:"Choose from media"})]}),y.jsxs("label",{children:["Featured image URL",y.jsx("input",{value:u.hero_image||"",onChange:L=>f({...u,hero_image:L.target.value}),placeholder:"/api/media/image.jpg"})]})]}),y.jsxs("div",{children:[y.jsx("h5",{children:"Product gallery"}),y.jsxs("div",{className:"selected-gallery",children:[mr(u.gallery).map((L,re)=>y.jsxs("div",{className:"selected-image",children:[y.jsx("img",{src:Gr(L),alt:""}),y.jsx("button",{type:"button",onClick:()=>f({...u,gallery:mr(u.gallery).filter((fe,pe)=>pe!==re)}),children:"Remove"})]},`${L}-${re}`)),!mr(u.gallery).length&&y.jsx("div",{className:"empty-media",children:"No gallery images selected"})]}),y.jsxs("div",{className:"media-actions",children:[y.jsxs("label",{className:"upload-button",children:["Upload gallery images",y.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:L=>X(L,"gallery")})]}),y.jsx("button",{type:"button",onClick:()=>x("gallery"),children:"Choose from media"})]}),y.jsxs("label",{children:["Gallery image URLs",y.jsx("textarea",{value:ay(u.gallery),onChange:L=>f({...u,gallery:mr(L.target.value)}),placeholder:`/api/media/image-1.jpg
/api/media/image-2.jpg`})]})]})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Features"}),y.jsxs("label",{children:["Feature bullets",y.jsx("textarea",{value:ay(u.features),onChange:L=>f({...u,features:mr(L.target.value)}),placeholder:`Carbon fibre infused construction
Precision-cut mounting holes`})]})]}),y.jsxs("section",{className:"editor-card",children:[y.jsx("h4",{children:"Specifications"}),y.jsxs("label",{children:["Specification rows",y.jsx("textarea",{value:V3(u.specifications),onChange:L=>f({...u,specifications:G3(L.target.value)}),placeholder:`Material: Carbon Fibre Infused Plastic
Weight: 0.5kg`})]})]}),y.jsxs("section",{className:"editor-card wide",children:[y.jsx("h4",{children:"SEO"}),y.jsxs("label",{children:["SEO title",y.jsx("input",{value:u.meta_title||"",onChange:L=>f({...u,meta_title:L.target.value}),placeholder:`${u.name||"Product"} | 9SIXTY`})]}),y.jsxs("label",{children:["Meta description",y.jsx("textarea",{value:u.meta_description||"",onChange:L=>f({...u,meta_description:L.target.value}),placeholder:"Search result description for this product."})]})]}),y.jsxs("section",{className:"editor-card wide",children:[y.jsxs("div",{className:"editor-title",children:[y.jsx("h4",{children:"Colour Variants"}),y.jsx("button",{onClick:()=>f({...u,variants:[...u.variants||[],{colour_name:"New Colour",name:"New Colour",colour_hex:"#050505",accent_hex:"#A6936F",price_delta:0,is_active:!0}]}),children:"Add Variant"})]}),(he=u.variants)==null?void 0:he.map((L,re)=>y.jsxs("div",{className:"variant-editor expanded",children:[y.jsx("input",{value:L.colour_name||"",onChange:fe=>{const pe=[...u.variants];pe[re]={...L,colour_name:fe.target.value,name:fe.target.value},f({...u,variants:pe})},placeholder:"Variant name"}),y.jsx("input",{type:"color",value:L.colour_hex||"#050505",onChange:fe=>{const pe=[...u.variants];pe[re]={...L,colour_hex:fe.target.value},f({...u,variants:pe})}}),y.jsx("input",{type:"color",value:L.accent_hex||"#A6936F",onChange:fe=>{const pe=[...u.variants];pe[re]={...L,accent_hex:fe.target.value},f({...u,variants:pe})}}),y.jsx("input",{type:"number",step:"0.01",value:L.price_delta||0,onChange:fe=>{const pe=[...u.variants];pe[re]={...L,price_delta:Number(fe.target.value||0)},f({...u,variants:pe})},placeholder:"Price delta"}),y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",checked:L.is_active!==!1,onChange:fe=>{const pe=[...u.variants];pe[re]={...L,is_active:fe.target.checked},f({...u,variants:pe})}})," Active"]})]},L.id||re))]})]}),y.jsx("button",{className:"gold",onClick:P,children:"Save Product"}),M&&y.jsx("p",{className:"admin-message",children:M})]})]}),d==="Categories"&&y.jsxs("div",{className:"category-admin",children:[y.jsxs("div",{className:"admin-panel-head",children:[y.jsx("h2",{children:"Categories"}),y.jsx("button",{className:"gold",onClick:Se,children:"Add Category"})]}),y.jsxs("div",{className:"editor category-form",children:[y.jsx("h3",{children:"New Category"}),y.jsxs("label",{children:["Name",y.jsx("input",{value:m.name,onChange:L=>_({...m,name:L.target.value}),placeholder:"Helmet Stands"})]}),y.jsxs("label",{children:["Slug",y.jsx("input",{value:m.slug,onChange:L=>_({...m,slug:L.target.value}),placeholder:"helmet-stands"})]}),y.jsxs("label",{children:["Description",y.jsx("textarea",{value:m.description,onChange:L=>_({...m,description:L.target.value}),placeholder:"Optional category description"})]}),M&&y.jsx("p",{className:"admin-message",children:M})]}),y.jsx("div",{className:"category-list",children:o.map(L=>y.jsxs("article",{children:[y.jsx(dv,{size:18}),y.jsxs("div",{children:[y.jsx("h3",{children:L.name}),y.jsx("p",{children:L.slug}),L.description&&y.jsx("p",{children:L.description})]})]},L.id))})]}),d==="Settings/API keys"&&y.jsxs("div",{className:"settings-admin",children:[y.jsxs("div",{className:"admin-panel-head",children:[y.jsx("h2",{children:"Settings/API keys"}),y.jsx("button",{className:"gold",onClick:Xe,children:"Save Settings"})]}),y.jsxs("div",{className:"editor",children:[y.jsxs("label",{className:"toggle-row",children:[y.jsxs("span",{children:[y.jsx("strong",{children:"Maintenance page"}),y.jsx("small",{children:"Hide every storefront page unless the visitor is logged in as an admin."})]}),y.jsx("input",{type:"checkbox",checked:!!S.maintenance_mode,onChange:L=>R({...S,maintenance_mode:L.target.checked})})]}),y.jsxs("label",{children:["Fixed shipping price",y.jsx("input",{type:"number",step:"0.01",value:S.shipping_fee||"",onChange:L=>R({...S,shipping_fee:L.target.value})})]}),y.jsxs("label",{children:["Free shipping threshold",y.jsx("input",{type:"number",step:"0.01",value:S.free_shipping_threshold||"",onChange:L=>R({...S,free_shipping_threshold:L.target.value})})]}),y.jsxs("label",{children:["Stripe publishable key",y.jsx("input",{value:S.stripe_publishable_key||"",onChange:L=>R({...S,stripe_publishable_key:L.target.value})})]}),y.jsx("div",{className:"secret-grid",children:Sp.map(([L,re])=>y.jsxs("label",{className:"secret-field",children:[y.jsxs("span",{children:[y.jsx("strong",{children:re}),y.jsx("small",{children:b[L]?"Configured. Leave blank to keep current value.":"Not set."})]}),y.jsx("input",{type:L.includes("password")||L.includes("secret")||L.includes("key")?"password":"text",value:A[L]||"",placeholder:b[L]?"Enter new value to replace":"Enter value",onChange:fe=>E({...A,[L]:fe.target.value})})]},L))}),M&&y.jsx("p",{className:"admin-message",children:M})]})]}),d==="Media library"&&y.jsxs("div",{className:"media-admin",children:[y.jsxs("div",{className:"admin-panel-head",children:[y.jsx("h2",{children:"Media library"}),y.jsxs("label",{className:"upload-button gold",children:["Upload Images",y.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:X})]})]}),y.jsxs("div",{className:"media-grid",children:[g.map(L=>y.jsxs("article",{className:"media-card",children:[y.jsx("img",{src:Gr(L.path),alt:L.name}),y.jsx("strong",{children:L.name}),y.jsxs("span",{children:[Math.round((L.size||0)/1024)," KB"]}),y.jsxs("div",{children:[y.jsx("a",{href:L.path,target:"_blank",rel:"noreferrer",children:"View"}),y.jsx("button",{type:"button",onClick:()=>U(L),children:"Download"}),y.jsx("button",{type:"button",className:"danger",onClick:()=>Z(L),children:"Delete"})]})]},L.path)),!g.length&&y.jsx("p",{className:"muted",children:"No uploaded images yet."})]}),M&&y.jsx("p",{className:"admin-message",children:M})]}),v&&y.jsx("div",{className:"media-modal",children:y.jsxs("div",{className:"media-modal-panel",children:[y.jsxs("div",{className:"admin-panel-head",children:[y.jsx("h2",{children:v==="featured"?"Choose featured image":"Choose gallery image"}),y.jsx("button",{onClick:()=>x(null),children:"Close"})]}),y.jsxs("div",{className:"media-grid compact",children:[g.map(L=>y.jsxs("button",{className:"media-select-card",onClick:()=>V(L),children:[y.jsx("img",{src:Gr(L.path),alt:L.name}),y.jsx("span",{children:L.name})]},L.path)),!g.length&&y.jsx("p",{className:"muted",children:"Upload images in Media library first, or use the upload buttons in the product editor."})]})]})}),!["Products","Categories","Settings/API keys","Media library"].includes(d)&&y.jsxs("div",{className:"content-card",children:[y.jsx("h2",{children:d}),y.jsx("p",{children:"This admin section is scaffolded. Products, Categories, Settings/API keys and Media library are active management areas."})]})]})]})]})}function LE({path:n}){const e=n.replace("/","").replaceAll("-"," ")||"About";return y.jsxs("section",{className:"page-wrap narrow",children:[y.jsx("h1",{children:e}),y.jsxs("div",{className:"content-card",children:[y.jsx("p",{children:"9SIXTY is a premium, product-focused ecommerce experience for modular wall-mounted helmet stands. This page is ready for final brand copy, imagery and SEO metadata."}),y.jsx("p",{children:"Contact, privacy, terms, shipping and returns content can be maintained as static pages or moved into an admin-managed CMS table."})]})]})}function iN({nav:n}){return y.jsxs("footer",{children:[y.jsxs("div",{className:"footer-grid",children:[y.jsxs("div",{children:[y.jsxs("button",{className:"footer-logo",onClick:()=>n("/"),children:["9",y.jsx("span",{children:"SIXTY"})]}),y.jsx("p",{children:"Premium modular wall-mounted stands engineered for protection and precision."})]}),y.jsxs("div",{children:[y.jsx("h4",{children:"Shop"}),y.jsx("button",{onClick:()=>n("/shop"),children:"Helmet Stands"}),y.jsx("button",{children:"Kit Hangers"}),y.jsx("button",{children:"Accessories"})]}),y.jsxs("div",{children:[y.jsx("h4",{children:"Support"}),y.jsx("button",{onClick:()=>n("/contact"),children:"Contact Us"}),y.jsx("button",{onClick:()=>n("/privacy-policy"),children:"Privacy Policy"}),y.jsx("button",{onClick:()=>n("/shipping-returns"),children:"Shipping Info"})]}),y.jsxs("div",{children:[y.jsx("h4",{children:"Newsletter"}),y.jsx("p",{children:"Join our monthly newsletter"}),y.jsxs("form",{children:[y.jsx("input",{placeholder:"Email"}),y.jsx("button",{children:"Join"})]})]})]}),y.jsx("div",{className:"legal",children:"© 2026 9SIXTY. All rights reserved."})]})}function yg({title:n,children:e}){return y.jsxs("section",{className:"section",children:[y.jsx("h2",{children:n}),e]})}function DE(){return y.jsx("span",{className:"stars",children:"★★★★★"})}function NE({review:n}){return y.jsxs("article",{className:"review",children:[y.jsx(DE,{}),y.jsx("h4",{children:n.user.name}),y.jsx("p",{children:n.body})]})}yM(document.getElementById("root")).render(y.jsx(j3,{}));
