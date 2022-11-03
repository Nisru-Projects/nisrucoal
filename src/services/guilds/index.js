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
    }
}