function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());

    for (let command of array) {
        let line = command.split(' ');
        if (line[0] == 'Add') {
            add(line[1]);
        } else {
            let passengers = Number(command);
            for (let iterator of wagons) {
                let curent = iterator + passengers;
                if (capacity >= curent) {
                    wagons.splice(wagons.indexOf(iterator), 1, curent);
                    break;
                }
            }
        }
    }
    function add(n) {
        return wagons.push(Number(n));
    }
    return wagons.join(' ');
}
console.log(train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
));