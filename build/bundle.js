var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function c(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function m(e,t){e.value=null==t?"":t}let $;function b(e){$=e}function y(){if(!$)throw new Error("Function called outside component initialization");return $}const v=[],x=[],k=[],w=[],T=Promise.resolve();let P=!1;function I(e){k.push(e)}let _=!1;const A=new Set;function E(){if(!_){_=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];b(t),R(t.$$)}for(b(null),v.length=0;x.length;)x.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];A.has(t)||(A.add(t),t())}k.length=0}while(v.length);for(;w.length;)w.pop()();P=!1,_=!1,A.clear()}}function R(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const D=new Set;let j;function C(e,t){e&&e.i&&(D.delete(e),e.i(t))}function S(e,t,n,o){if(e&&e.o){if(D.has(e))return;D.add(e),j.c.push((()=>{D.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function O(e,t){const n=t.token={};function c(e,c,l,r){if(t.token!==n)return;t.resolved=r;let s=t.ctx;void 0!==l&&(s=s.slice(),s[l]=r);const i=e&&(t.current=e)(s);let a=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==c&&e&&(j={r:0,c:[],p:j},S(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),j.r||o(j.c),j=j.p)})):t.block.d(1),i.c(),C(i,1),i.m(t.mount(),t.anchor),a=!0),t.block=i,t.blocks&&(t.blocks[c]=i),a&&E()}if((l=e)&&"object"==typeof l&&"function"==typeof l.then){const n=y();if(e.then((e=>{b(n),c(t.then,1,t.value,e),b(null)}),(e=>{if(b(n),c(t.catch,2,t.error,e),b(null),!t.hasCatch)throw e})),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}var l}function U(e,t){e.d(1),t.delete(e.key)}function L(e){e&&e.c()}function K(e,n,l,r){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=e.$$;s&&s.m(n,l),r||I((()=>{const n=i.map(t).filter(c);a?a.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(I)}function q(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t){-1===e.$$.dirty[0]&&(v.push(e),P||(P=!0,T.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(t,c,l,r,s,i,u=[-1]){const d=$;b(t);const f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:c.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=l?l(t,c.props||{},((e,n,...o)=>{const c=o.length?o[0]:n;return f.ctx&&s(f.ctx[e],f.ctx[e]=c)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](c),p&&B(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);f.fragment&&f.fragment.l(e),e.forEach(a)}else f.fragment&&f.fragment.c();c.intro&&C(t.$$.fragment),K(t,c.target,c.anchor,c.customElement),E()}b(d)}class N{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z=[];function Z(t,n=e){let o;const c=[];function r(e){if(l(t,e)&&(t=e,o)){const e=!z.length;for(let e=0;e<c.length;e+=1){const n=c[e];n[1](),z.push(n,t)}if(e){for(let e=0;e<z.length;e+=2)z[e][0](z[e+1]);z.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(l,s=e){const i=[l,s];return c.push(i),1===c.length&&(o=n(r)||e),l(t),()=>{const e=c.indexOf(i);-1!==e&&c.splice(e,1),0===c.length&&(o(),o=null)}}}}const F=Z({endpoint:"",key:""}),V=Z({totalResults:0,videos:[]}),G=Z({query:""}),H=async(e,t)=>{const n=J(e,t);console.log("api request: ",n);const o=await fetch(n),c=await o.json();return console.log("api response: ",c),{totalResults:c.pageInfo.totalResults,videos:c.items.map((e=>({id:e.id.videoId,title:e.snippet.title,thumbnailUrl:e.snippet.thumbnails.high.url,channelId:e.snippet.channelId,channelTitle:e.snippet.channelTitle,publishedAt:e.snippet.publishedAt}))),nextPageToken:c.nextPageToken,prevPageToken:c.prevPageToken}},J=(e,t)=>{const n=new URL(`${e.endpoint}?part=snippet&type=video&q=${t.query}&key=${e.key}`);return t.channelId&&n.searchParams.append("channelId",t.channelId),t.publishedAfter&&n.searchParams.append("publishedAfter",t.publishedAfter),t.publishedBefore&&n.searchParams.append("publishedBefore",t.publishedBefore),t.pageToken&&n.searchParams.append("pageToken",t.pageToken),n.href};function Q(t){let n,c,l,r,d,g,$,b,y,v,x,k,w,T,P,I;return{c(){n=u("div"),c=u("div"),l=u("input"),r=f(),d=u("button"),d.textContent="検索",g=f(),$=u("div"),b=u("span"),b.textContent="アップロード日:",y=f(),v=u("input"),x=f(),k=u("span"),k.textContent="~",w=f(),T=u("input"),h(l,"class","flex-auto px-2 py-1 border"),h(l,"placeholder","検索ワード"),h(d,"class","flex-none px-2 py-1 bg-gray-300"),h(c,"id","search-input-field"),h(c,"class","flex"),h(b,"class","mr-2"),h(v,"type","date"),h(v,"class","flex-auto border-b"),h(k,"class","mx-2"),h(T,"type","date"),h(T,"class","flex-auto border-b"),h($,"id","search-filter-field"),h($,"class","flex"),h(n,"id","search-form-container"),h(n,"class","flex flex-col m-auto pt-3 pb-1 space-y-1")},m(e,o){i(e,n,o),s(n,c),s(c,l),m(l,t[2]),s(c,r),s(c,d),s(n,g),s(n,$),s($,b),s($,y),s($,v),m(v,t[0]),s($,x),s($,k),s($,w),s($,T),m(T,t[1]),P||(I=[p(l,"input",t[5]),p(d,"click",t[3]),p(v,"input",t[6]),p(T,"input",t[7])],P=!0)},p(e,[t]){4&t&&l.value!==e[2]&&m(l,e[2]),1&t&&m(v,e[0]),2&t&&m(T,e[1])},i:e,o:e,d(e){e&&a(n),P=!1,o(I)}}}function W(e,t,n){let o,c,l;r(e,F,(e=>n(10,l=e)));var s=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let{channelId:i=""}=t,a="",u="",d="";return e.$$set=e=>{"channelId"in e&&n(4,i=e.channelId)},e.$$.update=()=>{1&e.$$.dirty&&(o=u?new Date(u).toISOString():""),2&e.$$.dirty&&(c=d?new Date(d).toISOString():"")},[u,d,a,()=>s(void 0,void 0,void 0,(function*(){const e={query:a,channelId:i,publishedAfter:o,publishedBefore:c},t=yield H(l,e);console.log("result: ",t),V.set(t),G.set(e)})),i,function(){a=this.value,n(2,a)},function(){u=this.value,n(0,u)},function(){d=this.value,n(1,d)}]}class X extends N{constructor(e){super(),M(this,e,W,Q,l,{channelId:4})}}function Y(e){let t,n,o,c,l,r,p;return{c(){t=u("p"),n=u("span"),o=d(e[1]),c=d(" で検索中"),l=f(),r=u("a"),p=u("p"),p.textContent="チャンネル内検索を解除",h(n,"class","font-semibold"),h(p,"class","underline"),h(r,"href",e[2].href)},m(e,a){i(e,t,a),s(t,n),s(n,o),s(t,c),i(e,l,a),i(e,r,a),s(r,p)},p(e,t){2&t&&g(o,e[1])},d(e){e&&a(t),e&&a(l),e&&a(r)}}}function ee(e){let t,n,o,c;return{c(){t=u("p"),n=d("検索結果: "),o=d(e[0]),c=d("件")},m(e,l){i(e,t,l),s(t,n),s(t,o),s(t,c)},p(e,t){1&t&&g(o,e[0])},d(e){e&&a(t)}}}function te(t){let n,o,c=t[1]&&Y(t),l=t[0]&&ee(t);return{c(){c&&c.c(),n=f(),l&&l.c(),o=d("")},m(e,t){c&&c.m(e,t),i(e,n,t),l&&l.m(e,t),i(e,o,t)},p(e,[t]){e[1]?c?c.p(e,t):(c=Y(e),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),e[0]?l?l.p(e,t):(l=ee(e),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},i:e,o:e,d(e){c&&c.d(e),e&&a(n),l&&l.d(e),e&&a(o)}}}function ne(e,t,n){let{totalResults:o}=t,{channelTitle:c}=t;const l=new URL(window.location.href);return l.searchParams.delete("channelId"),e.$$set=e=>{"totalResults"in e&&n(0,o=e.totalResults),"channelTitle"in e&&n(1,c=e.channelTitle)},[o,c,l]}class oe extends N{constructor(e){super(),M(this,e,ne,te,l,{totalResults:0,channelTitle:1})}}function ce(e,t,n){const o=e.slice();return o[2]=t[n],o}function le(e,t){let n,o,c,l,r,p,m,$,b,y,v,x,k,w,T,P,I,_,A,E,R=t[2].title+"",D=t[2].publishedAt+"",j=t[2].channelTitle+"";return{key:e,first:null,c(){n=u("a"),o=u("img"),l=f(),r=u("div"),p=u("div"),m=u("p"),$=d(R),b=f(),y=u("p"),v=d(D),x=f(),k=u("p"),w=d(j),T=f(),P=u("a"),I=d("このチャンネル内で検索"),A=f(),o.src!==(c=t[2].thumbnailUrl)&&h(o,"src",c),h(o,"alt","thumbnail"),h(o,"width","320"),h(o,"class","flex-none"),h(m,"class","text-xl\tfont-bold"),h(y,"class","text-sm font-light"),h(k,"class","font-light"),h(p,"class","flex flex-col pace-y-2"),h(P,"href",_=t[1](t[2].channelId)),h(P,"class","self-end underline"),h(r,"class","flex-auto flex flex-col justify-between px-2 py-4"),h(n,"href",E="https://www.youtube.com/watch?v="+t[2].id),h(n,"target","_blank"),h(n,"rel","noopener noreferrer"),h(n,"class","flex flex-row p-2 border rounded shadow"),this.first=n},m(e,t){i(e,n,t),s(n,o),s(n,l),s(n,r),s(r,p),s(p,m),s(m,$),s(p,b),s(p,y),s(y,v),s(p,x),s(p,k),s(k,w),s(r,T),s(r,P),s(P,I),s(n,A)},p(e,l){t=e,1&l&&o.src!==(c=t[2].thumbnailUrl)&&h(o,"src",c),1&l&&R!==(R=t[2].title+"")&&g($,R),1&l&&D!==(D=t[2].publishedAt+"")&&g(v,D),1&l&&j!==(j=t[2].channelTitle+"")&&g(w,j),1&l&&_!==(_=t[1](t[2].channelId))&&h(P,"href",_),1&l&&E!==(E="https://www.youtube.com/watch?v="+t[2].id)&&h(n,"href",E)},d(e){e&&a(n)}}}function re(t){let n,o=[],c=new Map,l=t[0];const r=e=>e[2].id;for(let e=0;e<l.length;e+=1){let n=ce(t,l,e),s=r(n);c.set(s,o[e]=le(s,n))}return{c(){n=u("div");for(let e=0;e<o.length;e+=1)o[e].c();h(n,"id","result-view-video-list"),h(n,"class","flex flex-col space-y-2")},m(e,t){i(e,n,t);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(e,[t]){3&t&&(l=e[0],o=function(e,t,n,o,c,l,r,s,i,a,u,d){let f=e.length,p=l.length,h=f;const g={};for(;h--;)g[e[h].key]=h;const m=[],$=new Map,b=new Map;for(h=p;h--;){const e=d(c,l,h),s=n(e);let i=r.get(s);i?o&&i.p(e,t):(i=a(s,e),i.c()),$.set(s,m[h]=i),s in g&&b.set(s,Math.abs(h-g[s]))}const y=new Set,v=new Set;function x(e){C(e,1),e.m(s,u),r.set(e.key,e),u=e.first,p--}for(;f&&p;){const t=m[p-1],n=e[f-1],o=t.key,c=n.key;t===n?(u=t.first,f--,p--):$.has(c)?!r.has(o)||y.has(o)?x(t):v.has(c)?f--:b.get(o)>b.get(c)?(v.add(o),x(t)):(y.add(c),f--):(i(n,r),f--)}for(;f--;){const t=e[f];$.has(t.key)||i(t,r)}for(;p;)x(m[p-1]);return m}(o,t,r,1,e,l,c,n,U,le,null,ce))},i:e,o:e,d(e){e&&a(n);for(let e=0;e<o.length;e+=1)o[e].d()}}}function se(e,t,n){let{videos:o}=t;return e.$$set=e=>{"videos"in e&&n(0,o=e.videos)},[o,e=>{const t=new URL(window.location.href);return t.searchParams.set("channelId",e),t.href}]}class ie extends N{constructor(e){super(),M(this,e,se,re,l,{videos:0})}}function ae(t){let n,o,c;return{c(){n=u("button"),n.textContent="前へ",h(n,"class","px-7 py-1 border")},m(e,l){i(e,n,l),o||(c=p(n,"click",t[3]),o=!0)},p:e,d(e){e&&a(n),o=!1,c()}}}function ue(t){let n,o,c;return{c(){n=u("button"),n.textContent="次へ",h(n,"class","px-7 py-1 border")},m(e,l){i(e,n,l),o||(c=p(n,"click",t[2]),o=!0)},p:e,d(e){e&&a(n),o=!1,c()}}}function de(t){let n,o,c=t[0]&&ae(t),l=t[1]&&ue(t);return{c(){n=u("div"),c&&c.c(),o=f(),l&&l.c(),h(n,"id","result-view-paginator"),h(n,"class","flex justify-center")},m(e,t){i(e,n,t),c&&c.m(n,null),s(n,o),l&&l.m(n,null)},p(e,[t]){e[0]?c?c.p(e,t):(c=ae(e),c.c(),c.m(n,o)):c&&(c.d(1),c=null),e[1]?l?l.p(e,t):(l=ue(e),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i:e,o:e,d(e){e&&a(n),c&&c.d(),l&&l.d()}}}function fe(e,t,n){let o,c;r(e,G,(e=>n(4,o=e))),r(e,F,(e=>n(5,c=e)));var l=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let{prevPageToken:s}=t,{nextPageToken:i}=t;const a=e=>l(void 0,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},o),{pageToken:e}),n=yield H(c,t);console.log("result: ",n),V.set(n),G.set(t)}));return e.$$set=e=>{"prevPageToken"in e&&n(0,s=e.prevPageToken),"nextPageToken"in e&&n(1,i=e.nextPageToken)},[s,i,()=>l(void 0,void 0,void 0,(function*(){yield a(i)})),()=>l(void 0,void 0,void 0,(function*(){yield a(s)}))]}class pe extends N{constructor(e){super(),M(this,e,fe,de,l,{prevPageToken:0,nextPageToken:1})}}function he(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function ge(e){let t,n;return t=new oe({props:{totalResults:e[1].totalResults,channelTitle:e[6]}}),{c(){L(t.$$.fragment)},m(e,o){K(t,e,o),n=!0},p(e,n){const o={};2&n&&(o.totalResults=e[1].totalResults),1&n&&(o.channelTitle=e[6]),t.$set(o)},i(e){n||(C(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function me(t){let n;return{c(){n=u("p"),n.textContent="...waiting"},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&a(n)}}}function $e(e){let t,n,o,c,l,r,d,p,g,m={ctx:e,current:null,token:null,hasCatch:!1,pending:me,then:ge,catch:he,value:6,blocks:[,,,]};return O(n=e[0],m),c=new pe({props:{prevPageToken:e[1].prevPageToken,nextPageToken:e[1].nextPageToken}}),r=new ie({props:{videos:e[1].videos}}),p=new pe({props:{prevPageToken:e[1].prevPageToken,nextPageToken:e[1].nextPageToken}}),{c(){t=u("div"),m.block.c(),o=f(),L(c.$$.fragment),l=f(),L(r.$$.fragment),d=f(),L(p.$$.fragment),h(t,"id","result-view"),h(t,"class","py-2 space-y-2")},m(e,n){i(e,t,n),m.block.m(t,m.anchor=null),m.mount=()=>t,m.anchor=o,s(t,o),K(c,t,null),s(t,l),K(r,t,null),s(t,d),K(p,t,null),g=!0},p(t,[o]){if(e=t,m.ctx=e,1&o&&n!==(n=e[0])&&O(n,m));else{const t=e.slice();t[6]=m.resolved,m.block.p(t,o)}const l={};2&o&&(l.prevPageToken=e[1].prevPageToken),2&o&&(l.nextPageToken=e[1].nextPageToken),c.$set(l);const s={};2&o&&(s.videos=e[1].videos),r.$set(s);const i={};2&o&&(i.prevPageToken=e[1].prevPageToken),2&o&&(i.nextPageToken=e[1].nextPageToken),p.$set(i)},i(e){g||(C(m.block),C(c.$$.fragment,e),C(r.$$.fragment,e),C(p.$$.fragment,e),g=!0)},o(e){for(let e=0;e<3;e+=1){S(m.blocks[e])}S(c.$$.fragment,e),S(r.$$.fragment,e),S(p.$$.fragment,e),g=!1},d(e){e&&a(t),m.block.d(),m.token=null,m=null,q(c),q(r),q(p)}}}function be(e,t,n){let o,c;r(e,F,(e=>n(3,o=e))),r(e,V,(e=>n(1,c=e)));var l=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,l){function r(e){try{i(o.next(e))}catch(e){l(e)}}function s(e){try{i(o.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((o=o.apply(e,t||[])).next())}))};let s,{channelId:i}=t;const a=e=>l(void 0,void 0,void 0,(function*(){if(e){const t=yield(async(e,t)=>{const n=new URL(`${e.endpoint}?part=snippet&type=channel&channelId=${t}&key=${e.key}`).href,o=await fetch(n);return(await o.json()).items[0].snippet.channelTitle})(o,e);return console.log("channelTitle: ",t),t}return""}));return e.$$set=e=>{"channelId"in e&&n(2,i=e.channelId)},e.$$.update=()=>{4&e.$$.dirty&&n(0,s=a(i))},[s,c,i]}class ye extends N{constructor(e){super(),M(this,e,be,$e,l,{channelId:2})}}function ve(e){let t,n,o,c,l;return n=new X({props:{channelId:e[0]}}),c=new ye({props:{channelId:e[0]}}),{c(){t=u("main"),L(n.$$.fragment),o=f(),L(c.$$.fragment),h(t,"class","container mx-auto max-w-screen-sm")},m(e,r){i(e,t,r),K(n,t,null),s(t,o),K(c,t,null),l=!0},p(e,[t]){const o={};1&t&&(o.channelId=e[0]),n.$set(o);const l={};1&t&&(l.channelId=e[0]),c.$set(l)},i(e){l||(C(n.$$.fragment,e),C(c.$$.fragment,e),l=!0)},o(e){S(n.$$.fragment,e),S(c.$$.fragment,e),l=!1},d(e){e&&a(t),q(n),q(c)}}}function xe(e,t,n){let o,{youtubeDataApiEndpoint:c}=t,{youtubeDataApiKey:l}=t;var r;return r=()=>{F.set({endpoint:c,key:l}),console.log("youtubeDataApiEndpoint: ",c),console.log("youtubeDataApiKey: ",l);const e=new URL(window.location.href);n(0,o=e.searchParams.get("channelId")||"")},y().$$.on_mount.push(r),e.$$set=e=>{"youtubeDataApiEndpoint"in e&&n(1,c=e.youtubeDataApiEndpoint),"youtubeDataApiKey"in e&&n(2,l=e.youtubeDataApiKey)},[o,c,l]}return new class extends N{constructor(e){super(),M(this,e,xe,ve,l,{youtubeDataApiEndpoint:1,youtubeDataApiKey:2})}}({target:document.body,props:{youtubeDataApiEndpoint:"https://www.googleapis.com/youtube/v3/search",youtubeDataApiKey:"AIzaSyAoVZET2gvLjZKBb4dksv6SzdU7SbOtMpw"}})}();
//# sourceMappingURL=bundle.js.map