var pool = require("./connection");

module.exports.getAll = async function () {
    try {
        var query = "SELECT tea_id as id, tea_name as name, tea_principal as principal, tea_nationality as nationality, tea_championships as championships, tea_car as car, tea_period as period FROM teams";
        const teams = await pool.query(query);
        console.log(query);
        return teams;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.save = async function (teams) {
    try {
        let sql = "INSERT INTO teams(tea_name, tea_principal, tea_nationality, tea_championships, tea_car, tea_period) VALUES (?,?,?,?,?,?)";
        let result = await pool.query(sql, [teams.tea_name, teams.tea_principal, teams.tea_nationality, teams.tea_championships, teams.tea_car, teams.tea_period]);
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}