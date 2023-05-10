const personalMovieDB = {
    count: 0,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    

    detectPersonalLevel () {
        if(personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >=10 && personalMovieDB.count<30){
            alert ("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },

    movies: {},

    rememberMyFilms() {
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
    },

    actors: {},

    genres: [],

    writeYourGenres() {
        for (let i=1; i<=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`)
        });   
    },
    privat: false,
    toggleVisibleMyDB() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
           console.log(personalMovieDB); 
        }
    }
};


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();