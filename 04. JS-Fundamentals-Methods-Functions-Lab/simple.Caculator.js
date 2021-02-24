function calculate(x, y, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply': console.log(multiply(x, y)); break;
        case 'divide': console.log(divide(x, y)); break;
        case 'add': console.log(add(x, y)); break;
        case 'subtract': console.log(subtract(x, y)); break;
    }
}
calculate(2, 2, 'subtract');