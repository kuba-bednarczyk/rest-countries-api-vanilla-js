const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement('div');

  const labelElement = document.createElement('strong');
  labelElement.innerText = `${labelName}: `;
  const valueElement = document.createElement('span');
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);
  
  return infoElement;
};

const createCountryItemElement = country => {
  const countryElement = document.createElement("li");
  const countryNameElement = document.createElement('div');

  //show country name
  countryNameElement.innerText = country.name;
  countryElement.appendChild(countryNameElement);
  // show informations for the country box
  countryElement.appendChild(createInfoElement("population", country.population));
  countryElement.appendChild(countryNameElement);
  
  countryElement.appendChild(createInfoElement("region", country.region));
  countryElement.appendChild(countryNameElement);
  
  countryElement.appendChild(createInfoElement("capital", country.capital));
  countryElement.appendChild(countryNameElement);
  
  return countryElement;
};

const createListElement = (countries) => { 
  const ul = document.createElement('ul');
  countries.forEach(country => {
    ul.appendChild(createCountryItemElement(country));
  });
  return ul;
}

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector('#root');
  rootElement.appendChild(createListElement(countries));
};