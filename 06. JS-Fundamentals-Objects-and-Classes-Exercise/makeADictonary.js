function makeDictonary(array) {
    let dictionery = {};
    array.forEach(element => {
        element = JSON.parse(element)
        let arrayObjects = Object.entries(element);
        let term = arrayObjects[0][0];
        let definition = arrayObjects[0][1];
        dictionery[term] = definition;
    });
    Object.entries(dictionery)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            console.log(`Term: ${el[0]} => Definition: ${el[1]}`)
        });
}
/*function makeDictonary(array) {
    let dictionary = {};
    for (let line of array) {
        let object = JSON.parse(line);
        dictionary = Object.assign(dictionary, object);
    }
    let sortedKeys = Object.keys(dictionary);
    sortedKeys.sort((a,b) => a.localeCompare(b));
    for (let term of sortedKeys) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}*/
makeDictonary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)