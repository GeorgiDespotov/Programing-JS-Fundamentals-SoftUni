function solve(array) {
    let str = array.shift();
    let pattern = /([#|\|])(?<name>[A-Za-z ]+)\1(?<date>[\d]{2}([\/])[\d]{2}\4[\d]{2})\1(?<kal>[\d]{1,4}|10000)\1/g;
    let foods = [];
    let match;
    let sumKal = 0;
    while ((match = pattern.exec(str)) !== null) {
        sumKal += Number(match.groups.kal);
        foods.push(match.groups)
    }
    let daysFood = Math.floor(sumKal / 2000);
    console.log(`You have food to last you for: ${daysFood} days!`);
    foods.forEach(el => {
        console.log(`Item: ${el.name}, Best before: ${el.date}, Nutrition: ${el.kal}`);
    })
}
solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])