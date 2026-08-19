const apiKey = "2cec1d93cf628d26c5d528702d9e7019";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const body = document.querySelector("body"); // Assuming you want to change the background color of the whole page

// Define a color mapping for different weather conditions
const weatherColors = {
    Clouds: "#b0bec5", // Light grey for clouds
    Clear: "#81d4fa",  // Light blue for clear
    Rain: "#64b5f6",   // Slightly darker blue for rain
    Drizzle: "#4fc3f7",// Even darker blue for drizzle
    Mist: "#cfd8dc"    // Light grey for mist
};

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const weatherMain = data.weather[0].main;

        // Update weather icon
        if(weatherMain === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if(weatherMain === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if(weatherMain === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if(weatherMain === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if(weatherMain === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        // Update weather background color
        body.style.backgroundColor = weatherColors[weatherMain] || "#ffffff"; // Default to white if condition is not listed

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } 
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optional: Handle Enter key press in the search box
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
