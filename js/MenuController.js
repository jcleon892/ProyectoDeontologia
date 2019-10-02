window.onload = function() 
{
  document.getElementById("Menu");
  document.getElementById("Conf");
  document.getElementById("Inst")
  document.getElementById("Rest");

  Init();
  ButtonsAction();
};

function Init()
{
	///panel Creditos
   document.getElementById("Conf").disabled = true;
   document.getElementById("Conf").style.display = "none";
   //////panel Instrucciones
   document.getElementById("Inst").disabled = true;
   document.getElementById("Inst").style.display = "none";
      ///////Panel de reset
   document.getElementById("Rest").disabled = true;
   document.getElementById("Rest").style.display = "none";
   
   
   
   document.getElementById("DIE").style.disabled = true;////por alguna razon que no comprendo el primer botton del container tiene los ejes negativos, asi que lo mato
   document.getElementById("DIE").style.display = "none";


  /*var nodes = document.getElementById("Conf").getElementsByTagName('*');
  for(var i = 0; i < nodes.length; i++)
  {
     nodes[i].disabled = true;
  }*/
}

function ButtonsAction()
{
	var pause = true;

	document.getElementById("Play").addEventListener('click', function (event)
	{
	clickAudio.play();
	menuAudio.pause();
	menuAudio.currentTime = 0;
	gameplayAudio.play();
	document.getElementById("Menu").disabled = true;
	document.getElementById("Menu").style.display = "none";
		initGame = true;
		/*
		for(let i = 0; i < powerUps1.length;i++)
		{
			powerUps1[i].onTransition = false;
		}*/
	});
	
	document.getElementById("Credits").addEventListener('click', function (event){
	clickAudio.play();	
	event.preventDefault();

	document.getElementById("Conf").disabled = false;
	/*var nodes = document.getElementById("Conf").getElementsByTagName('*');

	 for(var i = 0; i < nodes.length; i++)
	{
     nodes[i].disabled = false;
	}*/
	document.getElementById("Conf").style.display = "block";
	});	
	
	
	document.getElementById("Instrucctions").addEventListener('click', function (event){
	clickAudio.play();	
	event.preventDefault();

	document.getElementById("Inst").disabled = false;
	document.getElementById("Inst").style.display = "block";
	});	
	
	
	document.getElementById("BackCredits").addEventListener('click', function (event)
	{
	clickAudio.play();	
	document.getElementById("Conf").disabled = true;
	document.getElementById("Conf").style.display = "none";
		
	});

	document.getElementById("BackInstructions").addEventListener('click', function (event)
	{
	clickAudio.play();	
	document.getElementById("Inst").disabled = true;
	document.getElementById("Inst").style.display = "none";
	});
	
	document.getElementById("TryAgain").addEventListener('click', function (event)
	{
	clickAudio.play();
	resetGame();
	});
	
	document.getElementById("Music").addEventListener('click', function (event)
	{
		if(pause)
		{
			menuAudio.pause();
			gameplayAudio.muted = true;
			pause = false;
			document.getElementById("Music").style.backgroundImage = "url(Images/botonmusicaoff.png)";
		}else
		{
			menuAudio.play();
			gameplayAudio.muted = false;
			pause = true;
			document.getElementById("Music").style.backgroundImage = "url(Images/musicaOn.png)";

		}
	});
	

}
