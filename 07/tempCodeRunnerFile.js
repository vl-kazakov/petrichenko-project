'use strict';

const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
}


console.log(personalMovieDB.privat)