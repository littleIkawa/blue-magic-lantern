import{H as s,_ as n}from"./control-b6da2371.js";import{A as m}from"./index-feb84583.js";const a=(e,r)=>{const t=e[r];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+r)))})};function c(e,r){return new s(e,r)}const u=async({params:{slug:e}})=>{try{await a(Object.assign({"../contents/first-message.md":()=>n(()=>import("./first-message-05705a0c.js"),["./first-message-05705a0c.js","./index-09579bae.js"],import.meta.url)}),`../contents/${e}.md`)}catch{throw c(404,"the page not found")}const r=await a(Object.assign({"../contents/first-message.md":()=>n(()=>import("./first-message-05705a0c.js"),["./first-message-05705a0c.js","./index-09579bae.js"],import.meta.url)}),`../contents/${e}.md`),t=r.metadata;return{post:{attr:new m(e,t.title,t.description,t.thumbnail,new Date(t.date),t.tags),body:r.default}}},d=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));export{d as _,u as l};