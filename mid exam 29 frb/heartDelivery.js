function heartDelivery(array) {
    let houses = array.shift();
    houses = houses.split('@').map(Number);
    let line = array.shift();
    let qupidPosition = 0;
    while (line !== 'Love!') {
        let [action, position] = line.split(' ');
        qupidPosition += Number(position);
        if (qupidPosition > houses.length - 1) {
            qupidPosition = 0;
        }
        if (houses[qupidPosition] === 0) {
            console.log(`Place ${qupidPosition} already had Valentine's day.`);
        } else {
            houses[qupidPosition] -= 2;
            if (houses[qupidPosition] === 0) {
                console.log(`Place ${qupidPosition} has Valentine's day.`);
            }
        }
        line = array.shift();
    }
    console.log(`Cupid's last position was ${qupidPosition}.`);

    let houseCount = 0;
    let isFaild = false;
    for (const house of houses) {
        if (house !== 0) {
            houseCount++;
            isFaild = true;
        }
    }
    if (isFaild) {
        console.log(`Cupid has failed ${houseCount} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}
heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])