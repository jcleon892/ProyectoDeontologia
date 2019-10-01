var renderer;
var scene;
var camera;
var myCanvas = document.getElementById('mycanvas');

//Iniciando Renderer
renderer = new THREE.WebGLRenderer({
	canvas: myCanvas,
	antiailas: true
});

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//camara
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);

//escena
scene = new THREE.Scene();

//Luz
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

//Iniciando loader
var loader = new THREE.GLTFLoader();

loader.load('scene.gltf', handle_load);

var mesh;

function handle_load(gltf) {
	console.log(gltf);
	mesh = gltf.scene;
	console.log(mesh.children[0]);
	mesh.children[0].material = new THREE.MeshLambertMaterial();
	scene.add(mesh);
	mesh.position.z = -10;
}

//render
render();

var delta = 0;
var prevTime = Date.now();

function render() {
	/* 
	delta += 0.1;

	if(mesh) {
		mesh.rotation.y += 0.01;
	}
*/
	renderer.render(scene,camera);

	requestAnimationFrame(render);
}