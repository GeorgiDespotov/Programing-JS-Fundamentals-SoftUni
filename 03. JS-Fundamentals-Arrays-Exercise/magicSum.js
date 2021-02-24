function solve(array, num) {
    for (let i = 0; i < array.length; i++) {
        
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] + array[k] === num) {
                console.log(`${array[i]} ${array[k]}`);
            }
        }
    }
}
solve([1, 2, 3, 4, 5, 6],
    6
    
    );