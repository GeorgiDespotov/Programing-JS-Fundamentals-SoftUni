function halloFrance(array) {
    let market = array.shift().split('|');
    let budget = Number(array.shift());
    let shopingBag = [];
    let sumSpend = 0;
    let sumProfit = 0;
    for (const el of market) {
        let [item, price] = el.split('->');
        price = Number(price);
        let isValid = false;
        switch (item) {
            case 'Clothes':
                if (price <= 50) {
                    isValid = true;
                }
                break;
            case 'Shoes':
                if (price <= 35) {
                    isValid = true;
                }
                break;
            case 'Accessories':
                if (price <= 20.50) {
                    isValid = true;
                }
        }
        if (isValid) {
            if (budget - price >= 0) {
                budget -= price;
                sumSpend += price;
                let nwePrice = price * 1.4;
                sumProfit += nwePrice;
                shopingBag.push(nwePrice.toFixed(2));
            } else {
                continue
            }
        }
    }
    if (sumProfit + budget >= 150) {
        console.log(shopingBag.join(' '));
        console.log(`Profit: ${(sumProfit - sumSpend).toFixed(2)}`);
        console.log(`Hello, France!`);
    } else {
        console.log(shopingBag.join(' '));
        console.log(`Profit: ${(sumProfit - sumSpend).toFixed(2)}`);
        console.log(`Time to go.`);
    }
}
halloFrance([
    'Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
]
)