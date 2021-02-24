function counterStrike(array) {
    let energy = Number(array.shift());
    let nextDistance = array.shift();
    let winCount = 0;
    let isFaild = false;
    while (nextDistance !== 'End of battle') {
        nextDistance = Number(nextDistance);
        energy -= nextDistance;
        if (energy >= 0) {
            winCount++;
            if (winCount % 3 === 0) {
                energy += winCount
            }
        } else {
            if (energy < 0) {
                energy += nextDistance;
            }
            console.log(`Not enough energy! Game ends with ${winCount} won battles and ${energy} energy`);
            isFaild = true;
            break;
        }
        nextDistance = array.shift();
    }
    if (!isFaild) {
        console.log(`Won battles: ${winCount}. Energy left: ${energy}`);

    }
}
counterStrike(['200', '54', '14', '28', '13', 'End of battle']);