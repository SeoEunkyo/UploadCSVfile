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
    var updateList = {}

    arrData.forEach(element => {
        var modelsuffix = element.Model + '.' + element.Suffix
        var updateItem = {'itemName' : element.Item , 'value' : element.Value}
        //updateItem[element.Item] = element.Value

        if(updateList.hasOwnProperty(modelsuffix)){
            updateList[modelsuffix].push(updateItem)
        }else{
            var updateItemList = [updateItem]
            updateList[modelsuffix] = updateItemList
        }
        
    });

    for(var key in updateList){
        console.log("key : " + key)
        //console.log("vale :" + updateList[key])
        updateList[key].forEach(element => {
            console.log('itemName : ' + element['itemName'] + ', Value : ' + element['value'])
        })
    }



    res.end('OK')
} )



module.exports = app