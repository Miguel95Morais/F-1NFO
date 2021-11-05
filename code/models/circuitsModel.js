var pool = require("./connection");

module.exports.getAll = async function () {
    try {
        var query = "SELECT cir_id as id, cir_name as name, cir_latitude as latitude, cir_longitude as longitude, cir_grandprix as grandprix FROM circuits";
        const circuits = await pool.query(query);
        console.log(query);
        return circuits;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.save = async function (circuits) {
    try {
        let sql = "INSERT INTO circuits(cir_name, cir_latitude, cir_longitude, cir_grandprix) VALUES (?,?,?,?)";
        let result = await pool.query(sql, [circuits.cir_name, circuits.cir_name, circuits.cir_latitude, circuits.cir_longitude, circuits.cir_grandprix]);
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}