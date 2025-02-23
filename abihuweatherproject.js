document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "384fda109f958995dcc45dbeafbaf6cb"; // Replace with your OpenWeatherMap API key
  const searchButton = document.getElementById("search-button");
  const cityInput = document.getElementById("city-input");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherIcon = document.getElementById("weather-icon");

  // Search button click event
  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name");
    }
  });

  // Allow Enter key press to search
  cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });

  async function getWeather(city) {
    cityName.textContent = "Fetching weather...";
    temperature.textContent = "";
    description.textContent = "";
    weatherIcon.style.display = "none";

    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.alt = data.weather[0].description;
        weatherIcon.style.display = "block";
      } else {
        cityName.textContent = "City not found. Try again.";
        temperature.textContent = "";
        description.textContent = "";
        weatherIcon.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      cityName.textContent = "Network error. Please try again.";
      temperature.textContent = "";
      description.textContent = "";
      weatherIcon.style.display = "none";
    }
  }
});
