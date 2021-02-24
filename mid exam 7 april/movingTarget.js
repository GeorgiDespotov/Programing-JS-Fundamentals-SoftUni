function movingTarget(array) {
    let targets = array.shift().split(' ').map(Number);
    let command = array.shift();
    while (command !== 'End') {
        let [action, index, power] = command.split(' ');
        index = Number(index);
        power = Number(power);
        switch (action) {
            case 'Shoot':
                shoot(targets, index, power);
                break;
            case 'Add':
                add(targets, index, power);
                break;
            case 'Strike':
                strike(targets, index, power);
                break;
        }
        command = array.shift();
    }
    function shoot(arr, index, power) {
        if (index >= 0 && index < arr.length) {
            arr[index] -= power;
        }
        if (arr[index] <= 0) {
            arr.splice(index, 1)
        }
    }
    function add(arr, index, power) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 0, power);
        } else {
            console.log(`Invalid placement!`);
        }
    }
    function strike(arr, index, power) {
        if (index - power >= 0 && index + power < arr.length) {
            arr.splice(index - power, (power * 2) + 1);
        } else {
            console.log(`Strike missed!`);
        }
    }
    console.log(targets.join('|'));
}
movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);