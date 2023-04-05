async function fetchData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=warwick  &appid=1eb14fa2fbe4143f836955bdfbb0e570"
  );
  const data = await response.json();
  console.log(data);

  const cname = document.querySelector("#cname");
  const temp = document.querySelector("#temp");
  const text = document.querySelector("#text");
  const humidity = document.querySelector("#humidity");
  const wind = document.querySelector("#wind");
  const air = document.querySelector("#air");

  function displayDate() {
    document.querySelector("#showDate").innerHTML = Date();
  }
  displayDate();
  cname.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  text.innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";
  air.innerHTML = data.main.pressure + "mb";

  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
}
fetchData();

const form = document.querySelector("#form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const search = document.querySelector("#citys").value;
  console.log(search);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=1eb14fa2fbe4143f836955bdfbb0e570`
  );
  const data = await response.json();
  console.log(data);

  const cname = document.querySelector("#cname");
  const temp = document.querySelector("#temp");
  const text = document.querySelector("#text");
  const humidity = document.querySelector("#humidity");
  const wind = document.querySelector("#wind");
  const air = document.querySelector("#air");

  cname.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  text.innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";
  air.innerHTML = data.main.pressure + "mb";

  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
});
