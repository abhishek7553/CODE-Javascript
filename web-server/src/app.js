const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') 
const partialsPath = path.join(__dirname, '../templates/partials') 

app.set('views',viewsPath );
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Ayush'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ayush'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'help ',
        name: 'Ayush'
    })
})

app.get('/weather', (req, res) => {
    res.render('weather',{
        forecast: 'It is snowing',
        location: 'Ranchi',
        name: 'Ayush',
        title:'Weather'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})