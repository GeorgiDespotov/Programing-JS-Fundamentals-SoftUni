function huntingGames(array) {
    array = array.map(Number);
    let days = array.shift();
    let people = array.shift();
    let energy = array.shift();
    let water = array.shift();
    let totalWater = days * people * water;
    let food = array.shift();
    let totalFood = days * people * food;
    let dayCount = 0;
    let lastWater = 0;
    let lastFood = 0;
    let isFaild = false;
    for (let i = 0; i < days; i++) {
        dayCount++;
        energy -= array[i];
        if (energy > 0) {
            if (dayCount % 2 === 0) {
                energy *= 1.05;
                totalWater -= (totalWater * 0.3).toFixed(2);
            }
            if (dayCount % 3 === 0) {
                energy *= 1.1;
                totalFood -= (totalFood / people).toFixed(2);
            }
        } else {
            isFaild = true;

            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }
    }
    if (!isFaild) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}
huntingGames([
    '12', '6', '4430',
    '9.8', '5.5', '620.3',
    '840.2', '960.1', '220',
    '340', '674', '365',
    '345.5', '212', '412.12',
    '258', '496', ''
]
)