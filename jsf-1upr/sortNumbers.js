function solve(n1,n2,n3){
   
  let arr = [n1,n2,n3];
  let result = arr.sort((n2,n1) => n2 - n1);
  result = arr.reverse();
  result = result.join('\n')
  console.log(result);
}
solve(2,1,3)