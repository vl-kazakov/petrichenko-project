'use strict';

const box = document.getElementById('box')
const btns = document.getElementsByTagName('button')
const circles = document.getElementsByClassName('circle')
const hearts = document.querySelectorAll('.heart')
const oneHeart = document.querySelector('.heart')
const wrapper = document.querySelector('.wrapper')

// box.style.backgroundColor = 'blue'
// box.style.width = '500px'

btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'

box.style.cssText = 'background-color: blue; width: 500px'

hearts.forEach(el => el.style.backgroundColor = 'blue')

const div = document.createElement('div')
// const text  = document.createTextNode('тут был я')

div.classList.add('black')
wrapper.append(div)
// wrapper.prepend(div)
// hearts[0].after(div)

// circles[0].remove()


// console.log(box)
// console.log(btns[3])
// console.log(circles)

// console.log(hearts)
// console.log(oneHeart)

// hearts[0].replaceWith(circles[0])

div.innerHTML = "<h1>Hello world</h1>"

div.insertAdjacentHTML("beforeend", '<h2>hello</h2>')