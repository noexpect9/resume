const __vite__fileDeps=["assets/LifeUpdater-062NlVGW.js","assets/ValueWithRandom-hZ8kbYlj.js","assets/index-IW9lEw6S.js","assets/index-yNmlZaVu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-IW9lEw6S.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-062NlVGW.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
