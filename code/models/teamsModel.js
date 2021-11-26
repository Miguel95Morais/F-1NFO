var pool = require("./connection");
//ACABAR
/*module.exports.getAll = async function () {
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
}*/

module.exports.getAll = async function (filterObj) {
    try {
        let filterQueries = "";
        let filterValues = [];
        if (filterObj.tea_name) {
            filterQueries += " AND Name LIKE ?";
            filterValues.push("%" + filterObj.tea_name + "%");
        }
        if (filterObj.tea_id != null) {
            let sql = "SELECT tea_id, tea_name, tea_principal, tea_nationality, tea_championships, tea_car, tea_period FROM teams";
            let teams = await pool.query(sql, filterObj.tea_id);
            return { status: 200, data: teams };
        }
        let sql = "SELECT tea_id, tea_name, tea_principal, tea_nationality, tea_championships, tea_car, tea_period FROM teams";

        let teams = await pool.query(sql, filterValues);
        return { status: 200, data: teams };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
/*
try {
    let sql = "SELECT * FROM Album, Artist WHERE Album.ArtistId = Artist.ArtistId";
    let albuns = await pool.query(sql);
    return {status:200, data: albuns};
} catch(err) {
    console.log(err);
    return {status:500, data: err};
}
}
*/

//module.exports.getFiltered = async function(title,artist) {


module.exports.getOne = async function (idTeam) {
    try {
        let sql = "SELECT * FROM Album, Artist WHERE Album.ArtistId = Artist.ArtistId " +
            " AND AlbumId = ?";
        let teams = await pool.query(sql, [idTeam]);
        if (teams.length > 0) {
            let team = teams[0]; // its only one

            sql = "SELECT TrackId, Track.Name AS Name, Genre.Name AS Genre, " +
                "MediaType.Name AS Media, Composer, UnitPrice " +
                "FROM Track,Genre,MediaType WHERE " +
                "Track.MediaTypeId = MediaType.MediaTypeId AND " +
                "Track.GenreId = Genre.GenreId AND AlbumId = ?";
            let tracks = await pool.query(sql, [idTeam]);

            team.tracks = tracks;

            return { status: 200, data: team };
        } else {
            return { status: 404, data: { msg: "Team not found for that id" } };
        }
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.save = async function (team) {
    try {
        let sql = "INSERT INTO teams(nomemonumento, morada, latitude, longitude, descricao, monumento_guia_id) VALUES (?,?,?,?,?,?)";
        let result = await pool.query(sql, [team.tea_name, team.morada, team.tea_principal, team.tea_nationality, team.tea_championships, team.tea_car, team.tea_period]);
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}