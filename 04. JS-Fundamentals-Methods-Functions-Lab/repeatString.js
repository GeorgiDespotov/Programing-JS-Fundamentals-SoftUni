function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}
repeat('abc', 3);