function springVacationTrip(array) {
    array = array.map(Number);
    let days = array.shift();
    let budget = array.shift();
    let people = array.shift();
    let fuelPerKm = array.shift();
    let foodPerDay = array.shift();
    let roomPrice = array.shift();
    let hotelEpenses = days * people * roomPrice;
    let foodExpenses = days * people * foodPerDay;
    if (people > 10) {
        hotelEpenses *= 0.75;
    }
    let expenses = hotelEpenses + foodExpenses;
    let countDays = 0;
    let isFaild = false;

    for (let i = 0; i < array.length; i++) {
        countDays++;
        let consumetFuel = array[i] * fuelPerKm;
        expenses += consumetFuel;
        if (countDays % 3 === 0 || countDays % 5 === 0) {
            expenses *= 1.4;
        }
        if (countDays % 7 === 0) {
            expenses -= expenses / people;
        }
        if (expenses > budget) {
            isFaild = true;
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            break;
        }
    }
    if (!isFaild) {
        console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
    }
}
springVacationTrip([
    '10', '20500', '11',
    '1.2', '8', '13',
    '100', '150', '500',
    '400', '600', '130',
    '300', '350', '200',
    '300'
]

)