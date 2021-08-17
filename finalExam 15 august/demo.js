let a = '555aaaa5555'
let reg = /[\d]+(?<word>[a-z]+)[\d]+/g;
let match = a.match(reg);
if (match) {
    console.log(match.groups.word);
}