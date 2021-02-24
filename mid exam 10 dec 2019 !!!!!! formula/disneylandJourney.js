function disneylandJourney(array) {
    let excursionCosst = Number(array[0]);
    let mounts = Number(array[1]);
    let moneySaved = 0;
    for (let i = 1; i <= mounts; i++) {
        if (i % 4 === 0) {
            moneySaved += moneySaved * 0.25;
        }
        if (i !== 1 && i % 2 !== 0) {
            moneySaved -= moneySaved * 0.16;
        }
        moneySaved += excursionCosst * 0.25;
    }
    if (excursionCosst <= moneySaved) {
        let souvenirsMoney = moneySaved - excursionCosst;
        console.log(`Bravo! You can go to Disneyland and you will have ${souvenirsMoney.toFixed(2)}lv. for souvenirs.`);
    } else {
        let neededMoney = excursionCosst - moneySaved;
        console.log(`Sorry. You need ${neededMoney.toFixed(2)}lv. more.`); 
    }
}
disneylandJourney(['1000', '4']);