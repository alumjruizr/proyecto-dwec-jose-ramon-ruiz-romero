/*Crea un programa que pida al usuario un número entero por pantalla y muestre:

Su valor exponencial.
El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.*/

//Pedimos el número decimal
const argumentos = process.argv.slice(2);
console.log("Introduzca un número entero", argumentos);
let userNumber = argumentos[0];

//Mostramos por consola las llamadas a las funciones
console.log(exponentialNumber(userNumber) + "/" + fourDecimalsNumber(userNumber) + "/" + toBinary(userNumber) + "/" + toOctal(userNumber) + "/" + toHexadecimal(userNumber))

//Funcion para sacar el exponencial
function exponentialNumber(decimal) {
    return Number.parseFloat(decimal).toExponential(1);
}

//Función para establecer los cuatro decimales
function fourDecimalsNumber(decimal) {
    return Number.parseFloat(decimal).toFixed(4);
}

//Función para transformarlo en binario
function toBinary(decimal) {
    return Number.parseFloat(decimal).toString(2);
}

//Función para transformarlo en octal
function toOctal(decimal) {
    return Number.parseFloat(decimal).toString(8);
}

//Función para transformarlo en hexadecimal
function toHexadecimal(decimal) {
    return Number.parseFloat(decimal).toString(16);
}