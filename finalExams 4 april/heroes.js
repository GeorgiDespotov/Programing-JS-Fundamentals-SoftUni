function solve(array) {
    let actions = {
        CastSpell(heroes, name, MPneeded, spell) {
            MPneeded = Number(MPneeded);
            if (heroes[name].mp >= MPneeded) {
                heroes[name].mp -= MPneeded;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        },
        TakeDamage(heroes, name, damage, attacker) {
            damage = Number(damage);
            heroes[name].hp -= damage;
            if (heroes[name].hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        },
        Recharge(heroes, name, amount) {
            amount = Number(amount);
            let prevMP = heroes[name].mp;
            heroes[name].mp += amount
            if (heroes[name].mp > 200) {
                heroes[name].mp = 200;
                console.log(`${name} recharged for ${heroes[name].mp - prevMP} MP!`);
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
            }
        },
        Heal(heroes, name, amount) {
            amount = Number(amount);
            let prevHP = heroes[name].hp;
            heroes[name].hp += amount;
            if (heroes[name].hp > 100) {
                heroes[name].hp = 100;
                console.log(`${name} healed for ${heroes[name].hp - prevHP} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    };
    let numHeroes = Number(array.shift());
    let heroes = {};
    for (let i = 0; i < numHeroes; i++) {
        let [name, hit, mana] = array.shift().split(' ');
        if (!heroes.hasOwnProperty(name)) {
            heroes[name] = { hp: 0, mp: 0 };
        }
        heroes[name].hp += Number(hit);
        heroes[name].mp += Number(mana);
    }
    let line;
    while ((line = array.shift()) !== 'End') {
        let [command, heroeName, ...param] = line.split(' - ');
        actions[command](heroes, heroeName, ...param);
    }
    let sotred = Object.entries(heroes).sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));
    sotred.forEach(hero => {
        console.log(hero[0]);
        console.log(`HP: ${hero[1].hp}`);
        console.log(`MP: ${hero[1].mp}`);
    });
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log(`---------`);
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);