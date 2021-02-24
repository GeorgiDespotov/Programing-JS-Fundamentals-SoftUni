function solve(n, arr) {
    let line = '';
    for (i = n - 1; i >= 0; i--) {
        line += arr[i] + ' ';
    }
    console.log(line);
}
solve(3, [10, 20, 30, 40, 50])