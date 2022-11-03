const passport = require('passport');
const UserController = require('../../controllers/UserController');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
})

router.get('/discord', passport.authenticate('discord'), (req, res) => {
    res.sendStatus(200);
})
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.send({ msg: 'Success!' });
})
router.get('/users', UserController.index);

router.get('/status', (req, res) => {
    return req.user ? res.send(req.user) : res.send({ msg: 'Unauthorized' });
});

//.post('/users', UserController.create);
//.put('/users/:id', UserController.update);
//.delete('/users/:id', UserController.delete);

module.exports = router;