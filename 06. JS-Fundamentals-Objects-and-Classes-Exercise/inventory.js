function inventory(array) {
    let heroes = [];

    for (const line of array) {
        let [heroNmae, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        let heroObj = {
            name: heroNmae,
            level: level,
            items: items
        }
        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.level - b.level)
        .forEach(obj => {
            console.log(`Hero: ${obj.name}`);
            console.log(`level => ${obj.level}`);
            console.log(`items => ${obj.items}`);
        });
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);