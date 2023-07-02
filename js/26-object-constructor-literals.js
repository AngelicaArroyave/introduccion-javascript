// Programación Orientada a Objetos (POO)
// Object Literals

const product = {
    name: 'Tablet',
    price: 100
}

// Object Constructor


// Constructor forma 2
// class Product {
//     constructor(name, total) {
//         this.name = name
//         this.total = total
//     }
// }

// Constructor forma 1
function Client(name, surname) {
    this.name = name
    this.surname = surname
}

Client.prototype.updateClient = function() {
    return `El cliente ${this.name} ${this.surname}`
}

function Product(name, total) { // Se crea una clase
    this.name = name
    this.total = total
}

// Crear funciones que solo se utilizan en un ibjeto en especifico
Product.prototype.updateProduct = function() {
    return `El producto ${this.name} tiene un precio de: $ ${this.total}`
}

const productWithConstructor = new Product('Monitor de 29"', 2000) // Se crea una instancia
console.log(productWithConstructor);
console.log(productWithConstructor.updateProduct()); // El producto Monitor de 29" tiene un precio de: $ 2000

const client = new Client('Daniel', 'Arias')
console.log(client);
console.log(client.updateClient()); // El cliente Daniel Arias

// No es necesaria cuando se usa los prototypes
function updateProduct(product) {
    return `El producto ${product.name} tiene un precio de: $ ${product.total}`
}

console.log(updateProduct(productWithConstructor)); // El producto Monitor de 29" tiene un precio de: $ 2000