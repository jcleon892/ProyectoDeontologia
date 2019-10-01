var camera, scene, renderer;
var texture;
var player;
var platform;
var dir = 0;
var _Gravity = 0.098;
var fact = 200,  variacion=30;  // control de distancias de las plataformas 
var pivot;
var rotAux = 0;

var  EndPlaform=0; // Distancia anterior entre plaformas 
var widthArea=300; // ancho del juego 
var score=0;  // score
var modifier=1; //multiplicador
var deltaModifier=1000;  // Distacia para aumento del score
var previousHeight=0;  // distancia anterior 
var previousScore=0; // anteior score

var cubeMaterialArray = []; 
var platformPrincipal=[];  // textura ladrillo principal
var platformFire=[]; // textura ladrillo fuego
var platformFireOff=[]; // textura ladrillo fuego apagdo
var platformLife3=[]; // textura ladrillo de 3 vidas
var platformLife2=[]; // textura ladrillo de 2 vidas
var platformLife1=[]; // textura ladrillo de 1 vidas



var platforms = [];  // areglo de plaformas
var powerUps1 = [];
var powerUps2 = [];

function init() 
{
	//var cubeMaterialArray = [];
   
    cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("sasuke.jpg"), side: THREE.DoubleSide }));
	cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("sayori.jpg"), side: THREE.DoubleSide }));
	cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("sesshomaru.jpg"), side: THREE.DoubleSide}));
	cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("shinji.png"), side: THREE.DoubleSide }));
	cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("shrek.jpg"), side: THREE.DoubleSide }));
	cubeMaterialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("sonic.jpg"), side: THREE.DoubleSide }));

	//var platformPrincipal = [];
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));
	platformPrincipal.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-principal.jpg"), side: THREE.DoubleSide }));


	//var platformFire = [];
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	platformFire.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgo-bloque.jpg"), side: THREE.DoubleSide }));
	
	//var platformFireOff = [];
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	platformFireOff.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/fuesgooff-bloque.jpg"), side: THREE.DoubleSide }));
	// var platformLife3=[]

	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	platformLife3.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillos-vida3.jpg"), side: THREE.DoubleSide }));
	

	// var platformLife2=[]

	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));
	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));
	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));
	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));
	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));
	platformLife2.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida2.jpg"), side: THREE.DoubleSide }));

	// var platformLife1=[]

	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/ladrillo-vida1.jpg"), side: THREE.DoubleSide }));
   
   //CREATE ALL INITIAL OBJECTS

	// Create a scene
	scene = new THREE.Scene();

	// Add the mesh to the scene

	player = new Player(new THREE.Vector3( 5,500,-200 ),new THREE.Vector3( 30,0,30 ),3,70,70,70,cubeMaterialArray,0.1,6,false);

	//platform= new Platform(new THREE.Vector3(5,200,-200),1,3, 200,30,50,cubeMaterialArray,1,2,1,true);
	scene.add(player.mesh);

	initPlaform(5,cubeMaterialArray );

	selectPowerUp();

	// Create a camera
	// 	Set a Field of View (FOV) of 75 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 5000);
	// Move the camera 'out' by 30

	
	camera.position.x = 5;
	camera.position.y = 0;
	camera.position.z = 700;
	//player.add(camera);
	//pivotPoint = new THREE.Object3D(player.position);
	//pivotPoint.add(camera);
	//camera.add(pivot);
	pivot = new THREE.Object3D();
	
	this.geometry = new THREE.BoxGeometry( 70,70,70);
	//this.texture = new THREE.MeshFaceMaterial( cubeMaterialArray );
	pivot.mesh = new THREE.Mesh( this.geometry );
	pivot.mesh.texture = this.texture;
	//pivot.mesh.position.x = player.localPosition.x;
	//pivot.mesh.position.y = player.localPosition.y;
	//pivot.mesh.position.z = player.localPosition.z;
	
	pivot.mesh.position.set(player.localPosition.x,player.localPosition.y,player.localPosition.z);
	
	pivot.mesh.visible = false;
	scene.add(pivot.mesh);
	pivot.mesh.add(camera);
	camera.lookAt(pivot.mesh.position);
	
	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
	
}

