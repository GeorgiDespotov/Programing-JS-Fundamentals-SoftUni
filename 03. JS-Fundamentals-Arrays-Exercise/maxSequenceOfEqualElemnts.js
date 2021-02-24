function solve(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentArray = [array[i]];
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] === array[k]) {
                currentArray.push(array[k]);
            } else {
                break;
            }
        }
        if (currentArray.length > newArray.length) {
            newArray = currentArray;
        }
    }
    console.log(newArray.join(' '));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])