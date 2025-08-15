import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';

import moonTexture from '../pics/moon.png';
import { nameAnim } from './nameAnim.js';
import './languages.js';
import './scripts.js';

// ============================================================== Event listener

const container = document.body;

const projectWindow = document.querySelectorAll(".display-project");

window.addEventListener('resize', onResize)
container.addEventListener('click', onClick)
container.addEventListener('mousemove', onMouseMove)

// ================================================================= Scene setup

let homepage = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

const controls = new OrbitControls( camera, renderer.domElement );

controls.rotateSpeed = 0.5;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.minPolarAngle = Math.PI * 0.4;
controls.maxPolarAngle = Math.PI * 0.6;

renderer.setSize( window.innerWidth, window.innerHeight);

container.appendChild( renderer.domElement );

camera.position.set(0, 0, -200);

controls.update();

// ================================================================ Sphere setup

const geometry = new THREE.SphereGeometry( 50, 50, 50 );
const texture = new THREE.TextureLoader().load(moonTexture);

texture.colorSpace = THREE.LinearSRGBColorSpace;

const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide // inside the sphere
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

sphere.name = 'ball';

// ============================================================= discoball setup

const ambientLight = new THREE.AmbientLight('#ffffff', 4) // now we can see full shape with light effect
scene.add(ambientLight)

const pointLight = new THREE.PointLight('#fcffcf', 5.5, 0, 0)
pointLight.position.set(80, 80, 80) // area of lighting
scene.add(pointLight)

const disco = new THREE.Mesh(
  new THREE.SphereGeometry(7, 50, 25),

  new THREE.MeshStandardMaterial({
    opacity: 0.95,
    transparent: true,
    color: '#ffa9ca',
    roughness: 0.2,
    metalness: 0.5,
    flatShading: true
  })
);

scene.add(disco);

// ============================================================ Animate function

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
}

animate();

// ================================== Readapt image size according to the screen

function onResize() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.render(scene, camera);
}

// ==================== Check position of the mouse in homepage to change cursor

function onMouseMove(e) {

  if (homepage) {
    let mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      - (e.clientY / (window.innerHeight)) * 2 + 1
    )
    rayCaster.setFromCamera(mouse, camera)
    let intersects = rayCaster.intersectObjects(scene.children)

    if (intersects && intersects.length > 0) {
      document.body.style.cursor = 'pointer';
    }
    else {
      document.body.style.cursor = 'default';
    }
  }

  else {
    document.body.style.cursor = 'default';
  }
}

// =================== Check is ball in homepage is clicked and lead to Projects

const rayCaster = new THREE.Raycaster()

function onClick(e) {
  let mouse = new THREE.Vector2(
    (e.clientX / window.innerWidth) * 2 - 1,
    - (e.clientY / window.innerHeight) * 2 + 1
  )

  rayCaster.setFromCamera(mouse, camera) // "laser ray" to detect intersections

  let intersects = rayCaster.intersectObjects(scene.children) // intercepts all objects inside the scene

  intersects.forEach(function(intersect) {

    if (intersect.object.name === 'ball' && homepage) {
      landscape();
      gsap.to(camera.position, {x: 0, y: 0, z: 30, duration: 4}); // Projects
    }

  })
}

// ============================================= Go inside the moon => landscape

function landscape() {

  document.querySelector('.name').style.display = 'none';

  let letters = document.querySelectorAll('.fade')
  letters.forEach((letter) => {
    letter.classList.remove('fade')
  })

  document.querySelector('.top').style.display = 'none';
  document.querySelector('.top').classList.remove('from-left');

  document.querySelector('.bottom').style.display = 'none';
  document.querySelector('.bottom').classList.remove('from-right');

  document.querySelector('.flags').style.display = 'none';
  document.querySelector('.flags').classList.remove('flags-fade');

  document.querySelector('#home').classList.remove('active');

  setTimeout(() => { // navbar styling
    document.querySelector('nav').classList.remove('navhp');
    document.querySelector('nav').classList.add('navls');
  }, '1000');

  setTimeout(() => { // camera detection
    controls.addEventListener( 'change', detectPosition )
}, '2300');

  homepage = false;

  controls.autoRotate = false;

  if (window.innerWidth > window.innerHeight) {
    // ideal for large and computer screens
    controls.rotateSpeed = -0.5;
  }
  else {
    // ideal for narrow and phone screens
    controls.rotateSpeed = -1;
  }

  document.body.style.cursor = 'default';
}

