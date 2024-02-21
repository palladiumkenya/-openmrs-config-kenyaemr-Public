var _openmrs_esm_patient_chart_app;(()=>{"use strict";var e,r,t,n,a,o,i,l,s,u,p,f,d,h,c,m,v,g,b={5976:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(255),t.e(393),t.e(373),t.e(218),t.e(268),t.e(325),t.e(330),t.e(135)]).then((()=>()=>t(3536)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,w),t.loaded=!0,t.exports}w.m=b,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+".js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-patient-chart-app:",w.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+a){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="@openmrs/esm-patient-chart-app",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@carbon/react","1.40.0",(()=>Promise.all([w.e(393),w.e(615),w.e(947),w.e(268),w.e(779)]).then((()=>()=>w(6947))))),l("@openmrs/esm-framework","5.3.3-pre.1477",(()=>Promise.all([w.e(130),w.e(268)]).then((()=>()=>w(130))))),l("@openmrs/esm-patient-common-lib","7.0.1",(()=>Promise.all([w.e(255),w.e(373),w.e(268),w.e(325),w.e(356),w.e(330),w.e(566)]).then((()=>()=>w(7356))))),l("dayjs","1.11.10",(()=>w.e(879).then((()=>()=>w(8879))))),l("react-i18next","11.18.6",(()=>Promise.all([w.e(301),w.e(268)]).then((()=>()=>w(4301))))),l("react-router-dom","6.16.0",(()=>Promise.all([w.e(591),w.e(268)]).then((()=>()=>w(6591))))),l("react","18.2.0",(()=>w.e(784).then((()=>()=>w(2784))))),l("single-spa-react","6.0.1",(()=>w.e(630).then((()=>()=>w(6630))))),l("single-spa","6.0.0",(()=>w.e(93).then((()=>()=>w(7093))))),l("swr/_internal","2.2.4",(()=>Promise.all([w.e(729),w.e(268)]).then((()=>()=>w(4729))))),l("swr/immutable","2.2.4",(()=>Promise.all([w.e(255),w.e(268),w.e(325),w.e(152)]).then((()=>()=>w(2303))))),l("swr/infinite","2.2.4",(()=>Promise.all([w.e(255),w.e(268),w.e(325),w.e(382)]).then((()=>()=>w(6635)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():a(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var u,p,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(p=(typeof(u=r[i]))[0]))return!s||("u"==f?l>n&&!a:""==f!=a);if("u"==p){if(!s||"u"!=f)return!1}else if(s)if(f==p)if(l<=n){if(u!=e[l])return!1}else{if(a?u>e[l]:u<e[l])return!1;u!=e[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;s=!1,l--}else{if(l<=n||p<f!=a)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var c=e[i];d.push(1==c?h()|h():2==c?h()&h():c?o(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var a=i(e,t);return f(e[t][a])},u=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||p(l(e,t,a,n)),f(e[t][a])},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(d=e=>function(r,t,n,a){var o=w.I(r);return o&&o.then?o.then(e.bind(e,r,w.S[r],t,n,a)):e(r,w.S[r],t,n,a)})(((e,r,t,n)=>r&&w.o(r,t)?s(r,0,t):n())),c=d(((e,r,t,n,a)=>r&&w.o(r,t)?u(r,0,t,n):a())),m={},v={268:()=>c("default","react",[1,18],(()=>w.e(784).then((()=>()=>w(2784))))),3325:()=>c("default","swr/_internal",[1,2],(()=>w.e(729).then((()=>()=>w(4729))))),6081:()=>h("default","@openmrs/esm-framework/src/internal",(()=>w.e(130).then((()=>()=>w(130))))),4350:()=>c("default","@carbon/react",[1,1],(()=>Promise.all([w.e(393),w.e(615),w.e(947)]).then((()=>()=>w(6947))))),4924:()=>c("default","react-i18next",[1,11],(()=>w.e(301).then((()=>()=>w(4301))))),8744:()=>c("default","react-router-dom",[1,6],(()=>w.e(591).then((()=>()=>w(6591))))),9198:()=>c("default","swr/immutable",[1,2],(()=>w.e(303).then((()=>()=>w(2303))))),414:()=>c("default","@openmrs/esm-patient-common-lib",[0],(()=>w.e(356).then((()=>()=>w(7356))))),2870:()=>c("default","@openmrs/esm-framework",[1,5],(()=>w.e(130).then((()=>()=>w(130))))),2159:()=>c("default","single-spa-react",[1,6],(()=>w.e(630).then((()=>()=>w(6630))))),3141:()=>c("default","single-spa",[1,6],(()=>w.e(93).then((()=>()=>w(7093))))),3565:()=>c("default","dayjs",[1,1],(()=>w.e(879).then((()=>()=>w(8879))))),9285:()=>c("default","swr/infinite",[1,2],(()=>w.e(635).then((()=>()=>w(6635)))))},g={135:[414,2159,2870,3141,3565,9285],268:[268],325:[3325],330:[4350,4924,8744,9198],356:[6081],566:[414,2870]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete m[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var a=v[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={583:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(268|325|330|566)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=w.p+w.u(r),i=new Error;w.l(o,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in i)w.o(i,n)&&(w.m[n]=i[n]);l&&l(w)}for(r&&r(t);s<o.length;s++)a=o[s],w.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var _=w(5976);_openmrs_esm_patient_chart_app=_})();