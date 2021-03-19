//Activador de JQuery - funcion principal de JQueryady
$(document).ready(function(){
        /* //Activacion de transicion del menu principal */
        $('aside#menu-hamburguersa nav a, header article nav a').bind('click',function(event){
           var $anchor = $(this);
           $('html,body').stop().animate({
               scrollTop:$($anchor.attr('href')).offset().top
           }, 1000, 'easeOutExpo');
           event.preventDefault();
        });
});    