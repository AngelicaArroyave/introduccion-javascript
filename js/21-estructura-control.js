// Estructuras de control

const puntaje = '1000'

if(puntaje === 1000) console.log('El puntaje es 1000 estrictamente'); // La condición es estricta
if(puntaje == 1000) console.log('El puntaje es 1000'); // La condición no es estricta

const efectivo = 1000
const carrito = 800

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

const rol = 'EDITOR'

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Tienes acceso, pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso al sistema');
}