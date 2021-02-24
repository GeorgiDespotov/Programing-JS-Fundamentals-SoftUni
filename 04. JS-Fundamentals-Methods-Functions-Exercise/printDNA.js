function printDna(num) {
    let string = 'ATCGTTAGGG';
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 4 == 0) {
            console.log(`**${string[count % 10]}${string[(count % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${string[count % 10]}--${string[(count % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${string[count % 10]}----${string[(count % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${string[count % 10]}--${string[(count % 10) + 1]}*`);
        }
        count += 2;
    }
}
printDna(10)