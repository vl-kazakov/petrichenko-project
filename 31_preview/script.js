const btn = document.querySelectorAll('button')
const overlay = document.querySelector('.overlay')

let i = 0

const deleteElement = (event) => {
  console.log(event.currentTarget)
  console.log(event.type)

  // i++
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement)
  // }
  // event.target.remove()
}
// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)


btn.forEach(btn => {
  btn.addEventListener('click', deleteElement, { once: true })
})


const link = document.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event.target)
})