/*function solve(array) {
    let towns = {};
    let line = array.shift();
    while (line !== 'Sail') {
        let [town, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = {};
            towns[town]['gold'] = gold;
            towns[town]['population'] = population;
        } else {
            towns[town]['gold'] += gold;
            towns[town]['population'] += population;
        }
        line = array.shift();
    }
    let command = array.shift();
    while (command !== 'End') {
        let tokens = command.split('=>');
        let order = tokens[0];
        let town = tokens[1];
        if (order == 'Plunder') {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            towns[town]['population'] -= people;
            towns[town]['gold'] -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (towns[town]['population'] <= 0 || towns[town]['gold'] <= 0) {
                delete towns[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else {
            let gold = Number(tokens[2]);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                towns[town]['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town]['gold']} gold.`);
            }
        }
        command = array.shift();
    }
    let townsLeft = Object.entries(towns);
    if (townsLeft.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${townsLeft.length} wealthy settlements to go to:`);
    }
    let sorted = townsLeft.sort((a, b) => b[1]['gold'] - a[1]['gold'] || a[0].localeCompare(b[0]));
    for (let el of sorted) {
        console.log(`${el[0]} -> Population: ${el[1]['population']} citizens, Gold: ${el[1]['gold']} kg`);
    }

}*/
function solve(array) {

    let actions = {
        Plunder(towns, townName, population, gold) {
            [population, gold] = [Number(population), Number(gold)];
            towns[townName].pop -= population;
            towns[townName].gold -= gold;
            console.log(`${townName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (towns[townName].pop == 0 || towns[townName].gold == 0) {
                delete towns[townName];
                console.log(`${townName} has been wiped off the map!`);
            }
        },
        Prosper(towns, townName, gold) {
            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                towns[townName].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${towns[townName].gold} gold.`);
            }
        }
    }
    let towns = {};
    let line;
    while ((line = array.shift()) !== 'Sail') {
        let [townName, population, gold] = line.split('||');
        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = { pop: 0, gold: 0 };
        }
        towns[townName].pop += Number(population);
        towns[townName].gold += Number(gold);
    }
    while ((line = array.shift()) !== 'End') {
        let [command, townName, ...param] = line.split('=>');
        actions[command](towns, townName, ...param);
    }
    // let sorted = Object.entries(towns).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
    let sorted = Object.entries(towns).sort(sort)
    function sort([nameA, tawnA], [nameB, townB]) {
        return townB.gold - tawnA.gold || nameA.localeCompare(nameB);
    }
    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (const arr of sorted) {
            console.log(`${arr[0]} -> Population: ${arr[1].pop} citizens, Gold: ${arr[1].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
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