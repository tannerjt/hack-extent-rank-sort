var C=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var L=(e,r,l)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[r]=l,f=(e,r)=>{for(var l in r||(r={}))J.call(r,l)&&L(e,l,r[l]);if(h)for(var l of h(r))U.call(r,l)&&L(e,l,r[l]);return e},p=(e,r)=>F(e,N(r));import{r as v,dP as V,t as O,q as x,dQ as M,dR as j,bL as E,C as k}from"./vendor.4dd88096.js";import{a as R}from"./lazyLayerLoader.d7c6e4d7.js";async function W(e){var r;const l=(r=e.properties)==null?void 0:r.customParameters,t=await A(e.url,l),a=p(f({},e.properties),{url:e.url});if(!t.sublayerIds)return t.layerOrTableId!=null&&(a.layerId=t.layerOrTableId,a.sourceJSON=t.sourceJSON),new t.Constructor(a);const n=new(await import("./GroupLayer.24788892.js")).default({title:t.parsedUrl.title});return q(n,t,a),n}function T(e,r){return e?e.find(l=>l.id===r):null}function q(e,r,l){function t(a,n){const o=p(f({},l),{layerId:a,sublayerTitleMode:"service-name"});return v(n)&&(o.sourceJSON=n),new r.Constructor(o)}r.sublayerIds.forEach(a=>{const n=t(a,T(r.sublayerInfos,a));e.add(n)}),r.tableIds.forEach(a=>{const n=t(a,T(r.tableInfos,a));e.tables.add(n)})}async function A(e,r){let l=V(e);if(O(l)&&(l=await B(e,r)),O(l))throw new x("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:a}=l;let n;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":n=a!=null?"FeatureLayer":Q(e,r).then(s=>s?"TileLayer":"MapImageLayer");break;case"ImageServer":n=c(e,r).then(s=>{const d=s.tileInfo&&s.tileInfo.format;return s.tileInfo?!d||d.toUpperCase()!=="LERC"||s.cacheType&&s.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":n=c(l.url.path,r).then(s=>{if(s){if((s==null?void 0:s.layerType)==="Voxel")return"VoxelLayer";if(s!=null&&s.layers&&Array.isArray(s.layers)&&s.layers.length>0){var d;const m={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},w=(d=s.layers[0])==null?void 0:d.layerType;if(m[w]!=null)return m[w]}}return"SceneLayer"});break;default:n=o[t]}const i={FeatureLayer:!0,SceneLayer:!0},y=t==="FeatureServer",u={parsedUrl:l,Constructor:null,layerOrTableId:y?a:null,sublayerIds:null,tableIds:null},I=await n;if(i[I]&&a==null){const s=await z(e,t,r);if(y&&(u.sublayerInfos=s.layerInfos,u.tableInfos=s.tableInfos),s.layerIds.length+s.tableIds.length!==1)u.sublayerIds=s.layerIds,u.tableIds=s.tableIds;else if(y){var S,b;u.layerOrTableId=(S=s.layerIds[0])!=null?S:s.tableIds[0],u.sourceJSON=(b=s.layerInfos[0])!=null?b:s.tableInfos[0]}}return u.Constructor=await G(I),u}async function B(e,r){var l;const t=await c(e,r);let a=null,n=null;const o=t.type;if(o==="Feature Layer"||o==="Table"?(a="FeatureServer",n=t.id):o==="indexedVector"?a="VectorTileServer":t.hasOwnProperty("mapName")?a="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?a="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":t.hasOwnProperty("streamUrls")?a="StreamServer":g(t)?(a="SceneServer",n=t.id):t.hasOwnProperty("layers")&&g((l=t.layers)==null?void 0:l[0])&&(a="SceneServer"),!a)return null;const i=n!=null?M(e):null;return{title:v(i)&&t.name||j(e),serverType:a,sublayer:n,url:{path:v(i)?i.serviceUrl:E(e).path}}}function g(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function z(e,r,l){var t,a;let n,o=!1;if(r==="FeatureServer"){const u=await D(e,l);o=!!u.layersJSON,n=u.layersJSON||u.serviceJSON}else n=await c(e,l);const i=(t=n)==null?void 0:t.layers,y=(a=n)==null?void 0:a.tables;return{layerIds:(i==null?void 0:i.map(u=>u.id).reverse())||[],tableIds:(y==null?void 0:y.map(u=>u.id).reverse())||[],layerInfos:o?i:[],tableInfos:o?y:[]}}function P(e){return!e.type||e.type==="Feature Layer"}async function D(e,r){var l,t;let a=await c(e,r);a=a||{},a.layers=((l=a.layers)==null?void 0:l.filter(P))||[];const n={serviceJSON:a};if(a.currentVersion<10.5)return n;const o=await c(e+"/layers",r);return n.layersJSON={layers:(o==null||(t=o.layers)==null?void 0:t.filter(P))||[],tables:(o==null?void 0:o.tables)||[]},n}async function G(e){return(0,R[e])()}async function Q(e,r){return(await c(e,r)).tileInfo}async function c(e,r){return(await k(e,{responseType:"json",query:f({f:"json"},r)})).data}export{W as fromUrl};