function solve(array){
    let sum = 0;
    let newSum = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (array[i] % 2 == 0 ){
            newArray.push(array[i] + i);
            newSum += array[i] + i;
        } else {
            newArray.push(array[i] - i);
            newSum += array[i] - i;
        }
    }
    console.log(newArray);
    console.log(sum);
    console.log(newSum);
}
solve([5, 15, 23, 56, 35])