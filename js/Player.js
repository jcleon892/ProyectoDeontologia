 /////Nivel o mundo en el cual se encuentra el player
//var initialValue = 500;
var warningIndex;
var enemiesIndex;
var warningDestroy;
var enemyDestroy;
class Player extends GameObject
{
	//position vector3
	//velocity vector3
	//lifes int
	//faceSize int
	//cubeMaterialArray debe ser un array de materiales
	//initialforce float
	//forceFactor float
	constructor(position,velocity,lifes,width,height,depth,cubeMaterialArray,forceFactor,jumpForce,onTransition)
	{
		//para cambiar las texturas en runtime
		//cambiar var por this para poder acceder luego
		
		super(position,width,height,depth,cubeMaterialArray,onTransition);
		this.localPosition = position;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.velocity = velocity;
		this.lifes = lifes;
		this.initialVelocity = velocity.x;
		this.maxAltitude = position.y;
		this.lasMaxAltitude = position.y;
		this.forceFactor = forceFactor;
		this.jumpForce = jumpForce;
		this.isGrounded = false;
		this.initialY = this.localPosition.y;
	}
	
	update(){
		if(!this.onTransition)
		{
			this.movement();
			this.jumper();
		}
		if(this.velocity.y < 0)
		this.OnCollision();
		// update maximum altitude
		this.maxAltitude = (this.localPosition.y > this.maxAltitude) ? this.localPosition.y : this.maxAltitude;
		this.ActualLevel();

	}
	
	ActualLevel()
	{	
		if(player.localPosition.y - this.initialY >alturatip && player.localPosition.y - this.initialY >10000 &&  Level <10 ){
			tips();
			alturatip+=2500;
		}

		if(player.localPosition.y - this.initialY > 10000 && Level <10)
		{ 
			preguntaNivel=true;
			pregunta();			
			Level++;
			pregunta1=true;
			pregunta2=true;
			leveldisplay.innerHTML = "level: "+Level;
			this.initialY = player.localPosition.y;
			alturatip=2500;
			tips();
		}
	}
	
	
	
	//varia segun rotacion de camara count%2 
	//indica el eje del movimiento 
	//0 se mueve en x, 1 se mueve en z
	movement()
	{
		//console.log(Math.round(player.mesh.rotation.y*(180/Math.PI))%360);
			//console.log(dir);
		if(keyboard[keyboardValues.LEFT_ARROW])
		{
			if(Math.abs(dir)%2 == 0)
			{
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 0)
				{
				//console.log("Ejecutandose en x");
				this.localPosition.x -= this.velocity.x * this.forceFactor;
				this.mesh.position.x = this.localPosition.x;
				}
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 180)
				{
					//console.log("Ejecutandose en x");
					this.localPosition.x -= this.velocity.x * -this.forceFactor;
					this.mesh.position.x = this.localPosition.x;
				}
			}else
			{
				//console.log("Ejecutandose en z");
				//if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 90)
				if(Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == 90 ||
				Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == -270)
				{
				this.localPosition.z += this.velocity.z * this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
				//if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 270)
				if(Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == 270 ||
				Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == -90)
				{
				this.localPosition.z += this.velocity.z * -this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
			}
		}
		if(keyboard[keyboardValues.RIGHT_ARROW])
		{	
			if(Math.abs(dir)%2 == 0)
			{
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 0)
				{
				//console.log("Ejecutandose en x");
				this.localPosition.x += this.velocity.x * this.forceFactor;
				this.mesh.position.x = this.localPosition.x;
				}
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 180)
				{
					//console.log("Ejecutandose en x");
					this.localPosition.x += this.velocity.x * -this.forceFactor;
					this.mesh.position.x = this.localPosition.x;
				}
			}else
			{
				//console.log("Ejecutandose en z");
				//if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 90)
				if(Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == 90 ||
				Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == -270)
				{
				this.localPosition.z -= this.velocity.z * this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
				//if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 270)
				if(Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == 270 ||
				Math.round(player.mesh.rotation.y*(180/Math.PI))%360 == -90)
				{
				this.localPosition.z -= this.velocity.z * -this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
			}
		} 

		if(!keyboard[keyboardValues.LEFT_ARROW] &&
		!keyboard[keyboardValues.RIGHT_ARROW])
		{
			this.velocity.x = 0;
			this.velocity.z = 0;
			
		}else
		{
			this.velocity.x = this.initialVelocity;
			this.velocity.z = this.initialVelocity;
		}
	}
	
