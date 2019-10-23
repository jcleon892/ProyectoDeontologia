var camera, scene, renderer;
var texture;
var player;
var platform;
var dir = 0;
var _Gravity = 0.98 / 5;
//var fact = 200,  variacion=30;  // control de distancias de las plataformas 
var pivot;
var rotAux = 0;
var initGame = false;
var ceilingValue = 3000; //Distancia comparada con altura de salto para crear otro powerup
var EndPlaform = 0; // Distancia anterior entre plaformas 
var widthArea = 300; // ancho del juego 
var score = 0;  // score
var modifier = 1; //multiplicador
var deltaModifier = 1000;  // Distacia para aumento del score
var previousHeight = 0;  // distancia anterior 

var highscores=[];
var highscoresDisplay;
var bandera = true;
var Level =1;

//backgrounds

var backgroundNiflheim = [];
var backgroundJotunheim = [];
var backgroundVanaheim = [];
var backgroundMuspelheim = [];
var backgroundNidavellir = [];
var backgroundMidgard = [];
var backgroundAsgard = [];
var backgroundValhalla = [];

//platforms

var platformNiflheim = [];  //
var platformJotunheim = [];  // 
var platformVanaheim = [];  // 
var platformMuspelheim = [];  // 
var platformNidavellir = [];  //
var platformMidgard = [];  //
var platformAsgard = [];  // 
var platformValhalla = [];  // 

//Texturas enemigos y warning
var enemiesTexture = [];  
var warningTexture = [];

//Power Ups

var resortPowerUp = [];
var shieldPowerUp = [];
var warpPowerUp = [];



var platformLife1 = []; // textura ladrillo de 1 vidas

var playerGame=[];

var platforms = [];  // areglo de plaformas
var enemies = [];  // areglo de enemigos
var warning = [];
//arreglos de plataformas
var powerUpsWarp = [];
//arreglos power ups
var powerUpsHyperJump = [];
var powerUpsShield = [];
var obj = new THREE.Object3D();
//Sonidos
var warpAudio;
var hyperJumpAudio;
var shieldAudio;
var jumpAudio;
var clickAudio;
var gameOverAudio;
var thunderAudio;
var damageAudio;
var menuAudio;
var gameplayAudio;
//var object;

var scorePlus = 0;
var scoreText;
var waitText;
var plusText;
var lifeText;
var preguntatxt;

var gameOmerText;
var timeLife;
var life = false;
var timeDeltaLife = 3;

var iPlatform;
var lastTime = Date.now();


