let numberOfFilms = 0;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

function detectPersonalLevel () {
    if(numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (numberOfFilms >=10 && numberOfFilms<30){
        alert ("Вы классический зритель");
    } else if (numberOfFilms >= 30){
        alert ('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}
detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i=1; i<=2; i++) {
        let nameOfMovie = prompt('Один из просмотренных фильмов?');

        while (nameOfMovie.length<3 || nameOfMovie == null) {
            nameOfMovie = prompt('Введите, пожалуйста полное название фильма');
        }

        let rateOfMovie = +prompt('на сколько его оцените?');
        while (rateOfMovie<0 || rateOfMovie == null) {
            rateOfMovie = +prompt('на сколько его оцените?');;
        }

        personalMovieDB.movies[nameOfMovie]= rateOfMovie;
    }
}
rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
       console.log(personalMovieDB); 
    }
}
// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
showMyDB();

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();
