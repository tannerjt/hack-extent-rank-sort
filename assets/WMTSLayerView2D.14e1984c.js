var v=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))M.call(t,i)&&d(e,i,t[i]);if(f)for(var i of f(t))x.call(t,i)&&d(e,i,t[i]);return e},y=(e,t)=>T(e,V(t));import{s as b,cE as q,cF as R,cG as Q,bB as _,E as h,by as w,aa as n,ab as g,ac as L}from"./vendor.4dd88096.js";import{r as k,n as I}from"./imageUtils.89a5421f.js";import{f as U,u as C}from"./LayerView.c7dfc767.js";import{i as E}from"./RefreshableLayerView.b3a54364.js";import"./BitmapTileContainer.258f79c5.js";import"./Bitmap.e283ec4c.js";import"./Container.9089f1b2.js";import"./enums.457e23f9.js";import"./Texture.5cc992b3.js";import"./TileContainer.0e27a280.js";import"./Utils.9fa24473.js";import"./enums.84480fc7.js";import"./VertexElementDescriptor.0406f2d4.js";import"./WGLContainer.c9c15fea.js";import"./pixelUtils.1d93d897.js";import"./VertexArrayObject.3d1072dc.js";import"./ProgramTemplate.315ac4f9.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.e967c454.js";import"./earcut.91e104de.js";const z=[102113,102100,3857,3785,900913],B=[0,0],F=b.getLogger("esri.views.2d.layers.WMTSLayerView2D");let r=class extends E(k(U(C))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new q(e),this._fetchQueue=new R({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new Q({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(B,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e,t;return(e=(t=this._fetchQueue)==null?void 0:t.updating)!=null&&e}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!i)return this._fetchImage(e,s);const a=new _(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),u=await this._fetchImage(a,s)}catch(l){if(h(l))throw l;if(o<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new _(c),S=await this.fetchTile(p,y(m({},t),{resamplingLevel:o+1}));return I(this._tileInfoView,S,p,e)}}throw l}return I(this._tileInfoView,u,a,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some(t=>w(t.tileInfo.spatialReference,e))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){h(t)||F.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{h(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>w(s.tileInfo.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>z.includes(s.tileInfo.spatialReference.wkid))),i}};n([g()],r.prototype,"_fetchQueue",void 0),n([g({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=n([L("esri.views.2d.layers.WMTSLayerView2D")],r);const ne=r;export{ne as default};