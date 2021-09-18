const validator = require('validator')

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('abhishek@example.com'))
console.log(validator.isEmail('example.com'))

console.log(validator.isURL('https://sept.io'))
console.log(validator.isURL('https/google.com'))