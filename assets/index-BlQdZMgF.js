const __vite__fileDeps=["assets/Remover-C_fhVY4Q.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-BCivS8xf.js","assets/index-YjRqzu1h.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as o,_ as r}from"./index-BCivS8xf.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-C_fhVY4Q.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
