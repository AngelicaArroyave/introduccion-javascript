// Funciones de flecha o arrow functions

const player = {
    play: id => console.log(`Reproduciendo la canción ${id}`),
    pause: () => console.log('Pausando la canción...'),
    createPlaylist: name => console.log(`Creando la canción: ${name}`),
    playSong: name => console.log(`Reproduciendo la canción: ${name}`)
}

console.log(player);
console.log(player.play);
player.play(137)
player.pause()

player.deleteSong = id => console.log(`Eliminando la canción ${id}`)

player.deleteSong(17)
player.createPlaylist('Pajarito colibri')
player.playSong('Pajarito colibri')

const multiply = (number1, number2) => console.log(number1 * number2)

multiply(2, 4)