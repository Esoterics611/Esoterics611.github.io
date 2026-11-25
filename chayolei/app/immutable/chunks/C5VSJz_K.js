import{a as cn,k as Jh,f as Xh,z as Zh,F as td,c as lc,p as ed,d as nd,A as rd,L as sd,s as Gt,B as hc,l as ls,_ as id,D as od,G as ad,H as dc,x as ud,C as cd,r as Ba,S as ld}from"./BpR-JXeq.js";var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,fc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(E,T,A){for(var _=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)_[Vt-2]=arguments[Vt];return g.prototype[T].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const E=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)E[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)E[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];let A=I.g[3],_;_=g+(A^y&(T^A))+E[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+E[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+E[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+E[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+E[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+E[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+E[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+E[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+E[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+E[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+E[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+E[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(A^y&(T^A))+E[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(T^g&(y^T))+E[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=T+(y^A&(g^y))+E[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=y+(g^T&(A^g))+E[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^A&(y^T))+E[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+E[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+E[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+E[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+E[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+E[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+E[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+E[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+E[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+E[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+E[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+E[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^A&(y^T))+E[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^T&(g^y))+E[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(A^g))+E[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(T^A))+E[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^A)+E[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+E[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+E[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+E[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+E[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+E[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+E[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+E[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+E[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+E[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+E[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+E[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^A)+E[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^T)+E[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=T+(A^g^y)+E[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=y+(T^A^g)+E[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~A))+E[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+E[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+E[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+E[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+E[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+E[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+E[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+E[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+E[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+E[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+E[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+E[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~A))+E[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~T))+E[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=T+(g^(A|~y))+E[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=y+(A^(T|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,E=this.C;let T=this.h,A=0;for(;A<g;){if(T==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(E[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<g;)if(E[T++]=I[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=g},n.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let E=0;E<32;E+=8)I[g++]=this.g[y]>>>E&255;return I};function i(I,g){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let E=!0;for(let T=I.length-1;T>=0;T--){const A=I[T]|0;E&&A==g||(y[T]=A,E=!1)}this.g=y}var u={};function l(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return M(d(-I));const g=[];let y=1;for(let E=0;I>=y;E++)g[E]=I/y|0,y*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return M(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let E=p;for(let A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A);const _=parseInt(I.substring(A,A+T),g);T<8?(T=d(Math.pow(g,T)),E=E.j(T).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var p=l(0),R=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(k(this))return-M(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const E=this.i(y);I+=(E>=0?E:4294967296+E)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(k(this))return"-"+M(this).toString(I);const g=d(Math.pow(I,6));var y=this;let E="";for(;;){const T=et(y,g).g;y=Z(y,T.j(g));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,N(y))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},r.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function k(I){return I.h==-1}r.l=function(I){return I=Z(this,I),k(I)?-1:N(I)?0:1};function M(I){const g=I.g.length,y=[];for(let E=0;E<g;E++)y[E]=~I.g[E];return new a(y,~I.h).add(R)}r.abs=function(){return k(this)?M(this):this},r.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let E=0;for(let T=0;T<=g;T++){let A=E+(this.i(T)&65535)+(I.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=_>>>16,A&=65535,_&=65535,y[T]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Z(I,g){return I.add(M(g))}r.j=function(I){if(N(this)||N(I))return p;if(k(this))return k(I)?M(this).j(M(I)):M(M(this).j(I));if(k(I))return M(this.j(M(I)));if(this.l(S)<0&&I.l(S)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<I.g.length;T++){const A=this.i(E)>>>16,_=this.i(E)&65535,Vt=I.i(T)>>>16,pe=I.i(T)&65535;y[2*E+2*T]+=_*pe,K(y,2*E+2*T),y[2*E+2*T+1]+=A*pe,K(y,2*E+2*T+1),y[2*E+2*T+1]+=_*Vt,K(y,2*E+2*T+1),y[2*E+2*T+2]+=A*Vt,K(y,2*E+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function K(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function q(I,g){this.g=I,this.h=g}function et(I,g){if(N(g))throw Error("division by zero");if(N(I))return new q(p,p);if(k(I))return g=et(M(I),g),new q(M(g.g),M(g.h));if(k(g))return g=et(I,M(g)),new q(M(g.g),g.h);if(I.g.length>30){if(k(I)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=R,E=g;E.l(I)<=0;)y=Q(y),E=Q(E);var T=W(y,1),A=W(E,1);for(E=W(E,2),y=W(y,2);!N(E);){var _=A.add(E);_.l(I)<=0&&(T=T.add(y),A=_),E=W(E,1),y=W(y,1)}return g=Z(I,T.j(g)),new q(T,g)}for(T=p;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(y),_=A.j(g);k(_)||_.l(I)>0;)y-=E,A=d(y),_=A.j(g);N(A)&&(A=R),T=T.add(A),I=Z(I,_)}return new q(T,I)}r.B=function(I){return et(this,I).h},r.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},r.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},r.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function Q(I){const g=I.g.length+1,y=[];for(let E=0;E<g;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function W(I,g){const y=g>>5;g%=32;const E=I.g.length-y,T=[];for(let A=0;A<E;A++)T[A]=g>0?I.i(A+y)>>>g|I.i(A+y+1)<<32-g:I.i(A+y);return new a(T,I.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,fc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ue=a}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mc,Yn,gc,Zr,Si,pc,_c,yc;(function(){var r,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break t;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function u(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function l(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=l,d.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function p(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,w,V){for(var C=Array(arguments.length-2),j=2;j<arguments.length;j++)C[j-2]=arguments[j];return c.prototype[w].apply(f,C)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function N(o,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var h=typeof w;if(h=h!="object"?h:w?Array.isArray(w)?"array":h:"null",h=="array"||h=="object"&&typeof w.length=="number"){h=o.length||0;const V=w.length||0;o.length=h+V;for(let C=0;C<V;C++)o[h+C]=w[C]}else o.push(w)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){a.setTimeout(()=>{throw o},0)}function Z(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,h){const f=q.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var q=new k(()=>new et,o=>o.reset());class et{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,W=!1,I=new K,g=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(y)}};function y(){for(var o;o=Z();){try{o.h.call(o.g)}catch(h){M(h)}var c=q;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}W=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Vt(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(Vt,T),Vt.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Vt.Z.h.call(this)},Vt.prototype.h=function(){Vt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pe="closure_listenable_"+(Math.random()*1e6|0),Ih=0;function Th(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++Ih,this.da=this.fa=!1}function xr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Dr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Eh(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Uo(o){const c={};for(const h in o)c[h]=o[h];return c}const Bo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qo(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let V=0;V<Bo.length;V++)h=Bo[V],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Nr(o){this.src=o,this.g={},this.h=0}Nr.prototype.add=function(o,c,h,f,w){const V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);const C=Js(o,c,f,w);return C>-1?(c=o[C],h||(c.fa=!1)):(c=new Th(c,this.src,V,!!f,w),c.fa=h,o.push(c)),c};function Ys(o,c){const h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),V;(V=w>=0)&&Array.prototype.splice.call(f,w,1),V&&(xr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Js(o,c,h,f){for(let w=0;w<o.length;++w){const V=o[w];if(!V.da&&V.listener==c&&V.capture==!!h&&V.ha==f)return w}return-1}var Xs="closure_lm_"+(Math.random()*1e6|0),Zs={};function jo(o,c,h,f,w){if(Array.isArray(c)){for(let V=0;V<c.length;V++)jo(o,c[V],h,f,w);return null}return h=Go(h),o&&o[pe]?o.J(c,h,u(f)?!!f.capture:!1,w):vh(o,c,h,!1,f,w)}function vh(o,c,h,f,w,V){if(!c)throw Error("Invalid event type");const C=u(w)?!!w.capture:!!w;let j=ei(o);if(j||(o[Xs]=j=new Nr(o)),h=j.add(c,h,f,C,V),h.proxy)return h;if(f=wh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(w=C),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(Ko(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function wh(){function o(h){return c.call(o.src,o.listener,h)}const c=Ah;return o}function zo(o,c,h,f,w){if(Array.isArray(c))for(var V=0;V<c.length;V++)zo(o,c[V],h,f,w);else f=u(f)?!!f.capture:!!f,h=Go(h),o&&o[pe]?(o=o.i,V=String(c).toString(),V in o.g&&(c=o.g[V],h=Js(c,h,f,w),h>-1&&(xr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[V],o.h--)))):o&&(o=ei(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Js(c,h,f,w)),(h=o>-1?c[o]:null)&&ti(h))}function ti(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[pe])Ys(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ko(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ei(c))?(Ys(h,o),h.h==0&&(h.src=null,c[Xs]=null)):xr(o)}}}function Ko(o){return o in Zs?Zs[o]:Zs[o]="on"+o}function Ah(o,c){if(o.da)o=!0;else{c=new Vt(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&ti(o),o=h.call(f,c)}return o}function ei(o){return o=o[Xs],o instanceof Nr?o:null}var ni="__closure_events_fn_"+(Math.random()*1e9>>>0);function Go(o){return typeof o=="function"?o:(o[ni]||(o[ni]=function(c){return o.handleEvent(c)}),o[ni])}function _t(){E.call(this),this.i=new Nr(this),this.M=this,this.G=null}p(_t,E),_t.prototype[pe]=!0,_t.prototype.removeEventListener=function(o,c,h,f){zo(this,o,c,h,f)};function vt(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var w=c;c=new T(f,o),qo(c,w)}w=!0;let V,C;if(h)for(C=h.length-1;C>=0;C--)V=c.g=h[C],w=kr(V,f,!0,c)&&w;if(V=c.g=o,w=kr(V,f,!0,c)&&w,w=kr(V,f,!1,c)&&w,h)for(C=0;C<h.length;C++)V=c.g=h[C],w=kr(V,f,!1,c)&&w}_t.prototype.N=function(){if(_t.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)xr(h[f]);delete o.g[c],o.h--}}this.G=null},_t.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},_t.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function kr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let V=0;V<c.length;++V){const C=c[V];if(C&&!C.da&&C.capture==h){const j=C.listener,ht=C.ha||C.src;C.fa&&Ys(o.i,C),w=j.call(ht,f)!==!1&&w}}return w&&!f.defaultPrevented}function Rh(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function $o(o){o.g=Rh(()=>{o.g=null,o.i&&(o.i=!1,$o(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Vh extends E{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$o(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(o){E.call(this),this.h=o,this.g={}}p(Sn,E);var Qo=[];function Wo(o){Dr(o.g,function(c,h){this.g.hasOwnProperty(h)&&ti(c)},o),o.g={}}Sn.prototype.N=function(){Sn.Z.N.call(this),Wo(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=a.JSON.stringify,Ph=a.JSON.parse,Sh=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ho(){}function Yo(){}var bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function si(){T.call(this,"d")}p(si,T);function ii(){T.call(this,"c")}p(ii,T);var _e={},Jo=null;function Or(){return Jo=Jo||new _t}_e.Ia="serverreachability";function Xo(o){T.call(this,_e.Ia,o)}p(Xo,T);function Cn(o){const c=Or();vt(c,new Xo(c))}_e.STAT_EVENT="statevent";function Zo(o,c){T.call(this,_e.STAT_EVENT,o),this.stat=c}p(Zo,T);function wt(o){const c=Or();vt(c,new Zo(c,o))}_e.Ja="timingevent";function ta(o,c){T.call(this,_e.Ja,o),this.size=c}p(ta,T);function xn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Dn(){this.g=!0}Dn.prototype.ua=function(){this.g=!1};function bh(o,c,h,f,w,V){o.info(function(){if(o.g)if(V){var C="",j=V.split("&");for(let tt=0;tt<j.length;tt++){var ht=j[tt].split("=");if(ht.length>1){const ft=ht[0];ht=ht[1];const Ut=ft.split("_");C=Ut.length>=2&&Ut[1]=="type"?C+(ft+"="+ht+"&"):C+(ft+"=redacted&")}}}else C=null;else C=V;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+C})}function Ch(o,c,h,f,w,V,C){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+V+" "+C})}function Ke(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Dh(o,h)+(f?" "+f:"")})}function xh(o,c){o.info(function(){return"TIMEOUT: "+c})}Dn.prototype.info=function(){};function Dh(o,c){if(!o.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(o=0;o<V.length;o++)if(Array.isArray(V[o])){var h=V[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return ri(V)}catch{return c}}var Mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ea={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},na;function oi(){}p(oi,Ho),oi.prototype.g=function(){return new XMLHttpRequest},na=new oi;function Nn(o){return encodeURIComponent(String(o))}function Nh(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Jt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new Sn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}var sa={},ai={};function ui(o,c,h){o.M=1,o.A=Lr(Lt(c)),o.u=h,o.R=!0,ia(o,null)}function ia(o,c){o.F=Date.now(),Fr(o),o.B=Lt(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),ya(h.i,"t",f),o.C=0,h=o.j.L,o.h=new ra,o.g=Ma(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Vh(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(Qo[0]=w.toString()),w=Qo);for(let V=0;V<w.length;V++){const C=jo(h,w[V],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=o.J?Uo(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Cn(),bh(o.i,o.v,o.B,o.l,o.S,o.u)}Jt.prototype.ba=function(o){o=o.target;const c=this.O;c&&te(o)==3?c.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)t:{const j=te(this.g),ht=this.g.ya(),tt=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||Ra(this.g)))){this.K||j!=4||ht==7||(ht==8||tt<=0?Cn(3):Cn(2)),ci(this);var c=this.g.ca();this.X=c;var h=kh(this);if(this.o=c==200,Ch(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var V=f;break e}}V=null}if(o=V)Ke(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,li(this,o);else{this.o=!1,this.m=3,wt(12),ye(this),kn(this);break t}}if(this.R){o=!0;let ft;for(;!this.K&&this.C<h.length;)if(ft=Oh(this,h),ft==ai){j==4&&(this.m=4,wt(14),o=!1),Ke(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==sa){this.m=4,wt(15),Ke(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Ke(this.i,this.l,ft,null),li(this,ft);if(oa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||h.length!=0||this.h.h||(this.m=1,wt(16),o=!1),this.o=this.o&&o,!o)Ke(this.i,this.l,h,"[Invalid Chunked Response]"),ye(this),kn(this);else if(h.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),yi(C),C.P=!0,wt(11))}}else Ke(this.i,this.l,h,null),li(this,h);j==4&&ye(this),this.o&&!this.K&&(j==4?Da(this.j,this):(this.o=!1,Fr(this)))}else Hh(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),ye(this),kn(this)}}}catch{}finally{}};function kh(o){if(!oa(o))return o.g.la();const c=Ra(o.g);if(c==="")return"";let h="";const f=c.length,w=te(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return ye(o),kn(o),"";o.h.i=new a.TextDecoder}for(let V=0;V<f;V++)o.h.h=!0,h+=o.h.i.decode(c[V],{stream:!(w&&V==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function oa(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Oh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?ai:(h=Number(c.substring(h,f)),isNaN(h)?sa:(f+=1,f+h>c.length?ai:(c=c.slice(f,f+h),o.C=f+h,c)))}Jt.prototype.cancel=function(){this.K=!0,ye(this)};function Fr(o){o.T=Date.now()+o.H,aa(o,o.H)}function aa(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=xn(d(o.aa,o),c)}function ci(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Jt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(xh(this.i,this.B),this.M!=2&&(Cn(),wt(17)),ye(this),this.m=2,kn(this)):aa(this,this.T-o)};function kn(o){o.j.I==0||o.K||Da(o.j,o)}function ye(o){ci(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Wo(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function li(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||hi(h.h,o))){if(!o.L&&hi(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)zr(h),qr(h);else break t;_i(h),wt(18)}}else h.xa=w[1],0<h.xa-h.K&&w[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=xn(d(h.Va,h),6e3));la(h.h)<=1&&h.ta&&(h.ta=void 0)}else Te(h,11)}else if((o.L||h.g==o)&&zr(h),!_(c))for(w=h.Ba.g.parse(c),c=0;c<w.length;c++){let tt=w[c];const ft=tt[0];if(!(ft<=h.K))if(h.K=ft,tt=tt[1],h.I==2)if(tt[0]=="c"){h.M=tt[1],h.ba=tt[2];const Ut=tt[3];Ut!=null&&(h.ka=Ut,h.j.info("VER="+h.ka));const Ee=tt[4];Ee!=null&&(h.za=Ee,h.j.info("SVER="+h.za));const ee=tt[5];ee!=null&&typeof ee=="number"&&ee>0&&(f=1.5*ee,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ne=o.g;if(ne){const Gr=ne.g?ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var V=f.h;V.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(di(V,V.h),V.h=null))}if(f.G){const Ii=ne.g?ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Ii&&(f.wa=Ii,nt(f.J,f.G,Ii))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var C=o;if(f.na=Oa(f,f.L?f.ba:null,f.W),C.L){ha(f.h,C);var j=C,ht=f.O;ht&&(j.H=ht),j.D&&(ci(j),Fr(j)),f.g=C}else Ca(f);h.i.length>0&&jr(h)}else tt[0]!="stop"&&tt[0]!="close"||Te(h,7);else h.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Te(h,7):pi(h):tt[0]!="noop"&&h.l&&h.l.qa(tt),h.A=0)}}Cn(4)}catch{}}var Mh=class{constructor(o,c){this.g=o,this.map=c}};function ua(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ca(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function la(o){return o.h?1:o.g?o.g.size:0}function hi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function di(o,c){o.g?o.g.add(c):o.h=c}function ha(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ua.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function da(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fh(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let w,V=null;f>=0?(w=o[h].substring(0,f),V=o[h].substring(f+1)):w=o[h],c(w,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Xt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Xt?(this.l=o.l,On(this,o.j),this.o=o.o,this.g=o.g,Mn(this,o.u),this.h=o.h,fi(this,Ia(o.i)),this.m=o.m):o&&(c=String(o).match(fa))?(this.l=!1,On(this,c[1]||"",!0),this.o=Fn(c[2]||""),this.g=Fn(c[3]||"",!0),Mn(this,c[4]),this.h=Fn(c[5]||"",!0),fi(this,c[6]||"",!0),this.m=Fn(c[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}Xt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Ln(c,ma,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ln(c,ma,!0),"@"),o.push(Nn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ln(h,h.charAt(0)=="/"?Bh:Uh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ln(h,jh)),o.join("")},Xt.prototype.resolve=function(o){const c=Lt(this);let h=!!o.j;h?On(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Mn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const V=[];for(let C=0;C<w.length;){const j=w[C++];j=="."?f&&C==w.length&&V.push(""):j==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),f&&C==w.length&&V.push("")):(V.push(j),f=!0)}f=V.join("/")}else f=w}return h?c.h=f:h=o.i.toString()!=="",h?fi(c,Ia(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Lt(o){return new Xt(o)}function On(o,c,h){o.j=h?Fn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Mn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function fi(o,c,h){c instanceof Un?(o.i=c,zh(o.i,o.l)):(h||(c=Ln(c,qh)),o.i=new Un(c,o.l))}function nt(o,c,h){o.i.set(c,h)}function Lr(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Fn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ln(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Lh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Lh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ma=/[#\/\?@]/g,Uh=/[#\?:]/g,Bh=/[#\?]/g,qh=/[#\?@]/g,jh=/#/g;function Un(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ie(o){o.g||(o.g=new Map,o.h=0,o.i&&Fh(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Un.prototype,r.add=function(o,c){Ie(this),this.i=null,o=Ge(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ga(o,c){Ie(o),c=Ge(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function pa(o,c){return Ie(o),c=Ge(o,c),o.g.has(c)}r.forEach=function(o,c){Ie(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)};function _a(o,c){Ie(o);let h=[];if(typeof c=="string")pa(o,c)&&(h=h.concat(o.g.get(Ge(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}r.set=function(o,c){return Ie(this),this.i=null,o=Ge(this,o),pa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=_a(this,o),o.length>0?String(o[0]):c):c};function ya(o,c,h){ga(o,c),h.length>0&&(o.i=null,o.g.set(Ge(o,c),S(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const w=Nn(h);h=_a(this,h);for(let V=0;V<h.length;V++){let C=w;h[V]!==""&&(C+="="+Nn(h[V])),o.push(C)}}return this.i=o.join("&")};function Ia(o){const c=new Un;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Ge(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function zh(o,c){c&&!o.j&&(Ie(o),o.i=null,o.g.forEach(function(h,f){const w=f.toLowerCase();f!=w&&(ga(this,f),ya(this,w,h))},o)),o.j=c}function Kh(o,c){const h=new Dn;if(a.Image){const f=new Image;f.onload=m(Zt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(Zt,h,"TestLoadImage: error",!1,c,f),f.onabort=m(Zt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(Zt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Gh(o,c){const h=new Dn,f=new AbortController,w=setTimeout(()=>{f.abort(),Zt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(V=>{clearTimeout(w),V.ok?Zt(h,"TestPingServer: ok",!0,c):Zt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Zt(h,"TestPingServer: error",!1,c)})}function Zt(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function $h(){this.g=new Sh}function mi(o){this.i=o.Sb||null,this.h=o.ab||!1}p(mi,Ho),mi.prototype.g=function(){return new Ur(this.i,this.h)};function Ur(o,c){_t.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ur,_t),r=Ur.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,qn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ta(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ta(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Bn(this):qn(this),this.readyState==3&&Ta(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,Bn(this))},r.Na=function(o){this.g&&(this.response=o,Bn(this))},r.ga=function(){this.g&&Bn(this)};function Bn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,qn(o)}r.setRequestHeader=function(o,c){this.A.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function qn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ea(o){let c="";return Dr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function gi(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Ea(h),typeof o=="string"?h!=null&&Nn(h):nt(o,c,h))}function it(o){_t.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(it,_t);var Qh=/^https?$/i,Wh=["POST","PUT"];r=it.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():na.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(V){va(this,V);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())h.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Wh,c,void 0)>=0)||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,C]of h)this.g.setRequestHeader(V,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(V){va(this,V)}};function va(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,wa(o),Br(o)}function wa(o){o.A||(o.A=!0,vt(o,"complete"),vt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,vt(this,"complete"),vt(this,"abort"),Br(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),it.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Aa(this):this.Xa())},r.Xa=function(){Aa(this)};function Aa(o){if(o.h&&typeof i<"u"){if(o.v&&te(o)==4)setTimeout(o.Ca.bind(o),0);else if(vt(o,"readystatechange"),te(o)==4){o.h=!1;try{const V=o.ca();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=V===0){let C=String(o.D).match(fa)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!Qh.test(C?C.toLowerCase():"")}h=f}if(h)vt(o,"complete"),vt(o,"success");else{o.o=6;try{var w=te(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",wa(o)}}finally{Br(o)}}}}function Br(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||vt(o,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function te(o){return o.g?o.g.readyState:0}r.ca=function(){try{return te(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Ph(c)}};function Ra(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hh(o){const c={};o=(o.g&&te(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=Nh(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=c[w]||[];c[w]=V,V.push(h)}Eh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Va(o){this.za=0,this.i=[],this.j=new Dn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jn("baseRetryDelayMs",5e3,o),this.Za=jn("retryDelaySeedMs",1e4,o),this.Ta=jn("forwardChannelMaxRetries",2,o),this.va=jn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ua(o&&o.concurrentRequestLimit),this.Ba=new $h,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Va.prototype,r.ka=8,r.I=1,r.connect=function(o,c,h,f){wt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Oa(this,null,this.W),jr(this)};function pi(o){if(Pa(o),o.I==3){var c=o.V++,h=Lt(o.J);if(nt(h,"SID",o.M),nt(h,"RID",c),nt(h,"TYPE","terminate"),zn(o,h),c=new Jt(o,o.j,c),c.M=2,c.A=Lr(Lt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ma(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Fr(c)}ka(o)}function qr(o){o.g&&(yi(o),o.g.cancel(),o.g=null)}function Pa(o){qr(o),o.v&&(a.clearTimeout(o.v),o.v=null),zr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function jr(o){if(!ca(o.h)&&!o.m){o.m=!0;var c=o.Ea;Q||g(),W||(Q(),W=!0),I.add(c,o),o.D=0}}function Yh(o,c){return la(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=xn(d(o.Ea,o,c),Na(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new Jt(this,this.j,o);let V=this.o;if(this.U&&(V?(V=Uo(V),qo(V,this.U)):V=this.U),this.u!==null||this.R||(w.J=V,V=null),this.S)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=ba(this,w,c),h=Lt(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),zn(this,h),V&&(this.R?c="headers="+Nn(Ea(V))+"&"+c:this.u&&gi(h,this.u,V)),di(this.h,w),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",c),nt(h,"SID","null"),w.U=!0,ui(w,h,null)):ui(w,h,c),this.I=2}}else this.I==3&&(o?Sa(this,o):this.i.length==0||ca(this.h)||Sa(this))};function Sa(o,c){var h;c?h=c.l:h=o.V++;const f=Lt(o.J);nt(f,"SID",o.M),nt(f,"RID",h),nt(f,"AID",o.K),zn(o,f),o.u&&o.o&&gi(f,o.u,o.o),h=new Jt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=ba(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),di(o.h,h),ui(h,f,c)}function zn(o,c){o.H&&Dr(o.H,function(h,f){nt(c,f,h)}),o.l&&Dr({},function(h,f){nt(c,f,h)})}function ba(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;t:{var w=o.i;let j=-1;for(;;){const ht=["count="+h];j==-1?h>0?(j=w[0].g,ht.push("ofs="+j)):j=0:ht.push("ofs="+j);let tt=!0;for(let ft=0;ft<h;ft++){var V=w[ft].g;const Ut=w[ft].map;if(V-=j,V<0)j=Math.max(0,w[ft].g-100),tt=!1;else try{V="req"+V+"_"||"";try{var C=Ut instanceof Map?Ut:Object.entries(Ut);for(const[Ee,ee]of C){let ne=ee;u(ee)&&(ne=ri(ee)),ht.push(V+Ee+"="+encodeURIComponent(ne))}}catch(Ee){throw ht.push(V+"type="+encodeURIComponent("_badmap")),Ee}}catch{f&&f(Ut)}}if(tt){C=ht.join("&");break t}}C=void 0}return o=o.i.splice(0,h),c.G=o,C}function Ca(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Q||g(),W||(Q(),W=!0),I.add(c,o),o.A=0}}function _i(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=xn(d(o.Da,o),Na(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,xa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=xn(d(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),qr(this),xa(this))};function yi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function xa(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Lt(o.na);nt(c,"RID","rpc"),nt(c,"SID",o.M),nt(c,"AID",o.K),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(c,"TO",o.ia),nt(c,"TYPE","xmlhttp"),zn(o,c),o.u&&o.o&&gi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Lr(Lt(c)),h.u=null,h.R=!0,ia(h,o)}r.Va=function(){this.C!=null&&(this.C=null,qr(this),_i(this),wt(19))};function zr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Da(o,c){var h=null;if(o.g==c){zr(o),yi(o),o.g=null;var f=2}else if(hi(o.h,c))h=c.G,ha(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var w=o.D;f=Or(),vt(f,new ta(f,h)),jr(o)}else Ca(o);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&Yh(o,c)||f==2&&_i(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),w){case 1:Te(o,5);break;case 4:Te(o,10);break;case 3:Te(o,6);break;default:Te(o,2)}}}function Na(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Te(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const w=!f;f=new Xt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||On(f,"https"),Lr(f),w?Kh(f.toString(),h):Gh(f.toString(),h)}else wt(2);o.I=0,o.l&&o.l.pa(c),ka(o),Pa(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function ka(o){if(o.I=0,o.ja=[],o.l){const c=da(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ja,c),N(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Oa(o,c,h){var f=h instanceof Xt?Lt(h):new Xt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Mn(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const V=new Xt(null);f&&On(V,f),c&&(V.g=c),w&&Mn(V,w),h&&(V.h=h),f=V}return h=o.G,c=o.wa,h&&c&&nt(f,h,c),nt(f,"VER",o.ka),zn(o,f),f}function Ma(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new it(new mi({ab:h})):new it(o.ma),c.Fa(o.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}r=Fa.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Kr(){}Kr.prototype.g=function(o,c){return new Pt(o,c)};function Pt(o,c){_t.call(this),this.g=new Va(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new $e(this)}p(Pt,_t),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){pi(this.g)},Pt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ri(o),o=h);c.i.push(new Mh(c.Ya++,o)),c.I==3&&jr(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,pi(this.g),delete this.g,Pt.Z.N.call(this)};function La(o){si.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(La,si);function Ua(){ii.call(this),this.status=1}p(Ua,ii);function $e(o){this.g=o}p($e,Fa),$e.prototype.ra=function(){vt(this.g,"a")},$e.prototype.qa=function(o){vt(this.g,new La(o))},$e.prototype.pa=function(o){vt(this.g,new Ua)},$e.prototype.oa=function(){vt(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,yc=function(){return new Kr},_c=function(){return Or()},pc=_e,Si={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,Zr=Mr,ea.COMPLETE="complete",gc=ea,Yo.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",_t.prototype.listen=_t.prototype.J,Yn=Yo,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,mc=it}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn="12.12.0";function hd(r){wn=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new sd("@firebase/firestore");function Ze(){return Oe.logLevel}function b(r,...t){if(Oe.logLevel<=Gt.DEBUG){const e=t.map(Zi);Oe.debug(`Firestore (${wn}): ${r}`,...e)}}function At(r,...t){if(Oe.logLevel<=Gt.ERROR){const e=t.map(Zi);Oe.error(`Firestore (${wn}): ${r}`,...e)}}function le(r,...t){if(Oe.logLevel<=Gt.WARN){const e=t.map(Zi);Oe.warn(`Firestore (${wn}): ${r}`,...e)}}function Zi(r){if(typeof r=="string")return r;try{return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ic(r,n,e)}function Ic(r,t,e){let n=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw At(n),new Error(n)}function F(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Ic(t,s,n)}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends td{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class fd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class md{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){F(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ce,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ce)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string",31837,{l:n}),new Tc(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class gd{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class pd{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new gd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ja{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _d{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,id(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){F(this.o===void 0,3512);const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ja(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(F(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ja(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=yd(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function bi(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return Ti(s)===Ti(i)?U(s,i):Ti(s)?1:-1}return U(r.length,t.length)}const Id=55296,Td=57343;function Ti(r){const t=r.charCodeAt(0);return t>=Id&&t<=Td}function ln(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function vc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="__name__";class Bt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Bt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return U(t.length,e.length)}static compareSegments(t,e){const n=Bt.isNumericId(t),s=Bt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Bt.extractNumericId(t).compare(Bt.extractNumericId(e)):bi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ue.fromString(t.substring(4,t.length-2))}}class H extends Bt{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new H(e)}static emptyPath(){return new H([])}}const Ed=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Bt{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Ed.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===za}static keyField(){return new at([za])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.path=t}static fromPath(t){return new D(H.fromString(t))}static fromName(t){return new D(H.fromString(t).popFirst(5))}static empty(){return new D(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new D(new H(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(r,t,e){if(!e)throw new x(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function wd(r,t,e,n){if(t===!0&&n===!0)throw new x(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ka(r){if(D.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wc(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function bs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function er(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=bs(r);throw new x(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(r,t){const e={typeString:r};return t&&(e.value=t),e}function wr(r,t){if(!wc(r))throw new x(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new x(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=-62135596800,$a=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*$a);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ga)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$a}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(wr(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ga;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:ct("string",X._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=-1;class hs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Ci(r){return r.fields.find((t=>t.kind===2))}function we(r){return r.fields.filter((t=>t.kind!==2))}hs.UNKNOWN_ID=-1;class ts{constructor(t,e){this.fieldPath=t,this.kind=e}}class hr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new hr(0,bt.min())}}function Ad(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new bt(s,D.empty(),t)}function Ac(r){return new bt(r.readTime,r.key,lr)}class bt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new bt(L.min(),D.empty(),lr)}static max(){return new bt(L.max(),D.empty(),lr)}}function to(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=D.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Rc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new v(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof v?e:v.resolve(e)}catch(e){return v.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):v.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):v.reject(e)}static resolve(t){return new v(((e,n)=>{e(t)}))}static reject(t){return new v(((e,n)=>{n(t)}))}static waitFor(t){return new v(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(l=>n(l)))})),a=!0,i===s&&e()}))}static or(t){let e=v.resolve(!1);for(const n of t)e=e.next((s=>s?v.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new v(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next((m=>{a[d]=m,++u,u===i&&n(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new v(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="SimpleDb";class Cs{static open(t,e,n,s){try{return new Cs(e,t.transaction(s,n))}catch(i){throw new nr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Ce,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new nr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=eo(n.target.error);this.S.reject(new nr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(b(St,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Vd(e)}}class ce{static delete(t){return b(St,"Removing database:",t),Re(od().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!ad())return!1;if(ce.F())return!0;const t=ls(),e=ce.M(t),n=0<e&&e<10,s=Pc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,ce.M(ls())===12.2&&At("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(b(St,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new nr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new nr(t,a))},s.onupgradeneeded=i=>{b(St,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next((()=>{b(St,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}K(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const u=Cs.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next((d=>(u.C(),d))).catch((d=>(u.abort(d),v.reject(d)))).toPromise();return l.catch((()=>{})),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(b(St,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Pc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Rd{constructor(t){this.U=t,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(t){this.U=t}done(){this.$=!0}j(t){this.W=t}delete(){return Re(this.U.delete())}}class nr extends x{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ge(r){return r.name==="IndexedDbTransactionError"}class Vd{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b(St,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(b(St,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Re(n)}add(t){return b(St,"ADD",this.store.name,t,t),Re(this.store.add(t))}get(t){return Re(this.store.get(t)).next((e=>(e===void 0&&(e=null),b(St,"GET",this.store.name,t,e),e)))}delete(t){return b(St,"DELETE",this.store.name,t),Re(this.store.delete(t))}count(){return b(St,"COUNT",this.store.name),Re(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v(((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}}))}{const i=this.cursor(n),a=[];return this.H(i,((u,l)=>{a.push(l)})).next((()=>a))}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new v(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}X(t,e){b(St,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.H(s,((i,a,u)=>u.delete()))}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new v(((n,s)=>{e.onerror=i=>{const a=eo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}H(t,e){const n=[];return new v(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Rd(u),d=e(u.primaryKey,u.value,l);if(d instanceof v){const m=d.catch((p=>(l.done(),v.reject(p))));n.push(m)}l.isDone?s():l.G===null?u.continue():u.continue(l.G)}})).next((()=>v.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Re(r){return new v(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=eo(n.target.error);e(s)}}))}let Qa=!1;function eo(r){const t=ce.M(ls());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Qa||(Qa=!0,setTimeout((()=>{throw n}),0)),n}}return r}const rr="IndexBackfiller";class Pd{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){b(rr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.ne.ie();b(rr,`Documents written: ${e}`)}catch(e){ge(e)?b(rr,"Ignoring IndexedDB error during index backfill: ",e):await je(e)}await this.re(6e4)}))}}class Sd{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.se(e,t)))}se(t,e){const n=new Set;let s=e,i=!0;return v.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return b(rr,`Processing collection: ${a}`),this.oe(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this._e(s,i))).next((u=>(b(rr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}_e(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=Ac(i);to(a,n)>0&&(n=a)})),new bt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Dt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=-1;function xs(r){return r==null}function dr(r){return r===0&&1/r==-1/0}function bd(r){return typeof r=="number"&&Number.isInteger(r)&&!dr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="";function Et(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Wa(t)),t=Cd(r.get(e),t);return Wa(t)}function Cd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case ds:e+="";break;default:e+=i}}return e}function Wa(r){return r+ds+""}function qt(r){const t=r.length;if(F(t>=2,64408,{path:r}),t===2)return F(r.charAt(0)===ds&&r.charAt(1)==="",56145,{path:r}),H.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(ds,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new H(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="remoteDocuments",Ar="owner",Qe="owner",fr="mutationQueues",xd="userId",Ot="mutations",Ha="batchId",be="userMutationsIndex",Ya=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(r,t){return[r,Et(t)]}function Sc(r,t,e){return[r,Et(t),e]}const Dd={},hn="documentMutations",fs="remoteDocumentsV14",Nd=["prefixPath","collectionGroup","readTime","documentId"],ns="documentKeyIndex",kd=["prefixPath","collectionGroup","documentId"],bc="collectionGroupIndex",Od=["collectionGroup","readTime","prefixPath","documentId"],mr="remoteDocumentGlobal",xi="remoteDocumentGlobalKey",dn="targets",Cc="queryTargetsIndex",Md=["canonicalId","targetId"],fn="targetDocuments",Fd=["targetId","path"],no="documentTargetsIndex",Ld=["path","targetId"],ms="targetGlobalKey",De="targetGlobal",gr="collectionParents",Ud=["collectionId","parent"],mn="clientMetadata",Bd="clientId",Ds="bundles",qd="bundleId",Ns="namedQueries",jd="name",ro="indexConfiguration",zd="indexId",Di="collectionGroupIndex",Kd="collectionGroup",sr="indexState",Gd=["indexId","uid"],xc="sequenceNumberIndex",$d=["uid","sequenceNumber"],ir="indexEntries",Qd=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Dc="documentKeyIndex",Wd=["indexId","uid","orderedDocumentKey"],ks="documentOverlays",Hd=["userId","collectionPath","documentId"],Ni="collectionPathOverlayIndex",Yd=["userId","collectionPath","largestBatchId"],Nc="collectionGroupOverlayIndex",Jd=["userId","collectionGroup","largestBatchId"],so="globals",Xd="name",kc=[fr,Ot,hn,Ae,dn,Ar,De,fn,mn,mr,gr,Ds,Ns],Zd=[...kc,ks],Oc=[fr,Ot,hn,fs,dn,Ar,De,fn,mn,mr,gr,Ds,Ns,ks],Mc=Oc,io=[...Mc,ro,sr,ir],tf=io,Fc=[...io,so],ef=Fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Vc{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function dt(r,t){const e=B(r);return ce.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function An(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Lc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qr(this.root,t,this.comparator,!0)}}class Qr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xa(this.data.getIterator())}getIteratorFrom(t){return new Xa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new J(this.comparator);return e.data=t,e}}class Xa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function We(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new $t([])}unionWith(t){let e=new J(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ln(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uc("Invalid base64 string: "+i):i}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const nf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(r){if(F(!!r,39018),typeof r=="string"){let t=0;const e=nf.exec(r);if(F(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="server_timestamp",qc="__type__",jc="__previous_value__",zc="__local_write_time__";function oo(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[qc])==null?void 0:n.stringValue)===Bc}function Os(r){const t=r.mapValue.fields[jc];return oo(t)?Os(t):t}function pr(r){const t=Wt(r.mapValue.fields[zc].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,n,s,i,a,u,l,d,m,p){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const gs="(default)";class Me{constructor(t,e){this.projectId=t,this.database=e||gs}static empty(){return new Me("","")}get isDefaultDatabase(){return this.database===gs}isEqual(t){return t instanceof Me&&t.projectId===this.projectId&&t.database===this.database}}function sf(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Me(r.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="__type__",Kc="__max__",ae={mapValue:{fields:{__type__:{stringValue:Kc}}}},uo="__vector__",gn="value",rs={nullValue:"NULL_VALUE"};function he(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?oo(r)?4:Gc(r)?9007199254740991:Ms(r)?10:11:O(28295,{value:r})}function Kt(r,t){if(r===t)return!0;const e=he(r);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return pr(r).isEqual(pr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Wt(s.timestampValue),u=Wt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?dr(a)===dr(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return ln(r.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Ja(a)!==Ja(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Kt(a[l],u[l])))return!1;return!0})(r,t);default:return O(52216,{left:r})}}function _r(r,t){return(r.values||[]).find((e=>Kt(e,t)))!==void 0}function de(r,t){if(r===t)return 0;const e=he(r),n=he(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=rt(i.integerValue||i.doubleValue),l=rt(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(r,t);case 3:return Za(r.timestampValue,t.timestampValue);case 4:return Za(pr(r),pr(t));case 5:return bi(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=Ht(i),l=Ht(a);return u.compareTo(l)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=U(u[d],l[d]);if(m!==0)return m}return U(u.length,l.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=U(rt(i.latitude),rt(a.latitude));return u!==0?u:U(rt(i.longitude),rt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return tu(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var R,S,N,k;const u=i.fields||{},l=a.fields||{},d=(R=u[gn])==null?void 0:R.arrayValue,m=(S=l[gn])==null?void 0:S.arrayValue,p=U(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return p!==0?p:tu(d,m)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===ae.mapValue&&a===ae.mapValue)return 0;if(i===ae.mapValue)return 1;if(a===ae.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let p=0;p<l.length&&p<m.length;++p){const R=bi(l[p],m[p]);if(R!==0)return R;const S=de(u[l[p]],d[m[p]]);if(S!==0)return S}return U(l.length,m.length)})(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function Za(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Wt(r),n=Wt(t),s=U(e.seconds,n.seconds);return s!==0?s:U(e.nanos,n.nanos)}function tu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=de(e[s],n[s]);if(i)return i}return U(e.length,n.length)}function pn(r){return Oi(r)}function Oi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Wt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Ht(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return D.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Oi(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Oi(e.fields[a])}`;return s+"}"})(r.mapValue):O(61005,{value:r})}function ss(r){switch(he(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Os(r);return t?16+ss(t):16;case 5:return 2*r.stringValue.length;case 6:return Ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+ss(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return An(n.fields,((i,a)=>{s+=i.length+ss(a)})),s})(r.mapValue);default:throw O(13486,{value:r})}}function yr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Mi(r){return!!r&&"integerValue"in r}function Ir(r){return!!r&&"arrayValue"in r}function eu(r){return!!r&&"nullValue"in r}function nu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ei(r){return!!r&&"mapValue"in r}function Ms(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ao])==null?void 0:n.stringValue)===uo}function or(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return An(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=or(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=or(r.arrayValue.values[e]);return t}return{...r}}function Gc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Kc}const $c={mapValue:{fields:{[ao]:{stringValue:uo},[gn]:{arrayValue:{}}}}};function of(r){return"nullValue"in r?rs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?yr(Me.empty(),D.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ms(r)?$c:{mapValue:{}}:O(35942,{value:r})}function af(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?yr(Me.empty(),D.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?$c:"mapValue"in r?Ms(r)?{mapValue:{}}:ae:O(61959,{value:r})}function ru(r,t){const e=de(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function su(r,t){const e=de(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ei(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=or(e)}setAll(t){let e=at.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=or(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ei(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){An(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new Ct(or(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ot(t,0,L.min(),L.min(),L.min(),Ct.empty(),0)}static newFoundDocument(t,e,n,s){return new ot(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new ot(t,2,e,L.min(),L.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new ot(t,3,e,L.min(),L.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e){this.position=t,this.inclusive=e}}function iu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=D.comparator(D.fromName(a.referenceValue),e.key):n=de(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function ou(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e="asc"){this.field=t,this.dir=e}}function uf(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{}class G extends Qc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new cf(t,e,n):e==="array-contains"?new df(t,n):e==="in"?new Zc(t,n):e==="not-in"?new ff(t,n):e==="array-contains-any"?new mf(t,n):new G(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new lf(t,n):new hf(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(de(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(de(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Y extends Qc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Y(t,e)}matches(t){return yn(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yn(r){return r.op==="and"}function Fi(r){return r.op==="or"}function co(r){return Wc(r)&&yn(r)}function Wc(r){for(const t of r.filters)if(t instanceof Y)return!1;return!0}function Li(r){if(r instanceof G)return r.field.canonicalString()+r.op.toString()+pn(r.value);if(co(r))return r.filters.map((t=>Li(t))).join(",");{const t=r.filters.map((e=>Li(e))).join(",");return`${r.op}(${t})`}}function Hc(r,t){return r instanceof G?(function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)})(r,t):r instanceof Y?(function(n,s){return s instanceof Y&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&Hc(a,s.filters[u])),!0):!1})(r,t):void O(19439)}function Yc(r,t){const e=r.filters.concat(t);return Y.create(e,r.op)}function Jc(r){return r instanceof G?(function(e){return`${e.field.canonicalString()} ${e.op} ${pn(e.value)}`})(r):r instanceof Y?(function(e){return e.op.toString()+" {"+e.getFilters().map(Jc).join(" ,")+"}"})(r):"Filter"}class cf extends G{constructor(t,e,n){super(t,e,n),this.key=D.fromName(n.referenceValue)}matches(t){const e=D.comparator(t.key,this.key);return this.matchesComparison(e)}}class lf extends G{constructor(t,e){super(t,"in",e),this.keys=Xc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hf extends G{constructor(t,e){super(t,"not-in",e),this.keys=Xc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xc(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((n=>D.fromName(n.referenceValue)))}class df extends G{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ir(e)&&_r(e.arrayValue,this.value)}}class Zc extends G{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_r(this.value.arrayValue,e)}}class ff extends G{constructor(t,e){super(t,"not-in",e)}matches(t){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_r(this.value.arrayValue,e)}}class mf extends G{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ir(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>_r(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function Ui(r,t=null,e=[],n=[],s=null,i=null,a=null){return new gf(r,t,e,n,s,i,a)}function Fe(r){const t=B(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Li(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),xs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>pn(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>pn(n))).join(",")),t.Te=e}return t.Te}function Rr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!uf(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Hc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ou(r.startAt,t.startAt)&&ou(r.endAt,t.endAt)}function _s(r){return D.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ys(r,t){return r.filters.filter((e=>e instanceof G&&e.field.isEqual(t)))}function au(r,t,e){let n=rs,s=!0;for(const i of ys(r,t)){let a=rs,u=!0;switch(i.op){case"<":case"<=":a=of(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=rs}ru({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];ru({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function uu(r,t,e){let n=ae,s=!0;for(const i of ys(r,t)){let a=ae,u=!0;switch(i.op){case">=":case">":a=af(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ae}su({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];su({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function pf(r,t,e,n,s,i,a,u){return new Vr(r,t,e,n,s,i,a,u)}function Fs(r){return new Vr(r)}function cu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function _f(r){return D.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function tl(r){return r.collectionGroup!==null}function ar(r){const t=B(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new J(at.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new ps(i,n))})),e.has(at.keyField().canonicalString())||t.Ee.push(new ps(at.keyField(),n))}return t.Ee}function kt(r){const t=B(r);return t.Ie||(t.Ie=yf(t,ar(r))),t.Ie}function yf(r,t){if(r.limitType==="F")return Ui(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ps(s.field,i)}));const e=r.endAt?new _n(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new _n(r.startAt.position,r.startAt.inclusive):null;return Ui(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Bi(r,t){const e=r.filters.concat([t]);return new Vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function qi(r,t,e){return new Vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ls(r,t){return Rr(kt(r),kt(t))&&r.limitType===t.limitType}function el(r){return`${Fe(kt(r))}|lt:${r.limitType}`}function tn(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>Jc(s))).join(", ")}]`),xs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>pn(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>pn(s))).join(",")),`Target(${n})`})(kt(r))}; limitType=${r.limitType})`}function Pr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of ar(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,l){const d=iu(a,u,l);return a.inclusive?d<=0:d<0})(n.startAt,ar(n),s)||n.endAt&&!(function(a,u,l){const d=iu(a,u,l);return a.inclusive?d>=0:d>0})(n.endAt,ar(n),s))})(r,t)}function If(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nl(r){return(t,e)=>{let n=!1;for(const s of ar(r)){const i=Tf(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Tf(r,t,e){const n=r.field.isKeyField()?D.comparator(t.key,e.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?de(l,d):O(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){An(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Lc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new st(D.comparator);function Nt(){return Ef}const rl=new st(D.comparator);function Jn(...r){let t=rl;for(const e of r)t=t.insert(e.key,e);return t}function vf(r){let t=rl;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function jt(){return ur()}function sl(){return ur()}function ur(){return new Yt((r=>r.toString()),((r,t)=>r.isEqual(t)))}const wf=new st(D.comparator),Af=new J(D.comparator);function z(...r){let t=Af;for(const e of r)t=t.add(e);return t}const Rf=new J(U);function Vf(){return Rf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function il(r){return{integerValue:""+r}}function Pf(r,t){return bd(t)?il(t):lo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this._=void 0}}function Sf(r,t,e){return r instanceof Tr?(function(s,i){const a={fields:{[qc]:{stringValue:Bc},[zc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oo(i)&&(i=Os(i)),i&&(a.fields[jc]=i),{mapValue:a}})(e,t):r instanceof In?ol(r,t):r instanceof Tn?al(r,t):(function(s,i){const a=Cf(s,i),u=lu(a)+lu(s.Ae);return Mi(a)&&Mi(s.Ae)?il(u):lo(s.serializer,u)})(r,t)}function bf(r,t,e){return r instanceof In?ol(r,t):r instanceof Tn?al(r,t):e}function Cf(r,t){return r instanceof Er?(function(n){return Mi(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class Tr extends Us{}class In extends Us{constructor(t){super(),this.elements=t}}function ol(r,t){const e=ul(t);for(const n of r.elements)e.some((s=>Kt(s,n)))||e.push(n);return{arrayValue:{values:e}}}class Tn extends Us{constructor(t){super(),this.elements=t}}function al(r,t){let e=ul(t);for(const n of r.elements)e=e.filter((s=>!Kt(s,n)));return{arrayValue:{values:e}}}class Er extends Us{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function lu(r){return rt(r.integerValue||r.doubleValue)}function ul(r){return Ir(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.field=t,this.transform=e}}function Df(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof In&&s instanceof In||n instanceof Tn&&s instanceof Tn?ln(n.elements,s.elements,Kt):n instanceof Er&&s instanceof Er?Kt(n.Ae,s.Ae):n instanceof Tr&&s instanceof Tr})(r.transform,t.transform)}class Nf{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function is(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Bs{}function cl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ho(r.key,Mt.none()):new Sr(r.key,r.data,Mt.none());{const e=r.data,n=Ct.empty();let s=new J(at.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new Rn(r.key,n,new $t(s.toArray()),Mt.none())}}function kf(r,t,e){r instanceof Sr?(function(s,i,a){const u=s.value.clone(),l=du(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof Rn?(function(s,i,a){if(!is(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=du(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(ll(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function cr(r,t,e,n){return r instanceof Sr?(function(i,a,u,l){if(!is(i.precondition,a))return u;const d=i.value.clone(),m=fu(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof Rn?(function(i,a,u,l){if(!is(i.precondition,a))return u;const d=fu(i.fieldTransforms,l,a),m=a.data;return m.setAll(ll(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(r,t,e,n):(function(i,a,u){return is(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function hu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ln(n,s,((i,a)=>Df(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Sr extends Bs{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rn extends Bs{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ll(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function du(r,t,e){const n=new Map;F(r.length===e.length,32656,{Ve:e.length,de:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,bf(a,u,e[s]))}return n}function fu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Sf(i,a,t))}return n}class ho extends Bs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hl extends Bs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&kf(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=cr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=cr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sl();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=cl(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(L.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&ln(this.mutations,t.mutations,((e,n)=>hu(e,n)))&&ln(this.baseMutations,t.baseMutations,((e,n)=>hu(e,n)))}}class mo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){F(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=(function(){return wf})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new mo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,$;function Mf(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function dl(r){if(r===void 0)return At("GRPC error has no .code"),P.UNKNOWN;switch(r){case ut.OK:return P.OK;case ut.CANCELLED:return P.CANCELLED;case ut.UNKNOWN:return P.UNKNOWN;case ut.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ut.INTERNAL:return P.INTERNAL;case ut.UNAVAILABLE:return P.UNAVAILABLE;case ut.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ut.NOT_FOUND:return P.NOT_FOUND;case ut.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ut.ABORTED:return P.ABORTED;case ut.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ut.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}($=ut||(ut={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new ue([4294967295,4294967295],0);function mu(r){const t=Ff().encode(r),e=new fc;return e.update(t),new Uint8Array(e.digest())}function gu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ue([e,n],0),new ue([s,i],0)]}class po{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Xn(`Invalid padding: ${e}`);if(n<0)throw new Xn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Xn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Xn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ue.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(ue.fromNumber(n)));return s.compare(Lf)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=mu(t),[n,s]=gu(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new po(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.ge===0)return;const e=mu(t),[n,s]=gu(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,br.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new qs(L.min(),s,new st(U),Nt(),z())}}class br{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new br(n,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class fl{constructor(t,e){this.targetId=t,this.Ce=e}}class ml{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class pu{constructor(){this.ve=0,this.Fe=_u(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),n=z();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}})),new br(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=_u()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,F(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Uf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Nt(),this.Je=Wr(),this.He=Wr(),this.Ze=new st(U)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(_s(i))if(n===0){const a=new D(i.path);this.et(e,a,ot.newNoDocument(a,L.min()))}else F(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=Ht(n).toUint8Array()}catch(l){if(l instanceof Uc)return le("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new po(a,s,i)}catch(l){return le(l instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,a)=>{const u=this.ot(a);if(u){if(i.current&&_s(u.target)){const l=new D(u.target.path);this.Et(l).has(a)||this.It(a,l)||this.et(a,l,ot.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}}));let n=z();this.He.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new qs(t,e,this.Ze,this.je,n);return this.je=Nt(),this.Je=Wr(),this.He=Wr(),this.Ze=new st(U),s}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.It(t,e)?s.Ke(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new pu,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new J(U),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new J(U),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new pu),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Wr(){return new st(D.comparator)}function _u(){return new st(D.comparator)}const Bf={asc:"ASCENDING",desc:"DESCENDING"},qf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jf={and:"AND",or:"OR"};class zf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ji(r,t){return r.useProto3Json||xs(t)?t:{value:t}}function En(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Kf(r,t){return En(r,t.toTimestamp())}function Rt(r){return F(!!r,49232),L.fromTimestamp((function(e){const n=Wt(e);return new X(n.seconds,n.nanos)})(r))}function _o(r,t){return zi(r,t).canonicalString()}function zi(r,t){const e=(function(s){return new H(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function pl(r){const t=H.fromString(r);return F(Rl(t),10190,{key:t.toString()}),t}function Is(r,t){return _o(r.databaseId,t.path)}function Ne(r,t){const e=pl(t);if(e.get(1)!==r.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new D(Il(e))}function _l(r,t){return _o(r.databaseId,t)}function yl(r){const t=pl(r);return t.length===4?H.emptyPath():Il(t)}function Ki(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Il(r){return F(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function yu(r,t,e){return{name:Is(r,t),fields:e.value.mapValue.fields}}function Gf(r,t,e){const n=Ne(r,t.name),s=Rt(t.updateTime),i=t.createTime?Rt(t.createTime):L.min(),a=new Ct({mapValue:{fields:t.fields}}),u=ot.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function $f(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(F(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(F(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const m=d.code===void 0?P.UNKNOWN:dl(d.code);return new x(m,d.message||"")})(a);e=new ml(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ne(r,n.document.name),i=Rt(n.document.updateTime),a=n.document.createTime?Rt(n.document.createTime):L.min(),u=new Ct({mapValue:{fields:n.document.fields}}),l=ot.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new os(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ne(r,n.document),i=n.readTime?Rt(n.readTime):L.min(),a=ot.newNoDocument(s,i),u=n.removedTargetIds||[];e=new os([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ne(r,n.document),i=n.removedTargetIds||[];e=new os([],i,s,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Of(s,i),u=n.targetId;e=new fl(u,a)}}return e}function Ts(r,t){let e;if(t instanceof Sr)e={update:yu(r,t.key,t.value)};else if(t instanceof ho)e={delete:Is(r,t.key)};else if(t instanceof Rn)e={update:yu(r,t.key,t.data),updateMask:Xf(t.fieldMask)};else{if(!(t instanceof hl))return O(16599,{dt:t.type});e={verify:Is(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof Tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof In)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Er)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw O(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Kf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)})(r,t.precondition)),e}function Gi(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?Mt.updateTime(Rt(i.updateTime)):i.exists!==void 0?Mt.exists(i.exists):Mt.none()})(t.currentDocument):Mt.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let l=null;if("setToServerValue"in u)F(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new Tr;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new In(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new Tn(m)}else"increment"in u?l=new Er(a,u.increment):O(16584,{proto:u});const d=at.fromServerFormat(u.fieldPath);return new xf(d,l)})(r,s))):[];if(t.update){t.update.name;const s=Ne(r,t.update.name),i=new Ct({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(l){const d=l.fieldPaths||[];return new $t(d.map((m=>at.fromServerFormat(m))))})(t.updateMask);return new Rn(s,i,a,e,n)}return new Sr(s,i,e,n)}if(t.delete){const s=Ne(r,t.delete);return new ho(s,e)}if(t.verify){const s=Ne(r,t.verify);return new hl(s,e)}return O(1463,{proto:t})}function Qf(r,t){return r&&r.length>0?(F(t!==void 0,14353),r.map((e=>(function(s,i){let a=s.updateTime?Rt(s.updateTime):Rt(i);return a.isEqual(L.min())&&(a=Rt(i)),new Nf(a,s.transformResults||[])})(e,t)))):[]}function Tl(r,t){return{documents:[_l(r,t.path)]}}function El(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=_l(r,s);const i=(function(d){if(d.length!==0)return Al(Y.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(R){return{field:en(R.field),direction:Hf(R.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ji(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function vl(r){let t=yl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){F(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(p){const R=wl(p);return R instanceof Y&&co(R)?R.getFilters():[R]})(e.where));let a=[];e.orderBy&&(a=(function(p){return p.map((R=>(function(N){return new ps(nn(N.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(R)))})(e.orderBy));let u=null;e.limit&&(u=(function(p){let R;return R=typeof p=="object"?p.value:p,xs(R)?null:R})(e.limit));let l=null;e.startAt&&(l=(function(p){const R=!!p.before,S=p.values||[];return new _n(S,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(p){const R=!p.before,S=p.values||[];return new _n(S,R)})(e.endAt)),pf(t,s,a,i,u,"F",l,d)}function Wf(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function wl(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=nn(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=nn(e.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nn(e.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nn(e.unaryFilter.field);return G.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}})(r):r.fieldFilter!==void 0?(function(e){return G.create(nn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Y.create(e.compositeFilter.filters.map((n=>wl(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}})(e.compositeFilter.op))})(r):O(30097,{filter:r})}function Hf(r){return Bf[r]}function Yf(r){return qf[r]}function Jf(r){return jf[r]}function en(r){return{fieldPath:r.canonicalString()}}function nn(r){return at.fromServerFormat(r.fieldPath)}function Al(r){return r instanceof G?(function(e){if(e.op==="=="){if(nu(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NAN"}};if(eu(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(nu(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NOT_NAN"}};if(eu(e.value))return{unaryFilter:{field:en(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:en(e.field),op:Yf(e.op),value:e.value}}})(r):r instanceof Y?(function(e){const n=e.getFilters().map((s=>Al(s)));return n.length===1?n[0]:{compositeFilter:{op:Jf(e.op),filters:n}}})(r):O(54877,{filter:r})}function Xf(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Rl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Vl(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,n,s,i=L.min(),a=L.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this.yt=t}}function Zf(r,t){let e;if(t.document)e=Gf(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=D.fromSegments(t.noDocument.path),s=Ue(t.noDocument.readTime);e=ot.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=D.fromSegments(t.unknownDocument.path),s=Ue(t.unknownDocument.version);e=ot.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new X(s[0],s[1]);return L.fromTimestamp(i)})(t.readTime)),e}function Iu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Es(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:Is(i,a.key),fields:a.data.value.mapValue.fields,updateTime:En(i,a.version.toTimestamp()),createTime:En(i,a.createTime.toTimestamp())}})(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Le(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:Le(t.version)}}return n}function Es(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Le(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ue(r){const t=new X(r.seconds,r.nanoseconds);return L.fromTimestamp(t)}function Ve(r,t){const e=(t.baseMutations||[]).map((i=>Gi(r.yt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>Gi(r.yt,i))),s=X.fromMillis(t.localWriteTimeMs);return new fo(t.batchId,s,e,n)}function Zn(r){const t=Ue(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Ue(r.lastLimboFreeSnapshotVersion):L.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const a=i.documents.length;return F(a===1,1966,{count:a}),kt(Fs(yl(i.documents[0])))})(r.query):(function(i){return kt(vl(i))})(r.query),new Qt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function Sl(r,t){const e=Le(t.snapshotVersion),n=Le(t.lastLimboFreeSnapshotVersion);let s;s=_s(t.target)?Tl(r.yt,t.target):El(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Fe(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function bl(r){const t=vl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qi(t,t.limit,"L"):t}function vi(r,t){return new go(t.largestBatchId,Gi(r.yt,t.overlayMutation))}function Tu(r,t){const e=t.path.lastSegment();return[r,Et(t.path.popLast()),e]}function Eu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Le(n.readTime),documentKey:Et(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{getBundleMetadata(t,e){return vu(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Ue(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return vu(t).put((function(s){return{bundleId:s.id,createTime:Le(Rt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return wu(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:bl(i.bundledQuery),readTime:Ue(i.readTime)}})(n)}))}saveNamedQuery(t,e){return wu(t).put((function(s){return{name:s.name,readTime:Le(Rt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function vu(r){return dt(r,Ds)}function wu(r){return dt(r,Ns)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new js(t,n)}getOverlay(t,e){return Kn(t).get(Tu(this.userId,e)).next((n=>n?vi(this.serializer,n):null))}getOverlays(t,e){const n=jt();return v.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new go(e,a);s.push(this.St(t,u))})),v.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(Et(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Kn(t).X(Ni,u))})),v.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=Et(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Kn(t).J(Ni,a).next((u=>{for(const l of u){const d=vi(this.serializer,l);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Kn(t).ee({index:Nc,range:u},((l,d,m)=>{const p=vi(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):m.done()})).next((()=>i))}St(t,e){return Kn(t).put((function(s,i,a){const[u,l,d]=Tu(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ts(s.yt,a.mutation)}})(this.serializer,this.userId,e))}}function Kn(r){return dt(r,ks)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{bt(t){return dt(t,so)}getSessionToken(t){return this.bt(t).get("sessionToken").next((e=>{const n=e==null?void 0:e.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),dr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=Wt(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ht(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Gc(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Ms(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):O(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,u;const n=t.fields||{};this.Ft(e,53);const s=gn,i=((u=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:u.length)||0;this.Ft(e,15),e.Mt(rt(i)),this.Ot(s,e),this.Ct(n[s],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),D.fromName(t).path.forEach((n=>{this.Ft(e,60),this.$t(n,e)}))}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Pe.Wt=new Pe;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=255;function nm(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Au(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=nm(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class rm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(t){const e=this.en(t),n=Au(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=Au(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(He),this.sn(255)}_n(){this.an(He),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===He?(this.sn(He),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===He?(this.an(He),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class sm{constructor(t){this.cn=t}Bt(t){this.cn.Qt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.Yt(t)}vt(){this.cn.rn()}}class im{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Xt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class Gn{constructor(){this.cn=new rm,this.ascending=new sm(this.cn),this.descending=new im(this.cn)}seed(t){this.cn.seed(t)}ln(t){return t===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e,n,s){this.hn=t,this.Pn=e,this.Tn=n,this.En=s}In(){const t=this.En.length,e=t===0||this.En[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.En,0),e!==t?n.set([0],this.En.length):++n[n.length-1],new Se(this.hn,this.Pn,this.Tn,n)}Rn(t,e,n){return{indexId:this.hn,uid:t,arrayValue:as(this.Tn),directionalValue:as(this.En),orderedDocumentKey:as(e),documentKey:n.path.toArray()}}An(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function re(r,t){let e=r.hn-t.hn;return e!==0?e:(e=Ru(r.Tn,t.Tn),e!==0?e:(e=Ru(r.En,t.En),e!==0?e:D.comparator(r.Pn,t.Pn)))}function Ru(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function as(r){return dc()?(function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n})(r):r}function Vu(r){return typeof r!="string"?r:(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(r)}class Pu{constructor(t){this.Vn=new J(((e,n)=>at.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.dn=t.orderBy,this.mn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.mn.push(n)}}get fn(){return this.Vn.size>1}gn(t){if(F(t.collectionGroup===this.collectionId,49279),this.fn)return!1;const e=Ci(t);if(e!==void 0&&!this.pn(e))return!1;const n=we(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.pn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.yn(u,l)||!this.wn(this.dn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.dn.length||!this.wn(this.dn[a++],u))return!1}return!0}Sn(){if(this.fn)return null;let t=new J(at.comparator);const e=[];for(const n of this.mn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ts(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ts(n.field,0))}for(const n of this.dn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ts(n.field,n.dir==="asc"?0:1)));return new hs(hs.UNKNOWN_ID,this.collectionId,e,hr.empty())}pn(t){for(const e of this.mn)if(this.yn(e,t))return!0;return!1}yn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}wn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){var e,n;if(F(r instanceof G||r instanceof Y,20012),r instanceof G){if(r instanceof Zc){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map((i=>G.create(r.field,"==",i))))||[];return Y.create(s,"or")}return r}const t=r.filters.map((s=>Cl(s)));return Y.create(t,r.op)}function om(r){if(r.getFilters().length===0)return[];const t=Wi(Cl(r));return F(xl(t),7391),$i(t)||Qi(t)?[t]:t.getFilters()}function $i(r){return r instanceof G}function Qi(r){return r instanceof Y&&co(r)}function xl(r){return $i(r)||Qi(r)||(function(e){if(e instanceof Y&&Fi(e)){for(const n of e.getFilters())if(!$i(n)&&!Qi(n))return!1;return!0}return!1})(r)}function Wi(r){if(F(r instanceof G||r instanceof Y,34018),r instanceof G)return r;if(r.filters.length===1)return Wi(r.filters[0]);const t=r.filters.map((n=>Wi(n)));let e=Y.create(t,r.op);return e=vs(e),xl(e)?e:(F(e instanceof Y,64498),F(yn(e),40251),F(e.filters.length>1,57927),e.filters.reduce(((n,s)=>yo(n,s))))}function yo(r,t){let e;return F(r instanceof G||r instanceof Y,38388),F(t instanceof G||t instanceof Y,25473),e=r instanceof G?t instanceof G?(function(s,i){return Y.create([s,i],"and")})(r,t):Su(r,t):t instanceof G?Su(t,r):(function(s,i){if(F(s.filters.length>0&&i.filters.length>0,48005),yn(s)&&yn(i))return Yc(s,i.getFilters());const a=Fi(s)?s:i,u=Fi(s)?i:s,l=a.filters.map((d=>yo(d,u)));return Y.create(l,"or")})(r,t),vs(e)}function Su(r,t){if(yn(t))return Yc(t,r.getFilters());{const e=t.filters.map((n=>yo(r,n)));return Y.create(e,"or")}}function vs(r){if(F(r instanceof G||r instanceof Y,11850),r instanceof G)return r;const t=r.getFilters();if(t.length===1)return vs(t[0]);if(Wc(r))return r;const e=t.map((s=>vs(s))),n=[];return e.forEach((s=>{s instanceof G?n.push(s):s instanceof Y&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:Y.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.bn=new Io}addToCollectionParentIndex(t,e){return this.bn.add(e),v.resolve()}getCollectionParents(t,e){return v.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return v.resolve()}deleteFieldIndex(t,e){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,e){return v.resolve()}getDocumentsMatchingTarget(t,e){return v.resolve(null)}getIndexType(t,e){return v.resolve(0)}getFieldIndexes(t,e){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,e){return v.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,e){return v.resolve(bt.min())}updateCollectionGroup(t,e,n){return v.resolve()}updateIndexEntries(t,e){return v.resolve()}}class Io{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new J(H.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new J(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="IndexedDbIndexManager",Hr=new Uint8Array(0);class um{constructor(t,e){this.databaseId=e,this.Dn=new Io,this.Cn=new Yt((n=>Fe(n)),((n,s)=>Rr(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Dn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.Dn.add(e)}));const i={collectionId:n,parent:Et(s)};return Cu(t).put(i)}return v.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[vc(e),""],!1,!0);return Cu(t).J(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(qt(a.parent))}return n}))}addFieldIndex(t,e){const n=$n(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=Je(t);return i.next((u=>{a.put(Eu(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=$n(t),s=Je(t),i=Ye(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=$n(t),n=Ye(t),s=Je(t);return e.X().next((()=>n.X())).next((()=>s.X()))}createTargetIndexes(t,e){return v.forEach(this.vn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new Pu(n).Sn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=Ye(t);let s=!0;const i=new Map;return v.forEach(this.vn(e),(a=>this.Fn(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=z();const u=[];return v.forEach(i,((l,d)=>{b(bu,`Using index ${(function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map((et=>`${et.fieldPath}:${et.kind}`)).join(",")}`})(l)} to execute ${Fe(e)}`);const m=(function(q,et){const Q=Ci(et);if(Q===void 0)return null;for(const W of ys(q,Q.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null})(d,l),p=(function(q,et){const Q=new Map;for(const W of we(et))for(const I of ys(q,W.fieldPath))switch(I.op){case"==":case"in":Q.set(W.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Q.set(W.fieldPath.canonicalString(),I.value),Array.from(Q.values())}return null})(d,l),R=(function(q,et){const Q=[];let W=!0;for(const I of we(et)){const g=I.kind===0?au(q,I.fieldPath,q.startAt):uu(q,I.fieldPath,q.startAt);Q.push(g.value),W&&(W=g.inclusive)}return new _n(Q,W)})(d,l),S=(function(q,et){const Q=[];let W=!0;for(const I of we(et)){const g=I.kind===0?uu(q,I.fieldPath,q.endAt):au(q,I.fieldPath,q.endAt);Q.push(g.value),W&&(W=g.inclusive)}return new _n(Q,W)})(d,l),N=this.Mn(l,d,R),k=this.Mn(l,d,S),M=this.xn(l,d,p),Z=this.On(l.indexId,m,N,R.inclusive,k,S.inclusive,M);return v.forEach(Z,(K=>n.Z(K,e.limit).next((q=>{q.forEach((et=>{const Q=D.fromSegments(et.documentKey);a.has(Q)||(a=a.add(Q),u.push(Q))}))}))))})).next((()=>u))}return v.resolve(null)}))}vn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=om(Y.create(t.filters,"and")).map((n=>Ui(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.Cn.set(t,e),e)}On(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let p=0;p<l;++p){const R=e?this.Nn(e[p/d]):Hr,S=this.Bn(t,R,n[p%d],s),N=this.Ln(t,R,i[p%d],a),k=u.map((M=>this.Bn(t,R,M,!0)));m.push(...this.createRange(S,N,k))}return m}Bn(t,e,n,s){const i=new Se(t,D.empty(),e,n);return s?i:i.In()}Ln(t,e,n,s){const i=new Se(t,D.empty(),e,n);return s?i.In():i}Fn(t,e){const n=new Pu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.gn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.vn(e);return v.forEach(s,(i=>this.Fn(t,i).next((a=>{a?n!==0&&a.fields.length<(function(l){let d=new J(at.comparator),m=!1;for(const p of l.filters)for(const R of p.getFlattenedFilters())R.field.isKeyField()||(R.op==="array-contains"||R.op==="array-contains-any"?m=!0:d=d.add(R.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}kn(t,e){const n=new Gn;for(const s of we(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.ln(s.kind);Pe.Wt.Dt(i,a)}return n.un()}Nn(t){const e=new Gn;return Pe.Wt.Dt(t,e.ln(0)),e.un()}qn(t,e){const n=new Gn;return Pe.Wt.Dt(yr(this.databaseId,e),n.ln((function(i){const a=we(i);return a.length===0?0:a[a.length-1].kind})(t))),n.un()}xn(t,e,n){if(n===null)return[];let s=[];s.push(new Gn);let i=0;for(const a of we(t)){const u=n[i++];for(const l of s)if(this.Kn(e,a.fieldPath)&&Ir(u))s=this.Un(s,a,u);else{const d=l.ln(a.kind);Pe.Wt.Dt(u,d)}}return this.$n(s)}Mn(t,e,n){return this.xn(t,e,n.position)}$n(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Un(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new Gn;l.seed(u.un()),Pe.Wt.Dt(a,l.ln(e.kind)),i.push(l)}return i}Kn(t,e){return!!t.filters.find((n=>n instanceof G&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=$n(t),s=Je(t);return(e?n.J(Di,IDBKeyRange.bound(e,e)):n.J()).next((i=>{const a=[];return v.forEach(i,(u=>s.get([u.indexId,this.uid]).next((l=>{a.push((function(m,p){const R=p?new hr(p.sequenceNumber,new bt(Ue(p.readTime),new D(qt(p.documentKey)),p.largestBatchId)):hr.empty(),S=m.fields.map((([N,k])=>new ts(at.fromServerFormat(N),k)));return new hs(m.indexId,m.collectionGroup,S,R)})(u,l))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:U(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=$n(t),i=Je(t);return this.Wn(t).next((a=>s.J(Di,IDBKeyRange.bound(e,e)).next((u=>v.forEach(u,(l=>i.put(Eu(l.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return v.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),v.forEach(u,(l=>this.Qn(t,s,l).next((d=>{const m=this.Gn(i,l);return d.isEqual(m)?v.resolve():this.zn(t,i,l,d,m)})))))))}))}jn(t,e,n,s){return Ye(t).put(s.Rn(this.uid,this.qn(n,e.key),e.key))}Jn(t,e,n,s){return Ye(t).delete(s.An(this.uid,this.qn(n,e.key),e.key))}Qn(t,e,n){const s=Ye(t);let i=new J(re);return s.ee({index:Dc,range:IDBKeyRange.only([n.indexId,this.uid,as(this.qn(n,e))])},((a,u)=>{i=i.add(new Se(n.indexId,e,Vu(u.arrayValue),Vu(u.directionalValue)))})).next((()=>i))}Gn(t,e){let n=new J(re);const s=this.kn(e,t);if(s==null)return n;const i=Ci(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Ir(a))for(const u of a.arrayValue.values||[])n=n.add(new Se(e.indexId,t.key,this.Nn(u),s))}else n=n.add(new Se(e.indexId,t.key,Hr,s));return n}zn(t,e,n,s,i){b(bu,"Updating index entries for document '%s'",e.key);const a=[];return(function(l,d,m,p,R){const S=l.getIterator(),N=d.getIterator();let k=We(S),M=We(N);for(;k||M;){let Z=!1,K=!1;if(k&&M){const q=m(k,M);q<0?K=!0:q>0&&(Z=!0)}else k!=null?K=!0:Z=!0;Z?(p(M),M=We(N)):K?(R(k),k=We(S)):(k=We(S),M=We(N))}})(s,i,re,(u=>{a.push(this.jn(t,e,n,u))}),(u=>{a.push(this.Jn(t,e,n,u))})),v.waitFor(a)}Wn(t){let e=1;return Je(t).ee({index:xc,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>re(a,u))).filter(((a,u,l)=>!u||re(a,l[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=re(a,t),l=re(a,e);if(u===0)s[0]=t.In();else if(u>0&&l<0)s.push(a),s.push(a.In());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Hn(s[a],s[a+1]))return[];const u=s[a].An(this.uid,Hr,D.empty()),l=s[a+1].An(this.uid,Hr,D.empty());i.push(IDBKeyRange.bound(u,l))}return i}Hn(t,e){return re(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(xu)}getMinOffset(t,e){return v.mapArray(this.vn(e),(n=>this.Fn(t,n).next((s=>s||O(44426))))).next(xu)}}function Cu(r){return dt(r,gr)}function Ye(r){return dt(r,ir)}function $n(r){return dt(r,ro)}function Je(r){return dt(r,sr)}function xu(r){F(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;to(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new bt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dl=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r,t,e){const n=r.store(Ot),s=r.store(hn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.ee({range:a},((m,p,R)=>(u++,R.delete())));i.push(l.next((()=>{F(u===1,47070,{batchId:e.batchId})})));const d=[];for(const m of e.mutations){const p=Sc(t,m.key.path,e.batchId);i.push(s.delete(p)),d.push(m.key)}return v.waitFor(i).next((()=>d))}function ws(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Dl,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class zs{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(t,e,n,s){F(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new zs(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return se(t).ee({index:be,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=rn(t),a=se(t);return a.add({}).next((u=>{F(typeof u=="number",49019);const l=new fo(u,e,n,s),d=(function(S,N,k){const M=k.baseMutations.map((K=>Ts(S.yt,K))),Z=k.mutations.map((K=>Ts(S.yt,K)));return{userId:N,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:M,mutations:Z}})(this.serializer,this.userId,l),m=[];let p=new J(((R,S)=>U(R.canonicalString(),S.canonicalString())));for(const R of s){const S=Sc(this.userId,R.key.path,u);p=p.add(R.key.path.popLast()),m.push(a.put(d)),m.push(i.put(S,Dd))}return p.forEach((R=>{m.push(this.indexManager.addToCollectionParentIndex(t,R))})),t.addOnCommittedListener((()=>{this.Zn[u]=l.keys()})),v.waitFor(m).next((()=>l))}))}lookupMutationBatch(t,e){return se(t).get(e).next((n=>n?(F(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Ve(this.serializer,n)):null))}Xn(t,e){return this.Zn[e]?v.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return se(t).ee({index:be,range:s},((a,u,l)=>{u.userId===this.userId&&(F(u.batchId>=n,47524,{Yn:n}),i=Ve(this.serializer,u)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=xe;return se(t).ee({index:be,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,xe],[this.userId,Number.POSITIVE_INFINITY]);return se(t).J(be,e).next((n=>n.map((s=>Ve(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=es(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return rn(t).ee({range:s},((a,u,l)=>{const[d,m,p]=a,R=qt(m);if(d===this.userId&&e.path.isEqual(R))return se(t).get(p).next((S=>{if(!S)throw O(61480,{er:a,batchId:p});F(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:p}),i.push(Ve(this.serializer,S))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(U);const s=[];return e.forEach((i=>{const a=es(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=rn(t).ee({range:u},((d,m,p)=>{const[R,S,N]=d,k=qt(S);R===this.userId&&i.path.isEqual(k)?n=n.add(N):p.done()}));s.push(l)})),v.waitFor(s).next((()=>this.tr(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=es(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new J(U);return rn(t).ee({range:a},((l,d,m)=>{const[p,R,S]=l,N=qt(R);p===this.userId&&n.isPrefixOf(N)?N.length===s&&(u=u.add(S)):m.done()})).next((()=>this.tr(t,u)))}tr(t,e){const n=[],s=[];return e.forEach((i=>{s.push(se(t).get(i).next((a=>{if(a===null)throw O(35274,{batchId:i});F(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Ve(this.serializer,a))})))})),v.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return Nl(t.le,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.nr(e.batchId)})),v.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}nr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return v.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return rn(t).ee({range:n},((i,a,u)=>{if(i[0]===this.userId){const l=qt(i[1]);s.push(l)}else u.done()})).next((()=>{F(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(t,e){return kl(t,this.userId,e)}ir(t){return Ol(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:xe,lastStreamToken:""}))}}function kl(r,t,e){const n=es(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return rn(r).ee({range:i,Y:!0},((u,l,d)=>{const[m,p,R]=u;m===t&&p===s&&(a=!0),d.done()})).next((()=>a))}function se(r){return dt(r,Ot)}function rn(r){return dt(r,hn)}function Ol(r){return dt(r,fr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Be(0)}static ar(){return new Be(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.ur(t).next((e=>{const n=new Be(e.highestTargetId);return e.highestTargetId=n.next(),this.cr(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.ur(t).next((e=>L.fromTimestamp(new X(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.ur(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.ur(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.cr(t,s))))}addTargetData(t,e){return this.lr(t,e).next((()=>this.ur(t).next((n=>(n.targetCount+=1,this.hr(e,n),this.cr(t,n))))))}updateTargetData(t,e){return this.lr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Xe(t).delete(e.targetId))).next((()=>this.ur(t))).next((n=>(F(n.targetCount>0,8065),n.targetCount-=1,this.cr(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return Xe(t).ee(((a,u)=>{const l=Zn(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))})).next((()=>v.waitFor(i))).next((()=>s))}forEachTarget(t,e){return Xe(t).ee(((n,s)=>{const i=Zn(s);e(i)}))}ur(t){return Nu(t).get(ms).next((e=>(F(e!==null,2888),e)))}cr(t,e){return Nu(t).put(ms,e)}lr(t,e){return Xe(t).put(Sl(this.serializer,e))}hr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.ur(t).next((e=>e.targetCount))}getTargetData(t,e){const n=Fe(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Xe(t).ee({range:s,index:Cc},((a,u,l)=>{const d=Zn(u);Rr(e,d.target)&&(i=d,l.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=oe(t);return e.forEach((a=>{const u=Et(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),v.waitFor(s)}removeMatchingKeys(t,e,n){const s=oe(t);return v.forEach(e,(i=>{const a=Et(i.path);return v.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=oe(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=oe(t);let i=z();return s.ee({range:n,Y:!0},((a,u,l)=>{const d=qt(a[1]),m=new D(d);i=i.add(m)})).next((()=>i))}containsKey(t,e){const n=Et(e.path),s=IDBKeyRange.bound([n],[vc(n)],!1,!0);let i=0;return oe(t).ee({index:no,Y:!0,range:s},(([a,u],l,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}At(t,e){return Xe(t).get(e).next((n=>n?Zn(n):null))}}function Xe(r){return dt(r,dn)}function Nu(r){return dt(r,De)}function oe(r){return dt(r,fn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="LruGarbageCollector",lm=1048576;function Ou([r,t],[e,n]){const s=U(r,e);return s===0?U(t,n):s}class hm{constructor(t){this.Pr=t,this.buffer=new J(Ou),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ou(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ml{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){b(ku,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ge(e)?b(ku,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Ar(3e5)}))}}class dm{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return v.resolve(Dt.ce);const n=new hm(e);return this.Vr.forEachTarget(t,(s=>n.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>n.Ir(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Du)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(n=p,u=Date.now(),this.removeTargets(t,n,e)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n)))).next((p=>(d=Date.now(),Ze()<=Gt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Fl(r,t){return new dm(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,e){this.db=t,this.garbageCollector=Fl(this,e)}dr(t){const e=this.pr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}pr(t){let e=0;return this.mr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}mr(t,e){return this.yr(t,((n,s)=>e(s)))}addReference(t,e,n){return Yr(t,n)}removeReference(t,e,n){return Yr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Yr(t,e)}wr(t,e){return(function(s,i){let a=!1;return Ol(s).te((u=>kl(s,u,i).next((l=>(l&&(a=!0),v.resolve(!l)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(t,((a,u)=>{if(u<=e){const l=this.wr(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,L.min()),oe(t).delete((function(p){return[0,Et(p.path)]})(a)))))}));s.push(l)}})).next((()=>v.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Yr(t,e)}yr(t,e){const n=oe(t);let s,i=Dt.ce;return n.ee({index:no},(([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Dt.ce&&e(new D(qt(s)),i),i=d,s=l):i=Dt.ce})).next((()=>{i!==Dt.ce&&e(new D(qt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Yr(r,t){return oe(r).put((function(n,s){return{targetId:0,path:Et(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.changes=new Yt((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?v.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return ve(t).put(n)}removeEntry(t,e,n){return ve(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Es(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.Sr(t,n))))}getEntry(t,e){let n=ot.newInvalidDocument(e);return ve(t).ee({index:ns,range:IDBKeyRange.only(Qn(e))},((s,i)=>{n=this.br(e,i)})).next((()=>n))}Dr(t,e){let n={size:0,document:ot.newInvalidDocument(e)};return ve(t).ee({index:ns,range:IDBKeyRange.only(Qn(e))},((s,i)=>{n={document:this.br(e,i),size:ws(i)}})).next((()=>n))}getEntries(t,e){let n=Nt();return this.Cr(t,e,((s,i)=>{const a=this.br(s,i);n=n.insert(s,a)})).next((()=>n))}vr(t,e){let n=Nt(),s=new st(D.comparator);return this.Cr(t,e,((i,a)=>{const u=this.br(i,a);n=n.insert(i,u),s=s.insert(i,ws(a))})).next((()=>({documents:n,Fr:s})))}Cr(t,e,n){if(e.isEmpty())return v.resolve();let s=new J(Lu);e.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Qn(s.first()),Qn(s.last())),a=s.getIterator();let u=a.getNext();return ve(t).ee({index:ns,range:i},((l,d,m)=>{const p=D.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Lu(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.j(Qn(u)):m.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Es(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ve(t).J(IDBKeyRange.bound(u,l,!0)).next((d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Nt();for(const p of d){const R=this.br(D.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);R.isFoundDocument()&&(Pr(e,R)||s.has(R.key))&&(m=m.insert(R.key,R))}return m}))}getAllFromCollectionGroup(t,e,n,s){let i=Nt();const a=Fu(e,n),u=Fu(e,bt.max());return ve(t).ee({index:bc,range:IDBKeyRange.bound(a,u,!0)},((l,d,m)=>{const p=this.br(D.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&m.done()})).next((()=>i))}newChangeBuffer(t){return new gm(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return Mu(t).get(xi).next((e=>(F(!!e,20021),e)))}Sr(t,e){return Mu(t).put(xi,e)}br(t,e){if(e){const n=Zf(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(L.min())))return n}return ot.newInvalidDocument(t)}}function Ul(r){return new mm(r)}class gm extends Ll{constructor(t,e){super(),this.Mr=t,this.trackRemovals=e,this.Or=new Yt((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new J(((i,a)=>U(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Or.get(i);if(e.push(this.Mr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Iu(this.Mr.serializer,a);s=s.add(i.path.popLast());const d=ws(l);n+=d-u.size,e.push(this.Mr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Iu(this.Mr.serializer,a.convertToNoDocument(L.min()));e.push(this.Mr.addEntry(t,i,l))}})),s.forEach((i=>{e.push(this.Mr.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Mr.updateMetadata(t,n)),v.waitFor(e)}getFromCache(t,e){return this.Mr.Dr(t,e).next((n=>(this.Or.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Mr.vr(t,e).next((({documents:n,Fr:s})=>(s.forEach(((i,a)=>{this.Or.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function Mu(r){return dt(r,mr)}function ve(r){return dt(r,fs)}function Qn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Fu(r,t){const e=t.documentKey.path.toArray();return[r,Es(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Lu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=U(e[i],n[i]),s)return s;return s=U(e.length,n.length),s||(s=U(e[e.length-2],n[n.length-2]),s||U(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&cr(n.mutation,s,$t.empty(),X.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,z()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=z()){const s=jt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=Jn();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,z())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=Nt();const a=ur(),u=(function(){return ur()})();return e.forEach(((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Rn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),cr(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,$t.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>u.set(d,new pm(m,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const n=ur();let s=new st(((a,u)=>a-u)),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||$t.empty();m=u.applyToLocalView(d,m),n.set(l,m);const p=(s.get(u.batchId)||z()).add(l);s=s.insert(u.batchId,p)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,p=sl();m.forEach((R=>{if(!i.has(R)){const S=cl(e.get(R),n.get(R));S!==null&&p.set(R,S),i=i.add(R)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return v.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return _f(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):tl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):v.resolve(jt());let u=lr,l=i;return a.next((d=>v.forEach(d,((m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(m)?v.resolve():this.remoteDocumentCache.getEntry(t,m).next((R=>{l=l.insert(m,R)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,l,d,z()))).next((m=>({batchId:u,changes:vf(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new D(e)).next((n=>{let s=Jn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Jn();return this.indexManager.getCollectionParents(t,i).next((u=>v.forEach(u,(l=>{const d=(function(p,R){return new Vr(R,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((m=>{m.forEach(((p,R)=>{a=a.insert(p,R)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ot.newInvalidDocument(m)))}));let u=Jn();return a.forEach(((l,d)=>{const m=i.get(l);m!==void 0&&cr(m.mutation,d,$t.empty(),X.now()),Pr(e,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return v.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Rt(s.createTime)}})(e)),v.resolve()}getNamedQuery(t,e){return v.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:bl(s.bundledQuery),readTime:Rt(s.readTime)}})(e)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.overlays=new st(D.comparator),this.Lr=new Map}getOverlay(t,e){return v.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return v.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.St(t,e,i)})),v.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(n)),v.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new D(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return v.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new st(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=jt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=jt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>u.set(d,m))),!(u.size()>=s)););return v.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new go(e,n));let i=this.Lr.get(e);i===void 0&&(i=z(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return v.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,v.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.kr=new J(mt.qr),this.Kr=new J(mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new mt(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new mt(t,e))}Qr(t,e){t.forEach((n=>this.removeReference(n,e)))}Gr(t){const e=new D(new H([])),n=new mt(e,t),s=new mt(e,t+1),i=[];return this.Kr.forEachInRange([n,s],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new D(new H([])),n=new mt(e,t),s=new mt(e,t+1);let i=z();return this.Kr.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new mt(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class mt{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return D.comparator(t.key,e.key)||U(t.Jr,e.Jr)}static Ur(t,e){return U(t.Jr,e.Jr)||D.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new J(mt.qr)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Hr=this.Hr.add(new mt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(t,e){return v.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?xe:this.Yn-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new mt(e,0),s=new mt(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Jr);i.push(u)})),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(U);return e.forEach((s=>{const i=new mt(s,0),a=new mt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(u=>{n=n.add(u.Jr)}))})),v.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;D.isDocumentKey(i)||(i=i.child(""));const a=new mt(new D(i),0);let u=new J(U);return this.Hr.forEachWhile((l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Jr)),!0)}),a),v.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach((n=>{const s=this.Zr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){F(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return v.forEach(e.mutations,(s=>{const i=new mt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Hr=n}))}nr(t){}containsKey(t,e){const n=new mt(e,0),s=this.Hr.firstAfterOrEqual(n);return v.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t){this.ti=t,this.docs=(function(){return new st(D.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return v.resolve(n?n.document.mutableCopy():ot.newInvalidDocument(e))}getEntries(t,e){let n=Nt();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))})),v.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Nt();const a=e.path,u=new D(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||to(Ac(m),n)<=0||(s.has(m.key)||Pr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}ni(t,e){return v.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new vm(this)}getSize(t){return v.resolve(this.size)}}class vm extends Ll{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)})),v.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.persistence=t,this.ri=new Yt((e=>Fe(e)),Rr),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ii=0,this.si=new To,this.targetCount=0,this.oi=Be._r()}forEachTarget(t,e){return this.ri.forEach(((n,s)=>e(s))),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),v.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,v.resolve()}updateTargetData(t,e){return this.lr(e),v.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ri.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),v.waitFor(i).next((()=>s))}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return v.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),v.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),v.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),v.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return v.resolve(n)}containsKey(t,e){return v.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e){this._i={},this.overlays={},this.ai=new Dt(0),this.ui=!1,this.ui=!0,this.ci=new Im,this.referenceDelegate=t(this),this.li=new wm(this),this.indexManager=new am,this.remoteDocumentCache=(function(s){return new Em(s)})((n=>this.referenceDelegate.hi(n))),this.serializer=new Pl(e),this.Pi=new _m(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ym,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Tm(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new Am(this.ai.next());return this.referenceDelegate.Ti(),n(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(t,e){return v.or(Object.values(this._i).map((n=>()=>n.containsKey(t,e))))}}class Am extends Vc{constructor(t){super(),this.currentSequenceNumber=t}}class Ks{constructor(t){this.persistence=t,this.Ri=new To,this.Ai=null}static Vi(t){return new Ks(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),v.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),v.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),v.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.di,(n=>{const s=D.fromPath(n);return this.mi(t,s).next((i=>{i||e.removeEntry(s,L.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return v.or([()=>v.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class As{constructor(t,e){this.persistence=t,this.fi=new Yt((n=>Et(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Fl(this,e)}static Vi(t,e){return new As(t,e)}Ti(){}Ei(t){return v.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}pr(t){let e=0;return this.mr(t,(n=>{e++})).next((()=>e))}mr(t,e){return v.forEach(this.fi,((n,s)=>this.wr(t,n,s).next((i=>i?v.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((u=>{u||(n++,i.removeEntry(a,L.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),v.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),v.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),v.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),v.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ss(t.data.value)),e}wr(t,e,n){return v.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t){this.serializer=t}k(t,e,n,s){const i=new Cs("createOrUpgrade",e);n<1&&s>=1&&((function(l){l.createObjectStore(Ar)})(t),(function(l){l.createObjectStore(fr,{keyPath:xd}),l.createObjectStore(Ot,{keyPath:Ha,autoIncrement:!0}).createIndex(be,Ya,{unique:!0}),l.createObjectStore(hn)})(t),Uu(t),(function(l){l.createObjectStore(Ae)})(t));let a=v.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(fn),l.deleteObjectStore(dn),l.deleteObjectStore(De)})(t),Uu(t)),a=a.next((()=>(function(l){const d=l.store(De),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return d.put(ms,m)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(l,d){return d.store(Ot).J().next((p=>{l.deleteObjectStore(Ot),l.createObjectStore(Ot,{keyPath:Ha,autoIncrement:!0}).createIndex(be,Ya,{unique:!0});const R=d.store(Ot),S=p.map((N=>R.put(N)));return v.waitFor(S)}))})(t,i)))),a=a.next((()=>{(function(l){l.createObjectStore(mn,{keyPath:Bd})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this.gi(i)))),n<6&&s>=6&&(a=a.next((()=>((function(l){l.createObjectStore(mr)})(t),this.pi(i))))),n<7&&s>=7&&(a=a.next((()=>this.yi(i)))),n<8&&s>=8&&(a=a.next((()=>this.wi(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.Si(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(l){l.createObjectStore(Ds,{keyPath:qd})})(t),(function(l){l.createObjectStore(Ns,{keyPath:jd})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(l){const d=l.createObjectStore(ks,{keyPath:Hd});d.createIndex(Ni,Yd,{unique:!1}),d.createIndex(Nc,Jd,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(l){const d=l.createObjectStore(fs,{keyPath:Nd});d.createIndex(ns,kd),d.createIndex(bc,Od)})(t))).next((()=>this.bi(t,i))).next((()=>t.deleteObjectStore(Ae)))),n<14&&s>=14&&(a=a.next((()=>this.Di(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(l){l.createObjectStore(ro,{keyPath:zd,autoIncrement:!0}).createIndex(Di,Kd,{unique:!1}),l.createObjectStore(sr,{keyPath:Gd}).createIndex(xc,$d,{unique:!1}),l.createObjectStore(ir,{keyPath:Qd}).createIndex(Dc,Wd,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(sr).clear()})).next((()=>{e.objectStore(ir).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(l){l.createObjectStore(so,{keyPath:Xd})})(t)}))),n<18&&s>=18&&dc()&&(a=a.next((()=>{e.objectStore(sr).clear()})).next((()=>{e.objectStore(ir).clear()}))),a}pi(t){let e=0;return t.store(Ae).ee(((n,s)=>{e+=ws(s)})).next((()=>{const n={byteSize:e};return t.store(mr).put(xi,n)}))}gi(t){const e=t.store(fr),n=t.store(Ot);return e.J().next((s=>v.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,xe],[i.userId,i.lastAcknowledgedBatchId]);return n.J(be,a).next((u=>v.forEach(u,(l=>{F(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Ve(this.serializer,l);return Nl(t,i.userId,d).next((()=>{}))}))))}))))}yi(t){const e=t.store(fn),n=t.store(Ae);return t.store(De).get(ms).next((s=>{const i=[];return n.ee(((a,u)=>{const l=new H(a),d=(function(p){return[0,Et(p)]})(l);i.push(e.get(d).next((m=>m?v.resolve():(p=>e.put({targetId:0,path:Et(p),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>v.waitFor(i)))}))}wi(t,e){t.createObjectStore(gr,{keyPath:Ud});const n=e.store(gr),s=new Io,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Et(l)})}};return e.store(Ae).ee({Y:!0},((a,u)=>{const l=new H(a);return i(l.popLast())})).next((()=>e.store(hn).ee({Y:!0},(([a,u,l],d)=>{const m=qt(u);return i(m.popLast())}))))}Si(t){const e=t.store(dn);return e.ee(((n,s)=>{const i=Zn(s),a=Sl(this.serializer,i);return e.put(a)}))}bi(t,e){const n=e.store(Ae),s=[];return n.ee(((i,a)=>{const u=e.store(fs),l=(function(p){return p.document?new D(H.fromString(p.document.name).popFirst(5)):p.noDocument?D.fromSegments(p.noDocument.path):p.unknownDocument?D.fromSegments(p.unknownDocument.path):O(36783)})(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>v.waitFor(s)))}Di(t,e){const n=e.store(Ot),s=Ul(this.serializer),i=new Eo(Ks.Vi,this.serializer.yt);return n.J().next((a=>{const u=new Map;return a.forEach((l=>{let d=u.get(l.userId)??z();Ve(this.serializer,l).keys().forEach((m=>d=d.add(m))),u.set(l.userId,d)})),v.forEach(u,((l,d)=>{const m=new gt(d),p=js.wt(this.serializer,m),R=i.getIndexManager(m),S=zs.wt(m,this.serializer,R,i.referenceDelegate);return new Bl(s,S,p,R).recalculateAndSaveOverlaysForDocumentKeys(new ki(e,Dt.ce),l).next()}))}))}}function Uu(r){r.createObjectStore(fn,{keyPath:Fd}).createIndex(no,Ld,{unique:!0}),r.createObjectStore(dn,{keyPath:"targetId"}).createIndex(Cc,Md,{unique:!0}),r.createObjectStore(De)}const ie="IndexedDbPersistence",wi=18e5,Ai=5e3,Ri="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Vm="main";class vo{constructor(t,e,n,s,i,a,u,l,d,m,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ci=i,this.window=a,this.document=u,this.Fi=d,this.Mi=m,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=R=>Promise.resolve(),!vo.v())throw new x(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fm(this,s),this.qi=e+Vm,this.serializer=new Pl(l),this.Ki=new ce(this.qi,this.xi,new Rm(this.serializer)),this.ci=new em,this.li=new cm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ul(this.serializer),this.Pi=new tm,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,m===!1&&At(ie,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Ri);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.li.getHighestSequenceNumber(t)))})).then((t=>{this.ai=new Dt(t,this.Fi)})).then((()=>{this.ui=!0})).catch((t=>(this.Ki&&this.Ki.close(),Promise.reject(t))))}zi(t){return this.ki=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ki.K((async e=>{e.newVersion===null&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Jr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(t).next((e=>{e||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(t))).next((e=>this.isPrimary&&!e?this.Hi(t).next((()=>!1)):!!e&&this.Zi(t).next((()=>!0)))))).catch((t=>{if(ge(t))return b(ie,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b(ie,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Ci.enqueueRetryable((()=>this.ki(t))),this.isPrimary=t}))}ji(t){return Wn(t).get(Qe).next((e=>v.resolve(this.Xi(e))))}Yi(t){return Jr(t).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,wi)){this.Li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=dt(e,mn);return n.J().next((s=>{const i=this.ns(s,wi),a=s.filter((u=>i.indexOf(u)===-1));return v.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ui)for(const e of t)this.Ui.removeItem(this.rs(e.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(t){return!!t&&t.ownerId===this.clientId}Ji(t){return this.Mi?v.resolve(!0):Wn(t).get(Qe).next((e=>{if(e!==null&&this.ts(e.leaseTimestampMs,Ai)&&!this.ss(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Ri);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jr(t).J().next((n=>this.ns(n,Ai).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&b(ie,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Ar,mn],(t=>{const e=new ki(t,Dt.ce);return this.Hi(e).next((()=>this.Yi(e)))})),this.Ki.close(),this.ls()}ns(t,e){return t.filter((n=>this.ts(n.updateTimeMs,e)&&!this.ss(n.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(t=>Jr(t).J().next((e=>this.ns(e,wi).map((n=>n.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(t,e){return zs.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new um(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return js.wt(this.serializer,t)}getBundleCache(){return this.Pi}runTransaction(t,e,n){b(ie,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?ef:l===17?Fc:l===16?tf:l===15?io:l===14?Mc:l===13?Oc:l===12?Zd:l===11?kc:void O(60245)})(this.xi);let a;return this.Ki.runTransaction(t,s,i,(u=>(a=new ki(u,this.ai?this.ai.next():Dt.ce),e==="readwrite-primary"?this.ji(a).next((l=>!!l||this.Ji(a))).next((l=>{if(!l)throw At(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new x(P.FAILED_PRECONDITION,Rc);return n(a)})).next((l=>this.Zi(a).next((()=>l)))):this.Ps(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Ps(t){return Wn(t).get(Qe).next((e=>{if(e!==null&&this.ts(e.leaseTimestampMs,Ai)&&!this.ss(e.ownerId)&&!this.Xi(e)&&!(this.Mi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(P.FAILED_PRECONDITION,Ri)}))}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wn(t).put(Qe,e)}static v(){return ce.v()}Hi(t){const e=Wn(t);return e.get(Qe).next((n=>this.Xi(n)?(b(ie,"Releasing primary lease."),e.delete(Qe)):v.resolve()))}ts(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(At(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;hc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(t){var e;try{const n=((e=this.Ui)==null?void 0:e.getItem(this.rs(t)))!==null;return b(ie,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return At(ie,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(t){At("Failed to set zombie client id.",t)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Wn(r){return dt(r,Ar)}function Jr(r){return dt(r,mn)}function Pm(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=s}static Is(t,e){let n=z(),s=z();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return hc()?8:Pc(ls())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.gs(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Sm;return this.ys(t,e,a).next((u=>{if(i.result=u,this.As)return this.ws(t,e,a,u.size)}))})).next((()=>i.result))}ws(t,e,n,s){return n.documentReadCount<this.Vs?(Ze()<=Gt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",tn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),v.resolve()):(Ze()<=Gt.DEBUG&&b("QueryEngine","Query:",tn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Ze()<=Gt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",tn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):v.resolve())}gs(t,e){if(cu(e))return v.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=qi(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=z(...i);return this.fs.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((l=>{const d=this.Ss(e,u);return this.bs(e,d,a,l.readTime)?this.gs(t,qi(e,null,"F")):this.Ds(t,d,e,l)}))))})))))}ps(t,e,n,s){return cu(e)||s.isEqual(L.min())?v.resolve(null):this.fs.getDocuments(t,n).next((i=>{const a=this.Ss(e,i);return this.bs(e,a,n,s)?v.resolve(null):(Ze()<=Gt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tn(e)),this.Ds(t,a,e,Ad(s,lr)).next((u=>u)))}))}Ss(t,e){let n=new J(nl(t));return e.forEach(((s,i)=>{Pr(t,i)&&(n=n.add(i))})),n}bs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,e,n){return Ze()<=Gt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",tn(e)),this.fs.getDocumentsMatchingQuery(t,e,bt.min(),n)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="LocalStore",bm=3e8;class Cm{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new st(U),this.Fs=new Yt((i=>Fe(i)),Rr),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Bl(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function jl(r,t,e,n){return new Cm(r,t,e,n)}async function zl(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.Os(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let l=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function xm(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.xs.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,m){const p=d.batch,R=p.keys();let S=v.resolve();return R.forEach((N=>{S=S.next((()=>m.getEntry(l,N))).next((k=>{const M=d.docVersions.get(N);F(M!==null,48541),k.version.compareTo(M)<0&&(p.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))}))})),S.next((()=>u.mutationQueue.removeMutationBatch(l,p)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let l=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Kl(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Dm(r,t){const e=B(r),n=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const u=[];t.targetChanges.forEach(((m,p)=>{const R=s.get(p);if(!R)return;u.push(e.li.removeMatchingKeys(i,m.removedDocuments,p).next((()=>e.li.addMatchingKeys(i,m.addedDocuments,p))));let S=R.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(p,S),(function(k,M,Z){return k.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=bm?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(R,S,m)&&u.push(e.li.updateTargetData(i,S))}));let l=Nt(),d=z();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(Nm(i,a,t.documentUpdates).next((m=>{l=m.Bs,d=m.Ls}))),!n.isEqual(L.min())){const m=e.li.getLastRemoteSnapshotVersion(i).next((p=>e.li.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(m)}return v.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(e.vs=s,i)))}function Nm(r,t,e){let n=z(),s=z();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=Nt();return e.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(L.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):b(Ao,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Bs:a,Ls:s}}))}function km(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=xe),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Om(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.li.getTargetData(n,t).next((i=>i?(s=i,v.resolve(s)):e.li.allocateTargetId(n).next((a=>(s=new Qt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.li.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(n.targetId,n),e.Fs.set(t,n.targetId)),n}))}async function Hi(r,t,e){const n=B(r),s=n.vs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ge(a))throw a;b(Ao,`Failed to update sequence numbers for target ${t}: ${a}`)}n.vs=n.vs.remove(t),n.Fs.delete(s.target)}function Bu(r,t,e){const n=B(r);let s=L.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,m){const p=B(l),R=p.Fs.get(m);return R!==void 0?v.resolve(p.vs.get(R)):p.li.getTargetData(d,m)})(n,a,kt(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?i:z()))).next((u=>(Mm(n,If(t),u),{documents:u,ks:i})))))}function Mm(r,t,e){let n=r.Ms.get(t)||L.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Ms.set(t,n)}class qu{constructor(){this.activeTargetIds=Vf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gl{constructor(){this.vo=new qu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new qu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="ConnectivityMonitor";class zu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){b(ju,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){b(ju,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=null;function Yi(){return Xr===null?Xr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xr++,"0x"+Xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="RestConnection",Lm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Um{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===gs?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const a=Yi(),u=this.Qo(t,e.toUriEncodedString());b(Vi,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(u),m=lc(d);return this.zo(t,u,l,n,m).then((p=>(b(Vi,`Received RPC '${t}' ${a}: `,p),p)),(p=>{throw le(Vi,`RPC '${t}' ${a} failed with error: `,p,"url: ",u,"request:",n),p}))}jo(t,e,n,s,i,a){return this.Wo(t,e,n,s,i)}Go(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}Qo(t,e){const n=Lm[t];let s=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection",Hn=(r,t,e)=>{r.listen(t,(n=>{try{e(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class sn extends Um{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!sn.c_){const t=_c();Hn(t,pc.STAT_EVENT,(e=>{e.stat===Si.PROXY?b(yt,"STAT_EVENT: detected buffering proxy"):e.stat===Si.NOPROXY&&b(yt,"STAT_EVENT: detected no buffering proxy")})),sn.c_=!0}}zo(t,e,n,s,i){const a=Yi();return new Promise(((u,l)=>{const d=new mc;d.setWithCredentials(!0),d.listenOnce(gc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Zr.NO_ERROR:const p=d.getResponseJson();b(yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),u(p);break;case Zr.TIMEOUT:b(yt,`RPC '${t}' ${a} timed out`),l(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case Zr.HTTP_ERROR:const R=d.getStatus();if(b(yt,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const k=(function(Z){const K=Z.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(K)>=0?K:P.UNKNOWN})(N.status);l(new x(k,N.message))}else l(new x(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new x(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{b(yt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);b(yt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)}))}T_(t,e,n){const s=Yi(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,n),u.encodeInitMessageHeaders=!0;const d=i.join("");b(yt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.E_(m);let p=!1,R=!1;const S=new Bm({Jo:N=>{R?b(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(p||(b(yt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),p=!0),b(yt,`RPC '${t}' stream ${s} sending:`,N),m.send(N))},Ho:()=>m.close()});return Hn(m,Yn.EventType.OPEN,(()=>{R||(b(yt,`RPC '${t}' stream ${s} transport opened.`),S.i_())})),Hn(m,Yn.EventType.CLOSE,(()=>{R||(R=!0,b(yt,`RPC '${t}' stream ${s} transport closed`),S.o_(),this.I_(m))})),Hn(m,Yn.EventType.ERROR,(N=>{R||(R=!0,le(yt,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),S.o_(new x(P.UNAVAILABLE,"The operation could not be completed")))})),Hn(m,Yn.EventType.MESSAGE,(N=>{var k;if(!R){const M=N.data[0];F(!!M,16349);const Z=M,K=(Z==null?void 0:Z.error)||((k=Z[0])==null?void 0:k.error);if(K){b(yt,`RPC '${t}' stream ${s} received error:`,K);const q=K.status;let et=(function(I){const g=ut[I];if(g!==void 0)return dl(g)})(q),Q=K.message;q==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&le(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),et===void 0&&(et=P.INTERNAL,Q="Unknown error status: "+q+" with message "+K.message),R=!0,S.o_(new x(et,Q)),m.close()}else b(yt,`RPC '${t}' stream ${s} received:`,M),S.__(M)}})),sn.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return yc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(r){return new sn(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){return typeof window<"u"?window:null}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(r){return new zf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.c_=!1;class $l{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="PersistentStream";class Ql{constructor(t,e,n,s,i,a,u,l){this.Ci=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $l(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(At(e.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===e&&this.G_(n,s)}),(n=>{t((()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return b(Ku,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(b(Ku,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zm extends Ql{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=$f(this.serializer,t),n=(function(i){if(!("targetChange"in i))return L.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Rt(a.readTime):L.min()})(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=Ki(this.serializer),e.addTarget=(function(i,a){let u;const l=a.target;if(u=_s(l)?{documents:Tl(i,l)}:{query:El(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=gl(i,a.resumeToken);const d=ji(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=En(i,a.snapshotVersion.toTimestamp());const d=ji(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=Wf(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=Ki(this.serializer),e.removeTarget=t,this.q_(e)}}class Km extends Ql{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return F(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,F(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){F(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Qf(t.writeResults,t.commitTime),n=Rt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Ki(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Ts(this.serializer,n)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{}class $m extends Gm{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(t,zi(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(P.UNKNOWN,i.toString())}))}jo(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.jo(t,zi(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Qm(r,t,e,n){return new $m(r,t,e,n)}class Wm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(At(e),this.aa=!1):b("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="RemoteStore";class Hm{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((a=>{n.enqueueAndForget((async()=>{ze(this)&&(b(qe,"Restarting streams for network reachability change."),await(async function(l){const d=B(l);d.Ia.add(4),await Cr(d),d.Va.set("Unknown"),d.Ia.delete(4),await $s(d)})(this))}))})),this.Va=new Wm(n,s)}}async function $s(r){if(ze(r))for(const t of r.Ra)await t(!0)}async function Cr(r){for(const t of r.Ra)await t(!1)}function Wl(r,t){const e=B(r);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),So(e)?Po(e):Vn(e).O_()&&Vo(e,t))}function Ro(r,t){const e=B(r),n=Vn(e);e.Ea.delete(t),n.O_()&&Hl(e,t),e.Ea.size===0&&(n.O_()?n.L_():ze(e)&&e.Va.set("Unknown"))}function Vo(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Vn(r).Z_(t)}function Hl(r,t){r.da.$e(t),Vn(r).X_(t)}function Po(r){r.da=new Uf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ea.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Vn(r).start(),r.Va.ua()}function So(r){return ze(r)&&!Vn(r).x_()&&r.Ea.size>0}function ze(r){return B(r).Ia.size===0}function Yl(r){r.da=void 0}async function Ym(r){r.Va.set("Online")}async function Jm(r){r.Ea.forEach(((t,e)=>{Vo(r,t)}))}async function Xm(r,t){Yl(r),So(r)?(r.Va.ha(t),Po(r)):r.Va.set("Unknown")}async function Zm(r,t,e){if(r.Va.set("Online"),t instanceof ml&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.da.removeTarget(u))})(r,t)}catch(n){b(qe,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Rs(r,n)}else if(t instanceof os?r.da.Xe(t):t instanceof fl?r.da.st(t):r.da.tt(t),!e.isEqual(L.min()))try{const n=await Kl(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.da.Tt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.Ea.get(d);m&&i.Ea.set(d,m.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const m=i.Ea.get(l);if(!m)return;i.Ea.set(l,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Hl(i,l);const p=new Qt(m.target,l,d,m.sequenceNumber);Vo(i,p)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){b(qe,"Failed to raise snapshot:",n),await Rs(r,n)}}async function Rs(r,t,e){if(!ge(t))throw t;r.Ia.add(1),await Cr(r),r.Va.set("Offline"),e||(e=()=>Kl(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{b(qe,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await $s(r)}))}function Jl(r,t){return t().catch((e=>Rs(r,e,t)))}async function Qs(r){const t=B(r),e=fe(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:xe;for(;tg(t);)try{const s=await km(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,eg(t,s)}catch(s){await Rs(t,s)}Xl(t)&&Zl(t)}function tg(r){return ze(r)&&r.Ta.length<10}function eg(r,t){r.Ta.push(t);const e=fe(r);e.O_()&&e.Y_&&e.ea(t.mutations)}function Xl(r){return ze(r)&&!fe(r).x_()&&r.Ta.length>0}function Zl(r){fe(r).start()}async function ng(r){fe(r).ra()}async function rg(r){const t=fe(r);for(const e of r.Ta)t.ea(e.mutations)}async function sg(r,t,e){const n=r.Ta.shift(),s=mo.from(n,t,e);await Jl(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Qs(r)}async function ig(r,t){t&&fe(r).Y_&&await(async function(n,s){if((function(a){return Mf(a)&&a!==P.ABORTED})(s.code)){const i=n.Ta.shift();fe(n).B_(),await Jl(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Qs(n)}})(r,t),Xl(r)&&Zl(r)}async function Gu(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),b(qe,"RemoteStore received new credentials");const n=ze(e);e.Ia.add(3),await Cr(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await $s(e)}async function og(r,t){const e=B(r);t?(e.Ia.delete(2),await $s(e)):t||(e.Ia.add(2),await Cr(e),e.Va.set("Unknown"))}function Vn(r){return r.ma||(r.ma=(function(e,n,s){const i=B(e);return i.sa(),new zm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:Ym.bind(null,r),Yo:Jm.bind(null,r),t_:Xm.bind(null,r),H_:Zm.bind(null,r)}),r.Ra.push((async t=>{t?(r.ma.B_(),So(r)?Po(r):r.Va.set("Unknown")):(await r.ma.stop(),Yl(r))}))),r.ma}function fe(r){return r.fa||(r.fa=(function(e,n,s){const i=B(e);return i.sa(),new Km(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ng.bind(null,r),t_:ig.bind(null,r),ta:rg.bind(null,r),na:sg.bind(null,r)}),r.Ra.push((async t=>{t?(r.fa.B_(),await Qs(r)):(await r.fa.stop(),r.Ta.length>0&&(b(qe,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new bo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(r,t){if(At("AsyncQueue",`${t}: ${r}`),ge(r))return new x(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{static emptySet(t){return new on(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||D.comparator(e.key,n.key):(e,n)=>D.comparator(e.key,n.key),this.keyedMap=Jn(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof on)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new on;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.ga=new st(D.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class vn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new vn(t,e,on.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ls(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class ug{constructor(){this.queries=Qu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=B(e),i=s.queries;s.queries=Qu(),i.forEach(((a,u)=>{for(const l of u.Sa)l.onError(n)}))})(this,new x(P.ABORTED,"Firestore shutting down"))}}function Qu(){return new Yt((r=>el(r)),Ls)}async function cg(r,t){const e=B(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new ag,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=th(a,`Initialization of query '${tn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Co(e)}async function lg(r,t){const e=B(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function hg(r,t){const e=B(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(n=!0);a.wa=s}}n&&Co(e)}function dg(r,t,e){const n=B(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Co(r){r.Ca.forEach((t=>{t.next()}))}var Ji,Wu;(Wu=Ji||(Ji={})).Ma="default",Wu.Cache="cache";class fg{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new vn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=vn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ji.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.key=t}}class nh{constructor(t){this.key=t}}class mg{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=z(),this.mutatedKeys=z(),this.eu=nl(t),this.tu=new on(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new $u,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,p)=>{const R=s.get(m),S=Pr(this.query,p)?p:null,N=!!R&&this.mutatedKeys.has(R.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;R&&S?R.data.isEqual(S.data)?N!==k&&(n.track({type:3,doc:S}),M=!0):this.su(R,S)||(n.track({type:2,doc:S}),M=!0,(l&&this.eu(S,l)>0||d&&this.eu(S,d)<0)&&(u=!0)):!R&&S?(n.track({type:0,doc:S}),M=!0):R&&!S&&(n.track({type:1,doc:R}),M=!0,(l||d)&&(u=!0)),M&&(S?(a=a.add(S),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,bs:u,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,p)=>(function(S,N){const k=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:M})}};return k(S)-k(N)})(m.type,p.type)||this.eu(m.doc,p.doc))),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,a.length!==0||d?{snapshot:new vn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $u,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=z(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const e=[];return t.forEach((n=>{this.Ya.has(n)||e.push(new nh(n))})),this.Ya.forEach((n=>{t.has(n)||e.push(new eh(n))})),e}cu(t){this.Za=t.ks,this.Ya=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return vn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const xo="SyncEngine";class gg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class pg{constructor(t){this.key=t,this.hu=!1}}class _g{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Yt((u=>el(u)),Ls),this.Eu=new Map,this.Iu=new Set,this.Ru=new st(D.comparator),this.Au=new Map,this.Vu=new To,this.du={},this.mu=new Map,this.fu=Be.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yg(r,t,e=!0){const n=uh(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await rh(n,t,e,!0),s}async function Ig(r,t){const e=uh(r);await rh(e,t,!0,!1)}async function rh(r,t,e,n){const s=await Om(r.localStore,kt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Tg(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Wl(r.remoteStore,s),u}async function Tg(r,t,e,n,s){r.pu=(p,R,S)=>(async function(k,M,Z,K){let q=M.view.ru(Z);q.bs&&(q=await Bu(k.localStore,M.query,!1).then((({documents:I})=>M.view.ru(I,q))));const et=K&&K.targetChanges.get(M.targetId),Q=K&&K.targetMismatches.get(M.targetId)!=null,W=M.view.applyChanges(q,k.isPrimaryClient,et,Q);return Yu(k,M.targetId,W.au),W.snapshot})(r,p,R,S);const i=await Bu(r.localStore,t,!0),a=new mg(t,i.ks),u=a.ru(i.documents),l=br.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);Yu(r,e,d.au);const m=new gg(t,e,a);return r.Tu.set(t,m),r.Eu.has(e)?r.Eu.get(e).push(t):r.Eu.set(e,[t]),d.snapshot}async function Eg(r,t,e){const n=B(r),s=n.Tu.get(t),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter((a=>!Ls(a,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Hi(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ro(n.remoteStore,s.targetId),Xi(n,s.targetId)})).catch(je)):(Xi(n,s.targetId),await Hi(n.localStore,s.targetId,!0))}async function vg(r,t){const e=B(r),n=e.Tu.get(t),s=e.Eu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ro(e.remoteStore,n.targetId))}async function sh(r,t){const e=B(r);try{const n=await Dm(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Au.get(i);a&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?F(a.hu,14607):s.removedDocuments.size>0&&(F(a.hu,42227),a.hu=!1))})),await Ws(e,n,t)}catch(n){await je(n)}}function Hu(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach(((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=B(a);l.onlineState=u;let d=!1;l.queries.forEach(((m,p)=>{for(const R of p.Sa)R.va(u)&&(d=!0)})),d&&Co(l)})(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function wg(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new st(D.comparator);a=a.insert(i,ot.newNoDocument(i,L.min()));const u=z().add(i),l=new qs(L.min(),new Map,new st(U),a,u);await sh(n,l),n.Ru=n.Ru.remove(i),n.Au.delete(t),Do(n)}else await Hi(n.localStore,t,!1).then((()=>Xi(n,t,e))).catch(je)}async function Ag(r,t){const e=B(r),n=t.batch.batchId;try{const s=await xm(e.localStore,t);oh(e,n,null),ih(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Ws(e,s)}catch(s){await je(s)}}async function Rg(r,t,e){const n=B(r);try{const s=await(function(a,u){const l=B(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next((p=>(F(p!==null,37113),m=p.keys(),l.mutationQueue.removeMutationBatch(d,p)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>l.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);oh(n,t,e),ih(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Ws(n,s)}catch(s){await je(s)}}function ih(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function oh(r,t,e){const n=B(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.du[n.currentUser.toKey()]=s}}function Xi(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Eu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Eu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach((n=>{r.Vu.containsKey(n)||ah(r,n)}))}function ah(r,t){r.Iu.delete(t.path.canonicalString());const e=r.Ru.get(t);e!==null&&(Ro(r.remoteStore,e),r.Ru=r.Ru.remove(t),r.Au.delete(e),Do(r))}function Yu(r,t,e){for(const n of e)n instanceof eh?(r.Vu.addReference(n.key,t),Vg(r,n)):n instanceof nh?(b(xo,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,t),r.Vu.containsKey(n.key)||ah(r,n.key)):O(19791,{wu:n})}function Vg(r,t){const e=t.key,n=e.path.canonicalString();r.Ru.get(e)||r.Iu.has(n)||(b(xo,"New document in limbo: "+e),r.Iu.add(n),Do(r))}function Do(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new D(H.fromString(t)),n=r.fu.next();r.Au.set(n,new pg(e)),r.Ru=r.Ru.insert(e,n),Wl(r.remoteStore,new Qt(kt(Fs(e.path)),n,"TargetPurposeLimboResolution",Dt.ce))}}async function Ws(r,t,e){const n=B(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((u,l)=>{a.push(n.pu(l,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=wo.Is(l.targetId,d);i.push(p)}})))})),await Promise.all(a),n.Pu.H_(s),await(async function(l,d){const m=B(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>v.forEach(d,(R=>v.forEach(R.Ts,(S=>m.persistence.referenceDelegate.addReference(p,R.targetId,S))).next((()=>v.forEach(R.Es,(S=>m.persistence.referenceDelegate.removeReference(p,R.targetId,S)))))))))}catch(p){if(!ge(p))throw p;b(Ao,"Failed to update sequence numbers: "+p)}for(const p of d){const R=p.targetId;if(!p.fromCache){const S=m.vs.get(R),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);m.vs=m.vs.insert(R,k)}}})(n.localStore,i))}async function Pg(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){b(xo,"User change. New user:",t.toKey());const n=await zl(e.localStore,t);e.currentUser=t,(function(i,a){i.mu.forEach((u=>{u.forEach((l=>{l.reject(new x(P.CANCELLED,a))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Ws(e,n.Ns)}}function Sg(r,t){const e=B(r),n=e.Au.get(t);if(n&&n.hu)return z().add(n.key);{let s=z();const i=e.Eu.get(t);if(!i)return s;for(const a of i){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function uh(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wg.bind(null,t),t.Pu.H_=hg.bind(null,t.eventManager),t.Pu.yu=dg.bind(null,t.eventManager),t}function bg(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ag.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rg.bind(null,t),t}class vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Gs(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return jl(this.persistence,new ql,t.initialUser,this.serializer)}Cu(t){return new Eo(Ks.Vi,this.serializer)}Du(t){return new Gl}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vr.provider={build:()=>new vr};class Cg extends vr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){F(this.persistence.referenceDelegate instanceof As,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ml(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Eo((n=>As.Vi(n,e)),this.serializer)}}class xg extends vr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await bg(this.xu.syncEngine),await Qs(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(t){return jl(this.persistence,new ql,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ml(n,t.asyncQueue,e)}Mu(t,e){const n=new Sd(e,this.persistence);return new Pd(t.asyncQueue,n)}Cu(t){const e=Pm(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new vo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,jm(),us(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Gl}}class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Hu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pg.bind(null,this.syncEngine),await og(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new ug})()}createDatastore(t){const e=Gs(t.databaseInfo.databaseId),n=qm(t.databaseInfo);return Qm(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new Hm(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Hu(this.syncEngine,e,0)),(function(){return zu.v()?new zu:new Fm})())}createSyncEngine(t,e){return(function(s,i,a,u,l,d,m){const p=new _g(s,i,a,u,l,d);return m&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=B(s);b(qe,"RemoteStore shutting down."),i.Ia.add(5),await Cr(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Vs.provider={build:()=>new Vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):At("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="FirestoreClient";class Ng{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{b(me,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(b(me,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=th(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Pi(r,t){r.asyncQueue.verifyOperationInProgress(),b(me,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await zl(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Ju(r,t){r.asyncQueue.verifyOperationInProgress();const e=await kg(r);b(me,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Gu(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Gu(t.remoteStore,s))),r._onlineComponents=t}async function kg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(me,"Using user provided OfflineComponentProvider");try{await Pi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;le("Error using user provided cache. Falling back to memory cache: "+e),await Pi(r,new vr)}}else b(me,"Using default OfflineComponentProvider"),await Pi(r,new Cg(void 0));return r._offlineComponents}async function Og(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(me,"Using user provided OnlineComponentProvider"),await Ju(r,r._uninitializedComponentsProvider._online)):(b(me,"Using default OnlineComponentProvider"),await Ju(r,new Vs))),r._onlineComponents}async function Xu(r){const t=await Og(r),e=t.eventManager;return e.onListen=yg.bind(null,t.syncEngine),e.onUnlisten=Eg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ig.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=vg.bind(null,t.syncEngine),e}function Mg(r,t,e,n){const s=new Dg(n),i=new fg(t,s,e);return r.asyncQueue.enqueueAndForget((async()=>cg(await Xu(r),i))),()=>{s.Nu(),r.asyncQueue.enqueueAndForget((async()=>lg(await Xu(r),i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="ComponentProvider",Zu=new Map;function Lg(r,t,e,n,s){return new rf(r,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ch(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="firestore.googleapis.com",tc=!0;class ec{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lh,this.ssl=tc}else this.host=t.host,this.ssl=t.ssl??tc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Dl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<lm)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ch(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class No{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new dd;switch(n.type){case"firstParty":return new pd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Zu.get(e);n&&(b(Fg,"Removing Datastore"),Zu.delete(e),n.terminate())})(this),Promise.resolve()}}function Ug(r,t,e,n={}){var d;r=er(r,No);const s=lc(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&ed(`https://${u}`),i.host!==lh&&i.host!==u&&le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:n};if(!nd(l,a)&&(r._setSettings(l),n.mockUserToken)){let m,p;if(typeof n.mockUserToken=="string")m=n.mockUserToken,p=gt.MOCK_USER;else{m=rd(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new gt(R)}r._authCredentials=new fd(new Tc(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Pn(this.firestore,t,this._query)}}class Tt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tt(this.firestore,t,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(wr(e,Tt._jsonSchema))return new Tt(t,n||null,new D(H.fromString(e.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:ct("string",Tt._jsonSchemaVersion),referencePath:ct("string")};class an extends Pn{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tt(this.firestore,null,new D(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function sp(r,t,...e){if(r=cn(r),vd("collection","path",t),r instanceof No){const n=H.fromString(t,...e);return Ka(n),new an(r,null,n)}{if(!(r instanceof Tt||r instanceof an))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Ka(n),new an(r.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="AsyncQueue";class rc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $l(this,"async_queue_retry"),this._c=()=>{const n=us();n&&b(nc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=us();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ce;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ge(t))throw t;b(nc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,At("INTERNAL UNHANDLED ERROR: ",sc(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=bo.createAndSchedule(this,t,e,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&O(47125,{Pc:sc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function sc(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Ps extends No{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new rc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new rc(t),this._firestoreClient=void 0,await t}}}function ip(r,t){const e=typeof r=="object"?r:Jh(),n=typeof r=="string"?r:gs,s=Xh(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Zh("firestore");i&&Ug(s,...i)}return s}function Bg(r){if(r._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hh(r),r._firestoreClient}function hh(r){var n,s,i,a;const t=r._freezeSettings(),e=Lg(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Ng(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(r._componentsProvider))}function op(r,t){le("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return qg(r,Vs.provider,{build:n=>new xg(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function qg(r,t,e){if((r=er(r,Ps))._firestoreClient||r._terminated)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new x(P.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},hh(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xt(lt.fromBase64String(t))}catch(e){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xt(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(wr(t,xt._jsonSchema))return xt.fromBase64String(t.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:ct("string",xt._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(t){if(wr(t,zt._jsonSchema))return new zt(t.latitude,t.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:ct("string",zt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(wr(t,Ft._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ft(t.vectorValues);throw new x(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ft._jsonSchemaVersion="firestore/vectorValue/1.0",Ft._jsonSchema={type:ct("string",Ft._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^__.*__$/;function mh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:r})}}class ko{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new ko({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return Ss(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(mh(this.dataSource)&&jg.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class zg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Gs(t)}I(t,e,n,s=!1){return new ko({dataSource:t,methodName:e,targetDoc:n,path:at.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kg(r){const t=r._freezeSettings(),e=Gs(r._databaseId);return new zg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Gg(r,t,e,n=!1){return Oo(e,r.I(n?4:3,t))}function Oo(r,t){if(gh(r=cn(r)))return Qg("Unsupported field value:",t,r),$g(r,t);if(r instanceof fh)return(function(n,s){if(!mh(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let l=Oo(u,s.gc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=cn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Pf(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=X.fromDate(n);return{timestampValue:En(s.serializer,i)}}if(n instanceof X){const i=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:En(s.serializer,i)}}if(n instanceof zt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xt)return{bytesValue:gl(s.serializer,n._byteString)};if(n instanceof Tt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_o(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ft)return(function(a,u){const l=a instanceof Ft?a.toArray():a;return{mapValue:{fields:{[ao]:{stringValue:uo},[gn]:{arrayValue:{values:l.map((m=>{if(typeof m!="number")throw u.yc("VectorValues must only contain numeric values.");return lo(u.serializer,m)}))}}}}}})(n,s);if(Vl(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${bs(n)}`)})(r,t)}function $g(r,t){const e={};return Lc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):An(r,((n,s)=>{const i=Oo(s,t.dc(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function gh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof zt||r instanceof xt||r instanceof Tt||r instanceof fh||r instanceof Ft||Vl(r))}function Qg(r,t,e){if(!gh(e)||!wc(e)){const n=bs(e);throw n==="an object"?t.yc(r+" a custom object"):t.yc(r+" "+n)}}function Mo(r,t,e){if((t=cn(t))instanceof dh)return t._internalPath;if(typeof t=="string")return Hg(r,t);throw Ss("Field path arguments must be of type string or ",r,!1,void 0,e)}const Wg=new RegExp("[~\\*/\\[\\]]");function Hg(r,t,e){if(t.search(Wg)>=0)throw Ss(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new dh(...t.split("."))._internalPath}catch{throw Ss(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ss(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new x(P.INVALID_ARGUMENT,u+r+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{convertValue(t,e="none"){switch(he(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return An(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[gn].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>rt(a.doubleValue)));return new Ft(e)}convertGeoPoint(t){return new zt(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Os(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pr(t));default:return null}}convertTimestamp(t){const e=Wt(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);F(Rl(n),9688,{name:t});const s=new Me(n.get(1),n.get(3)),i=new D(n.popFirst(5));return s.isEqual(e)||At(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends Yg{constructor(t){super(),this.firestore=t}convertBytes(t){return new xt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tt(this.firestore,null,e)}}const ic="@firebase/firestore",oc="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Mo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Jg extends _h{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fo{}class Zg extends Fo{}function ap(r,t,...e){let n=[];t instanceof Fo&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((l=>l instanceof Lo)).length,u=i.filter((l=>l instanceof Hs)).length;if(a>1||a>0&&u>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Hs extends Zg{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Hs(t,e,n)}_apply(t){const e=this._parse(t);return yh(t._query,e),new Pn(t.firestore,t.converter,Bi(t._query,e))}_parse(t){const e=Kg(t.firestore);return(function(i,a,u,l,d,m,p){let R;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){cc(p,m);const N=[];for(const k of p)N.push(uc(l,i,k));R={arrayValue:{values:N}}}else R=uc(l,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||cc(p,m),R=Gg(u,a,p,m==="in"||m==="not-in");return G.create(d,m,R)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function up(r,t,e){const n=t,s=Mo("where",r);return Hs._create(s,n,e)}class Lo extends Fo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Lo(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:Y.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)yh(a,l),a=Bi(a,l)})(t._query,e),new Pn(t.firestore,t.converter,Bi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uc(r,t,e){if(typeof(e=cn(e))=="string"){if(e==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tl(t)&&e.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!D.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yr(r,new D(n))}if(e instanceof Tt)return yr(r,e._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bs(e)}.`)}function cc(r,t){if(!Array.isArray(r)||r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yh(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class tr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ke extends _h{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ke._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",ke._jsonSchema={type:ct("string",ke._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class cs extends ke{data(t={}){return super.data(t)}}class un{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new cs(this._firestore,this._userDataWriter,n.key,n,new tr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new cs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new cs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:tp(u.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=un._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ec.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function tp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un._jsonSchemaVersion="firestore/querySnapshot/1.0",un._jsonSchema={type:ct("string",un._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};function cp(r,...t){var d,m,p;r=cn(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||ac(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(ac(t[n])){const R=t[n];t[n]=(d=R.next)==null?void 0:d.bind(R),t[n+1]=(m=R.error)==null?void 0:m.bind(R),t[n+2]=(p=R.complete)==null?void 0:p.bind(R)}let i,a,u;if(r instanceof Tt)a=er(r.firestore,Ps),u=Fs(r._key.path),i={next:R=>{t[n]&&t[n](ep(a,r,R))},error:t[n+1],complete:t[n+2]};else{const R=er(r,Pn);a=er(R.firestore,Ps),u=R._query;const S=new ph(a);i={next:N=>{t[n]&&t[n](new un(a,S,R,N))},error:t[n+1],complete:t[n+2]},Xg(r._query)}const l=Bg(a);return Mg(l,u,s,i)}function ep(r,t,e){const n=e.docs.get(t._key),s=new ph(r);return new ke(r,s,t._key,n,new tr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){hd(ld),ud(new cd("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Ps(new md(n.getProvider("auth-internal")),new _d(a,n.getProvider("app-check-internal")),sf(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),Ba(ic,oc,t),Ba(ic,oc,"esm2020")})();export{Yg as AbstractUserDataWriter,xt as Bytes,an as CollectionReference,Tt as DocumentReference,ke as DocumentSnapshot,dh as FieldPath,fh as FieldValue,Ps as Firestore,x as FirestoreError,zt as GeoPoint,Pn as Query,Lo as QueryCompositeFilterConstraint,Zg as QueryConstraint,cs as QueryDocumentSnapshot,Hs as QueryFieldFilterConstraint,un as QuerySnapshot,tr as SnapshotMetadata,X as Timestamp,Ft as VectorValue,Ec as _AutoId,lt as _ByteString,Me as _DatabaseId,D as _DocumentKey,dd as _EmptyAuthCredentialsProvider,at as _FieldPath,er as _cast,le as _logWarn,wd as _validateIsNotUsedTogether,sp as collection,Ug as connectFirestoreEmulator,op as enableIndexedDbPersistence,Bg as ensureFirestoreConfigured,ip as getFirestore,cp as onSnapshot,ap as query,up as where};
