const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if(numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (numberOfFilms >=10 && numberOfFilms<30){
    alert ("Вы классический зритель");
} else if (numberOfFilms >= 30){
    alert ('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i=1; i<=2; i++) {
    let nameOfMovie = prompt('Один из просмотренных фильмов?');

    if (nameOfMovie.length<3) {
        nameOfMovie = prompt('Введите, пожалуйста полное название фильма');
    }

    let rateOfMovie = +prompt('на сколько его оцените?');

    personalMovieDB.movies[nameOfMovie]= rateOfMovie;


}

console.log(personalMovieDB);