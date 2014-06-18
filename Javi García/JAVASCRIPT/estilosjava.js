// JavaScript Document
var formulario = document.getElementById("formulario"); 
var campoNombre = document.getElementById("nombreField"), campoMail = document.getElementById("emailField"), campoTexto = document.getElementById("texto");

function validarFormulario (event) {
	event.preventDefault();
	
	var estaOk = true;
	
	if (campoNombre.value == "") {
		campoNombre.className = "error1";
		estaOk = false;
	}
	
	if (campoMail.value =="") {
		campoMail.className = "error1";
		estaOk = false;
	}
	
	if (campoTexto.value == "") {
		campoTexto.className = "error1";
		estaOk = false;
	}
	
	if (estaOk == true) {
		formulario.submit();
	}
	
};

// Controlar el evento submit del formulario
formulario.addEventListener("submit", validarFormulario);

//function quitarError (event)

campoNombre.addEventListener("keyup", quitarError);
campoTexto.addEventListener("keyup", quitarError);
campoMail.addEventListener("keyup", quitarError);