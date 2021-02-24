function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;

    function check(n) {

        n = n.toString();
        for (let i = 0; i < n.length; i++) {
            Number(n[i]) % 2 === 0 ? evenSum += Number(n[i]) : oddSum += Number(n[i])
        }
        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }
    return check(num);
}
console.log(oddAndEvenSum(3495892137259234));