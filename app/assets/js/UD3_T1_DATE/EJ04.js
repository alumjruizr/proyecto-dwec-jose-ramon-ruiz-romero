/*Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)*/

const argumentos = process.argv.slice(2);
console.log("Cómo quiere visualizar la hora: " + "\n" 
+ "1) 14:35:07 (hora detallada con minutos y segundos)" + "\n" 
+ "2) 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)" + "\n" , argumentos);
let dateType = argumentos[0];

let today = new Date();

(dateType === "1") ? console.log(secondsHour(today)) : 
(dateType === "2") ? console.log(minutesHour(today)) :
    console.log("No ha elegido un formato correcto.");

function secondsHour(today) {
    return today.toLocaleTimeString();
}

function minutesHour(today) {
    return today.toLocaleTimeString("en", {hour12:true});

}