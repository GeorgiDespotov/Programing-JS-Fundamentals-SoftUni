function recepcion(array) {
    array = array.map(Number);
    let questions = array.pop();
    let [one, two, three] = array;
    let capacity = one + two + three;
    let houers = 0;
    while (questions > 0) {
        houers++;
        if (houers % 4 !== 0) {
            questions -= capacity
        }
    }
    console.log(`Time needed: ${houers}h.`);
}
recepcion([ '1', '2', '3', '45' ])