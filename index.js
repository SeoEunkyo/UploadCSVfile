const express = require('express')
const logger = require('morgan')
const app  = express()
const bodyParser = require('body-parser')
const router = express.Router()
//var upload = multer({ dest: 'uploads/' })
//const user = require('./api/user')


app.use(logger('dev'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//app.use(express.static(__dirname+'/public'));
//console.log(__dirname)
// app.use('/users',user)
app.set('views', './views_file')
app.set('view engine', 'jade')


app.get('/',(req,res) => {
    res.render('index')
} )
app.post('/updatefile',(req,res) => {
    // DB에 업데이트 하면 된다 .. 
    const arrData = req.body.data

    arrData.forEach(element => {
        console.log(element)
    });
    res.end('OK')
} )



module.exports = app