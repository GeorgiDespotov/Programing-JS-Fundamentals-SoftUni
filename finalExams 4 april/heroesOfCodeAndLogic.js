function solve(array) {
    let actions = {
        CastSpell(heroes, heroName, MPNeedet, spellName) {
            MPNeedet = Number(MPNeedet);
            if (heroes[heroName].mp >= MPNeedet) {
                heroes[heroName].mp -= MPNeedet;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage(heroes, heroName, damage, attacker) {
            damage = Number(damage);
            heroes[heroName].hp -= damage;
            if (heroes[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        },
        Recharge(heroes, heroName, amount) {
            amount = Number(amount);
            let previosMP = heroes[heroName].mp;
            heroes[heroName].mp += amount;
            if (heroes[heroName].mp > 200) {
                heroes[heroName].mp = 200;
            }
            console.log(`${heroName} recharged for ${heroes[heroName].mp - previosMP} MP!`);
        },
        Heal(heroes, heroName, amount) {
            amount = Number(amount);
            let previosHP = heroes[heroName].hp;
            heroes[heroName].hp += amount;
            if (heroes[heroName].hp > 100) {
                heroes[heroName].hp = 100;
            }
            console.log(`${heroName} healed for ${heroes[heroName].hp - previosHP} HP!`);
        }
    };
    let numHeroes = Number(array.shift());
    let heroes = {};
    let line;
    while (numHeroes !== 0) {
        line = array.shift()
        let [heroName, hp, mp] = line.split(' ');
        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = { hp: 0, mp: 0 };
        }
        heroes[heroName].hp += Number(hp);
        heroes[heroName].mp += Number(mp);
        numHeroes--;
    }
    while ((line = array.shift()) !== 'End') {
        let [command, heroName, ...param] = line.split(' - ');
        actions[command](heroes, heroName, ...param);
    }
    let sorted = Object.entries(heroes).sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));
    for (const arrHero of sorted) {
        console.log(arrHero[0]);
        console.log(`HP: ${arrHero[1].hp}`);
        console.log(`MP: ${arrHero[1].mp}`);
    }
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
])
console.log('-----------');
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
])