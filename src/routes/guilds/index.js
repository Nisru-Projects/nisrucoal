const { isAuthenticated } = require('../../middlewares');

const router = require('express').Router();

router.get('/', isAuthenticated, (req, res) => {
    res.sendStatus(200);
})

module.exports = router;