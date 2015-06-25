window.onload = function() {
 
    console.log( "window.onload" );
 
};

$(document).ready(function() {
 
    console.log( "document ready" );
    $('.galeria-slick').slick();
});
