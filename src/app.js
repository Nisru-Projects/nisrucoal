const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./strategies/discord');

module.exports = () => {
    
    const routes = require('./routes')(router, {});

    // Session

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

    // Passport middleware

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes

    app.use('/api', routes);

    // notFound

    app.use((req, res, next) => {
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    });

    // Catch

    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({ error: error.message });
    })
    return app;
}