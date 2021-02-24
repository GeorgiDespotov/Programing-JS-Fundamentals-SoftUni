function solve(n){

    for(i=1; i<=n; i++){
        let line = '';
        for(x = 1; x<=i; x++){
            line += i + ' ';
        }
        console.log(line);
    }
}
solve(3)