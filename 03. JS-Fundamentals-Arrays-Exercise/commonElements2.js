function solve(arrayOne, arrayTwo){
    for (const element of arrayOne) {
        let commonElement = arrayTwo.includes(element);
        if (commonElement) {
            console.log(element);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)