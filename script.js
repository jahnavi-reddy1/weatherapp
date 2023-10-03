document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("location");
    const getWeatherButton = document.getElementById("getWeather");
    const weatherInfo = document.getElementById("weatherInfo");
    const unitToggle = document.getElementById("unitToggle");

    getWeatherButton.addEventListener("click", function () {
        const location = locationInput.value;
        const unit = unitToggle.value;
        getWeather(location, unit);
    });

    function getWeather(location, unit) {
        
        const apiKey = "37818b4db83a603f5a413a2db58c5073";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    displayWeatherData(data);
                } else {
                    showError("Location not found. Please try again.");
                }
            })
            .catch((error) => {
                showError("An error occurred while fetching data. Please try again later.");
            });
    }

    function displayWeatherData(data) {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherDescription = data.weather[0].description;

        const unitSymbol = unitToggle.value === "metric" ? "°C" : "°F";

        const weatherHTML = `
            <h2>Current Weather</h2>
            <p>Temperature: ${temperature} ${unitSymbol}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
            <p>Weather: ${weatherDescription}</p>
        `;

        weatherInfo.innerHTML = weatherHTML;
    }

    function showError(message) {
        weatherInfo.innerHTML = `<p class="error">${message}</p>`;
    }
});