import{t as G,bu as O,bv as w,r as q,bw as k,bx as V,by as A,bz as S,aA as z,bA as Z}from"./vendor.4dd88096.js";import{t as P}from"./json.da51edc4.js";function d(s,n){return s?n?4:3:n?3:2}function X(s,n,r,e,i){if(G(n)||!n.lengths.length)return null;const l=(i==null?void 0:i.originPosition)==="upperLeft"?-1:1;s.lengths.length&&(s.lengths.length=0),s.coords.length&&(s.coords.length=0);const t=s.coords,c=[],u=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:N}=n,T=d(r,e);let b=0;for(const o of m){const h=L(u,N,b,o,r,e,l);h&&c.push(h),b+=o*T}if(c.sort((o,h)=>{let f=l*o[2]-l*h[2];return f===0&&r&&(f=o[4]-h[4]),f}),c.length){let o=6*c[0][2];t[0]=c[0][0]/o,t[1]=c[0][1]/o,r&&(o=6*c[0][4],t[2]=o!==0?c[0][3]/o:0),(t[0]<u[0]||t[0]>u[1]||t[1]<u[2]||t[1]>u[3]||r&&(t[2]<u[4]||t[2]>u[5]))&&(t.length=0)}if(!t.length){const o=n.lengths[0]?B(N,0,m[0],r,e):null;if(!o)return null;t[0]=o[0],t[1]=o[1],r&&o.length>2&&(t[2]=o[2])}return s}function L(s,n,r,e,i,l,t=1){const c=d(i,l);let u=r,m=r+c,N=0,T=0,b=0,o=0,h=0;for(let E=0,_=e-1;E<_;E++,u+=c,m+=c){const I=n[u],g=n[u+1],a=n[u+2],p=n[m],M=n[m+1],F=n[m+2];let x=I*M-p*g;o+=x,N+=(I+p)*x,T+=(g+M)*x,i&&(x=I*F-p*a,b+=(a+F)*x,h+=x),I<s[0]&&(s[0]=I),I>s[1]&&(s[1]=I),g<s[2]&&(s[2]=g),g>s[3]&&(s[3]=g),i&&(a<s[4]&&(s[4]=a),a>s[5]&&(s[5]=a))}if(o*t>0&&(o*=-1),h*t>0&&(h*=-1),!o)return null;const f=[N,T,.5*o];return i&&(f[3]=b,f[4]=.5*h),f}function B(s,n,r,e,i){const l=d(e,i);let t=n,c=n+l,u=0,m=0,N=0,T=0;for(let b=0,o=r-1;b<o;b++,t+=l,c+=l){const h=s[t],f=s[t+1],E=s[t+2],_=s[c],I=s[c+1],g=s[c+2],a=e?D(h,f,E,_,I,g):C(h,f,_,I);if(a)if(u+=a,e){const p=J(h,f,E,_,I,g);m+=a*p[0],N+=a*p[1],T+=a*p[2]}else{const p=H(h,f,_,I);m+=a*p[0],N+=a*p[1]}}return u>0?e?[m/u,N/u,T/u]:[m/u,N/u]:r>0?e?[s[n],s[n+1],s[n+2]]:[s[n],s[n+1]]:null}function C(s,n,r,e){const i=r-s,l=e-n;return Math.sqrt(i*i+l*l)}function D(s,n,r,e,i,l){const t=e-s,c=i-n,u=l-r;return Math.sqrt(t*t+c*c+u*u)}function H(s,n,r,e){return[s+.5*(r-s),n+.5*(e-n)]}function J(s,n,r,e,i,l){return[s+.5*(e-s),n+.5*(i-n),r+.5*(l-r)]}const y=[0,0];function R(s,n){if(!n)return null;if("x"in n){const r={x:0,y:0};return[r.x,r.y]=s(n.x,n.y,y),n.z!=null&&(r.z=n.z),n.m!=null&&(r.m=n.m),r}if("xmin"in n){const r={xmin:0,ymin:0,xmax:0,ymax:0};return[r.xmin,r.ymin]=s(n.xmin,n.ymin,y),[r.xmax,r.ymax]=s(n.xmax,n.ymax,y),n.hasZ&&(r.zmin=n.zmin,r.zmax=n.zmax,r.hasZ=!0),n.hasM&&(r.mmin=n.mmin,r.mmax=n.mmax,r.hasM=!0),r}return"rings"in n?{rings:Y(n.rings,s),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:Y(n.paths,s),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:$(n.points,s),hasM:n.hasM,hasZ:n.hasZ}:void 0}function Y(s,n){const r=[];for(const e of s)r.push($(e,n));return r}function $(s,n){const r=[];for(const e of s){const i=n(e[0],e[1],[0,0]);r.push(i),e.length>2&&i.push(e[2]),e.length>3&&i.push(e[3])}return r}async function nn(s,n){if(!n)return;const r=Array.isArray(s)?s.map(e=>q(e.geometry)&&e.geometry.spatialReference):[s];await k(r.map(e=>({source:e,dest:n})))}const v=R.bind(null,O),j=R.bind(null,w);function sn(s,n,r){if(!s||(r||(r=n,n=s.spatialReference),!V(n)||!V(r)||A(n,r)))return s;if(S(n,r)){const e=z(r)?v(s):j(s);return e.spatialReference=r,e}return Z(P,[s],n,r,null)[0]}class K{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,r,e){if(!n||!n.length||!r||!e||A(r,e))return n;const i={geometries:n,inSpatialReference:r,outSpatialReference:e,resolve:null};return this._jobs.push(i),new Promise(l=>{i.resolve=l,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:r,inSpatialReference:e,outSpatialReference:i,resolve:l}=n;S(e,i)?z(i)?l(r.map(v)):l(r.map(j)):l(Z(P,r,e,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const Q=new K;function rn(s,n,r){return Q.push(s,n,r)}export{rn as M,X as e,nn as f,sn as g};
