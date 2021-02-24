function modifier(array) {
    let line = array.shift().split(' ').map(Number);
    let command = array.shift();
    while (command !== 'end') {
        let [action, index, value] = command.split(' ');
        index = Number(index);
        value = Number(value);
        switch (action) {
            case 'swap':
                swap(line, index, value);
                break;
            case 'multiply':
                multiply(line, index, value);
                break;
            case 'decrease':
               // line = line.map(e => --e);
               line = decr(line);
                break;
        }
        command = array.shift();
    }
    function swap(arr, i, v) {
        let temp = arr[i];
        arr[i] = arr[v];
        arr[v] = temp;
    }
    function multiply(arr, i, v) {
        arr[i] *= arr[v];
    }
    function decr(arr) {
       return arr = arr.map(x => --x);
    }
    console.log(line.join(', '));
}
modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])