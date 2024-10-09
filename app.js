var express = require('express')
var svgCaptcha = require('svg-captcha')
var port = 8080
var app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/getimage', function(req, res) {
    const captcha = svgCaptcha.create();
    res.type('svg')
    res.send(captcha.data)
})

app.get('/', function(req, res) {
    res.render('home.ejs')
})

app.post('/form', function(req, res) {
    var robotfield = req.body.robottest
    if (!robotfield) {
        return res.send('Did you do the robot test??')
    }
    res.send('Completed! Thank you for submitting!')
})

app.listen(port, function() {
    console.log(`Server is listening on ${port}`)
})