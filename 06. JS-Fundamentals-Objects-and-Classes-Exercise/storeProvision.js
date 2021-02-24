function storeProvision(stock, ordered) {
    let shop = {};
    for (let i = 0; i < stock.length; i += 2) {
        let item = stock[i];
        shop[item] = Number(stock[i + 1]);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        let item = ordered[i];
        if (!shop.hasOwnProperty(item)) {
            shop[item] = Number(ordered[i + 1]);
        } else {
            shop[item] += Number(ordered[i + 1]);
        }
    }
    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    });
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)