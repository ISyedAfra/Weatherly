const units = "metric";
cityinp = document.getElementById("cityinp");
search = document.getElementById("search")
loc = document.getElementById("loc")
city = document.getElementById("city");
temp = document.getElementById("temp");
desc = document.getElementById("desc");
extrainf = document.getElementById("extrainfo");
icon = document.getElementById("icon");
lastupd = document.getElementById("lastupd");
async function searchcity() {

  const c = cityinp.value.trim();
  if (!c) {
    document.querySelector(".card").classList.remove("show");
    return;

  }
  city.textContent = "Loading...";
  temp.textContent = '--';
  desc.textContent = '';
  extrainf.textContent = '';
  icon.innerHTML = '';
  document.querySelector(".card").classList.add("show");
  const data = await fetchweather(loadurl(c));
  renderweather(data);

}
function loadurl(c) {
  return  `https://weatherlyapp2025.netlify.app/.netlify/functions/weather?city=${encodeURIComponent(c)}`;
}
async function fetchweather(url) {
  try {
    const res = await fetch(url);
    const d = await res.json();
    if (!res.ok ||  d.error){
      throw new Error(d.error || "Location not found");
    } 
    return d;
  }
  catch (err) {
    console.error(err);
    return null;
  }
}
function renderweather(data) {
  if (!data) {
    city.textContent = 'Not found';
    temp.textContent = '--';
    desc.textContent = '';
    extrainf.textContent = '';
    icon.innerHTML = '';
    document.querySelector(".card").classList.add("show");
    return;
  }
  else {
    const unit = units === 'metric' ? '°C' : '°F';
    city.textContent = `${data.name},${data.sys.country}`;
    temp.textContent = `${Math.round(data.main.temp)} ${unit}`;
    desc.textContent = `${data.weather[0].description}`;
    extrainf.textContent = `Feels like: ${Math.round(data.main.feels_like)} ${unit}, Humidity: ${data.main.humidity}%`;
    const iconcode = data.weather[0].icon;
    const iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`
    icon.innerHTML = `<img src="${iconurl}" alt="${data.weather[0].description}">`
    lastupd.textContent = `Last updated: ${upddate(data.dt)}`
    document.querySelector(".card").classList.add("show");

  }


}
function upddate(dt) {
  const d = new Date(dt * 1000);
  return d.toLocaleString();

}
search.addEventListener('click', searchcity);
cityinp.addEventListener('keydown', (e) => { if (e.key == "Enter") searchcity(); });
loc.addEventListener("click", () => {
  cityinp.value = "";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  else {
    alert("Geolocation is not supported by your browser")
  }
});
async function success(position) {
  city.textContent = "Loading...";
  temp.textContent = '--';
  desc.textContent = '';
  extrainf.textContent = '';
  icon.innerHTML = '';
  document.querySelector(".card").classList.add("show");
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://weatherlyapp2025.netlify.app/.netlify/functions/weather?lat=${lat}&lon=${lon}`;
  const data = await fetchweather(url);
  renderweather(data);

}
function error() {
  alert("Unable to retrieve your location.");
}
