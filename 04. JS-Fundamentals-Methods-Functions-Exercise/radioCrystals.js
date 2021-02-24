function radioCrystals(array) {

    for (i = 1; i < array.length; i++) {
        console.log(`Processing chunk ${array[i]} microns`);
        let processedCrystal = array[i];
        if (processedCrystal / 4 >= array[0]) {
            let cutCount = 0;
            while (processedCrystal >= array[0] - 1) {
                let afterCut = processedCrystal / 4;
                cutCount++;
                if (afterCut >= array[0] - 1) {
                    processedCrystal = afterCut;
                }
                if (afterCut == array[0]) {
                    console.log(`Cut x${cutCount}`);
                    console.log(`Transporting and washing`);
                    console.log(`Finished crystal ${array[0]} microns`);
                    break;
                }
                if (afterCut < array[0] - 1) {
                    cutCount -= 1;
                    console.log(`Cut x${cutCount}`);
                    console.log(`Transporting and washing`);
                    break;
                }
            }
        }
        processedCrystal = Math.floor(processedCrystal);
        if (processedCrystal * 0.8 >= array[0]) {
            let lapCounter = 0;
            while (processedCrystal >= array[0] - 1) {
                let afterLap = processedCrystal * 0.8;
                lapCounter++;
                if (afterLap >= array[0] - 1) {
                    processedCrystal = afterLap;
                }
                if (afterLap == array[0]) {
                    console.log(`Lap x${lapCounter}`);
                    console.log(`Transporting and washing`);
                    console.log(`Finished crystal ${array[0]} microns`);
                    break;
                }
                if (afterLap < array[0] - 1) {
                    lapCounter -= 1;
                    console.log(`Lap x${lapCounter}`);
                    console.log(`Transporting and washing`);
                    break;
                }
            }
        }
        processedCrystal = Math.floor(processedCrystal);
        if (processedCrystal - 20 >= array[0]) {
            let grindCount = 0;
            while (processedCrystal >= array[0] - 1) {
                let afterGrind = processedCrystal - 20;
                grindCount++;
                if (afterGrind >= array[0] - 1) {
                    processedCrystal = afterGrind;
                }
                if (afterGrind == array[0]) {
                    console.log(`Grind x${grindCount}`);
                    console.log(`Transporting and washing`);
                    console.log(`Finished crystal ${array[0]} microns`);
                    break;
                }
                if (afterGrind < array[0] - 1) {
                    grindCount -= 1;
                    console.log(`Grind x${grindCount}`);
                    console.log(`Transporting and washing`);
                    break;
                }
            }
        }
        processedCrystal = Math.floor(processedCrystal);
        if (processedCrystal - 2 >= array[0]) {
            let etchCount = 0;
            while (processedCrystal >= array[0] - 1) {
                let afterEtch = processedCrystal - 2;
                etchCount++;
                if (afterEtch >= array[0] - 1) {
                    processedCrystal = afterEtch;
                }
                if (afterEtch == array[0]) {
                    console.log(`Etch x${etchCount}`);
                    console.log(`Transporting and washing`);
                    console.log(`Finished crystal ${array[0]} microns`);
                    break;
                }
                if (afterEtch < array[0] - 1) {
                    etchCount -= 1;
                    console.log(`Etch x${etchCount}`);
                    console.log(`Transporting and washing`);
                    break;
                }
            }
        }
        processedCrystal = Math.floor(processedCrystal);
        if (processedCrystal == array[0] - 1) {
            processedCrystal += 1;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${array[0]} microns`);
        }
    }
}
radioCrystals([1000, 4000, 8100]);