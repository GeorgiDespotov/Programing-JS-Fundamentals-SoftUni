/*function employees(array) {
    let list = {};
    for (const iterator of array) {
        list[iterator] = iterator.length;
    }
    Object.entries(list).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    });
}*/
function employees(array) {
    let employ = [];
    array.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }
        employ.push(person);
    })
    employ.forEach(object => {
        console.log(`Name: ${object.name} -- Personal Number: ${object.number}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )