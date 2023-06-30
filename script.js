async function getCurrentWeather(location) {
  try {
    const api_key = "0322bd018acc44599f951507232406";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`,
      { mode: "cors" }
    );
    const currentWeatherInfo = await response.json();
    weather(currentWeatherInfo);
  } catch (error) {
    console.error(error);
  }
}

getCurrentWeather("kolkata");

let weather = (currentWeatherInfo) => {
  const condition = document.querySelector(".condition");
  const location = document.querySelector(".location");
  const dateTime = document.querySelector(".date-time");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".wind");
  const visibility = document.querySelector(".visibility");

  condition.textContent = currentWeatherInfo.current.condition.text;
  location.textContent = currentWeatherInfo.location.name;
  dateTime.textContent = currentWeatherInfo.location.localtime;

  const img = document.createElement("img");
  img.src = currentWeatherInfo.current.condition.icon;
  temperature.appendChild(img);

  const temp = document.createElement("div");
  temp.textContent = `${currentWeatherInfo.current.temp_c} ℃`;
  temperature.appendChild(temp);

  const feels = document.createElement("div");
  const humid = document.createElement("div");
  const vis = document.createElement("div");
  const wind = document.createElement("div");
  feels.textContent = `${currentWeatherInfo.current.feelslike_c} ℃`;
  humid.textContent = currentWeatherInfo.current.humidity;
  vis.textContent = `${currentWeatherInfo.current.vis_km} KM`;
  wind.textContent = `${currentWeatherInfo.current.wind_kph} Kmph`;
  feelsLike.appendChild(feels);
  humidity.appendChild(humid);
  visibility.appendChild(vis);
  windSpeed.appendChild(wind);
  console.log(currentWeatherInfo.current);
};
