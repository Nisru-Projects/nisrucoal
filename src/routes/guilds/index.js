const GuildController = require('../../controllers/GuildController');
const { isAuthenticated } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', isAuthenticated, GuildController.index)

// api/guilds/:id/permissions
router.get('/:id/permissions', isAuthenticated, GuildController.permissions)

module.exports = router;