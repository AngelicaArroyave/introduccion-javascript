// String o cadenas de texto

const product = 'Monitor de 20 pulgadas'
console.log(product); // Monitor de 20 pulgadas

const product2 = String('Monitor de 30 pulgadas')
console.log(product2); // Monitor de 30 pulgadas

const product3 = new String('Monitor de 43 pulgadas') // Es un objeto
console.log(product3, typeof product3); // Monitor de 43 pulgadas

const product4 = 'Monitor de 29"'
console.log(product4); // Monitor de 29"

const product5 = "Monitor de 27\""
console.log(product5); // Monitor de 27"

// Mètodos de los Strings o cadenas de texto
console.log(product.length); // 22
console.log(product2.indexOf('30')); // 11
console.log(product3.includes('pulgadas')); // true