import"./Bzak7iHL.js";import{n as l,o as T,z as W,b5 as J,q as U,E as V,b6 as Y,b7 as K,b3 as Q,Y as X,W as Z,y as j,x as z,j as p,O as $,U as ee,p as te,a as I,b as ie,B as se,k as r,e as oe,c as ne,f as re,s as ae,aJ as le,r as ce,l as k,b8 as de,aq as L}from"./pCFFIXSQ.js";import{s as he}from"./CxYVl7cV.js";import{e as ue,i as fe}from"./DNrxX6s3.js";import{i as ge}from"./D7Kwel0K.js";import{B as be}from"./CisZa0Fi.js";import{i as O}from"./DwG_4Ebi.js";import{p as c,r as ke}from"./LrfqMh5C.js";function we(t,e,n,i,v,m){let _=l;l&&T();var s=null;l&&W.nodeType===J&&(s=W,T());var u=l?W:t,f=new be(u,!1);U(()=>{const a=e()||null;var S=n||a==="svg"?K:void 0;if(a===null){f.ensure(null,null);return}return f.ensure(a,d=>{if(a){if(s=l?s:Y(a,S),Q(s,s),i){l&&ge(a)&&s.append(document.createComment(""));var h=l?X(s):s.appendChild(Z());l&&(h===null?j(!1):z(h)),i(s,h)}p.nodes.end=s,d.before(s)}l&&z(d)}),()=>{}},V),$(()=>{}),_&&(j(!0),z(u))}/**
 * @file
 * @license @lucide/svelte v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function C(t){return t!=null}function ve(t,e={}){var d,h;const n=e.attributeNames??{},i=o=>n[o]??o,v=t.size??t.width??w.width,m=t.size??t.height??w.height,_=((d=t.aliases)==null?void 0:d.filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`lucide-${o}`))??[],s=[...t.name?[`lucide-${t.name}`]:[],..._],u=((h=e.className)==null?void 0:h.split(" ").filter(Boolean))??[],f=e.includeDefaultClasses===!1?A(...u):A("lucide",...s,...u),a=e.absoluteStrokeWidth?Number(e.strokeWidth??w["stroke-width"])*Number(t.size??t.width??w.width)/Number(e.size??e.width??w.width):e.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((o,[g,b])=>(o[i(g)]=b,o),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&C(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&C(e.width)&&{[i("width")]:e.width},..."height"in e&&C(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:a,...f&&{[i("class")]:f},[i("viewBox")]:`0 0 ${v} ${m}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(o=>{const[g,b,N]=o,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...b}:b;return N?[g,x,N]:[g,x]})]}/**
 * @file
 * @license @lucide/svelte v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=Symbol("lucide-context"),Se=()=>ee(me);var Ne=se("<svg><!><!></svg>");function Te(t,e){te(e,!0);const n=Se()??{},i=c(e,"color",19,()=>n.color??"currentColor"),v=c(e,"size",19,()=>n.size??24),m=c(e,"width",19,v),_=c(e,"height",19,v),s=c(e,"strokeWidth",19,()=>n.strokeWidth??2),u=c(e,"absoluteStrokeWidth",19,()=>n.absoluteStrokeWidth??!1),f=c(e,"nonScalingStroke",19,()=>n.nonScalingStroke??!1),a=c(e,"iconNode",19,()=>[]),S=c(e,"icon",19,()=>({node:a(),aliases:[],size:24})),d=ke(e,["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),h=k(()=>!!e.children||_e(d)),o=k(()=>ve(S(),{color:i(),width:m(),height:_(),strokeWidth:s(),absoluteStrokeWidth:u(),nonScalingStroke:f(),className:A("lucide-icon",n.class),hasA11yProp:r(h),attributes:d})),g=k(()=>L(r(o),3)),b=k(()=>r(g)[1]),N=k(()=>de(r(g)[2],()=>[],!0)),x=k(()=>({...r(b),class:[...r(b).class.split(" "),e.class]}));var y=Ne();O(y,()=>({...r(x)}));var B=oe(y);ue(B,17,()=>r(N),fe,(F,M)=>{var E=k(()=>L(r(M),2));let q=()=>r(E)[0],R=()=>r(E)[1];var P=ne(),G=re(P);we(G,q,!0,(H,xe)=>{O(H,()=>({...R()}))}),I(F,P)});var D=ae(B);he(D,()=>e.children??le),ce(y),I(t,y),ie()}export{Te as I,we as e};
