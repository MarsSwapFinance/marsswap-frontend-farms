(this["webpackJsonpmarsswap-frontend-farms"]=this["webpackJsonpmarsswap-frontend-farms"]||[]).push([[3],{678:function(e,t,r){"use strict";var n=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,s="[BigNumber Error] ",f=s+"Number primitive has more than 15 significant digits: ",c=1e14,u=14,a=9007199254740991,l=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],h=1e7,p=1e9;function d(e){var t=0|e;return e>0||e===t?t:t-1}function g(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(t=e[n++]+"",r=u-t.length;r--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function m(e,t){var r,n,i=e.c,o=t.c,s=e.s,f=t.s,c=e.e,u=t.e;if(!s||!f)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-f:s;if(s!=f)return s;if(r=s<0,n=c==u,!i||!o)return n?0:!i^r?1:-1;if(!n)return c>u^r?1:-1;for(f=(c=i.length)<(u=o.length)?c:u,s=0;s<f;s++)if(i[s]!=o[s])return i[s]>o[s]^r?1:-1;return c==u?0:c>u^r?1:-1}function w(e,t,r,n){if(e<t||e>r||e!==o(e))throw Error(s+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return d(e.e/u)==t&&e.c[t]%2!=0}function b(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function x(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(++t>(n=e.length)){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}var y=function e(t){var r,y,R,O=j.prototype={constructor:j,toString:null,valueOf:null},N=new j(1),E=20,A=4,L=-7,_=21,T=-1e7,S=1e7,P=!1,M=1,D=0,k={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},U="0123456789abcdefghijklmnopqrstuvwxyz";function j(e,t){var r,i,s,c,l,h,p,d,g=this;if(!(g instanceof j))return new j(e,t);if(null==t){if(e&&!0===e._isBigNumber)return g.s=e.s,void(!e.c||e.e>S?g.c=g.e=null:e.e<T?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,l=e;l>=10;l/=10,c++);return void(c>S?g.c=g.e=null:(g.e=c,g.c=[e]))}d=String(e)}else{if(!n.test(d=String(e)))return R(g,d,h);g.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(c=d.indexOf("."))>-1&&(d=d.replace(".","")),(l=d.search(/e/i))>0?(c<0&&(c=l),c+=+d.slice(l+1),d=d.substring(0,l)):c<0&&(c=d.length)}else{if(w(t,2,U.length,"Base"),10==t)return F(g=new j(e),E+g.e+1,A);if(d=String(e),h="number"==typeof e){if(0*e!=0)return R(g,d,h,t);if(g.s=1/e<0?(d=d.slice(1),-1):1,j.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(f+e)}else g.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(r=U.slice(0,t),c=l=0,p=d.length;l<p;l++)if(r.indexOf(i=d.charAt(l))<0){if("."==i){if(l>c){c=p;continue}}else if(!s&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){s=!0,l=-1,c=0;continue}return R(g,String(e),h,t)}h=!1,(c=(d=y(d,t,10,g.s)).indexOf("."))>-1?d=d.replace(".",""):c=d.length}for(l=0;48===d.charCodeAt(l);l++);for(p=d.length;48===d.charCodeAt(--p););if(d=d.slice(l,++p)){if(p-=l,h&&j.DEBUG&&p>15&&(e>a||e!==o(e)))throw Error(f+g.s*e);if((c=c-l-1)>S)g.c=g.e=null;else if(c<T)g.c=[g.e=0];else{if(g.e=c,g.c=[],l=(c+1)%u,c<0&&(l+=u),l<p){for(l&&g.c.push(+d.slice(0,l)),p-=u;l<p;)g.c.push(+d.slice(l,l+=u));l=u-(d=d.slice(l)).length}else l-=p;for(;l--;d+="0");g.c.push(+d)}}else g.c=[g.e=0]}function B(e,t,r,n){var i,o,s,f,c;if(null==r?r=A:w(r,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==t)c=g(e.c),c=1==n||2==n&&(s<=L||s>=_)?b(c,s):x(c,s,"0");else if(o=(e=F(new j(e),t,r)).e,f=(c=g(e.c)).length,1==n||2==n&&(t<=o||o<=L)){for(;f<t;c+="0",f++);c=b(c,o)}else if(t-=s,c=x(c,o,"0"),o+1>f){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=o-f)>0)for(o+1==f&&(c+=".");t--;c+="0");return e.s<0&&i?"-"+c:c}function C(e,t){for(var r,n=1,i=new j(e[0]);n<e.length;n++){if(!(r=new j(e[n])).s){i=r;break}t.call(i,r)&&(i=r)}return i}function q(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+r*u-1)>S?e.c=e.e=null:r<T?e.c=[e.e=0]:(e.e=r,e.c=t),e}function F(e,t,r,n){var s,f,a,h,p,d,g,m=e.c,w=l;if(m){e:{for(s=1,h=m[0];h>=10;h/=10,s++);if((f=t-s)<0)f+=u,a=t,g=(p=m[d=0])/w[s-a-1]%10|0;else if((d=i((f+1)/u))>=m.length){if(!n)break e;for(;m.length<=d;m.push(0));p=g=0,s=1,a=(f%=u)-u+1}else{for(p=h=m[d],s=1;h>=10;h/=10,s++);g=(a=(f%=u)-u+s)<0?0:p/w[s-a-1]%10|0}if(n=n||t<0||null!=m[d+1]||(a<0?p:p%w[s-a-1]),n=r<4?(g||n)&&(0==r||r==(e.s<0?3:2)):g>5||5==g&&(4==r||n||6==r&&(f>0?a>0?p/w[s-a]:0:m[d-1])%10&1||r==(e.s<0?8:7)),t<1||!m[0])return m.length=0,n?(t-=e.e+1,m[0]=w[(u-t%u)%u],e.e=-t||0):m[0]=e.e=0,e;if(0==f?(m.length=d,h=1,d--):(m.length=d+1,h=w[u-f],m[d]=a>0?o(p/w[s-a]%w[a])*h:0),n)for(;;){if(0==d){for(f=1,a=m[0];a>=10;a/=10,f++);for(a=m[0]+=h,h=1;a>=10;a/=10,h++);f!=h&&(e.e++,m[0]==c&&(m[0]=1));break}if(m[d]+=h,m[d]!=c)break;m[d--]=0,h=1}for(f=m.length;0===m[--f];m.pop());}e.e>S?e.c=e.e=null:e.e<T&&(e.c=[e.e=0])}return e}function I(e){var t,r=e.e;return null===r?e.toString():(t=g(e.c),t=r<=L||r>=_?b(t,r):x(t,r,"0"),e.s<0?"-"+t:t)}return j.clone=e,j.ROUND_UP=0,j.ROUND_DOWN=1,j.ROUND_CEIL=2,j.ROUND_FLOOR=3,j.ROUND_HALF_UP=4,j.ROUND_HALF_DOWN=5,j.ROUND_HALF_EVEN=6,j.ROUND_HALF_CEIL=7,j.ROUND_HALF_FLOOR=8,j.EUCLID=9,j.config=j.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(w(r=e[t],0,p,t),E=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(w(r=e[t],0,8,t),A=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(w(r[0],-p,0,t),w(r[1],0,p,t),L=r[0],_=r[1]):(w(r,-p,p,t),L=-(_=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)w(r[0],-p,-1,t),w(r[1],1,p,t),T=r[0],S=r[1];else{if(w(r,-p,p,t),!r)throw Error(s+t+" cannot be zero: "+r);T=-(S=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(s+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw P=!r,Error(s+"crypto unavailable");P=r}else P=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(w(r=e[t],0,9,t),M=r),e.hasOwnProperty(t="POW_PRECISION")&&(w(r=e[t],0,p,t),D=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(s+t+" not an object: "+r);k=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.$|[+-.\s]|(.).*\1/.test(r))throw Error(s+t+" invalid: "+r);U=r}}return{DECIMAL_PLACES:E,ROUNDING_MODE:A,EXPONENTIAL_AT:[L,_],RANGE:[T,S],CRYPTO:P,MODULO_MODE:M,POW_PRECISION:D,FORMAT:k,ALPHABET:U}},j.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!j.DEBUG)return!0;var t,r,n=e.c,i=e.e,f=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===f||-1===f)&&i>=-p&&i<=p&&i===o(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((t=(i+1)%u)<1&&(t+=u),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=c||r!==o(r))break e;if(0!==r)return!0}}}else if(null===n&&null===i&&(null===f||1===f||-1===f))return!0;throw Error(s+"Invalid BigNumber: "+e)},j.maximum=j.max=function(){return C(arguments,O.lt)},j.minimum=j.min=function(){return C(arguments,O.gt)},j.random=function(){var e=9007199254740992,t=Math.random()*e&2097151?function(){return o(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var r,n,f,c,a,h=0,d=[],g=new j(N);if(null==e?e=E:w(e,0,p),c=i(e/u),P)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(c*=2));h<c;)(a=131072*r[h]+(r[h+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),r[h]=n[0],r[h+1]=n[1]):(d.push(a%1e14),h+=2);h=c/2}else{if(!crypto.randomBytes)throw P=!1,Error(s+"crypto unavailable");for(r=crypto.randomBytes(c*=7);h<c;)(a=281474976710656*(31&r[h])+1099511627776*r[h+1]+4294967296*r[h+2]+16777216*r[h+3]+(r[h+4]<<16)+(r[h+5]<<8)+r[h+6])>=9e15?crypto.randomBytes(7).copy(r,h):(d.push(a%1e14),h+=7);h=c/7}if(!P)for(;h<c;)(a=t())<9e15&&(d[h++]=a%1e14);for(c=d[--h],e%=u,c&&e&&(a=l[u-e],d[h]=o(c/a)*a);0===d[h];d.pop(),h--);if(h<0)d=[f=0];else{for(f=-1;0===d[0];d.splice(0,1),f-=u);for(h=1,a=d[0];a>=10;a/=10,h++);h<u&&(f-=u-h)}return g.e=f,g.c=d,g}}(),j.sum=function(){for(var e=1,t=arguments,r=new j(t[0]);e<t.length;)r=r.plus(t[e++]);return r},y=function(){var e="0123456789";function t(e,t,r,n){for(var i,o,s=[0],f=0,c=e.length;f<c;){for(o=s.length;o--;s[o]*=t);for(s[0]+=n.indexOf(e.charAt(f++)),i=0;i<s.length;i++)s[i]>r-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/r|0,s[i]%=r)}return s.reverse()}return function(n,i,o,s,f){var c,u,a,l,h,p,d,m,w=n.indexOf("."),v=E,b=A;for(w>=0&&(l=D,D=0,n=n.replace(".",""),p=(m=new j(i)).pow(n.length-w),D=l,m.c=t(x(g(p.c),p.e,"0"),10,o,e),m.e=m.c.length),a=l=(d=t(n,i,o,f?(c=U,e):(c=e,U))).length;0==d[--l];d.pop());if(!d[0])return c.charAt(0);if(w<0?--a:(p.c=d,p.e=a,p.s=s,d=(p=r(p,m,v,b,o)).c,h=p.r,a=p.e),w=d[u=a+v+1],l=o/2,h=h||u<0||null!=d[u+1],h=b<4?(null!=w||h)&&(0==b||b==(p.s<0?3:2)):w>l||w==l&&(4==b||h||6==b&&1&d[u-1]||b==(p.s<0?8:7)),u<1||!d[0])n=h?x(c.charAt(1),-v,c.charAt(0)):c.charAt(0);else{if(d.length=u,h)for(--o;++d[--u]>o;)d[u]=0,u||(++a,d=[1].concat(d));for(l=d.length;!d[--l];);for(w=0,n="";w<=l;n+=c.charAt(d[w++]));n=x(n,a,c.charAt(0))}return n}}(),r=function(){function e(e,t,r){var n,i,o,s,f=0,c=e.length,u=t%h,a=t/h|0;for(e=e.slice();c--;)f=((i=u*(o=e[c]%h)+(n=a*o+(s=e[c]/h|0)*u)%h*h+f)/r|0)+(n/h|0)+a*s,e[c]=i%r;return f&&(e=[f].concat(e)),e}function t(e,t,r,n){var i,o;if(r!=n)o=r>n?1:-1;else for(i=o=0;i<r;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,s,f,a){var l,h,p,g,m,w,v,b,x,y,R,O,N,E,A,L,_,T=n.s==i.s?1:-1,S=n.c,P=i.c;if(!S||!S[0]||!P||!P[0])return new j(n.s&&i.s&&(S?!P||S[0]!=P[0]:P)?S&&0==S[0]||!P?0*T:T/0:NaN);for(x=(b=new j(T)).c=[],T=s+(h=n.e-i.e)+1,a||(a=c,h=d(n.e/u)-d(i.e/u),T=T/u|0),p=0;P[p]==(S[p]||0);p++);if(P[p]>(S[p]||0)&&h--,T<0)x.push(1),g=!0;else{for(E=S.length,L=P.length,p=0,T+=2,(m=o(a/(P[0]+1)))>1&&(P=e(P,m,a),S=e(S,m,a),L=P.length,E=S.length),N=L,R=(y=S.slice(0,L)).length;R<L;y[R++]=0);_=P.slice(),_=[0].concat(_),A=P[0],P[1]>=a/2&&A++;do{if(m=0,(l=t(P,y,L,R))<0){if(O=y[0],L!=R&&(O=O*a+(y[1]||0)),(m=o(O/A))>1)for(m>=a&&(m=a-1),v=(w=e(P,m,a)).length,R=y.length;1==t(w,y,v,R);)m--,r(w,L<v?_:P,v,a),v=w.length,l=1;else 0==m&&(l=m=1),v=(w=P.slice()).length;if(v<R&&(w=[0].concat(w)),r(y,w,R,a),R=y.length,-1==l)for(;t(P,y,L,R)<1;)m++,r(y,L<R?_:P,R,a),R=y.length}else 0===l&&(m++,y=[0]);x[p++]=m,y[0]?y[R++]=S[N]||0:(y=[S[N]],R=1)}while((N++<E||null!=y[0])&&T--);g=null!=y[0],x[0]||x.splice(0,1)}if(a==c){for(p=1,T=x[0];T>=10;T/=10,p++);F(b,s+(b.e=p+h*u-1)+1,f,g)}else b.e=h,b.r=+g;return b}}(),R=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,t=/^([^.]+)\.$/,r=/^\.([^.]+)$/,n=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,f,c,u){var a,l=c?f:f.replace(i,"");if(n.test(l))o.s=isNaN(l)?null:l<0?-1:1;else{if(!c&&(l=l.replace(e,(function(e,t,r){return a="x"==(r=r.toLowerCase())?16:"b"==r?2:8,u&&u!=a?e:t})),u&&(a=u,l=l.replace(t,"$1").replace(r,"0.$1")),f!=l))return new j(l,a);if(j.DEBUG)throw Error(s+"Not a"+(u?" base "+u:"")+" number: "+f);o.s=null}o.c=o.e=null}}(),O.absoluteValue=O.abs=function(){var e=new j(this);return e.s<0&&(e.s=1),e},O.comparedTo=function(e,t){return m(this,new j(e,t))},O.decimalPlaces=O.dp=function(e,t){var r,n,i,o=this;if(null!=e)return w(e,0,p),null==t?t=A:w(t,0,8),F(new j(o),e+o.e+1,t);if(!(r=o.c))return null;if(n=((i=r.length-1)-d(this.e/u))*u,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},O.dividedBy=O.div=function(e,t){return r(this,new j(e,t),E,A)},O.dividedToIntegerBy=O.idiv=function(e,t){return r(this,new j(e,t),0,1)},O.exponentiatedBy=O.pow=function(e,t){var r,n,f,c,a,l,h,p,d=this;if((e=new j(e)).c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+I(e));if(null!=t&&(t=new j(t)),a=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return p=new j(Math.pow(+I(d),a?2-v(e):+I(e))),t?p.mod(t):p;if(l=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new j(NaN);(n=!l&&d.isInteger()&&t.isInteger())&&(d=d.mod(t))}else{if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||a&&d.c[1]>=24e7:d.c[0]<8e13||a&&d.c[0]<=9999975e7)))return c=d.s<0&&v(e)?-0:0,d.e>-1&&(c=1/c),new j(l?1/c:c);D&&(c=i(D/u+2))}for(a?(r=new j(.5),l&&(e.s=1),h=v(e)):h=(f=Math.abs(+I(e)))%2,p=new j(N);;){if(h){if(!(p=p.times(d)).c)break;c?p.c.length>c&&(p.c.length=c):n&&(p=p.mod(t))}if(f){if(0===(f=o(f/2)))break;h=f%2}else if(F(e=e.times(r),e.e+1,1),e.e>14)h=v(e);else{if(0===(f=+I(e)))break;h=f%2}d=d.times(d),c?d.c&&d.c.length>c&&(d.c.length=c):n&&(d=d.mod(t))}return n?p:(l&&(p=N.div(p)),t?p.mod(t):c?F(p,D,A,undefined):p)},O.integerValue=function(e){var t=new j(this);return null==e?e=A:w(e,0,8),F(t,t.e+1,e)},O.isEqualTo=O.eq=function(e,t){return 0===m(this,new j(e,t))},O.isFinite=function(){return!!this.c},O.isGreaterThan=O.gt=function(e,t){return m(this,new j(e,t))>0},O.isGreaterThanOrEqualTo=O.gte=function(e,t){return 1===(t=m(this,new j(e,t)))||0===t},O.isInteger=function(){return!!this.c&&d(this.e/u)>this.c.length-2},O.isLessThan=O.lt=function(e,t){return m(this,new j(e,t))<0},O.isLessThanOrEqualTo=O.lte=function(e,t){return-1===(t=m(this,new j(e,t)))||0===t},O.isNaN=function(){return!this.s},O.isNegative=function(){return this.s<0},O.isPositive=function(){return this.s>0},O.isZero=function(){return!!this.c&&0==this.c[0]},O.minus=function(e,t){var r,n,i,o,s=this,f=s.s;if(t=(e=new j(e,t)).s,!f||!t)return new j(NaN);if(f!=t)return e.s=-t,s.plus(e);var a=s.e/u,l=e.e/u,h=s.c,p=e.c;if(!a||!l){if(!h||!p)return h?(e.s=-t,e):new j(p?s:NaN);if(!h[0]||!p[0])return p[0]?(e.s=-t,e):new j(h[0]?s:3==A?-0:0)}if(a=d(a),l=d(l),h=h.slice(),f=a-l){for((o=f<0)?(f=-f,i=h):(l=a,i=p),i.reverse(),t=f;t--;i.push(0));i.reverse()}else for(n=(o=(f=h.length)<(t=p.length))?f:t,f=t=0;t<n;t++)if(h[t]!=p[t]){o=h[t]<p[t];break}if(o&&(i=h,h=p,p=i,e.s=-e.s),(t=(n=p.length)-(r=h.length))>0)for(;t--;h[r++]=0);for(t=c-1;n>f;){if(h[--n]<p[n]){for(r=n;r&&!h[--r];h[r]=t);--h[r],h[n]+=c}h[n]-=p[n]}for(;0==h[0];h.splice(0,1),--l);return h[0]?q(e,h,l):(e.s=3==A?-1:1,e.c=[e.e=0],e)},O.modulo=O.mod=function(e,t){var n,i,o=this;return e=new j(e,t),!o.c||!e.s||e.c&&!e.c[0]?new j(NaN):!e.c||o.c&&!o.c[0]?new j(o):(9==M?(i=e.s,e.s=1,n=r(o,e,0,3),e.s=i,n.s*=i):n=r(o,e,0,M),(e=o.minus(n.times(e))).c[0]||1!=M||(e.s=o.s),e)},O.multipliedBy=O.times=function(e,t){var r,n,i,o,s,f,a,l,p,g,m,w,v,b,x,y=this,R=y.c,O=(e=new j(e,t)).c;if(!R||!O||!R[0]||!O[0])return!y.s||!e.s||R&&!R[0]&&!O||O&&!O[0]&&!R?e.c=e.e=e.s=null:(e.s*=y.s,R&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=d(y.e/u)+d(e.e/u),e.s*=y.s,(a=R.length)<(g=O.length)&&(v=R,R=O,O=v,i=a,a=g,g=i),i=a+g,v=[];i--;v.push(0));for(b=c,x=h,i=g;--i>=0;){for(r=0,m=O[i]%x,w=O[i]/x|0,o=i+(s=a);o>i;)r=((l=m*(l=R[--s]%x)+(f=w*l+(p=R[s]/x|0)*m)%x*x+v[o]+r)/b|0)+(f/x|0)+w*p,v[o--]=l%b;v[o]=r}return r?++n:v.splice(0,1),q(e,v,n)},O.negated=function(){var e=new j(this);return e.s=-e.s||null,e},O.plus=function(e,t){var r,n=this,i=n.s;if(t=(e=new j(e,t)).s,!i||!t)return new j(NaN);if(i!=t)return e.s=-t,n.minus(e);var o=n.e/u,s=e.e/u,f=n.c,a=e.c;if(!o||!s){if(!f||!a)return new j(i/0);if(!f[0]||!a[0])return a[0]?e:new j(f[0]?n:0*i)}if(o=d(o),s=d(s),f=f.slice(),i=o-s){for(i>0?(s=o,r=a):(i=-i,r=f),r.reverse();i--;r.push(0));r.reverse()}for((i=f.length)-(t=a.length)<0&&(r=a,a=f,f=r,t=i),i=0;t;)i=(f[--t]=f[t]+a[t]+i)/c|0,f[t]=c===f[t]?0:f[t]%c;return i&&(f=[i].concat(f),++s),q(e,f,s)},O.precision=O.sd=function(e,t){var r,n,i,o=this;if(null!=e&&e!==!!e)return w(e,1,p),null==t?t=A:w(t,0,8),F(new j(o),e,t);if(!(r=o.c))return null;if(n=(i=r.length-1)*u+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},O.shiftedBy=function(e){return w(e,-9007199254740991,a),this.times("1e"+e)},O.squareRoot=O.sqrt=function(){var e,t,n,i,o,s=this,f=s.c,c=s.s,u=s.e,a=E+4,l=new j("0.5");if(1!==c||!f||!f[0])return new j(!c||c<0&&(!f||f[0])?NaN:f?s:1/0);if(0==(c=Math.sqrt(+I(s)))||c==1/0?(((t=g(f)).length+u)%2==0&&(t+="0"),c=Math.sqrt(+t),u=d((u+1)/2)-(u<0||u%2),n=new j(t=c==1/0?"5e"+u:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+u)):n=new j(c+""),n.c[0])for((c=(u=n.e)+a)<3&&(c=0);;)if(o=n,n=l.times(o.plus(r(s,o,a,1))),g(o.c).slice(0,c)===(t=g(n.c)).slice(0,c)){if(n.e<u&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(F(n,n.e+E+2,1),e=!n.times(n).eq(s));break}if(!i&&(F(o,o.e+E+2,0),o.times(o).eq(s))){n=o;break}a+=4,c+=4,i=1}return F(n,n.e+E+1,A,e)},O.toExponential=function(e,t){return null!=e&&(w(e,0,p),e++),B(this,e,t,1)},O.toFixed=function(e,t){return null!=e&&(w(e,0,p),e=e+this.e+1),B(this,e,t)},O.toFormat=function(e,t,r){var n,i=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=k;else if("object"!=typeof r)throw Error(s+"Argument not an object: "+r);if(n=i.toFixed(e,t),i.c){var o,f=n.split("."),c=+r.groupSize,u=+r.secondaryGroupSize,a=r.groupSeparator||"",l=f[0],h=f[1],p=i.s<0,d=p?l.slice(1):l,g=d.length;if(u&&(o=c,c=u,u=o,g-=o),c>0&&g>0){for(o=g%c||c,l=d.substr(0,o);o<g;o+=c)l+=a+d.substr(o,c);u>0&&(l+=a+d.slice(o)),p&&(l="-"+l)}n=h?l+(r.decimalSeparator||"")+((u=+r.fractionGroupSize)?h.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):h):l}return(r.prefix||"")+n+(r.suffix||"")},O.toFraction=function(e){var t,n,i,o,f,c,a,h,p,d,m,w,v=this,b=v.c;if(null!=e&&(!(a=new j(e)).isInteger()&&(a.c||1!==a.s)||a.lt(N)))throw Error(s+"Argument "+(a.isInteger()?"out of range: ":"not an integer: ")+I(a));if(!b)return new j(v);for(t=new j(N),p=n=new j(N),i=h=new j(N),w=g(b),f=t.e=w.length-v.e-1,t.c[0]=l[(c=f%u)<0?u+c:c],e=!e||a.comparedTo(t)>0?f>0?t:p:a,c=S,S=1/0,a=new j(w),h.c[0]=0;d=r(a,t,0,1),1!=(o=n.plus(d.times(i))).comparedTo(e);)n=i,i=o,p=h.plus(d.times(o=p)),h=o,t=a.minus(d.times(o=t)),a=o;return o=r(e.minus(n),i,0,1),h=h.plus(o.times(p)),n=n.plus(o.times(i)),h.s=p.s=v.s,m=r(p,i,f*=2,A).minus(v).abs().comparedTo(r(h,n,f,A).minus(v).abs())<1?[p,i]:[h,n],S=c,m},O.toNumber=function(){return+I(this)},O.toPrecision=function(e,t){return null!=e&&w(e,1,p),B(this,e,t,2)},O.toString=function(e){var t,r=this,n=r.s,i=r.e;return null===i?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(null==e?t=i<=L||i>=_?b(g(r.c),i):x(g(r.c),i,"0"):10===e?t=x(g((r=F(new j(r),E+i+1,A)).c),r.e,"0"):(w(e,2,U.length,"Base"),t=y(x(g(r.c),i,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},O.valueOf=O.toJSON=function(){return I(this)},O._isBigNumber=!0,O[Symbol.toStringTag]="BigNumber",O[Symbol.for("nodejs.util.inspect.custom")]=O.valueOf,null!=t&&j.set(t),j}();t.a=y},682:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(57),s=function(e,t){var r=void 0;return function(){var n=this,i=arguments,o=function(){return e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}},f=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function c(e){var t=0;return e.forEach((function(e){e.rect.height>t&&(t=e.rect.height)})),t}function u(e){var t=e.rect,r=e.mode,n=(e.prevOffset,e.position),i=e.direction,o=e.width;if("chain"!==r)return!1;switch(i){case"toRight":return n.from>0;case"toLeft":default:return t.width+n.from<=o}}function a(e){var t=e.mode,r=e.from,n=e.direction,i=e.rect,o=e.width,s=r||0;switch(t){case"await":switch(n){case"toRight":return o;case"toLeft":default:return-i.width}case"smooth":switch(n){case"toRight":return i.width>o?0:o-i.width;case"toLeft":default:return i.width>o?o-i.width:0}case"chain":default:switch(n){case"toRight":return 0;case"toLeft":default:return i.width+s>o?o-i.width:o-i.left-i.width}}}var l=function(e){var t=e.mode,r=e.index,n=e.rect,i=e.offset,o=e.width,s=e.direction,f=function(e){var t=e.index,r=e.rect,n=e.offset,i=e.width,o=e.direction;if(0===t)return n;if("number"===typeof n)return function(e){var t=e.rect,r=e.offset;switch(e.direction){case"toRight":return r-t.width;case"toLeft":default:return r}}({rect:r,offset:n,direction:o});switch(o){case"toRight":return-r.width;case"toLeft":default:return i}}({index:r,rect:n,offset:i,width:o,direction:s});return{from:f,to:function(e){var t=e.rect,r=e.width;switch(e.direction){case"toRight":return r;case"toLeft":default:return-t.width}}({rect:n,width:o,direction:s}),next:a({mode:t,from:f,direction:s,rect:n,width:o})}};function h(e){var t=e.from,r=e.rect;switch(e.direction){case"toRight":return t;case"toLeft":default:return t+r.width}}function p(e){var t=e.offset,r=e.rect,n=e.direction,i=e.width;if("run-in"===t)switch(n){case"toRight":return-r.width;case"toLeft":default:return i}if("string"===typeof t){var o=Number(t.replace("%",""));if(o)return i/100*o}return t}var d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},v=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},b=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},x=function(e){function t(){var e,r,n;d(this,t);for(var o=arguments.length,s=Array(o),f=0;f<o;f++)s[f]=arguments[f];return r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={children:n.props.children({index:n.props.index}),move:n.props.move,position:{from:void 0,to:void 0,next:void 0},offset:n.props.offset,rect:null},n.x=0,n.isMoving=!1,n.nextTriggered=!1,n.elementRef=i.a.createRef(),n.componentDidMount=function(){n.setPosition(!0),n.observer=new MutationObserver(n.onMutation),n.observer.observe(n.elementRef.current,{characterData:!0,childList:!0,subtree:!0})},n.componentWillUnmount=function(){n.observer.disconnect()},n.onMutation=function(){n.setPosition()},n.componentDidUpdate=function(e,t){n.x||t.position.from===n.state.position.from||(n.x=n.state.position.from,n.elementRef.current.style.transform="translate3d("+n.x+"px, 0, 0)"),n.x!==n.state.position.from&&e.prevRect&&n.props.prevRect&&e.prevRect.width!==n.props.prevRect.width&&(n.props.offset?n.x=n.x+(n.props.offset-e.offset):n.x=n.x+(n.props.prevRect.width-e.prevRect.width),n.elementRef.current.style.transform="translate3d("+n.x+"px, 0, 0)"),n.props.move&&!e.start&&n.props.start&&n.animate(),n.props.start&&!e.move&&n.props.move&&n.animate(),e.move&&!n.props.move&&(n.isMoving=!1)},n.setPosition=function(e){var t=n.props,r=t.mode,i=t.width,o=t.id,s=t.onNext,f=t.direction,c=t.index,a=t.setRect,d=n.elementRef.current.getBoundingClientRect();if(0!==d.width){var g=0===n.props.index?p({offset:n.props.offset,rect:d,direction:f,width:i}):n.props.offset,m=l({mode:r,rect:d,index:c,offset:g,width:i,direction:f});if(a({index:n.props.index,rect:d,offset:g,nextOffset:h({from:m.from,rect:d,direction:f})}),e){var w=u({mode:r,rect:d,position:m,offset:g,direction:f,width:i});w&&s({id:o,index:c,rect:d,nextOffset:h({from:m.from,rect:d,direction:f})}),w||!g&&0!==c||s({id:o,index:c,rect:d}),n.nextTriggered=w}n.setState({rect:d,offset:g,position:m})}},n.shouldTriggerNext=function(){return!n.nextTriggered&&("toLeft"===n.props.direction?n.x<=n.state.position.next:n.x>=n.state.position.next)},n.triggerNext=function(){n.shouldTriggerNext()&&(n.nextTriggered=!0,n.props.onNext({id:n.props.id,index:n.props.index,rect:n.state.rect}))},n.shouldFinish=function(){switch(n.props.direction){case"toRight":return n.x>=n.state.position.to;case"toLeft":default:return n.x<=n.state.position.to}},n.animate=function(){if(!n.isMoving){n.isMoving=!0;var e=null;window.requestAnimationFrame((function t(r){if(n.isMoving&&n.elementRef.current){var i=e?r-e:0;n.x="toLeft"===n.props.direction?n.x-i/100*n.props.speed:n.x+i/100*n.props.speed,n.elementRef.current.style.transform="translate3d("+n.x+"px, 0, 0)",n.triggerNext(),n.shouldFinish()?(n.isMoving=!1,e=null,n.props.onFinish(n.props.id)):(e=r,window.requestAnimationFrame(t))}}))}},n.render=function(){return i.a.createElement("div",{className:"ticker__element",style:{willChange:"transform",position:"absolute",left:0,top:0,transform:"translate3d("+n.x+"px, 0, 0)"},ref:n.elementRef},n.state.children)},v(n,r)}return w(t,e),t}(i.a.Component);x.propTypes={children:Object(o.oneOfType)([o.node,o.func]).isRequired,direction:o.string.isRequired,speed:o.number.isRequired,id:o.string.isRequired,index:o.number.isRequired,mode:o.string.isRequired,move:o.bool.isRequired,onNext:o.func.isRequired,onFinish:o.func.isRequired,setRect:o.func.isRequired,start:o.bool.isRequired,offset:Object(o.oneOfType)([o.number,o.string]),prevRect:o.object,width:o.number},x.defaultProps={offset:void 0,width:void 0,prevRect:null};var y=function(e,t){return{elements:[{id:f(),index:0,height:0,start:!1,offset:e,rect:null,prevRect:null}],width:t,height:0}},R=function(e){function t(){var e,r,n;d(this,t);for(var o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];return r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.next=null,n.state=y(n.props.offset),n.tickerRef=i.a.createRef(),n.dOnResize=s((function(){return n.onResize()}),150),n.componentDidMount=function(){n.setState({width:n.tickerRef.current.offsetWidth,height:n.props.height}),window.addEventListener("resize",n.dOnResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.dOnResize)},n.setRect=function(e){var t=e.index,r=e.rect,i=(e.offset,e.nextOffset);n.setState((function(e){var o=e.elements.map((function(e){var n=e;return e.index===t&&(n.rect=r),e.index===t+1&&(n.prevRect=r,n.offset&&(n.offset=i)),n}));return{elements:o,height:n.props.height?e.height:c(o)}}))},n.onResize=function(){n.tickerRef.current&&n.tickerRef.current.offsetWidth!==n.state.width&&n.setState(m({},y(n.props.offset,n.tickerRef.current.offsetWidth),{height:n.props.height}))},n.onFinish=function(e){n.setState((function(t){return{elements:t.elements.filter((function(t){return t.id!==e}))}}))},n.onNext=function(e){e.id;var t=e.index,r=e.rect,i=e.nextOffset;n.setState((function(e){return{elements:[].concat(b(e.elements.map((function(e){var n=e;return e.index===t&&(n.rect=r),(0===e.index||e.offset||n.index===t+1)&&(n.start=!0),n}))),[{id:f(),index:e.elements[e.elements.length-1].index+1,height:0,start:!1,offset:i,rect:null,prevRect:r}])}}))},v(n,r)}return w(t,e),g(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"ticker",ref:this.tickerRef,style:{position:"relative",overflow:"hidden",height:this.state.height&&this.state.height+"px"}},this.state.width&&this.state.elements.map((function(t){return i.a.createElement(x,{key:t.id,id:t.id,index:t.index,start:t.start,offset:t.offset,prevRect:t.prevRect,direction:e.props.direction,mode:e.props.mode,move:e.props.move,speed:e.props.speed,onFinish:e.onFinish,onNext:e.onNext,setRect:e.setRect,width:e.state.width},e.props.children)})))}}]),t}(i.a.Component);R.propTypes={children:Object(o.oneOfType)([o.node,o.func]).isRequired,direction:o.string,mode:o.string,move:o.bool,offset:Object(o.oneOfType)([o.number,o.string]),speed:o.number,height:Object(o.oneOfType)([o.number,o.string])},R.defaultProps={offset:0,speed:5,direction:"toLeft",mode:"chain",move:!0,height:void 0},t.a=R}}]);
//# sourceMappingURL=3.8a5b7cde.chunk.js.map