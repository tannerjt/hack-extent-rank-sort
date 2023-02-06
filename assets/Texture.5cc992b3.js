var z=Object.defineProperty;var L=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(a,t,e)=>t in a?z(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,y=(a,t)=>{for(var e in t||(t={}))k.call(t,e)&&S(a,e,t[e]);if(L)for(var e of L(t))H.call(t,e)&&S(a,e,t[e]);return a};import{s as Y,p as q,q as K,o as w,r as A,u as F,w as Z}from"./vendor.4dd88096.js";import{f as v,M as g,L as E,D as R,t as j,G,P as b,U as I}from"./enums.457e23f9.js";const J=Y.getLogger("esri/views/webgl");function Q(a,t){switch(t){case a.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case a.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case a.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case a.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case a.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case a.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const C=!!q("enable-feature:webgl-debug");function tt(){return C}function nt(){return C}function D(a){if(tt()){const t=a.getError();if(t){const e=Q(a,t),i=new Error().stack;J.error(new K("webgl-error","WebGL error occured",{message:e,stack:i}))}}}function U(a){return window.WebGL2RenderingContext&&a instanceof window.WebGL2RenderingContext}const O=4;class _{constructor(t,e,i=null){if(this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(v.Texture,this),this._descriptor=y({target:g.TEXTURE_2D,samplingMode:E.LINEAR,wrapMode:R.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},e),t.type!==w.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),x(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(v.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;if(i.width!==t||i.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=t,i.height=e,this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=g.TEXTURE_CUBE_MAP_POSITIVE_X;e<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(t,e){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),t===void 0&&(t=null);const r=this._descriptor;e!=null||(e=r.target);const o=x(e);var p;t===null&&(r.width=r.width||O,r.height=r.height||O,o&&(r.depth=(p=r.depth)!=null?p:1));const n=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),_._validateTexture(this._context,r),this._configurePixelStorage();const s=r.pixelFormat;let l=r.internalFormat?r.internalFormat:this._deriveInternalFormat(s,r.dataType);if(P(t)){let h=t.width,m=t.height;const u=1;t instanceof HTMLVideoElement&&(h=t.videoWidth,m=t.videoHeight),r.width&&r.height,o&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,l,r.hasMipmap,h,m,u),this._texImage(e,0,l,h,m,u,t),D(i),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=h),r.height===void 0&&(r.height=m),o&&r.depth===void 0&&(r.depth=u)}else{const{width:h,height:m,depth:u}=r;if(h!=null&&m!=null||console.error("Width and height must be specified!"),o&&u==null&&console.error("Depth must be specified!"),r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,l,r.hasMipmap,h,m,u),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8),N(t)){const c=t.levels,d=X(e,h,m,u),T=Math.min(d-1,c.length-1);U(i)?i.texParameteri(r.target,i.TEXTURE_MAX_LEVEL,T):r.hasMipmap=r.hasMipmap&&d===c.length;const M=l;if(!rt(M))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((f,W,B,V)=>{const $=c[Math.min(f,c.length-1)];this._compressedTexImage(e,f,M,W,B,V,$)},T)}else A(t)?(this._texImage(e,0,l,h,m,u,t),D(i),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((c,d,T,M)=>{this._texImage(e,c,l,d,T,M,null),D(i)})}_._applySamplingMode(i,this._descriptor),_._applyWrapMode(i,this._descriptor),_._applyAnisotropicFilteringParameters(this._context,this._descriptor),D(i),this._context.bindTexture(n,_.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,r,o,p){p||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,s=this._descriptor,{pixelFormat:l,internalFormat:h,dataType:m,isImmutable:u,target:c}=s;if(u&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const d=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||r>s.width||o>s.height||e+r>s.width||i+o>s.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),P(p)?n.texSubImage2D(c,t,e,i,l,m,p):N(p)?n.compressedTexSubImage2D(c,t,e,i,r,o,h,p.levels[t]):n.texSubImage2D(c,t,e,i,r,o,l,m,p),this._context.bindTexture(d,_.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,e,i,r,o,p,n,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl;if(!U(l))throw new Error("3D textures are not supported in WebGL1");const h=this._descriptor,{pixelFormat:m,dataType:u,isImmutable:c,target:d,internalFormat:T}=h;if(c&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");x(d)||console.warn("Attempting to set 3D texture data on a non-3D texture");const M=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),(e<0||i<0||r<0||o>h.width||p>h.height||n>h.depth||e+o>h.width||i+p>h.height||r+n>h.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),N(s))s=s.levels[t],l.compressedTexSubImage3D(d,t,e,i,r,o,p,n,T,s);else{const f=s;l.texSubImage3D(d,t,e,i,r,o,p,n,m,u,f)}this._context.bindTexture(M,_.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,_._validateTexture(this._context,t)}t.samplingMode===E.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=E.LINEAR_MIPMAP_NEAREST):t.samplingMode===E.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=E.NEAREST_MIPMAP_NEAREST);const e=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,_.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,_._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(_._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(_._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if(this._context.type===w.WEBGL1)return t;switch(e){case G.FLOAT:switch(t){case b.RGBA:return I.RGBA32F;case b.RGB:return I.RGB32F;default:throw new Error("Unable to derive format")}case G.UNSIGNED_BYTE:switch(t){case b.RGBA:return I.RGBA8;case b.RGB:return I.RGB8}default:return t}}_configurePixelStorage(){const t=this._context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(t,e,i,r,o,p){const n=this._context.gl;if(!U(n))throw new Error("Immutable textures are not supported in WebGL1");if(!et(e))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const s=i?X(t,r,o,p):1;x(t)?n.texStorage3D(t,s,e,r,o,p):n.texStorage2D(t,s,e,r,o),this._wasImmutablyAllocated=!0}_texImage(t,e,i,r,o,p,n){const s=this._context.gl;let l=null;const h=this._context.type===w.WEBGL2,m=x(t),{isImmutable:u,pixelFormat:c,dataType:d}=this._descriptor;if(h&&(l=s),h||!P(n))if(u){if(A(n)){const T=n;m?l.texSubImage3D(t,e,0,0,0,r,o,p,c,d,T):s.texSubImage2D(t,e,0,0,r,o,c,d,T)}}else{const T=Z(n);m?l.texImage3D(t,e,i,r,o,p,0,c,d,T):s.texImage2D(t,e,i,r,o,0,c,d,T)}else s.texImage2D(t,0,i,c,d,n)}_compressedTexImage(t,e,i,r,o,p,n){const s=this._context.gl;let l=null;const h=x(t),m=this._descriptor.isImmutable;if(h){if(this._context.type!==w.WEBGL2)throw new Error("3D textures are not supported in WebGL1");l=s}m?A(n)&&(h?l.compressedTexSubImage3D(t,e,0,0,0,r,o,p,i,n):s.compressedTexSubImage2D(t,e,0,0,r,o,i,n)):h?l.compressedTexImage3D(t,e,i,r,o,p,0,n):s.compressedTexImage2D(t,e,i,r,o,0,n)}_forEachMipmapLevel(t,e=1/0){let{width:i,height:r,depth:o,hasMipmap:p,target:n}=this._descriptor;const s=n===g.TEXTURE_3D;for(let l=0;t(l,i,r,o),p&&(i!==1||r!==1||s&&o!==1)&&!(l>=e);++l)i=Math.max(1,i>>1),r=Math.max(1,r>>1),s&&(o=Math.max(1,o>>1))}static _validateTexture(t,e){(e.width<0||e.height<0||e.depth<0)&&console.error("Negative dimension parameters are not allowed!");const i=U(t.gl),r=F(e.width)&&F(e.height);i||!e.isImmutable&&!x(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),i||r||(typeof e.wrapMode=="number"?e.wrapMode!==R.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===R.CLAMP_TO_EDGE&&e.wrapMode.t===R.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,r=e.samplingMode;i===E.LINEAR_MIPMAP_NEAREST||i===E.LINEAR_MIPMAP_LINEAR?(i=E.LINEAR,e.hasMipmap||(r=E.LINEAR)):i!==E.NEAREST_MIPMAP_NEAREST&&i!==E.NEAREST_MIPMAP_LINEAR||(i=E.NEAREST,e.hasMipmap||(r=E.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const r=t.capabilities.textureFilterAnisotropic;!r||t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,(i=e.maxAnisotropy)!=null?i:1)}}function et(a){return a in I}function rt(a){return a in j}function N(a){return A(a)&&"type"in a&&a.type==="compressed"}function it(a){return A(a)&&"byteLength"in a}function P(a){return A(a)&&!N(a)&&!it(a)}function x(a){return a===g.TEXTURE_3D||a===g.TEXTURE_2D_ARRAY}function X(a,t,e,i=1){let r=Math.max(t,e);return a===g.TEXTURE_3D&&(r=Math.max(r,i)),Math.round(Math.log(r)/Math.LN2)+1}_.TEXTURE_UNIT_FOR_UPDATES=0;export{tt as a,nt as c,U as n,D as s,_ as u};
