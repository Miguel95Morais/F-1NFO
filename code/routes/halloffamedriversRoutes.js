var express = require('express');
var router = express.Router();
var hfdModel = require("../models/halloffamedriversModel");

/* GET all halloffameteams */
/*router.get('/', async function (req, res, next) {
    let filterObj = req.query;
    let result = await teaModel.getAll(filterObj);
    res.status(result.status).
        send(result.data);
});*/
router.get('/', async function (req, res, next) {
    let halloffamedrivers = await hfdModel.getAllHalloffamedrivers();
    res.send(halloffamedrivers);
});

/* Post all teams */
router.post('/', async function (req, res, next) {
    let halloffamedrivers = req.body;
    let result = await hfdModel.save(halloffamedrivers);
    res.status(result.status).
        send(result.data);
});

module.exports = router;