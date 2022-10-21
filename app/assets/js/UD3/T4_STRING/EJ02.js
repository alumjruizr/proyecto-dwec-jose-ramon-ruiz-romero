/*Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.*/

//Pedimos la cadena
const argumentos = process.argv.slice(2);
console.log("Introduzca la contraseña", argumentos);
let userPassword = argumentos[0];

//Llamamos a la función
checkPassword(userPassword);

//Función que controla la validacion de seguridad
function checkPassword(userPassword) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%&])([A-Za-z\d-_@#$%&]|[^ ]){8,16}$/;
        if (regex.test(userPassword)) {
            console.log("Contraseña segura.")
        } else console.log("Contraseña no segura.")
}