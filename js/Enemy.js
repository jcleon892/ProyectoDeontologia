//Enemy.Type = {/*NONE:0, WALL:1, GROUND:2*/};

class Enemy extends Player{
	
	constructor(position,velocity,lifes,width,height,depth,cubeMaterialArray,initialForce,forceFactor,onTransition)
	{
		super(position,velocity,lifes,width,height,depth,cubeMaterialArray,initialForce,forceFactor,onTransition);
	}
	
	update(){
		if(!this.onTransition)
		{
			movement();
		}
	}
	
	movement(){

		//set movement based on enemy type
		//por cada enemy instaciado
		//switch case
			//si el enemigo el de tipo 1
			//call function enemigotipo1
			//...
			//si el enemigo el de tipo n-1
			//call function enemigotipon-1
	
	}

	OnCollision(){
		GameObject.prototype.OnCollision.call(this);
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
	
	
}