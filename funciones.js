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
function recuperarEntero(id) {
    let valorTexto = recuperarTexto(id);
    let valorEntero = parseInt(valorTexto);
    return valorEntero;
}
function mostrarSpam(id, valor) {
    let componente = document.getElementById(id);
    componente.textContent = valor;
}
function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible * 0.50;

    return capacidadPago;
}
function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto * (tasa / 100);
    return interes;
}
function calcularTotalPagar(monto, interes) {
    let impuestoSolca = 100;
    let totalPagar = monto + interes + impuestoSolca;
    return totalPagar;
}