function init() {


	//BACKGROUND

	/////Niflheim
    /*backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_front.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_back.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_left.png"), side: THREE.DoubleSide}));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_right.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_front.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/niflheim_front.png"), side: THREE.DoubleSide }));
*/
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_right.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_left.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_back.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_front.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_back.png"), side: THREE.DoubleSide }));
	backgroundNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Niflheim/nilfheim_front.png"), side: THREE.DoubleSide }));

	
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));
	playerGame.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/player/player.png"), side: THREE.DoubleSide }));

	///////Jotunheim
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_right.png"), side: THREE.DoubleSide }));
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_left.png"), side: THREE.DoubleSide }));
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_back.png"), side: THREE.DoubleSide }));
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_right.png"), side: THREE.DoubleSide }));
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_back.png"), side: THREE.DoubleSide }));
	backgroundJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Jotünheim/jotunheim_front.png"), side: THREE.DoubleSide }));

	///////Vanaheim
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_right.png"), side: THREE.DoubleSide }));
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_left.png"), side: THREE.DoubleSide }));
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_left.png"), side: THREE.DoubleSide }));
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_right.png"), side: THREE.DoubleSide }));
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_back.png"), side: THREE.DoubleSide }));
	backgroundVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Vanaheim/vanaheim_front.png"), side: THREE.DoubleSide }));

	////////Muspelheim	
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_right.png"), side: THREE.DoubleSide }));
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_left.png"), side: THREE.DoubleSide }));
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_left.png"), side: THREE.DoubleSide }));
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_right.png"), side: THREE.DoubleSide }));
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_back.png"), side: THREE.DoubleSide }));
	backgroundMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Muspelheim/muspelheim_front.png"), side: THREE.DoubleSide }));

	//////Nidavellir
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_right.png"), side: THREE.DoubleSide }));
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_left.png"), side: THREE.DoubleSide }));
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_left.png"), side: THREE.DoubleSide }));
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_right.png"), side: THREE.DoubleSide }));
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_back.png"), side: THREE.DoubleSide }));
	backgroundNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Nidavellir/nidavellir_front.png"), side: THREE.DoubleSide }));

	//////Midgard
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_right.png"), side: THREE.DoubleSide }));
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_left.png"), side: THREE.DoubleSide }));
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_left.png"), side: THREE.DoubleSide }));
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_right.png"), side: THREE.DoubleSide }));
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_back.png"), side: THREE.DoubleSide }));
	backgroundMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Midgard/midgard_front.png"), side: THREE.DoubleSide }));

	////////Asgard
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_right.png"), side: THREE.DoubleSide }));
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_left.png"), side: THREE.DoubleSide }));
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_left.png"), side: THREE.DoubleSide }));
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_right.png"), side: THREE.DoubleSide }));
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_back.png"), side: THREE.DoubleSide }));
	backgroundAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Asgard/asgard_front.png"), side: THREE.DoubleSide }));

	////////Valhalla
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_right.png"), side: THREE.DoubleSide }));
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_left.png"), side: THREE.DoubleSide }));
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_left.png"), side: THREE.DoubleSide }));
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_right.png"), side: THREE.DoubleSide }));
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_back.png"), side: THREE.DoubleSide }));
	backgroundValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/background/Valhalla/valhalla_front.png"), side: THREE.DoubleSide }));

	//PLATAFORMAS 

	/////Niflheim
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheimplataforma3.png"), side: THREE.DoubleSide }));
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheimplataforma3.png"), side: THREE.DoubleSide }));
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheimplataforma2.png"), side: THREE.DoubleSide }));
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheimplataforma2.png"), side: THREE.DoubleSide }));
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheinplataforma1.png"), side: THREE.DoubleSide }));
	platformNiflheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Niflheim/nilfheinplataforma1.png"), side: THREE.DoubleSide }));

	///////Jotunheim
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun3.png"), side: THREE.DoubleSide }));
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun3.png"), side: THREE.DoubleSide }));
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun2.png"), side: THREE.DoubleSide }));
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun2.png"), side: THREE.DoubleSide }));
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun1.png"), side: THREE.DoubleSide }));
	platformJotunheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Jotünheim/jotun1.png"), side: THREE.DoubleSide }));

	///////Vanaheim
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat3.png"), side: THREE.DoubleSide }));
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat3.png"), side: THREE.DoubleSide }));
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat2.png"), side: THREE.DoubleSide }));
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat2.png"), side: THREE.DoubleSide }));
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat1.png"), side: THREE.DoubleSide }));
	platformVanaheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Vanaheim/plat1.png"), side: THREE.DoubleSide }));

	////////Muspelheim	
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat3.png"), side: THREE.DoubleSide }));
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat3.png"), side: THREE.DoubleSide }));
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat2.png"), side: THREE.DoubleSide }));
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat2.png"), side: THREE.DoubleSide }));
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat1.png"), side: THREE.DoubleSide }));
	platformMuspelheim.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Muspelheim/plat1.png"), side: THREE.DoubleSide }));

	//////Nidavellir
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat3.png"), side: THREE.DoubleSide }));
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat3.png"), side: THREE.DoubleSide }));
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat2.png"), side: THREE.DoubleSide }));
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat2.png"), side: THREE.DoubleSide }));
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat1.png"), side: THREE.DoubleSide }));
	platformNidavellir.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Nidavellir/plat1.png"), side: THREE.DoubleSide }));

	//////Midgard
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat3.png"), side: THREE.DoubleSide }));
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat3.png"), side: THREE.DoubleSide }));
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat2.png"), side: THREE.DoubleSide }));
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat2.png"), side: THREE.DoubleSide }));
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat1.png"), side: THREE.DoubleSide }));
	platformMidgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Midgard/plat1.png"), side: THREE.DoubleSide }));

	////////Asgard
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat3.png"), side: THREE.DoubleSide }));
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat3.png"), side: THREE.DoubleSide }));
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat2.png"), side: THREE.DoubleSide }));
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat2.png"), side: THREE.DoubleSide }));
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat1.png"), side: THREE.DoubleSide }));
	platformAsgard.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Asgard/plat1.png"), side: THREE.DoubleSide }));

	////////Valhalla
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat3.png"), side: THREE.DoubleSide }));
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat3.png"), side: THREE.DoubleSide }));
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat2.png"), side: THREE.DoubleSide }));
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat2.png"), side: THREE.DoubleSide }));
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat1.png"), side: THREE.DoubleSide }));
	platformValhalla.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/Valhalla/plat1.png"), side: THREE.DoubleSide }));



	// var platformLife1=[]
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat3.png"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat3.png"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat2.png"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat2.png"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat1.png"), side: THREE.DoubleSide }));
	platformLife1.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/plataformaRota/plat1.png"), side: THREE.DoubleSide }));



	////////RESORT
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte2.png"), side: THREE.DoubleSide }));
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte2.png"), side: THREE.DoubleSide }));
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte2.png"), side: THREE.DoubleSide }));
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte1.png"), side: THREE.DoubleSide }));
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte1.png"), side: THREE.DoubleSide }));
	resortPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/resorte1.png"), side: THREE.DoubleSide }));

	////////SHIELD
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo2.png"), side: THREE.DoubleSide }));
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo2.png"), side: THREE.DoubleSide }));
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo2.png"), side: THREE.DoubleSide }));
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo1.png"), side: THREE.DoubleSide }));
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo1.png"), side: THREE.DoubleSide }));
	shieldPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/escudo1.png"), side: THREE.DoubleSide }));


	////////WARP
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero2.png"), side: THREE.DoubleSide }));
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero2.png"), side: THREE.DoubleSide }));
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero2.png"), side: THREE.DoubleSide }));
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero1.png"), side: THREE.DoubleSide }));
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero1.png"), side: THREE.DoubleSide }));
	warpPowerUp.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/platform/PoweUps/agujero1.png"), side: THREE.DoubleSide }));

	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));
	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));
	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));
	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));
	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));
	enemiesTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/enemy.png"), side: THREE.DoubleSide }));

	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat3Aviso.png"), side: THREE.DoubleSide }));
	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat3Aviso.png"), side: THREE.DoubleSide }));
	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat2Aviso.png"), side: THREE.DoubleSide }));
	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat2Aviso.png"), side: THREE.DoubleSide }));
	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat1Aviso.png"), side: THREE.DoubleSide }));
	warningTexture.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("Images/plataforma_aviso/plat1Aviso.png"), side: THREE.DoubleSide }));









	////////Asgard
	////////Valhalla
	//carga de sonidos
	warpAudio = new Audio("Audio/Sonidos/OGG/PWU-Warp.ogg");
	hyperJumpAudio = new Audio("Audio/Sonidos/OGG/PWU-HyperJump.ogg");
	shieldAudio = new Audio("Audio/Sonidos/OGG/PWU-Shield.ogg");
	jumpAudio = new Audio("Audio/Sonidos/OGG/PLF-Jump.ogg");
	clickAudio = new Audio("Audio/Sonidos/OGG/Click-Sword-Strike.ogg");
	gameOverAudio = new Audio("Audio/Sonidos/OGG/Game-Over-Voice.ogg");
	thunderAudio = new Audio("Audio/Sonidos/OGG/DN-Thunder.ogg");
	damageAudio = new Audio("Audio/Sonidos/OGG/PJ-Damage.ogg");
	menuAudio = new Audio("Audio/Musica/OGG/menu-OGG.ogg");
	gameplayAudio = new Audio("Audio/Musica/OGG/gameplay-OGG.ogg");
	menuAudio.loop = true;
	gameplayAudio.loop = true;
	menuAudio.play();
	clickAudio.volume = 0.5;
	menuAudio.volume = 0.7;
	gameplayAudio.volume = 0.7;

	//CREATE ALL INITIAL OBJECTS

	// Create a scene
	scene = new THREE.Scene();

	// Add the mesh to the scene

	player = new Player(new THREE.Vector3(5, 500, -200), new THREE.Vector3(45, 0, 45), 3, 70, 70, 70, playerGame, 0.1, 10, true);
	player.mesh.visible = true;
    // prepare loader and load the model
    /*var oLoader = new THREE.OBJMTLLoader();
    oLoader.load('models/yggdra70.obj', 'models/yggdra70.mtl', function(object) {
		obj = object;
		object.position.x = player.localPosition.x;
		object.position.y = player.localPosition.y;
		object.position.z = player.localPosition.z;
		object.scale.set(1,1,1);
		scene.add(object);
    });
*/
    // prepare loader and load the model
    var oLoader = new THREE.OBJLoader();
    oLoader.load('models/yggdra70.obj', function(object, materials) {
	
	var mat = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("models/tex.png"), side: THREE.DoubleSide });

      object.traverse( function(child) {
        if (child instanceof THREE.Mesh) {

          // apply custom material
			child.material = mat;
			//var texture = new THREE.TextureLoader().load( 'models/tex.png' );
          // enable casting shadows
		  //texture.encoding = THREE.sRGBEncoding;
		  //texture.anisotropy = 16;
		  //child.material.map = mat;
          //child.castShadow = true;
          //child.receiveShadow = true;
        }
      });
      
		obj = object;
		object.position.x = player.localPosition.x;
		object.position.y = player.localPosition.y;
		object.position.z = player.localPosition.z;
		object.scale.set(1,1,1);
		scene.add(object);
    });
	
	/*var mtlLoader = new THREE.MTLLoader();
	//mtlLoader.setPath( "https://threejs.org/examples/models/obj/walt/" );
	mtlLoader.load( 'models/yggdra70.mtl', function( materials ) {

	  materials.preload();
	  var objLoader = new THREE.OBJLoader();
	  objLoader.setMaterials( materials );
	  //objLoader.setPath( "https://threejs.org/examples/models/obj/walt/" );
	  objLoader.load( 'models/yggdra70.obj', function ( object ) {

		obj = object;
		object.position.x = player.localPosition.x;
		object.position.y = player.localPosition.y;
		object.position.z = player.localPosition.z;
		object.scale.set(1,1,1);
		scene.add(object);
		console.log(object);
	  } );

	} );
	*/
	
	/*var loader = new THREE.OBJLoader();
	loader.load('models/yggdra70.obj', function onLoad (object) {
	object.traverse( function ( child ) 
	{
		if ( child.isMesh ) {
						
				child.material = new THREE.MeshStandardMaterial();
				var texture = new THREE.TextureLoader().load( 'models/tex.png' );
				texture.encoding = THREE.sRGBEncoding;
				texture.anisotropy = 16;

				child.material.map = texture;
				child.flatShading = true;
				child.castShadow = true;
			}
		} );
	});
	*/
	/*var loader = new THREE.GLTFLoader();

	loader.load( 'models/yggdra70.glb', function ( gltf ) {

		obj = gltf.asset;
		gltf.asset.position.x = player.localPosition.x;
		gltf.asset.position.y = player.localPosition.y;
		gltf.asset.position.z = player.localPosition.z;
		gltf.asset.scale.set(1,1,1);
		scene.add( gltf.asset );

	});*/
	//enemies.push(new Senoidal(new THREE.Vector3(Factor()) * Math.floor(Math.random() * widthArea), 2500, Factor() * Math.floor(Math.random() * widthArea), new THREE.Vector3(1, 0, 0), 1, 50, 50, 50, enemiesTexture, 1, 2, 2, Boolean(Math.round(Math.random())), false, true));
	//scene.add(enemies[0].mesh);
	warning.push(new Platform(new THREE.Vector3(Math.floor(Math.random() * widthArea)),5000,Math.floor(Math.random() * widthArea), new THREE.Vector3(0, 1+(Level*0.2), 0), 1, 50,50,50, warningTexture, 1, 2, 1, Boolean(Math.round(Math.random())), false, true));
	scene.add(warning[0].mesh);
  
  
	for (let i = 0; i < 10; i++) {
		var material;/* = cubeMaterialArray + i.toString();*/
		if (i == 0) material = backgroundNiflheim;
		if (i == 1) material = backgroundJotunheim;
		if (i == 2) material = backgroundVanaheim;
		if (i == 3) material = backgroundMuspelheim;
		if (i == 4) material = backgroundNidavellir;
		if (i == 5) material = backgroundMidgard;
		if (i == 6) material = backgroundAsgard;
		if (i == 7) material = backgroundValhalla;
		if (i == 8) material = backgroundValhalla;
		if (i == 9) material = backgroundValhalla;
		var gameArea = new THREE.Mesh(
		new THREE.CubeGeometry(3000, 10000, 3000, 1, 1, 1), material);
		gameArea.position.set(player.localPosition.x, 5000 + 10000 * i, player.localPosition.z);
		scene.add(gameArea);
	}
	scene.add(player.mesh);
	
 //platforms.push(new Platform(new THREE.Vector3(player.localPosition.x,player.localPosition.y-100,player.localPosition.z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50,textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), false, true));

	initPlaform(20);
	initEnemies(20);
	//initWarning(5);
	//newEnemy(20);
	/*iPlatform = platforms.push(new Platform(new THREE.Vector3(player.localPosition.x,player.localPosition.y-100,player.localPosition.z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50,textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), false, true));
	platforms.push(iPlatform);
	scene.add(iPlatform.mesh);*/

	createPowerUp();

	// Create a camera
	camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 25000);
	camera.position.x = 5;
	camera.position.y = 0;
	camera.position.z = 1200;

	pivot = new THREE.Object3D();
	this.geometry = new THREE.BoxGeometry(70, 70, 70);
	pivot.mesh = new THREE.Mesh(this.geometry);
	pivot.mesh.position.set(player.localPosition.x, player.localPosition.y, player.localPosition.z);
	pivot.mesh.visible = false;
	scene.add(pivot.mesh);
	pivot.mesh.add(camera);

	camera.lookAt(pivot.mesh.position);



	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize(1280, 720);

	// Add in the created DOM element to the body of the document
	scoreText = document.createElement('div');
	scoreText.style.position = 'absolute';
	scoreText.style.width = 100;
	scoreText.style.height = 100;
	scoreText.innerHTML = "";
	scoreText.style.top = 50 + 'px';
	scoreText.style.left = 50 + 'px';
	scoreText.style.font = "30px MyEpistolar";
	scoreText.style.color = "white";
	document.body.appendChild(scoreText);

	waitText = document.createElement('div');
	waitText.style.position = 'absolute';
	waitText.style.width = 100;
	waitText.style.height = 100;
	waitText.innerHTML = "";
	waitText.style.top = 100 + 'px';
	waitText.style.left = 50 + 'px';
	waitText.style.font = "20px MyEpistolar";
	waitText.style.color = "white";
	document.body.appendChild(waitText);

	plusText = document.createElement('div');
	plusText.style.position = 'absolute';
	plusText.style.width = 100;
	plusText.style.height = 100;
	plusText.innerHTML = "";
	plusText.style.top = 130 + 'px';
	plusText.style.left = 50 + 'px';
	plusText.style.font = "20px MyEpistolar";
	plusText.style.color = "white";
	document.body.appendChild(plusText);




	lifeText = document.createElement('div');
	lifeText.style.position = 'absolute';
	lifeText.style.width = 100;
	lifeText.style.height = 100;
	lifeText.innerHTML = "";
	lifeText.style.top = 50 + 'px';
	lifeText.style.right = 80 + 'px';
	lifeText.style.font = "20px MyEpistolar";
	lifeText.style.color = "white";
	document.body.appendChild(lifeText);


	
	highscoresDisplay = document.createElement('div');
	highscoresDisplay.style.position = 'absolute';
	highscoresDisplay.style.width = 100;
	highscoresDisplay.style.height = 100;
	highscoresDisplay.innerHTML = "";
	highscoresDisplay.style.top = 300 + 'px';
	highscoresDisplay.style.right = 1500 + 'px';
	highscoresDisplay.style.font = "20px MyEpistolar";
	highscoresDisplay.style.color = "white";
	document.body.appendChild(highscoresDisplay);

	


	

	document.body.appendChild(renderer.domElement);

}

