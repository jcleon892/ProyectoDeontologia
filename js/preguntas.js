var l1p1=b;
var l1p2=d;
var l2p1=d;
var l2p2=c;
var l3p1=a;
var l4p1=d;
var l4p2=d;
var l5p1=a;
var l5p2=d;
var l6p1=d;
var l6p2=b;
var l7p1=d;
var l7p2=d;
var l8p1=a;
var l8p2=d;
var l9p1=c;
var l9p2=d;

function tips(){
  tipscont++;
  document.getElementById("imgTip").src="Images/tips/"+tipscont+".png";

}


function pregunta(){

if(pregunta1 || pregunta2){



  document.getElementById("Tip").disabled = true;
	document.getElementById("Tip").style.display = "none";


	
	

	initGame=false;
 
  document.getElementById("Preg").disabled = false;
  document.getElementById("Preg").style.display = "block";

  var pregu ="l";
  pregu+=Level+"p";

  if(pregunta1){
    pregu+=1;
  }else{
    pregu+=2;
  }

  document.getElementById("imgPre").src="Images/quest/"+pregu+".png";

  	
  waitText.innerHTML = "";
  plusText.innerHTML = " ";
  leveldisplay.innerHTML = "";
  scoreText.innerHTML = "";

  


    
	document.getElementById("btnA").addEventListener('click', function (event)
	{
    console.log("boton A")
    
    validarRespuesta(pregu);
	});

	document.getElementById("btnB").addEventListener('click', function (event)
	{
		console.log("boton B")
	});
	
	document.getElementById("btnC").addEventListener('click', function (event)
	{
		console.log("boton C")
	});
	
	document.getElementById("btnD").addEventListener('click', function (event)
	{
		console.log("boton D")
	});


}



}

function validarRespuesta(valid, a){

}


function respuestaErronea(){

}

function respuestaCorrecta(){

}



