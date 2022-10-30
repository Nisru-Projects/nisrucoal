const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./strategies/discord');

module.exports = () => {
    const routes = require('./routes')(router, {});
    app.use(cors({ origin: ['localhost:3000'], credentials: true }));
    app.use(session({
        secret: 'KOFASDPOJASPJDAJDASJOJU30981U23UD08ASIHOADKLPAJSPDAUJOIDHA',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
            httpOnly: false,
            secure: false,
        }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', routes);
    return app;
}