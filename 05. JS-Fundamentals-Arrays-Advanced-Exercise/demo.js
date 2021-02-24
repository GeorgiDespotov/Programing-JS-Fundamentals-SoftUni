function solve() {
    let str = '1 2 3 4'
    let arr = str.split(' ')
    let arrr = arr.map(Number);
    //let num = arr.splice(0, 1)
    //let obj = arr.shift();
    //let index = arrr.indexOf(1);
    let n = [];        
    for (let i = 0; i < arrr.length; i+=2) {
        let sum = arrr[i] + arrr[i+1];
        // arrr.splice(i, 2);
        n.push(sum)
    }
    arrr = n;
    console.log(arrr);
}
solve()