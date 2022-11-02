const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const knex = require('./database');
const KnexSessionStore = require('connect-session-knex')(session);
const store = new KnexSessionStore({
    knex,
    tablename: 'sessions',
});
require('./strategies/discord');

const ApiRoutes = require('./routes')

module.exports = () => {
    

    // Session


    app.use(cors({ origin: ['localhost:3000'], credentials: true }));
    app.use(session({
        secret: 'KOFASD134POJASPJDAJDASJOJU30981U23UD08A134SIHOADKLPAJSPDA134UJOIDHA',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: false,
            secure: false,
        },
        store
    }));

    // Passport middleware

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes

    app.use('/api', ApiRoutes);

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