function solve(num) {
    let sum = 0;
    let result = '';

    for (i = 1; i <= num; i++) {
        i = i.toString();
        for (j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}
solve(15)