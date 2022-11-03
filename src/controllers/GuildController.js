const { getBotGuildsService } = require("../services/guilds")

module.exports = {
    async index(req, res) {

        try {
            const guilds = await getBotGuildsService()
            res.send(guilds)
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'Internal Server Error' })
        }
    }
}