function addSubtract(a, b, c) {
    function add(x, y) {
        let sum = x + y;
        return sum;
    }

    return add(a, b) - c;

}
console.log(addSubtract(23, 6, 10));