var express = require('express');
var router = express.Router();
var hftModel = require("../models/halloffameteamsModel");

/* GET all halloffameteams */
/*router.get('/', async function (req, res, next) {
    let filterObj = req.query;
    let result = await teaModel.getAll(filterObj);
    res.status(result.status).
        send(result.data);
});*/
router.get('/', async function (req, res, next) {
    let halloffameteams = await hftModel.getAllHalloffameteams();
    res.send(halloffameteams);
});

/* Post all teams */
router.post('/', async function (req, res, next) {
    let halloffameteams = req.body;
    let result = await hftModel.save(halloffameteams);
    res.status(result.status).
        send(result.data);
});

module.exports = router;