function solve(array) {
    let numBarCodes = Number(array.shift());
    for (let i = 0; i < numBarCodes; i++) {
        let codeRegex = /[@][#]+[A-Z][A-Za-z\d]{4,}[A-Z][@][#]+/g;
        let match = array[i].match(codeRegex);
        if (match) {
            let numRegex = /\d/g;
            let digitMatch = match[0].match(numRegex);
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
solve([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);
console.log(`----------`);
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])