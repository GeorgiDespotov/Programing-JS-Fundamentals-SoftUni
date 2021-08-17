function solve(array) {
    let instruction = {
        Contains(rawKey, subStr) {
            if (rawKey.includes(subStr)) {
                console.log(`${rawKey} contains ${subStr}`);
            } else {
                console.log(`Substring not found!`);
            }
            return rawKey;
        },
        Flip(rawKey, mode, startI, endI) {
            [startI, endI] = [Number(startI), Number(endI)];
            let first = rawKey.substring(0, startI);
            let second = rawKey.substring(startI, endI);
            let thurth = rawKey.substring(endI);
            if (mode == 'Upper') {
                second = second.toUpperCase();
            } else {
                second = second.toLowerCase();
            }
            let result = first + second + thurth;
            console.log(result);
            return result;
        },
        Slice(rawKey, startI, endI) {
            [startI, endI] = [Number(startI), Number(endI)];
            let subStr = rawKey.substring(startI, endI);
            let result = rawKey.replace(subStr, '');
            console.log(result);
            return result;
        }
    };
    let rawKey = array.shift();
    let line;
    while ((line = array.shift()) !== 'Generate') {
        let [command, ...param] = line.split('>>>');
        rawKey = instruction[command](rawKey, ...param);
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
]);
console.log(`--------`);
solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);