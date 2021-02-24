function solve(num) {
    let sum = 0;
    let line = num.toString();
    for (i = 0; i < line.length; i++) {
        sum += Number(line.charAt(i));
    }
    console.log(sum);
}
solve(23)