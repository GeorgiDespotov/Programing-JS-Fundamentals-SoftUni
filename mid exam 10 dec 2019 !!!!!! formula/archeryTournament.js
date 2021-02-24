function archeryTournament(array) {
    let targets = array.shift().split('|').map(Number);
    let command = array.shift()
    let points = 0;
    while (command !== 'Game over') {
        let [action, index, moves] = command.split('@');
        index = Number(index);
        moves = Number(moves);
        if (index < 0 || index >= targets.length) {
            command = array.shift();
            continue
        } else {
            if (action == 'Shoot Left') {

                // формула за движение на индекси на ляво с превуртане

                moves %= targets.length;
                let offset = targets.length - moves;
                let targetIndex = (index + offset) % targets.length;

               
                if (targets[targetIndex] <= 5) {
                    points += targets[targetIndex];
                    targets[targetIndex] = 0;
                } else {
                    points += 5;
                    targets[targetIndex] -= 5;
                }
            } else if (action == 'Shoot Right') {

                // формула за движение на индекси на дясно с превуртане

                let targetIndex = (index + moves) % targets.length;


                if (targets[targetIndex] <= 5) {
                    points += targets[targetIndex];
                    targets[targetIndex] = 0;
                } else {
                    points += 5;
                    targets[targetIndex] -= 5;
                }
            } else {
                targets.reverse();
            }
        }
        command = array.shift();
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}
archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]);