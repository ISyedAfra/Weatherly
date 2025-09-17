export async function handler(event) {
  const API_KEY = process.env.OPENWEATHER_API; // loaded from Netlify env var
  const units = "metric";

  const { city, lat, lon } = event.queryStringParameters;

  let url = "";
  if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}`;
  } else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  } else {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*", // allow GitHub Pages
      },
      body: JSON.stringify({ error: "City or coordinates required" }),
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // allow GitHub Pages
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // allow GitHub Pages
      },
      body: JSON.stringify({ error: "Failed to fetch weather" }),
    };
  }
}
