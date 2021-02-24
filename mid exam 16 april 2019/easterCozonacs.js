function easterCozonacs(array) {
    array = array.map(Number);
    let [budget, flourPrice] = array;
    let priceEggs = flourPrice * 0.75;
    let milkNeeded = (flourPrice * 1.25) / 4;
    let cozonacPrice = flourPrice + priceEggs + milkNeeded;
    countCozonac = 0;
    let coloredEgs = 0;
    while (budget - cozonacPrice >= 0) {
        budget -= cozonacPrice;
        countCozonac++;
        coloredEgs += 3;
        if (countCozonac % 3 === 0) {
            coloredEgs -= countCozonac - 2;
        }
    }
    console.log(`You made ${countCozonac} cozonacs! Now you have ${coloredEgs} eggs and ${budget.toFixed(2)}BGN left.`);
}
easterCozonacs(['20.50', '1.25'])