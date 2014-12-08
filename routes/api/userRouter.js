var express = require('express')
var ensureAuthenticated = require('./../../services/ensureAuthenticated')

var router = express.Router()

router.use(ensureAuthenticated)

router.get('/', function(req, res){
    res.json(req.user)
})

router.get('/locations', function(req,res){
    res.send('user locations')
})

router.post('/locations', function(req,res){
  res.send('location added')  
})



module.exports = router