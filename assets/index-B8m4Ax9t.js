const __vite__fileDeps=["assets/ColorUpdater-DCjbk74t.js","assets/index-IW9lEw6S.js","assets/index-yNmlZaVu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-IW9lEw6S.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DCjbk74t.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