// ======================================================  Check if click navbar

document.getElementById('projects').addEventListener('click', function(e) {
  if (homepage === true) {
    landscape();
    gsap.to(camera.position, {x: 0, y: 0, z: 30, duration: 4, onComplete: () => {
      document.getElementById('projects-section').focus();
    }});
  }
  else {
    gsap.to(camera.position, {x: 0, y: 0, z: 30, duration: 2.5, onComplete: () => {
      document.getElementById('projects-section').focus();
    }});
  }
});

document.getElementById('about').addEventListener('click', function(e) {
  landscape();
  gsap.to(camera.position, {x: -27, y: 0, z: -13, duration: 2.5, onComplete: () => {
    document.getElementById('about-section').focus();
  }});
});

document.getElementById('contact').addEventListener('click', function(e) {
  landscape();
  gsap.to(camera.position, {x: 27, y: 0, z: -14, duration: 2.5, onComplete: () => {
    document.getElementById('contact-section').focus();
  }});
});

// ============================================ Navigate with mouse and trackpad

controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    RIGHT: THREE.MOUSE.ROTATE
}

controls.touches.ONE = THREE.TOUCH.ROTATE
controls.touches.TWO = THREE.TOUCH.ROTATE

let section = '';

let wheel_timer = 0


window.addEventListener('wheel', function(event) {
  clearTimeout(wheel_timer);
  wheel_timer = setTimeout(function() {
    onMouseWheel(event)
  }, 200)
});

// Scrolling animation from a section to another with a scrolling buffer
function onMouseWheel(event) {

  let projects = document.getElementById('projects-section');
  let display = document.getElementById('display-pro');
  let about = document.getElementById('about-section');
  let contact = document.getElementById('contact-section');

  // Initialize static variables for each section to keep track of scroll movements
  if (typeof onMouseWheel.scrollUpCountProjects === 'undefined') {
    onMouseWheel.scrollUpCountProjects = 0;
    onMouseWheel.scrollDownCountProjects = 0;
  }
  if (typeof onMouseWheel.scrollUpCountAbout === 'undefined') {
    onMouseWheel.scrollUpCountAbout = 0;
    onMouseWheel.scrollDownCountAbout = 0;
  }
  if (typeof onMouseWheel.scrollUpCountContact === 'undefined') {
    onMouseWheel.scrollUpCountContact = 0;
    onMouseWheel.scrollDownCountContact = 0;
  }

  if (homepage) {
    landscape();
    gsap.to(camera.position, {x: 0, y: 0, z: 30, duration: 4}); // Move to projects
  } 
  else if (section === 'project') {
    if (!display.style.display || display.style.display === 'none') {
      handleSectionScroll(event, projects, 'Projects');
    }
  } 
  else if (section === 'about') {
    handleSectionScroll(event, about, 'About');
  }
  else if (section === 'contact') {
    handleSectionScroll(event, contact, 'Contact');
  }
}

function handleSectionScroll(event, sectionElement, sectionName) {
  const moveMap = {
    'Projects': { next: { x: -27, y: 0, z: -13 }, prev: { x: 27, y: 0, z: -14 } },
    'About': { next: { x: 27, y: 0, z: -14 }, prev: { x: 0, y: 0, z: 30 } },
    'Contact': { next: { x: 0, y: 0, z: 30 }, prev: { x: -27, y: 0, z: -13 } }
  };

  if (event.deltaY > 0) {
    // Scrolling down
    if (sectionElement.scrollTop >= (sectionElement.scrollHeight - sectionElement.offsetHeight)) {
      onMouseWheel['scrollDownCount' + sectionName]++;
      if (onMouseWheel['scrollDownCount' + sectionName] >= 2) {
        gsap.to(camera.position, {...moveMap[sectionName].next, duration: 2.5});
        onMouseWheel['scrollDownCount' + sectionName] = 0;
      }
    }
  } else if (event.deltaY < 0) {
    // Scrolling up
    if (sectionElement.scrollTop === 0) {
      onMouseWheel['scrollUpCount' + sectionName]++;
      if (onMouseWheel['scrollUpCount' + sectionName] >= 2) {
        gsap.to(camera.position, {...moveMap[sectionName].prev, duration: 2.5}); 
        onMouseWheel['scrollUpCount' + sectionName] = 0;
      }
    }
  }
}

