import{bI as d,bJ as N,gO as S,bL as u,gP as w,bG as D,q as j,bK as O,bM as p,bN as M,gQ as R,gR as f,gS as g,bH as q}from"./vendor.4dd88096.js";import{c as v,a as h}from"./devEnvironmentUtils.f51567b1.js";function G(e,t,a,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?B(e,t,l):D(e,t,l).then(o=>x(o,e.name,t,a,l)):Promise.reject(new j("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function x(e,t,a,l,o){const b=e.data,y={portal:a&&a.portal||O.getDefault(),url:u(e.baseUrl),origin:"portal-item"},n=b.items.find(r=>r.name===t);if(!n){const r=`The symbol name '${t}' could not be found`;return Promise.reject(new j("symbolstyleutils:symbol-name-not-found",r,{symbolName:t}))}let m=p(M(n,l),y),i=n.thumbnail&&n.thumbnail.href;const c=n.thumbnail&&n.thumbnail.imageData;v()&&(m=h(m),i=h(i));const P={portal:a.portal,url:u(w(m)),origin:"portal-item"};return d(m,o).then(r=>{const U=l==="cimRef"?N(r.data):r.data,s=S(U,P);if(s&&R(s)){if(i){const $=p(i,y);s.thumbnail=new f({url:$})}else c&&(s.thumbnail=new f({url:`data:image/png;base64,${c}`}));e.styleUrl?s.styleOrigin=new g({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new g({portal:a.portal,styleName:e.styleName,name:t}))}return s})}function B(e,t,a){const l=q.replace(/\{SymbolName\}/gi,e.name);return d(l,a).then(o=>{const b=N(o.data);return S(b,{portal:t.portal,url:u(w(l)),origin:"portal-item"})})}export{x as fetchSymbolFromStyle,G as resolveWebStyleSymbol};
