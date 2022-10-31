const knex = require('../database');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await knex('users').where({ id }).first();
        return (user ? done(null, user) : done(null, null));
    } catch (error) {
        return done(error, null);
    }
});

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: scopes,
}, async (accessToken, refreshToken, profile, done) => {

    //console.log(profile);
    //console.log(accessToken);
    //console.log(refreshToken);

    try {
        const userExists = await knex('users').where({ discord_id: profile.id }).first();
        if (userExists) {
            const user = await knex('users').update({
                access_token: accessToken,
                refresh_token: refreshToken,
                updated_at: knex.fn.now()
            }).where({ discord_id: profile.id })
            return done(null, user);
        } else {
            const user = await knex('users').insert({
                discord_id: profile.id,
                permissions: [],
                access_token: accessToken,
                refresh_token: refreshToken
            })
            return done(null, user);
        }
    } catch (error) {
        done(error, null);
    }

}));