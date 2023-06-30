// Funciones con parámetros y argumentos

// Declaración
function sum(number1, number2) { // Parámetros
    console.log(number1 + number2);
}

sum(2, 30) // Argumentos o valores reales

// Expresión de la función
const sum2 = function(number1, number2) {
    console.log(number1 + number2);
}

sum2(5, 13)

// Función con parámetros por default u opcionales
function multiply(number1, number2 = 2) {
    console.log(number1 * number2);
}

multiply(3, 3) // 9
multiply(3) // 6