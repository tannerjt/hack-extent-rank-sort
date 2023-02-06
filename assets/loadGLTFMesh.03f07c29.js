import{C as G,r as i,w as h,O as b,l3 as L,bp as R,N as P,fC as M,t as _}from"./vendor.4dd88096.js";import{a as B}from"./quat.5c8f9d5a.js";import{r as D}from"./vec4f64.a3e91e77.js";import{m as j,c as k,p as q,f as z}from"./meshFeatureSet.940b068c.js";import{T as Q,i as N,c as S,x as O,u as V,L as H,O as F,E as J}from"./BufferView.c4c38763.js";import{a as K,f as U,g as W,r as X,c as Y,h as Z}from"./vec33.e0c49c9b.js";import{n as tt,a as et,r as w,o as ot,b as nt,t as A,d as rt,m as st,e as at,g as it,p as ct,i as lt,j as ut,k as ft,q as mt}from"./DefaultMaterial_COLOR_GAMMA.ae037b1c.js";import{b as pt}from"./georeference.8df70de1.js";import{E as C,D as T}from"./enums.457e23f9.js";import"./earcut.91e104de.js";import"./deduplicate.a22bcc58.js";import"./types.ba25b516.js";import"./Version.30173ee8.js";async function Dt(t,e,n){const s=new tt(dt(n)),o=(await et(s,e,n,!0)).model,f=o.lods.shift(),l=new Map,c=new Map;o.textures.forEach(($,E)=>l.set(E,$t($))),o.materials.forEach(($,E)=>c.set(E,ht($,l)));const a=xt(f);for(const $ of a.parts)bt(a,$,c);const{position:d,normal:u,tangent:r,color:m,texCoord0:p}=a.vertexAttributes,x={position:d.typedBuffer,normal:i(u)?u.typedBuffer:null,tangent:i(r)?r.typedBuffer:null,uv:i(p)?p.typedBuffer:null,color:i(m)?m.typedBuffer:null},v=pt(x,t,n);return{transform:v.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new q({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function dt(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,n,s)=>{const o=t.resolveFile(e);return(await G(o,{responseType:n==="image"?"image":n==="binary"?"array-buffer":"json",signal:i(s)?s.signal:null})).data}}:null}function y(t,e){if(_(t))return"-";const n=t.typedBuffer;return`${L(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function gt(t){return i(t)?t.toString():"-"}function xt(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,o=new Map,f=[];for(const l of t.parts){const{attributes:{position:c,normal:a,color:d,tangent:u,texCoord0:r}}=l,m=`
      ${y(c,s)}/
      ${y(a,s)}/
      ${y(d,s)}/
      ${y(u,s)}/
      ${y(r,s)}/
      ${gt(l.transform)}
    `;let p=!1;const x=L(o,m,()=>(p=!0,{start:e,length:c.count}));p&&(e+=c.count),a&&(n.normal=!0),d&&(n.color=!0),u&&(n.tangent=!0),r&&(n.texCoord0=!0),f.push({gltf:l,writeVertices:p,region:x})}return{vertexAttributes:{position:w(Q,e),normal:n.normal?w(N,e):null,tangent:n.tangent?w(S,e):null,color:n.color?w(O,e):null,texCoord0:n.texCoord0?w(V,e):null},parts:f,components:[]}}function $t(t){return new j({data:t.data,wrap:Et(t.parameters.wrap)})}function ht(t,e){const n=new R(At(t.color,t.opacity)),s=t.emissiveFactor?new R(Ct(t.emissiveFactor)):null;return new k({color:n,colorTexture:h(b(t.textureColor,o=>e.get(o))),normalTexture:h(b(t.textureNormal,o=>e.get(o))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,o=>e.get(o))),occlusionTexture:h(b(t.textureOcclusion,o=>e.get(o))),alphaMode:vt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,o=>e.get(o)))})}function bt(t,e,n){e.writeVertices&&wt(t,e);const s=e.gltf,o=yt(s.indices||s.attributes.position.count,s.primitiveType),f=e.region.start;if(f)for(let l=0;l<o.length;l++)o[l]+=f;t.components.push(new z({faces:o,material:n.get(s.material),trustSourceNormals:!0}))}function wt(t,e){const{position:n,normal:s,tangent:o,color:f,texCoord0:l}=t.vertexAttributes,c=e.region.start,{attributes:a,transform:d}=e.gltf,u=a.position.count;if(K(n.slice(c,u),a.position,d),i(a.normal)&&i(s)){const r=M(B(),d);U(s.slice(c,u),a.normal,r)}else i(s)&&W(s,0,0,1,{dstIndex:c,count:u});if(i(a.tangent)&&i(o)){const r=M(B(),d);nt(o.slice(c,u),a.tangent,r)}else i(o)&&A(o,0,0,1,1,{dstIndex:c,count:u});if(i(a.texCoord0)&&i(l)?rt(l.slice(c,u),a.texCoord0):i(l)&&st(l,0,0,{dstIndex:c,count:u}),i(a.color)&&i(f)){const r=a.color,m=f.slice(c,u);if(r.elementCount===4)r instanceof S?at(m,r,255):r instanceof O?it(m,r):r instanceof H&&ct(m,r,8);else{A(m,255,255,255,255);const p=F.fromTypedArray(m.typedBuffer,m.typedBufferStride);r instanceof N?X(p,r,255):r instanceof F?Y(p,r):r instanceof J&&Z(p,r,8)}}else i(f)&&A(f.slice(c,u),255,255,255,255)}function yt(t,e){switch(e){case C.TRIANGLES:return ft(t,mt);case C.TRIANGLE_STRIP:return ut(t);case C.TRIANGLE_FAN:return lt(t)}}function vt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Et(t){return{horizontal:I(t.s),vertical:I(t.t)}}function I(t){switch(t){case T.CLAMP_TO_EDGE:return"clamp";case T.MIRRORED_REPEAT:return"mirror";case T.REPEAT:return"repeat"}}function g(t){return t**(1/ot)*255}function At(t,e){return D(g(t[0]),g(t[1]),g(t[2]),e)}function Ct(t){return P(g(t[0]),g(t[1]),g(t[2]))}export{Dt as loadGLTFMesh};