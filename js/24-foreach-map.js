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

// Solo se pueden usar en arreglos
// ForEach

shoppingCart.forEach(cart => console.log(`El producto ${cart.name}, tiene un precio de ${cart.price}`))

// Map

// shoppingCart.map(cart => console.log(`El producto ${cart.name}, tiene un precio de ${cart.price}`))
const arrayWithMap = shoppingCart.map(cart => `${cart.name} - ${cart.price}`)
console.log(arrayWithMap);