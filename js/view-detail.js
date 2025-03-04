import { renderCountryDetails } from "./dom-utils.js";

export const renderViewDetail = () => {
  //pobieranie parametrow z URL w celu wyswietlenia szczegolowych informacji o wybranym kraju
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get('country');
  if (!countryCode) {
    goBackToDashboard();
  }

  //pobranie szczegolowych danych 
  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(API_URL_DETAIL)
    .then(res => res.json())
    .then(([country]) => {
      //jesli parametr country nie jest podany lub dane nie są poprawnie pobrane wracamy do glownego widoku
      if (!country){
        goBackToDashboard();
      };
      country = {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name.common,
        nativeName: Object.values(country.name.nativeName)[0].official,
        code: country.cioc,
        region: country.region,
        subregion: country.subregion,
        flagUrl: country.flags.png,
        tld: country.tld[0],
        currencies: Object.values(country.currencies).map(currency => currency.name).join(', '),
        languages: Object.values(country.languages).join(', '),
        borders: country.borders,
      };

      //wyrenderowanie detali za pomocą powyszego obiektu country
      renderCountryDetails(country);
    });
};

// funkcja powracajaca do glownego widoku za pomoca url
const goBackToDashboard = () => { window.location.href = '/' };