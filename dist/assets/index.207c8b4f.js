import{S as x,P as b,W as L,T as z,M as f,a as u,b as M,A as S,c as m,B as v,d as P,e as y,f as T}from"./vendor.45c174e8.js";const A=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}};A();const n=new x,c=new b(75,window.innerWidth/window.innerHeight,.1,1e3),w=new L({canvas:document.querySelector("#bg")});w.setPixelRatio(window.devicePixelRatio);w.setSize(window.innerWidth,window.innerHeight);c.position.setZ(30);const j=new z(10,3,16,100),k=new f({color:16737095}),i=new u(j,k);i.position.z=-70;n.add(i);const g=new M(16777215);g.position.set(5,5,5);const B=new S(16777215);n.add(g,B);function G(){const r=new y(.25,24,24),a=new f({color:16777215}),d=new u(r,a),[l,e,o]=Array(3).fill().map(()=>T.randFloatSpread(100));d.position.set(l,e,o),n.add(d)}Array(200).fill().forEach(G);const O=new m().load("space.jpg");n.background=O;const R=new m().load("utkarsh.jpg"),s=new u(new v(3,3,3),new P({map:R}));s.position.z=-6;s.position.x=2;n.add(s);const W=new m().load("moon.jpg"),q=new m().load("normal.jpg"),t=new u(new y(3,32,32),new f({map:W,normalMap:q}));n.add(t);t.position.z=20;t.position.setX(-10);function h(){const r=document.body.getBoundingClientRect().top;t.rotation.x+=.05,t.rotation.y+=.075,t.rotation.z+=.05,s.rotation.x+=.01,s.rotation.y+=.01,s.rotation.z+=.01,c.position.z=r*-.01,c.position.x=r*-2e-4,c.position.y=r*-2e-4}document.body.onscroll=h;h();function F(){requestAnimationFrame(F),i.rotation.x+=.01,i.rotation.y+=.005,i.rotation.z+=.005,i.position.z-=.1,t.rotation.x+=.005,w.render(n,c)}F();