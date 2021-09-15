const fs =  require('fs')

fs.writeFileSync('demo-notes.txt','This file was created by Node.js!')

fs.appendFileSync('demo-notes.txt','. DATE - 15 SEPT 2021')