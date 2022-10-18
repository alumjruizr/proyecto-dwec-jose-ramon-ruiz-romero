//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
//Recuerda que los meses empiezan desde el número 0

//const argumentos = process.argv.slice(2);
// console.log("argumentos", argumentos);


//Constante con la fecha de fin de curso.
const finDeCurso = new Date(2023, 5, 24);

//Variable con la fecha actual.
let fechaActual = new Date()

//Operación de resta de ambas fechas Y transformación en días.
let diasRestantes = ((finDeCurso - fechaActual) / 86400000); 

//Log para mostrarlo por pantalla.
console.log("Quedan " + Math.floor(diasRestantes) + " días para el final de curso.");