function animate() {
	if (initGame) {
		if(player.lifes <= 0){ 
			gamerOver();
		}
		obj.position.x = player.localPosition.x;
		obj.position.y = player.localPosition.y;
		obj.position.z = player.localPosition.z;
		pivot.mesh.position.y = player.maxAltitude;
		obj.rotation.y = pivot.mesh.rotation.y;
		camera.position.y = pivot.position.y;
		PlatformPosition();
		EnemyPosition();
		player.update();
		updateScore();
		if (player.maxAltitude > ceilingValue) {
			ceilingValue += ceilingValue;
			powerUpY++;
			n = Math.floor(Math.random() * 3);
			createPowerUp();
		}

		for (let i = 0; i < platforms.length; i++) {

			platforms[i].update();

		}
		for (let i = 0; i < enemies.length; i++) {

		enemies[i].update();

		}
		//platform.update();
		//powerups updates
		for (let i = 0; i < powerUpsWarp.length; i++) {
			powerUpsWarp[i].update();
		}

		for (let i = 0; i < powerUpsHyperJump.length; i++) {
			powerUpsHyperJump[i].update();
		}
		for (let i = 0; i < powerUpsShield.length; i++) {
			powerUpsShield[i].update();
		}
		//Shield toma posicion del player
		if (inShield) {
			Shield.position.set(player.localPosition.x, player.localPosition.y, player.localPosition.z);
		}

		//DEBUG ZONE
		if (keyboard[keyboardValues.KEY_A]) {
			//player.stop();
			player.onTransition = true;
			for (let i = 0; i < platforms.length; i++) {
				platforms[i].onTransition = true;
			}

			rotAux = -1;
			dir--;
			keyboard[keyboardValues.KEY_A] = false;
		}
		if (keyboard[keyboardValues.KEY_D]) {
			//player.stop();
			player.onTransition = true;
			for (let i = 0; i < platforms.length; i++) {
				platforms[i].onTransition = true;
			}

			rotAux = 1;
			dir++;
			keyboard[keyboardValues.KEY_D] = false;
		}
		pivot.mesh.rotation.y += rotAux * (Math.PI / 180);
		player.mesh.rotation.y += rotAux * (Math.PI / 180);
		if (Math.abs(Math.round(pivot.mesh.rotation.y * (180 / Math.PI))) % 360 == 0 ||
			Math.abs(Math.round(pivot.mesh.rotation.y * (180 / Math.PI))) % 360 == 90 ||
			Math.abs(Math.round(pivot.mesh.rotation.y * (180 / Math.PI))) % 360 == 180 ||
			Math.abs(Math.round(pivot.mesh.rotation.y * (180 / Math.PI))) % 360 == 270) {
			rotAux = 0;
			player.onTransition = false;
			for (let i = 0; i < platforms.length; i++) {
				platforms[i].onTransition = false;
			}
			for (let i = 0; i < enemies.length; i++) {
			enemies[i].onTransition = false;
			}
		}

		if (player.localPosition.y < platforms[0].localPosition.y - 100) {
			player.lifes = 0;
			gamerOver();
		}

	}
	lifeText.innerHTML = "  life:  " + player.lifes;
	/*if(lastTime-Date.now() > 5000-(Level*100))
	{
		warning.push(new Platform(new Platform(new THREE.Vector3(Math.floor(Math.random() * widthArea)),player.localPosition.y + 1000,Math.floor(Math.random() * widthArea), new THREE.Vector3(0, 1+(Level*0.2), 0), 1, 50,50,50, warningTexture, 1, 2, 1, Boolean(Math.round(Math.random())), false, true)));
		lastTime = Date.Now();
	}*/
	/*if (enemies.length > 0 && player.maxAltitude - enemies[0].localPosition.y > 800) {
	//	minPlayer += 500;
		scene.remove(enemies[0].mesh);
		enemies.shift();
		newEnemy(1);
	}*/

	/*if (warning.length > 0 && player.maxAltitude - warning[0].localPosition.y > 600) {
	//	minPlayer += 500;
		scene.remove(warning[0].mesh);
		warning.shift();
	}

	for(let i = 0; i < enemies.length;i++)
	{
		console.log(enemies[i].localPosition);
	}
	console.log(enemies.length);*/
	
	// Call the requestAnimationFrame function on the animate function 
	// 	(thus creating an infinite loop)
	requestAnimationFrame(animate);


	//CALL ALL OBJECTS UPDATE METHOD!!!

	// Render everything using the created renderer, scene, and camera
	renderer.render(scene, camera);

}

