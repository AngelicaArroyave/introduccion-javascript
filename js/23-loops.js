// For loop

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) console.log(`El número ${numbers[i]} es par`);
}

const shoppingCart = [
    { name: 'Monitor de 20 pulgadas', price: 500 },
    { name: 'Televisor de 50 pulgadas', price: 700 },
    { name: 'Tablet', price: 600 },
    { name: 'Audifonos', price: 100 },
    { name: 'Teclado', price: 200 },
    { name: 'Celular', price: 150 },
    { name: 'Bocinas', price: 50 },
    { name: 'Laptop', price: 800 }
]

let totalPrice = 0

for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price
}

console.log(`El total del carrito de compras es ${totalPrice}`);

// While loop

const months = ['January', 'February', 'March', 'April']
let i = 0

// while (i < months.length) {
//     console.log(`Mes de ${months}`);
//     i++
// }

while (i < numbers.length) {
    if (numbers[i] % 2 === 0) console.log(`El número ${numbers[i]} es par`);
    i++
}

// Do while loop

let j = 0

do {
    if (numbers[j] % 2 === 0) console.log(`El número ${numbers[j]} es par`);
    j++
} while (j < numbers.length);