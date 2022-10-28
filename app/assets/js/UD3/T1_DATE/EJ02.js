/*Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año)
y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.
Recuerda que los meses empiezan desde el número 0.*/

const argumentos = process.argv.slice(2);
console.log("Introduzca el día y mes de su cumpleaños: (DD MM)", argumentos);
let birthday = argumentos[0,1];

//Pedimos la fecha de cumpleaños por consola y establecemos la constante de la fecha tope.
const finalYear = 2100;
let year = new Date;
year = year.getFullYear();

//Bucle para comprobar en qué años el cumpleaños cae en domingo.
while (year <= finalYear) {

    let yearToCheck = new Date(new Date(year, argumentos[1] - 1, argumentos[0]).toDateString());

    //Con esta linea mostraremos el resultado en el log.
    if (yearToCheck.getDay() === 0) console.log(year)

    year++;
}