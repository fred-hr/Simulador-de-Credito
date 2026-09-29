//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingreso, egreso) {
    let disponible = ingreso - egreso;
    if (ingreso < egreso) {
        disponible = 0;
    }
    return disponible;
}
 