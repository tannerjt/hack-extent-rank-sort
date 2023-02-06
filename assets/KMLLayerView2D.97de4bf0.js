var z=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var M=(i,t,e)=>t in i?z(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))E.call(t,e)&&M(i,e,t[e]);if(P)for(var e of P(t))W.call(t,e)&&M(i,e,t[e]);return i};import{av as F,di as _,ct as G,c as K,C as N,cI as D,bz as j,cw as B,r as b,t as H,dn as J,cx as L,b1 as U,dy as Q,dz as $,dA as O,dB as Y,aa as h,ab as d,ac as X}from"./vendor.4dd88096.js";import{b as V,g as Z,d as ii}from"./kmlUtils.e72ef3eb.js";import{v as ti}from"./Bitmap.e283ec4c.js";import{t as ei}from"./BitmapContainer.f6e0a6ee.js";import{f as si,u as ai}from"./LayerView.c7dfc767.js";import{i as v}from"./GraphicContainer.df805caf.js";import{r as f}from"./BaseGraphicContainer.06e90be8.js";import"./Container.9089f1b2.js";import"./enums.457e23f9.js";import"./Texture.5cc992b3.js";import"./WGLContainer.c9c15fea.js";import"./pixelUtils.1d93d897.js";import"./VertexArrayObject.3d1072dc.js";import"./VertexElementDescriptor.0406f2d4.js";import"./enums.84480fc7.js";import"./Utils.9fa24473.js";import"./ProgramTemplate.315ac4f9.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.e967c454.js";import"./earcut.91e104de.js";import"./CIMSymbolHelper.1b9868e3.js";import"./BidiEngine.b9926823.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.1f2e9c45.js";import"./json.da51edc4.js";import"./FeatureContainer.5ec8e69e.js";import"./TileContainer.0e27a280.js";import"./visualVariablesUtils.77e2c643.js";import"./visualVariablesUtils.985ba3a7.js";import"./Matcher.ad38a2a9.js";import"./tileUtils.3b62fb45.js";import"./TileClipper.78e3d1a7.js";import"./Geometry.e891c191.js";import"./ExpandedCIM.dbb41408.js";import"./quantizationUtils.cd7a121d.js";import"./devEnvironmentUtils.f51567b1.js";import"./schemaUtils.9eb3ba39.js";import"./createSymbolSchema.f2b5884a.js";import"./MD5.67d7a872.js";import"./util.972ab664.js";import"./ComputedAttributeStorage.caf3da01.js";import"./vec3f32.8179e08f.js";class A{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let r=class extends si(ai){constructor(){super(...arguments),this._handles=new F,this._bitmapIndex=new Map,this._mapImageContainer=new ei,this._kmlVisualData=new A,this.allVisiblePoints=new _,this.allVisiblePolylines=new _,this.allVisiblePolygons=new _,this.allVisibleMapImages=new G}async hitTest(i,t){var e,l,s;return(await Promise.all([(e=this._pointsView)==null?void 0:e.hitTest(i),(l=this._polylinesView)==null?void 0:l.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)])).flat().filter(a=>!!a&&(a.layer=this.layer,a.sourceLayer=this.layer,!0))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new f({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new f({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new f({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),K(()=>this.layer.visibleSublayers,i=>{for(const[t,e]of this._kmlVisualData.allSublayers)e.visibility=0;for(const t of i){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))}detach(){this._fetchController.abort(),this._fetchController=null,this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&N(i.href,{responseType:"image"}).then(({data:t})=>{let e=D.fromJSON(i.extent);j(e,this.view.spatialReference)&&(e=B(e,this.view.spatialReference));const l=new ti(t,"standard");l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t.naturalWidth,l.rotation=i.rotation,this._mapImageContainer.addChild(l),this._bitmapIndex.set(i,l)})}async _getViewDependentUrl(i,t){const{viewFormat:e,viewBoundScale:l,httpQuery:s}=i;if(b(e)){if(H(t))throw new Error("Loading this network link requires a view state.");let a;if(await J(),b(l)&&l!==1){const n=new D(t.extent);n.expand(l),a=n}else a=t.extent;a=L(a,U.WGS84);const p=L(a,U.WebMercator),c=a.xmin,y=a.xmax,o=a.ymin,T=a.ymax,q=t.size[0]*t.pixelRatio,R=t.size[1]*t.pixelRatio,S=Math.max(p.width,p.height),I={"[bboxWest]":c.toString(),"[bboxEast]":y.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":T.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":q.toString(),"[vertPixels]":R.toString(),"[terrainEnabled]":"0","[clientVersion]":Q,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=n=>{for(const C in n)for(const k in I)n[C]=n[C].replace(k,I[k])},w=$(e);x(w);let g={};b(s)&&(g=$(s),x(g));const u=O(i.href);return u.query=m(m(m({},u.query),w),g),`${u.path}?${Y(w)}`}return i.href}async _fetchService(i){const t=new A;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!t.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,e){return this._fetchParsedKML(i,e).then(async l=>{for(const s of l.sublayers){t.allSublayers.set(s.id,s);const a=s.points?await V(s.points):[],p=s.polylines?await V(s.polylines):[],c=s.polygons?await V(s.polygons):[],y=s.mapImages||[];if(t.allPoints.push(...a.map(o=>({item:o,sublayerId:s.id}))),t.allPolylines.push(...p.map(o=>({item:o,sublayerId:s.id}))),t.allPolygons.push(...c.map(o=>({item:o,sublayerId:s.id}))),t.allMapImages.push(...y.map(o=>({item:o,sublayerId:s.id}))),s.networkLink){const o=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(o,t,e)}}})}_fetchParsedKML(i,t){return Z(i,this.view.spatialReference,this.layer.refreshInterval,t).then(e=>ii(e.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};h([d()],r.prototype,"_pointsView",void 0),h([d()],r.prototype,"_polylinesView",void 0),h([d()],r.prototype,"_polygonsView",void 0),h([d()],r.prototype,"updating",void 0),r=h([X("esri.views.2d.layers.KMLLayerView2D")],r);const Oi=r;export{Oi as default};
