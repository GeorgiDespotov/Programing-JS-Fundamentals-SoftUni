function theFinalQuest(array) {
    let line = array.shift().split(' ');
    let command = array.shift();
    while (command !== 'Stop') {
        let token = command.split(' ');
        let action = token[0];
        if (action == 'Delete') {
            let index = Number(token[1]) + 1;
            if (index >= 0 && index < line.length) {
                line.splice(index, 1);
            }
        } else if (action == 'Swap') {
            let firstWord = token[1];
            let secondWord = token[2];
            if (line.includes(firstWord) && line.includes(secondWord)) {
                let indexOne = line.indexOf(firstWord);
                let indexTwo = line.indexOf(secondWord);
                let temp = line[indexOne];
                line[indexOne] = line[indexTwo];
                line[indexTwo] = temp;
            }
        } else if (action == 'Put') {
            let word = token[1];
            let index = Number(token[2]) - 1;
            if (index >= 0 && index <= line.length) {
                if (index === line.length) {
                    line.push(word);
                } else {
                    line.splice(index, 0, word);
                }
            }
        } else if (action == 'Sort') {
            line.sort((a, b) => b.localeCompare(a));
        } else if (action == 'Replace') {
            let firstWord = token[1];
            let secondWord = token[2];
            if (line.includes(secondWord)) {
                let index = line.indexOf(secondWord);
                line.splice(index, 1, firstWord);
            }
        }
        command = array.shift();
    }
    console.log(line.join(' '));
}
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
]);