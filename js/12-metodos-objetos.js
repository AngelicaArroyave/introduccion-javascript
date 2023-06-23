// "use strict" // Corre JavaScript de modo estricto
// Objetos

const product = {
    name: 'Monitor de 20 pulgadas',
    price: 200,
    isAvailable: true
}

// product.image = 'imagen.jpg'
// console.log(product); // {name: 'Monitor de 20 pulgadas', price: 200, isAvailable: true, image: 'imagen.jpg'}

Object.freeze(product) // Congela el objeto, impidiendo moficiarlo (agregar, eliminar o modificar)
product.image = 'imagen.jpg'
console.log(Object.isFrozen(product)); // true, permite ver si un objeto está sellado
console.log(product); // {name: 'Monitor de 20 pulgadas', price: 200, isAvailable: true}

Object.seal(product) // Congela el objeto, impidiendo moficiarlo (agregar o eliminar), pero si modificar existentes
product.price = 300
console.log(Object.isSealed(product)); // true, permite ver si un objeto está sellado
console.log(product); // {name: 'Monitor de 20 pulgadas', price: 200, isAvailable: true}