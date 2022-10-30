const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const scopes = ['identify', 'email', 'guilds', 'guilds.join'];
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: scopes,
}, (accessToken, refreshToken, profile, done) => {
   // process.nextTick(() => done(null, profile));
   console.log(profile);
   console.log(accessToken);
    console.log(refreshToken);
}));