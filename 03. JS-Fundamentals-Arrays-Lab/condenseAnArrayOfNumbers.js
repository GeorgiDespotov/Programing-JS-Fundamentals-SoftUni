function solve(arr) {
    while (arr.length > 1) {
        let newArr = Array(arr.length - 1);
        for (i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1];
        }
        arr = newArr;
    }
    console.log(arr[0]);
}
solve([2, 10, 3])