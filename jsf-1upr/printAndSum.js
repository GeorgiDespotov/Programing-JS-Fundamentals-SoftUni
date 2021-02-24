function solve(n,m){
    let sum = 0;
    let line = '';
    for( i = n; i <= m; i++){
        sum+=i;
        line += i + ' ';
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
solve(1,5)