"use strict";

let numberOfFilms;

// Начало опроса, с элементами валидации

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}



const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}; 



//Запоминает фильмы которые просмотрел пользователь

function rememberMyFilms() {
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
}



// определяет уровень зрителя по кол-ву просмотренных фильмов

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Вы посмотрели мало фильмов');
    }else if (numberOfFilms > 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    }else if (numberOfFilms > 30) {
        console.log('Вы киноман!');
    }else {
        console.log('Error!');
    }
}


// Если в свойстве privat==false, то выводить главный объект

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


// запоминает любимый жанр пользователя

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}




/*start();
rememberMyFilms();
detectPersonalLevel();*/
showMyDB(personalMovieDB.privat);
writeYourGenres();



