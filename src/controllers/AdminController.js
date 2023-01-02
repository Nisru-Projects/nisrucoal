const knex = require('../database')
const { checkPermissions } = require('../services/admin')

module.exports = {
    async index(req, res) {
        try {
            if (!req.user) return res.sendStatus(403)
            const resdb = await knex('users').where({ discord_id: req.user.discord_id })
            const usr = resdb[0]
            if (!usr) return res.sendStatus(403)
            const valid = checkPermissions(usr.permissions, ['admin.dashboard'])
            return valid ? res.sendStatus(200) : res.sendStatus(403)
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: 'Internal Server Error' })
        }
    },
}