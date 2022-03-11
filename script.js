//Global Variables
const countriesList = document.getElementById("countries");
const capital = document.querySelector("#capital");

const population = document.querySelector("#population");

const region = document.querySelector("#region");
const subregion = document.querySelector("#subregion");

const flag = document.querySelector("#flag-container img");

//contains the fetched data
let countries;

//event listener

countriesList.addEventListener("change", function (e) {
  displayCountryInfo(e.target.value);
});

//Getting data from Rest Countries API

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => initialise(data))
  .catch((err) => console.log(`Error: ${err}`));

function initialise(countriesData) {
  countries = countriesData;
  let options;
  countries.forEach(
    (country) =>
      (options += `<option value="${country.cca2}">${country.name.common}</option>`)
  );

  countriesList.innerHTML = options;
}

function displayCountryInfo(countryCode) {
  const countryData = countries.find((country) => country.cca2 === countryCode);
  console.log(countryData);
  capital.innerHTML = countryData.capital;
  population.innerHTML = countryData.population;

  region.innerHTML = countryData.region;
  subregion.innerHTML = countryData.subregion;
  countryCode.innerHTML = countryData.ccn3;
  flag.src = countryData.flags.png;
  flag.alt = `Flag of ${countryData.name}`;
}

displayCountryInfo("GR");
