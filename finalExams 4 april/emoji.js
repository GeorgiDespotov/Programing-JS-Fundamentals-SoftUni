/*function solve(array) {
    let text = array.shift();
    let numRegex = /\d/g;
    let digits = text.match(numRegex);
    let threshold = digits.reduce((a, b) => a * b);
    let emojiRegex = /([:]{2}|[*]{2})[A-Z][a-z]{2,}\1/g;
    let emojiMatch = text.match(emojiRegex);
    let coolEmojies = [];
    emojiMatch.forEach(el => {
        let regexChar = /[a-zA-z]/g
        let match = el.match(regexChar);
        let value = match.map(x => x.charCodeAt(0)).reduce((a, b) => a + b, 0);
        if (value > threshold) {
            coolEmojies.push(el);
        }
    });
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiMatch.length} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));
}*/
function solve(array) {
    let text = array.shift();
    let numRegex = /\d/g;
    let digits = text.match(numRegex);
    let threshold = digits.reduce((a, b) => a * b);
    let emojiRegex = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let match;
    let coolEmojies = [];
    let emojies = 0;
    while ((match = emojiRegex.exec(text)) !== null) {
        emojies++;
        let value = match.groups.word.split('').map(x => x.charCodeAt(0)).reduce((a, b) => a + b, 0);
        if (value > threshold) {
            coolEmojies.push(match[0]);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojies} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])
console.log(`---------`);
solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
])
console.log(`--------`);
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
])