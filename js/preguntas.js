

function tips() {
  tipscont++;
  document.getElementById("imgTip").src = "Images/tips/" + tipscont + ".png";

}

function validarRespuesta(valid, opc) {

  console.log(valid);

}


function pregunta() {

  if (pregunta1 || pregunta2) {



    document.getElementById("Tip").disabled = true;
    document.getElementById("Tip").style.display = "none";

    waitText.innerHTML = "";
    plusText.innerHTML = " ";
    leveldisplay.innerHTML = "";
    scoreText.innerHTML = "";



    initGame = false;

    document.getElementById("Preg").disabled = false;
    document.getElementById("Preg").style.display = "block";

    var pregu = "l";
    pregu += Level + "p";

    if (pregunta1) {
      pregu += 1;
    } else {
      pregu += 2;
    }

    document.getElementById("imgPre").src = "Images/quest/" + pregu + ".png";
    var opc;
    var resp;
    if (pregu == "l1p1") {
      opc = 1;
      resp = "b";
    }
    if (pregu == "l1p2") {
      opc = 2;
      resp = "d";
    }
    if (pregu == "l2p1") {
      opc = 1;
      resp = "d";
    }
    if (pregu == "l2p2") {
      opc = 2;
      resp = "c";
    }
    if (pregu == "l3p1") {
      opc = 1;
      resp = "a";
    }
    if (pregu == "l4p1") {
      opc = 1;
      resp = "d";
    }
    if (pregu == "l4p2") {
      opc = 2;
      resp = "d";
    }
    if (pregu == "l5p1") {
      opc = 1;
      resp = "a";
    }
    if (pregu == "l5p2") {
      opc = 2;
      resp = "d";
    }
    if (pregu == "l6p1") {
      opc = 1;
      resp = "d";
    }
    if (pregu == "l6p2") {
      opc = 2;
      resp = "b";
    }
    if (pregu == "l7p1") {
      opc = 1;
      resp = "d";
    }
    if (pregu == "l7p2") {
      opc = 2;
      resp = "d";
    }
    if (pregu == "l8p1") {
      opc = 1;
      resp = "a";
    }
    if (pregu == "l8p2") {
      opc = 2;
      resp = "c";
    }
    if (pregu == "l9p1") {
      opc = 1;
      resp = "c";
    }
    if (pregu == "l9p2") {
      opc = 2;
      resp = "d";
    }




    document.getElementById("btnA").addEventListener('click', function (event) {

      validarRespuesta(opc, resp, "a");

    });

    document.getElementById("btnB").addEventListener('click', function (event) {

      validarRespuesta(opc, resp, "b");
    });

    document.getElementById("btnC").addEventListener('click', function (event) {

      validarRespuesta(opc, resp, "c");

    });

    document.getElementById("btnD").addEventListener('click', function (event) {

      validarRespuesta(opc, resp, "d");
    });


  }



}

function validarRespuesta(opc, resp, letra) {


  if (resp == letra) {
    if (opc == 1) {
      pregunta1 = false;
    } else {
      pregunta2 = false;
    }

    respuestaCorrecta();


  } else {
    respuestaErronea();
  }


}



function respuestaErronea() {
 
  player.lifes--;
  lifeText.innerHTML = "  life:  " + player.lifes;
  
  document.getElementById("Preg").disabled = true;
  document.getElementById("Preg").style.display = "none";
  document.getElementById("Tip").disabled = false;
  document.getElementById("Tip").style.display = "block";
  initGame = true;

}

function respuestaCorrecta() {

  document.getElementById("Preg").disabled = true;
  document.getElementById("Preg").style.display = "none";
  document.getElementById("Tip").disabled = false;
  document.getElementById("Tip").style.display = "block";
  initGame = true;

}



