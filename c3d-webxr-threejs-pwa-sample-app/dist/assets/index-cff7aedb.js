(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fs="165",Wo=0,Rs=1,Xo=2,ro=1,qo=2,jt=3,un=0,xt=1,$t=2,cn=0,$n=1,Cs=2,Ps=3,Ds=4,Yo=5,wn=100,Ko=101,jo=102,$o=103,Zo=104,Jo=200,Qo=201,ec=202,tc=203,is=204,rs=205,nc=206,ic=207,rc=208,sc=209,ac=210,oc=211,cc=212,lc=213,hc=214,uc=0,dc=1,fc=2,Qi=3,pc=4,mc=5,gc=6,_c=7,so=0,vc=1,xc=2,ln=0,Sc=1,Mc=2,yc=3,Ec=4,Tc=5,Ac=6,bc=7,ao=300,Qn=301,ei=302,ss=303,as=304,cr=306,os=1e3,Cn=1001,cs=1002,Rt=1003,wc=1004,wi=1005,Ut=1006,Sr=1007,Pn=1008,dn=1009,Rc=1010,Cc=1011,er=1012,oo=1013,ti=1014,on=1015,lr=1016,co=1017,lo=1018,ni=1020,Pc=35902,Dc=1021,Lc=1022,zt=1023,Uc=1024,Ic=1025,Zn=1026,ii=1027,Nc=1028,ho=1029,Oc=1030,uo=1031,fo=1033,Mr=33776,yr=33777,Er=33778,Tr=33779,Ls=35840,Us=35841,Is=35842,Ns=35843,Os=36196,Fs=37492,Bs=37496,zs=37808,Hs=37809,Gs=37810,Vs=37811,ks=37812,Ws=37813,Xs=37814,qs=37815,Ys=37816,Ks=37817,js=37818,$s=37819,Zs=37820,Js=37821,Ar=36492,Qs=36494,ea=36495,Fc=36283,ta=36284,na=36285,ia=36286,Bc=3200,zc=3201,po=0,Hc=1,an="",Ot="srgb",pn="srgb-linear",ps="display-p3",hr="display-p3-linear",tr="linear",Ke="srgb",nr="rec709",ir="p3",Ln=7680,ra=519,Gc=512,Vc=513,kc=514,mo=515,Wc=516,Xc=517,qc=518,Yc=519,sa=35044,aa="300 es",Zt=2e3,rr=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,ls=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Kc(i,e){return(i%e+e)%e}function wr(i,e,t){return(1-t)*i+t*e}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(e,t,n,r,s,a,o,c,l){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],f=n[2],m=n[5],v=n[8],g=r[0],d=r[3],h=r[6],E=r[1],y=r[4],T=r[7],O=r[2],R=r[5],w=r[8];return s[0]=a*g+o*E+c*O,s[3]=a*d+o*y+c*R,s[6]=a*h+o*T+c*w,s[1]=l*g+u*E+p*O,s[4]=l*d+u*y+p*R,s[7]=l*h+u*T+p*w,s[2]=f*g+m*E+v*O,s[5]=f*d+m*y+v*R,s[8]=f*h+m*T+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,f=o*c-u*s,m=l*s-a*c,v=t*p+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=p*g,e[1]=(r*l-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=f*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rr.makeScale(e,t)),this}rotate(e){return this.premultiply(Rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new be;function go(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jc(){const i=sr("canvas");return i.style.display="block",i}const oa={};function _o(i){i in oa||(oa[i]=!0,console.warn(i))}function $c(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ca=new be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),la=new be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ri={[pn]:{transfer:tr,primaries:nr,toReference:i=>i,fromReference:i=>i},[Ot]:{transfer:Ke,primaries:nr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hr]:{transfer:tr,primaries:ir,toReference:i=>i.applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca)},[ps]:{transfer:Ke,primaries:ir,toReference:i=>i.convertSRGBToLinear().applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca).convertLinearToSRGB()}},Zc=new Set([pn,hr]),Xe={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ri[e].toReference,r=Ri[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ri[i].primaries},getTransfer:function(i){return i===an?tr:Ri[i].transfer}};function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Un;class Jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Un===void 0&&(Un=sr("canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Un}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pr(r[a].image)):s.push(Pr(r[a]))}else s=Pr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let el=0;class St extends ai{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Cn,r=Cn,s=Ut,a=Pn,o=zt,c=dn,l=St.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=Si(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ao;St.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],p=c[8],f=c[1],m=c[5],v=c[9],g=c[2],d=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(p-g)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+g)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,T=(m+1)/2,O=(h+1)/2,R=(u+f)/4,w=(p+g)/4,U=(v+d)/4;return y>T&&y>O?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=w/n):T>O?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=R/r,s=U/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=w/s,r=U/s),this.set(n,r,s,t),this}let E=Math.sqrt((d-v)*(d-v)+(p-g)*(p-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-v)/E,this.y=(p-g)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tl extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xo extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nl extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],p=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(p!==g||c!==f||l!==m||u!==v){let d=1-o;const h=c*f+l*m+u*v+p*g,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const O=Math.sqrt(y),R=Math.atan2(O,h*E);d=Math.sin(d*R)/O,o=Math.sin(o*R)/O}const T=o*E;if(c=c*d+f*T,l=l*d+m*T,u=u*d+v*T,p=p*d+g*T,d===1-o){const O=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=O,l*=O,u*=O,p*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*p+c*m-l*f,e[t+1]=c*v+u*f+l*p-o*m,e[t+2]=l*v+u*m+o*f-c*p,e[t+3]=u*v-o*p-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),p=o(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*u*p+l*m*v,this._y=l*m*p-f*u*v,this._z=l*u*v+f*m*p,this._w=l*u*p-f*m*v;break;case"YXZ":this._x=f*u*p+l*m*v,this._y=l*m*p-f*u*v,this._z=l*u*v-f*m*p,this._w=l*u*p+f*m*v;break;case"ZXY":this._x=f*u*p-l*m*v,this._y=l*m*p+f*u*v,this._z=l*u*v+f*m*p,this._w=l*u*p-f*m*v;break;case"ZYX":this._x=f*u*p-l*m*v,this._y=l*m*p+f*u*v,this._z=l*u*v-f*m*p,this._w=l*u*p+f*m*v;break;case"YZX":this._x=f*u*p+l*m*v,this._y=l*m*p+f*u*v,this._z=l*u*v-f*m*p,this._w=l*u*p-f*m*v;break;case"XZY":this._x=f*u*p-l*m*v,this._y=l*m*p-f*u*v,this._z=l*u*v+f*m*p,this._w=l*u*p+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),p=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*u,this.y=n+c*u+o*l-s*p,this.z=r+c*p+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new F,ha=new Mi;class yi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pt):Pt.fromBufferAttribute(s,a),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ci.copy(n.boundingBox)),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),Pi.subVectors(this.max,di),In.subVectors(e.a,di),Nn.subVectors(e.b,di),On.subVectors(e.c,di),Qt.subVectors(Nn,In),en.subVectors(On,Nn),_n.subVectors(In,On);let t=[0,-Qt.z,Qt.y,0,-en.z,en.y,0,-_n.z,_n.y,Qt.z,0,-Qt.x,en.z,0,-en.x,_n.z,0,-_n.x,-Qt.y,Qt.x,0,-en.y,en.x,0,-_n.y,_n.x,0];return!Lr(t,In,Nn,On,Pi)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,In,Nn,On,Pi))?!1:(Di.crossVectors(Qt,en),t=[Di.x,Di.y,Di.z],Lr(t,In,Nn,On,Pi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new F,new F,new F,new F,new F,new F,new F,new F],Pt=new F,Ci=new yi,In=new F,Nn=new F,On=new F,Qt=new F,en=new F,_n=new F,di=new F,Pi=new F,Di=new F,vn=new F;function Lr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){vn.fromArray(i,s);const o=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),c=e.dot(vn),l=t.dot(vn),u=n.dot(vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const il=new yi,fi=new F,Ur=new F;class ur{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):il.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(Ur)),this.expandByPoint(fi.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new F,Ir=new F,Li=new F,tn=new F,Nr=new F,Ui=new F,Or=new F;class ms{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ir.copy(e).add(t).multiplyScalar(.5),Li.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(Ir);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Li),o=tn.dot(this.direction),c=-tn.dot(Li),l=tn.lengthSq(),u=Math.abs(1-a*a);let p,f,m,v;if(u>0)if(p=a*c-o,f=a*o-c,v=s*u,p>=0)if(f>=-v)if(f<=v){const g=1/u;p*=g,f*=g,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+l):f<=v?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+l);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ir).addScaledVector(Li,f),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),r=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,r,s){Nr.subVectors(t,e),Ui.subVectors(n,e),Or.crossVectors(Nr,Ui);let a=this.direction.dot(Or),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tn.subVectors(this.origin,e);const c=o*this.direction.dot(Ui.crossVectors(tn,Ui));if(c<0)return null;const l=o*this.direction.dot(Nr.cross(tn));if(l<0||c+l>a)return null;const u=-o*tn.dot(Or);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,a,o,c,l,u,p,f,m,v,g,d){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,p,f,m,v,g,d)}set(e,t,n,r,s,a,o,c,l,u,p,f,m,v,g,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=p,h[14]=f,h[3]=m,h[7]=v,h[11]=g,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Fn.setFromMatrixColumn(e,0).length(),s=1/Fn.setFromMatrixColumn(e,1).length(),a=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*p,v=o*u,g=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*p,v=l*u,g=l*p;t[0]=f+g*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*p,v=l*u,g=l*p;t[0]=f-g*o,t[4]=-a*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*p,v=o*u,g=o*p;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+g,t[1]=c*p,t[5]=g*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=g-f*p,t[8]=v*p+m,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*p+v,t[10]=f-g*p}else if(e.order==="XZY"){const f=a*c,m=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=f*p+g,t[5]=a*u,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*u,t[10]=g*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rl,e,sl)}lookAt(e,t,n){const r=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),nn.crossVectors(n,yt),nn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),nn.crossVectors(n,yt)),nn.normalize(),Ii.crossVectors(yt,nn),r[0]=nn.x,r[4]=Ii.x,r[8]=yt.x,r[1]=nn.y,r[5]=Ii.y,r[9]=yt.y,r[2]=nn.z,r[6]=Ii.z,r[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],f=n[9],m=n[13],v=n[2],g=n[6],d=n[10],h=n[14],E=n[3],y=n[7],T=n[11],O=n[15],R=r[0],w=r[4],U=r[8],M=r[12],_=r[1],P=r[5],B=r[9],V=r[13],q=r[2],A=r[6],C=r[10],k=r[14],H=r[3],ee=r[7],$=r[11],ue=r[15];return s[0]=a*R+o*_+c*q+l*H,s[4]=a*w+o*P+c*A+l*ee,s[8]=a*U+o*B+c*C+l*$,s[12]=a*M+o*V+c*k+l*ue,s[1]=u*R+p*_+f*q+m*H,s[5]=u*w+p*P+f*A+m*ee,s[9]=u*U+p*B+f*C+m*$,s[13]=u*M+p*V+f*k+m*ue,s[2]=v*R+g*_+d*q+h*H,s[6]=v*w+g*P+d*A+h*ee,s[10]=v*U+g*B+d*C+h*$,s[14]=v*M+g*V+d*k+h*ue,s[3]=E*R+y*_+T*q+O*H,s[7]=E*w+y*P+T*A+O*ee,s[11]=E*U+y*B+T*C+O*$,s[15]=E*M+y*V+T*k+O*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],f=e[10],m=e[14],v=e[3],g=e[7],d=e[11],h=e[15];return v*(+s*c*p-r*l*p-s*o*f+n*l*f+r*o*m-n*c*m)+g*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+d*(+t*l*p-t*o*m-s*a*p+n*a*m+s*o*u-n*l*u)+h*(-r*o*u-t*c*p+t*o*f+r*a*p-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],f=e[10],m=e[11],v=e[12],g=e[13],d=e[14],h=e[15],E=p*d*l-g*f*l+g*c*m-o*d*m-p*c*h+o*f*h,y=v*f*l-u*d*l-v*c*m+a*d*m+u*c*h-a*f*h,T=u*g*l-v*p*l+v*o*m-a*g*m-u*o*h+a*p*h,O=v*p*c-u*g*c-v*o*f+a*g*f+u*o*d-a*p*d,R=t*E+n*y+r*T+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(g*f*s-p*d*s-g*r*m+n*d*m+p*r*h-n*f*h)*w,e[2]=(o*d*s-g*c*s+g*r*l-n*d*l-o*r*h+n*c*h)*w,e[3]=(p*c*s-o*f*s-p*r*l+n*f*l+o*r*m-n*c*m)*w,e[4]=y*w,e[5]=(u*d*s-v*f*s+v*r*m-t*d*m-u*r*h+t*f*h)*w,e[6]=(v*c*s-a*d*s-v*r*l+t*d*l+a*r*h-t*c*h)*w,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*w,e[8]=T*w,e[9]=(v*p*s-u*g*s-v*n*m+t*g*m+u*n*h-t*p*h)*w,e[10]=(a*g*s-v*o*s+v*n*l-t*g*l-a*n*h+t*o*h)*w,e[11]=(u*o*s-a*p*s-u*n*l+t*p*l+a*n*m-t*o*m)*w,e[12]=O*w,e[13]=(u*g*r-v*p*r+v*n*f-t*g*f-u*n*d+t*p*d)*w,e[14]=(v*o*r-a*g*r-v*n*c+t*g*c+a*n*d-t*o*d)*w,e[15]=(a*p*r-u*o*r+u*n*c-t*p*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,p=o+o,f=s*l,m=s*u,v=s*p,g=a*u,d=a*p,h=o*p,E=c*l,y=c*u,T=c*p,O=n.x,R=n.y,w=n.z;return r[0]=(1-(g+h))*O,r[1]=(m+T)*O,r[2]=(v-y)*O,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(f+h))*R,r[6]=(d+E)*R,r[7]=0,r[8]=(v+y)*w,r[9]=(d-E)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Fn.set(r[0],r[1],r[2]).length();const a=Fn.set(r[4],r[5],r[6]).length(),o=Fn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const l=1/s,u=1/a,p=1/o;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=p,Dt.elements[9]*=p,Dt.elements[10]*=p,t.setFromRotationMatrix(Dt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Zt){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(o===Zt)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===rr)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Zt){const c=this.elements,l=1/(t-e),u=1/(n-r),p=1/(a-s),f=(t+e)*l,m=(n+r)*u;let v,g;if(o===Zt)v=(a+s)*p,g=-2*p;else if(o===rr)v=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fn=new F,Dt=new Je,rl=new F(0,0,0),sl=new F(1,1,1),nn=new F,Ii=new F,yt=new F,ua=new Je,da=new Mi;class Vt{constructor(e=0,t=0,n=0,r=Vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vt.DEFAULT_ORDER="XYZ";class gs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let al=0;const fa=new F,Bn=new Mi,qt=new Je,Ni=new F,pi=new F,ol=new F,cl=new Mi,pa=new F(1,0,0),ma=new F(0,1,0),ga=new F(0,0,1),_a={type:"added"},ll={type:"removed"},zn={type:"childadded",child:null},Fr={type:"childremoved",child:null};class ft extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new F,t=new Vt,n=new Mi,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new be}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(pa,e)}rotateY(e){return this.rotateOnAxis(ma,e)}rotateZ(e){return this.rotateOnAxis(ga,e)}translateOnAxis(e,t){return fa.copy(e).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pa,e)}translateY(e){return this.translateOnAxis(ma,e)}translateZ(e){return this.translateOnAxis(ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ni.copy(e):Ni.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(pi,Ni,this.up):qt.lookAt(Ni,pi,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Bn.setFromRotationMatrix(qt),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_a),zn.child=e,this.dispatchEvent(zn),zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ll),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_a),zn.child=e,this.dispatchEvent(zn),zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,ol),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,cl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new F(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new F,Yt=new F,Br=new F,Kt=new F,Hn=new F,Gn=new F,va=new F,zr=new F,Hr=new F,Gr=new F;class Bt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Lt.subVectors(e,t),r.cross(Lt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Lt.subVectors(r,t),Yt.subVectors(n,t),Br.subVectors(e,t);const a=Lt.dot(Lt),o=Lt.dot(Yt),c=Lt.dot(Br),l=Yt.dot(Yt),u=Yt.dot(Br),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(l*c-o*u)*f,v=(a*u-o*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kt)===null?!1:Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Kt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kt.x),c.addScaledVector(a,Kt.y),c.addScaledVector(o,Kt.z),c)}static isFrontFacing(e,t,n,r){return Lt.subVectors(n,t),Yt.subVectors(e,t),Lt.cross(Yt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Lt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Hn.subVectors(r,n),Gn.subVectors(s,n),zr.subVectors(e,n);const c=Hn.dot(zr),l=Gn.dot(zr);if(c<=0&&l<=0)return t.copy(n);Hr.subVectors(e,r);const u=Hn.dot(Hr),p=Gn.dot(Hr);if(u>=0&&p<=u)return t.copy(r);const f=c*p-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Hn,a);Gr.subVectors(e,s);const m=Hn.dot(Gr),v=Gn.dot(Gr);if(v>=0&&m<=v)return t.copy(s);const g=m*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Gn,o);const d=u*v-m*p;if(d<=0&&p-u>=0&&m-v>=0)return va.subVectors(s,r),o=(p-u)/(p-u+(m-v)),t.copy(r).addScaledVector(va,o);const h=1/(d+g+f);return a=g*h,o=f*h,t.copy(n).addScaledVector(Hn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Kc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=So[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Xe.fromWorkingColorSpace(dt.copy(this),e),Math.round(vt(dt.r*255,0,255))*65536+Math.round(vt(dt.g*255,0,255))*256+Math.round(vt(dt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,r=dt.g,s=dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Ot){Xe.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,r=dt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),this.setHSL(rn.h+e,rn.s+t,rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Oi);const n=wr(rn.h,Oi.h,t),r=wr(rn.s,Oi.s,t),s=wr(rn.l,Oi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new Be;Be.NAMES=So;let hl=0;class oi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=$n,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==rs&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mo extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new F,Fi=new Oe;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),e}}class yo extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eo extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ul=0;const bt=new Je,kr=new ft,Vn=new F,Et=new yi,mi=new yi,ot=new F;class Ct extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(go(e)?Eo:yo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bt.makeRotationFromQuaternion(e),this.applyMatrix4(bt),this}rotateX(e){return bt.makeRotationX(e),this.applyMatrix4(bt),this}rotateY(e){return bt.makeRotationY(e),this.applyMatrix4(bt),this}rotateZ(e){return bt.makeRotationZ(e),this.applyMatrix4(bt),this}translate(e,t,n){return bt.makeTranslation(e,t,n),this.applyMatrix4(bt),this}scale(e,t,n){return bt.makeScale(e,t,n),this.applyMatrix4(bt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(Et.min,mi.min),Et.expandByPoint(ot),ot.addVectors(Et.max,mi.max),Et.expandByPoint(ot)):(Et.expandByPoint(mi.min),Et.expandByPoint(mi.max))}Et.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ot.fromBufferAttribute(o,l),c&&(Vn.fromBufferAttribute(e,l),ot.add(Vn)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new F,c[U]=new F;const l=new F,u=new F,p=new F,f=new Oe,m=new Oe,v=new Oe,g=new F,d=new F;function h(U,M,_){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,M),p.fromBufferAttribute(n,_),f.fromBufferAttribute(s,U),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,_),u.sub(l),p.sub(l),m.sub(f),v.sub(f);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(P),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(P),o[U].add(g),o[M].add(g),o[_].add(g),c[U].add(d),c[M].add(d),c[_].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,M=E.length;U<M;++U){const _=E[U],P=_.start,B=_.count;for(let V=P,q=P+B;V<q;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new F,T=new F,O=new F,R=new F;function w(U){O.fromBufferAttribute(r,U),R.copy(O);const M=o[U];y.copy(M),y.sub(O.multiplyScalar(O.dot(M))).normalize(),T.crossVectors(R,M);const P=T.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,P)}for(let U=0,M=E.length;U<M;++U){const _=E[U],P=_.start,B=_.count;for(let V=P,q=P+B;V<q;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,p=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,d),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let g=0,d=c.length;g<d;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new Gt(f,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,p=l.length;u<p;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,f=l.length;p<f;p++){const m=l[p];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let f=0,m=p.length;f<m;f++)u.push(p[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new Je,xn=new ms,Bi=new ur,Sa=new F,kn=new F,Wn=new F,Xn=new F,Wr=new F,zi=new F,Hi=new Oe,Gi=new Oe,Vi=new Oe,Ma=new F,ya=new F,Ea=new F,ki=new F,Wi=new F;class Ht extends ft{constructor(e=new Ct,t=new Mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],p=s[c];u!==0&&(Wr.fromBufferAttribute(p,e),a?zi.addScaledVector(Wr,u):zi.addScaledVector(Wr.sub(t),u))}t.add(zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(Bi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Bi,Sa)===null||xn.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(xa.copy(s).invert(),xn.copy(e.ray).applyMatrix4(xa),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const d=f[v],h=a[d.materialIndex],E=Math.max(d.start,m.start),y=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,O=y;T<O;T+=3){const R=o.getX(T),w=o.getX(T+1),U=o.getX(T+2);r=Xi(this,h,e,n,l,u,p,R,w,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let d=v,h=g;d<h;d+=3){const E=o.getX(d),y=o.getX(d+1),T=o.getX(d+2);r=Xi(this,a,e,n,l,u,p,E,y,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const d=f[v],h=a[d.materialIndex],E=Math.max(d.start,m.start),y=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,O=y;T<O;T+=3){const R=T,w=T+1,U=T+2;r=Xi(this,h,e,n,l,u,p,R,w,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let d=v,h=g;d<h;d+=3){const E=d,y=d+1,T=d+2;r=Xi(this,a,e,n,l,u,p,E,y,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function dl(i,e,t,n,r,s,a,o){let c;if(e.side===xt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===un,o),c===null)return null;Wi.copy(o),Wi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wi);return l<t.near||l>t.far?null:{distance:l,point:Wi.clone(),object:i}}function Xi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,kn),i.getVertexPosition(c,Wn),i.getVertexPosition(l,Xn);const u=dl(i,e,t,n,kn,Wn,Xn,ki);if(u){r&&(Hi.fromBufferAttribute(r,o),Gi.fromBufferAttribute(r,c),Vi.fromBufferAttribute(r,l),u.uv=Bt.getInterpolation(ki,kn,Wn,Xn,Hi,Gi,Vi,new Oe)),s&&(Hi.fromBufferAttribute(s,o),Gi.fromBufferAttribute(s,c),Vi.fromBufferAttribute(s,l),u.uv1=Bt.getInterpolation(ki,kn,Wn,Xn,Hi,Gi,Vi,new Oe)),a&&(Ma.fromBufferAttribute(a,o),ya.fromBufferAttribute(a,c),Ea.fromBufferAttribute(a,l),u.normal=Bt.getInterpolation(ki,kn,Wn,Xn,Ma,ya,Ea,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new F,materialIndex:0};Bt.getNormal(kn,Wn,Xn,p.normal),u.face=p}return u}class ci extends Ct{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function v(g,d,h,E,y,T,O,R,w,U,M){const _=T/w,P=O/U,B=T/2,V=O/2,q=R/2,A=w+1,C=U+1;let k=0,H=0;const ee=new F;for(let $=0;$<C;$++){const ue=$*P-V;for(let Pe=0;Pe<A;Pe++){const Ge=Pe*_-B;ee[g]=Ge*E,ee[d]=ue*y,ee[h]=q,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[d]=0,ee[h]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),p.push(Pe/w),p.push(1-$/U),k+=1}}for(let $=0;$<U;$++)for(let ue=0;ue<w;ue++){const Pe=f+ue+A*$,Ge=f+ue+A*($+1),X=f+(ue+1)+A*($+1),Z=f+(ue+1)+A*$;c.push(Pe,Ge,Z),c.push(Ge,X,Z),H+=6}o.addGroup(m,H,M),m+=H,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=ri(i[t]);for(const r in n)e[r]=n[r]}return e}function fl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function To(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const pl={clone:ri,merge:mt};var ml=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ml,this.fragmentShader=gl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=fl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ao extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sn=new F,Ta=new Oe,Aa=new Oe;class wt extends Ao{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sn.x,sn.y).multiplyScalar(-e/sn.z),sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sn.x,sn.y).multiplyScalar(-e/sn.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,Aa),t.subVectors(Aa,Ta)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Yn=1;class _l extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wt(qn,Yn,e,t);r.layers=this.layers,this.add(r);const s=new wt(qn,Yn,e,t);s.layers=this.layers,this.add(s);const a=new wt(qn,Yn,e,t);a.layers=this.layers,this.add(a);const o=new wt(qn,Yn,e,t);o.layers=this.layers,this.add(o);const c=new wt(qn,Yn,e,t);c.layers=this.layers,this.add(c);const l=new wt(qn,Yn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bo extends St{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qn,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vl extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ci(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:cn});s.uniforms.tEquirect.value=t;const a=new Ht(r,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ut),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Xr=new F,xl=new F,Sl=new be;class Tn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xr.subVectors(n,t).cross(xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sl.getNormalMatrix(e),r=this.coplanarPoint(Xr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new ur,qi=new F;class wo{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],p=r[6],f=r[7],m=r[8],v=r[9],g=r[10],d=r[11],h=r[12],E=r[13],y=r[14],T=r[15];if(n[0].setComponents(c-s,f-l,d-m,T-h).normalize(),n[1].setComponents(c+s,f+l,d+m,T+h).normalize(),n[2].setComponents(c+a,f+u,d+v,T+E).normalize(),n[3].setComponents(c-a,f-u,d-v,T-E).normalize(),n[4].setComponents(c-o,f-p,d-g,T-y).normalize(),t===Zt)n[5].setComponents(c+o,f+p,d+g,T+y).normalize();else if(t===rr)n[5].setComponents(o,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ml(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const u=c.array,p=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,o),p.count===-1&&f.length===0&&i.bufferSubData(l,0,u),f.length!==0){for(let m=0,v=f.length;m<v;m++){const g=f[m];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(l,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class dr extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,p=e/o,f=t/c,m=[],v=[],g=[],d=[];for(let h=0;h<u;h++){const E=h*f-a;for(let y=0;y<l;y++){const T=y*p-s;v.push(T,-E,0),g.push(0,0,1),d.push(y/o),d.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const y=E+l*h,T=E+l*(h+1),O=E+1+l*(h+1),R=E+1+l*h;m.push(y,T,R),m.push(T,O,R)}this.setIndex(m),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var yl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,El=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Al=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ll=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ul=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Il=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ol=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ql=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$l=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ql=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ph=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ih=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ru=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:yl,alphahash_pars_fragment:El,alphamap_fragment:Tl,alphamap_pars_fragment:Al,alphatest_fragment:bl,alphatest_pars_fragment:wl,aomap_fragment:Rl,aomap_pars_fragment:Cl,batching_pars_vertex:Pl,batching_vertex:Dl,begin_vertex:Ll,beginnormal_vertex:Ul,bsdfs:Il,iridescence_fragment:Nl,bumpmap_pars_fragment:Ol,clipping_planes_fragment:Fl,clipping_planes_pars_fragment:Bl,clipping_planes_pars_vertex:zl,clipping_planes_vertex:Hl,color_fragment:Gl,color_pars_fragment:Vl,color_pars_vertex:kl,color_vertex:Wl,common:Xl,cube_uv_reflection_fragment:ql,defaultnormal_vertex:Yl,displacementmap_pars_vertex:Kl,displacementmap_vertex:jl,emissivemap_fragment:$l,emissivemap_pars_fragment:Zl,colorspace_fragment:Jl,colorspace_pars_fragment:Ql,envmap_fragment:eh,envmap_common_pars_fragment:th,envmap_pars_fragment:nh,envmap_pars_vertex:ih,envmap_physical_pars_fragment:ph,envmap_vertex:rh,fog_vertex:sh,fog_pars_vertex:ah,fog_fragment:oh,fog_pars_fragment:ch,gradientmap_pars_fragment:lh,lightmap_pars_fragment:hh,lights_lambert_fragment:uh,lights_lambert_pars_fragment:dh,lights_pars_begin:fh,lights_toon_fragment:mh,lights_toon_pars_fragment:gh,lights_phong_fragment:_h,lights_phong_pars_fragment:vh,lights_physical_fragment:xh,lights_physical_pars_fragment:Sh,lights_fragment_begin:Mh,lights_fragment_maps:yh,lights_fragment_end:Eh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:Ah,logdepthbuf_pars_vertex:bh,logdepthbuf_vertex:wh,map_fragment:Rh,map_pars_fragment:Ch,map_particle_fragment:Ph,map_particle_pars_fragment:Dh,metalnessmap_fragment:Lh,metalnessmap_pars_fragment:Uh,morphinstance_vertex:Ih,morphcolor_vertex:Nh,morphnormal_vertex:Oh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Bh,normal_fragment_begin:zh,normal_fragment_maps:Hh,normal_pars_fragment:Gh,normal_pars_vertex:Vh,normal_vertex:kh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:Kh,opaque_fragment:jh,packing:$h,premultiplied_alpha_fragment:Zh,project_vertex:Jh,dithering_fragment:Qh,dithering_pars_fragment:eu,roughnessmap_fragment:tu,roughnessmap_pars_fragment:nu,shadowmap_pars_fragment:iu,shadowmap_pars_vertex:ru,shadowmap_vertex:su,shadowmask_pars_fragment:au,skinbase_vertex:ou,skinning_pars_vertex:cu,skinning_vertex:lu,skinnormal_vertex:hu,specularmap_fragment:uu,specularmap_pars_fragment:du,tonemapping_fragment:fu,tonemapping_pars_fragment:pu,transmission_fragment:mu,transmission_pars_fragment:gu,uv_pars_fragment:_u,uv_pars_vertex:vu,uv_vertex:xu,worldpos_vertex:Su,background_vert:Mu,background_frag:yu,backgroundCube_vert:Eu,backgroundCube_frag:Tu,cube_vert:Au,cube_frag:bu,depth_vert:wu,depth_frag:Ru,distanceRGBA_vert:Cu,distanceRGBA_frag:Pu,equirect_vert:Du,equirect_frag:Lu,linedashed_vert:Uu,linedashed_frag:Iu,meshbasic_vert:Nu,meshbasic_frag:Ou,meshlambert_vert:Fu,meshlambert_frag:Bu,meshmatcap_vert:zu,meshmatcap_frag:Hu,meshnormal_vert:Gu,meshnormal_frag:Vu,meshphong_vert:ku,meshphong_frag:Wu,meshphysical_vert:Xu,meshphysical_frag:qu,meshtoon_vert:Yu,meshtoon_frag:Ku,points_vert:ju,points_frag:$u,shadow_vert:Zu,shadow_frag:Ju,sprite_vert:Qu,sprite_frag:ed},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ft={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ft.physical={uniforms:mt([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Yi={r:0,b:0,g:0},Mn=new Vt,td=new Je;function nd(i,e,t,n,r,s,a){const o=new Be(0);let c=s===!0?0:1,l,u,p=null,f=0,m=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function g(E){let y=!1;const T=v(E);T===null?h(o,c):T&&T.isColor&&(h(T,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,y){const T=v(y);T&&(T.isCubeTexture||T.mapping===cr)?(u===void 0&&(u=new Ht(new ci(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ri(Ft.backgroundCube.uniforms),vertexShader:Ft.backgroundCube.vertexShader,fragmentShader:Ft.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mn.copy(y.backgroundRotation),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(td.makeRotationFromEuler(Mn)),u.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Ke,(p!==T||f!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,f=T.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ht(new dr(2,2),new fn({name:"BackgroundMaterial",uniforms:ri(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,p=T,f=T.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,y){E.getRGB(Yi,To(i)),n.buffers.color.setClear(Yi.r,Yi.g,Yi.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(o,c)},render:g,addToRenderList:d}}function id(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(_,P,B,V,q){let A=!1;const C=p(V,B,P);s!==C&&(s=C,l(s.object)),A=m(_,V,B,q),A&&v(_,V,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,T(_,P,B,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function p(_,P,B){const V=B.wireframe===!0;let q=n[_.id];q===void 0&&(q={},n[_.id]=q);let A=q[P.id];A===void 0&&(A={},q[P.id]=A);let C=A[V];return C===void 0&&(C=f(c()),A[V]=C),C}function f(_){const P=[],B=[],V=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:V,object:_,attributes:{},index:null}}function m(_,P,B,V){const q=s.attributes,A=P.attributes;let C=0;const k=B.getAttributes();for(const H in k)if(k[H].location>=0){const $=q[H];let ue=A[H];if(ue===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),$===void 0||$.attribute!==ue||ue&&$.data!==ue.data)return!0;C++}return s.attributesNum!==C||s.index!==V}function v(_,P,B,V){const q={},A=P.attributes;let C=0;const k=B.getAttributes();for(const H in k)if(k[H].location>=0){let $=A[H];$===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&($=_.instanceColor));const ue={};ue.attribute=$,$&&$.data&&(ue.data=$.data),q[H]=ue,C++}s.attributes=q,s.attributesNum=C,s.index=V}function g(){const _=s.newAttributes;for(let P=0,B=_.length;P<B;P++)_[P]=0}function d(_){h(_,0)}function h(_,P){const B=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;B[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),q[_]!==P&&(i.vertexAttribDivisor(_,P),q[_]=P)}function E(){const _=s.newAttributes,P=s.enabledAttributes;for(let B=0,V=P.length;B<V;B++)P[B]!==_[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function y(_,P,B,V,q,A,C){C===!0?i.vertexAttribIPointer(_,P,B,q,A):i.vertexAttribPointer(_,P,B,V,q,A)}function T(_,P,B,V){g();const q=V.attributes,A=B.getAttributes(),C=P.defaultAttributeValues;for(const k in A){const H=A[k];if(H.location>=0){let ee=q[k];if(ee===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor)),ee!==void 0){const $=ee.normalized,ue=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;const Ge=Pe.buffer,X=Pe.type,Z=Pe.bytesPerElement,fe=X===i.INT||X===i.UNSIGNED_INT||ee.gpuType===oo;if(ee.isInterleavedBufferAttribute){const oe=ee.data,De=oe.stride,we=ee.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<H.locationSize;ze++)h(H.location+ze,oe.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<H.locationSize;ze++)d(H.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ze=0;ze<H.locationSize;ze++)y(H.location+ze,ue/H.locationSize,X,$,De*Z,(we+ue/H.locationSize*ze)*Z,fe)}else{if(ee.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)h(H.location+oe,ee.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let oe=0;oe<H.locationSize;oe++)d(H.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,ue/H.locationSize,X,$,ue*Z,ue/H.locationSize*oe*Z,fe)}}else if(C!==void 0){const $=C[k];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}E()}function O(){U();for(const _ in n){const P=n[_];for(const B in P){const V=P[B];for(const q in V)u(V[q].object),delete V[q];delete P[B]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const P=n[_.id];for(const B in P){const V=P[B];for(const q in V)u(V[q].object),delete V[q];delete P[B]}delete n[_.id]}function w(_){for(const P in n){const B=n[P];if(B[_.id]===void 0)continue;const V=B[_.id];for(const q in V)u(V[q].object),delete V[q];delete B[_.id]}}function U(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:d,disableUnusedAttributes:E}}function rd(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,p){p!==0&&(i.drawArraysInstanced(n,l,u,p),t.update(u,n,p))}function o(l,u,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<p;m++)this.render(l[m],u[m]);else{f.multiDrawArraysWEBGL(n,l,0,u,0,p);let m=0;for(let v=0;v<p;v++)m+=u[v];t.update(m,n,1)}}function c(l,u,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,p);let v=0;for(let g=0;g<p;g++)v+=u[g];for(let g=0;g<f.length;g++)t.update(v,n,f[g])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const w=R===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==on&&!w)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:h,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:T,maxSamples:O}}function ad(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Tn,o=new be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,g=p.clipIntersection,d=p.clipShadows,h=i.get(p);if(!r||v===null||v.length===0||s&&!d)s?u(null):l();else{const E=s?0:n,y=E*4;let T=h.clippingState||null;c.value=T,T=u(v,f,y,m);for(let O=0;O!==y;++O)T[O]=t[O];h.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,f,m,v){const g=p!==null?p.length:0;let d=null;if(g!==0){if(d=c.value,v!==!0||d===null){const h=m+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<h)&&(d=new Float32Array(h));for(let y=0,T=m;y!==g;++y,T+=4)a.copy(p[y]).applyMatrix4(E,o),a.normal.toArray(d,T),d[T+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function od(i){let e=new WeakMap;function t(a,o){return o===ss?a.mapping=Qn:o===as&&(a.mapping=ei),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ss||o===as)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new vl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class cd extends Ao{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jn=4,ba=[.125,.215,.35,.446,.526,.582],Rn=20,qr=new cd,wa=new Be;let Yr=null,Kr=0,jr=0,$r=!1;const An=(1+Math.sqrt(5))/2,Kn=1/An,Ra=[new F(-An,Kn,0),new F(An,Kn,0),new F(-Kn,0,An),new F(Kn,0,An),new F(0,An,-Kn),new F(0,An,Kn),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=La(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,Kr,jr),this._renderer.xr.enabled=$r,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:lr,format:zt,colorSpace:pn,depthBuffer:!1},r=Pa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ld(s)),this._blurMaterial=hd(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,r){const o=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(wa),u.toneMapping=ln,u.autoClear=!1;const m=new Mo({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),v=new Ht(new ci,m);let g=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(wa),g=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):E===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const y=this._cubeSize;Ki(r,E*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qn||e.mapping===ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=La()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ki(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ra[(r-s-1)%Ra.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Ht(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),g=s/v,d=isFinite(s)?1+Math.floor(u*g):Rn;d>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Rn}`);const h=[];let E=0;for(let w=0;w<Rn;++w){const U=w/g,M=Math.exp(-U*U/2);h.push(M),w===0?E+=M:w<d&&(E+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/E;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const T=this._sizeLods[r],O=3*T*(r>y-jn?r-y+jn:0),R=4*(this._cubeSize-T);Ki(t,O,R,3*T,2*T),c.setRenderTarget(t),c.render(p,qr)}}function ld(i){const e=[],t=[],n=[];let r=i;const s=i-jn+1+ba.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-jn?c=ba[a-i+jn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,p=1+l,f=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,v=6,g=3,d=2,h=1,E=new Float32Array(g*v*m),y=new Float32Array(d*v*m),T=new Float32Array(h*v*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,U=R>2?0:-1,M=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];E.set(M,g*v*R),y.set(f,d*v*R);const _=[R,R,R,R,R,R];T.set(_,h*v*R)}const O=new Ct;O.setAttribute("position",new Gt(E,g)),O.setAttribute("uv",new Gt(y,d)),O.setAttribute("faceIndex",new Gt(T,h)),e.push(O),r>jn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pa(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hd(i,e,t){const n=new Float32Array(Rn),r=new F(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Da(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function La(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ss||c===as,u=c===Qn||c===ei;if(l||u){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ca(i)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Ca(i)),p=l?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&_o("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fd(i,e,t,n){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let d=0,h=g.length;d<h;d++)e.remove(g[d])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const g=m[v];for(let d=0,h=g.length;d<h;d++)e.update(g[d],i.ARRAY_BUFFER)}}function l(p){const f=[],m=p.index,v=p.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let y=0,T=E.length;y<T;y+=3){const O=E[y+0],R=E[y+1],w=E[y+2];f.push(O,R,R,w,w,O)}}else if(v!==void 0){const E=v.array;g=v.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const O=y+0,R=y+1,w=y+2;f.push(O,R,R,w,w,O)}}else return;const d=new(go(f)?Eo:yo)(f,1);d.version=g;const h=s.get(p);h&&e.remove(h),s.set(p,d)}function u(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function pd(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*a,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(f[d]/a,m[d]);else{g.multiDrawElementsWEBGL(n,m,0,s,f,0,v);let d=0;for(let h=0;h<v;h++)d+=m[h];t.update(d,n,1)}}function p(f,m,v,g){if(v===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],g[h]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,g,0,v);let h=0;for(let E=0;E<v;E++)h+=m[E];for(let E=0;E<g.length;E++)t.update(h,n,g[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function md(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gd(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let _=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),g===!0&&(T=2),d===!0&&(T=3);let O=o.attributes.position.count*T,R=1;O>e.maxTextureSize&&(R=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const w=new Float32Array(O*R*4*p),U=new xo(w,O,R,p);U.type=on,U.needsUpdate=!0;const M=T*4;for(let P=0;P<p;P++){const B=h[P],V=E[P],q=y[P],A=O*R*4*P;for(let C=0;C<B.count;C++){const k=C*M;v===!0&&(r.fromBufferAttribute(B,C),w[A+k+0]=r.x,w[A+k+1]=r.y,w[A+k+2]=r.z,w[A+k+3]=0),g===!0&&(r.fromBufferAttribute(V,C),w[A+k+4]=r.x,w[A+k+5]=r.y,w[A+k+6]=r.z,w[A+k+7]=0),d===!0&&(r.fromBufferAttribute(q,C),w[A+k+8]=r.x,w[A+k+9]=r.y,w[A+k+10]=r.z,w[A+k+11]=q.itemSize===4?r.w:1)}}f={count:p,texture:U,size:new Oe(O,R)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let d=0;d<l.length;d++)v+=l[d];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function _d(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,p=e.get(c,u);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return p}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Co extends St{constructor(e,t,n,r,s,a,o,c,l,u=Zn){if(u!==Zn&&u!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=ti),n===void 0&&u===ii&&(n=ni),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Po=new St,Do=new Co(1,1);Do.compareFunction=mo;const Lo=new xo,Uo=new nl,Io=new bo,Ua=[],Ia=[],Na=new Float32Array(16),Oa=new Float32Array(9),Fa=new Float32Array(4);function li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ua[r];if(s===void 0&&(s=new Float32Array(r),Ua[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function Md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),rt(t,n)}}function Ed(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),rt(t,n)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Na.set(n),i.uniformMatrix4fv(this.addr,!1,Na),rt(t,n)}}function Ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Cd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Do:Po;t.setTexture2D(e||s,r)}function Id(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Uo,r)}function Nd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Io,r)}function Od(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lo,r)}function Fd(i){switch(i){case 5126:return vd;case 35664:return xd;case 35665:return Sd;case 35666:return Md;case 35674:return yd;case 35675:return Ed;case 35676:return Td;case 5124:case 35670:return Ad;case 35667:case 35671:return bd;case 35668:case 35672:return wd;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Dd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Od}}function Bd(i,e){i.uniform1fv(this.addr,e)}function zd(i,e){const t=li(e,this.size,2);i.uniform2fv(this.addr,t)}function Hd(i,e){const t=li(e,this.size,3);i.uniform3fv(this.addr,t)}function Gd(i,e){const t=li(e,this.size,4);i.uniform4fv(this.addr,t)}function Vd(i,e){const t=li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kd(i,e){const t=li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wd(i,e){const t=li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xd(i,e){i.uniform1iv(this.addr,e)}function qd(i,e){i.uniform2iv(this.addr,e)}function Yd(i,e){i.uniform3iv(this.addr,e)}function Kd(i,e){i.uniform4iv(this.addr,e)}function jd(i,e){i.uniform1uiv(this.addr,e)}function $d(i,e){i.uniform2uiv(this.addr,e)}function Zd(i,e){i.uniform3uiv(this.addr,e)}function Jd(i,e){i.uniform4uiv(this.addr,e)}function Qd(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Po,s[a])}function ef(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uo,s[a])}function tf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Io,s[a])}function nf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);it(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lo,s[a])}function rf(i){switch(i){case 5126:return Bd;case 35664:return zd;case 35665:return Hd;case 35666:return Gd;case 35674:return Vd;case 35675:return kd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Kd;case 5125:return jd;case 36294:return $d;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return nf}}class sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fd(t.type)}}class af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rf(t.type)}}class of{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Ba(i,e){i.seq.push(e),i.map[e.id]=e}function cf(i,e,t){const n=i.name,r=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),a=Zr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ba(t,l===void 0?new sf(o,i,e):new af(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new of(o),Ba(t,p)),t=p}}}class Ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function za(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lf=37297;let hf=0;function uf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function df(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===ir&&t===nr?n="LinearDisplayP3ToLinearSRGB":e===nr&&t===ir&&(n="LinearSRGBToLinearDisplayP3"),i){case pn:case hr:return[n,"LinearTransferOETF"];case Ot:case ps:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ha(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uf(i.getShaderSource(e),a)}else return r}function ff(i,e){const t=df(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pf(i,e){let t;switch(e){case Sc:t="Linear";break;case Mc:t="Reinhard";break;case yc:t="OptimizedCineon";break;case Ec:t="ACESFilmic";break;case Ac:t="AgX";break;case bc:t="Neutral";break;case Tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_i).join(`
`)}function gf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _f(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _i(i){return i!==""}function Ga(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Va(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function hs(i){return i.replace(vf,Sf)}const xf=new Map;function Sf(i,e){let t=Ae[e];if(t===void 0){const n=xf.get(e);if(n!==void 0)t=Ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hs(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(i){return i.replace(Mf,yf)}function yf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ef(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qn:case ei:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Af(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ei:e="ENVMAP_MODE_REFRACTION";break}return e}function bf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:e="ENVMAP_BLENDING_MULTIPLY";break;case vc:e="ENVMAP_BLENDING_MIX";break;case xc:e="ENVMAP_BLENDING_ADD";break}return e}function wf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rf(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ef(t),l=Tf(t),u=Af(t),p=bf(t),f=wf(t),m=mf(t),v=gf(s),g=r.createProgram();let d,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_i).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_i).join(`
`),h.length>0&&(h+=`
`)):(d=[Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),h=[Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Ae.tonemapping_pars_fragment:"",t.toneMapping!==ln?pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,ff("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_i).join(`
`)),a=hs(a),a=Ga(a,t),a=Va(a,t),o=hs(o),o=Ga(o,t),o=Va(o,t),a=ka(a),o=ka(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+d+a,T=E+h+o,O=za(r,r.VERTEX_SHADER,y),R=za(r,r.FRAGMENT_SHADER,T);r.attachShader(g,O),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(g).trim(),V=r.getShaderInfoLog(O).trim(),q=r.getShaderInfoLog(R).trim();let A=!0,C=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(A=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,O,R);else{const k=Ha(r,O,"vertex"),H=Ha(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+k+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||q==="")&&(C=!1);C&&(P.diagnostics={runnable:A,programLog:B,vertexShader:{log:V,prefix:d},fragmentShader:{log:q,prefix:h}})}r.deleteShader(O),r.deleteShader(R),U=new Ji(r,g),M=_f(r,g)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(g,lf)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=R,this}let Cf=0;class Pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Df(e),t.set(e,n)),n}}class Df{constructor(e){this.id=Cf++,this.code=e,this.usedTimes=0}}function Lf(i,e,t,n,r,s,a){const o=new gs,c=new Pf,l=new Set,u=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function d(M,_,P,B,V){const q=B.fog,A=V.geometry,C=M.isMeshStandardMaterial?B.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||C),H=k&&k.mapping===cr?k.image.height:null,ee=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ue=$!==void 0?$.length:0;let Pe=0;A.morphAttributes.position!==void 0&&(Pe=1),A.morphAttributes.normal!==void 0&&(Pe=2),A.morphAttributes.color!==void 0&&(Pe=3);let Ge,X,Z,fe;if(ee){const qe=Ft[ee];Ge=qe.vertexShader,X=qe.fragmentShader}else Ge=M.vertexShader,X=M.fragmentShader,c.update(M),Z=c.getVertexShaderID(M),fe=c.getFragmentShaderID(M);const oe=i.getRenderTarget(),De=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,ze=!!M.map,L=!!M.matcap,Fe=!!k,Ie=!!M.aoMap,je=!!M.lightMap,xe=!!M.bumpMap,He=!!M.normalMap,Le=!!M.displacementMap,Te=!!M.emissiveMap,tt=!!M.metalnessMap,b=!!M.roughnessMap,x=M.anisotropy>0,W=M.clearcoat>0,j=M.dispersion>0,J=M.iridescence>0,Q=M.sheen>0,_e=M.transmission>0,se=x&&!!M.anisotropyMap,ae=W&&!!M.clearcoatMap,Re=W&&!!M.clearcoatNormalMap,te=W&&!!M.clearcoatRoughnessMap,me=J&&!!M.iridescenceMap,Ue=J&&!!M.iridescenceThicknessMap,ye=Q&&!!M.sheenColorMap,ce=Q&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,Ne=!!M.specularColorMap,Qe=!!M.specularIntensityMap,D=_e&&!!M.transmissionMap,le=_e&&!!M.thicknessMap,Y=!!M.gradientMap,K=!!M.alphaMap,ie=M.alphaTest>0,Ee=!!M.alphaHash,Ve=!!M.extensions;let et=ln;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=i.toneMapping);const st={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:X,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:pn,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:L,envMap:Fe,envMapMode:Fe&&k.mapping,envMapCubeUVHeight:H,aoMap:Ie,lightMap:je,bumpMap:xe,normalMap:He,displacementMap:f&&Le,emissiveMap:Te,normalMapObjectSpace:He&&M.normalMapType===Hc,normalMapTangentSpace:He&&M.normalMapType===po,metalnessMap:tt,roughnessMap:b,anisotropy:x,anisotropyMap:se,clearcoat:W,clearcoatMap:ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:te,dispersion:j,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:Ue,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:ce,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:Qe,transmission:_e,transmissionMap:D,thicknessMap:le,gradientMap:Y,opaque:M.transparent===!1&&M.blending===$n&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ie,alphaHash:Ee,combine:M.combine,mapUv:ze&&g(M.map.channel),aoMapUv:Ie&&g(M.aoMap.channel),lightMapUv:je&&g(M.lightMap.channel),bumpMapUv:xe&&g(M.bumpMap.channel),normalMapUv:He&&g(M.normalMap.channel),displacementMapUv:Le&&g(M.displacementMap.channel),emissiveMapUv:Te&&g(M.emissiveMap.channel),metalnessMapUv:tt&&g(M.metalnessMap.channel),roughnessMapUv:b&&g(M.roughnessMap.channel),anisotropyMapUv:se&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:Ne&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:D&&g(M.transmissionMap.channel),thicknessMapUv:le&&g(M.thicknessMap.channel),alphaMapUv:K&&g(M.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(He||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!A.attributes.uv&&(ze||K),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===Ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$t,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ve&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function h(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)_.push(P),_.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(_,M),y(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function E(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function y(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.doubleSided&&o.enable(10),_.flipSided&&o.enable(11),_.useDepthPacking&&o.enable(12),_.dithering&&o.enable(13),_.transmission&&o.enable(14),_.sheen&&o.enable(15),_.opaque&&o.enable(16),_.pointsUvs&&o.enable(17),_.decodeVideoTexture&&o.enable(18),_.alphaToCoverage&&o.enable(19),M.push(o.mask)}function T(M){const _=v[M.type];let P;if(_){const B=Ft[_];P=pl.clone(B.uniforms)}else P=M.uniforms;return P}function O(M,_){let P;for(let B=0,V=u.length;B<V;B++){const q=u[B];if(q.cacheKey===_){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Rf(i,_,M,s),u.push(P)),P}function R(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function U(){c.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:T,acquireProgram:O,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function Uf(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function If(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,f,m,v,g,d){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:f,material:m,groupOrder:v,renderOrder:p.renderOrder,z:g,group:d},i[e]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=g,h.group=d),e++,h}function o(p,f,m,v,g,d){const h=a(p,f,m,v,g,d);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(p,f,m,v,g,d){const h=a(p,f,m,v,g,d);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(p,f){t.length>1&&t.sort(p||If),n.length>1&&n.sort(f||Xa),r.length>1&&r.sort(f||Xa)}function u(){for(let p=e,f=i.length;p<f;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Nf(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new qa,i.set(n,[a])):r>=s.length?(a=new qa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Of(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ff(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bf=0;function zf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hf(i){const e=new Of,t=Ff(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new Je,a=new Je;function o(l){let u=0,p=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,g=0,d=0,h=0,E=0,y=0,T=0,O=0,R=0,w=0;l.sort(zf);for(let M=0,_=l.length;M<_;M++){const P=l[M],B=P.color,V=P.intensity,q=P.distance,A=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*V,p+=B.g*V,f+=B.b*V;else if(P.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(P.sh.coefficients[C],V);w++}else if(P.isDirectionalLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,H=t.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=A,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=C,m++}else if(P.isSpotLight){const C=e.get(P);C.position.setFromMatrixPosition(P.matrixWorld),C.color.copy(B).multiplyScalar(V),C.distance=q,C.coneCos=Math.cos(P.angle),C.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),C.decay=P.decay,n.spot[g]=C;const k=P.shadow;if(P.map&&(n.spotLightMap[O]=P.map,O++,k.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[g]=k.matrix,P.castShadow){const H=t.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=A,T++}g++}else if(P.isRectAreaLight){const C=e.get(P);C.color.copy(B).multiplyScalar(V),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=C,d++}else if(P.isPointLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),C.distance=P.distance,C.decay=P.decay,P.castShadow){const k=P.shadow,H=t.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=A,n.pointShadowMatrix[v]=P.shadow.matrix,y++}n.point[v]=C,v++}else if(P.isHemisphereLight){const C=e.get(P);C.skyColor.copy(P.color).multiplyScalar(V),C.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[h]=C,h++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==d||U.hemiLength!==h||U.numDirectionalShadows!==E||U.numPointShadows!==y||U.numSpotShadows!==T||U.numSpotMaps!==O||U.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=d,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,U.directionalLength=m,U.pointLength=v,U.spotLength=g,U.rectAreaLength=d,U.hemiLength=h,U.numDirectionalShadows=E,U.numPointShadows=y,U.numSpotShadows=T,U.numSpotMaps=O,U.numLightProbes=w,n.version=Bf++)}function c(l,u){let p=0,f=0,m=0,v=0,g=0;const d=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const y=l[h];if(y.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),p++}else if(y.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),g++}}}return{setup:o,setupView:c,state:n}}function Ya(i){const e=new Hf(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gf(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ya(i),e.set(r,[o])):s>=a.length?(o=new Ya(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Vf extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qf(i,e,t){let n=new wo;const r=new Oe,s=new Oe,a=new lt,o=new Vf({depthPacking:zc}),c=new kf,l={},u=t.maxTextureSize,p={[un]:xt,[xt]:un,[$t]:$t},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Wf,fragmentShader:Xf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ct;v.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(v,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let h=this.type;this.render=function(R,w,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(cn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=h!==jt&&this.type===jt,q=h===jt&&this.type!==jt;for(let A=0,C=R.length;A<C;A++){const k=R[A],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||V===!0||q===!0){const ue=this.type!==jt?{minFilter:Rt,magFilter:Rt}:{};H.map!==null&&H.map.dispose(),H.map=new Dn(r.x,r.y,ue),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const $=H.getViewportCount();for(let ue=0;ue<$;ue++){const Pe=H.getViewport(ue);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),B.viewport(a),H.updateMatrices(k,ue),n=H.getFrustum(),T(w,U,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===jt&&E(H,U),H.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(M,_,P)};function E(R,w){const U=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,U,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,U,m,g,null)}function y(R,w,U,M){let _=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)_=P;else if(_=U.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=_.uuid,V=w.uuid;let q=l[B];q===void 0&&(q={},l[B]=q);let A=q[V];A===void 0&&(A=_.clone(),q[V]=A,w.addEventListener("dispose",O)),_=A}if(_.visible=w.visible,_.wireframe=w.wireframe,M===jt?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:p[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=i.properties.get(_);B.light=U}return _}function T(R,w,U,M,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===jt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const V=e.update(R),q=R.material;if(Array.isArray(q)){const A=V.groups;for(let C=0,k=A.length;C<k;C++){const H=A[C],ee=q[H.materialIndex];if(ee&&ee.visible){const $=y(R,ee,M,_);R.onBeforeShadow(i,R,w,U,V,$,H),i.renderBufferDirect(U,null,V,$,R,H),R.onAfterShadow(i,R,w,U,V,$,H)}}}else if(q.visible){const A=y(R,q,M,_);R.onBeforeShadow(i,R,w,U,V,A,null),i.renderBufferDirect(U,null,V,A,R,null),R.onAfterShadow(i,R,w,U,V,A,null)}}const B=R.children;for(let V=0,q=B.length;V<q;V++)T(B[V],w,U,M,_)}function O(R){R.target.removeEventListener("dispose",O);for(const U in l){const M=l[U],_=R.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}function Yf(i){function e(){let D=!1;const le=new lt;let Y=null;const K=new lt(0,0,0,0);return{setMask:function(ie){Y!==ie&&!D&&(i.colorMask(ie,ie,ie,ie),Y=ie)},setLocked:function(ie){D=ie},setClear:function(ie,Ee,Ve,et,st){st===!0&&(ie*=et,Ee*=et,Ve*=et),le.set(ie,Ee,Ve,et),K.equals(le)===!1&&(i.clearColor(ie,Ee,Ve,et),K.copy(le))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function t(){let D=!1,le=null,Y=null,K=null;return{setTest:function(ie){ie?fe(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ie){le!==ie&&!D&&(i.depthMask(ie),le=ie)},setFunc:function(ie){if(Y!==ie){switch(ie){case uc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case fc:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ie}},setLocked:function(ie){D=ie},setClear:function(ie){K!==ie&&(i.clearDepth(ie),K=ie)},reset:function(){D=!1,le=null,Y=null,K=null}}}function n(){let D=!1,le=null,Y=null,K=null,ie=null,Ee=null,Ve=null,et=null,st=null;return{setTest:function(qe){D||(qe?fe(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(qe){le!==qe&&!D&&(i.stencilMask(qe),le=qe)},setFunc:function(qe,It,Nt){(Y!==qe||K!==It||ie!==Nt)&&(i.stencilFunc(qe,It,Nt),Y=qe,K=It,ie=Nt)},setOp:function(qe,It,Nt){(Ee!==qe||Ve!==It||et!==Nt)&&(i.stencilOp(qe,It,Nt),Ee=qe,Ve=It,et=Nt)},setLocked:function(qe){D=qe},setClear:function(qe){st!==qe&&(i.clearStencil(qe),st=qe)},reset:function(){D=!1,le=null,Y=null,K=null,ie=null,Ee=null,Ve=null,et=null,st=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},p=new WeakMap,f=[],m=null,v=!1,g=null,d=null,h=null,E=null,y=null,T=null,O=null,R=new Be(0,0,0),w=0,U=!1,M=null,_=null,P=null,B=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let A=!1,C=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(k)[1]),A=C>=1):k.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),A=C>=2);let H=null,ee={};const $=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Pe=new lt().fromArray($),Ge=new lt().fromArray(ue);function X(D,le,Y,K){const ie=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(D,Ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Y;Ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(le+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return Ee}const Z={};Z[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),s.setFunc(Qi),xe(!1),He(Rs),fe(i.CULL_FACE),Ie(cn);function fe(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function oe(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function De(D,le){return u[D]!==le?(i.bindFramebuffer(D,le),u[D]=le,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function we(D,le){let Y=f,K=!1;if(D){Y=p.get(le),Y===void 0&&(Y=[],p.set(le,Y));const ie=D.textures;if(Y.length!==ie.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Ve=ie.length;Ee<Ve;Ee++)Y[Ee]=i.COLOR_ATTACHMENT0+Ee;Y.length=ie.length,K=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,K=!0);K&&i.drawBuffers(Y)}function ze(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const L={[wn]:i.FUNC_ADD,[Ko]:i.FUNC_SUBTRACT,[jo]:i.FUNC_REVERSE_SUBTRACT};L[$o]=i.MIN,L[Zo]=i.MAX;const Fe={[Jo]:i.ZERO,[Qo]:i.ONE,[ec]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[ac]:i.SRC_ALPHA_SATURATE,[rc]:i.DST_COLOR,[nc]:i.DST_ALPHA,[tc]:i.ONE_MINUS_SRC_COLOR,[rs]:i.ONE_MINUS_SRC_ALPHA,[sc]:i.ONE_MINUS_DST_COLOR,[ic]:i.ONE_MINUS_DST_ALPHA,[oc]:i.CONSTANT_COLOR,[cc]:i.ONE_MINUS_CONSTANT_COLOR,[lc]:i.CONSTANT_ALPHA,[hc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(D,le,Y,K,ie,Ee,Ve,et,st,qe){if(D===cn){v===!0&&(oe(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),D!==Yo){if(D!==g||qe!==U){if((d!==wn||y!==wn)&&(i.blendEquation(i.FUNC_ADD),d=wn,y=wn),qe)switch(D){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ds:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ds:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,E=null,T=null,O=null,R.set(0,0,0),w=0,g=D,U=qe}return}ie=ie||le,Ee=Ee||Y,Ve=Ve||K,(le!==d||ie!==y)&&(i.blendEquationSeparate(L[le],L[ie]),d=le,y=ie),(Y!==h||K!==E||Ee!==T||Ve!==O)&&(i.blendFuncSeparate(Fe[Y],Fe[K],Fe[Ee],Fe[Ve]),h=Y,E=K,T=Ee,O=Ve),(et.equals(R)===!1||st!==w)&&(i.blendColor(et.r,et.g,et.b,st),R.copy(et),w=st),g=D,U=!1}function je(D,le){D.side===$t?oe(i.CULL_FACE):fe(i.CULL_FACE);let Y=D.side===xt;le&&(Y=!Y),xe(Y),D.blending===$n&&D.transparent===!1?Ie(cn):Ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function He(D){D!==Wo?(fe(i.CULL_FACE),D!==_&&(D===Rs?i.cullFace(i.BACK):D===Xo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),_=D}function Le(D){D!==P&&(A&&i.lineWidth(D),P=D)}function Te(D,le,Y){D?(fe(i.POLYGON_OFFSET_FILL),(B!==le||V!==Y)&&(i.polygonOffset(le,Y),B=le,V=Y)):oe(i.POLYGON_OFFSET_FILL)}function tt(D){D?fe(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+q-1),H!==D&&(i.activeTexture(D),H=D)}function x(D,le,Y){Y===void 0&&(H===null?Y=i.TEXTURE0+q-1:Y=H);let K=ee[Y];K===void 0&&(K={type:void 0,texture:void 0},ee[Y]=K),(K.type!==D||K.texture!==le)&&(H!==Y&&(i.activeTexture(Y),H=Y),i.bindTexture(D,le||Z[D]),K.type=D,K.texture=le)}function W(){const D=ee[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){Pe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Pe.copy(D))}function ce(D){Ge.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function Ce(D,le){let Y=c.get(le);Y===void 0&&(Y=new WeakMap,c.set(le,Y));let K=Y.get(D);K===void 0&&(K=i.getUniformBlockIndex(le,D.name),Y.set(D,K))}function Ne(D,le){const K=c.get(le).get(D);o.get(le)!==K&&(i.uniformBlockBinding(le,K,D.__bindingPointIndex),o.set(le,K))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,ee={},u={},p=new WeakMap,f=[],m=null,v=!1,g=null,d=null,h=null,E=null,y=null,T=null,O=null,R=new Be(0,0,0),w=0,U=!1,M=null,_=null,P=null,B=null,V=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:oe,bindFramebuffer:De,drawBuffers:we,useProgram:ze,setBlending:Ie,setMaterial:je,setFlipSided:xe,setCullFace:He,setLineWidth:Le,setPolygonOffset:Te,setScissorTest:tt,activeTexture:b,bindTexture:x,unbindTexture:W,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:me,texImage3D:Ue,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:Re,texStorage3D:te,texSubImage2D:Q,texSubImage3D:_e,compressedTexSubImage2D:se,compressedTexSubImage3D:ae,scissor:ye,viewport:ce,reset:Qe}}function Kf(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,x){return m?new OffscreenCanvas(b,x):sr("canvas")}function g(b,x,W){let j=1;const J=tt(b);if((J.width>W||J.height>W)&&(j=W/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(j*J.width),_e=Math.floor(j*J.height);p===void 0&&(p=v(Q,_e));const se=x?v(Q,_e):p;return se.width=Q,se.height=_e,se.getContext("2d").drawImage(b,0,0,Q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+_e+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function d(b){return b.generateMipmaps&&b.minFilter!==Rt&&b.minFilter!==Ut}function h(b){i.generateMipmap(b)}function E(b,x,W,j,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=x;if(x===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),x===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){const _e=J?tr:Xe.getTransfer(j);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=_e===Ke?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(b,x){let W;return b?x===null||x===ti||x===ni?W=i.DEPTH24_STENCIL8:x===on?W=i.DEPTH32F_STENCIL8:x===er&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===ni?W=i.DEPTH_COMPONENT24:x===on?W=i.DEPTH_COMPONENT32F:x===er&&(W=i.DEPTH_COMPONENT16),W}function T(b,x){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function O(b){const x=b.target;x.removeEventListener("dispose",O),w(x),x.isVideoTexture&&u.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),M(x)}function w(b){const x=n.get(b);if(x.__webglInit===void 0)return;const W=b.source,j=f.get(W);if(j){const J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(b),Object.keys(j).length===0&&f.delete(W)}n.remove(b)}function U(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const W=b.source,j=f.get(W);delete j[x.__cacheKey],a.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let J=0;J<x.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[j][J]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=b.textures;for(let j=0,J=W.length;j<J;j++){const Q=n.get(W[j]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(b)}let _=0;function P(){_=0}function B(){const b=_;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),_+=1,b}function V(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const W=n.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(W,b,x);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function A(b,x){const W=n.get(b);if(b.version>0&&W.__version!==b.version){Ge(W,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function C(b,x){const W=n.get(b);if(b.version>0&&W.__version!==b.version){Ge(W,b,x);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function k(b,x){const W=n.get(b);if(b.version>0&&W.__version!==b.version){X(W,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const H={[os]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},ee={[Rt]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[wi]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},$={[Gc]:i.NEVER,[Yc]:i.ALWAYS,[Vc]:i.LESS,[mo]:i.LEQUAL,[kc]:i.EQUAL,[qc]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function ue(b,x){if(x.type===on&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===Sr||x.magFilter===wi||x.magFilter===Pn||x.minFilter===Ut||x.minFilter===Sr||x.minFilter===wi||x.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,H[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,H[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,H[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ee[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ee[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,$[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==wi&&x.minFilter!==Pn||x.type===on&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Pe(b,x){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",O));const j=x.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const Q=V(x);if(Q!==b.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),J[Q].usedTimes++;const _e=J[b.__cacheKey];_e!==void 0&&(J[b.__cacheKey].usedTimes--,_e.usedTimes===0&&U(x)),b.__cacheKey=Q,b.__webglTexture=J[Q].texture}return W}function Ge(b,x,W){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const J=Pe(b,x),Q=x.source;t.bindTexture(j,b.__webglTexture,i.TEXTURE0+W);const _e=n.get(Q);if(Q.version!==_e.__version||J===!0){t.activeTexture(i.TEXTURE0+W);const se=Xe.getPrimaries(Xe.workingColorSpace),ae=x.colorSpace===an?null:Xe.getPrimaries(x.colorSpace),Re=x.colorSpace===an||se===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let te=g(x.image,!1,r.maxTextureSize);te=Te(x,te);const me=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type);let ye=E(x.internalFormat,me,Ue,x.colorSpace,x.isVideoTexture);ue(j,x);let ce;const Ce=x.mipmaps,Ne=x.isVideoTexture!==!0,Qe=_e.__version===void 0||J===!0,D=Q.dataReady,le=T(x,te);if(x.isDepthTexture)ye=y(x.format===ii,x.type),Qe&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,me,Ue,null));else if(x.isDataTexture)if(Ce.length>0){Ne&&Qe&&t.texStorage2D(i.TEXTURE_2D,le,ye,Ce[0].width,Ce[0].height);for(let Y=0,K=Ce.length;Y<K;Y++)ce=Ce[Y],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,me,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,Y,ye,ce.width,ce.height,0,me,Ue,ce.data);x.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(i.TEXTURE_2D,le,ye,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,me,Ue,te.data)):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,me,Ue,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ye,Ce[0].width,Ce[0].height,te.depth);for(let Y=0,K=Ce.length;Y<K;Y++)if(ce=Ce[Y],x.format!==zt)if(me!==null)if(Ne){if(D)if(x.layerUpdates.size>0){for(const ie of x.layerUpdates){const Ee=ce.width*ce.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ie,ce.width,ce.height,1,me,ce.data.slice(Ee*ie,Ee*(ie+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,te.depth,me,ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ye,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,te.depth,me,Ue,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ye,ce.width,ce.height,te.depth,0,me,Ue,ce.data)}else{Ne&&Qe&&t.texStorage2D(i.TEXTURE_2D,le,ye,Ce[0].width,Ce[0].height);for(let Y=0,K=Ce.length;Y<K;Y++)ce=Ce[Y],x.format!==zt?me!==null?Ne?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,me,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,me,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,Y,ye,ce.width,ce.height,0,me,Ue,ce.data)}else if(x.isDataArrayTexture)if(Ne){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ye,te.width,te.height,te.depth),D)if(x.layerUpdates.size>0){let Y;switch(Ue){case i.UNSIGNED_BYTE:switch(me){case i.ALPHA:Y=1;break;case i.LUMINANCE:Y=1;break;case i.LUMINANCE_ALPHA:Y=2;break;case i.RGB:Y=3;break;case i.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${me}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Ue}.`)}const K=te.width*te.height*Y;for(const ie of x.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,te.width,te.height,1,me,Ue,te.data.slice(K*ie,K*(ie+1)));x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ue,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,me,Ue,te.data);else if(x.isData3DTexture)Ne?(Qe&&t.texStorage3D(i.TEXTURE_3D,le,ye,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ue,te.data)):t.texImage3D(i.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,me,Ue,te.data);else if(x.isFramebufferTexture){if(Qe)if(Ne)t.texStorage2D(i.TEXTURE_2D,le,ye,te.width,te.height);else{let Y=te.width,K=te.height;for(let ie=0;ie<le;ie++)t.texImage2D(i.TEXTURE_2D,ie,ye,Y,K,0,me,Ue,null),Y>>=1,K>>=1}}else if(Ce.length>0){if(Ne&&Qe){const Y=tt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,le,ye,Y.width,Y.height)}for(let Y=0,K=Ce.length;Y<K;Y++)ce=Ce[Y],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,me,Ue,ce):t.texImage2D(i.TEXTURE_2D,Y,ye,me,Ue,ce);x.generateMipmaps=!1}else if(Ne){if(Qe){const Y=tt(te);t.texStorage2D(i.TEXTURE_2D,le,ye,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ue,te)}else t.texImage2D(i.TEXTURE_2D,0,ye,me,Ue,te);d(x)&&h(j),_e.__version=Q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,W){if(x.image.length!==6)return;const j=Pe(b,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+W);const Q=n.get(J);if(J.version!==Q.__version||j===!0){t.activeTexture(i.TEXTURE0+W);const _e=Xe.getPrimaries(Xe.workingColorSpace),se=x.colorSpace===an?null:Xe.getPrimaries(x.colorSpace),ae=x.colorSpace===an||_e===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Re&&!te?me[K]=g(x.image[K],!0,r.maxCubemapSize):me[K]=te?x.image[K].image:x.image[K],me[K]=Te(x,me[K]);const Ue=me[0],ye=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),Ce=E(x.internalFormat,ye,ce,x.colorSpace),Ne=x.isVideoTexture!==!0,Qe=Q.__version===void 0||j===!0,D=J.dataReady;let le=T(x,Ue);ue(i.TEXTURE_CUBE_MAP,x);let Y;if(Re){Ne&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ce,Ue.width,Ue.height);for(let K=0;K<6;K++){Y=me[K].mipmaps;for(let ie=0;ie<Y.length;ie++){const Ee=Y[ie];x.format!==zt?ye!==null?Ne?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ee.width,Ee.height,ye,ce,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ce,Ee.width,Ee.height,0,ye,ce,Ee.data)}}}else{if(Y=x.mipmaps,Ne&&Qe){Y.length>0&&le++;const K=tt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ce,K.width,K.height)}for(let K=0;K<6;K++)if(te){Ne?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,ye,ce,me[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,me[K].width,me[K].height,0,ye,ce,me[K].data);for(let ie=0;ie<Y.length;ie++){const Ve=Y[ie].image[K].image;Ne?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Ve.width,Ve.height,ye,ce,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ce,Ve.width,Ve.height,0,ye,ce,Ve.data)}}else{Ne?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,ce,me[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,ye,ce,me[K]);for(let ie=0;ie<Y.length;ie++){const Ee=Y[ie];Ne?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ye,ce,Ee.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ce,ye,ce,Ee.image[K])}}}d(x)&&h(i.TEXTURE_CUBE_MAP),Q.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Z(b,x,W,j,J,Q){const _e=s.convert(W.format,W.colorSpace),se=s.convert(W.type),ae=E(W.internalFormat,_e,se,W.colorSpace);if(!n.get(x).__hasExternalTextures){const te=Math.max(1,x.width>>Q),me=Math.max(1,x.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,ae,te,me,x.depth,0,_e,se,null):t.texImage2D(J,Q,ae,te,me,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,n.get(W).__webglTexture,0,xe(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,n.get(W).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(b,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const j=x.depthTexture,J=j&&j.isDepthTexture?j.type:null,Q=y(x.stencilBuffer,J),_e=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=xe(x);He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Q,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,b)}else{const j=x.textures;for(let J=0;J<j.length;J++){const Q=j[J],_e=s.convert(Q.format,Q.colorSpace),se=s.convert(Q.type),ae=E(Q.internalFormat,_e,se,Q.colorSpace),Re=xe(x);W&&He(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ae,x.width,x.height):He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const j=n.get(x.depthTexture).__webglTexture,J=xe(x);if(x.depthTexture.format===Zn)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===ii)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function De(b){const x=n.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");oe(x.__webglFramebuffer,b)}else if(W){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=i.createRenderbuffer(),fe(x.__webglDepthbuffer[j],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),fe(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(b,x,W){const j=n.get(b);x!==void 0&&Z(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&De(b)}function ze(b){const x=b.texture,W=n.get(b),j=n.get(x);b.addEventListener("dispose",R);const J=b.textures,Q=b.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[se]=[];for(let ae=0;ae<x.mipmaps.length;ae++)W.__webglFramebuffer[se][ae]=i.createFramebuffer()}else W.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)W.__webglFramebuffer[se]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let se=0,ae=J.length;se<ae;se++){const Re=n.get(J[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&He(b)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const ae=J[se];W.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[se]);const Re=s.convert(ae.format,ae.colorSpace),te=s.convert(ae.type),me=E(ae.internalFormat,Re,te,ae.colorSpace,b.isXRRenderTarget===!0),Ue=xe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,me,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,W.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Z(W.__webglFramebuffer[se][ae],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else Z(W.__webglFramebuffer[se],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);d(x)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let se=0,ae=J.length;se<ae;se++){const Re=J[se],te=n.get(Re);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),ue(i.TEXTURE_2D,Re),Z(W.__webglFramebuffer,b,Re,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),d(Re)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),ue(se,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Z(W.__webglFramebuffer[ae],b,x,i.COLOR_ATTACHMENT0,se,ae);else Z(W.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,se,0);d(x)&&h(se),t.unbindTexture()}b.depthBuffer&&De(b)}function L(b){const x=b.textures;for(let W=0,j=x.length;W<j;W++){const J=x[W];if(d(J)){const Q=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(J).__webglTexture;t.bindTexture(Q,_e),h(Q),t.unbindTexture()}}}const Fe=[],Ie=[];function je(b){if(b.samples>0){if(He(b)===!1){const x=b.textures,W=b.width,j=b.height;let J=i.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(b),se=x.length>1;if(se)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ae]);const Re=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,J,i.NEAREST),c===!0&&(Fe.length=0,Ie.length=0,Fe.push(i.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(Q),Ie.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ae]);const Re=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function xe(b){return Math.min(r.maxSamples,b.samples)}function He(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Te(b,x){const W=b.colorSpace,j=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==pn&&W!==an&&(Xe.getTransfer(W)===Ke?(j!==zt||J!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=A,this.setTexture3D=C,this.setTextureCube=k,this.rebindTextures=we,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=He}function jf(i,e){function t(n,r=an){let s;const a=Xe.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===Cc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===zt)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Ic)return i.LUMINANCE_ALPHA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===ho)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Mr||n===yr||n===Er||n===Tr)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ls||n===Us||n===Is||n===Ns)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ls)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Us)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Is)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ns)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Os||n===Fs||n===Bs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Os||n===Fs)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zs||n===Hs||n===Gs||n===Vs||n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===Ks||n===js||n===$s||n===Zs||n===Js)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ks)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ws)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ys)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ks)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===js)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$s)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Js)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Qs||n===ea)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ar)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===ta||n===na||n===ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ar)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $f extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zf={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,n),h=this._getHandJoint(l,g);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=u.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:Jf,fragmentShader:Qf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class tp extends ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,f=null,m=null,v=null;const g=new ep,d=t.getContextAttributes();let h=null,E=null;const y=[],T=[],O=new Oe;let R=null;const w=new wt;w.layers.enable(1),w.viewport=new lt;const U=new wt;U.layers.enable(2),U.viewport=new lt;const M=[w,U],_=new $f;_.layers.enable(1),_.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=y[X];return Z===void 0&&(Z=new Jr,y[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=y[X];return Z===void 0&&(Z=new Jr,y[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=y[X];return Z===void 0&&(Z=new Jr,y[X]=Z),Z.getHandSpace()};function V(X){const Z=T.indexOf(X.inputSource);if(Z===-1)return;const fe=y[Z];fe!==void 0&&(fe.update(X.inputSource,X.frame,l||a),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",A);for(let X=0;X<y.length;X++){const Z=T[X];Z!==null&&(T[X]=null,y[X].disconnect(Z))}P=null,B=null,g.reset(),e.setRenderTarget(h),m=null,f=null,p=null,r=null,E=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",A),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Dn(m.framebufferWidth,m.framebufferHeight,{format:zt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,fe=null,oe=null;d.depth&&(oe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=d.stencil?ii:Zn,fe=d.stencil?ni:ti);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Dn(f.textureWidth,f.textureHeight,{format:zt,type:dn,depthTexture:new Co(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(X){for(let Z=0;Z<X.removed.length;Z++){const fe=X.removed[Z],oe=T.indexOf(fe);oe>=0&&(T[oe]=null,y[oe].disconnect(fe))}for(let Z=0;Z<X.added.length;Z++){const fe=X.added[Z];let oe=T.indexOf(fe);if(oe===-1){for(let we=0;we<y.length;we++)if(we>=T.length){T.push(fe),oe=we;break}else if(T[we]===null){T[we]=fe,oe=we;break}if(oe===-1)break}const De=y[oe];De&&De.connect(fe)}}const C=new F,k=new F;function H(X,Z,fe){C.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(fe.matrixWorld);const oe=C.distanceTo(k),De=Z.projectionMatrix.elements,we=fe.projectionMatrix.elements,ze=De[14]/(De[10]-1),L=De[14]/(De[10]+1),Fe=(De[9]+1)/De[5],Ie=(De[9]-1)/De[5],je=(De[8]-1)/De[0],xe=(we[8]+1)/we[0],He=ze*je,Le=ze*xe,Te=oe/(-je+xe),tt=Te*-je;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(tt),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=ze+Te,x=L+Te,W=He-tt,j=Le+(oe-tt),J=Fe*L/x*b,Q=Ie*L/x*b;X.projectionMatrix.makePerspective(W,j,J,Q,b,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ee(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),_.near=U.near=w.near=X.near,_.far=U.far=w.far=X.far,(P!==_.near||B!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,B=_.far,w.near=P,w.far=B,U.near=P,U.far=B,w.updateProjectionMatrix(),U.updateProjectionMatrix(),X.updateProjectionMatrix());const Z=X.parent,fe=_.cameras;ee(_,Z);for(let oe=0;oe<fe.length;oe++)ee(fe[oe],Z);fe.length===2?H(_,w,U):_.projectionMatrix.copy(w.projectionMatrix),$(X,_,Z)};function $(X,Z,fe){fe===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ls*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let ue=null;function Pe(X,Z){if(u=Z.getViewerPose(l||a),v=Z,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let oe=!1;fe.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let we=0;we<fe.length;we++){const ze=fe[we];let L=null;if(m!==null)L=m.getViewport(ze);else{const Ie=p.getViewSubImage(f,ze);L=Ie.viewport,we===0&&(e.setRenderTargetTextures(E,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(E))}let Fe=M[we];Fe===void 0&&(Fe=new wt,Fe.layers.enable(we),Fe.viewport=new lt,M[we]=Fe),Fe.matrix.fromArray(ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(L.x,L.y,L.width,L.height),we===0&&(_.matrix.copy(Fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(Fe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const we=p.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&g.init(e,we,r.renderState)}}for(let fe=0;fe<y.length;fe++){const oe=T[fe],De=y[fe];oe!==null&&De!==void 0&&De.update(oe,Z,l||a)}ue&&ue(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}const Ge=new Ro;Ge.setAnimationLoop(Pe),this.setAnimationLoop=function(X){ue=X},this.dispose=function(){}}}const yn=new Vt,np=new Je;function ip(i,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,To(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function r(d,h,E,y,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(d,h):h.isMeshToonMaterial?(s(d,h),p(d,h)):h.isMeshPhongMaterial?(s(d,h),u(d,h)):h.isMeshStandardMaterial?(s(d,h),f(d,h),h.isMeshPhysicalMaterial&&m(d,h,T)):h.isMeshMatcapMaterial?(s(d,h),v(d,h)):h.isMeshDepthMaterial?s(d,h):h.isMeshDistanceMaterial?(s(d,h),g(d,h)):h.isMeshNormalMaterial?s(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&o(d,h)):h.isPointsMaterial?c(d,h,E,y):h.isSpriteMaterial?l(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===xt&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===xt&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const E=e.get(h),y=E.envMap,T=E.envMapRotation;y&&(d.envMap.value=y,yn.copy(T),yn.x*=-1,yn.y*=-1,yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),d.envMapRotation.value.setFromMatrix4(np.makeRotationFromEuler(yn)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function o(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function c(d,h,E,y){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*E,d.scale.value=y*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function p(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,E){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,h){h.matcap&&(d.matcap.value=h.matcap)}function g(d,h){const E=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const T=y.program;n.uniformBlockBinding(E,T)}function l(E,y){let T=r[E.id];T===void 0&&(v(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",d));const O=y.program;n.updateUBOMapping(E,O);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const y=p();E.__bindingPointIndex=y;const T=i.createBuffer(),O=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=r[E.id],T=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,w=T.length;R<w;R++){const U=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,_=U.length;M<_;M++){const P=U[M];if(m(P,R,M,O)===!0){const B=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let A=0;A<V.length;A++){const C=V[A],k=g(C);typeof C=="number"||typeof C=="boolean"?(P.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,B+q,P.__data)):C.isMatrix3?(P.__data[0]=C.elements[0],P.__data[1]=C.elements[1],P.__data[2]=C.elements[2],P.__data[3]=0,P.__data[4]=C.elements[3],P.__data[5]=C.elements[4],P.__data[6]=C.elements[5],P.__data[7]=0,P.__data[8]=C.elements[6],P.__data[9]=C.elements[7],P.__data[10]=C.elements[8],P.__data[11]=0):(C.toArray(P.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,T,O){const R=E.value,w=y+"_"+T;if(O[w]===void 0)return typeof R=="number"||typeof R=="boolean"?O[w]=R:O[w]=R.clone(),!0;{const U=O[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return O[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(E){const y=E.uniforms;let T=0;const O=16;for(let w=0,U=y.length;w<U;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,P=M.length;_<P;_++){const B=M[_],V=Array.isArray(B.value)?B.value:[B.value];for(let q=0,A=V.length;q<A;q++){const C=V[q],k=g(C),H=T%O;H!==0&&O-H<k.boundary&&(T+=O-H),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=k.storage}}}const R=T%O;return R>0&&(T+=O-R),E.__size=T,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function d(E){const y=E.target;y.removeEventListener("dispose",d);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class sp{constructor(e={}){const{canvas:t=jc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,d=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=ln,this.toneMappingExposure=1;const y=this;let T=!1,O=0,R=0,w=null,U=-1,M=null;const _=new lt,P=new lt;let B=null;const V=new Be(0);let q=0,A=t.width,C=t.height,k=1,H=null,ee=null;const $=new lt(0,0,A,C),ue=new lt(0,0,A,C);let Pe=!1;const Ge=new wo;let X=!1,Z=!1;const fe=new Je,oe=new F,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ze(){return w===null?k:1}let L=n;function Fe(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fs}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",K,!1),L===null){const I="webgl2";if(L=Fe(I,S),L===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ie,je,xe,He,Le,Te,tt,b,x,W,j,J,Q,_e,se,ae,Re,te,me,Ue,ye,ce,Ce,Ne;function Qe(){Ie=new dd(L),Ie.init(),ce=new jf(L,Ie),je=new sd(L,Ie,e,ce),xe=new Yf(L),He=new md(L),Le=new Uf,Te=new Kf(L,Ie,xe,Le,je,ce,He),tt=new od(y),b=new ud(y),x=new Ml(L),Ce=new id(L,x),W=new fd(L,x,He,Ce),j=new _d(L,W,x,He),me=new gd(L,je,Te),ae=new ad(Le),J=new Lf(y,tt,b,Ie,je,Ce,ae),Q=new ip(y,Le),_e=new Nf,se=new Gf(Ie),te=new nd(y,tt,b,xe,j,f,c),Re=new qf(y,j,je),Ne=new rp(L,He,je,xe),Ue=new rd(L,Ie,He),ye=new pd(L,Ie,He),He.programs=J.programs,y.capabilities=je,y.extensions=Ie,y.properties=Le,y.renderLists=_e,y.shadowMap=Re,y.state=xe,y.info=He}Qe();const D=new tp(y,L);this.xr=D,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(A,C,!1))},this.getSize=function(S){return S.set(A,C)},this.setSize=function(S,I,z=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,C=I,t.width=Math.floor(S*k),t.height=Math.floor(I*k),z===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(A*k,C*k).floor()},this.setDrawingBufferSize=function(S,I,z){A=S,C=I,k=z,t.width=Math.floor(S*z),t.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,I,z,G){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,I,z,G),xe.viewport(_.copy($).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,I,z,G){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,I,z,G),xe.scissor(P.copy(ue).multiplyScalar(k).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(S){xe.setScissorTest(Pe=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(S=!0,I=!0,z=!0){let G=0;if(S){let N=!1;if(w!==null){const ne=w.texture.format;N=ne===fo||ne===uo||ne===ho}if(N){const ne=w.texture.type,he=ne===dn||ne===ti||ne===er||ne===ni||ne===co||ne===lo,de=te.getClearColor(),pe=te.getClearAlpha(),Se=de.r,Me=de.g,ve=de.b;he?(m[0]=Se,m[1]=Me,m[2]=ve,m[3]=pe,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Se,v[1]=Me,v[2]=ve,v[3]=pe,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",K,!1),_e.dispose(),se.dispose(),Le.dispose(),tt.dispose(),b.dispose(),j.dispose(),Ce.dispose(),Ne.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",It),D.removeEventListener("sessionend",Nt),mn.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=He.autoReset,I=Re.enabled,z=Re.autoUpdate,G=Re.needsUpdate,N=Re.type;Qe(),He.autoReset=S,Re.enabled=I,Re.autoUpdate=z,Re.needsUpdate=G,Re.type=N}function K(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ie(S){const I=S.target;I.removeEventListener("dispose",ie),Ee(I)}function Ee(S){Ve(S),Le.remove(S)}function Ve(S){const I=Le.get(S).programs;I!==void 0&&(I.forEach(function(z){J.releaseProgram(z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,G,N,ne){I===null&&(I=De);const he=N.isMesh&&N.matrixWorld.determinant()<0,de=Ho(S,I,z,G,N);xe.setMaterial(G,he);let pe=z.index,Se=1;if(G.wireframe===!0){if(pe=W.getWireframeAttribute(z),pe===void 0)return;Se=2}const Me=z.drawRange,ve=z.attributes.position;let ke=Me.start*Se,$e=(Me.start+Me.count)*Se;ne!==null&&(ke=Math.max(ke,ne.start*Se),$e=Math.min($e,(ne.start+ne.count)*Se)),pe!==null?(ke=Math.max(ke,0),$e=Math.min($e,pe.count)):ve!=null&&(ke=Math.max(ke,0),$e=Math.min($e,ve.count));const Ze=$e-ke;if(Ze<0||Ze===1/0)return;Ce.setup(N,G,de,z,pe);let Mt,We=Ue;if(pe!==null&&(Mt=x.get(pe),We=ye,We.setIndex(Mt)),N.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*ze()),We.setMode(L.LINES)):We.setMode(L.TRIANGLES);else if(N.isLine){let ge=G.linewidth;ge===void 0&&(ge=1),xe.setLineWidth(ge*ze()),N.isLineSegments?We.setMode(L.LINES):N.isLineLoop?We.setMode(L.LINE_LOOP):We.setMode(L.LINE_STRIP)}else N.isPoints?We.setMode(L.POINTS):N.isSprite&&We.setMode(L.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?We.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):We.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)We.renderInstances(ke,Ze,N.count);else if(z.isInstancedBufferGeometry){const ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pt=Math.min(z.instanceCount,ge);We.renderInstances(ke,Ze,pt)}else We.render(ke,Ze)};function et(S,I,z){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=xt,S.needsUpdate=!0,Ai(S,I,z),S.side=un,S.needsUpdate=!0,Ai(S,I,z),S.side=$t):Ai(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),d=se.get(z),d.init(I),E.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const G=new Set;return S.traverse(function(N){const ne=N.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const de=ne[he];et(de,z,N),G.add(de)}else et(ne,z,N),G.add(ne)}),E.pop(),d=null,G},this.compileAsync=function(S,I,z=null){const G=this.compile(S,I,z);return new Promise(N=>{function ne(){if(G.forEach(function(he){Le.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){N(S);return}setTimeout(ne,10)}Ie.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let st=null;function qe(S){st&&st(S)}function It(){mn.stop()}function Nt(){mn.start()}const mn=new Ro;mn.setAnimationLoop(qe),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(S){st=S,D.setAnimationLoop(S),S===null?mn.stop():mn.start()},D.addEventListener("sessionstart",It),D.addEventListener("sessionend",Nt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(I),I=D.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,w),d=se.get(S,E.length),d.init(I),E.push(d),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ge.setFromProjectionMatrix(fe),Z=this.localClippingEnabled,X=ae.init(this.clippingPlanes,Z),g=_e.get(S,h.length),g.init(),h.push(g),D.enabled===!0&&D.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&gr(ne,I,-1/0,y.sortObjects)}gr(S,I,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(H,ee),we=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,we&&te.addToRenderList(g,S),this.info.render.frame++,X===!0&&ae.beginShadows();const z=d.state.shadowsArray;Re.render(z,S,I),X===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,N=g.transmissive;if(d.setupLights(),I.isArrayCamera){const ne=I.cameras;if(N.length>0)for(let he=0,de=ne.length;he<de;he++){const pe=ne[he];Es(G,N,S,pe)}we&&te.render(S);for(let he=0,de=ne.length;he<de;he++){const pe=ne[he];ys(g,S,pe,pe.viewport)}}else N.length>0&&Es(G,N,S,I),we&&te.render(S),ys(g,S,I);w!==null&&(Te.updateMultisampleRenderTarget(w),Te.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(y,S,I),Ce.resetDefaultState(),U=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],X===!0&&ae.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function gr(S,I,z,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ge.intersectsSprite(S)){G&&oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const he=j.update(S),de=S.material;de.visible&&g.push(S,he,de,z,oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ge.intersectsObject(S))){const he=j.update(S),de=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),oe.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),oe.copy(he.boundingSphere.center)),oe.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(de)){const pe=he.groups;for(let Se=0,Me=pe.length;Se<Me;Se++){const ve=pe[Se],ke=de[ve.materialIndex];ke&&ke.visible&&g.push(S,he,ke,z,oe.z,ve)}}else de.visible&&g.push(S,he,de,z,oe.z,null)}}const ne=S.children;for(let he=0,de=ne.length;he<de;he++)gr(ne[he],I,z,G)}function ys(S,I,z,G){const N=S.opaque,ne=S.transmissive,he=S.transparent;d.setupLightsView(z),X===!0&&ae.setGlobalState(y.clippingPlanes,z),G&&xe.viewport(_.copy(G)),N.length>0&&Ti(N,I,z),ne.length>0&&Ti(ne,I,z),he.length>0&&Ti(he,I,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Es(S,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Dn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?lr:dn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ne=d.state.transmissionRenderTarget[G.id],he=G.viewport||_;ne.setSize(he.z,he.w);const de=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(V),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),we?te.render(z):y.clear();const pe=y.toneMapping;y.toneMapping=ln;const Se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),X===!0&&ae.setGlobalState(y.clippingPlanes,G),Ti(S,z,G),Te.updateMultisampleRenderTarget(ne),Te.updateRenderTargetMipmap(ne),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let ve=0,ke=I.length;ve<ke;ve++){const $e=I[ve],Ze=$e.object,Mt=$e.geometry,We=$e.material,ge=$e.group;if(We.side===$t&&Ze.layers.test(G.layers)){const pt=We.side;We.side=xt,We.needsUpdate=!0,Ts(Ze,z,G,Mt,We,ge),We.side=pt,We.needsUpdate=!0,Me=!0}}Me===!0&&(Te.updateMultisampleRenderTarget(ne),Te.updateRenderTargetMipmap(ne))}y.setRenderTarget(de),y.setClearColor(V,q),Se!==void 0&&(G.viewport=Se),y.toneMapping=pe}function Ti(S,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ne=S.length;N<ne;N++){const he=S[N],de=he.object,pe=he.geometry,Se=G===null?he.material:G,Me=he.group;de.layers.test(z.layers)&&Ts(de,I,z,pe,Se,Me)}}function Ts(S,I,z,G,N,ne){S.onBeforeRender(y,I,z,G,N,ne),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,I,z,G,S,ne),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=xt,N.needsUpdate=!0,y.renderBufferDirect(z,I,G,N,S,ne),N.side=un,N.needsUpdate=!0,y.renderBufferDirect(z,I,G,N,S,ne),N.side=$t):y.renderBufferDirect(z,I,G,N,S,ne),S.onAfterRender(y,I,z,G,N,ne)}function Ai(S,I,z){I.isScene!==!0&&(I=De);const G=Le.get(S),N=d.state.lights,ne=d.state.shadowsArray,he=N.state.version,de=J.getParameters(S,N.state,ne,I,z),pe=J.getProgramCacheKey(de);let Se=G.programs;G.environment=S.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(S.isMeshStandardMaterial?b:tt).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",ie),Se=new Map,G.programs=Se);let Me=Se.get(pe);if(Me!==void 0){if(G.currentProgram===Me&&G.lightsStateVersion===he)return bs(S,de),Me}else de.uniforms=J.getUniforms(S),S.onBuild(z,de,y),S.onBeforeCompile(de,y),Me=J.acquireProgram(de,pe),Se.set(pe,Me),G.uniforms=de.uniforms;const ve=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ve.clippingPlanes=ae.uniform),bs(S,de),G.needsLights=Vo(S),G.lightsStateVersion=he,G.needsLights&&(ve.ambientLightColor.value=N.state.ambient,ve.lightProbe.value=N.state.probe,ve.directionalLights.value=N.state.directional,ve.directionalLightShadows.value=N.state.directionalShadow,ve.spotLights.value=N.state.spot,ve.spotLightShadows.value=N.state.spotShadow,ve.rectAreaLights.value=N.state.rectArea,ve.ltc_1.value=N.state.rectAreaLTC1,ve.ltc_2.value=N.state.rectAreaLTC2,ve.pointLights.value=N.state.point,ve.pointLightShadows.value=N.state.pointShadow,ve.hemisphereLights.value=N.state.hemi,ve.directionalShadowMap.value=N.state.directionalShadowMap,ve.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ve.spotShadowMap.value=N.state.spotShadowMap,ve.spotLightMatrix.value=N.state.spotLightMatrix,ve.spotLightMap.value=N.state.spotLightMap,ve.pointShadowMap.value=N.state.pointShadowMap,ve.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Me,G.uniformsList=null,Me}function As(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Ji.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function bs(S,I){const z=Le.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Ho(S,I,z,G,N){I.isScene!==!0&&(I=De),Te.resetTextureUnits();const ne=I.fog,he=G.isMeshStandardMaterial?I.environment:null,de=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pn,pe=(G.isMeshStandardMaterial?b:tt).get(G.envMap||he),Se=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Me=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ve=!!z.morphAttributes.position,ke=!!z.morphAttributes.normal,$e=!!z.morphAttributes.color;let Ze=ln;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ze=y.toneMapping);const Mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,We=Mt!==void 0?Mt.length:0,ge=Le.get(G),pt=d.state.lights;if(X===!0&&(Z===!0||S!==M)){const At=S===M&&G.id===U;ae.setState(G,S,At)}let Ye=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==pt.state.version||ge.outputColorSpace!==de||N.isBatchedMesh&&ge.batching===!1||!N.isBatchedMesh&&ge.batching===!0||N.isBatchedMesh&&ge.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ge.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ge.instancing===!1||!N.isInstancedMesh&&ge.instancing===!0||N.isSkinnedMesh&&ge.skinning===!1||!N.isSkinnedMesh&&ge.skinning===!0||N.isInstancedMesh&&ge.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ge.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ge.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ge.instancingMorph===!1&&N.morphTexture!==null||ge.envMap!==pe||G.fog===!0&&ge.fog!==ne||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ae.numPlanes||ge.numIntersection!==ae.numIntersection)||ge.vertexAlphas!==Se||ge.vertexTangents!==Me||ge.morphTargets!==ve||ge.morphNormals!==ke||ge.morphColors!==$e||ge.toneMapping!==Ze||ge.morphTargetsCount!==We)&&(Ye=!0):(Ye=!0,ge.__version=G.version);let kt=ge.currentProgram;Ye===!0&&(kt=Ai(G,I,N));let bi=!1,gn=!1,_r=!1;const at=kt.getUniforms(),Jt=ge.uniforms;if(xe.useProgram(kt.program)&&(bi=!0,gn=!0,_r=!0),G.id!==U&&(U=G.id,gn=!0),bi||M!==S){at.setValue(L,"projectionMatrix",S.projectionMatrix),at.setValue(L,"viewMatrix",S.matrixWorldInverse);const At=at.map.cameraPosition;At!==void 0&&At.setValue(L,oe.setFromMatrixPosition(S.matrixWorld)),je.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,gn=!0,_r=!0)}if(N.isSkinnedMesh){at.setOptional(L,N,"bindMatrix"),at.setOptional(L,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),at.setValue(L,"boneTexture",At.boneTexture,Te))}N.isBatchedMesh&&(at.setOptional(L,N,"batchingTexture"),at.setValue(L,"batchingTexture",N._matricesTexture,Te),at.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",N._colorsTexture,Te));const vr=z.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&me.update(N,z,kt),(gn||ge.receiveShadow!==N.receiveShadow)&&(ge.receiveShadow=N.receiveShadow,at.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Jt.envMap.value=pe,Jt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(Jt.envMapIntensity.value=I.environmentIntensity),gn&&(at.setValue(L,"toneMappingExposure",y.toneMappingExposure),ge.needsLights&&Go(Jt,_r),ne&&G.fog===!0&&Q.refreshFogUniforms(Jt,ne),Q.refreshMaterialUniforms(Jt,G,k,C,d.state.transmissionRenderTarget[S.id]),Ji.upload(L,As(ge),Jt,Te)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ji.upload(L,As(ge),Jt,Te),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(L,"center",N.center),at.setValue(L,"modelViewMatrix",N.modelViewMatrix),at.setValue(L,"normalMatrix",N.normalMatrix),at.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const At=G.uniformsGroups;for(let xr=0,ko=At.length;xr<ko;xr++){const ws=At[xr];Ne.update(ws,kt),Ne.bind(ws,kt)}}return kt}function Go(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Vo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,I,z){Le.get(S.texture).__webglTexture=I,Le.get(S.depthTexture).__webglTexture=z;const G=Le.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const z=Le.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){w=S,O=I,R=z;let G=!0,N=null,ne=!1,he=!1;if(S){const pe=Le.get(S);pe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):pe.__webglFramebuffer===void 0?Te.setupRenderTarget(S):pe.__hasExternalTextures&&Te.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(he=!0);const Me=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?N=Me[I][z]:N=Me[I],ne=!0):S.samples>0&&Te.useMultisampledRTT(S)===!1?N=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(Me)?N=Me[z]:N=Me,_.copy(S.viewport),P.copy(S.scissor),B=S.scissorTest}else _.copy($).multiplyScalar(k).floor(),P.copy(ue).multiplyScalar(k).floor(),B=Pe;if(xe.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&xe.drawBuffers(S,N),xe.viewport(_),xe.scissor(P),xe.setScissorTest(B),ne){const pe=Le.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,z)}else if(he){const pe=Le.get(S.texture),Se=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,z||0,Se)}U=-1},this.readRenderTargetPixels=function(S,I,z,G,N,ne,he){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){xe.bindFramebuffer(L.FRAMEBUFFER,de);try{const pe=S.texture,Se=pe.format,Me=pe.type;if(!je.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&z>=0&&z<=S.height-N&&L.readPixels(I,z,G,N,ce.convert(Se),ce.convert(Me),ne)}finally{const pe=w!==null?Le.get(w).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(S,I,z,G,N,ne,he){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){xe.bindFramebuffer(L.FRAMEBUFFER,de);try{const pe=S.texture,Se=pe.format,Me=pe.type;if(!je.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-G&&z>=0&&z<=S.height-N){const ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(I,z,G,N,ce.convert(Se),ce.convert(Me),0),L.flush();const ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await $c(L,ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne)}finally{L.deleteBuffer(ve),L.deleteSync(ke)}return ne}}finally{const pe=w!==null?Le.get(w).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(S,I=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(S.image.width*G),ne=Math.floor(S.image.height*G),he=I!==null?I.x:0,de=I!==null?I.y:0;Te.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,he,de,N,ne),xe.unbindTexture()},this.copyTextureToTexture=function(S,I,z=null,G=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],I=arguments[2],N=arguments[3]||0,z=null);let ne,he,de,pe,Se,Me;z!==null?(ne=z.max.x-z.min.x,he=z.max.y-z.min.y,de=z.min.x,pe=z.min.y):(ne=S.image.width,he=S.image.height,de=0,pe=0),G!==null?(Se=G.x,Me=G.y):(Se=0,Me=0);const ve=ce.convert(I.format),ke=ce.convert(I.type);Te.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mt=L.getParameter(L.UNPACK_SKIP_PIXELS),We=L.getParameter(L.UNPACK_SKIP_ROWS),ge=L.getParameter(L.UNPACK_SKIP_IMAGES),pt=S.isCompressedTexture?S.mipmaps[N]:S.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,de),L.pixelStorei(L.UNPACK_SKIP_ROWS,pe),S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Se,Me,ne,he,ve,ke,pt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Se,Me,pt.width,pt.height,ve,pt.data):L.texSubImage2D(L.TEXTURE_2D,N,Se,Me,ve,ke,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,$e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ge),N===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z=null,G=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,S=arguments[2],I=arguments[3],N=arguments[4]||0);let ne,he,de,pe,Se,Me,ve,ke,$e;const Ze=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(ne=z.max.x-z.min.x,he=z.max.y-z.min.y,de=z.max.z-z.min.z,pe=z.min.x,Se=z.min.y,Me=z.min.z):(ne=Ze.width,he=Ze.height,de=Ze.depth,pe=0,Se=0,Me=0),G!==null?(ve=G.x,ke=G.y,$e=G.z):(ve=0,ke=0,$e=0);const Mt=ce.convert(I.format),We=ce.convert(I.type);let ge;if(I.isData3DTexture)Te.setTexture3D(I,0),ge=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Te.setTexture2DArray(I,0),ge=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),Ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kt=L.getParameter(L.UNPACK_SKIP_PIXELS),bi=L.getParameter(L.UNPACK_SKIP_ROWS),gn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),S.isDataTexture||S.isData3DTexture?L.texSubImage3D(ge,N,ve,ke,$e,ne,he,de,Mt,We,Ze.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,N,ve,ke,$e,ne,he,de,Mt,Ze.data):L.texSubImage3D(ge,N,ve,ke,$e,ne,he,de,Mt,We,Ze),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,bi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),N===0&&I.generateMipmaps&&L.generateMipmap(ge),xe.unbindTexture()},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&Te.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Te.setTextureCube(S,0):S.isData3DTexture?Te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Te.setTexture2DArray(S,0):Te.setTexture2D(S,0),xe.unbindTexture()},this.resetState=function(){O=0,R=0,w=null,xe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ps?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===hr?"display-p3":"srgb"}}class ap extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class op extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ar=new F,or=new F,Ka=new Je,gi=new ms,ji=new ur,Qr=new F,ja=new F;class cp extends ft{constructor(e=new Ct,t=new op){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ar.fromBufferAttribute(t,r-1),or.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ar.distanceTo(or);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),ji.radius+=s,e.ray.intersectsSphere(ji)===!1)return;Ka.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Ka);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=m,d=v-1;g<d;g+=l){const h=u.getX(g),E=u.getX(g+1),y=$i(this,e,gi,c,h,E);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(v-1),d=u.getX(m),h=$i(this,e,gi,c,g,d);h&&t.push(h)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let g=m,d=v-1;g<d;g+=l){const h=$i(this,e,gi,c,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=$i(this,e,gi,c,v-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $i(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(ar.fromBufferAttribute(a,r),or.fromBufferAttribute(a,s),t.distanceSqToSegment(ar,or,Qr,ja)>n)return;Qr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qr);if(!(c<e.near||c>e.far))return{distance:c,point:ja.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class pr extends Ct{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],f=[],m=[];let v=0;const g=[],d=n/2;let h=0;E(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(m,2));function E(){const T=new F,O=new F;let R=0;const w=(t-e)/n;for(let U=0;U<=s;U++){const M=[],_=U/s,P=_*(t-e)+e;for(let B=0;B<=r;B++){const V=B/r,q=V*c+o,A=Math.sin(q),C=Math.cos(q);O.x=P*A,O.y=-_*n+d,O.z=P*C,p.push(O.x,O.y,O.z),T.set(A,w,C).normalize(),f.push(T.x,T.y,T.z),m.push(V,1-_),M.push(v++)}g.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const _=g[M][U],P=g[M+1][U],B=g[M+1][U+1],V=g[M][U+1];u.push(_,P,V),u.push(P,B,V),R+=6}l.addGroup(h,R,0),h+=R}function y(T){const O=v,R=new Oe,w=new F;let U=0;const M=T===!0?e:t,_=T===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,d*_,0),f.push(0,_,0),m.push(.5,.5),v++;const P=v;for(let B=0;B<=r;B++){const q=B/r*c+o,A=Math.cos(q),C=Math.sin(q);w.x=M*C,w.y=d*_,w.z=M*A,p.push(w.x,w.y,w.z),f.push(0,_,0),R.x=A*.5+.5,R.y=C*.5*_+.5,m.push(R.x,R.y),v++}for(let B=0;B<r;B++){const V=O+B,q=P+B;T===!0?u.push(q,q+1,V):u.push(q+1,q,V),U+=3}l.addGroup(h,U,T===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vs extends pr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xs extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const y=new F,T=new F,O=new F;for(let R=0;R<t.length;R+=3)m(t[R+0],y),m(t[R+1],T),m(t[R+2],O),c(y,T,O,E)}function c(E,y,T,O){const R=O+1,w=[];for(let U=0;U<=R;U++){w[U]=[];const M=E.clone().lerp(T,U/R),_=y.clone().lerp(T,U/R),P=R-U;for(let B=0;B<=P;B++)B===0&&U===R?w[U][B]=M:w[U][B]=M.clone().lerp(_,B/P)}for(let U=0;U<R;U++)for(let M=0;M<2*(R-U)-1;M++){const _=Math.floor(M/2);M%2===0?(f(w[U][_+1]),f(w[U+1][_]),f(w[U][_])):(f(w[U][_+1]),f(w[U+1][_+1]),f(w[U+1][_]))}}function l(E){const y=new F;for(let T=0;T<s.length;T+=3)y.x=s[T+0],y.y=s[T+1],y.z=s[T+2],y.normalize().multiplyScalar(E),s[T+0]=y.x,s[T+1]=y.y,s[T+2]=y.z}function u(){const E=new F;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const T=d(E)/2/Math.PI+.5,O=h(E)/Math.PI+.5;a.push(T,1-O)}v(),p()}function p(){for(let E=0;E<a.length;E+=6){const y=a[E+0],T=a[E+2],O=a[E+4],R=Math.max(y,T,O),w=Math.min(y,T,O);R>.9&&w<.1&&(y<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),O<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function m(E,y){const T=E*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function v(){const E=new F,y=new F,T=new F,O=new F,R=new Oe,w=new Oe,U=new Oe;for(let M=0,_=0;M<s.length;M+=9,_+=6){E.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),T.set(s[M+6],s[M+7],s[M+8]),R.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),U.set(a[_+4],a[_+5]),O.copy(E).add(y).add(T).divideScalar(3);const P=d(O);g(R,_+0,E,P),g(w,_+2,y,P),g(U,_+4,T,P)}}function g(E,y,T,O){O<0&&E.x===1&&(a[y]=E.x-1),T.x===0&&T.z===0&&(a[y]=O/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.vertices,e.indices,e.radius,e.details)}}class Ss extends xs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ss(e.radius,e.detail)}}class Ms extends Ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new F,p=new F,f=new F;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const g=v/r*s,d=m/n*Math.PI*2;p.x=(e+t*Math.cos(d))*Math.cos(g),p.y=(e+t*Math.cos(d))*Math.sin(g),p.z=t*Math.sin(d),o.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(p,u).normalize(),c.push(f.x,f.y,f.z),l.push(v/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const g=(r+1)*m+v-1,d=(r+1)*(m-1)+v-1,h=(r+1)*(m-1)+v,E=(r+1)*m+v;a.push(g,d,E),a.push(d,h,E)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lp extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hp extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class up extends hp{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new Je;class dp{constructor(e,t,n=0,r=1/0){this.ray=new ms(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $a.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($a),this}intersectObject(e,t=!0,n=[]){return us(e,this,n,t),n.sort(Za),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)us(e[r],this,n,t);return n.sort(Za),n}}function Za(i,e){return i.distance-e.distance}function us(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)us(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fs);class si{static createButton(e,t={}){const n=document.createElement("button");function r(){let l=null;async function u(m){m.addEventListener("end",p),await e.xr.setSession(m),n.textContent="EXIT VR",l=m}function p(){l.removeEventListener("end",p),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(u):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(u).catch(m=>{console.warn(m)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():a(),l&&si.xrSessionIsGranted&&n.click()}).catch(o),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{si.xrSessionIsGranted=!0})}}}si.xrSessionIsGranted=!1;si.registerSessionGrantedListener();var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ds={exports:{}};(function(i,e){var t=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Zi<"u"&&Zi,n=function(){function s(){this.fetch=!1,this.DOMException=t.DOMException}return s.prototype=t,new s}();(function(s){(function(a){var o=typeof s<"u"&&s||typeof self<"u"&&self||typeof Zi<"u"&&Zi||{},c={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(A){return A&&DataView.prototype.isPrototypeOf(A)}if(c.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],p=ArrayBuffer.isView||function(A){return A&&u.indexOf(Object.prototype.toString.call(A))>-1};function f(A){if(typeof A!="string"&&(A=String(A)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(A)||A==="")throw new TypeError('Invalid character in header field name: "'+A+'"');return A.toLowerCase()}function m(A){return typeof A!="string"&&(A=String(A)),A}function v(A){var C={next:function(){var k=A.shift();return{done:k===void 0,value:k}}};return c.iterable&&(C[Symbol.iterator]=function(){return C}),C}function g(A){this.map={},A instanceof g?A.forEach(function(C,k){this.append(k,C)},this):Array.isArray(A)?A.forEach(function(C){if(C.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+C.length);this.append(C[0],C[1])},this):A&&Object.getOwnPropertyNames(A).forEach(function(C){this.append(C,A[C])},this)}g.prototype.append=function(A,C){A=f(A),C=m(C);var k=this.map[A];this.map[A]=k?k+", "+C:C},g.prototype.delete=function(A){delete this.map[f(A)]},g.prototype.get=function(A){return A=f(A),this.has(A)?this.map[A]:null},g.prototype.has=function(A){return this.map.hasOwnProperty(f(A))},g.prototype.set=function(A,C){this.map[f(A)]=m(C)},g.prototype.forEach=function(A,C){for(var k in this.map)this.map.hasOwnProperty(k)&&A.call(C,this.map[k],k,this)},g.prototype.keys=function(){var A=[];return this.forEach(function(C,k){A.push(k)}),v(A)},g.prototype.values=function(){var A=[];return this.forEach(function(C){A.push(C)}),v(A)},g.prototype.entries=function(){var A=[];return this.forEach(function(C,k){A.push([k,C])}),v(A)},c.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function d(A){if(!A._noBody){if(A.bodyUsed)return Promise.reject(new TypeError("Already read"));A.bodyUsed=!0}}function h(A){return new Promise(function(C,k){A.onload=function(){C(A.result)},A.onerror=function(){k(A.error)}})}function E(A){var C=new FileReader,k=h(C);return C.readAsArrayBuffer(A),k}function y(A){var C=new FileReader,k=h(C),H=/charset=([A-Za-z0-9_-]+)/.exec(A.type),ee=H?H[1]:"utf-8";return C.readAsText(A,ee),k}function T(A){for(var C=new Uint8Array(A),k=new Array(C.length),H=0;H<C.length;H++)k[H]=String.fromCharCode(C[H]);return k.join("")}function O(A){if(A.slice)return A.slice(0);var C=new Uint8Array(A.byteLength);return C.set(new Uint8Array(A)),C.buffer}function R(){return this.bodyUsed=!1,this._initBody=function(A){this.bodyUsed=this.bodyUsed,this._bodyInit=A,A?typeof A=="string"?this._bodyText=A:c.blob&&Blob.prototype.isPrototypeOf(A)?this._bodyBlob=A:c.formData&&FormData.prototype.isPrototypeOf(A)?this._bodyFormData=A:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(A)?this._bodyText=A.toString():c.arrayBuffer&&c.blob&&l(A)?(this._bodyArrayBuffer=O(A.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(A)||p(A))?this._bodyArrayBuffer=O(A):this._bodyText=A=Object.prototype.toString.call(A):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof A=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(A)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var A=d(this);if(A)return A;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var A=d(this);return A||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(E);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var A=d(this);if(A)return A;if(this._bodyBlob)return y(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(T(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}var w=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function U(A){var C=A.toUpperCase();return w.indexOf(C)>-1?C:A}function M(A,C){if(!(this instanceof M))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');C=C||{};var k=C.body;if(A instanceof M){if(A.bodyUsed)throw new TypeError("Already read");this.url=A.url,this.credentials=A.credentials,C.headers||(this.headers=new g(A.headers)),this.method=A.method,this.mode=A.mode,this.signal=A.signal,!k&&A._bodyInit!=null&&(k=A._bodyInit,A.bodyUsed=!0)}else this.url=String(A);if(this.credentials=C.credentials||this.credentials||"same-origin",(C.headers||!this.headers)&&(this.headers=new g(C.headers)),this.method=U(C.method||this.method||"GET"),this.mode=C.mode||this.mode||null,this.signal=C.signal||this.signal||function(){if("AbortController"in o){var $=new AbortController;return $.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&k)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(k),(this.method==="GET"||this.method==="HEAD")&&(C.cache==="no-store"||C.cache==="no-cache")){var H=/([?&])_=[^&]*/;if(H.test(this.url))this.url=this.url.replace(H,"$1_="+new Date().getTime());else{var ee=/\?/;this.url+=(ee.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}M.prototype.clone=function(){return new M(this,{body:this._bodyInit})};function _(A){var C=new FormData;return A.trim().split("&").forEach(function(k){if(k){var H=k.split("="),ee=H.shift().replace(/\+/g," "),$=H.join("=").replace(/\+/g," ");C.append(decodeURIComponent(ee),decodeURIComponent($))}}),C}function P(A){var C=new g,k=A.replace(/\r?\n[\t ]+/g," ");return k.split("\r").map(function(H){return H.indexOf(`
`)===0?H.substr(1,H.length):H}).forEach(function(H){var ee=H.split(":"),$=ee.shift().trim();if($){var ue=ee.join(":").trim();try{C.append($,ue)}catch(Pe){console.warn("Response "+Pe.message)}}}),C}R.call(M.prototype);function B(A,C){if(!(this instanceof B))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(C||(C={}),this.type="default",this.status=C.status===void 0?200:C.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=C.statusText===void 0?"":""+C.statusText,this.headers=new g(C.headers),this.url=C.url||"",this._initBody(A)}R.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},B.error=function(){var A=new B(null,{status:200,statusText:""});return A.ok=!1,A.status=0,A.type="error",A};var V=[301,302,303,307,308];B.redirect=function(A,C){if(V.indexOf(C)===-1)throw new RangeError("Invalid status code");return new B(null,{status:C,headers:{location:A}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(C,k){this.message=C,this.name=k;var H=Error(C);this.stack=H.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function q(A,C){return new Promise(function(k,H){var ee=new M(A,C);if(ee.signal&&ee.signal.aborted)return H(new a.DOMException("Aborted","AbortError"));var $=new XMLHttpRequest;function ue(){$.abort()}$.onload=function(){var X={statusText:$.statusText,headers:P($.getAllResponseHeaders()||"")};ee.url.indexOf("file://")===0&&($.status<200||$.status>599)?X.status=200:X.status=$.status,X.url="responseURL"in $?$.responseURL:X.headers.get("X-Request-URL");var Z="response"in $?$.response:$.responseText;setTimeout(function(){k(new B(Z,X))},0)},$.onerror=function(){setTimeout(function(){H(new TypeError("Network request failed"))},0)},$.ontimeout=function(){setTimeout(function(){H(new TypeError("Network request timed out"))},0)},$.onabort=function(){setTimeout(function(){H(new a.DOMException("Aborted","AbortError"))},0)};function Pe(X){try{return X===""&&o.location.href?o.location.href:X}catch{return X}}if($.open(ee.method,Pe(ee.url),!0),ee.credentials==="include"?$.withCredentials=!0:ee.credentials==="omit"&&($.withCredentials=!1),"responseType"in $&&(c.blob?$.responseType="blob":c.arrayBuffer&&($.responseType="arraybuffer")),C&&typeof C.headers=="object"&&!(C.headers instanceof g||o.Headers&&C.headers instanceof o.Headers)){var Ge=[];Object.getOwnPropertyNames(C.headers).forEach(function(X){Ge.push(f(X)),$.setRequestHeader(X,m(C.headers[X]))}),ee.headers.forEach(function(X,Z){Ge.indexOf(Z)===-1&&$.setRequestHeader(Z,X)})}else ee.headers.forEach(function(X,Z){$.setRequestHeader(Z,X)});ee.signal&&(ee.signal.addEventListener("abort",ue),$.onreadystatechange=function(){$.readyState===4&&ee.signal.removeEventListener("abort",ue)}),$.send(typeof ee._bodyInit>"u"?null:ee._bodyInit)})}return q.polyfill=!0,o.fetch||(o.fetch=q,o.Headers=g,o.Request=M,o.Response=B),a.Headers=g,a.Request=M,a.Response=B,a.fetch=q,a})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=t.fetch?t:n;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,i.exports=e})(ds,ds.exports);var pp=ds.exports;const es=fp(pp),ct=[];for(let i=0;i<256;++i)ct.push((i+256).toString(16).slice(1));function mp(i,e=0){return(ct[i[e+0]]+ct[i[e+1]]+ct[i[e+2]]+ct[i[e+3]]+"-"+ct[i[e+4]]+ct[i[e+5]]+"-"+ct[i[e+6]]+ct[i[e+7]]+"-"+ct[i[e+8]]+ct[i[e+9]]+"-"+ct[i[e+10]]+ct[i[e+11]]+ct[i[e+12]]+ct[i[e+13]]+ct[i[e+14]]+ct[i[e+15]]).toLowerCase()}let ts;const gp=new Uint8Array(16);function _p(){if(!ts){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ts=crypto.getRandomValues.bind(crypto)}return ts(gp)}const vp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ja={randomUUID:vp};function xp(i,e,t){var r;if(Ja.randomUUID&&!e&&!i)return Ja.randomUUID();i=i||{};const n=i.random??((r=i.rng)==null?void 0:r.call(i))??_p();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){if(t=t||0,t<0||t+16>e.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let s=0;s<16;++s)e[t+s]=n[s];return e}return mp(n)}class Sp{constructor(){this.LOG=!1,this.SdkVersion="1.1.0",this.networkHost="data.cognitive3d.com",this.APIKey="",this.networkVersion="0",this.sensorDataLimit=64,this.dynamicDataLimit=64,this.customEventBatchSize=64,this.gazeBatchSize=64,this.GazeInterval=.1,this.HMDType="Quest 2",this.allSceneData=[]}sceneData(e,t,n){return{sceneName:e,sceneId:t,versionNumber:n}}set settings(e){e.LOG&&(this.LOG=e.LOG),e.SdkVersion&&(this.SdkVersion=e.SdkVersion),e.networkHost&&(this.networkHost=e.networkHost),e.APIKey&&(this.APIKey=e.APIKey),e.networkVersion&&(this.networkVersion=e.networkVersion),e.sensorDataLimit&&(this.sensorDataLimit=e.sensorDataLimit),e.dynamicDataLimit&&(this.dynamicDataLimit=e.dynamicDataLimit),e.customEventBatchSize&&(this.customEventBatchSize=e.customEventBatchSize),e.gazeBatchSize&&(this.gazeBatchSize=e.gazeBatchSize),e.GazeInterval&&(this.GazeInterval=e.GazeInterval),e.HMDType&&(this.HMDType=e.HMDType),e.allSceneData&&(this.allSceneData=e.allSceneData)}}const Mp=new Sp;class yp{constructor(){this.config=Mp,this.isSessionActive=!1,this.sceneData=this.getCurrentScene(),this.userId="",this.deviceId="",this.sessionId="",this.sessionTimestamp="",this.newDeviceProperties={},this.newUserProperties={},this.lobbyId="",this.devicePropertyMap={AppName:"cvr.app.name",AppVersion:"cvr.app.version",AppEngine:"cvr.app.engine",AppEngineVersion:"cvr.app.engine.version",DeviceType:"cvr.device.type",DeviceModel:"cvr.device.model",DeviceMemory:"cvr.device.memory",DeviceOS:"cvr.device.os",DevicePlatform:"cvr.device.platform",DeviceCPU:"cvr.device.cpu",DeviceCPUCores:"cvr.device.cpu.cores",DeviceCPUVendor:"cvr.device.cpu.vendor",DeviceGPU:"cvr.device.gpu",DeviceGPUDriver:"cvr.device.gpu.driver",DeviceGPUVendor:"cvr.device.gpu.vendor",DeviceGPUMemory:"cvr.device.gpu.memory",DeviceScreenHeight:"cvr.device.screen.height",DeviceScreenWidth:"cvr.device.screen.width",VRModel:"cvr.vr.model",VRVendor:"cvr.vr.vendor"}}getSessionTimestamp(){return this.sessionTimestamp||(this.sessionTimestamp=parseInt(this.getTimestamp(),10)),this.sessionTimestamp}getCurrentScene(){let e;return this.config.allSceneData.length===1?e=this.config.allSceneData[0]:e={sceneName:"",sceneId:"",versionNumber:""},e}setScene(e){let t=!1;for(let n=0;n<=this.config.allSceneData.length-1;n++)if(this.config.allSceneData[n].sceneName===e){this.sceneData=this.config.allSceneData[n],t=!0;break}t||(console.error("CognitiveVRAnalyticsCore::SetScene Config scene ids does not contain key for scene "+e),this.sceneData.sceneName="",this.sceneData.sceneId="",this.sceneData.versionNumber="")}getTimestamp(){return Date.now()/1e3}isSessionActive1(){return this.isSessionActive}getSessionId(){return this.sessionId||(this.userId?this.sessionId="".concat(this.sessionTimestamp,"_").concat(this.userId):this.sessionId="".concat(this.sessionTimestamp,"_").concat(this.deviceId)),this.sessionId}getSceneData(e,t,n){return{sceneName:e,sceneId:t,versionNumber:n}}set setSessionId(e){this.sessionId=e}set setUserId(e){this.userId=e}set setDeviceId(e){this.deviceId=e}set setSessionStatus(e){this.isSessionActive=e}set setSessionTimestamp(e){this.sessionTimestamp=e}setUserProperty(e,t){this.newUserProperties[e]=t}setDeviceProperty(e,t){this.newDeviceProperties[this.devicePropertyString(e)]=t}getApiKey(){return this.config.APIKey}devicePropertyString(e,t){return this.devicePropertyMap[e]?this.devicePropertyMap[e]:"unknown.property"}resetNewUserDeviceProperties(){this.newUserProperties={},this.newDeviceProperties={}}setLobbyId(e){this.lobbyId=e}}var Ep=new yp;function Tp(i,e,t){return(e=bp(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Qa(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function ns(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qa(Object(t),!0).forEach(function(n){Tp(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Qa(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Ap(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function bp(i){var e=Ap(i,"string");return typeof e=="symbol"?e:e+""}const mr=typeof window<"u"&&typeof document<"u";typeof process<"u"&&process.versions!=null&&process.versions.node!=null;const Ei=(i,e)=>{if(!mr)return e;try{return i()}catch(t){return console.warn("Error accessing window property:",t),e}},wp=()=>Ei(()=>navigator.deviceMemory,null),No=()=>Ei(()=>navigator.platform,"unknown"),Rp=()=>Ei(()=>window.screen.height,null),Cp=()=>Ei(()=>window.screen.width,null),Oo=()=>Ei(()=>navigator.userAgent,""),Pp=()=>{if(!mr)return"unknown";const i=Oo(),e=No(),t=["Macintosh","MacIntel","MacPPC","Mac68K"],n=["Win32","Win64","Windows","WinCE"],r=["iPhone","iPad","iPod"];return t.indexOf(e)!==-1?"MacOS":r.indexOf(e)!==-1?"iOS":n.indexOf(e)!==-1?"Windows":/Android/.test(i)?"Android":/Linux/.test(e)?"Linux":"unknown"},Dp=()=>{if(!mr)return"unknown";const i=Oo();return i.match(/mobile/i)?"Mobile":i.match(/iPad|Android|Touch/i)?"Tablet":"Desktop"};class hi{constructor(e){this.core=e}isOnline(){return mr&&navigator&&typeof navigator.onLine=="boolean"?navigator.onLine:!0}networkCall(e,t){return new Promise((n,r)=>{if(!this.core.sceneData.sceneId||!this.core.sceneData.versionNumber)return r("no scene selected"),"no scene selected";const s="https://".concat(this.core.config.networkHost,"/v").concat(this.core.config.networkVersion,"/").concat(e,"/").concat(this.core.sceneData.sceneId,"?version=").concat(this.core.sceneData.versionNumber),a={method:"post",headers:{Authorization:"APIKEY:DATA ".concat(this.core.config.APIKey),"Content-Type":"application/json"},body:JSON.stringify(t)};if(this.isOnline())es(s,a).then(o=>n(o.status)).catch(o=>{console.error("Network error:",o),r(o)});else{const o="Network.networkCall failed: please check internet connection.";console.log(o),n(o)}})}networkExitpollGet(e){return new Promise((t,n)=>{const r="https://".concat(this.core.config.networkHost,"/v").concat(this.core.config.networkVersion,"/questionSetHooks/").concat(e,"/questionSet");console.log("Network.networkExitpollGet: ".concat(r));const s={method:"get",headers:{Authorization:"APIKEY:DATA ".concat(this.core.config.APIKey),"Content-Type":"application/json"}};es(r,s).then(a=>a.json()).then(a=>t(a)).catch(a=>n(a))})}networkExitpollPost(e,t,n){return new Promise((r,s)=>{const a={method:"post",headers:{Authorization:"APIKEY:DATA ".concat(this.core.config.APIKey),"Content-Type":"application/json"},body:JSON.stringify(n)},o="https://".concat(this.core.config.networkHost,"/v").concat(this.core.config.networkVersion,"/questionSets/").concat(e,"/").concat(t,"/responses");es(o,a).then(c=>c.status).then(c=>r(c)).catch(c=>{console.error("Error posting exit poll:",c),s(c)})})}}class Lp{constructor(e){this.core=e,this.network=new hi(e),this.playerSnapshotInterval=void 0,this.HMDType=void 0,this.batchedGaze=[],this.jsonPart=1}recordGaze(e,t,n,r){let a={time:this.core.getTimestamp(),p:[...e],r:[...t]};n&&(a.g=[...n]),r&&(a.o=r),this.batchedGaze=this.batchedGaze.concat([a]),this.batchedGaze.length>=this.core.config.gazeBatchSize&&this.sendData()}setInterval(e){this.playerSnapshotInterval=e}setHMDType(e){this.HMDType=e}sendData(){return new Promise((e,t)=>{if(!this.core.isSessionActive){t("GazeTracker.sendData failed: no session active"),console.log("GazeTracker.sendData failed: no session active");return}let n=this.core.newDeviceProperties,r=this.core.newUserProperties;if(this.batchedGaze.length===0&&n.length===0&&r.length===0){t();return}let s={};s.userid=this.core.userId,s.timestamp=parseInt(this.core.getTimestamp(),10),s.sessionid=this.core.getSessionId(),this.core.lobbyId&&(s.lobbyId=this.core.lobbyId),s.part=this.jsonPart,this.jsonPart++,s.hmdtype=this.HMDType,s.interval=this.playerSnapshotInterval,s.data=this.batchedGaze,s.properties={},Object.keys(n).length&&(s.properties=ns({},n)),Object.keys(r).length&&(s.properties=ns(ns({},s.properties),r)),this.network.networkCall("gaze",s).then(a=>a===200?e(a):t(a)),this.batchedGaze=[]})}endSession(){this.batchedGaze=[],this.jsonPart=1}}class Up{constructor(e){this.core=e,this.network=new hi(e),this.batchedCustomEvents=[],this.jsonPart=1}send(e,t,n){let r={};r.name=e,r.time=this.core.getTimestamp(),r.point=[t[0],t[1],t[2]],r.lobbyId=this.core.lobbyId,n&&(r.properties=n),this.batchedCustomEvents=this.batchedCustomEvents.concat([r]),this.batchedCustomEvents.length>=this.core.config.customEventBatchSize&&this.sendData()}sendData(){return new Promise((e,t)=>{if(this.core.isSessionActive){let n={};n.userid=this.core.userId,n.timestamp=parseInt(this.core.getTimestamp(),10),n.sessionid=this.core.getSessionId(),n.part=this.jsonPart,this.jsonPart++,n.data=this.batchedCustomEvents,this.network.networkCall("events",n).then(r=>r===200?e(r):t(r)),this.batchedCustomEvents=[]}else{e("CustomEvent.sendData failed: no session active"),console.log("CustomEvent.sendData failed: no session active");return}})}endSession(){this.batchedCustomEvents=[],this.jsonPart=1}}class Ip{constructor(e){this.core=e,this.network=new hi(e),this.allSensors=[],this.sensorCount=0,this.jsonPart=1}recordSensor(e,t){let n=[this.core.getTimestamp(),t],r=this.allSensors.find(s=>s.name===e);r?r.data.push(n):this.allSensors.push({name:e,data:[n]}),this.sensorCount++,this.sensorCount>=this.core.config.sensorDataLimit&&this.sendData()}sendData(){return new Promise((e,t)=>{if(!this.core.isSessionActive){t("Sensor.sendData failed: no session active"),console.log("Sensor.sendData failed: no session active");return}if(this.allSensors.length===0){console.log("no sensor data"),e("no sensor data");return}let n={};n.name=this.core.userId,n.sessionid=this.core.getSessionId(),n.timestamp=parseInt(this.core.getTimestamp(),10),n.part=this.jsonPart,this.jsonPart++,n.data=this.allSensors,this.network.networkCall("sensors",n).then(r=>r===200?e(r):t(r)),this.sensorCount=0,this.allSensors=[]})}endSession(){this.allSensors=[],this.jsonPart=1}}class Np{constructor(e,t){this.core=e,this.network=new hi(e),this.customEvent=t,this.currentQuestionSetString="",this.fullResponse={},this.currentQuestionSet={},this.answerType={happySad:"HAPPYSAD",boolean:"BOOLEAN",thumbs:"THUMBS",scale:"SCALE",multiple:"MULTIPLE",voice:"VOICE"}}requestQuestionSet(e){return new Promise((t,n)=>{if(!this.core.isSessionActive){n("ExitPoll.requestQuestionSet failed: no session active"),console.log("ExitPoll.requestQuestionSet failed: no session active");return}this.network.networkExitpollGet(e,this.exitPollCalback).then(r=>{this.receiveQuestionSet(r,e),t(!0)})})}receiveQuestionSet(e,t){this.currentQuestionSetString=JSON.stringify(e),this.fullResponse.hook=t,this.fullResponse.userId=this.core.userId,this.fullResponse.sceneId=this.core.sceneData.sceneId,this.fullResponse.sessionId=this.core.sessionId,this.fullResponse.questionSetId=e.id;let n=e.id.split(":");this.fullResponse.questionSetName=n[0],this.fullResponse.questionSetVersion=n[1],this.currentQuestionSet=e}getQuestionSetString(){return this.currentQuestionSetString||console.log("ExitPoll.currentQuestionSetString no active question set. Returning empty json string"),this.currentQuestionSetString}getQuestionSet(){return this.currentQuestionSet||console.log("ExitPoll.GetQuestionSet no active question set. Returning empty json"),this.currentQuestionSet}clearQuestionSet(){this.currentQuestionSetString="",this.currentQuestionSet="",this.fullResponse={}}addAnswer(e,t){if(!e||t===void 0||t===null){console.error("ExitPoll.addAnswer: cannot add anser, it takes two arguments, type and answer");return}let n={};n.type=this.answerType[e]?this.answerType[e]:"BOOlEAN",n.value=t,this.fullResponse.answers&&Array.isArray(this.fullResponse.answers)?this.fullResponse.answers.push(n):this.fullResponse.answers=[n]}sendAllAnswers(e){return new Promise((t,n)=>{if(!this.core.isSessionActive){n("ExitPoll.sendAllAnswers failed: no session active"),console.log("ExitPoll.sendAllAnswers failed: no session active");return}this.network.networkExitpollPost(this.fullResponse.questionSetName,this.fullResponse.questionSetVersion,this.fullResponse).then(s=>s===200?t(200):n(s)),e||(e=[0,0,0]);let r={};r.userId=this.core.userId,r.questionSetId=this.fullResponse.questionSetId,r.hook=this.fullResponse.hook;for(let s=0;s<this.fullResponse.answers.length;s++)r["Answer".concat(s)]=typeof this.fullResponse.answers[s].value=="string"?0:this.fullResponse.answers[s].value;this.customEvent.send("cvr.exitpoll",e,r),this.clearQuestionSet()})}}class Op{constructor(e,t){this.core=e,this.network=new hi(e),this.customEvent=t,this.generatedIdOffset=1e3,this.jsonPart=1,this.objectIds=[],this.snapshots=[],this.fullManifest=[],this.manifestEntries=[],this.activeEngagements={},this.allEngagements={},this.engagementCounts={}}registerObjectCustomId(e,t,n,r,s){for(let l=0;l<this.objectIds.length;l++)if(this.objectIds[l].id===n){console.log("DynamicObject.registerObjectCustomId object id "+n+" already registered");break}let a=this.dynamicObjectId(n,t);this.objectIds.push(a);let o=this.dynamicObjectManifestEntry(a.id,e,t);this.manifestEntries.push(o),this.fullManifest.push(o);let c={};c.enabled=!0,this.addSnapshot(n,r,s,c),this.snapshots.length+this.manifestEntries.length>=this.core.config.dynamicDataLimit&&this.sendData()}registerObject(e,t,n,r){let s=this.dynamicObjectId(xp(),t);{this.objectIds.push(s);let o=this.dynamicObjectManifestEntry(s.id,e,t);this.manifestEntries.push(o),this.fullManifest.push(o)}let a={};return a.enabled=!0,this.addSnapshot(s.id,n,r,a),this.snapshots.length+this.manifestEntries.length>=this.core.config.dynamicDataLimit&&this.sendData(),s.id}addSnapshot(e,t,n,r){let s=!1;for(let o of this.objectIds)if(e===o.id){s=!0;break}s||console.warn("DynamicObject::Snapshot cannot find objectId "+e+" in full manifest. Did you Register this object?");let a=this.dynamicObjectSnapshot(t,n,e,r);if(this.allEngagements[e]&&Object.keys(this.allEngagements[e]).length>0){for(let o of this.allEngagements[e]){a.engagements||(a.engagements=[]);let c={};c.engagementtype=o.name,c.engagementparent=o.id,c.engagement_count=o.engagementNumber,c.engagement_time=o.isActive?this.core.getTimestamp()-o.startTime:o.endTime,a.engagements.push(c)}console.log("all engagements pre "+this.allEngagements[e].length),this.removeInActiveEngagementsOfAnObject(e),console.log("all engagements post "+this.allEngagements[e].length)}this.snapshots.push(a),this.snapshots.length+this.manifestEntries.length>=this.core.config.dynamicDataLimit&&this.sendData()}removeInActiveEngagementsOfAnObject(e){let{length:t}=this.allEngagements[e];for(;t--;)this.allEngagements[e][t].isActive||this.allEngagements[e].splice(t,1),this.activeEngagements[e][t].isActive||this.activeEngagements[e].splice(t,1)}sendData(){return new Promise((e,t)=>{if(!this.core.isSessionActive){console.log("DynamicObject.sendData failed: no session active"),e("DynamicObject.sendData failed: no session active");return}if(this.manifestEntries.length+this.snapshots.length===0){e("no manifest entries/snapshots"),console.log("no manifest entries/snapshots");return}let n={};n.userid=this.core.userId,n.timestamp=this.core.getTimestamp(),n.sessionid=this.core.sessionId,n.part=this.jsonPart,this.jsonPart++;let r={};for(let a of this.manifestEntries){let o={};o.name=a.name,o.mesh=a.meshname,r[a.id]=o}n.manifest=r;let s=[];for(let a of this.snapshots){let o={};o.id=a.id,o.time=a.time,o.p=a.position,o.r=a.rotation,a.engagements&&a.engagements.length&&(o.engagements=a.engagements),a.properties&&(o.properties=a.properties),s.push(o)}n.data=s,this.network.networkCall("dynamics",n).then(a=>a===200?e(200):t(a)),this.manifestEntries=[],this.snapshots=[]})}dynamicObjectSnapshot(e,t,n,r){let s={};return s.position=e,s.rotation=t,s.time=this.core.getTimestamp(),s.id=n,r&&(s.properties=r),s}dynamicObjectEngagementEvent(e,t,n){let r={};return r.isActive=!0,r.startTime=this.core.getTimestamp(),r.name=t,r.id=e,r.engagementNumber=n,r}dynamicObjectId(e,t){return{id:e,used:!0,meshname:t}}dynamicObjectManifestEntry(e,t,n){return{id:e,name:t,mesh:n}}endSession(){this.fullManifest=[],this.manifestEntries=[],this.objectIds=[],this.snapshots=[],this.engagementCount={},this.allEngagements={}}refreshObjectManifest(){for(var e=0;e<this.fullManifest.length;e++){var t=this.fullManifest[e];this.manifestEntries.push(t)}}removeObject(e,t,n){this.endActiveEngagements(e);let r={};r.enabled=!1,this.addSnapshot(e,t,n,r);for(let s=0;s<this.objectIds.length;s++)if(this.objectIds[s].id===e){this.objectIds[s].used=!1;return}}beginEngagement(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;console.log("DynamicObject::beginEngagement engagement "+t+" on object "+e),this.engagementCounts[e]||(this.engagementCounts[e]={}),this.engagementCounts[e][t]?this.engagementCounts[e][t]=this.engagementCounts[e][t]+1:this.engagementCounts[e][t]=1;let r=this.dynamicObjectEngagementEvent(n,t,this.engagementCounts[e][t]);this.activeEngagements[e]||(this.activeEngagements[e]=[]),this.allEngagements[e]||(this.allEngagements[e]=[]),this.activeEngagements[e].push(r),this.allEngagements[e].push(r)}endActiveEngagements(e){if(this.activeEngagements[e])for(let t=0;t<this.activeEngagements[e].length;t++)this.activeEngagements[e][t].isActive&&(this.activeEngagements[e][t].isActive=!1)}endEngagement(e,t,n){if(this.activeEngagements[e]){for(let r=0;r<this.activeEngagements[e].length;r++)if(n){if(this.activeEngagements[e][r].isActive&&this.activeEngagements[e][r].name===t&&this.activeEngagements[e][r].id===n){this.activeEngagements[e][r].isActive=!1,this.activeEngagements[e][r].endTime=this.core.getTimestamp()-this.activeEngagements[e][r].startTime;return}}else if(this.activeEngagements[e][r].name===t){this.activeEngagements[e][r].isActive=!1,this.activeEngagements[e][r].endTime=this.core.getTimestamp()-this.activeEngagements[e][r].startTime;return}}console.log("DynamicObject::EndEngagement engagement "+t+" not found on object"+e+". Begin+End"),this.beginEngagement(e,t,n);for(let r=0;r<this.activeEngagements[e].length;r++)if(n){if(this.activeEngagements[e].isActive&&this.activeEngagements[e].name===t&&this.activeEngagements[e].id===n){this.activeEngagements[e].isActive=!1,this.activeEngagements[e][r].endTime=this.core.getTimestamp()-this.activeEngagements[e][r].startTime;return}}else if(this.activeEngagements[e].name===t){this.activeEngagements[e].isActive=!1,this.activeEngagements[e][r].endTime=this.core.getTimestamp()-this.activeEngagements[e][r].startTime;return}}}class Fp{constructor(e){this.core=Ep,e&&(this.core.config.settings=e.config),this.network=new hi(this.core),this.gaze=new Lp(this.core),this.customEvent=new Up(this.core),this.sensor=new Ip(this.core),this.exitpoll=new Np(this.core,this.customEvent),this.dynamicObject=new Op(this.core,this.customEvent);const t=wp();t&&this.setDeviceProperty("DeviceMemory",t*1e3);const n=No();n&&this.setDeviceProperty("DeviceType",n);const r=Rp();r&&this.setDeviceProperty("DeviceScreenHeight",r);const s=Cp();s&&this.setDeviceProperty("DeviceScreenWidth",s),this.setDeviceProperty("DevicePlatform",Dp()),this.setDeviceProperty("DeviceOS",Pp())}startSession(){return this.core.isSessionActive?!1:(this.core.setSessionStatus=!0,this.core.getSessionTimestamp(),this.core.getSessionId(),this.gaze.setHMDType(this.core.config.HMDType),this.gaze.setInterval(this.core.config.GazeInterval),this.customEvent.send("Session Start",[0,0,0]),!0)}endSession(){return new Promise((e,t)=>{if(!this.core.isSessionActive){t("session is not active");return}const n={},r=[0,0,0],s=this.core.getTimestamp()-this.core.sessionTimestamp;n.sessionLength=s,this.customEvent.send("Session End",r,n),this.sendData().then(a=>{this.core.setSessionTimestamp="",this.core.setSessionId="",this.core.setSessionStatus=!1,this.core.resetNewUserDeviceProperties(),this.gaze.endSession(),this.customEvent.endSession(),this.sensor.endSession(),this.dynamicObject.endSession(),e(a)}).catch(a=>t(a))})}sceneData(e,t,n){return this.core.getSceneData(e,t,n)}config(e,t){this.core.config[e]=t}addToAllSceneData(e){this.core.config.allSceneData.push(e)}setScene(e){console.log("CognitiveVRAnalytics::SetScene: ".concat(e)),this.core.sceneData.sceneId&&(this.sendData(),this.dynamicObject.refreshObjectManifest()),this.core.setScene(e)}set allSceneData(e){this.core.allSceneData=e}sendData(){return new Promise((e,t)=>{if(!this.core.isSessionActive){console.log("Cognitive3DAnalyticsCore::SendData failed: no session active"),e("Cognitive3DAnalyticsCore::SendData failed: no session active");return}if(!this.core.sceneData.sceneId){t("no scene selected");return}const n=this.customEvent.sendData(),r=this.gaze.sendData(),s=this.sensor.sendData(),a=this.dynamicObject.sendData(),o=[n,r,s,a];Promise.all(o).then(()=>e(200)).catch(c=>t(c))})}isSessionActive(){return this.core.isSessionActive}wasInitSuccessful(){return this.core.isSessionActive}getSessionTimestamp(){return this.core.getSessionTimestamp()}getSessionId(){return this.core.getSessionId()}getUserProperties(){return this.core.newUserProperties}getDeviceProperties(){return this.core.newDeviceProperties}set userId(e){this.core.setUserId=e}setUserProperty(e,t){this.core.setUserProperty(e,t)}setUserName(e){this.core.setUserId=e,this.setUserProperty("cvr.name",e)}setSessionName(e){this.setUserProperty("cvr.sessionname",e)}setLobbyId(e){this.core.setLobbyId(e)}setDeviceName(e){this.core.setDeviceId=e,this.core.newDeviceProperties["cvr.device.name"]=e}setDeviceProperty(e,t){this.core.setDeviceProperty(e,t)}set deviceId(e){this.core.setDeviceId=e}getApiKey(){return this.core.getApiKey()}getSceneId(){return this.core.sceneData.sceneId}}const Tt=new Fp({config:{APIKey:"EAO23IC878XWH17E5SC2O8T68TMDM66F",allSceneData:[{sceneName:"BasicScene",sceneId:"93f486e4-0e22-4650-946a-e64ce527f915",versionNumber:"1"}]}});Tt.setScene("BasicScene");Tt.userId="threejs_user_"+Date.now();Tt.setUserName("ThreeJS_SDK_Test_User");Tt.setDeviceName("WindowsPCBrowserVR");Tt.setDeviceProperty("AppName","ThreeJS_WebXR_SDK_Test_App");Tt.setUserProperty("c3d.version","1.0");Tt.setUserProperty("c3d.app.version","0.2");Tt.setUserProperty("c3d.app.engine","Three.js");Tt.setUserProperty("c3d.deviceid","threejs_windows_device_"+Date.now());function Bp(i){i.xr.addEventListener("sessionstart",()=>{console.log("Cognitive3D: VR Session Started"),Tt.startSession()&&console.log("Cognitive3D SDK session successfully started.")}),i.xr.addEventListener("sessionend",()=>{console.log("Cognitive3D: VR Session Ended"),Tt.endSession().then(e=>{console.log("Cognitive3D SDK session ended with status:",e)})})}function zp(){const i=new vi;i.position.z=-3;const e=[new ci(.2,.2,.2),new vs(.2,.2,64),new pr(.2,.2,.2,64),new Ss(.2,3),new Ms(.2,.04,64,32)];for(let t=0;t<30;t++){const n=e[Math.floor(Math.random()*e.length)],r=new lp({color:Math.random()*16777215,roughness:.7,metalness:0}),s=new Ht(n,r);s.position.x=Math.random()*4-2,s.position.y=Math.random()*4,s.position.z=Math.random()*4-2,s.rotation.x=Math.random()*2*Math.PI,s.rotation.y=Math.random()*2*Math.PI,s.rotation.z=Math.random()*2*Math.PI,s.scale.setScalar(Math.random()+.5),i.add(s)}return i}let En;const eo=new Je;function Fo(i,e){eo.identity().extractRotation(i.matrixWorld);const t=new dp;return t.ray.origin.setFromMatrixPosition(i.matrixWorld),t.ray.direction.set(0,0,-1).applyMatrix4(eo),t.intersectObjects(e.children,!0)}function to(i,e){const t=i.target,n=Fo(t,e);if(n.length>0){const s=n[0].object;s.material.emissive.b=1,t.attach(s),t.userData.selected=s}}function no(i,e){const t=i.target;if(t.userData.selected!==void 0){const n=t.userData.selected;n.material.emissive.b=0,e.attach(n),t.userData.selected=void 0}}function Hp(i,e,t){const n=e.xr.getController(0);n.addEventListener("selectstart",o=>to(o,t)),n.addEventListener("selectend",o=>no(o,t)),i.add(n);const r=e.xr.getController(1);r.addEventListener("selectstart",o=>to(o,t)),r.addEventListener("selectend",o=>no(o,t)),i.add(r);const s=new Ct().setFromPoints([new F(0,0,0),new F(0,0,-1)]),a=new cp(s);return a.name="line",a.scale.z=5,n.add(a.clone()),r.add(a.clone()),[n,r]}function io(i,e){if(i.userData.selected!==void 0)return;const t=i.getObjectByName("line"),n=Fo(i,e);if(n.length>0){En&&En!==n[0].object&&(En.material.emissive.r=0);const r=n[0],s=r.object;s.material.emissive.r=1,En=s,t.scale.z=r.distance}else En&&(En.material.emissive.r=0,En=null),t.scale.z=5}let hn,bn,_t,Bo,zo,xi;Gp();kp();function Gp(){bn=new ap,bn.background=new Be("lightblue"),hn=new wt(50,window.innerWidth/window.innerHeight,.1,10),hn.position.set(0,1.6,3),bn.add(hn);const i=new up(16777215,4473924);i.position.set(0,4,0),bn.add(i),_t=new sp({antialias:!0}),_t.setPixelRatio(window.devicePixelRatio),_t.setSize(window.innerWidth,window.innerHeight),_t.outputEncoding=void 0,_t.xr.enabled=!0,document.body.appendChild(_t.domElement),document.body.appendChild(si.createButton(_t)),xi=zp(),bn.add(xi),[Bo,zo]=Hp(bn,_t,xi),Bp(_t),window.addEventListener("resize",Vp),window.addEventListener("keydown",e=>{e.key==="Escape"&&_t.xr.isPresenting&&_t.xr.getSession().end()}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)},e=>{console.log("ServiceWorker registration failed: ",e)})})}function Vp(){hn.aspect=window.innerWidth/window.innerHeight,hn.updateProjectionMatrix(),_t.setSize(window.innerWidth,window.innerHeight)}function kp(){_t.setAnimationLoop(Wp)}function Wp(){if(io(Bo,xi),io(zo,xi),Tt.isSessionActive()){const i=hn.position.toArray(),e=hn.quaternion.toArray();Tt.gaze.recordGaze(i,e)}_t.render(bn,hn)}
