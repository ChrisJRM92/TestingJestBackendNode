const cityRoute = require("./city.router");
const express = require('express');
const router = express.Router()

router.use('/cities', cityRoute);

module.exports = router;