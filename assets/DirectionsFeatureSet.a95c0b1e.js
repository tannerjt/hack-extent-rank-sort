var S=Object.defineProperty,F=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var b=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&b(e,r,t[r]);if(R)for(var r of R(t))Z.call(t,r)&&b(e,r,t[r]);return e},D=(e,t)=>F(e,M(t));import{aa as n,ab as l,ac as O,g as _,cI as $,dS as C,d8 as E,b1 as L,cC as w,b as N,w as z}from"./vendor.4dd88096.js";let T=class extends _{};n([l()],T.prototype,"events",void 0),n([l()],T.prototype,"strings",void 0),T=n([O("esri.rest.support.DirectionsFeature")],T);const G=T;let a=class extends E{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const h=(r=t.summary.envelope.spatialReference)!=null?r:t.spatialReference,d=h&&L.fromJSON(h);return e.map(c=>{var i,p;const f=this._decompressGeometry(c.compressedGeometry),v=new w(D(j({},f),{spatialReference:d})),s=(i=(p=c.events)==null?void 0:p.map(g=>{const{arriveTimeUTC:I,ETA:x,point:{x:o,y:u,z:m},strings:y}=g;return new G({geometry:new N({x:o,y:u,z:m,hasZ:m!==void 0,spatialReference:d}),attributes:{ETA:x,arriveTimeUTC:I},strings:y})}))!=null?i:[];return new G({attributes:c.attributes,events:s,geometry:v,strings:c.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:r})=>z(r)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,h=0,d=0;const c=[];let i,p,f,v,s,g,I,x,o=0,u=0,m=0;if(s=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),s||(s=[]),parseInt(s[o],32)===0){o=2;const y=parseInt(s[o],32);o++,g=parseInt(s[o],32),o++,1&y&&(u=s.indexOf("|")+1,I=parseInt(s[u],32),u++),2&y&&(m=s.indexOf("|",u)+1,x=parseInt(s[m],32),m++)}else g=parseInt(s[o],32),o++;for(;o<s.length&&s[o]!=="|";){i=parseInt(s[o],32)+t,o++,t=i,p=parseInt(s[o],32)+r,o++,r=p;const y=[i/g,p/g];u&&(v=parseInt(s[u],32)+h,u++,h=v,y.push(v/I)),m&&(f=parseInt(s[m],32)+d,m++,d=f,y.push(f/x)),c.push(y)}return{paths:[c],hasZ:u>0,hasM:m>0}}_mergePolylinesToSinglePath(e,t){if(e.length===0)return new w({spatialReference:t});const r=[];for(const i of e)for(const p of i.paths)r.push(...p);const h=[];r.forEach((i,p)=>{p!==0&&i[0]===r[p-1][0]&&i[1]===r[p-1][1]||h.push(i)});const{hasM:d,hasZ:c}=e[0];return new w({hasM:d,hasZ:c,paths:[h],spatialReference:t})}};n([l({type:$,json:{read:{source:"summary.envelope"}}})],a.prototype,"extent",void 0),n([l()],a.prototype,"features",void 0),n([C("features")],a.prototype,"readFeatures",null),n([l()],a.prototype,"geometryType",void 0),n([l({readOnly:!0})],a.prototype,"mergedGeometry",null),n([l()],a.prototype,"routeId",void 0),n([l()],a.prototype,"routeName",void 0),n([l({value:null,readOnly:!0})],a.prototype,"strings",null),n([l({json:{read:{source:"summary.totalDriveTime"}}})],a.prototype,"totalDriveTime",void 0),n([l({json:{read:{source:"summary.totalLength"}}})],a.prototype,"totalLength",void 0),n([l({json:{read:{source:"summary.totalTime"}}})],a.prototype,"totalTime",void 0),a=n([O("esri.rest.support.DirectionsFeatureSet")],a);const k=a;export{k as c};