function animate() 
{
	pivot.mesh.position.y = player.maxAltitude;
	camera.position.y = pivot.position.y;
	player.update();
	PlatformPosition();
	updateScore();	
	for (let i = 0; i <platforms.length; i++) {
		
		platforms[i].update();
		
	}
	//platform.update();

	
	
	//DEBUG ZONE
	if(keyboard[keyboardValues.KEY_A])
	{
		//player.stop();
		player.onTransition = true;
		for(let i = 0; i < platforms.length;i++)
		{
			platforms[i].onTransition = true;
		}
		
		rotAux = -1;
		dir--;
		keyboard[keyboardValues.KEY_A] = false;
	}
	if(keyboard[keyboardValues.KEY_D])
	{
		//player.stop();
		player.onTransition = true;
		for(let i = 0; i < platforms.length;i++)
		{
			platforms[i].onTransition = true;
		}
		
		rotAux = 1;
		dir++;	
	keyboard[keyboardValues.KEY_D] = false;
	}
	//console.log(pivot.mesh.rotation.y*(180/Math.PI)%360);
	pivot.mesh.rotation.y += rotAux * (Math.PI/180);
	player.mesh.rotation.y += rotAux * (Math.PI/180);
	if(Math.abs(Math.round(pivot.mesh.rotation.y*(180/Math.PI)))%360 == 0 ||
		Math.abs(Math.round(pivot.mesh.rotation.y*(180/Math.PI)))%360 == 90 ||
		Math.abs(Math.round(pivot.mesh.rotation.y*(180/Math.PI)))%360 == 180 ||
		Math.abs(Math.round(pivot.mesh.rotation.y*(180/Math.PI)))%360 == 270)
		{
			rotAux = 0;
			player.onTransition = false;
			for(let i = 0; i < platforms.length;i++)
			{
				platforms[i].onTransition = false;
			}
		}
	
	
	// Call the requestAnimationFrame function on the animate function 
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );
	

	//CALL ALL OBJECTS UPDATE METHOD!!!

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );

}

function collision(object1,object2/*player,box*/)
{
	return (object1.localPosition.x + object1.width) < object2.localPosition.x -(object2.width/2) || 
	object1.localPosition.x +(object2.width/2)> (object2.localPosition.x + object2.width) ||
	
	(object1.localPosition.y + object1.height) < object2.localPosition.y /*-(object2.height/2)*/ || 
	object1.localPosition.y -(object2.height/2)> (object2.localPosition.y + object2.height) ||
	
	(object1.localPosition.z + object1.depth) < object2.localPosition.z -(object2.depth/2) || 
	object1.localPosition.z +(object2.depth/2)> (object2.localPosition.z + object2.depth)
	 ? false : true;
	/*
	if(dir %2 == 0)
	{
		return (object1.localPosition.x + object1.width) < object2.localPosition.x -(object2.width/2) || 
	object1.localPosition.x +(object2.width/2)> (object2.localPosition.x + object2.width) ||
	
	(object1.localPosition.y + object1.height) < object2.localPosition.y /*-(object2.height/2)*/ /*|| 
	object1.localPosition.y -(object2.height/2)> (object2.localPosition.y + object2.height);
	}else{
		return (object1.localPosition.y + object1.height) < object2.localPosition.y /*-(object2.height/2)*/ /*|| 
	object1.localPosition.y -(object2.height/2)> (object2.localPosition.y + object2.height) ||
	
	(object1.localPosition.z + object1.depth) < object2.localPosition.z -(object2.depth/2) || 
	object1.localPosition.z +(object2.depth/2)> (object2.localPosition.z + object2.depth);
	}*/
	
}




init();
animate();