const api_id = "0581781fdefc3d7b7e63f800e43d2804";
const searchBar = document.querySelector('input');
const button = document.querySelector('button');
const city_name = document.querySelector(".place");
const weather_temp = document.querySelector(".temperature");
const weather_condition = document.querySelector(".weatherCondition");
const display_weather = document.querySelector(".widget");
const humidity = document.querySelector(".humidity");


const getWeather = async (searchString) =>{
    try {
        if (searchString===""|| searchString==null) {
            alert("Please enter a city name!")
        }
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${api_id}&units=metric`); 
        console.log(response);
        const data = await response.json();
        if (data.cod==404) {
            alert("City not found");
        }
        else{
            display_weather.style.display = "flex";
            city_name.innerHTML = data.name;
            weather_temp.innerHTML =`<h1>${Math.round(data.main.temp)} <sup>o</sup>C</h1>`
            weather_condition.innerHTML = data.weather[0].main;
            humidity.innerHTML = `<h1> HUMIDITY ${data.main.humidity} <sup>%</sup> </h1>`;
            // weather_temp = Math.round(data.main.temp);
            console.log(data.main.temp);
            console.log(data.name);
            console.log(data.weather[0].main);
            // renderWeather(data.name,data.main.temp,data.weather[0].main);
            // renderWeather();
        }
        
    } catch (error) {
        console.log(error);
        
    }
    
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
})
button.addEventListener("click",()=>{
    const searchString = searchBar.value;
    getWeather(searchString);
})