function solve(array) {
    let N = array.pop();
    let line = [];
    for (let i = 0; i < array.length; i += Number(N)) {
        line.push(array[i]);
    }
    console.log(line.join(' '));
}
solve(['5', '20', '31', '4', '20', '2'])