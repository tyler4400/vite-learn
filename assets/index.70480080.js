import{d as e,u as t,c as o,a,F as n,w as s,p as r,b as d,r as c,o as l,t as i,e as u,f as p,g as m,h,i as g}from"./vendor.c23da2fc.js";var v=e({setup(){const e=t();return{goto:t=>{e.push(t)}}}});const _=s();r("data-v-7c771f16");const f={class:"container"},L=a("br",null,null,-1),P=a("a",{href:"https://tyler4400.github.io/vite-learn/"},"github pages",-1),b=a("a",{class:"mr10",href:"https://helloworld-7gdt5hd730eba3c7-1302238818.tcloudbaseapp.com/dist/"},"Tencent Cloudbase",-1),y=a("a",{class:"mr10",href:"https://vite-learn.tyler4400.com/Home"},"Tencent CloudServer",-1);d();const k=_(((e,t,s,r,d,i)=>{const u=c("router-view"),p=c("router-link");return l(),o(n,null,[a(u),a("div",f,[a("button",{onClick:t[1]||(t[1]=t=>e.goto("/home"))},"home"),a("button",{onClick:t[2]||(t[2]=t=>e.goto("/AnotherPage"))},"AnotherPage"),a("button",{onClick:t[3]||(t[3]=t=>e.goto("/LazyLoadPage"))},"LazyLoadPage"),a(p,{to:"/not-foundddddddd/dddd",custom:""},{default:_((({navigate:e})=>[a("span",{onClick:e},"NotFound",8,["onClick"])])),_:1}),L,P,b,y])],64)}));let A;v.render=k,v.__scopeId="data-v-7c771f16";const C={},E=function(e,t){if(!t)return e();if(void 0===A){const e=document.createElement("link").relList;A=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in C)return;C[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":A,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const w=e({name:"Home",setup:()=>({title:"vite demo(production)"})}),z=s()(((e,t,a,n,s,r)=>(l(),o("p",{class:e.$style["big-text"]},"hello, this is a template project.-- "+i(e.title),3))));(w.__cssModules={}).$style={"big-text":"_big-text_ti7bo_2"},w.render=z,w.__scopeId="data-v-13dec55c";const H=new Promise((e=>{setTimeout((()=>{console.log("接口返回了"),e("返回成功")}),3e3)}));var I=e({name:"AnotherPage",setup(){const e=u(!1),t=u(null),o=u("");return{isLoading:e,error:t,data:o,getUsers:async()=>{e.value=!0,o.value=await H,e.value=!1,console.log("data",o.value),console.log("isLoading",e.value)}}}});const T=s();r("data-v-ed225c1c");const j=a("p",{class:"AnotherPage"},"AnotherPage",-1);d();const $=T(((e,t,s,r,d,c)=>(l(),o(n,null,[j,a("div",null,[a("button",{onClick:t[1]||(t[1]=(...t)=>e.getUsers&&e.getUsers(...t))},"请求数据"),p(" "+i(e.isLoading)+" "+i(e.data),1)])],64))));I.render=$,I.__scopeId="data-v-ed225c1c";const x=[{path:"/",name:"/",redirect:"/Home"},{path:"/Home",name:"Home",component:w},{path:"/AnotherPage",name:"AnotherPage",component:I},{path:"/LazyLoadPage",name:"LazyLoadPage",component:()=>E((()=>import("./LazyLoadPage.1e5758dd.js")),["./assets/LazyLoadPage.1e5758dd.js","./assets/LazyLoadPage.92fb6598.css","./assets/vendor.c23da2fc.js"])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>E((()=>import("./NotFound.c9d969d8.js")),["./assets/NotFound.c9d969d8.js","./assets/LazyLoadPage.92fb6598.css","./assets/vendor.c23da2fc.js"])}],F=m({history:h(),routes:x});const O=g(v);O.use(F),console.log("app.config",O.config),O.mount("#app");
