/**
 * * Devuelve la cadena Hola Mundo
 *  @return {String}
 */
function holaMundo(){
    console.info("Entrando en el metodo holaMundo sin parametros");
    let holaMundo = "Hola Mundo";
    console.info("Saliendo del metodo holaMundo con el siguiente resultado %s", holaMundo);
    return holaMundo;
}

module.exports.holaMundo = holaMundo;

function hastaLuego(){
    console.info("Entrando en el metodo ahstaLuego sin parametros");
    let hastaLuego = "Hasta Luego";
    console.info("Saliendo del metodo hastaLuego con el siguiente resultado %s", hastaLuego);
    return hastaLuego;
}

module.exports.hastaLuego = hastaLuego;