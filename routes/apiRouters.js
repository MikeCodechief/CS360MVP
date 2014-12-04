var airDataApi = require('./api/airDataRouter')
var userApi = require('./api/userRouter')

var apiRouter = {
    airData: airDataApi,
    user: userApi
}

module.exports = apiRouter