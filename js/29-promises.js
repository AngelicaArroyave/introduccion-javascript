// Promises

const authenticatedUser = new Promise((resolve, reject) => {
    const auth = true

    if(auth) {
        resolve('Usuario autenticado') // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión') // El promise no se cumple
    }
})

console.log(authenticatedUser);
authenticatedUser
    .then(result => console.log(result)) // Usuario autenticado
    .catch(error => console.log(error)) // No se pudo iniciar sesión

// En los promises hay 3 valores:
// Pending -> No se ha cumplido pero tampoco se ha rechazado
// Fulfilled -> Ya se cumplió
// Reject -> Se ha rechazado o no se pudo cumplir