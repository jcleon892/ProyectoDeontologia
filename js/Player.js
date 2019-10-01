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
	}
	
	update(){
		if(!this.onTransition)
		{
			this.movement();
			this.jumper();
		}
		this.OnCollision();
		// update maximum altitude
		this.maxAltitude = (this.localPosition.y > this.maxAltitude) ? this.localPosition.y : this.maxAltitude;
	}
	
	//varia segun rotacion de camara count%2 
	//indica el eje del movimiento 
	//0 se mueve en x, 1 se mueve en z
	movement()
	{
		//console.log(Math.round(player.mesh.rotation.y*(180/Math.PI))%360);
			console.log(dir);
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
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 90)
				{
				this.localPosition.z -= this.velocity.z * this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 270)
				{
				this.localPosition.z -= this.velocity.z * -this.forceFactor;
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
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 90)
				{
				this.localPosition.z += this.velocity.z * this.forceFactor;
				this.mesh.position.z = this.localPosition.z;
				}
				if(Math.abs(Math.round(player.mesh.rotation.y*(180/Math.PI)))%360 == 270)
				{
				this.localPosition.z += this.velocity.z * -this.forceFactor;
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
		var superJump = false;
		for(var i = 0; i < powerUps1.length;i++)
		{
			if(collision(this,powerUps1[i]))
			{	

				this.localPosition.y+= 200;
				this.mesh.position.y = this.localPosition;
				this.velocity.y = 0;
				scene.remove(powerUps1[i].mesh);			
				powerUps1.splice(i,1);
			}
		}

		for(var i = 0; i < powerUps2.length;i++)
		{
			if(collision(this,powerUps2[i]))
			{	

				if(!superJump)
				{
					superJump = true;
				}

				scene.remove(powerUps2[i]);
			}

		}
		for(var i = 0; i < platforms.length;i++)
		{
			if(collision(this,platforms[i]) && this.velocity.y < 0)
			{
				if(this.localPosition.y - platforms[i].localPosition.y>=0){
				this.isGrounded = true;
				if(!superJump)
				{
					this.velocity.y = this.jumpForce;
				}
				else{
					this.velocity.y = this.jumpFore * 2;
					superJump = false;
				}
				// eliminacion de las vidas por cada colision si es plataforma es destructible 
					if(platforms[i].destroy){
						platforms[i].lifes--;
						scene.remove(platforms[i].mesh);
						if(platforms[i].lifes==2){													
							platforms[i].TextureCambio(platformLife2);				
							
						}else{
						platforms[i].TextureCambio(platformLife1);	
						}

						scene.add(platforms[i].mesh);
							
						if(platforms[i].lifes==0){
							index=i;
							destroy=true;
						}

					}
					// control de visitado para el score 
				if(platforms[i].visited){
					modifier=1;
					previousHeight=player.localPosition.y;
				}

				platforms[i].visited=true;	
				}
				// plataforma fuego 
				if(platforms[i].type==3){
					if (platforms[i].fire) {
						scene.remove(player.mesh);   // destruye el personaje 
						console.log("game over");
					}
			
					platforms[i].fire = true;
					
					scene.remove(platforms[i].mesh);
					platforms[i].TextureCambio(platformFire);					
					
					scene.add(platforms[i].mesh);
					//scene.update();
				}
				
			}else{
				this.isGrounded = false;
			}
		}
		// destruccion de la plataforma si no tiene vidas 
		if(destroy){
			scene.remove(platforms[index].mesh);	
			platforms.splice(index,1);
			

		}


	}
	stop()
	{
		GameObject.prototype.stop.call(this);
	}

	
}