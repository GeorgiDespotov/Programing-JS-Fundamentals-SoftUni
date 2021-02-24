function solve(str) {
    let arr = str.split(' ');
    let word = 'Eggs'
    let n = arr.filter(el => el !== word);
    //str = str.replace(word, 'cur');
    console.log(n.join(' '));
}
solve('Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes')