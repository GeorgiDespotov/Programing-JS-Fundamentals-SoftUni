function smallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => (a - b));
    let result = sorted.splice(0, 2);
    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);