document.getElementById('boton').addEventListener('click', function() {
    var imagen = document.getElementById('basket');
    imagen.classList.add('vibrando');
  
    setTimeout(function() {
        imagen.classList.remove('vibrando');
    }, 500);
});