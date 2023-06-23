// Concatenaciòn y template en strings

const name = 'Carlos'
const email = 'correo@gmail.com'

console.log(name); // Carlos
console.log(email); // correo@gmail.com

// Concatenación
console.log("Nombre Cliente: " + name + " Email: " + email); // Nombre Cliente: Carlos Email: correo@gmail.com
console.log("Nombre Cliente: ", name, " Email: ", email); // Nombre Cliente: Carlos Email: correo@gmail.com

// Template Strings o String literals
console.log(`Nombre del Cliente: ${name}, Email: ${email}`); // Nombre del Cliente: Carlos, Email: correo@gmail.com