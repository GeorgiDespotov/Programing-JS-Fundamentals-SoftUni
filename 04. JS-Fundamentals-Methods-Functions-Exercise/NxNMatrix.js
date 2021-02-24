function matrixNxN(num) {
    function matrix(n) {
        let result = [];
        for (let i = 1; i <= num; i++) {
            let line = [];
            let properLine = '';
            for (let j = 1; j <= num; j++) {
                line.push(num);
                properLine = line.join(' ');
            }
            result.push(properLine);
        }
        return result.join('\n');
    }
    return matrix(num);
}
console.log(matrixNxN(7));
