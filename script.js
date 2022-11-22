console.log('Hi')

let variable = 'Hello'
console.log(variable) // 'Hello'
variable = 'Bye'
console.log(variable) // 'Bye'

variable = 1 + 1
console.log(variable) // 2
variable = 1 - 1
console.log(variable) // 0
variable = 2 * 2
console.log(variable) // 4
variable = 2 / 2
console.log(variable) // 1

console.log(variable == 1) // true
console.log(variable != 1) // false
console.log(variable < 1) // false
console.log(variable <= 1) // false

// variable = 1.01
if (variable > 1) {
  console.log('yes, ' + variable + ' is greater than 1')
} else {
  console.log('no, '+ variable + ' is equal or smaller than 1')
}

function greaterOrSmaller (a, b) {
  if (a > b) {
    return a + ' is greater than ' + b
  } else {
    return a + ' is smaller than ' + b
  }
}
console.log(greaterOrSmaller(2, 1)) // '2 is greater than 1'
console.log(greaterOrSmaller(1, 2)) // '1 is smaller than 2'

function howLong (word) {
  let wordLength = word.length
  console.log(wordLength)
}
howLong('Hello') // 5
// console.log(wordLength)



let array = [100, 200, 300]
console.log(array.length)
console.log(array[0])
console.log(array[1])
console.log(array[2])

array.push('apple')
console.log(array)

array.pop()
console.log(array)

for (let index = 0; index < array.length; index++) {
  console.log(index, array[index])
}
