window.onload = function() 
{
 
  Init();
 // ButtonsAction();
};

function Init()
{
	///panel Creditos
  
   
 

  /*var nodes = document.getElementById("Conf").getElementsByTagName('*');
  for(var i = 0; i < nodes.length; i++)
  {
     nodes[i].disabled = true;
  }*/
}


	
	
	



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
	


}
