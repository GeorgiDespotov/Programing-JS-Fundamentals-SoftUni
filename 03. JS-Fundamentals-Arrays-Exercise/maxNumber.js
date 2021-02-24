function solve(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}
solve([41, 41, 34, 20])