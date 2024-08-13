let evento = document.querySelector('div');

evento.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
let boton = document.querySelector("button");

boton.addEventListener('click', function(evento) {
    evento.stopPropagation(); 
});