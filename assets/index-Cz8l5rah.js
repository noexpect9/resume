const __vite__fileDeps=["assets/PolygonDrawer-DOQ_Npim.js","assets/PolygonDrawerBase-CJ5P7nKT.js","assets/index-DDVNaicV.js","assets/index-CPt53dxs.css","assets/TriangleDrawer-CYXr_ewP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-DDVNaicV.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DOQ_Npim.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CYXr_ewP.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};