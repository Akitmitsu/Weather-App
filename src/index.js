//LOAD VARIABLE
const temps = document.querySelector("temps");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".localisation");
const input = document.getElementById("keyword");
const button = document.getElementById("button");
const lisbonne = document.getElementById("lisbonne");
const paris = document.getElementById("paris");
const latvia = document.getElementById("latvia");
const brasovTempIcon = document.getElementById("brasov-temp-icon");
const brasov = document.getElementById("brasov")
const form = document.getElementById("form");
const mainTemp = document.getElementById("mainTemp");
const mainCity = document.getElementById("mainCity");
const leicester = document.getElementById("leicester");
const geneva = document.getElementById("geneva");
const genevaTempIcon = document.getElementById("geneva-temp-icon");
const cologna = document.getElementById("cologna");
const colognaTempIcon = document.getElementById("cologna-temp-icon")
const berlin = document.getElementById("berlin");
const berlinTempIcon = document.getElementById("berlin-temp-icon");
const leicesterTempIcon = document.getElementById("leicester-temp-icon");
const mainImg = document.getElementById("mainImg");
const lisbonneTempIcon = document.getElementById("lisbonne-temp-icon");
const parisTempIcon = document.getElementById("paris-temp-icon");
const latviaTempIcon = document.getElementById("latvia-temp-icon");
const copenhagen = document.getElementById("copenhagen");
const copenhagenTempIcon = document.getElementById("copenhagen-temp-icon");
const istanbulTempIcon = document.getElementById("istanbul-temp-icon");
const apiKey = "2440b2da0a7b0534713e4dea164527e5"
const mainWeather = document.getElementById("main-weather");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metrics&appid={API key}";
let actualHour = new Date().getHours();



//FORM SUBMIT
form.addEventListener("submit", (event) => {
  event.preventDefault();
  /* console.log(event);
console.log(input.value); */
  searchWeather(input.value);
});

//FUCTION ACTIVATE ON INPUT SUBMIT
const searchWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&hourly&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const city = data.name;
      const temp = data.main.temp;
      mainTemp.innerText = `${Math.trunc(temp)}°`;
      mainCity.innerText = city;
      mainWeather.innerText = data.weather.description;
      if (actualHour >= 6 && actualHour < 21) {
        mainImg.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
    });
};

// LISBONNE
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=lisbonne&units=metric&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.main.temp;
    lisbonne.innerText = `${Math.trunc(temp)}°`;
    if (actualHour >= 6 && actualHour < 21) {
      lisbonneTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
    }
  });

//PARIS
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.main.temp;
    paris.innerText = `${Math.trunc(temp)}°`;
    if (actualHour >= 6 && actualHour < 21) {
      parisTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
    }
  });

//LATVIA
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=riga&units=metric&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.main.temp;
    latvia.innerText = `${Math.trunc(temp)}°`;
    if (actualHour >= 6 && actualHour < 21) {
      latviaTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
    }
  });

  //ISTANBUL
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      istanbul.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        istanbulTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
      console.log(data)
    });

     //COLOGNA
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=cologna&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      cologna.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        colognaTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
      console.log(data)
    });

    // leicester
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=lisbonne&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      leicester.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        leicesterTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
    });


    // GENEVA
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=lisbonne&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      geneva.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        genevaTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
    });

    function fetchWeather(){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=lisbonne&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
              const temp = data.main.temp;
              geneva.innerText = `${Math.trunc(temp)}°`;
              if (actualHour >= 6 && actualHour < 21) {
                genevaTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
              }
            });
    }


    // GENEVA
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=brasov&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      brasov.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        brasovTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
    });

    // BERLIN
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      berlin.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        berlinTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
      console.log(data);
    });

        // COPENHAGEN
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      copenhagen.innerText = `${Math.trunc(temp)}°`;
      if (actualHour >= 6 && actualHour < 21) {
        copenhagenTempIcon.src = `./ressources/icon/${data.weather[0].icon}.svg`;
      }
      console.log(data);
    });