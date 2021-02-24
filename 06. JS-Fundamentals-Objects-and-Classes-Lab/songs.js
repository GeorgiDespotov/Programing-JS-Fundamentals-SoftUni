function songs(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numSongs = array.shift();
    let favorite = array.pop();
    for (let i = 0; i < numSongs; i++) {
        let [type, name, time] = array[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (favorite === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtred = songs.filter((i) => i.type === favorite);
        filtred.forEach((i) => console.log(i.name));
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])