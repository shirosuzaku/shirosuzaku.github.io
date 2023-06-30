import './style.css'
console.clear();
console.log("main : ",window.location.pathname);

import * as THREE from  "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls'

// --- CONSTS

const COLORS = {
	background: '#ffffff',
	light: '#ffffff',
	sky: '#aaaaff',
	ground: '#115511'
}

const PI = Math.PI;

// --- SCENE

let size = { width: 0, height: 0 }

const scene = new THREE.Scene();
scene.background = new THREE.Color(COLORS.background);

// --- RENDERER

const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 5;

const container = document.querySelector('.canvas-container');
container.appendChild( renderer.domElement );

// --- CAMERA

const camera = new THREE.PerspectiveCamera(40, size.width / size.height, 0.1, 100);
camera.position.set(0, 0, 15);
let cameraTarget = new THREE.Vector3(0, 1, 0);

scene.add(camera);

const controls = new TrackballControls(camera,renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
// controls.enabledZoom = false



// --- LIGHTS


// --- FLOOR

// --- 3d logo
const logoParent = new THREE.Object3D()
const logoFaceGeo = new THREE.PlaneGeometry(1,1)
const logoFaceMat = new THREE.MeshBasicMaterial({
  color: 0x000000
})
const logoFace = new THREE.Mesh(logoFaceGeo,logoFaceMat)

const createFaces = (x = 0,y=0,z=0,rx=0,ry=0,rz=0) => {
  const logoFaceClone = logoFace.clone()

  logoFaceClone.position.set(x,y,z)
  logoFaceClone.rotateX(rx)
  logoFaceClone.rotateY(ry)
  logoFaceClone.rotateZ(rz)

  logoParent.add(logoFaceClone)
}
// top
createFaces(1,1.5,1,-0.5 * Math.PI)
createFaces(-1,1.5,1,-0.5 * Math.PI)
createFaces(1,1.5,-1,-0.5 * Math.PI)
createFaces(-1,1.5,-1,-0.5 * Math.PI)
// bottom
createFaces(1,-1.5,1, 0.5 * Math.PI)
createFaces(-1,-1.5,1, 0.5 * Math.PI)
createFaces(1,-1.5,-1, 0.5 * Math.PI)
createFaces(-1,-1.5,-1, 0.5 * Math.PI)
// front
createFaces(1,1,1.5)
createFaces(-1,1,1.5)
createFaces(1,-1,1.5)
createFaces(-1,-1,1.5)
// back
createFaces(1,1,-1.5,0, Math.PI)
createFaces(-1,1,-1.5,0, Math.PI)
createFaces(1,-1,-1.5,0, Math.PI)
createFaces(-1,-1,-1.5,0, Math.PI)
// left
createFaces(-1.5,1,1,  0, -0.5 * Math.PI)
createFaces(-1.5,-1,1,  0, -0.5 * Math.PI)
createFaces(-1.5,1,-1,  0, -0.5 * Math.PI)
createFaces(-1.5,-1,-1,  0, -0.5 * Math.PI)
// right
createFaces(1.5,1,1,  0, 0.5 * Math.PI)
createFaces(1.5,-1,1,  0, 0.5 * Math.PI)
createFaces(1.5,1,-1,  0, 0.5 * Math.PI)
createFaces(1.5,-1,-1,  0, 0.5 * Math.PI)



logoParent.position.set(0,1.5,0)
scene.add(logoParent)

// --- ON RESIZE

const onResize = () => {
	size.width = container.clientWidth;
	size.height = container.clientHeight;

	camera.aspect = size.width / size.height
	camera.updateProjectionMatrix()

	renderer.setSize(size.width, size.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))	
}

window.addEventListener('resize', onResize)
onResize();


// --- HELPERS
const ghelp = new THREE.GridHelper(5,5)
// scene.add(ghelp)

// --- 3d models

// --- SCROLL TRIGERR

// --- TICK
let rotateOn = true
const tick = () => {
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);

	logoParent.rotateX(0.002)
	logoParent.rotateY(0.005)
	logoParent.rotateZ(0.004)


    controls.update()
    
    window.requestAnimationFrame(() => tick())
}

tick();

// Event Handlers
let mouseisdown = false
window.addEventListener('mousemove',e=>{
   if(!mouseisdown){
     let camx = larp(0,window.innerWidth,-0.5,0.5,e.clientX)
     let camy = larp(0,window.innerHeight,-0.5,0.5,e.clientY)
     console.log(camx,camy)
     logoParent.position.x = camx
     logoParent.position.y = 1.5 + -camy
   }
})

window.addEventListener('scroll',e=>{
  // alert('s')
})

// window.addEventListener('mousedown',e=>{
//   mouseisdown = true
// })
// window.addEventListener('mouseup',e=>{
//   mouseisdown = false
// })

const larp = (OldMin,OldMax,NewMin,NewMax,OldValue) =>{
  let OldRange = (OldMax - OldMin)  
  let NewRange = (NewMax - NewMin)  
  let NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
  return NewValue
}

