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

  condition.textContent = currentWeatherInfo.current.condition.text;
  location.textContent = currentWeatherInfo.location.name;
  dateTime.textContent = currentWeatherInfo.location.localtime;

  const img = document.createElement("img");
  img.src = currentWeatherInfo.current.condition.icon;
  temperature.appendChild(img);

  const temp = document.createElement("div");
  temp.innerHTML = `${currentWeatherInfo.current.temp_c} ℃`;
  temperature.appendChild(temp);

  console.log(currentWeatherInfo);
};
