let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000,
);

camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix();
})



let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
let mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 2;
mesh.position.y = 2;

scene.add(mesh);

let light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10,0,25);
scene.add(light);

let render = function(){
    requestAnimationFrame(render);
    renderer.render(scene, camera)
};

render();