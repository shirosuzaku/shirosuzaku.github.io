import{g as t,S as o,a as e,C as n,W as r,P as i,T as a,O as s,b as c,M as l,c as d,G as g,V as m}from"./vendor.be7bef50.js";console.clear(),t.registerPlugin(o);const p=document.querySelector(".home"),u=document.querySelector(".contact"),h=document.getElementById("cs");let b={width:0,height:0};const f=new e;f.background=new n("#ffffff");const w=new r({antialias:!0});w.physicallyCorrectLights=!1;const y=document.querySelector(".canvas-container");y.appendChild(w.domElement);const P=new i(40,b.width/b.height,.1,100);P.position.set(0,0,10);let T=new m(0,0,0);f.add(P),h.addEventListener("mouseover",(()=>{console.log("s")}));const M=new a(P,h);M.enableDamping=!0,M.dampingFactor=.05,M.enabled=!0,M.noZoom=!0,M.noPan=!0;const I=new s,v=new d(new c(1,1),new l({color:10159383})),x=(t=0,o=0,e=0,n=0,r=0,i=0)=>{const a=v.clone();a.position.set(t,o,e),a.rotateX(n),a.rotateY(r),a.rotateZ(i),I.add(a)};x(1,1.5,1,-.5*Math.PI),x(-1,1.5,1,-.5*Math.PI),x(1,1.5,-1,-.5*Math.PI),x(-1,1.5,-1,-.5*Math.PI),x(1,-1.5,1,.5*Math.PI),x(-1,-1.5,1,.5*Math.PI),x(1,-1.5,-1,.5*Math.PI),x(-1,-1.5,-1,.5*Math.PI),x(1,1,1.5),x(-1,1,1.5),x(1,-1,1.5),x(-1,-1,1.5),x(1,1,-1.5,0,Math.PI),x(-1,1,-1.5,0,Math.PI),x(1,-1,-1.5,0,Math.PI),x(-1,-1,-1.5,0,Math.PI),x(-1.5,1,1,0,-.5*Math.PI),x(-1.5,-1,1,0,-.5*Math.PI),x(-1.5,1,-1,0,-.5*Math.PI),x(-1.5,-1,-1,0,-.5*Math.PI),x(1.5,1,1,0,.5*Math.PI),x(1.5,-1,1,0,.5*Math.PI),x(1.5,1,-1,0,.5*Math.PI),x(1.5,-1,-1,0,.5*Math.PI),f.add(I),new g(10,10);let z=!0,C=!1;const E=()=>{P.lookAt(T),w.render(f,P),z?(I.rotateX(.002),I.rotateY(.005),I.rotateZ(.004)):C?(M.reset(),P.position.set(0,0,10)):(I.rotateX(8e-4),I.rotateY(9e-4),I.rotateZ(7e-4)),M.update(),window.requestAnimationFrame((()=>E()))};function S(t){const o=t.getBoundingClientRect();return o.top>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)}E(),window.addEventListener("mousemove",(t=>{if(z){let o=q(0,window.innerWidth,-.5,.5,t.clientX),e=q(0,window.innerHeight,-.5,.5,t.clientY);I.position.x=o,I.position.y=-e}})),window.addEventListener("scroll",(t=>{z=!!S(p),C=!!S(u)}));const q=(t,o,e,n,r)=>(r-t)*(n-e)/(o-t)+e,L=t.timeline();L.fromTo(".canvas-container",{top:"40%",left:"50%"},{scrollTrigger:{trigger:".aea",start:"top bottom",end:"end top",scrub:!0},top:"80%",left:"15%",duration:1}),L.fromTo(".canvas-container",{top:"80%",left:"15%"},{scrollTrigger:{trigger:".mission",start:"top bottom",end:"end top",scrub:!0},top:"20%",left:"80%",duration:1,onComplete:function(){I.scale.set(1,1,1)}}),L.fromTo(".canvas-container",{top:"20%",left:"80%"},{scrollTrigger:{trigger:".collab",start:"top bottom",end:"end top",scrub:!0},top:"80%",left:"90%",duration:1,onComplete:function(){I.scale.set(1.3,1.3,1.3)}}),L.fromTo(I.scale,{x:.7,y:.7,z:.7},{scrollTrigger:{trigger:".aea",start:"top bottom",end:"end top",scrub:!0},x:1,y:1,z:1,duration:1}),L.fromTo(I.scale,{x:1,y:1,z:1},{scrollTrigger:{trigger:".mission",start:"top bottom",end:"end top",scrub:!0},x:1,y:1,z:1,duration:1}),L.fromTo(I.scale,{x:1,y:1,z:1},{scrollTrigger:{trigger:".collab",start:"top bottom",end:"end top",scrub:!0},x:1.3,y:1.3,z:1.3,duration:1});let W=1,H=1,X=1;window.innerWidth<800?(W=.3,H=.3,X=.3,L.fromTo(".canvas-container",{top:"80%",left:"90%"},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},top:"10%",left:"26%",duration:1,onComplete:function(){M.reset(),P.position.set(0,0,10)}}),L.fromTo(I.scale,{x:1,y:1,z:1},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},x:W,y:H,z:X,duration:1})):window.innerWidth<1100?(W=.3,H=.3,X=.3,L.fromTo(".canvas-container",{top:"80%",left:"90%"},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},top:"7%",left:"26%",duration:1,onComplete:function(){M.reset(),P.position.set(0,0,10)}}),L.fromTo(I.scale,{x:1,y:1,z:1},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},x:W,y:H,z:X,duration:1})):(W=.1,H=.1,X=.1,L.fromTo(".canvas-container",{top:"80%",left:"90%"},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},top:"8%",left:"30%",duration:1,onComplete:function(){M.reset(),P.position.set(0,0,10)}}),L.fromTo(I.scale,{x:1,y:1,z:1},{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0},x:W,y:H,z:X,duration:1}));let Y=0,Z=0,R=0,j=0;window.addEventListener("deviceorientation",(t=>{z&&(Y=Z-t.gamma,j=R-t.beta,Z=t.gamma,R=t.beta,I.position.x<5&&I.position.x>-5&&(I.position.x+=Y/90),I.position.y<5&&I.position.y>-5&&(I.position.y+=j/90))}));const k=()=>{b.width=y.clientWidth,b.height=y.clientHeight,P.aspect=b.width/b.height,P.updateProjectionMatrix(),S(p)&&(document.querySelector(".canvas-container").style.top="40%",document.querySelector(".canvas-container").style.left="50%",I.scale.set(1,1,1)),M.reset(),w.setSize(b.width,b.height),w.setPixelRatio(Math.min(2*window.devicePixelRatio,2))};window.addEventListener("resize",k),k(),I.position.set(0,0,0),I.scale.set(.7,.7,.7);