function solve(array) {
    let actions = {
        AddStop(str, index, string) {
            index = Number(index);
            let result;
            if (index >= 0 && index < str.length) {
                result = str.substring(0, index) + string + str.substring(index);
            }
            console.log(result);
            return result;
        },
        RemoveStop(str, startIndex, endIndex) {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            if (startIndex >= 0 && endIndex < str.length) {
                let subStr = str.substring(startIndex, endIndex + 1);
                str = str.replace(subStr, '');
            }
            console.log(str);
            return str;
        },
        Switch(str, oldStr, newStr) {
            if (str.includes(oldStr)) {
                str = str.replace(oldStr, newStr)
            }
            console.log(str);
            return str;
        }
    };
    let str = array.shift();
    let line;
    while ((line = array.shift()) !== 'Travel') {
        let [command, ...param] = line.split(':')
        command = command.split(' ').join('');
        str = actions[command](str, ...param);
    }

    console.log(`Ready for world tour! Planned stops: ${str}`);
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])