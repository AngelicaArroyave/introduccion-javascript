// Funciones que retornan

function sum(number1, number2) {
    return number1 + number2
}

const result = sum(2, 5)
console.log(result);

let total = 0

function addToCart(price) {
    return total += price
}

function calculateTax(total) {
    return 1.15 * total
}

total = addToCart(200)
total = addToCart(600)
total = addToCart(100)

console.log(total);

const totalPayable = calculateTax(total)

console.log(`El total a pagar con impuestos es de: ${totalPayable}`);