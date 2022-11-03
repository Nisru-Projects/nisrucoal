const GuildController = require('../../controllers/GuildController');
const { isAuthenticated } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', isAuthenticated, GuildController.index)

module.exports = router;