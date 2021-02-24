function solve(days, plunderDay, expected) {
    let totalPlunder = 0;
    let isDone = false;
    for (i = 1; i <= days; i++) {
        totalPlunder += plunderDay;
        if (i % 3 === 0) {
            totalPlunder += plunderDay * 0.5;
        }
        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
        
    }
    if (totalPlunder < expected) {
        let pr = (totalPlunder / expected) * 100;
        console.log(`Collected only ${pr.toFixed(2)}% of the plunder.`);
    } else {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
}
solve(10,20,380)