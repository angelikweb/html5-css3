

function filtrarFotos () {
    
    var miFiltro = document.getElementsByName('radios'),
    miSeleccion = '';
    
    if (miFiltro[0].checked == true) {
        miSeleccion = miFiltro[0].value;
    } else if (miFiltro[1].checked == true) {
        miSeleccion = miFiltro[1].value;
    } else if (miFiltro[2].checked == true) {
        miSeleccion = miFiltro[2].value;
    }
    
    console.log('filtrando fotos', miSeleccion);
    
    document.querySelector('.galeria-imagenes').className = 'galeria mostrar-' + miSeleccion;
}


document.getElementById('btn-filtro').addEventListener('click', filtrarFotos)