/*function inventory(array) {
    let inventory = array.shift();
    inventory = inventory.split(', ');
    let command = array.shift();
    while (command !== 'Craft!') {
        let [action, item] = command.split(' - ');
        if (action == 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action == 'Drop') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
            }
        } else if (action == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (inventory.includes(oldItem)) {
                inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem)
            }
        } else {
            if (inventory.includes(item)) {
                let renew = inventory.splice(inventory.indexOf(item), 1);
                inventory.push(renew);
            }
        }
        command = array.shift();
    }
    console.log(inventory.join(', '));
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
*/
function inventory(array) {
    let inventory = array.shift();
    inventory = inventory.split(', ');
    let command = array.shift();
    while (command !== 'Craft!') {
        let [action, item] = command.split(' - ');
        if (action == 'Collect') {
            colect(inventory, item);
        } else if (action == 'Drop') {
            drop(inventory, item);
        } else if (action == 'Combine Items') {
            combineItems(inventory, item);
        } else {
            renew(inventory, item);
        }
        command = array.shift();
    }
    function colect(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item);
        }
    }
    function drop(arr, item) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1);
        }
    }
    function combineItems(arr, item) {
        let [oldItem, newItem] = item.split(':');
        if (arr.includes(oldItem)) {
            arr.splice(arr.indexOf(oldItem) + 1, 0, newItem)
        }
    }
    function renew(arr, item) {
        if (arr.includes(item)) {
            let renew = arr.splice(arr.indexOf(item), 1);
            arr.push(renew);
        }
    }
    return inventory.join(', ')
}
console.log(inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']));