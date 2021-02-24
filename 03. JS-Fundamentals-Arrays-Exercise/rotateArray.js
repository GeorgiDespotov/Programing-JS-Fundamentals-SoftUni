function solve(array) {
    let rotations = Number(array.pop());
    if (isNaN(rotations)) {
        console.log(`Empty`);
    } else {
        for (let i = 1; i <= rotations; i++) {
            let current = array.pop();
            array.unshift(current);
        }
        console.log(array.join(' '));
    }
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);