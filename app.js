let place = "Rijeka",
  longitude = 5,
  latitude = 5,
  temperature;

//transforming string to cordinates
const getCordinates = async () => {
  const response = await axios({
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/search",
    params: {
      q: `"${place}"`,
      "accept-language": "en",
      polygon_threshold: "0.0",
    },
    headers: {
      "X-RapidAPI-Key": "f3a683fbc3msh385d4da297ee7e9p134996jsne879cdba850c",
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  });
  longitude = response.data[0].lon;
  latitude = response.data[0].lat;
};

//getting weather data for cordinates
const getWeatherData = async (place) => {
  await getCordinates(place);
  const response2 = await axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&APPID=4cc69aa395ba04c81f73c4eda531da19&units=metric`,
  });
  console.log(response2);
  document.querySelector(".temperature").textContent =
    response2.data.main.temp.toFixed(1) + "°C";
  document.querySelector(".cityName").textContent = response2.data.name;
  document.querySelector(".desc").textContent =
    response2.data.weather[0].description;
    document.querySelector(".humidity").textContent =
    response2.data.main.humidity+"%";
};
getWeatherData(place);

//imputing place
document.querySelector("input").addEventListener("change", (e) => {
  place = e.target.value;
  getWeatherData(place);
  e.target.value = "";
  console.log(place);
});
