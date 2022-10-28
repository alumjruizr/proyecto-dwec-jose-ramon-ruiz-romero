/*Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.*/

//Pedimos el radio
const argumentos = process.argv.slice(2);
console.log("Introduzca el radio", argumentos);
let radius = argumentos[0];

//Mostramos por consola las llamadas a las funciones
console.log(radius + "/" + calculateDiameter(radius) + "/" + calculatePerimeter(radius) + "/" + calculateCircleArea(radius) + "/" + calculateSphereArea(radius) + "/" + calculateSphereVolume(radius))

//Función para calcular el radio
function calculateDiameter(radius) {
    return (radius * 2) + "cm";
}

//Función para calcular el perimetro
function calculatePerimeter(radius) {
    return (Math.PI * parseInt(calculateDiameter(radius))) + "cm";
}

//Función para caluclar el area del circulo
function calculateCircleArea(radius) {
    return (Math.PI * Math.pow(radius, 2)) + "cm2";
}

//Función para calcular el área de la esfera
function calculateSphereArea(radius) {
    return (parseInt(calculateCircleArea(radius)) * 4) + "cm2";
}

//Funcion para calcular el volumen de una esfera
function calculateSphereVolume(radius) {
    return ((4 / 3) * Math.PI * Math.pow(radius, 3)) + "cm3";
}