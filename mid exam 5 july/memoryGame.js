function memoryGame(array) {
    let board = array.shift().split(' ');
    let line = array.shift();
    let moves = 0;
    let isWon = false;
    while (line !== "end") {
        let token = line.split(' ');
        token = token.map(Number);
        moves++;
        if ((token[0] || token[1]) < 0 || (token[0] || token[1]) >= board.length || token[0] == token[1]) {
            board.splice(board.length / 2, 0, `-${moves}a`, `-${moves}a`)
            console.log(`Invalid input! Adding additional elements to the board`);
            line = array.shift();
            continue
        }
        if (board[token[0]] == board[token[1]]) {
            console.log(`Congrats! You have found matching elements - ${board[token[0]]}!`);
            board.splice(token[0], 1);
            if (token[0] > token[1]) {
                board.splice(token[1], 1);
            } else {
                board.splice(token[1] - 1, 1);
            }
        } else {
            console.log(`Try again!`);
        }
        if (board.length === 0) {
            isWon = true;
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        line = array.shift();
    }
    if (!isWon) {
        console.log(`Sorry you lose :(`);
        console.log(board.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"

]
)