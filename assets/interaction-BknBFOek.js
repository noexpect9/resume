const __vite__fileDeps=["assets/Linker-C0IR0hBm.js","assets/Ranges-aMKKmzpG.js","assets/index-BCivS8xf.js","assets/index-YjRqzu1h.css","assets/index-DjLfjCOd.js","assets/OptionsColor-Djq7LXET.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BCivS8xf.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-C0IR0hBm.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};