function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    }
    res.json({loggedIn: false})
}

module.exports = ensureAuthenticated