function solve(array) {
    let instructions = {
        Move(message, numLetters) {
            numLetters = Number(numLetters);
            let subStr = message.substring(0, numLetters);
            let otherHalf = message.substring(numLetters);
            let result = otherHalf + subStr;
            return result;
        },
        Insert(message, index, value) {
            index = Number(index);
            let result = message.substring(0, index) + value + message.substring(index);
            return result;

        },
        ChangeAll(message, subStr, newStr) {
            while (message.includes(subStr)) {
                message = message.replace(subStr, newStr);
            }
            return message;
        }
    };
    let message = array.shift();
    let line;
    while ((line = array.shift()) !== 'Decode') {
        let [command, ...param] = line.split('|');
        message = instructions[command](message, ...param);
    }

    console.log(`The decrypted message is: ${message}`);
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)