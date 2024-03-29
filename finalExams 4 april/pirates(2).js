function solve(array) {
    let actions = {
        Plunder(cities, town, people, gold) {
            [people, gold] = [Number(people), Number(gold)];
            cities[town].pop -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[town].pop == 0 || cities[town].gold == 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        },
        Prosper(cities, town, gold) {
            gold = Number(gold);
            if (gold >= 0) {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    };
    let cities = {};
    let line;
    while ((line = array.shift()) !== 'Sail') {
        let [city, pop, gold] = line.split('||');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = { pop: 0, gold: 0 };
        }
        cities[city].pop += Number(pop);
        cities[city].gold += Number(gold);
    }
    while ((line = array.shift()) !== 'End') {
        let [command, town, ...param] = line.split('=>');
        actions[command](cities, town, ...param);
    }
    let sorted = Object.entries(cities).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.forEach(town => {
            console.log(`${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`);
        });
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])
console.log(`----------`);
solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])