function collision(object1, object2) {
	if (Math.abs(dir % 2) == 0) {
		return object1.localPosition.x + (object1.width / 2) < object2.localPosition.x - (object2.width / 2) ||
			object1.localPosition.x + (object2.width / 2) > object2.localPosition.x + object2.width + (object1.width / 2) ||

			object1.localPosition.y + object1.height < object2.localPosition.y - (object2.height / 2) ||
			object1.localPosition.y - (object2.height / 2) > object2.localPosition.y + object2.height ? false : true;
	}
	else {
		return object1.localPosition.z + (object1.depth / 2) < object2.localPosition.z - (object2.depth / 2) ||
			object1.localPosition.z + (object2.depth / 2) > object2.localPosition.z + object2.depth + (object1.depth / 2) ||

			object1.localPosition.y + object1.height < object2.localPosition.y - (object2.height / 2) ||
			object1.localPosition.y - (object2.height / 2) > object2.localPosition.y + object2.height ? false : true;
	}
}





function gamerOver() {


	var actual = new Date();
	if (life && ((actual - timeLife) / 1000) > timeDeltaLife) {
		life = false;
	}

	if (!life && player.lifes > 0) {
		timeLife = new Date();
		player.lifes--;
		life = true;

	}
	updateDatosScore();

	lifeText.innerHTML = "  life:  " + player.lifes;

	if (player.lifes <= 0) {
		//document.body.appendChild(gameOmerText);
		document.getElementById("Rest").disabled = false;
		document.getElementById("Rest").style.display = "block";
		updateDatosScore();
		lifeText.innerHTML = "";
		
		waitText.innerHTML = "";
		plusText.innerHTML = " ";
		
		scoreText.style.top = 300 + 'px';
		scoreText.style.left = 800 + 'px';
		scoreText.style.font = "60px MyEpistolar";

		scoreText.innerHTML = "score: " + score;
		initGame = false;
		highscores[highscores.length]=score;
		highscores.sort(function (a,b) {
			return b-a;
		});

		highscoresDisplay.style.display = "initial";
		var listOfHighScores = "highscores<br>";

		for(var i = 0; i < highscores.length; i++){
			listOfHighScores += (i+1).toString() + " -- " + highscores[i].toString() + "<br>";
			if(i >= 10) break;
		}
		highscoresDisplay.innerHTML=listOfHighScores;



		//	init();

	}
	
}

