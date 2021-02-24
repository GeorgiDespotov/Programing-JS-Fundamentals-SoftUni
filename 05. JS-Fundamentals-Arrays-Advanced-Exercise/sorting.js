function sorting(array) {
    array.sort((a, b) => b - a);
    let index = 1;
    for (let i = array.length - 1; i > array.length / 2; i--) {
        let temp = array.pop();
        array.splice(index, 0, temp);
        index += 2;
    }
    console.log(array.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])