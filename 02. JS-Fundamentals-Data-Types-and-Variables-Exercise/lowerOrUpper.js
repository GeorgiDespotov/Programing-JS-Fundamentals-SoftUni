function solve(char) {
    let upperChar = char.toUpperCase();
    if (char == upperChar) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}
solve('L')