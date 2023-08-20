const apiUrl = "250c57ee1eed494073b997fd50572acf";
const apiKey = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector("#box .search input");
const searchBtn = document.querySelector("#box .search button");

async function checkWeather(city){
    const response = await fetch(apiKey + city + `&appid=${apiUrl}`);
    const data = await response.json();

    if(response.status == 404){
        document.querySelector(".details").style.display = "none";
        document.querySelector(".icon").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".details").style.display = "flex";
        document.querySelector(".icon").style.display = "block";
        document.querySelector(".error").style.display = "none";
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidityPercent").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed;

        if(data.weather[0].main == "Clouds"){
            document.querySelector(".icon img").setAttribute("src","images/clouds.png");
            document.querySelector(".icon img").setAttribute("alt","Clouds");
        }
        else if(data.weather[0].main == "Clear"){
            document.querySelector(".icon img").setAttribute("src","images/clear.png");
            document.querySelector(".icon img").setAttribute("alt","clear");
        }
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".icon img").setAttribute("src","images/rain.png");
            document.querySelector(".icon img").setAttribute("alt","Rain");
        }
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".icon img").setAttribute("src","images/drizzle.png");
            document.querySelector(".icon img").setAttribute("alt","Drizzle");
        }
        else if(data.weather[0].main == "Mist"){
            document.querySelector(".icon img").setAttribute("src","images/mist.png");
            document.querySelector(".icon img").setAttribute("alt","Mist");
        }
    }
}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
});

searchBox.addEventListener("click",function(){
    searchBox.placeholder = "";
}); 