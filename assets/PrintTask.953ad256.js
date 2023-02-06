var Je=Object.defineProperty,je=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var pe=(e,a,t)=>a in e?Je(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))Ee.call(a,t)&&pe(e,t,a[t]);if(ce)for(var t of ce(a))Fe.call(a,t)&&pe(e,t,a[t]);return e},J=(e,a)=>je(e,Ne(a));import{aa as p,ab as y,b1 as ye,cI as Ie,ac as O,ec as Re,a8 as Me,cp as C,cn as N,ee as ke,ef as de,d8 as se,dT as Ae,dA as R,C as F,B as Ce,D as fe,eg as Ue,bm as E,eh as _e,ei as qe,ej as ze,r as z,ek as K,c$ as Be,d as Ke,el as We,cZ as Ze,ae as Qe,em as Ye,en as He,I as me,dD as Xe,K as Z,q as et,dU as tt}from"./vendor.4dd88096.js";import{a as Ge}from"./GPMessage.29469677.js";let G=class extends Me{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};p([y({type:ye})],G.prototype,"outSpatialReference",void 0),p([y({type:Ie})],G.prototype,"processExtent",void 0),p([y({type:ye})],G.prototype,"processSpatialReference",void 0),p([y({nonNullable:!0})],G.prototype,"returnFeatureCollection",void 0),p([y({nonNullable:!0})],G.prototype,"returnM",void 0),p([y({nonNullable:!0})],G.prototype,"returnZ",void 0),G=p([O("esri.rest.geoprocessor.GPOptions")],G),G.from=Re(G);const ue=G;let L=class extends C{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};p([y({type:Ie})],L.prototype,"extent",void 0),p([y()],L.prototype,"height",void 0),p([y()],L.prototype,"href",void 0),p([y()],L.prototype,"opacity",void 0),p([y()],L.prototype,"rotation",void 0),p([y()],L.prototype,"scale",void 0),p([y()],L.prototype,"visible",void 0),p([y()],L.prototype,"width",void 0),L=p([O("esri.layer.support.MapImage")],L);const he=L;let U=class extends C{constructor(e){super(e),this.itemId=null,this.url=null}};p([y({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],U.prototype,"itemId",void 0),p([y({type:String,json:{write:!0}})],U.prototype,"url",void 0),U=p([O("esri.rest.support.DataFile")],U);const ie=U,be=new N({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let _=class extends C{constructor(e){super(e),this.distance=0,this.units=null}};p([y({json:{write:!0}})],_.prototype,"distance",void 0),p([y({json:{read:be.read,write:be.write}})],_.prototype,"units",void 0),_=p([O("esri.rest.support.LinearUnit")],_);const ge=_,ve=new N({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let q=class extends C{constructor(e){super(e),this.dataType=null,this.value=null}};p([y({json:{read:ve.read,write:ve.write}})],q.prototype,"dataType",void 0),p([y()],q.prototype,"value",void 0),q=p([O("esri.rest.support.ParameterValue")],q);const rt=q;let k=class extends C{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};p([y()],k.prototype,"format",void 0),p([y({json:{read:{source:"itemID"},write:{target:"itemID"}}})],k.prototype,"itemId",void 0),p([y()],k.prototype,"url",void 0),k=p([O("esri.rest.support.RasterData")],k);const Se=k;async function Le(e,a,t,r,n){const i={},o={},u=[];return at(r,u,i),Ae(u).then(s=>{const{outSpatialReference:l,processExtent:d,processSpatialReference:f,returnFeatureCollection:m,returnM:w,returnZ:b}=t,{path:g}=R(e);for(const D in i){const I=i[D];o[D]=s.slice(I[0],I[1])}const c=l?l.wkid||l:null,S=f?f.wkid||f:null,P=a==="execute"?{returnFeatureCollection:m||void 0,returnM:w||void 0,returnZ:b||void 0}:null,h=X(J(x(x(x({},d?{context:{extent:d,outSR:c,processSR:S}}:{"env:outSR":c,"env:processSR":S}),r),P),{f:"json"}),null,o),v=J(x({},n),{query:h});return F(`${g}/${a}`,v)})}function at(e,a,t){for(const r in e){const n=e[r];if(n&&typeof n=="object"&&n instanceof se){const{features:i}=n;t[r]=[a.length,a.length+i.length],i.forEach(o=>{a.push(o.geometry)})}}}function oe(e){const a=e.dataType,t=rt.fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return t;case"GPDate":t.value=new Date(t.value);break;case"GPDataFile":t.value=ie.fromJSON(t.value);break;case"GPLinearUnit":t.value=ge.fromJSON(t.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const r=e.value.url;t.value=r?ie.fromJSON(t.value):se.fromJSON(t.value);break}case"GPRasterData":case"GPRasterDataLayer":{const r=e.value.mapImage;t.value=r?he.fromJSON(r):Se.fromJSON(t.value);break}case"GPField":t.value=de.fromJSON(t.value);break;case"GPMultiValue:GPDate":{const r=t.value;t.value=r.map(n=>new Date(n));break}case"GPMultiValue:GPDataFile":t.value=t.value.map(r=>ie.fromJSON(r));break;case"GPMultiValue:GPLinearUnit":t.value=t.value.map(r=>ge.fromJSON(r));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":t.value=t.value.map(r=>se.fromJSON(r));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":t.value=t.value.map(r=>r?he.fromJSON(r):Se.fromJSON(t.value));break;case"GPMultiValue:GPField":t.value=t.value.map(r=>de.fromJSON(r))}return t}function X(e,a,t){for(const r in e){const n=e[r];Array.isArray(n)?e[r]=JSON.stringify(n.map(i=>X({item:i},!0).item)):n instanceof Date&&(e[r]=n.getTime())}return ke(e,a,t)}async function it(e,a,t,r){return t=ue.from(t||{}),Le(e,"execute",t,a,r).then(n=>{const i=n.data.results||[],o=n.data.messages||[];return{results:i.map(oe),messages:o.map(u=>Ge.fromJSON(u))}})}var Q;const nt=new N({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let j=Q=class extends C{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:a,sourceUrl:t}=this,{path:r}=R(t),n=J(x(x({},this.requestOptions),e),{query:{f:"json"}});return this._clearTimer(),F(`${r}/jobs/${a}/cancel`,n).then(i=>{const o=Q.fromJSON(i.data);return this.messages=o.messages,this.jobStatus=o.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:a}=R(this.sourceUrl),t=J(x(x({},this.requestOptions),e),{query:{f:"json"}}),r=`${a}/jobs/${this.jobId}`;return F(r,t).then(({data:n})=>{const i=Q.fromJSON(n);return this.messages=i.messages,this.jobStatus=i.jobStatus,this})}fetchResultData(e,a,t){a=ue.from(a||{});const{returnFeatureCollection:r,returnM:n,returnZ:i,outSpatialReference:o}=a,{path:u}=R(this.sourceUrl),s=X({returnFeatureCollection:r,returnM:n,returnZ:i,outSR:o,returnType:"data",f:"json"},null),l=J(x(x({},this.requestOptions),t),{query:s}),d=`${u}/jobs/${this.jobId}/results/${e}`;return F(d,l).then(f=>oe(f.data))}fetchResultImage(e,a,t){const{path:r}=R(this.sourceUrl),n=J(x({},a.toJSON()),{f:"json"}),i=X(n),o=J(x(x({},this.requestOptions),t),{query:i}),u=`${r}/jobs/${this.jobId}/results/${e}`;return F(u,o).then(s=>oe(s.data))}async fetchResultMapImageLayer(){const{path:e}=R(this.sourceUrl),a=e.indexOf("/GPServer/"),t=`${e.substring(0,a)}/MapServer/jobs/${this.jobId}`;return new(await import("./MapImageLayer.b6c93b04.js")).default({url:t})}async waitForJobCompletion(e={}){const{interval:a=1e3,signal:t,statusCallback:r}=e;return new Promise((n,i)=>{Ce(t,()=>{this._clearTimer(),i(fe())}),this._clearTimer();const o=setInterval(()=>{this._timer||i(fe()),this.checkJobStatus(this.requestOptions).then(u=>{const{jobStatus:s}=u;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),n(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},a);this._timer=o})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};p([y()],j.prototype,"jobId",void 0),p([y({json:{read:nt.read}})],j.prototype,"jobStatus",void 0),p([y({type:[Ge]})],j.prototype,"messages",void 0),p([y()],j.prototype,"requestOptions",void 0),p([y({json:{write:!0}})],j.prototype,"sourceUrl",void 0),j=Q=p([O("esri.rest.support.JobInfo")],j);const st=j;async function ot(e,a,t,r){return t=ue.from(t||{}),Le(e,"submitJob",t,a,r).then(n=>{const i=st.fromJSON(n.data);return i.sourceUrl=e,i})}const ee=new N({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});ee.fromJSON.bind(ee);const lt=ee.toJSON.bind(ee),te=new N({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});te.fromJSON.bind(te);const ut=te.toJSON.bind(te),ne="simple-marker",ct="picture-marker",we="simple-line",pt="simple-fill",yt="shield-label-symbol",dt="text";function ft(e,a){const{graphic:t,renderer:r,symbol:n}=a,i=n.type;if(i===dt||i===yt||!("visualVariables"in r)||!r.visualVariables)return;const o=r.getVisualVariablesForType("size"),u=r.getVisualVariablesForType("color"),s=r.getVisualVariablesForType("opacity"),l=r.getVisualVariablesForType("rotation"),d=o[0],f=u[0],m=s[0],w=l[0];if(d){const b=i===ne?n.style:null,g=Ue(d,t,{shape:b});g!=null&&(i===ne?e.size=E(g):i===ct?(e.width=E(g),e.height=E(g)):i===we?e.width=E(g):e.outline&&(e.outline.width=E(g)))}if(f){const b=_e(f,t);(b&&i===ne||i===we||i===pt)&&(e.color=b?b.toJSON():void 0)}if(m){const b=qe(m,t);b!=null&&e.color&&(e.color[3]=Math.round(255*b))}w&&(e.angle=-ze(r,t))}function mt(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function ht(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function xe(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function bt(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function gt(e,a=15){const t=e.canvas.width,r=e.canvas.height,n=e.getImageData(0,0,t,r).data;let i,o,u,s,l,d;e:for(o=r;o--;)for(i=t;i--;)if(n[4*(t*o+i)+3]>a){d=o;break e}if(!d)return null;e:for(i=t;i--;)for(o=d+1;o--;)if(n[4*(t*o+i)+3]>a){l=i;break e}e:for(i=0;i<=l;++i)for(o=d+1;o--;)if(n[4*(t*o+i)+3]>a){u=i;break e}e:for(o=0;o<=d;++o)for(i=u;i<=l;++i)if(n[4*(t*o+i)+3]>a){s=o;break e}return{x:u,y:s,width:l-u,height:d-s}}function vt(e,a){const t=e.allLayerViews.items;if(a===e.scale)return t.filter(n=>!n.suspended);const r=new Array;for(const n of t)Mt(n.parent)&&!r.includes(n.parent)||!n.visible||a&&"isVisibleAtScale"in n&&!n.isVisibleAtScale(a)||r.push(n);return r}function St(e){return e&&e.type==="bing-maps"}function $e(e){return e&&"blendMode"in e&&"effect"in e}function wt(e){return e&&e.type==="csv"}function xt(e){return e&&e.type==="feature"}function Pt(e){return e&&e.type==="geojson"}function Dt(e){return e&&e.type==="graphics"}function It(e){return e&&e.type==="group"}function Mt(e){return e&&e.declaredClass==="esri.views.2d.layers.GroupLayerView2D"}function Gt(e){return e&&e.type==="imagery"}function Lt(e){return e&&e.type==="imagery-tile"}function $t(e){return e&&e.type==="kml"}function Vt(e){return e&&e.type==="map-image"}function Ot(e){return e&&e.type==="map-notes"}function Tt(e){return e&&e.type==="open-street-map"}function Jt(e){const a=e.layer;if($e(a)){const t=a.blendMode;if((!t||t==="normal")&&(a.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}function jt(e){return e&&e.type==="stream"}function Nt(e){return e&&e.type==="tile"}function Et(e){return e&&e.type==="vector-tile"}function Ft(e){return e&&e.type==="web-tile"}function Rt(e){return e&&e.type==="wms"}function kt(e){return e&&e.type==="wmts"}let M=class extends Me{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};p([y()],M.prototype,"attributionVisible",void 0),p([y()],M.prototype,"exportOptions",void 0),p([y()],M.prototype,"forceFeatureAttributes",void 0),p([y()],M.prototype,"format",void 0),p([y()],M.prototype,"label",void 0),p([y()],M.prototype,"layout",void 0),p([y()],M.prototype,"layoutOptions",void 0),p([y()],M.prototype,"outScale",void 0),p([y()],M.prototype,"scalePreserved",void 0),p([y()],M.prototype,"showLabels",void 0),M=p([O("esri.rest.support.PrintTemplate")],M);const At=M,Pe={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},De=new N({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Ct=new N({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),re=new Map;async function Ut(e,a,t){const r=Oe(e);let n=re.get(r);return Promise.resolve().then(()=>n?{data:n.gpMetadata}:(n={gpServerUrl:r,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},F(r,{query:{f:"json"}}))).then(i=>(n.gpMetadata=i.data,n.cimVersion=n.gpMetadata.cimVersion,n.is11xService=!!n.cimVersion,re.set(r,n),Ve(a,n))).then(i=>{const o=lr(n);let u;const s=l=>o==="sync"?l.results&&l.results[0]&&l.results[0].value:u.fetchResultData("Output_File",null,t).then(d=>d.value);return o==="async"?ot(e,i,null,t).then(l=>(u=l,l.waitForJobCompletion({interval:a.updateDelay}).then(s))):it(e,i,null,t).then(s)})}async function Ve(e,a){a=a||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const t=e.template||new At;t.showLabels==null&&(t.showLabels=!0);const r=t.exportOptions;let n;const i=ut(t.layout);if(r&&(n={dpi:r.dpi},i.toLowerCase()==="map_only"||i==="")){const f=r.width,m=r.height;n.outputSize=[f,m]}const o=t.layoutOptions;let u;if(o){let f,m;o.scalebarUnit==="Miles"||o.scalebarUnit==="Kilometers"?(f="Kilometers",m="Miles"):o.scalebarUnit!=="Meters"&&o.scalebarUnit!=="Feet"||(f="Meters",m="Feet"),u={titleText:o.titleText,authorText:o.authorText,copyrightText:o.copyrightText,customTextElements:o.customTextElements,scaleBarOptions:{metricUnit:De.toJSON(f),metricLabel:Pe[f],nonMetricUnit:De.toJSON(m),nonMetricLabel:Pe[m]}}}let s=null;o!=null&&o.legendLayers&&(s=o.legendLayers.map(f=>{a.legendLayerNameMap[f.layerId]=f.title;const m={id:f.layerId};return f.subLayerIds&&(m.subLayerIds=f.subLayerIds),m}));const l=await _t(e,t,a);if(l.operationalLayers){const f=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),m=/[\u0600-\u06FF]/,w=g=>{const c=g.text,S=g.font,P=S&&S.family&&S.family.toLowerCase();c&&S&&(P==="arial"||P==="arial unicode ms")&&(S.family=f.test(c)?"Arial Unicode MS":"Arial",S.style!=="normal"&&m.test(c)&&(S.family="Arial Unicode MS"))},b=()=>{throw new et("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};l.operationalLayers.forEach(g=>{var c,S,P;(c=g.featureCollection)!=null&&c.layers?g.featureCollection.layers.forEach(h=>{var v,D,I,$;if((v=h.layerDefinition)!=null&&(D=v.drawingInfo)!=null&&(I=D.renderer)!=null&&I.symbol){const T=h.layerDefinition.drawingInfo.renderer;T.symbol.type==="esriTS"?w(T.symbol):T.symbol.type!=="CIMSymbolReference"||a.is11xService||b()}($=h.featureSet)!=null&&$.features&&h.featureSet.features.forEach(T=>{T.symbol&&(T.symbol.type==="esriTS"?w(T.symbol):T.symbol.type!=="CIMSymbolReference"||a.is11xService||b())})}):!a.is11xService&&(S=g.layerDefinition)!=null&&(P=S.drawingInfo)!=null&&P.renderer&&JSON.stringify(g.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&b()})}e.outSpatialReference&&(l.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(l,{exportOptions:n,layoutOptions:u||{}}),Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:s!=null?s:a.legendLayers.slice()}}),a.legendLayers.length=0,re.set(a.gpServerUrl,a);const d={Web_Map_as_JSON:JSON.stringify(l),Format:lt(t.format),Layout_Template:i};return e.extraParameters&&Object.assign(d,e.extraParameters),d}async function _t(e,a,t){const r=e.view;let n=r.spatialReference;const i={operationalLayers:await qt(r,a,t)};let o=t.ssExtent||e.extent||r.extent;if(n&&n.isWrappable&&(o=o.clone()._normalize(!0),n=o.spatialReference),i.mapOptions={extent:o&&o.toJSON(),spatialReference:n&&n.toJSON(),showAttribution:a.attributionVisible},t.ssExtent=null,r.background&&(i.background=r.background.toJSON()),r.rotation&&(i.mapOptions.rotation=-r.rotation),a.scalePreserved&&(i.mapOptions.scale=a.outScale||r.scale),z(r.timeExtent)){const u=z(r.timeExtent.start)?r.timeExtent.start.getTime():null,s=z(r.timeExtent.end)?r.timeExtent.end.getTime():null;i.mapOptions.time=[u,s]}return i}function Oe(e){let a=e;const t=a.lastIndexOf("/GPServer/");return t>0&&(a=a.slice(0,t+9)),a}async function qt(e,a,t){const r=[],n={layerView:null,printTemplate:a,view:e};let i=0;a.scalePreserved&&(i=a.outScale||e.scale);const o=vt(e,i);for(const u of o){const s=u.layer;if(!s.loaded||It(s))continue;let l;n.layerView=u,l=Jt(u)?await B(s,n,t):St(s)?zt(s):wt(s)?await Bt(s,n,t):xt(s)?await Kt(s,n,t):Pt(s)?await Wt(s,n,t):Dt(s)?await Zt(s,n,t):Gt(s)?Qt(s,t):Lt(s)?await Yt(s,n,t):$t(s)?await Ht(s,n,t):Vt(s)?Xt(s,n,t):Ot(s)?await er(n,t):Tt(s)?tr():jt(s)?await rr(s,n,t):Nt(s)?ar(s,t):Et(s)?await ir(s,n,t):Ft(s)?nr(s):Rt(s)?sr(s):kt(s)?or(s):await B(s,n,t),l&&(Array.isArray(l)?r.push(...l):(l.id=s.id,l.title=t.legendLayerNameMap[s.id]||s.title,l.opacity=s.opacity,l.minScale=s.minScale||0,l.maxScale=s.maxScale||0,$e(s)&&s.blendMode&&s.blendMode!=="normal"&&(l.blendMode=s.blendMode),r.push(l)))}if(i&&r.forEach(u=>{u.minScale=0,u.maxScale=0}),e.graphics&&e.graphics.length){const u=await V(null,e.graphics,a,t);u&&r.push(u)}return r}function zt(e){return{culture:e.culture,key:e.key,type:"BingMaps"+(e.style==="aerial"?"Aerial":e.style==="hybrid"?"Hybrid":"Road")}}async function Bt(e,a,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r=a.layerView,n=a.printTemplate;let i;return!t.is11xService||r.filter?V(e,await ae(r),n,t):(i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=n.showLabels&&e.labelsVisible,i)}async function V(e,a,t,r){let n;const i=ht(),o=bt(),u=xe(),s=mt(),l=xe();if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if(e.declaredClass==="esri.layers.FeatureLayer"||e.declaredClass==="esri.layers.StreamLayer"?i.layerDefinition.name=o.layerDefinition.name=u.layerDefinition.name=s.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:e.declaredClass==="esri.layers.GraphicsLayer"&&(a=e.graphics.items),e.renderer){const h=e.renderer.toJSON();i.layerDefinition.drawingInfo.renderer=h,o.layerDefinition.drawingInfo.renderer=h,u.layerDefinition.drawingInfo.renderer=h,s.layerDefinition.drawingInfo.renderer=h}if(t.showLabels&&e.labelsVisible&&typeof e.write=="function"){var d,f;const h=(d=e.write({},{origin:"web-map"}).layerDefinition)==null||(f=d.drawingInfo)==null?void 0:f.labelingInfo;h&&(n=!0,i.layerDefinition.drawingInfo.labelingInfo=h,o.layerDefinition.drawingInfo.labelingInfo=h,u.layerDefinition.drawingInfo.labelingInfo=h,s.layerDefinition.drawingInfo.labelingInfo=h)}}let m;e!=null&&e.renderer||n||(delete i.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete u.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo);const w=e==null?void 0:e.fieldsIndex,b=e==null?void 0:e.renderer;if(w){const h=new Set;n&&await Be(h,e),b&&typeof b.collectRequiredFields=="function"&&await b.collectRequiredFields(h,w),m=Array.from(h);const v=w.fields.map(D=>D.toJSON());i.layerDefinition.fields=v,o.layerDefinition.fields=v,u.layerDefinition.fields=v,s.layerDefinition.fields=v}const g=a&&a.length;let c;for(let h=0;h<g;h++){var S;const v=a[h]||a.getItemAt(h);if(v.visible===!1||!v.geometry||(c=v.toJSON(),c.hasOwnProperty("popupTemplate")&&delete c.popupTemplate,c.geometry&&c.geometry.z&&delete c.geometry.z,c.symbol&&c.symbol.outline&&c.symbol.outline.type==="esriCLS"&&!r.is11xService))continue;!r.is11xService&&c.symbol&&c.symbol.outline&&c.symbol.outline.color&&c.symbol.outline.color[3]&&(c.symbol.outline.color[3]=255);const D=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!c.symbol&&e&&e.renderer&&D&&!r.is11xService){const I=e.renderer,$=await I.getSymbolAsync(v);if(!$)continue;c.symbol=$.toJSON(),"hasVisualVariables"in I&&I.hasVisualVariables()&&ft(c.symbol,{renderer:I,graphic:v,symbol:$})}if(c.symbol&&(c.symbol.angle||delete c.symbol.angle,H(c.symbol)?c.symbol=await Y(c.symbol,r):c.symbol.text&&delete c.attributes),(!t||!t.forceFeatureAttributes)&&(S=m)!=null&&S.length){const I={};m.forEach($=>{c.attributes&&c.attributes.hasOwnProperty($)&&(I[$]=c.attributes[$])}),c.attributes=I}v.geometry.type==="polygon"?i.featureSet.features.push(c):v.geometry.type==="polyline"?o.featureSet.features.push(c):v.geometry.type==="point"?c.symbol&&c.symbol.text?l.featureSet.features.push(c):u.featureSet.features.push(c):v.geometry.type==="multipoint"?s.featureSet.features.push(c):v.geometry.type==="extent"&&(c.geometry=Ke.fromExtent(v.geometry).toJSON(),i.featureSet.features.push(c))}const P=[i,o,s,u,l].filter(h=>h.featureSet.features.length>0);for(const h of P){const v=h.featureSet.features.every(D=>D.symbol);!v||t&&t.forceFeatureAttributes||h.featureSet.features.forEach(D=>{delete D.attributes}),v&&delete h.layerDefinition.drawingInfo,h.layerDefinition.drawingInfo&&h.layerDefinition.drawingInfo.renderer&&await Te(h.layerDefinition.drawingInfo.renderer,r)}return P.length?{featureCollection:{layers:P},showLabels:n}:null}async function Kt(e,a,t){var r,n;let i;const o=e.renderer,u=parseFloat(t.cimVersion);if(e.featureReduction&&(!t.is11xService||u<2.9)||(o==null?void 0:o.type)==="dot-density"&&(!t.is11xService||u<2.6))return B(e,a,t);e.legendEnabled&&t.legendLayers.push({id:e.id});const s=a.layerView,{printTemplate:l,view:d}=a,f=o&&("valueExpression"in o&&o.valueExpression||"hasVisualVariables"in o&&o.hasVisualVariables()),m=((r=e.source)==null?void 0:r.type)!=="feature-layer"&&((n=e.source)==null?void 0:n.type)!=="ogc-feature";if(!t.is11xService&&f||s.filter||m||!o||"field"in o&&o.field!=null&&(typeof o.field!="string"||!e.getField(o.field))){const c=await ae(s);i=await V(e,c,l,t)}else{var w,b;if(i={id:(g=e.write()).id,title:g.title,opacity:g.opacity,minScale:g.minScale,maxScale:g.maxScale,url:g.url,layerType:g.layerType,customParameters:g.customParameters,layerDefinition:g.layerDefinition},i.showLabels=l.showLabels&&e.labelsVisible,W(i,e),(w=i.layerDefinition)!=null&&(b=w.drawingInfo)!=null&&b.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await Te(i.layerDefinition.drawingInfo.renderer,t),"visualVariables"in o&&o.visualVariables&&o.visualVariables[0])){const S=o.visualVariables[0];if(S.type==="size"&&S.maxSize&&typeof S.maxSize!="number"&&S.minSize&&typeof S.minSize!="number"){const P=We(S,d.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=P.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=P.maxSize}}const c=Ze(s);c&&(i.layerDefinition||(i.layerDefinition={}),i.layerDefinition.definitionExpression=i.layerDefinition.definitionExpression?`(${i.layerDefinition.definitionExpression}) AND (${c})`:c)}var g;return i}async function Wt(e,{layerView:a,printTemplate:t},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),V(e,await ae(a),t,r)}async function Zt(e,{printTemplate:a},t){return V(e,null,a,t)}function Qt(e,a){e.legendEnabled&&a.legendLayers.push({id:e.id});const t={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(t.bandIds=e.bandIds,t.compressionQuality=e.compressionQuality,t.format=e.format,t.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(a.is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const n=e.exportImageServiceParameters.combineRendererWithRenderingRule();n&&(t.renderingRule=n.toJSON())}return W(t,e),t}async function Yt(e,a,t){var r;if(((r=e.renderer)==null?void 0:r.type)==="flow")return B(e,a,t);e.legendEnabled&&t.legendLayers.push({id:e.id});const n={bandIds:(i=e.write()||{}).bandIds,customParameters:i.customParameters,interpolation:i.interpolation,layerDefinition:i.layerDefinition};var i;return n.layerType="ArcGISImageServiceLayer",W(n,e),n}async function Ht(e,a,t){const r=a.printTemplate;if(t.is11xService){const n={type:"kml"};return e.write(n,{origin:"web-map"}),delete n.layerType,n.url=K(e.url),n}{const n=[],i=a.layerView;i.allVisibleMapImages.forEach((s,l)=>{const d={id:`${e.id}_image${l}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:s.extent};s.href.substr(0,22)==="data:image/png;base64,"?d.imageData=s.href.substr(22):d.url=s.href,n.push(d)});const o=[...i.allVisiblePoints.items,...i.allVisiblePolylines.items,...i.allVisiblePolygons.items],u=x({id:e.id},await V(null,o,r,t));return n.push(u),n}}function Xt(e,{view:a},t){let r;const n={id:e.id,subLayerIds:[]};let i=[];const o=a.scale,u=l=>{const d=o===0,f=l.minScale===0||o<=l.minScale,m=l.maxScale===0||o>=l.maxScale;if(l.visible&&(d||f&&m))if(l.sublayers)l.sublayers.forEach(u);else{const w=l.toExportImageJSON(),b={id:l.id,name:l.title,layerDefinition:{drawingInfo:w.drawingInfo,definitionExpression:w.definitionExpression,source:w.source}};i.unshift(b),n.subLayerIds.push(l.id)}};var s;return e.sublayers&&e.sublayers.forEach(u),i.length&&(i=i.map(({id:l,name:d,layerDefinition:f})=>({id:l,name:d,layerDefinition:f})),r={layerType:(s=e.write()).layerType,customParameters:s.customParameters},r.layers=i,r.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:n.subLayerIds,W(r,e),e.legendEnabled&&t.legendLayers.push(n)),r}async function er({layerView:e,printTemplate:a},t){const r=[],n=e.layer;if(z(n.featureCollections))for(const i of n.featureCollections){const o=await V(i,i.source,a,t);o&&r.push(...o.featureCollection.layers)}else if(z(n.sublayers))for(const i of n.sublayers){const o=await V(null,i.graphics,a,t);o&&r.push(...o.featureCollection.layers)}return{featureCollection:{layers:r}}}function tr(){return{type:"OpenStreetMap"}}async function B(e,{printTemplate:a,view:t},r){const n={type:"image"},i={format:"png",ignoreBackground:!0,layers:[e],rotation:0},o=r.ssExtent||t.extent.clone();let u=96,s=!0,l=!0;if(a.exportOptions){const m=a.exportOptions;m.dpi>0&&(u=m.dpi),m.width>0&&(s=m.width%2==t.width%2),m.height>0&&(l=m.height%2==t.height%2)}if(a.layout==="map-only"&&a.scalePreserved&&(!a.outScale||a.outScale===t.scale)&&u===96&&(!s||!l)&&(i.area={x:0,y:0,width:t.width,height:t.height},s||(i.area.width-=1),l||(i.area.height-=1),!r.ssExtent)){const m=t.toMap(Qe(i.area.width,i.area.height));o.ymin=m.y,o.xmax=m.x,r.ssExtent=o}n.extent=o.clone()._normalize(!0).toJSON();const d=await t.takeScreenshot(i),{data:f}=Ye(d.dataUrl);return n.imageData=f,n}async function rr(e,{layerView:a,printTemplate:t},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),V(e,await ae(a),t,r)}function ar(e,a){e.legendEnabled&&a.legendLayers.push({id:e.id});const t={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;return W(t,e),t}async function ir(e,a,t){if(t.is11xService&&e.serviceUrl&&e.styleUrl){const r=le(e.styleUrl,e.apiKey),n=le(e.serviceUrl,e.apiKey);if(!r&&!n||t.cimVersion!=="2.1.0"){const i={type:"VectorTileLayer"};return i.styleUrl=K(e.styleUrl),i.token=r,n!==r&&(i.additionalTokens=[{url:e.serviceUrl,token:n}]),i}}return B(e,a,t)}function nr(e){const a={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(a.subDomains=e.subDomains),a}function sr(e){let a;const t=[],r=n=>{n.visible&&(n.sublayers?n.sublayers.forEach(r):n.name&&t.unshift(n.name))};return e.sublayers&&e.sublayers.forEach(r),t.length&&(a={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:t,url:K(e.url),version:e.version}),a}function or(e){const a=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:a.imageFormat,layer:a.id,style:a.styleId,tileMatrixSet:a.tileMatrixSetId,url:K(e.url)}}function W(e,a){a.url&&(e.url=K(e.url||a.url),e.token=le(e.url,a.apiKey))}function le(e,a){var t,r;return He(e)&&(a||me.apiKey)?a||me.apiKey:(t=Xe)==null||(r=t.findCredential(e))==null?void 0:r.token}async function Y(e,a){a.canvas||(a.canvas=document.createElement("canvas"));const t=1024;a.canvas.width=t,a.canvas.height=t;const r=a.canvas.getContext("2d");let n,i;if(e.path){var o;const u=new Path2D(e.path);u.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(u);const s=gt(r);if(!s)return null;r.clearRect(0,0,t,t);const l=Z(e.size)/Math.max(s.width,s.height);r.scale(l,l);const d=t/l,f=d/2-s.width/2-s.x,m=d/2-s.height/2-s.y;if(r.translate(f,m),Array.isArray(e.color)&&r.fill(u),(o=e.outline)!=null&&o.width&&Array.isArray(e.outline.color)){const b=e.outline;r.lineWidth=Z(b.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${b.color[0]},${b.color[1]},${b.color[2]},${b.color[3]/255})`,r.stroke(u),s.width+=r.lineWidth,s.height+=r.lineWidth}s.width*=l,s.height*=l;const w=r.getImageData(t/2-s.width/2,t/2-s.height/2,Math.ceil(s.width),Math.ceil(s.height));n=w.width,i=w.height,r.canvas.width=n,r.canvas.height=i,r.putImageData(w,0,0)}else{const u=e.contentType==="image/svg+xml"?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await F(u,{responseType:"image"})).data;n=Z(e.width),i=Z(e.height),r.canvas.width=n,r.canvas.height=i,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:E(i),width:E(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function Te(e,a){const t=e.type;if(t==="simple"&&H(e.symbol))e.symbol=await Y(e.symbol,a);else if(t==="uniqueValue"||t==="classBreaks"){H(e.defaultSymbol)&&(e.defaultSymbol=await Y(e.defaultSymbol,a));const r=e[t==="uniqueValue"?"uniqueValueInfos":"classBreakInfos"];if(r)for(const n of r)H(n.symbol)&&(n.symbol=await Y(n.symbol,a))}}async function ae(e){return e.queryFeatures(e.createQuery()).then(a=>a.features)}function lr(e){return e.gpMetadata&&e.gpMetadata.executionType?Ct.fromJSON(e.gpMetadata.executionType):"sync"}function H(e){return e&&(e.path||e.contentType==="image/svg+xml"||e.url&&e.url.endsWith(".svg"))}const ur=new N({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let A=class extends tt{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?ur.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,a){return e&&(e.updateDelay=this.updateDelay),Ut(this.url,e,x(x({},this.requestOptions),a))}async _getGpPrintParams(e){const a=Oe(this.url),t=re.get(a);return Ve(e,t)}};p([y()],A.prototype,"_gpMetadata",void 0),p([y({readOnly:!0})],A.prototype,"mode",null),p([y()],A.prototype,"updateDelay",void 0),A=p([O("esri.tasks.PrintTask")],A);const dr=A;export{dr as default};
