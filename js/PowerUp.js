//añadir nuevos power ups
//Power.Type = {/*NONE:0, WALL:1, GROUND:2*/};

class PowerUp extends GameObject
{
	constructor(position,width,height,depth,material,onTransition)
	{
		super(position,width,height,depth,material,onTransition);
		this.localPosition = position;
		this.width = width;
		this.height = height;
		this.depth = depth;
	}
	
	update()
	{
		powerUpdate();
	}


	
	powerUpdate(){
		//var n = Math.floor(Math.random() * 3);
			
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
	
/*
	OnCollision(){
		GameObject.prototype.OnCollision.call(this);
	}*/
}

function selectPowerUp()
{
	//var n = Math.floor(Math.random() * 2);
	var n = 0;
	switch(n)
	{
		case 0:
			createPowerUp1();
		break;

		case 1:
			createPowerUp2();
		break;

	}
}

// Warp
function createPowerUp1()
{

	//scene.add( new PowerUp(new THREE.Vector3( 5,500,-200 ), 200, 30, 40,new THREE.MeshBasicMaterial( {color: 0x00ff00} ),1).mesh );

	powerUps1.push(new PowerUp(new THREE.Vector3( 5,100,-200 ), 200, 30, 40,new THREE.MeshBasicMaterial( {color: 0x00ff00} ),1) );
	scene.add(powerUps1[powerUps1.length - 1].mesh);
}
// SuperJump
function createPowerUp2()
{
	
	powerUps2.push(new PowerUp(new THREE.Vector3( 5,100,-200 ), 200, 30, 40,new THREE.MeshBasicMaterial( {color: 0x0000FF} ),2) );
	scene.add(powerUps2[powerUps2.length - 1].mesh);
}



