// JavaScript Document

/*
	Elementos del lenguage JavaScript
*/

// 1. Objetos ya creados del lenguaje
console.log(document);
// 2. Variables
var cadenaDeTexto = 'me llamo pepito';
var numero = 123456;
var coleccion = ['azul', 'rojo', 'verde', 345, 'marron'];// empiezan por cero y van en orden
console.log(cadenaDeTexto, numero, coleccion);
var objetoGato = {
	raza: 'siames',
	edad: 3,
	peso: '15kg'
};
console.log(objetoGato);
console.log(objetoGato.raza);

// 3. Funciones
function miFuncionGuapa (parametro1, parametro2) {
	console.log(parametro1, parametro2);
	console.log(arguments);
};

miFuncionGuapa('hola', 36, 'adios');

var miOtraFuncion = function (parametro1) {
	console.log(parametro1);
};

var objetoQueSaluda = {
	holaQueTal: miOtraFuncion
};

objetoQueSaluda.holaQueTal('Pepe');

// 4. Estructuras de control

function comprobarPregunta (valorDeRespuesta, valorDeRespuestaTexto) {
	if (valorDeRespuesta > 10) {
		console.log('Es mayor que 10');
	} else if (valorDeRespuesta == 10 ) {
		console.log('Es igual que 10');
	} else {
		console.log('Es menor que 10');
	}

	if (valorDeRespuestaTexto == null) {
		console.log('No has enviado texto.');
	} else {
		console.log('Tu valor de respuesta es: ' + valorDeRespuestaTexto);
	}
};

function bucles (inicio, fin) {
	var numero2 = 1000;
	numero2++;// suma 1
	numero2--;// resta 1
	var inicio2 = inicio;// copia el valor antes de que se modifique
	
	for (inicio; inicio < fin; inicio++) {
		console.log('inicio: ' + inicio, 'fin: ' + fin);
	}
	
	while (inicio2 < fin) {
		console.log('inicio2: ' + inicio2, 'fin: ' + fin);
		inicio2++;
		inicio2++;
	}
};



/*
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

function probarWhile(){
	var indice2 = 10;
	
	while (indice2 > 0) {
		console.log(indice2);
		indice2 = indice2 - 1;
	};
	
	console.log('He terminado');
}*/