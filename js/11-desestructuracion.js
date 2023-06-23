// Objetos

const product = {
    name: 'Monitor de 20 pulgadas',
    price: 200,
    isAvailable: true
}

// Forma anterior
const priceProduct = product.price
console.log(priceProduct); // 200

const nameProduct = product.name
console.log(nameProduct); // Monitor de 20 pulgadas

// Con desestructuración o destructuring
// Forma 1
// const { price } = product
// const { name } = product

// console.log(price); // 200
// console.log(name); // Monitor de 20 pulgadas

// Forma 2
const { price, name } = product

console.log(price, name); // 200 Monitor de 20 pulgadas