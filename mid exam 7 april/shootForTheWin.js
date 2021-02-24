function shootToWin(array) {
    shootingArr = array.shift().split(' ').map(Number);
    array = array.slice(0, -1).map(Number);
    let shotCounter = 0;
    for (let target of array) {
        if (target >= 0 && target < shootingArr.length && shootingArr[target] !== -1) {
            let temp = shootingArr[target];
            shootingArr[target] = -1;
            shotCounter++;
            shootingArr = shootingArr.map(el => {
                if (el > temp) {
                    return el - temp;
                } else if (el === -1) {
                    return el;
                }
                return el + temp;
            });
        }
    }
    console.log(`Shot targets: ${shotCounter} -> ${shootingArr.join(' ')}`);
}/*
function shootToWin(input) {
    let targets = input.shift().split(' ').map(Number);
 
    let targetsToShoot = input.slice(0, -1).map(Number);
 
    for (let currentTarget of targetsToShoot) {
        if (targets[currentTarget] !== undefined && targets[currentTarget] !== -1) {
            let targetValue = targets[currentTarget];
            targets[currentTarget] = -1;
 
            targets = targets.map(e => {
                if(e === -1) return e;
 
                if (e > targetValue) {
                    return e - targetValue;
                }
                return  e + targetValue;
            });
        }
    }
 
    let shootTargets = targets.filter(e => e === -1).length;
 
    console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`);
}*/
shootToWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])