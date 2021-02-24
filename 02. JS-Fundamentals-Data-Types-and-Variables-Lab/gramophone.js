function solve(band, album, song) {
    let duration = (album.length * band.length) * song.length / 2;
    let times = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${times} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')