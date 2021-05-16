var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function c(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function d(){return f(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function m(e,t){e.value=null==t?"":t}function $(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}let v;function b(e){v=e}function y(){if(!v)throw new Error("Function called outside component initialization");return v}const x=[],k=[],w=[],T=[],P=Promise.resolve();let _=!1;function I(e){w.push(e)}let A=!1;const R=new Set;function E(){if(!A){A=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];b(t),C(t.$$)}for(b(null),x.length=0;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];R.has(t)||(R.add(t),t())}w.length=0}while(x.length);for(;T.length;)T.pop()();_=!1,A=!1,R.clear()}}function C(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const D=new Set;let S;function j(e,t){e&&e.i&&(D.delete(e),e.i(t))}function O(e,t,n,o){if(e&&e.o){if(D.has(e))return;D.add(e),S.c.push((()=>{D.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function U(e,t){const n=t.token={};function c(e,c,l,r){if(t.token!==n)return;t.resolved=r;let s=t.ctx;void 0!==l&&(s=s.slice(),s[l]=r);const i=e&&(t.current=e)(s);let a=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==c&&e&&(S={r:0,c:[],p:S},O(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),S.r||o(S.c),S=S.p)})):t.block.d(1),i.c(),j(i,1),i.m(t.mount(),t.anchor),a=!0),t.block=i,t.blocks&&(t.blocks[c]=i),a&&E()}if((l=e)&&"object"==typeof l&&"function"==typeof l.then){const n=y();if(e.then((e=>{b(n),c(t.then,1,t.value,e),b(null)}),(e=>{if(b(n),c(t.catch,2,t.error,e),b(null),!t.hasCatch)throw e})),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}var l}function L(e,t){e.d(1),t.delete(e.key)}function q(e){e&&e.c()}function B(e,n,l,r){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=e.$$;s&&s.m(n,l),r||I((()=>{const n=i.map(t).filter(c);a?a.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(I)}function K(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function M(e,t){-1===e.$$.dirty[0]&&(x.push(e),_||(_=!0,P.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(t,c,l,r,s,i,u=[-1]){const f=v;b(t);const d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:c.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=l?l(t,c.props||{},((e,n,...o)=>{const c=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=c)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](c),p&&M(t,e)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!r&&r(d.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);d.fragment&&d.fragment.l(e),e.forEach(a)}else d.fragment&&d.fragment.c();c.intro&&j(t.$$.fragment),B(t,c.target,c.anchor,c.customElement),E()}b(f)}class z{$destroy(){K(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function F(t,n=e){let o;const c=[];function r(e){if(l(t,e)&&(t=e,o)){const e=!Z.length;for(let e=0;e<c.length;e+=1){const n=c[e];n[1](),Z.push(n,t)}if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(l,s=e){const i=[l,s];return c.push(i),1===c.length&&(o=n(r)||e),l(t),()=>{const e=c.indexOf(i);-1!==e&&c.splice(e,1),0===c.length&&(o(),o=null)}}}}const V=F({endpoint:"",key:""}),G=F({totalResults:0,videos:[]}),H=F({query:"",maxResults:5}),J=async(e,t)=>{const n=Q(e,t),o=await fetch(n),c=await o.json();return{totalResults:c.pageInfo.totalResults,videos:c.items.map((e=>({id:e.id.videoId,title:e.snippet.title,thumbnailUrl:e.snippet.thumbnails.high.url,channelId:e.snippet.channelId,channelTitle:e.snippet.channelTitle,publishedAt:e.snippet.publishedAt}))),nextPageToken:c.nextPageToken,prevPageToken:c.prevPageToken}},Q=(e,t)=>{const n=new URL(`${e.endpoint}?part=snippet&type=video&q=${t.query}&maxResults=${t.maxResults}&key=${e.key}`);return t.channelId&&n.searchParams.append("channelId",t.channelId),t.publishedAfter&&n.searchParams.append("publishedAfter",t.publishedAfter),t.publishedBefore&&n.searchParams.append("publishedBefore",t.publishedBefore),t.pageToken&&n.searchParams.append("pageToken",t.pageToken),n.href};function W(e,t,n){const o=e.slice();return o[15]=t[n],o}function X(t){let n,o,c,l=t[15]+"";return{c(){n=u("option"),o=f(l),c=d(),n.__value=t[15],n.value=n.__value},m(e,t){i(e,n,t),s(n,o),s(n,c)},p:e,d(e){e&&a(n)}}}function Y(t){let n,c,l,r,f,g,v,b,y,x,k,w,T,P,_,A,R,E,C,D,S,j=t[4],O=[];for(let e=0;e<j.length;e+=1)O[e]=X(W(t,j,e));return{c(){n=u("div"),c=u("div"),l=u("input"),r=d(),f=u("button"),f.textContent="検索",g=d(),v=u("div"),b=u("span"),b.textContent="1ページあたりの件数:",y=d(),x=u("select");for(let e=0;e<O.length;e+=1)O[e].c();k=d(),w=u("div"),T=u("span"),T.textContent="アップロード日:",P=d(),_=u("input"),A=d(),R=u("span"),R.textContent="~",E=d(),C=u("input"),h(l,"class","flex-auto px-2 py-1 border"),h(l,"placeholder","検索ワード"),h(f,"class","flex-none px-2 py-1 bg-gray-300"),h(c,"id","search-query"),h(c,"class","flex"),h(b,"class","mr-2"),h(x,"class","border"),void 0===t[3]&&I((()=>t[8].call(x))),h(v,"id","search-max-results"),h(v,"class","flex"),h(T,"class","mr-2"),h(_,"type","date"),h(_,"class","flex-auto border-b"),h(R,"class","mx-2"),h(C,"type","date"),h(C,"class","flex-auto border-b"),h(w,"id","search-filter-published-at"),h(w,"class","flex"),h(n,"id","search-form-container"),h(n,"class","flex flex-col m-auto pt-3 pb-1 space-y-1")},m(e,o){i(e,n,o),s(n,c),s(c,l),m(l,t[2]),s(c,r),s(c,f),s(n,g),s(n,v),s(v,b),s(v,y),s(v,x);for(let e=0;e<O.length;e+=1)O[e].m(x,null);$(x,t[3]),s(n,k),s(n,w),s(w,T),s(w,P),s(w,_),m(_,t[0]),s(w,A),s(w,R),s(w,E),s(w,C),m(C,t[1]),D||(S=[p(l,"input",t[7]),p(f,"click",t[5]),p(x,"change",t[8]),p(_,"input",t[9]),p(C,"input",t[10])],D=!0)},p(e,[t]){if(4&t&&l.value!==e[2]&&m(l,e[2]),16&t){let n;for(j=e[4],n=0;n<j.length;n+=1){const o=W(e,j,n);O[n]?O[n].p(o,t):(O[n]=X(o),O[n].c(),O[n].m(x,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=j.length}24&t&&$(x,e[3]),1&t&&m(_,e[0]),2&t&&m(C,e[1])},i:e,o:e,d(e){e&&a(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(O,e),D=!1,o(S)}}}function ee(e,t,n){let o,c,l;r(e,V,(e=>n(13,l=e)));var s=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let{channelId:i=""}=t,a="",u=5,f="",d="";const p=[5,10,25,50];return e.$$set=e=>{"channelId"in e&&n(6,i=e.channelId)},e.$$.update=()=>{1&e.$$.dirty&&(o=f?new Date(f).toISOString():""),2&e.$$.dirty&&(c=d?new Date(d).toISOString():"")},[f,d,a,u,p,()=>s(void 0,void 0,void 0,(function*(){const e={query:a,maxResults:u,channelId:i,publishedAfter:o,publishedBefore:c},t=yield J(l,e);G.set(t),H.set(e)})),i,function(){a=this.value,n(2,a)},function(){u=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(3,u),n(4,p)},function(){f=this.value,n(0,f)},function(){d=this.value,n(1,d)}]}class te extends z{constructor(e){super(),N(this,e,ee,Y,l,{channelId:6})}}function ne(e){let t,n,o,c,l,r,p;return{c(){t=u("p"),n=u("span"),o=f(e[1]),c=f(" で検索中"),l=d(),r=u("a"),p=u("p"),p.textContent="チャンネル内検索を解除",h(n,"class","font-semibold"),h(p,"class","underline"),h(r,"href",e[2].href)},m(e,a){i(e,t,a),s(t,n),s(n,o),s(t,c),i(e,l,a),i(e,r,a),s(r,p)},p(e,t){2&t&&g(o,e[1])},d(e){e&&a(t),e&&a(l),e&&a(r)}}}function oe(e){let t,n,o,c;return{c(){t=u("p"),n=f("検索結果: "),o=f(e[0]),c=f("件")},m(e,l){i(e,t,l),s(t,n),s(t,o),s(t,c)},p(e,t){1&t&&g(o,e[0])},d(e){e&&a(t)}}}function ce(t){let n,o,c=t[1]&&ne(t),l=t[0]&&oe(t);return{c(){c&&c.c(),n=d(),l&&l.c(),o=f("")},m(e,t){c&&c.m(e,t),i(e,n,t),l&&l.m(e,t),i(e,o,t)},p(e,[t]){e[1]?c?c.p(e,t):(c=ne(e),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),e[0]?l?l.p(e,t):(l=oe(e),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},i:e,o:e,d(e){c&&c.d(e),e&&a(n),l&&l.d(e),e&&a(o)}}}function le(e,t,n){let{totalResults:o}=t,{channelTitle:c}=t;const l=new URL(window.location.href);return l.searchParams.delete("channelId"),e.$$set=e=>{"totalResults"in e&&n(0,o=e.totalResults),"channelTitle"in e&&n(1,c=e.channelTitle)},[o,c,l]}class re extends z{constructor(e){super(),N(this,e,le,ce,l,{totalResults:0,channelTitle:1})}}function se(e,t,n){const o=e.slice();return o[2]=t[n],o}function ie(e,t){let n,o,c,l,r,p,m,$,v,b,y,x,k,w,T,P,_,I,A,R,E=t[2].title+"",C=t[2].publishedAt+"",D=t[2].channelTitle+"";return{key:e,first:null,c(){n=u("a"),o=u("img"),l=d(),r=u("div"),p=u("div"),m=u("p"),$=f(E),v=d(),b=u("p"),y=f(C),x=d(),k=u("p"),w=f(D),T=d(),P=u("a"),_=f("このチャンネル内で検索"),A=d(),o.src!==(c=t[2].thumbnailUrl)&&h(o,"src",c),h(o,"alt","thumbnail"),h(o,"width","320"),h(o,"class","flex-none"),h(m,"class","text-xl\tfont-bold"),h(b,"class","text-sm font-light"),h(k,"class","font-light"),h(p,"class","flex flex-col pace-y-2"),h(P,"href",I=t[1](t[2].channelId)),h(P,"class","self-end underline"),h(r,"class","flex-auto flex flex-col justify-between px-2 py-4"),h(n,"href",R="https://www.youtube.com/watch?v="+t[2].id),h(n,"target","_blank"),h(n,"rel","noopener noreferrer"),h(n,"class","flex flex-row p-2 border rounded shadow"),this.first=n},m(e,t){i(e,n,t),s(n,o),s(n,l),s(n,r),s(r,p),s(p,m),s(m,$),s(p,v),s(p,b),s(b,y),s(p,x),s(p,k),s(k,w),s(r,T),s(r,P),s(P,_),s(n,A)},p(e,l){t=e,1&l&&o.src!==(c=t[2].thumbnailUrl)&&h(o,"src",c),1&l&&E!==(E=t[2].title+"")&&g($,E),1&l&&C!==(C=t[2].publishedAt+"")&&g(y,C),1&l&&D!==(D=t[2].channelTitle+"")&&g(w,D),1&l&&I!==(I=t[1](t[2].channelId))&&h(P,"href",I),1&l&&R!==(R="https://www.youtube.com/watch?v="+t[2].id)&&h(n,"href",R)},d(e){e&&a(n)}}}function ae(t){let n,o=[],c=new Map,l=t[0];const r=e=>e[2].id;for(let e=0;e<l.length;e+=1){let n=se(t,l,e),s=r(n);c.set(s,o[e]=ie(s,n))}return{c(){n=u("div");for(let e=0;e<o.length;e+=1)o[e].c();h(n,"id","result-view-video-list"),h(n,"class","flex flex-col space-y-2")},m(e,t){i(e,n,t);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(e,[t]){3&t&&(l=e[0],o=function(e,t,n,o,c,l,r,s,i,a,u,f){let d=e.length,p=l.length,h=d;const g={};for(;h--;)g[e[h].key]=h;const m=[],$=new Map,v=new Map;for(h=p;h--;){const e=f(c,l,h),s=n(e);let i=r.get(s);i?o&&i.p(e,t):(i=a(s,e),i.c()),$.set(s,m[h]=i),s in g&&v.set(s,Math.abs(h-g[s]))}const b=new Set,y=new Set;function x(e){j(e,1),e.m(s,u),r.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=m[p-1],n=e[d-1],o=t.key,c=n.key;t===n?(u=t.first,d--,p--):$.has(c)?!r.has(o)||b.has(o)?x(t):y.has(c)?d--:v.get(o)>v.get(c)?(y.add(o),x(t)):(b.add(c),d--):(i(n,r),d--)}for(;d--;){const t=e[d];$.has(t.key)||i(t,r)}for(;p;)x(m[p-1]);return m}(o,t,r,1,e,l,c,n,L,ie,null,se))},i:e,o:e,d(e){e&&a(n);for(let e=0;e<o.length;e+=1)o[e].d()}}}function ue(e,t,n){let{videos:o}=t;return e.$$set=e=>{"videos"in e&&n(0,o=e.videos)},[o,e=>{const t=new URL(window.location.href);return t.searchParams.set("channelId",e),t.href}]}class fe extends z{constructor(e){super(),N(this,e,ue,ae,l,{videos:0})}}function de(t){let n,o,c;return{c(){n=u("button"),n.textContent="前へ",h(n,"class","px-7 py-1 border")},m(e,l){i(e,n,l),o||(c=p(n,"click",t[3]),o=!0)},p:e,d(e){e&&a(n),o=!1,c()}}}function pe(t){let n,o,c;return{c(){n=u("button"),n.textContent="次へ",h(n,"class","px-7 py-1 border")},m(e,l){i(e,n,l),o||(c=p(n,"click",t[2]),o=!0)},p:e,d(e){e&&a(n),o=!1,c()}}}function he(t){let n,o,c=t[0]&&de(t),l=t[1]&&pe(t);return{c(){n=u("div"),c&&c.c(),o=d(),l&&l.c(),h(n,"id","result-view-paginator"),h(n,"class","flex justify-center")},m(e,t){i(e,n,t),c&&c.m(n,null),s(n,o),l&&l.m(n,null)},p(e,[t]){e[0]?c?c.p(e,t):(c=de(e),c.c(),c.m(n,o)):c&&(c.d(1),c=null),e[1]?l?l.p(e,t):(l=pe(e),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i:e,o:e,d(e){e&&a(n),c&&c.d(),l&&l.d()}}}function ge(e,t,n){let o,c;r(e,H,(e=>n(4,o=e))),r(e,V,(e=>n(5,c=e)));var l=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let{prevPageToken:s}=t,{nextPageToken:i}=t;const a=e=>l(void 0,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},o),{pageToken:e}),n=yield J(c,t);G.set(n),H.set(t)}));return e.$$set=e=>{"prevPageToken"in e&&n(0,s=e.prevPageToken),"nextPageToken"in e&&n(1,i=e.nextPageToken)},[s,i,()=>l(void 0,void 0,void 0,(function*(){yield a(i)})),()=>l(void 0,void 0,void 0,(function*(){yield a(s)}))]}class me extends z{constructor(e){super(),N(this,e,ge,he,l,{prevPageToken:0,nextPageToken:1})}}function $e(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function ve(e){let t,n;return t=new re({props:{totalResults:e[1].totalResults,channelTitle:e[6]}}),{c(){q(t.$$.fragment)},m(e,o){B(t,e,o),n=!0},p(e,n){const o={};2&n&&(o.totalResults=e[1].totalResults),1&n&&(o.channelTitle=e[6]),t.$set(o)},i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){O(t.$$.fragment,e),n=!1},d(e){K(t,e)}}}function be(t){let n;return{c(){n=u("p"),n.textContent="...waiting"},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&a(n)}}}function ye(e){let t,n,o,c,l,r,f,p,g,m={ctx:e,current:null,token:null,hasCatch:!1,pending:be,then:ve,catch:$e,value:6,blocks:[,,,]};return U(n=e[0],m),c=new me({props:{prevPageToken:e[1].prevPageToken,nextPageToken:e[1].nextPageToken}}),r=new fe({props:{videos:e[1].videos}}),p=new me({props:{prevPageToken:e[1].prevPageToken,nextPageToken:e[1].nextPageToken}}),{c(){t=u("div"),m.block.c(),o=d(),q(c.$$.fragment),l=d(),q(r.$$.fragment),f=d(),q(p.$$.fragment),h(t,"id","result-view"),h(t,"class","py-2 space-y-2")},m(e,n){i(e,t,n),m.block.m(t,m.anchor=null),m.mount=()=>t,m.anchor=o,s(t,o),B(c,t,null),s(t,l),B(r,t,null),s(t,f),B(p,t,null),g=!0},p(t,[o]){if(e=t,m.ctx=e,1&o&&n!==(n=e[0])&&U(n,m));else{const t=e.slice();t[6]=m.resolved,m.block.p(t,o)}const l={};2&o&&(l.prevPageToken=e[1].prevPageToken),2&o&&(l.nextPageToken=e[1].nextPageToken),c.$set(l);const s={};2&o&&(s.videos=e[1].videos),r.$set(s);const i={};2&o&&(i.prevPageToken=e[1].prevPageToken),2&o&&(i.nextPageToken=e[1].nextPageToken),p.$set(i)},i(e){g||(j(m.block),j(c.$$.fragment,e),j(r.$$.fragment,e),j(p.$$.fragment,e),g=!0)},o(e){for(let e=0;e<3;e+=1){O(m.blocks[e])}O(c.$$.fragment,e),O(r.$$.fragment,e),O(p.$$.fragment,e),g=!1},d(e){e&&a(t),m.block.d(),m.token=null,m=null,K(c),K(r),K(p)}}}function xe(e,t,n){let o,c;r(e,V,(e=>n(3,o=e))),r(e,G,(e=>n(1,c=e)));var l=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let s,{channelId:i}=t;const a=e=>l(void 0,void 0,void 0,(function*(){if(e){return yield(async(e,t)=>{const n=new URL(`${e.endpoint}?part=snippet&type=channel&channelId=${t}&key=${e.key}`).href,o=await fetch(n);return(await o.json()).items[0].snippet.channelTitle})(o,e)}return""}));return e.$$set=e=>{"channelId"in e&&n(2,i=e.channelId)},e.$$.update=()=>{4&e.$$.dirty&&n(0,s=a(i))},[s,c,i]}class ke extends z{constructor(e){super(),N(this,e,xe,ye,l,{channelId:2})}}function we(e){let t,n,o,c,l;return n=new te({props:{channelId:e[0]}}),c=new ke({props:{channelId:e[0]}}),{c(){t=u("main"),q(n.$$.fragment),o=d(),q(c.$$.fragment),h(t,"class","container mx-auto max-w-screen-sm")},m(e,r){i(e,t,r),B(n,t,null),s(t,o),B(c,t,null),l=!0},p(e,[t]){const o={};1&t&&(o.channelId=e[0]),n.$set(o);const l={};1&t&&(l.channelId=e[0]),c.$set(l)},i(e){l||(j(n.$$.fragment,e),j(c.$$.fragment,e),l=!0)},o(e){O(n.$$.fragment,e),O(c.$$.fragment,e),l=!1},d(e){e&&a(t),K(n),K(c)}}}function Te(e,t,n){let o,{youtubeDataApiEndpoint:c}=t,{youtubeDataApiKey:l}=t;var r;return r=()=>{V.set({endpoint:c,key:l});const e=new URL(window.location.href);n(0,o=e.searchParams.get("channelId")||"")},y().$$.on_mount.push(r),e.$$set=e=>{"youtubeDataApiEndpoint"in e&&n(1,c=e.youtubeDataApiEndpoint),"youtubeDataApiKey"in e&&n(2,l=e.youtubeDataApiKey)},[o,c,l]}return new class extends z{constructor(e){super(),N(this,e,Te,we,l,{youtubeDataApiEndpoint:1,youtubeDataApiKey:2})}}({target:document.body,props:{youtubeDataApiEndpoint:"https://www.googleapis.com/youtube/v3/search",youtubeDataApiKey:"AIzaSyAoVZET2gvLjZKBb4dksv6SzdU7SbOtMpw"}})}();
//# sourceMappingURL=bundle.js.map