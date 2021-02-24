/*
function processOddNumbers(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        i % 2 == 1 ? arr.unshift(array[i] * 2) : false;
    }
    console.log(arr.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
*/
function processOddNumbers(array) {
    let result = array.filter((v, i) => i % 2 == 1).map(x => 2*x).reverse();
    return result.join(' ');
}
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));