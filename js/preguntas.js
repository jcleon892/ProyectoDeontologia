function pregunta(){

	console.log("pregunta pueba")
	
	pregunta.innerHTML = "hola mundo";


	initGame=false;
/*
	preguntatxt = document.createElement('div');
	preguntatxt.style.position = 'absolute';
	preguntatxt.style.width = 500;
	preguntatxt.style.height = 500;
	preguntatxt.style.backgroundImage= "url(Images/gamePregunta.png)"
	preguntatxt.style.display="block";

	
	document.body.appendChild(preguntatxt);
	lifeText = document.createElement('div');
	lifeText.style.position = 'absolute';
	lifeText.style.width = 100;
	lifeText.style.height = 100;
	lifeText.innerHTML = "";
	lifeText.style.top = 50 + 'px';
	lifeText.style.right = 80 + 'px';
	lifeText.style.font = "20px MyEpistolar";
	lifeText.style.color = "white";

	*/	
	document.getElementById("Preg").disabled = false;
	document.getElementById("Preg").style.display = "block";
		
	
	document.getElementById("Preg").style.backgroundImage = "url(Images/musicaOn.png)";


	//document.getElementById("btnA").style.position = 'absolute';		
	document.getElementById("btnA").style.font = "20px MyEpistolar";
	document.getElementById("btnA").style.color = "white";
	document.getElementById("btnB").style.font = "20px MyEpistolar";
	document.getElementById("btnB").style.color = "white";
	document.getElementById("btnC").style.font = "20px MyEpistolar";
	document.getElementById("btnC").style.color = "white";
	document.getElementById("btnD").style.font = "20px MyEpistolar";
	document.getElementById("btnD").style.color = "white";


	document.getElementById("btnA").innerHTML = "Proyecto educativo de profesión" ;
	document.getElementById("btnB").innerHTML = "" ;
	document.getElementById("btnC").innerHTML = "" ;
	document.getElementById("btnD").innerHTML = "" ;
	document.getElementById("btnA").addEventListener('click', function (event)
	{
		console.log("boton A")
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
	//document.body.appendChild(pregunta);

	



}



class PreguntaEvento {

    constructor(pregunta,respuestaCorreta, respuestafalsa1,respuestafalsa2,respuestafalsa3){
        this.pregunta = pregunta;
        this.respuestaCorreta=respuestaCorreta;
        this.respuestafalsa1=respuestafalsa1;
        this.respuestafalsa2=respuestafalsa2;
        this.respuestafalsa3=respuestafalsa3;
    }
}