//Platform.Type = {/*NONE:0, WALL:1, GROUND:2*/};

var maxPlayer = 500;  // variacion para el desplazaiento y altura de la camara
var angleVariation = 30;
class Platform extends GameObject {
	//lifes implica la resistencia de la plataforma
	//3 , 2 o 1 golpe
	//al llegar a 0 de resistencia la plataforma debe desaparecer

	constructor(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right, destroy,onTransition) {
		super(position, width, height, depth, cubeMaterialArray,onTransition);
		this.velocity = velocity;
		this.lifes = lifes;
		this.moveForce = initialForce;
		this.forceFactor = forceFactor;
		this.type = type;
		this.localPosition = position;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.right = right;
		this.destroy = destroy;
		this.visited = false;

	}

	update() {
		if(!this.onTransition)
		{
			this.PlatformMovement();
		}
	}

	TextureCambio(textureCambio){
		this.texture=new THREE.MeshFaceMaterial( textureCambio );
		this.mesh = new THREE.Mesh( this.geometry, this.texture );
		this.mesh.position.set(this.localPosition.x,this.localPosition.y,this.localPosition.z);
	
	}

	//varia moviento de la plataforma en forma lineal
	//desplaza en x y z 
	PlatformMovement() {

		if (this.right) {
			this.localPosition.x += this.velocity.x * this.forceFactor;
			this.localPosition.z += this.velocity.z * this.forceFactor;
			if (this.mesh.position.x >= widthArea || this.mesh.position.z >= widthArea) {
				this.right = false;

			}
		} else {

			this.localPosition.x -= this.velocity.x * this.forceFactor;
			this.localPosition.z -= this.velocity.z * this.forceFactor;

			if (this.mesh.position.x * (-1) >= widthArea || this.mesh.position.z * (-1) >= widthArea) {
				this.right = true;

			}

		}
		this.mesh.position.x = this.localPosition.x;
		this.mesh.position.z = this.localPosition.z;
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
	
}


class Senoidal extends Platform {
	constructor(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right) {
		super(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right);
		this.up = true;
		this.angle = 3.0;

	}

	//varia moviento de la plataforma en forma senoida
	//desplaza en x y z 
	PlatformMovement() {

		if (this.right) {
			this.localPosition.x += this.velocity.x * this.forceFactor;
			this.localPosition.z += this.velocity.z * this.forceFactor;
			if (this.mesh.position.x >= widthArea || this.mesh.position.z >= widthArea) {
				this.right = false;

			}
		} else {

			this.localPosition.x -= this.velocity.x * this.forceFactor;
			this.localPosition.z -= this.velocity.z * this.forceFactor;

			if (this.mesh.position.x * (-1) >= widthArea || this.mesh.position.z * (-1) >= widthArea) {
				this.right = true;

			}

		}

		if (this.up) {
			this.angle += 0.01;
			this.localPosition.y += Math.sin(angleVariation * Math.PI / 180);

			if (this.angle >= 1.0) {
				this.up = false;
			}


		} else {
			this.angle -= 0.01;
			this.localPosition.y -= Math.sin(angleVariation * Math.PI / 180);
			if (this.angle <= -1) {
				this.up = true;
			}
		}
		this.mesh.position.x = this.localPosition.x;
		this.mesh.position.y = this.localPosition.y;
		this.mesh.position.z = this.localPosition.z;

	}

}


class Fire extends Platform {
	constructor(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right) {
		super(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right);
		this.fire = false;


	}





}


//Actualiza la posicion de las plataformas con respecto al player 
//crea nuevas plataformas y elimina 

function PlatformPosition() {


	if (maxPlayer < player.maxAltitude) {
		maxPlayer = player.maxAltitude + 100;

		//elimina plataformas
		if (player.maxAltitude - platforms[0].localPosition.y > 500) {
			//	minPlayer += 500;
			scene.remove(platforms[0].mesh);
			platforms.shift();
		}
		// crea nueva plataforma
		if (platforms[platforms.length - 1].localPosition.y - player.localPosition.y < 500 && platforms.length < 20) {
			NewPlaform(cubeMaterialArray);
		}

		// actuliza la posicion de todas plataformas
		for (let i = 0; i = platforms < platforms.length; i++) {
			platforms[i].localPosition.y -= player.maxAltitude - maxPlayer;
			platforms[i].mesh.position.y = platforms[i].localPosition.y;

		}
		camera.position.y = player.localPosition.y; // actualiza la altura de la camara 
	}
}

function initPlaform(cant, material) {

	for (let i = 0; i < cant; i++) {

		NewPlaform(material);

	}

}

function Factor() {
	var factor = 1;
	if (Boolean(Math.round(Math.random()))) {
		factor *= (-factor);
	}
	return factor;
}

function NewPlaform(material) {

	var x = 1;
	var y = 0;
	var textureFinal;

	//var factor=Factor();	
	x = (Factor()) * Math.floor(Math.random() * widthArea);
	//	z = (Factor()) * Math.floor(Math.random() * widthArea);
	//posiion de la plataforma en el eje y con un factor de distancia y una variacon de esta 
	y += EndPlaform + fact + Factor() * Math.floor(Math.random() * variacion);
	EndPlaform = y;

	//asignacion si la plataforma se puede destruir
	var destroyPlataform = Boolean(Math.round(Math.random()));
	var lifesPlataform = 1;
	// asignacion de vidas a la plataforma
	if (destroyPlataform) {
		lifesPlataform = Math.floor(Math.random() * 3) + 1;
		switch (lifesPlataform) {
			case 1:
				textureFinal=platformLife1;
				break;
			case 2:
				textureFinal=platformLife2;
				break;
			case 3:
				textureFinal=platformLife3;
				break;


		}


	} else {
		textureFinal = platformPrincipal;
	}
	//asignacion de eje en el cual la plataforma se desplaza
	var movX = 0;
	var movZ = 0;
	if (Boolean(Math.round(Math.random()))) {
		movX = 1;
	} else {
		movZ = 1;
	}
	// asignacion entre dos tipos de plataformas 	

	var opc = Math.floor(Math.random() * 3) + 1; // opciones de platafomas

	console.log(opc);
	switch (opc) {
		case 1:
			platforms.push(new Platform(new THREE.Vector3(x, y, -200), new THREE.Vector3(movX, 1, movZ), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, opc, Boolean(Math.round(Math.random())), destroyPlataform));
			break;
		case 2:
			platforms.push(new Senoidal(new THREE.Vector3(x, y, -200), new THREE.Vector3(movX, 1, movZ), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, opc, Boolean(Math.round(Math.random())), destroyPlataform));
			break;
		case 3:
			textureFinal=platformFireOff;
			platforms.push(new Fire(new THREE.Vector3(x, y, -200), new THREE.Vector3(0, 0, 0), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), true));
			break;
	}

	scene.add(platforms[platforms.length - 1].mesh);

}

// score
function updateScore() {

	if (player.localPosition.y - previousHeight > deltaModifier) {
		if (modifier <= 5) {
			modifier++;
		}
		score += Math.round(player.localPosition.y - previousHeight) * modifier;
		previousHeight = player.localPosition.y;
	}
	if (previousScore != score) {
		console.log(modifier);
		console.log("Score " + score);
		previousScore = score;
	}

}
