function easterGifts(array) {
    let giftList = array.shift().split(' ');
    let command = array.shift();
    while (command !== 'No Money') {
        let [action, gift, index] = command.split(' ');
        if (action == 'OutOfStock') {
            if (giftList.includes(gift)) {
                giftList.forEach(el => {
                    if (el == gift) {
                        giftList.splice(giftList.indexOf(el), 1, 'None');
                    }
                });
            }
        } else if (action == 'Required') {
            index = Number(index);
            if (index >= 0 && index < giftList.length) {

                giftList[index] = gift;
            }
        } else if (action == 'JustInCase') {
            giftList.pop();
            giftList.push(gift);
        }
        command = array.shift();
    }

    let result = giftList.filter(x => x !== 'None')
    console.log(result.join(' '));
}
easterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes Clothes Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
])