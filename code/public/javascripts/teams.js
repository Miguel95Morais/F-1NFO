/*window.onload = async function () {
    let tea_id = sessionStorage.getItem("tea_id");

    let team = await $.ajax({
        url: "/api/teams/" + tea_id,
        method: "get",
        dataType: "json"
    });
    console.log(team);
    

    document.getElementById("nome").innerHTML = team.nomemonumento;
    document.getElementById("guia").innerHTML = team.nomeguia;

    let html = "";
    for (let reserva of monumento.reservas) {
        html += "<p>" + reserva.nomereserva + "</p>";
    }
    document.getElementById("reservas").innerHTML = html;
}*/
//Add drivers here?!
async function addTeam() {
    try {
        let team = {
            TeamName: document.getElementById("name").value,
            TeamPrincipal: document.getElementById("principal").value,
            TeamNationality: document.getElementById("nationality").value,
            TeamChampionships: document.getElementById("championships").value,
            TeamCar: document.getElementById("car").value,
            TeamPeriod: document.getElementById("period").value
        }
        alert(JSON.stringify(team));
        let result = await $.ajax({
            url: "/api/teams",
            method: "post",
            dataType: "json",
            data: JSON.stringify(team),
            contentType: "application/json"
        });
        alert(JSON.stringify(result));
    } catch (err) {
        console.log(err);
        // mensagem para o utilizador
    }
}