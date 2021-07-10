"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
if (numberOfFilms < 10) {
    console.log('Вы посмотрели мало фильмов');
}else if (numberOfFilms > 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
}else if (numberOfFilms > 30) {
    console.log('Вы киноман!');
}else {
    console.log('Error!');
}



const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}; 

for (let i = 0; i < 2; i++) {
    const   a = prompt('Какой фильм ты посмотрел за последнее время?', ''),
            b = prompt("Как оцените его? ", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

}


console.log(personalMovieDB);

