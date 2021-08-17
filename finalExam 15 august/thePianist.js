function solve(array) {
    let actions = {
        Add(pieces, piece, composer, key) {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer: composer, key: key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        },
        Remove(pieces, piece) {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
        ChangeKey(pieces, piece, newKey) {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    };
    let numPieces = Number(array.shift());
    let pieces = {};
    for (let i = 0; i < numPieces; i++) {
        let [piece, composer, key] = array.shift().split('|');
        pieces[piece] = { composer: composer, key: key };
    }
    let line;
    while ((line = array.shift()) !== 'Stop') {
        let [command, piece, ...param] = line.split('|');
        actions[command](pieces, piece, ...param);
    }
    let sorted = Object.entries(pieces).sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer));
    sorted.forEach(el => {
        console.log(`${el[0]} -> Composer: ${el[1].composer}, Key: ${el[1].key}`);
    });
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
console.log(`----------`);
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )