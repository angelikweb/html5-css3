
function inicio () {
    // codigo para los tabs
    var listaDeBotonesTabs = document.querySelectorAll('.tab-button');
    
    // asigno los eventos
    for (var i = 0; i < listaDeBotonesTabs.length; i++) {
        listaDeBotonesTabs[i].addEventListener('click', buttonTabClick);
    }
    
    // el codigo para el acordeon
    var listaDeBotones = document.querySelectorAll('.accordion-tab-button');
    
    // asigno los eventos
    for (var i = 0; i < listaDeBotones.length; i++) {
        listaDeBotones[i].addEventListener('click', buttonAccordionClick);
    }
}

function buttonTabClick () {
    var direccion = this.href,
        indice = direccion.split('#')[1].replace('tab-', ''),
        contenedorTabs = document.querySelector('.tabs'),
        contenidoTabs = document.querySelector('.tabs-content'),
        listaTabs = document.querySelectorAll('.tabs-content .tab');
    
    console.log('he pinchado el tab ' + indice, 'tengo que mostrar', listaTabs[indice - 1]);
    
    contenedorTabs.querySelector('.activo').className = contenedorTabs.querySelector('.activo').className.replace('activo', '');
    this.parentNode.className = this.parentNode.className + ' activo';
    
    contenidoTabs.querySelector('.activo').className = contenidoTabs.querySelector('.activo').className.replace('activo', '');
    listaTabs[indice - 1].className = listaTabs[indice - 1].className + ' activo';
}

function buttonAccordionClick () {
    var acordeon = document.querySelector('.accordion-tabs');
    
    acordeon.querySelector('.activo').className = acordeon.querySelector('.activo').className.replace('activo', '');
    
    this.parentNode.className = this.parentNode.className + ' activo';
}

window.addEventListener('DOMContentLoaded', inicio);
