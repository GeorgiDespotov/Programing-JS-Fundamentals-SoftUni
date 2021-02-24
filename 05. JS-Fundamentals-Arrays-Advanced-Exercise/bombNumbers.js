function bombNum(array, arr) {
    let bombNumber = arr[0];
    let power = arr[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == bombNumber) {
            let start = i - power;
            let elemntsToRemove = 1 + power * 2;
            if (start < 0) {
                array.splice(0, elemntsToRemove + start)
            } else {
                array.splice(start, elemntsToRemove)
                i -= 1;
            }
        }
    }

    console.log(array.reduce((a, b) => a + b, 0));
}
bombNum([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]


);