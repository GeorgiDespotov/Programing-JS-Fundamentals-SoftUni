function solve(num) {

    for (x = 0; x < num; x++) {
        let first = String.fromCharCode(x + 97);
        for (y = 0; y < num; y++) {
            let second = String.fromCharCode(y + 97);
            for (z = 0; z < num; z++) {
                let third = String.fromCharCode(z + 97);
                console.log(`${first}${second}${third}`);
            }
        }
    }
}
solve(3)