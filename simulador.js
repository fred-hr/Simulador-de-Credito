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
    let totalPagar = calcularTotalPagar(monto, interes);
    let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
 

    mostrarSpam("lblDisponibleValor", "USD " + disponible.toFixed(2));
    mostrarSpam("lblCapacidadValor", "USD " + capacidadPago.toFixed(2));
    mostrarSpam("lblInteresValor", "USD " + interes.toFixed(2));
    mostrarSpam("lblTotalValor", "USD " + totalPagar.toFixed(2));
    mostrarSpam("lblCuotaValor", "USD " + cuotaMensual.toFixed(2));

    let creditoAprobado = aprobarCredito(capacidadPago, cuotaMensual);
    if (creditoAprobado) {
        mostrarSpam("lblEstadoCredito", "APROBADO");
    } else {
        mostrarSpam("lblEstadoCredito", "RECHAZADO");
    }

}   