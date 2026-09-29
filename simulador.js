//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
   
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
   
    let disponible = calcularDisponible(ingresos, egresos);
    let capacidadPago = calcularCapacidadPago(disponible);

    mostrarSpam("lblDisponibleValor", "USD " + disponible.toFixed(2));
    mostrarSpam("lblCapacidadValor", "USD " + capacidadPago.toFixed(2));

}   