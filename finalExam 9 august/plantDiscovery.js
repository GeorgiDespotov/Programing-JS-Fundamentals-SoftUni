/*function solve(array) {
    let actions = {
        Rate(plants, plant, rating) {
            rating = Number(rating);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(rating);
            } else {
                console.log('error');
            }
        },
        Update(plants, plant, newRarity) {
            newRarity = Number(newRarity);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        },
        Reset(plants, plant) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        }
    };
    let numPlants = Number(array.shift());
    let plants = {};
    let line;
    for (let i = 0; i < numPlants; i++) {

        let [plant, rarity] = array.shift().split('<->');
        rarity = Number(rarity);
        plants[plant] = { rarity: rarity, rating: [] };

    }
    while ((line = array.shift()) !== 'Exhibition') {
        let [command, plantParam] = line.split(': ');
        let [plant, ...param] = plantParam.split(' - ');
        if (command == 'Rate' || command == 'Update' || command == 'Reset') {
            actions[command](plants, plant, ...param);
        } else {
            console.log(`error`);
        }
    }
    let sorted = Object.entries(plants).sort((x, y) => {
        let avgX = x[1].rating.reduce((a, b) => a + b, 0) / x[1].rating.length;
        let avgY = y[1].rating.reduce((a, b) => a + b, 0) / y[1].rating.length;
        return y[1].rarity - x[1].rarity || avgY - avgX;
    });
    console.log(`Plants for the exhibition:`);
    sorted.forEach(el => {

        let avg = 0;
        let sum = el[1].rating.reduce((x, y) => x + y, 0);
        el[1].rating.length > 0 ? (avg = sum / el[1].rating.length) : (avg = 0);
        console.log(`- ${el[0]}; Rarity: ${el[1].rarity}; Rating: ${avg.toFixed(2)}`);

    });
}*/
function solve(array) {
    let actions = {
        Rate(plants, plant, rating) {
            rating = Number(rating);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating += rating;
                plants[plant].numRaitings++;
            } else {
                console.log('error');
            }
        },
        Update(plants, plant, newRarity) {
            newRarity = Number(newRarity);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        },
        Reset(plants, plant) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = 0;
                plants[plant].numRaitings = 0;
            } else {
                console.log('error');
            }
        }
    };
    let numPlants = Number(array.shift());
    let plants = {};
    let line;
    while (numPlants !== 0) {
        line = array.shift();
        let [plant, rarity] = line.split('<->');
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = { rarity: 0, rating: 0, numRaitings: 0 };
        }
        plants[plant].rarity = Number(rarity);
        numPlants--;
    }
    while ((line = array.shift()) !== 'Exhibition') {
        let [command, plantParam] = line.split(': ');
        let [plant, ...param] = plantParam.split(' - ');
        actions[command](plants, plant, ...param);
    }
    let sorted = Object.entries(plants).sort((a, b) => b[1].rarity - a[1].rarity || (b[1].rating / b[1].numRaitings) - (a[1].rating / a[1].numRaitings));
    console.log(`Plants for the exhibition:`);
    for (const arrPlants of sorted) {
        if (arrPlants[1].rating == 0) {
            arrPlants[1].numRaitings = 1;
        }
        console.log(`- ${arrPlants[0]}; Rarity: ${arrPlants[1].rarity}; Rating: ${(arrPlants[1].rating / arrPlants[1].numRaitings).toFixed(2)}`);
    }
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])
console.log(`--------`);
solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])