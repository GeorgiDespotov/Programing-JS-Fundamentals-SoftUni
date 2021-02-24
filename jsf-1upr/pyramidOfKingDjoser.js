function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let volume = 0;
    let curentStepMarble = 0;
    let curentStepStone = 0;
    let fiftStepLapis = 0;
    let step = 0;

    for (s = base; s >= 1; s -= 2) {
        step++;
        volume = s * s * increment;
        if (step % 5 === 0 && s > 2) {
            fiftStepLapis = (s * 4 * increment) - (4 * increment);
            lapis += fiftStepLapis;
            curentStepStone = volume - fiftStepLapis;
            stone += curentStepStone;
        } else if (s <= 2) {
            gold = volume;
        } else {
            curentStepMarble = (s * 4 * increment) - (4 * increment);
            curentStepStone = volume - curentStepMarble;
            stone += curentStepStone;
            marble += curentStepMarble;
        }
    }
    let allSteps = step * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(allSteps)}`);
}
solve(11, 1)