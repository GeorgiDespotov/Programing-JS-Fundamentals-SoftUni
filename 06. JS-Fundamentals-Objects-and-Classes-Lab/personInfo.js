function personInfo(first, last, age) {
    let object = {};
    object.firstName = first;
    object.lastName = last;
    object.age = age;
    object.kur = 'golem'

    return object;
}
console.log(personInfo('Peter', 'Pan', '20'));