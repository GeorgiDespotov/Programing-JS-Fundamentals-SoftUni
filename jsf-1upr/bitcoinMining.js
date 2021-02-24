function solve(arr) {
    let day = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let bouthBitcoins = 0;
    let dayOfPurches = 0;
    let count = 0;
    let bitcoinpurches = 0;

    for (i = 0; i < arr.length; i++) {
        day++;
        if (day % 3 === 0) {
            money += (arr[i] * 0.7) * goldPrice;
        } else {
            money += arr[i] * goldPrice;
        }
        if (money >= bitcoinPrice) {
            bitcoinpurches = Math.floor(money / bitcoinPrice);
            bouthBitcoins += bitcoinpurches;
            money -= bitcoinpurches * bitcoinPrice;
            count++;
        }
        if (count === 1) {
            dayOfPurches = day;
        }
    }
    console.log(`Bought bitcoins: ${Math.floor(bouthBitcoins)}`);
    if (dayOfPurches > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfPurches}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124])