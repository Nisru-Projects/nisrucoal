const router = require('express').Router();
const AuthRouter = require("./auth")
const GuildsRouter = require("./guilds")

router.use("/auth", AuthRouter);
router.use("/guilds", GuildsRouter);

module.exports = router;
