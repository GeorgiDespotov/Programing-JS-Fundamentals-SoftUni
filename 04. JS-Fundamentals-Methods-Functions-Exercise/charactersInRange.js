function charInRange(x, y) {
    let firstChar = x.charCodeAt(0);
    let secondChar = y.charCodeAt(0);

    let start = firstChar < secondChar ? firstChar : secondChar;
    let end = firstChar > secondChar ? firstChar : secondChar;

    function inLine(a, b) {
        let line = [];
        for (let i = start + 1; i < end; i++) {
            let char = String.fromCharCode(i);
            line.push(char);
        }
        return line.join(' ');
    }
    
    return inLine(x, y);

}
console.log(charInRange('C', '#'));