var g=Object.defineProperty,f=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var m=(e,s,r)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,c=(e,s)=>{for(var r in s||(s={}))v.call(s,r)&&m(e,r,s[r]);if(h)for(var r of h(s))D.call(s,r)&&m(e,r,s[r]);return e},u=(e,s)=>f(e,S(s));import{a7 as L,a8 as x,dJ as p,r as O,dK as E,aa as i,ab as n,cT as P,ac as N}from"./vendor.4dd88096.js";import{n as J}from"./sublayerUtils.fcecddac.js";const I={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends L(x){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const r=p(this.floors,s);return s.toExportImageJSON(r)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&J(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(I[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var e;const s=!((e=this.floors)==null||!e.length),r=this.visibleSublayers.filter(l=>l.definitionExpression!=null||s&&l.floorInfo!=null);return r.length?JSON.stringify(r.reduce((l,a)=>{const o=p(this.floors,a),y=O(o)?E(o,a):a.definitionExpression;return l[a.id]=y,l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=a=>{const o=this.scale,y=o===0,b=a.minScale===0||o<=a.minScale,d=a.maxScale===0||o>=a.maxScale;a.visible&&(y||b&&d)&&(a.sublayers?a.sublayers.forEach(r):e.unshift(a))};s&&s.forEach(r);const l=this._get("visibleSublayers");return!l||l.length!==e.length||l.some((a,o)=>e[o]!==a)?e:l}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s=u(c({},s),{layers:this.layers,layerDefs:this.layerDefs}),s}};i([n({readOnly:!0})],t.prototype,"dynamicLayers",null),i([n()],t.prototype,"floors",void 0),i([n({readOnly:!0})],t.prototype,"hasDynamicLayers",null),i([n()],t.prototype,"layer",null),i([n({readOnly:!0})],t.prototype,"layers",null),i([n({readOnly:!0})],t.prototype,"layerDefs",null),i([n({type:Number})],t.prototype,"scale",void 0),i([n(P)],t.prototype,"timeExtent",void 0),i([n({readOnly:!0})],t.prototype,"version",null),i([n({readOnly:!0})],t.prototype,"visibleSublayers",null),t=i([N("esri.layers.mixins.ExportImageParameters")],t);export{t as c};
