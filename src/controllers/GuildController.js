const { getBotGuildsService, getUserGuildsService } = require("../services/guilds")

module.exports = {
    async index(req, res) {

        try {
            console.log(req.user)
            const botGuilds = await getBotGuildsService()
            const userGuilds = await getUserGuildsService(req.user.access_token)
            res.send({ botGuilds, userGuilds })
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'Internal Server Error' })
        }
    }
}