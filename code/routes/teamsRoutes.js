var express = require('express');
var router = express.Router();
var teaModel = require("../models/teamsModel");

/* GET all teams */
/*router.get('/', async function (req, res, next) {
    let filterObj = req.query;
    let result = await teaModel.getAll(filterObj);
    res.status(result.status).
        send(result.data);
});*/
router.get('/', async function (req, res, next) {
    let teams = await teaModel.getAllTeams();
    res.send(teams);
});

/* Post all teams */
router.post('/', async function (req, res, next) {
    let teams = req.body;
    let result = await teaModel.save(teams);
    res.status(result.status).
        send(result.data);
});

module.exports = router;