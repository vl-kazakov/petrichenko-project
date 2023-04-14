l/* Задания на урок:






4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const promo = document.querySelectorAll('.promo__adv img')
const poster = document.querySelector('.promo__bg')
const genre = poster.querySelector('.promo__genre')
const filmList = document.querySelector('.promo__interactive-list')

promo.forEach(el => el.remove())

genre.textContent = "драмма"

poster.style.backgroundImage = 'url("img/bg.jpg")'

movieDB.movies.sort()

filmList.innrHTML = ''

filmList.movies.forEach((film, i) => {
  filmList.innerHTML += `
    <li class="promo__integrative__item>${i + 1} ${film}
      <div class="delete"></div>
   </li>
  `
})






// promo.forEach(el => el.remove())

