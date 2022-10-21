/*
Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

15/10/2020
Jueves, 15 de octubre de 2020.
Thursday, October 15, 2020.
*/

//Declaramos la variable que nos permitirá elegir el formato fecha.
const argumentos = process.argv.slice(2);
console.log("Cómo quiere visualizar la fecha: " + "\n" 
+ "1) 15/10/2020 " + "\n" 
+ "2) Jueves, 15 de octubre de 2020" + "\n" 
+ "3) Thursday, October 15, 2020", argumentos);
let dateType = argumentos[0];

//Variable que guarda el día de hoy.
let today = new Date();

(dateType === "1") ? console.log(numericDate(today)) : 
(dateType === "2") ? console.log(spanishDate(today)) :
(dateType === "3") ? console.log(englishDate(today)) :
console.log("No ha elegido un formato correcto.")

//Función que genera la fecha en el formato numérico.
function numericDate(today) {
    let actualMonth = today.getMonth() + 1; 
    return today.getDate() + "/" + actualMonth + "/" + today.getFullYear(); 
}

//Función que genera la fecha en español.
function spanishDate(today) {

    let spanishDay;
    let spanishMonth;

    switch (today.getDay()) {
        case 0: 
            spanishDay = "Lunes"
            break;
        case 1:
            spanishDay = "Martes"
            break;
        case 2:
            spanishDay = "Miércoles"
            break;
        case 3:
            spanishDay = "Jueves"
            break;
        case 4:
            spanishDay = "Viernes"
            break;
        case 5:
            spanishDay = "Sábado"
            break;
        case 6:
            spanishDay = "Domingo"
            break;
    }

    switch (today.getMonth()) {
        case 0: 
            spanishMonth = "enero"
            break;
        case 1:
            spanishMonth = "febrero"
            break;
        case 2:
            spanishMonth = "marzo"
            break;
        case 3:
            spanishMonth = "abril"
            break;
        case 4:
            spanishMonth = "mayo"
            break;
        case 5:
            spanishMonth = "junio"
            break;
        case 6:
            spanishMonth = "julio"
            break;
        case 7: 
            spanishMonth = "agosto"
            break;
        case 8:
            spanishMonth = "septiembre"
            break;
        case 9:
            spanishMonth = "octubre"
            break;
        case 10:
            spanishMonth = "noviembre"
            break;
        case 11:
            spanishMonth = "diciembre"
            break;
    }

    return spanishDay + ", " + today.getDate() + " de " + spanishMonth + " de " + today.getFullYear();

}

//Función que genera la fecha en inglés.
function englishDate(today) {

    let englishDay;
    let englishMonth;

    switch (today.getDay()) {
        case 0: 
            englishDay = "Monday"
            break;
        case 1:
            englishDay = "Tuesday"
            break;
        case 2:
            englishDay = "Wednesday"
            break;
        case 3:
            englishDay = "Thursday"
            break;
        case 4:
            englishDay = "Friday"
            break;
        case 5:
            englishDay = "Saturday"
            break;
        case 6:
            englishDay = "Sunday"
            break;
    }

    switch (today.getMonth()) {
        case 0: 
            englishMonth = "January"
            break;
        case 1:
            englishMonth = "February"
            break;
        case 2:
            englishMonth = "March"
            break;
        case 3:
            englishMonth = "April"
            break;
        case 4:
            englishMonth = "May"
            break;
        case 5:
            englishMonth = "June"
            break;
        case 6:
            englishMonth = "July"
            break;
        case 7: 
            englishMonth = "August"
            break;
        case 8:
            englishMonth = "September"
            break;
        case 9:
            englishMonth = "October"
            break;
        case 10:
            englishMonth = "November"
            break;
        case 11:
            englishMonth = "December"
            break;
    }

    return englishDay + ", " + englishMonth + " " + today.getDate() + ", " + today.getFullYear();
}