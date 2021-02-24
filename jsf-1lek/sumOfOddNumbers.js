function solve(num){
    num=Number(num);
    let rotation=0;
    let sum=0;
    for(i=1; i<=100; i+=2){
        rotation++;
        console.log(i);
        sum+=i;
        if(rotation==num){
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
solve('3');