var express = require('express')
var request = require('request')
var logger = require('morgan')
var passport = require('passport')
var session = require('express-session')

var app = express()

//configure db
require('./config/database')
//configure passport
require('./config/facebook')

app.use(session({ secret: 'Albus Dumbledore' }));
app.use(passport.initialize());
app.use(passport.session());


//serve static html files
app.use(express.static(__dirname + '/public'))


//log requests
app.use(logger('dev'));


//attach routers to app
var apiRouters = require('./routes/apiRouters')
var indexRouter = require('./routes/indexRouter')

app.use('/api/airdata/', apiRouters.airData )
app.use('/api/user/', apiRouters.user )
app.use('/auth/', require('./routes/authRouter'))
app.use('/', indexRouter)


var port = process.env.PORT || 1234
app.listen(port, function(){
    console.log("listening to " + port)
})