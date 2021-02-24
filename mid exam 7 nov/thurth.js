function solve(array) {
    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let health = Number(array.shift());
    let comand = array.shift();

    let isStalemate = true;

    while (comand !== 'Retire') {
        let token = comand.split(' ');
        let action = token[0];
        if (action == 'Fire') {
            let index = Number(token[1]);
            let damage = Number(token[2]);
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    isStalemate = false;
                    console.log(`You won! The enemy ship has sunken.`);
                    break;
                }
            }
        } else if (action == 'Defend') {
            let startIndex = Number(token[1]);
            let endIndex = Number(token[2]);
            let damage = Number(token[3]);
            for (i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    isStalemate = false;
                    console.log(`You lost! The pirate ship has sunken.`);
                    break;
                }
            }
        } else if (action == 'Repair') {
            let index = Number(token[1]);
            let rapair = Number(token[2]);
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += rapair;
                if (pirateShip[index] > health) {
                    pirateShip[index] = health;
                }
            }
        } else if (action == 'Status') {
            let needRepair = health * 0.2;
            let count = 0;
            for (i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < needRepair) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
        comand = array.shift();
    }
    if (isStalemate) {
        let pirateShipSum = 0;
        let warshipSum = 0;
        for (const i of pirateShip) {
            pirateShipSum += i;
        }
        for (const e of warShip) {
            warshipSum += e;
        }
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}
solve(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

