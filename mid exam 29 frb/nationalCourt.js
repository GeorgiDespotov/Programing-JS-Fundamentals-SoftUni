function nationalCourt(array) {
    array = array.map(Number);
    let questioons = array.pop();
    let [firstEmploy, secondEmploy, thurthEmploy] = array;
    let employCapacity = firstEmploy + secondEmploy + thurthEmploy;
    let houers = 0;
    while (questioons > 0) {
        houers++;
        if (houers % 4 !== 0) {
            questioons -= employCapacity;
        }
    }
    console.log(`Time needed: ${houers}h.`);
}
nationalCourt(['5', '6', '4', '20']);