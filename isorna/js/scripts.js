// JavaScript Document
function validacion(){
	if (document.getElementById('texto').value == '') {
		alert('Por favor rellena el texto');
		return false;
	} else {
		document.getElementById('formulario').style.marginTop = Number(document.getElementById('texto').value) + 'px';
		return false;
	}
}


function cambiaEnlaces(color){
	var enlaces = document.getElementsByTagName('A');
	var indice = 0;
	
	for (indice = 0; indice < enlaces.length; indice++) {
		enlaces[indice].style.backgroundColor = color;
	}
}