function solve(array) {
    let rawPass = array.shift();
    let actions = {
        TakeOdd(rawPass) {
            let result = '';
            for (i = 1; i < rawPass.length; i += 2) {
                result += rawPass[i];
            }
            console.log(result);
            return result;
        },
        Cut(rawPass, index, length) {
            [index, length] = [Number(index), Number(length)];
            let str = rawPass.substring(index, index + length);
            let result = rawPass.replace(str, ' ').split(' ').join('');
            console.log(result);
            return result;
        },
        Substitute(rawPass, subStr, substitute) {
            if (rawPass.includes(subStr)) {
                while (rawPass.includes(subStr)) {
                    rawPass = rawPass.replace(subStr, substitute);
                }
                console.log(rawPass);
                return rawPass
            } else {
                console.log(`Nothing to replace!`);
                return rawPass
            }
        }
    };

    let line;
    while ((line = array.shift()) !== 'Done') {
        let [command, ...param] = line.split(' ');
        rawPass = actions[command](rawPass, ...param)
    }

    console.log(`Your password is: ${rawPass}`);
}
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
])