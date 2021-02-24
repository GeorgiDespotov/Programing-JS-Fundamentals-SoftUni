function solve(array) {
    let chest = array.shift().split('|');
    let command = array.shift();
    
    
    while (command !== 'Yohoho!') {
        let token = command.split(' ');
        let action = token[0];
        if (action == 'Loot') {
            for (i = 1; i < token.length; i++) {
                if (!chest.includes(token[i])) {
                    chest.unshift(token[i]);
                }
            }
        } else if (action == 'Drop') {
            let index = Number(token[1]);
            if (index >= 0 && index < chest.length) {
                let item = chest[index];
                chest.splice(index, 1);
                chest.push(item);
            }
        } else if (action == 'Steal') {
            let count = Number(token[1]);
            if (count >= chest.length) {
                console.log(chest.join(', '));
                chest.splice(-chest);
                
            } else {
               
                let = stolenItems = chest.splice(-count);
              
                console.log(stolenItems.join(', '));

            }
        }
        command = array.shift();
    }
    let sum = 0;
    chest.forEach(item => sum += item.length);
    let total = sum / chest.length;
    
    if (chest.length < 1) {
       
        console.log(`Failed treasure hunt.`);
    } else {
        
        
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
    }
}
solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

