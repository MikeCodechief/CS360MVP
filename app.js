var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()
app.use(cookieParser)

function isAuthenticated(req, res, next){
    console.log(req.cookies)
    next()
}

app.get('/user/:id', isAuthenticated, function(req, res){
    
    var user = {
        id: req.params.id,
        name: "Mike"
    }
    
    console.log(req.query)
    
    res.json(user)
    
})


app.get('/*', function(req, res){
   res.send('hiii') 
});

app.listen(8080, function(){
   console.log('server running on port 8080') 
})

