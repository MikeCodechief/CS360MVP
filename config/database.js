var mongoose = require('mongoose')

var db = {
    url: "mongodb://test:test@proximus.modulusmongo.net:27017/Si9nydux"
}

mongoose.connect(db.url, function(err){
    if(err)
        throw err
    else
        console.log('connected to db')
})