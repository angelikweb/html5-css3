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

var menuDesplegable = document.getElementById('menuDesplegable');

function desplegarMenu (event) {
	event.preventDefault();
	
	if (event.srcElement.className == "conSubMenu") {
		if (event.srcElement.parentNode.children[1].className == "visible") {
			event.srcElement.parentNode.children[1].className = "";
		} else {
			event.srcElement.parentNode.children[1].className = "visible";
		}
	}
}

menuDesplegable.addEventListener('click', desplegarMenu);

var menuDesplegable = document.getElementById('menuDesplegable');

function desplegarMenu (event) {
	event.preventDefault();
	
	if (event.srcElement.className == "conSubMenu") {
		if (event.srcElement.parentNode.children[1].className == "visible") {
			event.srcElement.parentNode.children[1].className = "";
		} else {
			event.srcElement.parentNode.children[1].className = "visible";
		}
	}
}

menuDesplegable.addEventListener('click', desplegarMenu);
