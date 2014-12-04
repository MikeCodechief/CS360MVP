var express = require('express')
var path = require('path')

var router = express.Router()

var pathToAngularIndex = path.resolve(__dirname + "/../public/index.html")

router.get('/*', function(req, res){
    res.sendFile(pathToAngularIndex)
})

module.exports = router