// Arreglos o Arrays

const numbers = [10, 20, 30, 40, 50]
console.table(numbers)

const months = ['January', 'February', 'March', 'April', 'May'] // Sin constructor
console.table(months)

const monthsWithConstructor = new Array('January', 'February', 'March', 'April', 'May') // Con constructor
console.log(monthsWithConstructor);

const stuff = ['Hi', 10, true, 'yes', null, { name: 'Angie', hobbie: 'Aprender nuevos lenguajes' }, [1, 2, 3, 4]]
console.log(stuff);

// Acceder a los valores de un arreglo
console.log(numbers[4]); // 50
console.log(numbers[10]); // undefined

// Conocer la extensión de un arreglo
console.log(months.length); // 5

// Recorrer un arreglo
months.forEach(month => console.log(month))

// Agregar nuevos datos a un arreglo
numbers[5] = 60
console.log(numbers);

numbers[1] = 100
console.log(numbers);

numbers.push(70) // Agrega la información al final del arreglo
numbers.push(80, 90)
console.log(numbers);

numbers.unshift(-10, -20, -30) // Agrega la información al inicio del arreglo
console.log(numbers);

numbers.pop() // Elimina el último elemento del arreglo
console.log(numbers);

numbers.shift() // Elimina el primer elemento del arreglo
console.log(numbers);

numbers.splice(3, 1) // Elimina el elemento que se envíe como parámetro en el arreglo, el 3 es la posición y 1l 1 es la cantidad
console.log(numbers);
numbers.splice(4)
console.log(numbers);

// Rest Operator o Spred Operator
const newMonths = [...months, 'December']
console.log(months);
console.log(newMonths);

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

// forEach
months.forEach(month => {
    if(month === 'May') console.log('May si existe')
})

// Includes, se usa con arreglos
const isExist = months.includes('May')
console.log(isExist);

// Some, se usa con arreglos de objetos
const exist = shoppingCart.some(car => car.name === 'Celular')
console.log(exist);

// Reduce, permite hacer operaciones
const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(totalPrice);

// Filter
const products = shoppingCart.filter(product => product.price >= 600)
console.log(products);