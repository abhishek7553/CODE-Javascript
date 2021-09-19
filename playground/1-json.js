// const fs = require('fs');

// // const book = {
// //     title : "ego is the enemy",
// //     author : "ryan holiday"
// // }

// // //console.log(book)

// // const bookJSON = JSON.stringify(
// //     book
// // )

// // fs.writeFileSync("1-json.json",bookJSON)

// const bufferData = fs.readFileSync("1-json.json")

// console.log(bufferData)

// console.log(bufferData.toString())


// //console.log(bookJSON)

// //const parseData = JSON.parse(bookJSON)

// //console.log(parseData.author)

const fs = require('fs');
const { parse } = require('path');

const bufferData = fs.readFileSync("1-json.json")
const dataJSON = bufferData.toString()
const parseData = JSON.parse(dataJSON)

parseData.name="ABHISHEK"
parseData.age="21"

const changedData = JSON.stringify(parseData)

fs.writeFileSync("1-json.json",changedData)

