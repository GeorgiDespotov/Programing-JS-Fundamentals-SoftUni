function negativrOrPositive(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        array[i] >= 0 ? newArr.push(array[i]) : newArr.unshift(array[i]); 
    }
    console.log(newArr.join('\n'));
}
negativrOrPositive([7, -2, 8, 9])