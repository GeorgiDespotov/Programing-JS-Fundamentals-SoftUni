function solve(array) {
    let actions = {
        TakeOdd(rawPass) {
            let result = '';
            for (let i = 1; i < rawPass.length; i += 2) {
                result += rawPass[i];
            }
            console.log(result);
            return result;
        },
        Cut(rawPass, index, length) {
            [index, length] = [Number(index), Number(length)];
            let subStr = rawPass.substring(index, index + length);
            let result = rawPass.replace(subStr, '');
            console.log(result);
            return result;
        },
        Substitute(rawPass, substring, substitute) {
            let result;
            if (rawPass.includes(substring)) {
                while (rawPass.includes(substring)) {
                    result = rawPass.replace(substring, substitute);
                    rawPass = result;
                }
                console.log(result);
                return result;
            } else {
                console.log(`Nothing to replace!`);
                return rawPass;
            }
        }
    };
    let rawPass = array.shift();
    let line;
    while ((line = array.shift()) !== 'Done') {
        let [command, ...param] = line.split(' ');
        rawPass = actions[command](rawPass, ...param);
    }
    console.log(`Your password is: ${rawPass}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])
console.log(`--------`);
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
])