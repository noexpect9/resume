const __vite__fileDeps=["assets/LifeUpdater-CNNZhk0N.js","assets/ValueWithRandom-Ba2xhHhS.js","assets/index-BCivS8xf.js","assets/index-YjRqzu1h.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BCivS8xf.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CNNZhk0N.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};