function solve(num) {
    num = Number(num);

    if (num % 4 == 0 && num % 100 !== 0 || num % 400 == 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
solve('2003')