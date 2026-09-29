//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingreso, egreso) {
    let disponible = ingreso - egreso;
    if (ingreso < egreso) {
        disponible = 0;
    }
    return disponible;
}
function recuperarTexto(id) {

    let componente = document.getElementById(id);
    return componente.value;
}
function recuperarFloat(id) {

    let valorTexto = recuperarTexto(id);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
function mostrarSpam(id, valor) {
    let componente = document.getElementById(id);
    componente.textContent = valor;
}
