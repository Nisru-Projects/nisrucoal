const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')
        return res.json(results);
    },
    async create(req, res, next) {
        /*try {
            await knex('users').insert();
            return res.status(201).send();
        } catch (error) {
            next(error);
        }*/
    },
    async update(req, res, next) {
        /*try {
            reqparams.id
            await knex('users').update().where();
            return res.send();
        } catch (error) {
            next(error);
        }*/
    },
    async delete(req, res, next) {
        /*try {
            reqparams.id
            await knex('users').delete().where();
            return res.send();
        } catch (error) {
            next(error);
        }*/
    }
}