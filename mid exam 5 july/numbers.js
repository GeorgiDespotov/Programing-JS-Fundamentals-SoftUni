function numbers(str) {
    let array = str.split(' ').map(Number);
    let sum = 0;
    array.forEach(el => {
        sum += el;
    });
    let average = sum / array.length;
    let result =[];
    array.forEach(x => {
        if (x > average) {
        result.push(x)
        }
    })
    result.sort((a, b) => b - a);
    result = result.slice(0, 5)
    if (result.length == 0) {
        console.log(`No`);
    } else {
        console.log(result.join(' '));
    }
    
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')