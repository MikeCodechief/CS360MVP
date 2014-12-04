var express = require('express')
var request = require('request')
var logger = require('morgan');

var app = express()

//serve static html files
app.use(express.static(__dirname + '/public'))

//log requests
app.use(logger('dev'));

//attach routers to app
app.use('/api/', require('./routes/api'))
app.use('/', require('./routes/index'))

var port = process.env.PORT || 1234
app.listen(port, function(){
    console.log("listening to " + port)
})