// ====================================================== Detect camera position

function detectPosition() {

  // Display PROJECT section
  if (camera.position.x < 9 && camera.position.x > -9 && camera.position.z > 25) {
    AnimTitles('projects-section');
    document.querySelector('#projects-section').classList.add('section-fade-in');
    document.querySelector('#projects').classList.add('active');

    section = 'project';
  }
  else {
    document.querySelector('#projects-section').classList.remove('section-fade-in');
    document.querySelector('#projects').classList.remove('active');

    for (let i = 0; i < projectWindow.length; i++) {
      projectWindow[i].style.display = "none";
    }
  }

  // Display ABOUT section
  if (camera.position.x < -19 && camera.position.x > -29 && camera.position.z < -3 && camera.position.z > -22) {
    AnimTitles('about-section');
    document.querySelector('#about-section').classList.add('section-fade-in');
    document.querySelector('#about').classList.add('active');

    section = 'about';
  }
  else {
    document.querySelector('#about-section').classList.remove('section-fade-in');
    document.querySelector('#about').classList.remove('active');
  }

  // Display CONTACT section
  if (camera.position.x < 30 && camera.position.x > 16 && camera.position.z < -4 && camera.position.z > -25) {
    AnimTitles('contact-section');
    document.querySelector('#contact-section').classList.add('section-fade-in');
    document.querySelector('#contact').classList.add('active');

    section = 'contact';
  }
  else {
    document.querySelector('#contact-section').classList.remove('section-fade-in');
    document.querySelector('#contact').classList.remove('active');
  }
}

// Animate titles 
export function AnimTitles(sectionId) {
  const title = document.querySelector(`#${sectionId} h1`);
  if (title) {
    title.classList.remove('animate-title');
    void title.offsetWidth; // force reflow
    title.classList.add('animate-title');
  }
}

// ==================================================== Go back to the home page

document.getElementById('home').addEventListener('click', function(e) {

  controls.autoRotate = true;

  controls.rotateSpeed = 0.5;

  gsap.to(camera.position, {x: 0, y: 0, z: -200, duration: 3.5});

  document.body.style.cursor = 'default';

  controls.removeEventListener( 'change', detectPosition );

  // Sections
  document.getElementById('projects-section').classList.remove('section-fade-in');
  document.getElementById('about-section').classList.remove('section-fade-in');
  document.getElementById('contact-section').classList.remove('section-fade-in');

  for (let i = 0; i < projectWindow.length; i++) {
    projectWindow[i].style.display = "none";
  }

  // Navbar
  document.getElementById('projects').classList.remove('active');
  document.getElementById('about').classList.remove('active');
  document.getElementById('contact').classList.remove('active');

  document.getElementById('home').classList.add('active');

  setTimeout(() => { // Reset homepage
    homepage = true;
    nameAnim();
    document.querySelector('.name').style.display = 'block';

    document.querySelector('.top').style.display = 'block';
    document.querySelector('.top').classList.add('from-left');

    document.querySelector('.bottom').style.display = 'block';
    document.querySelector('.bottom').classList.add('from-right');

    document.querySelector('.flags').style.display = 'block';
    document.querySelector('.flags').classList.add('flags-fade');
  }, '1600');

  setTimeout(() => { // Toggle navbar styling
    document.querySelector('nav').classList.remove('navls');
    document.querySelector('nav').classList.add('navhp');
  }, '600');

})
