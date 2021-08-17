function solve(str) {
    let regex = /([=|\/])(?<word>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        destinations.push(match.groups.word)
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    let travelPoints = 0;
    destinations.forEach(el => {
        travelPoints += el.length;
    });
    console.log(`Travel Points: ${travelPoints}`);
}
solve('ThisIs some InvalidInput')