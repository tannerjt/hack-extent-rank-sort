var j=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var A=(r,e,s)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,m=(r,e)=>{for(var s in e||(e={}))x.call(e,s)&&A(r,s,e[s]);if($)for(var s of $(e))J.call(e,s)&&A(r,s,e[s]);return r},g=(r,e)=>k(r,w(e));import{aa as i,ab as o,b,dS as p,cC as O,d as T,g as R,ac as P,cp as q,d8 as I,b1 as E,r as K,dA as M,dT as Q,C as U,dU as V}from"./vendor.4dd88096.js";import{a as Z,i as d,u as z,f as D,d as G,o as H}from"./NAMessage.4346b799.js";import{c as L}from"./DirectionsFeatureSet.a95c0b1e.js";import"./GPMessage.29469677.js";function W(r){return r.features.map(e=>{const s=E.fromJSON(r.spatialReference),n=R.fromJSON(e);return K(n.geometry)&&(n.geometry.spatialReference=s),n})}function c(r){return I.fromJSON(r).features.map(e=>e.geometry)}let t=class extends q{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return c(r)}readIncidents(r){return c(r)}readPointBarriers(r,e){return c(e.barriers)}readPolylineBarriers(r){return c(r)}readPolygonBarriers(r){return c(r)}readRoutes(r){return W(r)}};i([o({type:[L]})],t.prototype,"directions",void 0),i([o({type:[b]})],t.prototype,"facilities",void 0),i([p("facilities")],t.prototype,"readFacilities",null),i([o({type:[b]})],t.prototype,"incidents",void 0),i([p("incidents")],t.prototype,"readIncidents",null),i([o({type:[Z]})],t.prototype,"messages",void 0),i([o({type:[b]})],t.prototype,"pointBarriers",void 0),i([p("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),i([o({type:[O]})],t.prototype,"polylineBarriers",void 0),i([p("polylineBarriers")],t.prototype,"readPolylineBarriers",null),i([o({type:[T]})],t.prototype,"polygonBarriers",void 0),i([p("polygonBarriers")],t.prototype,"readPolygonBarriers",null),i([o({type:[R]})],t.prototype,"routes",void 0),i([p("routes")],t.prototype,"readRoutes",null),t=i([P("esri.rest.support.ClosestFacilitySolveResult")],t);const X=t,Y=H({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function _(r,e,s){const n=[],u=[],l={},y={},h=M(r),{path:v}=h;e.incidents&&e.incidents.features&&d(e.incidents.features,u,"incidents.features",l),e.facilities&&e.facilities.features&&d(e.facilities.features,u,"facilities.features",l),e.pointBarriers&&e.pointBarriers.features&&d(e.pointBarriers.features,u,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&d(e.polylineBarriers.features,u,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&d(e.polygonBarriers.features,u,"polygonBarriers.features",l);const S=await Q(u);for(const a in l){const f=l[a];n.push(a),y[a]=S.slice(f[0],f[1])}if(z(y,n)){let a=null;try{a=await D(v,e.apiKey,s)}catch{}a&&!a.hasZ&&G(y,n)}for(const a in y)y[a].forEach((f,F)=>{e.get(a)[F].geometry=f});const N=g(m({},s),{query:g(m(m({},h.query),Y.toQueryParams(e)),{f:"json"})}),{data:C}=await U(`${v}/solveClosestFacility`,N);return X.fromJSON(C)}let B=class extends V{constructor(r){super(r),this.url=null}solve(r,e){return _(this.url,r,e)}};i([o()],B.prototype,"url",void 0),B=i([P("esri.tasks.ClosestFacilityTask")],B);const ae=B;export{ae as default};
