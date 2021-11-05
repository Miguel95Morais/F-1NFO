var express = require('express');
var router = express.Router();
var cirModel = require("../models/circuitsModel");

/* GET all circuits */
router.get('/', async function (req, res, next) {
    let filterObj = req.query;
    let result = await cirModel.getAll(filterObj);
    res.status(result.status).
        send(result.data);
});

/* Post all circuits */
router.post('/', async function (req, res, next) {
    let circuit = req.body;
    let result = await cirModel.save(circuit);
    res.status(result.status).
        send(result.data);
});

module.exports = router;