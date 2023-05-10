const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const nameOfMovie1 = prompt('Один из просмотренных фильмов?'),
      rateOfMovie1 = +prompt('на сколько его оцените?'),
      nameOfMovie2 = prompt('Один из просмотренных фильмов?'),
      rateOfMovie2 = +prompt('на сколько его оцените?');

personalMovieDB.movies[nameOfMovie1] = rateOfMovie1;
personalMovieDB.movies[nameOfMovie2] = rateOfMovie2;

console.log(personalMovieDB);