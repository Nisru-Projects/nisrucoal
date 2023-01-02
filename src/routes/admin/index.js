const AdminController = require('../../controllers/AdminController');
const { isAuthenticated } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', isAuthenticated, AdminController.index)

module.exports = router;