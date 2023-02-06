var v=Object.defineProperty;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(n,t,e)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))O.call(t,e)&&b(n,e,t[e]);if(I)for(var e of I(t))D.call(t,e)&&b(n,e,t[e]);return n};import{q as h,aw as $,E as k,s as j,bL as V,C as P,ew as R,by as G,aA as L,bu as Q,bA as M,b1 as A,ex as U,aU as Y,ey as B,dR as Z,c6 as z,ez as J}from"./vendor.4dd88096.js";import{t as W}from"./json.da51edc4.js";import{m as H}from"./FeatureStore.f35410c7.js";import{f as K}from"./projectionSupport.1f2e9c45.js";import{V as X}from"./QueryEngine.25592ef0.js";import{a as ee,n as te}from"./clientSideDefaults.efdc8f97.js";import"./PooledRBush.9f5c7f6c.js";import"./WhereClause.064f498e.js";import"./QueryEngineCapabilities.650d7541.js";import"./quantizationUtils.cd7a121d.js";import"./utils.537dfecb.js";import"./ClassBreaksDefinition.1d5c1f08.js";import"./spatialQuerySupport.b86bf9ab.js";const ie=/^\s*"([\S\s]*)"\s*$/,ne=/""/g,x=`
`,se=[","," ",";","|","	"];function*T(n,t,e){let i=0;for(;i<=n.length;){const s=n.indexOf(t,i),r=n.substring(i,s>-1?s:void 0);i+=r.length+t.length,e&&!r.trim()||(yield r)}}function E(n){const t=n.includes(`\r
`)?`\r
`:x;return T(n,t,!0)}function re(n,t){return T(n,t,!1)}function ae(n){const t=n.trim();let e=0,i="";for(const s of se){const r=t.split(s).length;r>e&&(e=r,i=s)}return i===""?null:i}function*S(n,t,e,i=()=>Object.create(null)){let s="",r="",d=0,a=i(),f=0;e:for(const o of n){const u=re(o,e);for(const c of u)if(s+=r+c,r="",d+=oe(c),d%2==0){if(d>0){const y=ie.exec(s);if(!y){a=i(),f=0,s="",d=0;continue e}a[t[f]]=y[1].replace(ne,'"'),f++}else a[t[f]]=s,f++;s="",d=0}else r=e;d===0?(yield a,a=i(),f=0):r=x}}function oe(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}const le=te("esriGeometryPoint"),ue=["csv"],de=[0,0];class ce{constructor(t,e){this.x=t,this.y=e}}class ke{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var i;this.loadOptions=t;const[s]=await Promise.all([this._fetch(e.signal),this._checkProjection(t==null||(i=t.parsingOptions)==null?void 0:i.spatialReference)]),r=fe(s,t);this.locationInfo=r.locationInfo,this.delimiter=r.delimiter,this._queryEngine=this._createQueryEngine(r);const d=await this._createFeatures(s);if(this._queryEngine.featureStore.addMany(d),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo){const{start:a,end:f}=this._queryEngine.timeExtent;r.layerDefinition.timeInfo.timeExtent=[a,f]}return r}async applyEdits(){throw new h("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this.loadOptions.customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=$(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),k(i)||j.getLogger("esri.layers.CSVLayer").error(new h("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this.loadOptions;if(!e)throw new h("csv-layer:invalid-source","url not defined");const s=V(e);return(await P(s.path,{query:_(_({},s.query),i),responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:s,timeInfo:r}=t.layerDefinition,d=new H({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new X({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:e,spatialReference:s.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:d})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this.locationInfo,{objectIdField:s,fieldsIndex:r,spatialReference:d}=this._queryEngine;let a=[];const f=[],o=r.fields.filter(l=>l.name!==s).map(l=>l.name);let u=0;const c=E(t);c.next();const y={};for(const l of r.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=R(l);p!==void 0&&(y[l.name]=p)}const C=S(c,o,this.delimiter,ee(y,s));for(const l of C){const p=this._parseCoordinateValue(l[e]),g=this._parseCoordinateValue(l[i]);if(g!=null&&p!=null&&!isNaN(p)&&!isNaN(g)){l[e]=p,l[i]=g;for(const m in l)if(m!==e&&m!==i){if(r.isDateField(m)){const F=new Date(l[m]);l[m]=q(F,l[m])?F.getTime():null}else if(r.isNumericField(m)){const F=N(l[m]);isNaN(F)?l[m]=null:l[m]=F}}l[s]=u,u++,a.push(new ce(g,p)),f.push(l)}}if(!G({wkid:4326},d))if(L(d))for(const l of a)[l.x,l.y]=Q(l.x,l.y,de);else a=M(W,a,A.WGS84,d,null);const w=[];for(let l=0;l<a.length;l++){const{x:p,y:g}=a[l],m=f[l];m[s]=l+1,w.push(new U(new Y([],[p,g]),m,null,m[s]))}return w}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=N(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await K(B,t)}catch{throw new h("csv-layer:projection-not-supported","Projection not supported")}}}function fe(n,t){const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},s=E(n);let r=s.next().value;if(!r)throw new h("csv-layer:empty-csv","CSV is empty",{csv:n});if(r=r.trim(),!e.delimiter){const o=ae(r);if(!o)throw new h("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=o}const d=r.split(i.delimiter).filter(o=>!!o),a=i.layerDefinition={name:Z(t.url,ue)||"csv",drawingInfo:le,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:102100}}};if(!e.latitudeField||!e.longitudeField){const o=ye(d);if(!e.longitudeField&&!o.longitudeFieldName||!e.latitudeField&&!o.latitudeFieldName)throw new h("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:e.longitudeField||o.longitudeFieldName,latitudeFieldName:e.latitudeField||o.latitudeFieldName}}const f=he(s,i.delimiter,d,i.locationInfo);if(e.fields&&e.fields.length){const o=new Map;for(const u of e.fields)o.set(u.name.toLowerCase(),u);for(const u of f){const c=o.get(u.name.toLowerCase());if(c){const y=u.name;Object.assign(u,c),u.name=y}}}if(a.fields=f,!a.fields.some(o=>o.type==="esriFieldTypeOID"&&(a.objectIdField=o.name,!0))){const o={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=o.name,a.fields.unshift(o)}if(a.timeInfo){const o=new z(a.fields),u=a.timeInfo;if(u.startTimeField){const c=o.get(u.startTimeField);c?(u.startTimeField=c.name,c.type="esriFieldTypeDate"):u.startTimeField=null}if(u.endTimeField){const c=o.get(u.endTimeField);c?(u.endTimeField=c.name,c.type="esriFieldTypeDate"):u.endTimeField=null}if(u.trackIdField){const c=o.get(u.trackIdField);u.trackIdField=c?c.name:null}u.startTimeField||u.endTimeField||(a.timeInfo=null)}return i}const me=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],pe=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function ye(n){const t=n.map(e=>e.toLowerCase());return{longitudeFieldName:n[t.indexOf(pe.find(e=>t.includes(e)))],latitudeFieldName:n[t.indexOf(me.find(e=>t.includes(e)))]}}function he(n,t,e,i){const s=[],r=S(n,e,t),d=[];for(const a of r){if(d.length===10)break;d.push(a)}for(const a of e)if(a===i.longitudeFieldName||a===i.latitudeFieldName)s.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const f=ge(d.map(u=>u[a])),o={name:a,type:null,alias:a};switch(f){case"integer":o.type="esriFieldTypeInteger";break;case"double":o.type="esriFieldTypeDouble";break;case"date":o.type="esriFieldTypeDate",o.length=36;break;default:o.type="esriFieldTypeString",o.length=255}s.push(o)}return s}function ge(n){if(!n.length)return"string";const t=/[^+-.,0-9]/;return n.map(e=>{let i=!1;if(e!==""){if(t.test(e))i=!0;else{let s=N(e);if(!isNaN(s))return/[.,]/.test(e)||!Number.isInteger(s)||s>214783647||s<-214783648?"double":"integer";if(e.indexOf("E")===-1)i=!0;else{if(s=Number(e),!isNaN(s))return"double";if(e.indexOf(",")===-1)i=!0;else{if(e=e.replace(",","."),s=Number(e),!isNaN(s))return"double";i=!0}}}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":q(new Date(e),e)?"date":"string":"string"}}).reduce((e,i)=>e===void 0||e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const Fe=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,_e=Number.isNaN(new Date("technology 10").getTime());function q(n,t){if(!n||Object.prototype.toString.call(n)!=="[object Date]"||isNaN(n.getTime()))return!1;let e=!0;if(!_e&&/\d+\W*$/.test(t)){const i=t.match(/[a-zA-Z]{2,}/);if(i){let s=!1,r=0;for(;!s&&r<=i.length;)s=!Fe.test(i[r]),r++;e=!s}}return e}const N=function(){const n=J(),t=new RegExp("^"+n.regexp+"$"),e=new RegExp("["+n.group+"\\s\\xa0]","g"),i=n.factor;return function(s){const r=t.exec(s);if(n.factor=i,!r)return NaN;let d=r[1];if(!r[1]){if(!r[2])return NaN;d=r[2],n.factor*=-1}return d=d.replace(e,"").replace(n.decimal,"."),+d*n.factor}}();export{ke as default,ge as inferFieldType,he as inferFields,ye as inferLocationInfo};
