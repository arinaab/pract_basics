"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    rememberMyFilms: function () {
        for (let i = 1; i < 3; i++) {
            let lastFilm = prompt('Один из последних фильмов?', '');
            let grade = prompt('На сколько оцените его?', '');
        
            if (lastFilm !== '' && grade !== '' && lastFilm !== null && grade !== null && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = grade;
            } else {
                i--; //возвращаемся на одну итерацию цикла назад, чтобы заново задавать вопросы
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count == 10 || personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) { //hidden - скрытый (true), если НЕскрытый (false) - показываем, если true - не показываем
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let favorGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            
            if (favorGenre !== '' && favorGenre !== null) {
                personalMovieDB.genres.push(favorGenre);
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i+1} - ${item}`);
        });
    },
};

/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toogleVisibleMyDB(); */
