
function inicio () {
    var listaDeBotones = document.querySelectorAll('.tab-button');
    
    // asigno los eventos
    for (var i = 0; i < listaDeBotones.length; i++) {
        listaDeBotones[i].addEventListener('click', buttonClick);
    }
}

function buttonClick () {
    document.querySelector('.activo').className = document.querySelector('.activo').className.replace('activo', '');
    
    this.parentNode.className = this.parentNode.className + ' activo';
}

window.addEventListener('DOMContentLoaded', inicio);
