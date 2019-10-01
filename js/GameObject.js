class GameObject extends THREE.Object3D{

	//para mover cualquier objeto usar this.mesh.position
	//para rotar cualquier objeto usar this.mesh.rotation

	constructor(position,width,height,depth,cubeMaterialArray,onTransition)
	{
		super();
		this.geometry = new THREE.BoxGeometry( width, height, depth);
		this.texture = new THREE.MeshFaceMaterial( cubeMaterialArray );
		
		this.mesh = new THREE.Mesh( this.geometry, this.texture );
		//this.position = position;
		this.mesh.position.set(position.x,position.y,position.z);
		this.onTransition = onTransition;
		//this.myBoundingBox = this.geometry.boundingBox;
	}
	
	//update all gameObjects
	update(){
		
	}
	
	//debe retornar quien colisiona con quien y por donde
	//solo colisiones cuadradas
	OnCollision(){
		
	}
	
	stop()
	{
		console.log("stop")
		this.OnTransition = true;
		var auxVel = this.velocity;
		var auxforceFactor = this.forceFactor;
		while(this.onTransition)
		{
			this.velocity = new THREE.Vector3(0,0,0);
			this.forceFactor = 0;
		}
			this.velocity = auxVel;
			this.forceFactor = auxforceFactor;
			this.OnTransition = false;
	}

}