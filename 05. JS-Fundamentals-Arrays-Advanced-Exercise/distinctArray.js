function distinctArray(array) {
    result = [];
    for (let element of array) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }
    return result.join(' ');
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));