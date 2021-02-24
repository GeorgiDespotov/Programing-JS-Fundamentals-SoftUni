function convertToJSON(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    let result = JSON.stringify(object);
    console.log(result);
    console.log(object);
}
convertToJSON('George', 'Jones', 'Brown');