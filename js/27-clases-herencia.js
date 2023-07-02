// Programación Orientada a Objetos (POO)
// Clases

class Product {
    constructor(name, total) {
        this.name = name
        this.total = total
    }

    updateProduct = function() {
        return `El producto ${this.name} tiene un precio de: $ ${this.total}`
    }

    getTotal = function() {
        return this.total
    }
}

const product1 = new Product('Laptop', 2000)
const product2 = new Product('Tablet', 1000)

console.log(product1);
console.log(product2);
console.log(product2.updateProduct()); // El producto Tablet tiene un precio de: $ 1000
console.log(product1.getTotal()); // 2000

// Herencia
class Book extends Product {
    constructor(name, total, isbn) {
        super(name, total)
        this.isbn = isbn
    }

    updateProduct = function() {
        return `El producto ${this.name} tiene un precio de: $ ${this.total} y su ISBN es ${this.isbn}` // Forma 1
        // return `${super.updateProduct()} y su ISBN es ${this.isbn}` // Forma 2, Uncaught SyntaxError: 'super' keyword unexpected here
    }
}

const book = new Book('Las aventuras de Sherlock Holmes', 40000, '123456789')
console.log(book);
console.log(book.updateProduct()); // El producto Las aventuras de Sherlock Holmes tiene un precio de: $ 40000 y su ISBN es 123456789