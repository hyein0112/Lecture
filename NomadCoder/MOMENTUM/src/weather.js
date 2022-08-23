const API_KEY = "0d44f3c0ec427fa0f4cd46b954c0be78"

function onGeoOk(position) {
  const lat = position.coords.latitude;  // 위도
  const lon = position.coords.longitude;  // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json()
  .then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    console.log(data.weather[0].main, weather)
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }));
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);