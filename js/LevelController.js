var textureFinal;
var lastEnemyPos =3000;
var EndEnemy = 0;
function NewPlaform() 
{
	var x = 1;
	var y = 50;
	var textureFinal;
	var lifesPlataform = 1;

	//var factor=Factor();	
	x = (Factor()) * Math.floor(Math.random() * widthArea);
	//	z = (Factor()) * Math.floor(Math.random() * widthArea);
	//posiion de la plataforma en el eje y con un factor de distancia y una variacon de esta 
	y += EndPlaform + 80 + Factor() * Math.floor(Math.random()*30);

	z = (Factor()) * Math.floor(Math.random() * widthArea);
	EndPlaform = y;

	//asignacion si la plataforma se puede destruir
	var destroyPlataform = false;
	var destroyprobability = Math.round(Math.random()*100);
		
	switch(Level)
	{
		case 1:
				if(destroyprobability  <= 10)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;
				}
				else 
				{
					destroyPlataform = false;
					textureFinal = platformNiflheim;

				}
				break
		case 2:
				if(destroyprobability  <= 20)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;				
	
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformJotunheim;

				}
				break;				
		case 3:
				if(destroyprobability  <= 30)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformVanaheim;

				}
				break;		
		case 4:
				if(destroyprobability  <= 40)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformVanaheim;
					//textureFinal = platformMuspelheim;

				}
				break;
		case 5:
				if(destroyprobability  <= 50)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;				
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformNidavellir;

				}
				break;
		case 6:
				if(destroyprobability  <= 60)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformMidgard;

				}
				break;
		case 7:
				if(destroyprobability  <= 70)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformAsgard;

				}
				break;
		case 8:
				if(destroyprobability  <= 80)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformValhalla;

				}
				break;
		case 9:
				if(destroyprobability  <= 90)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformValhalla;

				}
				break;
		case 10:
				if(destroyprobability  <= 100)
				{
					textureFinal= platformLife1;					
					destroyPlataform = true;					
					
				}else 
				{
					destroyPlataform = false;
					textureFinal = platformValhalla;
				}
				break;				
	}

	//CAMBIAR, VIDA DE LAS PLATAFORMAS NO DEBE SER RANDOM

	
	//var destroyPlataform = Boolean(Math.round(Math.random()));
	//asignacion de eje en el cual la plataforma se desplaza
	var movX = 0;
	var movZ = 0;
	if (Boolean(Math.round(Math.random()))) {
		movX = Math.round(2 * (Level/3));
	} else {
		movZ = Math.round(2 * (Level/3));
	}
	// asignacion entre dos tipos de plataformas 	

	var opc = Math.floor(Math.random() * 3) + 1; // opciones de platafomas
	var opc1 = Math.floor(Math.random() * 2) + 1; // opciones de platafomas
	var opc2 = Math.floor(Math.random() * 4) + 1; // opciones de platafomas
	var iPlatform;
	
	if(bandera === true)
	{
		
		iPlatform = new Platform(new THREE.Vector3(player.localPosition.x,player.localPosition.y-100,player.localPosition.z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50,platformNiflheim, 1, 2, 1, Boolean(Math.round(Math.random())), false, true);
		platforms.push(iPlatform);
		scene.add(iPlatform.mesh);

		bandera = false;
	}
	
	switch (Level) 
	{
		case 1:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 0, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 0, movZ), 1, 50, 30, 200, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
												
						break;
						
				}break;
		
		case 2:
				switch (opc1) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;

				}break;
		case 3:
				switch (opc1) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;

				}break;
		case 4:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma Fuego
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
				
		case 5:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
				
		case 6:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
				
		case 7:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;

		case 8:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
				
		case 9:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
				
		case 10:
				switch (opc) 
				{
					case 1:///////// Platform estatica o con movimiento vectorial
						platforms.push(new Platform(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 2://///////  Platform con movimiento Senoidal
						platforms.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(movX, 1, movZ), 1, 200, 30, 50, textureFinal, 1, 2, 2, Boolean(Math.round(Math.random())), destroyPlataform, true));
						break;
					case 3:///////// Plataforma 
						textureFinal=platformMuspelheim;
						platforms.push(new Fire(new THREE.Vector3(x, y, -z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50, textureFinal, 1, 2, 3, Boolean(Math.round(Math.random())), false));
						break;
				}break;
	}


	/*switch (opc) 
	{
		case 1:///////// Platform estatica o con movimiento vectorial
			platforms.push(new Platform(new THREE.Vector3(x, y, -200), new THREE.Vector3(movX, 1, movZ), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, opc, Boolean(Math.round(Math.random())), destroyPlataform, true));
			break;
		case 2://///////  Platform con movimiento Senoidal
			platforms.push(new Senoidal(new THREE.Vector3(x, y, -200), new THREE.Vector3(movX, 1, movZ), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, opc, Boolean(Math.round(Math.random())), destroyPlataform, true));
			break;
		case 3:///////// Plataforma 
			textureFinal=platformFireOff;
			platforms.push(new Fire(new THREE.Vector3(x, y, -200), new THREE.Vector3(0, 0, 0), lifesPlataform, 200, 30, 50, textureFinal, 1, 2, opc, Boolean(Math.round(Math.random())), false));
			break;
	}*/

	scene.add(platforms[platforms.length - 1].mesh);
}

