"use strict";(globalThis.webpackChunk_openmrs_esm_service_queues_app=globalThis.webpackChunk_openmrs_esm_service_queues_app||[]).push([[694],{7674:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(272),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}#-esm-service-queues__remove-queue-entry__subHeading___YoXVP{font-size:var(--cds-heading-compact-01-font-size, 0.875rem);font-weight:var(--cds-heading-compact-01-font-weight, 600);line-height:var(--cds-heading-compact-01-line-height, 1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing, 0.16px);color:#161616}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/remove-queue-entry-dialog/remove-queue-entry.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCpDF,6DC+1BI,2DAAA,CAAA,0DAAA,CAAA,8DAAA,CAAA,mEAAA,CD71BF,aDDM",sourceRoot:""}]),o.locals={subHeading:"-esm-service-queues__remove-queue-entry__subHeading___YoXVP"};const s=o},5694:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(5206),i=n.n(r),a=n(4924),o=n(9383),s=n(2870),u=n(8179),l=n(8879),c=n.n(l),d=n(8053),p=n(3255),m=n(9457);function f(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){f(a,r,i,o,s,"next",e)}function s(e){f(a,r,i,o,s,"throw",e)}o(void 0)}))}}var v=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},b=c()(new Date).format(u.J$);function y(){return y=h((function(e,t,n,r,i,a){var o;return v(this,(function(u){switch(u.label){case 0:return o=new AbortController,r?((null==a?void 0:a.length)&&a.forEach((l=h((function(e){return v(this,(function(t){switch(t.label){case 0:return[4,Promise.all([A("Completed",e.uuid)])];case 1:return t.sent(),[2]}}))})),function(e){return l.apply(this,arguments)})),[4,Promise.all([(0,d.TW)(e,t,n)])]):[3,2];case 1:return u.sent(),[2,(0,s.updateVisit)(i,r,o).pipe((0,m.P)()).subscribe((function(e){return e.status}),(function(e){return e}))];case 2:return[4,Promise.all([(0,d.TW)(e,t,n)]).then((function(e){return e})).catch((function(e){return e}))];case 3:return[2,u.sent()];case 4:return[2]}var l}))})),y.apply(this,arguments)}function A(e,t){return g.apply(this,arguments)}function g(){return(g=h((function(e,t){var n;return v(this,(function(r){return n="".concat(s.restBaseUrl,"/appointments/").concat(t,"/status-change"),[2,(0,s.openmrsFetch)(n,{body:{toStatus:e,onDate:b,timeZone:u.EQ},method:"POST",headers:{"Content-Type":"application/json"}})]}))}))).apply(this,arguments)}var w=n(1354),_=n.n(w),C=n(1583),E=n.n(C),k=n(7378),D=n.n(k),q=n(5993),T=n.n(q),P=n(4154),V=n.n(P),x=n(8141),S=n.n(x),B=n(7674),Q={};Q.styleTagTransform=S(),Q.setAttributes=T(),Q.insert=D().bind(null,"head"),Q.domAPI=E(),Q.insertStyleElement=V(),_()(B.Z,Q);const U=B.Z&&B.Z.locals?B.Z.locals:void 0;var Z=n(9561);const z=function(e){var t=e.queueEntry,n=e.closeModal,r=(0,a.useTranslation)().t,l=(0,s.useVisit)(t.patientUuid).currentVisit,c=(0,Z.Q)().mutateQueueEntries,d=function(e,t){var n,r=new AbortController,i="".concat(s.restBaseUrl,"/appointments/search"),a=(0,p.ZP)(i,(function(){return(0,s.openmrsFetch)(i,{method:"POST",signal:r.signal,headers:{"Content-Type":"application/json"},body:{patientUuid:e,startDate:t}})})),o=a.data,u=a.error,l=a.isLoading,c=a.isValidating,d=(null==o||null===(n=o.data)||void 0===n?void 0:n.length)?o.data.filter((function(e){return"CheckedIn"===e.status})):null;return{data:o?d:null,isError:u,isLoading:l,isValidating:c}}(t.patientUuid,u.b7),m=d.data;return i().createElement("div",null,i().createElement(o.xBx,{closeModal:n,label:r("serviceQueue","Service queue"),title:r("removeFromQueueAndEndVisit","Remove patient from queue and end active visit?")}),i().createElement(o.fef,null,i().createElement("p",{className:U.subHeading,id:"subHeading"},r("endVisitWarningMessage","Ending this visit will remove this patient from the queue and will not allow you to fill another encounter form for this patient"))),i().createElement(o.mzw,null,i().createElement(o.zxk,{kind:"secondary",onClick:n},r("cancel","Cancel")),i().createElement(o.zxk,{kind:"danger",onClick:function(){var e,i,a={location:null==l||null===(e=l.location)||void 0===e?void 0:e.uuid,startDatetime:(0,s.parseDate)(null==l?void 0:l.startDatetime),visitType:null==l||null===(i=l.visitType)||void 0===i?void 0:i.uuid,stopDatetime:new Date},o=new Date;(function(e,t,n,r,i,a){return y.apply(this,arguments)})(t.queue.uuid,t.queueEntryUuid,o,a,t.visitUuid,m).then((function(e){n(),c(),(0,s.showSnackbar)({isLowContrast:!0,kind:"success",subtitle:r("queueEntryRemovedSuccessfully","Queue entry removed successfully"),title:r("queueEntryRemoved","Queue entry removed")})}))}},r("endVisit","End visit"))))}}}]);