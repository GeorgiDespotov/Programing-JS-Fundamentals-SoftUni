function houseParty(array) {
    let list = [];
    for (let iterator of array) {
        let command = iterator.split(' ');
        let name = command[0];
        if (command.length == 3) {
            if (!list.includes(name)) {
                list.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return list.join('\n');
}
console.log(houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

));