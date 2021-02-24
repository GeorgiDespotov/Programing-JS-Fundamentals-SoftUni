function lastKNumSequance(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let lastK = result.slice(-k);
        for (let num of lastK) {
            sum += num
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKNumSequance(6, 3)