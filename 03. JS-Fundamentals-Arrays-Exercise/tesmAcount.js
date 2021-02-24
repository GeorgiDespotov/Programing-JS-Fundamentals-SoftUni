function solve(array) {
    let account = array[0].split(' ');
    array.shift();
    let index = 0;
    let command = array[index];
    while (command !== 'Play!') {
        let currenComand = command.split(' ');
        let action = currenComand[0];
        let game = currenComand[1];
        
        if (action === 'Install') {
            if(!account.includes(game)) {
                account.push(game);
            }
        } else if (action === 'Uninstall') {
            if(account.includes(game)) {
                let char = account.indexOf(game);
                account.splice(char,1);
            }
        } else if (action === 'Expansion') {
            let ex = game.split('-');
            let firstHalf = ex[0];
            if (account.includes(firstHalf)) {
                let extGame = ex.join(':');
                let char = account.indexOf(firstHalf);
                account.splice(char + 1, 0, extGame)
            }
        } else if (action === 'Update') {
            if (account.includes(game)) {
                let char = account.indexOf(game);
                account.splice(char,1);
                account.push(game);
            }
        }
        index++;
        command = array[index];
    }
    console.log(account.join(' '));
}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);