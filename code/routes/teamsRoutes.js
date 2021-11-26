var express = require('express');
var router = express.Router();
var teaModel = require("../models/teamsModel");

/* GET all teams */
router.get('/', async function (req, res, next) {
    let filterObj = req.query;
    let result = await teaModel.getAll(filterObj);
    res.status(result.status).
        send(result.data);
});

/*
router.get('/filtered', async function(req, res, next) {
  let title = req.query.title;
  let artist = req.query.artist;
  let result = await albModel.getFiltered(title,artist);
  res.status(result.status).
     send(result.data);
});
*/



/* GET one team */

// /api/teams/3
router.get('/:id', async function (req, res, next) {
    let idTeam = req.params.id;
    let result = await teaModel.getOne(idTeam);
    res.status(result.status).
        send(result.data);
});


/* Post all teams */
router.post('/', async function (req, res, next) {
    let team = req.body;
    let result = await teaModel.save(team);
    res.status(result.status).
        send(result.data);
});


module.exports = router;