	jumper()
	{
		//console.log(this.velocity.y + "velocity");
		//console.log(this.localPosition.y + "y pos")
		if(this.isGrounded){
		this.velocity.y = this.jumpForce;
		//console.log("ground");
		}
		else{
			if(this.velocity.y <= -this.jumpForce) this.velocity.y = -this.jumpForce;
			else this.velocity.y -= _Gravity;
		}
		//this.entity.translate(this.velocity);
		this.localPosition.y += this.velocity.y
		this.mesh.position.y = this.localPosition.y;
	}
	
	OnCollision(){
		var destroy=false;
		var index=0;

		for(var i = 0; i < platforms.length;i++)
		{
			if(collision(this,platforms[i]) && this.velocity.y < 0)
			{
				if(this.localPosition.y - platforms[i].localPosition.y>=0){
				jumpAudio.play();	
				this.isGrounded = true;

				if(!hyperJump)
				{
					this.velocity.y = this.jumpForce;

				} else{
					this.velocity.y = this.jumpForce + (this.jumpForce *1.5);
					hyperJump = false;
				}
				// eliminacion de las vidas por cada colision si es plataforma es destructible 
					if(platforms[i].destroy){
						platforms[i].lifes--;
						if(platforms[i].lifes==2){
							platforms[i].cubeMaterialArray=platformLife2;							
						}else{
							platforms[i].cubeMaterialArray=platformLife1;
						}
							platforms[i].update(); 
							
						if(platforms[i].lifes==0){
							index=i;
							destroy=true;
						}

					}
					// control de visitado para el score 
				if(platforms[i].visited){					
					updateDatosScore();
					previousHeight=player.localPosition.y;
				}

				platforms[i].visited=true;	
				}
				// plataforma fuego 
				if(platforms[i].type==3){
					if (platforms[i].fire && !inShield) {
						damageAudio.play();
						gameOverAudio.play();
						scene.remove(player.mesh);   // destruye el personaje 
						gamerOver();
						
					}
					if(platforms[i].fire && inShield)
					{
						damageAudio.play();
						inShield = false;
						scene.remove(Shield);
					}
					platforms[i].fire = true;
					platforms[i].cubeMaterialArray=platformFire;					
					platforms[i].update();
					
					//scene.update();
				}
				
			}else{
				this.isGrounded = false;
			}
		}
		// destruccion de la plataforma si no tiene vidas 
		if(destroy)
		{
			scene.remove(platforms[index].mesh);	
			platforms.splice(index,1);
		}
		/*
		for(let i = 0; i< warning.length;i++)
		{
			if(collision(this,warning[i]))
			{
				warningIndex = i;
				warningDestroy = true;
			}
		}*/
		for(let i = 0; i< enemies.length;i++)
		{
			if(collision(this,enemies[i]))
			{
				//console.log("pregunta");

				
				///configuracion scrit de peguntas 


				enemiesIndex = i;
				enemyDestroy = true;
				pregunta();
			}
		}
		if(enemyDestroy )
		{
			if(inShield)
			{
				scene.remove(enemies[enemiesIndex].mesh);	
				enemies.splice(enemiesIndex,1);
				enemyDestroy = false;
				scene.remove(Shield);
				inShield = false;
			}else
			{
				//player.lifes--;
				scene.remove(enemies[enemiesIndex].mesh);	
				enemies.splice(enemiesIndex,1);
				enemyDestroy = false;
			}
		}
		
		if(player.lifes <= 0)
		{
			damageAudio.play();
			gameOverAudio.play();
			scene.remove(player.mesh);
			gamerOver();
		}
		/*if(warning.length > 0 && warningDestroy)
		{
			scene.remove(warning[warningIndex].mesh);	
			warning.splice(warningIndex,1);
			//player.lifes = 0;
			//gamerOver();
			warningDestroy = false;
		}*/


	}
	stop()
	{
		GameObject.prototype.stop.call(this);
	}

	
}