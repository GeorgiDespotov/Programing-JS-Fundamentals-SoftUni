function theLift(array) {
    let people = Number(array.shift());
    let passengers = people;
    let seats = array[0].split(' ').map(Number);
    let peopleIn = 0;
    for (let i = 0; i < seats.length; i++) {
        while (seats[i] < 4 && passengers > 0) {
            passengers--;
            seats[i]++;
            peopleIn++;
        }
    }
    let isFull = true;
    seats.forEach(el => {
        if (el < 4) {
            isFull = false;
        }
    });
    if (!isFull) {
        console.log(`The lift has empty spots!`);
    } else {
        if (passengers > 0) {
            console.log(`There isn't enough space! ${people - peopleIn} people in a queue!`);
        }
    }
    console.log(seats.join(' '));
}
theLift([
    "40",
    "0 2 0"
]);