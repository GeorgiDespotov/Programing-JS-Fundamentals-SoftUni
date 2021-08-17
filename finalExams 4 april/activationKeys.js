function solve(array) {
    let actions = {
        Contains(rawKey, sub) {
            if (rawKey.includes(sub)) {
                console.log(`${rawKey} contains ${sub}`);
            } else {
                console.log(`Substring not found!`);
            }
            return rawKey;
        },
        Flip(rawKey, mode, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let thurd = rawKey.substring(end);
            if (mode == 'Upper') {
                result = first + second.toUpperCase() + thurd;
                console.log(result);
            } else {
                result = first + second.toLowerCase() + thurd;
                console.log(result);
            }
            return result;
        },
        Slice(rawKey, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let thurd = rawKey.substring(end);
            let result = first + thurd;
            console.log(result);
            return result;
        }
    }
    let rawKey = array.shift();
    let line;
    while ((line = array.shift()) !== 'Generate') {
        let [actionName, ...params] = line.split('>>>');

        rawKey = actions[actionName](rawKey, ...params);
    }
   
    console.log(`Your activation key is: ${rawKey}`);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])
/*
function solve(array) {
    let rawKey = array.shift();
    let line = array.shift();
    while (line !== 'Generate') {
        let tokens = line.split('>>>');
        if (tokens[0] == 'Contains') {
            let substring = tokens[1];
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (tokens[0] == 'Flip') {
            upLow = tokens[1];
            startIndex = Number(tokens[2]);
            endIndex = Number(tokens[3]);
            let sub = rawKey.substring(startIndex, endIndex);
            if (upLow == 'Upper') {
                //subStr = sub.split('').map(ch => ch.toUpperCase()).join('');
                let subStr = sub.toUpperCase();
                rawKey = rawKey.replace(sub, subStr);
                console.log(rawKey);
            } else {
                //subStr = sub.split('').map(ch => ch.toLowerCase()).join('');
                let subStr = sub.toLowerCase();
                rawKey = rawKey.replace(sub, subStr);
                console.log(rawKey);
            }
        } else if (tokens[0] == 'Slice') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let sub = rawKey.substring(startIndex, endIndex);
            rawKey = rawKey.split(sub).join('');
            console.log(rawKey);
        }
        line = array.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
*/