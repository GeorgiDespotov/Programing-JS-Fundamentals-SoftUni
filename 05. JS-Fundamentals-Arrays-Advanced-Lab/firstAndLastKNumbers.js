function firstLastKNum(array) {
    let k = array.shift();
    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(-k).join(' '));
}
firstLastKNum([2, 7, 8, 9]);