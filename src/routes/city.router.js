const { GetAll, GetOne, Create, Update, Delete } = require("../controllers/city.controller");
const express = require('express');
const cityRoute = express.Router();

cityRoute.route('/').get(GetAll).post(Create);
cityRoute.route('/:id').get(GetOne).put(Update).delete(Delete);


module.exports = cityRoute;