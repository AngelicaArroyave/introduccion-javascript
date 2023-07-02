// Try/Catch

const number1 = 10
const number3 = 30

console.log(number1); // 10
// console.log(number2); // Uncaught ReferenceError: number2 is not defined
// console.log(number3); // NO SE EJECUTA

try {
    console.log(number2);
} catch (error) {
    console.log(error); // ReferenceError: number2 is not defined
}

console.log(number3); // 30