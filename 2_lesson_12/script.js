const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}; 

const a = prompt('Какой фильм ты посмотрел за последнее время?', ''),
      b = prompt("Как оцените его? ", ""),
      c = prompt('Какой фильм ты посмотрел за последнее время?', ''),
      d = prompt("Как оцените его? ", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
