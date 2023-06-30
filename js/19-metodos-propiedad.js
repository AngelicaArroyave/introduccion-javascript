// Métodos de propiedad

// const player = {
//     play: function() {
//         console.log('Reproduciendo canción');
//     }
// }

// console.log(player);
// console.log(player.play);
// player.play()

const player = {
    play: function(id) {
        console.log(`Reproduciendo la canción ${id}`);
    },
    pause: function() {
        console.log('Pausando la canción...');
    },
    createPlaylist: function(name) {
        console.log(`Creando la canción: ${name}`);
    },
    playSong: function(name) {
        console.log(`Reproduciendo la canción: ${name}`);
    }
}

console.log(player);
console.log(player.play);
player.play(137)
player.pause()

player.deleteSong = function(id) {
    console.log(`Eliminando la canción ${id}`);
}

player.deleteSong(17)
player.createPlaylist('Pajarito colibri')
player.playSong('Pajarito colibri')