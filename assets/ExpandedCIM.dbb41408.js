var It=Object.defineProperty,Xt=Object.defineProperties;var zt=Object.getOwnPropertyDescriptors;var ut=Object.getOwnPropertySymbols;var Ht=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var pt=(t,e,o)=>e in t?It(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,U=(t,e)=>{for(var o in e||(e={}))Ht.call(e,o)&&pt(t,o,e[o]);if(ut)for(var o of ut(e))Jt.call(e,o)&&pt(t,o,e[o]);return t},B=(t,e)=>Xt(t,zt(e));import{aE as At,aG as yt,aF as ht,s as lt,q as Rt,bS as Yt,bd as kt,cg as H,ch as M,bl as C,r as D,ci as Ft,cj as Et,bF as Tt,K as Gt,ck as tt,cl as Wt,cm as Dt,bp as Ut}from"./vendor.4dd88096.js";import{t as jt,o as qt,x as Bt,b as Kt,d as gt,A as dt,$ as X,K as j}from"./CIMSymbolHelper.1b9868e3.js";import{q as st,k as it,m as rt}from"./enums.84480fc7.js";import{q as Vt,C as _t,B as Qt,v as Zt}from"./quantizationUtils.cd7a121d.js";import{b as Z}from"./Utils.9fa24473.js";import{L as te}from"./MaterialKey.e967c454.js";function ee(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;return o&&o.length===1?ee(o[0]):null}case"CIMVectorMarker":{var e;const o=t.markerGraphics;if(!o||o.length!==1)return null;const n=o[0];if(!n)return null;const i=n.geometry;if(!i)return null;const a=n.symbol;return!a||a.type!=="CIMPolygonSymbol"&&a.type!=="CIMLineSymbol"||(e=a.symbolLayers)!=null&&e.some(r=>!!r.effects)?null:{geom:i,asFill:a.type==="CIMPolygonSymbol"}}case"sdf":return{geom:t.geom,asFill:t.asFill}}return null}function oe(t){return t?t.rings?t.rings:t.paths?t.paths:t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function ie(t){let e=1/0,o=-1/0,n=1/0,i=-1/0;for(const a of t)for(const r of a)r[0]<e&&(e=r[0]),r[0]>o&&(o=r[0]),r[1]<n&&(n=r[1]),r[1]>i&&(i=r[1]);return new jt(e,n,o-e,i-n)}function St(t){let e=1/0,o=-1/0,n=1/0,i=-1/0;for(const a of t)for(const r of a)r[0]<e&&(e=r[0]),r[0]>o&&(o=r[0]),r[1]<n&&(n=r[1]),r[1]>i&&(i=r[1]);return[e,n,o,i]}function Mt(t){return t?t.rings?St(t.rings):t.paths?St(t.paths):At(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function Ot(t,e,o,n,i){const[a,r,s,l]=t;if(s<a||l<r)return[0,0,0];const u=s-a,m=l-r,p=128,f=1,c=Math.floor(.5*(.5*p-f)),y=(p-2*(c+f))/Math.max(u,m),g=Math.round(u*y)+2*c,S=Math.round(m*y)+2*c;let d=1;e&&(d=S/y/(e.ymax-e.ymin));let v=0,b=0;if(n)if(i){if(e&&o&&e.ymax-e.ymin>0){const N=(e.xmax-e.xmin)/(e.ymax-e.ymin);v=n.x/(o*N),b=n.y/o}}else v=n.x,b=n.y;return v=.5*(e.xmax+e.xmin)+v*(e.xmax-e.xmin),b=.5*(e.ymax+e.ymin)+b*(e.ymax-e.ymin),v-=a,b-=r,v*=y,b*=y,v+=c,b+=c,[d,v/g-.5,-(b/S-.5)]}function Ge(t){const e=oe(t.geom),o=ie(e),n=128,i=1,a=Math.floor(.5*(.5*n-i)),r=(n-2*(a+i))/Math.max(o.width,o.height),s=Math.round(o.width*r)+2*a,l=Math.round(o.height*r)+2*a,u=[];for(const p of e)if(p&&p.length>1){const f=[];for(const c of p){let[y,g]=c;y-=o.x,g-=o.y,y*=r,g*=r,y+=a-.5,g+=a-.5,t.asFill?f.push([y,g]):f.push([Math.round(y),Math.round(g)])}if(t.asFill){const c=f.length-1;f[0][0]===f[c][0]&&f[0][1]===f[c][1]||f.push(f[0])}u.push(f)}const m=re(u,s,l,a);return t.asFill&&ne(u,s,l,a,m),[ae(m,a),s,l]}function re(t,e,o,n){const i=e*o,a=new Array(i),r=n*n+1;for(let s=0;s<i;++s)a[s]=r;for(const s of t){const l=s.length;for(let u=1;u<l;++u){const m=s[u-1],p=s[u];let f,c,y,g;m[0]<p[0]?(f=m[0],c=p[0]):(f=p[0],c=m[0]),m[1]<p[1]?(y=m[1],g=p[1]):(y=p[1],g=m[1]);let S=Math.floor(f)-n,d=Math.floor(c)+n,v=Math.floor(y)-n,b=Math.floor(g)+n;S<0&&(S=0),d>e&&(d=e),v<0&&(v=0),b>o&&(b=o);const N=p[0]-m[0],O=p[1]-m[1],I=N*N+O*O;for(let P=S;P<d;P++)for(let x=v;x<b;x++){let k,z,L=(P-m[0])*N+(x-m[1])*O;L<0?(k=m[0],z=m[1]):L>I?(k=p[0],z=p[1]):(L/=I,k=m[0]+L*N,z=m[1]+L*O);const J=(P-k)*(P-k)+(x-z)*(x-z),F=(o-x-1)*e+P;J<a[F]&&(a[F]=J)}}}for(let s=0;s<i;++s)a[s]=Math.sqrt(a[s]);return a}function ne(t,e,o,n,i){for(const a of t){const r=a.length;for(let s=1;s<r;++s){const l=a[s-1],u=a[s];let m,p,f,c;l[0]<u[0]?(m=l[0],p=u[0]):(m=u[0],p=l[0]),l[1]<u[1]?(f=l[1],c=u[1]):(f=u[1],c=l[1]);let y=Math.floor(m),g=Math.floor(p)+1,S=Math.floor(f),d=Math.floor(c)+1;y<n&&(y=n),g>e-n&&(g=e-n),S<n&&(S=n),d>o-n&&(d=o-n);for(let v=S;v<d;++v){if(l[1]>v==u[1]>v)continue;const b=(o-v-1)*e;for(let N=y;N<g;++N)N<(u[0]-l[0])*(v-l[1])/(u[1]-l[1])+l[0]&&(i[b+N]=-i[b+N]);for(let N=n;N<y;++N)i[b+N]=-i[b+N]}}}}function ae(t,e){const o=2*e,n=t.length,i=new Uint8Array(4*n);for(let a=0;a<n;++a){const r=.5-t[a]/o;qt(r,i,4*a)}return i}const se=96/72;class vt{static executeEffects(e,o,n){const i=Kt(o),a=se;let r=new gt(i);for(const s of e){const l=dt(s);l&&(r=l.execute(r,s,a,n))}return r}static next(e){const o=e.next();return Bt(o),o}static applyEffects(e,o,n){if(!e)return o;let i=new gt(o);for(const s of e){const l=dt(s);l&&(i=l.execute(i,s,1,n))}let a,r=null;for(;a=i.next();)r?yt(r)?yt(a)&&r.paths.push(...a.paths):ht(r)&&ht(a)&&r.rings.push(...a.rings):r=a;return r}}function et(t,e,o,n,i){const a=t.referencesGeometry()&&i?le(e,n,i):e,r=t.repurposeFeature(a);try{return t.evaluate(B(U({},o),{$feature:r}))}catch(s){return lt.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}const nt=new Map;function le(t,e,o){const{transform:n,hasZ:i,hasM:a}=o;nt.has(e)||nt.set(e,ce(e));const r=nt.get(e)(t.geometry,n,i,a);return B(U({},t),{geometry:r})}function ce(t){const e={};switch(t){case"esriGeometryPoint":return(o,n,i,a)=>Zt(n,e,o,i,a);case"esriGeometryPolygon":return(o,n,i,a)=>Qt(n,e,o,i,a);case"esriGeometryPolyline":return(o,n,i,a)=>_t(n,e,o,i,a);case"esriGeometryMultipoint":return(o,n,i,a)=>Vt(n,e,o,i,a);default:return lt.getLogger("esri.views.2d.support.arcadeOnDemand").error(new Rt("mapview-arcade",`Unable to handle geometryType: ${t}`)),o=>o}}function xt(t){const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function We(t){const e=fe(t)+me(t);return xt(t.family)+(e.length>0?e:"-regular")}function fe(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function me(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}const Pt=lt.getLogger("esri.symbols.cim.cimAnalyzer");function ct(t){switch(t){case"Butt":return it.BUTT;case"Square":return it.SQUARE;default:return it.ROUND}}function ft(t){switch(t){case"Bevel":return rt.BEVEL;case"Miter":return rt.MITER;default:return rt.ROUND}}function ue(t){switch(t){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function pe(t){switch(t){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function ye(t){let e="",o="";if(t){const n=t.toLowerCase();n.indexOf("italic")!==-1?e="italic":n.indexOf("oblique")!==-1&&(e="oblique"),n.indexOf("bold")!==-1?o="bold":n.indexOf("light")!==-1&&(o="lighter")}return{style:e,weight:o}}function he(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}function bt(t,e,o,n){let i;t[e]?i=t[e]:(i={},t[e]=i),i[o]=n}function Nt(t){const e=t.markerPlacement;return e&&e.angleToLine?st.MAP:st.SCREEN}async function De(t,e,o,n,i){const a=n!=null?n:[];if(!t)return a;let r,s;const l={};if(t.type!=="CIMSymbolReference")return Pt.error("Expect cim type to be 'CIMSymbolReference'"),a;if(r=t.symbol,s=t.primitiveOverrides,s){const m=[];for(const p of s){const f=p.valueExpressionInfo;if(f&&e){const c=f.expression,y=Yt(c,e.spatialReference,e.fields).then(g=>{g&&bt(l,p.primitiveName,p.propertyName,g)});m.push(y)}else p.value!=null&&bt(l,p.primitiveName,p.propertyName,p.value)}m.length>0&&await Promise.all(m)}const u=[];switch(Lt(r,o,u),u.length>0&&await Promise.all(u),r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":ge(r,s,l,e,a,o,i)}return a}function ge(t,e,o,n,i,a,r){if(!t)return;const s=t.symbolLayers;if(!s)return;const l=t.effects;let u;const m=X.getSize(t);t.type==="CIMPointSymbol"&&t.angleAlignment==="Map"&&(u=st.MAP);let p=s.length;for(;p--;){const f=s[p];if(!f||f.enable===!1)continue;let c;l&&l.length&&(c=[...l]);const y=f.effects;y&&y.length&&(l?c.push(...y):c=[...y]);const g=[];let S;j.findEffectOverrides(c,e,g),S=g.length>0?$e(c,g,o,n):c;const d=[];switch(j.findApplicableOverrides(f,e,d),f.type){case"CIMSolidFill":de(f,S,o,d,n,i);break;case"CIMPictureFill":Se(f,S,o,d,n,a,i);break;case"CIMHatchFill":ve(f,S,o,d,n,i);break;case"CIMGradientFill":be(f,S,o,d,n,i);break;case"CIMSolidStroke":Ne(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMPictureStroke":Ce(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMGradientStroke":ke(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMCharacterMarker":if(at(f,S,o,d,n,i))break;break;case"CIMPictureMarker":if(at(f,S,o,d,n,i))break;t.type==="CIMLineSymbol"&&(u=Nt(f)),Me(f,S,o,d,n,a,i,u,m);break;case"CIMVectorMarker":if(at(f,S,o,d,n,i))break;t.type==="CIMLineSymbol"&&(u=Nt(f)),Oe(f,S,o,d,n,i,a,u,m,r);break;default:Pt.error("Cannot analyze CIM layer",f.type)}}}function de(t,e,o,n,i,a){const r=t.primitiveName,s=H(t.color),[l,u]=A(n,r,e,null),m=M(JSON.stringify(t)+u).toString();a.push({type:"fill",templateHash:m,materialHash:l?()=>m:m,cim:t,materialOverrides:null,colorLocked:t.colorLocked,color:h(r,o,"Color",i,s,Y),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e})}function Se(t,e,o,n,i,a,r){const s=t.primitiveName,l=t.tintColor?H(t.tintColor):{r:255,g:255,b:255,a:1},[u,m]=A(n,s,e,null),p=M(JSON.stringify(t)+m).toString(),f=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString();let c=C(t.scaleX);if("width"in t){const y=t.width;let g=1;const S=a.getResource(t.url);D(S)&&(g=S.width/S.height),c/=g*(t.height/y)}r.push({type:"fill",templateHash:p,materialHash:u?()=>f:f,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,color:h(s,o,"TintColor",i,l,Y),height:h(s,o,"Height",i,t.height),scaleX:h(s,o,"ScaleX",i,c),angle:h(s,o,"Rotation",i,C(t.rotation)),offsetX:h(s,o,"OffsetX",i,C(t.offsetX)),offsetY:h(s,o,"OffsetY",i,C(t.offsetY)),url:t.url})}function ve(t,e,o,n,i,a){const r=["Rotation","OffsetX","OffsetY"],s=n.filter(c=>c.primitiveName!==t.primitiveName&&r.indexOf(c.propertyName)===-1),l=t.primitiveName,[u,m]=A(n,l,e,null),p=M(JSON.stringify(t)+m).toString(),f=M(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();a.push({type:"fill",templateHash:p,materialHash:u?V(f,o,s,i):f,cim:t,materialOverrides:s,colorLocked:t.colorLocked,effects:e,color:{r:255,g:255,b:255,a:1},height:h(l,o,"Separation",i,t.separation),scaleX:1,angle:h(l,o,"Rotation",i,C(t.rotation)),offsetX:h(l,o,"OffsetX",i,C(t.offsetX)),offsetY:h(l,o,"OffsetY",i,C(t.offsetY))})}function be(t,e,o,n,i,a){const r=t.primitiveName,[s,l]=A(n,r,e,null),u=M(JSON.stringify(t)+l).toString();a.push({type:"fill",templateHash:u,materialHash:s?V(u,o,n,i):u,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function Ne(t,e,o,n,i,a,r,s){const l=t.primitiveName,u=H(t.color),m=t.width!==void 0?t.width:4,p=ct(t.capStyle),f=ft(t.joinStyle),c=t.miterLimit,[y,g]=A(n,l,e,null),S=M(JSON.stringify(t)+g).toString();let d,v;if(e&&e instanceof Array&&e.length>0){const b=e[e.length-1];if(b.type==="CIMGeometricEffectDashes"&&b.lineDashEnding==="NoConstraint"&&b.offsetAlongLine===null){const N=(e=[...e]).pop();d=N.dashTemplate,v=N.scaleDash}}a.push({type:"line",templateHash:S,materialHash:y?()=>S:S,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:h(l,o,"Color",i,u,Y),width:h(l,o,"Width",i,m),cap:h(l,o,"CapStyle",i,p),join:h(l,o,"JoinStyle",i,f),miterLimit:h(l,o,"MiterLimit",i,c),referenceWidth:s,zOrder:mt(t.name),dashTemplate:d,scaleDash:v})}function Ce(t,e,o,n,i,a,r,s){const l=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),u=t.primitiveName,m=H(t.tintColor),p=t.width!==void 0?t.width:4,f=ct(t.capStyle),c=ft(t.joinStyle),y=t.miterLimit,[g,S]=A(n,u,e,null),d=M(JSON.stringify(t)+S).toString();a.push({type:"line",templateHash:d,materialHash:g?()=>l:l,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:h(u,o,"TintColor",i,m,Y),width:h(u,o,"Width",i,p),cap:h(u,o,"CapStyle",i,f),join:h(u,o,"JoinStyle",i,c),miterLimit:h(u,o,"MiterLimit",i,y),referenceWidth:s,zOrder:mt(t.name),dashTemplate:null,scaleDash:!1,url:t.url})}function ke(t,e,o,n,i,a,r,s){const l=t.primitiveName,u=t.width!==void 0?t.width:4,m=ct(t.capStyle),p=ft(t.joinStyle),f=t.miterLimit,[c,y]=A(n,l,e,null),g=M(JSON.stringify(t)+y).toString();a.push({type:"line",templateHash:g,materialHash:c?V(g,o,n,i):g,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:{r:128,g:128,b:128,a:1},width:h(l,o,"Width",i,u),cap:h(l,o,"CapStyle",i,m),join:h(l,o,"JoinStyle",i,p),miterLimit:h(l,o,"MiterLimit",i,f),referenceWidth:s,zOrder:mt(t.name),dashTemplate:null,scaleDash:!1})}function at(t,e,o,n,i,a){const r=t.markerPlacement;if(!r||r.type!=="CIMMarkerPlacementInsidePolygon")return!1;const s=r,l=["Rotation","OffsetX","OffsetY"],u=n.filter(d=>d.primitiveName!==t.primitiveName&&l.indexOf(d.propertyName)===-1),m="url"in t?t.url:null,[p,f]=A(n,s.primitiveName,e,null),c=M(JSON.stringify(t)+f).toString();let y=s.stepY,g=null,S=1;return r.shiftOddRows&&(y*=2,g=function(d){return d?2*d:0},S=.5),a.push({type:"fill",templateHash:c,materialHash:p?V(c,o,u,i):c,cim:t,materialOverrides:u,colorLocked:t.colorLocked,effects:e,color:{r:255,g:255,b:255,a:1},height:h(s.primitiveName,o,"StepY",i,y,g),scaleX:S,angle:h(s.primitiveName,o,"GridAngle",i,s.gridAngle),offsetX:h(s.primitiveName,o,"OffsetX",i,C(s.offsetX)),offsetY:h(s.primitiveName,o,"OffsetY",i,C(s.offsetY)),url:m}),!0}function Me(t,e,o,n,i,a,r,s,l){var u;const m=t.primitiveName,p=C(t.size);let f=C(t.scaleX);const c=C(t.rotation),y=C(t.offsetX),g=C(t.offsetY),S=t.tintColor?H(t.tintColor):{r:255,g:255,b:255,a:1},d=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),v=wt(t.markerPlacement,n,o,i),[b,N]=A(n,m,e,v),O=M(JSON.stringify(t)+N).toString(),I=(u=t.anchorPoint)!=null?u:{x:0,y:0};if("width"in t){const P=t.width;let x=1;const k=a.getResource(t.url);D(k)&&(x=k.width/k.height),f/=x*(p/P)}r.push({type:"marker",templateHash:O,materialHash:b?()=>d:d,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:!1,alignment:s,size:h(m,o,"Size",i,p),scaleX:h(m,o,"ScaleX",i,f),rotation:h(m,o,"Rotation",i,c),offsetX:h(m,o,"OffsetX",i,y),offsetY:h(m,o,"OffsetY",i,g),color:h(m,o,"TintColor",i,S,Y),anchorPoint:{x:I.x,y:-I.y},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:t.rotateClockwise,referenceSize:l,sizeRatio:1,markerPlacement:t.markerPlacement,url:t.url})}function Oe(t,e,o,n,i,a,r,s,l,u){const m=t.markerGraphics;if(!m)return;let p=0;if(t.scaleSymbolsProportionally){const c=t.frame;c&&(p=c.ymax-c.ymin)}const f=wt(t.markerPlacement,n,o,i);for(const c of m)if(c){const y=c.symbol;if(!y)continue;switch(y.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Pe(t,e,f,c,n,o,i,a,r,s,l,p,u);break;case"CIMTextSymbol":xe(t,e,f,c,o,n,i,a,s,l,p)}}}function xe(t,e,o,n,i,a,r,s,l,u,m){const p=[];j.findApplicableOverrides(n,a,p);const f=n.geometry;if(!("x"in f)||!("y"in f))return;const c=n.symbol,y=he(c),g=ye(c.fontStyleName),S=xt(c.fontFamilyName);c.font=U({family:S,decoration:y},g);const d=t.frame,v=f.x-.5*(d.xmin+d.xmax),b=f.y-.5*(d.ymin+d.ymax),N=t.size/m,O=t.primitiveName,I=C(c.height)*N,P=C(c.angle),x=C(t.offsetX)+(C(c.offsetX)+v)*N,k=C(t.offsetY)+(C(c.offsetY)+b)*N,z=H(X.getFillColor(c));let L=H(X.getStrokeColor(c)),J=X.getStrokeWidth(c);J||(L=H(X.getFillColor(c.haloSymbol)),J=c.haloSize*N);const[F,q]=A(a,O,e,o),E=JSON.stringify(t.effects)+Number(t.colorLocked)+JSON.stringify(t.anchorPoint)+t.anchorPointUnits+JSON.stringify(t.markerPlacement),R=M(JSON.stringify(n)+E+q).toString();let $=h(n.primitiveName,i,"TextString",r,n.textString,Ft,c.textCase);if($==null)return;const{fontStyleName:T}=c,G=S+(T?"-"+T.toLowerCase():"-regular"),w=G;typeof $=="string"&&$.indexOf("[")>-1&&c.fieldMap&&($=Et(c.fieldMap,$,c.textCase)),s.push({type:"text",templateHash:R,materialHash:F||typeof $=="function"||$.match(/\[(.*?)\]/)?(_,ot,Q)=>w+"-"+Tt($,_,ot,Q):w+"-"+M($),cim:c,materialOverrides:null,colorLocked:t.colorLocked,effects:e,alignment:l,anchorPoint:{x:t.anchorPoint?t.anchorPoint.x:0,y:t.anchorPoint?t.anchorPoint.y:0},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",fontName:G,decoration:y,weight:h(O,i,"Weight",r,g.weight),style:h(O,i,"Size",r,g.style),size:h(O,i,"Size",r,I),angle:h(O,i,"Rotation",r,P),offsetX:h(O,i,"OffsetX",r,x),offsetY:h(O,i,"OffsetY",r,k),horizontalAlignment:ue(c.horizontalAlignment),verticalAlignment:pe(c.verticalAlignment),text:$,color:z,outlineColor:L,outlineSize:J,referenceSize:u,sizeRatio:1,markerPlacement:o})}function Pe(t,e,o,n,i,a,r,s,l,u,m,p,f){const c=n.symbol,y=c.symbolLayers;if(!y)return;if(f)return void Ct(t,e,o,n,a,i,r,s,l,u,m,p);let g=y.length;if(Ie(y))return void we(t,e,o,n,y,i,a,r,s,u,m,p);const S=vt.applyEffects(c.effects,n.geometry,l.geometryEngine);if(S)for(;g--;){const v=y[g];if(v&&v.enable!==!1)switch(v.type){case"CIMSolidFill":case"CIMSolidStroke":{var d;const b=vt.applyEffects(v.effects,S,l.geometryEngine),N=Mt(b);if(!N)continue;const[O,I,P]=Ot(N,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),x=v.type==="CIMSolidFill",k={type:"sdf",geom:b,asFill:x},z=t.primitiveName,L=(d=C(t.size))!=null?d:10,J=C(t.rotation),F=C(t.offsetX),q=C(t.offsetY),E=v.path,R=v.primitiveName,$=H(x?X.getFillColor(v):X.getStrokeColor(v)),T=x?{r:0,g:0,b:0,a:0}:H(X.getStrokeColor(v)),G=X.getStrokeWidth(v);if(!x&&!G)break;let w=!1,_="";for(const W of i)W.primitiveName!==R&&W.primitiveName!==z||(W.value!==void 0?_+=`-${W.primitiveName}-${W.propertyName}-${JSON.stringify(W.value)}`:W.valueExpressionInfo&&(w=!0));D(e)&&typeof e=="function"&&(w=!0);const ot=JSON.stringify(B(U({},t),{markerGraphics:null})),Q=M(JSON.stringify(k)+E).toString(),$t={type:"marker",templateHash:M(JSON.stringify(n)+JSON.stringify(v)+ot+_).toString(),materialHash:w?()=>Q:Q,cim:k,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:I,y:P},isAbsoluteAnchorPoint:!1,size:h(t.primitiveName,a,"Size",r,L),rotation:h(t.primitiveName,a,"Rotation",r,J),offsetX:h(t.primitiveName,a,"OffsetX",r,F),offsetY:h(t.primitiveName,a,"OffsetY",r,q),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:O,color:h(R,a,"Color",r,$,Y),outlineColor:h(R,a,"Color",r,T,Y),outlineWidth:h(R,a,"Width",r,G),markerPlacement:o,path:E};s.push($t);break}default:Ct(t,e,o,n,a,i,r,s,l,u,m,p)}}}function we(t,e,o,n,i,a,r,s,l,u,m,p){const f=n.geometry,c=i[0],y=i[1],g=Mt(f);if(!g)return;const[S,d,v]=Ot(g,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),b={type:"sdf",geom:f,asFill:!0},N=t.primitiveName,O=C(t.size),I=C(t.rotation),P=C(t.offsetX),x=C(t.offsetY),k=y.path,z=y.primitiveName,L=c.primitiveName,J=H(X.getFillColor(y)),F=H(X.getStrokeColor(c)),q=X.getStrokeWidth(c);let E=!1,R="";for(const w of a)w.primitiveName!==z&&w.primitiveName!==L&&w.primitiveName!==N||(w.value!==void 0?R+=`-${w.primitiveName}-${w.propertyName}-${JSON.stringify(w.value)}`:w.valueExpressionInfo&&(E=!0));const $=JSON.stringify(B(U({},t),{markerGraphics:null})),T=M(JSON.stringify(b)+k).toString(),G={type:"marker",templateHash:M(JSON.stringify(n)+JSON.stringify(y)+JSON.stringify(c)+$+R).toString(),materialHash:E?()=>T:T,cim:b,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:d,y:v},isAbsoluteAnchorPoint:!1,size:h(t.primitiveName,r,"Size",s,O),rotation:h(t.primitiveName,r,"Rotation",s,I),offsetX:h(t.primitiveName,r,"OffsetX",s,P),offsetY:h(t.primitiveName,r,"OffsetY",s,x),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:S,color:h(z,r,"Color",s,J,Y),outlineColor:h(L,r,"Color",s,F,Y),outlineWidth:h(L,r,"Width",s,q),markerPlacement:o,path:k};l.push(G)}function Ct(t,e,o,n,i,a,r,s,l,u,m,p){const f=Le(t,n);let c=[];const y=["Rotation","OffsetX","OffsetY"];c=a.filter(k=>k.primitiveName!==t.primitiveName||y.indexOf(k.propertyName)===-1);let g="";for(const k of a)k.value!==void 0&&(g+=`-${k.primitiveName}-${k.propertyName}-${JSON.stringify(k.value)}`);const[S,d,v]=X.getTextureAnchor(f,l),b=t.primitiveName,N=C(t.rotation),O=C(t.offsetX),I=C(t.offsetY),P=M(JSON.stringify(f)+g).toString(),x={type:"marker",templateHash:P,materialHash:c.length>0||D(e)&&typeof e=="function"?V(P,i,c,r):P,cim:f,materialOverrides:c,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:S,y:d},isAbsoluteAnchorPoint:!1,size:t.size,rotation:h(b,i,"Rotation",r,N),offsetX:h(b,i,"OffsetX",r,O),offsetY:h(b,i,"OffsetY",r,I),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:v/Gt(t.size),markerPlacement:o};s.push(x)}function Le(t,e){return{type:t.type,enable:!0,name:t.name,colorLocked:t.colorLocked,primitiveName:t.primitiveName,anchorPoint:t.anchorPoint,anchorPointUnits:t.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:t.rotateClockwise,rotation:0,size:t.size,billboardMode3D:t.billboardMode3D,depth3D:t.depth3D,frame:t.frame,markerGraphics:[e],scaleSymbolsProportionally:t.scaleSymbolsProportionally,respectFrame:t.respectFrame,clippingPath:t.clippingPath}}function mt(t){if(t&&t.indexOf("Level_")===0){const e=parseInt(t.substr(6),10);if(!isNaN(e))return e}return 0}function Y(t){if(!t||t.length===0)return null;const e=new Ut(t).toRgba();return{r:e[0],g:e[1],b:e[2],a:e[3]}}function h(t,e,o,n,i,a,r){const s=e[t];if(s){const l=s[o];if(typeof l=="string"||typeof l=="number"||l instanceof Array)return a?a.call(null,l,r):l;if(l!=null&&l instanceof tt)return(u,m,p)=>{let f=et(l,u,{$view:p},n.geometryType,m);return f!==null&&a&&(f=a.call(null,f,r)),f!==null?f:i}}return i}function $e(t,e,o,n){for(const a of e)if(a.valueExpressionInfo){const r=o[a.primitiveName]&&o[a.primitiveName][a.propertyName];r instanceof tt&&(a.fn=(s,l,u)=>et(r,s,{$view:u},n.geometryType,l))}const i=a=>a&&a.charAt(0).toLowerCase()+a.substr(1);return(a,r,s)=>{for(const m of e)m.fn&&(m.value=m.fn(a,r,s));const l=[];for(let m of t){var u;const p=(u=m)==null?void 0:u.primitiveName;if(p){let f=!1;for(const c of e)if(c.primitiveName===p){const y=i(c.propertyName);c.value!=null&&c.value!==m[y]&&(f||(m=kt(m),f=!0),m[y]=c.value)}}l.push(m)}return l}}function wt(t,e,o,n){const i=[];if(j.findApplicableOverrides(t,e,i),i.length===0)return t;for(const r of i)if(r.valueExpressionInfo){const s=o[r.primitiveName]&&o[r.primitiveName][r.propertyName];s instanceof tt&&(r.fn=(l,u,m)=>et(s,l,{$view:m},n.geometryType,u))}const a=r=>r&&r.charAt(0).toLowerCase()+r.substr(1);return(r,s,l)=>{for(const p of i)p.fn&&(p.value=p.fn(r,s,l));const u=kt(t),m=t.primitiveName;for(const p of i)if(p.primitiveName===m){const f=a(p.propertyName);p.value!=null&&p.value!==u[f]&&(u[f]=p.value)}return u}}function V(t,e,o,n){for(const i of o)if(i.valueExpressionInfo){const a=e[i.primitiveName]&&e[i.primitiveName][i.propertyName];a instanceof tt&&(i.fn=(r,s,l)=>et(a,r,{$view:l},n.geometryType,s))}return(i,a,r)=>{for(const s of o)s.fn&&(s.value=s.fn(i,a,r));return M(t+j.buildOverrideKey(o)).toString()}}function Ue(t,e){if(!e||e.length===0)return t;const o=JSON.parse(JSON.stringify(t));return j.applyOverrides(o,e),o}function A(t,e,o,n){let i=!1,a="";for(const r of t)r.primitiveName===e&&(r.value!==void 0?a+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(i=!0));return D(o)&&typeof o=="function"&&(i=!0),D(n)&&typeof n=="function"&&(i=!0),[i,a]}function Lt(t,e,o){if(t&&e)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const n=t.symbolLayers;if(!n)return;for(const i of n)switch(Xe(i,e,o),i.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in i&&i.url&&o.push(e.fetchResource(i.url,null));break;case"CIMVectorMarker":{const a=i.markerGraphics;if(!a)continue;for(const r of a)if(r){const s=r.symbol;s&&Lt(s,e,o)}}}}}}const Ie=t=>t&&t.length===2&&t[0].enable&&t[1].enable&&t[0].type==="CIMSolidStroke"&&t[1].type==="CIMSolidFill"&&!t[0].effects&&!t[1].effects;let K;function Xe(t,e,o){if(!(!t.effects||D(e.geometryEngine))){if(K)return void o.push(K);Wt(t.effects)&&(K=Dt(),o.push(K),K.then(n=>e.geometryEngine=n))}}const ze={marker:Z.MARKER,fill:Z.FILL,line:Z.LINE,text:Z.TEXT};class je{constructor(e,o,n,i){const a={minScale:o==null?void 0:o.minScale,maxScale:o==null?void 0:o.maxScale},r=He(a);this.layers=e,this.data=o,this.hash=this._createHash()+r,this.rendererKey=n;const s={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:n};for(const l of e){const u=ze[l.type];l.materialKey=te(u,s),l.maxVVSize=i,l.scaleInfo=a,l.templateHash+=r}}get type(){return"expanded-cim"}_createHash(){let e="";for(const o of this.layers)e+=o.templateHash;return e}}function He(t){return t.minScale||t.maxScale?t.minScale+"-"+t.maxScale:""}export{De as H,vt as f,je as l,Ge as m,We as n,Ue as o,ee as r,et as s};
