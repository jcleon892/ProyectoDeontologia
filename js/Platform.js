//Platform.Type = {/*NONE:0, WALL:1, GROUND:2*/};

var maxPlayer = 500;  // variacion para el desplazaiento y altura de la camara
var angleVariation = 30;
class Platform extends GameObject {
	//lifes implica la resistencia de la plataforma
	//3 , 2 o 1 golpe
	//al llegar a 0 de resistencia la plataforma debe desaparecer

	constructor(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right, destroy, onTransition) {
		super(position, width, height, depth, cubeMaterialArray, onTransition);
		this.velocity = velocity;
		this.lifes = lifes;
		this.moveForce = initialForce; //////valores iniciales de movimiento
		this.forceFactor = forceFactor; ////// velocidad de la plataforma
		this.type = type; /////// type de plaforma 
		this.localPosition = position;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.right = right; ///// determina si la plaforma se mueve de izquierda o derecha hacia los valores negativos es false
		this.destroy = destroy;
		this.visited = false;

	}

	update() {
		if (!this.onTransition) {
			this.PlatformMovement();
		}
	}

	TextureCambio(textureCambio) {
		this.texture = new THREE.MeshFaceMaterial(textureCambio);
		this.mesh = new THREE.Mesh(this.geometry, this.texture);
		this.mesh.position.set(this.localPosition.x, this.localPosition.y, this.localPosition.z);

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
		}
		else {

			this.localPosition.x -= this.velocity.x * this.forceFactor;
			this.localPosition.z -= this.velocity.z * this.forceFactor;

			if (this.mesh.position.x * (-1) >= widthArea || this.mesh.position.z * (-1) >= widthArea) {
				this.right = true;

			}

		}
		this.mesh.position.x = this.localPosition.x;
		this.mesh.position.z = this.localPosition.z;
	}

	stop() {
		GameObject.prototype.stop.call(this);
	}

}


class Senoidal extends Platform {
	constructor(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right, destroy,onTransition) {
		super(position, velocity, lifes, width, height, depth, cubeMaterialArray, initialForce, forceFactor, type, right, destroy,onTransition);
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
	//elimina plataformas
	if (player.maxAltitude - platforms[0].localPosition.y > 500) {
		//	minPlayer += 500;
		scene.remove(platforms[0].mesh);
		platforms.shift();
	}
	// crea nueva plataforma
	if (platforms[platforms.length - 1].localPosition.y - player.localPosition.y < 2500 && platforms.length < 20) {
		NewPlaform();
	}
}

function initPlaform(cant) {

	for (let i = 0; i < cant; i++) {

		NewPlaform();
	}
}

/////
function Factor() {
	var factor = 1;
	if (Boolean(Math.round(Math.random()))) {
		factor *= (-factor);
	}
	return factor;
}



// score
function updateScore() {

	if (player.localPosition.y  > deltaModifier) {
		if (modifier <= 5) {
			modifier++;
			deltaModifier=player.localPosition.y+5000;
		}

	}
	if (player.localPosition.y > previousHeight) {

		scorePlus += Math.round(player.localPosition.y - previousHeight) ;
		previousHeight = player.localPosition.y;
		scoreText.innerHTML = "score:  " + score;
		waitText.innerHTML = "plus: " + scorePlus;
		plusText.innerHTML = "  multiplier:  " + modifier;
		lifeText.innerHTML = "  life:  " + player.lifes;
		leveldisplay.innerHTML = "level: "+Level;
	}


}
function updateDatosScore(){
	//if(!player.isGrounded && player.localPosition>player.lasMaxAltitude){

		
		score+=scorePlus*modifier;

		if(score>1500){
			
		}
		scorePlus=0;
		modifier=1;
	//}
	
}