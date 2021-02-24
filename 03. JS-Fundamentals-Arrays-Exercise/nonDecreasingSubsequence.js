function solve(array) {
   
    let arr = [array[0]];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] <= array[i + 1]) {
            arr.push(array[i + 1])
        }
    }
    console.log(arr.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);