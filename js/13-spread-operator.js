// Objetos

const product = {
    name: 'Monitor de 20 pulgadas',
    price: 200,
    isAvailable: true
}

const measures = {
    weight: '1kg',
    measure: '1m'
}

const newProduct = {
    ...product,
    ...measures
}

console.log(product); // {name: 'Monitor de 20 pulgadas', price: 200, isAvailable: true}
console.log(measures); // {weight: '1kg', measure: '1m'}
console.log(newProduct); // {name: 'Monitor de 20 pulgadas', price: 200, isAvailable: true, weight: '1kg', measure: '1m'}