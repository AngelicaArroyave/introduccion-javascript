// Switch

const payMethod = 'Tarjeta'

switch (payMethod) {
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'Efectivo':
        console.log('Pagaste en efectivo');
        break;
    case 'Cheque':
        console.log('El usuario va a pagar con cheque, revisaremos primero los fondos');
        break;

    default:
        console.log('Aún no has pagado');
        break;
}