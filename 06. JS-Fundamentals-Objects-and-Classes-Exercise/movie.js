function movie(array) {
    movies = [];

    for (const line of array) {
        if (line.includes('addMovie')) {
            let = nextMovie = {};
            let movieName = line.substring(9);
            nextMovie.name = movieName;
            movies.push(nextMovie);
        } else if (line.includes('directedBy')) {
            let [nameMovie, directorName] = line.split(' directedBy ');
            movies.find(o => {
                if (o.name === nameMovie) {
                    o.director = directorName;
                }
            });
        } else {
            let [nameMovie, date] = line.split(' onDate ');
            movies.find(o => {
                if (o.name === nameMovie) {
                    o.date = date;
                }
            });
        }
    }
    movies.forEach(x => {
        if (x.name && x.director && x.date) {
            console.log(JSON.stringify(x));
        }
    });
}
movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)