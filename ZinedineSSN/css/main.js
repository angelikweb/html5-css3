

function filtrarFotos () {
    
    var miFiltro = document.getElementsByName('filtro'),
    miSeleccion = '',
    misDiapositivas = document.querySelectorAll('.galeria li');
    
    
    if (miFiltro[0].checked == true){
        console.log('filtrando fotos', miFiltro[0].value);
    } else if (miFiltro[1].checked == true){
        console.log('filtrando fotos' , miFiltro[1].value);
    } else if (miFiltro[2].checked == true){
        console.log('filtrando fotos' , miFiltro[2].value);
    }
}


console.log('filtrando fotos', miSeleccion);

if (miSeleccion == 'coches'){
} else if (miSeleccion == 'motos')

document.getElementById('btn-filtro').addEventListener('click, filtrarFotos')