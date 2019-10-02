class Disaster extends GameObject
{
	constructor(position,velocity,lifes,width,height,depth,cubeMaterialArray,onTransition)
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
		this.lastTime = Date.now();
	}
	
	update()
	{
		this.disasterUpdate();
		//this.OnCollision();
	}


	
	disasterUpdate(){
		//var n = Math.floor(Math.random() * 3);
		
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
	
}

class Ray extends Disaster
{
	constructor(position,velocity,lifes,width,height,depth,cubeMaterialArray,onTransition)
	{
		super(position,velocity,lifes,width,height,depth,cubeMaterialArray,onTransition);
		this.active = false;
		this.localPosition.y = player.localPosition.y + 5000;
		//this.ray = new GameObject(position,width,height,depth,cubeMaterialArray,onTransition);
	}
	
	update()
	{
		this.rayUpdate();
		this.rayMovement();
		//this.OnCollision();
	}

	stop()
	{
		GameObject.prototype.stop.call(this);
	}

	
	rayUpdate(){
		if(!this.active)this.localPosition.y = platforms[0].localPosition.y+5000;
		if(player.localPosition.y > 1000 &&  Date.now()-this.lastTime>= 5000)
		{
			this.lastTime = Date.now();
			this.active = true;
		}
		if(this.active)
		{
			platforms[0].cubeMaterialArray=warningTexture;
			this.localPosition.y = platforms.position.y + 5000;
			this.velocity.y = 10;
		}
		if(collision(this,platforms[0]) && !this.active) 
		{
			var plat = [];
			
			for(let i = 0; i < platforms.length; i++)
			{
				if(i = 2 ) continue;
				plat.push(platforms[i]);
			}
			scene.remove(platforms[0].mesh);
			platforms = plat;
			this.active = false;
			this.localPosition.y = platforms[0].localPosition.y+5000;
			this.velocity.y = 0;
		}
		//var n = Math.floor(Math.random() * 3);
		
	}
	
	rayMovement()
	{
		this.localPosition.y -= this.velocity.y;
		this.mesh.position.y = this.localPosition.y;
	}
	
	stop()
	{
		GameObject.prototype.stop.call(this);
	}
}

/*class Disaster extends THREE.Object3D {
    constructor(position, color, finalColicion,initime, time, platform)
    {
        super();
          
        this.material = new THREE.LineBasicMaterial( {color});
        this.geometry = new THREE.Geometry();
        this.raycaster = new THREE.Raycaster();
      
       this.geometry.vertices.push(position);
       this.geometry.vertices.push(finalColicion);
      
        this.mesh=new THREE.Line( this.geometry, this.material );      
        this.localPosition = position;
        this.finalColicion=finalColicion;
        this.initime=initime;
        this.time=time;
        this.avance=0.0;
        this.platform=platform

    }

    update() {
     //   this.OnCollision();

      
		
        } 
        
        OnCollision(){

            this.raycaster.setFromCamera( mouse, camera );
            var intersects = this.raycaster.intersectObjects( scene.children );

            for ( var i = 0; i < intersects.length; i++ ) {

                intersects[ i ].object.material.color.set( 0xff0000 );
        
            }

        }


       ///  console.log(elapsed);

        }



class Ray extends Disaster {

}


function caidaDesastre(){

    var actual = new Date();
    var elapsed = (actual-rayo.initime  )/1000; 
    
   // console.log(elapsed);
        if( elapsed>rayo.time){*/
       /*
        rayo.avance+=0.5;
         var x= (Math.random()*widthArea*2)-widthArea;
        var  z= (Math.random()*widthArea*2)-widthArea;
       //this.heith-=this.delta;
       rayo.heith-=50;
        console.log(rayo.heith + " x"+x +" z "+z);
        console.log(rayo.localPosition.y);


       // console.log( this.localPosition.y);
        rayo.geometry.vertices.push( new THREE.Vector3(x,  rayo.heith,z ) );

        rayo.mesh=new THREE.Line( rayo.geometry, rayo.material );
        
        scene.add(rayo.mesh);
        */
       //scene.add(rayo.mesh);
       
      // console.log("pruba");
/*    }
    if(elapsed>rayo.time+1){
        scene.remove(rayo.mesh);
        scene.remove(platforms[rayo.platform-1].mesh);
       // platforms.splice(rayo.platform-1,1);
        console.log(rayo.platform);
       
    }
    

}


var rayo;
var inicioRayo=5000;


var startTime = new Date();
var t=true;
function rayos(){

    var actual = new Date();
    var elapsed = (actual- startTime )/1000; 

    if(elapsed>3 && t){
        newRay();
        t=false;
    }

    if(!t){
        caidaDesastre();
    }

}


function newRay(){

var x= (Math.random()*widthArea*2)-widthArea;
var y= player.position.y+inicioRayo;

//var y= player.localPosition.y;
//var y= -10000;
var z=(Math.random()*widthArea*2)-widthArea;

var initime =  new Date();
var cont=0;
do{
cont++;
}while(platforms[cont].localPosition.y == player.localPosition.y);
cont+=2;
platforms[cont].TextureCambio(platformFire);
rayo= new Disaster(new THREE.Vector3(x, y, z),{ color: 0x0000FF },new THREE.Vector3(platforms[cont].localPosition.x,platforms[cont].localPosition.y, platforms[cont].localPosition.z),initime,3,cont );

//scene.add(rayo.raycaster);


}
*/

