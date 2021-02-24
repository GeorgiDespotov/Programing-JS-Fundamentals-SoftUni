function solve(string, numOne, numTwo) {
    let result = string.substring(numOne, numTwo + numOne);
    console.log(result);
}
solve("ASentance", 3, 8)