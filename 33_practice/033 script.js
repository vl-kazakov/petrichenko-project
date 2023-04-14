/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
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
})