var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s;import{s as o,g as u,w as i,S as h,i as f,a as c,e as d,t as $,b as p,c as g,d as m,f as v,h as y,j as x,k,l as w,m as M,n as b,o as R,p as E,q as T,r as P,u as A,v as I,x as O,y as j,z as D,A as C,B,C as L,D as N,E as z,F as q,G as V,H as U,I as F,J as H,K as S,L as W,M as G,N as J,O as K,P as Q,Q as X,R as Y,T as Z,U as _,V as ee,W as te,X as ne,Y as se}from"./vendor.74ec6cd0.js";const ae={};function le(){return u(ae)}function re(e,t,n){const s=e.slice();return s[10]=t[n].planet,s[11]=t[n].sun,s[12]=t[n].annulus,s[13]=t[n].n,s}function oe(e){let t,n,s,a,l,r,o,u,i,h,f,c,R=e[10]+"",E=e[11]+"",T=e[12]+"",A=e[13]+"";function I(){return e[9](e[10],e[11],e[12],e[13])}return{c(){t=d("button"),n=$("planet: "),s=$(R),a=$(", sun: "),l=$(E),r=$(", annulus: "),o=$(T),u=$(", n: "),i=$(A),h=p(),this.h()},l(e){t=g(e,"BUTTON",{class:!0});var f=m(t);n=v(f,"planet: "),s=v(f,R),a=v(f,", sun: "),l=v(f,E),r=v(f,", annulus: "),o=v(f,T),u=v(f,", n: "),i=v(f,A),h=y(f),f.forEach(x),this.h()},h(){k(t,"class","svelte-1q62xo3")},m(e,d){w(e,t,d),M(t,n),M(t,s),M(t,a),M(t,l),M(t,r),M(t,o),M(t,u),M(t,i),M(t,h),f||(c=b(t,"click",P(I)),f=!0)},p(t,n){e=t},d(e){e&&x(t),f=!1,c()}}}function ue(e){let t,n,s,a,l,r=e[8],o=[];for(let u=0;u<r.length;u+=1)o[u]=oe(re(e,r,u));return{c(){t=d("div"),n=d("h1"),s=$("presets"),a=p(),l=d("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=g(e,"DIV",{});var r=m(t);n=g(r,"H1",{});var u=m(n);s=v(u,"presets"),u.forEach(x),a=y(r),l=g(r,"DIV",{class:!0});var i=m(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach(x),r.forEach(x),this.h()},h(){k(l,"class","config svelte-1q62xo3")},m(e,r){w(e,t,r),M(t,n),M(n,s),M(t,a),M(t,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(271&t){let n;for(r=e[8],n=0;n<r.length;n+=1){const s=re(e,r,n);o[n]?o[n].p(s,t):(o[n]=oe(s),o[n].c(),o[n].m(l,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}},i:R,o:R,d(e){e&&x(t),E(o,e)}}}function ie(e,t,n){let s,a,l,r;const{planetTeeth:o,sunTeeth:u,annulusTeeth:i,numPlanets:h}=le();T(e,o,(e=>n(0,s=e))),T(e,u,(e=>n(1,a=e))),T(e,i,(e=>n(2,l=e))),T(e,h,(e=>n(3,r=e)));return[s,a,l,r,o,u,i,h,[{sun:16,planet:32,annulus:80,n:3},{sun:43,planet:19,annulus:81,n:4},{sun:46,planet:19,annulus:84,n:5},{sun:44,planet:19,annulus:82,n:6},{sun:45,planet:18,annulus:81,n:7},{sun:50,planet:18,annulus:86,n:8}],(e,t,n,f)=>{A(o,s=e,s),A(u,a=t,a),A(i,l=n,l),A(h,r=f,r)}]}class he extends h{constructor(e){super(),f(this,e,ie,ue,c,{})}}function fe(e){let t,n,s,a=[{id:e[1]},{type:"number"},{placeholder:e[3]},{step:e[5]},e[7]],l={};for(let r=0;r<a.length;r+=1)l=C(l,a[r]);return{c(){t=d("input"),this.h()},l(e){t=g(e,"INPUT",{id:!0,type:!0,placeholder:!0,step:!0}),this.h()},h(){N(t,l),z(t,"svelte-1fz3jpk",!0)},m(a,l){w(a,t,l),q(t,e[0]),n||(s=b(t,"input",e[8]),n=!0)},p(e,n){N(t,l=V(a,[2&n&&{id:e[1]},{type:"number"},8&n&&{placeholder:e[3]},32&n&&{step:e[5]},128&n&&e[7]])),1&n&&L(t.value)!==e[0]&&q(t,e[0]),z(t,"svelte-1fz3jpk",!0)},d(e){e&&x(t),n=!1,s()}}}function ce(e){let t,n,s,a=[{id:e[1]},{type:"number"},{placeholder:e[3]},{value:e[0]},e[7]],l={};for(let r=0;r<a.length;r+=1)l=C(l,a[r]);return{c(){t=d("input"),this.h()},l(e){t=g(e,"INPUT",{id:!0,type:!0,placeholder:!0,value:!0}),this.h()},h(){N(t,l),z(t,"svelte-1fz3jpk",!0)},m(a,l){w(a,t,l),n||(s=b(t,"change",P(e[6])),n=!0)},p(e,n){N(t,l=V(a,[2&n&&{id:e[1]},{type:"number"},8&n&&{placeholder:e[3]},1&n&&{value:e[0]},128&n&&e[7]])),z(t,"svelte-1fz3jpk",!0)},d(e){e&&x(t),n=!1,s()}}}function de(e){let t,n,s,a;function l(e,t){return e[4]?ce:fe}let r=l(e),o=r(e);return{c(){t=d("label"),n=$(e[2]),s=p(),o.c(),a=I(),this.h()},l(l){t=g(l,"LABEL",{for:!0,class:!0});var r=m(t);n=v(r,e[2]),r.forEach(x),s=y(l),o.l(l),a=I(),this.h()},h(){k(t,"for",e[1]),k(t,"class","svelte-1fz3jpk")},m(e,l){w(e,t,l),M(t,n),w(e,s,l),o.m(e,l),w(e,a,l)},p(e,[s]){4&s&&O(n,e[2]),2&s&&k(t,"for",e[1]),r===(r=l(e))&&o?o.p(e,s):(o.d(1),o=r(e),o&&(o.c(),o.m(a.parentNode,a)))},i:R,o:R,d(e){e&&x(t),e&&x(s),o.d(e),e&&x(a)}}}function $e(e,t,n){let s;const a=["id","label","placeholder","value","integer"];let l=j(t,a),{id:r}=t,{label:o=D.exports.lowerCase(r)}=t,{placeholder:u}=t,{value:i}=t,{integer:h=!1}=t;return e.$$set=e=>{t=C(C({},t),B(e)),n(7,l=j(t,a)),"id"in e&&n(1,r=e.id),"label"in e&&n(2,o=e.label),"placeholder"in e&&n(3,u=e.placeholder),"value"in e&&n(0,i=e.value),"integer"in e&&n(4,h=e.integer)},e.$$.update=()=>{1&e.$$.dirty&&n(5,s=Math.pow(10,Math.floor(Math.log10(i))))},[i,r,o,u,h,s,e=>{n(0,i=Math.round(e.currentTarget.valueAsNumber))},l,function(){i=L(this.value),n(0,i)}]}class pe extends h{constructor(e){super(),f(this,e,$e,de,c,{id:1,label:2,placeholder:3,value:0,integer:4})}}function ge(e){let t,n,s,a,l,r,o,u,i,h,f,c,b,R,E,T,P,A,I,O,j,D,C,B,L,N,z,q,V,X,Y;function Z(t){e[16](t)}let _={id:"speed"};function ee(t){e[17](t)}void 0!==e[0]&&(_.value=e[0]),r=new pe({props:_}),U.push((()=>F(r,"value",Z)));let te={id:"holeRadius"};function ne(t){e[18](t)}void 0!==e[1]&&(te.value=e[1]),i=new pe({props:te}),U.push((()=>F(i,"value",ee)));let se={id:"toothRadius"};function ae(t){e[19](t)}void 0!==e[2]&&(se.value=e[2]),c=new pe({props:se}),U.push((()=>F(c,"value",ne)));let le={id:"modulus"};function re(t){e[20](t)}void 0!==e[3]&&(le.value=e[3]),E=new pe({props:le}),U.push((()=>F(E,"value",ae)));let oe={id:"numPlanets",integer:!0};function ue(t){e[21](t)}void 0!==e[4]&&(oe.value=e[4]),A=new pe({props:oe}),U.push((()=>F(A,"value",re)));let ie={id:"sunTeeth",integer:!0};function fe(t){e[22](t)}void 0!==e[5]&&(ie.value=e[5]),j=new pe({props:ie}),U.push((()=>F(j,"value",ue)));let ce={id:"planetTeeth",integer:!0};function de(t){e[23](t)}void 0!==e[6]&&(ce.value=e[6]),B=new pe({props:ce}),U.push((()=>F(B,"value",fe)));let $e={id:"annulusTeeth",integer:!0};return void 0!==e[7]&&($e.value=e[7]),z=new pe({props:$e}),U.push((()=>F(z,"value",de))),X=new he({}),{c(){t=d("div"),n=d("h1"),s=$("config"),a=p(),l=d("div"),H(r.$$.fragment),u=p(),H(i.$$.fragment),f=p(),H(c.$$.fragment),R=p(),H(E.$$.fragment),P=p(),H(A.$$.fragment),O=p(),H(j.$$.fragment),C=p(),H(B.$$.fragment),N=p(),H(z.$$.fragment),V=p(),H(X.$$.fragment),this.h()},l(e){t=g(e,"DIV",{});var o=m(t);n=g(o,"H1",{});var h=m(n);s=v(h,"config"),h.forEach(x),a=y(o),l=g(o,"DIV",{class:!0});var d=m(l);S(r.$$.fragment,d),u=y(d),S(i.$$.fragment,d),f=y(d),S(c.$$.fragment,d),R=y(d),S(E.$$.fragment,d),P=y(d),S(A.$$.fragment,d),O=y(d),S(j.$$.fragment,d),C=y(d),S(B.$$.fragment,d),N=y(d),S(z.$$.fragment,d),d.forEach(x),V=y(o),S(X.$$.fragment,o),o.forEach(x),this.h()},h(){k(l,"class","config svelte-ondi9k")},m(e,o){w(e,t,o),M(t,n),M(n,s),M(t,a),M(t,l),W(r,l,null),M(l,u),W(i,l,null),M(l,f),W(c,l,null),M(l,R),W(E,l,null),M(l,P),W(A,l,null),M(l,O),W(j,l,null),M(l,C),W(B,l,null),M(l,N),W(z,l,null),M(t,V),W(X,t,null),Y=!0},p(e,[t]){const n={};!o&&1&t&&(o=!0,n.value=e[0],G((()=>o=!1))),r.$set(n);const s={};!h&&2&t&&(h=!0,s.value=e[1],G((()=>h=!1))),i.$set(s);const a={};!b&&4&t&&(b=!0,a.value=e[2],G((()=>b=!1))),c.$set(a);const l={};!T&&8&t&&(T=!0,l.value=e[3],G((()=>T=!1))),E.$set(l);const u={};!I&&16&t&&(I=!0,u.value=e[4],G((()=>I=!1))),A.$set(u);const f={};!D&&32&t&&(D=!0,f.value=e[5],G((()=>D=!1))),j.$set(f);const d={};!L&&64&t&&(L=!0,d.value=e[6],G((()=>L=!1))),B.$set(d);const $={};!q&&128&t&&(q=!0,$.value=e[7],G((()=>q=!1))),z.$set($)},i(e){Y||(J(r.$$.fragment,e),J(i.$$.fragment,e),J(c.$$.fragment,e),J(E.$$.fragment,e),J(A.$$.fragment,e),J(j.$$.fragment,e),J(B.$$.fragment,e),J(z.$$.fragment,e),J(X.$$.fragment,e),Y=!0)},o(e){K(r.$$.fragment,e),K(i.$$.fragment,e),K(c.$$.fragment,e),K(E.$$.fragment,e),K(A.$$.fragment,e),K(j.$$.fragment,e),K(B.$$.fragment,e),K(z.$$.fragment,e),K(X.$$.fragment,e),Y=!1},d(e){e&&x(t),Q(r),Q(i),Q(c),Q(E),Q(A),Q(j),Q(B),Q(z),Q(X)}}}function me(e,t,n){let s,a,l,r,o,u,i,h;const{speed:f,holeRadius:c,toothRadius:d,modulus:$,numPlanets:p,annulusTeeth:g,planetTeeth:m,sunTeeth:v}=le();return T(e,f,(e=>n(0,s=e))),T(e,c,(e=>n(1,a=e))),T(e,d,(e=>n(2,l=e))),T(e,$,(e=>n(3,r=e))),T(e,p,(e=>n(4,o=e))),T(e,g,(e=>n(7,h=e))),T(e,m,(e=>n(6,i=e))),T(e,v,(e=>n(5,u=e))),[s,a,l,r,o,u,i,h,f,c,d,$,p,g,m,v,function(e){s=e,f.set(s)},function(e){a=e,c.set(a)},function(e){l=e,d.set(l)},function(e){r=e,$.set(r)},function(e){o=e,p.set(o)},function(e){u=e,v.set(u)},function(e){i=e,m.set(i)},function(e){h=e,g.set(h)}]}class ve extends h{constructor(e){super(),f(this,e,me,ge,c,{})}}function ye(e){let t,n;function s(e,t){return e[2]?xe:ke}let a=s(e),l=a(e);return{c(){t=X("g"),l.c(),this.h()},l(e){t=g(e,"g",{stroke:!0,"stroke-width":!0},1);var n=m(t);l.l(n),n.forEach(x),this.h()},h(){k(t,"stroke","black"),k(t,"stroke-width",n=e[3]/2)},m(e,n){w(e,t,n),l.m(t,null)},p(e,r){a===(a=s(e))&&l?l.p(e,r):(l.d(1),l=a(e),l&&(l.c(),l.m(t,null))),8&r&&n!==(n=e[3]/2)&&k(t,"stroke-width",n)},d(e){e&&x(t),l.d()}}}function xe(e){let t,n,s,a,l,r;return{c(){t=X("line"),a=X("line"),this.h()},l(e){t=g(e,"line",{y1:!0,y2:!0,x1:!0,x2:!0,stroke:!0},1),m(t).forEach(x),a=g(e,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0},1),m(a).forEach(x),this.h()},h(){k(t,"y1",0),k(t,"y2",0),k(t,"x1",n=e[1]+e[3]),k(t,"x2",s=e[1]+3*e[3]),k(t,"stroke",e[6]),k(a,"x1",0),k(a,"x2",0),k(a,"y1",l=e[1]+e[3]),k(a,"y2",r=e[1]+3*e[3]),k(a,"stroke",e[7])},m(e,n){w(e,t,n),w(e,a,n)},p(e,o){10&o&&n!==(n=e[1]+e[3])&&k(t,"x1",n),10&o&&s!==(s=e[1]+3*e[3])&&k(t,"x2",s),64&o&&k(t,"stroke",e[6]),10&o&&l!==(l=e[1]+e[3])&&k(a,"y1",l),10&o&&r!==(r=e[1]+3*e[3])&&k(a,"y2",r),128&o&&k(a,"stroke",e[7])},d(e){e&&x(t),e&&x(a)}}}function ke(e){let t,n,s,a,l,r;return{c(){t=X("line"),a=X("line"),this.h()},l(e){t=g(e,"line",{y1:!0,y2:!0,x1:!0,x2:!0,stroke:!0},1),m(t).forEach(x),a=g(e,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0},1),m(a).forEach(x),this.h()},h(){k(t,"y1",0),k(t,"y2",0),k(t,"x1",n=e[4]+e[3]),k(t,"x2",s=e[1]-2*e[3]),k(t,"stroke",e[6]),k(a,"x1",0),k(a,"x2",0),k(a,"y1",l=e[4]+e[3]),k(a,"y2",r=e[1]-2*e[3]),k(a,"stroke",e[7])},m(e,n){w(e,t,n),w(e,a,n)},p(e,o){24&o&&n!==(n=e[4]+e[3])&&k(t,"x1",n),10&o&&s!==(s=e[1]-2*e[3])&&k(t,"x2",s),64&o&&k(t,"stroke",e[6]),24&o&&l!==(l=e[4]+e[3])&&k(a,"y1",l),10&o&&r!==(r=e[1]-2*e[3])&&k(a,"y2",r),128&o&&k(a,"stroke",e[7])},d(e){e&&x(t),e&&x(a)}}}function we(e){let t,n,s=e[5]&&ye(e);return{c(){t=X("g"),n=X("path"),s&&s.c(),this.h()},l(e){t=g(e,"g",{transform:!0},1);var a=m(t);n=g(a,"path",{fill:!0,d:!0,transform:!0},1),m(n).forEach(x),s&&s.l(a),a.forEach(x),this.h()},h(){k(n,"fill",e[0]),k(n,"d",e[9]),k(n,"transform","rotate(90)"),k(t,"transform",e[8])},m(e,a){w(e,t,a),M(t,n),s&&s.m(t,null)},p(e,[a]){1&a&&k(n,"fill",e[0]),512&a&&k(n,"d",e[9]),e[5]?s?s.p(e,a):(s=ye(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null),256&a&&k(t,"transform",e[8])},i:R,o:R,d(e){e&&x(t),s&&s.d()}}}function Me(e,t,n){let s,a,l,{fill:r}=t,{teeth:o}=t,{radius:u}=t,{x:i}=t,{y:h}=t,{annulus:f=!1}=t,{toothRadius:c}=t,{holeRadius:d}=t,{angle:$=0}=t,{reverse:p=!1}=t,{angleOffsetDeg:g}=t,{markers:m=!0}=t,{xAxisColor:v="#da4343"}=t,{yAxisColor:y="#4fb54f"}=t;return e.$$set=e=>{"fill"in e&&n(0,r=e.fill),"teeth"in e&&n(10,o=e.teeth),"radius"in e&&n(1,u=e.radius),"x"in e&&n(11,i=e.x),"y"in e&&n(12,h=e.y),"annulus"in e&&n(2,f=e.annulus),"toothRadius"in e&&n(3,c=e.toothRadius),"holeRadius"in e&&n(4,d=e.holeRadius),"angle"in e&&n(13,$=e.angle),"reverse"in e&&n(14,p=e.reverse),"angleOffsetDeg"in e&&n(15,g=e.angleOffsetDeg),"markers"in e&&n(5,m=e.markers),"xAxisColor"in e&&n(6,v=e.xAxisColor),"yAxisColor"in e&&n(7,y=e.yAxisColor)},e.$$.update=()=>{16384&e.$$.dirty&&n(16,s=p?-1:1),112642&e.$$.dirty&&n(8,a=`\n    translate(${i},${h})\n    rotate(${(s*$/u+(null!=g?g:0))%360})\n  `),1054&e.$$.dirty&&n(9,l=function(e){const{teeth:t,radius:n,annulus:s,toothRadius:a,holeRadius:l}=e,r=t;let o=Math.abs(n),u=o-a,i=o+a,h=l;s&&(h=u,u=i,i=h,h=o+3*a);const f=Math.PI/r;let c=-Math.PI/2+(s?Math.PI/r:0);const d=["M",u*Math.cos(c),",",u*Math.sin(c)];let $=-1;for(;++$<r;)d.push("A",u,",",u," 0 0,1 ",u*Math.cos(c+=f),",",u*Math.sin(c),"L",o*Math.cos(c),",",o*Math.sin(c),"L",i*Math.cos(c+=f/3),",",i*Math.sin(c),"A",i,",",i," 0 0,1 ",i*Math.cos(c+=f/3),",",i*Math.sin(c),"L",o*Math.cos(c+=f/3),",",o*Math.sin(c),"L",u*Math.cos(c),",",u*Math.sin(c));return d.push("M0,",-h,"A",h,",",h," 0 0,0 0,",h,"A",h,",",h," 0 0,0 0,",-h,"Z"),d.join("")}({teeth:o,radius:u,annulus:null!=f&&f,toothRadius:c,holeRadius:d}))},[r,u,f,c,d,m,v,y,a,l,o,i,h,$,p,g,s]}class be extends h{constructor(e){super(),f(this,e,Me,we,c,{fill:0,teeth:10,radius:1,x:11,y:12,annulus:2,toothRadius:3,holeRadius:4,angle:13,reverse:14,angleOffsetDeg:15,markers:5,xAxisColor:6,yAxisColor:7})}}function Re(e,t,n,s){return 180*function(e,t,n,s){var a=Math.atan2(s-t,n-e);return a>0?a:2*Math.PI+a}(e,t,n,s)/Math.PI}function Ee(e,o){var u,i;const h=Re(e.x,e.y,o.x,o.y)-(o.annulus?180:0),f=360/e.teeth,c=360/o.teeth,d=c*(((h-(null!=(u=e.angleOffsetDeg)?u:0))%f/f+((o.annulus?0:180)+h-(null!=(i=o.angleOffsetDeg)?i:0))%c/c)%1);return $=((e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&r(e,n,t[n]);return e})({},o),t($,n({angleOffsetDeg:d}));var $}function Te(e,t,n){const s=e.slice();return s[32]=t[n],s}function Pe(e,t){let n,s,a;const l=[t[32],{toothRadius:t[1]},{holeRadius:t[5]},{angle:t[3]}];let r={};for(let o=0;o<l.length;o+=1)r=C(r,l[o]);return s=new be({props:r}),{key:e,first:null,c(){n=I(),H(s.$$.fragment),this.h()},l(e){n=I(),S(s.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){w(e,n,t),W(s,e,t),a=!0},p(e,n){t=e;const a=58&n[0]?V(l,[16&n[0]&&Y(t[32]),2&n[0]&&{toothRadius:t[1]},32&n[0]&&{holeRadius:t[5]},8&n[0]&&{angle:t[3]}]):{};s.$set(a)},i(e){a||(J(s.$$.fragment,e),a=!0)},o(e){K(s.$$.fragment,e),a=!1},d(e){e&&x(n),Q(s,e)}}}function Ae(e){let t,n,s,a,l,r,o=[],u=new Map,i=e[4];const h=e=>e[32];for(let f=0;f<i.length;f+=1){let t=Te(e,i,f),n=h(t);u.set(n,o[f]=Pe(n,t))}return{c(){t=X("svg"),n=X("g");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=g(e,"svg",{class:!0,xmlns:!0,viewBox:!0,stroke:!0,"stroke-width":!0},1);var s=m(t);n=g(s,"g",{transform:!0},1);var a=m(n);for(let t=0;t<o.length;t+=1)o[t].l(a);a.forEach(x),s.forEach(x),this.h()},h(){k(n,"transform",s=`rotate(${e[2]%360})`),k(t,"class","gears svelte-p4jt5b"),k(t,"xmlns","http://www.w3.org/2000/svg"),k(t,"viewBox",a=-e[0]/2+","+-e[0]/2+","+e[0]+","+e[0]),k(t,"stroke","black"),k(t,"stroke-width",l=e[0]/640)},m(e,s){w(e,t,s),M(t,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(e,f){58&f[0]&&(i=e[4],Z(),o=_(o,f,h,1,e,i,u,n,se,Pe,null,Te),ee()),(!r||4&f[0]&&s!==(s=`rotate(${e[2]%360})`))&&k(n,"transform",s),(!r||1&f[0]&&a!==(a=-e[0]/2+","+-e[0]/2+","+e[0]+","+e[0]))&&k(t,"viewBox",a),(!r||1&f[0]&&l!==(l=e[0]/640))&&k(t,"stroke-width",l)},i(e){if(!r){for(let e=0;e<i.length;e+=1)J(o[e]);r=!0}},o(e){for(let t=0;t<o.length;t+=1)K(o[t]);r=!1},d(e){e&&x(t);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Ie(e,t,n){let s,a,l,r,o,u,i,h,f,c,d,$,p,g,m,v,y,x;const{speed:k,holeRadius:w,toothRadius:M,modulus:b,numPlanets:R,annulusTeeth:E,planetTeeth:P,sunTeeth:A}=le();T(e,k,(e=>n(29,y=e))),T(e,w,(e=>n(5,x=e))),T(e,M,(e=>n(1,m=e))),T(e,b,(e=>n(15,d=e))),T(e,R,(e=>n(23,v=e))),T(e,E,(e=>n(16,$=e))),T(e,P,(e=>n(18,p=e))),T(e,A,(e=>n(20,g=e)));let I,O,j=0,C=0;function B(e){const t=y*(void 0===I?1:(e-I)/(1/60*1e3))*o/16;n(3,C+=t),n(2,j+=t/Infinity),I=e,O=requestAnimationFrame(B)}return te((()=>(O=requestAnimationFrame(B),()=>clearInterval(O)))),e.$$.update=()=>{98304&e.$$.dirty[0]&&n(14,s=d*$/2),294912&e.$$.dirty[0]&&n(17,a=d*p/2),1081344&e.$$.dirty[0]&&n(19,l=d*g/2),655360&e.$$.dirty[0]&&n(21,r=l+a),16386&e.$$.dirty[0]&&n(0,o=2*(s+3*m)*1.02),1&e.$$.dirty[0]&&console.log({frameWidth:o}),8388608&e.$$.dirty[0]&&n(22,u=ne([0,v],[0,2*Math.PI])),1572864&e.$$.dirty[0]&&n(24,i={fill:"#6baed6",teeth:g,radius:l,x:0,y:0,reverse:!0}),31850496&e.$$.dirty[0]&&n(25,h=D.exports.range(v).map((e=>{const t=u(e),[n,s]=function(e,t){return[Math.cos(e)*t,Math.sin(e)*t]}(t,r);return Ee(i,{fill:"#9ecae1",teeth:p,radius:a,x:n,y:s})}))),33636352&e.$$.dirty[0]&&n(26,f=Ee(h[0],{fill:"#c6dbef",teeth:$,radius:s,x:0,y:0,annulus:!0})),117440512&e.$$.dirty[0]&&n(4,c=[...h,f,i])},[o,m,j,C,c,x,k,w,M,b,R,E,P,A,s,d,$,a,p,l,g,r,u,v,i,h,f]}class Oe extends h{constructor(e){super(),f(this,e,Ie,Ae,c,{},[-1,-1])}}function je(e){let t,n,s,a,l;return n=new ve({}),a=new Oe({}),{c(){t=d("main"),H(n.$$.fragment),s=p(),H(a.$$.fragment),this.h()},l(e){t=g(e,"MAIN",{id:!0,class:!0});var l=m(t);S(n.$$.fragment,l),s=y(l),S(a.$$.fragment,l),l.forEach(x),this.h()},h(){k(t,"id","fooasdfasdf"),k(t,"class","svelte-1ktj29g")},m(e,r){w(e,t,r),W(n,t,null),M(t,s),W(a,t,null),l=!0},p:R,i(e){l||(J(n.$$.fragment,e),J(a.$$.fragment,e),l=!0)},o(e){K(n.$$.fragment,e),K(a.$$.fragment,e),l=!1},d(e){e&&x(t),Q(n),Q(a)}}}function De(e){var t;return t={speed:i(1),holeRadius:i(2),toothRadius:i(1),modulus:i(1.5),numPlanets:i(3),annulusTeeth:i(80),planetTeeth:i(32),sunTeeth:i(16)},o(ae,t),[]}new class extends h{constructor(e){super(),f(this,e,De,je,c,{})}}({target:document.getElementById("app")});