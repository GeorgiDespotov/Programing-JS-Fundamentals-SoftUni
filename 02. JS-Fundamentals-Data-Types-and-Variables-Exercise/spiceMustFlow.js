function solve(yield) {
    let dayCounter = 0;
    let spices = 0;

    while (yield >= 100) {
        dayCounter++;
        spices += yield - 26;
        yield -= 10;
    }
    if (spices >= 26) { 
        spices -= 26; 
    }
    console.log(dayCounter);
    console.log(spices);
}
solve(111);