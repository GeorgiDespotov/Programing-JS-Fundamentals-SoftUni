function signCheck(numOne, numTwo, numThree) {
    let array = [numOne, numTwo, numThree];
    let counter = 0;
    let result = '';
    let zeroCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            counter++;
        }
        if (array[i] == 0) {
            zeroCount = 1;
        }
    }
    if (counter == 0 || counter == 2 || zeroCount == 1) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);
}
signCheck(-1, 0, 1);
