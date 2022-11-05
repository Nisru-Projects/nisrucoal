const { getMutualGuildsService } = require("../services/guilds")

module.exports = {
    async index(req, res) {

        try {
            const botGuilds = await getMutualGuildsService(req.user.access_token)
            res.send(botGuilds)
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'Internal Server Error' })
        }
    }
}