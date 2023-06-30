async function getCurrentWeather(location) {
  try {
    const api_key = "0322bd018acc44599f951507232406";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`,
      { mode: "cors" }
    );
    const currentWeatherInfo = await response.json();
    console.log(currentWeatherInfo);
  } catch (error) {
    console.error(error);
  }
}

getCurrentWeather("kolkata");
