// Async/Await

function downloadNewClients() {
    return new Promise(resolve => {
        console.log('Descargando clientes... Espere por favor :D');

        setTimeout(function() {
            resolve('Los clientes fueron descargados')
        }, 5000)
    })
}

function downloadLastOrders() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... Espere por favor :D');

        setTimeout(function() {
            resolve('Los pedidos fueron descargados')
        }, 3000)
    })
}

async function app() {
    try {
        // const clients = await downloadNewClients() // Hasta que no se complete no se ejecuta el resto del código
        // const orders = await downloadLastOrders()
        // console.log(clients);
        // console.log(orders);

        const result = await Promise.all([downloadNewClients(), downloadLastOrders()])
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
}

app()

console.log('Este código no se bloquea');