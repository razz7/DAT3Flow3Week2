import React, { useState, useEffect } from "react";

const CountryTable = props => {
  const pageSize = 4;
  const { countries, labels } = props;
  const [countriesPrPage, setCountriesPrPage] = useState([]);
  const [pagenr, setPagenr] = useState(1);
  let pageTotal = countries.length / pageSize;

  const Buttons = () => {
    const buttons = [];
    for (let i = 1; i <= pageTotal; i++) {
      buttons.push(
        <button key={i} onClick={() => updatePage(i)}>
          {" "}
          {i}{" "}
        </button>
      );
    }
    return buttons;
  };

  useEffect(() => {
    let start = (pagenr - 1) * pageSize;
    let end = pagenr * pageSize;
    setCountriesPrPage(countries.slice(start, end));
  }, [countries, pagenr]);

  const updatePage = currentPage => {
    setPagenr(currentPage);
  };

  const values = array => {
    const amountValues = array.length - 1;
    return amountValues <= 1 ? "" : " (+" + amountValues + ")";
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countriesPrPage.map(country => (
            <tr key={country.topLevelDomain}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>
                {country.timezones[0]}
                {values(country.timezones)}
              </td>
              <td>
                {country.borders[0]}
                {values(country.borders)}
              </td>
              <td>
                {country.topLevelDomain[0]}
                {values(country.topLevelDomain)}
              </td>
              <td>
                {country.currencies[0]}
                {values(country.currencies)}
              </td>
              <td>
                {country.languages[0]}
                {values(country.languages)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{Buttons()}</p>
    </div>
  );
};
export default CountryTable;
