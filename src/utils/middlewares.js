module.exports = {
    isAuthenticated(req, res, next) {
        return req.user ? next() : res.status(403).send({ msg: 'Unauthorized' });
    }
}