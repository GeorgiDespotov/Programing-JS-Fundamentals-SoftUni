function solve(num){
    let line = num.toString();
    let sum = 0;
    for( i = 0; i<line.length; i++){
        let char = Number(line[i]);
        sum += char;
    }
    let sumAsStr = sum.toString();
    if(sumAsStr.includes('9')){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
solve(1233)