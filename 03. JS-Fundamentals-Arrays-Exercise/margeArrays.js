function solve(arrOne, arrTwo) {
    let newArray = [];
    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(arrOne[i]) + Number(arrTwo[i]));
        } else {
            newArray.push(arrOne[i] + arrTwo[i]);
        }
    }
    console.log(newArray.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)