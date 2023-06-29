// Declaración de función

function sum(number1, number2) {
    console.log(number1 + number2);
}

sum(2, 7)

// Expresión de la función

const multiply = function(number1, number2) {
    console.log(number1 * number2);
}

multiply(2, 4)

// IIFE, no hay necesidad de mandar a llamar la función
(function() {
    console.log('Esto es una función de resta ');
})()