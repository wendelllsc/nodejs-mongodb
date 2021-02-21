const express = require('express');
const route = express.Router();

const releaseController = require('../Controller/ReleaseController');

route.post('/release', releaseController.create);
route.get('/release', releaseController.all);

module.exports = route;