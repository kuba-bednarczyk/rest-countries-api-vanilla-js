import { renderCountriesList } from "./dom-utils.js";

export const renderViewDashboard = () => {
  // pobranie wszystkich informacji o krajach
  const API_URL_ALL = 'https://restcountries.com/v3.1/all';

  let countries;
  let query = "";
  let region = "";
  
  fetch(API_URL_ALL)
    .then(res => res.json())
    .then(countriesRaw => {
      //dla kazdego kraju towrzony jest obiekt zawieracjacy kluczowe informacje
      countries = countriesRaw.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          code: country.cioc,
          region: country.region,
          flagUrl: country.flags.png,
        };
      });
      //funkcja renderujaca liste krajow
      renderCountriesList(countries);
    });
  
  //funkcja filtrujaca danych i wyrenderowanie wyniku
  const filterDataAndRenderCountriesList = () => {
    const filteredCountries = countries.filter(country => {
      return (
          country.name.toLowerCase().includes(query) &&
          (!region.length || country.region === region)
        );
    });
    renderCountriesList(filteredCountries);
  };
  

  //filtrowanie po zmianie inputu oraz po selecie regionu (kontynentu)
  document.querySelector('#query').addEventListener('input', e => {
    query = e.target.value.toLowerCase().trim();
    filterDataAndRenderCountriesList();
  })
  
  document.querySelector('#region').addEventListener('change', e => {
    region = e.target.value;
    filterDataAndRenderCountriesList();
  });
}