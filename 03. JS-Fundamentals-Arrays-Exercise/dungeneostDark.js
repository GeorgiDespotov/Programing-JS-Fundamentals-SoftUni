function solve(array) {
    let dungeon = array[0].split('|')
    let coins = 0;
    let health = 100;
    let isFaild = false;
    for (let i = 0; i < dungeon.length; i++) {
        let element = dungeon[i].split(' ');
        let room = element[0];
        let num = Number(element[1]);
        if (room === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else if (room === 'potion') {
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${room}.`);
            } else {
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${i + 1}`);
                isFaild = true;
                break;
            }
        }
    }
    if (!isFaild) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])