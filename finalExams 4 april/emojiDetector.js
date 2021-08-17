function solve(array) {
    let text = array[0];
    let numRegex = /\d/g;
    let allDigits = text.match(numRegex);
    let threshold = allDigits.reduce((a, b) => a * b);
    let emojiRegex = /([:]{2}|[*]{2})(?<word>[A-Z]{1}[a-z]{2,})\1/g;
    let validEmojies = text.match(emojiRegex);
    let emojies = [];
    for (const emoji of validEmojies) {
        let charRegex = /[a-zA-Z]/g;
        let chars = emoji.match(charRegex);
        if (chars) {
            let nums = chars.map(el => el.charCodeAt(0)).reduce((a, b) => a + b);
            if (nums >= threshold) {
                emojies.push(emoji)
            }
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${validEmojies.length} emojis found in the text. The cool ones are:`);
    console.log(emojies.join('\n'));
}
solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
])