function numberMod(prime) {
    function solve(number) {
        while (getAvearge(number) < 5) {
            number += '9';
        }
        return number;
    }
    function sum(n) {
        let line = n.toString();
        let sum = 0;
        for (let i = 0; i < line.length; i++) {
            sum += Number(line[i]);
        }
        return sum;
    }
    function getAvearge(num) {
        return sum(num) / num.toString().length;
    }
    return solve(prime);
}
console.log(numberMod(101));