function surchForNum(array, arr) {
    let sliceNumbers = arr[0];
    let spliceNum = arr[1];
    let specialNum = arr[2];
    let result = array.slice(0, sliceNumbers);
    result.splice(0, spliceNum);
    let counter = 0;
    for (let i of result) {
        i == specialNum ? counter++ : counter;
    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);
}
surchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)