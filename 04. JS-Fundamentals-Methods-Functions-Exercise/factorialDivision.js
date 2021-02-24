function factorialDivision(a, b) {
    function firstFactorial(a) {
        let result = a;
        for (let i = a - 1; i >= 1; i--) {
            result *= i;      
        }
        return result;
    }
    function secondFactorial(b) {
        let result = b;
        for (let i = b - 1; i >= 1; i--) {
            result *= i;
  
        }
       return result;
    }
    let result = firstFactorial(a) / secondFactorial(b);
    return result.toFixed(2);
}

console.log(factorialDivision(5, 2));
