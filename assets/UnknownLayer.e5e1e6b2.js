import{e2 as i,e3 as l,e7 as y,ka as p,q as u,aa as o,ab as a,ac as d}from"./vendor.4dd88096.js";let e=class extends i(l(y)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,s)=>{p(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unknown layer type";n&&(t+=" "+n),s(new u("layer:unknown-layer-type",t,{layerType:n}))})}))}read(r,s){super.read({resourceInfo:r},s)}write(){return null}};o([a({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([a({type:["show","hide"]})],e.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([d("esri.layers.UnknownLayer")],e);const w=e;export{w as default};