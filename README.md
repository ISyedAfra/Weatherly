# Weatherly 🌤️

**Weatherly** is a modern, responsive web application that provides real-time weather information for any city or your current location. It features a clean UI with smooth animations and displays temperature, weather description, feels-like temperature, humidity, and a weather icon.

---

## Features

* Search weather by city name.
* Get weather using your current location (geolocation).
* Displays temperature, weather description, feels-like temperature, humidity, and an icon for current weather.
* Smooth UI animations.
* Fully responsive design for mobile and desktop.

---

## How to Use / Share the Project

### 1. Open in Browser

* Simply open the `index.html` file in your browser.
* No installations or special setups are required.

### 2. Search for Weather

* Type a city name in the input box and click **Search**.
* Or click **Locate Me** to fetch weather for your current location.

### 3. View Weather Info

* City & country
* Temperature (°C)
* Weather description
* Feels-like temperature & humidity
* Weather icon
* Last updated timestamp

---

## Project Structure

```
Weatherly/
│
├── index.html       # Main HTML page
├── style.css        # Styling and animations
├── script.js        # JavaScript for fetching and displaying weather
├── weather.js       # Netlify serverless function
├── icon.png         # App favicon
```

---

## Notes

* Weather data is fetched using the **OpenWeatherMap API**.
* The app works best when deployed on **Netlify** (for the serverless function), but locally it also works by opening `index.html`.
* No extra installations or dependencies are required to run the project.

---

This README is optimized for sharing as a project for academic, portfolio, or demonstration purposes.
