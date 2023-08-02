# Weather-App-01

This project is a simple weather application that allows users to input a location name (city) and get real-time weather data for that location. The application leverages geocoding to convert the input location name into latitude and longitude coordinates, and then fetches weather data from the OpenWeatherMap API based on those coordinates. The weather information is displayed on the web page, including temperature, city name, weather description, humidity, and atmospheric pressure. Additionally, the weather icon corresponding to the current weather condition is shown.

## How it Works

1. **Geocoding**:
   - The input location (city name) is provided by the user.
   - The application makes a request to the "forward-reverse-geocoding" API using the RapidAPI service.
   - The API returns the latitude and longitude coordinates for the input location.

2. **Weather Data Retrieval**:
   - Using the obtained latitude and longitude, the application queries the OpenWeatherMap API to get the current weather data for that location.
   - The API response contains various weather-related information, including temperature, weather description, humidity, pressure, and weather icon.

3. **Displaying Weather Data**:
   - The retrieved weather data is displayed on the web page.
   - The temperature is shown in Celsius with one decimal place.
   - The city name and weather description are displayed as text.
   - An icon representing the current weather condition is displayed.
   - The humidity and atmospheric pressure are also shown on the page.

4. **User Interaction**:
   - Users can input a new location by typing the city name in the input field.
   - Once the user changes the input value, the application automatically updates the weather data for the new location.

## Technologies Used

- HTML, CSS, and JavaScript: The core languages used for building the web application.
- Axios: A JavaScript library used to make HTTP requests to APIs.
- RapidAPI: A service used to access the "forward-reverse-geocoding" API for geocoding.
- OpenWeatherMap API: Used to fetch weather data based on latitude and longitude coordinates.

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. The current weather data for "Rijeka" (default location) will be displayed.
4. To check weather data for a different location, type the city name in the input field and press Enter or click outside the input field.
5. The weather information will be updated with the data for the new location.

Note: You may need to obtain your own API keys for the RapidAPI and OpenWeatherMap services if you plan to deploy the application to a live server.

Feel free to explore and customize the application to suit your needs!
Feel free to check the improved version of this app  in my GitHub repositories!
