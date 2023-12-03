const main = document.createElement("div");
main.setAttribute("class", "container");
document.body.append(main);

const result = fetch("https://restcountries.com/v3.1/all");
result
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      const display = document.createElement("div");
      main.append(display);

      display.innerHTML = `<div class="row">
        <div class="col">
        <div class="card">
        <h1 class=" card-header" id="title">
    ${ele[i].name.common}
  </h1>
  <img src="${ele[i].flags.png}" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-title">Capital: ${ele[i].capital}</p>
    <p class="card-text">Region: ${ele[i].region}</p>
    <p class="card-text">Country Code ${ele[i].cca2}</p>
    <button class="btn btn-primary" onclick="getweather('${ele[i].name.common}')" >Click for Weather</button>
  </div>
</div>
  </div>
        </div>`;
    }
  });

function getweather(countryname) {
  const api = "df63ca2e684b2ef4a7bbe06625b42403";
  const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${api}`;

  fetch(weatherurl)
    .then((weat) => weat.json())
    .then((res) => {
      let weathercountry = res.name;

      if (weathercountry === countryname) {
        alert(
          `Weather of ${res.name}: ${res.main.temp_min}minimum: deg & C and ${res.main.temp_max}maximum:deg & C`
        );
      } else {
        alert("Enter proper country name");
      }
    })
    .catch((error) => {
      alert("Error fetching Data");
    });
}