function initEnemies(cant) {

	for (let i = 0; i < cant; i++) {

		NewEnemy();
	}
}
/*
function newEnemy(){
	if(enemies.length < 10)
	{
		var velX = 0;
		var velZ = 0;
		if (Boolean(Math.round(Math.random()))) {
			velX = Math.round(2 * (Level/3));
		} else {
			velZ = Math.round(2 * (Level/3));
		}

		for(let i = 0; i < cant;i++)
		{
			enemies.push(new Senoidal(new THREE.Vector3(Factor()) * Math.floor(Math.random() * widthArea), lastEnemyPos+ Math.floor(Math.random() * widthArea), Factor() * Math.floor(Math.random() * widthArea), new THREE.Vector3(velX, 0, velZ), 1, 50, 50, 50, enemiesTexture, 1, 2, 2, Boolean(Math.round(Math.random())), false, true));
			scene.add(enemies[enemies.length - 1].mesh);
		}
		lastEnemyPos = enemies[0].localPosition;
	}
	*/
function NewEnemy() 
{
	var x = 1;
	var y = 1200;
	var lifesPlataform = 1;

	//var factor=Factor();	
	x = (Factor()) * Math.floor(Math.random() * widthArea);
	//	z = (Factor()) * Math.floor(Math.random() * widthArea);
	//posiion de la plataforma en el eje y con un factor de distancia y una variacon de esta 
	y += EndEnemy + 80 + Factor() * Math.floor(Math.random()*30);

	z = (Factor()) * Math.floor(Math.random() * widthArea);
	EndEnemy = y;

	//asignacion si la plataforma se puede destruir
	var destroyPlataform = false;

	//var destroyPlataform = Boolean(Math.round(Math.random()));
	//asignacion de eje en el cual la plataforma se desplaza
	//asignacion de eje en el cual la plataforma se desplaza
	var velX = 0;
	var velZ = 0;
	if (Boolean(Math.round(Math.random()))) {
		velX = Math.round(2 * (Level/3));
	} else {
		velZ = Math.round(2 * (Level/3));
	}
	// asignacion entre dos tipos de plataformas 	

	var auxPlat;
	
	if(bandera === true)
	{
		
		auxPlat = new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(velX, 0, velZ), 1, 50, 50, 50, enemiesTexture, 1, 2,2, Boolean(Math.round(Math.random())), destroyPlataform, true);
		enemies.push(auxPlat);
		scene.add(auxPlat.mesh);

		bandera = false;
	}
	
	enemies.push(new Senoidal(new THREE.Vector3(x, y, -z), new THREE.Vector3(velX, 0, velZ), 1, 50, 50, 50, enemiesTexture, 1, 2,2, Boolean(Math.round(Math.random())), destroyPlataform, true));
	scene.add(enemies[enemies.length - 1].mesh);
}

function EnemyPosition() {
	//elimina plataformas
	if (player.maxAltitude - enemies[0].localPosition.y > 500) {
		//	minPlayer += 500;
		scene.remove(enemies[0].mesh);
		enemies.shift();
	}
	// crea nueva plataforma
	if (enemies[enemies.length - 1].localPosition.y - player.localPosition.y < 2500 && enemies.length < 20) {
		NewEnemy();
	}
}
