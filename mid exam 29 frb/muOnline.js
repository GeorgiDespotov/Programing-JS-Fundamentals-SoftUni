function muOnline(str) {
    let newArray = str.split('|');
    let health = 100;
    let bitCoins = 0;
    let room = 0;
    let isDeath = false;
    for (let i = 0; i < newArray.length; i++) {
        room++;
        let [command, num] = newArray[i].split(' ');
        num = Number(num);
        if (command == 'potion') {
            if (health + num > 100) {
                num = 100 - health
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitCoins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                isDeath = true;
                break;
            }
        }
    }
    if (!isDeath) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitCoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')