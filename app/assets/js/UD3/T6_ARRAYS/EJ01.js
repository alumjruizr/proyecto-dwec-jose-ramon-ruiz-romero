//Mostrar el número de elementos del array.
function numberOfElements(array) {
    return "El array tiene " + array.lenght + " numero de elementos.";
}
//Mostrar todos los elementos del array.
function showArray(array) {
    return "El array contiene los siguientes elementos:" + "\n" + array.toString();
}
//Muestra los elementos del array en sentido inverso.
function showReverseElements(array) {
    return "El array contiene los siguientes elementos:" + "\n" + array.reverse().toString();
}
//Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
function showElementsAlphabetical(array) {

}
//Añadir un elemento al principio del array.
function addElement(array, newElement) {
    array.push(newElement);
}
//Añadir un elemento al final del array.
function addFrontElement(array, newElement) {
    array.unshift(newElement);
}
//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function eraseFrontElement(array) {
    return array.shift()
}
//Borrar un elemento al final del array (y decir cuál se ha borrado).
function eraseLastElement(array) {
    return array.pop();
}
//Muestra el elemento que se encuentra en una posición que el usuario indica.
function showElement(array, position) {
    return array[position].toString();
}
//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function showElementPosition(array, element) {
    return array.indexOf(element);
}
//Muestra los elementos que se encuentran en un intervalo que el usuario indica.
function showElementsGroup(array, firstNumber, lastNumber) {
    return array.slice(firstNumber, lastNumber)
}


let paises = ["Cánada", "Bulgaria", "Azerbayan", "Togo", "Antigua y Barbura", "Nueva Zelanda", "El Salvador", "República Democráctica del Congo", "República de Irlanda", "Uruguay"];

let userOption = prompt("Elija una de las siguientes opciones:" + "\n"
        + "1) Mostrar el número de países." + "\n"
        + "2) Mostrar lista de países." + "\n"
        + "3) Mostrar un intervalo de países." + "\n"
        + "4) Añadir un país." + "\n"
        + "5) Borrar un pañis." + "\n"
        + "6) Consultar un país");

if (userOption === '1') {
    alert("La base de datos contiene " + array.numberOfElements + " países.")
} else if (userOption === 2) {
    prompt()
}