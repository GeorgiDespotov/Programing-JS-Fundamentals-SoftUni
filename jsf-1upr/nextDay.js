function solve(y, m, d) {
    let date = new Date(y, m -= 1, d += 1);
    let newYear = date.getFullYear();
    let neMonth = date.getMonth();
    let newDate = date.getDate();

    console.log(`${newYear}-${neMonth + 1}-${newDate}`);
}
solve(1984, 10, 25)