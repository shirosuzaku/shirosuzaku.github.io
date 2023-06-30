import './style.css'
console.clear();

import * as THREE from  "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
gsap.registerPlugin(ScrollTrigger);

// --- CONSTS

const COLORS = {
	background: '#66aa66',
	light: '#ffffff',
	sky: '#aaaaff',
	ground: '#115511'
}

const PI = Math.PI;

// --- SCENE

let size = { width: 0, height: 0 }

const scene = new THREE.Scene();
scene.background = new THREE.Color(COLORS.background);
scene.fog = new THREE.Fog(COLORS.background, 15, 20);

// --- RENDERER

const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 5;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const container = document.querySelector('.canvas-container');
container.appendChild( renderer.domElement );

// --- CAMERA

const camera = new THREE.PerspectiveCamera(40, size.width / size.height, 0.1, 100);
camera.position.set(5, 5, 0);
let cameraTarget = new THREE.Vector3(0, 1, 0);

scene.add(camera);

// --- LIGHTS

const directionalLight = new THREE.DirectionalLight(COLORS.light, 2);
directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 10;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.normalBias = 0.05;
directionalLight.position.set(2, 5, 3);



scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight( COLORS.sky, COLORS.ground, 0.5 );
scene.add(hemisphereLight)


// --- FLOOR

const plane = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshStandardMaterial({ color: COLORS.ground })
const floor = new THREE.Mesh(plane, floorMaterial);
floor.receiveShadow = true;
floor.rotateX(-Math.PI * 0.5)

scene.add(floor);

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


// --- 3d models
const loader = new GLTFLoader()
let bananamixer,clips,clip,man,acrobatAction
loader.load('./modles/bananamodel/scene.gltf',function(bman){
  man = bman.scene
  bananamixer = new THREE.AnimationMixer(man)
  clips = bman.animations
  man.traverse(child => {
    if(child instanceof THREE.Mesh){
      child.receiveShadow = true
      child.castShadow = true
    }
  })
  scene.add(man)
  clip = THREE.AnimationClip.findByName(clips,'Emote Acrobatic Superhero')
  acrobatAction = bananamixer.clipAction(clip)
  acrobatAction.setLoop(THREE.LoopOnce)
  acrobatAction.clampWhenFinished = true
  acrobatAction.enabled = true
})


let yu = false;
const barelroll = () => {
  acrobatAction.reset()
  acrobatAction.play()
  yu = true
}
document.querySelector('.btn').addEventListener('click',barelroll)


// --- SCROLL TRIGERR
const btop = document.getElementById('bordert')
const bbottom = document.getElementById('borderb')

gsap.to(btop,{
  scrollTrigger:{
    trigger: ".sec1",
    start: "center center",
    end: "bottom -=100",
    toggleActions: "play pause pause pause",
    scrub: true
  },
  height: 100,
  duration: 1
})
gsap.to(bbottom,{
  scrollTrigger:{
    trigger: ".sec1",
    start: "center center",
    end: "bottom -=100",
    toggleActions: "play pause pause pause",
    scrub: true
  },
  height: 100,
  duration: 1
})
gsap.to(camera.position,{
  scrollTrigger:{
    trigger: ".sec1",
    start: "center center",
    end: "bottom -=100",
    toggleActions: "play pause pause pause",
    scrub: true
  },
  x: 0,
  y: 1,
  z: 5,
  duration: 2
})

// --- TICK
// const controls = new OrbitControls(camera,renderer.domElement)
const clock = new THREE.Clock()
const tick = () => {
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
    if(yu){
      bananamixer.update(clock.getDelta())

    }
    // controls.update()
    window.requestAnimationFrame(() => tick())
}

tick();
