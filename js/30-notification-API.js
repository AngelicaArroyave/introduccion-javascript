// Notificación API

const button = document.querySelector('#boton')

button.addEventListener('click', () => {
    Notification.requestPermission()
        .then(result => console.log(`El resultado es ${result}`))
})

if(Notification.permission === 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/mantra.jpg',
        body: 'Lo mejores mantras'
    })
}