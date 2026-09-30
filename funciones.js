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
function calcularCuotaMensual(totalPagar, plazoAnios) {
    let plazoMeses = plazoAnios * 12;
    let cuotaMensual = totalPagar / plazoMeses;
    return cuotaMensual;
}
function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}
function validarNumero(componente, idError, nombre, minimo, maximo, entero) {
    let valor = componente.value.trim();
    let mensaje = "";

    if (valor === "") {
        mensaje = "El campo " + nombre + " es obligatorio.";
    } else if (isNaN(valor)) {
        mensaje = "Solo se permiten números.";
    } else {
        let numero = Number(valor);

        if (entero && !Number.isInteger(numero)) {
            mensaje = "El campo " + nombre + " debe ser un número entero.";
        } else if (numero < minimo) {
            mensaje = "El valor mínimo permitido es " + minimo + ".";
        } else if (numero > maximo) {
            mensaje = "El valor máximo permitido es " + maximo + ".";
        }
    }

    mostrarSpam(idError, mensaje);

    return mensaje === "";
}

function validarIngresos(componente) {
    return validarNumero(componente, "errorIngresos", "ingresos", 0.01, 100000, false);
}

function validarEgresos(componente) {
    return validarNumero(componente, "errorEgresos", "egresos", 0, 100000, false);
}

function validarMonto(componente) {
    return validarNumero(componente, "errorMonto", "monto", 100, 50000, true);
}

function validarPlazo(componente) {
    return validarNumero(componente, "errorPlazo", "plazo", 1, 10, true);
}

function validarTasaInteres(componente) {
    return validarNumero(componente, "errorTasaInteres", "tasa de interés", 1, 30, true);
}