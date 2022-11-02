const passport = require('passport');
const UserController = require('./controllers/UserController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendStatus(200);
    }); 
    app.get('/auth', (req, res) => {
        res.send('Hello World!');
    }); 
    app.get('/auth/discord', passport.authenticate('discord'), (req, res) => {
        res.sendStatus(200);
    })
    app.get('/auth/discord/redirect', passport.authenticate('discord'), (req, res) => {
        res.send({ msg: 'Success!' });
    })
    app.get('/auth/users', UserController.index);
    app.get('/auth/status', (req, res) => {
        return req.user ? res.send(req.user) : res.send({ msg: 'Unauthorized' });
    });
    //app.post('/users', UserController.create);
    //app.put('/users/:id', UserController.update);
    //app.delete('/users/:id', UserController.delete);
    return app; 
};