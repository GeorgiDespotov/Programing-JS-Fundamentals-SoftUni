function easterShoping(array) {
    let shopingList = array.shift().split(' ');
    let places = Number(array.shift());
    for (let i = 0; i < places; i++) {
        let token = array[i].split(' ');
        if (token[0] == 'Include') {
            shopingList.push(token[1]);
        } else if (token[0] == 'Visit') {
            if (token[2] <= shopingList.length) {
                if (token[1] == 'first') {
                    shopingList.splice(0, token[2]);
                } else {
                    shopingList.splice(shopingList.length - token[2], token[2]);
                }
            }
        } else if (token[0] == 'Prefer') {
            if (token[1] >= 0 && token[2] >= 0 && token[1] < shopingList.length && token[2] < shopingList.length) {
                let temp = shopingList[token[1]];
                shopingList[token[1]] = shopingList[token[2]];
                shopingList[token[2]] = temp;
            }
        } else if (token[0] == 'Place') {
            token[2] = Number(token[2]);
            if (token[2] + 1 >= 0 && token[2] + 1 < shopingList.length) {
                shopingList.splice(token[2] + 1, 0, token[1])
            }
        }
    }

    console.log(`Shops left:\n${shopingList.join(' ')}`);
}
easterShoping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]
)