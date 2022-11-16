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
    },
    async permissions(req, res) {
        const id = req.params.id
        try {
            const botGuilds = await getMutualGuildsService(req.user.access_token)
            const valid = botGuilds.mutualGuilds.some((guild) => guild.id === id)
            return valid ? res.sendStatus(200) : res.sendStatus(403)
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'Internal Server Error' })
        }
    }
}