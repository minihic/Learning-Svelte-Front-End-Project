import{r as le,s as pe,n as ne}from"../chunks/scheduler.e2379a4d.js";import{d as me,S as _e,i as be,g as k,s as j,m as G,h as T,j as z,y as q,c as D,f as B,n as J,k as g,a as oe,x as o,A as Q,z as P,o as ie,r as ve,u as ge,v as ke,t as Te,w as we}from"../chunks/index.bb3f1e23.js";function de(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ye(n,e){n.d(1),e.delete(n.key)}function xe(n,e,t,l,M,m,c,a,h,w,I,H){let f=n.length,L=m.length,y=f;const i={};for(;y--;)i[n[y].key]=y;const d=[],A=new Map,E=new Map,O=[];for(y=L;y--;){const p=H(M,m,y),x=t(p);let b=c.get(x);b?l&&O.push(()=>b.p(p,e)):(b=w(x,p),b.c()),A.set(x,d[y]=b),x in i&&E.set(x,Math.abs(y-i[x]))}const r=new Set,_=new Set;function v(p){me(p,1),p.m(a,I),c.set(p.key,p),I=p.first,L--}for(;f&&L;){const p=d[L-1],x=n[f-1],b=p.key,N=x.key;p===x?(I=p.first,f--,L--):A.has(N)?!c.has(b)||r.has(b)?v(p):_.has(N)?f--:E.get(b)>E.get(N)?(_.add(b),v(p)):(r.add(N),f--):(h(x,c),f--)}for(;f--;){const p=n[f];A.has(p.key)||h(p,c)}for(;L;)v(d[L-1]);return le(O),d}function ue(n,e,t){const l=n.slice();return l[7]=e[t],l[18]=e,l[19]=t,l}function fe(n){let e;return{c(){e=G("Nothing left to do!")},l(t){e=J(t,"Nothing left to do!")},m(t,l){oe(t,e,l)},d(t){t&&B(e)}}}function he(n,e){let t,l,M,m,c,a,h,w="Delete",I,H;function f(){return e[11](e[7],e[18],e[19])}function L(){e[12].call(c,e[18],e[19])}function y(){return e[13](e[7])}return{key:n,first:null,c(){t=k("li"),l=k("input"),m=j(),c=k("input"),a=j(),h=k("button"),h.textContent=w,this.h()},l(i){t=T(i,"LI",{class:!0});var d=z(t);l=T(d,"INPUT",{class:!0,type:!0}),m=D(d),c=T(d,"INPUT",{type:!0}),a=D(d),h=T(d,"BUTTON",{class:!0,["data-svelte-h"]:!0}),q(h)!=="svelte-1ds7r4d"&&(h.textContent=w),d.forEach(B),this.h()},h(){g(l,"class","border border-slate-400"),g(l,"type","checkbox"),l.checked=M=e[7].completed,g(c,"type","text"),g(h,"class","p-1 px-3 m-1 rounded border border-stone-400 font-mono"),g(t,"class","p-1"),this.first=t},m(i,d){oe(i,t,d),o(t,l),o(t,m),o(t,c),Q(c,e[7].name),o(t,a),o(t,h),I||(H=[P(l,"click",f),P(c,"input",L),P(h,"click",y)],I=!0)},p(i,d){e=i,d&1&&M!==(M=e[7].completed)&&(l.checked=M),d&1&&c.value!==e[7].name&&Q(c,e[7].name)},d(i){i&&B(t),I=!1,le(H)}}}function Ce(n){let e,t,l="Your List",M,m,c,a="<span>All</span>",h,w,I="<span>Active</span>",H,f,L="<span>Completed</span>",y,i,d,A,E,O,r,_,v=[],p=new Map,x,b,N,W,S,se="Add",X,Z,$,V,ce='<button class="p-1 px-3 m-1 rounded border border-stone-400 font-mono">Check all</button> <button class="p-1 px-3 m-1 rounded border border-stone-400 font-mono">Remove completed</button>',ee,re,R=de(n[0]);const ae=u=>u[7].id;for(let u=0;u<R.length;u+=1){let s=ue(n,R,u),U=ae(s);p.set(U,v[u]=he(U,s))}let C=null;return R.length||(C=fe()),{c(){e=k("div"),t=k("h1"),t.textContent=l,M=j(),m=k("div"),c=k("button"),c.innerHTML=a,h=j(),w=k("button"),w.innerHTML=I,H=j(),f=k("button"),f.innerHTML=L,y=j(),i=k("h1"),d=G(n[4]),A=G(" out of "),E=G(n[2]),O=G(" items completed"),r=j(),_=k("ul");for(let u=0;u<v.length;u+=1)v[u].c();C&&C.c(),x=j(),b=k("div"),N=k("input"),W=j(),S=k("button"),S.textContent=se,X=j(),Z=k("hr"),$=j(),V=k("div"),V.innerHTML=ce,this.h()},l(u){e=T(u,"DIV",{class:!0});var s=z(e);t=T(s,"H1",{class:!0,["data-svelte-h"]:!0}),q(t)!=="svelte-i9s9h3"&&(t.textContent=l),M=D(s),m=T(s,"DIV",{class:!0});var U=z(m);c=T(U,"BUTTON",{class:!0,["data-svelte-h"]:!0}),q(c)!=="svelte-1x82h2j"&&(c.innerHTML=a),h=D(U),w=T(U,"BUTTON",{class:!0,["data-svelte-h"]:!0}),q(w)!=="svelte-5qmte5"&&(w.innerHTML=I),H=D(U),f=T(U,"BUTTON",{class:!0,["data-svelte-h"]:!0}),q(f)!=="svelte-1u8hxof"&&(f.innerHTML=L),U.forEach(B),y=D(s),i=T(s,"H1",{class:!0});var Y=z(i);d=J(Y,n[4]),A=J(Y," out of "),E=J(Y,n[2]),O=J(Y," items completed"),Y.forEach(B),r=D(s),_=T(s,"UL",{});var F=z(_);for(let te=0;te<v.length;te+=1)v[te].l(F);C&&C.l(F),x=D(F),b=T(F,"DIV",{class:!0});var K=z(b);N=T(K,"INPUT",{class:!0,type:!0,placeholder:!0}),W=D(K),S=T(K,"BUTTON",{class:!0,["data-svelte-h"]:!0}),q(S)!=="svelte-1he1ebe"&&(S.textContent=se),K.forEach(B),F.forEach(B),X=D(s),Z=T(s,"HR",{}),$=D(s),V=T(s,"DIV",{class:!0,["data-svelte-h"]:!0}),q(V)!=="svelte-lhlwn6"&&(V.innerHTML=ce),s.forEach(B),this.h()},h(){g(t,"class","flex p-1 text-lg font-bold justify-center"),g(c,"class","p-1 px-3 m-1 rounded border border-stone-400 font-mono"),g(w,"class","p-1 px-3 m-1 rounded border border-stone-400 font-mono"),g(f,"class","p-1 px-3 m-1 rounded border border-stone-400 font-mono"),g(m,"class","flex py-3 flex-row justify-between"),g(i,"class","flex p-2 text-lg justify-center"),g(N,"class","border"),g(N,"type","text"),g(N,"placeholder","New Todo"),g(S,"class","p-1 px-3 m-1 rounded border border-stone-400 font-mono"),g(b,"class","flex mx-4 justify-center"),g(V,"class","flex py-3 flex-row justify-between"),g(e,"class","flex flex-col")},m(u,s){oe(u,e,s),o(e,t),o(e,M),o(e,m),o(m,c),o(m,h),o(m,w),o(m,H),o(m,f),o(e,y),o(e,i),o(i,d),o(i,A),o(i,E),o(i,O),o(e,r),o(e,_);for(let U=0;U<v.length;U+=1)v[U]&&v[U].m(_,null);C&&C.m(_,null),o(_,x),o(_,b),o(b,N),Q(N,n[3]),o(b,W),o(b,S),o(e,X),o(e,Z),o(e,$),o(e,V),ee||(re=[P(c,"click",n[8]),P(w,"click",n[9]),P(f,"click",n[10]),P(N,"input",n[14]),P(S,"click",n[15])],ee=!0)},p(u,[s]){s&16&&ie(d,u[4]),s&4&&ie(E,u[2]),s&65&&(R=de(u[0]),v=xe(v,s,ae,1,u,R,p,_,ye,he,x,ue),R.length?C&&(C.d(1),C=null):C||(C=fe(),C.c(),C.m(_,x))),s&8&&N.value!==u[3]&&Q(N,u[3])},i:ne,o:ne,d(u){u&&B(e);for(let s=0;s<v.length;s+=1)v[s].d();C&&C.d(),ee=!1,le(re)}}}function Me(n,e,t){let l,M,m,c,{todos:a}=e,h="";function w(){t(0,a=[...a,{id:m,name:h,completed:!1}]),console.log(a),t(3,h="")}function I(r){t(0,a=a.filter(_=>_.id!==r.id))}let H;const f=()=>t(1,H="all"),L=()=>t(1,H="not completed"),y=()=>t(1,H="completed"),i=(r,_,v)=>t(0,_[v].completed=!r.completed,a);function d(r,_){r[_].name=this.value,t(0,a)}const A=r=>I(r);function E(){h=this.value,t(3,h)}const O=()=>w();return n.$$set=r=>{"todos"in r&&t(0,a=r.todos)},n.$$.update=()=>{if(n.$$.dirty&1&&t(2,l=a.length),n.$$.dirty&1&&t(4,M=a.filter(r=>r.completed).length),n.$$.dirty&5&&(m=l===0?0:Math.max(...a.map(r=>r.id))+1),n.$$.dirty&3)switch(H){case"all":break;case"completed":a.filter(r=>r.completed);break;case"not completed":a.filter(r=>!r.completed);break}},[a,H,l,h,M,w,I,c,f,L,y,i,d,A,E,O]}class Ne extends _e{constructor(e){super(),be(this,e,Me,Ce,pe,{todos:0})}}function He(n){let e,t;return e=new Ne({props:{todos:n[0]}}),{c(){ve(e.$$.fragment)},l(l){ge(e.$$.fragment,l)},m(l,M){ke(e,l,M),t=!0},p:ne,i(l){t||(me(e.$$.fragment,l),t=!0)},o(l){Te(e.$$.fragment,l),t=!1},d(l){we(e,l)}}}function Le(n){return[[{id:0,name:"change me",completed:!1}]]}class je extends _e{constructor(e){super(),be(this,e,Le,He,pe,{})}}export{je as component};
