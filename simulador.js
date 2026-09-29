//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {

    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    let monto = recuperarEntero("txtMonto");
    let tasa = recuperarEntero("txtTasaInteres");
    let plazoAnios = recuperarEntero("txtPlazo");

    let disponible = calcularDisponible(ingresos, egresos);
    let capacidadPago = calcularCapacidadPago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazoAnios);

    mostrarSpam("lblDisponibleValor", "USD " + disponible.toFixed(2));
    mostrarSpam("lblCapacidadValor", "USD " + capacidadPago.toFixed(2));
    mostrarSpam("lblInteresValor", "USD " + interes.toFixed(2));

}   