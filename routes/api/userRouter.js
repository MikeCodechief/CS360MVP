var express = require('express')
var path = require('path')

var router = express.Router()

//auth stuff goes here..
router.get('/', function(req, res){
    res.send('user data')
})

router.get('/locations', function(req,res){
    res.send('user locations')
})





module.exports = router