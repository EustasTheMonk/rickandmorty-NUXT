import{B as e,aw as a,v as n}from"./BwgG7AAf.js";const r=[null,"default","comfortable","compact"],d=e({density:{type:String,default:"default",validator:t=>r.includes(t)}},"density");function u(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a();return{densityClasses:n(()=>`${s}--density-${t.density}`)}}const l=e({tag:{type:String,default:"div"}},"tag");export{l as a,d as m,u};