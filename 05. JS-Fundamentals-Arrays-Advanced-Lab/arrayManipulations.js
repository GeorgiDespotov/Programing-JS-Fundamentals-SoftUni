function arrayManipulations(array) {
    let arr = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum); 
                break;
            case 'RemoveAt':
                removeAt(firstNum); 
                break;
            case 'Insert':
                insurt(firstNum, secondNum); 
                break;
        }
        function add(num) {
            return arr.push(num);
        }
        function remove(num) {
            return arr = arr.filter(x => x !== num);
        }
        function removeAt(index) {
            return arr.splice(index, 1);
        }
        function insurt(num, index) {
            return arr.splice(index, 0, num);
        }
    }
    return arr.join(' ');
}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));