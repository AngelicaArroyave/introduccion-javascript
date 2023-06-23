// Objetos

const nameProduct = 'Monitos de 20 pulgadas'
const price = 200
const isAvailable = true

const product = {
    nameProduct: 'Monitos de 20 pulgadas',
    price: 200,
    isAvailable: true
}

console.log(product); // {nameProduct: 'Monitos de 20 pulgadas', price: 200, isAvailable: true}

// Acceder a las propiedades de los objetos
console.log(product.isAvailable); // true
console.log(product['price']); // 200

// Modificación de objetos

// Agregar nuevas propiedades
product.image = 'image.jpg'
console.log(product); // {nameProduct: 'Monitos de 20 pulgadas', price: 200, isAvailable: true, image: 'image.jpg'}

// Eliminar propiedades
delete product.price
console.log(product); // {nameProduct: 'Monitos de 20 pulgadas', isAvailable: true, image: 'image.jpg'}