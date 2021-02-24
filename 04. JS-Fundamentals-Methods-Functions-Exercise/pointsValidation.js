function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    function firstPoint() {
        let firstCheck = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return firstCheck;
    }
    function secondPoint() {
        let secondCheck = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return secondCheck;
    }
    function thirthPoint() {
        thirthCheck = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return thirthCheck;
    }
    if (firstPoint(array) === Math.trunc(firstPoint(array))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondPoint(array) === Math.trunc(secondPoint(array))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (thirthPoint(array) === Math.trunc(thirthPoint(array))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([2, 1, 1, 1])