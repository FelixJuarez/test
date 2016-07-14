 
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   alert("Hola");
   document.getElementById("boton2").addEventListener("click", StartButtons, false);
	
}

function StartButtons(){
$("#cajadeprueba").slideToggle();
}


