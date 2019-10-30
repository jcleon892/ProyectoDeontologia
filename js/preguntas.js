function tips(){
  tipscont++;
  document.getElementById("imgTip").src="Images/tips/"+tipscont+".png";

}


function pregunta(){

	console.log("pregunta pueba")
	
	/*

	initGame=false;
 
  document.getElementById("Preg").disabled = false;
  document.getElementById("Preg").style.display = "block";
  document.getElementById("imgPre").src="Images/quest/1.1.jpeg";
*/

    
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


	



}



