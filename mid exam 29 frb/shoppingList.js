function shoppingList(array) {
    let list = array.shift();
    list = list.split('!');
    let line = array.shift();
    while (line !== 'Go Shopping!') {
        let [action, product, newProduct] = line.split(' ');
        switch (action) {
            case 'Urgent':
                urgent(list, product);
                break;
            case 'Unnecessary':
                unnecessary(list, product);
                break;
            case 'Correct':
                correct(list, product, newProduct);
                break;
            case 'Rearrange':
                rearrange(list, product);
                break;
        }
        line = array.shift();
    }
    function urgent(arr, item) {
        if (!arr.includes(item)) {
            arr.unshift(item);
        }
    }
    function unnecessary(arr, item) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1);
        }
    }
    function correct(arr, item, newItem) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1, newItem);
        }
    }
    function rearrange(arr, item) {
        if (arr.includes(item)) {
            let temp = arr.splice(arr.indexOf(item), 1);
            arr.push(temp);
        }
    }
    return list.join(', ');
}
console.log(shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]));