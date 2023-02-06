import{ay as R,bB as w,aa as d,ab as l,ac as _,a8 as z,d7 as P,az as W,cI as S,dc as b,cE as E}from"./vendor.4dd88096.js";import{v as $}from"./Bitmap.e283ec4c.js";const H=Math.PI/180;function N(e){return e*H}function q(e,i){const h=N(i.rotation),t=Math.abs(Math.cos(h)),a=Math.abs(Math.sin(h)),[o,s]=i.size;return e[0]=Math.round(s*a+o*t),e[1]=Math.round(s*t+o*a),e}function I(e,i,h,t){const[a,o]=i,[s,r]=t,u=.5*h;return e[0]=a-u*s,e[1]=o-u*r,e[2]=a+u*s,e[3]=o+u*r,e}const c=R(),g=[0,0],v=new w(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let p=class extends z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=P(async(i,h)=>{if(!i.stationary||this.destroyed)return null;const t=i.state,a=W(t.spatialReference),o=this.hidpi?i.pixelRatio:1,s=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0];s?(g[0]=t.worldScreenWidth,g[1]=t.size[1]):this.imageRotationSupported?(g[0]=t.size[0],g[1]=t.size[1]):q(g,t);const r=Math.floor(g[0]*o)>this.imageMaxWidth||Math.floor(g[1]*o)>this.imageMaxHeight,u=a&&(t.extent.xmin<a.valid[0]||t.extent.xmax>a.valid[1]),f=!this.imageNormalizationSupported&&u,M=!r&&!f,y=this.imageRotationSupported?t.rotation:0;if(M){const n=s?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,g,n,t.resolution,y,o,h)}else{let n=Math.min(this.imageMaxWidth,this.imageMaxHeight);f&&(n=Math.min(t.worldScreenWidth,n)),this._imagePromise=this._tiledExport(t,n,y,o,h)}return this._imagePromise.then(async n=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=n!=null?n:[];for(const m of this.container.children)n.includes(m)||m.fadeOut().then(()=>{m.remove()});for(const m of n)this.container.addChild(m),m.fadeIn()}}).catch(n=>{throw this._imagePromise=null,n})},5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}updateExports(e){for(const i of this.container.children){if(!i.visible||!i.stage)return;e(i),i.invalidateTexture(),i.requestRender()}}async _export(e,i,h,t,a,o){const s=await this.fetchSource(e,Math.floor(i*a),Math.floor(h*a),{rotation:t,pixelRatio:a,signal:o}),r=new $(s,"additive");return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/i,r.rotation=t,r.pixelRatio=a,r}async _singleExport(e,i,h,t,a,o,s){I(c,h,t,i);const r=new S(c[0],c[1],c[2],c[3],e.spatialReference);return[await this._export(r,i[0],i[1],a,o,s)]}_tiledExport(e,i,h,t,a){const o=b.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),s=new E(o),r=s.getTileCoverage(e);if(!r)return null;const u=[];return r.forEach((f,M,y,n)=>{v.set(f,M,y,n),s.getTileBounds(c,v);const m=new S(c[0],c[1],c[2],c[3],e.spatialReference);u.push(this._export(m,i,i,h,t,a))}),Promise.all(u)}};d([l()],p.prototype,"_imagePromise",void 0),d([l()],p.prototype,"bitmaps",void 0),d([l()],p.prototype,"container",void 0),d([l()],p.prototype,"fetchSource",void 0),d([l()],p.prototype,"hidpi",void 0),d([l()],p.prototype,"imageMaxWidth",void 0),d([l()],p.prototype,"imageMaxHeight",void 0),d([l()],p.prototype,"imageRotationSupported",void 0),d([l()],p.prototype,"imageNormalizationSupported",void 0),d([l()],p.prototype,"requestUpdate",void 0),d([l()],p.prototype,"updating",null),p=d([_("esri.views.2d.layers.support.ExportStrategy")],p);const B=p;export{B as S};