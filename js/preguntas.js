

function pregunta(){

	console.log("pregunta pueba")
	
	

	initGame=false;

	


    
   preguntatxt = document.createElement('div');
   preguntatxt.style.position = 'absolute';
   preguntatxt.style.width = 100;
   preguntatxt.style.height = 100;
   preguntatxt.innerHTML = "pregunta pep";
   preguntatxt.style.top = 425 + 'px';   
   preguntatxt.style.left = 400 + 'px';
   preguntatxt.style.font = "40px MyEpistolar";
   preguntatxt.style.color = "white";
   document.body.appendChild(preguntatxt);



   var optA;
   optA = document.createElement('div');
   optA.style.position = 'absolute';
   optA.style.width = 100;
   optA.style.height = 100;
   optA.innerHTML = "Respuesta A";
   optA.style.top =550 + 'px';   
   optA.style.left = 150 + 'px';
   optA.style.font = "40px MyEpistolar";
   optA.style.color = "white";
   document.body.appendChild(optA);

   var optB;
   optB = document.createElement('div');
   optB.style.position = 'absolute';
   optB.style.width = 100;
   optB.style.height = 100;
   optB.innerHTML = "Respuesta B";
   optB.style.top = 550 + 'px';   
   optB.style.left = 700 + 'px';
   optB.style.font = "40px MyEpistolar";
   optB.style.color = "white";
   document.body.appendChild(optB);

   var optC;
   optC = document.createElement('div');
   optC.style.position = 'absolute';
   optC.style.width = 100;
   optC.style.height = 100;
   optC.innerHTML = "Respuesta C";
   optC.style.top = 650 + 'px';   
   optC.style.left = 150 + 'px';
   optC.style.font = "40px MyEpistolar";
   optC.style.color = "white";
   document.body.appendChild(optC);

   var optD;
   optD = document.createElement('div');
   optD.style.position = 'absolute';
   optD.style.width = 100;
   optD.style.height = 100;
   optD.innerHTML = "Respuesta D";
   optD.style.top = 650 + 'px';   
   optD.style.left = 700 + 'px';
   optD.style.font = "40px MyEpistolar";
   optD.style.color = "white";
   document.body.appendChild(optD);



	document.getElementById("Preg").disabled = false;
	document.getElementById("Preg").style.display = "block";
		
	
	


    //document.getElementById("btnA").style.position = 'absolute';
  

  //  document.getElementById("Preg").innerHTML ="hola";

     

   
  
    
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



