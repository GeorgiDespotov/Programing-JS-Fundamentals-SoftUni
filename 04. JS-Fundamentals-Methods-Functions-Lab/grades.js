function grade(num) {
    let result = '';
    num = num.toFixed(2);
    if (num < 3) {
        result = `Fail (2)`;
    } else if (num < 3.5) {
        result = `Poor (${num})`;
    } else if (num < 4.5) {
        result = `Good (${num})`;
    } else if (num < 5.5) {
        result = `Very good (${num})`;
    } else {
        result = `Excellent (${num})`;
    }
    console.log(result);
}
grade(4.50)