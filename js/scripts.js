function ValidarNumeros(e) {
    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toLowerCase(),
        letras = "0123456789"
    if (letras.indexOf(tecla) == -1 ) {
        return false;
    }
}