function resetGame() 
{

	document.getElementById("Rest").disabled = true;
	document.getElementById("Rest").style.display = "none";
	bandera = true;
	dir = 0;
	rotAux = 0;
	EndPlaform = 0;
	EndEnemy = 0;
	previousHeight = 0;
	score = 0;
	scorePlus=0;
	Level = 1;
	player.lifes = 3;
	
	inShield = false;
	scene.remove(Shield);
	
	//arreglos de plataformas

	//document.body.removeChild(renderer.domElement);
	//document.body.removeChild(scoreText);
	//document.body.removeChild(waitText);
	//document.body.removeChild(lifeText);

	scoreText.style.top = 50 + 'px';
	scoreText.style.left = 50 + 'px';
	scoreText.style.font = "30px MyEpistolar";

	scoreText.innerHTML = "score:  " + score;
	waitText.innerHTML = "plus: " + scorePlus;
	plusText.innerHTML = "  multiplier:  " + modifier;
	lifeText.innerHTML = "  life:  " + player.lifes;

	//init ();	
	highscoresDisplay.innerHTML="";
	
	
	player.mesh.visible = false;

	/*console.log("posicion x del player" + player.localPosition.x);
	console.log("posicion y del player" + player.localPosition.y);
	console.log("posicion y del player" + player.localPosition.z);*/


	for(var i = 0; i <= platforms.length-1; i++)
	{
		scene.remove(platforms[i].mesh);
	}
	
	for(var i = 0; i <= powerUpsWarp.length-1; i++)
	{
		scene.remove(powerUpsWarp[i].mesh);
	}
	
	for(var i = 0; i <= powerUpsHyperJump.length-1; i++)
	{
		scene.remove(powerUpsHyperJump[i].mesh);
	}
	
	for(var i = 0; i <= powerUpsShield.length-1; i++)
	{
		scene.remove(powerUpsShield[i].mesh);
	}
	
	for(var i = 0; i <= enemies.length-1; i++)
	{
		scene.remove(enemies[i].mesh);
	}
	
	powerUpsWarp = [];
	//arreglos power ups
	powerUpsHyperJump = [];
	powerUpsShield = [];
	
	platforms = [];
	enemies = [];
	/*while(platforms.length > 0)
	{
		platforms.pop();
	}*/
	
	ceilingValue = 3000;
	player.lifes = 3;
	player.localPosition.x = 5;
	player.localPosition.y = 500;
	player.localPosition.z = -200;
	player.forceFactor = 0.1;
	player.jumpForce = 10;
	player.mesh.position.x = player.localPosition.x;
	player.mesh.position.y = player.localPosition.y;
	player.mesh.position.z = player.localPosition.z;
	player.mesh.rotation.y = 0;
	pivot.mesh.rotation.y = 0;
	player.maxAltitude = player.localPosition.y;
	obj.position.x = player.localPosition.x;
	obj.position.y = player.localPosition.y;
	obj.position.z = player.localPosition.z;
	pivot.mesh.position.y = player.maxAltitude;
	obj.rotation.y = pivot.mesh.rotation.y;
	camera.rotation.y = 0;
	camera.position.x = 5;
	camera.position.y = 0;
	camera.position.z = 1200;
	hyperJump = false;
	//platforms.push(new Platform(new THREE.Vector3(player.localPosition.x,player.localPosition.y-100,player.localPosition.z), new THREE.Vector3(0, 0, 0), 1, 200, 30, 50,textureFinal, 1, 2, 1, Boolean(Math.round(Math.random())), false, true));
	initPlaform(20);
	initEnemies(20);
	
	
	initGame = true;
}






init();
animate();

