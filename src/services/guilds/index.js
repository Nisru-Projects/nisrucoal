const axios = require('axios');
const { DISCORD_API_URL } = require('../../utils/constants');

async function getBotGuildsService() {
    const response = await axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    });
    return response.data;
}
async function getUserGuildsService(access_token) {
    const response = await axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return response.data;
}

async function getUser(access_token) {
    const response = await axios.get(`${DISCORD_API_URL}/users/@me`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return response.data;
}

async function getMutualGuildsService(access_token) {
    const botGuilds = await getBotGuildsService()
    const userGuilds = await getUserGuildsService(access_token)
    const adminGuilds = userGuilds.filter(guild => guild.permissions & 8)
    const mutualGuilds  = adminGuilds.filter(guild => botGuilds.some(botGuild => botGuild.id === guild.id))
    return { adminGuilds, mutualGuilds };
}

module.exports = {
    getBotGuildsService,
    getUserGuildsService,
    getMutualGuildsService,
    getUser
}