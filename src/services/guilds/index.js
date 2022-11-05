const axios = require('axios');
const { DISCORD_API_URL } = require('../../utils/constants');

module.exports = {
    async getBotGuildsService() {
        const response = await axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
            }
        });
        return response.data;
    },
    async getUserGuildsService(access_token) {
        const response = await axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.data;
    }
}