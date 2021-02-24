function solve(distance, passengers, priceFuel){
    let fuelNeeded = ((distance / 100) * 7);
    fuelNeeded += passengers * 0.100;
    let moneyForFuel = priceFuel * fuelNeeded;
    console.log(`Needed money for that trip is ${moneyForFuel}lv.`);

}
solve(90, 14, 2.88)