var rotacion = 0;

function inicio () {
    var botonHaciaAdelante = document.getElementById('botonHaciaAdelante'),
        botonHaciaAtras = document.getElementById('botonHaciaAtras');
    
    botonHaciaAdelante.addEventListener( 'click', haciaAdelante, false);
    botonHaciaAtras.addEventListener( 'click', haciaAtras, false);
}

function haciaAdelante () {
    var carousel = document.getElementById('carousel');
    
    rotacion = rotacion + 60;
    
    carousel.style['transform'] = 'rotateY(' + rotacion  + 'deg)';
}


function haciaAtras () {
    var carousel = document.getElementById('carousel');
    
    rotacion = rotacion - 60;
    
    carousel.style['transform'] = 'rotateY(' + rotacion  + 'deg)';
}

window.addEventListener( 'DOMContentLoaded', inicio, false);