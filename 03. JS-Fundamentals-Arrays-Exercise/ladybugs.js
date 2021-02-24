function solve(array) {
    let field = [];
    field.length = array[0];
    for (let i = 0; i < field.length; i++) {
        field[i] = 0;
    }
    let bugsPlaces = array[1].split(' ');
    for (const position of bugsPlaces) {
        if( position < field.length - 1 && position >= 0) {
            field[position] = 1;
        }
    }
    array.shift();
    array.shift();
    for (let k = 0; k < array.length; k++) {
        let move = array[i].split(' ');
        let start = Number(move[0]);
        let direction = move[1];
        let length = Number(move[2]);
        if (field[start] === 1) {
            field[start] = 0;
            switch(direction) {
                case 'rigth':
                    for (let j = 0; j < array.length; j++) {
                    }
            }
        } 
        
    }
    console.log(field);
}
solve([ 3, '0 1','0 right 1','2 right 1' ])