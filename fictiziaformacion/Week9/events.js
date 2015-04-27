/* ejecucion */

// javascript: window.addEventListener('DOMContentLoaded', inicio);
// jquery:
$(inicio);

/****************************/

function inicio () {
    console.log('El DOM ya se ha cargado');
    
    var listaBotones = $('button');
    
    console.log(listaBotones);
    
    /*for (var indice = 0; indice < listaBotones.length; indice++) {
        console.log(listaBotones[indice]);
    }*/
    
    listaBotones.each(iterarBotones);
    
    var boton1 = $('.evento1'),
        boton2 = $('.evento2'),
        boton3 = $('.evento3'),
        boton4 = $('.evento4'),
        texto = $('textarea');
        
    //boton1.addEventListener('click', clickBoton1);
    listaBotones.on('click', clickBoton);
    //boton2.addEventListener('mouseover', mouseOverBoton2);
    listaBotones.on('mouseover', mouseOverBoton);
    
    //texto.addEventListener('keyup', keypressTexto);
    texto.on('keyup', keypressTexto);
}

function iterarBotones (indice, elemento) {
    console.log(indice, elemento);// this == elemento
}

function clickBoton (evento) {
    console.log('click del boton', evento.currentTarget, this);
}

function mouseOverBoton (evento) {
    console.log('mouseover del boton', evento.currentTarget, this);
}

function keypressTexto (evento) {
    var indicador = $('.caracteres em'),
        parrafo = $('.caracteres'),
        textoEscrito = this.value,
        longitudTexto = 250 - textoEscrito.length;
    
    //console.log('keyup del texto', evento);
    
    if (longitudTexto > 0) {
        //indicador.innerHTML = longitudTexto;
        indicador.html(longitudTexto);
        //parrafo.style.color = 'black';
        parrafo.css('color', 'black');
    } else {
        //indicador.innerHTML = 0;
        indicador.html(0);
        //parrafo.style.color = 'red';
        parrafo.css('color', 'red');
        this.value = this.value.substring(0, 249);
    }
}