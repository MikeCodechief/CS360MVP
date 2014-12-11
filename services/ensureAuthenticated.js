function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    }
    else {
        res.json({loggedIn: false})
    }
}

module.exports = ensureAuthenticated