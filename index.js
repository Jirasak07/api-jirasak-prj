var express = require('express')
var cors = require('cors')
var app = express()
const mysql = require('mysql2')

const connection =mysql.createConnection({
    host:'localhost'
    ,user:'root',
    database:'equipmentdb'
})
app.use(cors())
app.get('/',function(req,res,next){
    res.json('hi this is API')
})

app.listen(5409,function(){
    console.log('CORS PORT 85')
})