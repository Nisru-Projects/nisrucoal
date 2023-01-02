const router = require('express').Router();
const AuthRouter = require("./auth")
const GuildsRouter = require("./guilds")
const AdminRouter = require("./admin");
const AdminController = require('../controllers/AdminController');

router.use("/auth", AuthRouter);
router.use("/guilds", GuildsRouter);
router.use("/admin", AdminRouter);

module.exports = router;
