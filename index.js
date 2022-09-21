
function getWeather(chosenCity){
    const apiKey = config.weather_key;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&units=metric&appid=' + apiKey)
        .then((res) => res.json())
            .then((data) => (displayWeather(data)));
}

function getFunFact(){
    const limit = 1;
    fetch('https://api.api-ninjas.com/v1/facts?limit=' + limit, {
        method: 'GET',
        headers: { 'X-Api-Key': config.facts_key},
    })
    .then((res) => res.json())
            .then((data) => (displayFact(data)));
}

function displayFact(data){
    const fact = data[0].fact;
    console.log(fact);
}



function displayWeather(data){


    const cityName = data.name;
    const temperature = data.main.temp;
    const des = data.weather[0].description;
    const icon = data.weather[0].icon;
    const hu = data.main.humidity;
    const cityId = document.getElementById("city");
    const tempId = document.getElementById("temp");
    const desId = document.getElementById("descrip");
    const setIcon = document.getElementById("wIcon");
    const setHumid = document.getElementById("humid");

    console.log(icon);

    cityId.innerHTML = cityName;
    tempId.innerHTML = Math.round(temperature)+"°C";
    desId.innerHTML = des;
    setHumid.innerHTML = "Humidity: " + hu + "%";
    setIcon.src = 'http://openweathermap.org/img/wn/'+icon+ '@2x.png';

} 

function getCity(){
    const chosenCity = document.getElementById("city-inputted").value;
    getWeather(chosenCity);
    getFunFact();
    document.getElementById("city-inputted").value = '';

}

function example(){
    getWeather("denver");
}
