'use strict'

// const now = new Date('2023-04-15')
// new Date.parse('2023-04-15')
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getUTCHours())
// console.log(now.getHours())
// now.parse('2023-04-15')

// console.log(now.getTimezoneOffset())

let start = new Date()

for (let i = 0; i < 100000; i++) {
  let some = i ** 3
}
let end = new Date() - start

console.log(start)
console.log(end)