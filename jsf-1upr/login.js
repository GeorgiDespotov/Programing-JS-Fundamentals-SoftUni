function solve(arr) {
    let username = arr.shift();
    let pass = username.split('').reverse().join('');
    let i = 0;
    let command = arr[i];
    let counter = 0;
    let isBlocked = false;

    while (command !== pass) {
        counter++;
        if (counter == 4) {
            isBlocked = true;
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        i++;
        command = arr[i];
    }
    if (!isBlocked) {
        console.log(`User ${username} logged in.`);
    }
}
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])