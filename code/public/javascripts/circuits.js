window.onload = async function () {

    let circuits = await $.ajax({
        url: "/api/circuits/",
        method: "get",
        dataType: "json"
    });
    console.log(circuits);
}

/*window.onload = async function () {
    try {
        let circuits = await $.ajax({
            url: "/api/circuits",
            method: "get",
            dataType: "json"
        });
        let html = "";
        for (let circuit of circuits) {
            html += "<option value=" + artista.ArtistId + ">" + artista.Name +
                "</option>";
        }
        document.getElementById("artist").innerHTML = html;
    } catch (err) {
        console.log(err);
        // mensagem de erro para o utilizador
    }

}*/