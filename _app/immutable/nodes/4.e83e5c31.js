import{s as p,n as i,o as v,h as $,b as y}from"../chunks/scheduler.0d08e30d.js";import{S as m,i as u,g as f,h as d,j as _,f as l,k as c,a as h,r as b,u as w,v as L,d as x,t as E,w as D}from"../chunks/index.652a71a2.js";import{_ as M}from"../chunks/preload-helper.41c905a7.js";function P(s){let t;return{c(){t=f("div"),this.h()},l(e){t=d(e,"DIV",{id:!0,class:!0}),_(t).forEach(l),this.h()},h(){c(t,"id","map"),c(t,"class","svelte-1n94v34")},m(e,a){h(e,t,a),s[1](t)},p:i,i,o:i,d(e){e&&l(t),s[1](null)}}}function V(s,t,e){let a,n;v(async()=>{{const r=await M(()=>import("../chunks/leaflet-src.e35a4304.js").then(g=>g.l),[],import.meta.url);a=r.map(n).setView([49.787096845994895,6.131346063299729],10),r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),r.marker([49.61165613164213,6.13193403682879]).addTo(a).bindPopup("<Button>Luxembourg<Button/>")}}),$(async()=>{a&&(console.log("Unloading Leaflet map."),a.remove())});function o(r){y[r?"unshift":"push"](()=>{n=r,e(0,n)})}return[n,o]}class k extends m{constructor(t){super(),u(this,t,V,P,p,{})}}function I(s){let t,e,a;return e=new k({}),{c(){t=f("div"),b(e.$$.fragment),this.h()},l(n){t=d(n,"DIV",{class:!0});var o=_(t);w(e.$$.fragment,o),o.forEach(l),this.h()},h(){c(t,"class","w-full")},m(n,o){h(n,t,o),L(e,t,null),a=!0},p:i,i(n){a||(x(e.$$.fragment,n),a=!0)},o(n){E(e.$$.fragment,n),a=!1},d(n){n&&l(t),D(e)}}}class O extends m{constructor(t){super(),u(this,t,null,I,p,{})}}export{O as component};
