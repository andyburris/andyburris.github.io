import{S as s,i as t,s as e,e as a,a as n,t as r,c as o,b as l,d as c,f as i,g as h,h as f,j as p,k as m,l as d,n as u,p as g,q as $,r as v,v as b,w as y,y as w,x as j,m as S,o as k,E as x,F as E,B as I}from"./client.6f7072fe.js";import{a as L,s as M}from"./mjukna-transition.735221f9.js";import{f as C}from"./index.8c567a33.js";import{a as D,A as G}from"./apps.50d3b8e0.js";function T(s){let t,e,g,$,v,b,y,w,j;return{c(){t=a("div"),e=a("img"),$=n(),v=a("div"),b=a("p"),y=r(s[1]),w=n(),j=a("p"),this.h()},l(a){t=o(a,"DIV",{class:!0});var n=l(t);e=o(n,"IMG",{class:!0,src:!0,alt:!0}),$=c(n),v=o(n,"DIV",{class:!0});var r=l(v);b=o(r,"P",{class:!0});var f=l(b);y=i(f,s[1]),f.forEach(h),w=c(r),j=o(r,"P",{class:!0}),l(j).forEach(h),r.forEach(h),n.forEach(h),this.h()},h(){f(e,"class","icon svelte-bsl8oj"),e.src!==(g="icons/"+s[0])&&f(e,"src",g),f(e,"alt",s[0]),f(b,"class","title svelte-bsl8oj"),f(j,"class","body svelte-bsl8oj"),f(v,"class","text-holder svelte-bsl8oj"),f(t,"class","item-holder svelte-bsl8oj")},m(a,n){p(a,t,n),m(t,e),m(t,$),m(t,v),m(v,b),m(b,y),m(v,w),m(v,j),j.innerHTML=s[2]},p(s,[t]){1&t&&e.src!==(g="icons/"+s[0])&&f(e,"src",g),1&t&&f(e,"alt",s[0]),2&t&&d(y,s[1]),4&t&&(j.innerHTML=s[2])},i:u,o:u,d(s){s&&h(t)}}}function V(s,t,e){let{iconSrc:a}=t,{title:n="Title"}=t,{body:r="Body"}=t;return s.$set=(s=>{"iconSrc"in s&&e(0,a=s.iconSrc),"title"in s&&e(1,n=s.title),"body"in s&&e(2,r=s.body)}),[a,n,r]}class q extends s{constructor(s){super(),t(this,s,V,T,e,{iconSrc:0,title:1,body:2})}}function A(s,t,e){const a=s.slice();return a[2]=t[e],a[4]=e,a}function B(s){let t;return{c(){t=a("img"),this.h()},l(s){t=o(s,"IMG",{class:!0,alt:!0,style:!0}),this.h()},h(){f(t,"class","app-detail-screenshot svelte-13wmv3"),f(t,"alt",""),x(t,"opacity","0")},m(s,e){p(s,t,e)},p:u,i:u,o:u,d(s){s&&h(t)}}}function H(s){let t,e=s[0].screenshotSrcs,a=[];for(let t=0;t<e.length;t+=1)a[t]=P(A(s,e,t));return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=E()},l(s){for(let t=0;t<a.length;t+=1)a[t].l(s);t=E()},m(s,e){for(let t=0;t<a.length;t+=1)a[t].m(s,e);p(s,t,e)},p(s,n){if(1&n){let r;for(e=s[0].screenshotSrcs,r=0;r<e.length;r+=1){const o=A(s,e,r);a[r]?(a[r].p(o,n),b(a[r],1)):(a[r]=P(o),a[r].c(),b(a[r],1),a[r].m(t.parentNode,t))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},i(s){for(let s=0;s<e.length;s+=1)b(a[s])},o:u,d(s){I(a,s),s&&h(t)}}}function P(s){let t,e,n,r;return{c(){t=a("img"),this.h()},l(s){t=o(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(t,"class","app-detail-screenshot svelte-13wmv3"),t.src!==(e="/screenshots/"+s[0].name.toLowerCase()+"/"+s[2])&&f(t,"src",e),f(t,"alt",n="Screenshot of "+s[0].name)},m(s,e){p(s,t,e)},p(s,a){1&a&&t.src!==(e="/screenshots/"+s[0].name.toLowerCase()+"/"+s[2])&&f(t,"src",e),1&a&&n!==(n="Screenshot of "+s[0].name)&&f(t,"alt",n)},i(e){r||S(()=>{(r=k(t,C,{y:200,duration:500,delay:100+50*s[4]})).start()})},o:u,d(s){s&&h(t)}}}function F(s){let t,e,r,i,d,u,x,E,I;const C=new G({props:{app:s[0]}});function D(s,t){return s[1]?H:B}let T=D(s),V=T(s);const A=new q({props:{iconSrc:"icon-info.svg",title:"About",body:s[0].info}}),P=new q({props:{iconSrc:"icon-github.svg",title:"Github",body:"<a href="+s[0].github+">"+s[0].github+"</a>"}});return{c(){t=a("div"),g(C.$$.fragment),e=n(),r=a("div"),V.c(),i=n(),g(A.$$.fragment),d=n(),g(P.$$.fragment),this.h()},l(s){t=o(s,"DIV",{class:!0,"transition-key":!0});var a=l(t);$(C.$$.fragment,a),e=c(a),r=o(a,"DIV",{class:!0});var n=l(r);V.l(n),n.forEach(h),i=c(a),$(A.$$.fragment,a),d=c(a),$(P.$$.fragment,a),a.forEach(h),this.h()},h(){f(r,"class","app-detail-screenshot-holder svelte-13wmv3"),f(t,"class","app-detail-holder svelte-13wmv3"),f(t,"transition-key",u=`background-${s[0].name}`)},m(s,a){p(s,t,a),v(C,t,null),m(t,e),m(t,r),V.m(r,null),m(t,i),v(A,t,null),m(t,d),v(P,t,null),I=!0},p(s,[e]){const a={};1&e&&(a.app=s[0]),C.$set(a),T===(T=D(s))&&V?V.p(s,e):(V.d(1),(V=T(s))&&(V.c(),b(V,1),V.m(r,null)));const n={};1&e&&(n.body=s[0].info),A.$set(n);const o={};1&e&&(o.body="<a href="+s[0].github+">"+s[0].github+"</a>"),P.$set(o),(!I||1&e&&u!==(u=`background-${s[0].name}`))&&f(t,"transition-key",u)},i(s){I||(b(C.$$.fragment,s),b(V),b(A.$$.fragment,s),b(P.$$.fragment,s),S(()=>{E&&E.end(1),x||(x=k(t,M,{})),x.start()}),I=!0)},o(s){y(C.$$.fragment,s),y(A.$$.fragment,s),y(P.$$.fragment,s),x&&x.invalidate(),E=w(t,L,{}),I=!1},d(s){s&&h(t),j(C),V.d(),j(A),j(P),s&&E&&E.end()}}}function N({params:s,query:t}){return{app:D.find(t=>t.name.toLowerCase()==s.slug.toLowerCase())}}function z(s,t,e){let{app:a}=t,n=!1;return setTimeout(()=>{e(1,n=!0)},0),s.$set=(s=>{"app"in s&&e(0,a=s.app)}),[a,n]}export default class extends s{constructor(s){super(),t(this,s,z,F,e,{app:0})}}export{N as preload};
