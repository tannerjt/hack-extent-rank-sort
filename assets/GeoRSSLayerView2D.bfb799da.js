import{W as p,d8 as c,ct as g,dd as w,de as d,df as m,aa as f,ac as u}from"./vendor.4dd88096.js";import{f as V,u as b}from"./LayerView.c7dfc767.js";import{i as S}from"./GraphicContainer.df805caf.js";import{r as v}from"./BaseGraphicContainer.06e90be8.js";import"./Container.9089f1b2.js";import"./Utils.9fa24473.js";import"./enums.84480fc7.js";import"./enums.457e23f9.js";import"./Texture.5cc992b3.js";import"./VertexElementDescriptor.0406f2d4.js";import"./CIMSymbolHelper.1b9868e3.js";import"./BidiEngine.b9926823.js";import"./MaterialKey.e967c454.js";import"./GeometryUtils.e53da643.js";import"./projectionSupport.1f2e9c45.js";import"./json.da51edc4.js";import"./VertexArrayObject.3d1072dc.js";import"./FeatureContainer.5ec8e69e.js";import"./TileContainer.0e27a280.js";import"./WGLContainer.c9c15fea.js";import"./pixelUtils.1d93d897.js";import"./ProgramTemplate.315ac4f9.js";import"./StyleDefinition.809d5a5e.js";import"./config.bd364997.js";import"./GeometryUtils.5ea26345.js";import"./earcut.91e104de.js";import"./visualVariablesUtils.77e2c643.js";import"./visualVariablesUtils.985ba3a7.js";import"./Matcher.ad38a2a9.js";import"./tileUtils.3b62fb45.js";import"./TileClipper.78e3d1a7.js";import"./Geometry.e891c191.js";import"./ExpandedCIM.dbb41408.js";import"./quantizationUtils.cd7a121d.js";import"./devEnvironmentUtils.f51567b1.js";import"./schemaUtils.9eb3ba39.js";import"./createSymbolSchema.f2b5884a.js";import"./MD5.67d7a872.js";import"./util.972ab664.js";import"./ComputedAttributeStorage.caf3da01.js";import"./vec3f32.8179e08f.js";let l=class extends V(b){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,t)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:r,featureSet:a,layerDefinition:i}of e){const t=c.fromJSON(a),h=new g(t.features),n=i.drawingInfo,y=r?w.fromJSON(r):null,o=d(n.renderer),s=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:o,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=s,this._popupTemplates.set(s,y),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=o.symbol):this.layer.lineSymbol=o.symbol:this.layer.polygonSymbol=o.symbol,this.graphicsViews.push(s),this.container.addChild(s.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new m({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};l=f([u("esri.views.2d.layers.GeoRSSLayerView2D")],l);const he=l;export{he as default};
