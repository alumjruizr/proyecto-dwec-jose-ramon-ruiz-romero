/*Crea un programa que pida al usuario su nombre y apellidos y muestre:

El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.*/

//Pedimos la cadena
const argumentos = process.argv.slice(2);
console.log("Introduzca un nombre y dos apellidos", argumentos);
let userTotalName = argumentos[0];

console.log(totalNameLetters(userTotalName) + "\n"
            + lowerCaseName(userTotalName) + "\n"
            + upperCaseName(userTotalName) + "\n"
            + nameDivisor(userTotalName) + "\n"
            + firstUsernameProposal(userTotalName) + "\n"
            + secondUsernameProposal(userTotalName))

//Función para sumar el tamaño del nombre
function totalNameLetters(userTotalName) {
    do {userTotalName = userTotalName.replace(" ", "") } while (userTotalName.search(" ") !== -1);
    return userTotalName.length;
}

//Función para mostrar la cadena en minúsculas
function lowerCaseName(userTotalName) {
    return userTotalName.toString().toLowerCase();
}

//Función para mostrar la cadena en mayúsculas
function upperCaseName(userTotalName) {
    return userTotalName.toString().toUpperCase();
}

//Función que divide nombre y apellidos y los muestre en tres líneas
function nameDivisor() {
    let result = userTotalName.split(" ");
    return "Nombre: " + result[0] + "\n" + "Apellido 1: " + result[1] + "\n" + "Apellido 2: " + result[2];
}

//Función que de una propuesta de nombre de usuario 1
function firstUsernameProposal() {
    let result = userTotalName.split(" ");
    return (result[0].charAt(0) + result[1] + result[2].charAt(0)).toLowerCase();
}

//Función que da una propuesta de nombre de usuario 2
function secondUsernameProposal() {
    let result = userTotalName.split(" ");
    return (result[0].substring(0,3) + result[1].substring(0,3) + result[2].substring(0,3)).toLowerCase();
}