/*Crea un programa que pida al usuario que elija una opción del siguiente menú:

Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.*/

//Variable con la que pediremos la opción del menú.
const argumentos = process.argv.slice(2);
console.log("Elija una opción: " + "\n"
    + "1) Potencia" + "\n"
    + "2) Raíz" + "\n"
    + "3) Redondeo" + "\n"
    + "4) Trigonometria", argumentos);
let mathOption = argumentos[0];

//Condicional para elegir la opción.
if (mathOption === 1) {
    let argumentos = process.argv.slice(2);
    console.log("Introduzca la base y el exponente:", argumentos);
    let exponent = argumentos[0,1];
    console.log("La potencia de " + argumentos[0] + " elevado a " + argumentos[1] + " es " + Math.pow(argumentos[0], argumentos[1]));
} else if (mathOption === 2) {
    let argumentos = process.argv.slice(2);
    console.log("Introduzca un numero no negativo", argumentos);
    let squareRootNumber = argumentos[0];
    (squareRootNumber > 0) ? console.log("La raíz cuadrada de " + argumentos[0] + " es " + Math.sqrt(squareRootNumber))
    : console.log("Ese número es negativo.");
} else if (mathOption === 3) {
    let argumentos = process.argv.slice(2);
    console.log("Introduzca un número decimal", argumentos);
    let decimal = parseFloat(argumentos[0]);
    console.log("El entero más próximo es " + Math.round(decimal) + ", el redondeo hacia arriba es " + Math.ceil(decimal) + ", y el redondeo hacia abajo es " + Math.floor(decimal));
} else if (mathOption === 4) {
    let argumentos = process.argv.slice(2);
    console.log("Introduzca un ángulo entre 0 y 360 grados", argumentos);
    let angle;
    if (argumentos[0] >= 0 && argumentos[0] <= 360) angle = argumentos[0];
    console.log("El seno de " + angle + " es " + Math.sin(angle) + ", su coseno es " + Math.cos(angle) + ", y su tangente es " + Math.tan(angle))
}



