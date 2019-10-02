//añadir nuevos power ups
//Power.Type = {/*NONE:0, WALL:1, GROUND:2*/};
//hyperJump tambien aparece en la toma de colisiones entre player y plataformas
var hyperJump = false;
var powerUpY = 1;
var inShield = false;
var Shield;
var n = Math.floor(Math.random() * 3);
class PowerUp extends GameObject
{
	constructor(position,width,height,depth,material,type)
	{
		super(position,width,height,depth,material);
		this.localPosition = position;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.type = type;
	}
	
	update()
	{
		//powerUpdate();
		this.OnCollision();
	}


	
	powerUpdate(){
		//var n = Math.floor(Math.random() * 3);
			
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
	
	OnCollision(){
		
		//Cambia la posicion del player en y, elimina el mesh del powerup
		for(let i = 0; i < powerUpsWarp.length; i++)
		{
			if(collision(player,powerUpsWarp[i]))
			{
				scene.remove(powerUpsWarp[i].mesh);
				powerUpsWarp.splice(i,1);
				for (let i = 0; i <platforms.length; i++) {
					platforms[i].onTransition = true;
				}
				player.onTransition = true;
				warpAudio.play();
				player.localPosition.y += 700;
				player.mesh.position.y = this.localPosition;
				player.velocity.y = 2;
				for (let i = 0; i <platforms.length; i++) {
					platforms[i].onTransition = false;
				}
				player.onTransition = false;
			}
		}

		// cambia el booleano hyperjump que define si en la proxima plataforma el player
		// tiene una mayor fuerza de salto, elimina el mesh del powerup
		for(let i = 0; i < powerUpsHyperJump.length; i++)
		{
			if(collision(player,powerUpsHyperJump[i]))
			{
				if(!hyperJump)
				{
					hyperJump = true;
				}
				hyperJumpAudio.play();
				scene.remove(powerUpsHyperJump[i].mesh);
				powerUpsHyperJump.splice(i,1);

			}
		}

		for(let i = 0; i < powerUpsShield.length; i++)
		{
			if(collision(player,powerUpsShield[i]))
			{
				shieldAudio.play();
				scene.remove(powerUpsShield[i].mesh);
				powerUpsShield.splice(i,1);
				if(!inShield)
				{
					inShield = true;
					var ShieldGeo = new THREE.SphereGeometry(100,100,100); 
					var ShieldMesh = new THREE.MeshBasicMaterial({color: 0xf2d298});

					Shield = new THREE.Mesh(ShieldGeo,ShieldMesh);
					Shield.material.transparent = true;
					Shield.material.opacity = 0.5;
					scene.add(Shield);
				}
			}
		}
	}
}

//Define de forma random el tipo de power up creado
function createPowerUp()
{
	//var n = 2;
	
	switch(n)
	{
		case 0:
			createWarp();
		break;

		case 1:
			createHyperJump();
		break;

		case 2:
			createShield();
		break;
	}
}


// Warp (mueve al player en y de forma instantanea)
function createWarp()
{
	powerUpsWarp.push(new PowerUp(new THREE.Vector3( 5,/*1000 * powerUpY*/player.localPosition.y+1000, -200 ), 100, 100, 40,warpPowerUp,1) );
	scene.add(powerUpsWarp[powerUpsWarp.length - 1].mesh);
}
// HyperJump (Aumenta la fuerza del salto la proxima vez que toque una plataforma)
function createHyperJump()
{
	
	powerUpsHyperJump.push(new PowerUp(new THREE.Vector3( 5,player.localPosition.y+1000,-200 ), 100, 100, 40,resortPowerUp,2) );
	scene.add(powerUpsHyperJump[powerUpsHyperJump.length - 1].mesh);
}
// Shield (hace inmune al jugador hasta la proxima vez que reciba daño)
function createShield()
{
	powerUpsShield.push(new PowerUp(new THREE.Vector3( 5,player.localPosition.y+1000,-200 ), 100, 100, 40,shieldPowerUp,3) );
	scene.add(powerUpsShield[powerUpsShield.length - 1].mesh);
}


