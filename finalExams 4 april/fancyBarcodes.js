function solve(array) {
    let num = array.shift();
    for (let i = 0; i < num; i++) {
        let barCodeRegex = /[@][#]{1,}[A-Z][A-Za-z0-9]{4,}[A-Z][@][#]{1,}/g;
        let match = array[i].match(barCodeRegex);
        if (match) {
            let digitsRegex = /\d+/g;
            let digitMatch = array[i].match(digitsRegex);
            if (digitMatch) {
                console.log(`Product group: ${digitMatch.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])