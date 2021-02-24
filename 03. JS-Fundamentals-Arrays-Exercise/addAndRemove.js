function solve(array) {
    let line = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num++;
        if (array[i] == 'add') {
            line.push(num);
        } else {
            line.pop();
        }
    }
    if (line.length == 0) {
        console.log('Empty');
    } else {
        console.log(line.join(' '));
    }
}
solve(['remove', 'remove', 'remove'])