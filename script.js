async function getWeather(location) {
  try {
    const api_key = "0322bd018acc44599f951507232406";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`,
      { mode: "cors" }
    );
    const currentWeatherInfo = await response.json();

    processData(currentWeatherInfo);
  } catch (error) {
    console.error(error);
  }
}

function processData(currentWeatherInfo) {
  const currentWeatherData = currentWeatherInfo.current;
  fillData(currentWeatherData);
}

function fillData(currentWeatherData) {
  const weather = document.querySelector(".weather");
  const date = document.createElement("p");
  const currentDate = new Date();
  date.textContent = `${currentDate.getDate()} ${currentDate.getMonth()}, ${currentDate.getHours()}:${currentDate.getMinutes()} ${
    currentDate.getMinutes() < 12 ? "am" : "pm"
  }`;

  const img = document.createElement("img");
  img.src = currentWeatherData.condition.icon;

  const cloud = document.createElement("p");
  cloud.textContent = currentWeatherData.cloud;

  const condition = document.createElement("p");
  condition.textContent = currentWeatherData.condition.text;

  const temp = document.createElement("h1");
  temp.innerHTML = `${currentWeatherData.temp_c}<sup>o</sup>C`;

  const feelslike = document.createElement("p");
  feelslike.innerHTML = `Feels like: ${currentWeatherData.feelslike_c}<sup>o</sup>C`;

  const otherData = document.createElement("div");
  otherData.innerHTML = `<p>Humidity: ${currentWeatherData.humidity}</p>
  <p>Visibility: ${currentWeatherData.vis_km} Km</p>
  <p>UV: ${currentWeatherData.uv}</p>
  <p>Wind Speed: ${currentWeatherData.wind_kph} Km/hr</p>
  <p>Wind Direction: ${currentWeatherData.wind_dir}</p>`;

  weather.appendChild(date);
  weather.appendChild(img);
  weather.appendChild(cloud);
  weather.appendChild(temp);
  weather.appendChild(condition);
  weather.appendChild(feelslike);
  weather.appendChild(otherData);
}

getWeather("kolkata");
