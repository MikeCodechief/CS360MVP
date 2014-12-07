function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    }
    res.send('not logged in')
}

module.exports = ensureAuthenticated