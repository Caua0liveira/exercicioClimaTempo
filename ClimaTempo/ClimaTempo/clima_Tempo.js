function Localização(){
    cidade = document.getElementById("cidade").value
    var minusculo = cidade.toLowerCase()
    resultado = minusculo.replace(/ /g, "%20")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${resultado}&appid=64ed82577ced7f69cb1687f0ce536131`).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            grau = parseInt(data.main.temp) - 273,15
            document.getElementById("nome").innerHTML = "<h2>Cidade: " + data.name +  "</h2>";
            document.getElementById("temperatura").innerHTML = "<p>Temperatura: " + grau + "°</p>";
            document.getElementById("umidade").innerHTML = "<p>Umidade: " + data.main.humidity + "%</p>";
            document.getElementById("vento").innerHTML = "<p>Vento: " + data.wind.speed + " km/h</p>";
            document.getElementById("nuvem").innerHTML = "<p>Nuvem: " + data.clouds.all + " </p>";
        })
}
function Localizar(){
    cidade = document.getElementById("cidade").value
    var minusculo = cidade.toLowerCase()
    window.location.href = `https://earth.google.com/web/search/${minusculo}.com`;
}