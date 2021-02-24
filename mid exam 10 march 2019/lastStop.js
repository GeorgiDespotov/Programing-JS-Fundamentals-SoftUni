function lastStop(array) {
    let list = array.shift().split(' ').map(Number);
    let command = array.shift();

    while (command !== 'END') {
        let token = command.split(' ');
        let action = token[0];

        if (action == 'Change') {
            let paintingNumber = Number(token[1]);
            let changedNumber = Number(token[2]);
            if (list.includes(paintingNumber)) {
                let index = list.indexOf(paintingNumber);
                list[index] = changedNumber
            }
        } else if (action == 'Hide') {
            let paintingNumber = Number(token[1]);
            if (list.includes(paintingNumber)) {
                let index = list.indexOf(paintingNumber);
                list.splice(index, 1);
            }
        } else if (action == 'Switch') {
            let numOne = Number(token[1]);
            let numTwo = Number(token[2]);
            if (list.includes(numOne) && list.includes(numTwo)) {
                let indexone = list.indexOf(numOne);
                let indexTwo = list.indexOf(numTwo);
                let temp = list[indexone];
                list[indexone] = list[indexTwo];
                list[indexTwo] = temp;
            }
        } else if (action == 'Insert') {
            let index = Number(token[1]) + 1;
            let num = Number(token[2]);
            if (index >= 0 && index < list.length) {
                list.splice(index, 0, num);
            }
        } else if (action == 'Reverse') {
            list.reverse();
        }
        command = array.shift();
    }

    console.log(list.join(' '));
}
lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
]
)