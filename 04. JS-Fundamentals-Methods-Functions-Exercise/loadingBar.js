function loadingBar(num) {
    function loading(n) {
        let line = [];
        for (let i = 10; i <= n; i += 10) {
            line.push('%');
        }
        if (n === 100) {
            for (let j = n + 10; j <= 100; j += 10) {
                line.push('%');
            }
            let str = line.join('');
            let textOne = `100% Complete!`;
            let textTwo = `[${str}]`
            let result = [];
            result.push(textOne, textTwo);
            return result.join('\n');
        } else {
            for (let z = n + 10; z <= 100; z += 10) {
                line.push('.');
            }
            let str = line.join('');
            let textOne = `${n}% [${str}]`;
            let textTwo = `Still loading...`;
            let result = [];
            result.push(textOne, textTwo);
            return result.join('\n');
        }
    }
    return loading(num);
}
console.log(loadingBar(10));