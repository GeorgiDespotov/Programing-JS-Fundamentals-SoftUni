function solve(array) {
    let isFound = true;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;
        if (i !== 0 ) {
            for (let l = 0; l < i; l++) {
                leftSum += array[l];
            }
        }
        if (i !== array.length - 1) {
            for (let r = i + 1; r < array.length; r++) {
                rigthSum += array[r];
            }
        }
        if (rigthSum === leftSum) {
            console.log(i);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log('no');
    }
}
solve([1, 2])