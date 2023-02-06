var ze=Object.defineProperty,Ve=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var oe=(d,e,t)=>e in d?ze(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t,Z=(d,e)=>{for(var t in e||(e={}))$e.call(e,t)&&oe(d,t,e[t]);if(ne)for(var t of ne(e))De.call(e,t)&&oe(d,t,e[t]);return d},K=(d,e)=>Ve(d,Ce(e));import{eD as le,q as T,t as k,bx as Te,by as L,r as H,bD as Ge,eE as ue,eF as Pe,eG as ce,aO as Ne,eH as Me,c_ as Re,eI as Oe,dF as Ae,eJ as je,c6 as qe,eK as he,eL as de,bd as N,eM as ke,dG as Be,dI as Ze,cd as ee,dT as fe,bY as me,eN as pe,eO as Le,aE as He,bj as ye,aF as Ue,aH as Je,ay as Ye}from"./vendor.4dd88096.js";import{WhereClause as We}from"./WhereClause.064f498e.js";import{g as j,M as Xe,f as te}from"./projectionSupport.1f2e9c45.js";import{t as Ke}from"./QueryEngineCapabilities.650d7541.js";import{s as ge}from"./quantizationUtils.cd7a121d.js";import{T as et,s as tt,m as xe,c as _e,V as st,g as it,h as at,y as rt,D as nt,z as ot,f as lt,d as ut}from"./utils.537dfecb.js";import{z as B,n as ct,J as Y,O as we,t as ht,P as M,U as O,v as Ie,I as Fe,a as Se}from"./spatialQuerySupport.b86bf9ab.js";class dt{constructor(e,t){this._cache=new le(e),this._invalidCache=new le(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!==void 0)return null;try{const a=We.create(e,t);return this._cache.put(s,a),a}catch{return this._invalidCache.put(s,null),null}}}const se=new dt(50,500),C="feature-store:unsupported-query",be=" as ",ft=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function mt(d,e){if(!e)return!0;const t=se.get(e,d);if(!t)throw new T(C,"invalid SQL expression",{where:e});if(!t.isStandardized)throw new T(C,"where clause is not standard",{where:e});return V(d,t.fieldNames,"where clause contains missing fields"),!0}function pt(d,e,t){if(!e)return!0;const s=se.get(e,d);if(!s)throw new T(C,"invalid SQL expression",{having:e});if(!s.isAggregate)throw new T(C,"having does not contain a valid aggregate function",{having:e});const i=s.fieldNames;if(V(d,i,"having contains missing fields"),!s.getExpressions().every(a=>{const{aggregateType:r,field:o}=a,n=d.has(o)&&d.get(o).name;return t.some(l=>{const{onStatisticField:u,statisticType:c}=l;return(d.has(u)&&d.get(u).name)===n&&c.toLowerCase().trim()===r})}))throw new T(C,"expressions in having should also exist in outStatistics",{having:e});return!0}function q(d,e){return d?se.get(d,e):null}function V(d,e,t,s=!0){const i=[];for(const a of e)if(a!=="*"&&!d.has(a))if(s){const r=ve(a);try{const o=q(r,d);if(!o)throw new T(C,"invalid SQL expression",{where:r});if(!o.isStandardized)throw new T(C,"expression is not standard",{clause:o});V(d,o.fieldNames,"expression contains missing fields")}catch(o){const n=o&&o.details;if(n&&(n.clause||n.where))throw o;n&&n.missingFields?i.push(...n.missingFields):i.push(a)}}else i.push(a);if(i.length)throw new T(C,t,{missingFields:i})}function ve(d){return d.split(be)[0]}function yt(d){return d.split(be)[1]}function gt(d,e){const t=e.get(d);return!!t&&!ft.has(t.type)}class W{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&i.indexOf("*")===-1){this.outFields=i;let a=0;for(const r of i){const o=ve(r),n=this.fieldsIndex.get(o),l=n?null:q(o,s),u=n?n.name:yt(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:u,clause:l})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i).clause:s||(a=q(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(a)){const r=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=et(a,s,r,i)}return a}getExpressionValue(e,t,s){const i={attributes:this.featureAdapter.getAttributes(e)},a=s.createExecContext(i,t.viewInfo);return s.executeFunction(t.compiledFunc,a)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:q(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:q(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(k(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:o}=this._fieldDataCache.get(r);s.push(e[o])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}}class S{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new W(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!(s!=null&&s.length))return 1;const a=new Map,r=new Map,o=new Set,n=e.outStatistics;for(const l of n){const{statisticType:u}=l,c=u!=="exceedslimit"?l.onStatisticField:void 0;if(!r.has(c)){const m=[];for(const h of s){const _=this._getAttributeValues(t,h,a);m.push(_)}r.set(c,this._calculateUniqueValues(m,t.returnDistinctValues))}const f=r.get(c);for(const m in f){const{data:h,items:_}=f[m],I=h.join(",");i&&!t.validateItems(_,i)||o.add(I)}}return o.size}async createQueryResponse(e){let t;return e.outStatistics?t=e.outStatistics.some(s=>s.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(e):await this._createStatisticsQueryResponse(e):t=this._createFeatureQueryResponse(e),e.returnQueryGeometry&&(Te(e.outSR)&&!L(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=B(Z({spatialReference:e.outSR},j(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR))):t.queryGeometry=B(Z({spatialReference:e.outSR},this.queryGeometry))),t}createSnappingResponse(e,t){const s=this.featureAdapter,i=_t(this.hasZ,this.hasM),{x:a,y:r}=e.point,o=typeof e.distance=="number"?e.distance:e.distance.x,n=typeof e.distance=="number"?e.distance:e.distance.y,l={candidates:[]},u=this.geometryType==="esriGeometryPolygon",c=this._getPointCreator(e.point,this.spatialReference,t);for(const f of this.items){const m=s.getGeometry(f);if(k(m))continue;const{coords:h,lengths:_}=m;if(e.types&U.EDGE){let I=0;for(let w=0;w<_.length;w++){const p=_[w];for(let x=0;x<p;x++,I+=i){const F=h[I],y=h[I+1];if(x!==p-1){const g=h[I+i],R=h[I+i+1],{x:v,y:$}=xt(a,r,F,y,g,R),A=(a-v)/o,Q=(r-$)/n,D=A*A+Q*Q;D<=1&&l.candidates.push({type:"edge",objectId:s.getObjectId(f),distance:Math.sqrt(D),target:c(v,$),start:c(F,y),end:c(g,R)})}}}}if(e.types&U.VERTEX){const I=u?h.length-i:h.length;for(let w=0;w<I;w+=i){const p=h[w],x=h[w+1],F=(a-p)/o,y=(r-x)/n,g=F*F+y*y;g<=1&&l.candidates.push({type:"vertex",objectId:s.getObjectId(f),distance:Math.sqrt(g),target:c(p,x)})}}}return l.candidates.sort((f,m)=>f.distance-m.distance),l}_getPointCreator(e,t,s){const i=H(s)&&!L(t,s)?a=>j(a,t,s):a=>a;return e.z!=null&&e.m!=null?(a,r)=>i({x:a,y:r,z:e.z,m:e.m}):e.z!=null?(a,r)=>i({x:a,y:r,z:e.z}):e.m!=null?(a,r)=>i({x:a,y:r,m:e.m}):(a,r)=>i({x:a,y:r})}executeAttributesQuery(e){const t=q(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let s=0;const i=[];for(const r of this.items)t.testFeature(r,this.featureAdapter)&&(i[s++]=r);const a=new S(i,this.queryGeometry,this);return a.definitionExpression=e.where,Promise.resolve(a)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||k(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const i of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;return Promise.resolve(new S(this.items.filter(i=>t.has(s(i))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new S(this.items.filter(i=>t.has(s(i))),this.queryGeometry,this))}executeTimeQuery(e){const t=ct(this.timeInfo,e.timeExtent,this.featureAdapter);if(!H(t))return Promise.resolve(this);const s=this.items.filter(t);return Promise.resolve(new S(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,a=new Map,r=this.featureAdapter.getAttribute;for(const n of this.items){const l=r(n,e),u=r(n,i),c=a.get(l);(!c||u>r(c,i))&&a.set(l,n)}const o=Array.from(a.values());return Promise.resolve(new S(o,this.queryGeometry,this))}async project(e){if(!e||L(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await Xe(this.items.map(i=>Y(this.geometryType,this.hasZ,this.hasM,t.getGeometry(i))),this.spatialReference,e)).map((i,a)=>t.cloneWithGeometry(this.items[a],Ge(i,this.hasZ,this.hasM)));return new S(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,minValue:n,maxValue:l,scale:u}=t,c=this.fieldsIndex.isDateField(s),f=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:u}),m=tt({normalizationType:r,normalizationField:a,minValue:n,maxValue:l}),h=this.fieldsIndex.get(s),_={value:.5,fieldType:h==null?void 0:h.type},I=ue(h)?xe({values:f,supportsNullCount:m,percentileParams:_}):_e({values:f,minValue:n,maxValue:l,useSampleStdDev:!r,supportsNullCount:m,percentileParams:_});return st(I,c)}async createUniqueValuesResponse(e,t){const{field:s,valueExpression:i,domain:a,returnAllCodedValues:r,scale:o}=t,n=await this._getDataValues(e,{field:s,valueExpression:i,scale:o}),l=it(n);return at(l,a,r)}async createClassBreaksResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f,scale:m}=t,h=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:m}),_=rt(h,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f});return nt(_,n)}async createHistogramResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f,scale:m}=t,h=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:m});return ot(h,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],o=this.fieldsIndex.get(r),n=a[1]&&a[1].toLowerCase()==="desc",l=lt(o==null?void 0:o.type,n);e.sort((u,c)=>{const f=s(u,r,o),m=s(c,r,o);return l(f,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:o}=this,{outFields:n,outSR:l,quantizationParameters:u,resultRecordCount:c,resultOffset:f,returnZ:m,returnM:h}=e,_=c!=null&&t.length>(f||0)+c,I=n&&(n.includes("*")?[...this.fieldsIndex.fields]:n.map(w=>this.fieldsIndex.get(w)));return{exceededTransferLimit:_,features:this._createFeatures(e,t),fields:I,geometryType:s,hasM:i&&h,hasZ:a&&m,objectIdFieldName:r,spatialReference:B(l||o),transform:u&&ge(u)||null}}_createFeatures(e,t){const s=new W(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:o,returnGeometry:n,returnCentroid:l,maxAllowableOffset:u,resultOffset:c,resultRecordCount:f,returnZ:m=!1,returnM:h=!1}=e,_=a&&m,I=i&&h;let w=[],p=0;const x=[...t];if(this._sortFeatures(x,r,(y,g,R)=>s.getFieldValue(y,g,R)),n||l){const y=ge(o);if(n&&!l)for(const g of x)w[p++]={attributes:s.getAttributes(g),geometry:Y(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,y,_,I)};else if(!n&&l)for(const g of x)w[p++]={attributes:s.getAttributes(g),centroid:we(this,this.featureAdapter.getCentroid(g,this),y)};else for(const g of x)w[p++]={attributes:s.getAttributes(g),centroid:we(this,this.featureAdapter.getCentroid(g,this),y),geometry:Y(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,y,_,I)}}else for(const y of x){const g=s.getAttributes(y);g&&(w[p++]={attributes:g})}const F=c||0;if(f!=null){const y=F+f;w=w.slice(F,Math.min(w.length,y))}return w}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics)if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=this.hasZ?this.hasM?4:3:this.hasM?3:2,o=this.featureAdapter;t=this.items.reduce((n,l)=>{const u=o.getGeometry(l);return n+(H(u)&&u.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,o=new Map,n=new W(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:c,orderByFields:f}=e,m=u&&u.length,h=!!m,_=h&&u[0],I=h&&!this.fieldsIndex.get(_);for(const p of l){const{outStatisticFieldName:x,statisticType:F}=p,y=p,g=F!=="exceedslimit"?p.onStatisticField:void 0,R=F==="percentile_disc"||F==="percentile_cont",v=F==="EnvelopeAggregate"||F==="CentroidAggregate"||F==="ConvexHullAggregate",$=h&&m===1&&(g===_||I)&&F==="count";if(h){if(!r.has(g)){const Q=[];for(const D of u){const J=this._getAttributeValues(n,D,i);Q.push(J)}r.set(g,this._calculateUniqueValues(Q,n.returnDistinctValues))}const A=r.get(g);for(const Q in A){const{count:D,data:J,items:ie,itemPositions:Qe}=A[Q],ae=J.join(",");if(!c||n.validateItems(ie,c)){const G=o.get(ae)||{attributes:{}};if(v){G.aggregateGeometries||(G.aggregateGeometries={});const{aggregateGeometries:E,outStatisticFieldName:P}=await this._getAggregateGeometry(y,ie);G.aggregateGeometries[P]=E}else{let E=null;if($)E=D;else{const P=this._getAttributeValues(n,g,i),re=Qe.map(Ee=>P[Ee]);E=R&&"statisticParameters"in y?this._getPercentileValue(y,re):this._getStatisticValue(y,re,null,n.returnDistinctValues)}G.attributes[x]=E}u.forEach((E,P)=>G.attributes[this.fieldsIndex.get(E)?E:`EXPR_${P+1}`]=J[P]),o.set(ae,G)}}}else if(v){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:A,outStatisticFieldName:Q}=await this._getAggregateGeometry(y,this.items);t.aggregateGeometries[Q]=A}else{const A=this._getAttributeValues(n,g,i);t.attributes[x]=R&&"statisticParameters"in y?this._getPercentileValue(y,A):this._getStatisticValue(y,A,a,n.returnDistinctValues)}s.push({name:x,alias:x,type:"esriFieldTypeDouble"})}const w=h?Array.from(o.values()):[t];return this._sortFeatures(w,f,(p,x)=>p.attributes[x]),{fields:s,features:w}}async _getAggregateGeometry(e,t){const s=await import("./geometryEngineJSON.36e577a6.js"),{statisticType:i,outStatisticFieldName:a}=e,{featureAdapter:r,spatialReference:o,geometryType:n,hasZ:l,hasM:u}=this,c=t.map(h=>Y(n,l,u,r.getGeometry(h))),f=s.convexHull(o,c,!0)[0],m={aggregateGeometries:null,outStatisticFieldName:null};if(i==="EnvelopeAggregate"){const h=f?Pe(f):ce(s.union(o,c));m.aggregateGeometries=K(Z({},h),{spatialReference:o}),m.outStatisticFieldName=a||"extent"}else if(i==="CentroidAggregate"){const h=f?Ne(f):Me(ce(s.union(o,c)));m.aggregateGeometries={x:h[0],y:h[1],spatialReference:o},m.outStatisticFieldName=a||"centroid"}else i==="ConvexHullAggregate"&&(m.aggregateGeometries=f,m.outStatisticFieldName=a||"convexHull");return m}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let o=null;return o=s!=null&&s.has(a)?s.get(a):ue(this.fieldsIndex.get(a))?xe({values:t,returnDistinct:i}):_e({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,o),o[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:o}=i,n=this.fieldsIndex.get(s),l={value:r,orderBy:o,fieldType:n==null?void 0:n.type,isDiscrete:a==="percentile_disc"};return ut(t,l)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map(s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal}))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await Re(),a=i.createFunction(t),r=s&&i.getViewInfo(s);return this.items.map(o=>e.getExpressionValue(o,{compiledFunc:a,viewInfo:r},i))}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const o=i[r],n=[];for(const u of e)n.push(u[r]);const l=n.join(",");t?s[l]==null&&(s[l]={count:1,data:n,items:[o],itemPositions:[r]}):s[l]==null?s[l]={count:1,data:n,items:[o],itemPositions:[r]}:(s[l].count++,s[l].items.push(o),s[l].itemPositions.push(r))}return s}async _getDataValues(e,t){const s=new W(e,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:r,normalizationType:o,normalizationTotal:n,scale:l}=t,u=i?{viewingMode:"map",scale:l,spatialReference:e.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(s,i,u):this._getAttributeNormalizedValues(s,{field:a,normalizationField:r,normalizationType:o,normalizationTotal:n})}}function xt(d,e,t,s,i,a){const r=i-t,o=a-s,n=r*r+o*o,l=(d-t)*r+(e-s)*o,u=Math.min(1,Math.max(0,l/n));return{x:t+r*u,y:s+o*u}}function _t(d,e){return d?e?4:3:e?3:2}var U;(function(d){d[d.NONE=0]="NONE",d[d.EDGE=1]="EDGE",d[d.VERTEX=2]="VERTEX"})(U||(U={}));function wt(d){return d.every(e=>e.statisticType!=="exceedslimit")}const z="feature-store:unsupported-query",X=new Set,It=new Oe(2e6);let Ft=0;class Vt{constructor(e){this.capabilities={query:Ke},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new je(Ft+++"$$",It)),this.fieldsIndex=new qe(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=he(this._frameTask),this.clearCache(),de(this._geometryQueryCache),this._changeHandle=he(this._changeHandle),de(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:B(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=ht(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let s,i=N(e);try{i=await this._schedule(()=>M(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t)}catch(a){if(a!==O)throw a;s=new S([],null,this)}return s.createQueryResponse(i)}async executeQueryForCount(e={},t){let s=N(e);s.returnGeometry=!1,s.returnCentroid=!1,s.outSR=null;try{s=await this._schedule(()=>M(s,this.definitionExpression,this.spatialReference),t),s=await this._reschedule(()=>this._checkQuerySupport(s),t);let i=await this._reschedule(()=>this._executeGeometryQuery(s,t),t);return i=await this._reschedule(()=>i.executeAggregateIdsQuery(s),t),i=await this._reschedule(()=>i.executeObjectIdsQuery(s),t),i=await this._reschedule(()=>i.executeTimeQuery(s),t),i=await this._reschedule(()=>i.executeAttributesQuery(s),t),i.createQueryResponseForCount(s)}catch(i){if(i!==O)throw i;return 0}}async executeQueryForExtent(e={},t){let s,i=N(e);const a=i.outSR;try{i=await this._schedule(()=>M(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),i.returnGeometry=!0,i.returnCentroid=!1,i.outSR=null,s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t);const r=s.size;if(!r)return{count:r,extent:null};ke(b,Be),this.featureStore.forEachBounds(s.items,l=>Ze(b,l),St);const o={xmin:b[0],ymin:b[1],xmax:b[3],ymax:b[4],spatialReference:B(this.spatialReference)};this.hasZ&&isFinite(b[2])&&isFinite(b[5])&&(o.zmin=b[2],o.zmax=b[5]);const n=j(o,s.spatialReference,a);if(n.spatialReference=B(a||this.spatialReference),n.xmax-n.xmin==0){const l=ee(n.spatialReference);n.xmin-=l,n.xmax+=l}if(n.ymax-n.ymin==0){const l=ee(n.spatialReference);n.ymin-=l,n.ymax+=l}if(this.hasZ&&n.zmin!=null&&n.zmax!=null&&n.zmax-n.zmin==0){const l=ee(n.spatialReference);n.zmin-=l,n.zmax+=l}return{count:r,extent:n}}catch(r){if(r===O)return{count:0,extent:null};throw r}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e={},t){let s,i=N(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule(()=>M(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t);const a=s.items,r=new Set;return await this._reschedule(()=>{for(const o of a)r.add(s.featureAdapter.getObjectId(o))},t),r}catch(a){if(a===O)return new Set;throw a}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:a}=e;if(a===U.NONE)return{candidates:[]};const r=await this._reschedule(()=>this._checkQuerySupport(e.query),t),o=!L(s.spatialReference,this.spatialReference);o&&await te(s.spatialReference,this.spatialReference);const n=typeof i=="number"?i:i.x,l=typeof i=="number"?i:i.y,u={xmin:s.x-n,xmax:s.x+n,ymin:s.y-l,ymax:s.y+l,spatialReference:s.spatialReference},c=o?j(u,this.spatialReference):u;if(!c)return{candidates:[]};const f=(await fe(me(s),null,{signal:t}))[0],m=(await fe(me(c),null,{signal:t}))[0];if(k(f)||k(m))return{candidates:[]};let h=new S(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),null,this);h=await this._reschedule(()=>h.executeObjectIdsQuery(r),t),h=await this._reschedule(()=>h.executeTimeQuery(r),t),h=await this._reschedule(()=>h.executeAttributesQuery(r),t);const _=f.toJSON(),I=o?j(_,this.spatialReference):_,w=o?Math.max(c.xmax-c.xmin,c.ymax-c.ymin)/2:i;return h.createSnappingResponse(K(Z({},e),{point:I,distance:w}),s.spatialReference)}async executeQueryForLatestObservations(e={},t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new T(z,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let s,i=N(e);try{i=await this._schedule(()=>M(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t),s=await this._reschedule(()=>s.filterLatest(),t)}catch(a){if(a!==O)throw a;s=new S([],null,this)}return s.createQueryResponse(i)}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createSummaryStatisticsResponse(e,t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,valueExpression:a},s)).createUniqueValuesResponse(e,t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createClassBreaksResponse(e,t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createHistogramResponse(e,t)}async _schedule(e,t){return H(this._frameTask)?this._frameTask.schedule(e,t):e(pe)}async _reschedule(e,t){return H(this._frameTask)?this._frameTask.reschedule(e,t):e(pe)}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach(t=>e.push(t)),this._allItems=new S(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:s,outSR:i,spatialRel:a,returnGeometry:r,returnCentroid:o}=e,n=this.featureStore.featureSpatialReference,l=s&&n&&n!==s.spatialReference?j(s,n):s,u=r||o,c=Te(i)&&!L(this.spatialReference,i),f=this._geometryQueryCache?c&&u?JSON.stringify({originalFilterGeometry:s,spatialRelationship:a,outSpatialReference:i}):JSON.stringify({originalFilterGeometry:s,spatialRelationship:a}):null;if(f){const p=this._geometryQueryCache.get(f);if(!Le(p))return p}const m=async p=>{if(c&&u){const x=await p.project(i);return f&&this._geometryQueryCache.put(f,x,x.size||1),x}return f&&this._geometryQueryCache.put(f,p,p.size||1),p};if(!l)return m(this._getAll());const h=this.featureAdapter;if(a==="esriSpatialRelDisjoint"){const p=this._searchFeatures(this._getQueryBBoxes(s));if(!p.length)return m(this._getAll());let x,F;const y=new Set;for(const R of p)y.add(h.getObjectId(R));await this._reschedule(()=>{let R=0;x=new Array(y.size),this.featureStore.forEach(v=>x[R++]=v),F=y},t);const g=await this._reschedule(async()=>{const R=await Ie(a,l,this.geometryType,this.hasZ,this.hasM),v=$=>!F.has(h.getObjectId($))||R(h.getGeometry($));return new S(await this._runSpatialFilter(x,v,t),s,this)},t);return m(g)}const _=this._searchFeatures(this._getQueryBBoxes(s));if(!_.length){const p=new S([],s,this);return f&&this._geometryQueryCache.put(f,p,p.size||1),p}if(this._canExecuteSoloPass(l,e))return m(new S(_,s,this));const I=await Ie(a,l,this.geometryType,this.hasZ,this.hasM),w=await this._runSpatialFilter(_,p=>I(h.getGeometry(p)),t);return m(new S(w,s,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(k(this._frameTask))return e.filter(o=>t(o));let i=0;const a=new Array,r=async o=>{for(;i<e.length;){const n=e[i++];t(n)&&(a.push(n),o.madeProgress()),o.done&&await this._reschedule(l=>r(l),s)}};return this._reschedule(o=>r(o),s).then(()=>a)}_canExecuteSoloPass(e,t){const{geometryType:s}=this,{spatialRel:i}=t;return Fe(e)&&(i==="esriSpatialRelEnvelopeIntersects"||s==="esriGeometryPoint"&&(i==="esriSpatialRelIntersects"||i==="esriSpatialRelContains"||i==="esriSpatialRelWithin"))}_getQueryBBoxes(e){if(Fe(e)){if(He(e))return[ye(e.xmin,e.ymin,e.xmax,e.ymax)];if(Ue(e))return e.rings.map(t=>ye(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[Je(Ye(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,a=>{X.add(a)});const t=new Array(X.size);let s=0;return X.forEach(i=>t[s++]=i),X.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new T(z,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsParamsSupport(t),Se(e,this.geometryType,this.spatialReference),te(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await Re();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new T(z,"params should have at least a field or valueExpression",{params:e});V(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new T(z,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Se(e,this.geometryType,this.spatialReference),te(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:a}=e,r=a?a.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const o=" asc",n=" desc",l=s.map(u=>{const c=u.toLowerCase();return c.indexOf(o)>-1?c.split(o)[0]:c.indexOf(n)>-1?c.split(n)[0]:u}).filter(u=>r.indexOf(u)===-1);V(this.fieldsIndex,l,"orderByFields contains missing fields")}if(t&&t.length>0)V(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new T(z,"outFields should be specified for returnDistinctValues",{query:e});mt(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,a=s&&s.length,r=t&&t.length;if(i){if(!a||!r)throw new T(z,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});pt(this.fieldsIndex,i,t)}if(r){if(!wt(t))return;const o=t.map(n=>n.onStatisticField).filter(Boolean);V(this.fieldsIndex,o,"onStatisticFields contains missing fields"),a&&V(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const n of t){const{onStatisticField:l,statisticType:u}=n;if((u==="percentile_disc"||u==="percentile_cont")&&"statisticParameters"in n){const{statisticParameters:c}=n;if(!c)throw new T(z,"statisticParamters should be set for percentile type",{definition:n,query:e})}else if(u!=="count"&&l&&gt(l,this.fieldsIndex))throw new T(z,"outStatistics contains non-numeric fields",{definition:n,query:e})}}}async _getQueryEngineResultForStats(e={},t,s){let i;e=N(e);try{e=await this._schedule(()=>M(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s),i=await this._reschedule(()=>this._executeGeometryQuery(e,s),s),i=await this._reschedule(()=>i.executeAggregateIdsQuery(e),s),i=await this._reschedule(()=>i.executeObjectIdsQuery(e),s),i=await this._reschedule(()=>i.executeTimeQuery(e),s),i=await this._reschedule(()=>i.executeAttributesQuery(e),s)}catch(a){if(a!==O)throw a;i=new S([],null,this)}return i}}const St=Ae(),b=Ae();export{Vt as V};
