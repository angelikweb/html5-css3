
function inicio () {
    console.log('El DOM ya se ha cargado');
    
    var listaBotones = document.getElementsByTagName('button');
    
    console.log(listaBotones);
    
    for (var indice = 0; indice < listaBotones.length; indice++) {
        console.log(listaBotones[indice]);
    }
    
    var boton1 = document.querySelector('.evento1'),
        boton2 = document.querySelector('.evento2'),
        boton3 = document.querySelector('.evento3'),
        boton4 = document.querySelector('.evento4'),
        texto = document.querySelector('textarea');
        
    boton1.addEventListener('click', clickBoton1);
    boton2.addEventListener('mouseover', mouseOverBoton2);
    
    texto.addEventListener('keyup', keypressTexto);
}

function clickBoton1 (evento) {
    console.log('click del boton 1', evento);
}

function mouseOverBoton2 (evento) {
    console.log('mouseover del boton 2', evento);
}

function keypressTexto (evento) {
    var indicador = document.querySelector('.caracteres em'),
        parrafo = document.querySelector('.caracteres'),
        textoEscrito = this.value,
        longitudTexto = 250 - textoEscrito.length;
    
    //console.log('keyup del texto', evento);
    
    if (longitudTexto > 0) {
        indicador.innerHTML = longitudTexto;
        parrafo.style.color = 'black';
    } else {
        indicador.innerHTML = 0;
        parrafo.style.color = 'red';
        this.value = this.value.substring(0, 249);
    }
}

window.addEventListener('DOMContentLoaded', inicio);