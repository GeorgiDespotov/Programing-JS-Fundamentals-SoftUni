function schoolLibrary(array) {
    let bookShelf = array.shift().split('&');
    let command = array.shift();
    while (command !== 'Done') {
        let [action, name, secondNmae] = command.split(' | ');
        if (action == 'Add Book') {
            if (!bookShelf.includes(name)) {
                bookShelf.unshift(name);
            }
        } else if (action == 'Take Book') {
            if (bookShelf.includes(name)) {
                bookShelf.splice(bookShelf.indexOf(name), 1);
            }
        } else if (action == 'Swap Books') {
            if (bookShelf.includes(name) && bookShelf.includes(secondNmae)) {
                let indeOne = bookShelf.indexOf(name);
                let indexTwo = bookShelf.indexOf(secondNmae);
                let temp = bookShelf[indeOne];
                bookShelf[indeOne] = bookShelf[indexTwo];
                bookShelf[indexTwo] = temp;
            }
        } else if (action == 'Insert Book') {
            bookShelf.push(name);
        } else if(action == 'Check Book') {
            let index = Number(name);
            if (index < 0 || index >= bookShelf.length) {
                command = array.shift();
                continue
            } else {
                console.log(bookShelf[index]);
            }
        }
        command =array.shift();
    }
    console.log(bookShelf.join(', '));
}
schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ]);