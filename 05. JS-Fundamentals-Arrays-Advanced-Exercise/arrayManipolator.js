function arrayManipolator(arrayOne, arrayTwo) {
    let index = 0;
    let command = arrayTwo[index];
    while (command !== 'print') {
        let splitCommand = command.split(' ');
        let task = splitCommand.shift();
        switch (task) {
            case 'add':
                add(splitCommand);
                break;
            case 'addMany':
                addMany(splitCommand);
                break;
            case 'contains':
                console.log(contains(splitCommand));
                break;
            case 'remove':
                remove(splitCommand);
                break;
            case 'shift':
                shift(splitCommand);
                break;
            case 'sumPairs':
                sumPairs(arrayOne);
        }
        index++;
        command = arrayTwo[index];
    }

    function add(array) {
        let index = Number(array[0]);
        let element = Number(array[1]);
        return arrayOne.splice(index, 0, element);
    }
    function addMany(array) {
        let index = Number(array.shift());
        arra = array.map(Number);
        for (i = arra.length - 1; i >= 0; i--) {
            arrayOne.splice(index, 0, arra[i]);
        }
        return arrayOne
    }
    function contains(array) {
        let element = Number(array.shift());
        if (arrayOne.includes(element)) {
            return arrayOne.indexOf(element);
        } else {
            return -1;
        }
    }
    function remove(array) {
        let index = Number(array.shift());
        return arrayOne.splice(index, 1);
    }
    function shift(array) {
        let position = Number(array.shift());
        for (let i = 0; i < position; i++) {
            let current = arrayOne.shift();
            arrayOne.push(current);
        }
        return arrayOne;
    }
    function sumPairs(array) {
        let currentArray = [];
        for (let i = 0; i < arrayOne.length - 1; i += 2) {
            let sum = arrayOne[i] + arrayOne[i + 1];
            currentArray.push(sum);
        }
        if (arrayOne.length % 2 !== 0) {
            let last = arrayOne.pop();
            currentArray.push(last);
        }
        arrayOne = currentArray;
        return arrayOne;
    }
    let result = arrayOne.join(', ');
    console.log(`[ ${result} ]`);
}
arrayManipolator([1, 2, 3, 4],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);