var miListaDeFotos = [
    'img/paisajes/madrid.jpg',
    'img/retratos/alvaro.jpg'
];


window.addEventListener('scroll', function cuandoElUsuarioHagaScroll (evento) {
    var iScrollY = window.scrollY,
        iAlturaBody = document.body.offsetHeight,
        iAlturaVentana = window.innerHeight,
        iTopCalculado = document.getElementById('marcadorDelScroll'). getBoundingClientRect().top;
        
    if (iTopCalculado < iAlturaVentana) {
        console.log('el usuario movio el scroll');
        simulaLeerNoticias();
    }
    
});

function simulaLeerNoticias () {
    var nuevaNoticia = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
        tituloNuevaNoticia = '<h2>Nueva noticia</h2>',
        textoActual = document.getElementById('lectorDeNoticias').innerHTML;
    
    document.getElementById('lectorDeNoticias').innerHTML = textoActual + tituloNuevaNoticia + '<p>' + nuevaNoticia + '</p>';
}

// ejemplo: simularLeerMenus(['home', 'reebook', 'adidas'])

function simularLeerMenus (miListaDeMenus) {
    var nuevoMenu;
    
    for (opcionMenu in miListaDeMenus) {
        nuevoMenu = document.createElement('li');
        nuevoMenu.innerHTML = miListaDeMenus[opcionMenu];
        document.getElementById('menuPrincipal').appendChild(nuevoMenu);
    }
}


var miIndice = 0;

function rotarCarrusel () {
    var misDiapositivas = document.getElementById('miCarrusel').getElementsByTagName('li'),
        numeroDeDiapositivas = misDiapositivas.length;
    
    misDiapositivas[miIndice].className = '';
    
    miIndice += 1;
    
    if (miIndice >= numeroDeDiapositivas) {
        miIndice = 0;
    }
    
    if (miIndice == 4) {
        misDiapositivas[0].className = 'activo';
    } else if (miIndice == 5) {
        misDiapositivas[1].className = 'activo';
    } else {
        misDiapositivas[miIndice + 2].className = 'activo';
    }
}

window.setInterval(rotarCarrusel, 1000);


/*
var miFecha = new Date(),
    miNombre = 'Alvaro',
    miApellido = 'Isorna',
    miEdad = 48,
    miNombreCompleto = miNombre + ' ' + miApellido;


var miOtraFuncion = function () {
    var elNodoHTML = document.getElementsByTagName('html')[0];
    
  // esta es mi otra funcion
  console.info('mi otra funcion');
  
  if (miEdad <= 40) {
      console.log('yupii');
  } else {
      console.error('mala suerte');
  }
  
  if (elNodoHTML.className.indexOf('rgba') >= 0) {
      console.info('este navegador soporta rgba');
  }
};

//miFuncion();
//miOtraFuncion();

//    Aqui mi libreria de funciones


function miFuncion () {
    console.info(miNombreCompleto);
    console.log(miNombre, miApellido, miEdad);
    console.error('Hubo un error', miEdad);
}

function comprobarEdad () {
    var campoEdad = document.getElementById('edad'),
        mensajeError = document.getElementById('mensajeError');
    
    if (Number(campoEdad.value) < 18) {
        mensajeError.className = '';
    } else {
        mensajeError.className = 'hidden';
    }
}

document.getElementById('edad').addEventListener('change', comprobarEdad);

document.getElementById('miBoton').addEventListener('click', miFuncion);
*/