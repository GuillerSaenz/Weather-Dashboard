const searchedEl = document.getElementById("searched-cities");

function getInfo(){
    const city = document.getElementById("city");
    const cityName = document.getElementById("city-name");


    if (city) {
        cityName.innerHTML = city.value;

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=1&appid=be1391c0eca2edceab479210450dd227`;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.length > 0) {
                    const lat = data[0].lat;
                    const lon = data[0].lon;
                    console.log(lat);
                    console.log(lon);

                    displayData(lat, lon);

                }else{
                    console.log("nothing");
                }
            })
    }
}

function displayData(lat, lon){
    const urlLatLon = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=be1391c0eca2edceab479210450dd227`

    fetch(urlLatLon)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(i=0; i<5; i++){
                // const date = data[i].dt_txt;
                // document.getElementById("day"+(i+1)).innerHTML = data.list[i].dt_txt
                document.getElementById("day"+(i+1)+"-temp").innerHTML = "Temp: "+Number(data.list[i].main.temp)
                document.getElementById("day"+(i+1)+"-wind").innerHTML = "Wind: "+Number(data.list[i].wind.speed)
                document.getElementById("day"+(i+1)+"-humidity").innerHTML = "Humidity: "+Number(data.list[i].main.humidity)
            }
        })
}